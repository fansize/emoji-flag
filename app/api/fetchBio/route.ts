import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

if (!process.env.LEPTON_API_TOKEN) {
  throw new Error("Missing env var from Lepton.ai");
}

export const runtime = "edge";
export const dynamic = "force-dynamic";

const openai = new OpenAI({
  apiKey: process.env.LEPTON_API_TOKEN,
  baseURL: "https://mixtral-8x7b.lepton.run/api/v1/",
});

export async function POST(request: Request) {
  const { prompt } = (await request.json()) as {
    prompt?: string;
  };

  console.log("start:", prompt);

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  const response = await openai.chat.completions.create({
    model: "mixtral-8x7b",
    max_tokens: 300,
    stream: true,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
