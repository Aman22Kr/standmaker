import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Trash2, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/common/AdPlaceholder';

export const SavedPage: React.FC = () => {
  const { savedCaseStudySlugs, toggleBookmark } = useApp();

  const savedStudies = CASE_STUDIES.filter((c) => savedCaseStudySlugs.includes(c.slug));

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Client Review Shortlist
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
            Saved Case Studies
          </h1>
          <p className="mt-3 text-sm text-neutral-400">
            Review your shortlisted mandates for internal stakeholder discussions. Stored directly in your browser's persistent localStorage.
          </p>
        </div>

        {savedStudies.length === 0 ? (
          <div className="py-20 text-center rounded-3xl border border-neutral-800 bg-neutral-900/40 p-12">
            <Bookmark className="mx-auto h-12 w-12 text-neutral-600 mb-4" />
            <h3 className="text-lg font-bold text-white">No Case Studies Bookmarked</h3>
            <p className="mt-2 text-xs text-neutral-400 max-w-sm mx-auto">
              Browse our portfolio of brand transformations, creator campaigns, and performance scaling to bookmark relevant references.
            </p>
            <Link
              to="/work"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
            >
              <span>Explore Selected Work</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {savedStudies.map((study) => (
              <div
                key={study.id}
                className="group relative flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden hover:border-neutral-700 transition-all"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={study.heroImage}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded bg-neutral-950/80 backdrop-blur-md text-amber-400 border border-neutral-800">
                      {study.industry}
                    </span>

                    <button
                      onClick={() => toggleBookmark(study.slug)}
                      className="p-2 rounded-lg bg-neutral-950/80 text-amber-400 hover:text-red-400 border border-neutral-800 backdrop-blur-md transition-colors"
                      title="Remove bookmark"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold font-mono text-white">
                      {study.metrics[0].metric}
                    </span>
                    <span className="text-xs text-neutral-300">
                      {study.metrics[0].label}
                    </span>
                  </div>
                </div>

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

                  <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-500 font-mono">
                      {study.category.toUpperCase()} · {study.year}
                    </span>

                    <Link
                      to={`/work/${study.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-amber-400 transition-colors"
                    >
                      <span>Review Details</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <AdPlaceholder />
      </div>
    </div>
  );
};
