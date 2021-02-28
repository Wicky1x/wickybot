module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    description: "Check the user balance",
    execute(client, message, args, Discord, cmd, profileData) {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('#d12828')
      .setDescription((`Your wallet bal is ${profileData.coins} ,you banks bal is ${profileData.bank}`))

      message.channel.send(newEmbed);
    },
  };
  