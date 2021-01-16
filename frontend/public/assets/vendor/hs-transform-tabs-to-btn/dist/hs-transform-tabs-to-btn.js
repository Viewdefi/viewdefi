(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSTransformTabsToBtn"] = factory();
	else
		root["HSTransformTabsToBtn"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-transform-tabs-to-btn.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-transform-tabs-to-btn.js":
/*!********************************************!*\
  !*** ./src/js/hs-transform-tabs-to-btn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar HSTransformTabsToBtn = function () {\n\tfunction HSTransformTabsToBtn(elem, settings) {\n\t\t_classCallCheck(this, HSTransformTabsToBtn);\n\n\t\tthis.elem = elem;\n\t\tthis.defaults = {\n\t\t\ttargetEl: null,\n\t\t\ttransformResolution: 'md',\n\t\t\tbtnClassNames: null,\n\t\t\tanimationType: 'slide', // slide, accordion\n\n\t\t\tinvokerSelector: '> *',\n\t\t\tcontentSelector: '.tab-pane'\n\t\t};\n\t\tthis.settings = settings;\n\t}\n\n\t_createClass(HSTransformTabsToBtn, [{\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tvar context = this,\n\t\t\t    $el = context.elem,\n\t\t\t    dataSettings = $el.attr('data-hs-transform-tabs-to-btn-options') ? JSON.parse($el.attr('data-hs-transform-tabs-to-btn-options')) : {},\n\t\t\t    options = $.extend(true, context.defaults, dataSettings, context.settings);\n\n\t\t\tvar resolutionsList = {\n\t\t\t\txs: 0,\n\t\t\t\tsm: 576,\n\t\t\t\tmd: 768,\n\t\t\t\tlg: 992,\n\t\t\t\txl: 1200\n\t\t\t},\n\t\t\t    $invokerParent = $el.parent(),\n\t\t\t    $tabsContent = $('#' + $el.data('target')),\n\t\t\t    $tabsContentItem = $tabsContent.find('.tab-pane');\n\n\t\t\t$(window).on('resize', function () {\n\t\t\t\tif (window.innerWidth < resolutionsList[options.transformResolution]) {\n\t\t\t\t\t$el.hide();\n\n\t\t\t\t\t$el.parent().addClass('nav-mobile-mode-on');\n\n\t\t\t\t\t$('body').on('click', function () {\n\t\t\t\t\t\tif (options.animationType) {\n\t\t\t\t\t\t\t$el.slideUp(200);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t$el.find('.nav-inner').slideUp(200);\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t} else {\n\t\t\t\t\t$el.show();\n\n\t\t\t\t\t$el.parent().removeClass('nav-mobile-mode-on');\n\n\t\t\t\t\t$('body').off('click');\n\t\t\t\t}\n\n\t\t\t\tif (window.innerWidth > resolutionsList[options.transformResolution] && options.animationType) {\n\t\t\t\t\t$el.removeAttr('style');\n\t\t\t\t\t$tabsContentItem.removeAttr('style');\n\t\t\t\t\t$invokerParent.off('click', '.js-tabs-mobile-control');\n\t\t\t\t\t$invokerParent.off('click', '[role=\"tab\"]');\n\n\t\t\t\t\tif (options.animationType === 'accordion') {\n\t\t\t\t\t\t$tabsContent.find('.js-tabs-mobile-control').remove();\n\t\t\t\t\t} else {\n\t\t\t\t\t\t$invokerParent.find('.js-tabs-mobile-control').remove();\n\t\t\t\t\t}\n\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (window.innerWidth < resolutionsList[options.transformResolution] && options.animationType === 'accordion') {\n\t\t\t\t\tcontext.accordionEffect($tabsContent, $el.find('> *'), $tabsContentItem, options.btnClassNames);\n\t\t\t\t} else if (window.innerWidth < resolutionsList[options.transformResolution] && options.animationType === 'slide') {\n\t\t\t\t\tcontext.slideEffect($invokerParent, $el, options.btnClassNames);\n\t\t\t\t}\n\t\t\t}).trigger('resize');\n\t\t}\n\t}, {\n\t\tkey: 'slideEffect',\n\t\tvalue: function slideEffect(context, menu, btnClasses) {\n\t\t\tif (context.find('.js-tabs-mobile-control').length) return;\n\n\t\t\t//Create control\n\t\t\tvar activeItemHTML = menu.find('.active').html();\n\n\t\t\t$(menu).before('<a class=\"js-tabs-mobile-control ' + btnClasses + '\" href=\"#\">' + activeItemHTML + '</a>');\n\n\t\t\t/*----- CLICK -----*/\n\t\t\tcontext.on('click', '.js-tabs-mobile-control', function (e) {\n\t\t\t\te.stopPropagation();\n\t\t\t\te.preventDefault();\n\n\t\t\t\t$(menu).slideToggle(200);\n\t\t\t});\n\n\t\t\tcontext.on('click', '[role=\"tab\"]', function (e) {\n\t\t\t\te.preventDefault();\n\n\t\t\t\tvar thisHTML = $(this).html(),\n\t\t\t\t    $targetControl = $(this).closest('ul').prev('.js-tabs-mobile-control');\n\n\t\t\t\t$targetControl.html(thisHTML);\n\t\t\t\t$(menu).slideUp(200);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'accordionEffect',\n\t\tvalue: function accordionEffect(context, menuItem, menu, btnClasses) {\n\t\t\tif (context.find('.js-tabs-mobile-control').length) return;\n\n\t\t\t//Create control\n\t\t\t$(menu).before('<a class=\"js-tabs-mobile-control ' + btnClasses + '\" href=\"#\"></a>');\n\n\t\t\tmenuItem.each(function () {\n\t\t\t\tvar thisIndex = $(this).index(),\n\t\t\t\t    thisHTML = $(this).find('[role=\"tab\"]').html();\n\n\t\t\t\tif ($(this).find('[role=\"tab\"]').hasClass('active')) {\n\t\t\t\t\t$(menu[thisIndex]).prev().addClass('active');\n\t\t\t\t}\n\n\t\t\t\t$(menu[thisIndex]).prev().html(thisHTML);\n\t\t\t});\n\n\t\t\t/*----- CLICK -----*/\n\t\t\tcontext.on('click', '.js-tabs-mobile-control', function (e) {\n\t\t\t\te.preventDefault();\n\n\t\t\t\tif ($(this).hasClass('active')) return;\n\n\t\t\t\tvar contextID = context.attr('id');\n\n\t\t\t\tcontext.find('.js-tabs-mobile-control').removeClass('active');\n\n\t\t\t\t$('[data-target=\"' + contextID + '\"]').find('.nav-link').removeClass('active');\n\t\t\t\tvar $target = $(this).next(),\n\t\t\t\t    targetID = $target.attr('id');\n\n\t\t\t\tif ($target.hasClass('fade')) {\n\t\t\t\t\t$(this).addClass('active');\n\t\t\t\t\t$('[href=\"#' + targetID + '\"]').addClass('active');\n\n\t\t\t\t\t$(menu).slideUp(200);\n\t\t\t\t\t$target.slideDown(200, function () {\n\t\t\t\t\t\tcontext.find('[role=\"tabpanel\"]').removeClass('show active');\n\t\t\t\t\t\t$target.addClass('show active');\n\t\t\t\t\t});\n\t\t\t\t} else {\n\t\t\t\t\t$(this).addClass('active');\n\t\t\t\t\t$(menu).slideUp(200);\n\t\t\t\t\t$target.slideDown(200);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}]);\n\n\treturn HSTransformTabsToBtn;\n}();\n\nexports.default = HSTransformTabsToBtn;\n\n//# sourceURL=webpack://HSTransformTabsToBtn/./src/js/hs-transform-tabs-to-btn.js?");

/***/ })

/******/ })["default"];
});