"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46369"],
  {
    631274: function (e, t, i) {
      e.exports = i.p + "cb65b9abc51d503d9916.mov";
    },
    422138: function (e, t, i) {
      e.exports = i.p + "816bb0152110b7505254.webm";
    },
    194077: function (e, t, i) {
      e.exports = i.p + "1a7cbd74424e35c0b8f6.mov";
    },
    113386: function (e, t, i) {
      e.exports = i.p + "7b127d767d3e4d62a696.webm";
    },
    724688: function (e, t, i) {
      e.exports = i.p + "2c1d2987c6a150e7b65a.mov";
    },
    48547: function (e, t, i) {
      e.exports = i.p + "e67cb276981e36019771.webm";
    },
    438820: function (e, t, i) {
      var n,
        a = i(442837),
        o = i(570140);
      function c(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      let r = {
        canPlayWowMoment: !1,
        isFetchingWowMomentMedia: !1,
        wowMomentWumpusMediaUrl: null,
      };
      class s extends (n = a.ZP.PersistedStore) {
        initialize(e) {
          null != e && (r = e),
            (r.canPlayWowMoment = !1),
            (r.isFetchingWowMomentMedia = !1),
            (r.wowMomentWumpusMediaUrl = null);
        }
        getState() {
          return r;
        }
        get canPlayWowMoment() {
          return r.canPlayWowMoment;
        }
        get isFetchingWowMomentMedia() {
          return r.isFetchingWowMomentMedia;
        }
        get wowMomentWumpusMedia() {
          return r.wowMomentWumpusMediaUrl;
        }
      }
      c(s, "displayName", "PurchasedItemsFestivityStore"),
        c(s, "persistKey", "PurchasedItemsFestivityStore"),
        c(s, "migrations", [(e) => ({ ...e })]),
        (t.Z = new s(o.Z, {
          LOGOUT: function () {
            r = {
              canPlayWowMoment: !1,
              isFetchingWowMomentMedia: !1,
              wowMomentWumpusMediaUrl: null,
            };
          },
          PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function (e) {
            let { value: t } = e;
            r.canPlayWowMoment = t;
          },
          PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function (e) {
            let { value: t } = e;
            r.isFetchingWowMomentMedia = t;
          },
          PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function (
            e,
          ) {
            let { wumpusMedia: t } = e;
            (r.wowMomentWumpusMediaUrl = t), (r.isFetchingWowMomentMedia = !1);
          },
        }));
    },
    177741: function (e, t, i) {
      let n;
      i.r(t),
        i.d(t, {
          WowMomentTypes: function () {
            return a;
          },
          prefetch: function () {
            return v;
          },
        }),
        i(315314),
        i(610138),
        i(216116),
        i(78328),
        i(815648),
        i(47120);
      var a,
        o,
        c = i(735250),
        r = i(470079),
        s = i(120356),
        u = i.n(s),
        d = i(338545),
        p = i(442837),
        M = i(481060),
        m = i(570140),
        w = i(607070),
        l = i(70097),
        _ = i(626135),
        h = i(526167),
        E = i(585483),
        W = i(138464),
        T = i(438820),
        I = i(631274),
        S = i(194077),
        g = i(724688),
        f = i(981631),
        P = i(606040),
        y = i(422138),
        b = i(113386),
        x = i(48547);
      async function v(e) {
        try {
          m.Z.dispatch({
            type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA",
            value: !0,
          });
          let t = e ? I : y;
          window.matchMedia("(min-width: 1012px) and (max-width: 1980px)")
            .matches ||
          window.matchMedia("(min-height: 720px) and (max-height: 1408px)")
            .matches
            ? (t = e ? S : b)
            : (window.matchMedia("(min-width: 1980px)").matches ||
                window.matchMedia("(min-height: 1408px)").matches) &&
              (t = e ? g : x);
          let i = await fetch(t).then(async (e) => {
            let t = await e.blob();
            return window.URL.createObjectURL(t);
          });
          m.Z.dispatch({
            type: "PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS",
            wumpusMedia: i,
          });
        } catch (e) {
          m.Z.dispatch({
            type: "PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA",
            value: !1,
          });
        }
      }
      ((o = a || (a = {})).WUMPUS_FLIGHT = "wumpus_flight"),
        (o.GRADIENT_HIGHLIGHT = "gradient_highlight");
      t.default = function () {
        let e = (0, p.e7)([w.Z], () => w.Z.useReducedMotion),
          {
            wumpusMedia: t,
            isFetchingMedia: i,
            canPlayWowMoment: a,
          } = (0, p.cj)([T.Z], () => ({
            wumpusMedia: T.Z.wowMomentWumpusMedia,
            isFetchingMedia: T.Z.isFetchingWowMomentMedia,
            canPlayWowMoment: T.Z.canPlayWowMoment,
          })),
          [o, s] = r.useState(!1),
          m = (0, h.vu)(),
          I = (0, h.rO)(),
          S = m > 52 || -1 === m || I,
          g = I ? "video/mp4" : "video/webm";
        S && !e && a && null === t && !1 === i && v(I),
          r.useEffect(() => {
            function t() {
              !e &&
                T.Z.canPlayWowMoment &&
                (s(!0),
                (n = setTimeout(() => {
                  s(!1),
                    b(!0),
                    _.default.track(f.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
                      wow_moment_type: "gradient_highlight",
                    });
                }, 2e3)));
            }
            return (
              E.S.subscribe(f.CkL.PREMIUM_SUBSCRIPTION_CREATED, t),
              () => {
                E.S.unsubscribe(f.CkL.PREMIUM_SUBSCRIPTION_CREATED, t);
              }
            );
          }, [e, S]);
        let [y, b] = r.useState(!1),
          [x, U] = r.useState(!1),
          C = (0, M.useSpring)({
            opacity: y ? 0.2 : 0,
            config: { duration: 100 },
          }),
          F = (0, M.useSpring)(
            { x: x ? "100%" : "-100%", config: { duration: 500 } },
            x ? "respect-motion-settings" : "animate-never",
          );
        r.useEffect(() => {
          let e = -1;
          return (
            y &&
              (e = window.setTimeout(() => {
                U(!0);
              }, 1e3)),
            () => {
              window.clearTimeout(e);
            }
          );
        }, [y]),
          r.useEffect(() => {
            let e = -1;
            return (
              x &&
                (e = window.setTimeout(() => {
                  U(!1), b(!1);
                }, 1e3)),
              () => {
                window.clearTimeout(e);
              }
            );
          }, [x]);
        let H = o && null !== t,
          O = H || y;
        return (0, c.jsxs)("div", {
          className: u()({ [P.wrapper]: !O, [P.activeWrapper]: O }),
          children: [
            H &&
              (0, c.jsx)(l.Z, {
                autoPlay: !0,
                className: P.videoWrapper,
                onPlay: () => {
                  clearTimeout(n),
                    _.default.track(f.rMx.PREMIUM_WOW_MOMENT_VIEWED, {
                      wow_moment_type: "wumpus_flight",
                    });
                },
                onTimeUpdate: (e) => {
                  e.currentTarget.currentTime > 4 && (0, W.H)(!0);
                },
                onEnded: () => {
                  s(!1);
                },
                children: (0, c.jsx)("source", { src: t, type: g }),
              }),
            (0, c.jsx)(d.animated.div, {
              className: P.gadientHighlight,
              style: C,
            }),
            (0, c.jsx)(d.animated.div, {
              className: P.swipeWrapper,
              style: F,
              children: (0, c.jsxs)("svg", {
                className: P.swipe,
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
      };
    },
    606040: function (e, t, i) {
      e.exports = {
        wrapper: "wrapper_cd22e7",
        activeWrapper: "activeWrapper_cd22e7",
        videoWrapper: "videoWrapper_cd22e7",
        gadientHighlight: "gadientHighlight_cd22e7",
        swipeWrapper: "swipeWrapper_cd22e7",
        swipe: "swipe_cd22e7",
      };
    },
  },
]);
//# sourceMappingURL=8f26004cc4515cb012ef.js.map
