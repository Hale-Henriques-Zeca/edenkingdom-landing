import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 mt-24 px-4 py-8 text-center text-sm">
      <div className="flex flex-wrap justify-center gap-4 mb-4">

        <Link href="https://instagram.com/edenkingdom.corp" target="_blank">📸 Instagram</Link>
        <Link href="https://x.com/EdenKingDomCorp" target="_blank">X—Twitter</Link>
        <Link href="https://youtube.com/channel/UCA7ndIm6iUhybDU72KxcLKg" target="_blank">📺 YouTube</Link>
        <Link href="https://t.me/EKDCorp" target="_blank">📢 Telegram Canal</Link>
         <Link href="https://t.me/EdenKingDom" target="_blank">💬 Telegram Grupo</Link>
        <Link href="https://whatsapp.com/channel/0029VbBhPltJpe8j9HOdF501" target="_blank">📢 WhatsApp Canal</Link>
<Link href="/whitepaper">Whitepaper</Link>
        <Link href="/privacy">Privacidade</Link>
        <Link href="/terms">Termos</Link>
      </div>

      <p className="text-gray-500 max-w-xl mx-auto">
        © {new Date().getFullYear()} EdenKingDom Corporation —
        Built from Genesis, Designed for Eternity.
      </p>

      <p className="text-xs text-gray-400 mt-2">
        Website institucional em desenvolvimento — lançamento público previsto para Março de 2026.
      </p>
    </footer>
  );
}
