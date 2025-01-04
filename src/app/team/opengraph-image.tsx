import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Fullstacktics Expert Team'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  // Hardcoded team expertise areas for the OG image
  const expertiseAreas = [
    'Technical Architecture',
    'Workflow Automation',
    'Growth Strategy',
    'CRM Integration',
    'Data Automation',
    'PPC Management'
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
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: 80,
          fontFamily: 'Inter',
        }}
      >
        {/* Main Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            background: 'linear-gradient(to right, #1e40af, #3b82f6)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 24,
          }}
        >
          Meet Our Expert Team
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: '#4b5563',
            marginBottom: 48,
            maxWidth: '80%',
            lineHeight: 1.4,
          }}
        >
          Combining expertise in automation, growth, and data to drive business success
        </div>

        {/* Expertise Container using Flexbox */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            width: '100%',
          }}
        >
          {expertiseAreas.map((expertise, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: 24,
                color: '#374151',
                width: 'calc(50% - 8px)', // Subtracting half of the gap to maintain two columns
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#3b82f6',
                }}
              />
              {expertise}
            </div>
          ))}
        </div>

        {/* Brand Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: '#1e40af',
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