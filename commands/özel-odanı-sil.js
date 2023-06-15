const {EmbedBuilder, ChannelType} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
let odasi = db.fetch(`oda_${message.author.id}`)
if (!odasi) return message.reply("Sana ait bir oda bulamadım!")
message.reply("Odan Başarıyla Silindi!")
message.guild.channels.delete(odasi)
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "özel-oda-sil"
};
