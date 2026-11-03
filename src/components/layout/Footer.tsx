import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Mail, MapPin, Phone } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { newsletterSubscribed, subscribeNewsletter } = useApp();
  const [emailInput, setEmailInput] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim() && emailInput.includes('@')) {
      subscribeNewsletter(emailInput.trim());
      setShowSuccess(true);
      setEmailInput('');
      setTimeout(() => setShowSuccess(false), 4000);
    }
  };

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block text-xl font-bold tracking-tight text-white">
              standmaker<span className="text-amber-400">.</span>
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              A full-stack digital marketing, brand strategy, and growth agency. Forging business-relevance through creativity, talent, technology, and timeless marketing fundamentals.
            </p>
            <div className="pt-2 text-xs text-neutral-500 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                <span>Solitaire Corporate Park, Andheri East, Mumbai, MH 400093</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-neutral-400 shrink-0" />
                <a href="mailto:grow@standmaker.agency" className="hover:text-amber-400 transition-colors">
                  grow@standmaker.agency
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-neutral-400 shrink-0" />
                <span>+91 (022) 6912 4400</span>
              </div>
            </div>
          </div>

          {/* Solutions navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
              Solutions
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/solutions?category=brands" className="hover:text-amber-400 transition-colors">
                  Brands & Strategy
                </Link>
              </li>
              <li>
                <Link to="/solutions?category=content" className="hover:text-amber-400 transition-colors">
                  Content & Creator Systems
                </Link>
              </li>
              <li>
                <Link to="/solutions?category=advertising" className="hover:text-amber-400 transition-colors">
                  Advertising & Creative
                </Link>
              </li>
              <li>
                <Link to="/solutions?category=performance" className="hover:text-amber-400 transition-colors">
                  Performance & Commerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  About Us & Philosophy
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-amber-400 transition-colors">
                  Selected Work & Cases
                </Link>
              </li>
              <li>
                <Link to="/perspectives" className="hover:text-amber-400 transition-colors">
                  Perspectives & Essays
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-amber-400 transition-colors">
                  Careers & Culture
                </Link>
              </li>
              <li>
                <Link to="/saved" className="hover:text-amber-400 transition-colors">
                  Saved Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Dispatch */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
              The Standpoint Dispatch
            </h4>
            <p className="mt-4 text-xs text-neutral-400 leading-relaxed">
              Our monthly strategic perspective on brand building, attribution, and growth marketing.
            </p>

            {newsletterSubscribed || showSuccess ? (
              <div className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-amber-400">
                <Check className="h-4 w-4 shrink-0" />
                <span>You are subscribed to The Standpoint.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter business email"
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs text-white placeholder-neutral-500 focus:border-amber-400 focus:outline-hidden"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1 top-1 bottom-1 px-2.5 flex items-center justify-center rounded bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-colors text-xs"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
                <span className="text-[11px] text-neutral-500 block">
                  No spam. Unsubscribe with one click.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} standmaker Marketing Solutions LLP. Recreated for GitHub Pages.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-neutral-400">GitHub: @Aman22kr</span>
            <span>·</span>
            <Link to="/about" className="hover:text-neutral-300 transition-colors">Privacy Notice</Link>
            <span>·</span>
            <Link to="/about" className="hover:text-neutral-300 transition-colors">Terms of Mandate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
