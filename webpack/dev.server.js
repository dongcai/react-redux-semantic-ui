var serverConfiguration = require('universal-webpack').serverConfiguration;
var settings = require('./universal-settings.json');
var configuration = require('./dev.config');

module.exports = serverConfiguration(configuration, settings);
