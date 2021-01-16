(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSTogglePassword"] = factory();
	else
		root["HSTogglePassword"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-toggle-password.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-toggle-password.js":
/*!**************************************!*\
  !*** ./src/js/hs-toggle-password.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar _default = /*#__PURE__*/function () {\n  function _default(elem, settings) {\n    _classCallCheck(this, _default);\n\n    this.elem = elem;\n    this.defaults = {\n      classChangeTarget: null,\n      defaultClass: null,\n      showClass: null,\n      show: false\n    };\n    this.settings = settings;\n  }\n\n  _createClass(_default, [{\n    key: \"init\",\n    value: function init() {\n      var context = this,\n          $el = context.elem,\n          dataSettings = $el.getAttribute('data-hs-toggle-password-options') ? JSON.parse($el.getAttribute('data-hs-toggle-password-options')) : {},\n          options = Object.assign(context.defaults, dataSettings, context.settings);\n\n      if (Array.isArray(options.target)) {\n        var targets = [];\n        options.target.forEach(function (target) {\n          targets.push(document.querySelector(target));\n        });\n        options.target = targets;\n        options.classChangeTarget = options.classChangeTarget ? document.querySelector(options.classChangeTarget) : options.target;\n      } else {\n        options.target = document.querySelector(options.target);\n        options.classChangeTarget = options.classChangeTarget ? document.querySelector(options.classChangeTarget) : options.target;\n      }\n\n      if (options.show) {\n        $el.type = \"text\";\n      }\n\n      context._toggleClass(options, options.show);\n\n      context._showPassword($el, options);\n    }\n  }, {\n    key: \"_showPassword\",\n    value: function _showPassword(el, config) {\n      var context = this,\n          $target = config.target;\n\n      if (Array.isArray($target)) {\n        $target.forEach(function (target) {\n          target.addEventListener('click', function (event) {\n            if (el.type === \"password\") {\n              el.type = \"text\";\n\n              context._toggleClass(config, true);\n            } else {\n              el.type = \"password\";\n\n              context._toggleClass(config, false);\n            }\n          });\n        });\n      } else {\n        $target.addEventListener('click', function (event) {\n          if (el.type === \"password\") {\n            el.type = \"text\";\n\n            context._toggleClass(config, true);\n          } else {\n            el.type = \"password\";\n\n            context._toggleClass(config, false);\n          }\n        });\n      }\n    }\n  }, {\n    key: \"_toggleClass\",\n    value: function _toggleClass(config) {\n      var isShow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      var context = this,\n          $target = config.classChangeTarget;\n\n      if (Array.isArray($target)) {\n        $target.forEach(function (target) {\n          if (isShow) {\n            target.classList.add(config.showClass);\n            target.classList.remove(config.defaultClass);\n          } else {\n            target.classList.add(config.defaultClass);\n            target.classList.remove(config.showClass);\n          }\n        });\n      } else {\n        if (isShow) {\n          $target.classList.add(config.showClass);\n          $target.classList.remove(config.defaultClass);\n        } else {\n          $target.classList.add(config.defaultClass);\n          $target.classList.remove(config.showClass);\n        }\n      }\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack://HSTogglePassword/./src/js/hs-toggle-password.js?");

/***/ })

/******/ })["default"];
});