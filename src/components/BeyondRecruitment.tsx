import React, { useState } from 'react';
import {
  BEYOND_RECRUITMENT_STAGES,
  BEYOND_RECRUITMENT_DOMAINS
} from '../data/vintageData';
import { Compass, Briefcase, BarChart, ArrowRight, Check } from 'lucide-react';

export const BeyondRecruitment: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const activeStage = BEYOND_RECRUITMENT_STAGES[activeStageIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#0d2731] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#d4af37]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              Beyond Recruitment
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Supporting Businesses Beyond Recruitment
          </h2>
          <p className="text-base sm:text-lg text-[#a6c5ce] leading-relaxed">
            We combine strategic thinking with practical execution support across market entry,
            operations, and workforce strategy.
          </p>
        </div>

        {/* 5 Progression Steps (Slide 8) */}
        <div className="mt-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#d4af37] mb-4">
            The 5-Stage Consulting Execution Pathway
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {BEYOND_RECRUITMENT_STAGES.map((stg, idx) => {
              const isSelected = idx === activeStageIndex;
              return (
                <button
                  key={stg.num}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`text-left p-5 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-[#153e4d] border-[#d4af37] ring-1 ring-[#d4af37] shadow-xl'
                      : 'bg-[#0f2c37] border-white/10 hover:border-white/20 hover:bg-[#12333f]'
                  }`}
                >
                  <div className="text-xs font-mono font-bold text-[#d4af37] mb-2">
                    {stg.num}
                  </div>
                  <div className="text-base font-bold text-white mb-1">{stg.name}</div>
                  <div className="text-xs text-[#9ebdc7]">{stg.summary}</div>
                </button>
              );
            })}
          </div>

          {/* Active Detail Bar */}
          <div className="mt-4 p-5 rounded-xl bg-[#091a20] border border-[#d4af37]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#d4af37]">
                Stage {activeStage.num} Focus: {activeStage.name}
              </span>
              <p className="text-sm text-slate-200">{activeStage.detail}</p>
            </div>
            <div className="shrink-0 text-xs font-medium text-[#f3d47f]">
              Outcome: Disciplined Step Delivery
            </div>
          </div>
        </div>

        {/* 3 Core Practice Domains (Advisory, Improvement, Planning) */}
        <div className="mt-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#d4af37] mb-4">
            Consulting Practice Domains
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BEYOND_RECRUITMENT_DOMAINS.map((domain, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#0e2a35] border border-white/10 p-6 space-y-3"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                  {domain.category}
                </div>
                <div className="text-sm font-semibold text-white leading-snug">
                  {domain.focus}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {domain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
