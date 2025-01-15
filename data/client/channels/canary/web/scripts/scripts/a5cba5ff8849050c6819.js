"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4964"],
  {
    362762: function (e, t, a) {
      var n,
        s,
        i,
        c,
        l = a(442837),
        r = a(570140),
        d = a(981631);
      let o = {};
      class g extends (c = l.ZP.Store) {
        getState(e) {
          return o[e];
        }
      }
      (i = "CodedLinkNativeAppStateStore"),
        (s = "displayName") in (n = g)
          ? Object.defineProperty(n, s, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[s] = i),
        (t.Z = new g(r.Z, {
          NATIVE_APP_MODAL_OPENING: function (e) {
            let { code: t } = e;
            o[t] = d.kEZ.OPENING;
          },
          NATIVE_APP_MODAL_OPENED: function (e) {
            let { code: t } = e;
            o[t] = d.kEZ.OPEN;
          },
          NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
            let { code: t } = e;
            o[t] = d.kEZ.OPEN_FAIL;
          },
        }));
    },
    630107: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return I;
          },
        }),
        a(47120);
      var n = a(200651),
        s = a(192379),
        i = a(873546),
        c = a(442837),
        l = a(481060),
        r = a(830064),
        d = a(388905),
        o = a(625128),
        g = a(362762),
        u = a(703656),
        m = a(617136),
        p = a(272008),
        E = a(341907),
        h = a(46140),
        x = a(981631),
        N = a(186901),
        _ = a(388032),
        f = a(932447),
        T = a(74830),
        j = a(13299);
      c.ZP.initialize();
      let A = i.tq || i.Em;
      function I(e) {
        let { match: t } = e,
          a = (0, c.e7)([g.Z], () => g.Z.getState("quests")),
          i = t.params.questId,
          I = (function (e) {
            let [t, a] = s.useState(null);
            return (
              s.useEffect(() => {
                (0, p.gU)(e)
                  .then((e) => a({ status: "ok", value: e }))
                  .catch(() => a({ status: "error" }));
              }, [a, e]),
              t
            );
          })(i);
        s.useEffect(() => {
          if (!A)
            null == a
              ? ((0, m.dA)({
                  questId: i,
                  event: x.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
                }),
                o.Z.openNativeAppModal("quests", x.Etm.DEEP_LINK, {
                  type: N.jE.QUEST_HOME,
                  params: { questId: i },
                }))
              : a === x.kEZ.OPEN_FAIL &&
                (0, u.dL)({ pathname: x.Z5c.QUEST_HOME, hash: i });
        }, [a, i]);
        let k = s.useCallback(() => (0, E.openAppWithQuest)(i), [i]);
        if (A)
          return (0, n.jsxs)("div", {
            className: f.page,
            children: [
              (0, n.jsx)("img", { className: f.bgImg, src: j.Z, alt: "" }),
              (0, n.jsx)("div", {
                className: f.logoContainer,
                children: (0, n.jsx)("img", { src: T, alt: "" }),
              }),
              null != I &&
                (0, n.jsxs)("div", {
                  className: f.card,
                  children: [
                    "ok" === I.status &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", {
                            className: f.gameTile,
                            children: (0, n.jsx)("img", {
                              src: ""
                                .concat(h.tD)
                                .concat(i, "/dark/")
                                .concat(I.value.assets.gameTile),
                              alt: "",
                              className: f.gameTileImg,
                            }),
                          }),
                          (0, n.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            color: "text-normal",
                            className: f.headingText,
                            children: I.value.messages.questName,
                          }),
                        ],
                      }),
                    (0, n.jsx)(l.Text, {
                      variant: "text-md/normal",
                      className: f.bodyText,
                      children: _.intl.string(_.t.NweJIy),
                    }),
                    (0, n.jsx)(l.Button, {
                      fullWidth: !0,
                      onClick: k,
                      children: _.intl.string(_.t.UQvCf3),
                    }),
                  ],
                }),
            ],
          });
        let P = null == a || a === x.kEZ.OPENING || a === x.kEZ.OPEN_FAIL;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(r.Z, {
              className: f.backgroundArtwork,
              preserveAspectRatio: "xMinYMin slice",
            }),
            (0, n.jsx)("div", {
              className: f.container,
              children: (0, n.jsx)(d.ZP, {
                children: P
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(d.Dx, {
                          children: _.intl.string(_.t["Z+hCVV"]),
                        }),
                        (0, n.jsx)(d.Hh, {}),
                      ],
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(d.Dx, {
                          className: f.appOpenedTitle,
                          children: _.intl.string(_.t.csrAMD),
                        }),
                        (0, n.jsx)(d.DK, {
                          children: _.intl.string(_.t.ghBJz8),
                        }),
                      ],
                    }),
              }),
            }),
          ],
        });
      }
    },
    932447: function (e, t, a) {
      e.exports = {
        page: "page_d87cd8",
        bgImg: "bgImg_d87cd8",
        logoContainer: "logoContainer_d87cd8",
        card: "card_d87cd8",
        gameTile: "gameTile_d87cd8",
        gameTileImg: "gameTileImg_d87cd8",
        headingText: "headingText_d87cd8",
        bodyText: "bodyText_d87cd8",
        container: "container_d87cd8",
        backgroundArtwork: "backgroundArtwork_d87cd8",
        appOpenedTitle: "appOpenedTitle_d87cd8",
      };
    },
    13299: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/415f84ea9183bc0f4f913e729a59c81c17d2a88afd912e3b85ee99f3d3e29236.png";
    },
  },
]);
//# sourceMappingURL=a5cba5ff8849050c6819.js.map
