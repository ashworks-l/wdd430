import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 px-6 py-5 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}