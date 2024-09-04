import express from "express";
import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = +process.env.PORT;
const BOT_TOKEN = process.env.BOT_TOKEN;
const APP_URL = process.env.APP_URL;

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Handle /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Send a message to launch the mini-app
  bot.sendMessage(chatId, "Click the button below to launch Endubis Wallet.", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open Endubis Wallet",
            web_app: {
              url: APP_URL,
            },
          },
        ],
      ],
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
