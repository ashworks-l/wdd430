
import ProjectList from "../components/ProjectList";

const projects = [
  {
    title: "Horizon Explorers",
    description:
      "A travel application to explore countries, cultures, and destinations around the world.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/ashworks-l/horizon-explorers",
  },
  {
    title: "Community Service Hub",
    description:
      "A web application to manage community service projects and volunteer registrations.",
    technologies: ["Node.js", "Express", "EJS", "PostgreSQL"],
    link: "https://github.com/ashworks-l/cse340",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 text-gray-900">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mb-4 text-4xl font-bold">
          Welcome to My Portfolio
        </h1>

        <p className="text-lg text-gray-600">
          Hello! I am a web development student. Here you can explore
          some of my projects and the technologies I have learned.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}
