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
            <Image sizes="(max-width: 768px) 100vw, 50vw" src="/homepage.jpeg" alt="CYC Community Event" fill className="object-cover object-center scale-110" />
          </div>
          {/* Our Mission and Vision (Right) */}
          <div className="bg-cyc-navy rounded-3xl p-10 lg:p-12 shadow-[0_20px_50px_rgba(10,37,64,0.15)] relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-cyc-teal/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-cyc-teal rounded-2xl flex items-center justify-center mb-8 shadow-lg text-cyc-navy">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">Our Mission &amp; Vision</h2>
              <p className="text-lg text-blue-50/90 leading-relaxed font-medium mb-8">
                Our mission is to help youth discover their purpose, passions, and place in our community through mentorship and leadership. We believe everyone has the potential to make a positive difference.
              </p>
              <ul className="space-y-4 border-t border-white/10 pt-8">
                <li className="text-blue-50/80 leading-relaxed">
                  <span className="font-bold text-cyc-teal">Canadian Champions Award</span> &ndash; Recognizing outstanding role models who have made meaningful contributions to society and inspiring the next generation of leaders.
                </li>
                <li className="text-blue-50/80 leading-relaxed">
                  <span className="font-bold text-cyc-teal">CYC Leadership Program</span> &ndash; Focused on STEM &amp; Entrepreneurship, Community Engagement, and Public Service, empowering youth to solve real-world challenges and create positive change.
                </li>
                <li className="text-blue-50/80 leading-relaxed">
                  <span className="font-bold text-cyc-teal">CYC Think Tank</span> &ndash; A Gen Z-led initiative that brings youth and grassroots voices directly to government and decision-makers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Think Tank Section */}
      <ThinkTankSection />

      {/* Final Call to Action */}
      <BottomCTA />

      {/* With Gratitude — Sponsors */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 pb-24 relative z-10">
        <div className="rounded-3xl border border-gray-100 bg-gray-50 px-8 py-12 text-center shadow-sm">
          <h2 className="text-3xl lg:text-4xl font-black text-cyc-navy mb-4 tracking-tight">With Gratitude</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            CYC is sponsored by <span className="font-semibold text-cyc-navy">Hays Group</span> and <span className="font-semibold text-cyc-navy">HealthcareJob.Agency</span>.
          </p>
          <div className="relative mx-auto mt-8 aspect-video w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <Image
              src="/sponsor.jpeg"
              alt="CYC Sponsors — Hays Group and HealthcareJob.Agency"
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <Footer />

    </main>
  );
}
