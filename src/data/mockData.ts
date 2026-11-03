import { SolutionItem, CaseStudy, Article, JobRole, FaqItem } from '../types';

export const HERO_STUDIO_IMAGE = '/src/assets/images/hero_agency_studio_1793722331986.jpg';

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'brands',
    category: 'brands',
    title: 'Brands & Strategy',
    tagline: 'Forging distinct market authority that endures shifts in channels.',
    description: 'We decode market friction, competitive white space, and real consumer motivations to craft unassailable brand positions, evocative design languages, and systematic identity architectures.',
    deliverables: [
      'Core Brand Positioning & Value Matrix',
      'Visual Identity System & Design Guidelines',
      'Brand Architecture & Portfolio Structuring',
      'Narrative & Verbal Identity Design',
      'Packaging, Environmental & Digital Standards'
    ],
    capabilities: [
      {
        name: 'Strategic Market Positioning',
        description: 'Qualitative customer discovery, category mapping, and distinctive value proposition engineering.'
      },
      {
        name: 'Design System & Identity',
        description: 'Bespoke typography, color theory, grid systems, and motion guidelines built for multi-channel velocity.'
      },
      {
        name: 'Verbal Identity & Storytelling',
        description: 'Tone of voice guidelines, messaging hierarchy, manifesto writing, and product nomenclature.'
      },
      {
        name: 'Brand Experience Audits',
        description: 'Holistic diagnosis of touchpoints to eliminate dissonance and elevate customer perception.'
      }
    ],
    statHeadline: '+210% Brand Recall',
    statContext: 'across measured customer segments following brand repositioning initiatives.'
  },
  {
    id: 'content',
    category: 'content',
    title: 'Content & Creator Ecosystems',
    tagline: 'Compounding brand equity through editorial craft and high-affinity creators.',
    description: 'Content is not filler—it is the engine of authority. We engineer sustainable creator partnerships, high-value editorial streams, and cinematic video assets that generate sustained commercial intent.',
    deliverables: [
      'Creator Talent Scouting & Mandate Management',
      'High-Production Video & Reel Storyboarding',
      'Editorial Newsletters & B2B Whitepapers',
      'Social Content Production Pipelines',
      'Community & Advocacy Orchestration'
    ],
    capabilities: [
      {
        name: 'Creator Partnership Strategy',
        description: 'Rigorous vetting, co-creation frameworks, and commission structures that avoid mercenary influencer fatigue.'
      },
      {
        name: 'In-House Studio Production',
        description: 'High-definition video, still photography, 3D motion, and modular social asset fabrication.'
      },
      {
        name: 'Audience Development Engines',
        description: 'Long-term organic channel growth strategies anchored in valuable insights rather than algorithm chasing.'
      },
      {
        name: 'Omni-channel Editorial Calendars',
        description: 'Synchronized publishing workflows spanning LinkedIn, Substack, YouTube, and specialized vertical media.'
      }
    ],
    statHeadline: '4.8x Organic Reach',
    statContext: 'achieved through authentic creator integration without paid media dependence.'
  },
  {
    id: 'advertising',
    category: 'advertising',
    title: 'Advertising & Creative Campaigns',
    tagline: 'High-concept creative engineered to prompt decisive commercial actions.',
    description: 'We cut through consumer indifference with creative ideas that respect audience intelligence. From integrated national launches to precision digital narratives, we bridge art with commercial discipline.',
    deliverables: [
      'Multi-Touch 360 Campaign Architecture',
      'Video Commercials & Digital Ad Suites',
      'OOH & Print High-Impact Creative',
      'Dynamic Creative Optimization (DCO)',
      'Product Launch Go-To-Market Playbooks'
    ],
    capabilities: [
      {
        name: 'Hero Campaign Development',
        description: 'Big idea incubation, scriptwriting, and production execution designed for cultural resonance.'
      },
      {
        name: 'Creative Variation Testing',
        description: 'Systematic hook, angle, and format experimentation to maintain fatigue-resistant ad sets.'
      },
      {
        name: 'Cross-Channel Media Orchestration',
        description: 'Seamless narrative continuity across Connected TV, outdoor, print, programmatic, and social.'
      },
      {
        name: 'Conversion-Engineered Design',
        description: 'Post-click experiences, landing pages, and interactive microsites optimized for decision-making.'
      }
    ],
    statHeadline: '+140% Pipeline Velocity',
    statContext: 'recorded across core client accounts within 90 days of campaign activation.'
  },
  {
    id: 'performance',
    category: 'performance',
    title: 'Performance & Growth Commerce',
    tagline: 'Mathematical rigor applied to every stage of customer acquisition.',
    description: 'Growth is not an accident of luck; it is a discipline of hypotheses, instrumentation, and continuous iteration. We manage capital allocations to maximize blended return on ad spend and lifetime value.',
    deliverables: [
      'Paid Search (Google Ads / Performance Max)',
      'Paid Social (Meta, TikTok, LinkedIn, Pinterest)',
      'Conversion Rate Optimization (CRO) Sprints',
      'First-Party Data & Server-Side Tracking',
      'Unit Economics & Blended ROAS Dashboards'
    ],
    capabilities: [
      {
        name: 'Full-Funnel Paid Acquisition',
        description: 'Channel diversification and audience segmentation structured around marginal CAC efficiency.'
      },
      {
        name: 'Modern Attribution Modeling',
        description: 'Incrementality testing, marketing mix modeling (MMM), and post-purchase survey triangulation.'
      },
      {
        name: 'Retention & Lifecycle Marketing',
        description: 'Automated email/SMS workflows, churn prediction, and VIP customer tier monetization.'
      },
      {
        name: 'High-Velocity Landing Page Testing',
        description: 'Continuous multivariate experimentation on message clarity, friction reduction, and offer framing.'
      }
    ],
    statHeadline: '+310% Net Return',
    statContext: 'on blended ad capital investment across our flagship e-commerce and B2B client portfolios.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'nordusk-lighting',
    slug: 'nordusk-lighting-brand-transformation',
    title: 'Transforming a Regional Manufacturer into a National Smart Lighting Leader',
    client: 'Nordusk LED Lighting',
    industry: 'Consumer Durables & Smart Living',
    category: 'advertising',
    year: '2025',
    heroImage: '/src/assets/images/case_study_nordusk_lighting_1793722331869.jpg',
    excerpt: 'An integrated brand re-architecture, ATL/BTL campaign suite, and dealer loyalty ecosystem that propelled Nordusk from regional tier-2 contender to household smart illumination brand.',
    featured: true,
    metrics: [
      {
        metric: '+184%',
        label: 'Brand Search Intent',
        context: 'across tier-1 and metro markets over 12 months'
      },
      {
        metric: '3.6x',
        label: 'Dealer Channel Velocity',
        context: 'in distributor partner onboarding efficiency'
      },
      {
        metric: '$18.2M',
        label: 'Annual Retail Revenue',
        context: 'generated through newly introduced smart architectural lines'
      }
    ],
    challenge: 'Nordusk possessed exceptional manufacturing capabilities and competitive pricing in LED systems, but suffered from commoditization. The market perceived them as an industrial supplier rather than a consumer-facing lifestyle and smart home brand. Channel dealers were reluctant to allocate premium shelf space without strong top-of-mind consumer pull.',
    strategy: 'standmaker engineered "The Architecture of Light" — a comprehensive brand repositioning that elevated Nordusk from a utility bulb manufacturer to a sophisticated mood and architectural design partner. We decoupled the communication into two parallel tracks: an aspirational consumer lifestyle story and a structured dealer enablement incentive matrix.',
    execution: [
      '360-degree national launch campaign spanning digital video, outdoor displays in 14 major metros, and targeted digital programmatic ads.',
      'Re-engineered product packaging system with tactile matte finishes and clear wattage-to-mood classification.',
      'A digital architect portal allowing interior designers to calculate photometric requirements and request customized sample kits.',
      'Trade dealer loyalty app incentivizing secondary retail sales with real-time settlement and product education modules.'
    ],
    results: 'Nordusk gained nationwide market awareness, established distribution in over 3,200 premium retail touchpoints, and achieved a 42% margin expansion on flagship architectural fixtures.',
    testimonial: {
      quote: 'standmaker did not just write clever ads; they redefined our relationship with our dealers and consumers. They treated our bottom line with the same scrutiny we apply to our manufacturing tolerances.',
      author: 'Rajiv Sengupta',
      role: 'Managing Director',
      company: 'Nordusk LED Group'
    },
    tags: ['Brand Transformation', '360 Campaign', 'Dealer Enablement', 'Visual Identity'],
    videoArea: {
      title: 'Nordusk Television Commercial & Cinema Reel Showcase',
      duration: '01:45',
      aspectRatio: '16:9',
      placeholderNote: 'Video Area: 16:9 Cinema Reel placeholder. Video playback simulated in compliance with static deployment specifications.'
    }
  },
  {
    id: 'veridian-wellness',
    slug: 'veridian-wellness-d2c-growth',
    title: 'Scaling an Organic Botanical Skincare Brand to Market Dominance',
    client: 'Veridian Botanics',
    industry: 'D2C Health & Luxury Wellness',
    category: 'content',
    year: '2025',
    heroImage: '/src/assets/images/case_study_d2c_wellness_1793722333695.jpg',
    excerpt: 'Building an authoritative creator ecosystem and clinical storytelling engine that converted hesitant trial shoppers into lifelong recurring brand advocates.',
    featured: true,
    metrics: [
      {
        metric: '+310%',
        label: 'Organic Inbound Volume',
        context: 'driven by educational creator content workflows'
      },
      {
        metric: '68%',
        label: '90-Day Repeat Rate',
        context: 'sustained through personalized post-purchase education'
      },
      {
        metric: '4.2x',
        label: 'Blended ROAS',
        context: 'maintained across Meta and Google acquisition spend'
      }
    ],
    challenge: 'Veridian faced an overcrowded botanical wellness market saturated with hollow "clean beauty" buzzwords. Customer acquisition costs on Meta were soaring, and customer trust was fragile due to widespread skepticism regarding botanical potency and ingredient transparency.',
    strategy: 'Instead of generic beauty influencer placements, standmaker constructed a vetted "Dermatologist & Formulator Council". We prioritized radical ingredient traceability and micro-documentaries unpacking cold-press botanical extraction, transforming technical clinical details into compelling social storytelling.',
    execution: [
      'Structured creator partnership program with 45 practicing biochemists, holistic practitioners, and certified aesthetic professionals.',
      'Interactive online Skin Barrier Diagnostic tool routing shoppers to customized three-step treatment regimens.',
      'Sleek unboxing experience designed specifically to encourage organic user-generated social sharing without artificial paid contests.',
      'Automated email nurture sequences structured as daily micro-lessons on skin circadian cycles and barrier restoration.'
    ],
    results: 'Veridian expanded from an emerging niche label into a top-three brand in the domestic clean luxury sector, achieving sustained profitability on first-order acquisition and record repeat lifetime value.',
    testimonial: {
      quote: 'The team at standmaker has an unmatched ability to translate complex clinical science into evocative, high-converting customer narratives.',
      author: 'Elena Rostova',
      role: 'Founder & CEO',
      company: 'Veridian Botanics'
    },
    tags: ['Creator Ecosystem', 'D2C Growth', 'Content Strategy', 'Lifecycle Email'],
    videoArea: {
      title: 'Behind the Formulation: Veridian Extraction Process Documentary',
      duration: '03:12',
      aspectRatio: '16:9',
      placeholderNote: 'Video Area: Documentary mini-feature layout preserved without external streaming dependency.'
    }
  },
  {
    id: 'aura-fintech',
    slug: 'aura-fintech-card-launch',
    title: 'Acquiring High-Net-Worth Cardholders with Zero Vanity Spend',
    client: 'Aura Financial',
    industry: 'FinTech & Wealth Management',
    category: 'performance',
    year: '2026',
    heroImage: '/src/assets/images/case_study_fintech_growth_1793722333682.jpg',
    excerpt: 'A surgical performance marketing, private referral loop, and landing page sprint that drove 45,000 verified titanium card reservations in four months.',
    featured: true,
    metrics: [
      {
        metric: '45,000+',
        label: 'Approved Applications',
        context: 'surpassing annual target in under 120 days'
      },
      {
        metric: '-38%',
        label: 'Cost Per Verified User',
        context: 'compared to legacy banking benchmarks'
      },
      {
        metric: '$42,000',
        label: 'Median User Liquidity',
        context: 'qualifying users into private wealth tiers'
      }
    ],
    challenge: 'Aura launched a premium metallic corporate & wealth credit card targeting founders and executives. High-net-worth audiences are notoriously numb to generic digital display ads and aggressively filter out promotional clutter.',
    strategy: 'standmaker implemented an invitation-only waitlist mechanic paired with high-intent LinkedIn and executive search query targeting. We created bespoke landing experiences that focused on real treasury yield, FX-free cross-border perks, and automated accounting sync rather than generic reward points.',
    execution: [
      'Precision SEM strategy targeting competitor card cancellation and tier upgrade keyword intent.',
      'Dark-mode executive landing page with frictionless 90-second eligibility preview powered by financial open APIs.',
      'Proprietary VIP invitation system empowering top-tier users to bypass the waitlist for their co-founders and advisory boards.',
      'Continuous multivariate testing across 18 distinct value propositions, identifying tax optimization as the primary conversion trigger.'
    ],
    results: 'Aura closed out their inaugural card cohort three months ahead of schedule, generating immediate deposit liquidity and setting a new benchmark for capital efficiency in domestic consumer fintech.',
    testimonial: {
      quote: 'standmaker operates like an investment fund: they allocate marketing dollars where the yield is mathematically demonstrable.',
      author: 'Sameer Singhania',
      role: 'Chief Commercial Officer',
      company: 'Aura Financial'
    },
    tags: ['Performance Marketing', 'Paid Search', 'CRO', 'FinTech'],
    videoArea: {
      title: 'Aura Titanium Card Unboxing & Mobile Interface Walkthrough',
      duration: '02:05',
      aspectRatio: '16:9',
      placeholderNote: 'Video Area: Interactive product demonstration layout preserved.'
    }
  },
  {
    id: 'apex-logistics',
    slug: 'apex-logistics-enterprise-rebrand',
    title: 'Repositioning an Enterprise Supply Chain Giant for the Digital Era',
    client: 'Apex Global Logistics',
    industry: 'Industrial Supply Chain & Enterprise B2B',
    category: 'brands',
    year: '2025',
    heroImage: '/src/assets/images/case_study_enterprise_tech_1793722333269.jpg',
    excerpt: 'Consolidating 6 legacy subsidiary entities into a unified, technology-driven global enterprise brand that unlocked $80M in multi-year contract renewals.',
    featured: true,
    metrics: [
      {
        metric: '$80M+',
        label: 'Contract Renewals',
        context: 'secured during post-launch investor & client summit'
      },
      {
        metric: '100%',
        label: 'Brand Alignment',
        context: 'across 4,800 employees across 18 regional hubs'
      },
      {
        metric: '+64%',
        label: 'Inbound Enterprise RFPs',
        context: 'from Fortune 500 manufacturing procurement teams'
      }
    ],
    challenge: 'Through twenty years of acquisitions, Apex had fragmented into six disjointed subsidiary names, four conflicting websites, and an outdated visual identity that failed to reflect their multi-million dollar investments in automated warehousing and predictive route telemetry.',
    strategy: 'standmaker orchestrated a monolithic brand architecture migration. We retired redundant legacy brand entities, crafted a modern geometric identity signifying speed and kinetic precision, and built an interactive enterprise capabilities showcase for enterprise RFP procurement.',
    execution: [
      'Comprehensive brand audit involving 60 stakeholder interviews across Singapore, Mumbai, Dubai, and Rotterdam.',
      'New masterbrand visual system with high-contrast architectural typography and clean corporate color palette.',
      'Unified enterprise digital portal integrating live shipment telemetry and automated rate-card calculators for B2B buyers.',
      'Internal employee brand launch toolkit, video manifesto, and uniform guidelines for 4,800 global logistics personnel.'
    ],
    results: 'Apex solidified its stature as a premier global multimodal logistics powerhouse, enabling enterprise sales teams to cross-sell cold-chain, air-freight, and customs clearance under a singular trusted banner.',
    testimonial: {
      quote: 'The clarity standmaker brought to our company structure was revelatory. They took two decades of organizational sprawl and turned it into an unbeatable competitive advantage.',
      author: 'Marcus Vance',
      role: 'Global VP of Communications',
      company: 'Apex Logistics'
    },
    tags: ['Masterbrand Architecture', 'Enterprise B2B', 'Internal Alignment', 'Design System']
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'death-of-vanity-metrics',
    slug: 'death-of-vanity-metrics-goal-based-alignment',
    title: 'The Death of Vanity Metrics: Why Goal-Based Alignment is the Only Strategy That Survives',
    category: 'Marketing Strategy',
    date: 'February 2026',
    readTime: '6 min read',
    author: {
      name: 'Nitin Verma',
      role: 'Founder & Chief Strategy Officer'
    },
    excerpt: 'Clicks, impressions, and viral reach are comforting numbers that often conceal stagnant revenues. Here is how leading CMOs align marketing mandates with tangible financial outcomes.',
    content: [
      'For the past decade, agency culture became addicted to the narcotics of vanity metrics. High click-through rates, millions of transient reel views, and soaring follower counts were presented to executive boards as proof of success, even as cash conversion cycles stalled.',
      'Today, that illusion has collapsed. The CFO is in the room. Every dollar allocated to marketing must prove its marginal contribution to revenue, customer retention, or brand pricing power.',
      'At standmaker, our philosophy begins with one immutable rule: if a campaign cannot be traced to consumer decision environments and revenue milestones, it is merely entertainment at shareholder expense.',
      'Goal-based alignment requires establishing an unshakeable connection between four distinct layers: Customer Intent Mapping, Creative Behavioral Triggers, Frictionless Commerce Mechanics, and First-Party Data Attribution.',
      'When marketing teams stop celebrating arbitrary platform metrics and start tracking net contribution margin, creative work paradoxically becomes more audacious, because it is anchored in genuine commercial courage.'
    ],
    keyTakeaways: [
      'Vanity metrics create false optimism while draining corporate capital.',
      'Align marketing mandates directly with customer acquisition economics and payback periods.',
      'Creative that respects consumer intelligence outperforms clickbait every time.'
    ],
    tags: ['Strategy', 'Attribution', 'CMO Insights']
  },
  {
    id: 'creator-economy-blueprint',
    slug: 'creator-economy-blueprint-b2b-d2c',
    title: 'The Creator Economy Blueprint: Moving from Mercenary Sponsorships to Long-Term Brand Capital',
    category: 'Content & Creator Systems',
    date: 'January 2026',
    readTime: '5 min read',
    author: {
      name: 'Ananya Sen',
      role: 'Director of Creator Partnerships'
    },
    excerpt: 'One-off sponsored shoutouts are losing efficacy across both B2B and D2C. Discover the framework for building proprietary creator coalitions that compound brand authority.',
    content: [
      'The traditional influencer marketing playbook is broken. Consumers have developed visceral immunity to paid product holding photos and scripted disingenuous testimonials.',
      'The modern alternative is what we term "Proprietary Creator Coalitions". Rather than paying 50 different micro-influencers for 24-hour disappearing stories, leading brands are hiring specialists, researchers, and respected industry voices on multi-quarter creative fellowships.',
      'In B2B, this takes the form of independent analysts, engineers, and product specialists testing software in real-world environments. In D2C, it manifests as formulators, clinicians, and craftsmen deconstructing why a product is engineered differently.',
      'When you grant creators genuine editorial autonomy and align them with your research and development timeline, their audience senses the authenticity immediately.'
    ],
    keyTakeaways: [
      'Single-post sponsorships deliver diminishing returns and zero long-term retention.',
      'Treat top-tier creators as specialized editorial partners rather than ad billboard space.',
      'Co-created intellectual property yields permanent organic discovery.'
    ],
    tags: ['Creator Economy', 'Content Strategy', 'Partnerships']
  },
  {
    id: 'non-linear-customer-journeys',
    slug: 'designing-non-linear-customer-journeys',
    title: 'Designing for the Non-Linear Journey: How High-Consideration Buyers Actually Decide',
    category: 'Consumer Behavior',
    date: 'December 2025',
    readTime: '7 min read',
    author: {
      name: 'Priya Nair',
      role: 'Head of Creative & Brand Systems'
    },
    excerpt: 'The neat linear marketing funnel of Awareness, Consideration, and Conversion never truly existed. Here is how modern brands orchestrate experiences in the messy reality of modern consumer research.',
    content: [
      'Traditional marketing textbooks still depict the purchase funnel as a smooth, tidy cone. A prospect sees an advertisement, browses a brochure, visits a website, and pulls out their credit card. In the real world, this happens almost never.',
      'High-consideration purchases — whether an enterprise cloud software contract, architectural home fixtures, or luxury wellness — happen in chaotic loops. Buyers bounce between peer Slack groups, Reddit discussions, YouTube unboxing channels, and analyst teardowns.',
      'To win in this environment, a brand cannot rely on a single heroic billboard. You must populate the entire decision ecosystem with consistent, frictionless evidence.',
      'This means your technical documentation must be as beautifully designed as your brand campaign. Your customer service responses must reflect your brand voice. Every fragment of the brand must withstand ruthless scrutiny.'
    ],
    keyTakeaways: [
      'Buyers research brands in decentralized, peer-driven communities.',
      'Every brand touchpoint is simultaneously top-of-funnel and bottom-of-funnel.',
      'Consistency of tone and design across mundane touchpoints is what converts skeptics.'
    ],
    tags: ['Brand Systems', 'Consumer Psychology', 'UX Design']
  },
  {
    id: 'post-cookie-measurement',
    slug: 'post-cookie-measurement-first-party-truth',
    title: 'Attribution Beyond the Click: Navigating Privacy and Signal Loss with Real Incrementality',
    category: 'Performance Analytics',
    date: 'November 2025',
    readTime: '6 min read',
    author: {
      name: 'Kabir Mehta',
      role: 'VP of Performance & Growth Media'
    },
    excerpt: 'As platform cookies crumble and privacy regulations tighten, smart growth teams are abandoning last-touch models in favor of geo-incrementality and marketing mix modeling.',
    content: [
      'The era of effortless deterministic attribution has closed. For years, ad platforms took credit for sales that would have happened organically, encouraging marketers to pump money into branded search and retargeting traps.',
      'With aggressive platform privacy rollouts and browser tracking restrictions, teams that relied on last-click attribution are now flying blind.',
      'The solution is not more complex tracking scripts or unethical fingerprinting. The solution is return to first-principles economics: geo-testing, matched-market holdouts, and media mix modeling (MMM).',
      'By turning off ad spend in selected regional cohorts and measuring the net difference in total business revenue, you discover the true incremental lift of your marketing investments.'
    ],
    keyTakeaways: [
      'Last-click attribution systematically over-credits bottom-of-funnel retargeting.',
      'Holdout testing and geo-incrementality reveal true business causation.',
      'First-party data assets are the only durable foundation for modern performance.'
    ],
    tags: ['Performance', 'Analytics', 'Attribution']
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Nitin Verma',
    role: 'Founder & Chief Strategy Officer',
    bio: 'Former strategy consultant and agency veteran with 18+ years orchestrating brand transformations and commercial growth programs across Southeast Asia and India.',
    specialty: 'Market Positioning & Enterprise Growth'
  },
  {
    name: 'Priya Nair',
    role: 'Head of Creative & Brand Systems',
    bio: 'Award-winning design director with a background in typography and systemic identity design. Passionate about bridging classical design principles with digital velocity.',
    specialty: 'Visual Identity & Design Systems'
  },
  {
    name: 'Kabir Mehta',
    role: 'VP of Performance & Growth Media',
    bio: 'Quantitative growth strategist overseeing over $40M in multi-channel digital ad allocations. Pioneer in incrementality testing and media mix modeling.',
    specialty: 'Capital Allocation & Performance Marketing'
  },
  {
    name: 'Ananya Sen',
    role: 'Director of Content & Creator Partnerships',
    bio: 'Journalist turned content architect. Specializes in building sustainable editorial operations and high-affinity creator networks for ambitious brands.',
    specialty: 'Creator Ecosystems & Editorial Strategy'
  }
];

