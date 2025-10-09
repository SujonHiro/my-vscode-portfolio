import { Bell, Check } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full bg-[#121212] border-t border-slate-900 text-white flex justify-between text-sm z-50">
      <Link
        href="#"
        className="flex items-center space-x-1 px-2 gap-2 hover:bg-slate-600 py-1 transition-colors duration-200"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="Bottombar_icon__Se3wv"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"></path>
        </svg>
        master
      </Link>

      <div className="flex items-center space-x-2">
        <Link
          href="#"
          className="flex items-center px-2 gap-2 py-1 tracking-tight hover:bg-slate-600 transition-colors duration-200"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            role="img"
            viewBox="0 0 24 24"
            className="Bottombar_icon__Se3wv"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"></path>
          </svg>
          Powered by Next.js
        </Link>

        <Link
          href="#"
          className="px-2 py-1 text-sm hover:bg-slate-600 transition-colors duration-200 inline-flex items-center gap-1"
        >
          <Check size="14" /> Prettier
        </Link>

        <Link
          href="#"
          className="px-1 py-1 hover:bg-slate-600 transition-colors duration-200"
        >
          <Bell size="14" />
        </Link>
      </div>
    </div>
  );
}
