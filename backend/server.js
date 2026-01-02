import path from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

// Import projects router
import projectsRouter from "./routes/project.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ------------------- API ROUTES -------------------

// Test API
app.get("/api", (req, res) => {
  res.send("Backend is running");
});

// Projects API
app.use("/api/projects", projectsRouter);

// Chatbot API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const { msg } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are Saveri, a friendly full-stack developer." },
        { role: "user", content: msg }
      ],
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "AI error" });
  }
});

// ------------------- SERVE FRONTEND -------------------
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// ------------------- START SERVER -------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
