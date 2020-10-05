const Discord = require('discord.js')

module.exports = {
    name: "skip",
    async execute(message, args) { 

        let webhoook = new Discord.WebhookClient('754578015408750672', 'F5tf7XfpGtnxE0lKsh-HJKQItYQA_tseFplgoUrQGopRL1Jval1iHAyMMs6ZNwIRQR4b')
        const logEmbed = new Discord.MessageEmbed()
        .setAuthor('Kitchen Vibes Command Logging', 'https://i.imgur.com/nENuVXE.png')
        .setDescription(`${message.author.username} (\`${message.author.id}\`) ran \`skip\` in channel \`#${message.channel.name}\`.`)
        .setColor("#FFC12E")
        webhoook.send(logEmbed)

        const ids = '476089692643917825' || '487763675806171137' 
        if(message.author.id === ids) {
            return message.channel.send('You have been blacklisted from using this command.')
        } 
        
        message.client.player.skip(message.guild.id)
        let embed = new Discord.MessageEmbed()
            .setAuthor('Skipped the current song.', 'https://i.imgur.com/u2fV7vg.png')
            .setColor('#FFC12E')
           return message.channel.send(embed)
    }
}