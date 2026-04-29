
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Groq from 'groq-sdk';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message, lang } = req.body;

    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({ 
        error: 'GROQ_API_KEY is not configured in the environment.' 
      });
    }

    const systemPrompt = `You are an Election Explorer Assistant. 
    Your goal is to help Indian citizens understand the election process in a simple, engaging, and accurate way.
    The user is currently using the app in ${lang} language. Please respond in ${lang} if possible, or stay helpful.
    Keep answers concise and educational. If you don't know something for sure about specific documents, advise them to check the official ECI portal.`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: message,
        },
      ],
      model: 'llama-3.3-70b-versatile',
    });

    const reply = chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't process that.";
    res.json({ reply });
  } catch (error) {
    console.error('Groq API Error:', error);
    res.status(500).json({ error: 'Failed to fetch response from AI' });
  }
});

// For any other routes, serve index.html (SPA like behavior)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
