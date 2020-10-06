/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\resources\\js\\app.js: Unexpected token, expected \";\" (64:65)\n\n\u001b[0m \u001b[90m 62 | \u001b[39m    addDish( newDishData ){\u001b[0m\n\u001b[0m \u001b[90m 63 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgetDishes()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 64 | \u001b[39m        document\u001b[33m.\u001b[39mcookie \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdataCartKey \u001b[33m+\u001b[39m\u001b[32m\"=\"\u001b[39m\u001b[33m+\u001b[39m \u001b[33mJSON\u001b[39m\u001b[33m.\u001b[39mstringify()dataValue \u001b[33m+\u001b[39m\u001b[32m\"; expires= 01 Jan 2025 00:00:00 UTC; path=/;\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                                                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 65 | \u001b[39m    }\u001b[0m\n\u001b[0m \u001b[90m 66 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 67 | \u001b[39m    getDishes(){\u001b[0m\n    at Parser._raise (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:766:17)\n    at Parser.raiseWithData (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:759:17)\n    at Parser.raise (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:753:17)\n    at Parser.unexpected (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:8966:16)\n    at Parser.semicolon (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:8948:40)\n    at Parser.parseExpressionStatement (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:11970:10)\n    at Parser.parseStatementContent (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:11566:19)\n    at Parser.parseStatement (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:11430:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:12012:25)\n    at Parser.parseBlockBody (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:11998:10)\n    at Parser.parseBlock (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:11982:10)\n    at Parser.parseFunctionBody (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:10962:24)\n    at Parser.parseFunctionBodyAndFinish (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:10945:10)\n    at Parser.parseMethod (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:10882:10)\n    at Parser.pushClassMethod (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:12429:30)\n    at Parser.parseClassMemberWithIsStatic (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:12346:12)\n    at Parser.parseClassMember (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:12288:10)\n    at withTopicForbiddingContext (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:12240:14)\n    at Parser.withTopicForbiddingContext (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:11271:14)\n    at Parser.parseClassBody (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:12217:10)\n    at Parser.parseClass (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:12192:22)\n    at Parser.parseStatementContent (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:11472:21)\n    at Parser.parseStatement (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:11430:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:12012:25)\n    at Parser.parseBlockBody (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:11998:10)\n    at Parser.parseTopLevel (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:11361:10)\n    at Parser.parse (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:13044:10)\n    at parse (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\parser\\lib\\index.js:13097:38)\n    at parser (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (D:\\OpenServer\\OSPanel\\domains\\food-delivery.com\\node_modules\\@babel\\core\\lib\\transform.js:27:41)\n    at transform.next (<anonymous>)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\OpenServer\OSPanel\domains\food-delivery.com\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! D:\OpenServer\OSPanel\domains\food-delivery.com\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });