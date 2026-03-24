import React from "react";
import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-slate-300 pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-white text-primary p-2 flex rounded-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none text-white">Kalra Shukla</span>
                <span className="text-[10px] font-semibold tracking-widest text-secondary uppercase">Classes</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
              Top coaching institute in Lucknow for NEET & IIT-JEE preparation. We focus on concept building, regular assessments, and stellar results.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <span className="font-bold text-sm">f</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <span className="font-bold text-sm">t</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <span className="font-bold text-sm">in</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                <span className="font-bold text-sm">yt</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary rounded-full" />
            </h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-secondary transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/results" className="hover:text-secondary transition-colors text-sm">Our Results</Link></li>
              <li><Link href="/faculty" className="hover:text-secondary transition-colors text-sm">Expert Faculty</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Our Courses
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary rounded-full" />
            </h4>
            <ul className="space-y-3">
              <li><Link href="/courses#neet" className="hover:text-secondary transition-colors text-sm">NEET Coaching</Link></li>
              <li><Link href="/courses#jee" className="hover:text-secondary transition-colors text-sm">IIT-JEE Coaching</Link></li>
              <li><Link href="/courses#foundation" className="hover:text-secondary transition-colors text-sm">Foundation (Class 9-10)</Link></li>
              <li><Link href="/courses#crash" className="hover:text-secondary transition-colors text-sm">Crash Courses</Link></li>
              <li><Link href="/courses#test-series" className="hover:text-secondary transition-colors text-sm">Test Series</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">123, Education Hub, Near Gomti Nagar Station, Lucknow, UP 226010</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm">+91 99999 00000, +91 99999 11111</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm">info@kalrashukla.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Kalra Shukla Classes. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
