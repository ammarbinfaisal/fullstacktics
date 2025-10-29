import { ImageResponse } from 'next/og'

export const alt = 'Fullstacktics - Services'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const serviceCategories = [
    'Web Development',
    'AI Integration',
    'Cloud Solutions',
    'Performance Optimization',
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
          backgroundImage: 'linear-gradient(to bottom, rgba(147, 51, 234, 0.05), rgba(20, 184, 166, 0.05), transparent)',
        }}
      >

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(147, 51, 234, 0.1)',
            padding: '8px 16px',
            borderRadius: 20,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: '#9333ea',
            }}
          >
            Fullstack Development
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
            Our
            <span
              style={{
                background: 'linear-gradient(to right, #9333ea, #14b8a6)',
                backgroundClip: 'text',
                color: 'transparent',
                marginLeft: 16,
                marginRight: 16,
              }}
            >
              Comprehensive
            </span>
            Services
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
            End-to-end solutions for modern web applications
          </div>
        </div>

        {/* Service Categories */}
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
          {serviceCategories.map((category, index) => (
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
                border: '1px solid rgba(147, 51, 234, 0.1)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: 24,
                  fontWeight: 700,
                  background: 'linear-gradient(to right, #9333ea, #14b8a6)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  marginBottom: 8,
                  textAlign: 'center',
                }}
              >
                {category}
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
              background: 'linear-gradient(to right, #9333ea, #14b8a6)',
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
