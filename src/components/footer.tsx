"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Zap, Mail, MapPin, Github, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="bg-black text-white border-t border-gray-800 pt-12 pb-6 mt-16"
      initial={false}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-yellow-400" />
              <span className="font-bold text-xl">Fullstacktics</span>
            </Link>
            <p className="text-gray-400">
              End-to-end solutions for modern web applications with cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/fullstacktics" className="text-gray-400 hover:text-yellow-400">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/fullstacktics"
                className="text-gray-400 hover:text-yellow-400">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/automation" className="text-gray-400 hover:text-yellow-400">
                  Fullstack Apps & n8n Pipelines
                </Link>
              </li>
              <li>
                <Link href="/services/ai-content" className="text-gray-400 hover:text-yellow-400">
                  AI Content Agents
                </Link>
              </li>
              <li>
                <Link href="/services/ai-social" className="text-gray-400 hover:text-yellow-400">
                  AI Social Media Agents
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-yellow-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/inquiry" className="text-gray-400 hover:text-yellow-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                <span className="text-gray-400">ammar@fullstacktics.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                <span className="text-gray-400">New Delhi, 110025</span>
              </li>
              <li>
                <Link href="/inquiry" className="inline-block mt-3 text-black bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md font-semibold">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {currentYear} Fullstacktics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0" />
        </div>
      </div>
    </motion.footer>
  )
}
