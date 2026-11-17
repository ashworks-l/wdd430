
import { sql } from "@vercel/postgres";

export const ITEMS_PER_PAGE = 6;

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

// Search projects and return only the requested page
export async function fetchFilteredProjects(
  query: string,
  currentPage: number
): Promise<Project[]> {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const searchPattern = `%${query.trim()}%`;

  const result = await sql`
    SELECT id, title, description, type,
           technologies, github, demo
    FROM projects
    WHERE
      title ILIKE ${searchPattern}
      OR description ILIKE ${searchPattern}
      OR technologies::text ILIKE ${searchPattern}
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset}
  `;

  return (result.rows as ProjectRow[]).map(mapProject);
}

// Count the pages available for the search
export async function fetchProjectsPages(
  query: string
): Promise<number> {
  const searchPattern = `%${query.trim()}%`;

  const result = await sql`
    SELECT COUNT(*) AS count
    FROM projects
    WHERE
      title ILIKE ${searchPattern}
      OR description ILIKE ${searchPattern}
      OR technologies::text ILIKE ${searchPattern}
  `;

  const count = Number(result.rows[0].count);

  return Math.ceil(count / ITEMS_PER_PAGE);
}
