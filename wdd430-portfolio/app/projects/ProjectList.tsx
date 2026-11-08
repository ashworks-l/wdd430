
"use client";

import { useEffect, useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
};

export default function ProjectList({ apiUrl }: { apiUrl: string }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data: Project[] = await response.json();
        setProjects(data);
      } catch {
        setError("Could not load projects.");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [apiUrl]);

  if (loading) {
    return <p className="mt-4">Loading projects...</p>;
  }

  if (error) {
    return <p className="mt-4 text-red-600">{error}</p>;
  }

  if (projects.length === 0) {
    return <p className="mt-4">No projects found.</p>;
  }

  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <article key={project.id} className="rounded-lg border p-6 shadow-sm">
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
