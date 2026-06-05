import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQTabs, { FAQItem } from "@/components/FAQTabs";
import AnimatedFAQHero from "@/components/AnimatedFAQHero";
import { wixClient } from "@/lib/wixClient";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function FAQPage() {
  let faqs: FAQItem[] = [];
  
  try {
    const { items } = await wixClient.items
      .query("FAQ")
      .find();
      
    faqs = items;
  } catch (error) {
    console.error("Failed to fetch FAQs from Wix:", error);
    // On failure (like missing permissions), we pass an empty array to show the empty state gracefully
  }

  return (
    <main className="flex min-h-screen flex-col bg-white relative font-sans text-gray-900 selection:bg-cyc-teal/30 selection:text-cyc-navy">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 px-6 lg:px-8 bg-cyc-navy overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('/hero-bg.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyc-navy z-0"></div>
        <AnimatedFAQHero />
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 px-6 lg:px-8 bg-gray-50 flex-grow">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          <FAQTabs faqs={faqs} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
