import { menu } from "@/temporary/manus";
import { Ellipsis, Minus, SearchIcon, SquaresExclude, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-slate-900 max-w-6xl mx-auto mt-4 text-white p-3 rounded-t-sm shadow-lg flex items-center justify-between">
      {/* Left: Logo + Menu */}
      <div className="flex items-center space-x-4">
        <Link href="/" className="w-6 h-6 inline-block">
          <svg fill="none" viewBox="0 0 100 100">
            {" "}
            <g mask="url(#vscode__a)">
              {" "}
              <path
                fill="#0065A9"
                d="M96.461 10.796 75.857.876a6.23 6.23 0 0 0-7.107 1.207l-67.451 61.5a4.167 4.167 0 0 0 .004 6.162l5.51 5.009a4.167 4.167 0 0 0 5.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 0 0-3.539-5.63Z"
              />{" "}
              <g filter="url(#vscode__b)">
                {" "}
                <path
                  fill="#007ACC"
                  d="m96.461 89.204-20.604 9.92a6.229 6.229 0 0 1-7.107-1.207l-67.451-61.5a4.167 4.167 0 0 1 .004-6.162l5.51-5.009a4.167 4.167 0 0 1 5.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 0 1-3.539 5.63Z"
                />{" "}
              </g>{" "}
              <g filter="url(#vscode__c)">
                {" "}
                <path
                  fill="#1F9CF0"
                  d="M75.858 99.126a6.232 6.232 0 0 1-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 0 1 7.108-1.21l20.6 9.908A6.25 6.25 0 0 1 100 16.413v67.174a6.25 6.25 0 0 1-3.541 5.633l-20.601 9.906Z"
                />{" "}
              </g>{" "}
              <path
                fill="url(#vscode__d)"
                fillRule="evenodd"
                d="M70.851 99.317a6.224 6.224 0 0 0 4.96-.19L96.4 89.22a6.25 6.25 0 0 0 3.54-5.633V16.413a6.25 6.25 0 0 0-3.54-5.632L75.812.874a6.226 6.226 0 0 0-7.104 1.21L29.294 38.04 12.126 25.01a4.162 4.162 0 0 0-5.317.236l-5.507 5.009a4.168 4.168 0 0 0-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 0 0 .004 6.162l5.507 5.009a4.162 4.162 0 0 0 5.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 0 0 2.143 1.4ZM74.954 27.3 45.048 50l29.906 22.701V27.3Z"
                clipRule="evenodd"
                opacity=".25"
                style={{ mixBlendMode: "overlay" }}
              />{" "}
            </g>{" "}
          </svg>
        </Link>

        <ul className="flex space-x-2">
          {menu.map((item) => (
            <li
              key={item.id}
              className="hover:bg-slate-600 px-2 rounded-sm transition-all duration-300"
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <button className="hover:bg-slate-600 px-2 rounded-sm">
          <Ellipsis />
        </button>
      </div>

      <div className="flex-1 mx-4 relative">
        <button className="w-5/7 border border-slate-500 bg-slate-700/80 px-2 py-2 rounded-lg text-sm  transition-all duration-300 inline-flex items-center gap-2 cursor-pointer hover:bg-slate-700">
          <SearchIcon size="16" /> Portfolio
        </button>
      </div>

      <div>
        <button className=" px-3 py-1 rounded-sm text-sm hover:bg-slate-700 transition-all duration-300">
          <Minus />
        </button>
        <button className=" px-3 py-1 rounded-sm text-sm hover:bg-slate-700 transition-all duration-300">
          <SquaresExclude />
        </button>
        <button className=" px-3 py-1 rounded-sm text-sm hover:bg-red-700 transition-all duration-300">
          <X />
        </button>
      </div>
    </header>
  );
}
