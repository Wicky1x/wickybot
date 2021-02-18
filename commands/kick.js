module.exports ={
    name: 'kick',
    description: "This cammand kicks a member!",
 permissions: ["ADMINISTRATOR","MANAGE_CHANNELS"],   
    
 execute(client,message, args,Discord){
      const member = message.mentions.users.first();
         

         
    
                
         
      
      
      if(member){
          const memberTarger = message.guild.members.cache.get(member.id);
          memberTarger.kick();
          message.channel.send("User has been kicked");
      }else{
          message.channel.send('Please specify that member!');
      }   
    }
}