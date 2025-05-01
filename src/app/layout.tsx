import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fullstacktics - Comprehensive Fullstack Development Services",
  description: "End-to-end solutions for modern web applications with cutting-edge technologies.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="min-h-screen bg-[#1A1A2E] text-white">
          {/* Header */}
          <header className="container mx-auto py-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-purple-500" />
              <span className="font-bold text-xl">Fullstacktics</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#services" className="text-sm hover:text-purple-400 transition-colors">
                Services
              </Link>
              <Link href="#projects" className="text-sm hover:text-purple-400 transition-colors">
                Projects
              </Link>
              <Link href="#team" className="text-sm hover:text-purple-400 transition-colors">
                Team
              </Link>
              <Link href="#blog" className="text-sm hover:text-purple-400 transition-colors">
                Blog
              </Link>
              <Link href="#contact" className="text-sm hover:text-purple-400 transition-colors">
                Contact Us
              </Link>
            </nav>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Let&apos;s Talk
              <Zap className="ml-2 h-4 w-4" />
            </Button>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
