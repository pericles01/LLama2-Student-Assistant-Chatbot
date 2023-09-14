import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  organization: "org-0nmrFWw6wSm6xIJXSbx4FpTw",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.post("/", async (request, response) => {
  const { chats } = request.body;

  const result = await openai.createChatCompletion({
    model: "gpt-3.5",
    messages: [
      {
        role: "system",
        content: "You are a assistant bot. You can help with you can help with questions relative to studies at the THM",
      },
      ...chats,
    ],
  });

  response.json({
    output: result.data.choices[0].message,
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
