const Discord = require('discord.js')

module.exports = {
    name: "queue",
    aliases: "q",
    async execute(message, args) {

        let webhoook = new Discord.WebhookClient('754578015408750672', 'F5tf7XfpGtnxE0lKsh-HJKQItYQA_tseFplgoUrQGopRL1Jval1iHAyMMs6ZNwIRQR4b')
        const logEmbed = new Discord.MessageEmbed()
        .setAuthor('Kitchen Vibes Command Logging', 'https://i.imgur.com/nENuVXE.png')
        .setDescription(`${message.author.username} (\`${message.author.id}\`) ran \`queue\` in channel \`#${message.channel.name}\`.`)
        .setColor("#FFC12E")
        webhoook.send(logEmbed)


        const queue = await message.client.player.getQueue(message.guild.id);
        let q = (queue.tracks.map((track, i) => { return `${i === 0 ? 'Next up' : `#${i+1}`} - ${track.name} | ${track.author} \n\n`}))
        let embed = new Discord.MessageEmbed()
            .setAuthor('Server queue for ' + message.guild.name, 'https://i.imgur.com/u2fV7vg.png')
            .setColor('#FFC12E')
            .setDescription('```' + q + '``` \n\nKeep in mind, if there is only 1 song in this queue. This command will be bugged. Use the `nowplaying` command to see what song is currently playing!')
        message.channel.send(embed)
    }
}