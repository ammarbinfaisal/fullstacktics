"use client"

import { useEffect } from "react"
import Link from "next/link"
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
  }, [heroInView, servicesInView, ctaInView])

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A2E] to-[#0F0F1A] text-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative" ref={heroRef}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-teal-400 rounded-3xl opacity-20 blur-3xl"></div>
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          animate={controls.hero}
          variants={fadeIn}
        >
          <Badge className="bg-purple-900/50 text-purple-400 hover:bg-purple-900/50 mb-4">Our Services</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Comprehensive Fullstack Development Services</h1>
          <p className="text-xl text-gray-300 mb-8">
            End-to-end solutions for modern web applications with cutting-edge technologies.
          </p>
          <Cal>
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg font-medium"
            >
              Get a Quote
            </Button>
          </Cal>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={servicesRef}>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls.services}
          variants={staggerContainer}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={serviceCardVariants}>
              <Link href={`/services/${service.id}`} className="block h-full">
                <div className="bg-[#151528] border border-gray-800 rounded-xl p-8 h-full group hover:border-purple-600/50 transition-colors">
                  <div className="w-32 h-32 rounded-lg flex items-center justify-center mb-6">
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
                  <Badge className="bg-purple-900/50 text-purple-400 hover:bg-purple-900/50 border-none mb-4">
                    {service.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div className="flex items-center font-medium group-hover:underline bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
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
          className="bg-gradient-to-br from-purple-900/30 to-teal-900/30 p-12 rounded-3xl border border-gray-800 text-center"
          initial="hidden"
          animate={controls.cta}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let our team of experts help you create a cutting-edge solution tailored to your needs.
          </p>
          <Cal>
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg"
            >
              Contact Us Today
            </Button>
          </Cal>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Cookie Consent */}
      <CookieConsent />
    </div>
  )
}
