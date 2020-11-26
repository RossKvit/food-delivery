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

/***/ "./resources/js/Cart.js":
/*!******************************!*\
  !*** ./resources/js/Cart.js ***!
  \******************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cart = /*#__PURE__*/function () {
  function Cart() {
    _classCallCheck(this, Cart);

    this.dataCartKey = 'cartProducts';
    this.cartDishes = this.getDishesList();
    this.initEventListeners();
    this.showHideCartPopup();
    this.initRemoveProdButtons();
    this.initChangeCountInputs();
  }

  _createClass(Cart, [{
    key: "initEventListeners",
    value: function initEventListeners() {
      var self = this;
      document.querySelectorAll('.dishes-page__item-order').forEach(function (el) {
        el.addEventListener('click', function (e) {
          var dishId = e.target.getAttribute('data-dish-id'),
              dishPrice = e.target.getAttribute('data-dish-price');
          self.addCartProduct(dishId, dishPrice);
        });
      });
    }
  }, {
    key: "addCartProduct",
    value: function addCartProduct(id, dishPrice) {
      var currentProductPos = null;

      if (this.cartDishes.length > 0) {
        this.cartDishes.map(function (item, key) {
          if (item.productId === id) {
            currentProductPos = key;
          }
        });
      }

      if (currentProductPos !== null) {
        this.cartDishes[currentProductPos] = {
          count: this.cartDishes[currentProductPos].count + 1,
          productId: id,
          dishPrice: dishPrice
        };
      } else {
        this.cartDishes.push({
          count: 1,
          productId: id,
          dishPrice: dishPrice
        });
      }

      this.updateDishesList();
    }
  }, {
    key: "setCartProductCount",
    value: function setCartProductCount(id, count) {
      var currentProductPos = null;

      if (this.cartDishes.length > 0) {
        this.cartDishes.map(function (item, key) {
          if (item.productId === id) {
            currentProductPos = key;
          }
        });
      }

      if (currentProductPos !== null) {
        this.cartDishes[currentProductPos].count = count;
      } else {
        return false;
      }

      this.updateDishesList();
      return true;
    }
  }, {
    key: "removeProductFromCart",
    value: function removeProductFromCart(id) {
      var currentProductPos = null;
      this.cartDishes.map(function (item, key) {
        if (item.productId === id) {
          currentProductPos = key;
        }
      });

      if (currentProductPos !== null) {
        this.cartDishes.splice(currentProductPos, 1);
      }

      this.updateDishesList();
    }
  }, {
    key: "getCartTotal",
    value: function getCartTotal() {
      var totalPrice = 0;
      this.cartDishes.forEach(function (dish) {
        totalPrice += dish.count * dish.dishPrice;
      });
      return totalPrice;
    }
  }, {
    key: "getCartProductCount",
    value: function getCartProductCount() {
      var productCount = 0;
      console.log(this.cartDishes);

      if (this.cartDishes.length > 0) {
        this.cartDishes.forEach(function (dish) {
          productCount += dish.count;
        });
      }

      return productCount;
    }
  }, {
    key: "showHideCartPopup",
    value: function showHideCartPopup() {
      var cartHtml = document.querySelector('.cart-popup');

      if (cartHtml) {
        console.log(!cartHtml.classList.contains('cart-popup_visible'));

        if (this.cartDishes.length > 0 && !cartHtml.classList.contains('cart-popup_visible')) {
          cartHtml.classList.add('cart-popup_visible');
        } else if (this.cartDishes.length === 0) {
          cartHtml.classList.remove('cart-popup_visible');
        }

        cartHtml.querySelector('.cart-popup__counter-value').innerHTML = this.getCartProductCount() + ' ($' + this.getCartTotal() + ')';
      }
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
      var cookieList = document.cookie.split(";"),
          self = this;
      cookieList.forEach(function (cookieItem, key) {
        cookieItem = cookieItem.split("=");
        var cookieItemObj = {};
        cookieItemObj[cookieItem[0].trim()] = cookieItem[1];
        cookieList[key] = cookieItemObj;
      });
      var dishesList = cookieList.filter(function (item) {
        if (typeof item[self.dataCartKey] !== 'undefined') {
          return item[self.dataCartKey];
        }
      });

      if (typeof dishesList[0] !== 'undefined' && dishesList[0][self.dataCartKey]) {
        return JSON.parse(dishesList[0][self.dataCartKey]);
      } else {
        return [];
      }
    }
  }, {
    key: "initRemoveProdButtons",
    value: function initRemoveProdButtons() {
      var self = this;

      if (document.querySelector('.order-cart__prod-item-remove')) {
        document.querySelectorAll('.order-cart__prod-item-remove').forEach(function (el) {
          el.addEventListener('click', function (e) {
            var prodId = e.target.closest('.order-cart__prod-item').getAttribute('data-id');
            self.removeProductFromCart(prodId);
          });
        });
      }
    }
  }, {
    key: "initChangeCountInputs",
    value: function initChangeCountInputs() {
      var self = this;

      if (document.querySelector('.order-cart__prod-item-count-value')) {
        document.querySelectorAll('.order-cart__prod-item-count-value').forEach(function (el) {
          el.addEventListener('change', function (e) {
            var prodId = e.target.closest('.order-cart__prod-item').getAttribute('data-id');

            if (prodId) {
              self.setCartProductCount(prodId, e.target.value);
            } else {
              alert('Item not founded');
            }
          });
        });
      }
    }
  }]);

  return Cart;
}();



