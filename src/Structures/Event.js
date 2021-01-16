'use strict';

import Eris from 'eris';
import Base from './Base.js';

/**
 * @class
 */
export default class Event extends Base {
    /**
     * @function constructor
     * @param {Eris.CommandClient} client
     * @param {String} name
     */
    constructor(client, name) {
        super(client);
        this._client.on(name, this.handle.bind(this));
    }

    /**
     * @function handle
     */
    handle() {
        throw new ReferenceError(this.constructor.name + '#Run must be a function.');
    }
}
