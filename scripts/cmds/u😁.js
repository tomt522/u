module.exports = {
 config: {
	 name: "😁",
	 version: "1.0",
	 author: "Ullash ッ ☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆",
	 countDown: 5,
	 role: 2,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function() {
	 const expectedAuthor = "Ullash ッ ☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆";
	 if (this.config.author !== expectedAuthor) {
		 throw new Error("Unauthorized change detected in the author field. Please restore the original author.");
	 }
 },

 onChat: async function({ event, message }) {
	 if (event.body && event.body.toLowerCase() === "😁") {
		 const videoLinks = [
			 "https://i.imgur.com/l0ylaTM.mp4",
			 "https://i.imgur.com/G2oRFZG.mp4",
			 "https://i.imgur.com/lkJcKAZ.mp4",
			 "https://i.imgur.com/JG87UyC.mp4",
			 "https://i.imgur.com/xVkH5O6.mp4"
		 ];

		 const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

		 try {
			 const stream = await global.utils.getStreamFromURL(randomLink);

			 return message.reply({
				 body: "     「😁😁😁😁\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆\nᑘᒪᒪᗩSᕼ ッ」",
				 attachment: [stream]
			 });
		 } catch (error) {
			 console.error("Error processing video link:", randomLink, error);
			 return message.reply("দুঃখিত! ভিডিও পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
		 }
	 }
 }
};
