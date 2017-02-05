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

// config.ignore = /(node_modules|server.build.js$|(.scss|.less|.png)$)/;
config.ignore = /(node_modules|(.scss|.less|.png))/;

require('babel-register')(config);
