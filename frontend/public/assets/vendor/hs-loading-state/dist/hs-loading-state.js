(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSLoadingState"] = factory();
	else
		root["HSLoadingState"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-loading-state.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-loading-state.js":
/*!************************************!*\
  !*** ./src/js/hs-loading-state.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar HSLoadingState = function () {\n\tfunction HSLoadingState(elem, settings) {\n\t\t_classCallCheck(this, HSLoadingState);\n\n\t\tthis.elem = elem;\n\t\tthis.defaults = {\n\t\t\ttargetEl: null,\n\t\t\ttargetElStyles: {\n\t\t\t\tposition: ''\n\t\t\t},\n\t\t\ttargetElCustomStyles: {\n\t\t\t\tposition: 'relative'\n\t\t\t},\n\n\t\t\teventType: 'click',\n\t\t\tloaderMode: 'simple',\n\t\t\tloaderText: 'Loading...',\n\t\t\tremoveLoaderDelay: 1500,\n\n\t\t\tloaderContainerClassNames: 'hs-loader-wrapper',\n\t\t\tloaderContainerExtendedClassNames: '',\n\n\t\t\tloaderClassNames: 'hs-loader',\n\t\t\tloaderExtendedClassNames: '',\n\t\t\tloaderWithTextClassNames: 'hs-loader-with-text',\n\n\t\t\tloaderIconClassNames: 'spinner-border spinner-border-sm text-primary',\n\t\t\tloaderIconExtendedClassNames: '',\n\n\t\t\tloaderTextClassNames: 'hs-loader-text',\n\t\t\tloaderTextExtendedClassNames: '',\n\n\t\t\tbeforeLoading: null,\n\t\t\tafterLoading: null\n\t\t};\n\t\tthis.settings = settings;\n\t}\n\n\t_createClass(HSLoadingState, [{\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tvar context = this,\n\t\t\t    $el = context.elem,\n\t\t\t    dataSettings = $el.attr('data-hs-loading-state-options') ? JSON.parse($el.attr('data-hs-loading-state-options')) : {},\n\t\t\t    options = $.extend(true, context.defaults, dataSettings, context.settings);\n\n\t\t\tcontext._loading($el, options);\n\t\t}\n\t}, {\n\t\tkey: '_loading',\n\t\tvalue: function _loading(el, config) {\n\t\t\tvar context = this;\n\n\t\t\tel.on(config.eventType, function () {\n\t\t\t\tvar $loader = $(context._selectTemplate(config));\n\n\t\t\t\tif (typeof config.beforeLoading === 'function') {\n\t\t\t\t\tvar before = config.beforeLoading(el, config);\n\n\t\t\t\t\tif (before === false) return;\n\t\t\t\t}\n\n\t\t\t\t$(config.targetEl).css(config.targetElCustomStyles).append($loader);\n\n\t\t\t\t$loader.show();\n\n\t\t\t\tsetTimeout(function () {\n\t\t\t\t\t$loader.fadeOut(400, function () {\n\t\t\t\t\t\t$(config.targetEl).css(config.targetElStyles);\n\n\t\t\t\t\t\t$(this).remove();\n\n\t\t\t\t\t\tif (typeof config.afterLoading === 'function') {\n\t\t\t\t\t\t\tconfig.afterLoading(el, config);\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}, config.removeLoaderDelay);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: '_selectTemplate',\n\t\tvalue: function _selectTemplate(config) {\n\t\t\tif (config.loaderMode === 'with-text') {\n\t\t\t\treturn '<div class=\"' + config.loaderContainerClassNames + ' ' + config.loaderContainerExtendedClassNames + '\">\\n\\t\\t\\t\\t<div class=\"' + config.loaderClassNames + ' ' + config.loaderExtendedClassNames + ' ' + config.loaderWithTextClassNames + '\">\\n\\t\\t\\t\\t\\t<span class=\"' + config.loaderTextClassNames + ' ' + config.loaderTextExtendedClassNames + '\">' + config.loaderText + '</span>\\n\\t\\t\\t\\t\\t<span class=\"' + config.loaderIconClassNames + ' ' + config.loaderIconExtendedClassNames + '\"></span>\\n\\t\\t\\t\\t</div>\\n      </div>';\n\t\t\t} else {\n\t\t\t\treturn '<div class=\"' + config.loaderContainerClassNames + ' ' + config.loaderContainerExtendedClassNames + '\">\\n\\t\\t\\t\\t<div class=\"' + config.loaderClassNames + ' ' + config.loaderExtendedClassNames + '\">\\n\\t\\t\\t\\t\\t<span class=\"' + config.loaderIconClassNames + ' ' + config.loaderIconExtendedClassNames + '\"></span>\\n\\t\\t\\t\\t</div>\\n      </div>';\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn HSLoadingState;\n}();\n\nexports.default = HSLoadingState;\n\n//# sourceURL=webpack://HSLoadingState/./src/js/hs-loading-state.js?");

/***/ })

/******/ })["default"];
});