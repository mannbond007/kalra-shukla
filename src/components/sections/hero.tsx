"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary pt-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
          alt="Students"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/60" />
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-secondary/20 blur-[120px] -translate-x-1/2" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <span className="h-2 w-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm text-white/90">
                Admissions Open 2026–27
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Crack NEET & IIT-JEE with{" "}
              <span className="bg-gradient-to-r from-secondary to-orange-400 bg-clip-text text-transparent">
                Expert Guidance
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto lg:mx-0">
              Concept-focused learning, top faculty, and proven results. Start
              your journey toward medical and engineering success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/courses">
                <Button className="bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/30">
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Book Free Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center mt-12 lg:mt-0 w-full">
            {/* Wrapper that tightly hugs the image */}
            <div className="relative w-full max-w-[420px]">
              {/* IMAGE */}
              <div className="relative w-full h-[380px] sm:h-[420px] md:h-[460px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1974&auto=format&fit=crop"
                  alt="Students studying"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              </div>

              {/* BADGE 1 */}
              <div className="absolute top-6 -left-2 sm:top-10 sm:-left-8 z-20">
                <div
                  className="flex items-center gap-4 px-6 py-2.5 rounded-xl min-w-[180px]
                  bg-gradient-to-br from-black/80 to-black/50 backdrop-blur-xl
                  border border-white/10 shadow-xl shadow-black/40"
                >
                  {/* ICON CONTAINER */}
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-full
                  bg-secondary/25 border border-secondary/40 shadow-inner"
                  >
                    <GraduationCap className="w-6 h-6 text-secondary" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p className="text-base font-semibold text-white leading-tight">
                      10,000+
                    </p>
                    <p className="text-xs text-white/80">Selections</p>
                  </div>
                </div>
              </div>

              {/* BADGE 2 */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-8 z-20">
                <div
                  className="flex items-center gap-4 px-6 py-2.5 rounded-xl min-w-[180px]
                  bg-gradient-to-br from-black/80 to-black/50 backdrop-blur-xl
                  border border-white/10 shadow-xl shadow-black/40"
                >
                  {/* ICON CONTAINER */}
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-full
                  bg-secondary/25 border border-secondary/40 shadow-inner"
                  >
                    <Users className="w-6 h-6 text-secondary" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p className="text-base font-semibold text-white leading-tight">
                      50+
                    </p>
                    <p className="text-xs text-white/80">Expert Faculty</p>
                  </div>
                </div>
              </div>

              {/* BADGE 3 */}
              <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:left-10 z-20">
                <div
                  className="flex items-center gap-4 px-6 py-2.5 rounded-xl min-w-[200px] max-w-[260px]
                  bg-gradient-to-br from-black/80 to-black/50 backdrop-blur-xl
                  border border-white/10 shadow-xl shadow-black/40"
                >
                  {/* ICON CONTAINER */}
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-full
                  bg-secondary/25 border border-secondary/40 shadow-inner shrink-0"
                  >
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>

                  {/* TEXT (NOW MATCHING OTHER BADGES) */}
                  <div>
                    <p className="text-base font-semibold text-white leading-tight">
                      Mentorship
                    </p>
                    <p className="text-xs text-white/80">
                      Doubt Support Included
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
