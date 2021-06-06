/* eslint @typescript-eslint/no-var-requires: "off" */
const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos')

const plugins = [[withVideos]];

module.exports = withPlugins(plugins);
