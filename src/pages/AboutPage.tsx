import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Users,
  Compass,
  ShieldCheck,
  Award,
  Sparkles,
  Building
} from 'lucide-react';
import { TEAM_MEMBERS, HERO_STUDIO_IMAGE } from '../data/mockData';
import { AdPlaceholder } from '../components/common/AdPlaceholder';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Section */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            About standmaker
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
            Forging business-relevance, one marketing solution at a time.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            standmaker is a modern marketing solutions company operating from Mumbai, India. We empower businesses with marketing that is exceptionally aligned to consumer behavior and financial growth goals.
          </p>
        </div>

        {/* Agency Mission & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Why standmaker exists: Breaking the vanity metric illusion.
            </h2>
            <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
              <p>
                The conventional advertising agency ecosystem split itself into two extremes: creative boutiques focused on winning festival trophies with clever wordplay, and performance mills obsessed with gaming algorithmic auctions.
              </p>
              <p>
                Both models fail modern enterprises. Brand campaigns that generate zero attributable pipeline are merely shareholder entertainment; while short-sighted performance hacking without brand authority creates brittle customer acquisition costs that spike the moment ad spend pauses.
              </p>
              <p>
                standmaker was founded to fuse classical brand strategy with mathematical growth engineering. We partner with business leaders, CMOs, and ambitious founders to build marketing engines that generate enduring pricing power and compound revenue.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 space-y-6">
              <div className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                OUR GOVERNING COVENANT
              </div>
              <blockquote className="text-lg font-medium text-white italic leading-relaxed">
                "Marketing is not an artistic indulgence or an algorithmic lottery. It is the systematic engineering of customer trust and commercial velocity."
              </blockquote>
              <div className="pt-4 border-t border-neutral-800 text-xs text-neutral-400">
                — standmaker Founding Charter
              </div>
            </div>
          </div>
        </div>

        {/* Studio Showcase Asset */}
        <div className="relative aspect-21/9 w-full rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950">
          <img
            src={HERO_STUDIO_IMAGE}
            alt="standmaker Agency Studio"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-300 gap-2">
            <span className="font-semibold text-white">Solitaire Corporate Park, Andheri East, Mumbai</span>
            <span className="text-neutral-400">Cross-Disciplinary Studio Architecture</span>
          </div>
        </div>

        {/* The 4 Tenets of The standmaker Way */}
        <div>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Operational Tenets
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              The four principles behind every mandate.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <div className="text-amber-400 font-mono text-xs font-bold">TENET 01</div>
              <h3 className="text-lg font-bold text-white">Commercial Accountability</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We measure our work by metrics that appear on an audited financial balance sheet: blended contribution margins, sales pipeline velocity, customer lifetime value, and retail distribution expansion.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <div className="text-amber-400 font-mono text-xs font-bold">TENET 02</div>
              <h3 className="text-lg font-bold text-white">Cross-Functional Synthesis</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Strategic planners, copywriters, art directors, media buyers, and software developers collaborate under a singular mandate roof. There are no handoff silos or conflicting vendor incentives.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <div className="text-amber-400 font-mono text-xs font-bold">TENET 03</div>
              <h3 className="text-lg font-bold text-white">Radical Consumer Truth</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                We spend time inside real customer decision journeys. We study how real people evaluate trade-offs, seek peer recommendations, and eliminate skepticism before spending their money.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
              <div className="text-amber-400 font-mono text-xs font-bold">TENET 04</div>
              <h3 className="text-lg font-bold text-white">Speed of Execution</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Strategy without rapid market execution is hallucination. We validate ideas through structured market prototypes, live creative iterations, and fast data telemetry.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Agency Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Strategists, creators, and growth architects.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 font-bold font-mono text-sm border border-amber-400/20 mb-4">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <h3 className="text-base font-bold text-white">{member.name}</h3>
                  <div className="text-xs text-amber-400 font-medium mt-0.5">{member.role}</div>
                  <p className="text-xs text-neutral-400 mt-3 leading-relaxed">{member.bio}</p>
                </div>
                <div className="pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-500 font-mono">
                  Focus: {member.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="p-8 sm:p-12 rounded-3xl border border-neutral-800 bg-neutral-900/40">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Journey & Milestones
            </span>
            <h2 className="text-2xl font-bold text-white mt-2">
              Continuous evolution across digital frontiers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border-l-2 border-amber-400/80 pl-4 space-y-2">
              <div className="text-sm font-mono font-bold text-amber-400">2010–2014</div>
              <h4 className="text-xs font-bold text-white">Foundations & Strategy</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Founded in Mumbai as a pure-play strategic brand consultancy, pioneering consumer decision journey mapping.
              </p>
            </div>

            <div className="border-l-2 border-neutral-700 pl-4 space-y-2">
              <div className="text-sm font-mono font-bold text-neutral-300">2015–2019</div>
              <h4 className="text-xs font-bold text-white">Full-Stack Creative</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Integrated in-house film production, digital creative suites, and 360 ATL/BTL campaign capabilities.
              </p>
            </div>

            <div className="border-l-2 border-neutral-700 pl-4 space-y-2">
              <div className="text-sm font-mono font-bold text-neutral-300">2020–2023</div>
              <h4 className="text-xs font-bold text-white">Commerce & Analytics</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Built proprietary performance marketing trading desks and full-funnel attribution frameworks.
              </p>
            </div>

            <div className="border-l-2 border-neutral-700 pl-4 space-y-2">
              <div className="text-sm font-mono font-bold text-neutral-300">2024–2026</div>
              <h4 className="text-xs font-bold text-white">Creator & AI Ecosystems</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Pioneered proprietary creator coalitions, incrementality modeling, and modern growth mandates.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-amber-400 text-neutral-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">
              Ready to build a high-performance marketing mandate?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-900 mt-1 font-medium">
              Schedule a strategic discovery session with our executive leadership team.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 text-xs font-bold text-white bg-neutral-950 hover:bg-neutral-900 rounded-xl transition-colors whitespace-nowrap shadow-lg"
          >
            Schedule Discovery Call
          </Link>
        </div>

        {/* Compact Ad Placeholder */}
        <AdPlaceholder />
      </div>
    </div>
  );
};
