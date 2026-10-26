import React, { useState } from 'react';
import { PIPELINE_STAGES } from '../data/vintageData';
import { Clock, ShieldAlert, Award, UserCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PipelineStage } from '../types';

export const CrossBorderDelivery: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStage: PipelineStage = PIPELINE_STAGES[activeStepIndex];

  return (
    <section id="delivery" className="py-20 lg:py-28 bg-[#0a1e26] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#d4af37]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                Recruitment Delivery & Delivery Model
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Extending Your Recruitment Capacity Across Borders
            </h2>
            <p className="text-base sm:text-lg text-[#a6c5ce] leading-relaxed">
              Structured recruitment support designed to integrate with an existing talent
              acquisition function across US & Canada — delivering transparent process, defined
              ownership, and consistent communication.
            </p>
          </div>

          <div className="shrink-0 p-4 rounded-xl bg-[#0f2d38] border border-[#d4af37]/30 text-xs text-slate-300 max-w-xs">
            <div className="text-[#f3d47f] font-semibold mb-1">Target Engagement Focus</div>
            <div className="space-y-1 text-slate-300">
              <div>· Full-time non-IT recruitment</div>
              <div>· Corporate & professional hiring</div>
              <div>· Volume or recurring requirements</div>
            </div>
          </div>
        </div>

        {/* 8-Step Interactive Pipeline Strip */}
        <div className="mt-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#d4af37] mb-4">
            The 8-Stage Delivery Pipeline (Click step to inspect)
          </div>

          {/* Desktop & Tablet Steps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {PIPELINE_STAGES.map((stage, idx) => {
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-3.5 rounded-lg border transition-all relative flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#153f4e] border-[#d4af37] shadow-lg ring-1 ring-[#d4af37]'
                      : 'bg-[#0e2732] border-white/10 hover:border-white/20 hover:bg-[#112f3c]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isActive ? 'text-[#f3d47f]' : 'text-[#d4af37]'
                      }`}
                    >
                      {stage.step}
                    </span>
                    {isPast && <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]/80" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">
                      {stage.title}
                    </div>
                    <div className="text-[11px] text-[#9ebdc7] line-clamp-1 mt-1">
                      {stage.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stage Deep-Dive Card */}
          <div className="mt-6 p-6 sm:p-8 rounded-xl bg-[#0f2c37] border border-[#d4af37]/40 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content (8 cols) */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#d4af37]">
                  <span className="px-2 py-0.5 rounded bg-[#08181f] text-[#f3d47f] font-mono">
                    STAGE {currentStage.step} OF 08
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-white uppercase tracking-wider">{currentStage.subtitle}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {currentStage.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {currentStage.details}
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-lg bg-[#08181f] border border-white/10 space-y-1">
                    <div className="text-xs font-mono text-[#9ebdc7]">Key Milestone Deliverable</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {currentStage.keyDeliverable}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#08181f] border border-white/10 space-y-1">
                    <div className="text-xs font-mono text-[#9ebdc7]">Ownership & Accountability</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {currentStage.responsibility}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Summary / Turnaround Badge (4 cols) */}
              <div className="lg:col-span-4 bg-[#091a20] p-6 rounded-xl border border-[#d4af37]/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#133642] border border-[#d4af37]/40 flex items-center justify-center mx-auto text-[#d4af37]">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase tracking-wider text-[#9ebdc7]">
                  Typical SLA Velocity
                </div>
                <div className="text-2xl font-bold text-[#f3d47f]">
                  {currentStage.turnaroundTime}
                </div>
                <p className="text-xs text-slate-300">
                  Calibrated for cross-border alignment between US/Canada hiring teams and centralized delivery pods.
                </p>

                <div className="pt-2 flex justify-center gap-2">
                  <button
                    type="button"
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 text-xs font-semibold rounded bg-[#133642] text-slate-200 hover:text-white disabled:opacity-40"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    disabled={activeStepIndex === PIPELINE_STAGES.length - 1}
                    onClick={() =>
                      setActiveStepIndex((prev) =>
                        Math.min(PIPELINE_STAGES.length - 1, prev + 1)
                      )
                    }
                    className="px-3 py-1.5 text-xs font-semibold rounded bg-[#d4af37] text-[#091a20] hover:bg-[#f3d78a] disabled:opacity-40"
                  >
                    Next Stage
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Tenets Banner (Slide 5: Transparent Process. Defined Ownership. Consistent Communication.) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-[#0e2833] border border-white/10 space-y-1.5">
            <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
              01 · Transparency
            </span>
            <div className="text-base font-bold text-white">Transparent Process</div>
            <p className="text-xs text-slate-300">
              Real-time pipeline visibility across stages with zero candidate hoarding or hidden statuses.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0e2833] border border-white/10 space-y-1.5">
            <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
              02 · Accountability
            </span>
            <div className="text-base font-bold text-white">Defined Ownership</div>
            <p className="text-xs text-slate-300">
              Assigned single points of contact with rigorous milestone ownership from job intake to joining.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0e2833] border border-white/10 space-y-1.5">
            <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
              03 · Alignment
            </span>
            <div className="text-base font-bold text-white">Consistent Communication</div>
            <p className="text-xs text-slate-300">
              Scheduled weekly syncs, candidate status scorecards, and multi-timezone availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
