import { FollowerIcon } from "@/utils/Icon";
import { AtSign, BookMarked } from "lucide-react";
import Image from "next/image";

export default function Github({ profile }) {
  return (
    <>
      <div className="bg-zinc-900 border border-zinc-500 p-5 flex flex-col justify-center items-center rounded-xl">
        <div className="w-28 rounded-full border-2 border-emerald-400 overflow-hidden">
          <Image
            src={profile?.avatar_url || "/sujon.jpg"}
            className="size-28 object-cover rounded-full"
            width={1000}
            height={800}
            alt={profile.name}
          />
        </div>
        <div>
          <h2 className="text-white text-2xl font-medium inline-flex gap-2 items-center mt-10">
            <AtSign size="22" className="text-emerald-400 stroke-3" />{" "}
            {profile.login}
          </h2>
          <div className="h-[1.5px] bg-amber-300 w-10 ml-auto" />
        </div>
        <div className="mt-15 flex items-center gap-10">
          <h2 className="inline-flex items-center gap-2 text-emerald-400">
            <BookMarked size="15" />
            {profile.public_repos} repositories
          </h2>
          <h2 className="inline-flex items-center gap-2 text-emerald-400">
            <FollowerIcon />
            {profile.followers} followers
          </h2>
        </div>
      </div>
    </>
  );
}
