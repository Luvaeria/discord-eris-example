'use strict';

import Eris from 'eris';
import Command from '../../Structures/Command.js';

/**
 * @class
 */
export default class Kick extends Command {
    /**
     * @function constructor
     * @param {Eris.CommandClient} Client
     */
    constructor(Client) {
        super(Client, 'kick', {
            aliases: ['K'],
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
        // console.log(this._client);
        try {
            const member = message.member || message.channel.guild.members.get(message.author.id);
            if (member.permissions.has('kickMembers') && message.mentions.length) {
                let user;
                for (user of message.mentions) {
                    await message.channel.guild.kickMember(user.id);
                    await message.channel.createMessage(user.mention + ' was kicked.');
                }
            }
        } catch (err) {
            this._client.emit('error', err, message.channel.guild.shard.id);
        }
    }
}
