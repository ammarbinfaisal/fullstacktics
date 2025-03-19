"use client";

import { useState, useEffect } from "react";
import { Menu, Zap, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import servicesData from "@/app/services.json";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = Object.entries(servicesData).map(([key, service]) => ({
    slug: key,
    href: `/services/${key}`,
    ...service
  }));

  const resources = [
    {
      title: "Technical Blog",
      description: "Best practices for Next.js optimization",
      href: "/blog",
      icon: Zap
    },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-primary/10' : 'bg-transparent'
      }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2 group'>
            <Zap className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
            <span className='text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
              Fullstacktics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-6'>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                      {services.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-start gap-4 rounded-lg p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="rounded-md bg-primary/10 p-1">
                            <Zap className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-1">{item.title}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[600px] grid-cols-2">
                      {resources.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-start gap-4 rounded-lg p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="rounded-md bg-primary/10 p-1">
                            <item.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-1">{item.title}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* let's talk */}
                <NavigationMenuItem>
                  <Link href="/contact">
                    <Button variant="default">
                      <Terminal className="h-5 w-5 mr-2" />
                      <span>
                        Let&apos;s Talk
                      </span>
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <div className="flex flex-col gap-4 p-6">
                <div className="border-b pb-4">
                  <div className="text-sm font-medium mb-2">Services</div>
                  {services.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Zap className="h-4 w-4" />
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="border-b pb-4">
                  <div className="text-sm font-medium mb-2">Resources</div>
                  {resources.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Link href="/process" className="text-sm font-medium hover:text-primary transition-colors">
                    Our Process
                  </Link>
                  <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}