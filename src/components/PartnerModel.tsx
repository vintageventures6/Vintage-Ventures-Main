import React, { useState } from 'react';
import { SOLUTIONS_DATA } from '../data/vintageData';
import { Users2, Compass, Cpu, FileCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceSolution } from '../types';

interface PartnerModelProps {
  onSelectSolution: (solutionTitle: string) => void;
}

const SOLUTION_ICONS = {
  'workforce-talent': Users2,
  'business-consulting': Compass,
  'bpo-operations': Cpu,
  'hr-payroll': FileCheck
};

export const PartnerModel: React.FC<PartnerModelProps> = ({ onSelectSolution }) => {
  const [activeSolutionId, setActiveSolutionId] = useState<string>(SOLUTIONS_DATA[0].id);

  const selectedSolution =
    SOLUTIONS_DATA.find((s) => s.id === activeSolutionId) || SOLUTIONS_DATA[0];

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-[#0d2731] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#d4af37]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              The Partner Model
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            One Partner. Multiple Business Solutions.
          </h2>
          <p className="text-base sm:text-lg text-[#a6c5ce] leading-relaxed">
            A coordinated capability across talent, consulting, operations, and HR — structured to
            serve enterprise and scaling business needs under a unified governance standard.
          </p>
        </div>

        {/* 4 Solutions Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS_DATA.map((solution) => {
            const Icon = SOLUTION_ICONS[solution.id as keyof typeof SOLUTION_ICONS] || Users2;
            const isSelected = solution.id === activeSolutionId;

            return (
              <div
                key={solution.id}
                onClick={() => setActiveSolutionId(solution.id)}
                className={`cursor-pointer rounded-xl p-6 border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#153e4c] border-[#d4af37] shadow-xl ring-1 ring-[#d4af37]'
                    : 'bg-[#102e3a] border-white/10 hover:border-[#d4af37]/50 hover:bg-[#133745]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#d4af37] text-[#091a20]'
                          : 'bg-[#1a4453] text-[#d4af37]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-[#f3d47f]">
                      {solution.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                  <p className="text-sm text-[#9ebdc7] leading-relaxed">
                    {solution.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#d4af37]">
                    {isSelected ? 'Viewing Scope' : 'Click to Inspect'}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#d4af37] translate-x-1' : 'text-slate-400'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Capability Panel for Selected Solution */}
        <div className="mt-8 rounded-2xl bg-[#0a1e26] border border-[#d4af37]/30 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-1">
                <span>Detailed Capability Specification</span>
                <span aria-hidden="true">·</span>
                <span className="text-white">{selectedSolution.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {selectedSolution.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl">
                {selectedSolution.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelectSolution(selectedSolution.title)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-[#091a20] bg-[#d4af37] hover:bg-[#f5dc94] rounded-lg transition-all shadow-md shrink-0 whitespace-nowrap"
            >
              <span>Inquire for {selectedSolution.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Core Capabilities Checklist (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9ebdc7]">
                Key Delivery Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedSolution.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#112d38] border border-white/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics & Target Suitability (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#112f3b] p-5 rounded-xl border border-white/10 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f3d47f]">
                  Observed Operating Metrics
                </h4>
                <div className="space-y-2">
                  {selectedSolution.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#08181e] border border-white/5 text-xs text-slate-300">
                <span className="font-semibold text-white block mb-1">Ideal For:</span>
                {selectedSolution.suitableFor}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
