module.exports = {
  name: "atla",
  description: "Skip the song or shift song to next",
  execute(client, message, args) {
    const { channel } = message.member.voice;

    if (!channel) {
   //ArdaDemr Youtube kanalında paylaşılmış altyapı
      return message.channel.send("**Herhangi bir ses kanalında bulunmalısınız.**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**Atlayabileceğim bir şarkı yok.**");
    }
 //ArdaDemr Youtube kanalında paylaşılmış altyapı
    serverQueue.connection.dispatcher.end();
    message.channel.send("✔ **| Şarkı geçildi.**");
  }
};
