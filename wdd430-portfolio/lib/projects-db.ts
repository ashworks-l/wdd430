
import { sql } from "@vercel/postgres";

export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  github?: string;
  demo?: string;
}

type ProjectRow = {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  github: string | null;
  demo: string | null;
};

function mapProject(row: ProjectRow): Project {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    type: row.type,
    technologies: row.technologies,
    github: row.github ?? undefined,
    demo: row.demo ?? undefined,
  };
}

export async function getProjects(
  type?: string
): Promise<Project[]> {
  const result =
    type === undefined
      ? await sql`
          SELECT id, title, description, type,
                 technologies, github, demo
          FROM projects
          ORDER BY id
        `
      : await sql`
          SELECT id, title, description, type,
                 technologies, github, demo
          FROM projects
          WHERE type = ${type}
          ORDER BY id
        `;

  return (result.rows as ProjectRow[]).map(mapProject);
}

export async function getProjectById(
  id: number
): Promise<Project | undefined> {
  const result = await sql`
    SELECT id, title, description, type,
           technologies, github, demo
    FROM projects
    WHERE id = ${id}
    LIMIT 1
  `;

  const row = result.rows[0] as ProjectRow | undefined;

  return row ? mapProject(row) : undefined;
}
