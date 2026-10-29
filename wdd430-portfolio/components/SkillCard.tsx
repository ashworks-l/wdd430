
interface SkillCardProps {
  name: string;
  description: string;
}

export default function SkillCard({
  name,
  description,
}: SkillCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="mb-2 text-xl font-bold text-slate-900">
        {name}
      </h3>

      <p className="text-gray-600">{description}</p>
    </article>
  );
}
