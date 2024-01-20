"use client";
import { useEffect, useState } from "react";
import HeroCarousel from "@/components/Hero/HeroCarousel";
import { getBios } from "@/app/api/getPost/post";
import { CarouselDemo } from "@/components/Hero/HeroCarousel";
import { BioCardProps } from "@/components/Hero/BioCard";

type Props = {
  countries: string;
};

export default function Hero({ countries }: Props) {
  const params = new URLSearchParams({
    countries: JSON.stringify(countries),
  });

  const [isLoading, setIsLoading] = useState(true);
  const [bioProps, setBioProps] = useState<BioCardProps[]>([]);

  useEffect(() => {
    let cancel = false;
    getBios().then((data) => {
      if (!cancel) {
        const updatedData = data.map((bio) => {
          return {
            ...bio,
            bio: countries,
          };
        });
        console.log(updatedData);
        setBioProps(updatedData);
        setIsLoading(false);
      }
    });
    return () => {
      cancel = true;
    };
  }, [countries]);

  return (
    <div className="flex flex-col justify-start items-center p-6 gap-6">
      <h1 className="underline decoration-wavy text-xl font-bold text-center tracking-wide max-w-[700px]">
        Travel Flag Emoji
      </h1>
      <CarouselDemo bioCards={bioProps} />
    </div>
  );
}
