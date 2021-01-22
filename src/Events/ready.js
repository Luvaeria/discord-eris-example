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
        super(Client, 'ready', true);
    }

    /**
     * @function handle
     */
    handle() {
        console.log('Ready! Connected as ' + this._client.user.username + '#' + this._client.user.discriminator + ' !');
    }
}

export default Ready;
