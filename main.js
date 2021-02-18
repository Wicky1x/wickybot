const Discord = require('discord.js');

const client = new Discord.Client();
const memberCounter = require('./counters/member-counter');

// //     client.user.setActivity(`Wicky1x on Youtube`, {type: 'WATCHING'}) // PLAYING, WATCHING,


const fs = require ('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

    client.user.setActivity(`Wicky1x on Youtube`, {type: 'WATCHING'}) // PLAYING, WATCHING, 



 client.on('guildMemberAdd', member =>{
    
      memberCounter(client);   
    
    
    const channel = member.guild.channels.cache.find(channel => channel.name === "👋welcome");
     if(!channel) return;

     channel.send(`Welcome to Wicky's Place, ${member}, please read the rules in the rules channel.`)
 
 
 
    });



    

    

 


client.login('ODA4MzQ5ODIxNjI1ODI3MzI4.YCFQbw.PyWqw2gO1g1E221QiF29B-EOtbc');