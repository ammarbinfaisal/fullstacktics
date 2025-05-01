"use client"

import { ArrowRight, ChevronRight, Mail, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Cal from "@/app/Cal";

// Budget options
const budgetOptions = [
  { id: "budget-1", value: "1k-2.5k", label: "$1,000 - $2,500 USD" },
  { id: "budget-2", value: "2.5k-5k", label: "$2,500 - $5,000 USD" },
  { id: "budget-3", value: "10k-20k", label: "$10,000 - $20,000 USD" },
];

// Service categories
const serviceCategories = [
  { id: "web-dev", value: "web-development", label: "Web Development" },
  { id: "mobile-dev", value: "mobile-development", label: "Mobile Development" },
  { id: "ai-integration", value: "ai-integration", label: "AI Integration" },
  { id: "cloud-solutions", value: "cloud-solutions", label: "Cloud Solutions" },
  { id: "performance", value: "performance-optimization", label: "Performance Optimization" },
];

export default function LeadGenForm() {
  const [formState, submit] = useForm(process.env.NEXT_PUBLIC_FORM!)
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceChange = (value: string) => {
    setSelectedServices(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value) 
        : [...prev, value]
    );
  };

  useEffect(() => {
    if (formState.succeeded) {
      // @ts-expect-error - TS doesn't know if gtag is a function
      gtag('event', 'web_lead_gen_form_submit', {
        'event_timeout': 2000,
      });
      redirect("/we-will-contact-you");
    }
  }, [formState.succeeded]);

  return (
    <section className="py-12 md:py-24 mx-auto relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-teal-400/5 rounded-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Let&apos;s discuss your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">project</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Tell us about your project requirements and budget, and we&apos;ll get back to you with a tailored solution.
          </p>
          <div className="flex flex-col items-center gap-4 text-center">
            <Cal>
              <Button className="group bg-purple-600 hover:bg-purple-700 text-white">
                Schedule Technical Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Cal>
          </div>
        </div>
        
        <div className="mx-auto mt-12 max-w-3xl">
          <Card className="border border-gray-800 bg-[#151528]/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Project Details</CardTitle>
              <CardDescription>
                Share your project requirements and we&apos;ll create a custom solution for you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={submit} className="flex flex-col gap-6" id="lead-gen-form">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name" className="text-sm font-medium text-primary">
                        Full Name
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-sm font-medium text-primary">
                        Email Address
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="company" className="text-sm font-medium text-primary">
                        Company Name
                      </Label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-primary">
                        Phone Number
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Project Details</h3>
                  
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="project-title" className="text-sm font-medium text-primary">
                      Project Title
                    </Label>
                    <Input
                      type="text"
                      id="project-title"
                      name="project-title"
                      placeholder="E.g., E-commerce Website, Mobile App, etc."
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="project-description" className="text-sm font-medium text-primary">
                      Project Description
                    </Label>
                    <Textarea
                      id="project-description"
                      name="project-description"
                      placeholder="Please describe your project, goals, and any specific requirements."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm font-medium text-primary">
                      Budget Range
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {budgetOptions.map((option) => (
                        <div 
                          key={option.id}
                          className={`
                            flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all
                            ${selectedBudget === option.value 
                              ? 'border-purple-500 bg-purple-500/10' 
                              : 'border-gray-700 hover:border-purple-500/50'}
                          `}
                          onClick={() => setSelectedBudget(option.value)}
                        >
                          <input
                            type="radio"
                            id={option.id}
                            name="budget"
                            value={option.value}
                            className="sr-only"
                            checked={selectedBudget === option.value}
                            onChange={() => setSelectedBudget(option.value)}
                          />
                          <label 
                            htmlFor={option.id}
                            className="cursor-pointer text-center w-full"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm font-medium text-primary">
                      Services Required
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {serviceCategories.map((service) => (
                        <div 
                          key={service.id}
                          className={`
                            flex items-center p-3 rounded-lg border cursor-pointer transition-all
                            ${selectedServices.includes(service.value) 
                              ? 'border-teal-500 bg-teal-500/10' 
                              : 'border-gray-700 hover:border-teal-500/50'}
                          `}
                          onClick={() => handleServiceChange(service.value)}
                        >
                          <input
                            type="checkbox"
                            id={service.id}
                            name="services"
                            value={service.value}
                            className="sr-only"
                            checked={selectedServices.includes(service.value)}
                            onChange={() => handleServiceChange(service.value)}
                          />
                          <label 
                            htmlFor={service.id}
                            className="cursor-pointer ml-2 w-full"
                          >
                            {service.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="timeline" className="text-sm font-medium text-primary">
                      Project Timeline
                    </Label>
                    <Input
                      type="text"
                      id="timeline"
                      name="timeline"
                      placeholder="E.g., 2 months, ASAP, etc."
                    />
                  </div>
                </div>
                
                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Additional Information</h3>
                  
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="additional-info" className="text-sm font-medium text-primary">
                      Anything else we should know?
                    </Label>
                    <Textarea
                      id="additional-info"
                      name="additional-info"
                      placeholder="Any other details that might help us understand your project better."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white"
                  >
                    Submit Project Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <Cal>
                    <Button 
                      type="button"
                      variant="outline" 
                      className="border-purple-500 text-purple-400 hover:bg-purple-950/30"
                    >
                      Schedule a Call
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Cal>
                </div>
              </form>
              
              <div className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-purple-400" />
                  <Link href="mailto:ammar@fullstacktics.com">
                    <span>ammar@fullstacktics.com</span>
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-teal-400" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
