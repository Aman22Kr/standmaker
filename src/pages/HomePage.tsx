import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  CheckCircle2,
  ChevronRight,
  Compass,
  Layers,
  Megaphone,
  TrendingUp,
  Sliders,
  Sparkles,
  Quote
} from 'lucide-react';
import { SOLUTIONS, CASE_STUDIES, ARTICLES, CLIENT_LOGOS, HERO_STUDIO_IMAGE } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/common/AdPlaceholder';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark, growthCalculator, setGrowthCalculator, updateInquiryDraft } = useApp();

  const [activeSolutionTab, setActiveSolutionTab] = useState<'brands' | 'content' | 'advertising' | 'performance'>('brands');

  // ROI / Growth Estimator calculation
  const calculateEstimates = () => {
    const budget = growthCalculator.monthlyBudget;
    let multiplier = 3.2;
    if (growthCalculator.primaryGoal === 'pipeline') multiplier = 4.1;
    if (growthCalculator.primaryGoal === 'ecommerce') multiplier = 3.8;
    if (growthCalculator.primaryGoal === 'awareness') multiplier = 5.2;

    const projectedPipeline = Math.round(budget * multiplier);
    const estimatedImpressions = Math.round((budget / 10) * 1000);
    const qualifiedLeads = Math.round(budget / 140);

    return { projectedPipeline, estimatedImpressions, qualifiedLeads };
  };

  const estimates = calculateEstimates();

  const activeSolution = SOLUTIONS.find((s) => s.category === activeSolutionTab) || SOLUTIONS[0];

  const handleApplyEstimateToInquiry = () => {
    updateInquiryDraft({
      budget: `$${(growthCalculator.monthlyBudget / 1000).toFixed(0)}k / month`,
      services: [growthCalculator.primaryGoal === 'rebrand' ? 'brands' : 'performance'],
      projectBrief: `Estimated growth target: ${growthCalculator.primaryGoal} in ${growthCalculator.industry} with approx. $${growthCalculator.monthlyBudget.toLocaleString()}/mo spend.`
    });
    navigate('/contact');
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                <span>The Full-Stack Marketing Partner</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                Forging business-relevance through full-stack marketing solutions.
              </h1>

              <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
                We align brand identity, creator ecosystems, creative campaigns, and performance analytics directly with real consumer decision behavior and verifiable revenue milestones.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-lg hover:shadow-amber-400/10"
                >
                  <span>Explore Case Studies</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white hover:text-amber-400 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors"
                >
                  <Sliders className="h-4 w-4" />
                  <span>Growth Estimator</span>
                </a>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-8 border-t border-neutral-900 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white">18+</div>
                  <div className="text-xs text-neutral-500 mt-0.5">Years Mandate Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400">$450M+</div>
                  <div className="text-xs text-neutral-500 mt-0.5">Commercial Value Created</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white">94%</div>
                  <div className="text-xs text-neutral-500 mt-0.5">Annual Client Retention</div>
                </div>
              </div>
            </div>

            {/* Hero Studio Showcase Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group">
                <img
                  src={HERO_STUDIO_IMAGE}
                  alt="standmaker creative marketing studio in Mumbai"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-xs text-neutral-300">
                  <div className="font-semibold text-white text-sm">standmaker Collaborative Studio</div>
                  <div className="text-neutral-400 mt-0.5">Cross-disciplinary teams uniting strategy, creative, and analytics.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos / Industries Marquee */}
      <section className="py-12 border-b border-neutral-900 bg-neutral-950/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-8">
            Trusted by Leaders Across High-Growth Sectors
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 rounded-lg border border-neutral-900 bg-neutral-900/40 text-center hover:border-neutral-800 transition-colors"
              >
                <span className="text-xs font-semibold text-neutral-300">{client.name}</span>
                <span className="text-[10px] text-neutral-500 mt-0.5">{client.sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Core Solutions Interactive Showcase */}
      <section className="py-20 border-b border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Full-Stack Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
                Four pillars engineered for commercial momentum.
              </h2>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>View All Solutions & Matrices</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Solution Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-neutral-900 border border-neutral-800 mb-8 max-w-2xl">
            <button
              onClick={() => setActiveSolutionTab('brands')}
              className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-lg text-xs font-medium transition-all ${
                activeSolutionTab === 'brands'
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Brands & Strategy
            </button>
            <button
              onClick={() => setActiveSolutionTab('content')}
              className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-lg text-xs font-medium transition-all ${
                activeSolutionTab === 'content'
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Content & Creators
            </button>
            <button
              onClick={() => setActiveSolutionTab('advertising')}
              className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-lg text-xs font-medium transition-all ${
                activeSolutionTab === 'advertising'
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Advertising & Creative
            </button>
            <button
              onClick={() => setActiveSolutionTab('performance')}
              className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-lg text-xs font-medium transition-all ${
                activeSolutionTab === 'performance'
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Performance & Commerce
            </button>
          </div>

          {/* Active Solution Card */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-10 backdrop-blur-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
                    {activeSolution.category === 'brands' && <Compass className="h-5 w-5" />}
                    {activeSolution.category === 'content' && <Layers className="h-5 w-5" />}
                    {activeSolution.category === 'advertising' && <Megaphone className="h-5 w-5" />}
                    {activeSolution.category === 'performance' && <TrendingUp className="h-5 w-5" />}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {activeSolution.title}
                    </h3>
                    <p className="text-xs text-amber-400 font-medium">{activeSolution.tagline}</p>
                  </div>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {activeSolution.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                    Key Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeSolution.capabilities.map((cap, i) => (
                      <div key={i} className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                        <div className="text-xs font-semibold text-white">{cap.name}</div>
                        <div className="text-[11px] text-neutral-400 mt-1 leading-normal">{cap.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-l lg:border-neutral-800 lg:pl-10">
                <div className="rounded-xl bg-neutral-950 p-6 border border-neutral-800">
                  <div className="text-xs text-neutral-500 font-mono">BENCHMARKED OUTCOME</div>
                  <div className="text-3xl font-extrabold font-mono text-amber-400 mt-2">
                    {activeSolution.statHeadline}
                  </div>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {activeSolution.statContext}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Deliverables Included
                  </h4>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {activeSolution.deliverables.map((del, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/solutions?category=${activeSolution.category}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                >
                  <span>Explore {activeSolution.title}</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Grid */}
      <section className="py-20 border-b border-neutral-900 bg-neutral-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Proven Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
                Mandates that moved the revenue needle.
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                className="group relative flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/40 overflow-hidden hover:border-neutral-700 transition-all duration-300"
              >
                {/* Image container */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={study.heroImage}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

                  {/* Top tags and bookmark button */}
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

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <div className="text-xs text-amber-400 font-semibold mb-1">
                      {study.client}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {study.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                      <span>{study.category.toUpperCase()}</span>
                      <span>·</span>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "The standmaker Way" Philosophy & Methodology */}
      <section className="py-20 border-b border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Operational Ethos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
              The standmaker Way: Strategic fundamentals over transient hype.
            </h2>
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
              We do not believe in superficial vanity spikes or disjointed agency silos. Our working model is anchored in four operational commandments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-3">
              <div className="text-amber-400 font-mono text-xs font-bold">01. OUTCOME MANDATE</div>
              <h3 className="text-base font-bold text-white">Commit to the Goal, Not the Activity</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Raw activity without commercial purpose is waste. We measure every engagement by revenue milestones, customer lifetime value, and brand pricing power.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-3">
              <div className="text-amber-400 font-mono text-xs font-bold">02. UNIFIED COHESION</div>
              <h3 className="text-base font-bold text-white">Operate as One Unified Brain</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Brand strategists, copywriters, media buyers, and developers sit together. There is zero handoff friction between the creative spark and paid distribution.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-3">
              <div className="text-amber-400 font-mono text-xs font-bold">03. AUDIENCE EMPATHY</div>
              <h3 className="text-base font-bold text-white">Respect Consumer Intelligence</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Modern consumers see through algorithmic clickbait. We craft narratives that offer tangible intellectual value and elevate customer self-esteem.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-3">
              <div className="text-amber-400 font-mono text-xs font-bold">04. ITERATIVE SPEED</div>
              <h3 className="text-base font-bold text-white">Solve Rather Than Stall</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We replace endless theoretical decks with rapid market deployment and empirical feedback loops. The market reveals what works faster than any conference room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Growth & ROI Estimator */}
      <section id="calculator" className="py-20 border-b border-neutral-900 bg-neutral-950/60 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xs">
            <div className="max-w-2xl mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                <Sliders className="h-4 w-4" />
                <span>Interactive Growth Modeling</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Model your projected marketing momentum.
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Adjust parameters to calculate estimated pipeline outcomes based on historical benchmark averages across standmaker client portfolios.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Controls */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-300 mb-2">
                    <span className="font-semibold">Target Monthly Marketing Capital</span>
                    <span className="font-mono text-amber-400 font-bold text-sm">
                      ${growthCalculator.monthlyBudget.toLocaleString()} / mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    value={growthCalculator.monthlyBudget}
                    onChange={(e) =>
                      setGrowthCalculator((prev) => ({
                        ...prev,
                        monthlyBudget: parseInt(e.target.value, 10),
                      }))
                    }
                    className="w-full accent-amber-400 h-2 bg-neutral-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-neutral-500 font-mono mt-1">
                    <span>$5k</span>
                    <span>$50k</span>
                    <span>$100k+</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-2">
                    Primary Strategic Objective
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'pipeline', label: 'B2B Sales Pipeline' },
                      { id: 'ecommerce', label: 'D2C E-Commerce Scale' },
                      { id: 'awareness', label: 'Brand Intent & Recall' },
                      { id: 'rebrand', label: 'Complete Re-Architecture' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() =>
                          setGrowthCalculator((prev) => ({
                            ...prev,
                            primaryGoal: opt.id as any,
                          }))
                        }
                        className={`p-2.5 rounded-lg text-xs font-medium text-left transition-colors border ${
                          growthCalculator.primaryGoal === opt.id
                            ? 'bg-amber-400/10 border-amber-400 text-amber-400'
                            : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-2">
                    Your Industry Sector
                  </label>
                  <select
                    value={growthCalculator.industry}
                    onChange={(e) =>
                      setGrowthCalculator((prev) => ({
                        ...prev,
                        industry: e.target.value,
                      }))
                    }
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2.5 text-xs text-white focus:border-amber-400 focus:outline-hidden"
                  >
                    <option value="B2B & Enterprise Technology">B2B & Enterprise Technology</option>
                    <option value="D2C & Consumer Goods">D2C & Consumer Goods</option>
                    <option value="Industrial & Precision Manufacturing">Industrial & Precision Manufacturing</option>
                    <option value="FinTech & Financial Services">FinTech & Financial Services</option>
                    <option value="Healthcare & Clean Living">Healthcare & Clean Living</option>
                  </select>
                </div>
              </div>

              {/* Real-time calculated projections */}
              <div className="lg:col-span-6 rounded-2xl bg-neutral-950 p-6 sm:p-8 border border-neutral-800 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                    Model Projections (90-Day Trajectory)
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs text-neutral-400">Estimated Pipeline Value</div>
                      <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400 mt-1">
                        ${estimates.projectedPipeline.toLocaleString()}
                      </div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">based on 3.8x - 4.2x benchmark yield</div>
                    </div>

                    <div>
                      <div className="text-xs text-neutral-400">Target Decision Reach</div>
                      <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white mt-1">
                        {(estimates.estimatedImpressions / 1000).toFixed(0)}k+
                      </div>
                      <div className="text-[11px] text-neutral-500 mt-0.5">high-intent category impressions</div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 leading-relaxed">
                    <span className="font-semibold text-white">Recommended Mandate Mix: </span>
                    {growthCalculator.primaryGoal === 'pipeline' && 'Full-Funnel Paid Search & Social + Decision-Engine Landing Sprints'}
                    {growthCalculator.primaryGoal === 'ecommerce' && 'Creator Ecosystem Pipeline + Meta Acquisition + Retention Workflows'}
                    {growthCalculator.primaryGoal === 'awareness' && 'Brand Narrative Architecture + High-Impact Video Commercial Suite'}
                    {growthCalculator.primaryGoal === 'rebrand' && 'Complete Masterbrand Overhaul + Digital Design System + PR Rollout'}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-900">
                  <button
                    onClick={handleApplyEstimateToInquiry}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-md"
                  >
                    <span>Proceed with this Mandate Brief</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <span className="text-[10px] text-neutral-500 text-center block mt-2">
                    Saves these parameters directly into your inquiry draft for discussion.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attributable Client Testimonial */}
      <section className="py-20 border-b border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="mx-auto h-10 w-10 text-amber-400/40 mb-6" />
          <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed max-w-3xl mx-auto">
            “standmaker brought mathematical discipline to our marketing investments. They did not just design gorgeous visual assets; they systematically unlocked our wholesale dealer network and generated $18M in attributable retail velocity.”
          </blockquote>
          <div className="mt-6">
            <div className="text-sm font-bold text-white">Rajiv Sengupta</div>
            <div className="text-xs text-amber-400 font-medium">Managing Director, Nordusk LED Group</div>
          </div>
        </div>
      </section>

      {/* Perspectives / Thought Leadership Sneak Peek */}
      <section className="py-20 border-b border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                The Standpoint
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white mt-2">
                Perspectives on modern marketing.
              </h2>
            </div>
            <Link
              to="/perspectives"
              className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Read All Essays</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.slice(0, 3).map((article) => (
              <article
                key={article.id}
                className="flex flex-col justify-between p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                    <span className="text-amber-400 font-medium">{article.category}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-white line-clamp-2 hover:text-amber-400 transition-colors">
                    <Link to={`/perspectives/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="mt-2 text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-500">
                  <span>{article.date}</span>
                  <Link
                    to={`/perspectives/${article.slug}`}
                    className="text-amber-400 font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Ad Placeholder */}
      <AdPlaceholder />
    </div>
  );
};
