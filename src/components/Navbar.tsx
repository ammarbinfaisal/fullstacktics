"use client";

import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
              Fullstacktics
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#services"
              className="text-sm font-medium hover:text-primary"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </a>
            <ThemeSwitcher />
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <Link
                  href="#services"
                  className="text-sm font-medium hover:text-primary"
                >
                  Services
                </Link>
                <Link
                  href="#contact"
                  className="text-sm font-medium hover:text-primary"
                >
                  Contact
                </Link>
                <ThemeSwitcher />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
