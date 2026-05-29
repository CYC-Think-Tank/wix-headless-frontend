import Image from "next/image";

export default function AlumniCarousel() {
  const images = Array.from({ length: 11 }, (_, i) => `/image ${i + 1}.png`);

  return (
    <section className="w-full bg-transparent py-12 border-y border-white shadow-[inset_0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-gray-400 font-bold text-sm tracking-widest uppercase">
          With alumni accepted into
        </h3>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex w-full overflow-hidden bg-transparent group">
        
        {/* We use a single wide flex container that translates -50% to create a perfect loop. 
            By duplicating the items inside the SAME container, we avoid any flex layout overlapping issues. */}
        <div className="flex w-max shrink-0 animate-marquee items-center">
          {[...images, ...images].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-48 h-20 mx-8 relative opacity-90 hover:opacity-100 transition-all duration-300">
              <Image 
                src={src} 
                alt={`University Logo ${i}`} 
                fill 
                className="object-contain" 
              />
            </div>
          ))}
        </div>
        
        {/* Gradients for smooth fade out on the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cyc-light to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cyc-light to-transparent"></div>
      </div>
    </section>
  );
}
