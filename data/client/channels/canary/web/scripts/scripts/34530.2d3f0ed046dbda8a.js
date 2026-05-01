"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34530"],
  {
    664419(e) {
      e.exports = "/assets/2dee6e01eeecffcf.svg";
    },
    31427(e) {
      e.exports = "/assets/c47cde3effbffb30.svg";
    },
    831180(e) {
      e.exports = "/assets/5b41410c522dfd57.svg";
    },
    29873(e) {
      e.exports = "/assets/0a42f21f13b4957e.svg";
    },
    137177(e, n, t) {
      t.d(n, { A: () => g, M: () => I });
      var r = t(627968),
        l = t(64700),
        s = t(503698),
        u = t.n(s),
        c = t(172218),
        a = t(109112),
        i = t(635377),
        o = t.n(i),
        f = t(306044);
      let d = new (o())({ max: 1e3 });
      var L = t(997013),
        A = t(548118),
        M = t(776231),
        p = t(395671),
        E = t(486020),
        v = t(788868),
        S = t(985018),
        m = t(444282);
      let I = {
          XXSMALL: m.W6,
          XSMALL: m.s,
          SMALL: m.EX,
          MEDIUM: m.Y,
          MEDIUM_LARGE: m.rZ,
          LARGE: m.as,
          XLARGE: m.AQ,
        },
        g = l.forwardRef(function (e, n) {
          let s,
            {
              game: i,
              guild: o,
              skuId: g,
              pid: R,
              className: h,
              guildClassName: y,
              size: G = I.MEDIUM,
              allowUnknownGameIcon: x = !0,
              unknownGameIconFallback: b,
            } = e,
            [U, X] = l.useState(null),
            [D, k] = l.useState(!1),
            C = l.useCallback((e) => {
              k(e);
            }, []),
            _ = l.useRef(null);
          l.useEffect(() => {
            null != _.current &&
              D &&
              (cancelIdleCallback(_.current), (_.current = null));
          }, [D]);
          let j = (0, c.K)(C);
          if (
            (null != g &&
              (s = (function (e) {
                if (null == e) return null;
                switch (e) {
                  case v.pe.GUILD:
                    return t(664419);
                  case v.pe.TIER_0:
                    return t(31427);
                  case v.pe.TIER_1:
                    return t(831180);
                  case v.pe.TIER_2:
                  case v.pe.LEGACY:
                    return t(29873);
                  default:
                    return null;
                }
              })(g)),
            null != i &&
              null == s &&
              (i instanceof p.Ay
                ? (s = i.getIconURL(
                    (function (e) {
                      switch (e) {
                        case I.XXSMALL:
                          return 16;
                        case I.XSMALL:
                          return 24;
                        case I.SMALL:
                          return 30;
                        case I.MEDIUM:
                          return 40;
                        case I.MEDIUM_LARGE:
                          return 48;
                        case I.LARGE:
                          return 60;
                        default:
                          return 80;
                      }
                    })(G),
                  ))
                : i instanceof L.A
                  ? (s = E.Ay.getApplicationIconURL({
                      id: i.id,
                      icon: i.iconHash,
                    }))
                  : null != i.icon &&
                    (s = E.Ay.getApplicationIconURL({
                      id: i.id,
                      icon: i.icon,
                    }))),
            (s = (function (e, n) {
              let [t, r] = l.useState();
              return (
                l.useEffect(() => {
                  if (null == e || null != n) return void r(void 0);
                  let t = d.get(e);
                  if (null != t) return void r(t);
                  let l = !1;
                  return (
                    (0, f.A)()
                      .then((n) => {
                        null == n ||
                          l ||
                          n.identifyGame(e, (n, t) => {
                            if (l) return;
                            if (
                              0 !== n ||
                              null == t.icon ||
                              "" === t.icon ||
                              null == t.name ||
                              "" === t.name
                            )
                              return void r(void 0);
                            let s = `data:image/png;base64,${t.icon}`;
                            d.set(e, s), r(s);
                          });
                      })
                      .catch(() => {
                        l || r(void 0);
                      }),
                    () => {
                      l = !0;
                    }
                  );
                }, [e, n]),
                n ?? t
              );
            })(R, s)),
            l.useEffect(() => {
              if (null == s || "" === s) return;
              if ((0, E.V0)(s) || (0, M.LE)(s)) return void X(s);
              let e = () =>
                (0, M.yt)(s, (e, n) => {
                  X(s);
                });
              if (D) return e();
              let n = requestIdleCallback(() => {
                (_.current = null), e();
              });
              return (
                (_.current = n),
                () => {
                  null != _.current &&
                    (cancelIdleCallback(_.current), (_.current = null));
                }
              );
            }, [s, D]),
            void 0 === s && null != o)
          ) {
            let e = (function (e) {
              switch (e) {
                case I.XSMALL:
                  return A.Ay.Sizes.SMALLER;
                case I.SMALL:
                  return A.Ay.Sizes.SMALL;
                case I.LARGE:
                  return A.Ay.Sizes.LARGE;
                default:
                case I.MEDIUM:
                  return A.Ay.Sizes.MEDIUM;
              }
            })(G);
            return (0, r.jsx)(A.Ay, {
              className: u()(m.Gt, y, h),
              guild: o,
              size: e,
            });
          }
          if (null == s || "" === s)
            return x
              ? (b ??
                  (0, r.jsx)(a._, {
                    size: "md",
                    color: "currentColor",
                    className: u()(m.Gt, G, h),
                  }))
              : null;
          let w = i?.name,
            N =
              null != w && "" !== w
                ? S.intl.formatToPlainString(S.t.tiKyYg, { applicationName: w })
                : S.intl.string(S.t["2B/phM"]),
            z = (0, E.V0)(s),
            T = (0, M.LE)(s),
            Y = U === s || z || T;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              Y ? null : (0, r.jsx)("div", { className: u()(m.qD, G, h) }),
              (0, r.jsx)("img", {
                ref: n,
                alt: N,
                src: s,
                className: u()(m.Gt, G, h),
                style: Y ? void 0 : { display: "none" },
              }),
              (0, r.jsx)("div", {
                className: m.Xc,
                children: (0, r.jsx)("div", { ref: j, className: m.Pr }),
              }),
            ],
          });
        });
    },
  },
]);
//# sourceMappingURL=34530.2d3f0ed046dbda8a.js.map
