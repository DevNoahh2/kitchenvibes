const Discord = require('discord.js')
const { Menu } = require('discord.js-menu')
module.exports = {
    name: 'help',
    execute(message, args) {
        
        let webhoook = new Discord.WebhookClient('754578015408750672', 'F5tf7XfpGtnxE0lKsh-HJKQItYQA_tseFplgoUrQGopRL1Jval1iHAyMMs6ZNwIRQR4b')
        const logEmbed = new Discord.MessageEmbed()
        .setAuthor('Kitchen Vibes Command Logging', 'https://i.imgur.com/nENuVXE.png')
        .setDescription(`${message.author.username} (\`${message.author.id}\`) ran \`help\` in channel \`#${message.channel.name}\`.`)
        .setColor("#FFC12E")
        webhoook.send(logEmbed)

        new Menu(message.channel, message.author.id, [
            {
                name: "Home",
                content: new Discord.MessageEmbed({
                    author: {
                        name: "Kitchen Vibes Help Menu",
                        icon_url: 'https://i.imgur.com/u2fV7vg.png'
                    },
                    description: "Hey! My name is `Kitchen Vibes` and I am the DJ around here! Use the arrow reactions below to scroll through the pages in my help menu! \n\nKeep in mind that I am still in development, so all of my commands are not accessible yet!",
                    color: '#ffc12e',
                    footer: {
                        text: "Page 1/3"
                    }
                    
                }),
                reactions: {
                    "▶": "next",
                    "⏹": "stop"
                }
            },
            {
                name: "Music Commands",
                content: new Discord.MessageEmbed({
                    author: {
                        name: "Kitchen Vibes Help Menu",
                        icon_url: 'https://i.imgur.com/u2fV7vg.png'
                    },
                    description: "Help menu used for Music",
                    color: "#ffc12e",
                    footer: {
                        text: "Page 2/3"
                    },
                    fields: [
                        {
                            name: "Commands:",
                            value: "`play`, `stop`, `queue`, `repeat`, `skip`, `volume`, `nowplaying`,"
                            
                        }

                    ]
                }),
                reactions: {

                    "◀": "previous",
                    "▶": "next",
                    "⏹": "stop"
                }
            },
            {
                name: "Sound Effects",
                content: new Discord.MessageEmbed({
                    author: {
                        name: "Kitchen Vibes Help Menu",
                        icon_url: 'https://i.imgur.com/u2fV7vg.png'
                    },
                    description: "Help menu used for Sound Effects",
                    color: "#ffc12e",
                    footer: {
                        text: "Page 3/3"
                    },
                    fields: [
                        {
                            name: "Commands:",
                            value: "`bassboost`, `vibrato`"
                            
                        }
                    ]
                }),
                reactions: {

                    "◀": "previous",
                    "⏹": "stop"
                }
            }
        ]);
       
    }
};

//⏪', back: '◀', next: '▶', last: '⏩', stop: '⏹