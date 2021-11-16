const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
  name: "sorteo", 
  alias: ["sortear"], 

execute (client, message, args){

  let channel = message.menctions.channels.first()
  if(!channel) return message.channel.send("Ponlo en la sección de sorteos!")

  let giveawayDuration = args[1]
  if(!giveawaysDuration) return message.channel.send("Aclara la duración del sorteo")

  let giveawaysWinners = args[2]
  if(isNaN(givewaysWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send("Debes elejir al menos un ganador")

  let giveawayPrice = args.slice.join(" ")
  if(!giveawayPrice) return message.channel.send("Debes decir que vas a sortear po")

  client.giveawayMangger.start(channel, {
    time: ms(giveawayDuration),
    prize: giveawayPrize,
    winnerCount: giveawayWinners,
    hosteBy: clien.config.hosteBy ? message.author: null,

    messages: {
      giveaway: (client.config.everyoneMention ? "hola\n\n" : "") + "**NUEVO SORTEO**",
      giveawayEnded:(client,config.everyonemention ? "feos \n\n" : "") + "**SORTEO FINALIZADO**",
      timeRemainig: 'Tiempor restante: **{duration}**',
      invitetoParticipate: 'Reacciona con <:redwood:859652912480124928> para participar!',
      winMessage: "Felicidades **{winners}**, has ganado **{prize}**",
      embedFooter: "acaba",
      noWinner: "Nadie queria esa basura xd",
      hosteBy: "Creado por **{user}**",
      winners: "ganadores",
      endedAt:'acabe en',
      units: {
        seconds: 'segundos',
        minutes: 'minutos',
        hours: 'horas',
        days: 'días',
        plural: 'false',
      }
    }
  })

 }
} 
