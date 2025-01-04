import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Transform Your Business with Intelligent Automation'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const stats = [
    { value: '80%', label: 'Manual Tasks Reduced' },
    { value: '$12k+', label: 'Yearly Tool Savings' },
    { value: '14 Days', label: 'Implementation' },
    { value: '100+', label: 'Clients Automated' },
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
          backgroundImage: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.05), rgba(59, 130, 246, 0.02), transparent)',
        }}
      >
        {/* Main Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
            marginBottom: 48,
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
            <div style={{ display: 'flex' }}>
              Transform Your Business with{' '}
              <span
                style={{
                  background: 'linear-gradient(to right, #3b82f6, rgba(59, 130, 246, 0.8))',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Intelligent Automation
              </span>
            </div>
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
            Save 40+ hours weekly with powerful automation workflows
          </div>
        </div>

        {/* Stats Container */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: 900,
            gap: 24,
            justifyContent: 'center',
          }}
        >
          {stats.map((stat, index) => (
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
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: 36,
                  fontWeight: 700,
                  color: '#3b82f6',
                  marginBottom: 8,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 16,
                  color: '#6b7280',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Logo/Brand */}
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
              color: '#111827',
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