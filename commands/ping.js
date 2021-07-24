module.exports = {
	name: "ping",
	category: "info",
	description: "Ottieni il ping del bot",
	usage: "ping",
	run: (client, message) => {
		message.channel.send(`Il ping del bot è di: ${client.ws.ping} ms`);
	}
}