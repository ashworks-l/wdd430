
import { Suspense } from "react";
import ProjectList from "../ProjectList";

function SchoolProjectSkeleton() {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2 animate-pulse">
      {[1, 2].map((item) => (
        <div
          key={item}
          className="h-40 rounded-lg bg-slate-200"
        />
      ))}
    </div>
  );
}

export default function SchoolProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">School Projects</h1>

      <p className="mt-4">
        Here are my school projects.
      </p>

      <Suspense fallback={<SchoolProjectSkeleton />}>
        <ProjectList type="school" />
      </Suspense>
    </main>
  );
}
