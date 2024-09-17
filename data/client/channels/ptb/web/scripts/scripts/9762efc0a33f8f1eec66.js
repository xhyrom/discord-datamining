(() => {
  "use strict";
  var e = {
      620490: function (e, n, r) {
        r.d(n, {
          Z: function () {
            return t;
          },
        });
        function t(e, n) {
          if (e.score === n.score) {
            var r, t, o, l, i, a;
            let u =
                null !==
                  (l =
                    null !== (o = e.sortable) && void 0 !== o
                      ? o
                      : null === (r = e.comparator) || void 0 === r
                        ? void 0
                        : r.toLocaleLowerCase()) && void 0 !== l
                  ? l
                  : "",
              c =
                null !==
                  (a =
                    null !== (i = e.sortable) && void 0 !== i
                      ? i
                      : null === (t = n.comparator) || void 0 === t
                        ? void 0
                        : t.toLocaleLowerCase()) && void 0 !== a
                  ? a
                  : "";
            if (u < c) return -1;
            if (u > c) return 1;
          }
          return n.score - e.score;
        }
      },
      48263: function (e, n, r) {
        r(47120), r(653041), r(312677), r(411104);
        var t = r(658722),
          o = r.n(t),
          l = r(954955),
          i = r.n(l),
          a = r(226951),
          u = r(624138),
          c = r(620490);
        let s = {
            UPDATE_USERS: "UPDATE_USERS",
            USER_RESULTS: "USER_RESULTS",
            QUERY_SET: "QUERY_SET",
            QUERY_CLEAR: "QUERY_CLEAR",
          },
          f = new Map(),
          d = new Map(),
          p = new Set(),
          v = "username",
          E = "friendNickname",
          h = "globalName",
          b = new Set(["isFriend", "isBot", "isProvisional", v, E, h]),
          g = i()(
            () => {
              if (0 !== p.size)
                p.forEach((e) => {
                  let n = d.get(e);
                  null != n && m(e, n);
                }),
                  p.clear();
            },
            100,
            { leading: !0, trailing: !0 },
          );
        function S(e, n) {
          return e * (null != n ? n : 1);
        }
        function m(e, n) {
          var r, t;
          let {
              query: l,
              limit: i,
              filters: s,
              blacklist: d,
              whitelist: p,
            } = n,
            b =
              null != s && s.strict && null !== (r = s.guild) && void 0 !== r
                ? r
                : null,
            g = null !== (t = n.boosters) && void 0 !== t ? t : {},
            m = RegExp("^".concat(a.Z.escape(l)), "i"),
            w = RegExp(a.Z.escape(l), "i"),
            U = [];
          if ("" === l) return R(l, U, e);
          let y = l.toLocaleLowerCase(),
            _ = (0, u.Fv)(y);
          f.forEach((e, n) => {
            let r;
            if (
              !(function (e, n, r, t, o) {
                if (null != t && t.indexOf(e) >= 0) return !1;
                if (null != o && o.indexOf(e) >= 0) return !0;
                if (null != r) {
                  let { friends: e, guild: t, provisional: o } = r;
                  return (
                    (null == o || n.isProvisional === o) &&
                    ((!0 === e && !0 === n.isFriend) ||
                      (null != t && (null != n[t] || null === n[t])) ||
                      !1)
                  );
                }
                return !0;
              })(n, e, s, d, p)
            )
              return;
            let { username: t } = e;
            n === l
              ? (r = { id: n, username: t, comparator: n, score: S(10, g[n]) })
              : Object.keys(e).forEach((l) => {
                  let i;
                  let a = e[l];
                  if (
                    "boolean" == typeof a ||
                    null == a ||
                    (null != b && l !== v && l !== E && l !== h && b !== l)
                  )
                    return;
                  let c = (0, u._I)(a.toLocaleLowerCase());
                  m.test(a)
                    ? (i = { comparator: a, score: S(10, g[n]) })
                    : w.test(a)
                      ? (i = { comparator: a, score: S(5, g[n]) })
                      : o()(y, c)
                        ? (i = { comparator: a, score: S(1, g[n]) })
                        : o()(_, (0, u.Fv)(c)) &&
                          (i = { comparator: a, score: S(1, g[n]) }),
                    null != i &&
                      (null == r || r.score < i.score) &&
                      (r = { ...i, id: n, username: t });
                }),
              null != r && U.push(r);
          }),
            U.sort(c.Z),
            U.length > i && (U.length = i),
            R(l, U, e);
        }
        function R(e, n, r) {
          let t = {
            type: s.USER_RESULTS,
            uuid: r,
            payload: { query: e, results: n },
          };
          self.postMessage(t);
        }
        self.addEventListener("message", (e) => {
          let { data: n } = e;
          if (null == n || null == n.type) throw Error("Invalid data");
          switch (n.type) {
            case s.UPDATE_USERS:
              return (function (e) {
                let { payload: n } = e,
                  r = !1,
                  t = new Set();
                n.forEach((e) => {
                  var n;
                  let { id: o, ...l } = e,
                    i = null !== (n = f.get(o)) && void 0 !== n ? n : null,
                    a = { ...i, ...l };
                  f.set(o, a),
                    d.size > 0 &&
                      ((a.isFriend !== (null == i ? void 0 : i.isFriend) ||
                        a.friendNickname !==
                          (null == i ? void 0 : i.friendNickname)) &&
                        (r = !0),
                      Object.keys(a).forEach((e) => {
                        if (!b.has(e)) t.add(e);
                      }));
                }),
                  d.forEach((e, n) => {
                    let { filters: o } = e;
                    (null == o || o.friends === r || t.has(o.guild)) &&
                      p.add(n);
                  }),
                  g();
              })(n);
            case s.QUERY_SET:
              return (function (e) {
                let { uuid: n, payload: r } = e;
                d.set(n, r), m(n, r);
              })(n);
            case s.QUERY_CLEAR:
              return (function (e) {
                let { uuid: n } = e;
                d.delete(n), p.delete(n), 0 === p.size && g.cancel();
              })(n);
          }
        });
      },
      226951: function (e, n, r) {
        r(757143),
          (n.Z = { escape: (e) => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&") });
      },
    },
    n = {};
  function r(t) {
    var o = n[t];
    if (void 0 !== o) return o.exports;
    var l = (n[t] = { exports: {} });
    return e[t].call(l.exports, l, l.exports, r), l.exports;
  }
  (r.m = e),
    (r.x = function () {
      var e = r.O(
        void 0,
        ["78187", "62734", "61923", "19035", "78603"],
        function () {
          return r("48263");
        },
      );
      return (e = r.O(e));
    }),
    (r.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(n, { a: n }), n;
    }),
    (r.d = function (e, n) {
      for (var t in n)
        r.o(n, t) &&
          !r.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (r.f = {}),
    (r.e = function (e) {
      return Promise.all(
        Object.keys(r.f).reduce(function (n, t) {
          return r.f[t](e, n), n;
        }, []),
      );
    }),
    (r.u = function (e) {
      return (
        "" +
        {
          19035: "a8d1d0d6d62a951ac88a",
          61923: "ad63549c9c8e26399408",
          62734: "b1e56339cf536f64605f",
          78187: "5067a2ec1b24a6de868c",
          78603: "1d78858ea0c0e5d10112",
        }[e] +
        ".js"
      );
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (() => {
      var e = [];
      r.O = function (n, t, o, l) {
        if (t) {
          l = l || 0;
          for (var i = e.length; i > 0 && e[i - 1][2] > l; i--) e[i] = e[i - 1];
          e[i] = [t, o, l];
          return;
        }
        for (var a = 1 / 0, i = 0; i < e.length; i++) {
          for (
            var t = e[i][0], o = e[i][1], l = e[i][2], u = !0, c = 0;
            c < t.length;
            c++
          )
            (!1 & l || a >= l) &&
            Object.keys(r.O).every(function (e) {
              return r.O[e](t[c]);
            })
              ? t.splice(c--, 1)
              : ((u = !1), l < a && (a = l));
          if (u) {
            e.splice(i--, 1);
            var s = o();
            void 0 !== s && (n = s);
          }
        }
        return n;
      };
    })(),
    (r.p = "/assets/"),
    (() => {
      var e = r.x;
      r.x = function () {
        return Promise.all(
          ["78187", "62734", "61923", "19035", "78603"].map(r.e, r),
        ).then(e);
      };
    })(),
    (() => {
      var e = { 69731: 1 };
      r.f.i = function (n, t) {
        !e[n] && importScripts(r.p + r.u(n));
      };
      var n = (this.webpackChunkdiscord_app =
          this.webpackChunkdiscord_app || []),
        t = n.push.bind(n);
      n.push = function (n) {
        var o = n[0],
          l = n[1],
          i = n[2];
        for (var a in l) r.o(l, a) && (r.m[a] = l[a]);
        for (i && i(r); o.length; ) e[o.pop()] = 1;
        t(n);
      };
    })(),
    r.x();
})();
//# sourceMappingURL=9762efc0a33f8f1eec66.js.map
