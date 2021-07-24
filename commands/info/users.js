const discord = require("discord.js");

module.exports = {
	name: "users",
	category: "info",
	description: "See the number of bot users",
	usage: "utenti",
	run: async (client, message) =>{
		return message.channel.send(`The bot is used by ${client.users.cache.size} users`)


}
}
