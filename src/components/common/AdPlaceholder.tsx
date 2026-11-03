import React from 'react';
import { Sparkles, ExternalLink, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface AdPlaceholderProps {
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className = '' }) => {
  const { isAdDismissed, dismissAd, restoreAd } = useApp();

  if (isAdDismissed) {
    return (
      <div className={`w-full max-w-6xl mx-auto px-4 py-2 text-right ${className}`}>
        <button
          onClick={restoreAd}
          className="text-xs text-neutral-500 hover:text-neutral-400 underline transition-colors"
        >
          Show Sponsor Slot
        </button>
      </div>
    );
  }

  return (
    <div className={`w-full max-w-6xl mx-auto px-4 my-8 ${className}`}>
      <aside
        aria-label="Sponsored Content"
        className="relative overflow-hidden rounded-lg border border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-4 sm:p-5 shadow-sm transition-all hover:border-neutral-700"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold tracking-wider uppercase text-neutral-400">
                  SPONSORED
                </span>
                <span className="text-neutral-600">·</span>
                <span className="text-xs font-medium text-neutral-300">
                  HyperScale Marketing Analytics
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1 sm:line-clamp-none">
                Modern attribution and incrementality modeling for high-velocity growth agencies and marketing leaders.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
            <a
              href="#/contact"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#/contact';
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
            >
              <span>Explore Platform</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <button
              onClick={dismissAd}
              title="Dismiss ad placeholder"
              aria-label="Dismiss ad placeholder"
              className="p-1 text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};
