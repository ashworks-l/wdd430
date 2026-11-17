
import { Suspense } from "react";
import ProjectList from "./ProjectList";
import ProjectSearch from "./ProjectSearch";
import Pagination from "./Pagination";
import { fetchProjectsPages } from "@/lib/projects-db";

interface ProjectsPageProps {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}

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

async function ProjectsContent({
  searchParams,
}: {
  searchParams: ProjectsPageProps["searchParams"];
}) {
  const params = await searchParams;

  const query = params.query || "";

  const requestedPage = Number(params.page) || 1;

  const currentPage =
    Number.isInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1;

  const totalPages = await fetchProjectsPages(query);

  const validPage = Math.min(
    currentPage,
    Math.max(totalPages, 1)
  );

  return (
    <>
      <ProjectList
        query={query}
        currentPage={validPage}
      />

      <Pagination
        totalPages={totalPages}
      />
    </>
  );
}

export default function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Projects Overview
      </h1>

      <p className="mt-4">
        Welcome to my projects section. You can explore my open source
        and school projects here.
      </p>

      <Suspense fallback={null}>
        <ProjectSearch />
      </Suspense>

      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectsContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
