const { MessageEmbed } = require('discord.js');

const client = new Client({
  disableMentions: 'everyone'
});

client.on('ready', () => {
  console.log('[SERVER]', `Client ready as ${client.user.tag}.`);
  client.user.setActivity('*help', { type: 'WATCHING' })
});

client.on('message', async message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
});

if (message.content === 'ping') { // regular commands
   message.channel.send('pong!')
};

const Embed = new MessageEmbed()
.setColor('RANDOM')
.setTitle('title')
.setDescription('description')
.setFooter('footer')
//.setTimestamp()     "optional"

if (message.content === 'embed') {
  message.channel.send(Embed);
};

console.log('congrats on your bot lmao');

client.login(config.token);
