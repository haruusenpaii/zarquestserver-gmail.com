const api = require("../../easycode")

module.exports = { 
    config: {
        name: "volume",
        aliases: ["vol", "v"],
        description: "Adjusts the volume of the bot.",
        accessableby: "Member",
        category: "music",
        usage: "<input>"
    },
    run: async (bot, message, args) => {
        let volume = args[0]; 
    if(!volume) return message.channel.send("Voce nao inseriu o Volume!")
    api.volume(message,volume)
}     
}