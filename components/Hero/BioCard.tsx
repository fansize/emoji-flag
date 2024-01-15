import Image from "next/image";
import Logo from "@/components/Logo/Logo";
import HeroPill from "@/components/Hero/HeroPill";

export default function BioCard() {
  return (
    <div className="flex flex-row justify-center items-center gap-4 p-4">
      <div className="rounded-full p-5 border-2 outline outline-offset-2 outline-2 outline-white bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500">
        <Logo size="h-9 w-9" />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <HeroPill />
        <p className="text-sm text-slate-500">
          2,972 posts 154K followers 877 following
        </p>
        <p>🌍✈️ 环游者</p>
        <p>芬兰🇫🇮、中国🇨🇳、波兰🇵🇱</p>
        <p>美食探险者🍜 | 欧洲环游中🗺️ | #Wanderlust 🌟</p>
      </div>
    </div>
  );
}
