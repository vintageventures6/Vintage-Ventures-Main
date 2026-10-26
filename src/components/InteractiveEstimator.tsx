import React, { useState } from 'react';
import { Calculator, ArrowRight, Users, Clock, ShieldCheck, Check } from 'lucide-react';

interface InteractiveEstimatorProps {
  onPlanSelected: (summary: string) => void;
}

export const InteractiveEstimator: React.FC<InteractiveEstimatorProps> = ({ onPlanSelected }) => {
  const [solutionType, setSolutionType] = useState<string>('recruitment');
  const [headcount, setHeadcount] = useState<number>(10);
  const [region, setRegion] = useState<string>('us-canada');

  // Dynamic calculations based on input
  const estimatedRampDays =
    solutionType === 'recruitment'
      ? Math.round(14 + headcount * 0.4)
      : solutionType === 'bpo'
      ? Math.round(21 + headcount * 0.3)
      : Math.round(10 + headcount * 0.2);

  const estimatedPodSize = Math.max(2, Math.ceil(headcount / 12));
  const candidateShortlistCount = headcount * 4;

  const handleApplyToConsultation = () => {
    const summary = `${
      solutionType === 'recruitment'
        ? 'Cross-Border Non-IT Recruitment'
        : solutionType === 'bpo'
        ? 'BPO & Operations Transition'
        : 'HR & Payroll Support'
    } for ${headcount} roles in ${
      region === 'us-canada' ? 'US & Canada' : 'Domestic / Global'
    }`;
    onPlanSelected(summary);
  };

  return (
    <section className="py-20 bg-[#0c242d] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#d4af37]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              Capacity & SLA Modeler
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Model Your Workforce & Operational Delivery
          </h2>
          <p className="text-base sm:text-lg text-[#a6c5ce] leading-relaxed">
            Estimate delivery timelines, dedicated pod staffing, and screening coverage based on
            your organizational objectives.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#0f2c37] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
            {/* Service Segmented Selector (Functional Button Tabs) */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                Select Engagement Solution
              </label>
              <div className="grid grid-cols-3 gap-2 p-1 bg-[#091a20] rounded-lg border border-white/10">
                <button
                  type="button"
                  onClick={() => setSolutionType('recruitment')}
                  className={`py-2 px-3 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                    solutionType === 'recruitment'
                      ? 'bg-[#d4af37] text-[#091a20] shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Workforce & Recruitment
                </button>
                <button
                  type="button"
                  onClick={() => setSolutionType('bpo')}
                  className={`py-2 px-3 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                    solutionType === 'bpo'
                      ? 'bg-[#d4af37] text-[#091a20] shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  BPO & Operations
                </button>
                <button
                  type="button"
                  onClick={() => setSolutionType('hr')}
                  className={`py-2 px-3 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                    solutionType === 'hr'
                      ? 'bg-[#d4af37] text-[#091a20] shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  HR & Payroll
                </button>
              </div>
            </div>

            {/* Volume Range Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                  Target Headcount / Positions Needed
                </label>
                <span className="text-lg font-bold text-white font-mono tabular-nums">
                  {headcount} {headcount === 1 ? 'Role' : 'Roles'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="60"
                step="1"
                value={headcount}
                onChange={(e) => setHeadcount(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-[#091a20] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
              />
              <div className="flex justify-between text-[11px] text-[#9ebdc7] font-mono">
                <span>1 Specialized Hire</span>
                <span>20 Positions</span>
                <span>40 Batch Hiring</span>
                <span>60+ Enterprise Scale</span>
              </div>
            </div>

            {/* Geographic Scope Buttons */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                Geographic Deployment Scope
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRegion('us-canada')}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    region === 'us-canada'
                      ? 'bg-[#153e4c] border-[#d4af37] text-white'
                      : 'bg-[#0a1e26] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-bold text-white">United States & Canada</div>
                  <div className="text-[11px] text-[#9ebdc7]">Cross-Border Corporate Talent</div>
                </button>
                <button
                  type="button"
                  onClick={() => setRegion('domestic')}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    region === 'domestic'
                      ? 'bg-[#153e4c] border-[#d4af37] text-white'
                      : 'bg-[#0a1e26] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-bold text-white">Domestic / Global Hubs</div>
                  <div className="text-[11px] text-[#9ebdc7]">Shared Services & Operations</div>
                </button>
              </div>
            </div>
          </div>

          {/* Output Display Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#0a1c23] p-6 sm:p-8 rounded-2xl border border-[#d4af37]/40 flex flex-col justify-between shadow-2xl space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-[#d4af37]">
                  PROJECTION MODEL
                </span>
                <span className="text-xs font-semibold text-[#f5d78a]">
                  Vintage Ventures SLA Matrix
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0e2731] border border-white/5 space-y-1">
                  <div className="text-xs font-mono text-[#9ebdc7]">Est. Ramp-Up Time</div>
                  <div className="text-2xl font-bold text-[#f3d47f] font-mono tabular-nums">
                    ~{estimatedRampDays} Days
                  </div>
                  <div className="text-[11px] text-slate-400">First Shortlists in Day 5-7</div>
                </div>

                <div className="p-4 rounded-xl bg-[#0e2731] border border-white/5 space-y-1">
                  <div className="text-xs font-mono text-[#9ebdc7]">Dedicated Pod</div>
                  <div className="text-2xl font-bold text-white font-mono tabular-nums">
                    {estimatedPodSize} Specialists
                  </div>
                  <div className="text-[11px] text-slate-400">Lead Recruiter + Sourcer</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0e2731] border border-white/5 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Expected Pre-Screened Candidates:</span>
                  <span className="font-bold text-white font-mono">{candidateShortlistCount}+</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Background Credential Audit:</span>
                  <span className="font-bold text-[#d4af37]">100% Verified</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Governance Syncs:</span>
                  <span className="font-bold text-white">Weekly Executive Scorecard</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleApplyToConsultation}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs sm:text-sm font-bold text-[#091a20] bg-[#d4af37] hover:bg-[#f5dc94] rounded-lg transition-all shadow-lg whitespace-nowrap"
            >
              <span>Apply This Scope To Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
