"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger color change after scrolling down 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adaptive Styles
  const headerBg = isScrolled ? "bg-white/95 backdrop-blur-md" : "bg-transparent";
  const headerBorder = isScrolled ? "border-b border-gray-200 shadow-sm" : "border-b border-transparent";
  const activeTextColor = isScrolled ? "text-cyc-navy" : "text-white";
  const inactiveTextColor = isScrolled ? "text-gray-500" : "text-gray-300";
  const hoverColor = isScrolled ? "hover:text-cyc-teal" : "hover:text-white";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBg} ${headerBorder}`}>
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
        {/* Logo (Color remains unchanged as requested) */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Canadian Youth Champions Logo"
            width={160}
            height={48}
            className="object-contain h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </Link>

        {/* Right side navigation */}
        <nav className="flex items-center gap-8 text-[15px] font-semibold tracking-tight">
          <Link href="/" className={`${activeTextColor} ${hoverColor} transition-colors duration-300 drop-shadow-sm`}>
            Start Here
          </Link>
          
          {/* High School Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 font-semibold ${inactiveTextColor} ${hoverColor} transition-colors duration-300 drop-shadow-sm`}>
              High School
              <svg className="w-4 h-4 mt-0.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden flex flex-col py-2">
                <Link href="/high-school-program" className="px-5 py-3 text-sm font-bold text-cyc-navy hover:text-cyc-teal hover:bg-gray-50 transition-colors border-b border-gray-50">
                  High School Program
                </Link>
                <Link href="/volunteer-hours" className="px-5 py-3 text-sm font-bold text-cyc-navy hover:text-cyc-teal hover:bg-gray-50 transition-colors border-b border-gray-50">
                  Volunteer Hours
                </Link>
                <Link href="/register" className="px-5 py-3 text-sm font-bold text-cyc-navy hover:text-cyc-teal hover:bg-gray-50 transition-colors">
                  Register Now
                </Link>
              </div>
            </div>
          </div>

          {/* University Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 font-semibold ${inactiveTextColor} ${hoverColor} transition-colors duration-300 drop-shadow-sm`}>
              University
              <svg className="w-4 h-4 mt-0.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden flex flex-col py-2">
                <Link href="/internship-program" className="px-5 py-2 text-sm font-bold text-cyc-navy hover:text-cyc-teal hover:bg-gray-50 transition-colors">
                  Co-op
                </Link>
                <Link href="/collaborations" className="px-8 py-2 text-sm font-medium text-gray-500 hover:text-cyc-teal hover:bg-gray-50 transition-colors">
                  Collaborations
                </Link>
                <div className="w-full h-px bg-gray-50 my-1"></div>
                <Link href="/startups-2026" className="px-5 py-3 text-sm font-bold text-cyc-navy hover:text-cyc-teal hover:bg-gray-50 transition-colors">
                  Startups (Summer 2026)
                </Link>
              </div>
            </div>
          </div>

          <Link href="/awards" className={`${inactiveTextColor} ${hoverColor} transition-colors duration-300 drop-shadow-sm`}>
            Awards
          </Link>
          <Link href="/services" className={`${inactiveTextColor} ${hoverColor} transition-colors duration-300 drop-shadow-sm`}>
            Services
          </Link>
          <Link href="/faq" className={`${inactiveTextColor} ${hoverColor} transition-colors duration-300 drop-shadow-sm`}>
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}
