import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { Emoji } from "@/lib/types";

export async function GET() {
  try {
    // Read the data from the file
    const dataText = fs.readFileSync(
      path.join(process.cwd(), "app/api/convert/emoji_data.txt"),
      "utf-8"
    );

    // Split the data into lines
    const lines = dataText.trim().split("\n");

    // Map each line to an Emoji object
    const emojis: Emoji[] = lines.map((line, index) => {
      const [code_point, type_field_full, ...descriptionParts] =
        line.split(";");
      const [type_field, emojiAndDescription] = type_field_full.split("#");
      const [emoji, descriptionAndVersion, flagtitle, ...countryParts] =
        emojiAndDescription.trim().split(" ");
      const country = countryParts.join(" ");
      const unicodePoints = code_point
        .trim()
        .split(" ")
        .map((cp) => {
          const parsed = parseInt(cp, 16);
          if (isNaN(parsed)) {
            throw new Error(`Invalid code point: ${cp}`);
          }
          return parsed;
        });
      return {
        id: index + 1,
        code_point: unicodePoints,
        type_field: type_field.trim(),
        description: country,
        comments: emoji.trim(),
      };
    });

    console.log(emojis.length);

    return NextResponse.json(emojis);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
