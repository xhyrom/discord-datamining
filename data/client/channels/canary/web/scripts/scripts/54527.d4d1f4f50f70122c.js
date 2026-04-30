"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54527"],
  {
    874864(t, n, s) {
      s.d(n, {
        $_: () => g,
        DU: () => w,
        Lp: () => L,
        Pf: () => U,
        QR: () => I,
        q5: () => C,
      });
      var i = s(661531),
        o = s(477262),
        r = s(391242),
        e = s(179866),
        l = s(797285),
        c = s(27232),
        a = s(460905),
        f = s(183623),
        u = s(116891);
      s(358431);
      var _ = s(776627),
        E = s(652215),
        d = s(788868),
        R = s(985018);
      let P = function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : i.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
          return {
            color: t,
            icon: r.O,
            description: R.intl.string(R.t["94l3Ul"]),
          };
        },
        h = () => ({
          color: i.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
          icon: e.i,
          description: R.intl.string(R.t.zZe94m),
        }),
        A = function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : i.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
          return {
            color: t,
            icon: l.t,
            description: R.intl.string(R.t.ZwOSdn),
          };
        },
        M = function (t) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : i.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            s = 0,
            o = 0;
          switch (t) {
            case E.TVA.TIER_1:
              (s = 15), (o = 100);
              break;
            case E.TVA.TIER_2:
              (s = 30), (o = 150);
              break;
            case E.TVA.TIER_3:
              (s = 60), (o = 250);
          }
          return {
            color: n,
            icon: l.t,
            description: R.intl.formatToPlainString(R.t["12vFYK"], {
              numStickers: s,
              numEmojis: o,
            }),
          };
        },
        p = () => ({
          color: i.A.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
          icon: c.G,
          description: R.intl.string(R.t["ThRK/u"]),
        }),
        v = function () {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : R.intl.string(R.t.SQV8g6);
          return {
            color: i.A.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
            icon: a.n,
            description: t,
          };
        },
        T = function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            n = (0, u.eT)("GuildBoostingConstants"),
            s =
              n === u.fj
                ? R.intl.string(R.t.oIKhwT)
                : R.intl.formatToPlainString(R.t["7y2ina"], {
                    resolution: n,
                    framerate:
                      d.TG[E.TVA.TIER_2].limits.screenShareQualityFramerate,
                  });
          return { color: t, icon: f.F, description: s };
        };
      function g() {
        return [
          h(),
          {
            color: i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            icon: o.s,
            description: R.intl.string(R.t["n/HqCh"]),
          },
          A(),
          v(),
        ];
      }
      function I() {
        return [h(), M(E.TVA.TIER_2), T(), v()];
      }
      function U() {
        return [
          M(E.TVA.TIER_3, i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css),
          {
            color: i.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            icon: _.A,
            description: R.intl.string(R.t.Tm40TZ),
          },
          p(),
          v(),
        ];
      }
      function w() {
        return [
          p(),
          {
            color: i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            icon: r.O,
            description: R.intl.string(R.t.AU0zcQ),
          },
          M(E.TVA.TIER_3),
          v(),
        ];
      }
      function L() {
        return [
          {
            color: i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            icon: o.s,
            description: R.intl.string(R.t.iGuEFe),
          },
          A(),
          P(),
          v(),
        ];
      }
      function C() {
        return [A(), v()];
      }
    },
    631305(t, n, s) {
      s.d(n, { A: () => f });
      var i = s(627968);
      s(64700);
      var o = s(231723),
        r = s(192308),
        e = s(869146),
        l = s(709055),
        c = s(954571),
        a = s(652215);
      function f(t, n) {
        let f = n ?? `${a.JJy.PREMIUM_GUILD_UPSELL_MODAL}`;
        null != t.targetBoostedGuildTier &&
          (f += ` - Tier ${t.targetBoostedGuildTier}`),
          c.default.track(a.HAw.OPEN_MODAL, {
            type: f,
            location: t.analyticsSourceLocation,
          });
        let { openInPopoutEnabled: u, ..._ } = t,
          E = e.A.getWindowOpen(a.MLl.CHANNEL_CALL_POPOUT) && null != u && u;
        E && (0, l.A)(a.MLl.CHANNEL_CALL_POPOUT);
        let d = E ? o.KX : o.SY;
        (0, r.openModalLazy)(
          async () => {
            let { default: t } = await Promise.all([
              s.e("80848"),
              s.e("16933"),
              s.e("45650"),
              s.e("75527"),
              s.e("40305"),
              s.e("52041"),
              s.e("60235"),
              s.e("45959"),
              s.e("39667"),
              s.e("53092"),
              s.e("71202"),
              s.e("45210"),
            ]).then(s.bind(s, 331617));
            return (n) => (0, i.jsx)(t, { ..._, ...n });
          },
          {
            onCloseCallback: () => {
              c.default.track(a.HAw.MODAL_DISMISSED, {
                type: f,
                location: t.analyticsSourceLocation,
              });
            },
            contextKey: d,
          },
        );
      }
    },
    358431(t, n, s) {
      s.d(n, { A: () => r });
      var i = s(627968);
      s(64700);
      var o = s(953727);
      function r(t) {
        let { width: n = 24, height: s = 24, ...r } = t;
        return (0, i.jsxs)("svg", {
          ...(0, o.A)(r),
          height: s,
          width: n,
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              d: "m6.3599 4.33.41.84c.02245.04336.03052.09274.02304.14099s-.03013.09287-.06465.1274c-.03453.03453-.07915.05717-.1274.06465s-.09763-.00059-.14099-.02304l-.84-.41c-.03119-.01506-.06537-.02288-.1-.02288s-.06882.00782-.1.02288l-.84.41c-.04336.02245-.09274.03052-.141.02304-.04825-.00748-.09287-.03012-.12739-.06465-.03453-.03453-.05717-.07915-.06465-.1274s.00058-.09763.02304-.14099l.41-.84c.01505-.03119.02287-.06537.02287-.1s-.00782-.06881-.02287-.1l-.41-.84c-.01585-.04253-.01876-.08879-.00836-.13297.01039-.04417.03362-.08429.06676-.11529s.07471-.05151.11948-.05894c.04477-.00742.09074-.00144.13212.0172l.84.41c.03118.01506.06537.02288.1.02288s.06881-.00782.1-.02288l.84-.41c.04336-.02245.09274-.03052.14099-.02304s.09287.03012.1274.06465c.03452.03453.05717.07914.06465.1274.00748.04825-.00059.09763-.02304.14099l-.41.84c-.01211.02846-.01834.05907-.01834.09s.00623.06154.01834.09z",
              fill: "#ffd836",
            }),
            (0, i.jsx)("path", {
              d: "m12 2.70001-5.45996 5.46v7.67999l5.45996 5.46 5.46-5.46v-7.67999zm2.73 11.99999-2.73 2.74-2.72996-2.73v-5.41999l2.72996-2.73 2.73 2.73z",
              fill: "#ff73fa",
            }),
            (0, i.jsx)("path", {
              d: "m12 2.70001v3.86l2.73 2.73 2.73-1.13z",
              fill: "#ffc0ff",
            }),
            (0, i.jsx)("path", {
              d: "m9.27004 14.71-2.73 1.13 5.45996 5.46v-3.86z",
              fill: "#e655d4",
            }),
            (0, i.jsxs)("g", {
              fill: "#d4e4ff",
              children: [
                (0, i.jsx)("path", {
                  d: "m16.2199 17.7h.01c.243 0 .44-.197.44-.44v-.89c0-.243-.197-.44-.44-.44h-.01c-.243 0-.44.197-.44.44v.89c0 .243.197.44.44.44z",
                }),
                (0, i.jsx)("path", {
                  d: "m16.2199 21.25h.01c.243 0 .44-.197.44-.44v-.89c0-.243-.197-.44-.44-.44h-.01c-.243 0-.44.197-.44.44v.89c0 .243.197.44.44.44z",
                }),
                (0, i.jsx)("path", {
                  d: "m15.3401 18.59v-.01c0-.243-.197-.44-.44-.44h-.89c-.243 0-.44.197-.44.44v.01c0 .243.197.44.44.44h.89c.243 0 .44-.197.44-.44z",
                }),
                (0, i.jsx)("path", {
                  d: "m18.8799 18.59v-.01c0-.243-.197-.44-.44-.44h-.89c-.243 0-.44.197-.44.44v.01c0 .243.197.44.44.44h.89c.243 0 .44-.197.44-.44z",
                }),
              ],
            }),
            (0, i.jsx)("path", {
              d: "m9.27002 9.29v5.42l2.72998 2.73 2.73-2.73v-5.42l-2.73-2.73z",
              fill: "#ffdef9",
            }),
            (0, i.jsx)("path", {
              d: "m14.72 9.28998v.01l-5.42997 5.43002-.01-.01v-1.47l4.69997-4.71002z",
              fill: "#fff",
            }),
            (0, i.jsx)("path", {
              d: "m14.7201 11.34v1.5l-3.66 3.66-.75-.75z",
              fill: "#fff",
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=54527.d4d1f4f50f70122c.js.map
