
import ProjectList from "../ProjectList";

export default function SchoolProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">School Projects</h1>

      <p className="mt-4">
        Here are my school projects.
      </p>

      <ProjectList apiUrl="/api/projects?type=school" />
    </main>
  );
}
