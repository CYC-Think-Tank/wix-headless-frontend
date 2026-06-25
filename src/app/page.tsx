import { wixClient } from "@/lib/wixClient";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AlumniCarousel from "@/components/AlumniCarousel";
import AboutSection from "@/components/AboutSection";
import ThinkTankSection from "@/components/ThinkTankSection";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";
import Image from "next/image";

export default async function Home() {
  // Keeping the connection logic here so you know it works!
  try {
    const results = await wixClient.items.query('Members/FullData').find();
    console.log("Wix Members Data successfully fetched!");
  } catch (error) {
    console.error("Failed to fetch Wix data:", error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-white relative font-sans text-gray-900 selection:bg-cyc-teal/30 selection:text-cyc-navy">
      {/* Background Decorative Blobs - Hidden on mobile due to massive GPU overhead from CSS blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none flex justify-center z-0">
        <div className="hidden md:block absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyc-navy/5 blur-[120px]" />
        <div className="hidden md:block absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-cyc-teal/5 blur-[120px]" />
        <div className="hidden md:block absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] rounded-full bg-cyc-yellow/5 blur-[150px]" />
      </div>

      {/* Top Navigation */}
      <Header />

      {/* 2-Column Animated Hero Section */}
      <Hero />

      {/* Infinite Alumni Logos Carousel */}
      <AlumniCarousel />

      {/* About & Mission Section */}
      <AboutSection />

      {/* Landing Page Photo Gallery */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Picture (Left) */}
          <div className="relative aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
            <Image sizes="(max-width: 768px) 100vw, 50vw" src="/homepage.jpeg" alt="CYC Community Event" fill className="object-cover object-center" />
          </div>
          {/* Our Mission and Vision (Right) */}
          <div className="bg-cyc-navy rounded-3xl p-10 lg:p-12 shadow-[0_20px_50px_rgba(10,37,64,0.15)] relative overflow-hidden flex items-center">
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-cyc-teal/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-cyc-teal rounded-2xl flex items-center justify-center mb-8 shadow-lg text-cyc-navy">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Our Mission and Vision</h2>
              <p className="text-xl text-blue-50/90 leading-relaxed font-medium">
                Our mission is to help youth find their purpose, passions & place in our community through learning opportunities & experiences. We believe that everyone can make a difference in our community!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Think Tank Section */}
      <ThinkTankSection />

      {/* Final Call to Action */}
      <BottomCTA />

      {/* Site Footer */}
      <Footer />

    </main>
  );
}