/***/ }),

/***/ "./resources/js/Order.js":
/*!*******************************!*\
  !*** ./resources/js/Order.js ***!
  \*******************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart */ "./resources/js/Cart.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Order = /*#__PURE__*/function () {
  function Order() {
    _classCallCheck(this, Order);

    this.form = document.querySelector('.order-form') ? document.querySelector('.order-form') : false;

    if (this.form !== false) {
      this.cart = new _Cart__WEBPACK_IMPORTED_MODULE_0__["Cart"]();
      console.log(this.cart);
      this.initEventListeners();
    }
  }

  _createClass(Order, [{
    key: "initEventListeners",
    value: function initEventListeners() {
      var self = this;

      if (document.querySelector('.order-form__submit')) {
        document.querySelector('.order-form__submit').addEventListener('click', function (e) {
          e.preventDefault();
          var params = {
            name: self.form.name.value,
            address: self.form.address.value,
            phone: self.form.phone.value,
            orderList: self.cart.getDishesList()
          };
          console.log({
            order: params
          });
          self.httpRequest('/create-order', null, JSON.stringify({
            order: params
          }));
        });
      }
    }
  }, {
    key: "httpRequest",
    value: function httpRequest(url, callback, params) {
      var httpRequest = new XMLHttpRequest(),
          csrfToken = document.querySelector('.order-form').getAttribute('data-csrf-token');

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
  }]);

  return Order;
}();



/***/ }),

/***/ "./resources/js/Style.js":
/*!*******************************!*\
  !*** ./resources/js/Style.js ***!
  \*******************************/
/*! exports provided: Style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Style = /*#__PURE__*/function () {
  function Style() {
    _classCallCheck(this, Style);

    this.initEventListeners();
  }

  _createClass(Style, [{
    key: "initEventListeners",
    value: function initEventListeners() {
      window.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.dishes-page__item-image').forEach(function (elem) {
          elem.addEventListener('click', function (e) {
            e.target.parentElement.classList.toggle('dishes-page__item_open-desc');
          });
        });
      });
    }
  }]);

  return Style;
}();



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart */ "./resources/js/Cart.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Style */ "./resources/js/Style.js");
/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Order */ "./resources/js/Order.js");



/*
class App{
    constructor(){
    }
}
console.log(Cart);
let app;
*/

document.addEventListener('DOMContentLoaded', function () {
  //app = new App();
  new _Style__WEBPACK_IMPORTED_MODULE_1__["Style"]();
  var activeCart = new _Cart__WEBPACK_IMPORTED_MODULE_0__["Cart"]();
  new _Order__WEBPACK_IMPORTED_MODULE_2__["Order"](activeCart);
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