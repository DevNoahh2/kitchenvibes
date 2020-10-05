const Discord = require('discord.js')

module.exports = { 
    name: "botinfo",
    aliases: "info",
    async execute(message, args) {

      let webhoook = new Discord.WebhookClient('754578015408750672', 'F5tf7XfpGtnxE0lKsh-HJKQItYQA_tseFplgoUrQGopRL1Jval1iHAyMMs6ZNwIRQR4b')
        const logEmbed = new Discord.MessageEmbed()
        .setAuthor('Kitchen Vibes Command Logging', 'https://i.imgur.com/nENuVXE.png')
        .setDescription(`${message.author.username} (\`${message.author.id}\`) ran \`botinfo\` in channel \`#${message.channel.name}\`.`)
        .setColor("#FFC12E")
        webhoook.send(logEmbed)


const embed = new Discord.MessageEmbed()
.setAuthor('Kitchen Vibes Useful Information and Stats', 'https://i.imgur.com/u2fV7vg.png')
  .addField('Prefix', `\`\`\`zk!\`\`\``, true)
  .addField('Current Version', `\`\`\`v0.0.1 Beta\`\`\``, true)
  .addField('Library', '```Discord.js 12.2.0```', true)
  .addField('Environment', '```Node.js 12.16.3```', true)
  .addField('OS:', '```Linux Ubuntu - 18.04``` ')
  .addField('Main Developer(s) <:owner:753294410355048519>',"```• DevNoah#0001, • Zeekz#0919```", true)
  .addField(
    'Useful Links', 
    '[Vertix Studios](https://discord.gg/Yxb56xk) | ' +
    '[Ducky Development](https://discord.gg/4HWGEYy)'
  )
  .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp()
  .setColor('#FFC12E');
message.channel.send(embed);
    }
}
