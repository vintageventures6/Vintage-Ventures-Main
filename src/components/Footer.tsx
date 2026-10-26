import React from 'react';
import { EXECUTIVE_CONTACT } from '../data/vintageData';
import { FileText, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenDeck: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeck }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051115] border-t border-white/10 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#d4af37]/60 p-0.5 bg-[#091a20]">
              <img
                src="/assets/aistudio/Vintage_Venture_67b9bac7.png"
                alt="Vintage Ventures"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight">
                Vintage <span className="font-light text-[#d4af37]">Ventures</span>
              </span>
              <span className="text-[11px] text-[#9ebdc7] block">
                Strategic Workforce & Business Solutions Partner
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-300">
            <a href="#solutions" className="hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#framework" className="hover:text-white transition-colors">
              Operating Idea
            </a>
            <a href="#delivery" className="hover:text-white transition-colors">
              Cross-Border Delivery
            </a>
            <a href="#operations" className="hover:text-white transition-colors">
              Operations & HR
            </a>
            <a href="#measurement" className="hover:text-white transition-colors">
              Measurement
            </a>
            <a href="#success-stories" className="hover:text-white transition-colors">
              Success Stories
            </a>
            <a href="#insights" className="hover:text-white transition-colors">
              LinkedIn Insights
            </a>
            <a href="#methodology" className="hover:text-white transition-colors">
              Methodology
            </a>
            <button
              type="button"
              onClick={onOpenDeck}
              className="text-[#d4af37] hover:text-[#f3d47f] font-semibold transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Presentation Deck</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} Vintage Ventures. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>{EXECUTIVE_CONTACT.tagline}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${EXECUTIVE_CONTACT.email}`}
              className="text-slate-300 hover:text-white"
            >
              {EXECUTIVE_CONTACT.email}
            </a>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#d4af37] hover:text-[#f3d47f]"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
