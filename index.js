require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

const prefix = "!";

bot.on("message", (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "test") {
    if (!args.length) {
      return msg.channel.send(`No arguments in your command, ${msg.author}!`);
    }
    msg.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }
});
