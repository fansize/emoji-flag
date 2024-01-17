"use client";
import { Emoji } from "@/lib/types";
import EmojiCard from "@/components/Sections/FlagGrid/FlagCard";
import emoji_flags from "@/data/emoji_flags.json";

export default function FlagGrid({
  onEmojiClick,
}: {
  onEmojiClick: (emoji: string) => void;
}) {
  return (
    <div className="flex flex-row justify-center p-5">
      <div className="w-full gap-3 grid grid-cols-4 lg:grid-cols-8 md:grid-cols-4">
        {emoji_flags.map((emoji: Emoji) => (
          <button key={emoji.id} onClick={() => onEmojiClick(emoji.comments)}>
            <EmojiCard {...emoji} />
          </button>
        ))}
      </div>
    </div>
  );
}
