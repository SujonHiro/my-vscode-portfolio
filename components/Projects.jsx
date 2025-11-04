import {
  LaravelIcon,
  NextIcon,
  ReactIconBig,
  TailwindIcon,
  VercelIcon,
} from "@/utils/Icon";
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
    technology: [
      { label: "Laravel", icon: <LaravelIcon /> },
      { label: "React", icon: <ReactIconBig /> },
      { label: "TailwindCSS", icon: <TailwindIcon /> },
      { label: "Vercel", icon: <VercelIcon /> },
    ],
  },
  {
    id: 2,
    title: "Digital Software Company",
    description:
      "Modern software company platform with smooth UI and great user experience.",
    image: "/agency.png",
    href: "https://the-tech-resolver.vercel.app/",
    technology: [
      { label: "NextJs", icon: <NextIcon /> },
      { label: "React", icon: <ReactIconBig /> },
      { label: "TailwindCSS", icon: <TailwindIcon /> },
      { label: "Vercel", icon: <VercelIcon /> },
    ],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-6 px-4 py-6">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={project.href}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-slate-700 rounded-xl overflow-hidden shadow-lg  hover:border-[var(--color-accent)]  transition-shadow duration-300"
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
            <div className="flex flex-col">
              <h2 className="text-[var(--color-accent)] text-xl font-semibold mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300">{project.description}</p>
              <div className="flex gap-2 items-center">
                {project.technology.map((stack) => (
                  <div
                    key={stack.label}
                    className="mt-2 size-8 bg-zinc-800 p-2 rounded-sm "
                  >
                    <span className="flex items-center">{stack.icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
