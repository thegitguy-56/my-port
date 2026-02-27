"use client";

import { useEffect, useState } from "react";

const lines = [
  "Initializing vrohan Experience Engine...",
  "Calibrating product intuition...",
  "Loading AI + cloud modules...",
  "Injecting story-driven interface...",
  "Boot sequence complete."
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
      index++;

      if (index === lines.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 350);
      }
    }, 220);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-50 px-4">
      <div className="w-[780px] max-w-[95%] rounded-2xl border border-cyan-300/30 bg-black/70 p-6 md:p-8 backdrop-blur-xl shadow-[0_0_80px_rgba(56,189,248,0.15)]">
        <div className="flex items-center justify-between gap-4 mb-6">
          <p className="text-cyan-300 font-mono text-sm md:text-base">vrohan.OS / immersive-mode</p>
          <button
            onClick={onComplete}
            className="text-xs md:text-sm text-cyan-100/90 border border-cyan-300/40 px-3 py-1.5 rounded-lg hover:bg-cyan-300/10 transition"
          >
            Skip intro
          </button>
        </div>

        <div className="space-y-2.5 font-mono text-cyan-100 text-xs md:text-sm">
          {displayedLines.map((line, i) => (
            <p key={i}>
              {"> "}
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
