const config = require("../../config.json")

module.exports = async bot => {
    console.log(`${bot.user.username} is online`);

    const api = require("../../easycode")
    new api.oauth2(config.token,config.api)
   await api.connect(bot)
};