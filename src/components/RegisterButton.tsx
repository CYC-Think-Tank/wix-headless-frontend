"use client";

import { useRegistration } from "./RegistrationContext";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function RegisterButton({ 
  className, 
  children,
  href = "/register"
}: { 
  className?: string; 
  children: React.ReactNode;
  href?: string;
}) {
  const { registrationOpen, registrationClosedDate } = useRegistration();
  const [isHovered, setIsHovered] = useState(false);

  if (registrationOpen) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  // Calculate month if closed
  let reopenMonthStr = "a later date";
  if (registrationClosedDate) {
    const closedDate = new Date(registrationClosedDate);
    // Add 4 months
    closedDate.setMonth(closedDate.getMonth() + 4);
    reopenMonthStr = closedDate.toLocaleString('default', { month: 'long' });
  }

  // A more muted, but not fully "gray" style. Just less contrast and opaque
  // We use replace to strip out hover effects from the passed className so it stays static
  const safeClassName = className?.replace(/hover:[^\s]+/g, '') || '';
  const closedClassName = `${safeClassName} opacity-65 cursor-not-allowed grayscale-[30%] shadow-none relative`;

  return (
    <div 
      className="relative inline-flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className={closedClassName} onClick={(e) => e.preventDefault()}>
        {children}
      </button>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-cyc-navy text-white text-sm text-center font-bold rounded-xl shadow-xl pointer-events-none z-50 leading-relaxed"
          >
            Registration is now closed. Check back in {reopenMonthStr}.
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-[0px] border-8 border-transparent border-t-cyc-navy"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
