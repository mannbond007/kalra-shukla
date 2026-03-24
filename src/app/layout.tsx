import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Top NEET & IIT-JEE Coaching in Lucknow",
  description: "Concept-focused learning with proven results. Start your medical or IIT journey today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col font-sans text-foreground bg-background" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 flex flex-col min-h-screen pt-[72px]">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
