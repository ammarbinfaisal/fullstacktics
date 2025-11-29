import Link from "next/link"
import { Zap, ChevronRight, Cpu, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import CookieConsent from "@/components/cookie-consent"
import { getAllServices } from "@/lib/services-data"
import Cal from "./Cal"
import { Marquee } from "@/components/ui/marquee"

const techStack = [
  "Next.js", "React", "TypeScript", "Go", "Python", "PostgreSQL"
]

const stats = [
  { value: "10x", label: "Inference Speed (vLLM)", icon: "lightning" },
  { value: "99%", label: "Model Accuracy", icon: "target" },
  { value: "<1s", label: "API Response Time", icon: "clock" },
  { value: "100%", label: "Uptime Guarantee", icon: "check" },
]

export default function Home() {
  const services = getAllServices()

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10 mb-6">
            AI-Driven Development
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
            Crafting <span className="text-primary">Next-Gen Solutions</span> with AI & Full-Stack Expertise
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl">
            We build intelligent systems with <span className="text-primary font-medium">cutting-edge AI</span> and{" "}
            <span className="text-foreground font-medium">high-performance stacks</span>—optimized for speed and scale.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Cal>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Request a Quote
                <Zap className="ml-2 h-4 w-4" />
              </Button>
            </Cal>
            <Link href="/services" prefetch={true}>
              <Button size="lg" variant="outline" className="border-border hover:bg-accent">
                Explore Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            Automation that works when others fail | Code that scales
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-border bg-card hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <div className="mt-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <Marquee pauseOnHover className="[--duration:30s]">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground mx-2"
              >
                {tech}
              </span>
            ))}
          </Marquee>
        </div>

        <div className="flex justify-center mt-12">
          <Cal>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule a Technical Consultation
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Cal>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/10 mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">FULLSTACK DEVELOPMENT SERVICES</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs, from frontend to backend, and everything in
              between.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`} prefetch={true}>
                <Card className="h-full border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to transform your digital presence?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how our fullstack expertise can help you build innovative, high-performance solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Cal>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Us
                <Zap className="ml-2 h-4 w-4" />
              </Button>
            </Cal>
            <Button size="lg" variant="outline" className="border-border hover:bg-accent">
              View Our Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-foreground">Fullstacktics</span>
            </Link>
            <nav className="flex flex-wrap gap-6">
              <Link href="/services" prefetch={true} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/blog" prefetch={true} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link href="/inquiry" prefetch={true} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Fullstacktics. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Cookie Consent */}
      <CookieConsent />
    </>
  )
}
