import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Groq from 'groq-sdk';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Initialize Groq
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// API route
app.post('/api/chat', async (req, res) => {
  try {
    const { message, lang } = req.body;

    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({
        error: 'GROQ_API_KEY is not configured in the environment.',
      });
    }

    const systemPrompt = `You are an Election Explorer Assistant.
Your goal is to help Indian citizens understand the election process in a simple, engaging, and accurate way.
The user is currently using the app in ${lang} language. Please respond in ${lang} if possible.
Keep answers concise and educational. If unsure, advise checking the official ECI portal.`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      model: 'llama-3.3-70b-versatile',
    });

    const reply =
      chatCompletion.choices[0]?.message?.content ||
      "I'm sorry, I couldn't process that.";

    res.json({ reply });
  } catch (error) {
    console.error('Groq API Error:', error);
    res.status(500).json({
      error: 'Failed to fetch response from AI',
    });
  }
});

// ✅ FIXED SPA fallback (Express 5 compatible)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});