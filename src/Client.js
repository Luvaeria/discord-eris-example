'use strict';

import { CommandClient } from 'eris';
import Commands from './Commands/index.js';
import Events from './Events/index.js';

/**
 * @class
 * @extends CommandClient
 */
export default class CustomClient extends CommandClient {
    /**
     * @function constructor
     * @param {Eris.ClientOptions} options
     * @param {Eris.CommandClientOptions} commandOptions
     */
    constructor(options, commandOptions) {
        super(process.env.BOT_TOKEN, options, commandOptions);
    }

    /**
     * @function start
     * @async
     * @return {Promise}
     */
    async start() {
        this.register(Events);
        this.register(Commands);
        await this.connect();
    }

    /**
     * @function register
     * @param {Object} elements
     */
    register(elements) {
        let element;
        for (element in elements) {
            element = new elements[element](this);
        }
    }
}
