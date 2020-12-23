 const commands = require('./commands')

 module.exports = class Google extends commands{

 static match (message) {
    return message.content.startsWith('!internet')
 }

 static action (message){
 let args = message.content.split('')
 args.shift()
 message.channel.send('Voici le site : http://artsakhisarmenia.cf' + args.join('%20'))}
 }