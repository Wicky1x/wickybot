module.exports = {
    name: 'pp',
    description: "this is a pp command!",
    execute(client,message, args,Discord){
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#c6e2ff')
    .setTitle('Pp Size')
    .setURL('')
    .setDescription(`${message.author} Your pp size is 8======D`)

    message.channel.send(newEmbed);
    }
} 