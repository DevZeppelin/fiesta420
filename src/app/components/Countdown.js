"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("December 19, 2026 12:00:00");

function diff() {
  const ms = TARGET - new Date();
  if (ms <= 0) return null;
  return {
    dias: Math.floor(ms / 86400000),
    hs: Math.floor((ms / 3600000) % 24),
    min: Math.floor((ms / 60000) % 60),
    seg: Math.floor((ms / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(diff());
    const id = setInterval(() => setTime(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return <div className="h-[168px] w-full max-w-md rounded-3xl glass" aria-hidden />;
  }

  if (!time) {
    return (
      <div className="w-full max-w-md rounded-3xl glass acid-glow p-8 text-center">
        <p className="font-display text-3xl text-acid">Es hoy.</p>
        <p className="mt-2 font-mono text-sm text-white/60">
          Si estás leyendo esto en vez de estar viniendo, algo salió mal.
        </p>
      </div>
    );
  }

  const unidades = [
    ["dias", time.dias],
    ["hs", time.hs],
    ["min", time.min],
    ["seg", time.seg],
  ];

  return (
    <div className="w-full max-w-md">
      <p className="mb-3 text-center font-mono text-[11px] uppercase tracking-[0.35em] text-white/50">
        19 dic 2026 · ~mediodía · faltan
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {unidades.map(([label, value]) => (
          <div
            key={label}
            className="relative overflow-hidden rounded-2xl glass acid-glow px-1 py-4 text-center"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-acid/20 to-transparent animate-scan" />
            <span className="block font-display text-3xl tabular-nums text-white sm:text-4xl">
              {String(value).padStart(2, "0")}
            </span>
            <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-acid/80">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
