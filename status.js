const { Clieny } = require("discord.js");

module.exports = {
	name: "status",
	category: "developer",
	description: "Modifica lo stato del bot",
	run: async(client, message, args) => {
		if(!message.author.id === 652590649735905303) {
			return message.channel.send("Solo il developer può eseguire questo comando")
		}else{
			const argsnocomma = args.slice(0).join(" ")
			client.user.setActivity(`${argsnocomma}`);
			message.channel.send("Ok, stato impostato a " + argsnocomma);
		}
	}
}