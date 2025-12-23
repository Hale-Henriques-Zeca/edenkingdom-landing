import Link from "next/link";

export default function EcoinButton() {
  return (
    <Link
      href="https://ecoin.edenkingdom.org"
      target="_blank"
      className="
        inline-block mt-6 px-6 py-3 rounded-full
        border border-gold text-gold font-medium
        hover:bg-gold hover:text-black
        transition
      "
    >
      💎 E-Coin Ecosystem
    </Link>
  );
}
