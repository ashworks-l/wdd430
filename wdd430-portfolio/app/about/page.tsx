
import SkillCard from "../../components/SkillCard";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-900">
      <section className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-4xl font-bold">About Me</h1>

        <p className="mb-8 text-lg text-gray-600">
          Hello! I am a web development student learning how to create
          websites and applications. I enjoy learning HTML, CSS,
          JavaScript, and other web technologies.
        </p>

        <h2 className="mb-6 text-2xl font-bold">My Skills</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SkillCard
            name="HTML"
            description="I use HTML to structure web pages."
          />
          <SkillCard
            name="CSS"
            description="I use CSS to style responsive websites."
          />
          <SkillCard
            name="JavaScript"
            description="I use JavaScript to add interactivity."
          />
          <SkillCard
            name="React"
            description="I am learning to build reusable components."
          />
          <SkillCard
            name="Node.js"
            description="I use Node.js to work with server-side JavaScript."
          />
          <SkillCard
            name="Next.js"
            description="I am learning to build applications with Next.js."
          />
        </div>
      </section>
    </main>
  );
}
