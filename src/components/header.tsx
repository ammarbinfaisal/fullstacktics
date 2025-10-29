"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Zap, Menu, X } from "lucide-react"
import ProjectInquiryModal from "@/components/ProjectInquiryModal"

interface HeaderProps {
  activePage?: string
}

export default function Header({ activePage }: HeaderProps) {
  const [inquiryFormOpen, setInquiryFormOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Close the inquiry form when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && inquiryFormOpen) {
        setInquiryFormOpen(false)
      }
    }
    
    window.addEventListener("keydown", handleEscKey)
    return () => window.removeEventListener("keydown", handleEscKey)
  }, [inquiryFormOpen])
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (inquiryFormOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [inquiryFormOpen])

  return (
    <>
      <header className="container mx-auto py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-purple-500" />
          <span className="font-bold text-xl">Fullstacktics</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/services" 
            className={`text-sm hover:text-purple-400 transition-colors ${activePage === 'services' ? 'text-purple-500' : ''}`}
          >
            Services
          </Link>
          <Link 
            href="/team" 
            className={`text-sm hover:text-purple-400 transition-colors ${activePage === 'team' ? 'text-purple-500' : ''}`}
          >
            Team
          </Link>
          <Link 
            href="/blog" 
            className={`text-sm hover:text-purple-400 transition-colors ${activePage === 'blog' ? 'text-purple-500' : ''}`}
          >
            Blog
          </Link>
          <Link 
            href="/inquiry" 
            className={`text-sm hover:text-purple-400 transition-colors ${activePage === 'contact' ? 'text-purple-500' : ''}`}
          >
            Contact Us
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
        
        {/* Call-to-Action Button */}
        <Button 
          className="bg-purple-600 hover:bg-purple-700 text-white hidden md:flex"
          onClick={() => setInquiryFormOpen(true)}
        >
          Let&apos;s Talk
          <Zap className="ml-2 h-4 w-4" />
        </Button>
      </header>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#151528]/90 backdrop-blur-sm py-4 px-6 border-t border-gray-800"
          >
            <div className="flex flex-col space-y-4">
              <Link href="/services" className="text-sm hover:text-purple-400 transition-colors">
                Services
              </Link>
              <Link href="/team" className="text-sm hover:text-purple-400 transition-colors">
                Team
              </Link>
              <Link href="/blog" className="text-sm hover:text-purple-400 transition-colors">
                Blog
              </Link>
              <Link href="/inquiry" className="text-sm hover:text-purple-400 transition-colors">
                Contact Us
              </Link>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white w-full"
                onClick={() => {
                  setMobileMenuOpen(false)
                  setInquiryFormOpen(true)
                }}
              >
                Let&apos;s Talk
                <Zap className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Inquiry Form Modal */}
      <AnimatePresence>
        {inquiryFormOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ 
              perspective: "1200px", // Add perspective to container for better 3D effect
            }}
            onClick={(e) => {
              // Close when clicking outside the form
              if (e.target === e.currentTarget) {
                setInquiryFormOpen(false)
              }
            }}
          >
            <div className="w-full max-w-xl mx-auto"> {/* Wrapper to control dimensions */}
              <ProjectInquiryModal 
                onClose={() => setInquiryFormOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}