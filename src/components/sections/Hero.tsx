"use client";

import LogoAnimated from "@/components/LogoAnimated";
import EcoinButton from "@/components/EcoinButton";
import Countdown from "@/components/Countdown";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = Math.random() * window.innerWidth + "px";
      snowflake.style.animationDuration = 3 + Math.random() * 5 + "s";
      snowflake.style.opacity = Math.random().toString();
      snowflake.innerText = "❄";
      document.body.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 8000);
    };

    const interval = setInterval(createSnowflake, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
  className="
    relative min-h-screen
    flex flex-col items-center justify-center
    text-center px-4 sm:px-6
    overflow-hidden
    bg-[#1C2D5A]
  "
>

<LogoAnimated />
      {/* Mensagem principal */}
      <h1 className="text-[#FDFDFD] text-3xl sm:text-5xl font-bold mb-4">
  🎅 EdenKingDom Corporation
</h1>

      <p className="text-[#D4AF37] text-sm sm:text-base mb-6">
        🎄 Feliz Natal & 🎆 Adeus 2025
      </p>

      <p className="text-xl text-olive mb-6 font-medium">
        Um Próspero Ano Novo 2026 para toda a Humanidade 🌍
      </p>

      <p className="text-graystone max-w-3xl leading-relaxed text-lg mb-8">
        O Website Institucional Oficial da EdenKingDom Corporation
        encontra-se em <strong>DESENVOLVIMENTO</strong> e será lançado
        oficialmente até <strong>Março de 2026</strong>.
      </p>

      <div className="bg-white/70 backdrop-blur-md border border-gold/30 rounded-2xl px-8 py-6 shadow-xl max-w-xl">
        <p className="text-deepblue font-semibold mb-2">
          🌱 Estamos a construir uma Civilização Corporativa Consciente
        </p>
        <p className="text-[#FDFDFD]/90 max-w-xl text-sm sm:text-base">
           Uma Civilização Corporativa Consciente — que une fé, ciência, tecnologia,
        ética e humanidade para construir o futuro da nova geração.
        </p>
      </div>
<EcoinButton />
<Countdown />

      <p className="text-[#D4AF37] text-sm sm:text-base mb-6">
        © 2025 EdenKingDom Corporation — Built from Genesis, Designed for Eternity.
      </p>

    </section>
  );
}
