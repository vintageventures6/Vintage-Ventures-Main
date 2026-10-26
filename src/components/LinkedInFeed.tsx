import React, { useState } from 'react';
import { LINKEDIN_POSTS, LINKEDIN_PROFILE, EXECUTIVE_CONTACT } from '../data/vintageData';
import {
  Linkedin,
  ThumbsUp,
  MessageSquare,
  Repeat2,
  Share2,
  ExternalLink,
  Check,
  TrendingUp,
  UserCheck,
  Plus
} from 'lucide-react';
import { LinkedInPost } from '../types';

export const LinkedInFeed: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [posts, setPosts] = useState<LinkedInPost[]>(LINKEDIN_POSTS);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [copiedPostId, setCopiedPostId] = useState<string | null>(null);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [followerCount, setFollowerCount] = useState<number>(14820);

  const categories = ['All', 'Cross-Border Talent', 'BPO & Operations', 'HR & Payroll Governance'];

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  const handleLike = (id: string) => {
    const isLiked = !!likedPosts[id];
    setLikedPosts((prev) => ({ ...prev, [id]: !isLiked }));
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            metrics: {
              ...p.metrics,
              likes: isLiked ? p.metrics.likes - 1 : p.metrics.likes + 1
            }
          };
        }
        return p;
      })
    );
  };

  const handleShare = (post: LinkedInPost) => {
    const shareText = `"${post.title}" - by ${post.author.name} at Vintage Ventures: ${post.link}`;
    navigator.clipboard.writeText(shareText);
    setCopiedPostId(post.id);
    setTimeout(() => setCopiedPostId(null), 2000);
  };

  const handleToggleFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowerCount((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowerCount((prev) => prev + 1);
    }
  };

  return (
    <section id="insights" className="py-20 lg:py-28 bg-[#091d24] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#d4af37]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                Executive Signals & Social Proof
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Professional Insights & Leadership Feed
            </h2>
            <p className="text-base sm:text-lg text-[#a6c5ce] leading-relaxed">
              Real-world perspectives on cross-border talent acquisition, BPO stabilization, and
              operational governance shared directly by our leadership team.
            </p>
          </div>

          {/* LinkedIn Profile & Follow Us Card */}
          <div className="bg-[#0e2a35] border border-[#d4af37]/30 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shrink-0 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#0077b5] flex items-center justify-center text-white shadow-md shrink-0">
                <Linkedin className="w-6 h-6 fill-current" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-white">Vintage Ventures</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span className="text-xs text-[#9ebdc7] font-mono tabular-nums">
                    {followerCount.toLocaleString()} followers
                  </span>
                </div>
                <div className="text-[11px] text-slate-300">
                  Official LinkedIn Corporate Channel
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleToggleFollow}
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-all shadow-sm ${
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
                    <span>Follow Us</span>
                  </>
                )}
              </button>

              <a
                href={LINKEDIN_PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-300 hover:text-white bg-[#133744] hover:bg-[#194555] border border-white/10 rounded-lg transition-colors"
                title="View LinkedIn Page in new tab"
                aria-label="View Vintage Ventures LinkedIn Page"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === cat
                  ? 'bg-[#d4af37] text-[#091a20] shadow-sm'
                  : 'bg-[#0f2c37] text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Feed Posts Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredPosts.map((post) => {
            const isLiked = !!likedPosts[post.id];
            const isCopied = copiedPostId === post.id;

            return (
              <article
                key={post.id}
                className="rounded-2xl bg-[#0e2933] border border-white/10 hover:border-[#d4af37]/40 transition-all p-6 flex flex-col justify-between shadow-xl space-y-5"
              >
                <div className="space-y-4">
                  {/* Post Header: Author lockup */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-[#d4af37]/50 p-0.5 bg-[#07161b] shrink-0">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span>{post.author.name}</span>
                          <span className="text-[10px] text-[#0077b5] font-semibold">in</span>
                        </div>
                        <div className="text-[11px] text-[#9ebdc7] leading-tight">
                          {post.author.title}
                        </div>
                      </div>
                    </div>

                    <span className="text-[11px] text-slate-400 font-mono">
                      {post.date}
                    </span>
                  </div>

                  {/* Category kicker */}
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-[#f5d78a]">
                    <span>{post.category}</span>
                    <span className="text-[#d4af37]/40" aria-hidden="true">·</span>
                    <span className="text-slate-400">Industry Perspective</span>
                  </div>

                  {/* Post Title */}
                  <h3 className="text-base font-bold text-white leading-snug">
                    {post.title}
                  </h3>

                  {/* Post Content Prose */}
                  <div className="text-xs text-slate-300 leading-relaxed space-y-2 whitespace-pre-line">
                    {post.content}
                  </div>

                  {/* Featured Benchmark Metric */}
                  {post.featuredStat && (
                    <div className="p-3 rounded-xl bg-[#08181f] border border-[#d4af37]/30 flex items-center justify-between">
                      <span className="text-xs text-slate-300">{post.featuredStat.label}</span>
                      <span className="text-xs font-bold text-[#f3d47f] font-mono tabular-nums">
                        {post.featuredStat.value}
                      </span>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[11px] text-[#9ebdc7]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Actions Toolbar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleLike(post.id)}
                      className={`inline-flex items-center gap-1 transition-colors ${
                        isLiked ? 'text-[#d4af37] font-semibold' : 'hover:text-white'
                      }`}
                      aria-label="Like post"
                    >
                      <ThumbsUp
                        className={`w-3.5 h-3.5 ${isLiked ? 'fill-current text-[#d4af37]' : ''}`}
                      />
                      <span className="font-mono tabular-nums">{post.metrics.likes}</span>
                    </button>

                    <span className="inline-flex items-center gap-1 text-slate-400">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span className="font-mono tabular-nums">{post.metrics.comments}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 text-slate-400">
                      <Repeat2 className="w-3.5 h-3.5" />
                      <span className="font-mono tabular-nums">{post.metrics.reposts}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleShare(post)}
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded transition-colors"
                      title="Copy post link"
                      aria-label="Share post"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Share2 className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#d4af37] hover:text-[#f5d78a]"
                    >
                      <span>Read</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Leadership Network Endorsement Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0d2731] via-[#123644] to-[#0d2731] border border-[#d4af37]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#d4af37] p-0.5 bg-[#07161b] shrink-0">
              <img
                src="/assets/aistudio/Vintage_Venture_67b9bac7.png"
                alt="Leadership"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Connect Directly With {EXECUTIVE_CONTACT.name}
              </div>
              <p className="text-xs text-[#9ebdc7]">
                Managing Director & Strategic Lead at Vintage Ventures · Connecting decision makers across US, Canada & Global delivery networks.
              </p>
            </div>
          </div>

          <a
            href={LINKEDIN_PROFILE.leadershipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#091a20] bg-[#d4af37] hover:bg-[#f5dc94] rounded-lg transition-all shadow-md shrink-0 whitespace-nowrap"
          >
            <Linkedin className="w-4 h-4 fill-current" />
            <span>Connect on LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
