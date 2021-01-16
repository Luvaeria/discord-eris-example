'use strict';

import Eris from 'eris';

export default class Base {
    /**
     * @function constructor
     * @param {Eris.CommandClient} CommandClient
     */
    constructor(CommandClient) {
        this._client = CommandClient;
    }
}
