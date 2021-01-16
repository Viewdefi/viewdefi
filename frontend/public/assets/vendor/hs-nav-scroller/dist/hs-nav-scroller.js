(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HsNavScroller"] = factory();
	else
		root["HsNavScroller"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-nav-scroller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-nav-scroller.js":
/*!***********************************!*\
  !*** ./src/js/hs-nav-scroller.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HsNavScroller; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HsNavScroller = /*#__PURE__*/function () {\n  function HsNavScroller(elem, settings) {\n    _classCallCheck(this, HsNavScroller);\n\n    this.elem = elem;\n    this.defaults = {\n      type: 'horizontal',\n      target: '.active',\n      offset: 0,\n      delay: 20\n    };\n    this.settings = settings;\n  }\n\n  _createClass(HsNavScroller, [{\n    key: \"init\",\n    value: function init() {\n      var context = this,\n          $el = context.elem,\n          dataSettings = $el.attr('data-hs-nav-scroller-options') ? JSON.parse($el.attr('data-hs-nav-scroller-options')) : {},\n          options = $.extend(true, context.defaults, dataSettings, context.settings);\n\n      if (options.type == 'vertical') {\n        $($el).animate({\n          scrollTop: $($el).find(options.target).position().top - options.offset\n        }, options.delay);\n      } else if (options.type == 'horizontal') {\n        var nav = $($el).find('.nav').first(),\n            prev = $($el).find('.hs-nav-scroller-arrow-prev').first(),\n            next = $($el).find('.hs-nav-scroller-arrow-next').first(),\n            activeElementLeftPosition = nav.find(options.target).position().left,\n            scrollMaxLeft = (nav[0].scrollWidth.toFixed() - nav.outerWidth()).toFixed(),\n            scrollPosition = nav.scrollLeft();\n\n        if (scrollPosition <= 0) {\n          prev.fadeOut(0);\n        }\n\n        if (scrollMaxLeft <= 0) {\n          next.fadeOut(0);\n        }\n\n        $(window).on('load resize', function () {\n          var scrollMaxLeft = parseInt(nav[0].scrollWidth.toFixed()) - parseInt(nav.outerWidth().toFixed()),\n              scrollPosition = nav.scrollLeft();\n\n          if (scrollPosition <= 0) {\n            prev.fadeOut(0);\n          } else {\n            prev.fadeIn(0);\n          }\n\n          if (scrollMaxLeft <= 0) {\n            next.fadeOut(0);\n          } else {\n            next.fadeIn(0);\n          }\n        });\n\n        if (activeElementLeftPosition > nav.width() / 2) {\n          nav.animate({\n            scrollLeft: activeElementLeftPosition - options.offset - prev.width()\n          }, options.delay);\n        }\n\n        next.click(function () {\n          var scrollPosition = nav.scrollLeft();\n          nav.animate({\n            scrollLeft: scrollPosition + nav.outerWidth() - next.width()\n          }, options.delay);\n        });\n        prev.click(function () {\n          var scrollPosition = nav.scrollLeft();\n          nav.animate({\n            scrollLeft: scrollPosition - nav.outerWidth() + prev.width()\n          }, options.delay);\n        });\n        nav.scroll(function () {\n          var scrollMaxLeft = (nav[0].scrollWidth.toFixed() - nav.outerWidth()).toFixed(),\n              scrollPosition = nav.scrollLeft(); // Hide or Show Back Arrow\n\n          if (scrollPosition <= 0) {\n            prev.fadeOut(0);\n          } else {\n            prev.fadeIn(0);\n          } // Hide or Show Next Arrow\n\n\n          if (scrollPosition >= scrollMaxLeft) {\n            next.fadeOut(0);\n          } else {\n            next.fadeIn(0);\n          }\n        });\n      }\n    }\n  }]);\n\n  return HsNavScroller;\n}();\n\n\n\n//# sourceURL=webpack://HsNavScroller/./src/js/hs-nav-scroller.js?");

/***/ })

/******/ })["default"];
});