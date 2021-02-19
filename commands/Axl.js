module.exports = {
    name: 'axl',
    description: "this is a axl command!",
    execute (client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
       .setColor('#452fc2')
       .setTitle('Axl')
       .setURL('https://bit.ly/2Zvjkun')
       .setDescription('This is my dog Axl he is the best do u like him.')
       .setImage('https://bit.ly/2Zvjkun')
       
        
       

       
       
       
       
       
       
       message.channel.send(newEmbed);


    }
} 