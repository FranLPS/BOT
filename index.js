const Discord = require('discord.js')
const client = new Discord.Client()
require('dotenv').config();

const { Client, Collection, Guild} = require('discord.js');
const keepAlive = require('./server.js')

const fs= require('fs');
let { readdirSync } = require('fs');

let prefix = '.'

const config = require('./config')
client.config = config

const { GiveawaysManager } = require('discord-giveaways')
client.giveawaysManager = new GiveawaysManager(client, {
  storage: "/giveaways.json",
  updateCountdownEvery: 7000,
  default: {
    botsCanWin: false,
    embedColor: '#106d15',
    reaction: "859652912480124928",
  }
})


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

for (const file of readdirSync('./eventos/')) {


  if(file.endsWith(".js")){
    let fileName = file.substring(0, file,length - 3);

    let fileContents = require(`./eventos/'$(file)`);

    client.on(fileName, fileContents.bind(null, client));


  }
}


///////////////// precencia //////////////////
const estados = [`twich.tv/FranLPS`]

client.on('ready', () => {

  setInterval(() => {
    function precense() {
      client.user.setPresence({
        status:'on',
        activity: {
          name: estados[Math.floor(Math.random() * estados.length)],
          type: 'WATCHING',
      }
      })
    }
   precense()
  
  }, 10000);

  console.log('RedWood.BOT esta ready pa!')

});


client.on('message', (message) => {

if (!message.content.startsWith(prefix))
if (message.author.bot) return;

let usuario = message.mentions.members.first() || message.member;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
  cms.execute(client, message, args)
}

});

client.login(process.env.OTA5NzI4OTI4OTU0OTk0Njk4.YZIhFg.LgFG8jsv9ZSf9-IklBeOUW9hm9Q)
