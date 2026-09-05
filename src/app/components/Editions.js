const EDICIONES = [
  {
    año: "2024",
    lugar: "La Magnolia — Luján",
    nota: "Se fortaleció la unión de este gran grupo. Constaba en el reglamento.",
    estado: "archivada",
  },
  {
    año: "2025",
    lugar: "Finca Don Ángel — Maipú",
    nota: "Los pibes se pusieron la 10. Habemus. La mística resistió otro año.",
    estado: "archivada",
  },
  {
    año: "2026",
    lugar: "Lugar a confirmar",
    nota: "Se nota que se trabajó en actualizar esto a la edición 2026.",
    estado: "en curso",
  },
];

export default function Editions() {
  return (
    <ol className="w-full max-w-xl space-y-3">
      {EDICIONES.map((e) => (
        <li
          key={e.año}
          className={`rounded-2xl border p-5 ${
            e.estado === "en curso"
              ? "border-acid/50 glass acid-glow"
              : "border-white/10 bg-white/[0.02]"
          }`}
        >
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-display text-2xl text-white">{e.año}</span>
            <span
              className={`font-mono text-[10px] uppercase tracking-widest ${
                e.estado === "en curso" ? "text-acid" : "text-white/35"
              }`}
            >
              {e.estado}
            </span>
          </div>
          <p className="mt-1 font-mono text-sm text-white/70">{e.lugar}</p>
          <p className="mt-2 text-sm text-white/45">{e.nota}</p>
        </li>
      ))}
    </ol>
  );
}
