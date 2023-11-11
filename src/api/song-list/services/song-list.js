'use strict';

/**
 * song-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::song-list.song-list');
