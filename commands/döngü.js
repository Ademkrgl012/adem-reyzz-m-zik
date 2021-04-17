module.exports = {
  name: "döngü",
  description: "LOOP THE QUEUE",
  execute (client, message, args) {
    
    const { channel } = message.member.voice;
    if (!channel) { //ArdaDemr Youtube kanalında paylaşılmış altyapı
  
      return message.channel.send("**Herhangi bir ses kanalında bulunmalısınız.**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);
 //ArdaDemr Youtube kanalında paylaşılmış altyapı
    if (!serverQueue) {
      return message.channel.send("**Döngüye alabileceğim bir şarkı bulamadım.**");
    }
     //ArdaDemr Youtube kanalında paylaşılmış altyapı

    serverQueue.loop = !serverQueue.loop
    
     //ArdaDemr Youtube kanalında paylaşılmış altyapı
    
    message.channel.send(`Döngü şimdi **${serverQueue.loop ? "Aktif" : "Deaktif"}**`)
    
    
    
    
  }
}
