"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var HSCountCharacters = function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var u = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(u.exports, u, u.exports, n), u.l = !0, u.exports;
  }

  return n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var u in t) {
      n.d(r, u, function (e) {
        return t[e];
      }.bind(null, u));
    }
    return r;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 0);
}([function (t, e, n) {
  var r = n(1)["default"];
  t.exports = r;
}, function (t, e, n) {
  "use strict";

  n.r(e), e["default"] = /*#__PURE__*/function () {
    function _class(t, e) {
      this.elem = t, this.settings = e;
    }

    var _proto = _class.prototype;

    _proto.init = function init() {
      var t = this,
        e = t.elem,
        n = e.attr("data-hs-count-characters-options") ? JSON.parse(e.attr("data-hs-count-characters-options")) : {},
        r = $.extend(!0, n, t.settings);
      var u = $(e).attr("maxlength") ? "/ " + $(e).attr("maxlength") : "";
      t._updateOutput(e, r, u), $(e).on("input", function (n) {
        t._updateOutput(e, r, u);
      });
    };

    _proto._updateOutput = function _updateOutput(t, e, n) {
      $(e.output).html($(t).val().length + " " + n);
    };

    return _class;
  }();
}]);