import Image from "next/image";

const LOGOS = [
  { src: "/criptobeer.png", alt: "Criptobeer" },
  { src: "/carpasmm.png", alt: "Carpas MM" },
  { src: "/peludo.png", alt: "El Peludo" },
  { src: "/alfredo.png", alt: "Alfredo" },
];

export default function Sponsors() {
  const loop = [...LOGOS, ...LOGOS];
  return (
    <div className="w-full max-w-3xl">
      <p className="mb-5 text-center font-mono text-[11px] uppercase tracking-[0.35em] text-white/45">
        Auspician nuevamente (nadie les preguntó)
      </p>
      <div className="relative overflow-hidden rounded-3xl glass py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#05060a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#05060a] to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-12 px-6">
          {loop.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={110}
              height={110}
              className="h-20 w-20 shrink-0 object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-24 sm:w-24"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
