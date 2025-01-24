module.exports = {
 config: {
	 name: "💔",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 2,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "💔") {
 return message.reply({
 body: "     「°-۵༎-💚🌸\n\n━༊༎ পৃথিবীতে ༎ ভালোবাসার ༎ অধিকার ༎ সবারই ༎ আছে ༎۵༎࿐ 🍁🌼\n\n❥━༊༎ কিন্তুু ༎ পাওয়ার ༎ ভাগ্যটা ༎ সবার ༎ নেই ༎۵࿐ 🌸🍁\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n\n\n☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆\n____ᑘᒪᒪᗩSᕼ ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/GILzNQn.mp4")
 });
 }
 }
}
