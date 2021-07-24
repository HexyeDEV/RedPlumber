const { Clieny } = require("discord.js");

module.exports = {
	name: "status",
	category: "developer",
	description: "Edit the bot status",
	run: async(client, message, args) => {
		if(!message.author.id === 652590649735905303) {
			return message.channel.send("Only developers can execute that command")
		}else{
			const argsnocomma = args.slice(0).join(" ")
			client.user.setActivity(`${argsnocomma}`);
			message.channel.send("Ok, status seted to " + argsnocomma);
		}
	}
}
