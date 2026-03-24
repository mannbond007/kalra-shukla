import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  const features = [
    "Highly Experienced Faculty",
    "Comprehensive Study Material",
    "Regular Mock Tests & Analysis",
    "Personalized Doubt Clearing",
    "Focus on Concept Building",
    "Modern Infrastructure",
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden text-foreground">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-primary/10 h-64 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
                    alt="Students studying"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-primary/10 h-48 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                    alt="Campus"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-primary/10 h-48 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                    alt="Library"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-primary/10 h-64 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
                    alt="Classroom"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Floating Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div
                className="relative flex flex-col items-center justify-center text-center
                px-10 py-2 rounded-xl min-w-[180px]
                bg-black/30 backdrop-blur-xl
                border border-white/15
                shadow-lg shadow-black/40"
              >
                {/* subtle inner overlay for readability */}
                <div className="absolute inset-0 rounded-xl bg-black/70 pointer-events-none" />

                {/* CONTENT */}
                <span className="relative text-4xl md:text-5xl font-bold text-secondary leading-none">
                  20+
                </span>

                <span className="relative text-xs md:text-sm font-semibold text-white/90 mt-1">
                  Years of Excellence
                </span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col space-y-6">
            {/* HEADER */}
            <div>
              {/* Subtitle as Badge */}
              <span
                className="inline-block px-4 py-1.5 rounded-full 
              bg-secondary/10 border border-secondary/30 
              text-secondary text-sm font-semibold mb-3"
              >
                About Kalra Shukla Classes
              </span>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                Transforming Dreams Into Reality
              </h2>
            </div>

            {/* CONTENT */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              At Kalra Shukla Classes in Lucknow, we believe that every student
              has the potential to excel. Our systematic approach, rigorous
              testing, and continuous feedback ensure students are fully
              prepared for NEET and IIT-JEE.
            </p>

            <p className="text-slate-600 leading-relaxed max-w-xl">
              We go beyond just completing the syllabus. Our focus is on deep
              conceptual understanding, analytical thinking, and effective time
              management — the pillars of success in competitive exams.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1   sm:grid-cols-2 gap-4 pt-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg 
                bg-white shadow-sm border border-orange-300/30 hover:shadow-md transition"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                  </div>

                  <span className="text-sm font-medium text-primary">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
