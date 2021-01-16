'use strict';

import dotenv from 'dotenv';
import Eris from 'eris';
import CustomClient from './src/Client.js';

dotenv.config();

if (Object.prototype.hasOwnProperty.call(process, 'env')) {
    if (Object.prototype.hasOwnProperty.call(process.env, 'BOT_TOKEN') === false) {
        throw new ReferenceError('.env#BOT_TOKEN is not defined');
    }
} else {
    throw new ReferenceError('Environment variables are not defined. Please check that "dotenv" has been configured.');
}

/**
 * @type {Eris.ClientOptions}
 */
const options = {
    compress: true, // Whether to request WebSocket data to be compressed or not
    connectionTimeout: 60000, // How long in milliseconds to wait for the connection to handshake with the server
    guildCreateTimeout: 10000, // How long in milliseconds to wait for a GUILD_CREATE before "ready" is fired. Increase this value if you notice missing guilds
    intents: [
        // A list of intents, or raw bitmask value describing the intents to subscribe to. "presence" intent must be enabled on your application's page to be used.
        'guilds',
        'guildMessages',
        'directMessages',
    ],
    largeThreshold: 250, // The maximum number of offline users per guild during initial guild data transmission
    messageLimit: 50, // The maximum size of a channel message cache
    getAllUsers: false, // Get all the users in every guild. Ready time will be severely delayed
};

/**
 * @type {Eris.CommandClientOptions}
 */
const commandOptions = {
    defaultHelpCommand: true, // Whether to register the default help command or not
    description: 'An Eris-based Discord bot', // The description to show in the default help command
    ignoreBots: true, // Whether to ignore bot accounts or not
    ignoreSelf: true, // Whether to ignore the bot's own account or not
    name: 'ErisBot', // The bot name to show in the default help command
    owner: 'A good person', // The owner to show in the default help command
    prefix: ['@mention ', '.'], // The bot prefix. Can be either an array of prefixes or a single prefix. "@mention" will be automatically replaced with the bot's actual mention
    defaultCommandOptions: {
        // Default command options. This object takes the same options as a normal Command
        caseInsensitive: true, // Whether the command label (and aliases) is case insensitive or not
        cooldown: 1500, // The cooldown between command usage in milliseconds
    },
};

const Bot = new CustomClient(options, commandOptions);

Bot.start().catch(Bot.error);
