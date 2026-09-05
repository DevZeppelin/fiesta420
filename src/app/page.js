import Image from "next/image";
import Countdown from "./components/Countdown";
import Reveal from "./components/Reveal";
import SecretStash from "./components/SecretStash";
import Sponsors from "./components/Sponsors";
import Editions from "./components/Editions";

const REGLAMENTO = [
  "Pague su cuota a tiempo. La integridad de la fiesta depende de ello, y usted lo sabe.",
  "Vaya señando. El que seña temprano duerme tranquilo; el que seña tarde duerme en la ofi del super (ya saben cual).",
  "Espere al 19 para compartir el día. Los años pasan, la mística se mantiene. ¡Que no se muera!",
  "El lugar se confirma cuando se confirma. No insista.",
];

export default function Home() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center gap-24 px-5 py-16 sm:px-8 sm:py-24">
      {/* ---------- HERO ---------- */}
      <header className="flex flex-col items-center gap-7 text-center">
        <div className="relative">
          <span className="absolute left-1/2 top-1/2 -z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid/40 blur-3xl animate-aura" />
          <Image
            className="animate-float drop-shadow-[0_0_35px_rgba(124,255,79,0.35)]"
            src="/logo.png"
            alt="420"
            width={230}
            height={230}
            priority
          />
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.4em] text-acid/90">
          <span className="h-px w-8 bg-acid/50" />
          Edición 2026
          <span className="h-px w-8 bg-acid/50" />
        </div>

        <h1 className="max-w-2xl text-balance text-4xl uppercase text-white sm:text-6xl">
          Los pibes ya se están poniendo la 10
        </h1>
        <p className="max-w-md text-balance font-mono text-sm text-white/60">
          Habemus 420. De nuevo. La organización vela por que esta sea la mejor de
          todas —&nbsp;spoiler: siempre lo dice, y siempre le sale.
        </p>

        <Countdown />

        <a
          href="#sena"
          className="group mt-2 inline-flex items-center gap-2 rounded-full bg-acid px-7 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-white"
        >
          Quiero ir señando
          <span className="transition group-hover:translate-x-1">→</span>
        </a>
      </header>

      {/* ---------- REGLAMENTO ---------- */}
      <Reveal
        as="section"
        className="w-full max-w-xl rounded-3xl glass p-7 sm:p-9"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl uppercase text-white">Reglamento</h2>
          <span className="stamp text-sm">Vigente</span>
        </div>
        <ol className="space-y-4 font-mono text-sm leading-relaxed text-white/75">
          {REGLAMENTO.map((r, i) => (
            <li key={i} className="flex gap-4">
              <span className="shrink-0 font-display text-lg text-acid">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{r}</span>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* ---------- EL LEÓN ---------- */}
      <Reveal as="section" className="flex flex-col items-center gap-3 text-center">
        <Image
          src="/leon.png"
          alt="el león"
          width={200}
          height={286}
          className="animate-pulse drop-shadow-[0_0_25px_rgba(255,59,47,0.3)]"
        />
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
          el león sigue mirando quién seña y quién no
        </p>
      </Reveal>

      {/* ---------- LUGAR ---------- */}
      <Reveal as="section" className="flex w-full max-w-xl flex-col items-center gap-4 text-center">
        <h2 className="text-2xl uppercase text-white">El lugar</h2>
        <div className="w-full rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <p className="font-mono text-4xl tracking-tight">
            <span className="redacted">████████ ███ █████</span>
          </p>
          <p className="mt-4 font-mono text-sm text-white/55">
            A confirmar. Estamos entre tres lugares y ninguno nos quiere echar
            todavía (porque no nos conocen), así que vamos bien.
          </p>
          <p className="mt-2 font-mono text-xs text-white/35">
            Coordenadas exactas llegan por el grupo, como siempre, a horario
            argentino.
          </p>
          <p className="mt-2 font-mono text-xs text-white/35">
            Cita bíblica del día: &laquo;No vomitaráis ni te golpearáis la cabeza
            con el fondo de la pileta&raquo; <i>Derly 16. 14:28</i>
          </p>
        </div>
      </Reveal>

      {/* ---------- MATERIAL RESERVADO ---------- */}
      <Reveal as="section" className="flex w-full flex-col items-center">
        <SecretStash />
      </Reveal>

      {/* ---------- NO TE QUEDES AFUERA ---------- */}
      <Reveal as="section" className="flex w-full max-w-xl flex-col items-center gap-4 text-center">
        <h2 className="text-2xl uppercase text-white">No te quedes afuera</h2>
        <Image
          src="/pato.png"
          alt="el pato"
          width={220}
          height={220}
          className="animate-flicker rounded-2xl"
        />
        <p className="font-mono text-sm text-white/65">
          El pato: Símbolo de la unidad y el desmadre
        </p>
        <p className="font-display text-xl text-ember">Cuac.</p>
      </Reveal>

      {/* ---------- EDICIONES ---------- */}
      <Reveal as="section" className="flex w-full flex-col items-center gap-6">
        <h2 className="text-2xl uppercase text-white">El legajo</h2>
        <Editions />
      </Reveal>

      {/* ---------- SEÑA / CTA ---------- */}
      <Reveal
        as="section"
        id="sena"
        className="w-full max-w-xl scroll-mt-16 rounded-3xl glass acid-glow p-8 text-center"
      >
        <h2 className="text-3xl uppercase text-white">Vaya señando</h2>
        <p className="mx-auto mt-3 max-w-sm font-mono text-sm text-white/70">
          La seña no compra un lugar: confirma que entendiste de qué se trata
          esto. Mismo alias de siempre. Si no lo tenés, no eras de los nuestros
          igual.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://share.google/mSVZCVTKSGBqapXt1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border border-white/15 px-6 py-3 font-mono text-sm uppercase tracking-wider transition hover:border-acid hover:text-acid sm:w-auto"
          >
            Ver zona (aprox.)
          </a>
          <span className="font-mono text-xs text-white/40">
            alias: <span className="text-white/70">la.mistica.420</span>
          </span>
        </div>
      </Reveal>

      {/* ---------- AUSPICIANTES ---------- */}
      <Reveal as="section" className="flex w-full flex-col items-center">
        <Sponsors />
      </Reveal>

      {/* ---------- FOOTER ---------- */}
      <footer className="mt-4 flex flex-col items-center gap-2 text-center font-mono text-xs text-white/40">
        <p>
          Hecho con ♥ por{" "}
          <a
            className="text-white/60 hover:text-acid hover:underline"
            href="https://devzeppelinweb.ar"
            target="_blank"
            rel="noopener noreferrer"
          >
            DevZeppelin
          </a>
        </p>
        <p>
          Link útil:{" "}
          <a
            className="text-white/60 hover:text-acid hover:underline"
            href="https://cuantocadauno.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            app para sacar la cuenta en los asados
          </a>
        </p>
        <p className="mt-2 text-white/25">
          420 · edición 2026 · la mística no se confirma, se sostiene
        </p>
      </footer>
    </div>
  );
}
