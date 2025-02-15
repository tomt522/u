module.exports = {
 config: {
	 name: "ownullash2",
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
	 if (!event.body) return;

	 const userMessage = event.body.toLowerCase();
	 const allowedPatterns = [
	"😂", "🤣", "😄", "😆", "😁", "😹", "🤭", "😂😄", "🤣😅", 
	"😂😂", "🤣🤣", "😁😁", "😆😆", "😹😹", "😂🤣", "🤣😂", 
	"😄😆", "🤭😂", "😆🤣", "😂😆", "😹🤣", "😆😄", "🤣😁", 
	"😂🤭", "😄😹", "🤣😄", "😂😂😂", "🤣🤣🤣", "😁😁😁", 
	"😆😆😆", "😹😹😹", "😂😄🤣", "🤣😂😁", "😄😆🤭", 
	"🤣😹", "😂😆😁", "😂🤣😄", "😹😆🤣", "😁😂🤣", "😄😂😂", 
	"🤭😁😂", "😆😆😂", "😂😁😹", "🤣😂😂", "😹😂😁", "🤣🤣😆"
];

	 if (allowedPatterns.includes(userMessage)) {
		 const videoLinks = [
			 "https://i.imgur.com/T232jG1.mp4",
			 "https://i.imgur.com/o4RwH6l.mp4",
			 "https://i.imgur.com/Q1W7B0y.mp4",
			 "https://i.imgur.com/4mJ1KfP.mp4",
			 "https://i.imgur.com/DYYjAP1.mp4",
			 "https://i.imgur.com/Fsu8vu4.mp4",
			 "https://i.imgur.com/3xzypsU.mp4",
			 "https://i.imgur.com/C2XVMTu.mp4",
			 "https://i.imgur.com/ieotMZN.mp4",
			 "https://i.imgur.com/iLRjpIj.mp4",
			 "https://i.imgur.com/wbOdCr0.mp4",
			 "https://i.imgur.com/ihlaKUQ.mp4",
			 "https://i.imgur.com/4iUgvuq.mp4",
			 "https://i.imgur.com/bqtkUCh.mp4",
			 "https://i.imgur.com/fKTnRKS.mp4",
			 "https://i.imgur.com/DLETLxK.mp4",
			 "https://i.imgur.com/d7ngY0N.mp4",
			 "https://i.imgur.com/BQov8Ap.mp4",
			 "https://i.imgur.com/0gYSJ10.mp4",
			 "https://i.imgur.com/CldeHCT.mp4",
			 "https://i.imgur.com/Aym39EZ.mp4",
			 "https://i.imgur.com/LJzvh65.mp4",
			 "https://i.imgur.com/sMn1jpW.mp4",
			 "https://i.imgur.com/Vbkabym.mp4",
			 "https://i.imgur.com/7uUZG6f.mp4",
			 "https://i.imgur.com/4WF7UzV.mp4"
		 ];

		 const captions = [
			 "😂😂😂",
			 "🤣🤣🤣",
			 "😄😄😄",
			 "😆😆😆",
			 "😁😁😁",
			 "😹😹😹",
			 "🤭🤭🤭",
			 "😂😄🤣",
			 "🤣😅😂"
		 ];

		 const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];
		 const randomCaption = captions[Math.floor(Math.random() * captions.length)];

		 try {
			 const stream = await global.utils.getStreamFromURL(randomLink);

			 return message.reply({
				 body: randomCaption,
				 attachment: [stream]
			 });
		 } catch (error) {
			 console.error("Error processing video link:", randomLink, error);
			 return message.reply("দুঃখিত! ভিডিও পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
		 }
	 }
 }
};
