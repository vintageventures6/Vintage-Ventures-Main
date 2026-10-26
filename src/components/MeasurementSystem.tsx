import React from 'react';
import { METRICS_DATA } from '../data/vintageData';
import { Activity, TrendingUp, CheckCircle } from 'lucide-react';

export const MeasurementSystem: React.FC = () => {
  return (
    <section id="measurement" className="py-20 lg:py-28 bg-[#0a1e26] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#d4af37]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              Measurement System
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            From Recruitment Activity to Business Outcomes
          </h2>
          <p className="text-base sm:text-lg text-[#a6c5ce] leading-relaxed">
            Measurement categories connect delivery activity to operating performance without
            assuming guaranteed improvement — establishing auditable tracking across all operational
            facets.
          </p>
        </div>

        {/* 3 Metric Dimension Blocks (Slide 6) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {METRICS_DATA.map((dimension) => (
            <div
              key={dimension.index}
              className="rounded-2xl bg-[#0f2c37] border border-[#d4af37]/30 p-6 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Index & Dimension Title */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="text-xs font-mono font-bold text-[#d4af37]">
                    {dimension.index}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#f3d47f]">
                    {dimension.title}
                  </span>
                </div>

                {/* Subcategories */}
                <div className="space-y-6">
                  {dimension.subcategories.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="text-lg font-bold text-white flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#d4af37]" />
                        <span>{sub.name}</span>
                      </div>

                      {/* Unboxed KPI Indicators with dot separator */}
                      <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-[#9ebdc7] bg-[#091a20] p-2.5 rounded-lg border border-white/5">
                        {sub.indicators.map((ind, iIdx) => (
                          <React.Fragment key={iIdx}>
                            <span className="text-slate-200">{ind}</span>
                            {iIdx < sub.indicators.length - 1 && (
                              <span className="text-[#d4af37]" aria-hidden="true">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed pt-1">
                        {sub.benchmarkImpact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#9ebdc7]">
                <span>Telemetry Frequency</span>
                <span className="font-mono text-[#f3d47f]">Weekly / Monthly CADENCE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Real-world KPI tracker callout */}
        <div className="mt-10 p-6 rounded-xl bg-[#0e2732] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9ebdc7]">
          <div className="flex items-center gap-3">
            <Activity className="w-5 h-5 text-[#d4af37] shrink-0" />
            <span>
              All reporting signals integrate directly into client management cadences and executive review dashboards.
            </span>
          </div>
          <div className="shrink-0 text-white font-medium">
            Zero Guesswork · Concrete Operational Data
          </div>
        </div>
      </div>
    </section>
  );
};
