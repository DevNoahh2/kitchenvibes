const Discord = require('discord.js')

module.exports = {
    name: "stop",
    aliases: "s",
    async execute(message, args) {

        let webhoook = new Discord.WebhookClient('754578015408750672', 'F5tf7XfpGtnxE0lKsh-HJKQItYQA_tseFplgoUrQGopRL1Jval1iHAyMMs6ZNwIRQR4b')
        const logEmbed = new Discord.MessageEmbed()
        .setAuthor('Kitchen Vibes Command Logging', 'https://i.imgur.com/nENuVXE.png')
        .setDescription(`${message.author.username} (\`${message.author.id}\`) ran \`stop\` in channel \`#${message.channel.name}\`.`)
        .setColor("#FFC12E")
        webhoook.send(logEmbed)


        if(message.client.player.isPlaying(message.guild.id) === false) {
            let embed = new Discord.MessageEmbed()
                .setDescription('<:error:735451624717156414> | You can not stop the queue as the queue is empty.')
                .setColor('RED')
            return message.channel.send(embed)
        } else {
            message.client.player.stop(message.guild.id);
            let embed1 = new Discord.MessageEmbed()
                .setDescription('<:check:735448861979574342> | Stopped the queue')
                .setColor('GREEN')
            message.channel.send(embed1)
        }
            
        

    }
}