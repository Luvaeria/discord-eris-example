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
    constructor(client, name, once = false) {
        super(client);
        once ? this._client.once(name, this.handle.bind(this)) : this._client.on(name, this.handle.bind(this));
    }

    /**
     * @function handle
     */
    handle() {
        throw new ReferenceError(this.constructor.name + '#Handle must be a function.');
    }
}
