'use strict';

const Event = require('./../Structures/Event');

class Err extends Event {
    constructor() {
        super('error');
    }

    /**
     * @param {Error} error
     */
    async run(error) {
        console.log('[ERROR]: ', error);
    }
}

module.exports = new Err();
