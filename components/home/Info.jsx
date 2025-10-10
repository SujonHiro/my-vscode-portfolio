import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Info() {
  return (
    <>
      <div className=" rounded-2xl shadow-lg bg-[#121212] border border-slate-700 p-4 space-y-4 mb-10">
        <h1 className="text-3xl font-bold text-emerald-400 tracking-tight">
          Md.Sujon{" "}
          <span className="text-orange-400 tracking-tight">Howlader</span>
        </h1>
        <p className="text-lg font-medium text-slate-300 tracking-tight">
          <strong>Full Stack Web Developer</strong>
        </p>
        <p className="text-base leading-relaxed text-slate-400">
          I craft elegant and responsive web applications using the MERN stack.
          My focus is on clean, maintainable code and delivering seamless,
          intuitive user experiences.
        </p>
        <Link
          href="/projects"
          className="inline-flex bg-emerald-900/10 border border-emerald-400 gap-2 font-bold px-4 py-2 mt-2 rounded-md text-emerald-400 hover:bg-emerald-900/20 transition duration-200 items-center"
        >
          View Projects <ArrowRightIcon />
        </Link>
      </div>
    </>
  );
}
