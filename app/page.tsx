"use client";
import { useState, useEffect, useRef } from "react";
import { useCompletion } from "ai/react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Image from "next/image";
import Navbar from "@/components/Header/Navbar/Navbar";
import { Card } from "@/components/ui/card";
import Footer_basic from "@/components/Footer/Footer_basic";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster, toast } from "react-hot-toast";

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
  const [story, setStory] = useState<string>("Professional");

  const basic_prompt2 = `Generate 3 twitter biographies with no hashtags and clearly labeled "1.", "2.", and "3.". 
  Only return these 3 twitter bios, nothing else. Make sure each generated biography is less than 160 characters, 
  has short sentences that are found in Twitter bios, and feel free to use this context as well: 
  
  Output:\n`;

  const basic_prompt1 = `Generate 3 succinct, attention-grabbing Twitter biographies for a traveler with no hashtags and clearly labeled "1.", "2.", and "3.". 
  Act as a social media specialist, the biographies should clearly convey the advantages and unique features of the travel and why it stands out from the rest.
  Make sure each generated biography is less than 160 characters.
  Please use this context as well:
  
  Output:\n
  `;

  useEffect(() => {
    const flagsString = flags.map((flag) => flag.native).join(" ");

    const prompt =
      story === "Professional"
        ? `${basic_prompt1} ${flagsString}`
        : `${basic_prompt2} ${flagsString}`;

    console.log(prompt);

    setInput(prompt);
  }, [story, flags]);

  const handleClick = (emoji: Emoji) => {
    setFlags((prevFlags) => {
      const updatedFlags = [...prevFlags, emoji];
      const inputFlags = updatedFlags.map((flag) => flag.native).join(", ");
      return updatedFlags;
    });
  };

  return (
    <div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{ duration: 2000 }}
      />

      <div className="flex flex-col items-center shadow-sm bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] px-6 pb-9">
        <Navbar />
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex flex-row items-center">
            <p className="text-neutral-600 font-bold">
              {`Generate your travel story by emoji flags with`}
            </p>
            <Image
              src="/openai-logo.jpeg"
              width={30}
              height={30}
              alt="OpenAI logo"
            />
            <p className="text-black font-bold">GPT-3.5</p>
          </div>
          {/* <p className="text-neutral-600 text-xl text-center">
            {`So users 😀 will engage with your site and convert. Something like
            "Stop wasting time. Use this temaplate."`}
          </p> */}

          <div className="flex flex-col md:flex-row gap-5">
            {completion
              .substring(completion.indexOf("1") + 3)
              .split(/2\.|3\./)
              .map((generatedBio) => {
                return (
                  <Card
                    className="flex justify-between space-x-4 w-full md:w-80 p-4 border bg-white rounded-xl shadow-sm hover:bg-gray-100 transition cursor-copy"
                    onClick={() => {
                      navigator.clipboard.writeText(generatedBio);
                      toast.success("Successfully Copied!");
                    }}
                    key={generatedBio}
                  >
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@Fmoji</h4>
                      {generatedBio ? (
                        <p className="text-sm">{generatedBio}</p>
                      ) : (
                        <p className="text-sm">
                          The React Framework – created and maintained by
                          @vercel.
                        </p>
                      )}
                      <div className="flex items-center pt-2">
                        <span className="text-xs text-muted-foreground">
                          999 Followers
                        </span>
                      </div>
                    </div>
                  </Card>
                );
              })}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full justify-center gap-9 px-6 pt-9">
        <Picker
          data={data}
          categories={["flags"]}
          navPosition={"none"}
          perLine={"12"}
          previewPosition={"top"}
          skinTonePosition={"none"}
          theme={"light"}
          onEmojiSelect={handleClick}
        />

        <div className="flex flex-col">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-2 space-x-3">
              <p className="text-left font-medium">
                1️⃣ Drop in your job{" "}
                <span className="text-slate-500">(or your favorite hobby)</span>
                .
              </p>
            </div>
            <textarea
              value={flags.map((flag) => flag.native).join(", ")}
              onChange={handleInputChange}
              rows={4}
              className="w-full rounded-md border shadow-sm bg-white focus:border-black focus:ring-black p-2"
              placeholder={"e.g. Amazon CEO"}
              disabled
            />

            <div className="flex mt-5 mb-2 items-center space-x-3">
              <p className="text-left font-medium">2️⃣ Select your story.</p>
            </div>
            <Select onValueChange={(value) => setStory(value)}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder={story} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Professional">Professional</SelectItem>
                  <SelectItem value="Casual">Casual</SelectItem>
                  <SelectItem value="Funny">Funny</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <div className="pt-10">
              {!isLoading && (
                <button
                  className="bg-black rounded-md text-white font-medium px-4 py-3 hover:bg-black/80 w-full"
                  type="submit"
                >
                  Generate your story &rarr;
                </button>
              )}
              {isLoading && (
                <button
                  className="bg-black rounded-md text-white font-medium px-4 py-3 hover:bg-black/80 w-full"
                  disabled
                >
                  {/* <LoadingDots color="white" style="large" /> */}
                  Loading...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer_basic />
    </div>
  );
}
