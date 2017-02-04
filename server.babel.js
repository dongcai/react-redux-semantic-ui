//  enable runtime transpilation to use ES6/7 in node

var fs = require('fs');

var babelrc = fs.readFileSync('./.babelrc');
var config;

try {
  config = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

config.ignore = /(bin|node_modules)/;

// TODO ignore build (https://github.com/halt-hammerzeit/universal-webpack#sourcestart-serverbabeljs)

require('babel-register')(config);
