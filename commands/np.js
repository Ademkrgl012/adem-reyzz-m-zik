module.exports = {
  name: "np",
  description: "send the name of on going song",
  execute (client, message, args) {
    
      const { channel } = message.member.voice;
    if (!channel) {
       //ArdaDemr Youtube kanalında paylaşılmış altyapı
      return message.channel.send("**Herhangi bir ses kanalında bulunmalısınız.**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**Herhangi bir şarkı oynatmıyorum.**");
    }
     //ArdaDemr Youtube kanalında paylaşılmış altyapı
    message.channel.send(serverQueue.songs[0].title + ' - **Şuanda Oynatılan Şarkı.**')

    
    
    
  }
}
