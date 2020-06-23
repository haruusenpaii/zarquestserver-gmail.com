const api = require("../../easycode")

module.exports = { 
    config: {
        name: "skip",
        aliases: ["next"],
        description: "Skips the song currently playing.",
        accessableby: "Member",
        category: "music",
        usage: "<input>"
    },
    run: (bot, message, args) => {
        api.pular(message)
    } 
}