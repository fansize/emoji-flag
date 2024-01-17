"use client";
import { useEffect, useState } from "react";
import HeroCarousel from "@/components/Hero/HeroCarousel";
import { getBios } from "@/app/api/getPost/post";
import { CarouselDemo } from "@/components/Hero/HeroCarousel";
import { BioCardProps } from "@/components/Hero/BioCard";

type Props = {
  countries: string[];
};

export default function Hero({ countries }: Props) {
  const params = new URLSearchParams({
    countries: JSON.stringify(countries),
  });

  const [isLoading, setIsLoading] = useState(true);
  const [bioProps, setBioProps] = useState<BioCardProps[]>([]);

  // useEffect(() => {
  //   let cancel = false;
  //   const fetchBio = async () => {
  //     const response = await fetch("/api/lepton");
  //     if (!cancel) {
  //       const data = await response.json();
  //       if (data.bio) {
  //         setBioProps(data.bio);
  //       }
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchBio();
  //   return () => {
  //     cancel = true;
  //   };
  // }, []);

  useEffect(() => {
    let cancel = false;
    getBios().then((data) => {
      if (!cancel) {
        setBioProps(data);
        setIsLoading(false);
      }
    });
    return () => {
      cancel = true;
    };
  }, []);

  return (
    <div className="flex flex-col justify-start items-center py-6 gap-6">
      <h1 className="underline decoration-wavy text-xl font-bold text-center tracking-wide max-w-[700px]">
        Travel Flag Emoji
      </h1>
      <p>I have traveed to {countries}</p>
      <CarouselDemo bioCards={bioProps} />
    </div>
  );
}
