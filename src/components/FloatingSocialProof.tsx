import React, { useState } from 'react';
import { LINKEDIN_PROFILE, LINKEDIN_POSTS } from '../data/vintageData';
import { Linkedin, X, ChevronUp, ChevronDown, ExternalLink, UserCheck, Plus } from 'lucide-react';

export const FloatingSocialProof: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(14820);

  const latestPost = LINKEDIN_POSTS[0];

  const handleToggleFollow = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFollowing) {
      setIsFollowing(false);
      setFollowerCount((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowerCount((prev) => prev + 1);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-30 hidden sm:block">
      {isOpen ? (
        <div className="w-80 bg-[#091e26] border border-[#d4af37]/40 rounded-2xl shadow-2xl overflow-hidden p-5 space-y-4 animate-fade-in text-slate-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#d4af37]/60 p-0.5 bg-[#07161b] shrink-0">
                <img
                  src="/assets/aistudio/Vintage_Venture_67b9bac7.png"
                  alt="Vintage Ventures"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight flex items-center gap-1.5">
                  <span>Vintage Ventures</span>
                  <span className="text-[10px] text-[#0077b5] font-semibold">in</span>
                </div>
                <div className="text-[10px] text-[#9ebdc7] font-mono tabular-nums">
                  {followerCount.toLocaleString()} LinkedIn Followers
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors"
              aria-label="Minimize LinkedIn widget"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Latest Dispatch Snippet */}
          <div className="space-y-1.5 bg-[#051116] p-3 rounded-xl border border-white/5">
            <div className="text-[10px] font-mono font-semibold text-[#f5d78a] uppercase tracking-wider">
              Latest Leadership Signal
            </div>
            <p className="text-xs font-medium text-white line-clamp-2 leading-snug">
              {latestPost.title}
            </p>
            <div className="text-[11px] text-slate-400 line-clamp-2">
              {latestPost.content.slice(0, 110)}...
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleToggleFollow}
              className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold rounded-lg transition-all ${
                isFollowing
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-[#d4af37] text-[#091a20] hover:bg-[#f5dc94]'
              }`}
            >
              {isFollowing ? (
                <>
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Following</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Follow on LinkedIn</span>
                </>
              )}
            </button>

            <a
              href="#insights"
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 text-xs font-semibold text-slate-200 hover:text-white bg-[#133744] hover:bg-[#1a4454] rounded-lg border border-white/10 transition-colors whitespace-nowrap"
            >
              Feed
            </a>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#0a1f28]/95 hover:bg-[#102d38] border border-[#d4af37]/50 shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          aria-label="Expand LinkedIn Social Proof"
        >
          <div className="w-7 h-7 rounded-full overflow-hidden border border-[#d4af37]/60 p-0.5 bg-[#07161b] shrink-0">
            <img
              src="/assets/aistudio/Vintage_Venture_67b9bac7.png"
              alt="Vintage Ventures"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-left">
            <span className="text-xs font-bold text-white block leading-tight group-hover:text-[#f5d78a] transition-colors">
              Follow Us on LinkedIn
            </span>
            <span className="text-[10px] text-[#9ebdc7] font-mono tabular-nums">
              {followerCount.toLocaleString()} Professionals
            </span>
          </div>
          <ChevronUp className="w-4 h-4 text-[#d4af37] ml-1 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
};
