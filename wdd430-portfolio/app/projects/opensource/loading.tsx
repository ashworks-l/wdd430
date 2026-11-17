
export default function Loading() {
  return (
    <main className="animate-pulse space-y-10 p-8">
      <section className="space-y-4">
        <div className="h-10 w-2/3 rounded bg-slate-200" />
        <div className="h-4 w-full rounded bg-slate-200" />
      </section>

      <section className="space-y-4">
        <div className="h-8 w-48 rounded bg-slate-200" />

        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-40 rounded-lg bg-slate-200"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
