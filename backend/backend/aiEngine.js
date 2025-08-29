import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateChapter(prompt, memory) {
  const response = await client.chat.completions.create({
    model: "gpt-5",
    messages: [
      { role: "system", content: "You are a master novelist AI..." },
      { role: "user", content: `Story so far: ${memory}` },
      { role: "user", content: `Continue story: ${prompt}` }
    ],
    temperature: 0.8
  });

  return response.choices[0].message.content;
}
