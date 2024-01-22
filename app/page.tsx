"use client";
import { useState, useRef } from "react";
import { useCompletion } from "ai/react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Navbar from "@/components/Header/Navbar/Navbar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface Emoji {
  id: string;
  name: string;
  native: string;
  keywords: string[];
  version: number;
  emoticons?: string[];
}

export type StoryType = "Professional" | "Casual" | "Funny";

export default function Page() {
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
  const [flags, setFlags] = useState<Emoji[]>([]);
  const [story, setStory] = useState<StoryType>("Professional");
  const bioRef = useRef<null | HTMLDivElement>(null);

  const handleClick = (emoji: Emoji) => {
    setFlags((prevFlags) => {
      const updatedFlags = [...prevFlags, emoji];
      const inputFlags = updatedFlags.map((flag) => flag.native).join(", ");
      setInput(inputFlags);
      return updatedFlags;
    });
  };

  return (
    <div>
      <div className="shadow-sm bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Navbar />
        <h1 className="decoration-wavy text-2xl font-bold text-center tracking-wide pb-8">
          Travel Flag Emoji
        </h1>
      </div>

      <div className="flex flex-row w-full justify-center gap-9 p-6">
        <Picker data={data} onEmojiSelect={handleClick} />
        <div className="justify-center items-center">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-2 space-x-3">
              <p className="text-left font-medium">
                1️⃣ Drop in your job{" "}
                <span className="text-slate-500">(or your favorite hobby)</span>
                .
              </p>
            </div>
            <textarea
              value={input}
              onChange={handleInputChange}
              rows={4}
              className="w-full rounded-md border shadow-sm bg-white focus:border-black focus:ring-black p-2"
              placeholder={"e.g. Amazon CEO"}
              // disabled
            />

            <div className="flex mt-5 mb-2 items-center space-x-3">
              <p className="text-left font-medium">2️⃣ Select your story.</p>
            </div>
            <Select>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder={story} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    value="Professional"
                    onClick={() => setStory("Professional")}
                  >
                    Professional
                  </SelectItem>
                  <SelectItem value="Casual" onClick={() => setStory("Casual")}>
                    Casual
                  </SelectItem>
                  <SelectItem value="Funny" onClick={() => setStory("Funny")}>
                    Funny
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {!isLoading && (
              <button
                className="bg-black rounded-md text-white font-medium px-4 py-2 mt-8 hover:bg-black/80 w-full"
                type="submit"
              >
                Generate your bio &rarr;
              </button>
            )}
            {isLoading && (
              <button
                className="bg-black rounded-md text-white font-medium px-4 py-2 mt-8 hover:bg-black/80 w-full"
                disabled
              >
                {/* <LoadingDots color="white" style="large" /> */}
                Loading...
              </button>
            )}
          </form>

          <div className="space-y-10 my-10">
            {completion && (
              <>
                <h2
                  className="sm:text-xl text-xl font-bold text-slate-900 mx-auto"
                  ref={bioRef}
                >
                  Your generated bios
                </h2>
                <div className="space-y-4 flex flex-col items-center justify-start max-w-xl mx-auto">
                  {completion
                    .substring(completion.indexOf("1") + 3)
                    .split(/2\.|3\./)
                    .map((generatedBio) => {
                      return (
                        <div
                          className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                          onClick={() => {
                            navigator.clipboard.writeText(generatedBio);
                          }}
                          key={generatedBio}
                        >
                          <p>{generatedBio}</p>
                        </div>
                      );
                    })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
