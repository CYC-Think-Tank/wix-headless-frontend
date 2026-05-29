"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, motion, animate } from "framer-motion";

export function AnimatedCounter({ 
  value, 
  prefix = "", 
  suffix = "", 
  decimals = 0 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  decimals?: number 
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      animate(motionValue, value, {
        duration: 1.5,
        ease: "easeOut"
      });
    }
  }, [inView, motionValue, value]);

  // Use transform to format the number
  const formattedText = useTransform(motionValue, (latest) => {
    // Determine the rounding based on decimals
    const multiplier = Math.pow(10, decimals);
    let val = Math.round(latest * multiplier) / multiplier;
    
    // Add commas to thousands if it's large and has 0 decimals
    let stringVal = decimals > 0 ? val.toFixed(decimals) : val.toLocaleString("en-US");
    
    return `${prefix}${stringVal}${suffix}`;
  });

  return <motion.span ref={ref}>{formattedText}</motion.span>;
}

export default function Statistics() {
  const stats = [
    {
      numericValue: 200,
      prefix: "",
      suffix: "+",
      decimals: 0,
      label: "high schools",
    },
    {
      numericValue: 12000,
      prefix: "",
      suffix: "+",
      decimals: 0,
      label: "program alumni",
    },
    {
      numericValue: 1.8,
      prefix: "$",
      suffix: "M+",
      decimals: 1,
      label: "in scholarships and internship opportunities",
    },
  ];

  return (
    <section className="w-full bg-transparent py-16 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100 border-y-[3px] border-cyc-teal py-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0 px-4 group">
              <div className="text-5xl lg:text-7xl font-black text-cyc-navy mb-2 group-hover:scale-105 transition-transform duration-500 tracking-tighter">
                <AnimatedCounter 
                  value={stat.numericValue} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals} 
                />
              </div>
              <div className="text-gray-600 font-medium text-lg leading-tight max-w-[200px] mx-auto tracking-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
