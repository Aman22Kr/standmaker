import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Check,
  X,
  Sparkles,
  HeartHandshake,
  TrendingUp,
  Award
} from 'lucide-react';
import { JOB_ROLES } from '../data/mockData';
import { JobRole } from '../types';
import { AdPlaceholder } from '../components/common/AdPlaceholder';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobRole | null>(null);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [applicantForm, setApplicantForm] = useState({
    name: '',
    email: '',
    phone: '',
    portfolioUrl: '',
    coverNote: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleOpenApply = (job: JobRole) => {
    setSelectedJob(job);
    setApplyModalOpen(true);
    setSubmitted(false);
    setErrorMessage('');
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantForm.name.trim() || !applicantForm.email.trim() || !applicantForm.email.includes('@')) {
      setErrorMessage('Please provide a valid full name and email address.');
      return;
    }

    try {
      const stored = localStorage.getItem('standmaker_job_applications_v1');
      const list = stored ? JSON.parse(stored) : [];
      list.push({
        roleId: selectedJob?.id,
        roleTitle: selectedJob?.title,
        applicant: applicantForm,
        appliedAt: new Date().toISOString(),
      });
      localStorage.setItem('standmaker_job_applications_v1', JSON.stringify(list));
    } catch {
      // storage unavailable
    }

    setSubmitted(true);
  };

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Join The Vanguard
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
            Build marketing solutions that define industries.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            We are always seeking rigorous thinkers, audacious designers, and analytical media buyers who treat brand building with commercial accountability.
          </p>
        </div>

        {/* Culture & Perks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">Commercial Mastery</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              You will work directly with founders and CMOs on mandates that influence millions in capital allocations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">Zero Silos, Zero Politics</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We operate as a unified squad. Strategists, art directors, and engineers collaborate directly without bureaucratic layers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">Hybrid Flexibility</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Collaborative days at our Mumbai HQ combined with focused autonomous deep-work periods.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">Top-Decile Compensation</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Industry-leading salaries, performance bonuses tied to account milestones, and health insurance.
            </p>
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl font-bold text-white">Current Open Mandates</h2>
            <p className="mt-1 text-xs text-neutral-400">
              Explore open positions across our strategy, performance, and creative divisions.
            </p>
          </div>

          <div className="space-y-4">
            {JOB_ROLES.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                    <span className="text-amber-400 font-semibold">{job.department}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </span>
                    <span>·</span>
                    <span>{job.experience}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handleOpenApply(job)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <span>View & Apply</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Modal */}
        {applyModalOpen && selectedJob && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-full max-w-2xl rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between pb-4 border-b border-neutral-800">
                <div>
                  <span className="text-xs text-amber-400 font-mono uppercase font-bold">
                    JOB APPLICATION
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">{selectedJob.title}</h3>
                  <p className="text-xs text-neutral-400">
                    {selectedJob.department} · {selectedJob.location}
                  </p>
                </div>

                <button
                  onClick={() => setApplyModalOpen(false)}
                  className="p-1 text-neutral-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                    <Check className="h-7 w-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Application Received</h4>
                  <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                    Thank you, {applicantForm.name}. Your details have been submitted for the{' '}
                    <span className="text-white font-medium">{selectedJob.title}</span> role and saved locally in your browser storage. Our talent operations team will review your portfolio.
                  </p>
                  <button
                    onClick={() => setApplyModalOpen(false)}
                    className="mt-4 px-6 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitApplication} className="mt-6 space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/50 border border-red-800 text-xs text-red-300">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantForm.name}
                        onChange={(e) =>
                          setApplicantForm({ ...applicantForm, name: e.target.value })
                        }
                        placeholder="e.g. Maya Iyer"
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Corporate / Personal Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantForm.email}
                        onChange={(e) =>
                          setApplicantForm({ ...applicantForm, email: e.target.value })
                        }
                        placeholder="maya@example.com"
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={applicantForm.phone}
                        onChange={(e) =>
                          setApplicantForm({ ...applicantForm, phone: e.target.value })
                        }
                        placeholder="+91 98200 00000"
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Portfolio / LinkedIn / GitHub URL *
                      </label>
                      <input
                        type="url"
                        required
                        value={applicantForm.portfolioUrl}
                        onChange={(e) =>
                          setApplicantForm({ ...applicantForm, portfolioUrl: e.target.value })
                        }
                        placeholder="https://linkedin.com/in/username"
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Brief Statement & Key Case Studies (Why standmaker?)
                    </label>
                    <textarea
                      rows={4}
                      value={applicantForm.coverNote}
                      onChange={(e) =>
                        setApplicantForm({ ...applicantForm, coverNote: e.target.value })
                      }
                      placeholder="Outline 1–2 commercial projects you spearheaded and the tangible business outcomes achieved..."
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-hidden"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-end gap-3 border-t border-neutral-800">
                    <button
                      type="button"
                      onClick={() => setApplyModalOpen(false)}
                      className="px-4 py-2 text-xs text-neutral-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-md"
                    >
                      Submit Candidate Profile
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Compact Ad Placeholder */}
        <AdPlaceholder />
      </div>
    </div>
  );
};
