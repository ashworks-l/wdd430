
import {
  fetchFilteredProjects,
  getProjects,
} from "@/lib/projects-db";

interface ProjectListProps {
  type?: "school" | "opensource";
  query?: string;
  currentPage?: number;
}

export default async function ProjectList({
  type,
  query = "",
  currentPage = 1,
}: ProjectListProps) {
  const projects = type
    ? await getProjects(type)
    : await fetchFilteredProjects(query, currentPage);

  if (projects.length === 0) {
    return (
      <p className="mt-6">
        No projects found.
      </p>
    );
  }

  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.id}
          className="rounded-lg border p-6 shadow-sm"
        >
          <h2 className="text-xl font-bold">
            {project.title}
          </h2>

          <p className="mt-2">
            {project.description}
          </p>

          <p className="mt-3 text-sm font-semibold">
            Type: {project.type}
          </p>

          <p className="mt-2 text-sm">
            Technologies: {project.technologies.join(", ")}
          </p>
        </article>
      ))}
    </div>
  );
}
