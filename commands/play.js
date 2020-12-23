 const commands = require('./commands')
 const YoutubeStream = require('youtube-audio-stream')

 module.exports = class Play extends commands{

 static match (message) {
    return message.content.startsWith('!joue')
 }

 static action (message){
let voiceChannel = message.guild.channels
.filter(function(channel) { return channel.type === 'voice'})
.first()
let args = message.content.split(' ')
voiceChannel
.join()
.then(function(connection){
let stream = YoutubeStream(args[1])
stream.on('error', function(){
message.reply("Je n'ai pas réussi à lire cette vidéo ;(")
connection.disconnect()
})
connection
.playStream(stream)
.on('end',function(){
connection.disconnect()
})
})
 }
 }