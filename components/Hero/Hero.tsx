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
      <div className="flex flex-col justify-start items-center p-10">
        {/* <HeroPill /> */}
        <h1 className="text-4xl font-bold text-center tracking-wide mb-6 max-w-[700px]">
          Travel Flag Emoji
        </h1>
      </div>
    </>
  );
}
