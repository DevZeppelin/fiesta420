const MAPA_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.779215948568!2d-68.7456802!3d-32.9040052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0f785821a4a5%3A0x74264f7cc1156c4d!2sQuincho%20cerrado%20y%20Pileta!5e0!3m2!1ses-419!2sar!4v1793408958121!5m2!1ses-419!2sar";

const COORDENADAS = "-32.9040052,-68.7456802";

const RECOMENDACIONES = [
  {
    titulo: "Salga con tiempo",
    texto:
      "Se arranca cerca del mediodía. La organización no espera a nadie, y a usted menos.",
  },
  {
    titulo: "Use el GPS",
    texto:
      "Toque «Cómo llegar» antes de salir. El que dice «yo sé llegar» suele ser el último en llegar.",
  },
  {
    titulo: "Comparta el auto",
    texto:
      "Coordine por el grupo y llenen los autos. Menos lío para estacionar y más gente para cantar en el camino.",
  },
  {
    titulo: "Defina quién maneja",
    texto:
      "Antes de salir, no después. El que maneja no toma; el que toma vuelve en remis o por app. No se negocia.",
  },
  {
    titulo: "Traiga malla y toalla",
    texto:
      "Hay pileta. Sume protector solar: diciembre en Mendoza no perdona.",
  },
  {
    titulo: "Si se pierde",
    texto:
      "Avise por el grupo y mande su ubicación. Alguien lo va a ir a buscar, o por lo menos se van a reír.",
  },
];

export default function Location() {
  return (
    <>
      <div className="mb-8 flex flex-col items-center gap-5 text-center">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.4em] text-acid/90">
          <span className="h-px w-8 bg-acid/50" />
          El lugar
          <span className="h-px w-8 bg-acid/50" />
        </div>
        <h2 className="text-balance text-5xl uppercase text-white sm:text-7xl">
          Quincho cerrado
        </h2>
        <span className="stamp text-sm">Confirmado</span>
        <p className="max-w-md text-balance font-mono text-sm text-white/60">
          Y con pileta. Costó, pero la organización cumplió: 19 de diciembre,
          cerca del mediodía, acá.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl glass acid-glow">
        <div className="aspect-[4/5] w-full sm:aspect-video">
          <iframe
            src={MAPA_EMBED}
            title="Mapa de Quincho cerrado y Pileta"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="p-7 sm:p-9">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${COORDENADAS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-acid px-7 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-white sm:w-auto"
            >
              Cómo llegar
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href={`https://waze.com/ul?ll=${COORDENADAS}&navigate=yes`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-white/15 px-6 py-3 text-center font-mono text-sm uppercase tracking-wider transition hover:border-acid hover:text-acid sm:w-auto"
            >
              Abrir en Waze
            </a>
          </div>

          <h3 className="mb-6 mt-10 text-center text-2xl uppercase text-white">
            Instructivo de llegada
          </h3>
          <ol className="grid gap-6 sm:grid-cols-2">
            {RECOMENDACIONES.map((r, i) => (
              <li key={r.titulo} className="flex gap-4">
                <span className="shrink-0 font-display text-lg text-acid">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-mono text-sm font-semibold uppercase tracking-wider text-white">
                    {r.titulo}
                  </p>
                  <p className="mt-1 font-mono text-sm leading-relaxed text-white/65">
                    {r.texto}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-center font-mono text-xs text-white/35">
            Cita bíblica del día: &laquo;No vomitaráis ni te golpearáis la cabeza
            con el fondo de la pileta&raquo; <i>Derly 16. 14:28</i>
          </p>
        </div>
      </div>
    </>
  );
}
