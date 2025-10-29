"use client"

import { ArrowRight, Mail, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Cal from "@/app/Cal";
import TurnstileContactForm from "@/components/TurnstileContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 mx-auto">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Ready to get started?
        </h2>
        <div className="flex flex-col items-center gap-4 text-center">
          <Cal>
            <Button className="group">
              Schedule Technical Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Cal>
        </div>
      </div>
      <div className="mx-auto mt-8 sm:mt-12 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Have a project in mind? Let&apos;s discuss and create something incredible.
            </CardDescription>
            <div className="mt-4">
              <TurnstileContactForm />
            </div>
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
