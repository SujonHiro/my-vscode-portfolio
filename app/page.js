import HomeSection from "@/components/home/HomeSection";
import Info from "@/components/home/Info";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 mt-[110px]">
      <div>
        <HomeSection />
      </div>
      <div>
        <Info />
      </div>
    </div>
  );
}
