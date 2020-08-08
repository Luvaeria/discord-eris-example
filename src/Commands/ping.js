'use strict';

const Eris = require('eris');
const Command = require('./../Structures/Command');

class Ping extends Command {
    constructor() {
        super('ping', {
            aliases: ['pong'],
            caseInsensitive: true,
            guildOnly: true,
        });
    }

    /**
     * @param {Eris.Message} msg
     */
    async run(msg) {
        return msg.channel.guild.shard.latency + ' ms';
    }
}

module.exports = new Ping();
