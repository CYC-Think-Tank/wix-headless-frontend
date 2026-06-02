import { wixClient } from "@/lib/wixClient";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AlumniCarousel from "@/components/AlumniCarousel";
import AboutSection from "@/components/AboutSection";
import ThinkTankSection from "@/components/ThinkTankSection";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

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
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none flex justify-center z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyc-navy/5 blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-cyc-teal/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] rounded-full bg-cyc-yellow/5 blur-[150px]" />
      </div>

      {/* Top Navigation */}
      <Header />

      {/* 2-Column Animated Hero Section */}
      <Hero />

      {/* Infinite Alumni Logos Carousel */}
      <AlumniCarousel />

      {/* About & Mission Section */}
      <AboutSection />

      {/* Think Tank Section */}
      <ThinkTankSection />

      {/* Final Call to Action */}
      <BottomCTA />

      {/* Site Footer */}
      <Footer />

    </main>
  );
}
