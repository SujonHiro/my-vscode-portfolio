"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { cn } from "@/utils/utils";
import Image from "next/image";
import { use } from "react";

const themes = [
  { id: "github", name: "GitHub Dark", preview: "#0d1117", accent: "#238636" },
  { id: "ayo", name: "Ayo Theme", preview: "#f9fafb", accent: "#2563eb" },
  {
    id: "vscode",
    name: "VS Code Theme",
    preview: "#1e1e1e",
    accent: "#569cd6",
  },
];
export default function ThemeCard() {
  const { setTheme, theme } = use(ThemeContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {themes.map((t) => (
        <div
          key={t.id}
          className="bg-[var(--color-card)] border border-[var(--color-accent)] rounded-md p-6 text-white space-y-6"
        >
          <div className="flex flex-col justify-center items-center space-y-2">
            <div>
              <Image
                src="/github-dark.webp"
                width={100}
                height={100}
                alt={t.name}
              />
            </div>
            <h2 className="text-slate-200 tracking-tight">{t.name}</h2>
            <span className="text-xs text-slate-200">{t.id}</span>
          </div>
          <div className="flex justify-between items-center mx-4 px-1 mt-5">
            <button
              onClick={() => setTheme(t.id)}
              className={cn(
                "mt-2  py-1 cursor-pointer rounded-md text-white text-center w-full",
                theme === t.id
                  ? "bg-[var(--color-accent)]"
                  : "bg-gray-700 hover:bg-gray-600"
              )}
            >
              {theme === t.id ? "Selected" : "Select Theme"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
