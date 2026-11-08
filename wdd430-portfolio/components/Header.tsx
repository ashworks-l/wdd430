import Link from 'next/link';
import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="bg-slate-900 px-6 py-5 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>

        <NavLinks />
      </nav>
    </header>
  );
}