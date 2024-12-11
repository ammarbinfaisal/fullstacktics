import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Database, Gauge, Mail, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AgencyPage = () => {
  const services = [
    {
      id: "browser-automation",
      title: "Browser Automation",
      description: "Custom automation solutions to streamline your web workflows and increase productivity.",
      icon: <Bot className="w-8 h-8 mb-4 text-teal-500" />,
      features: ["End-to-end testing", "Workflow automation", "Data extraction"],
    },
    {
      id: "web-scraping",
      title: "Web Scraping",
      description: "Robust data extraction services to help you gather and analyze web data at scale.",
      icon: <Database className="w-8 h-8 mb-4 text-teal-500" />,
      features: ["Real-time scraping", "Data processing", "API integration"],
    },
    {
      id: "react-performance",
      title: "React Performance",
      description: "Optimize your React applications for maximum speed and efficiency.",
      icon: <Gauge className="w-8 h-8 mb-4 text-teal-500" />,
      features: ["Bundle optimization", "Code splitting", "Performance audit"],
    },
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-4 h-4 text-teal-500" />,
      text: "ammar@fullstacktics.com",
    },
    {
      icon: <MapPin className="w-4 h-4 text-teal-500" />,
      text: "New Delhi, India",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <Card className="mb-8 bg-gray-800 border-teal-500/20">
          <CardHeader>
            <CardTitle className="text-4xl text-teal-500">Fullstacktics</CardTitle>
            <CardDescription className="text-xl text-gray-300">
              Empowering businesses with cutting-edge web solutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 group">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>

        {/* Alert Banner */}
        <Alert className="mb-8 bg-gray-800 border-teal-500/20">
          <Bot className="h-4 w-4 text-teal-500" />
          <AlertTitle className="text-teal-500">New Service Available!</AlertTitle>
          <AlertDescription className="text-gray-300">
            Try our new <strong className="text-teal-400">React Performance Optimization</strong> service to boost your app's speed and efficiency.
          </AlertDescription>
        </Alert>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <a key={service.id} href={`/services/${service.id}`}>
              <Card key={service.title} className="bg-gray-800 border-teal-500/20 hover:shadow-lg hover:shadow-teal-500/10 transition-all">
                <CardHeader>
                  <div className="flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-center text-gray-100">{service.title}</CardTitle>
                  <CardDescription className="text-center text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.map((feature) => (
                      <Badge key={feature} className="bg-teal-500/20 text-teal-200 hover:bg-teal-500/30">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="mt-12 bg-gray-800 border-teal-500/20">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-teal-500">Ready to optimize your web presence?</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="info" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-700 text-white">
                <TabsTrigger value="contact" className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900">Contact Form</TabsTrigger>
                <TabsTrigger value="info" className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900">Contact Info</TabsTrigger>
              </TabsList>
              <TabsContent value="contact">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Name</Label>
                    <Input id="name" placeholder="Enter your name" className="text-gray-50 bg-gray-700 border-teal-500/20" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="text-gray-50 bg-gray-700 border-teal-500/20" />
                  </div>
                  <Button className="w-full bg-teal-500 hover:bg-teal-600">Send Message</Button>
                  <p className="text-xs text-center text-gray-200">
                    This message would not be sent to the agency. This form just makes the site look better :P
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="info">
                <div className="space-y-4 text-gray-300">
                  {contactMethods.map((method, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-2">
                        {method.icon}
                        <span>{method.text}</span>
                      </div>
                      {index < contactMethods.length - 1 && <Separator className="my-2 bg-teal-500/20" />}
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AgencyPage;