'use strict';

import Eris from 'eris';
import Command from './../../Structures/Command.js';

/**
 * @class
 */
export default class Ping extends Command {
    /**
     * @function constructor
     * @param {Eris.CommandClient} Client
     */
    constructor(Client) {
        super(Client, 'ping', {
            aliases: ['pong'],
            caseInsensitive: true,
            guildOnly: false,
        });
    }

    /**
     * @function generator
     * @async
     * @param {Eris.Message} msg
     * @return {Promise<Eris.Message>}
     */
    async generator(msg) {
        let hrTime = process.hrtime();
        const message = await msg.channel.createMessage('Working...');
        hrTime = process.hrtime(hrTime);

        return message.edit('Ping: ' + hrTime[0] + 's ' + hrTime[1] / 1000000 + 'ms');
    }
}
