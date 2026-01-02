import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

import projectsRouter from "./routes/project.js";

dotenv.config();

const app = express();

// -------- MIDDLEWARE --------
app.use(cors({
  origin: "https://interactive-portfolio-e41yvt9qj-saveri23s-projects.vercel.app",
  methods: ["GET", "POST"],
}));
app.use(express.json());

// -------- TEST ROUTE --------
app.get("/api", (req, res) => {
  res.send("Backend is running 🚀");
});

// -------- PROJECTS API --------
app.use("/api/projects", projectsRouter);

// -------- OPENAI SETUP (SAFE) --------
let openai = null;

if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  console.log("✅ OpenAI configured");
} else {
  console.log("⚠️ OPENAI_API_KEY not set");
}

// -------- CHAT API --------
app.post("/api/chat", async (req, res) => {
  try {
    if (!openai) {
      return res.json({ reply: "AI not configured yet" });
    }

    const { msg } = req.body;

    if (!msg) {
      return res.status(400).json({ reply: "Message is required" });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are Saveri, a friendly full-stack developer." },
        { role: "user", content: msg },
      ],
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("Chat error:", error.message);
    res.status(500).json({ reply: "AI error" });
  }
});

// -------- START SERVER --------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
