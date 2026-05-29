import { ArrowRight } from "lucide-react";

export default function BottomCTA() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-8 text-center flex flex-col items-center justify-center relative overflow-hidden border-t border-gray-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-cyc-teal/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      
      <h2 className="text-4xl md:text-5xl font-black text-cyc-navy mb-10 tracking-tight">
        Ready to build your future?
      </h2>
      <button className="flex items-center justify-center gap-3 px-10 py-5 bg-cyc-teal hover:bg-[#00cce6] text-cyc-navy font-black text-xl rounded-2xl shadow-[0_0_30px_rgba(0,229,255,0.25)] hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] hover:-translate-y-1 transition-all duration-300">
        Register Now
        <ArrowRight className="w-6 h-6" />
      </button>
    </section>
  );
}
