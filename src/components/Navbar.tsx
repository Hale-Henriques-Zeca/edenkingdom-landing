import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <Link href="/" className="font-semibold">
        EdenKingDom
      </Link>

      <div className="flex gap-6">
        <Link href="/whitepaper">Whitepaper</Link>
        <Link href="/#sectors">Divisões</Link>
        <Link href="/#mission">Missão</Link>
      </div>
    </nav>
  );
}
