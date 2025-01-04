import Cal from "@/app/Cal";
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Rocket } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container relative mx-auto">
      {/* Gradient background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/2 to-transparent -z-10" />

      <div className="flex flex-col items-center gap-8 py-20">
        <div className="max-w-[980px] text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] mb-6">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Intelligent Automation
            </span>
          </h1>

          <p className="text-xl text-muted-foreground sm:text-2xl font-medium mb-8 max-w-[850px] mx-auto">
            Connect Make.com, n8n, and custom code to create powerful automation workflows that
            <span className="text-foreground"> save 40+ hours weekly</span>
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-background/50 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary">80%</div>
              <p className="text-sm text-muted-foreground">⚡ Manual Tasks Reduced</p>
            </div>
            <div className="p-4 bg-background/50 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary">$12k+</div>
              <p className="text-sm text-muted-foreground">💰 Yearly Tool Savings</p>
            </div>
            <div className="p-4 bg-background/50 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary">14</div>
              <p className="text-sm text-muted-foreground">🚀 Days Implementation</p>
            </div>
            <div className="p-4 bg-background/50 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary">100+</div>
              <p className="text-sm text-muted-foreground">✅ Clients Automated</p>
            </div>
          </div>
          <span className="text-sm text-muted-foreground my-12">* Results based on average client data</span>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Cal>
              <Button size="lg" className="text-base gap-2">
                Schedule Free Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Cal>
          </div>

          {/* Integration logos */}
          <div className="flex justify-center items-center flex-wrap justify-center gap-8 opacity-70">
            <Rocket className="h-8 w-8" />
            <Image width={87} height={141} src="/make-logo.svg" alt="Make.com" className="w-16" />
            <Image width={500} height={200} src="/n8n-logo.svg" alt="n8n" className="w-16" />
            <Code2 className="h-8 w-8" />
          </div>
        </div>
      </div>
    </section>
  );
}