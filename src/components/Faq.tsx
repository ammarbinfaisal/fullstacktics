import { Gauge, Code2, ServerCog, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import Cal from "@/app/Cal";

export default function Process() {
  const steps = [
    {
      title: "System & AI Assessment",
      description: "Comprehensive evaluation of your AI models, system architecture, and performance gaps.",
      icon: <Gauge className="h-6 w-6" />,
      metrics: ["Model Performance", "System Latency", "Resource Load"],
    },
    {
      title: "AI-Enhanced Design",
      description: "Craft scalable architectures with PyTorch, Next.js, and optimized AI integration.",
      icon: <Code2 className="h-6 w-6" />,
      metrics: ["vLLM Pipelines", "Data Orchestration", "Caching Design"],
    },
    {
      title: "Implementation & Optimization",
      description: "Deploy AI-driven features with FastAPI, Go, and real-time performance tuning.",
      icon: <ServerCog className="h-6 w-6" />,
      metrics: ["Inference Speed", "API Efficiency", "Scalability"],
    },
    {
      title: "Ongoing Optimization",
      description: "Monitor and refine AI and system performance with advanced analytics.",
      icon: <Activity className="h-6 w-6" />,
      metrics: ["Accuracy Tracking", "Uptime Metrics", "Alert Systems"],
    },
  ];

  return (
    <section className="container relative mx-auto py-24 bg-[#F5F5F5]">
      <div className="relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-[#4B5E6A]">
            Intelligent{" "}
            <span className="bg-gradient-to-r from-[#4A919E] to-teal-600 bg-clip-text text-transparent">
              Development Process
            </span>
          </h2>
          <p className="text-lg text-[#4B5E6A] max-w-[800px] mx-auto">
            Our proven methodology for delivering AI-powered, high-performance solutions with precision.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group h-full">
              <div className="h-full flex flex-col items-center text-center p-6 rounded-lg bg-white border border-[#4A919E]/10 transition-all hover:border-[#4A919E]/20">
                <div className="mb-4 rounded-full bg-[#4A919E]/10 p-4 ring-1 ring-[#4A919E]/20">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#4B5E6A]">{step.title}</h3>
                <p className="text-sm text-[#4B5E6A] mb-4">{step.description}</p>

                {/* Metrics */}
                <div className="w-full pt-4 border-t border-[#4A919E]/10">
                  <ul className="space-y-2">
                    {step.metrics.map((metric) => (
                      <li key={metric} className="text-xs text-[#4A919E] flex items-center justify-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A919E]/60" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#4A919E]/10 border border-[#4A919E]/20 flex items-center justify-center text-xs font-medium text-[#4A919E]">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Cal>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#4A919E] to-teal-600 hover:from-[#3A7A85] hover:to-teal-700 text-white"
            >
              Schedule Technical Consultation
            </Button>
          </Cal>

          <p className="mt-4 text-sm text-[#4B5E6A]">
            Average implementation time: 3-4 weeks for AI-driven solutions
          </p>
        </div>
      </div>
    </section>
  );
}