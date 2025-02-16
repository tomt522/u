module.exports = {
 config: {
	 name: "🤣",
	 version: "1.0",
	 author: "Ullash ッ ☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆",
	 countDown: 5,
	 role: 3,
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
	 if (event.body && event.body.toLowerCase() === "🤣") {
		 const videoLinks = [
			 "https://i.imgur.com/5XGqA26.mp4",
			 "https://i.imgur.com/zHaXOrf.mp4",
			 "https://i.imgur.com/qwm7ISB.mp4",
			 "https://i.imgur.com/8BzMlli.mp4",
			 "https://i.imgur.com/yC30sGQ.mp4",
			 "https://i.imgur.com/0XVhj7z.mp4",
			 "https://i.imgur.com/MTS0Th6.mp4"
		 ];

		 const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

		 try {
			 const stream = await global.utils.getStreamFromURL(randomLink);

			 return message.reply({
				 body: "    🤣🤣🤣\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆\nᑘᒪᒪᗩSᕼ ッ」",
				 attachment: [stream]
			 });
		 } catch (error) {
			 console.error("Error processing video link:", randomLink, error);
			 return message.reply("দুঃখিত! ভিডিও পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
		 }
	 }
 }
};
