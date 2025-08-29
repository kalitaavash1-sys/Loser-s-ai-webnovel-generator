let storyMemories = {};

export async function loadMemory(storyId) {
  return storyMemories[storyId] || "";
}

export async function saveMemory(storyId, newChapter) {
  storyMemories[storyId] = (storyMemories[storyId] || "") + "\n" + newChapter;
}
