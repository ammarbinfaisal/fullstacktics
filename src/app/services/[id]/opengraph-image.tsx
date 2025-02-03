import { ImageResponse } from 'next/og'
import servicesData from '@/app/services.json'
export const runtime = 'edge'

export const alt = 'Fullstacktics - Software Development Team'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'


// Feature badge component
const FeatureBadge = ({ text }: { text: string }) => (
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
      {text}
    </div>
  </div>
)

export default async function Image({
  params,
}: {
  params: { id: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  // Get services from your JSON data
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
            color: '#374151',
          }}
        >
          Service Not Found
        </div>
      ),
      { ...size }
    )
  }

  // Extract features from either technicalDetails or main features
  const features = Object.values(service.technicalDetails)

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
          backgroundImage: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), transparent)',
        }}
      >
        {/* Background Pattern */}
        <div className="fixed inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent -z-10">
          <div className="fixed inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
        </div>

        {/* Badge */}
        <FeatureBadge text="High-Performance Solution" />

        {/* Title */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            background: 'linear-gradient(to right, #3b82f6, #9333ea)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
            lineHeight: 1.1,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {service.title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 30,
            color: '#4b5563',
            marginBottom: 40,
            lineHeight: 1.4,
            maxWidth: '80%',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {service.description}
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(59, 130, 246, 0.05)',
                padding: '12px 24px',
                borderRadius: 12,
                fontSize: 24,
                color: '#374151',
                border: '1px solid rgba(59, 130, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
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