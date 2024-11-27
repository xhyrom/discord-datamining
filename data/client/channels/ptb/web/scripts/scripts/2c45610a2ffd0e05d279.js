"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46369"],
  {
    438820: function (e, t, n) {
      var i,
        a = n(442837),
        c = n(570140);
      function o(e, t, n) {
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
      let d = {
        canPlayWowMoment: !1,
        isFetchingWowMomentMedia: !1,
        wowMomentWumpusMediaUrl: null,
      };
      class s extends (i = a.ZP.PersistedStore) {
        initialize(e) {
          null != e && (d = e),
            (d.canPlayWowMoment = !1),
            (d.isFetchingWowMomentMedia = !1),
            (d.wowMomentWumpusMediaUrl = null);
        }
        getState() {
          return d;
        }
        get canPlayWowMoment() {
          return d.canPlayWowMoment;
        }
        get isFetchingWowMomentMedia() {
          return d.isFetchingWowMomentMedia;
        }
        get wowMomentWumpusMedia() {
          return d.wowMomentWumpusMediaUrl;
        }
      }
      o(s, "displayName", "PurchasedItemsFestivityStore"),
        o(s, "persistKey", "PurchasedItemsFestivityStore"),
        o(s, "migrations", [(e) => ({ ...e })]),
        (t.Z = new s(c.Z, {
          LOGOUT: function () {
            d = {
              canPlayWowMoment: !1,
              isFetchingWowMomentMedia: !1,
              wowMomentWumpusMediaUrl: null,
            };
          },
          PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function (e) {
            let { value: t } = e;
            d.canPlayWowMoment = t;
          },
          PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function () {
            d.isFetchingWowMomentMedia = !0;
          },
          PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function (
            e,
          ) {
            let { wumpusMedia: t } = e;
            (d.wowMomentWumpusMediaUrl = t), (d.isFetchingWowMomentMedia = !1);
          },
          PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE:
            function () {
              (d.isFetchingWowMomentMedia = !1), (d.canPlayWowMoment = !1);
            },
        }));
    },
    553300: function (e, t, n) {
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2024-12_premium_wow_moment",
        label: "Premium Wow Moment",
        defaultConfig: { enabled: !1 },
        treatments: [
          { id: 1, label: "Enable the wow moment", config: { enabled: !0 } },
        ],
      });
      t.Z = i;
    },
    177741: function (e, t, n) {
      let i;
      n.r(t),
        n.d(t, {
          WowMomentTypes: function () {
            return a;
          },
          prefetch: function () {
            return C;
          },
        }),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var a,
        c,
        o = n(200651),
        d = n(192379),
        s = n(120356),
        r = n.n(s),
        u = n(752877),
        m = n(442837),
        p = n(481060),
        M = n(570140),
        l = n(607070),
        w = n(70097),
        _ = n(626135),
        f = n(526167),
        h = n(585483),
        E = n(960048),
        W = n(138464),
        T = n(438820),
        I = n(553300),
        b = n(981631),
        S = n(236029),
        g = n(233975),
        P = n(656402),
        Z = n(683984),
        y = n(347010),
        F = n(713669),
        U = n(471517);
      async function C(e) {
        try {
          M.Z.dispatch({
            type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA",
          });
          let t = e ? g.Z : P.Z;
          window.matchMedia("(min-width: 1012px) and (max-width: 1980px)")
            .matches ||
          window.matchMedia("(min-height: 720px) and (max-height: 1408px)")
            .matches
            ? (t = e ? Z.Z : y.Z)
            : (window.matchMedia("(min-width: 1980px)").matches ||
                window.matchMedia("(min-height: 1408px)").matches) &&
              (t = e ? F.Z : U.Z);
          let n = await fetch(t).then(async (e) => {
            let t = await e.blob();
            return window.URL.createObjectURL(t);
          });
          M.Z.dispatch({
            type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS",
            wumpusMedia: n,
          });
        } catch (e) {
          E.Z.captureException(e),
            M.Z.dispatch({
              type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_FAILURE",
            });
        }
      }
      function H() {
        let e = (0, m.e7)([l.Z], () => l.Z.useReducedMotion),
          {
            wumpusMedia: t,
            isFetchingMedia: n,
            canPlayWowMoment: a,
          } = (0, m.cj)([T.Z], () => ({
            wumpusMedia: T.Z.wowMomentWumpusMedia,
            isFetchingMedia: T.Z.isFetchingWowMomentMedia,
            canPlayWowMoment: T.Z.canPlayWowMoment,
          })),
          [c, s] = d.useState(!1),
          M = (0, f.vu)(),
          E = (0, f.rO)(),
          I = M > 52 || -1 === M || E,
          g = E ? "video/mp4" : "video/webm";
        I && !e && a && null === t && !1 === n && C(E),
          d.useEffect(() => {
            function t() {
              !e &&
                T.Z.canPlayWowMoment &&
                (s(!0),
                (i = setTimeout(() => {
                  s(!1),
                    Z(!0),
                    _.default.track(b.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
                      wow_moment_type: "gradient_highlight",
                    }),
                    (0, W.H)(!1);
                }, 2e3)));
            }
            return (
              h.S.subscribe(b.CkL.PREMIUM_SUBSCRIPTION_CREATED, t),
              () => {
                h.S.unsubscribe(b.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
              }
            );
          }, [e, I]);
        let [P, Z] = d.useState(!1),
          [y, F] = d.useState(!1),
          U = (0, p.useSpring)({
            opacity: P ? 0.2 : 0,
            config: { duration: 100 },
          }),
          H = (0, p.useSpring)(
            { x: y ? "100%" : "-100%", config: { duration: 500 } },
            y ? "respect-motion-settings" : "animate-never",
          );
        d.useEffect(() => {
          let e = -1;
          return (
            P &&
              (e = window.setTimeout(() => {
                F(!0);
              }, 1e3)),
            () => {
              window.clearTimeout(e);
            }
          );
        }, [P]),
          d.useEffect(() => {
            let e = -1;
            return (
              y &&
                (e = window.setTimeout(() => {
                  F(!1), Z(!1);
                }, 1e3)),
              () => {
                window.clearTimeout(e);
              }
            );
          }, [y]);
        let x = c && null !== t,
          O = x || P;
        return (0, o.jsxs)("div", {
          className: r()({ [S.wrapper]: !O, [S.activeWrapper]: O }),
          children: [
            x &&
              (0, o.jsx)(w.Z, {
                autoPlay: !0,
                className: S.videoWrapper,
                onPlay: () => {
                  clearTimeout(i),
                    _.default.track(b.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
                      wow_moment_type: "wumpus_flight",
                    });
                },
                onTimeUpdate: (e) => {
                  e.currentTarget.currentTime > 4 && (0, W.H)(!0);
                },
                onEnded: () => {
                  s(!1), (0, W.H)(!1);
                },
                children: (0, o.jsx)("source", { src: t, type: g }),
              }),
            (0, o.jsx)(u.animated.div, {
              className: S.gadientHighlight,
              style: U,
            }),
            (0, o.jsx)(u.animated.div, {
              className: S.swipeWrapper,
              style: H,
              children: (0, o.jsxs)("svg", {
                className: S.swipe,
                viewBox: "0 0 848 1024",
                fill: "none",
                children: [
                  (0, o.jsx)("path", {
                    d: "M257.206 1024L0 0H341.333L598.539 1024H257.206Z",
                    fill: "white",
                  }),
                  (0, o.jsx)("path", {
                    d: "M847.975 1024H690.436L433.231 0H590.769L847.975 1024Z",
                    fill: "white",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      ((c = a || (a = {})).WUMPUS_FLIGHT = "wumpus_flight"),
        (c.GRADIENT_HIGHLIGHT = "gradient_highlight");
      t.default = function () {
        let { enabled: e } = I.Z.useExperiment({
          location: "PremiumSubscriptionWowMoment",
        });
        return e ? (0, o.jsx)(H, {}) : null;
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
    233975: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/bee773598699a807260818b22c8e9c81ad0e225cf443a455eacbd0f3635e17bf.mov";
    },
    656402: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/431ff8d47c41f2bd88384b1313e15412edadfcce37129eb701f60af977c7d09f.webm";
    },
    683984: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/059b6cf802a6d24b41dbbd615be224caec181dbd56d30b78f6b1e066f01d5d47.mov";
    },
    347010: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/a63690273bd7f50f48cc8d062b22d53a1be91c47e527aecce6f8c23bd47e0970.webm";
    },
    713669: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/c26c4fe88e4c6c5e39f9fb7902857c6efe4957579a8ba95f307d847833d35cd0.mov";
    },
    471517: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/e5d09280d1fcee3a4bef5c6b7c39bd9d1046c350915280fd6be55f21f7088587.webm";
    },
  },
]);
//# sourceMappingURL=2c45610a2ffd0e05d279.js.map
