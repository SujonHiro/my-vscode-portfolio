import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Info() {
  return (
    <>
      <div className=" rounded-2xl shadow-lg  border border-slate-700 p-4 space-y-4 mb-10">
        <h1 className="text-3xl font-bold text-[var(--color-text)] tracking-tight">
          Md.Sujon{" "}
          <span className="text-[var(--color-accent)] tracking-tight">
            Howlader
          </span>
        </h1>
        <p className="text-lg font-medium text-[var(--color-text)] tracking-tight">
          <strong>Full Stack Web Developer</strong>
        </p>
        <p className="text-base leading-relaxed text-[var(--color-text)]">
          I craft elegant and responsive web applications using the MERN stack.
          My focus is on clean, maintainable code and delivering seamless,
          intuitive user experiences.
        </p>
        <Link
          href="/projects"
          className="inline-flex justify-center gap-2 bg-[var(--color-accent)] font-bold px-4 py-2 mt-2 rounded-md text-white transition duration-200 items-center"
        >
          <span>View Projects</span> <ArrowRightIcon size="20" />
        </Link>
      </div>
    </>
  );
}
