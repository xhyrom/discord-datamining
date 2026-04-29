"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18269"],
  {
    693510(e, t, r) {
      var i = r(101968);
      e.exports = function () {
        var e = i(this),
          t = "";
        return (
          e.hasIndices && (t += "d"),
          e.global && (t += "g"),
          e.ignoreCase && (t += "i"),
          e.multiline && (t += "m"),
          e.dotAll && (t += "s"),
          e.unicode && (t += "u"),
          e.unicodeSets && (t += "v"),
          e.sticky && (t += "y"),
          t
        );
      };
    },
    938796(e, t, r) {
      var i = r(860511),
        n = r(257943),
        s = r(485155),
        o = r(693510),
        c = r(503628),
        a = i.RegExp,
        l = a.prototype;
      n &&
        c(function () {
          var e = !0;
          try {
            a(".", "d");
          } catch (t) {
            e = !1;
          }
          var t = {},
            r = "",
            i = e ? "dgimsy" : "gimsy",
            n = function (e, i) {
              Object.defineProperty(t, e, {
                get: function () {
                  return (r += i), !0;
                },
              });
            },
            s = {
              dotAll: "s",
              global: "g",
              ignoreCase: "i",
              multiline: "m",
              sticky: "y",
            };
          for (var o in (e && (s.hasIndices = "d"), s)) n(o, s[o]);
          return (
            Object.getOwnPropertyDescriptor(l, "flags").get.call(t) !== i ||
            r !== i
          );
        }) &&
        s(l, "flags", { configurable: !0, get: o });
    },
  },
]);
//# sourceMappingURL=18269.07ff58a1149694ae.js.map
