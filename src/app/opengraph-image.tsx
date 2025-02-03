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

  // Create a grid pattern background
  const gridPattern = `
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.1)" stroke-width="1"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  `

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
        {/* Tech Pattern Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.2,
          }}
          dangerouslySetInnerHTML={{ __html: gridPattern }}
        />

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
            PerformantSaaS
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}