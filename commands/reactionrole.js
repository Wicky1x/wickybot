module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message",
    async execute(client,message, args,Discord){
        const channel = '813812497705467925';
        const pinkfruit = message.guild.roles.cache.find(role => role.name === "Pink Fruit");
        const yellowfruit = message.guild.roles.cache.find(role => role.name === "Yellow Fruit");
        
        
        

        const yellowFruitEmoji = '🍋';
        const pinkFruitEmoji = '🍇';
        

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Choose your Fruit!')
        .setDescription('Choose your colur Fruit!\n\n'
            + `${yellowFruitEmoji} for yellow fruit\n`
            + `${pinkFruitEmoji} for orange fruit`);
           

            let MessageEmbed = await message.channel.send(embed);
            await MessageEmbed.react(yellowFruitEmoji);
           await MessageEmbed.react(pinkFruitEmoji);

           client.on('messageReactionAdd', async (reaction, user) => {
               if (reaction.message.partial) await reaction.message.fetch();
               if (reaction.partial) await reaction.fetch();
               if (user.bot) return;
               if (!reaction.message.guild) return;

               if (reaction.message.channel.id == channel) {
                  if (reaction.emoji.name === yellowFruitEmoji) {
                      await reaction.message.guild.members.cache.get(user.id).roles.add('813812636965535774');
                  } 
                  if (reaction.emoji.name === pinkFruitEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(['813812517561303060']);
                } 
               } else {
                   return;
               }
           });

           


           
           
           
         
         
         
         
    }
} 