require('../server.babel'); // babel registration (runtime transpilation for node)
require('source-map-support/register');

var server = require('universal-webpack').server;
var settings = require('../webpack/universal-settings.json');
var configuration = require('../webpack/dev.config'); // TODO or server
var path = require('path');
var rootDir = path.resolve(__dirname, '..');
// TODO define constants correctly in webpack/dev.config & webpack/prod.config
/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';
global.__DLLS__ = process.env.WEBPACK_DLLS === '1';

/* if (__DEVELOPMENT__) {
  if (!require('piping')({
      hook: true,
      ignore: /(\/\.|~$|\.json|\.scss$)/i
    })) {
    return;
  }
} */

console.log(configuration);

server(configuration, settings);

/* // https://github.com/halt-hammerzeit/webpack-isomorphic-tools
var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack/webpack-isomorphic-tools'))
  .server(rootDir, function () {
    require('../src/server');
  }); */
