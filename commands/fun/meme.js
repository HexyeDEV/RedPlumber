const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
	name: "meme",
	category: "fun",
	description: "Send a random meme",
	usage: "meme",
	run: async (client, message, args) =>{
		const subReddits = ["dankmeme", "meme", "me_irl"]
		const random = subReddits[Math.floor(Math.random() * subReddits.length)];

		const img = await randomPuppy(random);
		let embed = new MessageEmbed()
			.setColor("RANDOM")
			.setImage(img)
			.setTitle("From /r/" + random)
			.setURL(`https://reddit.com/r/${random}`);

		message.channel.send(embed); 




}
}
