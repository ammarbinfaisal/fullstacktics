"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, Menu, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import TurnstileContactForm from "@/components/TurnstileContactForm"

interface HeaderProps {
  activePage?: string
}

export default function Header({ activePage }: HeaderProps) {
  const [inquiryFormOpen, setInquiryFormOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 glass-subtle">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl text-foreground">Fullstacktics</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/services" 
              prefetch={true}
              className={`text-sm font-medium hover:text-primary transition-colors ${activePage === 'services' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Services
            </Link>
            <Link 
              href="/projects" 
              prefetch={true}
              className={`text-sm font-medium hover:text-primary transition-colors ${activePage === 'projects' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Projects
            </Link>
            <Link 
              href="/blog" 
              prefetch={true}
              className={`text-sm font-medium hover:text-primary transition-colors ${activePage === 'blog' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Blog
            </Link>
            <Link 
              href="/inquiry" 
              prefetch={true}
              className={`text-sm font-medium hover:text-primary transition-colors ${activePage === 'contact' ? 'text-primary' : 'text-muted-foreground'}`}
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
            className="bg-primary hover:bg-primary/90 text-primary-foreground hidden md:flex"
            onClick={() => setInquiryFormOpen(true)}
          >
            Let&apos;s Talk
            <Zap className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>
      
      {/* Mobile Navigation Menu - Instant show/hide */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] z-40 glass border-b border-border/40 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/services" 
              prefetch={true}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/projects" 
              prefetch={true}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/blog" 
              prefetch={true}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/inquiry" 
              prefetch={true}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
              onClick={() => {
                setMobileMenuOpen(false)
                setInquiryFormOpen(true)
              }}
            >
              Let&apos;s Talk
              <Zap className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      
      {/* Inquiry Form Modal - Using Dialog */}
      <Dialog open={inquiryFormOpen} onOpenChange={setInquiryFormOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Project Details</DialogTitle>
            <DialogDescription>
              Share your project requirements and we&apos;ll create a custom solution for you.
            </DialogDescription>
          </DialogHeader>
          <TurnstileContactForm />
        </DialogContent>
      </Dialog>
    </>
  )
}
