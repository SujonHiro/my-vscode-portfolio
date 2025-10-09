import { fileTreeData } from "@/temporary/fileTreeData";
import {
  ChevronsLeftRight,
  CircleUser,
  CopyMinus,
  Ellipsis,
  File,
  FilePlus,
  FolderPlus,
  GitBranch,
  RotateCcw,
  SearchIcon,
  Settings,
} from "lucide-react";
import MenuList from "./Menu/MenuList";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex fixed top-11 left-0 bg-zinc-900 text-white w-1/4 h-[calc(100vh-76px)] border-r border-zinc-800 ">
      {/* Left icon bar */}
      <div className="bg-zinc-800 flex flex-col justify-between items-center py-4 w-12">
        <ul className="space-y-5">
          <li className="cursor-pointer hover:text-blue-400">
            <File />
          </li>
          <li className="cursor-pointer hover:text-blue-400">
            <SearchIcon />
          </li>
          <li className="cursor-pointer hover:text-blue-400">
            <GitBranch />
          </li>
        </ul>

        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-blue-400">
            <CircleUser />
          </li>
          <li className="cursor-pointer hover:text-blue-400">
            <Settings />
          </li>
          <li className="cursor-pointer hover:text-blue-400">
            <ChevronsLeftRight />
          </li>
        </ul>
      </div>

      {/* Right main sidebar content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Explorer Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800">
          <p className="text-sm font-semibold tracking-tight">Explorer</p>
          <div className="flex items-center gap-2">
            <button className="hover:bg-zinc-700 p-1 rounded">
              <FilePlus size={16} />
            </button>
            <button className="hover:bg-zinc-700 p-1 rounded">
              <FolderPlus size={16} />
            </button>
            <button className="hover:bg-zinc-700 p-1 rounded">
              <RotateCcw size={16} />
            </button>
            <button className="hover:bg-zinc-700 p-1 rounded">
              <CopyMinus size={16} />
            </button>
            <button className="hover:bg-zinc-700 p-1 rounded">
              <Ellipsis size={16} />
            </button>
          </div>
        </div>

        {/* File Tree List */}
        <div className="flex-1 overflow-y-auto px-3 py-2">
          <MenuList fileTreeData={fileTreeData} />
        </div>
      </div>
    </aside>
  );
}
