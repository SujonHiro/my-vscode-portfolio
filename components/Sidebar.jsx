import {
  ChevronsLeftRight,
  CircleUser,
  CopyMinus,
  Ellipsis,
  FilePlus,
  Files,
  FolderPlus,
  GitBranch,
  RotateCcw,
  SearchIcon,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <>
      <aside className="bg-slate-900 text-white  w-1/4 h-screen">
        {" "}
        <div className="flex w-full h-full">
          <div className="bg-slate-800/45 h-full flex flex-col  justify-between">
            <ul className="p-3 space-y-5">
              <li>
                <Files />
              </li>
              <li>
                <SearchIcon />
              </li>
              <li>
                <GitBranch />
              </li>
            </ul>
            <ul className=" space-y-3">
              <li className="px-3 py-1">
                <CircleUser />
              </li>
              <li className="px-3 py-1">
                <Settings />
              </li>
              <li className="bg-slate-500 flex justify-center">
                <ChevronsLeftRight />
              </li>
            </ul>
          </div>
          <div className="size-8 grow-2 overflow-hidden">
            <div className="flex gap-1 justify-center px-2 items-center">
              <p className="truncate">Folder name</p>
              <button className="hover:bg-slate-600 p-1 rounded-sm transition duration-200">
                <FilePlus size="18" />
              </button>
              <button className="hover:bg-slate-600 p-1 rounded-sm transition duration-200">
                <FolderPlus size="18" />
              </button>
              <button className="hover:bg-slate-600 p-1 rounded-sm transition duration-200">
                <RotateCcw size="18" />
              </button>
              <button className="hover:bg-slate-600 p-1 rounded-sm transition duration-200">
                <CopyMinus size="18" />
              </button>
              <button className="hover:bg-slate-600 px-1 rounded-sm transition duration-200">
                <Ellipsis />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
