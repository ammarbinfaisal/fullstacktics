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
            <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700 ring-1 ring-inset ring-yellow-200">
              <Zap className="mr-1 h-3 w-3" />
              AI-Driven Development
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] mb-6">
            Crafting{" "}
            <span className="text-yellow-500">
              Next-Gen Solutions
            </span>
            {" "}with AI & Full-Stack Expertise
          </h1>

          <p className="text-xl text-[#4B5E6A] sm:text-2xl font-medium mb-8 max-w-[850px] mx-auto">
            We build intelligent systems with
            <span className="text-yellow-600"> cutting-edge AI</span> and
            <span className="text-yellow-600"> high-performance stacks</span>—optimized for speed and scale.
          </p>

          {/* Updated stats grid with AI/dev metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-yellow-400/50 transition-colors">
              <div className="text-3xl font-bold text-yellow-600">10x</div>
              <p className="text-sm text-[#4B5E6A]">⚡ Inference Speed (vLLM)</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-yellow-400/50 transition-colors">
              <div className="text-3xl font-bold text-yellow-600">99%</div>
              <p className="text-sm text-[#4B5E6A]">🎯 Model Accuracy</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-yellow-400/50 transition-colors">
              <div className="text-3xl font-bold text-yellow-600">{"<1s"}</div>
              <p className="text-sm text-[#4B5E6A]">📊 API Response Time</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-yellow-400/50 transition-colors">
              <div className="text-3xl font-bold text-yellow-600">100%</div>
              <p className="text-sm text-[#4B5E6A]">🚀 Uptime Guarantee</p>
            </div>
          </div>

          {/* Updated tech stack badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["PyTorch", "Next.js", "Go", "FastAPI", "vLLM", "Postgres"].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200"
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
                className="text-base gap-2 bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
              >
                Schedule a Technical Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Cal>
          </div>

          {/* Tech stack icons */}
          <div className="flex justify-center items-center flex-wrap gap-8 opacity-70">
            <Command className="h-8 w-8 text-gray-400" />
            <Cpu className="h-8 w-8 text-gray-400" />
            <Layers className="h-8 w-8 text-gray-400" />
            <Zap className="h-8 w-8 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}