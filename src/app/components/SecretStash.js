"use client";

import Image from "next/image";
import { useState } from "react";

export default function SecretStash() {
  const [regalo, setRegalo] = useState(false);
  const [misil, setMisil] = useState(false);

  return (
    <div className="w-full max-w-xl">
      <p className="mb-4 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
        Material reservado · abrir bajo propia responsabilidad
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setRegalo((v) => !v)}
          aria-expanded={regalo}
          className="flex-1 rounded-2xl glass px-5 py-3 font-mono text-sm uppercase tracking-wider transition-colors hover:bg-acid hover:text-black"
        >
          {regalo ? "Cerrá eso" : "Hay regalo"}
        </button>
        <button
          type="button"
          onClick={() => setMisil((v) => !v)}
          aria-expanded={misil}
          className="flex-1 rounded-2xl glass px-5 py-3 font-mono text-sm uppercase tracking-wider transition-colors hover:bg-ember hover:text-black"
        >
          {misil ? "Guardá el misil!" : "Va el misil?"}
        </button>
      </div>

      {regalo && (
        <div className="mt-4 animate-fade-up rounded-2xl glass p-5 text-center">
          <p className="font-mono text-sm text-white/80">
            Pague su cuota y espere el momento. No va a adivinar qué es, pero le
            va a gustar.
          </p>
          <Image
            src="/ivan.png"
            alt="el gordo en la vespa"
            width={260}
            height={260}
            className="mx-auto mt-4 rounded-xl"
          />
        </div>
      )}

      {misil && (
        <div className="mt-4 animate-fade-up rounded-2xl glass p-5 text-center">
          <Image
            src="/misil.png"
            alt="va el misil"
            width={260}
            height={563}
            className="mx-auto rounded-xl"
          />
          <p className="mt-3 font-mono text-xs text-white/50">
            Ya está en el aire. No se puede cancelar.
          </p>
        </div>
      )}
    </div>
  );
}
