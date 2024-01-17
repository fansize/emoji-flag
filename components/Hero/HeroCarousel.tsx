"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import BioCard from "./BioCard";

export default function HeroCarousel() {
  return (
    <Carousel
      className="mt-2 w-full"
      plugins={[
        Autoplay({
          delay: 7000,
        }),
        WheelGesturesPlugin(),
      ]}
      opts={{
        loop: true,
        align: "center",
      }}
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="lg:basis-1/3 p-2">
            <div className="border border-slate-200 bg-white h-[250px] rounded-lg flex flex-col justify-center items-center">
              <BioCard />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
