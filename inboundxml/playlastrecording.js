'use strict';

/**
 * @module
 */

const utils = require('./xml-utils');

/**
 * Creates a PlayLastRecording element.
 * @returns {Object} XML element
 */
module.exports = function createElement() {
    return utils.createNode({
        name: 'PlayLastRecording'
    });
};


