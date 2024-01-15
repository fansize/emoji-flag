"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import HeroPill from "./HeroPill";
import BackgroundSquares from "../Backgrounds/BackgroundSquares";
import HeroCarousel from "./HeroCarousel";
import Link from "next/link";
import { config } from "@/lib/config";
import { Input } from "@/components/ui/input";

export default function Hero() {
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  const handleClick = async () => {};

  return (
    <>
      <div className="flex flex-col justify-start items-center p-6 gap-6">
        <h1 className="text-xl font-bold text-center tracking-wide max-w-[700px]">
          Travel Flag Emoji
        </h1>
        <HeroCarousel />
      </div>
    </>
  );
}
