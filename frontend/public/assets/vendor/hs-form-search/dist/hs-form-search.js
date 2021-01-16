(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSFormSearch"] = factory();
	else
		root["HSFormSearch"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-form-search.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-form-search.js":
/*!**********************************!*\
  !*** ./src/js/hs-form-search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSFormSearch; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HSFormSearch = /*#__PURE__*/function () {\n  function HSFormSearch(elem, settings) {\n    _classCallCheck(this, HSFormSearch);\n\n    this.elem = elem;\n    this.handlers = {};\n    this.defaults = {\n      clearIcon: null,\n      defaultIcon: null,\n      delay: 300,\n      isLoading: false,\n      dropMenuOffset: 0,\n      dropMenuDuration: 300,\n      toggleIconOnFocus: false,\n      activeClass: null\n    };\n    this.settings = settings;\n  }\n\n  _createClass(HSFormSearch, [{\n    key: \"init\",\n    value: function init() {\n      var context = this,\n          $el = context.elem,\n          dataSettings = $el.attr('data-hs-form-search-options') ? JSON.parse($el.attr('data-hs-form-search-options')) : {},\n          options = $.extend(true, context.defaults, dataSettings, context.settings);\n      context.options = options;\n      context.toggleIcon($($el).val().length > 0, options);\n      $(options.clearIcon).click(function () {\n        $($el).val('');\n        context.toggleIcon(false, options);\n\n        if (context.handlers.clear) {\n          context.handlers.clear();\n        }\n      });\n\n      if (options.toggleIconOnFocus) {\n        $($el).on('click', function (e) {\n          context.toggleIcon(true, options);\n        });\n      } else {\n        $($el).on('input', function (e) {\n          context.toggleIcon($(e.target).val().length > 0, options);\n        });\n      }\n\n      if (options.dropMenuElement) {\n        var menu = $(options.dropMenuElement);\n        menu.addClass('animated hs-form-search-menu-hidden hs-form-search-menu-initialized');\n        $(window).click(function (e) {\n          if (!$($el).is(e.target) && event.target.tagName.toLowerCase() === 'a' || !$($el).is(e.target) && menu.css('display') === 'block' && !menu.has(e.target).length) {\n            menu.removeClass('slideInUp').addClass('fadeOut');\n\n            if (options.toggleIconOnFocus) {\n              context.toggleIcon($($el).val().length > 0, options);\n            }\n\n            setTimeout(function () {\n              menu.addClass('hs-form-search-menu-hidden');\n            }, options.dropMenuDuration);\n          }\n        });\n        $($el).click(function () {\n          if (menu.css('display') !== 'block') {\n            setTimeout(function () {\n              menu.css({\n                top: 100 + options.dropMenuOffset + '%',\n                width: '100%',\n                animationDuration: options.dropMenuDuration + 'ms'\n              });\n              menu.removeClass('hs-form-search-menu-hidden fadeOut').addClass('slideInUp');\n            }, 1);\n          }\n        });\n      }\n\n      return context;\n    }\n  }, {\n    key: \"on\",\n    value: function on(event, callback) {\n      this.handlers[event] = callback;\n    }\n  }, {\n    key: \"toggleIcon\",\n    value: function toggleIcon(input, config) {\n      var context = this,\n          options = config;\n\n      if (!options.isLoading) {\n        $(options.loadingIcon).fadeOut(0);\n\n        if (!options.defaultIcon) {\n          if (input) {\n            $(options.clearIcon).fadeIn(options.loadingIcon ? 0 : options.delay);\n            context.elem.addClass(options.activeClass);\n          } else {\n            $(options.clearIcon).fadeOut(0);\n            context.elem.removeClass(options.activeClass);\n          }\n        } else {\n          if (input) {\n            $(options.defaultIcon).fadeOut(0);\n            $(options.clearIcon).fadeIn(options.loadingIcon ? 0 : options.delay);\n            context.elem.addClass(options.activeClass);\n          } else {\n            $(options.clearIcon).fadeOut(0);\n            $(options.defaultIcon).fadeIn(options.loadingIcon ? 0 : options.delay);\n            context.elem.removeClass(options.activeClass);\n          }\n        }\n      }\n    }\n  }, {\n    key: \"loading\",\n    value: function loading() {\n      var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n      var input = $(this.elem).val().length > 0,\n          options = this.options;\n\n      if (isLoading) {\n        options.isLoading = true;\n        $(options.defaultIcon).fadeOut(0);\n        $(options.clearIcon).fadeOut(0);\n        $(options.loadingIcon).fadeIn(0);\n      } else {\n        options.isLoading = false;\n        this.toggleIcon(input, options);\n      }\n    }\n  }]);\n\n  return HSFormSearch;\n}();\n\n\n\n//# sourceURL=webpack://HSFormSearch/./src/js/hs-form-search.js?");

/***/ })

/******/ })["default"];
});