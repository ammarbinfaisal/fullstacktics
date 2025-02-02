import Cal from "@/app/Cal";
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Command, Cpu, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section className="container relative mx-auto py-24">
      {/* Enhanced gradient background with tech-inspired pattern */}

      <div className="flex flex-col items-center gap-8 py-20">
        <div className="max-w-[980px] text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              <Zap className="mr-1 h-3 w-3" />
              High-Performance SaaS Development
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] mb-6">
            Building{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Lightning-Fast SaaS
            </span>
            {" "}with Next.js
          </h1>

          <p className="text-xl text-muted-foreground sm:text-2xl font-medium mb-8 max-w-[850px] mx-auto">
            Full-stack development with obsessive performance optimization.
            <span className="text-foreground"> Sub-second load times</span> and
            <span className="text-foreground"> perfect Core Web Vitals</span>.
          </p>

          {/* Enhanced stats grid with technical metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-background/50 rounded-lg backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors">
              <div className="text-3xl font-bold text-primary">{"<1s"}</div>
              <p className="text-sm text-muted-foreground">⚡ First Paint (FCP)</p>
            </div>
            <div className="p-4 bg-background/50 rounded-lg backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors">
              <div className="text-3xl font-bold text-primary">100</div>
              <p className="text-sm text-muted-foreground">🎯 Performance Score</p>
            </div>
            <div className="p-4 bg-background/50 rounded-lg backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors">
              <div className="text-3xl font-bold text-primary">0</div>
              <p className="text-sm text-muted-foreground">📊 Layout Shift</p>
            </div>
            <div className="p-4 bg-background/50 rounded-lg backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors">
              <div className="text-3xl font-bold text-primary">{"<2.5s"}</div>
              <p className="text-sm text-muted-foreground">🚀 LCP Time</p>
            </div>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Next.js 14", "React Server Components", "Prisma", "Supabase", "Stripe"].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Cal>
              <Button size="lg" className="text-base gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
                Schedule Technical Review
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Cal>
          </div>

          {/* Tech stack icons */}
          <div className="flex justify-center items-center flex-wrap gap-8 opacity-70">
            <Command className="h-8 w-8" />
            <Cpu className="h-8 w-8" />
            <Layers className="h-8 w-8" />
            <Zap className="h-8 w-8" />
          </div>
        </div>
      </div>
    </section>
  );
}