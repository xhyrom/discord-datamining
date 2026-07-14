"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48095"],
  {
    207970(e, t, r) {
      var a, n, l, i;
      function s(e, t) {
        if (!1 === e || null == e) throw Error(t);
      }
      function h(e, t) {
        if (!e) {
          "u" > typeof console && console.warn(t);
          try {
            throw Error(t);
          } catch (e) {}
        }
      }
      function o(e) {
        let t = {};
        if (e) {
          let r = e.indexOf("#");
          r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
          let a = e.indexOf("?");
          a >= 0 && ((t.search = e.substr(a)), (e = e.substr(0, a))),
            e && (t.pathname = e);
        }
        return t;
      }
      function c(e, t, r) {
        return (
          void 0 === r && (r = "/"),
          (function (e, t, r, a) {
            let n = f(("string" == typeof t ? o(t) : t).pathname || "/", r);
            if (null == n) return null;
            let l = (function e(t, r, a, n) {
              void 0 === r && (r = []),
                void 0 === a && (a = []),
                void 0 === n && (n = "");
              let l = (t, l, i) => {
                var h, o;
                let c,
                  d,
                  f = {
                    relativePath: void 0 === i ? t.path || "" : i,
                    caseSensitive: !0 === t.caseSensitive,
                    childrenIndex: l,
                    route: t,
                  };
                f.relativePath.startsWith("/") &&
                  (s(
                    f.relativePath.startsWith(n),
                    'Absolute route path "' +
                      f.relativePath +
                      '" nested under path "' +
                      n +
                      '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
                  ),
                  (f.relativePath = f.relativePath.slice(n.length)));
                let g = v([n, f.relativePath]),
                  m = a.concat(f);
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
                        ((h = g),
                        (o = t.index),
                        (d = (c = h.split("/")).length),
                        c.some(p) && (d += -2),
                        o && (d += 2),
                        c
                          .filter((e) => !p(e))
                          .reduce(
                            (e, t) => e + (u.test(t) ? 3 : "" === t ? 1 : 10),
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
                      let [a, ...n] = r,
                        l = a.endsWith("?"),
                        i = a.replace(/\?$/, "");
                      if (0 === n.length) return l ? [i, ""] : [i];
                      let s = e(n.join("/")),
                        h = [];
                      return (
                        h.push(
                          ...s.map((e) => ("" === e ? i : [i, e].join("/"))),
                        ),
                        l && h.push(...s),
                        h.map((e) => (t.startsWith("/") && "" === e ? "/" : e))
                      );
                    })(e.path))
                      l(e, t, r);
                  else l(e, t);
                }),
                r
              );
            })(e);
            l.sort((e, t) => {
              var r, a;
              return e.score !== t.score
                ? t.score - e.score
                : ((r = e.routesMeta.map((e) => e.childrenIndex)),
                  (a = t.routesMeta.map((e) => e.childrenIndex)),
                  r.length === a.length &&
                  r.slice(0, -1).every((e, t) => e === a[t])
                    ? r[r.length - 1] - a[a.length - 1]
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
                    h(
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
              })(n);
              i = (function (e, t, r) {
                void 0 === r && (r = !1);
                let { routesMeta: a } = e,
                  n = {},
                  l = "/",
                  i = [];
                for (let e = 0; e < a.length; ++e) {
                  let s = a[e],
                    h = e === a.length - 1,
                    o = "/" === l ? t : t.slice(l.length) || "/",
                    c = d(
                      {
                        path: s.relativePath,
                        caseSensitive: s.caseSensitive,
                        end: h,
                      },
                      o,
                    ),
                    u = s.route;
                  if (
                    (!c &&
                      h &&
                      r &&
                      !a[a.length - 1].route.index &&
                      (c = d(
                        {
                          path: s.relativePath,
                          caseSensitive: s.caseSensitive,
                          end: !1,
                        },
                        o,
                      )),
                    !c)
                  )
                    return null;
                  Object.assign(n, c.params),
                    i.push({
                      params: n,
                      pathname: v([l, c.pathname]),
                      pathnameBase: g(v([l, c.pathnameBase])),
                      route: u,
                    }),
                    "/" !== c.pathnameBase && (l = v([l, c.pathnameBase]));
                }
                return i;
              })(l[e], t, a);
            }
            return i;
          })(e, t, r, !1)
        );
      }
      r.d(t, {
        HS: () => v,
        Oi: () => s,
        Rr: () => o,
        pX: () => b,
        pb: () => f,
        rc: () => a,
        tH: () => m,
        ue: () => c,
      }),
        ((l = a || (a = {})).Pop = "POP"),
        (l.Push = "PUSH"),
        (l.Replace = "REPLACE"),
        ((i = n || (n = {})).data = "data"),
        (i.deferred = "deferred"),
        (i.redirect = "redirect"),
        (i.error = "error");
      let u = /^:[\w-]+$/,
        p = (e) => "*" === e;
      function d(e, t) {
        var r, a, n;
        let l, i;
        "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [s, o] =
            ((r = e.path),
            (a = e.caseSensitive),
            (n = e.end),
            void 0 === a && (a = !1),
            void 0 === n && (n = !0),
            h(
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
              : n
                ? (i += "\\/*$")
                : "" !== r && "/" !== r && (i += "(?:(?=\\/|$))"),
            [new RegExp(i, a ? void 0 : "i"), l]),
          c = t.match(s);
        if (!c) return null;
        let u = c[0],
          p = u.replace(/(.)\/+$/, "$1"),
          d = c.slice(1);
        return {
          params: o.reduce((e, t, r) => {
            let { paramName: a, isOptional: n } = t;
            if ("*" === a) {
              let e = d[r] || "";
              p = u.slice(0, u.length - e.length).replace(/(.)\/+$/, "$1");
            }
            let l = d[r];
            return (
              n && !l
                ? (e[a] = void 0)
                : (e[a] = (l || "").replace(/%2F/g, "/")),
              e
            );
          }, {}),
          pathname: u,
          pathnameBase: p,
          pattern: e,
        };
      }
      function f(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          a = e.charAt(r);
        return a && "/" !== a ? null : e.slice(r) || "/";
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
  },
]);
//# sourceMappingURL=48095.d94cbae93bcf4811.js.map
