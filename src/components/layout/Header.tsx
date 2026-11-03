import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Bookmark, Menu, X, ArrowUpRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { savedCaseStudySlugs } = useApp();

  const navLinks = [
    { label: 'Solutions', to: '/solutions' },
    { label: 'Work', to: '/work' },
    { label: 'About', to: '/about' },
    { label: 'Perspectives', to: '/perspectives' },
    { label: 'Careers', to: '/careers' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
        >
          <span className="font-extrabold tracking-tighter">standmaker</span>
          <span className="text-amber-400">.</span>
        </Link>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors hover:text-white whitespace-nowrap shrink-0 relative py-1 ${
                  isActive ? 'text-amber-400 font-semibold' : 'text-neutral-400'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + Bookmark state */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/saved"
            aria-label="View saved case studies"
            className="relative flex items-center justify-center p-2 text-neutral-400 hover:text-amber-400 transition-colors rounded-lg border border-neutral-800 hover:border-neutral-700 bg-neutral-900/60"
            title="Saved Case Studies"
          >
            <Bookmark className="h-4 w-4" />
            {savedCaseStudySlugs.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-neutral-950">
                {savedCaseStudySlugs.length}
              </span>
            )}
          </Link>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <span>Start a Mandate</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors rounded-lg border border-neutral-800 bg-neutral-900"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-neutral-900 text-amber-400 font-semibold'
                      : 'text-neutral-300 hover:bg-neutral-900/60 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 border-t border-neutral-900">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
            >
              <span>Start a Mandate</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
