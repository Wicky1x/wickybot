const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const fs = require ('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){

    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('guildMemberAdd', member =>{

      if(command.permissions.length){
        let invalidPerms = []
        for(const perm of command.permissions){
          if(!validPermissions.includes(perm)){
            return console.log(`Invalid Permissions ${perm}`);
          }
          if(!Message.member.hasPermission(perm)){
            invalidPerms.push(perm);
            break;
          }
        }
        if (invalidPerms.length){
          return Message.channel.send(`Missing Permissions: ${invalidPerms}`);
        }
      }
       
    const channel = member.guild.channels.cache.find(channel => channel.name === "👋welcome");
    if(!channel) return;

    channel.send(`Welcome to Wicky's Place, ${member}, please read the rules in the rules channel.`)
});
    
client.on('ready', () =>{ 
    console.log('Wicky Knight is online!');
    client.user.setActivity(`Wicky1x on Youtube`, {type: 'WATCHING'}) // PLAYING, WATCHING,  
});   

client.on('message', message => {
   

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
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);  
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if (command == 'message'){
        client.commands.get('clear').execute(message, args);
    }
});


client.login('ODA4MzQ5ODIxNjI1ODI3MzI4.YCFQbw.PyWqw2gO1g1E221QiF29B-EOtbc');