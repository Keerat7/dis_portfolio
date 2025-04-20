const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const INACTIVE_TIMEOUT_MS = 5 * 60 * 1000; // 5 minutes
const CLEANUP_INTERVAL_MS = 60 * 1000;     // 1 minute

const active = Object.create(null);

// Periodically prune stale entries
setInterval(() => {
  const cutoff = Date.now() - INACTIVE_TIMEOUT_MS;
  for (let id in active) {
    if (active[id].timestamp < cutoff) {
      delete active[id];
    }
  }
}, CLEANUP_INTERVAL_MS);

// Client “heart‐beat” endpoint
app.post("/api/presence", (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) return res.sendStatus(400);
  active[id] = { id, name, timestamp: Date.now() };
  res.sendStatus(200);
});

// List all active viewers
app.get("/api/presence", (req, res) => {
  res.json(Object.values(active));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Presence server listening on ${PORT}`));
