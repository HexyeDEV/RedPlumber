module.exports = {
	name: "ping",
	category: "info",
	description: "Get the bot's ping",
	usage: "ping",
	run: (client, message) => {
		message.channel.send(`The bot's ping is: ${client.ws.ping} ms`);
	}
}
