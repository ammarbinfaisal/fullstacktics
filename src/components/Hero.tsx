import Cal from "@/app/Cal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

const techIcons = [
  { name: "Next.js", icon: "/tech/nextjs.svg" },
  { name: "React", icon: "/tech/react.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "Python", icon: "/tech/python.svg" },
  { name: "Playwright", icon: "/tech/playwright.svg" },
  { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
  { name: "Docker", icon: "/tech/docker.svg" },
  { name: "Redis", icon: "/tech/redis.svg" },
  { name: "Stripe", icon: "/tech/stripe.svg" },
  { name: "Tailwind CSS", icon: "/tech/tailwind.svg" },
];

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
            <span className="bg-gradient-to-r from-[#4B5E6A] via-[#5A6F7B] to-[#4B5E6A] bg-clip-text text-transparent">
              Crafting
            </span>{" "}
            <span className="bg-gradient-to-r from-[#4A919E] via-teal-500 to-[#3A7A85] bg-clip-text text-transparent">
              Next-Gen Solutions
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#5A6F7B] via-[#4B5E6A] to-[#3A4C56] bg-clip-text text-transparent">
              with AI & Full-Stack Expertise
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium mb-8 max-w-[850px] mx-auto">
            <span className="bg-gradient-to-r from-[#4B5E6A] to-[#5A6F7B] bg-clip-text text-transparent">
              We build intelligent systems with
            </span>
            <span className="bg-gradient-to-r from-[#4A919E] to-teal-600 bg-clip-text text-transparent"> cutting-edge AI</span>
            <span className="bg-gradient-to-r from-[#5A6F7B] to-[#4B5E6A] bg-clip-text text-transparent"> and</span>
            <span className="bg-gradient-to-r from-[#4A919E] to-teal-600 bg-clip-text text-transparent"> high-performance stacks</span>
            <span className="bg-gradient-to-r from-[#4B5E6A] to-[#5A6F7B] bg-clip-text text-transparent">—optimized for speed and scale.</span>
          </p>

          {/* Updated stats grid with relevant metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-white rounded-lg shadow-sm border border-[#4A919E]/10 hover:border-[#4A919E]/20 transition-colors">
              <div className="text-3xl font-bold text-[#4A919E]">50+</div>
              <p className="text-sm text-[#4B5E6A]">Projects Delivered</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-[#4A919E]/10 hover:border-[#4A919E]/20 transition-colors">
              <div className="text-3xl font-bold text-[#4A919E]">99%</div>
              <p className="text-sm text-[#4B5E6A]">Bot Success Rate</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-[#4A919E]/10 hover:border-[#4A919E]/20 transition-colors">
              <div className="text-3xl font-bold text-[#4A919E]">{"<1s"}</div>
              <p className="text-sm text-[#4B5E6A]">API Response Time</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-[#4A919E]/10 hover:border-[#4A919E]/20 transition-colors">
              <div className="text-3xl font-bold text-[#4A919E]">100%</div>
              <p className="text-sm text-[#4B5E6A]">Uptime Guarantee</p>
            </div>
          </div>

          {/* Updated tech stack badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Next.js", "React", "TypeScript", "Python", "Playwright", "PostgreSQL", "Docker", "Redis"].map((tech) => (
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
          <div className="flex justify-center items-center flex-wrap gap-8 opacity-80">
            {techIcons.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="h-8 w-8 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
