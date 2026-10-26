import React from 'react';
import { METHODOLOGY_STEPS } from '../data/vintageData';
import { Shield, Eye, Award, Quote } from 'lucide-react';

export const EngagementMethodology: React.FC = () => {
  return (
    <section id="methodology" className="py-20 lg:py-28 bg-[#0a1e26] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#d4af37]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              Engagement Methodology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Strategic Thinking. Structured Execution. Measurable Performance.
          </h2>
          <p className="text-base sm:text-lg text-[#a6c5ce] leading-relaxed">
            Vintage Ventures works as an extension of clients’ teams, aligning delivery with
            business objectives and measurable KPIs.
          </p>
        </div>

        {/* 5-Step Linear Methodology Process (Slide 9) */}
        <div className="mt-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#d4af37] mb-4">
            The 5-Step Engagement Cycle
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {METHODOLOGY_STEPS.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-xl bg-[#0f2c37] border border-[#d4af37]/30 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#d4af37] block mb-2">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Pillars: Engagement Design, Delivery Discipline, Performance View (Slide 9) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#0e2833] border border-white/10 space-y-3">
            <span className="text-xs font-mono uppercase text-[#d4af37]">Engagement Design</span>
            <div className="text-lg font-bold text-white">Strategic rather than transactional</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Flexible and scalable engagement models calibrated to evolve alongside business demand cycles.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0e2833] border border-white/10 space-y-3">
            <span className="text-xs font-mono uppercase text-[#d4af37]">Delivery Discipline</span>
            <div className="text-lg font-bold text-white">Structured and quality-focused</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Defined processes with transparent communication channels and verified milestone completion.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0e2833] border border-white/10 space-y-3">
            <span className="text-xs font-mono uppercase text-[#d4af37]">Performance View</span>
            <div className="text-lg font-bold text-white">KPI-based performance tracking</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Reporting signals and dashboards that stay perpetually connected to boardroom business objectives.
            </p>
          </div>
        </div>

        {/* Executive Philosophy Quote (Exact from Slide 9) */}
        <div className="mt-12 p-8 rounded-2xl bg-[#07161b] border-y border-[#d4af37]/40 relative overflow-hidden">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <Quote className="w-10 h-10 text-[#d4af37]/60 shrink-0 mt-1" />
            <blockquote className="space-y-3">
              <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-white leading-relaxed">
                “We work as an extension of our clients’ teams — aligning our delivery with their
                business objectives and measurable KPIs.”
              </p>
              <footer className="text-xs font-semibold text-[#f5d78a] tracking-wider uppercase">
                Vintage Ventures Core Operating Tenet
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
