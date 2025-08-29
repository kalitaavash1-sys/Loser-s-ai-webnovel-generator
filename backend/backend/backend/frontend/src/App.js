import React, { useState } from "react";
import { getChapter } from "./api";

function App() {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState([]);

  const handleGenerate = async () => {
    const res = await getChapter(prompt, "my-story");
    setStory([...story, res.chapter]);
    setPrompt("");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">AI Web Novel Generator</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt..."
        className="w-full border p-2 my-2"
      />
      <button onClick={handleGenerate} className="bg-blue-500 text-white p-2 rounded">
        Generate Chapter
      </button>
      <div className="mt-4">
        {story.map((ch, i) => (
          <p key={i} className="border-b py-2">{ch}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
