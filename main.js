const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require ('fs');

client.commands = new Discord.Collection();




client.on('guildMemberAdd', member =>{
    
    const channel = member.guild.channels.cache.find(channel => channel.name === "👋welcome");
    if(!channel) return;

    channel.send(`Welcome to Wicky's Place, ${member}, please read the rules in the rules channel.`)
});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){

    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
    
client.once('ready', () =>{ 
console.log('Wicky Knight is online!');
client.user.setActivity(`Wicky1x on Youtube`, {type: 'WATCHING'}) // PLAYING, WATCHING,  

});   


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping'){
    client.commands.get('ping').execute(message, args);
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } else if (command == 'wickyknight'){
        message.channel.send('Hi I am Wicky Knight, I will help to keep this server safe.')
    } else if (command == 'twitch'){
        message.channel.send('https://www.twitch.tv/wicky1x')
    } else if (command == 'twitter'){
        message.channel.send('https://twitter.com/Wicky1X')
    } else if (command == 'rules'){
        message.channel.send('We have not setup this command yet.')
    } else if (command == 'mom'){
        message.channel.send('I love my Mom!')
    } else if (command == 'verify'){
        message.channel.send('Please go to the Verify channel and follow the instructions.')
    } else if (command == 'dad'){
        message.channel.send('I love my Dad!')
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);  
    }

})


client.login('ODA4MzQ5ODIxNjI1ODI3MzI4.YCFQbw.PyWqw2gO1g1E221QiF29B-EOtbc');