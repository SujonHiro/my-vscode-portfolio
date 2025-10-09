import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Social Media Platform",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum doloremque tempora quasi.",
    image: "/app.jpg",
    href: "https://social-adda.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce App",
    description:
      "Modern e-commerce platform with smooth UI and great user experience.",
    image: "/agency.png",
    href: "https://the-tech-resolver.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-6 px-4 py-6">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={project.href}
          className="flex flex-col  sm:flex-row items-start sm:items-center gap-4 bg-gray-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg  hover:border-emerald-400  transition-shadow duration-300"
          target="_blank"
        >
          <div className="flex-shrink-0 w-full sm:w-4/12 h-48 relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-l-xl "
            />
          </div>

          {/* Text */}
          <div className="p-4 flex-1">
            <h2 className="text-emerald-400 text-xl font-semibold mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300">{project.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
