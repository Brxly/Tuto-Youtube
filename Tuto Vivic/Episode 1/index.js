const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "*";

client.login("ICI VOTRE TOKEN");

client.on('message', async message => { 

    if(message.content === "Bonjour"){
        message.reply("Salut");
        console.log('Le bot dit bonjour');
    }

});
