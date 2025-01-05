import type { MDXComponents } from 'mdx/types'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { cn } from "@/lib/utils"
import * as React from "react"

interface CalloutProps {
  icon?: string
  children?: React.ReactNode
  type?: "default" | "warning" | "danger"
}

function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 p-4 bg-background/50 rounded-lg backdrop-blur-sm",
        {
          "border-l-4 border-blue-500": type === "default",
          "border-l-4 border-yellow-500": type === "warning",
          "border-l-4 border-red-500": type === "danger"
        }
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1
      className="my-6 scroll-m-20 text-4xl font-bold tracking-tight"
    >
      {children}
    </h1>
  ),
  h2: (props) => (
    <h2
      className="mt-8 mb-4 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight"
    >
      {props.children}
    </h2>
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-4 scroll-m-20 text-2xl font-semibold tracking-tight"
    >
      {props.children}
    </h3>
  ),
  h4: (props) => (
    <h4
      className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="leading-7 [&:not(:first-child)]:mt-6"
    >
      {props.children}
    </p>
  ),
  ul: (props) => (
    <ul className="my-6 list-disc space-y-2 pl-6" >
      {props.children}
    </ul>
  ),
  ol: (props) => (
    <ol className="my-6 list-decimal space-y-2 pl-6" >
      {props.children}
    </ol>
  ),
  li: (props) => (
    <li className="mt-2">
      {props.children}
    </li>
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground"
    >
      {props.children}
    </blockquote>
  ),
  table: (props) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full" {...props} />
    </div>
  ),
  tr: (props) => (
    <tr
      className="m-0 border-t p-0 even:bg-muted"
    >
      {props.children}
    </tr>
  ),
  th: (props) => (
    <th
      className={"border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"}
      {...props}
    />
  ),
  td: (props) => (
    <td
      className=
      "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4"
    >
      {props.children}
    </pre>
  ),
  code: (props) => (
    <code
      className="relative rounded bg-[#1f2430] px-4 py-2 font-mono text-sm"
    >
      {props.children}
    </code>
  ),
  Alert,
  AlertDescription,
  Callout,
}

export function useMDXComponents(c: MDXComponents): MDXComponents {
  return {
    ...c,
    ...components
  }
}

