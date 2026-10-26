import React, { useState, useEffect } from 'react';
import { SLIDES_GALLERY } from '../data/vintageData';
import { X, ChevronLeft, ChevronRight, Download, ExternalLink, Maximize2 } from 'lucide-react';

interface DeckViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSlide?: number;
}

export const DeckViewerModal: React.FC<DeckViewerModalProps> = ({
  isOpen,
  onClose,
  initialSlide = 1
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(initialSlide - 1);

  useEffect(() => {
    setCurrentSlideIndex(Math.max(0, Math.min(SLIDES_GALLERY.length - 1, initialSlide - 1)));
  }, [initialSlide, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentSlideIndex]);

  if (!isOpen) return null;

  const currentSlide = SLIDES_GALLERY[currentSlideIndex];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev < SLIDES_GALLERY.length - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : SLIDES_GALLERY.length - 1));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-5xl bg-[#091a20] rounded-2xl border border-[#d4af37]/40 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#07161b]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#d4af37]">
              SLIDE {currentSlide.page} OF {SLIDES_GALLERY.length}
            </span>
            <span className="hidden sm:inline-block text-white/30">|</span>
            <span className="hidden sm:inline-block text-xs font-medium text-slate-200">
              {currentSlide.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/assets/aistudio/VINTAGE-VENTURES_47e3f034.pdf"
              download="Vintage-Ventures-Corporate-Deck.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#091a20] bg-[#d4af37] hover:bg-[#f3d78a] rounded transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Viewer Canvas */}
        <div className="relative flex-1 bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden min-h-[300px]">
          <img
            src={currentSlide.file}
            alt={`Vintage Ventures Presentation ${currentSlide.title}`}
            className="max-h-[68vh] w-auto max-w-full object-contain rounded shadow-lg select-none"
            referrerPolicy="no-referrer"
          />

          {/* Left Arrow */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0a1e26]/80 hover:bg-[#d4af37] text-white hover:text-[#091a20] border border-white/10 transition-all shadow-md focus:outline-none"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0a1e26]/80 hover:bg-[#d4af37] text-white hover:text-[#091a20] border border-white/10 transition-all shadow-md focus:outline-none"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Filmstrip / Quick Picker */}
        <div className="bg-[#07161b] px-4 py-3 border-t border-white/10 overflow-x-auto">
          <div className="flex items-center gap-2 justify-start sm:justify-center min-w-max">
            {SLIDES_GALLERY.map((slide, idx) => (
              <button
                key={slide.page}
                type="button"
                onClick={() => setCurrentSlideIndex(idx)}
                className={`relative rounded border transition-all overflow-hidden ${
                  idx === currentSlideIndex
                    ? 'border-[#d4af37] ring-2 ring-[#d4af37] scale-105'
                    : 'border-white/10 opacity-60 hover:opacity-100'
                }`}
                style={{ width: '70px', height: '39px' }}
              >
                <img
                  src={slide.file}
                  alt={`Thumbnail ${slide.page}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 bg-black/80 px-1 text-[9px] font-mono text-white">
                  {slide.page}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
