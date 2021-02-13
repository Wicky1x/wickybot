module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(messages, args){
       const member = message.mentions.users.first();
       if(member){
          const memberTarger = message.guild.members.cache.get(member.id);
          memberTarger.kick();
          message.channel.send("User has been kicked");    
        
        message.channel.send('You couldt kick that member');
       }    
    }
}