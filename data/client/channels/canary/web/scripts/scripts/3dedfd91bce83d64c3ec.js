"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46369"],
  {
    438820: function (e, t, n) {
      var a,
        i = n(442837),
        o = n(570140);
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let s = {
        canPlayWowMoment: !1,
        isFetchingWowMomentMedia: !1,
        wowMomentWumpusMediaUrl: null,
      };
      class d extends (a = i.ZP.PersistedStore) {
        initialize(e) {
          null != e && (s = e),
            (s.canPlayWowMoment = !1),
            (s.isFetchingWowMomentMedia = !1),
            (s.wowMomentWumpusMediaUrl = null);
        }
        getState() {
          return s;
        }
        get canPlayWowMoment() {
          return s.canPlayWowMoment;
        }
        get isFetchingWowMomentMedia() {
          return s.isFetchingWowMomentMedia;
        }
        get wowMomentWumpusMedia() {
          return s.wowMomentWumpusMediaUrl;
        }
      }
      c(d, "displayName", "PurchasedItemsFestivityStore"),
        c(d, "persistKey", "PurchasedItemsFestivityStore"),
        c(d, "migrations", [(e) => ({ ...e })]),
        (t.Z = new d(o.Z, {
          LOGOUT: function () {
            s = {
              canPlayWowMoment: !1,
              isFetchingWowMomentMedia: !1,
              wowMomentWumpusMediaUrl: null,
            };
          },
          PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function (e) {
            let { value: t } = e;
            s.canPlayWowMoment = t;
          },
          PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function () {
            s.isFetchingWowMomentMedia = !0;
          },
          PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function (
            e,
          ) {
            let { wumpusMedia: t } = e;
            (s.wowMomentWumpusMediaUrl = t), (s.isFetchingWowMomentMedia = !1);
          },
          PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE:
            function () {
              (s.isFetchingWowMomentMedia = !1), (s.canPlayWowMoment = !1);
            },
        }));
    },
    553300: function (e, t, n) {
      let a = (0, n(818083).B)({
        kind: "user",
        id: "2024-12_premium_wow_moment",
        label: "Premium Wow Moment",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 1, label: "Enable the wow moment", config: { enabled: !0 } },
        ],
      });
      t.Z = a;
    },
    949772: function (e, t, n) {
      let a = (0, n(818083).B)({
        kind: "user",
        id: "2024-12_premium_wow_moment_fetch_analytics",
        label: "Premium Wow Moment Fetch Analytics",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 1, label: "Enable the analytics", config: { enabled: !0 } },
        ],
      });
      t.Z = a;
    },
    177741: function (e, t, n) {
      let a;
      n.r(t),
        n.d(t, {
          WowMomentTypes: function () {
            return i;
          },
        }),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i,
        o,
        c = n(200651),
        s = n(192379),
        d = n(120356),
        r = n.n(d),
        u = n(752877),
        m = n(442837),
        l = n(481060),
        M = n(570140),
        p = n(607070),
        w = n(70097),
        _ = n(626135),
        E = n(526167),
        f = n(585483),
        h = n(960048),
        W = n(138464),
        T = n(438820),
        I = n(553300),
        b = n(949772),
        g = n(981631),
        S = n(236029),
        P = n(426401),
        Z = n(926734),
        y = n(601046),
        C = n(421391),
        F = n(153911),
        U = n(588369);
      async function H(e) {
        try {
          M.Z.dispatch({
            type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA",
          });
          let t = 1012,
            n = e ? P.Z : Z.Z;
          window.matchMedia("(min-width: 1012px) and (max-width: 1980px)")
            .matches ||
          window.matchMedia("(min-height: 720px) and (max-height: 1408px)")
            .matches
            ? ((t = 1980), (n = e ? y.Z : C.Z))
            : (window.matchMedia("(min-width: 1980px)").matches ||
                window.matchMedia("(min-height: 1408px)").matches) &&
              ((t = 2880), (n = e ? F.Z : U.Z));
          let { enabled: a } = b.Z.getCurrentConfig(
            { location: "PremiumSubscriptionWowMoment.prefetch" },
            { autoTrackExposure: !1 },
          );
          a &&
            _.default.track(g.rMx.PREMIUM_WOW_MOMENT_MEDIA_PREFETCH_TRIGGER, {
              client_width: t,
            });
          let i = await fetch(n),
            o = await i.blob(),
            c = window.URL.createObjectURL(o);
          M.Z.dispatch({
            type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS",
            wumpusMedia: c,
          });
        } catch (e) {
          h.Z.captureException(e),
            M.Z.dispatch({
              type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE",
            });
        }
      }
      function x() {
        let e = (0, m.e7)([p.Z], () => p.Z.useReducedMotion),
          {
            wumpusMedia: t,
            isFetchingMedia: n,
            canPlayWowMoment: i,
          } = (0, m.cj)([T.Z], () => ({
            wumpusMedia: T.Z.wowMomentWumpusMedia,
            isFetchingMedia: T.Z.isFetchingWowMomentMedia,
            canPlayWowMoment: T.Z.canPlayWowMoment,
          })),
          [o, d] = s.useState(!1),
          M = (0, E.vu)(),
          h = (0, E.rO)(),
          I = M > 52 || -1 === M || h,
          b = h ? "video/mp4" : "video/webm",
          P = I && !e && i && null === t && !1 === n;
        s.useEffect(() => {
          P && H(h);
        }, [P, h]),
          s.useEffect(() => {
            function t() {
              !e &&
                T.Z.canPlayWowMoment &&
                (d(!0),
                (a = setTimeout(() => {
                  d(!1),
                    y(!0),
                    _.default.track(g.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
                      wow_moment_type: "gradient_highlight",
                    }),
                    (0, W.H)(!1);
                }, 2e3)));
            }
            return (
              f.S.subscribe(g.CkL.PREMIUM_SUBSCRIPTION_CREATED, t),
              () => {
                f.S.unsubscribe(g.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
              }
            );
          }, [e, I]);
        let [Z, y] = s.useState(!1),
          [C, F] = s.useState(!1),
          U = (0, l.useSpring)({
            opacity: Z ? 0.2 : 0,
            config: { duration: 100 },
          }),
          x = (0, l.useSpring)(
            { x: C ? "100%" : "-100%", config: { duration: 500 } },
            C ? "respect-motion-settings" : "animate-never",
          );
        s.useEffect(() => {
          let e = -1;
          return (
            Z &&
              (e = window.setTimeout(() => {
                F(!0);
              }, 1e3)),
            () => {
              window.clearTimeout(e);
            }
          );
        }, [Z]),
          s.useEffect(() => {
            let e = -1;
            return (
              C &&
                (e = window.setTimeout(() => {
                  F(!1), y(!1);
                }, 1e3)),
              () => {
                window.clearTimeout(e);
              }
            );
          }, [C]);
        let O = o && null !== t,
          R = O || Z;
        return (0, c.jsxs)("div", {
          className: r()({ [S.wrapper]: !R, [S.activeWrapper]: R }),
          children: [
            O &&
              (0, c.jsx)(w.Z, {
                autoPlay: !0,
                className: S.videoWrapper,
                onPlay: () => {
                  clearTimeout(a),
                    _.default.track(g.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
                      wow_moment_type: "wumpus_flight",
                    });
                },
                onTimeUpdate: (e) => {
                  e.currentTarget.currentTime > 4 && (0, W.H)(!0);
                },
                onEnded: () => {
                  d(!1), (0, W.H)(!1);
                },
                children: (0, c.jsx)("source", { src: t, type: b }),
              }),
            (0, c.jsx)(u.animated.div, {
              className: S.gadientHighlight,
              style: U,
            }),
            (0, c.jsx)(u.animated.div, {
              className: S.swipeWrapper,
              style: x,
              children: (0, c.jsxs)("svg", {
                className: S.swipe,
                viewBox: "0 0 848 1024",
                fill: "none",
                children: [
                  (0, c.jsx)("path", {
                    d: "M257.206 1024L0 0H341.333L598.539 1024H257.206Z",
                    fill: "white",
                  }),
                  (0, c.jsx)("path", {
                    d: "M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z",
                    fill: "white",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      ((o = i || (i = {})).WUMPUS_FLIGHT = "wumpus_flight"),
        (o.GRADIENT_HIGHLIGHT = "gradient_highlight");
      t.default = function () {
        let { enabled: e } = I.Z.useExperiment({
          location: "PremiumSubscriptionWowMoment",
        });
        return e ? (0, c.jsx)(x, {}) : null;
      };
    },
    236029: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_cd22e7",
        activeWrapper: "activeWrapper_cd22e7",
        videoWrapper: "videoWrapper_cd22e7",
        gadientHighlight: "gadientHighlight_cd22e7",
        swipeWrapper: "swipeWrapper_cd22e7",
        swipe: "swipe_cd22e7",
      };
    },
    426401: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/e39ebab3f9b41f134813b925a561b04796e76fc95428dac13692b7c0caa0d75a.mov";
    },
    926734: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/3d55c81c787244a8d86e0bb5ff52640995e99c19ef1d3afdd12f14951ffe28e3.webm";
    },
    601046: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/e0cf9a81d325a11abab3f39a1bf161e26306001ac526a2118693631e50639abb.mov";
    },
    421391: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/aed581761839cc398b543509b65890d458e0a4d6f258c5a47f8aa91368570a0a.webm";
    },
    153911: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/10901216895c8804bd02ded434192a914a117f0ee7c4f7e1b8ea25c7c297c9b1.mov";
    },
    588369: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/255e915caadab258cf5ad40cfa8f81ca17227502e691370f3aaf604816da0509.webm";
    },
  },
]);
//# sourceMappingURL=3dedfd91bce83d64c3ec.js.map
