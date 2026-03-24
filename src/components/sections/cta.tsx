import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
      <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/95 to-primary/80 z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-10" />

      <div className="container relative mx-auto px-4 md:px-6 z-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance max-w-3xl mx-auto leading-tight">
          Ready to Start Your Medical or Engineering Journey?
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          Enroll at Kalra Shukla Classes today and take the first step towards your dream career. Book a free demo class to experience our teaching methodology.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" tabIndex={-1}>
            <Button size="lg" className="w-full sm:w-auto bg-secondary text-white hover:bg-secondary/90 border-none rounded-xl h-14 px-8 text-lg font-semibold shadow-xl shadow-secondary/20">
              Book Free Demo
            </Button>
          </Link>
          <Link href="/courses" tabIndex={-1}>
            <Button size="lg" variant="glass" className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 rounded-xl h-14 px-8 text-lg font-medium">
              Explore Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