export const JOB_ROLES: JobRole[] = [
  {
    id: 'sr-brand-strategist',
    title: 'Senior Brand & Growth Strategist',
    department: 'Strategy & Advisory',
    location: 'Mumbai HQ / Hybrid',
    type: 'Full-time',
    experience: '5–8 Years',
    description: 'We are seeking an intellectually rigorous brand strategist to lead brand architecture, positioning studies, and holistic GTM roadmaps for enterprise and scale-up clients.',
    responsibilities: [
      'Conduct rigorous category, competitor, and consumer ethnographic research.',
      'Architect positioning statements, brand manifestos, and messaging hierarchies.',
      'Work side-by-side with Creative and Performance teams to ensure strategic integrity.',
      'Lead discovery workshops with client C-suite executives and founders.'
    ],
    requirements: [
      'Demonstrated portfolio of commercial brand repositioning projects.',
      'Exceptional written synthesis and verbal presentation skills.',
      'Deep comfort navigating both qualitative consumer insight and quantitative financial metrics.'
    ]
  },
  {
    id: 'performance-marketing-lead',
    title: 'Lead Performance Marketing Specialist',
    department: 'Performance Commerce',
    location: 'Mumbai HQ / Remote (India)',
    type: 'Full-time',
    experience: '4–7 Years',
    description: 'Lead paid acquisition strategy and execution across Google, Meta, and programmatic networks for high-growth consumer and B2B clients.',
    responsibilities: [
      'Manage six-figure monthly media budgets across diversified channels.',
      'Structure rigorous A/B and multivariate incrementality tests.',
      'Collaborate with the Creative team to brief and test high-velocity ad concepts.',
      'Build executive dashboards detailing blended CAC, LTV, and contribution margins.'
    ],
    requirements: [
      'Proven track record scaling profitable ad spend on Google Ads & Meta Ads.',
      'Deep familiarity with server-side tagging, GA4, and modern attribution frameworks.',
      'Strong analytical mindset with advanced spreadsheet modeling capabilities.'
    ]
  },
  {
    id: 'senior-art-director',
    title: 'Senior Art Director & Visual Designer',
    department: 'Creative & Brand Systems',
    location: 'Mumbai HQ / Hybrid',
    type: 'Full-time',
    experience: '4–6 Years',
    description: 'Shape the visual language of category-defining brands. You will oversee brand systems, campaign key visuals, and digital product aesthetics.',
    responsibilities: [
      'Create distinctive visual identity systems from concept to comprehensive design manuals.',
      'Direct photoshoots, 3D renderings, and video asset pipelines.',
      'Mentor junior designers and review production quality across all touchpoints.',
      'Champion clean typography, thoughtful layout systems, and anti-slop visual restraint.'
    ],
    requirements: [
      'Exceptional portfolio showcasing refined editorial, typography, and identity projects.',
      'Fluency in Figma, Adobe Creative Cloud, and contemporary motion tools.',
      'Strong eye for photography composition, color harmony, and print production.'
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How does standmaker differ from traditional advertising or digital marketing agencies?',
    answer: 'Traditional agencies either focus purely on artistic creativity (often detached from financial outcomes) or operate as media-buying mills churning generic ad variants. standmaker unites brand strategy, high-concept creative, and performance analytics into a single cohesive mandate. We do not celebrate vanity metrics; we tie our success directly to your bottom-line business milestones.'
  },
  {
    id: 'faq-2',
    category: 'Engagements',
    question: 'What types of companies do you typically partner with?',
    answer: 'We collaborate with ambitious founders, CMOs, and enterprise leaders across high-growth D2C brands, B2B technology providers, industrial manufacturers, and modern financial services. Our common denominator is working with leaders who recognize that sustainable growth requires real brand differentiation rather than superficial performance gimmicks.'
  },
  {
    id: 'faq-3',
    category: 'Engagements',
    question: 'What are your standard engagement models and mandate durations?',
    answer: 'We primarily operate on structured retainers (minimum 6-month mandates) to ensure our strategic frameworks have adequate runway to produce compound returns. For specific high-stakes requirements, we also deliver fixed-scope sprints such as comprehensive Brand Identity Renovations or 90-Day Go-To-Market Launches.'
  },
  {
    id: 'faq-4',
    category: 'Measurement',
    question: 'How do you measure and report marketing return on investment?',
    answer: 'Every engagement begins with an agreed-upon Measurement Charter. We establish primary commercial indicators — such as qualified sales pipeline, customer acquisition cost (CAC), blended ROAS, and repeat purchase velocity — alongside verified brand awareness benchmarks. Clients receive real-time transparent dashboards and monthly executive strategy reviews.'
  },
  {
    id: 'faq-5',
    category: 'Collaboration',
    question: 'Do you work alongside our existing in-house marketing or creative teams?',
    answer: 'Absolutely. Many of our enterprise clients maintain internal creative or marketing personnel. In those arrangements, standmaker often serves as the strategic vanguard — providing the overarching brand positioning, high-tier campaign concepts, and specialized performance engineering while empowering internal teams with scalable systems and toolkits.'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Nordusk LED Lighting', sector: 'Smart Living' },
  { name: 'Veridian Botanics', sector: 'Clean D2C Luxury' },
  { name: 'Aura Financial', sector: 'FinTech & Wealth' },
  { name: 'Apex Global Logistics', sector: 'Industrial Supply Chain' },
  { name: 'Nuura Organics', sector: 'Consumer Health' },
  { name: 'Zenith Robotics', sector: 'Industrial Automation' },
  { name: 'Pulse Cloud B2B', sector: 'Enterprise SaaS' },
  { name: 'Sōl Eyewear', sector: 'Lifestyle Commerce' }
];
