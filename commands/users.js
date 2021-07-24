const discord = require("discord.js");

module.exports = {
	name: "utenti",
	category: "info",
	description: "Visualizza il numero di utenti del bot",
	usage: "utenti",
	run: async (client, message) =>{
		return message.channel.send(`Il bot è attualmente utilizzato da ${client.users.cache.size} utenti`)


}
}