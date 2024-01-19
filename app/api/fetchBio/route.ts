import OpenAI from "openai";

if (!process.env.LEPTON_API_TOKEN) {
  throw new Error("Missing env var from Lepton.ai");
}

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.LEPTON_API_TOKEN,
  baseURL: "https://mixtral-8x7b.lepton.run/api/v1/",
});

export async function GET(request: Request) {
  //   const { prompt } = (await request.json()) as {
  //     prompt?: string;
  //   };

  //   if (!prompt) {
  //     return new Response("No prompt in the request", { status: 400 });
  //   }

  const prompt1 = "What is the weather like in Boston today?";

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt1 }],
    model: "mixtral-8x7b",
    max_tokens: 300,
  });

  const response = completion.choices[0].message.content;

  if (completion) {
    return new Response(JSON.stringify(completion), { status: 200 });
  } else {
    return new Response("Error", { status: 500 });
  }
}
