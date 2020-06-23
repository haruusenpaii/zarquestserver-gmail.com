const api = require("../../easycode")

module.exports = { 
    config: {
        name: "play",
        description: "Play a song/playlist or search for a song from youtube",
        usage: "<input>",
        category: "music",
        accessableby: "Member",
        aliases: ["p", "pplay"]
    },
    run: async (bot, message, args) => {

        const canal = message.member.voice.channel
        if(!canal) return message.channel.send('Voce nao está em um canal.')
        let musica = args.join(" ")
        if(!musica) return message.reply("Coloque a Musica")
        api.play(message,musica) 
    }
}