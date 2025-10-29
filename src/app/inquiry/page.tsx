"use client"

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TurnstileContactForm from "@/components/TurnstileContactForm";

export default function ProjectInquiry() {
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
            <TurnstileContactForm />
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}