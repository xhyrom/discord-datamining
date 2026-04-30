"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1006"],
  {
    450373(E, _, e) {
      e.d(_, { A: () => n });
      var t = e(64700),
        R = e(440745),
        A = e.n(R),
        r = e(317097),
        s = e(17928),
        T = e(775602);
      let n = (E) => {
        let _ = (0, s.bG)([T.A], () =>
          T.A.desaturateUserColors ? T.A.saturation : 1,
        );
        return (0, t.useMemo)(() => {
          let { h: e, s: t, l: R } = A()((0, r.Hl)(E)).toHsl(),
            s = A()({ h: e, s: t * _, l: R });
          return { hex: s.toHexString(), hsl: s.toHslString() };
        }, [E, _]);
      };
    },
    704640(E, _, e) {
      e.d(_, { A: () => s });
      var t = e(661531),
        R = e(788868);
      let A = R.Ac.PREMIUM_TENURE_1_MONTH,
        r = {
          [R.Ac.PREMIUM_TENURE_1_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END",
          },
          [R.Ac.PREMIUM_TENURE_3_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END",
          },
          [R.Ac.PREMIUM_TENURE_6_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END",
          },
          [R.Ac.PREMIUM_TENURE_12_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END",
          },
          [R.Ac.PREMIUM_TENURE_24_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END",
          },
          [R.Ac.PREMIUM_TENURE_36_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END",
          },
          [R.Ac.PREMIUM_TENURE_60_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END",
          },
          [R.Ac.PREMIUM_TENURE_72_MONTH]: {
            start: "EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START",
            end: "EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END",
          },
        };
      function s(E) {
        let _ = r[E ?? A] ?? r[A];
        return {
          type: "custom",
          start: t.A.colors[_.start],
          end: t.A.colors[_.end],
        };
      }
    },
    686189(E, _, e) {
      e.d(_, { A: () => r });
      var t = e(64700),
        R = e(253932),
        A = e(486020);
      function r(E) {
        let { displayProfile: _, size: e, canAnimate: r, pendingBanner: s } = E,
          T = R.kt.getSetting(),
          n = _?.getPreviewBanner(s, r, e),
          [N, a] = (0, t.useState)(
            _?.banner == null ? "COMPLETE" : "SHOULD_LOAD",
          );
        return (
          (0, t.useEffect)(() => {
            if (null == n || "SHOULD_LOAD" !== N) return;
            a("LOADING");
            let E = new Image();
            (E.src = n), (E.onload = () => a("COMPLETE"));
          }, [n, N]),
          (0, t.useEffect)(() => {
            if (T) return;
            let E = _?.getPreviewBanner(s, !0, e);
            null != E && (0, A.o4)(E) && (new Image().src = E);
          }, [T, _, e, s]),
          { bannerSrc: n, status: N }
        );
      }
    },
    915614(E, _, e) {
      e.d(_, { A: () => G, o: () => d });
      var t = e(627968),
        R = e(64700),
        A = e(503698),
        r = e.n(A),
        s = e(317097),
        T = e(17928),
        n = e(661531),
        N = e(778712),
        a = e(602853),
        l = e(654107),
        i = e(450373),
        D = e(915089),
        I = e(693875),
        S = e(253932),
        o = e(531685),
        c = e(486020),
        u = e(837529),
        U = e(686189),
        M = e(985253),
        P = e(926601);
      function d(E) {
        let {
            user: _,
            displayProfile: e,
            guildId: A,
            pendingBanner: M,
            children: d,
            className: G,
            avatarSize: h,
            avatarOffsetX: O,
            avatarOffsetY: g,
            bannerWidth: B,
            bannerHeight: L,
            themePadding: m,
            pendingAccentColor: V,
            animateOnHoverOrFocusOnly: f = !1,
          } = E,
          H = (0, D.GV)(),
          [x, X] = R.useState(!1),
          v = (0, T.bG)([o.A], () => o.A.isFocused()),
          w = S.kt.getSetting(),
          k = (0, u.Nx)(),
          { bannerSrc: p, status: C } = (0, U.A)({
            displayProfile: e,
            pendingBanner: M,
            size: B,
            canAnimate: f || !w ? x : v,
          }),
          b = k ? null : p,
          j = (0, a.r)(n.A.unsafe_rawColors.PRIMARY_800).hex(),
          y = _.getAvatarURL(A, (0, N.FT)(h)),
          Y = (0, s.LX)((0, l.Ay)(y, j, !1)),
          $ = (0, i.A)(V ?? e?.primaryColor ?? Y).hex,
          K = ((E) => {
            let { size: _, stroke: e } = (0, N.Kj)(E);
            return _ / 2 + e;
          })(h),
          z = L - g - m;
        return (0, t.jsxs)("svg", {
          className: P.dK,
          viewBox: `0 0 ${B} ${L}`,
          style: { minWidth: B, minHeight: L },
          children: [
            (0, t.jsxs)("mask", {
              id: H,
              children: [
                (0, t.jsx)("rect", {
                  fill: "white",
                  x: "0",
                  y: "0",
                  width: "100%",
                  height: "100%",
                }),
                (0, t.jsx)("circle", {
                  fill: "black",
                  cx: K + O - m,
                  cy: z,
                  r: K,
                }),
              ],
            }),
            (0, t.jsxs)("foreignObject", {
              x: "0",
              y: "0",
              width: "100%",
              height: "100%",
              overflow: "visible",
              mask: `url(#${H})`,
              children: [
                d,
                (0, t.jsx)("div", {
                  className: r()(P.vK, G),
                  onMouseMove: () => X(!0),
                  onMouseLeave: () => X(!1),
                  style: {
                    height: L,
                    minHeight: L,
                    backgroundImage: null != b ? `url(${b})` : void 0,
                    backgroundColor:
                      "COMPLETE" === C || k
                        ? $
                        : n.A.unsafe_rawColors.PRIMARY_800.css,
                  },
                  children:
                    !w && (0, c.o4)(b) && (0, t.jsx)(I.A, { className: P.pH }),
                }),
              ],
            }),
          ],
        });
      }
      function G(E) {
        let {
            themeType: _,
            user: e,
            displayProfile: R,
            canUsePremiumProfileCustomization: A = !1,
            specOverrides: r,
            ...s
          } = E,
          T = M.T[_],
          n = null != r ? { ...T, ...r } : T,
          N = !(0, u.Qq)() && (A || R?.canUsePremiumProfileCustomization || !1);
        return (0, t.jsx)(d, {
          ...s,
          ...n,
          user: e,
          displayProfile: R,
          themePadding: N ? n.themePadding : 0,
        });
      }
    },
  },
]);
//# sourceMappingURL=1006.7dcd4c1a553b8c0e.js.map
