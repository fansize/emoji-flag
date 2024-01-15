import { Emoji } from "@/lib/types";
import Link from "next/link";

export default function EmojiCard(emoji: Emoji) {
  return (
    <>
      <Link
        key={emoji.id}
        href=""
        className="group rounded-lg border p-4 border-gray-900/5  dark:border-neutral-800 dark:bg-neutral-800/30 hover:shadow-lg hover:shadow-gray-300/50 hover:dark:shadow-neutral-800/50 active:shadow-sm transition-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-6xl">
            {String.fromCodePoint(emoji.code_point[0])}
            {String.fromCodePoint(emoji.code_point[1])}
          </p>
          <p className="text-sm">{emoji.description}</p>
        </div>
      </Link>
    </>
  );
}
