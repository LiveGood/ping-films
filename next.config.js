/* eslint @typescript-eslint/no-var-requires: "off" */
const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');
const withImages = require('next-images');
const path = require('path');

const plugins = [[withVideos, withImages]];

module.exports = withPlugins(plugins);
