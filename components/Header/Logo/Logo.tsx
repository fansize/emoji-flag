import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size: string;
  withText?: boolean;
}

export default function Logo({ size, withText }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex flex-row justify-start items-center ",
        withText && "gap-4"
      )}
    >
      <div className={cn("relative", size)}>
        <Image src="/logo.svg" alt="Logo" fill priority />
      </div>
      {withText && <p className="text-2xl font-black">Emoji Flag</p>}
    </Link>
  );
}
