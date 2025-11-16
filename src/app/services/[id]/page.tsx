"use client"

import { useEffect } from "react"
import { notFound } from "next/navigation"
import Script from "next/script"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import { getServiceData } from "@/lib/services-data"
import TechBadge from "@/components/tech-badge"
import ProcessStep from "@/components/process-step"
import RelatedServiceCard from "@/components/related-service-card"
import Cal from "@/app/Cal"
import Image from "next/image"

export default function ServicePage({ params }: { params: { id: string } }) {
  // Get service data based on the route parameter
  const serviceData = getServiceData(params.id)

  // If service data doesn't exist, show 404
  if (!serviceData) {
    notFound()
  }

  // Animation controls
  const controls = {
    hero: useAnimation(),
    overview: useAnimation(),
    features: useAnimation(),
    process: useAnimation(),
    technologies: useAnimation(),
    cta: useAnimation(),
    related: useAnimation(),
  }

  // Intersection observers
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [overviewRef, overviewInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [technologiesRef, technologiesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [relatedRef, relatedInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Trigger animations when sections come into view
  useEffect(() => {
    if (heroInView) controls.hero.start("visible")
    if (overviewInView) controls.overview.start("visible")
    if (featuresInView) controls.features.start("visible")
    if (processInView) controls.process.start("visible")
    if (technologiesInView) controls.technologies.start("visible")
    if (ctaInView) controls.cta.start("visible")
    if (relatedInView) controls.related.start("visible")
  }, [heroInView, overviewInView, featuresInView, processInView, technologiesInView, ctaInView, relatedInView, controls.hero, controls.overview, controls.features, controls.process, controls.technologies, controls.cta, controls.related])

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

  const itemVariant = {
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

  // JSON-LD structured data
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceData.title,
    description: serviceData.description,
    provider: {
      '@type': 'Organization',
      name: 'Fullstacktics',
      url: 'https://www.fullstacktics.com'
    },
    areaServed: 'Global',
    offers: {
      '@type': 'Offer',
      url: `https://www.fullstacktics.com/services/${serviceData.id}`,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.fullstacktics.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://www.fullstacktics.com/services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: serviceData.title,
        item: `https://www.fullstacktics.com/services/${serviceData.id}`
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Script
        id={`ld-service-${serviceData.id}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id={`ld-breadcrumb-${serviceData.id}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={heroRef}>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={controls.hero}
          variants={fadeIn}
        >
          <div className="space-y-6">
            <Badge className="bg-yellow-100 text-yellow-700 border border-yellow-200">
              {serviceData.category}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">{serviceData.title}</h1>
            <p className="text-xl text-gray-600">{serviceData.description}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Cal>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Cal>
              <Button variant="outline" className="border-gray-300 text-gray-800 hover:bg-gray-100">
                View Case Studies
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-gray-50 border border-gray-200 rounded-3xl p-8 overflow-hidden">

              <div className="relative">
                {serviceData.icon && (
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                    {serviceData.lightIcon}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Key Benefits</h3>
                <ul className="space-y-3">
                  {serviceData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={overviewRef}>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={controls.overview}
          variants={fadeIn}
        >
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 order-2 lg:order-1">
            <div className="aspect-video rounded-xl bg-white flex items-center justify-center">
              {/* This would be an image or video in a real implementation */}
              <div className="text-center">
                <div className="text-6xl text-yellow-400 mb-4">
                  {
                    serviceData.imageUrl ?
                      <Image
                        src={serviceData.imageUrl}
                        alt={serviceData.title}
                        width={32}
                        height={32}
                        className={`w-24 h-24 ${serviceData.imageUrl ? "rounded-lg" : "rounded-full"} transition-transform group-hover:scale-105 ${serviceData.shortName === "Next.js" ? "invert" : ""}`}
                      /> :
                      serviceData.icon
                  }
                </div>
                <div className="text-sm text-gray-500">Service Overview</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
            <div className="max-w-none">
              {serviceData.overview.map((paragraph, index) => (
                <p key={index} className="text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 rounded-3xl" ref={featuresRef}>
        <motion.div className="text-center mb-16" initial="hidden" animate={controls.features} variants={fadeIn}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Key Features</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{serviceData.featuresDescription}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls.features}
          variants={staggerContainer}
        >
          {serviceData.features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              variants={itemVariant}
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={processRef}>
        <motion.div className="text-center mb-16" initial="hidden" animate={controls.process} variants={fadeIn}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Development Process</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{serviceData.processDescription}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={controls.process}
          variants={staggerContainer}
        >
          {serviceData.process.map((step, index) => (
            <motion.div key={index} variants={itemVariant}>
              <ProcessStep number={index + 1} title={step.title} description={step.description} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white" ref={technologiesRef}>
        <motion.div className="text-center mb-16" initial="hidden" animate={controls.technologies} variants={fadeIn}>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Technologies We Use</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">{serviceData.technologiesDescription}</p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          animate={controls.technologies}
          variants={staggerContainer}
        >
          {serviceData.technologies.map((tech, index) => (
            <motion.div key={index} variants={itemVariant}>
              <TechBadge name={tech} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={ctaRef}>
        <motion.div
          className="bg-white border border-gray-200 p-10 rounded-3xl text-center shadow-sm"
          initial="hidden"
          animate={controls.cta}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">{serviceData.ctaText}</p>
          <Cal>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 rounded-full text-lg">
              Contact Us Today
            </Button>
          </Cal>
        </motion.div>
      </section>

      {/* Related Services Section */}
      {serviceData.relatedServices && serviceData.relatedServices.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={relatedRef}>
          <motion.div className="text-center mb-16" initial="hidden" animate={controls.related} variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-4">Related Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore other services that complement {serviceData.title}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={controls.related}
            variants={staggerContainer}
          >
            {serviceData.relatedServices.map((service, index) => (
              <motion.div key={index} variants={itemVariant}>
                <RelatedServiceCard
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Footer */}
      <Footer />

      {/* Cookie Consent */}
      <CookieConsent />
    </div>
  )
}
