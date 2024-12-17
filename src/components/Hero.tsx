import Link from "next/link"

export default function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 py-24 md:py-32">
      <div className="flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Building{" "}
          <span className="bg-gradient-to-r from-rose-200 to-pink-200 bg-clip-text text-transparent">
            Exceptional
          </span>{" "}
          Web Solutions
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Empowering businesses with cutting-edge web solutions. We transform ideas into powerful, scalable applications.
        </p>
        <div className="flex gap-4">
          <Link
            href="/services"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 cursor-pointer"
          >
            Get Started
          </Link>
          <Link
            href="/team"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

