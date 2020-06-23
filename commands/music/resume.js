const api = require("../../easycode")

module.exports = { 
    config: {
        name: "resume",
        aliases: ["r", "continuar"],
        description: "Displays what the current queue is.",
        accessableby: "Member",
        category: "music",
    },
    run: async (bot, message, args) => {
api.continuar(message)
    }     
}