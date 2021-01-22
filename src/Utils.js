'use strict';

import path from 'path';
import fs from 'fs';

class Utils {
    /**
     * @function importAll
     * @param {String} path
     * @static
     * @async
     * @returns {Promise<String[]>}
     */
    static async importAll(directory) {
        let result = new Array(),
            elements = fs.readdirSync(directory),
            element,
            sub;

        for (element of elements) {
            const elementPath = path.join(directory, element);
            if (fs.statSync(elementPath).isDirectory()) {
                sub = await this.importAll(elementPath);
                result = result.concat(sub);
            } else {
                result.push(elementPath);
            }
        }
        return result;
    }
}

export default Utils;
