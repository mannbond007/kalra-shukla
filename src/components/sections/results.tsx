import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "10K+", label: "Selections" },
  { value: "500+", label: "Top 1000 Ranks" },
  { value: "95%", label: "Success Rate" },
  { value: "50+", label: "Expert Faculty" },
];

const topResults = [
  {
    name: "Aarav Sharma",
    exam: "NEET 2025",
    score: "715/720",
    rank: "AIR 12",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop"
  },
  {
    name: "Priya Singh",
    exam: "JEE Advanced 2025",
    score: "99.98%ile",
    rank: "AIR 45",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop"
  },
  {
    name: "Rohan Patel",
    exam: "NEET 2025",
    score: "705/720",
    rank: "AIR 88",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop"
  },
  {
    name: "Sneha Gupta",
    exam: "JEE Main 2025",
    score: "99.99%ile",
    rank: "AIR 23",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop"
  }
];

export function ResultsSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader 
          title="Our Legacy of Excellence" 
          subtitle="Top Results" 
          centered={true}
          className="text-white [&>h2]:text-white"
        />
        
        {/* Animated Stats inside Glass Container */}
        <div className="glass-dark rounded-3xl p-8 md:p-12 mt-12 border-white/10 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center px-4 py-6 md:py-0">
                <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-slate-400 mb-2">
                  {stat.value}
                </span>
                <span className="text-secondary font-medium tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Student Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {topResults.map((result, index) => (
            <Card key={index} className="bg-white/5 border-white/10 text-white backdrop-blur-sm overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="p-0">
                <div className="relative h-64 w-full">
                  <Image src={result.image} alt={result.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-block px-2 py-1 bg-secondary text-white text-xs font-bold rounded mb-2">
                      {result.rank}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">{result.name}</h3>
                    <div className="flex justify-between items-center text-sm font-medium text-slate-300 border-t border-white/20 pt-2 mt-2">
                      <span>{result.exam}</span>
                      <span className="text-white font-bold">{result.score}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
