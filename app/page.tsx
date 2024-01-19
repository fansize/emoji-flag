"use client";
import { useState } from "react";
import Hero from "@/components/Hero/Hero";
import FlagGrid from "@/components/Sections/FlagGrid/FlagGrid";
import Navbar from "@/components/Header/Navbar/Navbar";
import SearchBar from "@/components/Sections/SearchBar/SearchBar";

export default function Home() {
  const [countries, setCountries] = useState("");
  const [bio, setBio] = useState("");
  const [generatedBios, setGeneratedBios] = useState<string>("");

  const prompt = `Generate 3 twitter biographies with no hashtags and clearly labeled "1.", "2.", and "3.". 
    Only return these 3 twitter bios, nothing else. Make sure each generated biography is less than 300 characters, 
    has short sentences that are found in Twitter bios, and feel free to use this context as well: 
    ${bio}${bio.slice(-1) === "." ? "" : "."}`;

  const generateBio = async (e: any) => {
    e.preventDefault();
    setGeneratedBios("");

    const response = await fetch("/api/fetchBio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }
  };

  const handleClick = (country: string) => {
    setCountries((prevCountries: string) => {
      if (!prevCountries.includes(country)) {
        return prevCountries + country;
      }
      return prevCountries;
    });
  };

  return (
    <main>
      <div className="shadow-sm bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Navbar />
        <button
          className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
          onClick={(e) => generateBio(e)}
        >
          Generate your bio &rarr;
        </button>
        <Hero countries={generatedBios} />
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
