// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connectDB } = require('./utils/db');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/pdf', require('./routes/pdfRoutes'));
app.use('/api/chatbot', require('./routes/chatbotRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
});// src/pages/index.jsx
import { useState } from 'react';
import { uploadPDF, askChatbot } from '../services/api';

export default function Home() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState('');

  const handleUpload = async () => {
    const result = await uploadPDF(file);
    setResponse(result.text);
  };

  return (
    <div>
      <h1>Nexus Ultra AI PDF Toolkit</h1>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Process PDF</button>
      <p>{response}</p>
    </div>
  );
}// ai-modules/chatbot/index.js
const OpenAI = require('openai');
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function ask(question) {
  const completion = await client.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: question }]
  });
  return completion.choices[0].message.content;
}

module.exports = { ask };