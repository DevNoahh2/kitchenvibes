const { Player } = require('discord-player')
const Discord = require('discord.js')

module.exports = {
    name: "play",
    aliases: "p",
    async execute(message, args) {

        let webhoook = new Discord.WebhookClient('754578015408750672', 'F5tf7XfpGtnxE0lKsh-HJKQItYQA_tseFplgoUrQGopRL1Jval1iHAyMMs6ZNwIRQR4b')
        const logEmbed = new Discord.MessageEmbed()
        .setAuthor('Kitchen Vibes Command Logging', 'https://i.imgur.com/nENuVXE.png')
        .setDescription(`${message.author.username} (\`${message.author.id}\`) ran \`play\` in channel \`#${message.channel.name}\`. \nArgs: \`${args.join(" ")}\``)
        .setColor("#FFC12E")
        webhoook.send(logEmbed)


        if (!message.member.voice.channel) return message.channel.send({embed: {color: 'RED', description: `<:error:735451624717156414> | You must be in a voice channel to play music!`}});
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({embed: {color: 'RED', description: `<:error:735451624717156414> | I am already in a voice channel playing music. Join my VC!`}});
        
        let query = args.join(" ");
                if (!query) return message.channel.send({embed: {color: 'RED', description: `<:error:735451624717156414> | Please enter a query to search!` }})

                let embed = new Discord.MessageEmbed()
                    .setAuthor(`Searching for your query...`, 'https://i.imgur.com/u2fV7vg.png')
                    .setColor('#FFC12E')
               message.channel.send(embed)

                let trackPlaying = message.client.player.isPlaying(message.guild.id);

                if(trackPlaying === true) {
                    let song = await message.client.player.addToQueue(message.guild.id, query);
                    let embed2 = new Discord.MessageEmbed()
                        .setAuthor('Kitchen Vibes', 'https://i.imgur.com/u2fV7vg.png')
                        .setColor('#FFC12E')
                        .setDescription(`Added \`${song.name}\` to the queue **-** Requested by \`${message.author.tag}\``)
                  return message.channel.send(embed2)
                } else  {
                    if(trackPlaying !== true) {
                        let track = await message.client.player.play(message.member.voice.channel, query, message.member.user.tag);
                      let embed1 = new Discord.MessageEmbed()
                        .setAuthor('Kitchen Vibes', 'https://i.imgur.com/u2fV7vg.png')
                        .setColor('#FFC12E')
                        .setDescription(`Now playing \`${track.name}\` **-** Requested by \`${track.requestedBy}\``)
                        message.channel.send(embed1)
                    }
                }   
     
               
    }
}