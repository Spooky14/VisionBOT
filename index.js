const Discord =require('discord.js'),
    bot = new Discord.Client({
        fetchAllMembers: true
    }),
    config = require('./config.json')
    fs = require('fs')


bot.login(config.token)


bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);  
    bot.user.setStatus('dnd');
});


bot.on('message', message => {
    if (message.content === 'Jackie') {
      message.channel.send('& Michel !');
    }
  });

  bot.on('message', message => {
    if (message.content === 'Il y a des bambou') {
      message.channel.send('La !');
    }
  });

  bot.on('message', message => {
    if (message.content === 'Philippe') {
      message.channel.send('Je sais où tu te caches !');
    }
  });

  bot.on('message', message => {
    if (message.content === 'Viens ici') {
      message.channel.send('que je te bute enculé !');
    }
  });

  bot.on('message', message => {
    if (message.content === 'Omae wa mou shindeiru') {
      message.channel.send('__**NANI !!!**__');
    }
  });

  bot.on('message', message => {
    if (message.content === 'Il y a trop') {
      message.channel.send(`__**D'ARABES**__`);
    }
  });

  bot.on('message', message => {
    if (message.content === 'No god please no') {
      message.channel.send(`__**NOOOOOOOOOOOOOOOOOOOOOOOO !!!!!!!**__`);
    }
  });


  bot.on('message', message => {
    if (message.content === 'Qui est le plus beau ?') {
      message.channel.send(`Cela est evidemment <@816977825264697345> et <@511230134347497492> <3`);
    }
  });


  bot.on('message', message => {
    if (message.content === 'Qui est ton créateur') {
      message.channel.send(`Le talenteux <@511230134347497492> bien sur`);
    }
  });