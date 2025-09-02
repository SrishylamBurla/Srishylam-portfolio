import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import subscribeRoute from "./routes/subscribeRoute.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'https://srishylam-portfolio-2722.vercel.app/', // or your deployed frontend
//   credentials: true,               // <- required for cookies/auth headers
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}))

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ DB connection error:", err));

app.get("/", (req, res) => {
  res.send("API running...");
});

app.use("/api", subscribeRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
