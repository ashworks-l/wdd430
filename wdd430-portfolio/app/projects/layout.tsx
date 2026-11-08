import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-6">
      <nav className="mb-6 flex gap-6 border-b pb-4">
        <Link href="/projects">Overview</Link>
        <Link href="/projects/opensource">Open Source</Link>
        <Link href="/projects/school">School</Link>
      </nav>

      {children}
    </section>
  );
}