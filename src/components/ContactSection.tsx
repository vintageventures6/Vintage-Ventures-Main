import React, { useState } from 'react';
import { EXECUTIVE_CONTACT } from '../data/vintageData';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Building,
  User,
  Clock
} from 'lucide-react';

interface ContactSectionProps {
  prefilledScope?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledScope = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    phoneNumber: '',
    solutionInterest: 'Workforce & Talent Acquisition',
    geographicScope: 'United States & Canada',
    message: prefilledScope ? `Interested in: ${prefilledScope}` : ''
  });

  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(EXECUTIVE_CONTACT.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EXECUTIVE_CONTACT.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name';
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) {
      errs.workEmail = 'Please provide a valid work email';
    }
    if (!formData.company.trim()) errs.company = 'Please specify your company';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#07161b] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#d4af37]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              The Next Conversation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Let’s Build Your Next Growth Capability.
          </h2>
          <p className="text-base sm:text-lg text-[#a6c5ce] leading-relaxed">
            Whether you are hiring at scale, expanding into new markets, building a BPO operation,
            strengthening workforce management, outsourcing business processes, or optimizing
            operational performance.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Leadership Contact & Brand Assurance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#0b1f27] border border-[#d4af37]/40 p-6 sm:p-8 space-y-6 shadow-2xl">
              {/* Brand Lockup */}
              <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-[#d4af37] p-0.5 bg-[#091a20] shrink-0">
                  <img
                    src="/assets/aistudio/Vintage_Venture_67b9bac7.png"
                    alt="Vintage Ventures"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-[#d4af37]">Official Contact</div>
                  <div className="text-xl font-bold text-white">Vintage Ventures</div>
                  <div className="text-xs text-[#9ebdc7]">Strategic Workforce & Business Solutions</div>
                </div>
              </div>

              {/* Direct Leadership Card */}
              <div className="p-4 rounded-xl bg-[#102d38] border border-white/5 space-y-4">
                <div>
                  <div className="text-xs text-[#d4af37] font-semibold uppercase tracking-wider">
                    Executive Point of Contact
                  </div>
                  <div className="text-lg font-bold text-white mt-0.5">
                    {EXECUTIVE_CONTACT.name}
                  </div>
                  <div className="text-xs text-slate-300">
                    Lead Strategic Director · Vintage Ventures
                  </div>
                </div>

                {/* Interactive Phone */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#07161b] border border-white/5 text-xs">
                  <a
                    href={`tel:${EXECUTIVE_CONTACT.phone}`}
                    className="flex items-center gap-2.5 text-slate-200 hover:text-[#f3d47f] font-mono transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                    <span>{EXECUTIVE_CONTACT.displayPhone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="p-1 text-slate-400 hover:text-white"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Interactive Email */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#07161b] border border-white/5 text-xs">
                  <a
                    href={`mailto:${EXECUTIVE_CONTACT.email}`}
                    className="flex items-center gap-2.5 text-slate-200 hover:text-[#f3d47f] truncate transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span className="truncate">{EXECUTIVE_CONTACT.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1 text-slate-400 hover:text-white shrink-0 ml-2"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Tagline Proof */}
              <div className="pt-2 text-xs text-slate-400 italic">
                “Right People. Smarter Processes. Measurable Business Outcomes.”
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Request Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0b1f27] p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 shadow-2xl">
            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border-2 border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Vintage Ventures. Mr. Shashank Mohan and the
                  strategic solutions team will review your requirements and respond within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: '',
                        workEmail: '',
                        company: '',
                        phoneNumber: '',
                        solutionInterest: 'Workforce & Talent Acquisition',
                        geographicScope: 'United States & Canada',
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-[#143642] text-white hover:bg-[#1a4453] border border-[#d4af37]/30 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-white/10 pb-3 mb-4">
                  <h3 className="text-xl font-bold text-white">
                    Let’s discuss your business requirements
                  </h3>
                  <p className="text-xs text-[#9ebdc7] mt-1">
                    Share your workforce challenges and growth objectives for a tailored solution charter.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#07161b] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="e.g. name@company.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#07161b] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                    {errors.workEmail && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.workEmail}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Organization / Company *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Enterprise"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#07161b] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                    {errors.company && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.company}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Contact Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="e.g. +1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#07161b] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Primary Solution Interest
                    </label>
                    <select
                      value={formData.solutionInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, solutionInterest: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#07161b] border border-white/15 text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="Workforce & Talent Acquisition">
                        Workforce & Talent Acquisition
                      </option>
                      <option value="US & Canada Cross-Border Recruitment">
                        US & Canada Cross-Border Recruitment
                      </option>
                      <option value="Business Consulting & Market Entry">
                        Business Consulting & Market Entry
                      </option>
                      <option value="BPO Setup & Operations Optimization">
                        BPO Setup & Operations Optimization
                      </option>
                      <option value="HR Operations & Payroll Management">
                        HR Operations & Payroll Management
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Geographic Scope
                    </label>
                    <select
                      value={formData.geographicScope}
                      onChange={(e) =>
                        setFormData({ ...formData, geographicScope: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#07161b] border border-white/15 text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="United States & Canada">United States & Canada</option>
                      <option value="Domestic & Pan-India">Domestic & Regional</option>
                      <option value="Global Distributed Hubs">Global Distributed Hubs</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Requirements & Growth Objectives
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your hiring needs, operational bottlenecks, or planned expansion timeline..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#07161b] border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold text-[#091a20] bg-[#d4af37] hover:bg-[#f5dc94] rounded-lg transition-all shadow-lg disabled:opacity-50 whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Strategic Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
