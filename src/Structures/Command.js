'use strict';

import Eris from 'eris';
import Base from './Base.js';

/**
 * @class
 * @extends Base
 */
export default class Command extends Base {
    /**
     * @function constructor
     * @param {Eris.CommandClient} client
     * @param {String} label
     * @param {Eris.CommandOptions} options
     */
    constructor(client, label, options) {
        super(client);
        this._client.registerCommand(label, this.generator.bind(this), options);
    }

    /**
     * @function generator
     */
    generator() {
        throw new ReferenceError(this.constructor.name + '#Generator must be a function.');
    }
}
