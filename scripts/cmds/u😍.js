module.exports = {
 config: {
	 name: "😍",
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
	 if (event.body && event.body.toLowerCase() === "😍") {
		 const videoLinks = [
			 "https://i.imgur.com/wpQXVcs.mp4",
			 "https://i.imgur.com/Os9DoT4.mp4",
			 "https://i.imgur.com/HoL8g1o.mp4",
			 "https://i.imgur.com/wyATp9X.mp4",
			 "https://i.imgur.com/ND4KJJ3.mp4"
		 ];

		 const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

		 try {
			 const stream = await global.utils.getStreamFromURL(randomLink);

			 return message.reply({
				 body: "     「🦋🥀°🐰পূর্ণ জন্ম হবে না বলেই তোমাকে এই জন্মে পাওয়ার তীব্র আকাঙ্ক্ষা আমার...! \nতোমাকে ভুলতে পারিনি আর পারবোও না....! \nহয়তো তোমাকে এখনো ভালবাসি আমার না হয়া মহারাজা....!\n হয়তো সেটা তুমি কখনোই আর জানবে না...! 😊❤🙂🖤\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆\nᑘᒪᒪᗩSᕼ ッ」",
				 attachment: [stream]
			 });
		 } catch (error) {
			 console.error("Error processing video link:", randomLink, error);
			 return message.reply("দুঃখিত! ভিডিও পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
		 }
	 }
 }
};
