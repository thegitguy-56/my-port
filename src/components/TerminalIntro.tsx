"use client";

import { useEffect, useState } from "react";

const lines = [
  "Initializing vrohan AI Interface...",
  "Loading Core Modules...",
  "AI Systems ........ OK",
  "Cloud Systems ..... OK",
  "Embedded Systems .. OK",
  "Security Check .... OK",
  "Launching Portfolio Interface..."
];

export default function TerminalIntro({ onComplete }: { onComplete: () => void }) {

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedLines(prev => [...prev, lines[index]]);
      index++;

      if (index === lines.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1200);
      }

    }, 600);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#020617] flex items-center justify-center z-50">

      <div className="w-[700px] max-w-[90%] bg-black/60 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">

        <p className="text-blue-400 font-mono mb-6">
          vrohan_AI v1.0.0
        </p>

        <div className="space-y-3 font-mono text-blue-200 text-sm">

          {displayedLines.map((line, i) => (
            <p key={i} className="animate-pulse">
              {"> "}{line}
            </p>
          ))}

        </div>

      </div>

    </div>
  );
}