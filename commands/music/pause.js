const api = require("../../easycode")

module.exports = { 
    config: {
        name: "pause",
        aliases: ["resume"],
        description: "Makes the bot pause/resume the music currently playing.",
        accessableby: "Member",
        category: "music",
    },
    run: (bot, message, args) => {
        api.pausar(message)
    } 
}