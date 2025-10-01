type ProjectProps = {
    title: string;
    desc: string;
    link: string;
  };
  
  export default function ProjectCard({ title, desc, link }: ProjectProps) {
    return (
      <div className="p-6 bg-gray-100 rounded-xl shadow">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2">{desc}</p>
        <a href={link} className="text-blue-600 mt-2 block">
          View Project →
        </a>
      </div>
    );
  }
  