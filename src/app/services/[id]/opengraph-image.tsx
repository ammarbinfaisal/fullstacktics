import { ImageResponse } from 'next/og'
import servicesData from '@/app/services.json'

export const runtime = 'edge'

export const alt = 'Service Details'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { id: string } }) {
  const services = Object.entries(servicesData).map(([key, service]) => ({
    slug: key,
    ...service
  }))
  const service = services.find((service) => service.slug === params.id)

  if (!service) {
    return new ImageResponse(
      (
        <div
          style={{
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 48,
          }}
        >
          Service Not Found
        </div>
      ),
      { ...size }
    )
  }

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
        }}
      >
        {/* Title */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: '#000',
            marginBottom: 20,
            lineHeight: 1.1,
          }}
        >
          {service.title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 30,
            color: '#666',
            marginBottom: 40,
            lineHeight: 1.4,
            maxWidth: '80%',
          }}
        >
          {service.description}
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {service.features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              style={{
                background: '#f3f4f6',
                padding: '8px 16px',
                borderRadius: 9999,
                fontSize: 24,
                color: '#374151',
              }}
            >
              {feature}
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
              width: 48,
              height: 48,
              background: '#000',
              borderRadius: 9999,
            }}
          />
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: '#000',
            }}
          >
            Your Brand
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
