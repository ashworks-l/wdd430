
import { Project } from "@/lib/projects-db";

interface ProjectListProps {
  type?: "school" | "opensource";
}

export default async function ProjectList({
  type,
}: ProjectListProps) {
  const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const url = type
    ? `${baseUrl}/api/projects?type=${type}`
    : `${baseUrl}/api/projects`;

  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  const projects: Project[] = await response.json();

  if (projects.length === 0) {
    return <p className="mt-4">No projects found.</p>;
  }

  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.id}
          className="rounded-lg border p-6 shadow-sm"
        >
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p className="mt-2">{project.description}</p>
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
