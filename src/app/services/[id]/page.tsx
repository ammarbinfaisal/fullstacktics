import { notFound } from "next/navigation"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"
import { getServiceData } from "@/lib/services-data"
import TechBadge from "@/components/tech-badge"
import ProcessStep from "@/components/process-step"
import RelatedServiceCard from "@/components/related-service-card"
import Cal from "@/app/Cal"
import Image from "next/image"

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const serviceData = getServiceData(id)

  if (!serviceData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/10 border-none">
              {serviceData.category}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">{serviceData.title}</h1>
            <p className="text-xl text-muted-foreground">{serviceData.description}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Cal>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Cal>
              <Button variant="outline" className="border-border hover:bg-accent">
                View Case Studies
              </Button>
            </div>
          </div>
          <Card className="border-border bg-card">
            <CardContent className="pt-6">
              {serviceData.icon && (
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  {serviceData.lightIcon}
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4 text-foreground">Key Benefits</h3>
              <ul className="space-y-3">
                {serviceData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="border-border bg-card order-2 lg:order-1">
            <CardContent className="pt-6">
              <div className="aspect-video rounded-xl bg-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  {serviceData.imageUrl ? (
                    <Image
                      src={serviceData.imageUrl}
                      alt={serviceData.title}
                      width={96}
                      height={96}
                      className={`w-24 h-24 mx-auto rounded-lg ${serviceData.shortName === "Next.js" ? "invert dark:invert-0" : ""}`}
                    />
                  ) : (
                    <div className="text-6xl text-primary mb-4">{serviceData.icon}</div>
                  )}
                  <div className="text-sm text-muted-foreground mt-4">Service Overview</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-foreground">Overview</h2>
            <div className="prose prose-gray max-w-none">
              {serviceData.overview.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Card className="bg-secondary/30 border-border">
          <CardContent className="pt-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Key Features</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{serviceData.featuresDescription}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.features.map((feature, index) => (
                <Card key={index} className="border-border bg-card hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 text-primary shadow-sm">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Development Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Our Development Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{serviceData.processDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.process.map((step, index) => (
            <ProcessStep key={index} number={index + 1} title={step.title} description={step.description} />
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Card className="bg-secondary/30 border-border">
          <CardContent className="pt-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Technologies We Use</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{serviceData.technologiesDescription}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {serviceData.technologies.map((tech, index) => (
                <TechBadge key={index} name={tech} />
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">{serviceData.ctaText}</p>
            <Cal>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Us Today
              </Button>
            </Cal>
          </CardContent>
        </Card>
      </section>

      {/* Related Services Section */}
      {serviceData.relatedServices && serviceData.relatedServices.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Related Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore other services that complement {serviceData.title}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.relatedServices.map((service, index) => (
              <RelatedServiceCard
                key={index}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </section>
      )}

      <Footer />
      <CookieConsent />
    </div>
  )
}
