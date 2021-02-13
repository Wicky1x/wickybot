module.exports = {
    name: 'kick',
    permissions: ["KICK_MEMBERS", "BAN_MEMBERS"],
    description: "Kickt Mitglied!",
    execute(client, message, args, Discord){
  
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("Mitglied wurde erfolgreich entfernt!");
  
        }else{
            message.channel.send('Du kannst dieses Mitglied nicht entfernen!');
  
  
        }
  
    }
  }