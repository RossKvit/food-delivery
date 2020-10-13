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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//require('./bootstrap');
window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.dishes-page__item-image').forEach(function (elem) {
    elem.addEventListener('click', function (e) {
      e.target.parentElement.classList.toggle('dishes-page__item_open-desc');
    });
  });
});

var Order = /*#__PURE__*/function () {
  function Order() {
    _classCallCheck(this, Order);

    this.dataCartKey = 'cartProducts';
    this.cartDishes = this.getDishesList();
    this.initEventListeners();
    this.showHideCartPopup();
  }

  _createClass(Order, [{
    key: "initEventListeners",
    value: function initEventListeners() {
      var self = this;
      document.querySelectorAll('.dishes-page__item-order').forEach(function (el) {
        el.addEventListener('click', function (e) {
          var dishId = e.target.getAttribute('data-dish-id');
          self.addProductToCart(dishId);
        });
      });
    }
  }, {
    key: "addProductToCart",
    value: function addProductToCart(id) {
      var currentProductPos = null;
      this.cartDishes.map(function (item, key) {
        if (item.productId === id) {
          currentProductPos = key;
        }
      });

      if (currentProductPos !== null) {
        this.cartDishes[currentProductPos] = {
          count: this.cartDishes[currentProductPos].count + 1,
          productId: id
        };
      } else {
        this.cartDishes.push({
          count: 1,
          productId: id
        });
      }

      this.updateDishesList(); //this.httpRequest( '/create-order', null, JSON.stringify( params ) );
    }
  }, {
    key: "showHideCartPopup",
    value: function showHideCartPopup() {
      console.log(this.cartDishes);

      if (this.cartDishes.length > 0) {
        var cartHtml = document.querySelector('.cart-popup');

        if (cartHtml) {
          cartHtml.classList.toggle('cart-popup_visible');
        }
      }
    }
  }, {
    key: "httpRequest",
    value: function httpRequest(url, callback, params) {
      var httpRequest = new XMLHttpRequest(),
          csrfToken = document.querySelector('.dishes-page__list').getAttribute('data-csrf-token');

      if (!csrfToken) {
        return;
      }

      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
          // XMLHttpRequest.DONE == 4
          if (httpRequest.status == 200) {
            console.log(httpRequest.responseText);
          } else if (httpRequest.status == 400) {
            alert('There was an error 400');
          } else {
            alert('something else other than 200 was returned');
          }
        }
      };

      httpRequest.open("POST", url, true);
      httpRequest.setRequestHeader("Content-Type", "application/json"); // "application/json"

      httpRequest.setRequestHeader("X-CSRF-TOKEN", csrfToken);
      httpRequest.send(params);
    }
  }, {
    key: "updateDishesList",
    value: function updateDishesList() {
      document.cookie = this.dataCartKey + "=" + JSON.stringify(this.cartDishes) + "; expires= 01 Jan 2025 00:00:00 UTC; path=/;";
      this.showHideCartPopup();
    }
  }, {
    key: "getDishesList",
    value: function getDishesList() {
      var cookieList = document.cookie.split(";");
      cookieList.map(function (cookieItem) {
        cookieItem = cookieItem.split("=");
        var cookieItemObj = {};
        cookieItemObj[cookieItem[0]] = cookieItem[1];
        return cookieItemObj;
      });
      console.log('cookieList');
      console.log(cookieList);

      if (cookieList[this.dataCartKey]) {
        return JSON.parse(cookieList[this.dataCartKey]);
      } else {
        return [];
      }
    }
  }]);

  return Order;
}();

document.addEventListener('DOMContentLoaded', function () {
  new Order(); //.constructor();
});

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

__webpack_require__(/*! C:\OSPanel\domains\food-delivery.com\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\OSPanel\domains\food-delivery.com\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });