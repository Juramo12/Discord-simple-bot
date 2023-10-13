const Discord = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
    ],
});

require('dotenv').config();

const token = process.env.TOKEN

client.on('ready', () => {
    console.log(`${client.user.username} is on!`);
});

client.on('messageCreate', message => {
    if (message.content.toLowerCase === 'hi') {
      message.reply('Hello!');
    }
  });


client.login(token)  