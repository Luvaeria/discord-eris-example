'use strict';

const fs = require('fs');
const path = require('path');

class Utils {
    /**
     *
     * @param {String} dir
     * @returns {Promise}
     */
    async importAll(dir) {
        const result = new Array();
        const elements = fs.readdirSync(dir);
        for (const e of elements) {
            const ePath = path.join(dir, e);
            result.push(fs.statSync(ePath).isDirectory() ? await this.importAll(ePath) : ePath);
        }
        return Promise.resolve(result);
    }
}

module.exports = new Utils();
