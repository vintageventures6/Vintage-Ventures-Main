import React from 'react';
import { ArrowRight, FileText, CheckCircle2, Globe2, ShieldCheck, Users } from 'lucide-react';

interface HeroProps {
  onOpenDeck: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDeck, onOpenConsultation }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#07161c] via-[#0d2731] to-[#0f2e38]"
    >
      {/* Decorative ambient gold glow background accents */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-20 right-[-10%] w-[500px] h-[500px] bg-[#1a4a58]/30 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Strategic Positioning (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Subtle editorial kicker with gold accent line */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#d4af37]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#f3d47f]">
                Strategic Workforce & Business Solutions Partner
              </span>
            </div>

            {/* Display Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.1]">
                Vintage <span className="font-light text-[#d4af37]">Ventures</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-[#bcd5dd] text-balance">
                Right People. Smarter Processes. Measurable Business Outcomes.
              </p>
            </div>

            {/* Subtitle pillars with unboxed separators */}
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#f5d78a]">
              <span>Workforce</span>
              <span className="text-[#d4af37]/60" aria-hidden="true">·</span>
              <span>Consulting</span>
              <span className="text-[#d4af37]/60" aria-hidden="true">·</span>
              <span>Operations</span>
            </div>

            {/* Core Narrative */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Vintage Ventures connects workforce capability to operating performance, helping
              organizations build capable teams, optimize processes, scale operations, and
              strengthen HR management across domestic markets, the US, and Canada.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-[#091a20] bg-[#d4af37] hover:bg-[#f5dc94] rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d4af37]"
              >
                <span>Schedule Strategic Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenDeck}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-[#133541] hover:bg-[#1a4453] border border-[#d4af37]/40 rounded-lg transition-all whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-[#d4af37]" />
                <span>View Executive Deck (10 Slides)</span>
              </button>
            </div>

            {/* High-trust proof markers */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-[#9ebdc7]">
              <div className="space-y-1">
                <span className="block font-semibold text-white text-sm">US & Canada</span>
                <span>Cross-Border Recruitment</span>
              </div>
              <div className="space-y-1">
                <span className="block font-semibold text-white text-sm">Full-Time Non-IT</span>
                <span>Corporate & Professional</span>
              </div>
              <div className="space-y-1">
                <span className="block font-semibold text-white text-sm">End-to-End SLA</span>
                <span>Requirement to Joining</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor & Brand Identity (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-br from-[#d4af37]/40 via-white/10 to-[#d4af37]/20 shadow-2xl">
                <div className="bg-[#0b1f27] rounded-[14px] overflow-hidden p-6 space-y-6">
                  {/* Circular Gold Emblem Showcase */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#d4af37] p-1 bg-[#07161b] shadow-lg flex-shrink-0">
                        <img
                          src="/assets/aistudio/Vintage_Venture_67b9bac7.png"
                          alt="Vintage Ventures Brand Emblem"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                          Executive Profile
                        </div>
                        <div className="text-lg font-bold text-white">Vintage Ventures</div>
                        <div className="text-xs text-[#9bb8c1]">Strategic Solutions Partner</div>
                      </div>
                    </div>
                  </div>

                  {/* Curated Team Collaboration Image from official deck */}
                  <div className="relative rounded-lg overflow-hidden border border-[#d4af37]/30 bg-[#07161b]">
                    <img
                      src="/assets/team_meeting_hd.png"
                      alt="Vintage Ventures Strategic Team Collaboration"
                      className="w-full h-48 object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#091e25] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 bg-[#091e25]/80 backdrop-blur-sm p-2 rounded border border-white/10 flex items-center justify-between">
                      <span className="font-medium text-[#f3d47f]">Dedicated Delivery Pods</span>
                      <span className="text-slate-400">Domestic & Cross-Border</span>
                    </div>
                  </div>

                  {/* 4 Pillars Formula Pill replacement (Clean unboxed grid) */}
                  <div className="bg-[#12313b] p-4 rounded-lg border border-white/5 space-y-2">
                    <div className="text-xs font-semibold text-[#f3d47f] uppercase tracking-wider">
                      The Value Equation
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                      People + Process + Business Strategy + Execution
                    </div>
                    <div className="text-xs text-[#d4af37] font-bold pt-1 border-t border-white/10 flex items-center gap-1.5">
                      <span>= Sustainable Business Value</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
