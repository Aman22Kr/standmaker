import React, { useEffect, useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import {
  Compass,
  Layers,
  Megaphone,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sliders,
  ShieldCheck,
  Zap,
  Target
} from 'lucide-react';
import { SOLUTIONS, CASE_STUDIES } from '../data/mockData';
import { SolutionCategory } from '../types';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/common/AdPlaceholder';

export const SolutionsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { updateInquiryDraft } = useApp();

  const categoryParam = searchParams.get('category') as SolutionCategory | null;
  const [selectedCategory, setSelectedCategory] = useState<SolutionCategory | 'all'>(
    categoryParam || 'all'
  );

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleFilterChange = (cat: SolutionCategory | 'all') => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredSolutions =
    selectedCategory === 'all'
      ? SOLUTIONS
      : SOLUTIONS.filter((s) => s.category === selectedCategory);

  const handleSelectSolutionForInquiry = (category: SolutionCategory) => {
    updateInquiryDraft({
      services: [category],
    });
    navigate('/contact');
  };

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Modular Capabilities
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
            Marketing solutions engineered for measurable commercial outcomes.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Every business hurdle demands a distinct strategic intervention. We combine brand architecture, high-affinity creator networks, narrative advertising, and rigorous performance mathematics into unified mandates.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-neutral-900 pb-6">
          <button
            onClick={() => handleFilterChange('all')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-amber-400 text-neutral-950 font-bold shadow-md'
                : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
            }`}
          >
            All Solutions
          </button>
          <button
            onClick={() => handleFilterChange('brands')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'brands'
                ? 'bg-amber-400 text-neutral-950 font-bold shadow-md'
                : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
            }`}
          >
            Brands & Strategy
          </button>
          <button
            onClick={() => handleFilterChange('content')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'content'
                ? 'bg-amber-400 text-neutral-950 font-bold shadow-md'
                : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
            }`}
          >
            Content & Creators
          </button>
          <button
            onClick={() => handleFilterChange('advertising')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'advertising'
                ? 'bg-amber-400 text-neutral-950 font-bold shadow-md'
                : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
            }`}
          >
            Advertising & Creative
          </button>
          <button
            onClick={() => handleFilterChange('performance')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'performance'
                ? 'bg-amber-400 text-neutral-950 font-bold shadow-md'
                : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
            }`}
          >
            Performance & Commerce
          </button>
        </div>

        {/* Solutions List */}
        <div className="space-y-16">
          {filteredSolutions.map((solution, idx) => {
            const relatedCaseStudies = CASE_STUDIES.filter(
              (cs) => cs.category === solution.category
            );

            return (
              <section
                key={solution.id}
                id={solution.category}
                className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-12 scroll-mt-24"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-neutral-800">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 shrink-0">
                      {solution.category === 'brands' && <Compass className="h-6 w-6" />}
                      {solution.category === 'content' && <Layers className="h-6 w-6" />}
                      {solution.category === 'advertising' && <Megaphone className="h-6 w-6" />}
                      {solution.category === 'performance' && <TrendingUp className="h-6 w-6" />}
                    </div>
                    <div>
                      <div className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
                        PILLAR 0{idx + 1}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        {solution.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-neutral-300 mt-1 font-medium">
                        {solution.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleSelectSolutionForInquiry(solution.category)}
                      className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shadow-sm"
                    >
                      Commission {solution.title}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
                  {/* Left: Overview & Capabilities */}
                  <div className="lg:col-span-7 space-y-6">
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {solution.description}
                    </p>

                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                        Core Capabilities Breakdown
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {solution.capabilities.map((cap, i) => (
                          <div
                            key={i}
                            className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-1.5"
                          >
                            <div className="text-xs font-bold text-white flex items-center gap-2">
                              <Target className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                              <span>{cap.name}</span>
                            </div>
                            <p className="text-[11px] text-neutral-400 leading-normal">
                              {cap.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Deliverables & Metrics */}
                  <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-neutral-800 lg:pl-10">
                    <div className="rounded-xl bg-neutral-950 p-6 border border-neutral-800">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                        HISTORICAL IMPACT BENCHMARK
                      </div>
                      <div className="text-3xl font-extrabold font-mono text-amber-400 mt-2">
                        {solution.statHeadline}
                      </div>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                        {solution.statContext}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                        Contractual Deliverables
                      </h3>
                      <ul className="space-y-2 text-xs text-neutral-300">
                        {solution.deliverables.map((del, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {relatedCaseStudies.length > 0 && (
                      <div className="pt-4 border-t border-neutral-800">
                        <div className="text-[11px] font-medium text-neutral-400 mb-2">
                          Relevant Verified Case Study:
                        </div>
                        {relatedCaseStudies.slice(0, 1).map((cs) => (
                          <Link
                            key={cs.id}
                            to={`/work/${cs.slug}`}
                            className="flex items-center justify-between p-3 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-colors group"
                          >
                            <div className="text-xs">
                              <div className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                                {cs.client}
                              </div>
                              <div className="text-[11px] text-neutral-500 font-mono">
                                {cs.metrics[0].metric} {cs.metrics[0].label}
                              </div>
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-neutral-400 group-hover:text-amber-400" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* 4-Stage Engagement Framework */}
        <section className="mt-20 pt-16 border-t border-neutral-900">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Engagement Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              How a standmaker mandate unfolds.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400">
              A transparent, phased cadence designed to de-risk investments and compress time-to-market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <div className="text-amber-400 font-mono text-xs font-bold">PHASE 01 (WEEKS 1–3)</div>
              <h3 className="text-base font-bold text-white">Diagnostics & Discovery</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Stakeholder interviews, category white space mapping, attribution audits, and unit economic benchmarking.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <div className="text-amber-400 font-mono text-xs font-bold">PHASE 02 (WEEKS 4–7)</div>
              <h3 className="text-base font-bold text-white">System Architecture</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Brand positioning matrices, creative concepts, media planning, creator rosters, and technical tracking instrumentation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <div className="text-amber-400 font-mono text-xs font-bold">PHASE 03 (WEEKS 8–12)</div>
              <h3 className="text-base font-bold text-white">Market Activation</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Multi-channel launch execution, dynamic creative variation deployment, PR coordination, and dealer/partner onboarding.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <div className="text-amber-400 font-mono text-xs font-bold">PHASE 04 (ONGOING)</div>
              <h3 className="text-base font-bold text-white">Optimization & Telemetry</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Incrementality testing, creative fatigue refresh cycles, conversion rate optimization, and executive revenue reporting.
              </p>
            </div>
          </div>
        </section>

        {/* Tailor Your Scope CTA Banner */}
        <section className="mt-16 rounded-2xl border border-neutral-800 bg-neutral-900 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Need a bespoke combination of services?
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Use our interactive Project Scope Builder to configure your timeline, channels, and deliverables.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
          >
            <span>Open Scope Builder</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        {/* Ad Placeholder */}
        <AdPlaceholder />
      </div>
    </div>
  );
};
