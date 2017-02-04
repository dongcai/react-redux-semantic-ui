var clientConfiguration = require('universal-webpack').clientConfiguration;
var settings = require('./universal-settings.json');
var configuration = require('./dev.config');

module.exports = clientConfiguration(configuration, settings);
