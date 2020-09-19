require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

// ======== LOGGED IN =========

const prefix = "!";

bot.on("message", (msg) => {
  if (msg.channel.type === "dm" && !msg.content.startsWith(prefix)) {
    if (!msg.author.bot) {
      msg.reply(
        `Jestem botem, przestań do mnie pisać ${msg.author} =.=\n` +
          "Pisz do <@156086694611910656> ."
      );
      bot.user.setUsername("qbek AI");
    } else return;
  }

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "test") {
    if (!args.length) {
      return msg.channel.send(`No arguments in your command, ${msg.author}!`);
    } else
      msg.channel.send(
        `Command name: ${command}\nArguments: ${args}\nChannel: ${msg.channel.type}`
      );
  }
});
