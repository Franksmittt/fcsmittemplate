import { ImageResponse } from 'next/og'
import { getClusterBySlugs } from '@/lib/pillars'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export const headers = {
  'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
}

export default async function Image({ params }: { params: { pillar: string; cluster: string } }) {
  const cluster = getClusterBySlugs(params.pillar, params.cluster)
  const title = cluster?.title || 'Maverick Painting Technical Guide'
  const category = params.pillar.replace('-', ' ').toUpperCase()

  return new ImageResponse(
    (
      <div
        style={{
          background: '#171716', // Primary Dark
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '16px', background: '#5AD5E2' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ fontSize: 32, color: '#A9D834', letterSpacing: '0.1em', fontWeight: 700, textTransform: 'uppercase' }}>
            {category} GUIDE
          </div>
          <div style={{ fontSize: 72, color: 'white', fontWeight: 900, lineHeight: 1.1, textTransform: 'uppercase' }}>
            {title}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '60px', height: '60px', background: '#A9D834', borderRadius: '50%' }} />
          <div style={{ fontSize: 30, color: 'gray', fontWeight: 600 }}>MAVERICK PAINTING</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
