export async function getChapter(prompt, storyId) {
  const res = await fetch("http://localhost:5000/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, storyId })
  });
  return res.json();
}
