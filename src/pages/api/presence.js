// Simple in‑module store
let active = {};

const INACTIVE_TIMEOUT_MS = 5 * 60 * 1000; // 5 minutes

export default function handler(req, res) {
  const now = Date.now();

  // Prune stale entries on every invocation
  for (const id in active) {
    if (active[id].timestamp < now - INACTIVE_TIMEOUT_MS) {
      delete active[id];
    }
  }

  if (req.method === "POST") {
    const { id, name } = req.body;
    if (!id || !name) {
      return res.status(400).json({ error: "id + name required" });
    }
    active[id] = { id, name, timestamp: now };
    return res.status(200).end();
  }

  if (req.method === "GET") {
    // return array of all active viewers
    return res.status(200).json(Object.values(active));
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}