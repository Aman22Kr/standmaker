import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Share2,
  Calendar,
  Building2,
  TrendingUp,
  Quote
} from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { VideoPlaceholder } from '../components/common/VideoPlaceholder';
import { AdPlaceholder } from '../components/common/AdPlaceholder';

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useApp();

  const studyIndex = CASE_STUDIES.findIndex((c) => c.slug === slug);
  const study = CASE_STUDIES[studyIndex];

  if (!study) {
    return (
      <div className="mx-auto max-w-3xl py-28 px-4 text-center">
        <h1 className="text-3xl font-bold text-white">Case Study Not Found</h1>
        <p className="mt-3 text-sm text-neutral-400">
          The requested case study could not be located.
        </p>
        <Link
          to="/work"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 rounded-lg hover:bg-amber-300"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Work</span>
        </Link>
      </div>
    );
  }

  const prevStudy = studyIndex > 0 ? CASE_STUDIES[studyIndex - 1] : CASE_STUDIES[CASE_STUDIES.length - 1];
  const nextStudy = studyIndex < CASE_STUDIES.length - 1 ? CASE_STUDIES[studyIndex + 1] : CASE_STUDIES[0];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${study.title} | standmaker Case Study`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Case study link copied to clipboard.');
    }
  };

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Top Bar */}
        <div className="flex items-center justify-between pb-8 border-b border-neutral-900">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Selected Work</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleBookmark(study.slug)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                isBookmarked(study.slug)
                  ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold'
                  : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <Bookmark className="h-3.5 w-3.5" />
              <span>{isBookmarked(study.slug) ? 'Saved' : 'Save for Review'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg border border-neutral-800 bg-neutral-900 transition-colors"
              title="Share Case Study"
              aria-label="Share case study"
            >
              <Share2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Case Study Header */}
        <div className="pt-10 pb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-amber-400 font-semibold tracking-wide uppercase">
            <span>{study.client}</span>
            <span>·</span>
            <span className="text-neutral-400">{study.industry}</span>
            <span>·</span>
            <span className="text-neutral-500">{study.year}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {study.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed">
            {study.excerpt}
          </p>
        </div>

        {/* Hero Visual Asset */}
        <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 mb-12 shadow-2xl">
          <img
            src={study.heroImage}
            alt={study.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-neutral-300">
            <span className="font-medium">Mandate Category: {study.category.toUpperCase()}</span>
            <span className="text-neutral-400 font-mono">Production Asset Ref #0{studyIndex + 1}</span>
          </div>
        </div>

        {/* Key Quantified Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {study.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between"
            >
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                METRIC 0{idx + 1}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-400 my-2">
                {m.metric}
              </div>
              <div>
                <div className="text-xs font-semibold text-white">{m.label}</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">{m.context}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Deep Dive */}
        <div className="space-y-14 text-neutral-300">
          {/* Challenge */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
              <span>01. THE STRATEGIC HURDLE</span>
            </div>
            <h2 className="text-2xl font-bold text-white">The Challenge</h2>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
              {study.challenge}
            </p>
          </section>

          {/* Strategy */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
              <span>02. THE INTERVENTION</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Strategic Architecture</h2>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
              {study.strategy}
            </p>
          </section>

          {/* Video Placeholder Area if configured */}
          {study.videoArea && (
            <section className="space-y-3 pt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-neutral-200">
                  Campaign Production Showcase & Video Area
                </h3>
                <span className="text-[11px] font-mono text-neutral-500">
                  {study.videoArea.duration} Widescreen
                </span>
              </div>
              <VideoPlaceholder
                title={study.videoArea.title}
                duration={study.videoArea.duration}
                thumbnailUrl={study.heroImage}
                subtitle={study.videoArea.placeholderNote}
              />
            </section>
          )}

          {/* Execution Details */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
              <span>03. MULTI-TOUCH EXECUTION</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Tactical Implementation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {study.execution.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 space-y-2"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                    <span>Workstream 0{idx + 1}</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results Summary */}
          <section className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
              <span>04. BUSINESS OUTCOME</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Commercial Impact</h2>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
              {study.results}
            </p>
          </section>

          {/* Testimonial Quote */}
          {study.testimonial && (
            <section className="p-8 rounded-2xl border border-neutral-800 bg-neutral-950 relative">
              <Quote className="h-8 w-8 text-amber-400/40 mb-4" />
              <blockquote className="text-lg font-medium text-white italic leading-relaxed">
                "{study.testimonial.quote}"
              </blockquote>
              <div className="mt-4 pt-4 border-t border-neutral-900 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">{study.testimonial.author}</div>
                  <div className="text-[11px] text-neutral-400">
                    {study.testimonial.role}, {study.testimonial.company}
                  </div>
                </div>
                <div className="text-[11px] font-mono text-amber-400">VERIFIED CLIENT PARTNER</div>
              </div>
            </section>
          )}
        </div>

        {/* Prev / Next Navigation */}
        <div className="mt-16 pt-8 border-t border-neutral-900 flex items-center justify-between gap-4">
          <Link
            to={`/work/${prevStudy.slug}`}
            className="flex flex-col text-left group p-4 rounded-xl border border-neutral-900 hover:border-neutral-800 bg-neutral-900/30 transition-colors max-w-[45%]"
          >
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest flex items-center gap-1">
              <ArrowLeft className="h-3 w-3" />
              <span>Previous Case Study</span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-400 transition-colors mt-1 line-clamp-1">
              {prevStudy.client}
            </span>
          </Link>

          <Link
            to={`/work/${nextStudy.slug}`}
            className="flex flex-col text-right group p-4 rounded-xl border border-neutral-900 hover:border-neutral-800 bg-neutral-900/30 transition-colors max-w-[45%]"
          >
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest flex items-center justify-end gap-1">
              <span>Next Case Study</span>
              <ArrowRight className="h-3 w-3" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-400 transition-colors mt-1 line-clamp-1">
              {nextStudy.client}
            </span>
          </Link>
        </div>

        {/* Ad Placeholder */}
        <AdPlaceholder />
      </div>
    </div>
  );
};
