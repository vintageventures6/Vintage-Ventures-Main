import React, { useState, useEffect, useRef } from 'react';
import { SUCCESS_STORIES } from '../data/vintageData';
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  TrendingUp,
  Building2,
  MapPin,
  Briefcase,
  ArrowRight,
  Pause,
  Play
} from 'lucide-react';
import { SuccessStory } from '../types';

interface SuccessStoriesProps {
  onSelectSolutionForInquiry: (solutionName: string) => void;
}

export const SuccessStories: React.FC<SuccessStoriesProps> = ({
  onSelectSolutionForInquiry
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalStories = SUCCESS_STORIES.length;
  const currentStory: SuccessStory = SUCCESS_STORIES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalStories);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalStories) % totalStories);
  };

  // Autoplay with pause on hover
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 7500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, currentIndex]);

  return (
    <section
      id="success-stories"
      className="py-20 lg:py-28 bg-[#0b2028] relative border-t border-white/5"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#d4af37]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                Proven Client Impact
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Success Stories: Measurable Business Outcomes
            </h2>
            <p className="text-base sm:text-lg text-[#a6c5ce] leading-relaxed">
              Attributable case studies illustrating how Vintage Ventures connects workforce
              capability, process engineering, and cross-border execution to sustainable client
              growth.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-2 rounded-lg bg-[#0e2732] border border-white/10 text-slate-300 hover:text-white transition-colors"
              title={isAutoPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
              aria-label={isAutoPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 rounded-lg bg-[#0e2732] hover:bg-[#133744] border border-white/10 hover:border-[#d4af37]/50 text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              aria-label="Previous client story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-[#9ebdc7] tabular-nums px-1">
              0{currentIndex + 1} / 0{totalStories}
            </span>

            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 rounded-lg bg-[#0e2732] hover:bg-[#133744] border border-white/10 hover:border-[#d4af37]/50 text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              aria-label="Next client story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Story Selector Bar (Interactive segmented switcher) */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {SUCCESS_STORIES.map((story, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={story.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`p-3.5 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-[#143946] border-[#d4af37] ring-1 ring-[#d4af37] shadow-lg'
                    : 'bg-[#0f2933] border-white/10 hover:border-white/20 hover:bg-[#112d38]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-[11px] font-mono font-semibold ${
                      isSelected ? 'text-[#f5d78a]' : 'text-[#d4af37]'
                    }`}
                  >
                    CASE 0{idx + 1}
                  </span>
                  <span className="text-[11px] text-[#9ebdc7] truncate max-w-[110px]">
                    {story.serviceCategory}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white truncate">
                  {story.company}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Carousel Card */}
        <div className="mt-6 rounded-2xl bg-[#0e2a35] border border-[#d4af37]/40 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Testimonial Quote & Executive Attribution (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Unboxed Metadata Strip */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#9ebdc7]">
                <span className="font-semibold text-[#f5d78a]">{currentStory.serviceCategory}</span>
                <span className="text-[#d4af37]" aria-hidden="true">·</span>
                <span>{currentStory.industry}</span>
                <span className="text-[#d4af37]" aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3 h-3 text-[#d4af37]" />
                  <span>{currentStory.region}</span>
                </span>
              </div>

              {/* Case Headline */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-balance leading-snug">
                {currentStory.headline}
              </h3>

              {/* Attributable Quote Block */}
              <div className="relative pl-6 border-l-2 border-[#d4af37] py-1 space-y-3">
                <Quote className="w-6 h-6 text-[#d4af37]/40 absolute -left-3 -top-2" />
                <p className="text-base sm:text-lg text-slate-200 italic leading-relaxed">
                  “{currentStory.quote}”
                </p>

                {/* Attribution Signature */}
                <div className="pt-2 text-xs">
                  <div className="font-bold text-white text-sm">{currentStory.clientName}</div>
                  <div className="text-[#a5c3cb]">
                    {currentStory.role} · <span className="text-white">{currentStory.company}</span>
                  </div>
                </div>
              </div>

              {/* Challenge vs Intervention Accordion-style layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#091a20] border border-white/5 space-y-1.5">
                  <span className="text-xs font-mono font-semibold text-rose-300 uppercase tracking-wider block">
                    Operating Bottleneck
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentStory.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#091a20] border border-white/5 space-y-1.5">
                  <span className="text-xs font-mono font-semibold text-[#f3d47f] uppercase tracking-wider block">
                    Vintage Ventures Delivery
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentStory.intervention}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Concrete Quantitative Metrics & Action (5 cols) */}
            <div className="lg:col-span-5 bg-[#08181f] p-6 rounded-xl border border-white/10 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] uppercase tracking-wider mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Audited Business Outcomes</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Validated Operating Performance Signals
                </div>
              </div>

              {/* KPI Score Grid */}
              <div className="grid grid-cols-2 gap-3">
                {currentStory.results.map((res, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-3.5 rounded-lg bg-[#0e2731] border border-white/5 space-y-1"
                  >
                    <div className="text-lg sm:text-xl font-extrabold text-[#f3d47f] font-mono tabular-nums">
                      {res.value}
                    </div>
                    <div className="text-xs text-slate-300 leading-tight">{res.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10 space-y-3">
                <div className="text-xs text-[#9ebdc7]">
                  Facing a similar operational requirement or cross-border hiring surge?
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onSelectSolutionForInquiry(
                      `${currentStory.serviceCategory} (${currentStory.company} Model)`
                    )
                  }
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-[#091a20] bg-[#d4af37] hover:bg-[#f5dc94] rounded-lg transition-all shadow-md whitespace-nowrap"
                >
                  <span>Inquire for Similar Growth Capability</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
