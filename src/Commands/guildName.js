'use strict';

const Eris = require('eris');
const Command = require('./../Structures/Command');

class GuildName extends Command {
    constructor() {
        super('guildName', {
            aliases: ['gn'],
            caseInsensitive: true,
            guildOnly: true,
        });
    }

    /**
     * @param {Eris.Message} msg
     */
    async run(msg) {
        return msg.channel.guild.name;
    }
}

module.exports = new GuildName();
