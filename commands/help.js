module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
       .setColor('#03cffc')
       .setTitle('Help')
       .setURL('')
       .setDescription('Please read this to more understand our bot command.')
       .addFields(
           {name: '-PP', value: 'This command will give you and acreate size of you PP.'},
           {name: '-Youtube', value: 'This command will show you my Youtube channel.'},
           {name: '-Twitch', value: 'This command will show you my Twitch channel.'},
           {name: '-Ping', value: 'This command will make the bot reply Pong!'},
           {name: '-Invite', value: 'This command will give you a link to invite my bot.'},
           )
        .setFooter('Hope this helped you.');
       
       
       
       
       
       
       message.channel.send(newEmbed);

    }
} 