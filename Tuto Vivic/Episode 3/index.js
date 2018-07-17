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

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) { 

        case "stats":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()
        .setColor("#6699FF")
        .setTitle(`Statistiques du joueurs : ${message.author.username}`)
        .addField(`ID du joueurs :id:`, msgauthor, true)
        .addField(`Date d'inscription du joueur :`, userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("Tu peux regarder tes messages privés !")
        message.author.send(stats_embed);

        break;
        
    }

});
