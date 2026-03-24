import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-20 lg:py-28 min-h-[70vh] bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Contact Us" 
          centered={true}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Information Elements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Our Location</h3>
            <Card className="border-none shadow-md">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full shrink-0">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary">Address</h4>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      123, Education Hub, Near Gomti Nagar Station, Lucknow, UP 226010
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-full shrink-0">
                    <Phone className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary">Phone</h4>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      +91 99999 00000<br/>+91 99999 11111
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 rounded-full shrink-0">
                    <Mail className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary">Email</h4>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      info@kalrashukla.in
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Embedded Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 rounded-3xl overflow-hidden shadow-md relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.233074351!2d80.86576823933758!3d26.848694080185012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-none shadow-xl border-t-[6px] border-t-secondary glass">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Phone Code</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                        placeholder="+91 9876543210"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Course Interested In</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white text-slate-700" required>
                      <option value="">Select a course</option>
                      <option value="neet">NEET Coaching</option>
                      <option value="jee">IIT-JEE Coaching</option>
                      <option value="foundation">Foundation (Class 9-10)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Your Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" 
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  <Button type="button" size="lg" className="w-full text-lg h-14 mt-4 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20">
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
