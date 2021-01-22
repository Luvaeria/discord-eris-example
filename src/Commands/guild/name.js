'use strict';

import Eris from 'eris';
import Command from './../../Structures/Command.js';

/**
 * @class
 */
export default class GuildName extends Command {
    /**
     * @function constructor
     * @param {Eris.CommandClient} Client
     */
    constructor(Client) {
        super(Client, 'name', {
            aliases: ['guildName'],
            caseInsensitive: true,
            guildOnly: true,
        });
    }

    /**
     * @function generator
     * @async
     * @param {Eris.Message} msg
     * @return {Promise<Eris.Message>}
     */
    async generator(message) {
        return message.channel.createMessage(message.channel.guild.name);
    }
}
