const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "*";

client.login("ICI VOTRE TOKEN");

client.on("ready", () => {

    console.log("Je suis prêt !");
    client.user.setGame("faire des Tutos :D");

});

client.on('message', async message => { 

    if(message.content === "Bonjour"){
        message.reply("Salut");
        console.log('Le bot dit bonjour');
    }

    if(message.content === prefix + "aide") {
        var help_embed = new Discord.RichEmbed()
        .setColor('#40A497')
        .setTitle("Voici mes commandes d'aides :D")
        .setDescription("Je suis un bot Tuto :D Voici mes commandes disponible !")
        .addField("*aide", "Affiche les commandes du bot")
        .addField("Bonjour", "Le bot répond")
        .setFooter("Menu d'aide -  Tuto")
        message.channel.send(help_embed);
        console.log("Un utilisateur a effectué la commande d'aide");
    }

});
