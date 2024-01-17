import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.LEPTON_API_TOKEN,
  baseURL: "https://mixtral-8x7b.lepton.run/api/v1/",
});

export async function getBio() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "say hello" }],
    model: "mixtral-8x7b",
  });
  const bio = completion.choices[0].message.content;
  return bio;
}

export async function GET() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "say hello" }],
      model: "mixtral-8x7b",
    });
    const bio = completion.choices[0].message.content;
    return NextResponse.json({ bio });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
