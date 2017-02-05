var serverConfiguration = require('universal-webpack').serverConfiguration;
var settings = require('./universal-settings.json');
var configuration = require('./dev.config');

settings.exclude_from_externals = [
  /(.less|.scss|.png)$/
];

module.exports = serverConfiguration(configuration, settings);
