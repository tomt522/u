module.exports = {
 config: {
	 name: "@ullash ッ",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "@ullash ッ") {
 return message.reply({
 body: " 「 🥰❥︎-আমি ভেঙেচুরে নিজে কে আবার গড়তে চাই।\n❥︎-কিছু মানুষ কে তাদের যুগ্গ জবাব দিতে চাই।࿐.🌴🤎🙂.\n❥ যারা আমাকে তুচ্ছ ভেবে অবহেলা করসে তাদের আফসোস হতে চাই 😅\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\𝙍𝙞𝙛𝙖𝙩 𝙅𝙖𝙢𝙞𝙡」",
 attachment: await global.utils.getStreamFromURL("")
 });
 }
 }
}
