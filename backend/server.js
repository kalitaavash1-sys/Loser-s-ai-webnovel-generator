import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { generateChapter } from "./aiEngine.js";
import { saveMemory, loadMemory } from "./memoryManager.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/generate", async (req, res) => {
  const { prompt, storyId } = req.body;

  try {
    const memory = await loadMemory(storyId);
    const chapter = await generateChapter(prompt, memory);

    await saveMemory(storyId, chapter);
    res.json({ chapter });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Backend running on port 5000"));
