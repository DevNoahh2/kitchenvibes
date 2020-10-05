const Discord = require('discord.js')

module.exports = {
    name: "repeat",
    aliases: ["loop", "rp", "lp"],
    async execute(message, args) {

        let webhoook = new Discord.WebhookClient('754578015408750672', 'F5tf7XfpGtnxE0lKsh-HJKQItYQA_tseFplgoUrQGopRL1Jval1iHAyMMs6ZNwIRQR4b')
        const logEmbed = new Discord.MessageEmbed()
        .setAuthor('Kitchen Vibes Command Logging', 'https://i.imgur.com/nENuVXE.png')
        .setDescription(`${message.author.username} (\`${message.author.id}\`) ran \`repeat\` in channel \`#${message.channel.name}\`.`)
        .setColor("#FFC12E")
        webhoook.send(logEmbed)


        if(message.client.player.repeatMode === false) {
            message.client.player.setRepeatMode(message.guild.id, true)
            let embed = new Discord.MessageEmbed()
            .setAuthor('Repeat Mode has been enabled.', 'https://i.imgur.com/u2fV7vg.png')
            .setColor('#FFC12E')
            message.channel.send(embed)
        } else if(message.client.player.repeatMode === true) {
            message.client.player.setRepeatMode(message.guild.id, false)
            let embed = new Discord.MessageEmbed()
            .setAuthor('Repeat Mode has been disabled.', 'https://i.imgur.com/u2fV7vg.png')
            .setColor('#FFC12E')
           return message.channel.send(embed)
        }
    }
}