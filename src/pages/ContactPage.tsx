import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';
import { FAQS } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/common/AdPlaceholder';

export const ContactPage: React.FC = () => {
  const { inquiryDraft, updateInquiryDraft, clearInquiryDraft } = useApp();

  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const servicesList = [
    { id: 'brands', label: 'Brands & Strategy' },
    { id: 'content', label: 'Content & Creator Systems' },
    { id: 'advertising', label: 'Advertising & Creative Campaigns' },
    { id: 'performance', label: 'Performance Marketing & Commerce' },
  ];

  const budgetOptions = [
    '< $10k / month',
    '$15k - $30k / month',
    '$30k - $75k / month',
    '$75k+ / month',
    'Fixed Sprint (Under $25k)',
  ];

  const timelineOptions = [
    'Immediate (Next 30 Days)',
    'Next Quarter (60–90 Days)',
    'Exploratory / Research Phase',
  ];

  const toggleService = (id: string) => {
    const current = inquiryDraft.services || [];
    const next = current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id];
    updateInquiryDraft({ services: next });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryDraft.name.trim() || !inquiryDraft.email.trim() || !inquiryDraft.email.includes('@')) {
      setErrorMessage('Please enter your full name and a valid corporate email address.');
      return;
    }

    try {
      const stored = localStorage.getItem('standmaker_submitted_inquiries_v1');
      const list = stored ? JSON.parse(stored) : [];
      list.push({
        ...inquiryDraft,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('standmaker_submitted_inquiries_v1', JSON.stringify(list));
    } catch {
      // storage unavailable
    }

    setSubmitted(true);
    setErrorMessage('');
  };

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Start A Mandate
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
            Let’s discuss your next commercial inflection point.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Whether preparing for a national brand launch, re-architecting your identity, or scaling customer acquisition efficiency, our partners are ready to review your goals.
          </p>
        </div>

        {/* Contact Info & Scope Builder Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contacts & Location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-6">
              <h3 className="text-lg font-bold text-white">Direct Communication</h3>

              <div className="space-y-5 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">New Business & Mandates</div>
                    <a
                      href="mailto:grow@standmaker.agency"
                      className="text-neutral-400 hover:text-amber-400 transition-colors"
                    >
                      grow@standmaker.agency
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Direct Agency Line</div>
                    <div className="text-neutral-400">+91 (022) 6912 4400</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Corporate Headquarters</div>
                    <div className="text-neutral-400 leading-relaxed">
                      Solitaire Corporate Park, Building 7, 4th Floor<br />
                      Andheri East, Mumbai, Maharashtra 400093, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-400">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Operating Hours & SLA</div>
                    <div className="text-neutral-400">
                      Monday–Friday, 9:30 AM – 7:00 PM IST<br />
                      Initial strategic response within 24 business hours.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/80 text-xs text-neutral-400 space-y-2">
              <div className="text-white font-semibold flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                <span>Confidentiality & Non-Disclosure</span>
              </div>
              <p className="leading-relaxed">
                All proprietary product disclosures, revenue metrics, and strategic goals shared in this scope builder are governed by our standard bilateral NDA.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Scope Builder Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/80 border border-neutral-800 shadow-2xl backdrop-blur-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Successfully Registered</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                    Thank you, {inquiryDraft.name}. Your mandate brief for{' '}
                    <span className="text-white font-medium">{inquiryDraft.company || 'your brand'}</span> has been captured and stored in your browser localStorage. Our strategic leadership team will review and reply within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      clearInquiryDraft();
                      setSubmitted(false);
                    }}
                    className="mt-6 px-6 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">Configure Your Mandate Scope</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Draft automatically updates in your local browser storage as you type.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-xs text-red-300">
                      {errorMessage}
                    </div>
                  )}

                  {/* 1. Services selection */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Required Core Pillars (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {servicesList.map((srv) => {
                        const checked = inquiryDraft.services?.includes(srv.id);
                        return (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => toggleService(srv.id)}
                            className={`p-3 rounded-xl text-xs font-medium text-left transition-all border flex items-center justify-between ${
                              checked
                                ? 'bg-amber-400/10 border-amber-400 text-amber-400 font-semibold'
                                : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                            }`}
                          >
                            <span>{srv.label}</span>
                            <span
                              className={`h-4 w-4 rounded flex items-center justify-center border text-[10px] ${
                                checked
                                  ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold'
                                  : 'border-neutral-700'
                              }`}
                            >
                              {checked && '✓'}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Monthly Budget Range */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Estimated Monthly Marketing / Media Allocation
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => updateInquiryDraft({ budget: b })}
                          className={`p-2.5 rounded-lg text-xs font-medium text-center transition-colors border ${
                            inquiryDraft.budget === b
                              ? 'bg-amber-400 text-neutral-950 font-bold border-amber-400 shadow-sm'
                              : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. Timeline */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-2">
                      Desired Kickoff Horizon
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {timelineOptions.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => updateInquiryDraft({ timeline: t })}
                          className={`p-2 rounded-lg text-xs font-medium text-center transition-colors border ${
                            inquiryDraft.timeline === t
                              ? 'bg-amber-400 text-neutral-950 font-bold border-amber-400'
                              : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 4. Client Credentials */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryDraft.name}
                        onChange={(e) => updateInquiryDraft({ name: e.target.value })}
                        placeholder="e.g. Vikram Malhotra"
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryDraft.email}
                        onChange={(e) => updateInquiryDraft({ email: e.target.value })}
                        placeholder="vikram@company.com"
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={inquiryDraft.company}
                        onChange={(e) => updateInquiryDraft({ company: e.target.value })}
                        placeholder="e.g. Aura Financial"
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={inquiryDraft.phone || ''}
                        onChange={(e) => updateInquiryDraft({ phone: e.target.value })}
                        placeholder="+91 98200 00000"
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Strategic Context & Core Objectives
                    </label>
                    <textarea
                      rows={4}
                      value={inquiryDraft.projectBrief}
                      onChange={(e) => updateInquiryDraft({ projectBrief: e.target.value })}
                      placeholder="Outline current hurdles, category dynamics, and revenue targets you aim to achieve..."
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-hidden"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-500 font-mono">
                      Persistence: localStorage active
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-md"
                    >
                      <span>Transmit Mandate Brief</span>
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="pt-12 border-t border-neutral-900">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Clear Expectations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Frequently asked client questions.
            </h2>
          </div>

          <div className="max-w-3xl space-y-3">
            {FAQS.map((faq) => {
              const isExpanded = expandedFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-neutral-800 bg-neutral-900/40 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4 text-amber-400 shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-neutral-500 shrink-0" />
                    )}
                  </button>
                  {isExpanded && (
                    <div className="px-5 pb-5 text-xs text-neutral-400 leading-relaxed border-t border-neutral-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact Ad Placeholder */}
        <AdPlaceholder />
      </div>
    </div>
  );
};
