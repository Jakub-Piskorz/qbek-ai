require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const TOKEN = process.env.TOKEN;

client.login(TOKEN);

client.on("ready", () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

// ======== LOGGED IN =========

const prefix = "!";

client.on("message", (msg) => {
  // DM reaction
  if (msg.channel.type === "dm" && !msg.content.startsWith(prefix)) {
    if (!msg.author.client) {
      msg.reply(
        `Jestem botem, przestań do mnie pisać ${msg.author} =.=\n` +
          "Pisz do <@156086694611910656> ."
      );
      client.user.setUsername("qbek AI");
    } else return;
  }

  //Defining command structure
  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  //Commands

  if (command === "roles" && msg.channel.id === "756705273921405009") {
    const embed = new Discord.RichEmbed();
    embed.setTitle("Server roles");
    embed.setColor("BLUE");
    embed.setDescription(
      `React to this message with emoji to receive role:

      :computer: - Web dev speedrun
      :flag_gb: - English speedrun
      :flag_jp: - 日本語 speedrun`
    );
    msg.channel.send(embed);
  }
});
