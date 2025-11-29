// This component is no longer used - the header now uses Dialog directly
// Kept for backwards compatibility if needed elsewhere

import { X } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import TurnstileContactForm from "@/components/TurnstileContactForm"

interface ProjectInquiryModalProps {
  onClose: () => void
}

export default function ProjectInquiryModal({ onClose }: ProjectInquiryModalProps) {
  return (
    <div className="relative w-full max-w-xl mx-auto p-4">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-6 right-6 z-10 text-muted-foreground hover:text-foreground"
        onClick={onClose}
        aria-label="Close inquiry form"
      >
        <X className="h-5 w-5" />
      </Button>
      
      <Card className="border border-border bg-card overflow-hidden shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Project Details</CardTitle>
          <CardDescription>
            Share your project requirements and we&apos;ll create a custom solution for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TurnstileContactForm />
        </CardContent>
      </Card>
    </div>
  )
}
