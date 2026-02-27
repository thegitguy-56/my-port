"use client";

import { useEffect, useMemo, useState } from "react";

const lines = [
  "Initializing vrohan Experience Engine...",
  "Calibrating product intuition...",
  "Loading AI + cloud modules...",
  "Injecting story-driven interface...",
  "Boot sequence complete.",
];

export default function TerminalIntro({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedLines((prev) => [...prev, lines[index]]);
      index += 1;

      if (index === lines.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 350);
      }
    }, 220);

    return () => clearInterval(interval);
  }, [onComplete]);

  const progress = useMemo(() => Math.round((displayedLines.length / lines.length) * 100), [displayedLines.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#040814] px-4">
      <div className="w-[780px] max-w-[95%] rounded-2xl border border-cyan-300/35 bg-black/70 p-6 shadow-[0_0_80px_rgba(56,189,248,0.15)] backdrop-blur-xl md:p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="font-mono text-sm text-cyan-300 md:text-base">vrohan.OS / immersive-mode</p>
          <button
            onClick={onComplete}
            className="rounded-lg border border-cyan-300/40 px-3 py-1.5 text-xs text-cyan-100/90 transition hover:bg-cyan-300/10 md:text-sm"
          >
            Skip intro
          </button>
        </div>

        <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-cyan-100/15">
          <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 transition-all duration-200" style={{ width: `${progress}%` }} />
        </div>

        <div className="space-y-2.5 font-mono text-xs text-cyan-100 md:text-sm">
          {displayedLines.map((line, i) => (
            <p key={line}>
              {"> "}
              {line}
              {i === displayedLines.length - 1 && <span className="animate-pulse">▋</span>}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
