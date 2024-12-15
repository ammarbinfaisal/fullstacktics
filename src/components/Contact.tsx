"use client"

import { Mail, MapPin } from "lucide-react";
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
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Contact() {
  const [formState, submit] = useForm(process.env.NEXT_PUBLIC_FORM!)

  useEffect(() => {
    if (formState.succeeded) {
      // @ts-expect-error - Google Ads conversion tracking
      gtag('event', 'conversion', {
        'send_to': 'AW-11298597203/N4x_COrxrPcZENPSy4sq',
        'value': 80.0,
        'currency': 'INR',
        'event_callback': () => {
          console.log("Conversion tracked successfully");
        }
      });
      redirect("/we-will-contact-you");
    }
  }, [formState.succeeded]);

  return (
    <section id="contact" className="container py-12 md:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Ready to get started?
        </h2>
      </div>
      <div className="mx-auto mt-8 sm:mt-12 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Have a project in mind? Let's discuss and create something incredible.
            </CardDescription>
            <form onSubmit={submit} className="flex flex-col gap-4 mt-4 justify-center">
              <div className="flex flex-col gap-4 mt-4">
                <Label htmlFor="name" className="text-sm font-medium text-primary">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="input"
                />
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <Label htmlFor="email" className="text-sm font-medium text-primary">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email" />
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <Label htmlFor="message" className="text-sm font-medium text-primary">
                  Describe your project
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here"
                  className="input"
                />
              </div>
              <div className="flex gap-4 mt-4">
                <Button variant="ghost">Submit</Button>
              </div>
            </form>
            <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <Link href="mailto:ammar@fullstacktics.com">
                  <span>ammar@fullstacktics.com</span>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
