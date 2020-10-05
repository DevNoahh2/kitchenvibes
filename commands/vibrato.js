const Discord = require('discord.js')

module.exports = {
    name: "vibrato",
    aliases: "v",
    async execute(message, args) {

        let webhoook = new Discord.WebhookClient('754578015408750672', 'F5tf7XfpGtnxE0lKsh-HJKQItYQA_tseFplgoUrQGopRL1Jval1iHAyMMs6ZNwIRQR4b')
        const logEmbed = new Discord.MessageEmbed()
        .setAuthor('Kitchen Vibes Command Logging', 'https://i.imgur.com/nENuVXE.png')
        .setDescription(`${message.author.username} (\`${message.author.id}\`) ran \`vibrato\` in channel \`#${message.channel.name}\`.`)
        .setColor("#FFC12E")
        webhoook.send(logEmbed)


        if(message.client.player.isPlaying(message.guild.id) === false) {
            let embed = new Discord.MessageEmbed()
                .setDescription('<:error:735451624717156414> | You can not stop the queue as the queue is empty.')
                .setColor('RED')
            return message.channel.send(embed)
        } else {
            const bassboostEnabled = message.client.player.getQueue(message.guild.id).filters.vibrato
                if(!bassboostEnabled) {
                message.client.player.setFilters(message.guild.id, {
                    vibrato: true
                });
                let embed = new Discord.MessageEmbed()
                    .setAuthor('Vibrato has been enabled.', 'https://i.imgur.com/u2fV7vg.png')
                    .setColor('#FFC12E')
                message.channel.send(embed)
            }
                if(bassboostEnabled === true) {
                    message.client.player.setFilters(message.guild.id, {
                        vibrato: false
                    })
                    let embed1 = new Discord.MessageEmbed()
                    .setAuthor('Vibrato has been disabled.', 'https://i.imgur.com/u2fV7vg.png')
                    .setColor('#FFC12E')
                message.channel.send(embed1)
                        
                }
        }
    }
}