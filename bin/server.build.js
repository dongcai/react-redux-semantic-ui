module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3001/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** external "app" ***!
  \**********************/
/***/ (function(module, exports) {

module.exports = require("app");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** external "babel-runtime/helpers/extends" ***!
  \************************************************/
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** external "helpers/ApiClient" ***!
  \************************************/
/***/ (function(module, exports) {

module.exports = require("helpers/ApiClient");

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** external "helpers/Html" ***!
  \*******************************/
/***/ (function(module, exports) {

module.exports = require("helpers/Html");

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** external "http-proxy" ***!
  \*****************************/
/***/ (function(module, exports) {

module.exports = require("http-proxy");

/***/ }),
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 12 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** external "pretty-error" ***!
  \*******************************/
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 13 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 14 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 15 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 16 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 17 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 18 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** external "react-router/lib/createMemoryHistory" ***!
  \*******************************************************/
/***/ (function(module, exports) {

module.exports = require("react-router/lib/createMemoryHistory");

/***/ }),
/* 19 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** external "redux-connect" ***!
  \********************************/
/***/ (function(module, exports) {

module.exports = require("redux-connect");

/***/ }),
/* 20 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** external "redux/create" ***!
  \*******************************/
/***/ (function(module, exports) {

module.exports = require("redux/create");

/***/ }),
/* 21 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** external "routes" ***!
  \*************************/
/***/ (function(module, exports) {

module.exports = require("routes");

/***/ }),
/* 22 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 23 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ 2);

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 1);

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = function (parameters) {
  process.on('unhandledRejection', function (error) {
    return console.error(error);
  });

  var targetUrl = 'http://' + _config2.default.apiHost + ':' + _config2.default.apiPort;
  var pretty = new _prettyError2.default();
  var app = (0, _express2.default)();
  var server = new _http2.default.Server(app);
  var proxy = _httpProxy2.default.createProxyServer({
    target: targetUrl,
    ws: true
  });

  app.use((0, _cookieParser2.default)());
  app.use((0, _compression2.default)());
  app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, '..', 'static', 'favicon.ico')));
  app.get('/manifest.json', function (req, res) {
    return res.sendFile(_path2.default.join(__dirname, '..', 'static', 'manifest.json'));
  });

  app.use(_express2.default.static(_path2.default.join(__dirname, '..', 'static')));

  app.use(function (req, res, next) {
    res.setHeader('Service-Worker-Allowed', '*');
    res.setHeader('X-Forwarded-For', req.ip);
    return next();
  });

  // Proxy to API server
  app.use('/api', function (req, res) {
    proxy.web(req, res, { target: targetUrl });
  });

  app.use('/ws', function (req, res) {
    proxy.web(req, res, { target: targetUrl + '/ws' });
  });

  server.on('upgrade', function (req, socket, head) {
    proxy.ws(req, socket, head);
  });

  // added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
  proxy.on('error', function (error, req, res) {
    if (error.code !== 'ECONNRESET') {
      console.error('proxy error', error);
    }
    if (!res.headersSent) {
      res.writeHead(500, { 'content-type': 'application/json' });
    }

    var json = { error: 'proxy_error', reason: error.message };
    res.end((0, _stringify2.default)(json));
  });

  app.use(function (req, res) {
    if (true) {
      // Do not cache webpack stats: the script file would change since
      // hot module replacement is enabled in the development env
      // webpackIsomorphicTools.refresh(); // TODO check this for universal-webpack
    }
    var client = new _ApiClient2.default(req);
    var memoryHistory = (0, _createMemoryHistory2.default)(req.originalUrl);
    var store = (0, _create2.default)(memoryHistory, client);
    var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);

    function hydrateOnClient() {
      res.send('<!doctype html>\n      ' + _server2.default.renderToString(_react2.default.createElement(_Html2.default, { assets: parameters.chunks(), store: store })));
    }

    if (__DISABLE_SSR__) {
      return hydrateOnClient();
    }

    // Re-configure restApp for apply client cookies
    (0, _app.exposeInitialRequest)(req);

    (0, _reactRouter.match)({
      history: history,
      routes: (0, _routes2.default)(store),
      location: req.originalUrl
    }, function (error, redirectLocation, renderProps) {
      if (redirectLocation) {
        res.redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (error) {
        console.error('ROUTER ERROR:', pretty.render(error));
        res.status(500);
        hydrateOnClient();
      } else if (renderProps) {
        (0, _reduxConnect.loadOnServer)((0, _extends3.default)({}, renderProps, { store: store, helpers: { client: client } })).then(function () {
          var content = _react2.default.createElement(
            _reactRedux.Provider,
            { store: store, key: 'provider' },
            _react2.default.createElement(_reduxConnect.ReduxAsyncConnect, renderProps)
          );

          res.status(200);

          global.navigator = { userAgent: req.headers['user-agent'] };

          var component = _react2.default.createElement(_Html2.default, { assets: parameters.chunks(), component: content, store: store });

          res.send('<!doctype html>' + _server2.default.renderToString(component));
        }).catch(function (mountError) {
          console.error('MOUNT ERROR:', pretty.render(mountError));
          res.status(500);
          hydrateOnClient();
        });
      } else {
        res.status(404).send('Not found');
      }
    });
  });

  if (_config2.default.port) {
    server.listen(_config2.default.port, function (err) {
      if (err) {
        console.error(err);
      }
      console.info('----\n==> ✅  %s is running, talking to API server on %s.', _config2.default.app.title, _config2.default.apiPort);
      console.info('==> 💻  Open http://%s:%s in a browser to view the app.', _config2.default.host, _config2.default.port);
    });
  } else {
    console.error('==>     ERROR: No PORT environment variable has been specified');
  }
};

var _express = __webpack_require__(/*! express */ 6);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(/*! react */ 13);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ 14);

var _server2 = _interopRequireDefault(_server);

var _serveFavicon = __webpack_require__(/*! serve-favicon */ 22);

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _compression = __webpack_require__(/*! compression */ 3);

var _compression2 = _interopRequireDefault(_compression);

var _cookieParser = __webpack_require__(/*! cookie-parser */ 5);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _httpProxy = __webpack_require__(/*! http-proxy */ 10);

var _httpProxy2 = _interopRequireDefault(_httpProxy);

var _path = __webpack_require__(/*! path */ 11);

var _path2 = _interopRequireDefault(_path);

var _prettyError = __webpack_require__(/*! pretty-error */ 12);

var _prettyError2 = _interopRequireDefault(_prettyError);

var _http = __webpack_require__(/*! http */ 9);

var _http2 = _interopRequireDefault(_http);

var _reactRouter = __webpack_require__(/*! react-router */ 16);

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 17);

var _reduxConnect = __webpack_require__(/*! redux-connect */ 19);

var _createMemoryHistory = __webpack_require__(/*! react-router/lib/createMemoryHistory */ 18);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _reactRedux = __webpack_require__(/*! react-redux */ 15);

var _config = __webpack_require__(/*! config */ 4);

var _config2 = _interopRequireDefault(_config);

var _create = __webpack_require__(/*! redux/create */ 20);

var _create2 = _interopRequireDefault(_create);

var _ApiClient = __webpack_require__(/*! helpers/ApiClient */ 7);

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _Html = __webpack_require__(/*! helpers/Html */ 8);

var _Html2 = _interopRequireDefault(_Html);

var _routes = __webpack_require__(/*! routes */ 21);

var _routes2 = _interopRequireDefault(_routes);

var _app = __webpack_require__(/*! app */ 0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/bertho/dev/react-redux-universal-hot-example/src/server.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/bertho/dev/react-redux-universal-hot-example/src/server.js"); } } })();

/***/ })
/******/ ]);
//# sourceMappingURL=server.build.js.map