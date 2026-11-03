import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Share2, BookOpen, CheckCircle2 } from 'lucide-react';
import { ARTICLES } from '../data/mockData';
import { AdPlaceholder } from '../components/common/AdPlaceholder';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl py-28 px-4 text-center">
        <h1 className="text-3xl font-bold text-white">Perspective Essay Not Found</h1>
        <p className="mt-3 text-sm text-neutral-400">
          The requested essay could not be located in our publication index.
        </p>
        <Link
          to="/perspectives"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 rounded-lg hover:bg-amber-300"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Perspectives</span>
        </Link>
      </div>
    );
  }

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${article.title} | standmaker Perspectives`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard.');
    }
  };

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-8 border-b border-neutral-900">
          <Link
            to="/perspectives"
            className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Perspectives</span>
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900 text-xs text-neutral-300 hover:text-white transition-colors"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span>Share Essay</span>
          </button>
        </div>

        {/* Article Header */}
        <div className="pt-10 pb-12 space-y-4">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold tracking-wide uppercase">
            <span>{article.category}</span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-400">{article.date}</span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-400">{article.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {article.title}
          </h1>

          <div className="pt-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/10 text-amber-400 font-bold font-mono text-xs border border-amber-400/20">
              {article.author.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <div>
              <div className="text-xs font-bold text-white">{article.author.name}</div>
              <div className="text-[11px] text-neutral-400">{article.author.role}</div>
            </div>
          </div>
        </div>

        {/* Key Takeaways Callout Box */}
        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 mb-12 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            EXECUTIVE SUMMARY & CORE TAKEAWAYS
          </h2>
          <ul className="space-y-2 text-xs text-neutral-300">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <div className="space-y-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans border-b border-neutral-900 pb-12">
          {article.content.map((para, idx) => (
            <p key={idx} className="leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="py-6 flex flex-wrap items-center gap-2 border-b border-neutral-900">
          <span className="text-xs text-neutral-500 font-medium mr-2">Filed Under:</span>
          {article.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded bg-neutral-900 text-neutral-400 border border-neutral-800 text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Articles */}
        <div className="mt-12 space-y-6">
          <h3 className="text-lg font-bold text-white">Related Perspectives</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                to={`/perspectives/${rel.slug}`}
                className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 transition-colors group block"
              >
                <div className="text-[11px] text-amber-400 font-medium mb-1">
                  {rel.category}
                </div>
                <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                  {rel.title}
                </div>
                <div className="mt-3 text-[11px] text-neutral-500 flex items-center gap-1">
                  <span>Read essay</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Compact Ad Placeholder */}
        <AdPlaceholder />
      </div>
    </div>
  );
};
