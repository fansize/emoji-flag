"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import BioCard from "@/components/Hero/BioCard";
import { BioCardProps } from "@/components/Hero/BioCard";

type Props = {
  bioCards: BioCardProps[];
};

export default function HeroCarousel({ bioCards }: Props) {
  return (
    <Carousel
      className="w-full"
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

export function CarouselDemo({ bioCards }: Props) {
  return (
    <Carousel className="w-full max-w-xl">
      <CarouselContent>
        {bioCards.map((bioCard, index) => (
          <CarouselItem key={index}>
            <div className="border border-slate-200 bg-white h-[200px] rounded-lg flex flex-col justify-center items-center">
              <BioCard {...bioCard} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
