import { NextResponse, type NextRequest } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import {
  getClusterBySlugs,
  getPillarBySlug,
  getPillars,
} from "@/lib/pillars";
import { clusterTag, pillarTag, GLOBAL_SITEMAP_TAG } from "@/lib/cache-tags";

type Scope = "all" | "pillar" | "cluster";

type RevalidatePayload = {
  secret?: string;
  scope?: Scope;
  pillar?: string;
  cluster?: string;
};

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET;

export async function POST(request: NextRequest) {
  if (!REVALIDATE_SECRET) {
    return NextResponse.json(
      { error: "Revalidation secret is not configured" },
      { status: 500 }
    );
  }

  let payload: RevalidatePayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  if (payload.secret !== REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const scope: Scope = payload.scope ?? "all";

  try {
    if (scope === "all") {
      const results = await revalidateEntireSite();
      return NextResponse.json({ revalidated: results }, { status: 200 });
    }

    if (scope === "pillar") {
      if (!payload.pillar) {
        return NextResponse.json(
          { error: "Missing 'pillar' slug" },
          { status: 400 }
        );
      }
      const result = await revalidatePillar(payload.pillar);
      return NextResponse.json({ revalidated: [result] }, { status: 200 });
    }

    if (scope === "cluster") {
      if (!payload.pillar || !payload.cluster) {
        return NextResponse.json(
          { error: "Missing 'pillar' or 'cluster' slug" },
          { status: 400 }
        );
      }

      const result = await revalidateCluster(payload.pillar, payload.cluster);
      return NextResponse.json({ revalidated: [result] }, { status: 200 });
    }

    return NextResponse.json({ error: "Unknown scope" }, { status: 400 });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to trigger revalidation",
      },
      { status: 500 }
    );
  }
}

async function revalidateEntireSite() {
  const results = await Promise.all(getPillars().map((pillar) => revalidatePillar(pillar.slug)));
  await revalidateTag(GLOBAL_SITEMAP_TAG, 'default');
  revalidatePath("/sitemap.xml");
  return results;
}

async function revalidatePillar(pillarSlug: string) {
  const pillar = getPillarBySlug(pillarSlug);
  if (!pillar) {
    throw new Error(`Unknown pillar slug: ${pillarSlug}`);
  }

  const paths = [pillar.metadata.path ?? `/blog/${pillar.slug}`, `/blog/${pillar.slug}`];
  paths.forEach((path) => revalidatePath(path));
  await revalidateTag(pillarTag(pillar.slug), 'default');

  await Promise.all(pillar.clusters.map(async (cluster) => {
    if (cluster.metadata.path) {
      revalidatePath(cluster.metadata.path);
    }
    await revalidateTag(clusterTag(pillar.slug, cluster.slug), 'default');
  }));

  return {
    pillar: pillar.slug,
    paths,
    clusters: pillar.clusters.map((cluster) => ({
      slug: cluster.slug,
      path: cluster.metadata.path,
    })),
  };
}

async function revalidateCluster(pillarSlug: string, clusterSlug: string) {
  const cluster = getClusterBySlugs(pillarSlug, clusterSlug);
  if (!cluster) {
    throw new Error(
      `Unknown cluster '${clusterSlug}' for pillar '${pillarSlug}'`
    );
  }

  if (cluster.metadata.path) {
    revalidatePath(cluster.metadata.path);
  }
  await revalidateTag(clusterTag(pillarSlug, clusterSlug), 'default');

  return {
    pillar: pillarSlug,
    cluster: clusterSlug,
    path: cluster.metadata.path,
  };
}

