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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Cal from "./Cal";
import Navbar from "@/components/Navbar";

// Update icons to match performance-focused services
const icons = {
  Zap,
  Activity,
  Server,
  Code,
  Database,
  Sparkle,
  Gauge
};

interface TechStack {
  name: string;
  version?: string;
  description?: string;
}

interface PerformanceMetric {
  metric: string;
  value: string;
  description: string;
}

interface ServiceData {
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  experience: string;
  performanceMetrics: PerformanceMetric[];
  testimonials: {
    link: string;
    comments: string[];
  };
  technicalDetails: {
    stack: TechStack[];
    optimization: string[];
    architecture: string[];
    security: string[];
    deployment: string[];
    monitoring: string[];
  };
}

const getTabIcon = (tab: string): LucideIcon => {
  switch (tab.toLowerCase()) {
    case 'stack':
      return Code;
    case 'optimization':
      return Activity;
    case 'architecture':
      return Server;
    case 'security':
      return Terminal;
    case 'deployment':
      return Globe;
    case 'monitoring':
      return Gauge;
    default:
      return Box;
  }
};

const formatTabLabel = (tab: string) => {
  return tab
    .split(/(?=[A-Z])/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const ServicePageTemplate = ({ serviceData }: { serviceData: ServiceData }) => {
  const IconComponent = icons[serviceData.icon as keyof typeof icons];

  const getTechTabs = () => {
    return Object.entries(serviceData.technicalDetails).map(([key, value]: [string, string[] | TechStack[]]) => ({
      value: key,
      label: formatTabLabel(key),
      icon: getTabIcon(key),
      items: Array.isArray(value) ? value : []
    }));
  };

  return (
    <>
      <div className="hidden">
        <Navbar />
      </div>
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 lg:px-8 py-12 md:py-24">
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="mb-6 inline-block rounded-lg bg-primary/10 p-3">
              <IconComponent className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter lg:text-4xl md:text-5xl lg:text-6xl mb-4">
              {serviceData.title}
            </h1>
            <p className="max-w-[750px] text-base lg:text-lg text-muted-foreground md:text-xl mb-6">
              {serviceData.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {serviceData.features.map((feature) => (
                <Badge key={feature} variant="secondary" className="text-sm">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Performance Metrics Grid */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {serviceData.performanceMetrics.map((metric) => (
                  <div key={metric.metric} className="p-4 rounded-lg bg-primary/5 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                    <div className="text-sm font-medium mb-1">{metric.metric}</div>
                    <div className="text-xs text-muted-foreground">{metric.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Experience */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Technical Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{serviceData.experience}</p>
            </CardContent>
          </Card>

          {/* Benefits and Use Cases Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Technical Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {serviceData.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Implementation Use Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {serviceData.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Technical Specifications Tabs */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={getTechTabs()[0].value} className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 gap-4">
                  {getTechTabs().map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value} className="flex items-center gap-2">
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {getTechTabs().map((tab) => (
                  <TabsContent key={tab.value} value={tab.value}>
                    <div className="grid sm:grid-cols-2 gap-4 p-4">
                      {tab.items.map((item) => (
                        <div
                          key={typeof item === 'string' ? item : item.name}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <tab.icon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{typeof item === 'string' ? item : `${item.name}${item.version ? ` ${item.version}` : ''}`}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary">
                Ready to Build High-Performance Solutions?
              </CardTitle>
              <CardDescription className="text-center">
                Let&apos;s discuss how our expertise in {serviceData.title.toLowerCase()} can transform your application&apos;s performance
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Cal>
                <Button size="lg" className="text-base gap-2 group">
                  Schedule Technical Review
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Cal>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ServicePageTemplate;