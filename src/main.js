'use strict';

const Bot = require('./Core/Bot.js');
const CommandHandler = require('./Core/CommandHandler');
const EventHandler = require('./core/EventHandler');

const run = async () => {
    await CommandHandler.loadCommands(Bot);
    await EventHandler.loadEvents(Bot);
    await Bot.connect();
};

run().catch((err) => {
    console.log('[ERR]: ', err);
});
