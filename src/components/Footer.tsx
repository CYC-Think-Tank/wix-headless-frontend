import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cyc-navy text-white py-12 px-6 lg:px-8 w-full mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-sm text-center md:text-left">
        
        {/* Left Column */}
        <div className="flex flex-col space-y-1 text-gray-200">
          <p>The Canadian Youth Champions (thecyc.org)</p>
          <p>
            <Link href="#" className="underline hover:text-cyc-yellow transition-colors">
              is a registered Canadian non-profit #1260703-4
            </Link>
          </p>
          <p className="pt-1">Copyright &copy; 2021. All rights reserved.</p>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col items-center space-y-3">
          <h3 className="font-bold text-base tracking-wide">Follow Us!</h3>
          <a href="https://www.instagram.com/youth.champions/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-cyc-teal hover:scale-110 transition-all">
            <svg 
              className="w-9 h-9" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:items-end text-gray-200 space-y-2 text-center md:text-right">
          <h3 className="font-bold text-base text-white tracking-wide">Stay In Touch</h3>
          <p className="max-w-sm leading-relaxed">
            For CYC program updates and upcoming university admission sessions, please{" "}
            <Link href="#" className="underline hover:text-cyc-yellow transition-colors">
              sign-up for our mailing list
            </Link>.
          </p>
        </div>

      </div>
    </footer>
  );
}
