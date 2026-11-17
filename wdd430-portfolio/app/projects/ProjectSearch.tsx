
"use client";

import {
  useSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";

import { useDebouncedCallback } from "use-debounce";

export default function ProjectSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    router.push(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="mt-6">
      <label
        htmlFor="project-search"
        className="mb-2 block font-medium"
      >
        Search projects
      </label>

      <input
        id="project-search"
        type="search"
        placeholder="Search by title, description or technology..."
        defaultValue={searchParams.get("query")?.toString() ?? ""}
        onChange={(event) => handleSearch(event.target.value)}
        className="w-full rounded-lg border border-gray-300 p-3"
      />
    </div>
  );
}
