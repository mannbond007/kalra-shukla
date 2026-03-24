import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Aman Verma",
    course: "NEET Batch 2025",
    content: "The teachers here simplify even the toughest physics concepts. The mock tests were exactly what I needed to manage my time during the actual exam.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2669&auto=format&fit=crop"
  },
  {
    name: "Riya Sharma",
    course: "IIT-JEE Batch 2024",
    content: "Joining Kalra Shukla was the best decision for my JEE prep. The study material is exhaustive and the doubt clearing sessions are incredibly helpful.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2787&auto=format&fit=crop"
  },
  {
    name: "Karan Patel",
    course: "Foundation Batch",
    content: "Starting early gave me a huge advantage. My basics in Math and Science are rock solid now, thanks to the engaging teaching methods.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Student Feedback" 
          subtitle="Hear From Our Achievers" 
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-lg relative overflow-hidden h-full flex flex-col pt-8">
              <div className="absolute top-4 right-4 text-secondary/20">
                <Quote className="w-12 h-12 rotate-180" />
              </div>
              <CardContent className="flex flex-col flex-1 relative z-10 px-8 pb-8">
                <p className="text-slate-600 mb-8 italic flex-1 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-secondary/20">
                    <Image src={testimonial.image} alt={testimonial.name} fill sizes="48px" className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{testimonial.course}</p>
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
