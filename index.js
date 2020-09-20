require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const TOKEN = process.env.TOKEN;

client.login(TOKEN);

client.on("ready", async () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

// ======== LOGGED IN =========

const prefix = "!";

client.on("message", async (msg) => {
  if (msg.channel.type === "dm" && !msg.content.startsWith(prefix)) {
    if (!msg.author.client) {
      msg.reply(
        `Jestem clientem, przestań do mnie pisać ${msg.author} =.=\n` +
          "Pisz do <@156086694611910656> ."
      );
      client.user.setUsername("qbek AI");
    } else return;
  }

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "test") {
    if (!args.length) {
      return msg.channel.send(`No arguments in your command, ${msg.author}!`);
    } else
      msg.channel.send(
        `Command name: ${command}\nArguments: ${args}\nChannel: ${msg.channel}`
      );
  } else if (command === "channel" && msg.channel.id === "756705273921405009") {
    return msg.channel.send(msg.channel.id);
  }
});

client.on("messageReactionAdd", async (react, user) => {
  console.log("lol1");
});
client.on("messageReactionRemove", async (react, user) => {
  console.log("lol2");
});
