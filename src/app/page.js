"use client"

import Image from "next/image";
import React, { useState, useEffect } from 'react';


export default function Home() {

  const [timeLeft, setTimeLeft] = useState({});
  const [mounted, setMounted] = useState(false);
  const [showMisil, setShowMisil] = useState(false)
  const [mensajeRegalo,setMensajeRegalo] = useState(false)

  const handleToggle = () => {
    setShowMisil(!showMisil);
  };
  const handleMensaje = () => {
    setMensajeRegalo(!mensajeRegalo);
  };

  const calculateTimeLeft = () => {
    const targetDate = new Date('December 21, 2024 10:00:00');
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    setMounted(true);  // Esto asegura que la cuenta regresiva solo se muestre después de la hidratación del cliente
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  if (!mounted) {
    return null; // Evita que el contenido se renderice en el servidor
  }



  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20  ">
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
          <h2 className="mb-2 text-center text-2xl uppercase">... Organización de fiesta en progreso ...</h2><p><i>¡Los organizadores velan por que esta sea la mejor de todas!</i></p>
        </div>
        <div className="text-center mx-auto bg-black p-8 rounded-full border-2 border-neutral-50">
          <h1>Para el 21 de diciembre, 10:00 AM faltan</h1>
          <div>
            {Object.keys(timeLeft).length > 0 ? (
              <div className="p-2 gap-2">
                <span>{timeLeft.days} días </span>
                <span>{timeLeft.hours} hs </span>
                <span>{timeLeft.minutes} min </span>
                <span>{timeLeft.seconds} seg</span>
              </div>
            ) : (
              <p>¡Es el 21 de diciembre!</p>
            )}
          </div>
        </div>

        <ol className="list-inside space-y-3 list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>Pague su cuota a tiempo para garantizar la integridad de la fiesta</li>
          <li>Espere al 21 de diciembre para fortalecer la unión de este gran grupo</li>
          <li>Nos vemos en La Magnolia (Guardia vieja y Perón, Luján)</li>
        </ol>

        <Image
          className="mx-auto animate-pulse"
          src="/leon.png"
          alt="leon 420"
          width={300}
          height={300}
          priority
        />

        <div className="flex gap-4 items-center flex-col sm:flex-row mx-auto">
          <button onClick={handleMensaje}
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-yellow-600 hover:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >Hay regalo</button>
          <button onClick={handleToggle}
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-yellow-600 hover:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            Va el misil
          </button>

          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-yellow-600 hover:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://maps.app.goo.gl/vczhr1zGgsHcoqiL9" target="_blank"
          >
            Ubicación
          </a>
        </div>
        {mensajeRegalo && (
          <span>Pague su cuota y espere al momento, no va a adivinar qué es, pero le va a gustar
          <Image
            src="/ivan.png"
            className="mx-auto my-4"
            alt="el gordo en la vespa"
            width={300}
            height={300}
          /></span>
        )}
        {showMisil && (
          <Image
            src="/misil.png"
            className="mx-auto"
            alt="el gordo en la vespa"
            width={300}
            height={500}
          />
        )}

        <section className="mx-auto text-center mt-14">
          <h2>No te quedes afuera</h2>
          <Image
            src="/pato.png"
            alt="pato"
            className="mx-auto"
            width={300}
            height={300}
            />
            <p>Si te quedás afuera, no creo que el pato nunca te lo perdone</p>
            <p>Nunca</p>
        </section>

        <section className="text-center mx-auto space-y-3 mt-8">
          <h2 className="mb-4">Auspician</h2>
          <Image
            src="/criptobeer.png"
            alt="criptobeer"
            width={300}
            height={300}
          />
          <Image
            src="/carpasmm.png"
            alt="criptobeer"
            width={300}
            height={300}
          />
          <Image
            src="/alfredo.png"
            alt="criptobeer"
            width={300}
            height={300}
          />
          <Image
            src="/peludo.png"
            alt="criptobeer"
            width={300}
            height={300}
          />
        </section>
      </main>


      <footer className="row-start-3 flex flex-col flex-wrap items-center justify-center mt-24 mb-8">
        <div className="mb-4">
          Hecho con ♥ por
          <a
            className="items-center hover:underline hover:underline-offset-4 pl-1"
            href="https://devzeppelinweb.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            DevZeppelin
          </a>
        </div>
        Link útil:
        <a href="https://cuantocadauno.vercel.app"
          target="_blank">
          App para sacar la cuenta en los asados
        </a>

      </footer>
    </div>
  );
}
