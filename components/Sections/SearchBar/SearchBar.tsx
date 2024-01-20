"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
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

  const [isSwitchOn, setSwitchOn] = useState(false);

  const handleSwitchChange = (newState: boolean) => {
    setSwitchOn(newState);
    console.log(newState ? "Yes" : "No");
  };

  return (
    <div className="flex flex-row justify-between items-center px-5 pt-3">
      <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-5">
        {continents.map((continent, index) => (
          <p
            className="rounded-full border px-4 py-1 border-gray-900/5"
            key={index}
          >
            {continent}
          </p>
        ))}
      </div>

      <div className="flex w-full max-w-xs items-center space-x-2">
        <Input
          type="email"
          placeholder="Search country name"
          onChange={handleEmailChange}
        />
      </div>
    </div>
  );
}
