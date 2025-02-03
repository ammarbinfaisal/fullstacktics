import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Fullstacktics - Software Development Agency'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const performanceMetrics = [
    { value: '<1s', label: 'First Paint' },
    { value: '100', label: 'Performance Score' },
    { value: '0', label: 'Layout Shift' },
    { value: '<100ms', label: 'API Response' },
  ]

  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 80,
          backgroundImage: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), transparent)',
        }}
      >
        <div className="fixed inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent -z-10">
          <div className="fixed inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
        </div>
        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(59, 130, 246, 0.1)',
            padding: '8px 16px',
            borderRadius: 20,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: '#3b82f6',
            }}
          >
            High-Performance SaaS Development
          </div>
        </div>

        {/* Main Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
            marginBottom: 48,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 700,
              textAlign: 'center',
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Building
            <span
              style={{
                background: 'linear-gradient(to right, #3b82f6, #9333ea)',
                backgroundClip: 'text',
                color: 'transparent',
                marginLeft: 16,
                marginRight: 16,
              }}
            >
              Lightning-Fast
            </span>
            SaaS
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 32,
              color: '#6b7280',
              textAlign: 'center',
              maxWidth: '80%',
            }}
          >
            Next.js expertise with obsessive performance optimization
          </div>
        </div>

        {/* Performance Metrics */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: 900,
            gap: 24,
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {performanceMetrics.map((metric, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.5)',
                borderRadius: 12,
                padding: 24,
                flex: 1,
                border: '1px solid rgba(59, 130, 246, 0.1)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: 36,
                  fontWeight: 700,
                  background: 'linear-gradient(to right, #3b82f6, #9333ea)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  marginBottom: 8,
                }}
              >
                {metric.value}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 16,
                  color: '#6b7280',
                }}
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Brand */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              fontWeight: 600,
              background: 'linear-gradient(to right, #3b82f6, #9333ea)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Fullstacktics
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}