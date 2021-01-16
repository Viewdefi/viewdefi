(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSFullscreen"] = factory();
	else
		root["HSFullscreen"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-fullscreen.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-fullscreen.js":
/*!*********************************!*\
  !*** ./src/js/hs-fullscreen.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _removeClass = __webpack_require__(/*! ./methods/remove-class */ \"./src/js/methods/remove-class.js\");\n\nvar _removeClass2 = _interopRequireDefault(_removeClass);\n\nvar _toggleClass = __webpack_require__(/*! ./methods/toggle-class */ \"./src/js/methods/toggle-class.js\");\n\nvar _toggleClass2 = _interopRequireDefault(_toggleClass);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar HSFullscreen = function () {\n\tfunction HSFullscreen(elem, settings) {\n\t\t_classCallCheck(this, HSFullscreen);\n\n\t\tthis.elem = elem;\n\t\tthis.defaults = {\n\t\t\ttargetEl: null,\n\t\t\tmainContainerSelector: 'body',\n\t\t\ttoggleClassName: '.hs-fullscreen',\n\t\t\tpreventScrollClassName: '.hs-fullscreen-on'\n\t\t};\n\t\tthis.settings = settings;\n\t}\n\n\t_createClass(HSFullscreen, [{\n\t\tkey: \"init\",\n\t\tvalue: function init() {\n\t\t\tvar context = this,\n\t\t\t    $el = context.elem,\n\t\t\t    dataSettings = $el.attr('data-hs-fullscreen-options') ? JSON.parse($el.attr('data-hs-fullscreen-options')) : {},\n\t\t\t    options = $.extend(true, context.defaults, dataSettings, context.settings);\n\n\t\t\t// context._templateInnerFunction();\n\n\t\t\t$el.on('click', function () {\n\t\t\t\t(0, _toggleClass2.default)($(options.targetEl), options);\n\t\t\t});\n\n\t\t\t$(document).on('keydown', function (e) {\n\t\t\t\tif (!$(options.targetEl).hasClass(options.toggleClassName.slice(1))) return;\n\n\t\t\t\tif (e.keyCode === 27) {\n\t\t\t\t\t(0, _removeClass2.default)($(options.targetEl), options);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\n\t\t// _templateInnerFunction() {\n\t\t//\n\t\t// }\n\n\t}]);\n\n\treturn HSFullscreen;\n}();\n\nexports.default = HSFullscreen;\n\n//# sourceURL=webpack://HSFullscreen/./src/js/hs-fullscreen.js?");

/***/ }),

/***/ "./src/js/methods/add-class.js":
/*!*************************************!*\
  !*** ./src/js/methods/add-class.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = fullscreenAddClass;\nfunction fullscreenAddClass(el, params) {\n\tvar options = params;\n\n\tel.addClass(options.toggleClassName.slice(1));\n\n\t$(options.mainContainerSelector).addClass(options.preventScrollClassName.slice(1));\n}\n\n//# sourceURL=webpack://HSFullscreen/./src/js/methods/add-class.js?");

/***/ }),

/***/ "./src/js/methods/remove-class.js":
/*!****************************************!*\
  !*** ./src/js/methods/remove-class.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = fullscreenRemoveClass;\nfunction fullscreenRemoveClass(el, params) {\n\tvar options = params;\n\n\tel.removeClass(options.toggleClassName.slice(1));\n\n\t$(options.mainContainerSelector).removeClass(options.preventScrollClassName.slice(1));\n}\n\n//# sourceURL=webpack://HSFullscreen/./src/js/methods/remove-class.js?");

/***/ }),

/***/ "./src/js/methods/toggle-class.js":
/*!****************************************!*\
  !*** ./src/js/methods/toggle-class.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = fullscreenToggleClass;\n\nvar _addClass = __webpack_require__(/*! ./add-class */ \"./src/js/methods/add-class.js\");\n\nvar _addClass2 = _interopRequireDefault(_addClass);\n\nvar _removeClass = __webpack_require__(/*! ./remove-class */ \"./src/js/methods/remove-class.js\");\n\nvar _removeClass2 = _interopRequireDefault(_removeClass);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction fullscreenToggleClass(el, params) {\n\tvar options = params;\n\n\tif (!el.hasClass(options.toggleClassName.slice(1))) {\n\t\t(0, _addClass2.default)(el, options);\n\t} else {\n\t\t(0, _removeClass2.default)(el, options);\n\t}\n}\n\n//# sourceURL=webpack://HSFullscreen/./src/js/methods/toggle-class.js?");

/***/ })

/******/ })["default"];
});