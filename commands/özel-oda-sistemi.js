const {EmbedBuilder, ChannelType} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
message.guild.channels.create({name: "Özel Oda Oluştur", type: ChannelType.GuildVoice})
message.reply("Sesli Kanal Başarıyla Oluşturuldu.")
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "özel-oda-sistemi"
};
