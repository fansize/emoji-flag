"use client";
import { useState } from "react";
import { useCompletion } from "ai/react";
import Hero from "@/components/Hero/Hero";
import FlagGrid from "@/components/Sections/FlagGrid/FlagGrid";
import Navbar from "@/components/Header/Navbar/Navbar";
import SearchBar from "@/components/Sections/SearchBar/SearchBar";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [countries, setCountries] = useState("");
  const {
    completion,
    input,
    setInput,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: "/api/fetchBio",
  });

  const prompt = `${countries}${countries.slice(-1) === "." ? "" : "."}`;

  const handleClick = (country: string) => {
    setCountries((prevCountries: string) => {
      let newCountries;
      if (!prevCountries.includes(country)) {
        newCountries = prevCountries + country;
      } else {
        newCountries = prevCountries;
      }
      setInput(newCountries);
      return newCountries;
    });
  };

  return (
    <main>
      <div className="shadow-sm bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Navbar />

        <Hero countries={completion} />

        <div className="flex justify-center items-center pb-2">
          <form onSubmit={handleSubmit}>
            <input
              className="border rounded-lg p-1 outline"
              value={input}
              placeholder={input}
              onChange={handleInputChange}
            />
            <Button disabled={isLoading} type="submit">
              Submit
            </Button>
          </form>
        </div>
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
