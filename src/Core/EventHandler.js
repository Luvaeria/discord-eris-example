'use strict';

const path = require('path');
const Utils = require('./Utils');
const Eris = require('eris');

const Event = require('../Structures/Event');

class EventHandler {
    /**
     *
     * @param {Eris.CommandClient} bot
     */
    async loadEvents(bot) {
        let eventFiles = await Utils.importAll(path.join(__dirname, './../Events'));
        eventFiles = eventFiles.filter((file) => file.endsWith('.js')).map((file) => require(file));
        for (const evt of eventFiles) {
            if (evt instanceof Event) bot.on(evt.name, evt.run);
        }
        return Promise.resolve();
    }
}

module.exports = new EventHandler();
