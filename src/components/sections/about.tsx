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
    "Modern Infrastructure"
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
                  <Image src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Students studying" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-primary/10 h-48 relative">
                  <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" alt="Campus" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-primary/10 h-48 relative">
                  <Image src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" alt="Library" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-primary/10 h-64 relative">
                  <Image src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" alt="Classroom" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              </div>
            </div>
            {/* Floating Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass rounded-2xl p-6 text-center shadow-2xl border-white/50 w-48 z-20">
              <span className="block text-5xl font-bold text-secondary mb-1">20+</span>
              <span className="text-sm font-semibold text-primary">Years of Excellence</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
            <SectionHeader 
              title="Transforming Dreams Into Reality" 
              subtitle="About Kalra Shukla Classes" 
              centered={false} 
            />
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Kalra Shukla Classes in Lucknow, we believe that every student has the potential to excel. Our systematic approach to teaching, rigorous testing, and continuous feedback mechanisms ensure that our students are well-prepared for the highly competitive NEET and IIT-JEE examinations.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We go beyond just completing the syllabus. Our focus is on deep conceptual understanding, analytical thinking, and effective time management — the pillars of success in entrance exams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="rounded-full bg-secondary/10 p-1">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-medium text-primary">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
