"use client";
import { useState } from "react";
import Hero from "@/components/Hero/Hero";
import FlagGrid from "@/components/Sections/FlagGrid/FlagGrid";
import Navbar from "@/components/Navbar/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function Home() {
  const [countries, setCountries] = useState<string[]>([]);

  const handleClick = (country: string) => {
    setCountries((prevCountries) => {
      if (!prevCountries.includes(country)) {
        return [...prevCountries, country];
      }
      return prevCountries;
    });
  };

  return (
    <main>
      <div className="shadow-sm bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Navbar />
        <Hero countries={countries} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-[1500px] pt-5">
          <SearchBar />
          <FlagGrid onEmojiClick={handleClick} />
        </div>
      </div>
    </main>
  );
}
