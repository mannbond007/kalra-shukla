import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Stethoscope, Lightbulb } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "NEET Coaching",
    description: "Comprehensive preparation covering Physics, Chemistry, and Biology to secure a top medical seat.",
    icon: Stethoscope,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    link: "/courses#neet"
  },
  {
    title: "IIT-JEE Coaching",
    description: "Expert guidance in Physics, Chemistry, and Mathematics for top engineering institutes in India.",
    icon: Lightbulb,
    color: "text-secondary",
    bg: "bg-secondary/10",
    link: "/courses#jee"
  },
  {
    title: "Foundation (Class 9-10)",
    description: "Build a strong academic foundation early to excel in future competitive exams and boards.",
    icon: BookOpen,
    color: "text-green-500",
    bg: "bg-green-500/10",
    link: "/courses#foundation"
  }
];

export function CoursesSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Programs Tailored For Your Success" 
          subtitle="Our Courses" 
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card key={index} hover className="border-none shadow-md bg-white">
                <CardHeader className="pt-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${course.bg}`}>
                    <Icon className={`w-8 h-8 ${course.color}`} />
                  </div>
                  <CardTitle className="text-2xl mb-2 text-primary">{course.title}</CardTitle>
                  <CardDescription className="text-base text-slate-500">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mt-2 text-sm text-slate-600 font-medium">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Experienced Faculty
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Regular Mock Tests
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Doubt Clearing Sessions
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pb-8">
                  <Link href={course.link} className="w-full" tabIndex={-1}>
                    <Button variant="outline" className="w-full group border-primary/20 hover:bg-primary/5">
                      Explore Course
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/courses" tabIndex={-1}>
            <Button size="lg" className="rounded-full">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
