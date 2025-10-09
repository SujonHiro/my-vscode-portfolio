"use client";
import { File, Folder, FolderOpen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MenuItem({ fileFolderItem, depth = 0 }) {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren =
    fileFolderItem.type === "folder" && fileFolderItem.children?.length > 0;
  const indent = depth * 16;

  const getIcon = () => {
    if (fileFolderItem.type === "folder")
      return isOpen ? (
        <FolderOpen size={18} className="text-emerald-500" />
      ) : (
        <Folder size={18} className="text-emerald-400" />
      );
    return <File size={16} className="text-blue-400" />;
  };

  return (
    <>
      {fileFolderItem.type === "folder" ? (
        <div
          className="flex items-center cursor-pointer hover:bg-slate-800 py-1 "
          style={{ paddingLeft: indent }}
          onClick={() => hasChildren && setIsOpen(!isOpen)}
        >
          {getIcon()}
          <span className="ml-2 text-sm">{fileFolderItem.name}</span>
        </div>
      ) : (
        <Link
          href={fileFolderItem.to}
          className="flex items-center cursor-pointer hover:bg-slate-800 py-1 "
          style={{ paddingLeft: indent }}
          prefetch={false}
        >
          {getIcon()}
          <span className="ml-2 text-sm">{fileFolderItem.name}</span>
        </Link>
      )}

      {hasChildren &&
        isOpen &&
        fileFolderItem.children.map((child) => (
          <MenuItem key={child.id} fileFolderItem={child} depth={depth + 1} />
        ))}
    </>
  );
}
