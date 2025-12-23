"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LogoAnimated() {
  const [showHat, setShowHat] = useState(true);

  // 🎄 Remove automaticamente após Janeiro (opcional)
  useEffect(() => {
    const now = new Date();
    if (now.getMonth() > 0) setShowHat(false);
  }, []);

  return (
    <div className="relative w-40 h-40 mx-auto mb-6 animate-fade-in">
      {showHat && (
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl">
          🎅
        </span>
      )}
      <Image
        src="/logo-ekd.png"
        alt="EdenKingDom Logo"
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}
