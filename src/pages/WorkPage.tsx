import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bookmark, ArrowUpRight, X, Sparkles, Filter } from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { SolutionCategory } from '../types';
import { AdPlaceholder } from '../components/common/AdPlaceholder';

export const WorkPage: React.FC = () => {
  const {
    isBookmarked,
    toggleBookmark,
    searchHistory,
    addSearchQuery,
    clearSearchHistory,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SolutionCategory | 'all'>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = useMemo(() => {
    const list = Array.from(new Set(CASE_STUDIES.map((c) => c.industry)));
    return ['all', ...list];
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      addSearchQuery(searchQuery.trim());
    }
  };

  const filteredCaseStudies = useMemo(() => {
    return CASE_STUDIES.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Industry match
      if (selectedIndustry !== 'all' && item.industry !== selectedIndustry) {
        return false;
      }
      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesClient = item.client.toLowerCase().includes(query);
        const matchesExcerpt = item.excerpt.toLowerCase().includes(query);
        const matchesTag = item.tags.some((t) => t.toLowerCase().includes(query));
        return matchesTitle || matchesClient || matchesExcerpt || matchesTag;
      }
      return true;
    });
  }, [selectedCategory, selectedIndustry, searchQuery]);

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Portfolio & Impact
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
            Proof in execution, rigor in results.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Explore verified case studies across brand identity systems, creator networks, high-impact advertising campaigns, and scaled performance commerce.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="relative w-full md:flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by client, industry, or strategic capability..."
                className="w-full rounded-xl border border-neutral-800 bg-neutral-950 pl-10 pr-10 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-amber-400 focus:outline-hidden"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </form>

            {/* Solution Category Selector */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-amber-400 text-neutral-950 font-bold'
                    : 'bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                All Pillars
              </button>
              <button
                onClick={() => setSelectedCategory('brands')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === 'brands'
                    ? 'bg-amber-400 text-neutral-950 font-bold'
                    : 'bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                Brands
              </button>
              <button
                onClick={() => setSelectedCategory('content')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === 'content'
                    ? 'bg-amber-400 text-neutral-950 font-bold'
                    : 'bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                Content
              </button>
              <button
                onClick={() => setSelectedCategory('advertising')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === 'advertising'
                    ? 'bg-amber-400 text-neutral-950 font-bold'
                    : 'bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                Advertising
              </button>
              <button
                onClick={() => setSelectedCategory('performance')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === 'performance'
                    ? 'bg-amber-400 text-neutral-950 font-bold'
                    : 'bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                Performance
              </button>
            </div>
          </div>

          {/* Industry Filter + Search History Tags */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-neutral-800/80 text-xs">
            <div className="flex items-center gap-2">
              <Filter className="h-3.5 w-3.5 text-neutral-500" />
              <span className="text-neutral-400 font-medium">Industry:</span>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1 text-xs text-neutral-300 focus:outline-hidden focus:border-amber-400"
              >
                <option value="all">All Sectors</option>
                {industries
                  .filter((ind) => ind !== 'all')
                  .map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
              </select>
            </div>

            {searchHistory.length > 0 && (
              <div className="flex items-center gap-1.5 text-neutral-500">
                <span>Recent Searches:</span>
                {searchHistory.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSearchQuery(item);
                      addSearchQuery(item);
                    }}
                    className="hover:text-amber-400 transition-colors underline decoration-dotted"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={clearSearchHistory}
                  title="Clear search history"
                  className="text-neutral-600 hover:text-neutral-400 ml-1"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Case Studies Grid */}
        {filteredCaseStudies.length === 0 ? (
          <div className="py-20 text-center rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8">
            <div className="text-neutral-500 text-sm font-medium">
              No case studies found matching your criteria.
            </div>
            <p className="text-xs text-neutral-400 mt-1">
              Try adjusting your search terms or clearing the selected filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedIndustry('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <article
                key={study.id}
                className="group relative flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden hover:border-neutral-700 transition-all duration-300"
              >
                {/* Visual Header */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={study.heroImage}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                  {/* Top Bar with category and bookmark toggle */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded bg-neutral-950/80 backdrop-blur-md text-amber-400 border border-neutral-800">
                      {study.industry}
                    </span>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleBookmark(study.slug);
                      }}
                      title={isBookmarked(study.slug) ? 'Remove bookmark' : 'Bookmark case study'}
                      className={`p-2 rounded-lg backdrop-blur-md transition-colors border ${
                        isBookmarked(study.slug)
                          ? 'bg-amber-400 text-neutral-950 border-amber-400'
                          : 'bg-neutral-950/80 text-neutral-300 hover:text-amber-400 border-neutral-800'
                      }`}
                    >
                      <Bookmark className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Primary metric highlight overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold font-mono text-white">
                      {study.metrics[0].metric}
                    </span>
                    <span className="text-xs text-neutral-300">
                      {study.metrics[0].label}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <div className="text-xs text-amber-400 font-semibold mb-1">
                      {study.client}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                      <Link to={`/work/${study.slug}`}>{study.title}</Link>
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {study.excerpt}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <div className="text-[11px] text-neutral-500 font-mono">
                      <span>{study.category.toUpperCase()}</span>
                      <span className="mx-1.5">·</span>
                      <span>{study.year}</span>
                    </div>

                    <Link
                      to={`/work/${study.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-amber-400 transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Compact Ad Placeholder */}
        <AdPlaceholder />
      </div>
    </div>
  );
};
