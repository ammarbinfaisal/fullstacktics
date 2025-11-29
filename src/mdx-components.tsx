import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { ExternalLink, AlertTriangle, Info } from 'lucide-react';
import FinalCTA from './components/FinalCTA';

const CustomLink = ({ href = '', ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isExternal = href.startsWith('http');
  return (
    <Link
      href={href}
      {...props}
      className="text-link hover:text-link-hover hover:underline inline-flex items-center gap-1 font-medium transition-colors"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {props.children}
      {isExternal && <ExternalLink className="w-3 h-3" />}
    </Link>
  );
};

const CustomImage = (props: ImageProps) => {
  const { src, alt, ...rest } = props;
  return (
    <figure className="my-8">
      <div className="relative w-full overflow-hidden rounded-lg border border-border">
        <Image
          src={src}
          alt={alt || 'Blog image'}
          width={800}
          height={450}
          className="w-full h-auto"
          {...rest}
        />
      </div>
      {alt && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {alt}
        </figcaption>
      )}
    </figure>
  );
};

const Callout = ({ children, type = 'info' }: { children: React.ReactNode, type?: 'info' | 'warning' }) => {
  return (
    <Alert className={cn(
      "my-6 border-l-4",
      type === 'warning' 
        ? "border-l-amber-500 bg-amber-50 dark:bg-amber-950/20" 
        : "border-l-primary bg-primary/5"
    )}>
      <div className="flex gap-3">
        {type === 'warning' ? (
          <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
        ) : (
          <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
        )}
        <AlertDescription className="text-foreground">{children}</AlertDescription>
      </div>
    </Alert>
  );
};

// Code block with syntax highlighting
const Pre = ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
  return (
    <div className="relative group my-6">
      <pre
        className="overflow-x-auto rounded-lg border border-border bg-secondary/50 p-4 text-sm leading-relaxed text-foreground"
        {...props}
      >
        {children}
      </pre>
    </div>
  );
};

// Inline code
const InlineCode = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  // If it's inside a pre (code block), don't apply inline styles
  if (className?.includes('language-')) {
    return <code className={cn(className, "text-foreground")} {...props}>{children}</code>;
  }
  
  return (
    <code
      className="relative rounded-md bg-primary/10 px-[0.4rem] py-[0.2rem] font-mono text-sm text-primary font-medium"
      {...props}
    >
      {children}
    </code>
  );
};

const TableWrapper = (props: React.HTMLAttributes<HTMLTableElement>) => {
  return (
    <div className="my-8 w-full overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  );
};

const TableHeader = (props: React.HTMLAttributes<HTMLTableCellElement>) => (
  <th className="bg-secondary px-4 py-3 text-left font-semibold text-foreground border-b border-border" {...props} />
);

const TableCell = (props: React.HTMLAttributes<HTMLTableCellElement>) => (
  <td className="px-4 py-3 border-b border-border last:border-b-0" {...props} />
);

const CustomHeading = ({ level, children, ...props }: { level?: number, children?: React.ReactNode } & React.HTMLAttributes<HTMLHeadingElement>) => {
  const Components = {
    1: (p: React.HTMLAttributes<HTMLHeadingElement>) => <h1 {...p} />,
    2: (p: React.HTMLAttributes<HTMLHeadingElement>) => <h2 {...p} />,
    3: (p: React.HTMLAttributes<HTMLHeadingElement>) => <h3 {...p} />,
    4: (p: React.HTMLAttributes<HTMLHeadingElement>) => <h4 {...p} />,
    5: (p: React.HTMLAttributes<HTMLHeadingElement>) => <h5 {...p} />,
    6: (p: React.HTMLAttributes<HTMLHeadingElement>) => <h6 {...p} />,
  };

  const styles = {
    1: 'text-4xl font-bold tracking-tight mb-6 text-foreground',
    2: 'text-2xl font-bold tracking-tight mt-12 mb-4 pb-2 border-b border-border text-foreground',
    3: 'text-xl font-semibold mt-8 mb-4 text-foreground',
    4: 'text-lg font-semibold mt-6 mb-3 text-foreground',
    5: 'text-base font-semibold mt-4 mb-2 text-foreground',
    6: 'text-sm font-semibold mt-4 mb-2 text-foreground uppercase tracking-wide',
  };

  const Component = Components[level as keyof typeof Components];

  return (
    <Component
      className={cn(styles[level as keyof typeof styles], 'scroll-m-20')}
      {...props}
    >
      {children}
    </Component>
  );
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    
    // Typography
    h1: (props) => <CustomHeading level={1} {...props} />,
    h2: (props) => <CustomHeading level={2} {...props} />,
    h3: (props) => <CustomHeading level={3} {...props} />,
    h4: (props) => <CustomHeading level={4} {...props} />,
    h5: (props) => <CustomHeading level={5} {...props} />,
    h6: (props) => <CustomHeading level={6} {...props} />,
    p: (props) => <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6" {...props} />,
    
    // Links
    a: CustomLink,
    
    // Code
    pre: Pre,
    code: InlineCode,
    
    // Tables
    table: TableWrapper,
    th: TableHeader,
    td: TableCell,
    
    // Lists
    ul: (props) => <ul className="my-6 ml-6 list-disc space-y-2 text-muted-foreground [&>li]:pl-2" {...props} />,
    ol: (props) => <ol className="my-6 ml-6 list-decimal space-y-2 text-muted-foreground [&>li]:pl-2" {...props} />,
    li: (props) => <li className="leading-7" {...props} />,
    
    // Other elements
    hr: () => <hr className="my-12 border-t border-border" />,
    blockquote: (props) => (
      <blockquote 
        className="mt-6 border-l-4 border-primary bg-secondary/30 py-4 px-6 rounded-r-lg italic text-muted-foreground [&>p]:mt-0" 
        {...props} 
      />
    ),
    strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
    em: (props) => <em className="italic" {...props} />,

    // Custom UI components
    Card: (props) => <Card className="my-6" {...props} />,
    CardHeader: (props) => <CardHeader {...props} />,
    CardContent: (props) => <CardContent {...props} />,
    CardTitle: (props) => <CardTitle {...props} />,
    Badge: (props) => <Badge variant="secondary" className="rounded-md" {...props} />,
    Button: (props) => <Button {...props} />,
    Tabs: (props) => <Tabs className="my-6" {...props} />,
    TabsList: (props) => <TabsList {...props} />,
    TabsTrigger: (props) => <TabsTrigger {...props} />,
    TabsContent: (props) => <TabsContent {...props} />,
    
    // Callouts
    Callout: (props) => <Callout type="info" {...props} />,
    Alert: (props) => <Callout type="info" {...props} />,
    Warning: (props) => <Callout type="warning" {...props} />,
    
    // Media
    Image: CustomImage,
    
    // CTA
    FinalCTA: (props) => <FinalCTA {...props} />,
  };
}
