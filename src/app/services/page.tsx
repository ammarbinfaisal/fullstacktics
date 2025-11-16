"use client"

import { useEffect } from "react"
import Link from "next/link"
import Script from "next/script"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { getAllServices } from "@/lib/services-data"
import Cal from "@/app/Cal"
import Image from "next/image"

export default function ServicesPage() {
  // Get all services
  const services = getAllServices()

  // Animation controls
  const controls = {
    hero: useAnimation(),
    services: useAnimation(),
    cta: useAnimation(),
  }

  // Intersection observers
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Trigger animations when sections come into view
  useEffect(() => {
    if (heroInView) controls.hero.start("visible")
    if (servicesInView) controls.services.start("visible")
    if (ctaInView) controls.cta.start("visible")
  }, [heroInView, servicesInView, ctaInView, controls.hero, controls.services, controls.cta])

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: 'https://www.fullstacktics.com/services',
    name: 'Services – Fullstacktics',
    description:
      'Services focused on fullstack Next.js apps with n8n/Make.com pipelines, AI content agents, and AI-powered social media management.',
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Script
        id="ld-webpage-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative" ref={heroRef}>
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          animate={controls.hero}
          variants={fadeIn}
        >
          <Badge className="bg-yellow-100 text-yellow-700 border border-yellow-200 mb-4">Our Services</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Next.js Apps, Automation Pipelines & AI Agents
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We build fullstack Next.js products wired into n8n/Make.com workflows, plus AI agents for content and social media that stay on-brand.
          </p>
          <Cal>
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 rounded-full text-lg"
            >
              Get a Quote
            </Button>
          </Cal>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={servicesRef}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls.services}
          variants={staggerContainer}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={serviceCardVariants}>
              <Link href={`/services/${service.id}`} className="block h-full">
                <div className={`bg-white border rounded-xl p-8 h-full group hover:border-yellow-400/60 transition-colors relative ${
                  service.id === 'automation' 
                    ? 'border-yellow-400/80 shadow-sm' 
                    : 'border-gray-200'
                }`}>
                  {service.id === 'automation' && (
                    <div className="absolute top-4 right-4 flex gap-2">
                      <div className="relative w-12 h-8 bg-white rounded-md p-1 border border-gray-200 shadow-sm">
                        <Image src="/make-logo.svg" alt="Make.com" fill className="object-contain p-0.5" />
                      </div>
                      <div className="relative w-12 h-8 bg-white rounded-md p-1 border border-gray-200 shadow-sm">
                        <Image src="/n8n-logo.svg" alt="n8n" fill className="object-contain p-0.5" />
                      </div>
                    </div>
                  )}
                  <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-6 bg-gray-50 border border-gray-200">
                    {
                      service.imageUrl ?
                        <Image
                          src={service.imageUrl}
                          alt={service.title}
                          width={32}
                          height={32}
                          className={`w-24 h-24 ${service.imageUrl ? "rounded-lg" : "rounded-full"} transition-transform group-hover:scale-105 ${service.shortName ==="Next.js" ? "invert" : ""}`}
                        /> :
                        service.lightIcon
                    }
                  </div>
                  <Badge className={`border-none mb-4 ${
                    service.id === 'automation' 
                      ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' 
                      : 'bg-gray-100 text-gray-700 border border-gray-200'
                  }`}>
                    {service.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center font-medium text-yellow-500 group-hover:underline">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={ctaRef}>
        <motion.div
          className="bg-black p-12 rounded-3xl border border-gray-800 text-center text-white"
          initial="hidden"
          animate={controls.cta}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let our team of experts help you create a cutting-edge solution tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Cal>
              <Button
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-6 rounded-full text-lg"
              >
                Contact Us Today
              </Button>
            </Cal>
            <Link href="/case-studies">
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-8 py-6 rounded-full text-lg"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Cookie Consent */}
      <CookieConsent />
    </div>
  )
}
