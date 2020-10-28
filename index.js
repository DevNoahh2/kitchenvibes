// Code Copyritten: DevNoahh. All Rights Reserved
//Do Not Distribute

const Discord = require('discord.js')
const fs = require('fs')
const os = require('os')
const { prefix, token } = require('./config/config.json')

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const { Player } = require('discord-player')
const player = new Player(client);
client.player = player;

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.guildOnly && message.channel.type === 'dm') {
        return message.channel.send('I can\'t execute that command inside DMs!');
    }
    
   
    if (command.args && !args.length) {
        let embed = new Discord.MessageEmbed()
        .setAuthor('An Error has Occured', 'https://cdn.discordapp.com/emojis/735451624717156414.png?v=1')
        .setDescription(`You did not provide any arguements`)
        .setColor('RED')
        message.channel.send(embed) 
        return
    }

    try {
        command.execute(message, args)
    } catch (error) {
        console.error(error);
        let embed = new Discord.MessageEmbed()
        .setAuthor('An Error has Occured', 'https://cdn.discordapp.com/emojis/735451624717156414.png?v=1')
        .setDescription(`The following error was logged to the console: \n\`\`\`${error}\`\`\``)
        .setColor('RED')
        message.channel.send(embed)
    }

});

client.on('ready', () => {
    let statuses = [
        'the Kitchen',
        'Moosic',
        'Zeekz\'s Songs',
        'Vertix x Ducky',
       ];
       setInterval(function() {
           let status = statuses[Math.floor(Math.random() * statuses.length)];
           client.user.setActivity(status, {type: "LISTENING"});
       }, 12000);
});


client.once('ready', () => {
    console.warn(`${client.user.tag} is now logged in.`)
})





client.login(token)