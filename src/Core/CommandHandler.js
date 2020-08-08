'use strict';

const path = require('path');
const Eris = require('eris');
const Utils = require('./Utils');

const Command = require('./../Structures/Command');

class CommandHandler {
    /**
     * @param {Eris.CommandClient} bot
     */
    async loadCommands(bot) {
        let commandFiles = await Utils.importAll(path.join(__dirname, './../Commands'));
        commandFiles = commandFiles
            .filter(
                /**
                 * @param {String} f
                 */
                (f) => f.endsWith('.js')
            )
            .map((f) => require(f));
        for (const cmd of commandFiles) {
            if (cmd instanceof Command) {
                bot.registerCommand(cmd.name, cmd.run, cmd.options);
            }
        }
        return Promise.resolve();
    }
}

module.exports = new CommandHandler();
