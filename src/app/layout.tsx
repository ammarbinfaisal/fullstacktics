import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

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
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
