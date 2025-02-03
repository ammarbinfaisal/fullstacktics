import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Fullstacktics'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  const expertiseAreas = [
    'Next.js Performance',
    'React Optimization',
    'Edge Computing',
    'Prisma & Supabase',
    'Type-Safe APIs',
    'Real-time Systems'
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
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: '#3b82f6',
            }}
          >
            Technical Excellence
          </div>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            background: 'linear-gradient(to right, #3b82f6, #9333ea)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 24,
          }}
        >
          Performance-Obsessed Engineers
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
          Building lightning-fast SaaS applications with deep technical expertise
        </div>

        {/* Expertise Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 24,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              gap: 24,
            }}
          >
            {expertiseAreas.slice(0, 3).map((expertise, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontSize: 24,
                  background: 'rgba(59, 130, 246, 0.05)',
                  padding: '16px 24px',
                  borderRadius: 12,
                  border: '1px solid rgba(59, 130, 246, 0.1)',
                  color: '#374151',
                  flex: 1,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'linear-gradient(to right, #3b82f6, #9333ea)',
                  }}
                />
                {expertise}
              </div>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              gap: 24,
            }}
          >
            {expertiseAreas.slice(3).map((expertise, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontSize: 24,
                  background: 'rgba(59, 130, 246, 0.05)',
                  padding: '16px 24px',
                  borderRadius: 12,
                  border: '1px solid rgba(59, 130, 246, 0.1)',
                  color: '#374151',
                  flex: 1,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'linear-gradient(to right, #3b82f6, #9333ea)',
                  }}
                />
                {expertise}
              </div>
            ))}
          </div>
        </div>

        {/* Brand Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 32,
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