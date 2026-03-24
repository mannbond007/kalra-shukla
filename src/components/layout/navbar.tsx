"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/70 backdrop-blur-xl shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-white p-2 flex rounded">
            <GraduationCap className="w-6 h-6 text-secondary" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none text-primary">
              Kalra Shukla
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-secondary uppercase">
              Classes
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary relative group",
                pathname === link.href ? "text-secondary" : "text-slate-700"
              )}
            >
              {link.name}

              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary rounded-full" />
              )}

              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary rounded-full transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full">
            <Phone className="w-4 h-4 text-secondary" />
            <span>+91 99999 00000</span>
          </div>

          <Link href="/contact" tabIndex={-1}>
            <Button className="rounded-full shadow-md hover:shadow-lg transition-all">
              Book Free Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "py-2 text-base font-medium border-b border-slate-100",
                pathname === link.href
                  ? "text-secondary"
                  : "text-slate-700"
              )}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full mt-2"
            tabIndex={-1}
          >
            <Button className="w-full rounded-xl">
              Book Free Demo
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}