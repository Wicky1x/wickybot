const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const memberCounter = require('./counters/member-counter');

const fs = require ('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})





client.on('guildMemberAdd', member =>{
    memberCounter(client);   
    const channel = member.guild.channels.cache.find(channel => channel.name === "👋welcome");
    if(!channel) return;
    channel.send(`Welcome to Wicky's Place, ${member}, please read the rules in the rules channel.`)
})


client.login(process.env.DISCORD_TOKEN);