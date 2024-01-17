"use client";
import { Emoji } from "@/lib/types";

export default function EmojiCard(emoji: Emoji, selected: boolean) {
  return (
    <div
      className={`group rounded-lg border p-4 ${
        selected ? "border-gray-900/5" : "border-red-500"
      } hover:shadow-lg hover:shadow-gray-300/50 active:shadow-sm transition-all`}
    >
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-5xl">
          {String.fromCodePoint(emoji.code_point[0])}
          {String.fromCodePoint(emoji.code_point[1])}
        </p>
        <p className="text-sm line-clamp-1">{emoji.description}</p>
      </div>
    </div>
  );
}
