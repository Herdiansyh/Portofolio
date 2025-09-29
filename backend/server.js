import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Simpan percakapan multi-turn
let conversationHistory = [];

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;
  if (!userMessage) return res.status(400).json({ error: "Pesan kosong" });

  try {
    // Tambahkan pesan user ke history
    conversationHistory.push({
      role: "user",
      parts: [{ text: userMessage }],
    });

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        contents: conversationHistory,
      },
      {
        headers: {
          "x-goog-api-key": GEMINI_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    const aiReply =
      response.data?.candidates?.[0]?.content?.[0]?.text ||
      "Maaf, tidak ada jawaban dari API";

    // Tambahkan jawaban AI ke history
    conversationHistory.push({
      role: "model",
      parts: [{ text: aiReply }],
    });

    res.json({ reply: aiReply });
  } catch (err) {
    console.error("Server error:", err.response?.data || err.message);
    res
      .status(500)
      .json({ error: "Gagal mendapatkan jawaban dari Gemini API" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
