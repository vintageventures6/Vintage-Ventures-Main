import React, { useState } from 'react';
import { Users, Workflow, Target, PlayCircle, Sparkles, Check, ArrowRight } from 'lucide-react';

interface Pillar {
  id: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  deliverables: string[];
  operationalImpact: string;
  metric: string;
}

const PILLARS: Pillar[] = [
  {
    id: 'people',
    title: 'People',
    tagline: 'Build capable teams.',
    icon: Users,
    deliverables: [
      'Targeted talent acquisition for full-time non-IT & corporate roles',
      'International & domestic manpower mapping across US & Canada',
      'Competency-based behavioral & functional evaluation'
    ],
    operationalImpact: 'Eliminates capability gaps and equips business units with calibrated, high-retention talent.',
    metric: '94% 6-Month Retention'
  },
  {
    id: 'process',
    title: 'Process',
    tagline: 'Improve how work moves.',
    icon: Workflow,
    deliverables: [
      'End-to-end recruitment pipeline standardization',
      'BPO workflow optimization and friction elimination',
      'Transparent SLAs, handoff protocols, and accountability gates'
    ],
    operationalImpact: 'Accelerates throughput, removes structural bottlenecks, and ensures repeatable excellence.',
    metric: '35% Faster Cycle Times'
  },
  {
    id: 'strategy',
    title: 'Business Strategy',
    tagline: 'Align growth priorities.',
    icon: Target,
    deliverables: [
      'Workforce capacity planning tied to revenue and operational targets',
      'Cross-border expansion and market entry support',
      'Cost optimization and supplier rationalization'
    ],
    operationalImpact: 'Ensures hiring and operational investments directly mirror executive growth mandates.',
    metric: '100% KPI Alignment'
  },
  {
    id: 'execution',
    title: 'Execution',
    tagline: 'Turn intent into results.',
    icon: PlayCircle,
    deliverables: [
      'Disciplined day-to-day candidate and operational coordination',
      'Statutory compliance and zero-defect payroll processing',
      'Real-time MIS performance telemetry and proactive reporting'
    ],
    operationalImpact: 'Bridges executive intent to measurable floor performance without overhead friction.',
    metric: '99.2% SLA Adherence'
  }
];

export const OperatingIdea: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>('people');
  const selectedPillar = PILLARS.find((p) => p.id === activePillar) || PILLARS[0];

  return (
    <section id="framework" className="py-20 lg:py-28 bg-[#0b2028] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#d4af37]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              The Operating Idea
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Connecting People, Processes & Business Growth
          </h2>
          <p className="text-base sm:text-lg text-[#a6c5ce] leading-relaxed">
            Vintage Ventures connects workforce capability to operating performance, helping
            organizations build capable teams, optimize processes, scale operations, and strengthen
            HR management.
          </p>
        </div>

        {/* Value Creation Framework - Interactive Pillar Tabs */}
        <div className="mt-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#d4af37] mb-4">
            Value Creation Framework · Click a pillar to explore deliverables
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = pillar.id === activePillar;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillar(pillar.id)}
                  className={`text-left p-6 rounded-xl border transition-all duration-200 relative group ${
                    isActive
                      ? 'bg-[#133744] border-[#d4af37] shadow-lg ring-1 ring-[#d4af37]'
                      : 'bg-[#0f2a34] border-white/10 hover:border-[#d4af37]/50 hover:bg-[#12313d]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#d4af37] text-[#091a20]'
                          : 'bg-[#19404f] text-[#d4af37] group-hover:bg-[#d4af37]/20'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium text-[#9ebdc7] tabular-nums">
                      {pillar.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#f5d78a] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-medium text-[#d4af37]">{pillar.tagline}</p>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Spotlight Surface */}
          <div className="mt-6 p-6 sm:p-8 rounded-xl bg-[#0f2c37] border border-[#d4af37]/30 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
                  <span>Pillar Execution Details</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-white">{selectedPillar.title}</span>
                </div>
                <h4 className="text-2xl font-bold text-white">
                  {selectedPillar.tagline}
                </h4>
                <p className="text-sm sm:text-base text-slate-300">
                  {selectedPillar.operationalImpact}
                </p>

                <div className="pt-2 space-y-2.5">
                  {selectedPillar.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#d4af37]" />
                      </div>
                      <span className="text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#091a20] p-6 rounded-lg border border-white/10 space-y-4">
                <div className="text-xs font-mono uppercase text-[#9ebdc7]">Impact Guarantee</div>
                <div className="text-3xl font-extrabold text-[#f3d47f] tabular-nums">
                  {selectedPillar.metric}
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  Every engagement integrates this pillar into unified service agreements with
                  defined cadence reporting and performance visibility.
                </div>
                <div className="pt-2">
                  <a
                    href="#delivery"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:text-[#f3d47f] transition-colors"
                  >
                    <span>View cross-border recruitment delivery</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formula Banner - Exact quote from Slide 2 */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#0d2731] via-[#143946] to-[#0d2731] border border-[#d4af37]/40 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-1">
              <div className="text-xs font-semibold text-[#f5d78a] tracking-wider uppercase">
                The Sustainable Business Equation
              </div>
              <div className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                People + Process + Business Strategy + Execution
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-lg bg-[#091a20] border border-[#d4af37]/50">
              <span className="text-base sm:text-xl font-extrabold text-[#f3d47f]">
                = Sustainable Business Value
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
