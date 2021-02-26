const Discord = require('discord.js');

exports.run = async(client, msg, args) => {

   const member = message.mentions.users.first();
   const memberTarget = msg.guild.members.cache.get(memberTarget.id);

  let avatarEmbed = new Discord.MessageEmbed()
  .setTitle('Your Avatar')
  .setImage(msg.memberTarget.displayAvatarURL())
  .setFooter('Watch Dog Avatar Command')
  .setTimestamp()
  message.channel.send(avatarEmbed);


}