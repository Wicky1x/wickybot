module.exports = {
    name: 'clear',
    description: "Clear messages",
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],
    
    
    async execute(message, args){
       if(!args[0]) return message.reply("Please enter the amount of messages that you wanna clear!");
       if(isNaN(args[0])) return message.reply("Please enter the real number");

       if(args[0] > 100) return message.reply("You can not clear more than 100 messages!");
       if(args[0] < 1) return message.reply("You must clear more than 1 message!")

       await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
           message.channel.bulkDelete(messages);
       });       
    }
}