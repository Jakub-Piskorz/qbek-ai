require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const TOKEN = process.env.TOKEN;

const autoReply = require("./commands/autoreply.js");

client.login(TOKEN);

client.on("ready", () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

// ======== LOGGED IN =========

const prefix = "!";

client.on("message", (msg) => {
  // DM reaction
  if (msg.channel.type === "dm" && !msg.content.startsWith(prefix)) {
    if (!msg.author.bot) {
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

    const emojiFilter = (reaction, user) => {
      return ["💻", "🇬🇧", "🇯🇵"].includes(reaction.emoji.name) || true;
    };

    msg.channel.send(embed).then((board) => {
      board
        .react("💻")
        .then(() => board.react("🇬🇧"))
        .then(() => board.react("🇯🇵"));
    });
  }
});
client.on("messageReactionAdd", (reaction, user) => {
  if (user.bot) return;
  if (
    reaction.message.author.bot &&
    reaction.message.channel.id === "756705273921405009"
  ) {
    const webDevRunner = reaction.message.guild.roles.find(
      (role) => role.name === "Web dev runner"
    );
    const englishRunner = reaction.message.guild.roles.find(
      (role) => role.name === "English runner"
    );
    const japaneseRunner = reaction.message.guild.roles.find(
      (role) => role.name === "日本語 runner"
    );
    const foundMember = reaction.message.guild.members.find(
      (m) => m.user.username === user.username
    );

    if (reaction.emoji.name === "💻") {
      foundMember.addRole(webDevRunner).catch((err) => console.error(err));
    } else if (reaction.emoji.name === "🇬🇧") {
      foundMember.addRole(englishRunner).catch((err) => console.error(err));
    } else if (reaction.emoji.name === "🇯🇵") {
      foundMember.addRole(japaneseRunner).catch((err) => console.error(err));
    }
  }
});

client.on("messageReactionRemove", (reaction, user) => {
  if (user.bot) return;
  if (
    reaction.message.author.bot &&
    reaction.message.channel.id === "756705273921405009"
  ) {
    const webDevRunner = reaction.message.guild.roles.find(
      (role) => role.name === "Web dev runner"
    );
    const englishRunner = reaction.message.guild.roles.find(
      (role) => role.name === "English runner"
    );
    const japaneseRunner = reaction.message.guild.roles.find(
      (role) => role.name === "日本語 runner"
    );
    const foundMember = reaction.message.guild.members.find(
      (m) => m.user.username === user.username
    );

    if (reaction.emoji.name === "💻") {
      foundMember.removeRole(webDevRunner).catch((err) => console.error(err));
    } else if (reaction.emoji.name === "🇬🇧") {
      foundMember.removeRole(englishRunner).catch((err) => console.error(err));
    } else if (reaction.emoji.name === "🇯🇵") {
      foundMember.removeRole(japaneseRunner).catch((err) => console.error(err));
    }
  }
});
