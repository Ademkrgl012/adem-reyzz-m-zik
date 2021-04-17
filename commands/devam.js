module.exports = {
  name: "devam", 
  description: "Resume the paused Song",
  execute (client, message, args) {
      const { channel } = message.member.voice;
    if (!channel) {
    //ArdaDemr Youtube kanalında paylaşılmış altyapı
      return message.channel.send("**Herhangi bir ses kanalında bulunmalısınız.**");
    }
 //ArdaDemr Youtube kanalında paylaşılmış altyapı
    const serverQueue = message.client.queue.get(message.guild.id);
    if(!serverQueue) return message.channel.send('**Oynatılan bir şarkı Bulunmuyor.**')
    if(serverQueue.playing) return message.channel.send(`Duran bir şarkı yok.`)
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume(true)
  
  return message.channel.send("✅ **| Duraklatılan şarkı sürdürüldü.**") 
 } //ArdaDemr Youtube kanalında paylaşılmış altyapı
    
    message.channel.send("**Duraklatılan bir şarkı yok.**")
    
  }
}
