import { Users, PenTool, Settings, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import Cal from "@/app/Cal";


export default function Process() {
  const steps = [
    {
      title: "Strategy Call",
      description: "We analyze your current tools and processes to identify automation opportunities.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Solution Design",
      description: "Create a custom automation plan combining Make.com, n8n, and custom development.",
      icon: <PenTool className="h-6 w-6" />
    },
    {
      title: "Implementation",
      description: "Set up and integrate all automation workflows with your existing tools.",
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: "Training & Support",
      description: "Comprehensive training and ongoing support to ensure smooth operations.",
      icon: <HeartHandshake className="h-6 w-6" />
    }
  ];

  return (
    <section className="container py-24 bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
          How We Work
        </h2>
        <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
          A proven process to transform your business operations in just 14 days
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-12">
        {steps.map((step) => (
          <div key={step.title} className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Cal>
          <Button size="lg">
            Schedule Your Strategy Call
          </Button>
        </Cal>
      </div>
    </section>
  );
}