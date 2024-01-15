"use client";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
  const continents = [
    "All",
    "Africa",
    "The Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  const handleClick = async () => {};

  return (
    <>
      <div className="flex flex-row justify-between items-center px-5">
        <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-5">
          {continents.map((continent, index) => (
            <p
              className="rounded-full border px-4 py-1 border-gray-900/5 shadow-sm"
              key={index}
            >
              {continent}
            </p>
          ))}
        </div>

        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="email"
            placeholder="Search country name"
            onChange={handleEmailChange}
          />
          {/* <Button type="submit" onClick={handleClick}>
            <Search className="h-4 w-4 font-bold" />
          </Button> */}
        </div>
      </div>
    </>
  );
}
