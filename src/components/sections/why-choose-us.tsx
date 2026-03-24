import React from "react";
import { BookOpen, Users, Target, Clock, Trophy, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const reasons = [
  {
    title: "Expert Faculty",
    description: "Learn from top educators and ex-IITians with years of teaching experience.",
    icon: Users,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Comprehensive Material",
    description: "Well-researched study modules designed to cover every concept in depth.",
    icon: BookOpen,
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Targeted Approach",
    description: "Exam-oriented teaching methodology focusing on accuracy and speed.",
    icon: Target,
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Regular Assessments",
    description: "Weekly mock tests and performance analysis to track your progress.",
    icon: Clock,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Proven Track Record",
    description: "Thousands of selections in top medical and engineering colleges.",
    icon: Trophy,
    color: "bg-yellow-500/10 text-yellow-600"
  },
  {
    title: "Personalized Care",
    description: "One-on-one doubt clearing sessions and regular parent-teacher meetings.",
    icon: ShieldCheck,
    color: "bg-red-500/10 text-red-600"
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white text-foreground relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Why Kalra Shukla Classes?" 
          subtitle="The Winning Edge" 
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} hover className="border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                <CardHeader className="flex flex-col items-start text-left">
                  <div className={`p-3 rounded-xl mb-4 ${reason.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">{reason.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-slate-500">{reason.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
