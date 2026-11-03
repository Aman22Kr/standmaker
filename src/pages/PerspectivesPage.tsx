import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, BookOpen, Mail, Check, Sparkles } from 'lucide-react';
import { ARTICLES } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/common/AdPlaceholder';

export const PerspectivesPage: React.FC = () => {
  const { newsletterSubscribed, subscribeNewsletter } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [showSubSuccess, setShowSubSuccess] = useState(false);

  const categories = useMemo(() => {
    const list = Array.from(new Set(ARTICLES.map((a) => a.category)));
    return ['all', ...list];
  }, []);

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      if (selectedCategory !== 'all' && article.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(q);
        const matchesExcerpt = article.excerpt.toLowerCase().includes(q);
        const matchesAuthor = article.author.name.toLowerCase().includes(q);
        const matchesTag = article.tags.some((t) => t.toLowerCase().includes(q));
        return matchesTitle || matchesExcerpt || matchesAuthor || matchesTag;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim() && emailInput.includes('@')) {
      subscribeNewsletter(emailInput.trim());
      setShowSubSuccess(true);
      setEmailInput('');
      setTimeout(() => setShowSubSuccess(false), 5000);
    }
  };

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Thought Leadership & Insights
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
            The Standpoint: Strategic marketing perspectives.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Essays on brand building, non-linear consumer journeys, attribution science, and creator ecosystems written by our strategists and media directors.
          </p>
        </div>

        {/* Search & Categories Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays and topics..."
              className="w-full rounded-lg border border-neutral-800 bg-neutral-950 pl-9 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:border-amber-400 focus:outline-hidden"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-neutral-950 font-bold'
                    : 'bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Perspectives' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-all flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                  <span className="text-amber-400 font-medium">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  <Link to={`/perspectives/${article.slug}`}>{article.title}</Link>
                </h2>

                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Key takeaway snippet */}
                <div className="mt-4 p-3 rounded-lg bg-neutral-950/80 border border-neutral-800/80 text-[11px] text-neutral-300">
                  <span className="font-semibold text-amber-400">Core Takeaway: </span>
                  {article.keyTakeaways[0]}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div className="text-xs">
                  <div className="font-semibold text-white">{article.author.name}</div>
                  <div className="text-[11px] text-neutral-500">{article.author.role}</div>
                </div>

                <Link
                  to={`/perspectives/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Read Full Essay</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription Card */}
        <section className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-8 sm:p-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Mail className="h-4 w-4" />
              <span>The Monthly Dispatch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Subscribe to The Standpoint.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Every month, we curate one comprehensive strategic briefing on consumer decision patterns, marketing attribution updates, and agency case studies.
            </p>

            {newsletterSubscribed || showSubSuccess ? (
              <div className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs">
                <Check className="h-5 w-5 shrink-0" />
                <div>
                  <div className="font-bold">You are subscribed to The Standpoint.</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    Your preference is saved locally. You will receive next month's strategic briefing.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your corporate email address..."
                  className="flex-1 rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-xs text-white placeholder-neutral-500 focus:border-amber-400 focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors whitespace-nowrap shadow-md"
                >
                  Join 12,000+ Marketing Leaders
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Compact Ad Placeholder */}
        <AdPlaceholder />
      </div>
    </div>
  );
};
