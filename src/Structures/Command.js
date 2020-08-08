'use strict';

module.exports = class Command {
    /**
     * @param {String} label
     * @param {Object} opt
     */
    constructor(label, opt) {
        this.name = label;
        this.options = opt;
    }

    async run() {
        throw ReferenceError('Command#Run must be a function.');
    }
};
