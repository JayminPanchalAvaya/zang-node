'use strict';
const utils = require('./enum-utils');

/**
 * @module zang-node/enums/transcriptionstatus
 */

/**
 * @readonly
 * @enum {string}
 */
const TranscriptionStatus = {
    COMPLETED: 'completed',
    IN_PROGRESS: 'in-progress',
    FAILED: 'failed'
};

const reverseMap = utils.reverseMap(TranscriptionStatus);

TranscriptionStatus.forValue = function(value) {
    return reverseMap[value];
};

module.exports = TranscriptionStatus;