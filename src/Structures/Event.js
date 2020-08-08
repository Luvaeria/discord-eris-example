'use strict';

module.exports = class Event {
    /**
     * @param {String} label
     */
    constructor(label) {
        this.name = label;
    }

    async run() {
        throw ReferenceError('Event#Run must be a function.');
    }
};
