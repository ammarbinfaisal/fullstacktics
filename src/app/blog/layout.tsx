import Footer from "@/components/footer"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <article className="min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:mb-4
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
            prose-h3:text-xl prose-h3:mt-8
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-code:text-sm prose-code:font-normal
            prose-pre:bg-transparent prose-pre:p-0
            prose-img:rounded-lg prose-img:shadow-md
            prose-blockquote:border-l-primary prose-blockquote:bg-secondary/30 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
            prose-ul:text-muted-foreground prose-ol:text-muted-foreground
            prose-li:marker:text-primary
            prose-table:text-sm
            prose-th:bg-secondary prose-th:text-foreground
            prose-td:border-border
          ">
            {children}
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
