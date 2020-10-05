const Discord = require('discord.js')

module.exports = {
    name: "bassboost",
    aliases: "bb",
    async execute(message, args) {

        let webhoook = new Discord.WebhookClient('754578015408750672', 'F5tf7XfpGtnxE0lKsh-HJKQItYQA_tseFplgoUrQGopRL1Jval1iHAyMMs6ZNwIRQR4b')
        const logEmbed = new Discord.MessageEmbed()
        .setAuthor('Kitchen Vibes Command Logging', 'https://i.imgur.com/nENuVXE.png')
        .setDescription(`${message.author.username} (\`${message.author.id}\`) ran \`bassbpost\` in channel \`#${message.channel.name}\`.`)
        .setColor("#FFC12E")
        webhoook.send(logEmbed)


        if(message.client.player.isPlaying(message.guild.id) === false) {
            let embed = new Discord.MessageEmbed()
                .setDescription('<:error:735451624717156414> | You can not stop the queue as the queue is empty.')
                .setColor('RED')
            return message.channel.send(embed)
        } else {
            const bassboostEnabled = message.client.player.getQueue(message.guild.id).filters.bassboost
                if(!bassboostEnabled) {
                message.client.player.setFilters(message.guild.id, {
                    bassboost: true
                });
                let embed = new Discord.MessageEmbed()
                    .setAuthor('Bass Boost has been enabled.', 'https://i.imgur.com/u2fV7vg.png')
                    .setColor('#FFC12E')
                message.channel.send(embed)
            }
                if(bassboostEnabled === true) {
                    message.client.player.setFilters(message.guild.id, {
                        bassboost: false
                    })
                    let embed1 = new Discord.MessageEmbed()
                    .setAuthor('Bass Boost has been disabled.', 'https://i.imgur.com/u2fV7vg.png')
                    .setColor('#FFC12E')
                message.channel.send(embed1)
                  }

                
                
        
        }
    }
}