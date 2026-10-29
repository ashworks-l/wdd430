
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="rounded-xl border bg-white p-6 shadow-md">
      <h2 className="mb-3 text-2xl font-bold">{title}</h2>

      <p className="mb-4 text-gray-600">{description}</p>

      <p className="mb-4">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-700 underline"
        >
          View Project
        </a>
      )}
    </article>
  );
}
