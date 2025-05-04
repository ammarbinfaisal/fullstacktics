"use client"

import { useEffect } from "react";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Animation variants for 3D hinge effect with top edge fixed
const containerVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    }
  }
};

const cardVariants = {
  closed: {
    opacity: 0,
    rotateX: -90,       // Fully rotated on X-axis (top edge remains fixed)
    transformOrigin: "top", // Critical: sets the rotation point to the top edge
    scale: 0.9,
  },
  open: {
    opacity: 1,
    rotateX: 0,
    transformOrigin: "top", // Maintain the same transformation origin
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,      // Slightly more damping for a more controlled swing
      stiffness: 120,    // Less stiffness for a more natural swing
      mass: 1.2,        // Adds a bit more weight to the animation
    }
  }
};

const itemVariants = {
  closed: { opacity: 0, y: 20 },
  open: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      damping: 5,
      stiffness: 100 
    }
  }
};

interface ProjectInquiryProps {
  onClose?: () => void;
  isModal?: boolean;
}

export default function ProjectInquiry({ onClose, isModal = false }: ProjectInquiryProps) {
  const [formState, submit] = useForm(process.env.NEXT_PUBLIC_FORM!);

  useEffect(() => {
    if (formState.succeeded) {
      // @ts-expect-error - TS doesn't know if gtag is a function
      if (typeof gtag === 'function') {
        // @ts-expect-error - TS doesn't know if gtag is a function
        gtag('event', 'project_inquiry_form_submit', {
          'event_timeout': 2000,
        });
      }
      
      // Close form if it's in modal and successfully submitted
      if (isModal && onClose) {
        setTimeout(() => {
          onClose();
        }, 1500);
      }
    }
  }, [formState.succeeded, isModal, onClose]);
  
  // If it's rendered as a modal, use a different structure
  if (isModal) {
    return (
      <motion.div
        className="relative w-full max-w-xl mx-auto p-4 perspective-1000" // Add perspective for 3D effect
        variants={containerVariants}
        initial="closed"
        animate="open"
        exit="closed"
        style={{ perspective: "1000px" }} // Essential for 3D effect
      >
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 z-10 text-gray-400 hover:text-white"
            onClick={onClose}
            aria-label="Close inquiry form"
          >
            <X className="h-5 w-5" />
          </Button>
        )}
        
        <motion.div 
          variants={cardVariants}
          className="origin-top" // Reinforces the top-edge pivot point
        >
          <Card className="border border-gray-800 bg-[#151528]/80 backdrop-blur-sm overflow-hidden shadow-2xl">
            <CardHeader>
              <motion.div variants={itemVariants}>
                <CardTitle className="text-2xl">Project Details</CardTitle>
              </motion.div>
              <motion.div variants={itemVariants}>
                <CardDescription>
                  Share your project requirements and we&apos;ll create a custom solution for you.
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent>
              <form onSubmit={submit} className="flex flex-col gap-6">
                <div className="space-y-4">
                  <motion.div variants={itemVariants} className="flex flex-col gap-2">
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex flex-col gap-2">
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex flex-col gap-2">
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company Name"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex flex-col gap-2">
                    <Textarea
                      id="project-details"
                      name="project-details"
                      placeholder="Project Details"
                      className="min-h-[150px]"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white"
                    disabled={formState.submitting}
                  >
                    {formState.submitting ? "Submitting..." : "Submit Inquiry"}
                    {!formState.submitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </motion.div>
                
                {formState.succeeded && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-center"
                  >
                    Thanks for your inquiry! We'll be in touch soon.
                  </motion.div>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    );
  }
  
  // Standard page rendering
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Project <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">Inquiry</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Tell us about your project and we&apos;ll get back to you with a tailored solution.
        </p>
      </div>

      <div className="mx-auto max-w-xl">
        <Card className="border border-gray-800 bg-[#151528]/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Project Details</CardTitle>
            <CardDescription>
              Share your project requirements and we&apos;ll create a custom solution for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={submit} className="flex flex-col gap-6">
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company Name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Textarea
                    id="project-details"
                    name="project-details"
                    placeholder="Project Details"
                    className="min-h-[150px]"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white"
                disabled={formState.submitting}
              >
                {formState.submitting ? "Submitting..." : "Submit Inquiry"}
                {!formState.submitting && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
              
              {formState.succeeded && (
                <div className="text-green-400 text-center mt-4">
                  Thanks for your inquiry! We'll be in touch soon.
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}