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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var smallImage = document.createElement('img');
smallImage.src = _small2.default;
document.body.appendChild(smallImage);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;
document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony default export */ exports["default"] = __webpack_require__.p + "6297e62be687215b1be30333f1ae5d30.jpg";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony default export */ exports["default"] = "data:image/jpeg;base64,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";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// doesn't export any code so this syntax just call the js and it runs

var total = (0, _sum2.default)(1, 2); // There is an export available, thus assigning it to a variable to use

console.log(total);

/***/ }
/******/ ]);