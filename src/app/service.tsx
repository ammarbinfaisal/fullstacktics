import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Check, Code, Rocket, Hammer, Database, Gauge } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Cal from './Cal';

const icons = {
    Bot: Bot,
    Database: Database,
    Gauge: Gauge
};

const ServicePageTemplate = ({ serviceData }: {
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
        }
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
        return tabs.map(tab => ({
            value: tab,
            label: tab.charAt(0).toUpperCase() + tab.slice(1),
            icon: tab === 'technologies' ? Code : tab === 'features' ? Rocket : Hammer,
            items: serviceData.technicalDetails[tab]
        }));
    };

    return (
        <div className="min-h-screen bg-gray-900 p-8">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <Card className="mb-8 bg-gray-800 border-teal-500/20">
                    <CardHeader className="text-center">
                        <div className="flex justify-center mb-6">
                            <IconComponent className="w-12 h-12 text-teal-500" />
                        </div>
                        <CardTitle className="text-4xl text-teal-500 mb-4">{serviceData.title}</CardTitle>
                        <CardDescription className="text-xl text-gray-300">
                            {serviceData.description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center gap-2 flex-wrap">
                        {serviceData.features.map((feature) => (
                            <Badge key={feature} className="bg-teal-500/20 text-teal-200 hover:bg-teal-500/30 text-lg p-2">
                                {feature}
                            </Badge>
                        ))}
                    </CardContent>
                </Card>

                {/* experience */}
                <Card className="mb-8 bg-gray-800 border-teal-500/20">
                    <CardHeader>
                        <CardTitle className="text-2xl text-teal-500">Experience</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-300">
                        {serviceData.experience}
                    </CardContent>
                </Card>

                {/* Testimonials */}
                <Card className="mb-8 bg-gray-800 border-teal-500/20">
                    <CardHeader>
                        <CardTitle className="text-2xl text-teal-500">Testimonials</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            {serviceData.testimonials.comments.map((comment, index) => (
                                <li key={index} className="text-gray-300">
                                    {comment}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Cal url={serviceData.testimonials.link}>
                            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 group">
                                Read more testimonials
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Cal>
                    </CardFooter>
                </Card>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Benefits Card */}
                    <Card className="bg-gray-800 border-teal-500/20">
                        <CardHeader>
                            <CardTitle className="text-2xl text-teal-500">Key Benefits</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {serviceData.benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-center gap-2 text-gray-300">
                                        <Check className="w-5 h-5 text-teal-500" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Use Cases Card */}
                    <Card className="bg-gray-800 border-teal-500/20">
                        <CardHeader>
                            <CardTitle className="text-2xl text-teal-500">Use Cases</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {serviceData.useCases.map((useCase) => (
                                    <li key={useCase} className="flex items-center gap-2 text-gray-300">
                                        <Check className="w-5 h-5 text-teal-500" />
                                        <span>{useCase}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Technical Details Section */}
                <Card className="mb-8 bg-gray-800 border-teal-500/20">
                    <CardHeader>
                        <CardTitle className="text-2xl text-teal-500">Technical Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue={getTechTabs()[0].value} className="w-full">
                            <TabsList className="grid w-full grid-cols-4 bg-gray-700">
                                {getTechTabs().map(tab => (
                                    <TabsTrigger key={tab.value} value={tab.value} className="data-[state=active]:bg-teal-500">
                                        <tab.icon className="w-4 h-4 mr-2" />
                                        {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {getTechTabs().map(tab => (
                                <TabsContent key={tab.value} value={tab.value}>
                                    <div className="grid grid-cols-2 gap-4 p-4">
                                        {tab.items.map((item) => (
                                            <div key={item} className="flex items-center gap-2 text-gray-300">
                                                <tab.icon className="w-4 h-4 text-teal-500" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </CardContent>
                </Card>

                {/* CTA Section */}
                <Card className="bg-gray-800 border-teal-500/20">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center text-teal-500">
                            Ready to leverage {serviceData.title}?
                        </CardTitle>
                        <CardDescription className="text-center text-gray-300">
                            Let us help you optimize your workflow with our {serviceData.title.toLowerCase()} solutions
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <Cal url='https://cal.com/fullstacktics/consultation'>
                            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 group">
                                Schedule a Demo
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Cal>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ServicePageTemplate;