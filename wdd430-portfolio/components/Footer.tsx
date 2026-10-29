
async function CurrentYear() {
  "use cache";

  const year = new Date().getFullYear();

  return <>{year}</>;
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-6 text-center text-white">
      <p>
        Copyright © <CurrentYear /> | My Portfolio | All rights reserved
      </p>

      <p className="mt-2 text-sm text-slate-300">
        Built with Next.js and Tailwind CSS
      </p>
    </footer>
  );
}
