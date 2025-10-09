import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-8 mt-[130px] w-full">
        <h1 className=" text-emerald-400 text-4xl font-bold tracking-tight ">
          Contact Information
        </h1>
        <p className="text-base text-pretty leading-relaxed text-slate-300 max-w-3xl text-center">
          Feel free to reach out to me through any of the social platforms
          below. I'm always open to new opportunities and connections.
        </p>
        <div className="bg-[#121212] border border-gray-700 border-t-4 border-t-amber-600 mb-10 rounded-sm w-2/3">
          <Contact />
        </div>
      </div>
    </>
  );
}
