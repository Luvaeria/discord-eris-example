'use strict';

import Eris from 'eris';
import Command from '../../Structures/Command.js';

/**
 * @class
 */
export default class Ban extends Command {
    /**
     * @function constructor
     * @param {Eris.CommandClient} Client
     */
    constructor(Client) {
        super(Client, 'ban', {
            aliases: ['b'],
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
        try {
            const member = message.member || message.channel.guild.members.get(message.author.id);
            if (member.permissions.has('banMembers') && message.mentions.length) {
                let user;
                for (user of message.mentions) {
                    await message.channel.guild.banMember(user.id);
                    await message.channel.createMessage(user.mention + ' was banned.');
                }
            }
        } catch (err) {
            this._client.emit('error', err, message.guild.shard.id);
        }
    }
}
