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

const CustomLink = ({ href = '', ...props }) => {
  const isExternal = href.startsWith('http');
  return (
    <Link
      href={href}
      {...props}
      className="text-primary hover:underline inline-flex items-center gap-1"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {props.children}
      {isExternal && <ExternalLink className="w-3 h-3" />}
    </Link>
  );
};

const CustomImage = (props: ImageProps) => {
  return (
    <div className="relative w-full h-[400px] my-8 rounded-lg">
      <Image
        src={props.src}
      alt={props.alt || 'Blog image'}
      width={800}
      height={400}
      />
    </div>
  );
};

const Callout = ({ children, type = 'info' }: { children: React.ReactNode, type: 'info' | 'warning' }) => {
  return (
    <Alert className="my-6">
      {type === 'warning' ? (
        <AlertTriangle className="h-4 w-4" />
      ) : (
        <Info className="h-4 w-4" />
      )}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

const Pre = (props: React.HTMLAttributes<HTMLPreElement>) => {
  return (
    <pre
      className="relative overflow-x-auto border rounded-lg p-4 bg-muted/50 my-6"
      {...props}
    />
  );
};

const CodeBlock = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
    >
      {children}
    </code>
  );
};

const TableWrapper = (props: React.HTMLAttributes<HTMLTableElement>) => {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full border-collapse border" {...props} />
    </div>
  );
};

const CustomHeading = ({ level, children, ...props }: { level?: number, children?: React.ReactNode} & React.HTMLAttributes<HTMLHeadingElement>) => {
  const Components = {
    1: (p: React.HTMLAttributes<HTMLHeadingElement>) => <h1 {...p} />,
    2: (p: React.HTMLAttributes<HTMLHeadingElement>) => <h2 {...p} />,
    3: (p: React.HTMLAttributes<HTMLHeadingElement>) => <h3 {...p} />,
    4: (p: React.HTMLAttributes<HTMLHeadingElement>) => <h4 {...p} />,
    5: (p: React.HTMLAttributes<HTMLHeadingElement>) => <h5 {...p} />,
    6: (p: React.HTMLAttributes<HTMLHeadingElement>) => <h6 {...p} />,
  }
  const sizes = {
    1: 'text-4xl font-bold tracking-tight mb-6',
    2: 'text-3xl font-semibold tracking-tight mb-4',
    3: 'text-2xl font-semibold mb-4',
    4: 'text-xl font-semibold mb-4',
    5: 'text-lg font-semibold mb-4',
    6: 'text-base font-semibold mb-4',
  };

  const Component = Components[level as keyof typeof Components];

  return (
    <Component
      className={cn(sizes[level as keyof typeof sizes], 'scroll-m-20')}
      {...props}
    >
      {children}
    </Component>
  );
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Basic HTML elements
    h1: (props) => <CustomHeading level={1} {...props} />,
    h2: (props) => <CustomHeading level={2} {...props} />,
    h3: (props) => <CustomHeading level={3} {...props} />,
    h4: (props) => <CustomHeading level={4} {...props} />,
    h5: (props) => <CustomHeading level={5} {...props} />,
    h6: (props) => <CustomHeading level={6} {...props} />,
    p: (props) => <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />,
    a: CustomLink,
    pre: Pre,
    code: CodeBlock,
    table: TableWrapper,
    th: (props) => <th className="border px-4 py-2 text-left font-bold" {...props} />,
    td: (props) => <td className="border px-4 py-2" {...props} />,
    ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
    ol: (props) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
    hr: () => <hr className="my-8 border-t" />,
    blockquote: (props) => (
      <blockquote className="mt-6 border-l-4 pl-6 italic" {...props} />
    ),

    // Custom components
    Card: (props) => <Card className="px-4 py-2" {...props} />,
    CardHeader: (props) => <CardHeader className="px-4 py-2" {...props} />,
    CardContent: (props) => <CardContent className="px-4 py-2" {...props} />,
    CardTitle: (props) => <CardTitle className="px-4 py-2" {...props} />,
    Badge: (props) => (
      <Badge variant="secondary" className="rounded-md px-2" {...props} />
    ),
    Button: (props) => <Button className="px-4 py-2" {...props} />,
    Tabs: (props) => <Tabs className="px-4 py-2" {...props} />,
    TabsList: (props) => <TabsList className="px-4 py-2" {...props} />,
    TabsTrigger: (props) => <TabsTrigger className="px-4 py-2" {...props} />,
    TabsContent: (props) => <TabsContent className="px-4 py-2" {...props} />,
    Callout: (props) => <Callout type="info" {...props} />,

    // Custom component shortcuts
    Alert: (props) => <Callout type="info" {...props} />,
    Warning: (props) => <Callout type="warning" {...props} />,
    FinalCTA: (props) => <FinalCTA {...props} />,
    Image: (props) => <CustomImage {...props} />,
  };
}