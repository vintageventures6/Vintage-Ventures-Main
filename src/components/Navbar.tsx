import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, PhoneCall, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenDeck: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDeck, onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a1c23]/95 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-xl'
            : 'bg-gradient-to-b from-[#07151a]/90 via-[#0a1d24]/60 to-transparent py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: 3 zones separated by gap-8 */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark (Single element) */}
            <a
              href="#hero"
              className="flex items-center gap-3 group whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
            >
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#d4af37]/60 p-0.5 bg-[#091a20] shadow-sm flex items-center justify-center">
                <img
                  src="/assets/aistudio/Vintage_Venture_67b9bac7.png"
                  alt="Vintage Ventures Emblem"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#f3d47f] transition-colors">
                  Vintage <span className="font-light text-[#d4af37]">Ventures</span>
                </span>
              </div>
            </a>

            {/* Zone 2: single-line clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
              <a
                href="#solutions"
                className="hover:text-[#f3d47f] transition-colors whitespace-nowrap shrink-0"
              >
                Solutions
              </a>
              <a
                href="#framework"
                className="hover:text-[#f3d47f] transition-colors whitespace-nowrap shrink-0"
              >
                Framework
              </a>
              <a
                href="#delivery"
                className="hover:text-[#f3d47f] transition-colors whitespace-nowrap shrink-0"
              >
                Cross-Border Delivery
              </a>
              <a
                href="#operations"
                className="hover:text-[#f3d47f] transition-colors whitespace-nowrap shrink-0"
              >
                Operations & HR
              </a>
              <a
                href="#measurement"
                className="hover:text-[#f3d47f] transition-colors whitespace-nowrap shrink-0"
              >
                Measurement
              </a>
              <a
                href="#success-stories"
                className="hover:text-[#f3d47f] transition-colors whitespace-nowrap shrink-0"
              >
                Stories
              </a>
              <a
                href="#insights"
                className="hover:text-[#f3d47f] transition-colors whitespace-nowrap shrink-0 text-[#f5d78a]"
              >
                Insights
              </a>
              <a
                href="#methodology"
                className="hover:text-[#f3d47f] transition-colors whitespace-nowrap shrink-0"
              >
                Methodology
              </a>
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenDeck}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-[#133642]/80 hover:bg-[#194352] border border-[#d4af37]/30 hover:border-[#d4af37]/60 rounded-md transition-all whitespace-nowrap shrink-0"
              >
                <FileText className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Executive Deck</span>
              </button>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#091a20] bg-[#d4af37] hover:bg-[#f3d78a] rounded-md transition-all shadow-md hover:shadow-lg whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d4af37]"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Connect With Us</span>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white bg-[#133642] border border-white/10 rounded-md focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu (governed by 15% sticky rule - closes quickly upon link click) */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#0a1c23] border-b border-[#d4af37]/30 px-5 pt-3 pb-5 mt-3 space-y-3">
            <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-200">
              <a
                href="#solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#d4af37]"
              >
                Solutions
              </a>
              <a
                href="#framework"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#d4af37]"
              >
                Framework
              </a>
              <a
                href="#delivery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#d4af37]"
              >
                Cross-Border Delivery
              </a>
              <a
                href="#operations"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#d4af37]"
              >
                Operations & HR
              </a>
              <a
                href="#measurement"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#d4af37]"
              >
                Measurement
              </a>
              <a
                href="#success-stories"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#d4af37]"
              >
                Success Stories
              </a>
              <a
                href="#insights"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#d4af37] text-[#f5d78a]"
              >
                LinkedIn Insights
              </a>
              <a
                href="#methodology"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#d4af37]"
              >
                Methodology
              </a>
            </nav>
            <div className="pt-2 flex flex-col gap-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDeck();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-200 bg-[#133642] border border-[#d4af37]/30 rounded-md"
              >
                <FileText className="w-4 h-4 text-[#d4af37]" />
                <span>View Full Executive Deck (10 Slides)</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-[#091a20] bg-[#d4af37] rounded-md font-medium"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Connect With Leadership</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
