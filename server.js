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
    const textLower = message.toLowerCase();

    // Built-in Basic Fallback Logic
    const getFallbackResponse = (query, language) => {
      const responses = {
        en: [
          { keywords: ['age', 'old'], response: "In India, you must be at least 18 years old to vote." },
          { keywords: ['booth', 'where'], response: "You can find your polling booth on the NVSP (National Voter's Service Portal) website." },
          { keywords: ['id', 'document'], response: "You can use your Voter ID (EPIC), Aadhar Card, PAN Card, or Driving License as proof at the polling booth." },
          { keywords: ['evm', 'machine'], response: "EVM stands for Electronic Voting Machine. It is used to record votes securely." }
        ],
        hi: [
          { keywords: ['उम्र', 'साल'], response: "भारत में वोट देने के लिए आपकी आयु कम से कम 18 वर्ष होनी चाहिए।" }
        ]
        // Add more local fallback mappings as needed
      };

      const langScope = responses[language] || responses['en'];
      const match = langScope.find(r => r.keywords.some(kw => query.includes(kw)));
      return match ? match.response : null;
    };

    if (!process.env.GROQ_API_KEY || process.env.GROQ_API_KEY === 'your_groq_api_key_here') {
      const fallback = getFallbackResponse(textLower, lang);
      if (fallback) {
        return res.json({ reply: fallback + " (Note: This is a built-in basic response as AI is not configured)" });
      }
      return res.json({
        reply: "AI is currently offline. Please try asking about 'age', 'polling booth', or 'required documents'. Or connect your Groq API key!"
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
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0:${PORT}`);
});
