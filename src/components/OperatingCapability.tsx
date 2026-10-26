import React from 'react';
import { Layers, RefreshCw, BarChart3, Settings, ShieldCheck, Check, ArrowRight } from 'lucide-react';

export const OperatingCapability: React.FC = () => {
  return (
    <section id="operations" className="py-20 lg:py-28 bg-[#0d2731] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#d4af37]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              Operating Capability
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Building Efficient, Scalable Operations
          </h2>
          <p className="text-base sm:text-lg text-[#a6c5ce] leading-relaxed">
            Vintage Ventures supports setup, stabilization, and optimization across people,
            workflows, and performance signals.
          </p>
        </div>

        {/* 2-Column Core Operating Domains (Slide 7) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: BPO & Operations (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0f2c37] border border-[#d4af37]/30 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block">
                    BPO & Operations
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">From Setup to Performance</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#143d4d] text-[#d4af37] flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
              </div>

              {/* 4 BPO Sub-capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#091b22] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-base">
                    <RefreshCw className="w-4 h-4 text-[#d4af37]" />
                    <span>Setup & Transition</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Inbound and outbound operations with turn-key facility and tech setup.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#091b22] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-base">
                    <Settings className="w-4 h-4 text-[#d4af37]" />
                    <span>Workforce Planning</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Training, quality assurance, and ongoing productivity management.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#091b22] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-base">
                    <BarChart3 className="w-4 h-4 text-[#d4af37]" />
                    <span>MIS & Reporting</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Performance signals and executive telemetry for operating decisions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#091b22] border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-base">
                    <Layers className="w-4 h-4 text-[#d4af37]" />
                    <span>Process Optimization</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Continuous improvement models engineered to scale smoothly with demand.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#9ebdc7]">
              <span>Inbound & Outbound SLA Governance</span>
              <span className="font-mono text-[#f3d47f]">ISO-Calibrated Protocols</span>
            </div>
          </div>

          {/* Column 2: HR & Workforce (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0a1e26] border border-[#d4af37]/30 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block">
                    HR & Workforce
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">Reliable Administration</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#143d4d] text-[#d4af37] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              {/* Exact Checklist from Slide 7 */}
              <div className="space-y-3">
                {[
                  'Payroll processing',
                  'Attendance and leave management',
                  'Employee data management',
                  'Background verification',
                  'HR administration',
                  'Compliance support'
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#112d38] border border-white/5"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/60 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#d4af37]" />
                    </div>
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <div className="text-xs font-semibold text-[#f3d47f] tracking-wide">
                People + workflow + performance reporting
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
