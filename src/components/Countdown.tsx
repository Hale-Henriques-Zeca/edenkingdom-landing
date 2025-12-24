"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-03-31T23:59:59").getTime();

  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    setMounted(true);

    const update = () => {
      setTimeLeft(Math.max(targetDate - Date.now(), 0));
    };

    update(); // primeira execução no client

    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // ⛔️ NÃO renderiza nada durante SSR
  if (!mounted) return null;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="mt-12 text-center">
      <p className="text-sm uppercase tracking-widest text-graystone mb-4">
        Official Launch Countdown
      </p>

      <div className="grid grid-cols-2 sm:flex justify-center gap-3">
        {[
          { label: "Days", value: days },
          { label: "Hours", value: hours },
          { label: "Minutes", value: minutes },
          { label: "Seconds", value: seconds },
        ].map((item, i) => (
          <div
            key={i}
            className="min-w-[90px] px-4 py-3 rounded-xl bg-white/80 backdrop-blur border border-gold/30 shadow"
          >
            <div className="text-3xl font-bold text-deepblue">
              {item.value}
            </div>
            <div className="text-xs text-graystone uppercase">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-graystone max-w-md mx-auto">
        This website is currently under development.  
        Official institutional launch scheduled for March 2026.
      </p>
    </div>
  );
}
