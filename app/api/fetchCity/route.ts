import OpenAI from "openai";

if (!process.env.LEPTON_API_TOKEN) {
  throw new Error("Missing env var from Lepton.ai");
}

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.LEPTON_API_TOKEN,
  baseURL: "https://mixtral-8x7b.lepton.run/api/v1/",
});

export async function GET() {
  const messages = [
    { role: "user", content: "What's the weather like in Helsinki today?" },
  ];
  const tools = [
    {
      type: "function",
      function: {
        name: "get_current_weather",
        description: "Get the current weather in a given location",
        parameters: {
          type: "object",
          properties: {
            location: {
              type: "string",
              description: "The city and state, e.g. San Francisco, CA",
            },
            unit: { type: "string", enum: ["celsius", "fahrenheit"] },
          },
          required: ["location"],
        },
      },
    },
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages as OpenAI.ChatCompletionMessageParam[],
    tools: tools as OpenAI.ChatCompletionTool[],
    tool_choice: "auto",
  });

  if (response) {
    return new Response(JSON.stringify(response), { status: 200 });
  } else {
    return new Response("Error", { status: 500 });
  }
}
