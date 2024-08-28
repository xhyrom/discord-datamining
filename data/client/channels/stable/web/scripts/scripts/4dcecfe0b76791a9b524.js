(() => {
  "use strict";
  var e = {
      620490: function (e, r, n) {
        n.d(r, {
          Z: function () {
            return t;
          },
        });
        function t(e, r) {
          if (e.score === r.score) {
            var n, t, o, l, i, u;
            let a =
                null !==
                  (l =
                    null !== (o = e.sortable) && void 0 !== o
                      ? o
                      : null === (n = e.comparator) || void 0 === n
                        ? void 0
                        : n.toLocaleLowerCase()) && void 0 !== l
                  ? l
                  : "",
              c =
                null !==
                  (u =
                    null !== (i = e.sortable) && void 0 !== i
                      ? i
                      : null === (t = r.comparator) || void 0 === t
                        ? void 0
                        : t.toLocaleLowerCase()) && void 0 !== u
                  ? u
                  : "";
            if (a < c) return -1;
            if (a > c) return 1;
          }
          return r.score - e.score;
        }
      },
      48263: function (e, r, n) {
        n(47120), n(653041), n(312677), n(411104);
        var t = n(658722),
          o = n.n(t),
          l = n(954955),
          i = n.n(l),
          u = n(226951),
          a = n(624138),
          c = n(620490);
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
          b = i()(
            () => {
              if (0 !== p.size)
                p.forEach((e) => {
                  let r = d.get(e);
                  null != r && S(e, r);
                }),
                  p.clear();
            },
            100,
            { leading: !0, trailing: !0 },
          );
        function g(e, r) {
          return e * (null != r ? r : 1);
        }
        function S(e, r) {
          var n, t;
          let {
              query: l,
              limit: i,
              filters: s,
              blacklist: d,
              whitelist: p,
            } = r,
            b =
              null != s && s.strict && null !== (n = s.guild) && void 0 !== n
                ? n
                : null,
            S = null !== (t = r.boosters) && void 0 !== t ? t : {},
            R = RegExp("^".concat(u.Z.escape(l)), "i"),
            U = RegExp(u.Z.escape(l), "i"),
            w = [];
          if ("" === l) return m(l, w, e);
          let y = l.toLocaleLowerCase(),
            _ = (0, a.Fv)(y);
          f.forEach((e, r) => {
            let n;
            if (
              !(function (e, r, n, t, o) {
                if (null != t && t.indexOf(e) >= 0) return !1;
                if (null != o && o.indexOf(e) >= 0) return !0;
                if (null != n) {
                  let { friends: e, guild: t } = n;
                  return (
                    (!0 === e && !0 === r.isFriend) ||
                    (null != t && (null != r[t] || null === r[t])) ||
                    !1
                  );
                }
                return !0;
              })(r, e, s, d, p)
            )
              return;
            let { username: t } = e;
            r === l
              ? (n = { id: r, username: t, comparator: r, score: g(10, S[r]) })
              : Object.keys(e).forEach((l) => {
                  let i;
                  let u = e[l];
                  if (
                    "boolean" == typeof u ||
                    null == u ||
                    (null != b && l !== v && l !== E && l !== h && b !== l)
                  )
                    return;
                  let c = (0, a._I)(u.toLocaleLowerCase());
                  R.test(u)
                    ? (i = { comparator: u, score: g(10, S[r]) })
                    : U.test(u)
                      ? (i = { comparator: u, score: g(5, S[r]) })
                      : o()(y, c)
                        ? (i = { comparator: u, score: g(1, S[r]) })
                        : o()(_, (0, a.Fv)(c)) &&
                          (i = { comparator: u, score: g(1, S[r]) }),
                    null != i &&
                      (null == n || n.score < i.score) &&
                      (n = { ...i, id: r, username: t });
                }),
              null != n && w.push(n);
          }),
            w.sort(c.Z),
            w.length > i && (w.length = i),
            m(l, w, e);
        }
        function m(e, r, n) {
          let t = {
            type: s.USER_RESULTS,
            uuid: n,
            payload: { query: e, results: r },
          };
          self.postMessage(t);
        }
        self.addEventListener("message", (e) => {
          let { data: r } = e;
          if (null == r || null == r.type) throw Error("Invalid data");
          switch (r.type) {
            case s.UPDATE_USERS:
              return (function (e) {
                let { payload: r } = e,
                  n = !1,
                  t = new Set();
                r.forEach((e) => {
                  var r;
                  let { id: o, ...l } = e,
                    i = null !== (r = f.get(o)) && void 0 !== r ? r : null,
                    u = { ...i, ...l };
                  f.set(o, u),
                    d.size > 0 &&
                      ((u.isFriend !== (null == i ? void 0 : i.isFriend) ||
                        u.friendNickname !==
                          (null == i ? void 0 : i.friendNickname)) &&
                        (n = !0),
                      Object.keys(u).forEach((e) => {
                        if (
                          "isBot" !== e &&
                          "isFriend" !== e &&
                          e !== v &&
                          e !== E &&
                          e !== h
                        )
                          t.add(e);
                      }));
                }),
                  d.forEach((e, r) => {
                    let { filters: o } = e;
                    (null == o || o.friends === n || t.has(o.guild)) &&
                      p.add(r);
                  }),
                  b();
              })(r);
            case s.QUERY_SET:
              return (function (e) {
                let { uuid: r, payload: n } = e;
                d.set(r, n), S(r, n);
              })(r);
            case s.QUERY_CLEAR:
              return (function (e) {
                let { uuid: r } = e;
                d.delete(r), p.delete(r), 0 === p.size && b.cancel();
              })(r);
          }
        });
      },
      226951: function (e, r, n) {
        n(757143),
          (r.Z = { escape: (e) => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&") });
      },
    },
    r = {};
  function n(t) {
    var o = r[t];
    if (void 0 !== o) return o.exports;
    var l = (r[t] = { exports: {} });
    return e[t].call(l.exports, l, l.exports, n), l.exports;
  }
  (n.m = e),
    (n.x = function () {
      var e = n.O(
        void 0,
        ["78187", "62734", "61923", "19035", "78603"],
        function () {
          return n("48263");
        },
      );
      return (e = n.O(e));
    }),
    (n.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(r, { a: r }), r;
    }),
    (n.d = function (e, r) {
      for (var t in r)
        n.o(r, t) &&
          !n.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (r, t) {
          return n.f[t](e, r), r;
        }, []),
      );
    }),
    (n.u = function (e) {
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
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (() => {
      var e = [];
      n.O = function (r, t, o, l) {
        if (t) {
          l = l || 0;
          for (var i = e.length; i > 0 && e[i - 1][2] > l; i--) e[i] = e[i - 1];
          e[i] = [t, o, l];
          return;
        }
        for (var u = 1 / 0, i = 0; i < e.length; i++) {
          for (
            var t = e[i][0], o = e[i][1], l = e[i][2], a = !0, c = 0;
            c < t.length;
            c++
          )
            (!1 & l || u >= l) &&
            Object.keys(n.O).every(function (e) {
              return n.O[e](t[c]);
            })
              ? t.splice(c--, 1)
              : ((a = !1), l < u && (u = l));
          if (a) {
            e.splice(i--, 1);
            var s = o();
            void 0 !== s && (r = s);
          }
        }
        return r;
      };
    })(),
    (n.p = "/assets/"),
    (() => {
      var e = n.x;
      n.x = function () {
        return Promise.all(
          ["78187", "62734", "61923", "19035", "78603"].map(n.e, n),
        ).then(e);
      };
    })(),
    (() => {
      var e = { 69731: 1 };
      n.f.i = function (r, t) {
        !e[r] && importScripts(n.p + n.u(r));
      };
      var r = (this.webpackChunkdiscord_app =
          this.webpackChunkdiscord_app || []),
        t = r.push.bind(r);
      r.push = function (r) {
        var o = r[0],
          l = r[1],
          i = r[2];
        for (var u in l) n.o(l, u) && (n.m[u] = l[u]);
        for (i && i(n); o.length; ) e[o.pop()] = 1;
        t(r);
      };
    })(),
    n.x();
})();
//# sourceMappingURL=4dcecfe0b76791a9b524.js.map
