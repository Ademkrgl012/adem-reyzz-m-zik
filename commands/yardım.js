const Discord = require('discord.js')
const {PREFIX} = require('../ayarlar.json')
module.exports = {
  name: "yardım",
  description: "yardım", //ArdaDemr Youtube kanalında paylaşılmış altyapı
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\`${PREFIX}oynat <şarkı-adı>\` : **Bir Şarkıyı Oynatır.** \n
\`${PREFIX}atla\` : **Sıradaki şarkıyı atlar.**\n
\`${PREFIX}döngü\` : **Çalan şarkıyı sürekli tekrarlar.**\n
\`${PREFIX}durdur\` : **Şarkıyı durdurur.**\n
\`${PREFIX}devam\` : **Duran şarkıyı devam ettirir.**\n
\`${PREFIX}sıra\` : **Şarkı sırasını gösterir.**\n
\`${PREFIX}np\` : **Oynatılan şarkının adını söyler.**\n

 //ArdaDemr Youtube kanalında paylaşılmış altyapı

`)
                       .setColor("ff0a0a")
                      )    
}
} //ArdaDemr Youtube kanalında paylaşılmış altyapı
