'use strict';

import path from 'path';
import url from 'url';

import { CommandClient } from 'eris';

import Command from './Structures/Command.js';
import Event from './Structures/Event.js';
import Utils from './Utils.js';

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
        this._registry = new Array();
    }

    /**
     * @function _start
     * @async
     * @return {Promise}
     */
    async _start() {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        await this._register(Event, path.join(__dirname, './Events'));
        await this._register(Command, path.join(__dirname, './Commands'));
        await this.connect();
    }

    /**
     * @function _register
     * @async
     * @param {Event|Command} reference
     * @param {String} directory
     * @return {Promise}
     */
    async _register(reference, directory) {
        const files = await Utils.importAll(directory);
        let file, model;

        for (file of files) {
            if (file.endsWith('.js') || file.endsWith('.mjs')) {
                model = await import(url.pathToFileURL(file).href);
                if (Object.prototype.hasOwnProperty.call(model, 'default')) {
                    model = model.default;
                    if (Object.prototype.hasOwnProperty.call(model, 'prototype') && model.prototype instanceof reference) {
                        this._registry.push(new model(this));
                    }
                }
            }
        }
    }
}
