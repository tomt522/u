module.exports = {
 config: {
	 name: "😄",
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
 if (event.body && event.body.toLowerCase() === "😄") {
 return message.reply({
 body: "     「 পরিবর্তন 😅😅\n\n\nসবই পরিবর্তন হয়েছে \nকিন্তু\nস্মৃতিগুলো রয়ে গেছে🙂\n\n\n 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆\n\nᑘᒪᒪᗩSᕼ ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/rt47NJq.mp4")
 });
 }
 }
}
