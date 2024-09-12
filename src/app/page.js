"use client"

import Image from "next/image";
import React, { useState, useEffect } from 'react';

export default function Home() {

    const [timeLeft, setTimeLeft] = useState({});
    const [mounted, setMounted] = useState(false);

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
            <p className="mb-2 text-center text-2xl uppercase">... Organización de fiesta en progreso ...</p><p><i>¡Los organizadores velan por que esta sea la mejor de todas!</i></p>
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

          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">Pague su cuota a tiempo para garantizar la integridad de la fiesta</li>
            <li>Espere al 21 de diciembre para fortalecer la unión de este gran grupo</li>
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
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-yellow-600 hover:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            >Hay regalo</a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-yellow-600 hover:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            >
              Va el misil
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-yellow-600 hover:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://maps.app.goo.gl/vczhr1zGgsHcoqiL9" target="_blank"
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
