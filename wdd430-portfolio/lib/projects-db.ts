
export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Horizon Explorers",
    description: "A web project focused on exploring destinations and travel information.",
    type: "school",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Community Service Hub",
    description: "A web application that connects volunteers with community service projects.",
    type: "school",
    technologies: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal website showcasing projects and programming skills.",
    type: "opensource",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export function getProjects(type?: string) {
  if (!type) {
    return projects;
  }

  return projects.filter((project) => project.type === type);
}

export function getProjectById(id: number) {
  return projects.find((project) => project.id === id);
}
