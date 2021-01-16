(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSScrollspy"] = factory();
	else
		root["HSScrollspy"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-scrollspy.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-scrollspy.js":
/*!********************************!*\
  !*** ./src/js/hs-scrollspy.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSScrollspy; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSScrollspy Plugin\n* @version: 3.0.1 (Sat, 11 Jul 2020)\n* @requires: jQuery v3.0 or later, Bootstrap 4.5 or later\n* @author: HtmlStream\n* @event-namespace: .HSScrollspy\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2020 Htmlstream\n*/\nvar HSScrollspy = /*#__PURE__*/function () {\n  function HSScrollspy(element, config) {\n    _classCallCheck(this, HSScrollspy);\n\n    this.element = element;\n    this.defaults = {\n      topLevelComponent: 'html, body',\n      duration: 400,\n      easing: 'linear',\n      beforeScroll: null,\n      afterScroll: null\n    };\n    this.config = config;\n  }\n\n  _createClass(HSScrollspy, [{\n    key: \"init\",\n    value: function init() {\n      var self = this,\n          element = self.element,\n          BSData = {\n        offset: element.data('offset') ? element.data('offset') : 0,\n        target: element.data('target') ? element.data('target') : null,\n        method: element.data('method') ? element.data('method') : 'auto'\n      },\n          dataSettings = $(element).attr('data-hs-scrollspy-options') ? JSON.parse($(element).attr('data-hs-scrollspy-options')) : {};\n      self.config = Object.assign({}, self.defaults, BSData, dataSettings, self.config);\n      console.log(self.config);\n\n      self._bindEvents();\n\n      $(element).scrollspy(self.config);\n    }\n  }, {\n    key: \"_bindEvents\",\n    value: function _bindEvents() {\n      var self = this;\n      $(self.config.target).on('click', 'a:not([href=\"#\"]):not([href=\"#0\"])', function (e) {\n        var $this = this,\n            hash,\n            offsetTop;\n        e.preventDefault();\n        var promise = new Promise(function (resolve) {\n          if ($.isFunction(self.config.beforeScroll)) {\n            self.config.beforeScroll(resolve);\n          } else {\n            resolve('completed');\n          }\n        });\n        promise.then(function (completed) {\n          if ($this.hash !== '' && $($this.hash).length) {\n            hash = $this.hash;\n            offsetTop = self.config.topLevelComponent === 'html, body' ? $(hash).offset().top + 2 - self.config.offset : $(self.config.topLevelComponent).scrollTop() - $(self.config.topLevelComponent).offset().top + ($(hash).offset().top + 2 - self.config.offset); // Smooth scroll\n\n            $(self.config.topLevelComponent).animate({\n              scrollTop: offsetTop\n            }, {\n              duration: self.config.duration,\n              easing: self.config.easing,\n              complete: function complete() {\n                if (history.replaceState) {\n                  history.replaceState(null, null, hash);\n                }\n\n                if ($.isFunction(self.config.afterScroll)) {\n                  self.config.afterScroll();\n                }\n              }\n            });\n            return false;\n          }\n        });\n      });\n    }\n  }]);\n\n  return HSScrollspy;\n}();\n\n\n\n//# sourceURL=webpack://HSScrollspy/./src/js/hs-scrollspy.js?");

/***/ })

/******/ })["default"];
});