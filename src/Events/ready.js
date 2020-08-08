'use strict';

const Event = require('./../Structures/Event');

class Ready extends Event {
    constructor() {
        super('ready');
    }

    async run() {
        console.log('Ready!');
    }
}

module.exports = new Ready();
