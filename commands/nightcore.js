const Discord = require('discord.js')
const { player } = require('discord-player')

module.exports = {
    name: "nightcore",
    async execute(client, message) {
       /* if(message.client.player.isPlaying(message.guild.id) === false) {
            let embed = new Discord.MessageEmbed()
                .setDescription('<:error:735451624717156414> | You can run this command as the queue is empty.')
                .setColor('RED')
            return message.channel.send(embed)
        } else {
           */ const nightcore = message.client.player.getQueue(message.guild.id).filters.nightcore
                if(nightcore === false) {
                message.client.player.setFilters(message.guild.id, {
                    nightcore: true
                });
                let embed = new Discord.MessageEmbed()
                    .setAuthor('Nightcore has been enabled.', 'https://i.imgur.com/u2fV7vg.png')
                    .setColor('#FFC12E')
                message.channel.send(embed)
            }
                if(nightcore === true) {
                    message.client.player.setFilters(message.guild.id, {
                        nightcore: false
                    })
                    let embed1 = new Discord.MessageEmbed()
                    .setAuthor('Nightcore has been disabled.', 'https://i.imgur.com/u2fV7vg.png')
                    .setColor('#FFC12E')
                message.channel.send(embed1)
                        
                
        }
    }
}