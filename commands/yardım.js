const Discord = require('discord.js')
const {PREFIX} = require('../ayarlar.json')
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\`${PREFIX}oynat <şarkı-adı>\` : **Bir Şarkıyı Oynatır.** \n
\`${PREFIX}atla\` : **Sıradaki Şarkıyı atlar.**\n
\`${PREFIX}döngü\` : **O Anki şarkıyı Hep tekrarlar.**\n
\`${PREFIX}durdur\` : **O anki Şarkıyı Durdurur.**\n
\`${PREFIX}devam\` : **Duran Şarkıyı Devam Ettirir.**\n
\`${PREFIX}sıra\` : **O Anki Sırayı Gösterir.**\n
\`${PREFIX}np\` : **O Anki Oynatılan Şarkıyı Söyler.**\n



`)
                       .setColor("ff0a0a")
                      )    
}
}
