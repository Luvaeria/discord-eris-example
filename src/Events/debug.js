'use strict';

const Event = require('./../Structures/Event');

class Debug extends Event {
    constructor() {
        super('debug');
    }

    /**
     * @param {String} message
     * @param {Number} shardID
     */
    async run(message, shardID) {
        console.log('[DEBUG][SHARD ' + shardID + ']: ', message);
    }
}

module.exports = new Debug();
