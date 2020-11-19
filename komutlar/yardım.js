const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Pqueen Yardım Menüsü`, client.user.avatarURL)
.setColor('#ffffff')
.setDescription(`<a:dn:722991376207314964> Pqueen botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Eğlence Komutlar__`,`<:hypsqd:772401677797687326> \`${prefix}eğlence\``,true)
.addField(`__Gif Komutlar__`,`<:badge:772401678754250762> \`${prefix}gif\``,true)
.addField(`__Mod Komutları__`,`<:staff:772401727239356416> \`${prefix}moderasyon\` `,true)
.addField(`__Logo  Komutları__`,`<:nitro:772401678573764619> \`${prefix}logo\` `,true)
.addField(`__Kayıt Komutları__`,`<:bughunter:772401677164609547> \`${prefix}yardım-kayıt\` `,true)
.addField(`__Bilgilendirme__`,`<a:dn:722991376207314964> \`${prefix}davet\` | Kırca Sunucunuza Davet Edersiniz\n<a:dn:722991376207314964> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://cdn.discordapp.com/attachments/761962651944878081/778220148662337576/inopdir.png`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  