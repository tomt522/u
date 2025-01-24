module.exports = {
 config: {
	 name: "😅",
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
 if (event.body && event.body.toLowerCase() === "😅") {
 return message.reply({
 body: "    「🌻༉༊___তুমি মানুষটা অনেকটা দামি••!!😊🙂ღ༊🥀🥰\n তাই তোমাকে\n\n🖤🌸༊__পাওয়ার ভাগ্য আমার হয় না!!😅🖤༊ღ࿐😽\n\n••\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nU L L A S H」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/VJOH4lD.mp4")
 });
 }
 }
}
