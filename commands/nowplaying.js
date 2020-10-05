const Discord = require('discord.js')

module.exports = {
    name: "nowplaying",
    async execute(message, args) {

        let webhoook = new Discord.WebhookClient('754578015408750672', 'F5tf7XfpGtnxE0lKsh-HJKQItYQA_tseFplgoUrQGopRL1Jval1iHAyMMs6ZNwIRQR4b')
        const logEmbed = new Discord.MessageEmbed()
        .setAuthor('Kitchen Vibes Command Logging', 'https://i.imgur.com/nENuVXE.png')
        .setDescription(`${message.author.username} (\`${message.author.id}\`) ran \`nowplaying\` in channel \`#${message.channel.name}\`.`)
        .setColor("#FFC12E")
        webhoook.send(logEmbed)


        if(message.client.player.isPlaying(message.guild.id) === false) {
            let embed1 = new Discord.MessageEmbed()
                .setDescription('<:error:735451624717156414> | There are currently no songs queued.')
                .setColor('RED')
            message.channel.send(embed1)
        }
        let track = await message.client.player.nowPlaying(message.guild.id);
        let embed = new Discord.MessageEmbed()
            .setAuthor('Kitchen Vibes Queue', 'https://i.imgur.com/u2fV7vg.png')
            .setDescription(`Currently playing \`${track.name}\``)
            .setColor('#FFC12E')
        message.channel.send(embed)
        let embed2 = new Discord.MessageEmbed()
            .setDescription(`${message.client.player.createProgressBar(message.guild.id)} ${track.duration}`)
            .setColor('#FFC12E')
        message.channel.send(embed2)
    }
}