(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["468590"],
  {
    207970(e, t, r) {
      "use strict";
      var n, a, l, i;
      function s(e, t) {
        if (!1 === e || null == e) throw Error(t);
      }
      function o(e, t) {
        if (!e) {
          "u" > typeof console && console.warn(t);
          try {
            throw Error(t);
          } catch (e) {}
        }
      }
      function h(e) {
        let t = {};
        if (e) {
          let r = e.indexOf("#");
          r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
          let n = e.indexOf("?");
          n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
            e && (t.pathname = e);
        }
        return t;
      }
      function u(e, t, r) {
        return (
          void 0 === r && (r = "/"),
          (function (e, t, r, n) {
            let a = f(("string" == typeof t ? h(t) : t).pathname || "/", r);
            if (null == a) return null;
            let l = (function e(t, r, n, a) {
              void 0 === r && (r = []),
                void 0 === n && (n = []),
                void 0 === a && (a = "");
              let l = (t, l, i) => {
                var o, h;
                let u,
                  d,
                  f = {
                    relativePath: void 0 === i ? t.path || "" : i,
                    caseSensitive: !0 === t.caseSensitive,
                    childrenIndex: l,
                    route: t,
                  };
                f.relativePath.startsWith("/") &&
                  (s(
                    f.relativePath.startsWith(a),
                    'Absolute route path "' +
                      f.relativePath +
                      '" nested under path "' +
                      a +
                      '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
                  ),
                  (f.relativePath = f.relativePath.slice(a.length)));
                let g = v([a, f.relativePath]),
                  m = n.concat(f);
                t.children &&
                  t.children.length > 0 &&
                  (s(
                    !0 !== t.index,
                    'Index routes must not have child routes. Please remove all child routes from route path "' +
                      g +
                      '".',
                  ),
                  e(t.children, r, m, g)),
                  (null != t.path || t.index) &&
                    r.push({
                      path: g,
                      score:
                        ((o = g),
                        (h = t.index),
                        (d = (u = o.split("/")).length),
                        u.some(p) && (d += -2),
                        h && (d += 2),
                        u
                          .filter((e) => !p(e))
                          .reduce(
                            (e, t) => e + (c.test(t) ? 3 : "" === t ? 1 : 10),
                            d,
                          )),
                      routesMeta: m,
                    });
              };
              return (
                t.forEach((e, t) => {
                  var r;
                  if ("" !== e.path && null != (r = e.path) && r.includes("?"))
                    for (let r of (function e(t) {
                      let r = t.split("/");
                      if (0 === r.length) return [];
                      let [n, ...a] = r,
                        l = n.endsWith("?"),
                        i = n.replace(/\?$/, "");
                      if (0 === a.length) return l ? [i, ""] : [i];
                      let s = e(a.join("/")),
                        o = [];
                      return (
                        o.push(
                          ...s.map((e) => ("" === e ? i : [i, e].join("/"))),
                        ),
                        l && o.push(...s),
                        o.map((e) => (t.startsWith("/") && "" === e ? "/" : e))
                      );
                    })(e.path))
                      l(e, t, r);
                  else l(e, t);
                }),
                r
              );
            })(e);
            l.sort((e, t) => {
              var r, n;
              return e.score !== t.score
                ? t.score - e.score
                : ((r = e.routesMeta.map((e) => e.childrenIndex)),
                  (n = t.routesMeta.map((e) => e.childrenIndex)),
                  r.length === n.length &&
                  r.slice(0, -1).every((e, t) => e === n[t])
                    ? r[r.length - 1] - n[n.length - 1]
                    : 0);
            });
            let i = null;
            for (let e = 0; null == i && e < l.length; ++e) {
              let t = (function (e) {
                try {
                  return e
                    .split("/")
                    .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
                    .join("/");
                } catch (t) {
                  return (
                    o(
                      !1,
                      'The URL path "' +
                        e +
                        '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        t +
                        ").",
                    ),
                    e
                  );
                }
              })(a);
              i = (function (e, t, r) {
                void 0 === r && (r = !1);
                let { routesMeta: n } = e,
                  a = {},
                  l = "/",
                  i = [];
                for (let e = 0; e < n.length; ++e) {
                  let s = n[e],
                    o = e === n.length - 1,
                    h = "/" === l ? t : t.slice(l.length) || "/",
                    u = d(
                      {
                        path: s.relativePath,
                        caseSensitive: s.caseSensitive,
                        end: o,
                      },
                      h,
                    ),
                    c = s.route;
                  if (
                    (!u &&
                      o &&
                      r &&
                      !n[n.length - 1].route.index &&
                      (u = d(
                        {
                          path: s.relativePath,
                          caseSensitive: s.caseSensitive,
                          end: !1,
                        },
                        h,
                      )),
                    !u)
                  )
                    return null;
                  Object.assign(a, u.params),
                    i.push({
                      params: a,
                      pathname: v([l, u.pathname]),
                      pathnameBase: g(v([l, u.pathnameBase])),
                      route: c,
                    }),
                    "/" !== u.pathnameBase && (l = v([l, u.pathnameBase]));
                }
                return i;
              })(l[e], t, n);
            }
            return i;
          })(e, t, r, !1)
        );
      }
      r.d(t, {
        HS: () => v,
        Oi: () => s,
        Rr: () => h,
        pX: () => b,
        pb: () => f,
        rc: () => n,
        tH: () => m,
        ue: () => u,
      }),
        ((l = n || (n = {})).Pop = "POP"),
        (l.Push = "PUSH"),
        (l.Replace = "REPLACE"),
        ((i = a || (a = {})).data = "data"),
        (i.deferred = "deferred"),
        (i.redirect = "redirect"),
        (i.error = "error");
      let c = /^:[\w-]+$/,
        p = (e) => "*" === e;
      function d(e, t) {
        var r, n, a;
        let l, i;
        "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [s, h] =
            ((r = e.path),
            (n = e.caseSensitive),
            (a = e.end),
            void 0 === n && (n = !1),
            void 0 === a && (a = !0),
            o(
              "*" === r || !r.endsWith("*") || r.endsWith("/*"),
              'Route path "' +
                r +
                '" will be treated as if it were "' +
                r.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                r.replace(/\*$/, "/*") +
                '".',
            ),
            (l = []),
            (i =
              "^" +
              r
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(
                  /\/:([\w-]+)(\?)?/g,
                  (e, t, r) => (
                    l.push({ paramName: t, isOptional: null != r }),
                    r ? "/?([^\\/]+)?" : "/([^\\/]+)"
                  ),
                )),
            r.endsWith("*")
              ? (l.push({ paramName: "*" }),
                (i += "*" === r || "/*" === r ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : a
                ? (i += "\\/*$")
                : "" !== r && "/" !== r && (i += "(?:(?=\\/|$))"),
            [new RegExp(i, n ? void 0 : "i"), l]),
          u = t.match(s);
        if (!u) return null;
        let c = u[0],
          p = c.replace(/(.)\/+$/, "$1"),
          d = u.slice(1);
        return {
          params: h.reduce((e, t, r) => {
            let { paramName: n, isOptional: a } = t;
            if ("*" === n) {
              let e = d[r] || "";
              p = c.slice(0, c.length - e.length).replace(/(.)\/+$/, "$1");
            }
            let l = d[r];
            return (
              a && !l
                ? (e[n] = void 0)
                : (e[n] = (l || "").replace(/%2F/g, "/")),
              e
            );
          }, {}),
          pathname: c,
          pathnameBase: p,
          pattern: e,
        };
      }
      function f(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          n = e.charAt(r);
        return n && "/" !== n ? null : e.slice(r) || "/";
      }
      let v = (e) => e.join("/").replace(/\/\/+/g, "/"),
        g = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
      class m extends Error {}
      function b(e) {
        return (
          null != e &&
          "number" == typeof e.status &&
          "string" == typeof e.statusText &&
          "boolean" == typeof e.internal &&
          "data" in e
        );
      }
      Symbol("deferred");
    },
    404144(e, t, r) {
      var n = r(345968),
        a = r(867167);
      e.exports = function (e, t, r) {
        return (
          void 0 === r && ((r = t), (t = void 0)),
          void 0 !== r && (r = (r = a(r)) == r ? r : 0),
          void 0 !== t && (t = (t = a(t)) == t ? t : 0),
          n(a(e), t, r)
        );
      };
    },
  },
]);
//# sourceMappingURL=468590.39686e6320730bcb.js.map
