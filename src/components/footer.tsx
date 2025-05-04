"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Zap, Mail, MapPin, Github, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="bg-[#0F0F1A] border-t border-gray-800 pt-16 pb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-purple-500" />
              <span className="font-bold text-xl">Fullstacktics</span>
            </Link>
            <p className="text-gray-400">
              End-to-end solutions for modern web applications with cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/fullstacktics" className="text-gray-400 hover:text-purple-400">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/fullstacktics"
                className="text-gray-400 hover:text-purple-400">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/nextjs" className="text-gray-400 hover:text-purple-400">
                  NextJS Development
                </Link>
              </li>
              <li>
                <Link href="/services/laravel" className="text-gray-400 hover:text-purple-400">
                  Laravel Development
                </Link>
              </li>
              <li>
                <Link href="/services/golang" className="text-gray-400 hover:text-purple-400">
                  Golang Development
                </Link>
              </li>
              <li>
                <Link href="/services/react" className="text-gray-400 hover:text-purple-400">
                  ReactJS Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/integrations" className="text-gray-400 hover:text-purple-400">
                  External Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-purple-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-purple-400">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-purple-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-purple-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-purple-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                <span className="text-gray-400">ammar@fullstacktics.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                <span className="text-gray-400">New Delhi, 110025</span>
              </li>
              <li>
                <Link href="/project-inquiry" className="inline-block mt-3 text-white bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 px-4 py-2 rounded-md">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {currentYear} Fullstacktics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-purple-400 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-purple-400 text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-purple-400 text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
