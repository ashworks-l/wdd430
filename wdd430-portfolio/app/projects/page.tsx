
import ProjectList from "./ProjectList";

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Projects Overview</h1>

      <p className="mt-4">
        Welcome to my projects section. Here you can explore my open source
        and school projects.
      </p>

      <ProjectList apiUrl="/api/projects" />
    </main>
  );
}
