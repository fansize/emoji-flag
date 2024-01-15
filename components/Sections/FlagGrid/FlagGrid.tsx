import { Emoji } from "@/lib/types";
import EmojiCard from "@/components/FlagCard/FlagCard";
import emoji_flags from "@/data/emoji_flags.json";

export default function FlagGrid() {
  return (
    <div className="flex flex-row justify-center p-5">
      <div className="w-full gap-3 grid grid-cols-4 lg:grid-cols-8 md:grid-cols-4">
        {emoji_flags.map((emoji: Emoji) => (
          <EmojiCard key={emoji.id} {...emoji} />
        ))}
      </div>
    </div>
  );
}
