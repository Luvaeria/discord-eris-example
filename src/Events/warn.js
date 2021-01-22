'use strict';

import Event from './../Structures/Event.js';

/**
 * @class
 * @extends Event
 */
export default class Warn extends Event {
    /**
     * @function constructor
     * @param {Eris.CommandClient} Client
     */
    constructor(Client) {
        super(Client, 'warn');
    }

    /**
     * @function handle
     * @param {String} message
     * @param {Number} shardID
     */
    handle(message, shardID = -1) {
        console.log('[WARN]', '[SHARD ' + shardID + ']', message);
    }
}
