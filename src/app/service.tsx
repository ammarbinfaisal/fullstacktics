import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Bot,
  Check,
  Code,
  Rocket,
  Hammer,
  Database,
  Gauge,
  Cpu,
  Network,
  Shield,
  TrendingUp,
  Filter,
  Workflow,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Cal from "./Cal";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const icons = {
  Bot: Bot,
  Database: Database,
  Gauge: Gauge,
  Rocket: Rocket,
  TrendingUp: TrendingUp,
  Workflow: Workflow,
  Filter: Filter,
};

interface TechnicalDetails {
  technologies: string[];
  features: string[];
  implementation: string[];
  [key: string]: string[] | Record<string, string[]>;
}

interface ServiceData {
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  experience: string;
  testimonials: {
    link: string;
    comments: string[];
  };
  technicalDetails: TechnicalDetails;
}

const getTabIcon = (tab: string) => {
  switch (tab.toLowerCase()) {
    case 'technologies':
      return Code;
    case 'features':
      return Rocket;
    case 'implementation':
      return Hammer;
    case 'performanceoptimizations':
      return Gauge;
    case 'infrastructure':
      return Network;
    case 'architecturalpatterns':
      return Cpu;
    case 'metrics':
      return Shield;
    default:
      return Rocket;
  }
};

const formatTabLabel = (tab: string) => {
  return tab
    .split(/(?=[A-Z])/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const TechnicalSpecifications = ({ technicalDetails }: {
  technicalDetails: TechnicalDetails;
}) => {
  const getTechTabs = () => {
    return Object.entries(technicalDetails).map(([key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        const nestedItems = Object.entries(value).flatMap(([nestedKey, nestedValue]) =>
          Array.isArray(nestedValue)
            ? nestedValue.map(item => ({ category: nestedKey, content: item }))
            : [{ category: nestedKey, content: nestedValue }]
        );
        return {
          value: key,
          label: formatTabLabel(key),
          icon: getTabIcon(key),
          items: nestedItems,
        };
      }

      return {
        value: key,
        label: formatTabLabel(key),
        icon: getTabIcon(key),
        items: (value as string[]).map(item => ({ content: item })),
      };
    });
  };

  const formatTabLabel = (tab: string) => {
    return tab
      .split(/(?=[A-Z])/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl text-primary text-center">
          Technical Specifications
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 sm:px-6">
        <Tabs defaultValue={getTechTabs()[0].value} className="w-full">
          <div className="mb-6 overflow-x-auto">
            <TabsList className="inline-flex w-auto p-1 h-auto gap-1">
              {getTechTabs().map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex items-center px-4 py-2 gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {getTechTabs().map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="mt-0 px-4 sm:px-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tab.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-muted/50 rounded-lg p-4 hover:bg-muted/70 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <tab.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

const ServicePageTemplate = ({ serviceData }: { serviceData: ServiceData }) => {
  let iconsKey: keyof typeof icons;
  switch (serviceData.icon) {
    case "Filter":
    case "Database":
    case "Workflow":
    case "TrendingUp":
      iconsKey = serviceData.icon as keyof typeof icons;
      break;
    default:
      throw new Error("Invalid icon");
  }
  const IconComponent = icons[iconsKey];

  const getTechTabs = () => {
    return Object.entries(serviceData.technicalDetails).map(([key, value]) => {
      // Handle nested objects in technical details
      if (typeof value === 'object' && !Array.isArray(value)) {
        const nestedItems = Object.entries(value).flatMap(([nestedKey, nestedValue]) =>
          Array.isArray(nestedValue)
            ? nestedValue.map(item => `${nestedKey}: ${item}`)
            : [`${nestedKey}: ${nestedValue}`]
        );
        return {
          value: key,
          label: formatTabLabel(key),
          icon: getTabIcon(key),
          items: nestedItems,
        };
      }

      return {
        value: key,
        label: formatTabLabel(key),
        icon: getTabIcon(key),
        items: value as string[],
      };
    });
  };

  return (
    <>
      <div className="hidden">
        <Navbar />
      </div>
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 lg:px-8 py-12 md:py-24">
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
                <Badge key={feature} variant="secondary">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Technical Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{serviceData.experience}</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Client Testimonials</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {serviceData.testimonials.comments.map((comment, index) => (
                  <li key={index} className="text-muted-foreground italic">
                    &quot;{comment}&ldquo;
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href={serviceData.testimonials.link}>
                <Button size="lg" className="group">
                  View More Testimonials
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

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

          <TechnicalSpecifications technicalDetails={serviceData.technicalDetails} />

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary">
                Ready to Implement {serviceData.title}?
              </CardTitle>
              <CardDescription className="text-center">
                Let&apos;s discuss how our {serviceData.title.toLowerCase()} solutions can enhance your technical infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Cal>
                <Button size="lg" className="text-base gap-2 group">
                  Schedule Technical Consultation
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