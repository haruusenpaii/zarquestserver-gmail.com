const api = require("../../easycode")

module.exports = { 
    config: {
        name: "leave",
        aliases: ["lev", "stop"],
        description: "Makes the bot leave the voice channel.",
        accessableby: "Member",
        category: "music",
    },
    run: async (bot, message, args) => {
        api.fim(message)
    }      
}
