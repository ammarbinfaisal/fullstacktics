"use client"

import { useEffect } from "react";
import { useForm } from "@formspree/react";
import { redirect } from "next/navigation";
import { ArrowRight } from "lucide-react";
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

export default function ProjectInquiryPage() {
  const [formState, submit] = useForm(process.env.NEXT_PUBLIC_FORM!)

  useEffect(() => {
    if (formState.succeeded) {
      // @ts-expect-error - TS doesn't know if gtag is a function
      gtag('event', 'project_inquiry_form_submit', {
        'event_timeout': 2000,
      });
      redirect("/we-will-contact-you");
    }
  }, [formState.succeeded]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A2E] to-[#0F0F1A] text-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Project <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">Inquiry</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tell us about your project and we&aspo;ll get back to you with a tailored solution.
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
                >
                  Submit Inquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
