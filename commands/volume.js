const Discord = require('discord.js')

module.exports = {
    name: "volume",
    aliases: "v",
    async execute(message, args) {

        let webhoook = new Discord.WebhookClient('754578015408750672', 'F5tf7XfpGtnxE0lKsh-HJKQItYQA_tseFplgoUrQGopRL1Jval1iHAyMMs6ZNwIRQR4b')
        const logEmbed = new Discord.MessageEmbed()
        .setAuthor('Kitchen Vibes Command Logging', 'https://i.imgur.com/nENuVXE.png')
        .setDescription(`${message.author.username} (\`${message.author.id}\`) ran \`volume\` in channel \`#${message.channel.name}\`.`)
        .setColor("#FFC12E")
        webhoook.send(logEmbed)


        const vol = parseInt(args[0])
        if(!vol) {
            let embed = new Discord.MessageEmbed()
                .setAuthor('You need to supply a number', 'https://i.imgur.com/Vxxrc2P.png')
                .setColor('RED')
           return message.channel.send(embed)
        }
       else if(isNaN(vol)) {
            let embed2 = new Discord.MessageEmbed()
            .setAuthor('The arguement you supplied was not a number', 'https://i.imgur.com/Vxxrc2P.png')
            .setColor('RED')
        return message.channel.send(embed2)
        }
       else if(vol < 1 || vol > 100) {
            let embed3 = new Discord.MessageEmbed()
            .setAuthor('Your volume must be above 1 but below 100', 'https://i.imgur.com/Vxxrc2P.png')
            .setColor('RED')
        return message.channel.send(embed3)
        }
        message.client.player.setVolume(message.guild.id, vol)
        let embed4 = new Discord.MessageEmbed()
            .setAuthor(`Changed the Volume to ${vol}`, `https://i.imgur.com/u2fV7vg.png`)
            .setColor('#FFC12E')
        message.channel.send(embed4)
    }
}