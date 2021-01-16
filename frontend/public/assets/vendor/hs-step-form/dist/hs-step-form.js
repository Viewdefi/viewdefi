(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSStepForm"] = factory();
	else
		root["HSStepForm"] = factory();
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
		/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-step-form.js");
		/******/ })
		/************************************************************************/
		/******/ ({

			/***/ "./src/js/hs-step-form.js":
			/*!********************************!*\
        !*** ./src/js/hs-step-form.js ***!
        \********************************/
			/*! exports provided: default */
			/***/ (function(module, __webpack_exports__, __webpack_require__) {

				"use strict";
				eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSStepForm; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSStepForm Plugin\n* @version: 2.0.0 (Mon, 25 Nov 2019)\n* @requires: jQuery v3.0 or later\n* @author: HtmlStream\n* @event-namespace: .HSStepForm\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\nvar HSStepForm = /*#__PURE__*/function () {\n  function HSStepForm(elem, settings) {\n    _classCallCheck(this, HSStepForm);\n\n    this.elem = elem;\n    this.defaults = {\n      progressSelector: null,\n      progressItems: null,\n      stepsSelector: null,\n      stepsItems: null,\n      stepsActiveItem: null,\n      nextSelector: '[data-hs-step-form-next-options]',\n      prevSelector: '[data-hs-step-form-prev-options]',\n      endSelector: null,\n      isValidate: false,\n      classMap: {\n        active: 'active',\n        checked: 'is-valid',\n        error: 'is-invalid',\n        required: 'js-step-required',\n        focus: 'focus'\n      },\n      finish: function finish() {},\n      onNextStep: function onNextStep() {},\n      onPrevStep: function onPrevStep() {}\n    };\n    this.settings = settings;\n  }\n\n  _createClass(HSStepForm, [{\n    key: \"init\",\n    value: function init() {\n      var context = this,\n          $el = context.elem,\n          dataSettings = $el.attr('data-hs-step-form-options') ? JSON.parse($el.attr('data-hs-step-form-options')) : {};\n      var options = $.extend(true, context.defaults, dataSettings, context.settings);\n      options.progressItems = $(options.progressSelector).find('> *');\n      options.stepsItems = $(options.stepsSelector).find('> *');\n      options.stepsActiveItem = $(options.stepsSelector).find(\"> .\".concat(options.classMap.active));\n\n      context._prepareObject($el, options);\n\n      $el.find(options.nextSelector).on('click', function () {\n        context._nextClickEvents($el, options, $(this));\n      });\n      $el.find(options.prevSelector).on('click', function () {\n        context._prevClickEvents($el, options, $(this));\n      });\n      $el.find(options.endSelector).on('click', function () {\n        context._endClickEvents($el, options, $(this));\n      });\n    }\n  }, {\n    key: \"_prepareObject\",\n    value: function _prepareObject(el, params) {\n      var options = params;\n      options.stepsItems.not(\".\".concat(options.classMap.active)).hide();\n      options.progressItems.eq(options.stepsActiveItem.index()).addClass(options.classMap.active).addClass(options.classMap.focus);\n    }\n  }, {\n    key: \"_endClickEvents\",\n    value: function _endClickEvents(el, params) {\n      var options = params;\n      return params.finish();\n    }\n  }, {\n    key: \"_nextClickEvents\",\n    value: function _nextClickEvents(el, params, nextEl) {\n      var nextDataSettings = nextEl.attr('data-hs-step-form-next-options') ? JSON.parse(nextEl.attr('data-hs-step-form-next-options')) : {};\n      var options = params,\n          nextItemDefaults = {\n        targetSelector: null\n      },\n          nextItemOptions = $.extend(true, nextItemDefaults, nextDataSettings);\n\n      for (var i = 0; i < options.progressItems.length; i++) {\n        if (typeof $(window).validate !== 'undefined' && options.isValidate) {\n          if ($(nextItemOptions.targetSelector).index() > i) {\n            $(options.progressItems[i]).addClass(options.classMap.error);\n            var requiredSelector = $(options.progressItems[i]).find(options.nextSelector).attr('data-hs-step-form-next-options');\n            options.stepsItems.hide().removeClass(options.classMap.active);\n            $(JSON.parse(requiredSelector).targetSelector).show().addClass(options.classMap.active);\n\n            if (!el.valid()) {\n              return false;\n            } else {\n              $(options.progressItems[i]).removeClass(options.classMap.error);\n            }\n          }\n\n          if ($(nextItemOptions.targetSelector).index() > i && options.isValidate) {\n            $(options.progressItems[i]).addClass(options.classMap.checked);\n          }\n        } else {\n          if ($(nextItemOptions.targetSelector).index() > i && options.isValidate) {\n            $(options.progressItems[i]).addClass(options.classMap.checked);\n          }\n\n          if ($(nextItemOptions.targetSelector).index() > i && !options.isValidate) {\n            $(options.progressItems[i]).addClass(options.classMap.active);\n          }\n        }\n      }\n\n      options.progressItems.removeClass(options.classMap.active).removeClass(options.classMap.focus);\n      options.progressItems.eq($(nextItemOptions.targetSelector).index()).addClass(options.classMap.active).addClass(options.classMap.focus);\n      options.stepsItems.hide().removeClass(options.classMap.active);\n      $(nextItemOptions.targetSelector).fadeIn(400).addClass(options.classMap.active);\n      return options.onNextStep();\n    }\n  }, {\n    key: \"_prevClickEvents\",\n    value: function _prevClickEvents(el, params, prevEl) {\n      var options = params,\n          prevItemDefaults = {\n        targetSelector: null\n      };\n      var prevDataSettings = prevEl.attr('data-hs-step-form-prev-options') ? JSON.parse(prevEl.attr('data-hs-step-form-prev-options')) : {};\n      var prevItemOptions = $.extend(true, prevItemDefaults, prevDataSettings);\n\n      for (var i = 0; i < options.progressItems.length; i++) {\n        if (typeof $(window).validate !== 'undefined' && options.isValidate) {\n          if ($(prevItemOptions.targetSelector).index() > i) {\n            $(options.progressItems[i]).addClass(options.classMap.error);\n            var requiredSelector = $(options.progressItems[i]).find(options.nextSelector).attr('data-hs-step-form-next-options');\n            options.stepsItems.hide().removeClass(options.classMap.active);\n            $(JSON.parse(requiredSelector).targetSelector).show().addClass(options.classMap.active);\n\n            if (!el.valid()) {\n              return false;\n            } else {\n              $(options.progressItems[i]).removeClass(options.classMap.error);\n            }\n          }\n\n          if ($(prevItemOptions.targetSelector).index() > i && options.isValidate) {\n            $(options.progressItems[i]).addClass(options.classMap.checked);\n          }\n        } else {\n          if ($(prevItemOptions.targetSelector).index() > i && options.isValidate) {\n            $(options.progressItems[i]).addClass(options.classMap.checked);\n          }\n\n          if ($(prevItemOptions.targetSelector).index() > i && !options.isValidate) {\n            $(options.progressItems[i]).addClass(options.classMap.active);\n          }\n        }\n      }\n\n      options.progressItems.removeClass(options.classMap.active).removeClass(options.classMap.focus);\n      options.progressItems.eq($(prevItemOptions.targetSelector).index()).addClass(options.classMap.active).addClass(options.classMap.focus);\n      options.stepsItems.hide().removeClass(options.classMap.active);\n      $(prevItemOptions.targetSelector).fadeIn(400).addClass(options.classMap.active);\n      return options.onPrevStep();\n    }\n  }]);\n\n  return HSStepForm;\n}();\n\n\n\n//# sourceURL=webpack://HSStepForm/./src/js/hs-step-form.js?");

				/***/ })

			/******/ })["default"];
});