
import ProjectList from "../ProjectList";

export default function OpenSourcePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Open Source Projects</h1>

      <p className="mt-4">
        Here are my open source projects.
      </p>

      <ProjectList apiUrl="/api/projects?type=opensource" />
    </main>
  );
}
