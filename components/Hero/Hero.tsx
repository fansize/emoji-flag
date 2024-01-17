"use client";
import HeroCarousel from "./HeroCarousel";

type Props = {
  countries: string[];
};

export default function Hero({ countries }: Props) {
  return (
    <div className="flex flex-col justify-start items-center py-6 gap-6">
      <h1 className="underline decoration-wavy text-xl font-bold text-center tracking-wide max-w-[700px]">
        Travel Flag Emoji
      </h1>
      <p>I have traveed to {countries}</p>
      <HeroCarousel />
    </div>
  );
}
