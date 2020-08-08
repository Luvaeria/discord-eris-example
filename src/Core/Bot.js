'use strict';

const Eris = require('eris');

const options = {
    compress: true,
    connectionTimeout: 60000,
    guildCreateTimeout: 10000,
    largeThreshold: 250,
    messageLimit: 50,
    getAllUsers: false,
};

const commandOptions = {
    defaultHelpCommand: true,
    description: 'An Eris-based Discord bot',
    ignoreBots: true,
    ignoreSelf: true,
    name: 'ErisBot',
    owner: 'A good person',
    prefix: ['@mention ', '!', '/', '.'],
    defaultCommandOptions: {
        caseInsensitive: true,
        cooldown: 1500,
    },
};

if (!process.env.BOT_TOKEN) throw new ReferenceError('.env#BOT_TOKEN is not defined');

module.exports = new Eris.CommandClient(process.env.BOT_TOKEN, options, commandOptions);
