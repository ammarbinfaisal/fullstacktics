import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TurnstileContactForm from "@/components/TurnstileContactForm";

export default function ProjectInquiry() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
          Project <span className="text-primary">Inquiry</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Tell us about your project and we&apos;ll get back to you with a tailored solution.
        </p>
      </div>

      <div className="mx-auto max-w-xl">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Project Details</CardTitle>
            <CardDescription>
              Share your project requirements and we&apos;ll create a custom solution for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TurnstileContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
