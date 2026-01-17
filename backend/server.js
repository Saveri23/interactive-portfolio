import express from "express";
import cors from "cors";
import projectsRouter from "./routes/project.js";

const app = express();
const PORT = 5000;

/* ✅ Allow ONLY local frontend */
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

/* ✅ Test route */
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

/* ✅ Use projects router */
app.use("/api/projects", projectsRouter);

/* ✅ Start server */
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
