'use strict';

import Event from './../Structures/Event.js';
import util from 'util';

/**
 * @class
 * @extends Event
 */
export default class Err extends Event {
    /**
     * @function constructor
     * @param {Eris.CommandClient} Client
     */
    constructor(Client) {
        super(Client, 'error');
    }

    /**
     * @function handle
     * @param {Error} error
     * @param {Number} shardID
     */
    handle(error, shardID = -1) {
        console.log('[ERROR]', '[SHARD ' + shardID + ']', util.inspect(error, true, 0, true));
    }
}
