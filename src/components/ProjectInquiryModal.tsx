"use client"

import { motion } from "framer-motion";
import { X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TurnstileContactForm from "@/components/TurnstileContactForm";

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
    rotateX: -90,
    transformOrigin: "top",
    scale: 0.9,
  },
  open: {
    opacity: 1,
    rotateX: 0,
    transformOrigin: "top",
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 120,
      mass: 1.2,
    }
  }
};

const itemVariants = {
  closed: {
    opacity: 0,
    y: 20
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", 
      stiffness: 100 
    }
  }
};

interface ProjectInquiryModalProps {
  onClose: () => void;
}

export default function ProjectInquiryModal({ onClose }: ProjectInquiryModalProps) {
  return (
    <motion.div
      className="relative w-full max-w-xl mx-auto p-4 perspective-1000"
      variants={containerVariants}
      initial="closed"
      animate="open"
      exit="closed"
      style={{ perspective: "1000px" }}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-6 right-6 z-10 text-gray-400 hover:text-white"
        onClick={onClose}
        aria-label="Close inquiry form"
      >
        <X className="h-5 w-5" />
      </Button>
      
      <motion.div 
        variants={cardVariants}
        className="origin-top"
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
            <TurnstileContactForm />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
