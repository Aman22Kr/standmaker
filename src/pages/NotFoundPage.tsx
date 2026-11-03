import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Briefcase, Mail } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full py-28 px-4 text-center">
      <div className="mx-auto max-w-md space-y-6">
        <div className="text-amber-400 font-mono text-sm font-bold tracking-widest uppercase">
          404 ERROR · PAGE NOT FOUND
        </div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Destination Unmapped
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
          The page or asset you requested does not exist or has been restructured under the standmaker architecture.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-white hover:text-amber-400 bg-neutral-900 border border-neutral-800 rounded-lg transition-colors"
          >
            <Briefcase className="h-4 w-4" />
            <span>Browse Work</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-white hover:text-amber-400 bg-neutral-900 border border-neutral-800 rounded-lg transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Get in Touch</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
