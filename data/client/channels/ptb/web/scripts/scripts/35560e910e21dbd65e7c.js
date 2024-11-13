"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7178"],
  {
    2984: function (e) {
      e.exports = "/assets/0e5029fd9cd4812b6712.svg";
    },
    575703: function (e) {
      e.exports = "/assets/b9995525a52dc58aecf5.svg";
    },
    297511: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
        });
      var a = n(200651),
        r = n(192379),
        i = n(593473),
        s = n(442837),
        c = n(893776),
        o = n(830064),
        d = n(388905),
        l = n(625128),
        u = n(362762),
        m = n(353926),
        p = n(571457),
        g = n(703656),
        E = n(314897),
        _ = n(626135),
        f = n(963202),
        b = n(569234),
        h = n(981631),
        x = n(186901),
        A = n(388032),
        L = n(940956);
      function D(e) {
        let { match: t, location: n } = e,
          D = (0, s.e7)([u.Z], () => u.Z.getState("discovery")),
          N = (0, s.e7)([E.default], () => E.default.isAuthenticated()),
          I = (0, f.iN)("game_discovery_entry_point"),
          C = t.params.gameId,
          S = (0, f.io)("landing page"),
          O = (0, s.e7)([m.Z], () => m.Z.hasLoadedExperiments);
        if (
          (r.useEffect(() => {
            let { utm_source: e } = i.parse(n.search);
            (0, _.setUTMContext)({ utmSource: e }),
              (n.search = ""),
              (0, g.dL)(n);
          }, []),
          r.useEffect(() => {
            O && S && (0, p.HV)({ gameId: C });
          }, [C, O, S]),
          r.useEffect(() => {
            !O && c.Z.getExperiments();
          }, [O]),
          r.useEffect(() => {
            if (O) {
              if (!S) {
                (0, g.dL)({ pathname: h.Z5c.GLOBAL_DISCOVERY });
                return;
              }
              if (null == D)
                (0, p.zY)({ gameId: C }),
                  l.Z.openNativeAppModal("discovery", h.Etm.DEEP_LINK, {
                    type: x.jE.DISCOVERY_GAME_RESULTS,
                    params: { gameId: C },
                  });
              else if (D === h.kEZ.OPEN_FAIL) {
                if (!N) return;
                if (!I) {
                  (0, g.dL)({ pathname: h.Z5c.GLOBAL_DISCOVERY_SERVERS });
                  return;
                }
                (0, g.dL)({
                  pathname: h.Z5c.GLOBAL_DISCOVERY_SERVERS,
                  search: "?game=".concat(C),
                });
              }
            }
          }, [C, O, N, I, D, S]),
          D === h.kEZ.OPEN_FAIL && !N)
        )
          return (0, a.jsx)(b.Z, { gameId: C });
        let y = null == D || D === h.kEZ.OPENING;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(o.Z, {
              className: L.backgroundArt,
              preserveAspectRatio: "xMinYMin slice",
            }),
            (0, a.jsx)("div", {
              className: L.container,
              children: (0, a.jsx)(d.ZP, {
                children: y
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(d.Dx, {
                          children: A.intl.string(A.t["Z+hCVV"]),
                        }),
                        (0, a.jsx)(d.Hh, {}),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(d.Dx, {
                          children: A.intl.string(A.t.csrAMD),
                        }),
                        (0, a.jsx)(d.DK, {
                          children: A.intl.string(A.t.ghBJz8),
                        }),
                      ],
                    }),
              }),
            }),
          ],
        });
      }
      s.ZP.initialize();
    },
    569234: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var a = n(200651),
        r = n(192379),
        i = n(873546),
        s = n(481060),
        c = n(231467),
        o = n(17845),
        d = n(703656),
        l = n(981631),
        u = n(559469),
        m = n(388032),
        p = n(970047);
      let g = n(575703),
        E = n(2984),
        _ = i.tq || i.Em;
      function f(e) {
        let { gameId: t } = e,
          n = (0, u.n)(),
          i = r.useMemo(() => n.slice(0, 4), [n]);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("img", {
              className: p.backgroundImage,
              src: g,
              alt: "",
            }),
            (0, a.jsxs)(s.Scroller, {
              className: p.pageContainer,
              children: [
                (0, a.jsxs)("div", {
                  className: p.headerBar,
                  children: [
                    (0, a.jsx)("img", {
                      className: p.logoWithText,
                      src: E,
                      alt: "",
                    }),
                    (0, a.jsx)(s.Button, {
                      className: p.headerButton,
                      look: s.ButtonLooks.FILLED,
                      size: s.ButtonSizes.MEDIUM,
                      color: s.ButtonColors.WHITE,
                      onClick: () =>
                        (0, d.dL)({
                          pathname: l.Z5c.GLOBAL_DISCOVERY_SERVERS,
                          search: "?game=".concat(t),
                        }),
                      children: (0, a.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "none",
                        children: m.intl.string(m.t.HAkXzs),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(o.Z, {
                  className: p.banner,
                  title: m.intl.string(m.t.a2lbLi),
                  description: m.intl.string(m.t["/B+X5e"]),
                  button: _
                    ? (0, a.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: m.intl.string(m.t.PrDDkp),
                      })
                    : (0, a.jsx)(s.Button, {
                        className: p.cta,
                        look: s.ButtonLooks.FILLED,
                        size: s.ButtonSizes.LARGE,
                        color: s.ButtonColors.WHITE,
                        onClick: () =>
                          (0, d.dL)({
                            pathname: l.Z5c.GLOBAL_DISCOVERY_SERVERS,
                            search: "?game=".concat(t),
                          }),
                        children: (0, a.jsx)(s.Text, {
                          variant: "text-md/medium",
                          color: "none",
                          children: m.intl.string(m.t.gbOKxs),
                        }),
                      }),
                }),
                (0, a.jsx)("div", {
                  className: p.content,
                  children: (0, a.jsxs)("div", {
                    className: p.sampleGuildsSection,
                    children: [
                      (0, a.jsx)(s.Text, {
                        className: p.sectionTitle,
                        variant: "text-md/medium",
                        color: "header-primary",
                        children: m.intl.string(m.t.x0rBe3),
                      }),
                      (0, a.jsx)("div", {
                        className: p.cardsWrapper,
                        children: i.map((e) =>
                          (0, a.jsx)(
                            c.xV,
                            { className: p.card, clan: e },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    362762: function (e, t, n) {
      var a,
        r,
        i,
        s,
        c = n(442837),
        o = n(570140),
        d = n(981631);
      let l = {};
      class u extends (s = c.ZP.Store) {
        getState(e) {
          return l[e];
        }
      }
      (i = "CodedLinkNativeAppStateStore"),
        (r = "displayName") in (a = u)
          ? Object.defineProperty(a, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[r] = i),
        (t.Z = new u(o.Z, {
          NATIVE_APP_MODAL_OPENING: function (e) {
            let { code: t } = e;
            l[t] = d.kEZ.OPENING;
          },
          NATIVE_APP_MODAL_OPENED: function (e) {
            let { code: t } = e;
            l[t] = d.kEZ.OPEN;
          },
          NATIVE_APP_MODAL_OPEN_FAILED: function (e) {
            let { code: t } = e;
            l[t] = d.kEZ.OPEN_FAIL;
          },
        }));
    },
    559469: function (e, t, n) {
      n.d(t, {
        n: function () {
          return c;
        },
      });
      var a = n(192379),
        r = n(116175),
        i = n(308083);
      function s(e) {
        let { id: t, preset: n, banner: a, bannerHash: s, ...c } = e,
          o = (0, r.lP)();
        return {
          id: t,
          name: "",
          icon: null,
          description: "",
          memberCount: 0,
          playstyle: i.zv.CASUAL,
          tag: "",
          traits: [],
          games: [],
          banner: a,
          bannerHash: s,
          badge: {
            badgeKind: o,
            primaryColor: i.LD[n].primary,
            secondaryColor: i.LD[n].secondary,
          },
          branding: {
            primaryColor: i.LD[n].primary,
            secondaryColor: i.LD[n].secondary,
          },
          wildcardDescriptors: i.LK,
          gameActivity: {},
          ...c,
        };
      }
      function c() {
        return a.useMemo(
          () => [
            s({
              id: "1239910082150400001",
              icon: "bea185f5c9dbde7ba2f0c50363c16ec6",
              games: [i.DA.AGE_OF_EMPIRES_2, i.DA.APEX],
              preset: i.N.VOLCANO,
              banner: i.qC.WORLD_MAP,
              bannerHash: "99a72cbacfb6de2baf362daa1a5292bb",
              playstyle: i.zv.COMPETITIVE,
              name: "Retro Rebels",
              description:
                "Are you a console collector? Rare game curator? Be a rebel and join us in celebrating retro gaming classics \uD83D\uDE0E",
              tag: "RR",
              wildcardDescriptors: ["collector", "nostalgia", "classic"],
              traits: ["30+", "Inclusive", "cooking", "podcasts", "hiking"],
              memberCount: 98,
            }),
            s({
              id: "1239910082150400002",
              icon: "fe5e3c39b398965133d24d3c5d72b06c",
              games: [i.DA.HONKAI_STAR_RAIL],
              preset: i.N.THUNDER,
              banner: i.qC.CASTLE,
              bannerHash: "3c8e6496a598b9a563dffbc87d65f6f8",
              playstyle: i.zv.SOCIAL,
              name: "the lofi tavern",
              description:
                "~ hosting chill beats and study rooms every night ~ join the tavern to kick back and meet other cozy gamers ~",
              tag: "MUSE",
              wildcardDescriptors: ["creative", "harmony", "nightowl"],
              traits: [
                "Streamers",
                "study buddies",
                "sleepy cats",
                "lo-fi chilling",
              ],
              memberCount: 112,
            }),
            s({
              id: "1239910082150400003",
              icon: "fc7bdf17dadd9a59014fc2a41dd88613",
              games: [i.DA.LETHAL_COMPANY, i.DA.HELLDIVERS_2],
              preset: i.N.MARSH,
              banner: i.qC.WARP_TUNNEL,
              bannerHash: "d699192ec79c5da7159d2b73eb4b56b7",
              playstyle: i.zv.VERY_HARDCORE,
              name: "midnight tacos",
              description: "gamers and doritos tacos enthusiasts pls apply",
              tag: "CHZZ",
              wildcardDescriptors: ["spicy", "chaotic", "gamba"],
              traits: [
                "20+",
                "Streamers",
                "ranking bottled water",
                "late night tacos",
                "voice chat",
                "anime",
              ],
              memberCount: 45,
            }),
            s({
              id: "1239910082150400004",
              icon: "7b7a2a06e7852e7cdb7f301fb86c3e18",
              games: [i.DA.SIMS_4],
              preset: i.N.EARTH,
              banner: i.qC.SEA_FOAM,
              bannerHash: "c01388993ca324a6de870f805cc30bd3",
              name: "Eco ELO",
              description:
                "If you like growing plants or gardening, in game and IRL, then this is the place for you! Welcome home \uD83C\uDF31 \uD83D\uDC9A",
              tag: "eco",
              wildcardDescriptors: ["ecofriendly", "explorers", "advocates"],
              traits: [
                "20+",
                "Inclusive",
                "PUGs",
                "board games",
                "going outside",
                "PvP",
                "the stalk market",
                "growing stuff",
              ],
              memberCount: 32,
            }),
            s({
              id: "1239910082150400005",
              icon: "5ca93390d20f7b96a0f0c3702fceec8e",
              games: [i.DA.SIMS_4],
              preset: i.N.CASCADE,
              banner: i.qC.NIGHT_SKY,
              bannerHash: "37cd6a7f90faafeb8c54e5ea5163407b",
              name: "Meowtopia",
              description:
                "the purrfect place for a pawsitive and hissterical time :D are you kitten me...i feline like that’s too many puns...",
              tag: "meow",
              wildcardDescriptors: ["Meow", "Meow", "Moew"],
              traits: [
                "All Ages",
                "Streamers",
                "Parent Friendly",
                "sleepy cats",
                "DnD",
                "travel",
                "catnaps",
              ],
              memberCount: 94,
            }),
          ],
          [],
        );
      }
    },
    571457: function (e, t, n) {
      n.d(t, {
        HV: function () {
          return o;
        },
        RI: function () {
          return i;
        },
        k5: function () {
          return c;
        },
        kR: function () {
          return s;
        },
        zY: function () {
          return d;
        },
      });
      var a = n(626135),
        r = n(981631);
      function i(e) {
        let { selectedTab: t } = e;
        a.default.track(r.rMx.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
      }
      function s(e) {
        let { selectedCategoryId: t } = e;
        a.default.track(r.rMx.GLOBAL_DISCOVERY_SERVERS_VIEWED, {
          selected_category_id: t,
        });
      }
      function c(e) {
        let { source: t } = e;
        a.default.track(r.rMx.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, {
          source: t,
        });
      }
      function o(e) {
        let { gameId: t, source: n } = e;
        a.default.track(r.rMx.GUILD_GAME_DISCOVERY_ENTRYPOINT_VIEWED, {
          game_id: t,
          source: n,
        });
      }
      function d(e) {
        let { gameId: t } = e;
        a.default.track(
          r.rMx.GUILD_GAME_DISCOVERY_ENTRYPOINT_DEEP_LINK_TO_DESKTOP,
          { game_id: t },
        );
      }
    },
    17845: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var a = n(200651),
        r = n(192379),
        i = n(120356),
        s = n.n(i),
        c = n(780384),
        o = n(481060),
        d = n(410030),
        l = n(61118);
      function u(e) {
        let { title: t } = e;
        return (0, a.jsx)(o.Heading, {
          className: s()(l.title, l.uppercase),
          variant: "display-lg",
          color: "header-primary",
          children: t,
        });
      }
      function m(e) {
        let {
            title: t,
            description: n,
            button: i,
            className: m,
            children: p,
          } = e,
          g = (0, d.ZP)(),
          E = (0, c.wj)(g),
          _ = r.useMemo(
            () =>
              Array.isArray(t)
                ? t.map((e, t) => (0, a.jsx)(u, { title: e }, t))
                : (0, a.jsx)(u, { title: t }),
            [t],
          );
        return (0, a.jsxs)("div", {
          className: s()(l.container, m),
          children: [
            (0, a.jsx)("div", {
              className: l.content,
              children: (0, a.jsxs)("div", {
                className: l.textContainer,
                children: [
                  _,
                  null != n &&
                    (0, a.jsx)(o.Text, {
                      className: l.description,
                      variant: "text-md/medium",
                      color: E ? "text-muted" : "header-primary",
                      children: n,
                    }),
                  null != i &&
                    (0, a.jsx)("div", {
                      className: l.buttonContainer,
                      children: i,
                    }),
                ],
              }),
            }),
            p,
          ],
        });
      }
    },
    940956: function (e, t, n) {
      e.exports = {
        container: "container_c25abe",
        backgroundArt: "backgroundArt_c25abe",
      };
    },
    970047: function (e, t, n) {
      e.exports = {
        pageContainer: "pageContainer_d1eeed",
        backgroundImage: "backgroundImage_d1eeed",
        headerBar: "headerBar_d1eeed",
        logoWithText: "logoWithText_d1eeed",
        headerButton: "headerButton_d1eeed",
        banner: "banner_d1eeed",
        cta: "cta_d1eeed",
        content: "content_d1eeed",
        sampleGuildsSection: "sampleGuildsSection_d1eeed",
        sectionTitle: "sectionTitle_d1eeed",
        cardsWrapper: "cardsWrapper_d1eeed",
        card: "card_d1eeed",
      };
    },
    61118: function (e, t, n) {
      e.exports = {
        container: "container_b97772",
        content: "content_b97772",
        textContainer: "textContainer_b97772",
        buttonContainer: "buttonContainer_b97772",
        title: "title_b97772",
        uppercase: "uppercase_b97772",
        description: "description_b97772",
        gradient: "gradient_b97772",
        clientThemes: "clientThemes_b97772",
        gradientOverlay: "gradientOverlay_b97772",
        gradientBackground: "gradientBackground_b97772",
      };
    },
  },
]);
//# sourceMappingURL=35560e910e21dbd65e7c.js.map
