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

export default function LeadGenForm() {
  return (
    <section className="py-12 md:py-24 mx-auto relative">
      {/* Background gradient with rose */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-200/10 rounded-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-foreground">
            Let&apos;s discuss your <span className="text-primary">project</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Tell us about your project requirements and budget, and we&apos;ll get back to you with a tailored solution.
          </p>
          <div className="flex flex-col items-center gap-4 text-center">
            <Cal>
              <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground">
                Schedule Technical Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Cal>
          </div>
        </div>
        
        <div className="mx-auto mt-12 max-w-3xl">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Project Details</CardTitle>
              <CardDescription>
                Share your project requirements and we&apos;ll create a custom solution for you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TurnstileContactForm />
              
              <div className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <Link href="mailto:ammar@fullstacktics.com" className="text-link hover:text-link-hover transition-colors">
                    ammar@fullstacktics.com
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary-400" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
