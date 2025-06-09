import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { getChatResponse } from "./services/groq";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;    //destructuring cauz body is sending more than just message
  const response = await getChatResponse(message);
  res.json({ response });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});