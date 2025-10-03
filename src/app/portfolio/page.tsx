import ProjectCard from "../../components/ProjectCard";

const projects = [
  { title: "Weather App", desc: "React + API project", link: "#" },
  { title: "Redesign Project", desc: "Improved UX for old site", link: "#" },
];

export default function Portfolio() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Work</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
