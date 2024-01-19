import OpenAI from "openai";

if (!process.env.LEPTON_API_TOKEN) {
  throw new Error("Missing env var from Lepton.ai");
}
export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.LEPTON_API_TOKEN,
  baseURL: "https://mixtral-8x7b.lepton.run/api/v1/",
});

const handler = async (request: Request): Promise<Response> => {
  const { prompt } = (await request.json()) as {
    prompt?: string;
  };

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "mixtral-8x7b",
    max_tokens: 300,
  });

  console.log(completion.choices[0]);
  return new Response(completion.choices[0].message.content, { status: 200 });
};

export default handler;
