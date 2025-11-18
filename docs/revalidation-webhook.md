# On-Demand Revalidation Webhook

The `/api/revalidate` route lets our CMS publish updates instantly by purging the exact pillar/cluster caches affected by a content change.

## 1. Configure the Secret

Add a strong random string to your environment (same value for Vercel + local development):

```
REVALIDATE_SECRET="replace_with_random_string"
```

## 2. Endpoint & Payload

- **URL:** `POST https://<your-domain>/api/revalidate`
- **Headers:** `Content-Type: application/json`
- **Body:**

```jsonc
{
  "secret": "replace_with_random_string",
  "scope": "pillar",      // "all" | "pillar" | "cluster" (defaults to "all")
  "pillar": "waterproofing", // required for pillar/cluster scopes
  "cluster": "liquid-vs-torch-on" // required only when scope === "cluster"
}
```

### Scopes

| Scope     | Required Fields           | Description                                                   |
|-----------|---------------------------|---------------------------------------------------------------|
| `all`     | `secret`                  | Revalidates every pillar + cluster + `/sitemap.xml`.          |
| `pillar`  | `secret`, `pillar`        | Revalidates the pillar page, all of its cluster pages, and tags. |
| `cluster` | `secret`, `pillar`, `cluster` | Revalidates just the specified cluster page/tag.             |

## 3. Finding Slugs

Slugs must match the entries in `src/lib/pillars.ts`.

## 4. Sample Requests

### Revalidate a single cluster

```bash
curl -X POST https://maverickpainting.co.za/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{
    "secret": "replace_with_random_string",
    "scope": "cluster",
    "pillar": "waterproofing",
    "cluster": "liquid-vs-torch-on"
  }'
```

### Revalidate an entire pillar

```bash
curl -X POST https://maverickpainting.co.za/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{
    "secret": "replace_with_random_string",
    "scope": "pillar",
    "pillar": "industrial"
  }'
```

### Revalidate everything (use sparingly)

```bash
curl -X POST https://maverickpainting.co.za/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{
    "secret": "replace_with_random_string",
    "scope": "all"
  }'
```

## 5. CMS Webhook Mapping

| CMS Event                        | Recommended Scope | Payload Notes                                   |
|---------------------------------|-------------------|-------------------------------------------------|
| Update to a shared pillar intro | `pillar`          | Set `pillar` to the affected pillar slug.       |
| Update to a single cluster page | `cluster`         | Include both `pillar` and `cluster` slugs.      |
| Bulk migration / taxonomy change| `all`             | Use only for major rollouts due to cache churn. |

## 6. Response

Successful calls return `200` with a JSON summary:

```json
{
  "revalidated": [
    {
      "pillar": "waterproofing",
      "paths": ["/blog/waterproofing", "/blog/waterproofing"],
      "clusters": [
        { "slug": "liquid-vs-torch-on", "path": "/blog/waterproofing/liquid-vs-torch-on" }
      ]
    }
  ]
}
```

Errors return `4xx/5xx` with an `error` message (invalid secret, unknown slug, malformed JSON, etc.).

