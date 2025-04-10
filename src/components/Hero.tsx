import Cal from "@/app/Cal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Command, Cpu, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section className="container relative mx-auto py-24 bg-[#F5F5F5] text-[#4B5E6A]">
      {/* Enhanced gradient background with tech-inspired pattern */}
      <div className="flex flex-col items-center gap-8 py-20">
        <div className="max-w-[980px] text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center rounded-full bg-[#4A919E]/10 px-3 py-1 text-sm font-medium text-[#4A919E] ring-1 ring-inset ring-[#4A919E]/20">
              <Zap className="mr-1 h-3 w-3" />
              AI-Driven Development
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] mb-6">
            Crafting{" "}
            <span className="bg-gradient-to-r from-[#4A919E] to-teal-600 bg-clip-text text-transparent">
              Next-Gen Solutions
            </span>
            {" "}with AI & Full-Stack Expertise
          </h1>

          <p className="text-xl text-[#4B5E6A] sm:text-2xl font-medium mb-8 max-w-[850px] mx-auto">
            We build intelligent systems with
            <span className="text-[#4A919E]"> cutting-edge AI</span> and
            <span className="text-[#4A919E]"> high-performance stacks</span>—optimized for speed and scale.
          </p>

          {/* Updated stats grid with AI/dev metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-white rounded-lg shadow-sm border border-[#4A919E]/10 hover:border-[#4A919E]/20 transition-colors">
              <div className="text-3xl font-bold text-[#4A919E]">10x</div>
              <p className="text-sm text-[#4B5E6A]">⚡ Inference Speed (vLLM)</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-[#4A919E]/10 hover:border-[#4A919E]/20 transition-colors">
              <div className="text-3xl font-bold text-[#4A919E]">99%</div>
              <p className="text-sm text-[#4B5E6A]">🎯 Model Accuracy</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-[#4A919E]/10 hover:border-[#4A919E]/20 transition-colors">
              <div className="text-3xl font-bold text-[#4A919E]">{"<1s"}</div>
              <p className="text-sm text-[#4B5E6A]">📊 API Response Time</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-[#4A919E]/10 hover:border-[#4A919E]/20 transition-colors">
              <div className="text-3xl font-bold text-[#4A919E]">100%</div>
              <p className="text-sm text-[#4B5E6A]">🚀 Uptime Guarantee</p>
            </div>
          </div>

          {/* Updated tech stack badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["PyTorch", "Next.js", "Go", "FastAPI", "vLLM", "Postgres"].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-[#4A919E]/5 px-3 py-1 text-xs font-medium text-[#4A919E] ring-1 ring-inset ring-[#4A919E]/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA buttons with updated styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Cal>
              <Button
                size="lg"
                className="text-base gap-2 bg-gradient-to-r from-[#4A919E] to-teal-600 text-white hover:from-[#3A7A85] hover:to-teal-700"
              >
                Schedule a Technical Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Cal>
          </div>

          {/* Tech stack icons */}
          <div className="flex justify-center items-center flex-wrap gap-8 opacity-70">
            <Command className="h-8 w-8 text-[#4A919E]" />
            <Cpu className="h-8 w-8 text-[#4A919E]" />
            <Layers className="h-8 w-8 text-[#4A919E]" />
            <Zap className="h-8 w-8 text-[#4A919E]" />
          </div>
        </div>
      </div>
    </section>
  );
}