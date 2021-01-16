'use strict';

import Eris from 'eris';
import Event from './../Structures/Event.js';

/**
 * @class
 * @extends Event
 */
class Ready extends Event {
    /**
     * @function constructor
     * @param {Eris.CommandClient} Client
     */
    constructor(Client) {
        super(Client, 'ready');
    }

    /**
     * @function handle
     */
    handle() {
        console.log('Ready!');
    }
}

export default Ready;
