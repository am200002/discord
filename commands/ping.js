 const commands = require('./commands')

 module.exports = class Ping extends commands{

 static match (message) {
 return message.content.startsWith('!devise')
 }

 static action (message){
 let args = message.content.split('')
  args.shift()
 message.channel.send('ERMENISTAN TERRORIST');
 }

 };