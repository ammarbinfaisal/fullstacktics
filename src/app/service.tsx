"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Check,
  Code,
  Zap,
  Activity,
  Server,
  Database,
  Sparkle,
  Gauge,
  LucideIcon,
  Terminal,
  Globe,
  Box,
} from "lucide-react";
import { motion } from "framer-motion";
import Cal from "./Cal";
import Navbar from "@/components/Navbar";
import { ServiceData, TechStack } from "./type";

// Icons for services
const icons = {
  Zap,
  Activity,
  Server,
  Code,
  Database,
  Sparkle,
  Gauge,
};

// Icons for technical details sections
const getSectionIcon = (section: string): LucideIcon => {
  switch (section.toLowerCase()) {
    case "stack":
    case "technologies":
      return Code;
    case "optimization":
    case "performanceoptimization":
      return Activity;
    case "architecture":
    case "infrastructure":
      return Server;
    case "security":
      return Terminal;
    case "deployment":
      return Globe;
    case "monitoring":
      return Gauge;
    default:
      return Box;
  }
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const ServicePageTemplate = ({ serviceData }: { serviceData: ServiceData }) => {
  const IconComponent = icons[serviceData.icon as keyof typeof icons];

  const getTechSections = () => {
    return Object.entries(serviceData.technicalDetails).map(([key, value]: [string, string[] | TechStack[]]) => ({
      key,
      label: key
        .split(/(?=[A-Z])/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      icon: getSectionIcon(key),
      items: Array.isArray(value) ? value : [],
    }));
  };

  return (
    <>
      <div className="hidden">
        <Navbar />
      </div>
      <div className="min-h-screen bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12 md:py-24">
          {/* Hero Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="mb-6 inline-block rounded-lg bg-[#4A919E]/10 p-3">
              <IconComponent className="h-12 w-12 text-[#4A919E]" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter lg:text-4xl md:text-5xl lg:text-6xl mb-4 text-[#4B5E6A]">
              {serviceData.title}
            </h1>
            <p className="max-w-[750px] text-base lg:text-lg text-[#4B5E6A] md:text-xl mb-6">
              {serviceData.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {serviceData.features.map((feature) => (
                <Badge key={feature} variant="secondary" className="text-sm bg-[#4A919E]/10 text-[#4A919E]">
                  {feature}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Performance Metrics Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
            className="mb-8"
          >
            <Card className="bg-white border-[#4A919E]/10">
              <CardHeader>
                <CardTitle className="text-2xl text-[#4A919E]">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div variants={staggerChildren} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {serviceData.performanceMetrics?.map((metric) => (
                    <motion.div
                      key={metric.metric}
                      variants={fadeInUp}
                      className="p-4 rounded-lg bg-[#4A919E]/5 text-center"
                    >
                      <div className="text-2xl font-bold text-[#4A919E] mb-1">{metric.value}</div>
                      <div className="text-sm font-medium mb-1 text-[#4B5E6A]">{metric.metric}</div>
                      <div className="text-xs text-[#4B5E6A]">{metric.description}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technical Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-8"
          >
            <Card className="bg-white border-[#4A919E]/10">
              <CardHeader>
                <CardTitle className="text-2xl text-[#4A919E]">Technical Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4B5E6A]">{serviceData.experience}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits and Use Cases Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8 mb-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-white border-[#4A919E]/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#4A919E]">Technical Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {serviceData.benefits?.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-[#4B5E6A]">
                        <Check className="w-5 h-5 text-[#4A919E] mt-1 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-white border-[#4A919E]/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#4A919E]">Implementation Use Cases</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {serviceData.useCases?.map((useCase) => (
                      <li key={useCase} className="flex items-start gap-2 text-[#4B5E6A]">
                        <Check className="w-5 h-5 text-[#4A919E] mt-1 flex-shrink-0" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Technical Specifications - Scroll-Based Reveal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
            className="mb-8"
          >
            <Card className="bg-white border-[#4A919E]/10">
              <CardHeader>
                <CardTitle className="text-2xl text-[#4A919E]">Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                {getTechSections().map((section) => (
                  <motion.div
                    key={section.key}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    className="mb-8"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <section.icon className="w-6 h-6 text-[#4A919E]" />
                      <h3 className="text-xl font-semibold text-[#4B5E6A]">{section.label}</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {section.items.map((item) => (
                        <div
                          key={typeof item === "string" ? item : item.name}
                          className="flex items-start gap-2 text-[#4B5E6A]"
                        >
                          <section.icon className="w-4 h-4 text-[#4A919E] mt-1 flex-shrink-0" />
                          <span className="text-sm">
                            {typeof item === "string" ? item : `${item.name}${item.version ? ` ${item.version}` : ""}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <Card className="bg-white border-[#4A919E]/10">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-[#4A919E]">
                  Ready to Unlock Next-Level Performance?
                </CardTitle>
                <CardDescription className="text-center text-[#4B5E6A]">
                  Let’s explore how our {serviceData.title.toLowerCase()} expertise can elevate your systems.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Cal>
                  <Button
                    size="lg"
                    className="text-base gap-2 group bg-gradient-to-r from-[#4A919E] to-teal-600 hover:from-[#3A7A85] hover:to-teal-700 text-white"
                  >
                    Schedule Technical Review
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Cal>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ServicePageTemplate;