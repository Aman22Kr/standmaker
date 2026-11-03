import React, { useState } from 'react';
import { Play, VideoOff, Info, Check } from 'lucide-react';

interface VideoPlaceholderProps {
  title: string;
  duration?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  thumbnailUrl?: string;
  subtitle?: string;
}

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({
  title,
  duration = '02:30',
  aspectRatio = '16:9',
  thumbnailUrl,
  subtitle = 'Video Area Placeholder: External YouTube embedding is disabled in this static distribution.'
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const aspectClass =
    aspectRatio === '16:9'
      ? 'aspect-video'
      : aspectRatio === '4:3'
      ? 'aspect-4/3'
      : 'aspect-square';

  return (
    <>
      <div className="w-full my-6">
        <div
          className={`relative w-full ${aspectClass} overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 group cursor-pointer shadow-lg`}
          onClick={() => setModalOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setModalOpen(true);
            }
          }}
          aria-label={`Open placeholder preview for: ${title}`}
        >
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-radial from-neutral-800/40 via-neutral-900 to-neutral-950 opacity-90" />
          )}

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"
            aria-hidden="true"
          />

          {/* Central play button and video indicator */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950/80 text-amber-400 border border-neutral-700 backdrop-blur-md shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-neutral-950">
              <Play className="h-7 w-7 translate-x-0.5 fill-current" />
            </div>

            <div className="mt-4 max-w-md">
              <h4 className="text-sm sm:text-base font-semibold text-neutral-100 group-hover:text-amber-400 transition-colors line-clamp-1">
                {title}
              </h4>
              <p className="mt-1 text-xs text-neutral-400 line-clamp-1">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Bottom metadata bar */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-300 pointer-events-none">
            <span className="bg-neutral-950/80 px-2.5 py-1 rounded text-[11px] font-mono border border-neutral-800 backdrop-blur-xs">
              {duration}
            </span>
            <span className="bg-neutral-950/80 px-2.5 py-1 rounded text-[11px] font-mono border border-neutral-800 backdrop-blur-xs flex items-center gap-1.5 text-neutral-400">
              <VideoOff className="h-3.5 w-3.5 text-amber-400" />
              <span>Placeholder (YouTube Embed Disabled)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Info Modal on Click */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div className="w-full max-w-md rounded-xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
                <Info className="h-5 w-5" />
              </div>
              <div>
                <h3 id="video-modal-title" className="text-base font-semibold text-neutral-100">
                  Video Area Placeholder
                </h3>
                <p className="text-xs text-neutral-400">Static Host Specification Compliant</p>
              </div>
            </div>

            <div className="mt-4 text-xs text-neutral-300 leading-relaxed space-y-2 border-t border-neutral-800 pt-4">
              <p>
                In compliance with deployment guidelines, external YouTube iframes and network video streams are replaced with high-fidelity blank layout placeholders.
              </p>
              <div className="rounded-lg bg-neutral-950 p-3 border border-neutral-800/80 space-y-1 font-mono text-[11px] text-neutral-400">
                <div>Title: {title}</div>
                <div>Format: {aspectRatio} Widescreen</div>
                <div>Runtime: {duration}</div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                <Check className="h-4 w-4" />
                <span>Understood</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
