
import { Suspense } from "react";
import ProjectList from "./ProjectList";

function ProjectSkeleton() {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2 animate-pulse">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="h-40 rounded-lg bg-slate-200"
        />
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Projects Overview</h1>

      <p className="mt-4">
        Welcome to my projects section. You can explore my open source
        and school projects here.
      </p>

      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectList />
      </Suspense>
    </main>
  );
}
