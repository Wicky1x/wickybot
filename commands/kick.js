module.exports = {
  name: 'kick',
  description: "Kicks a Member!",
  execute(client, message, args, Discord){
 
      const member = message.mentions.users.first();
      if(member){
          const memberTarger = message.guild.members.cache.get(member.id);
          memberTarger.kick();
          message.channel.send("Member got succesfully kicked!");
 
      }else{
          message.channel.send('You cant kick the member!');
 
 
      }
 
  }
} 