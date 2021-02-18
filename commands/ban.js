module.exports ={
    name: 'ban',
    description: "This cammand bans a member!",
   
    
       execute(client,message, args,Discord){
         const member = message.mentions.users.first();

         

         
    
                
         
      
      
      if(member){
          const memberTarger = message.guild.members.cache.get(member.id);
          memberTarger.ban();
          message.channel.send("User has been baned");
      }else{ 
          message.channel.send('Please specify that member!');
      }
         
    }
}