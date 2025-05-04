"use client"

import { useEffect } from "react"
import { notFound } from "next/navigation"
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
  }, [heroInView, overviewInView, featuresInView, processInView, technologiesInView, ctaInView, relatedInView])

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A2E] to-[#0F0F1A] text-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative" ref={heroRef}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-teal-400 rounded-3xl opacity-20 blur-3xl"></div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={controls.hero}
          variants={fadeIn}
        >
          <div className="space-y-6">
            <Badge className="bg-purple-900/50 text-purple-400 hover:bg-purple-900/50 border-none">
              {serviceData.category}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">{serviceData.title}</h1>
            <p className="text-xl text-gray-300">{serviceData.description}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Cal>
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Cal>
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                View Case Studies
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-teal-400 rounded-3xl opacity-20 blur-3xl"></div>
            <div className="relative bg-[#151528] border border-gray-800 rounded-3xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-400/10 rounded-full -ml-12 -mb-12"></div>

              <div className="relative">
                {serviceData.icon && (
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-teal-400 rounded-2xl opacity-30 flex items-center justify-center mb-6">
                    {serviceData.lightIcon}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {serviceData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-400 mr-3 mt-0.5" />
                      <span>{benefit}</span>
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
          <div className="bg-[#151528] border border-gray-800 rounded-3xl p-8 order-2 lg:order-1">
            <div className="aspect-video rounded-xl bg-[#1A1A2E] flex items-center justify-center">
              {/* This would be an image or video in a real implementation */}
              <div className="text-center">
                <div className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400 mb-4">
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
                <div className="text-sm text-gray-400">Service Overview</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl font-bold">Overview</h2>
            <div className="prose prose-invert max-w-none">
              {serviceData.overview.map((paragraph, index) => (
                <p key={index} className="text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#151528] rounded-3xl" ref={featuresRef}>
        <motion.div className="text-center mb-16" initial="hidden" animate={controls.features} variants={fadeIn}>
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{serviceData.featuresDescription}</p>
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
              className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6"
              variants={itemVariant}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(147, 51, 234, 0.2)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-teal-400 opacity-30 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={processRef}>
        <motion.div className="text-center mb-16" initial="hidden" animate={controls.process} variants={fadeIn}>
          <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{serviceData.processDescription}</p>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#151528] rounded-3xl" ref={technologiesRef}>
        <motion.div className="text-center mb-16" initial="hidden" animate={controls.technologies} variants={fadeIn}>
          <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{serviceData.technologiesDescription}</p>
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
          className="bg-gradient-to-br from-purple-900/30 to-teal-900/30 p-12 rounded-3xl border border-gray-800 text-center"
          initial="hidden"
          animate={controls.cta}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">{serviceData.ctaText}</p>
          <Cal>
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg"
            >
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
