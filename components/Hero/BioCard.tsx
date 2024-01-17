"use client";
import Logo from "@/components/Header/Logo/Logo";

export type BioCardProps = {
  name?: string;
  bio?: string;
};

export default function BioCard(bioInfo: BioCardProps) {
  const { name = "Lang", bio = "Haha" } = bioInfo;

  return (
    <div className="flex flex-row justify-center items-center gap-4 p-4">
      <div className="rounded-full p-5 border-2 outline outline-offset-2 outline-2 outline-white bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500">
        <Logo size="h-9 w-9" />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <p className="text-sm text-slate-500">
          2,972 posts 154K followers 877 following
        </p>
        <p>{name}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
}
