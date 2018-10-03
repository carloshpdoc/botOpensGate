const env = require('./.env');
const Telegraf = require('telegraf');
const mqtt = require('mqtt')
const bot = new Telegraf(env.token);
const Markup = require('telegraf/markup');
// const client  = mqtt.connect(env.serverMqtt);

// client.on('connect', function () {
//     console.log('connectado');
// });

const tecladoPortao = Markup.keyboard([
    ['Abrir Portão', 'Fechar Portão']
]).resize().extra();

bot.start(ctx => {
    const from = ctx.update.message.from;
    console.log(from.first_name);
    ctx.reply(`Seja bem vindo, ${from.first_name}! 😊 👍`, tecladoPortao);
})

bot.hears(['Abrir Portão'], ctx => {
    ctx.reply(`Portão aberto, ${ctx.update.message.from.first_name}! 👍`);
    // client.publish(env.topic, '2');
});

bot.hears(['Fechar Portão'], ctx => {
   // client.publish(env.topic, '1')
   ctx.reply(`Portão fechado, ${ctx.update.message.from.first_name}! 👍`);
});

bot.on('text', ctx => {
    const msg = (ctx.update.message.text).toLowerCase();
    console.log(msg);

    if (msg == 'abre') {
        // client.publish(env.topic, '2');
        ctx.reply(`Portão aberto, ${ctx.update.message.from.first_name}! 👍`);
    }

    if (msg == 'fecha') {
        // client.publish(env.topic, '1')
        ctx.reply(`Portão fechado, ${ctx.update.message.from.first_name}! 👍`);
    }
})

bot.startPolling();