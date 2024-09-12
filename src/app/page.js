import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="mx-auto animate-bounce"
          src="/logo.png"
          alt="420 logo"
          width={300}
          height={300}
          priority
        />
        <div className="flex flex-col justify-content-center text-center mx-auto">
          <p className="mb-2 text-center text-2xl uppercase">... Organización de fiesta en progreso ...</p><p><i>¡Los organizadores velan por que esta sea la mejor de todas!</i></p>
        </div>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">Pague su cuota a tiempo para garantizar la integridad de la fiesta</li>
          <li>Espere al 21 de diciembre para fortalecer la unión de este gran grupo</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row mx-auto">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >Hay regalo</a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            Va el misil
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            Ubicación
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center">
        Hecho con ♥ por 
        <a
          className="items-center hover:underline hover:underline-offset-4 pl-1"
          href="https://devzeppelinweb.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          
           DevZeppelin
        </a>
       
      </footer>
    </div>
  );
}
