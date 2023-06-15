const {EmbedBuilder, ChannelType} = require("discord.js");
const db = require("croxydb")
const Discord = require("discord.js")
exports.run = async (client, message, args) => {
    let odasi = db.fetch(`oda_${message.author.id}`)
    if (!odasi) return message.reply("Sana ait bir oda bulamadım!")
   const embed = new EmbedBuilder()
   .setTitle("Godzilla - Özel Oda Sistemi!")
   .setDescription("Aşağıdaki butondan özel odana kullanıcı ekleyebilirsin!")
   .setColor("#ff0000")
   const row = new Discord.ActionRowBuilder()
   .addComponents(
new Discord.ButtonBuilder()
.setLabel("Ekle")
.setStyle(Discord.ButtonStyle.Success)
.setCustomId("ekle"),
new Discord.ButtonBuilder()
.setLabel("Çıkar")
.setStyle(Discord.ButtonStyle.Danger)
.setCustomId("çıkar"))
message.reply({embeds: [embed], components: [row]})

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "kullanıcı-menü"
};
