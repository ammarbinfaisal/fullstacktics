import Link from "next/link"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { getAllServices } from "@/lib/services-data"
import Cal from "@/app/Cal"
import Image from "next/image"

export default function ServicesPage() {
  const services = getAllServices()

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10 mb-4">Our Services</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">Automation, Data & SaaS Experts</h1>
          <p className="text-xl text-muted-foreground mb-8">
            We build bots that bypass detection, scrapers that scale, and SaaS products that ship.
          </p>
          <Cal>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get a Quote
            </Button>
          </Cal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`} prefetch={true}>
              <Card className="h-full border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-4">
                    {service.imageUrl ? (
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        width={64}
                        height={64}
                        className={`w-16 h-16 rounded-lg ${service.shortName === "Next.js" ? "invert dark:invert-0" : ""}`}
                      />
                    ) : (
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {service.lightIcon}
                      </div>
                    )}
                  </div>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/10 border-none mb-3">
                    {service.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <span className="inline-flex items-center font-medium text-primary group-hover:underline">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Let our team of experts help you create a cutting-edge solution tailored to your needs.
            </p>
            <Cal>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Us Today
              </Button>
            </Cal>
          </CardContent>
        </Card>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  )
}
