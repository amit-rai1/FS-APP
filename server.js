import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

// Serve all static frontend files
app.use(express.static(path.join(__dirname, "dist")));

app.use(cors());
app.use(express.json({ limit: "1mb" }));

// ── SPA fallback (for client-side routing) ──
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Static server running on port ${PORT}`);
});
