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
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Cal from "./Cal";
import Navbar from "@/components/Navbar";

const icons = {
  Bot: Bot,
  Database: Database,
  Gauge: Gauge,
};

const ServicePageTemplate = ({
  serviceData,
}: {
  serviceData: {
    title: string;
    description: string;
    icon: string;
    features: string[];
    benefits: string[];
    useCases: string[];
    technicalDetails: Record<string, string[]>;
    experience: string;
    testimonials: {
      link: string;
      comments: string[];
    };
  };
}) => {
  let iconsKey: keyof typeof icons;
  switch (serviceData.icon) {
    case "Bot":
      iconsKey = "Bot";
      break;
    case "Database":
      iconsKey = "Database";
      break;
    case "Gauge":
      iconsKey = "Gauge";
      break;
    default:
      throw new Error("Invalid icon");
  }
  const IconComponent = icons[iconsKey];

  const getTechTabs = () => {
    const tabs = Object.keys(serviceData.technicalDetails);
    return tabs.map((tab) => ({
      value: tab,
      label: tab.charAt(0).toUpperCase() + tab.slice(1),
      icon:
        tab === "technologies" ? Code : tab === "features" ? Rocket : Hammer,
      items: serviceData.technicalDetails[tab],
    }));
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
              <CardTitle className="text-2xl text-primary">
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{serviceData.experience}</p>
            </CardContent>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Testimonials
              </CardTitle>
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
              <Cal url={serviceData.testimonials.link}>
                <Button size="lg" className="group">
                  Read more testimonials
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Cal>
            </CardFooter>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {serviceData.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Check className="w-5 h-5 text-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Use Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {serviceData.useCases.map((useCase) => (
                    <li
                      key={useCase}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Check className="w-5 h-5 text-primary" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Technical Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={getTechTabs()[0].value} className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
                <TabsList className="grid w-full h-full grid-row-4 grid-cols-1 gap-4 overflow-x-auto">
                  {getTechTabs().map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                      <tab.icon className="w-4 h-4 mr-2" />
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {getTechTabs().map((tab) => (
                  <TabsContent key={tab.value} value={tab.value} className="lg:col-span-3 col-span-1">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      {tab.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <tab.icon className="w-4 h-4 text-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary">
                Ready to leverage {serviceData.title}?
              </CardTitle>
              <CardDescription className="text-center">
                Let us help you optimize your workflow with our{" "}
                {serviceData.title.toLowerCase()} solutions
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Cal url="https://cal.com/fullstacktics/consultation">
                <Button size="lg" className="group">
                  Schedule a Demo
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
