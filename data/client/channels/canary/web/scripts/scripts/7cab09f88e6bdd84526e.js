"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49201"],
  {
    882008: function (e) {
      e.exports = "/assets/b92aabcc8b65fa979f9f.svg";
    },
    438825: function (e) {
      e.exports = "/assets/c6e6469d283177ac15ed.svg";
    },
    129512: function (e) {
      e.exports = "/assets/04f1e61a6726a54518ee.svg";
    },
    330065: function (e) {
      e.exports = "/assets/4c698a6babb08607f4af.svg";
    },
    307536: function (e) {
      e.exports = "/assets/b878e0ea0c2b2b8790f4.svg";
    },
    408263: function (e) {
      e.exports = "/assets/1181f6f915ef7e9dca31.svg";
    },
    585025: function (e) {
      e.exports = "/assets/86e14986484791570f99.svg";
    },
    444816: function (e) {
      e.exports = "/assets/939ff6459e88125becb5.svg";
    },
    12008: function (e) {
      e.exports = "/assets/48d858d1ed64b603baf3.svg";
    },
    136050: function (e) {
      e.exports = "/assets/ce563ae04be62c184ca5.svg";
    },
    924936: function (e) {
      e.exports = "/assets/a70a4781a4f5baa2ceaa.svg";
    },
    409814: function (e) {
      e.exports = "/assets/96eb963abce2ae75da19.svg";
    },
    114266: function (e) {
      e.exports = "/assets/dd354f0b30f6f3054cfe.svg";
    },
    995648: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(120356),
        i = t.n(a),
        s = t(481060),
        o = t(422559),
        l = t(594045);
      function c(e) {
        let {
          grantedPermissions: n,
          disabledPermissions: t,
          grantedPermissionsHeader: a,
          disabledPermissionsHeader: c,
          className: d,
        } = e;
        return (0, r.jsxs)("div", {
          className: i()(l.list, d),
          children: [
            null != n && n.length > 0
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    null != a
                      ? (0, r.jsx)(s.Heading, {
                          variant: "heading-sm/semibold",
                          color: "header-primary",
                          className: l.header,
                          children: a,
                        })
                      : null,
                    (0, r.jsx)("div", {
                      className: l.container,
                      children: n.map((e) =>
                        (0, r.jsxs)(
                          "div",
                          {
                            className: l.permission,
                            children: [
                              (0, r.jsx)(s.CheckmarkLargeIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: l.check,
                              }),
                              (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: (0, o.wt)(e),
                              }),
                            ],
                          },
                          e.toString(),
                        ),
                      ),
                    }),
                  ],
                })
              : null,
            null != t && t.length > 0
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    null != c
                      ? (0, r.jsx)(s.Heading, {
                          variant: "heading-sm/semibold",
                          color: "header-primary",
                          className: l.header,
                          children: c,
                        })
                      : null,
                    (0, r.jsx)("div", {
                      className: l.container,
                      children: t.map((e) =>
                        (0, r.jsxs)(
                          "div",
                          {
                            className: l.permission,
                            children: [
                              (0, r.jsx)(s.XSmallIcon, {
                                size: "xs",
                                color: "currentColor",
                                className: l.cross,
                              }),
                              (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: (0, o.wt)(e),
                              }),
                            ],
                          },
                          e.toString(),
                        ),
                      ),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
    },
    389134: function (e, n, t) {
      t(47120);
      var r,
        a,
        i,
        s,
        o = t(392711),
        l = t.n(o),
        c = t(906280),
        d = t.n(c),
        u = t(442837),
        m = t(570140),
        f = t(944163),
        h = t(77498),
        x = t(116175),
        p = t(308083);
      function g(e) {
        return new Set(
          Array.from(e).filter((e) => null != h.Z.getDetectableGame(e)),
        );
      }
      let C = () => ({
          gameApplicationIds: new Set(),
          playstyle: p.zv.NONE,
          interests: new Set(),
          description: "",
          wildcardDescriptors: [p.U6, p.U6, p.U6],
          tag: "",
          verificationForm: { ...f.t },
          badgeKind: x.ZD.SWORD,
          badgePrimaryColor: x.sg["0"].primary,
          badgeSecondaryColor: x.sg["0"].secondary,
          banner: p.qC.NIGHT_SKY,
          brandPrimaryColor: p.ym["0"].primary,
          brandSecondaryColor: p.ym["0"].secondary,
        }),
        b = C(),
        v = d()(b),
        _ = !1,
        y = !1,
        T = {};
      class I extends (r = u.ZP.Store) {
        getState() {
          return {
            initialSettings: b,
            settings: v,
            dirty: _,
            errors: T,
            submitting: y,
          };
        }
      }
      (s = "ClanSettingsStore"),
        (i = "displayName") in (a = I)
          ? Object.defineProperty(a, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[i] = s),
        (n.Z = new I(m.Z, {
          CLAN_SETTINGS_FETCH_START: function () {
            (y = !1), (b = C()), (v = d()(b)), (_ = !1), (T = {});
          },
          CLAN_SETTINGS_FETCH_SUCCESS: function (e) {
            let { settings: n } = e;
            (b = { ...C(), ...n }),
              ((v = d()(b)).gameApplicationIds = g(v.gameApplicationIds)),
              (_ = !1);
          },
          CLAN_SETTINGS_UPDATE: function (e) {
            let { updates: n } = e,
              { gameApplicationIds: t } = n;
            for (let e in (null != t && (n.gameApplicationIds = g(t)),
            (v = { ...v, ...d()(n) }),
            n))
              delete T[e], (T = { ...T });
            _ = !l().isEqual(
              l().omit(v, "verificationForm"),
              l().omit(b, "verificationForm"),
            );
          },
          CLAN_SETTINGS_SUBMIT: function () {
            (y = !0), (T = {});
          },
          CLAN_SETTINGS_SUBMIT_SUCCESS: function () {
            (y = !1), (b = d()(v)), (_ = !1), (T = {});
          },
          CLAN_SETTINGS_SUBMIT_ERROR: function (e) {
            let { error: n } = e;
            (y = !1),
              (T = {
                gameApplicationIds: n.getFirstFieldErrorMessage(
                  "game_application_ids",
                ),
                playstyle: n.getFirstFieldErrorMessage("play_style"),
                description: n.getFirstFieldErrorMessage("description"),
                wildcardDescriptors: n.getFirstFieldErrorMessage(
                  "wildcard_descriptors",
                ),
                interests: n.getFirstFieldErrorMessage("search_terms"),
                tag: n.getFirstFieldErrorMessage("tag"),
                verificationForm: n.getFirstFieldErrorMessage([
                  "verification_form",
                  "form_fields",
                ]),
              });
          },
          MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
            let { form: n, isLocalUpdate: t } = e;
            if (null == v.verificationForm) return !1;
            if (
              ((v = {
                ...v,
                verificationForm: { ...v.verificationForm, ...n },
              }),
              t)
            ) {
              var r;
              _ = !l().isEqual(
                v.verificationForm.formFields,
                null === (r = b.verificationForm) || void 0 === r
                  ? void 0
                  : r.formFields,
              );
            } else _ = !1;
          },
        }));
    },
    520623: function (e, n, t) {
      t.d(n, {
        M: function () {
          return s;
        },
      }),
        t(724458);
      var r = t(544891),
        a = t(981631);
      let i = (e) =>
        e.reduce(
          (e, n) => (
            (e[n.game_application_id] = {
              level: n.activity_level,
              score: n.activity_score,
            }),
            e
          ),
          {},
        );
      async function s(e) {
        return i(
          (await r.tn.get({ url: a.ANM.GUILD_TOP_GAMES(e) })).body.top_games,
        );
      }
    },
    368343: function (e, n, t) {
      t.d(n, {
        B: function () {
          return o;
        },
      }),
        t(47120);
      var r = t(903797),
        a = t(731965),
        i = t(520623);
      let s = new Map(),
        o = (0, r.Z)((e, n) => ({
          topGames: new Map(),
          tryFetchTopGames: async (t) => {
            let r = n().topGames,
              o = s.get(t);
            if (null != o && Date.now() - o < 36e5) {
              var l;
              return null !== (l = r.get(t)) && void 0 !== l ? l : {};
            }
            let c = await (0, i.M)(t),
              d = new Map(r);
            return (
              d.set(t, c),
              (0, a.j)(() => {
                e({ topGames: d });
              }),
              s.set(t, Date.now()),
              c
            );
          },
        }));
    },
    364083: function (e, n, t) {
      t.d(n, {
        P: function () {
          return d;
        },
      });
      var r = t(192379),
        a = t(392711),
        i = t.n(a),
        s = t(442837),
        o = t(77498),
        l = t(308083);
      function c(e) {
        var n;
        return null !== (n = l.gQ.get(e)) && void 0 !== n ? n : 0;
      }
      function d() {
        let e = (0, s.e7)([o.Z], () => o.Z.games),
          n = r.useMemo(
            () =>
              i()(e)
                .map((e) => ({ value: e.id, label: e.name }))
                .sortBy((e) => {
                  let { value: n } = e;
                  return c(n);
                })
                .reverse()
                .value(),
            [e],
          ),
          t = r.useCallback((e, n) => c(n.item.value) - c(e.item.value), []);
        return {
          options: n,
          matchSorterOptions: r.useMemo(
            () => ({ baseSort: t, keys: ["label"] }),
            [t],
          ),
        };
      }
    },
    92373: function (e, n, t) {
      var r = t(200651),
        a = t(192379),
        i = t(120356),
        s = t.n(i),
        o = t(481060),
        l = t(442837),
        c = t(210753),
        d = t(77498),
        u = t(388032),
        m = t(123060);
      n.Z = function (e) {
        let {
            applicationId: n,
            imageContainerClassName: t,
            onClick: i,
            selected: f,
            locked: h = !1,
            otherGamesCount: x = 0,
          } = e,
          p = (0, o.useToken)(o.tokens.colors.WHITE),
          { isFetching: g, coverImageUrl: C } = (0, c.$)(n, {
            coverImageHeight: 336,
            coverImageWidth: 252,
          }),
          b = (0, l.e7)([d.Z], () => {
            var e, t;
            return null !==
              (t =
                null === (e = d.Z.getDetectableGame(n)) || void 0 === e
                  ? void 0
                  : e.name) && void 0 !== t
              ? t
              : "";
          }),
          v = a.useCallback(() => {
            null == i || i(n);
          }, [n, i]),
          _ = a.useMemo(
            () =>
              g
                ? null
                : null == C
                  ? (0, r.jsx)("div", {
                      className: m.gameUnknownImage,
                      children: (0, r.jsx)(o.UnknownGameIcon, { size: "lg" }),
                    })
                  : (0, r.jsx)("img", {
                      className: m.gameImage,
                      alt: b,
                      src: C,
                    }),
            [C, g, b],
          );
        return (0, r.jsxs)("div", {
          className: m.selectedGame,
          children: [
            (0, r.jsxs)(o.Clickable, {
              onClick: v,
              className: s()(
                t,
                g ? m.gameImageLoading : void 0,
                m.gameImageBackground,
              ),
              children: [
                f &&
                  (0, r.jsx)("div", {
                    className: m.checkBackground,
                    children: (0, r.jsx)(o.CircleCheckIcon, {
                      size: "md",
                      color: "currentColor",
                      secondaryColor: p.hex(),
                      className: s()(m.selectedGameCheck, {
                        [m.selectedGameCheckLocked]: h,
                      }),
                    }),
                  }),
                _,
                x > 0 &&
                  (0, r.jsx)("div", {
                    className: m.remainingGame,
                    children: (0, r.jsx)(o.Text, {
                      variant: "text-xs/normal",
                      color: "always-white",
                      children: u.intl.format(u.t.F6iMs7, { count: x }),
                    }),
                  }),
              ],
            }),
            (0, r.jsxs)(o.Text, {
              className: m.gameName,
              variant: "text-xs/normal",
              color: "header-primary",
              children: [b, h && (0, r.jsx)(o.LockIcon, { size: "xxs" })],
            }),
          ],
        });
      };
    },
    175557: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(108930),
        i = t(86406),
        s = t(146068),
        o = t(308545),
        l = t(397697),
        c = t(129871),
        d = t(206851),
        u = t(246933),
        m = t(995414),
        f = t(308083);
      function h(e) {
        let { banner: n, ...t } = e;
        switch (n) {
          case f.qC.NIGHT_SKY:
            return (0, r.jsx)(l.Z, { ...t });
          case f.qC.CASTLE:
            return (0, r.jsx)(a.Z, { ...t });
          case f.qC.WORLD_MAP:
            return (0, r.jsx)(m.Z, { ...t });
          case f.qC.SEA_FOAM:
            return (0, r.jsx)(c.Z, { ...t });
          case f.qC.WARP_TUNNEL:
            return (0, r.jsx)(u.Z, { ...t });
          case f.qC.HOUSE:
            return (0, r.jsx)(s.Z, { ...t });
          case f.qC.HEIGHTMAP:
            return (0, r.jsx)(i.Z, { ...t });
          case f.qC.MESH:
            return (0, r.jsx)(o.Z, { ...t });
          case f.qC.SPATTER:
            return (0, r.jsx)(d.Z, { ...t });
        }
        return null;
      }
    },
    108930: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(249849),
        i = t(907561),
        s = t(388032),
        o = t(307536);
      let l = ["#50599c", "#cc99ff", "#fefefe"],
        c = ["#39306f", "#aeaad2"],
        d = [0.05, 0.4, 1],
        u = [
          { base: 8, tint: 1 },
          { base: 6, tint: 1 },
          { base: 10, tint: 1 },
        ],
        m = [0.05, 0.4],
        f = [
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
        ];
      function h(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: h,
            secondaryTintColor: x,
            ...p
          } = e,
          { primaryColorsTransformed: g, secondaryColorsTransformed: C } = (0,
          a.s)({
            primaryBaseColors: l,
            primaryTintColor: h,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: x,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: f,
          }),
          { styleContent: b, containerId: v } = (0, i.bC)(g, C);
        return (0, r.jsxs)("svg", {
          ...p,
          "aria-label": s.intl.string(s.t.nH6S2d),
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, r.jsx)("defs", {
              children: (0, r.jsx)("style", { children: b }),
            }),
            (0, r.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: v }),
          ],
        });
      }
    },
    86406: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(249849),
        i = t(907561),
        s = t(388032),
        o = t(408263);
      let l = ["#00ff00"],
        c = ["#000000", "#ed1c24"],
        d = [0.7],
        u = [{ base: 1, tint: 2 }],
        m = [0, 0.2],
        f = [
          { base: 1, tint: 0 },
          { base: 1, tint: 4 },
        ];
      function h(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: h,
            secondaryTintColor: x,
            ...p
          } = e,
          { primaryColorsTransformed: g, secondaryColorsTransformed: C } = (0,
          a.s)({
            primaryBaseColors: l,
            primaryTintColor: h,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: x,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: f,
          }),
          { styleContent: b, containerId: v } = (0, i.bC)(g, C);
        return (0, r.jsxs)("svg", {
          ...p,
          "aria-label": s.intl.string(s.t.nH6S2d),
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, r.jsxs)("defs", {
              children: [
                (0, r.jsx)("defs", {
                  children: (0, r.jsxs)("linearGradient", {
                    id: "line-gradient",
                    x1: "0",
                    x2: "1",
                    y1: "0",
                    y2: "1",
                    children: [
                      (0, r.jsx)("stop", { stopColor: C[1], offset: "0%" }),
                      (0, r.jsx)("stop", { stopColor: g[0], offset: "50%" }),
                      (0, r.jsx)("stop", { stopColor: g[0], offset: "80%" }),
                      (0, r.jsx)("stop", { stopColor: C[1], offset: "100%" }),
                    ],
                  }),
                }),
                (0, r.jsx)("style", { children: b }),
              ],
            }),
            (0, r.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: v }),
            (0, r.jsx)("use", {
              href: "".concat(o, "#heightmap-lines-0"),
              style: { fill: "url(#line-gradient)" },
            }),
            (0, r.jsx)("use", {
              href: "".concat(o, "#heightmap-lines-1"),
              style: { fill: "url(#line-gradient)" },
            }),
            (0, r.jsx)("use", {
              href: "".concat(o, "#heightmap-lines-2"),
              style: { fill: "url(#line-gradient)" },
            }),
          ],
        });
      }
    },
    146068: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(249849),
        i = t(907561),
        s = t(388032),
        o = t(585025);
      let l = ["#0fa3dd", "#a7e4e4", "#a2ccdd"],
        c = [
          "#0b3215",
          "#a6b51a",
          "#35748a",
          "#65a88f",
          "#621c12",
          "#f96748",
          "#ffbbbb",
        ],
        d = [0.25, 0.9, 0.9],
        u = [
          { base: 8, tint: 1 },
          { base: 14, tint: 1 },
          { base: 5, tint: 1 },
        ],
        m = [0.05, 0.4, 0.15, 0.33, 0.1, 0.3, 0.6],
        f = [
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
        ];
      function h(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: h,
            secondaryTintColor: x,
            ...p
          } = e,
          { primaryColorsTransformed: g, secondaryColorsTransformed: C } = (0,
          a.s)({
            primaryBaseColors: l,
            primaryTintColor: h,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: x,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: f,
          }),
          { styleContent: b, containerId: v } = (0, i.bC)(g, C);
        return (0, r.jsxs)("svg", {
          ...p,
          "aria-label": s.intl.string(s.t.nH6S2d),
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, r.jsxs)("defs", {
              children: [
                (0, r.jsx)("defs", {
                  children: (0, r.jsxs)("linearGradient", {
                    id: "sky-gradient",
                    x1: "0",
                    x2: "1",
                    y1: "0",
                    y2: "1",
                    children: [
                      (0, r.jsx)("stop", { stopColor: g[2], offset: "0%" }),
                      (0, r.jsx)("stop", { stopColor: g[0], offset: "100%" }),
                    ],
                  }),
                }),
                (0, r.jsx)("style", { children: b }),
              ],
            }),
            (0, r.jsx)("use", {
              href: "".concat(o, "#sky"),
              style: { fill: "url(#sky-gradient)" },
            }),
            (0, r.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: v }),
          ],
        });
      }
    },
    308545: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(249849),
        i = t(907561),
        s = t(388032),
        o = t(444816);
      let l = [
          "#2d456e",
          "#395788",
          "#486ead",
          "#4f7ac2",
          "#5989d9",
          "#729bdd",
          "#96b3e3",
          "#b5c9e9",
          "#e0e0e2",
        ],
        c = ["#f7931e"],
        d = [0.05, 0.09, 0.15, 0.2, 0.25, 0.33, 0.44, 0.57, 0.95],
        u = [
          { base: 4, tint: 1 },
          { base: 4, tint: 1 },
          { base: 4, tint: 1 },
          { base: 4, tint: 1 },
          { base: 4, tint: 1 },
          { base: 4, tint: 1 },
          { base: 4, tint: 1 },
          { base: 4, tint: 1 },
          { base: 7, tint: 1 },
        ],
        m = [0.4],
        f = [{ base: 1, tint: 5 }];
      function h(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: h,
            secondaryTintColor: x,
            ...p
          } = e,
          { primaryColorsTransformed: g, secondaryColorsTransformed: C } = (0,
          a.s)({
            primaryBaseColors: l,
            primaryTintColor: h,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: x,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: f,
          }),
          { styleContent: b, containerId: v } = (0, i.bC)(g, C);
        return (0, r.jsxs)("svg", {
          ...p,
          "aria-label": s.intl.string(s.t.nH6S2d),
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, r.jsx)("defs", {
              children: (0, r.jsx)("style", { children: b }),
            }),
            (0, r.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: v }),
          ],
        });
      }
    },
    397697: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(249849),
        i = t(907561),
        s = t(388032),
        o = t(12008);
      let l = [
          "#01007f",
          "#0000b0",
          "#0000e1",
          "#2d3dee",
          "#5470e9",
          "#a091eb",
          "#cc99ff",
        ],
        c = ["#a7e4e4", "#ffffff"],
        d = [0.01, 0.03, 0.055, 0.1, 0.19, 0.25, 0.35],
        u = [
          { base: 8, tint: 1 },
          { base: 6, tint: 1 },
          { base: 6, tint: 1 },
          { base: 6, tint: 1 },
          { base: 6, tint: 1 },
          { base: 6, tint: 1 },
          { base: 6, tint: 1 },
        ],
        m = [0.55, 1],
        f = [
          { base: 8, tint: 1 },
          { base: 20, tint: 1 },
        ];
      function h(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: h,
            secondaryTintColor: x,
            ...p
          } = e,
          { primaryColorsTransformed: g, secondaryColorsTransformed: C } = (0,
          a.s)({
            primaryBaseColors: l,
            primaryTintColor: h,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: x,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: f,
          }),
          { styleContent: b, containerId: v } = (0, i.bC)(g, C);
        return (0, r.jsxs)("svg", {
          ...p,
          "aria-label": s.intl.string(s.t.nH6S2d),
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, r.jsx)("defs", {
              children: (0, r.jsx)("style", { children: b }),
            }),
            (0, r.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: v }),
          ],
        });
      }
    },
    129871: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(249849),
        i = t(907561),
        s = t(388032),
        o = t(136050);
      let l = [
          "#7185f6",
          "#7799f3",
          "#7eb2eb",
          "#85d5e0",
          "#89e6dd",
          "#8cefda",
          "#68eacb",
        ],
        c = ["#ffffff", "#f0f0f0"],
        d = [0.15, 0.23, 0.32, 0.45, 0.57, 0.62, 0.7],
        u = [
          { base: 14, tint: 1 },
          { base: 10, tint: 1 },
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
        ],
        m = [0.95, 1],
        f = [
          { base: 1, tint: 2 },
          { base: 14, tint: 1 },
        ];
      function h(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: h,
            secondaryTintColor: x,
            ...p
          } = e,
          { primaryColorsTransformed: g, secondaryColorsTransformed: C } = (0,
          a.s)({
            primaryBaseColors: l,
            primaryTintColor: h,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: x,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: f,
          }),
          { styleContent: b, containerId: v } = (0, i.bC)(g, C);
        return (0, r.jsxs)("svg", {
          ...p,
          "aria-label": s.intl.string(s.t.nH6S2d),
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, r.jsxs)("defs", {
              children: [
                (0, r.jsx)("defs", {
                  children: (0, r.jsxs)("radialGradient", {
                    id: "foam-gradient",
                    cx: "0.5",
                    cy: "0.5",
                    r: "0.65",
                    fx: "0.5",
                    fy: "0.8",
                    children: [
                      (0, r.jsx)("stop", { stopColor: C[1], offset: "60%" }),
                      (0, r.jsx)("stop", { stopColor: C[0], offset: "100%" }),
                    ],
                  }),
                }),
                (0, r.jsx)("style", { children: b }),
              ],
            }),
            (0, r.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: v }),
            (0, r.jsx)("use", {
              href: "".concat(o, "#foam"),
              style: { fill: "url(#foam-gradient)" },
            }),
          ],
        });
      }
    },
    206851: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(249849),
        i = t(907561),
        s = t(388032),
        o = t(924936);
      let l = ["#1e349e", "#4d61de", "#7887e2", "#92a6e4"],
        c = ["#fc6e4e"],
        d = [0.05, 0.15, 0.26, 0.4],
        u = [
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
        ],
        m = [0.35],
        f = [{ base: 4, tint: 1 }];
      function h(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: h,
            secondaryTintColor: x,
            ...p
          } = e,
          { primaryColorsTransformed: g, secondaryColorsTransformed: C } = (0,
          a.s)({
            primaryBaseColors: l,
            primaryTintColor: h,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: x,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: f,
          }),
          { styleContent: b, containerId: v } = (0, i.bC)(g, C);
        return (0, r.jsxs)("svg", {
          ...p,
          "aria-label": s.intl.string(s.t.nH6S2d),
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, r.jsx)("defs", {
              children: (0, r.jsx)("style", { children: b }),
            }),
            (0, r.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: v }),
          ],
        });
      }
    },
    907561: function (e, n, t) {
      t.d(n, {
        Km: function () {
          return i;
        },
        bC: function () {
          return o;
        },
        md: function () {
          return s;
        },
      });
      var r = t(192379),
        a = t(772848);
      let i = 262,
        s = 100;
      function o(e, n) {
        let t = r.useMemo(
          () => "clan-banner-container-".concat((0, a.Z)()),
          [],
        );
        return {
          styleContent: r.useMemo(() => {
            let r = e
                .map((e, n) => "--primary-".concat(n, ": ").concat(e, ";"))
                .join("\n"),
              a = n
                .map((e, n) => "--secondary-".concat(n, ": ").concat(e, ";"))
                .join("\n");
            return "#"
              .concat(t, " {\n        ")
              .concat(r, "\n        ")
              .concat(a, "\n      }");
          }, [t, e, n]),
          containerId: t,
        };
      }
    },
    246933: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(249849),
        i = t(907561),
        s = t(388032),
        o = t(409814);
      let l = ["#cc99ff", "#ffffff"],
        c = ["#2d3dee", "#ffffff"],
        d = [0.3, 1],
        u = [
          { base: 2, tint: 1 },
          { base: 5, tint: 1 },
        ],
        m = [0.3, 1],
        f = [
          { base: 2, tint: 1 },
          { base: 5, tint: 1 },
        ];
      function h(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: h,
            secondaryTintColor: x,
            ...p
          } = e,
          { primaryColorsTransformed: g, secondaryColorsTransformed: C } = (0,
          a.s)({
            primaryBaseColors: l,
            primaryTintColor: h,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: x,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: f,
          }),
          { styleContent: b, containerId: v } = (0, i.bC)(g, C);
        return (0, r.jsxs)("svg", {
          ...p,
          "aria-label": s.intl.string(s.t.nH6S2d),
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, r.jsxs)("defs", {
              children: [
                (0, r.jsxs)("defs", {
                  children: [
                    (0, r.jsxs)("radialGradient", {
                      id: "fog-gradient-primary",
                      cx: ".5",
                      cy: ".5",
                      r: ".6",
                      fx: ".76",
                      fy: ".33",
                      spreadMethod: "pad",
                      children: [
                        (0, r.jsx)("stop", { stopColor: g[1], offset: "0%" }),
                        (0, r.jsx)("stop", { stopColor: g[0], offset: "70%" }),
                      ],
                    }),
                    (0, r.jsxs)("radialGradient", {
                      id: "fog-gradient-secondary",
                      cx: ".5",
                      cy: ".5",
                      r: ".6",
                      fx: ".76",
                      fy: ".33",
                      spreadMethod: "pad",
                      children: [
                        (0, r.jsx)("stop", { stopColor: C[1], offset: "0%" }),
                        (0, r.jsx)("stop", { stopColor: C[0], offset: "70%" }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("style", { children: b }),
              ],
            }),
            (0, r.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: v }),
            (0, r.jsx)("use", {
              href: "".concat(o, "#clan-banner-warp-tunnel-secondary"),
              style: { fill: "url(#fog-gradient-secondary)" },
            }),
            (0, r.jsx)("use", {
              href: "".concat(o, "#clan-banner-warp-tunnel-primary"),
              style: { fill: "url(#fog-gradient-primary)" },
            }),
          ],
        });
      }
    },
    995414: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(249849),
        i = t(907561),
        s = t(388032),
        o = t(114266);
      let l = ["#0089d9"],
        c = ["#ff9e32", "#b4eefc", "#ffffff", "#804f19"],
        d = [0.2],
        u = [{ base: 8, tint: 1 }],
        m = [0.45, 0.7, 1, 0.3],
        f = [
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 10, tint: 1 },
          { base: 8, tint: 1 },
        ];
      function h(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: h,
            secondaryTintColor: x,
            ...p
          } = e,
          { primaryColorsTransformed: g, secondaryColorsTransformed: C } = (0,
          a.s)({
            primaryBaseColors: l,
            primaryTintColor: h,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: x,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: f,
          }),
          { styleContent: b, containerId: v } = (0, i.bC)(g, C);
        return (0, r.jsxs)("svg", {
          ...p,
          "aria-label": s.intl.string(s.t.nH6S2d),
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, r.jsx)("defs", {
              children: (0, r.jsx)("style", { children: b }),
            }),
            (0, r.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: v }),
          ],
        });
      }
    },
    688298: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = t(200651),
        a = t(192379),
        i = t(481060),
        s = t(388032),
        o = t(242047);
      function l(e) {
        let {
            showSecondaryColor: n,
            palette: t,
            onPrimaryColorChange: l,
            onSecondaryColorChange: c,
          } = e,
          d = a.useRef(null);
        return (
          (0, i.useFocusLock)(d),
          (0, r.jsxs)("div", {
            className: o.popoutContainer,
            children: [
              (0, r.jsx)(i.Text, {
                variant: "text-xs/semibold",
                color: "header-secondary",
                className: o.customColorsHeader,
                children: s.intl.string(s.t.lfYWW1),
              }),
              (0, r.jsxs)("div", {
                ref: d,
                className: o.colorPickersContainer,
                children: [
                  (0, r.jsxs)("div", {
                    className: o.colorColumn,
                    children: [
                      (0, r.jsx)("div", {
                        className: o.colorSwatch,
                        style: { backgroundColor: t.primary },
                      }),
                      (0, r.jsx)(i.Text, {
                        variant: "text-xs/medium",
                        color: "text-normal",
                        children: s.intl.string(s.t.C3KTQk),
                      }),
                      (0, r.jsx)(i.CustomColorPicker, {
                        className: o.colorPicker,
                        value: t.primary,
                        eagerUpdate: !0,
                        wrapperComponentType: "div",
                        showEyeDropper: !0,
                        onChange: l,
                      }),
                    ],
                  }),
                  n &&
                    (0, r.jsxs)("div", {
                      className: o.colorColumn,
                      children: [
                        (0, r.jsx)("div", {
                          className: o.colorSwatch,
                          style: { backgroundColor: t.secondary },
                        }),
                        (0, r.jsx)(i.Text, {
                          variant: "text-xs/medium",
                          color: "text-normal",
                          children: s.intl.string(s.t["8elvy8"]),
                        }),
                        (0, r.jsx)(i.CustomColorPicker, {
                          className: o.colorPicker,
                          value: t.secondary,
                          eagerUpdate: !0,
                          wrapperComponentType: "div",
                          showEyeDropper: !0,
                          onChange: c,
                        }),
                      ],
                    }),
                ],
              }),
            ],
          })
        );
      }
      function c(e) {
        let {
          shouldShow: n,
          showSecondaryColor: t,
          onRequestClose: a,
          children: s,
          palette: o,
          onPrimaryColorChange: c,
          onSecondaryColorChange: d,
        } = e;
        return (0, r.jsx)(i.Popout, {
          renderPopout: () =>
            (0, r.jsx)(l, {
              showSecondaryColor: t,
              palette: o,
              onPrimaryColorChange: c,
              onSecondaryColorChange: d,
            }),
          position: "left",
          shouldShow: n,
          onRequestClose: a,
          animation: i.Popout.Animation.TRANSLATE,
          animationPosition: "right",
          children: s,
        });
      }
    },
    995119: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(481060),
        i = t(388032),
        s = t(842196);
      function o(e) {
        let { onClick: n } = e;
        return (0, r.jsxs)(a.Button, {
          className: s.randomizeButton,
          innerClassName: s.randomizeButtonInner,
          look: a.Button.Looks.OUTLINED,
          size: a.Button.Sizes.MEDIUM,
          color: a.Button.Colors.PRIMARY,
          onClick: n,
          grow: !1,
          children: [
            (0, r.jsx)(a.RetryIcon, { size: "xs" }),
            i.intl.string(i.t.jn5UYG),
          ],
        });
      }
    },
    94963: function (e, n, t) {
      t(47120), t(724458);
      var r = t(200651),
        a = t(192379),
        i = t(688619),
        s = t.n(i),
        o = t(120356),
        l = t.n(o),
        c = t(97028),
        d = t(866442),
        u = t(442837),
        m = t(481060),
        f = t(231467),
        h = t(650774),
        x = t(430824),
        p = t(175557),
        g = t(688298),
        C = t(995119),
        b = t(116175),
        v = t(308083),
        _ = t(388032),
        y = t(861246),
        T = t(602075);
      let I = [
          {
            name: "Night Sky",
            bannerKind: v.qC.NIGHT_SKY,
            icon: m.ThemeDarkIcon,
          },
          { name: "Castle", bannerKind: v.qC.CASTLE, icon: m.CrownIcon },
          {
            name: "World Map",
            bannerKind: v.qC.WORLD_MAP,
            icon: m.GlobeEarthIcon,
          },
          {
            name: "Sea Foam",
            bannerKind: v.qC.SEA_FOAM,
            icon: m.PrivacyAndSafetyIcon,
          },
          {
            name: "Warp",
            bannerKind: v.qC.WARP_TUNNEL,
            icon: m.BlurBackgroundIcon,
          },
          { name: "House", bannerKind: v.qC.HOUSE, icon: m.TreehouseIcon },
          { name: "Pulsar", bannerKind: v.qC.HEIGHTMAP, icon: m.WaveformIcon },
          { name: "Mesh", bannerKind: v.qC.MESH, icon: m.GridVerticalIcon },
          {
            name: "Spatter",
            bannerKind: v.qC.SPATTER,
            icon: m.PaintbrushThickIcon,
          },
        ],
        j = (e) => {
          let { name: n, primaryColor: t, secondaryColor: a, isCustom: i } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              i
                ? (0, r.jsx)(m.PaintPaletteIcon, { size: "md" })
                : (0, r.jsx)("div", {
                    className: y.brandItemCircle,
                    style: {
                      background: "linear-gradient(-45deg, "
                        .concat(a, " 50%, ")
                        .concat(t, " 50% )"),
                    },
                  }),
              (0, r.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: "interactive-normal",
                className: y.noWrap,
                children: n,
              }),
            ],
          });
        };
      n.Z = (e) => {
        var n;
        let { handleUpdate: t, progress: i, guildId: o } = e,
          {
            banner: N,
            brandPrimaryColor: S,
            brandSecondaryColor: E,
            badgePrimaryColor: k,
            badgeSecondaryColor: A,
          } = i,
          w = (0, u.e7)([x.Z], () => x.Z.getGuild(o)),
          M =
            null !== (n = (0, u.e7)([h.Z], () => h.Z.getMemberCount(o))) &&
            void 0 !== n
              ? n
              : 0,
          R = a.useMemo(
            () => ({
              primary: null != S ? S : v.OH,
              secondary: null != E ? E : v.K_,
            }),
            [S, E],
          ),
          D = a.useMemo(() => {
            if (S === k && E === A) return 1;
            for (let e = 0; e < v.ym.length; e++)
              if (
                v.ym[e].primary === i.brandPrimaryColor &&
                v.ym[e].secondary === i.brandSecondaryColor
              )
                return 2 + e;
            return 0;
          }, [S, E, k, A, i.brandPrimaryColor, i.brandSecondaryColor]),
          [Z, L] = a.useState(!1),
          O = 0 === D,
          P = 1 === D,
          F = a.useMemo(() => {
            if (O) return R;
            if (P)
              return {
                primary: null != k ? k : b.Nh,
                secondary: null != A ? A : b.vY,
              };
            {
              let e = v.ym[D - 2];
              return { primary: e.primary, secondary: e.secondary };
            }
          }, [R, P, O, k, A, D]),
          G = a.useCallback(() => {
            let e = I[Math.floor(Math.random() * I.length)].bannerKind,
              n = s().random().hex();
            t({
              banner: e,
              brandPrimaryColor: n,
              brandSecondaryColor: s().random().hex(),
            });
          }, [t]);
        a.useEffect(() => {
          t({
            banner: N,
            brandPrimaryColor: F.primary,
            brandSecondaryColor: F.secondary,
          });
        }, [t, N, F.primary, F.secondary]);
        let B = a.useMemo(() => {
          var e, n, t;
          return {
            ...i,
            id: o,
            name:
              null !== (e = null == w ? void 0 : w.name) && void 0 !== e
                ? e
                : "",
            icon: null == w ? void 0 : w.icon,
            memberCount: M,
            games: Array.from(i.gameApplicationIds),
            traits: Array.from(i.interests),
            banner: N,
            badge: {
              badgeKind: i.badgeKind,
              primaryColor: null != k ? k : v.OH,
              secondaryColor: null != A ? A : v.K_,
            },
            branding: {
              primaryColor: null !== (n = F.primary) && void 0 !== n ? n : v.OH,
              secondaryColor:
                null !== (t = F.secondary) && void 0 !== t ? t : v.K_,
            },
            gameActivity: Array.from(i.gameApplicationIds).reduce(
              (e, n) => ((e[n] = { level: c.m.HIGH, score: 0 }), e),
              {},
            ),
          };
        }, [i, o, w, M, N, k, A, F]);
        return (0, r.jsxs)("div", {
          className: T.slideContent,
          children: [
            (0, r.jsx)(m.Heading, {
              variant: "heading-xxl/medium",
              className: T.title,
              children: _.intl.string(_.t.kPwMOz),
            }),
            (0, r.jsx)(m.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: T.subtitle,
              children: _.intl.string(_.t["E+KhDA"]),
            }),
            (0, r.jsxs)("div", {
              className: y.content,
              children: [
                (0, r.jsx)("div", {
                  className: y.leftColumn,
                  children: (0, r.jsxs)("div", {
                    className: y.colorsContainer,
                    children: [
                      (0, r.jsx)(C.Z, { onClick: G }),
                      (0, r.jsxs)("div", {
                        className: y.colorPickerContainer,
                        children: [
                          (0, r.jsx)(m.Text, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: _.intl.string(_.t.Ul1tIS),
                          }),
                          (0, r.jsxs)("div", {
                            className: y.colorPickerGrid,
                            children: [
                              (0, r.jsx)(g.Z, {
                                showSecondaryColor: !0,
                                palette: R,
                                onPrimaryColorChange: (e) => {
                                  t({ brandPrimaryColor: (0, d.Rf)(e) });
                                },
                                onSecondaryColorChange: (e) => {
                                  t({ brandSecondaryColor: (0, d.Rf)(e) });
                                },
                                shouldShow: Z,
                                onRequestClose: () => L(!1),
                                children: (e) =>
                                  (0, r.jsx)(m.Clickable, {
                                    ...e,
                                    onClick: () => {
                                      L((e) => !e);
                                    },
                                    className: l()(y.brandItemContainer, {
                                      [y.brandItemContainerSelected]: 0 === D,
                                    }),
                                    children: (0, r.jsx)(j, {
                                      name: _.intl.string(_.t.AemVoa),
                                      isCustom: !0,
                                    }),
                                  }),
                              }),
                              (0, r.jsx)(m.Clickable, {
                                onClick: () => {
                                  t({
                                    brandPrimaryColor: null != k ? k : v.OH,
                                    brandSecondaryColor: null != A ? A : v.K_,
                                  });
                                },
                                className: l()(y.brandItemContainer, {
                                  [y.brandItemContainerSelected]: 1 === D,
                                }),
                                children: (0, r.jsx)(j, {
                                  name: _.intl.string(_.t["1Pvr/v"]),
                                  primaryColor: k,
                                  secondaryColor: A,
                                }),
                              }),
                              v.ym.map((e, n) =>
                                (0, r.jsx)(
                                  m.Clickable,
                                  {
                                    "aria-label": e.name,
                                    onClick: () => {
                                      t({
                                        brandPrimaryColor: v.ym[n].primary,
                                        brandSecondaryColor: v.ym[n].secondary,
                                      });
                                    },
                                    className: l()(y.brandItemContainer, {
                                      [y.brandItemContainerSelected]:
                                        D === n + 2,
                                    }),
                                    children: (0, r.jsx)(j, {
                                      name: e.name,
                                      primaryColor: e.primary,
                                      secondaryColor: e.secondary,
                                    }),
                                  },
                                  n,
                                ),
                              ),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: y.bannerPickerContainer,
                        children: [
                          (0, r.jsx)(m.Text, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: _.intl.string(_.t.nH6S2d),
                          }),
                          (0, r.jsx)("div", {
                            className: y.bannerPickerGrid,
                            children: I.map((e, n) =>
                              (0, r.jsxs)(
                                m.Clickable,
                                {
                                  "aria-label": e.name,
                                  onClick: () => {
                                    t({ banner: e.bannerKind });
                                  },
                                  className: l()(y.bannerItemContainer, {
                                    [y.bannerItemContainerSelected]:
                                      e.bannerKind === N,
                                  }),
                                  children: [
                                    (0, r.jsx)(e.icon, { size: "md" }),
                                    (0, r.jsx)(m.Text, {
                                      variant: "text-sm/medium",
                                      color: "interactive-normal",
                                      className: y.noWrap,
                                      children: e.name,
                                    }),
                                  ],
                                },
                                n,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)("div", {
                  className: y.clanCardWrapper,
                  children: (0, r.jsx)(f.xV, {
                    bannerComponent: (0, r.jsx)(p.Z, {
                      banner: N,
                      primaryTintColor: F.primary,
                      secondaryTintColor: F.secondary,
                      className: y.clanBannerPreview,
                    }),
                    clan: B,
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    18100: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      }),
        t(47120);
      var r = t(200651),
        a = t(192379),
        i = t(120356),
        s = t.n(i),
        o = t(442837),
        l = t(481060),
        c = t(231467),
        d = t(430824),
        u = t(214715),
        m = t(308083),
        f = t(388032),
        h = t(123714);
      function x(e) {
        let { trait: n, selected: t, onClick: i } = e,
          [o, l] = a.useState(!1),
          c = a.useCallback(() => l(!0), []),
          d = a.useCallback(() => l(!1), []);
        return (0, r.jsx)(
          u.Z,
          {
            variant: "text-xs/semibold",
            color: o ? "text-muted" : "interactive-active",
            className: s()(h.trait, { [h.strikethrough]: o }),
            text: n,
            selected: t,
            onMouseEnter: t ? c : void 0,
            onMouseLeave: t ? d : void 0,
            onClick: t ? i : void 0,
          },
          n,
        );
      }
      function p(e) {
        var n;
        let {
            guildId: t,
            progress: i,
            traitsToHighlight: u,
            maskDescription: p,
            maskTraits: g,
            onTraitClick: C,
          } = e,
          b = (0, o.e7)([d.Z], () => d.Z.getGuild(t)),
          {
            interests: v,
            description: _,
            playstyle: y,
            wildcardDescriptors: T,
            brandPrimaryColor: I,
          } = i,
          j = (0, l.useToken)(l.tokens.colors.TEXT_BRAND),
          N = Array.from(v),
          S = a.useMemo(() => (null != u ? new Set(u) : new Set()), [u]);
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsxs)("div", {
              className: s()(
                h.description,
                p ? h.descriptionBorderMask : void 0,
              ),
              children: [
                (0, r.jsx)("div", {
                  className: p ? h.descriptionMask : void 0,
                }),
                (0, r.jsx)(l.Heading, {
                  variant: "heading-md/medium",
                  color: "header-primary",
                  lineClamp: 1,
                  children: null == b ? void 0 : b.name,
                }),
                (0, r.jsxs)("div", {
                  className: h.clanInfoRow,
                  children: [
                    (0, r.jsx)(l.Text, {
                      variant: "text-xxs/normal",
                      className: h.clanInfoItem,
                      children: (0, r.jsx)("span", {
                        role: "img",
                        "aria-label": f.intl.string(f.t.eMSBIC),
                        children: "\uD83C\uDFAE",
                      }),
                    }),
                    (0, r.jsx)(l.Text, {
                      variant: "text-xs/normal",
                      color: "text-secondary",
                      className: h.clanInfoItem,
                      children:
                        null !== (n = (0, m.mv)(y)) && void 0 !== n
                          ? n
                          : f.intl.string(f.t.JijC4O),
                    }),
                    null != b &&
                      (0, r.jsx)(c.cS, {
                        wildcardDescriptors: T,
                        primaryColor: null != I ? I : j.hex(),
                      }),
                  ],
                }),
                (0, r.jsx)(l.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  className: h.descriptionText,
                  children:
                    (null == _ ? void 0 : _.length) > 0
                      ? _
                      : f.intl.string(f.t["/pfXKi"]),
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: s()(h.tagsContainer, g ? h.traitsBorderMask : void 0),
              children: [
                (0, r.jsx)("div", { className: g ? h.traitsMask : void 0 }),
                (0, r.jsxs)("div", {
                  className: h.tagsCount,
                  children: [
                    (0, r.jsx)(l.TagsIcon, { size: "xxs", className: h.tags }),
                    (0, r.jsx)(l.Text, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: f.intl.format(f.t["3vJqtr"], { n: N.length }),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: h.traits,
                  children: N.map((e) =>
                    (0, r.jsx)(
                      x,
                      { trait: e, selected: S.has(e), onClick: C },
                      e,
                    ),
                  ),
                }),
              ],
            }),
          ],
        });
      }
    },
    745628: function (e, n, t) {
      t(47120);
      var r = t(200651);
      t(192379);
      var a = t(120356),
        i = t.n(a),
        s = t(481060),
        o = t(18100),
        l = t(308083),
        c = t(388032),
        d = t(602075);
      n.Z = (e) => {
        var n, t, a;
        let { guildId: u, handleUpdate: m, progress: f, errors: h } = e,
          { wildcardDescriptors: x, description: p } = f,
          g = (e, n) => {
            let t = [...x];
            (t[n] = e), m({ wildcardDescriptors: t });
          };
        return (0, r.jsxs)("div", {
          className: d.slideContent,
          children: [
            (0, r.jsx)(s.Heading, {
              variant: "heading-xxl/medium",
              className: d.title,
              children: c.intl.string(c.t.pdVsBA),
            }),
            (0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: d.subtitle,
              children: c.intl.string(c.t.E1L1o6),
            }),
            (null == h ? void 0 : h.description) != null &&
              (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "status-danger",
                className: d.errorText,
                children: h.description,
              }),
            (0, r.jsxs)("div", {
              className: d.content,
              children: [
                (0, r.jsxs)("div", {
                  className: d.mainPanelContainer,
                  children: [
                    (0, r.jsx)("div", {
                      className: d.maxWidthContainer,
                      children: (0, r.jsx)(s.TextArea, {
                        className: d.input,
                        maxLength: l.Us,
                        onChange: (e) => m({ description: e }),
                        value: null != p ? p : "",
                        rows: 5,
                        autoFocus: !0,
                        autosize: !0,
                        placeholder: c.intl.string(c.t["/pfXKi"]),
                      }),
                    }),
                    (0, r.jsx)(s.Text, {
                      variant: "text-sm/medium",
                      color: "header-secondary",
                      className: d.optionalTag,
                      children: c.intl.string(c.t["vWEL6+"]),
                    }),
                    (0, r.jsx)(s.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      className: d.title,
                      children: c.intl.string(c.t["2g9zfX"]),
                    }),
                    (null == h ? void 0 : h.wildcardDescriptors) != null &&
                      (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "status-danger",
                        className: d.errorText,
                        children: h.wildcardDescriptors,
                      }),
                    (0, r.jsxs)("div", {
                      className: d.wildcardRow,
                      children: [
                        (0, r.jsx)(s.TextInput, {
                          inputClassName: i()(d.input, d.wildcardInput),
                          value: null !== (n = x[0]) && void 0 !== n ? n : "",
                          onChange: (e) => g(e, 0),
                          maxLength: l.TY,
                          placeholder: l.LK["0"],
                        }),
                        (0, r.jsx)(s.TextInput, {
                          inputClassName: i()(d.input, d.wildcardInput),
                          value: null !== (t = x[1]) && void 0 !== t ? t : "",
                          onChange: (e) => g(e, 1),
                          maxLength: l.TY,
                          placeholder: l.LK["1"],
                        }),
                        (0, r.jsx)(s.TextInput, {
                          inputClassName: i()(d.input, d.wildcardInput),
                          value: null !== (a = x[2]) && void 0 !== a ? a : "",
                          onChange: (e) => g(e, 2),
                          maxLength: l.TY,
                          placeholder: l.LK["2"],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: d.fixedWidthSidebar,
                  children: (0, r.jsx)(o.Z, {
                    guildId: u,
                    progress: f,
                    maskTraits: !0,
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    950279: function (e, n, t) {
      t.d(n, {
        p: function () {
          return x;
        },
      }),
        t(47120),
        t(773603);
      var r = t(200651),
        a = t(192379),
        i = t(120356),
        s = t.n(i),
        o = t(481060),
        l = t(368343),
        c = t(364083),
        d = t(92373),
        u = t(308083),
        m = t(388032),
        f = t(494750),
        h = t(602075);
      function x(e) {
        let {
            gameApplicationIds: n,
            preventGameRemoval: t,
            onUpdateGames: i,
            minGames: l = 1,
            error: x,
          } = e,
          { options: p, matchSorterOptions: g } = (0, c.P)(),
          C = a.useMemo(() => Array.from(n), [n]),
          b = a.useCallback(
            (e) => {
              if (!(e.length < l)) i(new Set(e));
            },
            [l, i],
          ),
          v = a.useCallback(
            (e) => {
              if (t) return;
              let r = new Set(n);
              n.has(e) ? r.delete(e) : r.add(e), i(r);
            },
            [t, n, i],
          ),
          _ = a.useCallback(() => null, []);
        return (0, r.jsx)("div", {
          className: f.inputContainer,
          children: (0, r.jsxs)(o.FormItem, {
            error: x,
            children: [
              (0, r.jsx)(o.SearchableSelect, {
                multi: !0,
                hidePills: !0,
                autoFocus: !0,
                wrapperClassName: s()(h.input, f.input),
                options: p,
                value: C,
                placeholder: m.intl.string(m.t.acyezc),
                onChange: b,
                isDisabled: n.size === u.cm,
                matchSorterOptions: g,
                clearQueryOnSelect: !0,
                customPillContainerClassName: f.pills,
                renderCustomPill: _,
              }),
              C.length > 0 &&
                (0, r.jsxs)("div", {
                  className: f.gamesContainer,
                  children: [
                    (0, r.jsx)(o.Text, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: m.intl.string(m.t.PgOVsL),
                    }),
                    (0, r.jsx)("div", {
                      className: f.gamesList,
                      children: C.map((e) =>
                        (0, r.jsx)(
                          o.Tooltip,
                          {
                            text: m.intl.string(m.t.C1K2XV),
                            shouldShow: t,
                            tooltipContentClassName: f.tooltip,
                            children: (a) =>
                              (0, r.jsx)("div", {
                                ...a,
                                children: (0, r.jsx)(
                                  d.Z,
                                  {
                                    applicationId: e,
                                    imageContainerClassName:
                                      n.size > l ? f.clickableGame : void 0,
                                    selected: !0,
                                    locked: t,
                                    onClick: v,
                                  },
                                  e,
                                ),
                              }),
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          }),
        });
      }
      function p(e) {
        let { guildId: n, selectedGameApplicationIds: t, onUpdateGames: i } = e,
          { topGames: s, tryFetchTopGames: c } = (0, l.B)(),
          u = s.get(n),
          [h, x] = a.useState(!1);
        a.useEffect(() => {
          x(!0),
            c(n).finally(() => {
              x(!1);
            });
        }, [n, c]);
        let p = a.useMemo(
            () =>
              null == u
                ? []
                : Object.keys(u).sort((e, n) => u[n].score - u[e].score),
            [u],
          ),
          g = a.useCallback(
            (e) => {
              let n = new Set(t);
              t.has(e) ? n.delete(e) : n.add(e), i(n);
            },
            [i, t],
          );
        return h && null == u
          ? (0, r.jsx)(o.Spinner, { className: f.loadingSpinner })
          : null == p || 0 === p.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("hr", { className: f.separator }),
                  (0, r.jsxs)("div", {
                    className: f.gamesContainer,
                    children: [
                      (0, r.jsx)(o.Text, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: m.intl.string(m.t["0wEQQ0"]),
                      }),
                      (0, r.jsx)("div", {
                        className: f.gamesList,
                        children: p.map((e) =>
                          (0, r.jsx)(
                            d.Z,
                            {
                              applicationId: e,
                              imageContainerClassName: f.clickableGame,
                              selected: t.has(e),
                              onClick: g,
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              });
      }
      n.Z = (e) => {
        let {
            title: n,
            description: t,
            onUpdateGames: a,
            gameApplicationIds: i,
            minGames: l = 1,
            error: c,
            guildId: d,
            includeSuggestedGames: u,
          } = e,
          m = i.size <= l;
        return (0, r.jsxs)("div", {
          className: s()(h.slideContent, f.container),
          children: [
            (0, r.jsx)(o.Heading, {
              variant: "heading-xxl/medium",
              className: h.title,
              children: n,
            }),
            (0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: h.subtitle,
              children: t,
            }),
            (0, r.jsx)(x, {
              minGames: l,
              gameApplicationIds: i,
              preventGameRemoval: m,
              onUpdateGames: a,
              error: c,
            }),
            u &&
              null != d &&
              (0, r.jsx)(p, {
                guildId: d,
                selectedGameApplicationIds: i,
                onUpdateGames: a,
              }),
          ],
        });
      };
    },
    796918: function (e, n, t) {
      t(47120);
      var r = t(200651),
        a = t(192379),
        i = t(120356),
        s = t.n(i),
        o = t(392711),
        l = t(481060),
        c = t(442837),
        d = t(355932),
        u = t(314897),
        m = t(353093),
        f = t(214715),
        h = t(18100),
        x = t(308083),
        p = t(388032),
        g = t(258738),
        C = t(602075);
      n.Z = (e) => {
        let { guildId: n, handleUpdate: t, progress: i, error: b } = e,
          { interests: v } = i,
          [_, y] = a.useState(""),
          [T, I] = a.useState(0),
          j = (0, c.e7)([u.default], () => u.default.getId()),
          N = a.useMemo(() => (0, o.chunk)((0, m.XV)(x.i6, j), 9), [j]),
          S = [...N[T], ...N[(T + 1) % N.length]],
          E = a.useMemo(() => Array.from(v), [v]),
          k = a.useMemo(
            () => E.filter((e) => !x.WZ.has(e) && !x.gh.has(e)),
            [E],
          ),
          A = (e) => {
            let n = new Set(v);
            n.delete(e), t({ interests: n });
          },
          w = a.useCallback(
            (e) => {
              if (v.size === x.c4) return;
              let n = null != e ? e : _.trim();
              if (0 === n.length) return;
              let r = new Set(v);
              r.add(n), t({ interests: r }), y("");
            },
            [t, _, v],
          ),
          M = a.useCallback(
            (e) => {
              switch (e.key) {
                case "Enter":
                case "Tab":
                  e.preventDefault(), e.stopPropagation(), w();
              }
            },
            [w],
          ),
          R = a.useCallback(() => {
            I((e) => (e + 1) % N.length);
          }, [I, N]);
        return (0, r.jsxs)("div", {
          className: C.slideContent,
          children: [
            (0, r.jsx)(l.Heading, {
              variant: "heading-xxl/medium",
              className: C.title,
              children: p.intl.string(p.t.V69HzM),
            }),
            (0, r.jsx)(l.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: C.subtitle,
              children: p.intl.format(p.t["BAK+ND"], {}),
            }),
            null != b &&
              (0, r.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "status-danger",
                className: C.errorText,
                children: b,
              }),
            (0, r.jsxs)("div", {
              className: C.content,
              children: [
                (0, r.jsxs)("div", {
                  className: C.mainPanelContainer,
                  children: [
                    (0, r.jsxs)("div", {
                      className: C.inputContainer,
                      children: [
                        (0, r.jsx)(l.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          className: C.contentLabel,
                          children: p.intl.string(p.t.qMh4Oj),
                        }),
                        (0, r.jsx)(l.TextInput, {
                          autoFocus: !0,
                          inputClassName: C.input,
                          value: _,
                          onKeyDown: M,
                          onChange: y,
                          placeholder: p.intl.string(p.t.axCpsL),
                          maxLength: x.Sq,
                          disabled: v.size === x.c4,
                        }),
                        _.length > 0 &&
                          (0, r.jsx)(l.Clickable, {
                            onClick: () => w(_.trim()),
                            className: s()(C.plusIcon, C.clickable),
                            children: (0, r.jsx)(l.PlusSmallIcon, {
                              size: "md",
                              color: "currentColor",
                              className: C.icon,
                            }),
                          }),
                        _.length > 0 &&
                          (0, r.jsx)(l.Text, {
                            color: "text-muted",
                            variant: "text-xs/normal",
                            className: C.enterToSearchText,
                            children: p.intl.string(p.t.ZGkhJS),
                          }),
                      ],
                    }),
                    (0, r.jsx)(l.Text, {
                      className: C.interestsCategoryTitle,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: p.intl.string(p.t.P793o6),
                    }),
                    (0, r.jsx)(d.ZP, {
                      items: S,
                      renderItem: (e) =>
                        (0, r.jsx)(
                          f.Z,
                          {
                            variant: "text-xs/semibold",
                            color: "interactive-normal",
                            text: e,
                            selected: v.has(e),
                            onClick: v.has(e) ? A : w,
                          },
                          e,
                        ),
                      maxLines: 2,
                      className: C.interestsCategory,
                      itemGapPx: 8,
                      renderOverflow: () => null,
                    }),
                    (0, r.jsx)("div", {
                      children: (0, r.jsxs)(l.Button, {
                        color: l.ButtonColors.PRIMARY,
                        onClick: R,
                        className: g.rerollButton,
                        innerClassName: g.innerRerollButton,
                        children: [
                          (0, r.jsx)(l.MagicWandIcon, {
                            size: "sm",
                            color: "currentColor",
                          }),
                          (0, r.jsx)(l.Text, {
                            variant: "text-xs/semibold",
                            color: "none",
                            children: p.intl.string(p.t.ldYCQ0),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: C.fixedWidthSidebar,
                  children:
                    E.length > 0 &&
                    (0, r.jsx)(h.Z, {
                      guildId: n,
                      progress: i,
                      traitsToHighlight: k,
                      maskDescription: !0,
                      onTraitClick: A,
                    }),
                }),
              ],
            }),
          ],
        });
      };
    },
    513532: function (e, n, t) {
      t(47120);
      var r = t(200651);
      t(192379);
      var a = t(442837),
        i = t(481060),
        s = t(863249),
        o = t(616230),
        l = t(430824),
        c = t(389134),
        d = t(650461),
        u = t(388032),
        m = t(602075);
      n.Z = (e) => {
        let { guildId: n, error: t, inSettings: f = !1 } = e,
          h = (0, a.e7)([l.Z], () => l.Z.getGuild(n)),
          x = (0, a.e7)([c.Z, d.ZP], () => {
            var e, t;
            return f
              ? c.Z.getState().settings.verificationForm
              : null === (t = d.ZP.getStateForGuild(n)) || void 0 === t
                ? void 0
                : null === (e = t.progress) || void 0 === e
                  ? void 0
                  : e.verificationForm;
          });
        return null == h
          ? null
          : (0, r.jsxs)("div", {
              className: m.slideContent,
              children: [
                (0, r.jsx)(i.Heading, {
                  variant: "heading-xxl/medium",
                  className: m.title,
                  children: f
                    ? u.intl.string(u.t.aOQWKi)
                    : u.intl.string(u.t.qxqOzM),
                }),
                (0, r.jsx)(i.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: m.subtitle,
                  children: u.intl.string(u.t["tnz5//"]),
                }),
                (0, r.jsxs)("div", {
                  className: m.maxWidthContainer,
                  children: [
                    null != t &&
                      (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "status-danger",
                        className: m.errorText,
                        children: t,
                      }),
                    (0, r.jsx)(o.Z, {
                      guild: h,
                      isClanContext: !0,
                      onFieldsSave: (e, n) => (
                        s.ZP.updateVerificationFormFieldsLocal(e, [...n]),
                        Promise.resolve()
                      ),
                      verificationForm: x,
                    }),
                  ],
                }),
              ],
            });
      };
    },
    741595: function (e, n, t) {
      t.d(n, {
        R: function () {
          return d;
        },
      });
      var r = t(200651),
        a = t(192379),
        i = t(120356),
        s = t.n(i),
        o = t(481060),
        l = t(308083),
        c = t(602075);
      function d(e) {
        let { playstyle: n, onUpdatePlaystyle: t } = e,
          i = (0, o.useToken)(o.tokens.colors.WHITE),
          d = a.useMemo(() => Object.values((0, l.f4)()), []);
        return (0, r.jsx)("div", {
          className: c.playstyleSelect,
          children: d.map((e) =>
            (0, r.jsxs)(
              o.Clickable,
              {
                className: s()(c.playstyleOption, c.selectableOption, {
                  [c.selectedOption]: e.type === n,
                }),
                onClick: () => t(e.type),
                children: [
                  (0, r.jsx)(o.Heading, {
                    variant: "heading-xxl/medium",
                    children: e.emoji,
                  }),
                  (0, r.jsx)(o.Heading, {
                    variant: "heading-md/medium",
                    className: c.playstyleTitle,
                    children: e.title,
                  }),
                  (0, r.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: e.subtitle,
                  }),
                  e.type === n &&
                    (0, r.jsx)(o.CircleCheckIcon, {
                      size: "md",
                      color: "currentColor",
                      secondaryColor: i.hex(),
                      className: c.checkmark,
                    }),
                ],
              },
              e.type,
            ),
          ),
        });
      }
      n.Z = (e) => {
        let {
          title: n,
          description: t,
          onUpdatePlaystyle: a,
          playstyle: i,
          error: s,
        } = e;
        return (0, r.jsxs)("div", {
          className: c.slideContent,
          children: [
            (0, r.jsx)(o.Heading, {
              variant: "heading-xxl/medium",
              className: c.title,
              children: n,
            }),
            (0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: c.subtitle,
              children: t,
            }),
            null != s &&
              (0, r.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "status-danger",
                className: c.errorText,
                children: s,
              }),
            (0, r.jsx)(d, { playstyle: i, onUpdatePlaystyle: a }),
          ],
        });
      };
    },
    974842: function (e, n, t) {
      t(47120);
      var r = t(200651),
        a = t(192379),
        i = t(688619),
        s = t.n(i),
        o = t(120356),
        l = t.n(o),
        c = t(866442),
        d = t(481060),
        u = t(550271),
        m = t(688298),
        f = t(995119),
        h = t(116175),
        x = t(308083),
        p = t(388032),
        g = t(880867),
        C = t(602075);
      let b = [
        h.ZD.SWORD,
        h.ZD.WATER_DROP,
        h.ZD.SKULL,
        h.ZD.TOADSTOOL,
        h.ZD.MOON,
        h.ZD.LIGHTNING,
        h.ZD.LEAF,
        h.ZD.HEART,
        h.ZD.FIRE,
        h.ZD.COMPASS,
        h.ZD.CROSSHAIRS,
        h.ZD.FLOWER,
        h.ZD.FORCE,
        h.ZD.GEM,
        h.ZD.LAVA,
        h.ZD.PSYCHIC,
        h.ZD.SMOKE,
        h.ZD.SNOW,
        h.ZD.SOUND,
        h.ZD.SUN,
        h.ZD.WIND,
      ];
      n.Z = (e) => {
        let {
            handleUpdate: n,
            badge: t,
            primaryColor: i,
            secondaryColor: o,
            tag: v,
            error: _,
            furthestStep: y,
            inSettings: T,
          } = e,
          I = a.useMemo(() => {
            let e = (0, h.yf)();
            return {
              primary: null != i ? i : e.primary,
              secondary: null != o ? o : e.secondary,
            };
          }, [i, o]);
        a.useEffect(() => {
          (null == i || null == o) &&
            n({
              badgePrimaryColor: I.primary,
              badgeSecondaryColor: I.secondary,
            });
        }, [I.primary, I.secondary, n, i, o]);
        let j = a.useMemo(() => {
            for (let e = 0; e < h.sg.length; e++)
              if (
                h.sg[e].primary === I.primary &&
                h.sg[e].secondary === I.secondary
              )
                return 1 + e;
            return 0;
          }, [I.primary, I.secondary]),
          [N, S] = a.useState(!1),
          E = a.useCallback(() => {
            let e = b[Math.floor(Math.random() * b.length)],
              t = s().random().hex();
            n({
              badgeKind: e,
              badgePrimaryColor: t,
              badgeSecondaryColor: s().random().hex(),
            });
          }, [n]);
        return (
          a.useEffect(() => {
            y === x.Wy.CUSTOMIZE_TAG_BADGE &&
              !T &&
              n({
                brandPrimaryColor: I.primary,
                brandSecondaryColor: I.secondary,
              });
          }, [n, I.primary, I.secondary, y, i, o, T]),
          (0, r.jsxs)("div", {
            className: C.slideContent,
            children: [
              (0, r.jsx)(d.Heading, {
                variant: "heading-xxl/medium",
                className: C.title,
                children: p.intl.string(p.t.ZcHHvr),
              }),
              (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: C.subtitle,
                children: p.intl.string(p.t.Tr399P),
              }),
              (0, r.jsx)(f.Z, { onClick: E }),
              (0, r.jsxs)("div", {
                className: g.container,
                children: [
                  (0, r.jsxs)("div", {
                    className: g.badgesContainer,
                    children: [
                      (0, r.jsxs)("div", {
                        className: g.pickerContainer,
                        children: [
                          (0, r.jsx)(d.Text, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: p.intl.string(p.t.eyPefn),
                          }),
                          (0, r.jsx)("div", {
                            className: g.pickerGrid,
                            children: b.map((e) =>
                              (0, r.jsx)(
                                d.Clickable,
                                {
                                  onClick: () => n({ badgeKind: e }),
                                  className: l()(g.badgeAssetContainer, {
                                    [g.badgeAssetContainerSelected]: e === t,
                                  }),
                                  children: (0, r.jsx)(u.A, {
                                    badge: e,
                                    width: 32,
                                    height: 32,
                                  }),
                                },
                                "".concat(e),
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: g.pickerContainer,
                        children: [
                          (0, r.jsx)(d.Text, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: p.intl.string(p.t["93wr6e"]),
                          }),
                          (0, r.jsxs)("div", {
                            className: g.pickerGrid,
                            children: [
                              (0, r.jsx)(m.Z, {
                                showSecondaryColor: h.ME[t] >= 2,
                                palette: I,
                                onPrimaryColorChange: (e) => {
                                  n({ badgePrimaryColor: (0, c.Rf)(e) });
                                },
                                onSecondaryColorChange: (e) => {
                                  n({ badgeSecondaryColor: (0, c.Rf)(e) });
                                },
                                shouldShow: N,
                                onRequestClose: () => S(!1),
                                children: (e) =>
                                  (0, r.jsx)(d.Clickable, {
                                    ...e,
                                    onClick: () => {
                                      S((e) => !e);
                                    },
                                    className: l()(g.badgeAssetContainer, {
                                      [g.badgeAssetContainerSelected]: 0 === j,
                                    }),
                                    children: (0, r.jsx)(d.PaintPaletteIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                    }),
                                  }),
                              }),
                              h.sg.map((e, a) =>
                                (0, r.jsx)(
                                  d.Clickable,
                                  {
                                    onClick: () => {
                                      n({
                                        badgePrimaryColor: h.sg[a].primary,
                                        badgeSecondaryColor: h.sg[a].secondary,
                                      });
                                    },
                                    className: l()(g.badgeAssetContainer, {
                                      [g.badgeAssetContainerSelected]:
                                        a + 1 === j,
                                    }),
                                    children: (0, r.jsx)(u.A, {
                                      badge: t,
                                      width: 32,
                                      height: 32,
                                      primaryTintColor: e.primary,
                                      secondaryTintColor: e.secondary,
                                    }),
                                  },
                                  "".concat(e.primary, ":").concat(e.secondary),
                                ),
                              ),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: g.tagContainer,
                    children: [
                      (0, r.jsx)(d.Text, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: p.intl.string(p.t["3eZP8/"]),
                      }),
                      null != _ &&
                        (0, r.jsx)(d.Text, {
                          variant: "text-sm/normal",
                          color: "status-danger",
                          className: C.errorText,
                          children: _,
                        }),
                      (0, r.jsx)(d.TextInput, {
                        className: g.tagInputWrapper,
                        inputClassName: g.tagInput,
                        value: null != v ? v : "",
                        onChange: (e) => n({ tag: e }),
                        maxLength: x.cG,
                        placeholder: p.intl.string(p.t["0V0ZFx"]),
                        autoFocus: !0,
                        prefixElement: (0, r.jsx)(u.A, {
                          badge: t,
                          width: 40,
                          height: 40,
                          primaryTintColor: I.primary,
                          secondaryTintColor: I.secondary,
                        }),
                      }),
                      (0, r.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: g.tagValidationText,
                        children: p.intl.string(p.t.lGtFwM),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    359380: function (e, n, t) {
      t.d(n, {
        d: function () {
          return m;
        },
      }),
        t(47120),
        t(653041);
      var r = t(200651),
        a = t(192379),
        i = t(481060),
        s = t(214715),
        o = t(18100),
        l = t(308083),
        c = t(388032),
        d = t(602075);
      let u = (e) => {
        let {
            title: n,
            icon: t,
            availableTraits: o,
            selectedTraits: c,
            onUpdateTraits: u,
          } = e,
          m = a.useCallback(
            (e) => {
              let n = new Set(c);
              n.delete(e), u(n);
            },
            [u, c],
          ),
          f = a.useCallback(
            (e) => {
              if (c.size === l.c4) return;
              let n = new Set(c);
              n.add(e), u(n);
            },
            [u, c],
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.Text, {
              className: d.interestsCategoryTitle,
              variant: "text-xs/semibold",
              color: "text-muted",
              children: n,
            }),
            (0, r.jsx)("div", {
              className: d.utilityTraits,
              children: o.map((e) => {
                let n = c.has(e);
                return (0, r.jsx)(
                  s.Z,
                  {
                    variant: "text-xs/semibold",
                    color: "interactive-normal",
                    icon: t,
                    text: e,
                    selected: n,
                    onClick: n ? m : f,
                  },
                  e,
                );
              }),
            }),
          ],
        });
      };
      function m(e) {
        let {
            guildId: n,
            onUpdateTraits: t,
            progress: s,
            availableTraits: m,
            hidePreview: f = !1,
          } = e,
          h = a.useMemo(() => {
            let e = [];
            return l.gh.forEach((n) => e.push({ value: n, label: n })), e;
          }, []),
          x = a.useMemo(() => {
            var e;
            return null !==
              (e = null != m ? m : null == s ? void 0 : s.interests) &&
              void 0 !== e
              ? e
              : new Set();
          }, [m, null == s ? void 0 : s.interests]),
          p = a.useMemo(() => Array.from(x), [x]),
          g = a.useMemo(() => p.filter((e) => l.gh.has(e)), [p]),
          C = a.useCallback(
            (e) => {
              t(new Set([...p.filter((e) => !l.gh.has(e)), ...e]));
            },
            [t, p],
          ),
          b = a.useMemo(() => p.filter((e) => l.WZ.has(e) || l.gh.has(e)), [p]),
          v = a.useCallback(
            (e) => {
              let n = new Set(x);
              n.delete(e), t(n);
            },
            [t, x],
          );
        return (0, r.jsxs)("div", {
          className: d.content,
          children: [
            (0, r.jsxs)("div", {
              className: d.mainPanelContainer,
              children: [
                (0, r.jsx)(u, {
                  title: c.intl.string(c.t.SXqVqq),
                  icon: i.UserIcon,
                  availableTraits: l.jK,
                  selectedTraits: x,
                  onUpdateTraits: t,
                }),
                (0, r.jsx)(u, {
                  title: c.intl.string(c.t["7uZoaG"]),
                  icon: i.UserIcon,
                  availableTraits: l.CT,
                  selectedTraits: x,
                  onUpdateTraits: t,
                }),
                (0, r.jsx)(i.Text, {
                  className: d.interestsCategoryTitle,
                  variant: "text-xs/semibold",
                  color: "text-muted",
                  children: c.intl.string(c.t.rU5dUV),
                }),
                (0, r.jsx)("div", {
                  className: d.languageSelect,
                  children: (0, r.jsx)(i.SearchableSelect, {
                    wrapperClassName: d.input,
                    options: h,
                    value: g,
                    onChange: C,
                    placeholder: c.intl.string(c.t.GA91en),
                    multi: !0,
                  }),
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: d.fixedWidthSidebar,
              children:
                null != s &&
                p.length > 0 &&
                !f &&
                (0, r.jsx)(o.Z, {
                  guildId: n,
                  progress: s,
                  traitsToHighlight: b,
                  maskDescription: !0,
                  onTraitClick: v,
                }),
            }),
          ],
        });
      }
      n.Z = (e) => {
        let {
          guildId: n,
          title: t,
          description: a,
          onUpdateTraits: s,
          progress: o,
          traits: l,
          optional: u = !1,
          hidePreview: f = !1,
        } = e;
        return (0, r.jsxs)("div", {
          className: d.slideContent,
          children: [
            u &&
              (0, r.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "header-secondary",
                className: d.optionalTag,
                children: c.intl.string(c.t["vWEL6+"]),
              }),
            (0, r.jsx)(i.Heading, {
              variant: "heading-xxl/medium",
              className: d.title,
              children: t,
            }),
            (0, r.jsx)(i.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: d.subtitle,
              children: a,
            }),
            (0, r.jsx)(m, {
              guildId: n,
              onUpdateTraits: s,
              progress: o,
              availableTraits: l,
              hidePreview: f,
            }),
          ],
        });
      };
    },
    35313: function (e, n, t) {
      t.d(n, {
        f: function () {
          return o;
        },
      });
      var r = t(748780),
        a = t(442837),
        i = t(481060),
        s = t(607070);
      function o() {
        let e = (0, a.e7)([s.Z], () => s.Z.useReducedMotion);
        return (0, i.useSpring)(
          {
            from: {
              opacity: e ? 1 : 0,
              transform: e ? "scale(1)" : "scale(1.2)",
            },
            to: { opacity: 1, transform: "scale(1)" },
            config: {
              easing: r.Z.Easing.quad,
              duration: e ? 0 : 200,
              clamp: !0,
            },
          },
          "animate-always",
        );
      }
    },
    167533: function (e, n, t) {
      t(47120);
      var r,
        a = t(200651),
        i = t(192379),
        s = t(120356),
        o = t.n(s),
        l = t(481060),
        c = t(981631),
        d = t(729071);
      function u(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      let m = (e) =>
        (0, a.jsx)("div", { className: e.className, children: e.children });
      class f extends (r = i.PureComponent) {
        isSortable(e) {
          return null != e.sort && !1 !== e.sort;
        }
        getDefaultSort(e) {
          return (n, t) => {
            let r = n[e],
              a = t[e];
            return null != r && null != a ? (r === a ? 0 : r < a ? -1 : 1) : 0;
          };
        }
        renderHeader() {
          let {
              columns: e,
              data: n,
              sortDirection: t,
              sortKey: r,
              headerCellClassName: i,
              headerClassName: s,
              sortedHeaderCellClassName: u,
              stickyHeader: f,
            } = this.props,
            h = e.map((e) => {
              let s = null != e.renderHeader ? e.renderHeader(e, n) : e.key,
                m =
                  t === c.sHY.ASCENDING
                    ? l.ChevronSmallUpIcon
                    : l.ChevronSmallDownIcon;
              return (0, a.jsx)(
                l.Clickable,
                {
                  className: o()(
                    d.headerCell,
                    i,
                    e.headerCellClassName,
                    e.cellClassName,
                    r === e.key && u,
                    { [d.clickable]: this.isSortable(e) },
                  ),
                  onClick: this.isSortable(e)
                    ? () => this.handleSort(e.key)
                    : void 0,
                  children: (0, a.jsxs)("div", {
                    className: d.headerCellContent,
                    children: [
                      s,
                      this.isSortable(e) && r === e.key
                        ? (0, a.jsx)(m, { className: d.sortIcon })
                        : null,
                    ],
                  }),
                },
                e.key,
              );
            });
          return (0, a.jsx)(m, {
            className: o()(s, d.row, { [d.stickyHeader]: f }),
            children: h,
          });
        }
        renderBody() {
          let {
              columns: e,
              data: n,
              sortData: t,
              sortKey: r,
              sortDirection: a,
              bodyCellClassName: s,
              rowClassName: l,
              cellProps: u,
              rowProps: m,
              rowComponent: f,
              cellComponent: h,
            } = this.props,
            x = n;
          if (t) {
            let t =
                null != r
                  ? e.find((e) => {
                      let { key: n } = e;
                      return n === r;
                    })
                  : null,
              i = [...n],
              s = null != t && t.sort,
              o =
                null != t && null != r && this.isSortable(t)
                  ? i.sort(
                      "function" == typeof s
                        ? (e, n) => s(e, n, a)
                        : this.getDefaultSort(r),
                    )
                  : i;
            x = null != t && a === c.sHY.DESCENDING ? o.reverse() : o;
          }
          return x.map((n, t) => {
            let r = e.map((e) =>
              (0, i.createElement)(
                h,
                {
                  ...u,
                  key: e.key,
                  item: n,
                  className: o()(s, e.bodyCellClassName, e.cellClassName),
                },
                null != e.render ? e.render(n, u, t) : n[e.key],
              ),
            );
            return (0, i.createElement)(
              f,
              { ...m, key: n.key, item: n, className: o()(d.row, l) },
              r,
            );
          });
        }
        render() {
          let { className: e, hasHeader: n } = this.props;
          return (0, a.jsxs)("div", {
            className: e,
            children: [n ? this.renderHeader() : null, this.renderBody()],
          });
        }
        constructor(...e) {
          super(...e),
            u(this, "handleSort", (e) => {
              let { sortKey: n, sortDirection: t, onSort: r } = this.props;
              if (null != r)
                r(
                  e,
                  n === e
                    ? t === c.sHY.ASCENDING
                      ? c.sHY.DESCENDING
                      : c.sHY.ASCENDING
                    : c.sHY.ASCENDING,
                );
            });
        }
      }
      u(f, "SortDirection", c.sHY),
        u(f, "defaultProps", {
          initialSortDirection: c.sHY.ASCENDING,
          rowHeaderComponent: m,
          rowComponent: (e) =>
            (0, a.jsx)("div", { className: e.className, children: e.children }),
          cellComponent: (e) =>
            (0, a.jsx)("div", { className: e.className, children: e.children }),
          hasHeader: !0,
          sortData: !0,
          stickyHeader: !1,
        }),
        (n.Z = f);
    },
    53365: function (e, n, t) {
      t.d(n, {
        $J: function () {
          return p;
        },
        He: function () {
          return l;
        },
        av: function () {
          return f;
        },
        df: function () {
          return h;
        },
        hY: function () {
          return x;
        },
        oL: function () {
          return C;
        },
        wE: function () {
          return d;
        },
        wZ: function () {
          return m;
        },
        yk: function () {
          return c;
        },
        zo: function () {
          return u;
        },
      });
      var r = t(544891),
        a = t(570140),
        i = t(728345),
        s = t(981631),
        o = t(674563);
      async function l(e) {
        await r.tn.post({ url: s.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(e) });
      }
      async function c(e) {
        return (
          await r.tn.get({ url: s.ANM.CREATOR_MONETIZATION_ELIGIBILITY(e) })
        ).body;
      }
      async function d(e, n) {
        await r.tn.post({ url: s.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(e, n) });
      }
      async function u(e) {
        await r.tn.post({ url: s.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e) });
      }
      async function m(e) {
        return (
          await r.tn.get({
            url: s.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e),
          })
        ).body;
      }
      async function f(e) {
        try {
          let n = await r.tn.get({
            url: s.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: e },
          });
          a.Z.dispatch({
            type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
            eligibleGuilds: n.body.eligible_guilds,
          });
        } catch (e) {}
      }
      async function h(e, n) {
        let t = (
          await r.tn.post({
            url: s.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
            body: { team_id: n },
          })
        ).body;
        return (
          null != t.application &&
            a.Z.dispatch({
              type: "APPLICATION_FETCH_SUCCESS",
              application: t.application,
            }),
          t
        );
      }
      function x(e) {
        return r.tn.post({
          url: s.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e),
        });
      }
      function p(e) {
        return r.tn.post({
          url: s.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e),
        });
      }
      async function g(e) {
        await r.tn.post({
          url: s.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
          body: {},
        });
      }
      async function C(e) {
        return (
          await g(e),
          await i.ZP.getApplicationsForGuild(e, {
            type: o.wW.GUILD_ROLE_SUBSCRIPTIONS,
            includeTeam: !0,
          })
        );
      }
    },
    946314: function (e, n, t) {
      t.d(n, {
        TN: function () {
          return c;
        },
        WZ: function () {
          return d;
        },
      });
      var r,
        a,
        i,
        s,
        o = t(442837),
        l = t(570140);
      let c = 1e3,
        d = 200,
        u = {},
        m = !1;
      class f extends (s = o.ZP.Store) {
        isLoading() {
          return m;
        }
        passesChecklist(e) {
          var n;
          return (
            !m && (null === (n = u[e]) || void 0 === n ? void 0 : n.sufficient)
          );
        }
        isPendingSuccess(e) {
          let n = u[e];
          return (
            null != n &&
            !m &&
            n.healthScorePending &&
            n.safeEnvironment &&
            0 === Object.keys(n.nsfwProperties).length &&
            n.size &&
            n.protected
          );
        }
        getDiscoveryChecklist(e) {
          return u[e];
        }
      }
      (i = "DiscoverGuildChecklistStore"),
        (a = "displayName") in (r = f)
          ? Object.defineProperty(r, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[a] = i),
        (n.ZP = new f(l.Z, {
          DISCOVER_CHECKLIST_FETCH_START: function (e) {
            m = !0;
          },
          DISCOVER_CHECKLIST_FETCH_FAILURE: function (e) {
            m = !1;
          },
          DISCOVER_CHECKLIST_FETCH_SUCCESS: function (e) {
            var n;
            let { checklist: t, guildId: r } = e;
            (m = !1),
              (u[r] = {
                guildId: t.guild_id,
                safeEnvironment: t.safe_environment,
                healthy: t.healthy,
                healthScorePending: t.health_score_pending,
                nsfwProperties: t.nsfw_properties,
                size: t.size,
                protected: t.protected,
                sufficient: t.sufficient,
                sufficientWithoutGracePeriod: t.sufficient_without_grace_period,
                gracePeriodEndDate:
                  null != t.grace_period_end_date
                    ? new Date(t.grace_period_end_date)
                    : null,
                retentionHealthy: t.retention_healthy,
                engagementHealthy: t.engagement_healthy,
                minimumGuildSize: null != t.minimum_size ? t.minimum_size : c,
                healthScore: t.health_score,
                minimumGuildAge:
                  null !== (n = t.minimum_age) && void 0 !== n ? n : 0,
                age: t.age,
              });
          },
        }));
    },
    1259: function (e, n, t) {
      t.d(n, {
        _: function () {
          return m;
        },
        t: function () {
          return u;
        },
      }),
        t(47120);
      var r = t(192379),
        a = t(442837),
        i = t(818083),
        s = t(650774),
        o = t(430824),
        l = t(496675),
        c = t(946314),
        d = t(981631);
      let u = (0, i.B)({
        kind: "guild",
        id: "2021-12_discovery_requirements_m2",
        label: "Lower Server Discovery member count requirements",
        defaultConfig: { enableLowerMemberCountReq: !1 },
        treatments: [
          {
            id: 1,
            label:
              "Allow a server to become discoverable with lower member count requirements",
            config: { enableLowerMemberCountReq: !0 },
          },
        ],
      });
      function m(e) {
        let n = (0, a.e7)([o.Z], () => o.Z.getGuild(e)),
          t = (0, a.e7)([l.Z], () => l.Z.can(d.Plq.ADMINISTRATOR, n)),
          i = null == n ? void 0 : n.hasFeature(d.oNc.COMMUNITY),
          [m] = (0, a.Wu)([s.Z], () => [s.Z.getMemberCount(e)], [e]),
          f = (null != m ? m : 0) >= c.WZ && (null != m ? m : 0) < c.TN,
          h = t && i && f;
        r.useEffect(() => {
          h && u.trackExposure({ guildId: e, location: "747eb3_1" });
        }, [e, h]);
        let { enableLowerMemberCountReq: x } = u.useExperiment(
          { guildId: e, location: "747eb3_2" },
          { autoTrackExposure: !1, disable: !h },
        );
        return x;
      }
    },
    296386: function (e, n, t) {
      t.d(n, {
        J9: function () {
          return h;
        },
        K0: function () {
          return _;
        },
        Kq: function () {
          return v;
        },
        P$: function () {
          return g;
        },
        TA: function () {
          return m;
        },
        Vv: function () {
          return b;
        },
        W1: function () {
          return x;
        },
        aC: function () {
          return d;
        },
        i3: function () {
          return u;
        },
        le: function () {
          return c;
        },
        mA: function () {
          return p;
        },
        t$: function () {
          return C;
        },
        zH: function () {
          return f;
        },
      });
      var r = t(544891),
        a = t(570140),
        i = t(706454),
        s = t(683301),
        o = t(150192),
        l = t(981631);
      async function c() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = i.default.locale,
          c = n && !s.ZP.getIsReady();
        if (t === o.Z.getFetchedLocale() && !c) return;
        let d = await r.tn.get({
          url: l.ANM.GUILD_DISCOVERY_CATEGORIES,
          query: { locale: t, primary_only: e },
          oldFormErrors: !0,
        });
        a.Z.dispatch({
          type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS",
          categories: d.body,
          locale: t,
          forClanDiscovery: n,
        });
      }
      async function d(e) {
        try {
          let {
              primary_category_id: n,
              category_ids: t,
              keywords: i,
              emoji_discoverability_enabled: s,
              partner_actioned_timestamp: o,
              partner_application_timestamp: c,
              is_published: d,
              reasons_to_join: u,
              social_links: m,
              about: f,
            } = (
              await r.tn.get({
                url: l.ANM.GUILD_DISCOVERY_METADATA(e),
                oldFormErrors: !0,
              })
            ).body,
            h = {
              primaryCategoryId: n,
              secondaryCategoryIds: t,
              keywords: i,
              emojiDiscoverabilityEnabled: s,
              partnerActionedTimestamp: o,
              partnerApplicationTimestamp: c,
              isPublished: d,
              reasonsToJoin: u,
              socialLinks: m,
              about: f,
            };
          return (
            a.Z.dispatch({
              type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
              guildId: e,
              metadata: h,
            }),
            h
          );
        } catch (e) {
          a.Z.dispatch({ type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL" });
        }
      }
      async function u(e) {
        try {
          let n = (await r.tn.get({ url: l.ANM.GUILD_DISCOVERY_SLUG(e) })).body
            .slug;
          a.Z.dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS", slug: n });
        } catch {
          a.Z.dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL", guildId: e });
        }
      }
      function m(e, n) {
        a.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          primaryCategoryId: n,
        });
      }
      function f(e, n) {
        a.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          keywords: n,
        });
      }
      function h(e, n) {
        a.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          emojiDiscoverabilityEnabled: n,
        });
      }
      function x(e, n) {
        a.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          isPublished: n,
        });
      }
      function p(e, n) {
        a.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          about: n,
        });
      }
      function g(e, n) {
        a.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          reasonsToJoin: n,
        });
      }
      function C(e, n) {
        a.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          socialLinks: n,
        });
      }
      async function b(e) {
        let {
          guildId: n,
          primaryCategoryId: t,
          keywords: i,
          emojiDiscoverabilityEnabled: s,
          partnerActionedTimestamp: o,
          partnerApplicationTimestamp: c,
          isPublished: d,
          reasonsToJoin: u,
          socialLinks: m,
          about: f,
        } = e;
        try {
          let {
            primary_category_id: e,
            category_ids: h,
            keywords: x,
            emoji_discoverability_enabled: p,
            partner_actioned_timestamp: g,
            partner_application_timestamp: C,
            is_published: b,
            reasons_to_join: v,
            social_links: _,
            about: y,
          } = (
            await r.tn.patch({
              url: l.ANM.GUILD_DISCOVERY_METADATA(n),
              body: {
                primary_category_id: t,
                emoji_discoverability_enabled: s,
                partner_actioned_timestamp: o,
                partner_application_timestamp: c,
                keywords: i,
                is_published: d,
                reasons_to_join: u,
                social_links: m,
                about: f,
              },
              oldFormErrors: !0,
            })
          ).body;
          a.Z.dispatch({
            type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
            guildId: n,
            metadata: {
              primaryCategoryId: e,
              secondaryCategoryIds: h,
              keywords: x,
              emojiDiscoverabilityEnabled: p,
              partnerActionedTimestamp: g,
              partnerApplicationTimestamp: C,
              isPublished: b,
              reasonsToJoin: v,
              socialLinks: _,
              about: y,
            },
          });
        } catch (e) {
          throw (
            (a.Z.dispatch({
              type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
              guildId: n,
              errors: e.body,
            }),
            e)
          );
        }
      }
      function v(e, n) {
        r.tn
          .put({
            url: l.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, n),
            oldFormErrors: !0,
          })
          .then(() => {
            a.Z.dispatch({
              type: "GUILD_DISCOVERY_CATEGORY_ADD",
              guildId: e,
              categoryId: n,
            });
          })
          .catch((n) => {
            a.Z.dispatch({
              type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
              guildId: e,
              errors: n.body,
            });
          });
      }
      function _(e, n) {
        r.tn
          .del({
            url: l.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, n),
            oldFormErrors: !0,
          })
          .then(() => {
            a.Z.dispatch({
              type: "GUILD_DISCOVERY_CATEGORY_DELETE",
              guildId: e,
              categoryId: n,
            });
          })
          .catch((n) => {
            a.Z.dispatch({
              type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
              guildId: e,
              errors: n.body,
            });
          });
      }
    },
    150192: function (e, n, t) {
      t.d(n, {
        j: function () {
          return h;
        },
      }),
        t(653041),
        t(47120);
      var r,
        a,
        i,
        s,
        o = t(392711),
        l = t.n(o),
        c = t(442837),
        d = t(570140),
        u = t(823379),
        m = t(731455),
        f = t(388032);
      function h(e, n) {
        return l().isEqual(
          e.map((e) => [e.categoryId, e.name]),
          n.map((e) => [e.categoryId, e.name]),
        );
      }
      let x = null,
        p = [],
        g = [],
        C = {};
      class b extends (r = c.ZP.Store) {
        getPrimaryCategories() {
          return p;
        }
        getDiscoveryCategories() {
          let e = m.L3.map((e) => g.find((n) => n.categoryId === e)).filter(
            u.lm,
          );
          return [{ categoryId: m.Hk, name: f.intl.string(f.t.Ym2Ri4) }, ...e];
        }
        getClanDiscoveryCategories() {
          let e = m.L3.map((e) => g.find((n) => n.categoryId === e)).filter(
            u.lm,
          );
          return [{ categoryId: m.Hk, name: f.intl.string(f.t.QToH29) }, ...e];
        }
        getAllCategories() {
          return g;
        }
        getFetchedLocale() {
          return x;
        }
        getCategoryName(e) {
          return e === m.Hk ? f.intl.string(f.t.Ym2Ri4) : C[e];
        }
      }
      (s = "GuildDiscoveryCategoryStore"),
        (i = "displayName") in (a = b)
          ? Object.defineProperty(a, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[i] = s),
        (n.Z = new b(d.Z, {
          GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
            let n,
              { categories: t, locale: r } = e,
              a = [],
              i = [];
            if (
              (t
                .sort((e, n) => (e.name < n.name ? -1 : 1))
                .forEach((e) => {
                  let { id: t, name: r, is_primary: s } = e;
                  if (t !== m.o3) {
                    if (t === m.dc) {
                      n = { categoryId: t, name: r };
                      return;
                    }
                    !0 === s && a.push({ categoryId: t, name: r }),
                      i.push({ categoryId: t, name: r }),
                      (C[t] = r);
                  }
                }),
              null != n)
            ) {
              let { categoryId: e, name: t } = n;
              a.push({ categoryId: e, name: t }), (C[e] = t);
            }
            (x = r), (p = a), (g = i);
          },
        }));
    },
    11265: function (e, n, t) {
      t(47120);
      var r = t(200651),
        a = t(192379),
        i = t(120356),
        s = t.n(i),
        o = t(100621),
        l = t(481060),
        c = t(393238),
        d = t(388032),
        u = t(379e3);
      n.Z = a.memo(function (e) {
        let {
            renderHeader: n,
            children: t,
            isExpanded: i,
            isStuck: m,
            onExpand: f,
            disableAnimation: h,
            disableBackground: x,
          } = e,
          [p, g] = a.useState(!0),
          [C, b] = a.useState(!1),
          { ref: v, height: _ = 0 } = (0, c.Z)(),
          { ref: y, height: T = 0 } = (0, c.Z)(),
          [I, j] = a.useState(i),
          N = (0, l.useSpring)(
            {
              height: I ? T + _ : _,
              config: { ...o.config.stiff, clamp: !0 },
              onStart: () => {
                b(!1);
              },
              onRest: () => {
                b(!0);
              },
            },
            p || h ? "animate-never" : "respect-motion-settings",
          );
        return (
          a.useLayoutEffect(() => {
            b(!1), j(i);
          }, [i]),
          a.useLayoutEffect(() => {
            let e = setTimeout(() => {
              g(!1);
            }, 100);
            return () => clearTimeout(e);
          }, []),
          (0, r.jsx)(l.Clickable, {
            className: s()(u.editCard, { [u.toggled]: i, [u.noBackground]: x }),
            children: (0, r.jsxs)(o.animated.div, {
              className: s()(u.contentExpandContainer, {
                [u.showOverflow]: i && C,
              }),
              style: N,
              children: [
                (0, r.jsx)(l.Clickable, {
                  innerRef: v,
                  onClick: m ? void 0 : f,
                  className: s()(u.innerHeader, { [u.toggled]: i && m }),
                  "aria-label": d.intl.string(d.t.dcl9MT),
                  children: n,
                }),
                (0, r.jsx)("div", { ref: y, children: t }),
              ],
            }),
          })
        );
      });
    },
    983736: function (e, n, t) {
      t.d(n, {
        OA: function () {
          return s;
        },
        _C: function () {
          return l;
        },
        kT: function () {
          return o;
        },
      });
      var r = t(823379),
        a = t(246364),
        i = t(592286);
      let s = (e) => {
        let { required: n, response: t, field_type: i } = e;
        if (!n) return !0;
        if (null == t) return !1;
        switch (i) {
          case a.QJ.TERMS:
          case a.QJ.VERIFICATION:
            return !!t;
          case a.QJ.TEXT_INPUT:
          case a.QJ.PARAGRAPH:
            return "string" == typeof t && "" !== t.trim();
          case a.QJ.MULTIPLE_CHOICE:
            return "number" == typeof t;
          default:
            return (0, r.vE)(i);
        }
      };
      function o(e) {
        return i.lI.has(null == e ? void 0 : e.field_type);
      }
      function l(e) {
        return i.hZ.has(null == e ? void 0 : e.field_type);
      }
    },
    571728: function (e, n, t) {
      t.d(n, {
        A: function () {
          return i;
        },
      });
      var r = t(442837),
        a = t(826581);
      function i(e) {
        let { guildId: n } = e;
        return (0, r.e7)(
          [a.Z],
          () => a.Z.getSubmittedGuildJoinRequestTotal(n),
          [n],
        );
      }
    },
    489813: function (e, n, t) {
      t.d(n, {
        Ih: function () {
          return l;
        },
        PU: function () {
          return c;
        },
        hK: function () {
          return o;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(692547),
        i = t(481060),
        s = t(626166);
      function o(e) {
        let { title: n, children: t } = e;
        return (0, r.jsxs)("div", {
          className: s.questionContainer,
          children: [
            (0, r.jsx)(i.Text, {
              className: s.questionTitle,
              variant: "text-md/semibold",
              color: "header-primary",
              children: n,
            }),
            t,
          ],
        });
      }
      function l(e) {
        let { icon: n, text: t, meetsRequirement: o } = e;
        return (0, r.jsxs)("div", {
          className: s.requirementContainer,
          children: [
            (0, r.jsx)(n, {
              className: s.requirementIcon,
              height: 20,
              width: 20,
              size: "custom",
              color: "currentColor",
            }),
            (0, r.jsx)(i.Text, {
              className: s.requirementText,
              variant: "text-md/normal",
              children: t,
            }),
            o
              ? (0, r.jsx)(i.CircleCheckIcon, {
                  size: "md",
                  color: "currentColor",
                  className: s.requirementSuccess,
                  secondaryColor: a.Z.colors.WHITE.css,
                })
              : (0, r.jsx)(i.CircleXIcon, {
                  size: "md",
                  color: "currentColor",
                  className: s.requirementFailure,
                  secondaryColor: a.Z.colors.WHITE.css,
                }),
          ],
        });
      }
      function c(e) {
        let {
          icon: n,
          text: t,
          footnote: o,
          meetsRequirement: l,
          children: c,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: s.requirementContainer,
              children: [
                (0, r.jsx)(n, {
                  className: s.requirementIcon,
                  height: 20,
                  width: 20,
                  size: "custom",
                  color: "currentColor",
                }),
                (0, r.jsx)(i.Text, {
                  className: s.requirementText,
                  variant: "text-md/normal",
                  children: t,
                }),
                l
                  ? (0, r.jsx)(i.CircleCheckIcon, {
                      size: "md",
                      color: "currentColor",
                      className: s.requirementSuccess,
                      secondaryColor: a.Z.colors.WHITE.css,
                    })
                  : c,
              ],
            }),
            null != o &&
              (0, r.jsx)(i.Text, {
                color: "header-secondary",
                className: s.footnote,
                variant: "text-xs/normal",
                children: o,
              }),
          ],
        });
      }
    },
    186078: function (e, n, t) {
      t.d(n, {
        BO: function () {
          return u;
        },
        QH: function () {
          return m;
        },
        sp: function () {
          return f;
        },
      });
      var r = t(200651),
        a = t(192379),
        i = t(120356),
        s = t.n(i),
        o = t(481060),
        l = t(489813),
        c = t(707592),
        d = t(738912);
      function u(e) {
        let {
            disabled: n,
            field: t,
            value: i,
            radioItemClassName: l,
            radioItemIconClassName: c,
            onChange: u,
          } = e,
          { choices: m } = t,
          f = a.useMemo(
            () =>
              m.map((e, n) => ({
                name: e,
                value: n,
                radioItemIconClassName: s()(d.multipleChoiceIcon, c),
              })),
            [m, c],
          );
        return (0, r.jsx)(o.RadioGroup, {
          disabled: n,
          options: f,
          value: i,
          onChange: u,
          radioItemClassName: l,
          withTransparentBackground: !0,
        });
      }
      function m(e) {
        let { formField: n } = e,
          t = null != n.response ? n.choices[n.response] : "";
        return (0, r.jsx)(l.hK, {
          title: n.label,
          children: (0, r.jsx)(c.Gi, {
            className: d.fieldBackground,
            value: t,
            disabled: !0,
          }),
        });
      }
      function f(e) {
        let { formField: n, onChange: t } = e;
        return (0, r.jsx)(l.hK, {
          title: n.label,
          children: (0, r.jsx)(u, {
            radioItemClassName: d.fieldBackground,
            field: n,
            value: n.response,
            onChange: t,
          }),
        });
      }
    },
    73880: function (e, n, t) {
      t.d(n, {
        Q8: function () {
          return d;
        },
        jn: function () {
          return u;
        },
        lX: function () {
          return m;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(120356),
        i = t.n(a),
        s = t(481060),
        o = t(489813),
        l = t(592286),
        c = t(738912);
      function d(e) {
        let {
          value: n,
          placeholder: t,
          onChange: a,
          disabled: o,
          className: d,
          autofocus: u,
        } = e;
        return (0, r.jsx)(s.TextArea, {
          className: i()(c.paragraphFieldBody, d),
          maxLength: l.RS,
          value: null != n ? n : "",
          placeholder: null != t ? t : "",
          onChange: a,
          disabled: o,
          autoFocus: u,
          autosize: !0,
        });
      }
      function u(e) {
        let { formField: n } = e;
        return (0, r.jsx)(o.hK, {
          title: n.label,
          children: (0, r.jsx)(d, {
            className: c.fieldBackground,
            value: n.response,
            disabled: !0,
          }),
        });
      }
      function m(e) {
        let { formField: n, autofocus: t, onChange: a } = e;
        return (0, r.jsx)(o.hK, {
          title: n.label,
          children: (0, r.jsx)(d, {
            className: c.fieldBackground,
            value: n.response,
            onChange: a,
            autofocus: t,
          }),
        });
      }
    },
    196345: function (e, n, t) {
      t.d(n, {
        EK: function () {
          return u;
        },
        G0: function () {
          return m;
        },
        QC: function () {
          return f;
        },
        dd: function () {
          return h;
        },
      }),
        t(47120);
      var r = t(200651);
      t(192379);
      var a = t(120356),
        i = t.n(a),
        s = t(481060),
        o = t(454585),
        l = t(489813),
        c = t(388032),
        d = t(738912);
      function u(e) {
        let { terms: n, channelId: t, className: a } = e;
        return (0, r.jsx)("div", {
          className: i()(d.termsFieldBody, a),
          children: n.map((e, n) =>
            (0, r.jsxs)(
              "div",
              {
                className: d.termsRow,
                children: [
                  (0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: "".concat(n + 1, "."),
                  }),
                  (0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: d.termsRowContent,
                    children: o.Z.parseGuildVerificationFormRule(e, !0, {
                      channelId: t,
                    }),
                  }),
                ],
              },
              "term-".concat(n),
            ),
          ),
        });
      }
      function m(e) {
        let { onChange: n, checked: t, disabled: a } = e;
        return (0, r.jsx)(s.Checkbox, {
          size: 20,
          type: s.Checkbox.Types.INVERTED,
          value: t,
          onChange: n,
          disabled: a,
          style: { borderWidth: 2 },
          className: d.checkbox,
          children: (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: c.intl.string(c.t["2EXfGB"]),
          }),
        });
      }
      function f(e) {
        let { formField: n } = e;
        return (0, r.jsx)(l.Ih, {
          icon: s.BookCheckIcon,
          text: c.intl.string(c.t["2xbmoK"]),
          meetsRequirement: !!n.response,
        });
      }
      let h = (e) => {
        let { channelId: n, formField: t, onChange: a } = e;
        return (0, r.jsxs)(l.hK, {
          title: c.intl.string(c.t.Q8OFNz),
          children: [
            (0, r.jsx)(u, {
              className: d.fieldBackground,
              terms: t.values,
              channelId: n,
            }),
            (0, r.jsx)(m, { onChange: a, checked: t.response }),
          ],
        });
      };
    },
    707592: function (e, n, t) {
      t.d(n, {
        Gi: function () {
          return d;
        },
        YJ: function () {
          return u;
        },
        zY: function () {
          return m;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(120356),
        i = t.n(a),
        s = t(481060),
        o = t(489813),
        l = t(592286),
        c = t(738912);
      function d(e) {
        let {
          value: n,
          placeholder: t,
          onChange: a,
          disabled: o,
          autofocus: d,
          className: u,
        } = e;
        return (0, r.jsx)(s.TextInput, {
          inputClassName: i()(c.textInputFieldBodyInput, u),
          maxLength: l.tL,
          value: null != n ? n : "",
          placeholder: t,
          onChange: a,
          disabled: o,
          autoFocus: d,
        });
      }
      function u(e) {
        let { formField: n } = e;
        return (0, r.jsx)(o.hK, {
          title: n.label,
          children: (0, r.jsx)(s.TextArea, {
            className: i()(c.textInputFieldBodyInput, c.fieldBackground),
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
          }),
        });
      }
      function m(e) {
        let { formField: n, autofocus: t, onChange: a } = e;
        return (0, r.jsx)(o.hK, {
          title: n.label,
          children: (0, r.jsx)(d, {
            className: c.fieldBackground,
            onChange: a,
            value: n.response,
            autofocus: t,
          }),
        });
      }
    },
    5056: function (e, n, t) {
      var r = t(200651),
        a = t(192379),
        i = t(120356),
        s = t.n(i),
        o = t(481060),
        l = t(838221),
        c = t(246364),
        d = t(700833),
        u = t(388032),
        m = t(631403);
      function f(e) {
        let { onClick: n, text: t, icon: a } = e;
        return (0, r.jsx)("div", {
          className: m.addFormFieldContainer,
          children: (0, r.jsxs)(o.Clickable, {
            className: m.addFormField,
            onClick: n,
            children: [
              (0, r.jsx)(a, {
                className: m.icon,
                size: "xs",
                color: "currentColor",
              }),
              (0, r.jsx)(o.FormText, {
                className: m.addFormFieldText,
                children: t,
              }),
            ],
          }),
        });
      }
      n.Z = function (e) {
        let {
            addFormField: n,
            showManualApprovalWarning: i,
            guild: h,
            showHeader: x,
          } = e,
          p = a.useCallback(
            (e) => {
              (0, d.Md)(e, n, h);
            },
            [n, h],
          ),
          g = a.useCallback(
            (e) => {
              i
                ? (0, o.openModalLazy)(async () => {
                    let { default: n } = await t
                      .e("54845")
                      .then(t.bind(t, 199836));
                    return (t) => (0, r.jsx)(n, { ...t, onSubmit: () => p(e) });
                  })
                : p(e);
            },
            [i, p],
          );
        return (0, r.jsxs)("div", {
          className: s()(m.spacingContainer, m.backgroundContainer),
          children: [
            x &&
              (0, r.jsx)("div", {
                className: m.containerTopHat,
                children: (0, r.jsx)(o.Text, {
                  className: m.containerTopHatText,
                  variant: "text-xs/bold",
                  color: "header-secondary",
                  children: u.intl.string(u.t.neG9U1),
                }),
              }),
            (0, r.jsxs)("div", {
              className: m.leftRailIconContainer,
              children: [
                (0, r.jsx)("div", {
                  className: m.iconContainer,
                  children: (0, r.jsx)(o.PlusSmallIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 18,
                    height: 20,
                    className: m.icon,
                  }),
                }),
                (0, r.jsxs)(o.FormSection, {
                  children: [
                    (0, r.jsx)(o.FormTitle, {
                      tag: "h3",
                      className: m.leftRailIconContainerTitle,
                      children: u.intl.string(u.t["7v2xvr"]),
                    }),
                    (0, r.jsx)(o.FormText, {
                      className: m.leftRailIconContainerDescription,
                      type: o.FormText.Types.DESCRIPTION,
                      children: u.intl.string(u.t.DyARHR),
                    }),
                    (0, r.jsx)(f, {
                      formFieldType: c.QJ.TEXT_INPUT,
                      addFormField: n,
                      icon: (0, o.makeIconCompat)(l.Z),
                      text: u.intl.string(u.t.w6Q9w8),
                      onClick: () => g(c.QJ.TEXT_INPUT),
                    }),
                    (0, r.jsx)(f, {
                      formFieldType: c.QJ.PARAGRAPH,
                      addFormField: n,
                      icon: o.ChannelListIcon,
                      text: u.intl.string(u.t.gG0JBA),
                      onClick: () => g(c.QJ.PARAGRAPH),
                    }),
                    (0, r.jsx)(f, {
                      formFieldType: c.QJ.MULTIPLE_CHOICE,
                      addFormField: n,
                      icon: o.ListBulletsIcon,
                      text: u.intl.string(u.t.ooKh3t),
                      onClick: () => g(c.QJ.MULTIPLE_CHOICE),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    565321: function (e, n, t) {
      t(47120);
      var r = t(200651),
        a = t(192379),
        i = t(481060),
        s = t(881052),
        o = t(484455),
        l = t(592286),
        c = t(388032),
        d = t(631403);
      n.Z = function (e) {
        let { guildId: n, onSave: t, formDescription: u, disable: m } = e,
          [f, h] = a.useState(null),
          [x, p] = a.useState(u),
          g = a.useRef(!1),
          C = a.useRef(!1);
        a.useEffect(
          () => () => {
            C.current = !0;
          },
          [],
        );
        let b = a.useCallback(async () => {
          if (!g.current) {
            h(null);
            try {
              await t(n, x);
            } catch (e) {
              if (C.current) return;
              h(new s.Hx(e).getAnyErrorMessage());
            } finally {
              if (C.current) return;
              g.current = !1;
            }
          }
        }, [x, n, t]);
        return (0, r.jsxs)(o.Z, {
          title: c.intl.string(c.t.aDJAfn),
          children: [
            (0, r.jsx)(i.TextArea, {
              className: d.fieldBackground,
              maxLength: l.Us,
              value: null != x ? x : "",
              placeholder: c.intl.string(c.t.AJfv3d),
              onChange: (e) => {
                p(e);
              },
              onBlur: b,
              autosize: !0,
              disabled: m,
            }),
            null != f && "" !== f
              ? (0, r.jsx)(i.Text, {
                  className: d.errorText,
                  variant: "text-xs/normal",
                  color: "text-danger",
                  children: f,
                })
              : null,
          ],
        });
      };
    },
    297619: function (e, n, t) {
      var r = t(200651);
      t(192379);
      var a = t(120356),
        i = t.n(a),
        s = t(481060),
        o = t(246364),
        l = t(700833),
        c = t(388032),
        d = t(631403);
      n.Z = function (e) {
        let { addFormField: n, guild: t } = e;
        return (0, r.jsxs)("div", {
          className: i()(
            d.spacingContainer,
            d.leftRailIconContainer,
            d.backgroundContainer,
          ),
          children: [
            (0, r.jsx)("div", {
              className: d.iconContainer,
              children: (0, r.jsx)(s.BookCheckIcon, {
                size: "custom",
                color: "currentColor",
                width: 18,
                height: 20,
                className: d.icon,
              }),
            }),
            (0, r.jsxs)(s.FormSection, {
              children: [
                (0, r.jsx)(s.FormTitle, {
                  tag: "h3",
                  className: d.leftRailIconContainerTitle,
                  children: c.intl.string(c.t.qWqnws),
                }),
                (0, r.jsx)(s.FormText, {
                  className: d.leftRailIconContainerDescription,
                  type: s.FormText.Types.DESCRIPTION,
                  children: c.intl.string(c.t["3+rPkp"]),
                }),
                (0, r.jsx)(s.Button, {
                  onClick: () => (0, l.Md)(o.QJ.TERMS, n, t),
                  children: c.intl.string(c.t["5AelkZ"]),
                }),
              ],
            }),
          ],
        });
      };
    },
    405545: function (e, n, t) {
      var r = t(200651);
      t(192379);
      var a = t(120356),
        i = t.n(a),
        s = t(186078),
        o = t(137158),
        l = t(631403);
      n.Z = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: a,
            isDropHovered: c,
            onDrop: d,
            onEdit: u,
            onRemove: m,
            canRemove: f,
            actionsLocation: h,
          } = e,
          { label: x } = n;
        return (0, r.jsx)(o.Z, {
          field: n,
          index: t,
          isDragEnabled: a,
          isDropHovered: c,
          onDrop: d,
          onEdit: u,
          onRemove: m,
          title: x,
          canRemove: f,
          actionsLocation: h,
          children: (0, r.jsx)(s.BO, {
            field: n,
            value: void 0,
            radioItemClassName: i()(
              l.fieldBackground,
              l.multipleChoiceFixedTextColor,
            ),
            disabled: !1,
          }),
        });
      };
    },
    137158: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      }),
        t(47120);
      var r = t(200651),
        a = t(192379),
        i = t(120356),
        s = t.n(i),
        o = t(392711),
        l = t(999153),
        c = t(584922),
        d = t(692547),
        u = t(481060),
        m = t(388032),
        f = t(631403);
      function h(e) {
        let {
          title: n,
          children: t,
          onEdit: a,
          onRemove: i,
          canRemove: o,
          actionsLocation: l,
        } = e;
        return (0, r.jsxs)("div", {
          className: f.backgroundContainer,
          children: [
            (0, r.jsxs)("div", {
              className: f.containerPadding,
              children: [
                (0, r.jsx)(u.FormTitle, {
                  tag: "h3",
                  className: f.containerTitle,
                  children: n,
                }),
                t,
              ],
            }),
            "footer" === l &&
              (0, r.jsxs)(u.FormSection, {
                className: f.containerFooter,
                children: [
                  (0, r.jsx)(u.Tooltip, {
                    text: m.intl.string(m.t.B3Jj1N),
                    shouldShow: !o,
                    children: (e) =>
                      (0, r.jsx)(u.Button, {
                        ...e,
                        className: s()(f.removeButton, f.button),
                        size: u.Button.Sizes.SMALL,
                        look: u.Button.Looks.BLANK,
                        onClick: i,
                        disabled: !o,
                        children: m.intl.string(m.t.N86XcH),
                      }),
                  }),
                  (0, r.jsx)(u.Button, {
                    className: f.button,
                    size: u.Button.Sizes.SMALL,
                    color: u.Button.Colors.PRIMARY,
                    onClick: a,
                    children: m.intl.string(m.t.bt75u7),
                  }),
                ],
              }),
          ],
        });
      }
      let x = "FORM_FIELD";
      function p(e) {
        let { index: n, field: t, isDropHovered: i, onDrop: m } = e,
          p = (0, o.debounce)(async (e, n, t) => {
            await m(e, n, t);
          }),
          g = a.useRef(null),
          [, C] = (0, l.c)({
            type: x,
            item: { index: n, field: t },
            end: (e, n) => {
              null != e && !n.didDrop() && p(e.field, null, !0);
            },
          }),
          [, b] = (0, c.L)({
            accept: x,
            hover: (e, t) => {
              var r;
              let { index: a } = e,
                i =
                  null === (r = g.current) || void 0 === r
                    ? void 0
                    : r.getBoundingClientRect(),
                s = t.getClientOffset();
              if (null == i || null == s) return;
              let o = (i.bottom - i.top) / 2,
                l = s.y - i.top;
              (!(a < n) || !(l < o)) &&
                (!(a > n) || !(l < o)) &&
                a !== n &&
                p(e.field, n, !1);
            },
            drop: (e) => {
              p(e.field, n, !0);
            },
          });
        return (
          a.useLayoutEffect(
            () => (
              C(b(g)),
              () => {
                b(null), C(null);
              }
            ),
            [C, b],
          ),
          (0, r.jsxs)("div", {
            ref: g,
            "data-dnd-name": "field-".concat(n),
            className: s()(f.dragContainer, { [f.dropHovered]: i }),
            children: [
              (0, r.jsx)("div", {
                className: f.dragIconContainer,
                children: (0, r.jsx)(u.DragIcon, {
                  size: "xs",
                  className: f.dragIcon,
                  color: d.Z.unsafe_rawColors.PRIMARY_400.css,
                }),
              }),
              (0, r.jsx)(h, { ...e }),
            ],
          })
        );
      }
      function g(e) {
        return (0, r.jsxs)("div", {
          className: f.formFieldContainer,
          children: [
            (0, r.jsx)("div", {
              className: f.spacingContainer,
              children: e.isDragEnabled
                ? (0, r.jsx)(p, { ...e })
                : (0, r.jsx)(h, { ...e }),
            }),
            "side" === e.actionsLocation &&
              (0, r.jsxs)("div", {
                className: f.actionButtonsContainer,
                children: [
                  (0, r.jsx)(u.Clickable, {
                    className: f.actionButton,
                    onClick: e.onEdit,
                    "aria-label": m.intl.string(m.t.bt75u7),
                    children: (0, r.jsx)(u.PencilIcon, { size: "xs" }),
                  }),
                  e.canRemove &&
                    (0, r.jsx)(u.Clickable, {
                      className: f.actionButton,
                      onClick: e.onRemove,
                      "aria-label": m.intl.string(m.t.N86XcH),
                      children: (0, r.jsx)(u.TrashIcon, { size: "xs" }),
                    }),
                ],
              }),
          ],
        });
      }
    },
    382574: function (e, n, t) {
      var r = t(200651);
      t(192379);
      var a = t(73880),
        i = t(137158),
        s = t(388032),
        o = t(631403);
      n.Z = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: c,
            onDrop: d,
            onEdit: u,
            onRemove: m,
            canRemove: f,
            actionsLocation: h,
          } = e,
          { label: x, placeholder: p } = n;
        return (0, r.jsx)(i.Z, {
          field: n,
          index: t,
          isDragEnabled: l,
          isDropHovered: c,
          onDrop: d,
          onEdit: u,
          onRemove: m,
          title: x,
          canRemove: f,
          actionsLocation: h,
          children: (0, r.jsx)(a.Q8, {
            className: o.fieldBackground,
            placeholder: null != p ? p : s.intl.string(s.t["Sqn+Wl"]),
            disabled: !0,
          }),
        });
      };
    },
    484455: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(120356),
        i = t.n(a),
        s = t(481060),
        o = t(631403);
      function l(e) {
        let { title: n, children: t } = e;
        return (0, r.jsxs)(s.FormSection, {
          className: i()(
            o.backgroundContainer,
            o.spacingContainer,
            o.containerPadding,
          ),
          children: [
            (0, r.jsx)(s.FormTitle, {
              tag: "h3",
              className: o.containerTitle,
              children: n,
            }),
            t,
          ],
        });
      }
    },
    279988: function (e, n, t) {
      t(47120);
      var r = t(200651);
      t(192379);
      var a = t(120356),
        i = t.n(a),
        s = t(692547),
        o = t(481060),
        l = t(259580),
        c = t(196345),
        d = t(137158),
        u = t(388032),
        m = t(631403);
      n.Z = function (e) {
        let {
            channelId: n,
            formField: t,
            index: a,
            isDragEnabled: f,
            isDropHovered: h,
            onDrop: x,
            onEdit: p,
            onRemove: g,
            canRemove: C,
            title: b,
            actionsLocation: v,
          } = e,
          _ = t.values,
          y = _.slice(0, 1),
          T = _.length - y.length;
        return (0, r.jsxs)(d.Z, {
          field: t,
          index: a,
          isDragEnabled: f,
          isDropHovered: h,
          onDrop: x,
          onEdit: p,
          onRemove: g,
          title: b,
          canRemove: C,
          actionsLocation: v,
          children: [
            (0, r.jsx)(c.EK, {
              className: i()(m.fieldBackground, { [m.withFooter]: 0 !== T }),
              terms: y,
              channelId: n,
            }),
            0 !== T &&
              (0, r.jsxs)(o.Clickable, {
                className: i()(m.fieldFooterContainer, m.clickable),
                onClick: p,
                children: [
                  (0, r.jsx)(o.FormText, {
                    className: m.clickable,
                    children: u.intl.format(u.t.jnhD0d, { count: T }),
                  }),
                  (0, r.jsx)(l.Z, {
                    className: m.termsFieldCaretIcon,
                    height: 14,
                    width: 14,
                    color: s.Z.unsafe_rawColors.WHITE_500.css,
                  }),
                ],
              }),
            (0, r.jsx)(c.G0, { disabled: !0, checked: !1 }),
          ],
        });
      };
    },
    786127: function (e, n, t) {
      var r = t(200651);
      t(192379);
      var a = t(707592),
        i = t(137158),
        s = t(388032),
        o = t(631403);
      n.Z = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: l,
            isDropHovered: c,
            onDrop: d,
            onEdit: u,
            onRemove: m,
            canRemove: f,
            actionsLocation: h,
          } = e,
          { label: x, placeholder: p } = n;
        return (0, r.jsx)(i.Z, {
          field: n,
          index: t,
          isDragEnabled: l,
          isDropHovered: c,
          onDrop: d,
          onEdit: u,
          onRemove: m,
          title: x,
          canRemove: f,
          actionsLocation: h,
          children: (0, r.jsx)(a.Gi, {
            className: o.fieldBackground,
            placeholder: null != p ? p : s.intl.string(s.t["Sqn+Wl"]),
            disabled: !0,
          }),
        });
      };
    },
    456935: function (e, n, t) {
      t.d(n, {
        I9: function () {
          return m;
        },
      });
      var r = t(200651),
        a = t(192379),
        i = t(692547),
        s = t(481060),
        o = t(496675),
        l = t(484455),
        c = t(981631),
        d = t(388032),
        u = t(631403);
      function m(e) {
        switch (e) {
          case c.sFg.LOW:
            return d.intl.string(d.t.SsCK8P);
          case c.sFg.MEDIUM:
            return d.intl.string(d.t.WwNoR0);
          case c.sFg.HIGH:
            return d.intl.string(d.t.I2jMUF);
          case c.sFg.VERY_HIGH:
            return d.intl.string(d.t.cJY8w8);
          default:
            return "";
        }
      }
      let f = {
        [c.sFg.NONE]: "",
        [c.sFg.LOW]: i.Z.unsafe_rawColors.GREEN_360.css,
        [c.sFg.MEDIUM]: i.Z.unsafe_rawColors.YELLOW_300.css,
        [c.sFg.HIGH]: i.Z.unsafe_rawColors.ORANGE_345.css,
        [c.sFg.VERY_HIGH]: i.Z.unsafe_rawColors.RED_400.css,
      };
      n.ZP = function (e) {
        let { guild: n } = e,
          i = o.Z.can(c.Plq.MANAGE_GUILD, n),
          h = n.verificationLevel,
          x = h === c.sFg.VERY_HIGH ? s.MobilePhoneIcon : s.EnvelopeIcon,
          p = a.useMemo(() => m(h), [h]),
          g = f[h],
          C = (0, r.jsx)("div", {
            className: u.verificationLevelTitle,
            children: d.intl.format(d.t.OpV87e, {
              verificationLevelHook: function () {
                return (0, r.jsx)(
                  s.Text,
                  {
                    className: u.verificationLevelHook,
                    style: { color: g },
                    variant: "text-sm/semibold",
                    children: p,
                  },
                  "hook",
                );
              },
            }),
          }),
          b =
            h === c.sFg.VERY_HIGH
              ? d.intl.string(d.t.IlXyd3)
              : d.intl.string(d.t.JlzMPj);
        return (0, r.jsx)(l.Z, {
          title: C,
          children: (0, r.jsxs)("div", {
            className: u.verificationContainer,
            children: [
              (0, r.jsx)(x, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: u.icon,
              }),
              (0, r.jsx)(s.Text, {
                className: u.guildVerificationText,
                variant: "text-sm/normal",
                children: b,
              }),
              i &&
                (0, r.jsx)(s.Clickable, {
                  className: u.iconInteractiveContainer,
                  onClick: () =>
                    (0, s.openModalLazy)(async () => {
                      let { default: e } = await t
                        .e("72458")
                        .then(t.bind(t, 694278));
                      return (t) => (0, r.jsx)(e, { ...t, guild: n });
                    }),
                  children: (0, r.jsx)(s.PencilIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                    className: u.iconInteractive,
                  }),
                }),
            ],
          }),
        });
      };
    },
    446945: function (e, n, t) {
      var r = t(200651);
      t(192379);
      var a = t(481060),
        i = t(239091),
        s = t(838221),
        o = t(246364),
        l = t(700833),
        c = t(388032),
        d = t(207029);
      function u(e) {
        let { addFormField: n, onSelect: t, guild: u } = e;
        return (0, r.jsx)(a.Menu, {
          navId: "add-questions",
          className: d.menu,
          onClose: i.Zy,
          "aria-label": c.intl.string(c.t.liqwPD),
          onSelect: t,
          children: (0, r.jsxs)(a.MenuGroup, {
            children: [
              (0, r.jsx)(a.MenuItem, {
                id: "text-input",
                icon: (0, a.makeIconCompat)(s.Z),
                label: c.intl.string(c.t.w6Q9w8),
                action: () => (0, l.Md)(o.QJ.TEXT_INPUT, n, u),
              }),
              (0, r.jsx)(a.MenuItem, {
                id: "paragraph",
                icon: a.ChannelListIcon,
                label: c.intl.string(c.t.gG0JBA),
                action: () => (0, l.Md)(o.QJ.PARAGRAPH, n, u),
              }),
              (0, r.jsx)(a.MenuItem, {
                id: "multiple-choice",
                icon: a.ListBulletsIcon,
                label: c.intl.string(c.t.ooKh3t),
                action: () => (0, l.Md)(o.QJ.MULTIPLE_CHOICE, n, u),
              }),
            ],
          }),
        });
      }
      n.Z = function (e) {
        let { addFormField: n, guild: t } = e,
          s = (e) => {
            (0, i.vq)(
              e,
              (e) => (0, r.jsx)(u, { ...e, addFormField: n, guild: t }),
              { position: "top", align: "center" },
            );
          };
        return (0, r.jsx)(a.Tooltip, {
          text: c.intl.string(c.t.nsI4dX),
          children: (e) =>
            (0, r.jsxs)(a.Clickable, {
              ...e,
              className: d.container,
              onClick: s,
              children: [
                (0, r.jsx)(a.PlusSmallIcon, {
                  size: "md",
                  color: "currentColor",
                  className: d.icon,
                }),
                (0, r.jsx)(a.Text, {
                  color: "interactive-active",
                  variant: "text-md/semibold",
                  children: c.intl.string(c.t.CoHdoK),
                }),
              ],
            }),
        });
      };
    },
    700833: function (e, n, t) {
      t.d(n, {
        Md: function () {
          return h;
        },
        a0: function () {
          return f;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(392711),
        i = t(481060),
        s = t(246364),
        o = t(405545),
        l = t(382574),
        c = t(279988),
        d = t(786127),
        u = t(981631),
        m = t(388032);
      function f(e) {
        let {
            dropHoveredIndex: n,
            formField: u,
            guild: f,
            index: h,
            isDragEnabled: p,
            submittedGuildJoinRequestsCount: g,
            removeFormField: C,
            updateFormField: b,
            updateFormFieldOrder: v,
            canRemove: _,
            actionsLocation: y,
          } = e,
          T = async () => {
            await C(h);
          },
          I = async (e) => {
            await b(h, e);
          },
          j = async (e, n, t) => {
            await v(e, n, t);
          },
          N = (0, a.uniqueId)(),
          S = n === h,
          E = {
            key: N,
            index: h,
            isDragEnabled: p,
            isDropHovered: S,
            onEdit: () => {
              0 === g
                ? x(u, I, f)
                : (0, i.openModalLazy)(async () => {
                    let { default: e } = await t
                      .e("74673")
                      .then(t.bind(t, 394045));
                    return (n) =>
                      (0, r.jsx)(e, {
                        ...n,
                        guildId: f.id,
                        submittedGuildJoinRequestsCount: g,
                        onConfirm: () => x(u, I, f),
                      });
                  });
            },
            onRemove: T,
            onDrop: j,
            canRemove: _,
            actionsLocation: y,
          };
        switch (u.field_type) {
          case s.QJ.TERMS:
            return (0, r.jsx)(c.Z, {
              channelId: f.rulesChannelId,
              title: m.intl.string(m.t["53vNcH"]),
              formField: u,
              ...E,
            });
          case s.QJ.PARAGRAPH:
            return (0, r.jsx)(l.Z, { formField: u, ...E });
          case s.QJ.TEXT_INPUT:
            return (0, r.jsx)(d.Z, { formField: u, ...E });
          case s.QJ.MULTIPLE_CHOICE:
            return (0, r.jsx)(o.Z, { formField: u, ...E });
          default:
            return null;
        }
      }
      function h(e, n, a) {
        let o = { onCloseRequest: u.dG4 };
        switch (e) {
          case s.QJ.TERMS:
            return (0, i.openModalLazy)(async () => {
              let { default: e } = await t.e("5945").then(t.bind(t, 92451));
              return (t) =>
                (0, r.jsx)(e, { ...t, field: void 0, onSave: n, guild: a });
            }, o);
          case s.QJ.PARAGRAPH:
            return (0, i.openModalLazy)(async () => {
              let { ParagraphFormFieldModal: e } = await t
                .e("6595")
                .then(t.bind(t, 457042));
              return (t) => (0, r.jsx)(e, { ...t, field: void 0, onSave: n });
            }, o);
          case s.QJ.TEXT_INPUT:
            return (0, i.openModalLazy)(async () => {
              let { TextInputFormFieldModal: e } = await t
                .e("6595")
                .then(t.bind(t, 457042));
              return (t) => (0, r.jsx)(e, { ...t, field: void 0, onSave: n });
            }, o);
          case s.QJ.MULTIPLE_CHOICE:
            return (0, i.openModalLazy)(async () => {
              let { default: e } = await t.e("94064").then(t.bind(t, 607569));
              return (t) => (0, r.jsx)(e, { ...t, field: void 0, onSave: n });
            }, o);
        }
      }
      function x(e, n, a) {
        let o = { onCloseRequest: u.dG4 };
        switch (e.field_type) {
          case s.QJ.TERMS:
            return (0, i.openModalLazy)(async () => {
              let { default: i } = await t.e("5945").then(t.bind(t, 92451));
              return (t) =>
                (0, r.jsx)(i, { ...t, field: e, onSave: n, guild: a });
            }, o);
          case s.QJ.PARAGRAPH:
            return (0, i.openModalLazy)(async () => {
              let { ParagraphFormFieldModal: a } = await t
                .e("6595")
                .then(t.bind(t, 457042));
              return (t) => (0, r.jsx)(a, { ...t, field: e, onSave: n });
            }, o);
          case s.QJ.TEXT_INPUT:
            return (0, i.openModalLazy)(async () => {
              let { TextInputFormFieldModal: a } = await t
                .e("6595")
                .then(t.bind(t, 457042));
              return (t) => (0, r.jsx)(a, { ...t, field: e, onSave: n });
            }, o);
          case s.QJ.MULTIPLE_CHOICE:
            return (0, i.openModalLazy)(async () => {
              let { default: a } = await t.e("94064").then(t.bind(t, 607569));
              return (t) => (0, r.jsx)(a, { ...t, field: e, onSave: n });
            }, o);
        }
      }
    },
    755340: function (e, n, t) {
      t(47120);
      var r = t(200651),
        a = t(192379),
        i = t(442837),
        s = t(481060),
        o = t(496675),
        l = t(246364),
        c = t(983736),
        d = t(5056),
        u = t(565321),
        m = t(297619),
        f = t(456935),
        h = t(446945),
        x = t(700833),
        p = t(592286),
        g = t(981631),
        C = t(388032);
      n.Z = function (e) {
        let {
            guild: n,
            submittedGuildJoinRequestsCount: t,
            onFormFieldUpdate: b,
            hideVerificationLevelField: v,
            isClanContext: _,
            formDescription: y,
            onFieldsSave: T,
            onDescriptionSave: I,
          } = e,
          j = a.useRef(!1),
          [N, S] = a.useState(null),
          [E, k] = a.useState(e.formFields);
        a.useEffect(() => k(e.formFields), [e.formFields]);
        let A = a.useRef(e.formFields),
          w = a.useMemo(() => E.filter(c.kT), [E]),
          M = a.useMemo(() => E.filter(c._C), [E]),
          R = M.length,
          D = a.useMemo(() => E.length === p.nx, [E]),
          Z = a.useMemo(() => E.some(l.J), [E]),
          L = a.useMemo(() => E.some((e) => !(0, l.J)(e)), [E]),
          O = R > 0,
          P = n.hasFeature(g.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || _,
          F = a.useCallback(() => {
            (0, s.showToast)(
              (0, s.createToast)(
                C.intl.string(C.t.R0RpRU),
                s.ToastType.FAILURE,
              ),
            );
          }, []),
          G = (0, i.e7)([o.Z], () => o.Z.can(g.Plq.MANAGE_GUILD, n)),
          B = a.useCallback(
            async (e) => {
              if (!j.current) {
                (j.current = !0),
                  _ && (e = e.filter((e) => e.field_type !== l.QJ.TERMS));
                try {
                  await T(n.id, e), b(), k(e), (A.current = e);
                } catch (e) {
                  throw (k(A.current), e);
                } finally {
                  null != N && S(null), (j.current = !1);
                }
              }
            },
            [N, n.id, b, T, _],
          ),
          H = a.useCallback(
            async (e) => {
              let n = e.field_type === l.QJ.TERMS ? [e, ...E] : [...E, e];
              await B(n);
            },
            [E, B],
          ),
          U = a.useCallback(
            async (e, n) => {
              if (E[e] === n) return;
              let t = [...E];
              (t[e] = n), await B(t);
            },
            [E, B],
          ),
          W = a.useCallback(
            async (e, n, t) => {
              let r = E.indexOf(e),
                a = [...E];
              if (
                (null != n &&
                  n !== r &&
                  (a.splice(r, 1), a.splice(n, 0, e), k(a)),
                t)
              )
                try {
                  await B(a), null !== N && S(null);
                } catch (e) {
                  F();
                }
              else N !== n && S(n);
            },
            [N, E, B, F],
          ),
          q = a.useCallback(
            async (e) => {
              try {
                await B([...E.slice(0, e), ...E.slice(e + 1)]);
              } catch (e) {
                F();
              }
            },
            [E, B, F],
          ),
          z = G ? (_ ? "side" : "footer") : "none",
          K = (0, r.jsxs)(r.Fragment, {
            children: [
              !v && (0, r.jsx)(f.ZP, { guild: n }),
              (0, r.jsx)(u.Z, {
                formDescription: y,
                guildId: n.id,
                onSave: I,
                disable: !G,
              }),
              G && !Z && !D && (0, r.jsx)(m.Z, { addFormField: H, guild: n }),
              w.map((e) =>
                (0, x.a0)({
                  dropHoveredIndex: N,
                  formField: e,
                  guild: n,
                  index: E.indexOf(e),
                  isDragEnabled: !1,
                  submittedGuildJoinRequestsCount: t,
                  removeFormField: q,
                  updateFormField: U,
                  updateFormFieldOrder: W,
                  canRemove: !0,
                  actionsLocation: z,
                }),
              ),
            ],
          });
        return P
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                !_ && K,
                !L &&
                  (0, r.jsx)(d.Z, {
                    addFormField: H,
                    showManualApprovalWarning: !_ && !O,
                    guild: n,
                    showHeader: !_,
                  }),
                M.map((e) =>
                  (0, x.a0)({
                    dropHoveredIndex: N,
                    formField: e,
                    guild: n,
                    index: E.indexOf(e),
                    isDragEnabled: O && G,
                    submittedGuildJoinRequestsCount: t,
                    removeFormField: q,
                    updateFormField: U,
                    updateFormFieldOrder: W,
                    canRemove: !(_ && M.length <= 1) && G,
                    actionsLocation: z,
                  }),
                ),
                L && !D && G && (0, r.jsx)(h.Z, { addFormField: H, guild: n }),
              ],
            })
          : K;
      };
    },
    449226: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(120356),
        i = t.n(a),
        s = t(481060),
        o = t(176981);
      function l(e) {
        let {
            checked: n,
            onChange: t,
            disabled: a,
            className: l,
            tooltipProps: c,
          } = e,
          d = (e) => {
            e.stopPropagation(), e.preventDefault();
          };
        return (0, r.jsx)(s.Clickable, {
          onClick: d,
          onMouseDown: d,
          onMouseUp: d,
          className: i()(o.switch, l),
          ...c,
          children: (0, r.jsx)(s.Switch, {
            checked: n,
            onChange: t,
            disabled: a,
          }),
        });
      }
    },
    616230: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return y;
        },
      }),
        t(47120);
      var r = t(200651),
        a = t(192379),
        i = t(120356),
        s = t.n(i),
        o = t(442837),
        l = t(481060),
        c = t(11265),
        d = t(863249),
        u = t(944163),
        m = t(246364),
        f = t(571728),
        h = t(755340),
        x = t(449226),
        p = t(388032),
        g = t(176981),
        C = t(13441);
      function b(e) {
        let {
            guild: n,
            isExpanded: i,
            emptyFormFields: s,
            hasTermsField: o,
          } = e,
          c = n.hasVerificationGate(),
          [u, m] = a.useState(c),
          f = (e) => {
            e.preventDefault(), e.stopPropagation();
          },
          h = async (e) => {
            try {
              m(e), await d.ZP.enableVerificationForm(n.id, e);
            } catch {
              m(u);
            }
          },
          b = (e) => {
            e && s
              ? (0, l.openModalLazy)(async () => {
                  let { ConfirmModal: n } = await Promise.resolve().then(
                    t.bind(t, 481060),
                  );
                  return (t) =>
                    (0, r.jsx)(n, {
                      ...t,
                      header: p.intl.string(p.t.eSlxe3),
                      cancelText: p.intl.string(p.t.BvmRe3),
                      confirmText: p.intl.string(p.t.PYcfmp),
                      onConfirm: () => h(e),
                      children: (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: p.intl.string(p.t.uknrnp),
                      }),
                    });
                })
              : h(e);
          },
          v = () => {
            (0, l.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                t.e("80026"),
                t.e("36869"),
              ]).then(t.bind(t, 645264));
              return (t) =>
                (0, r.jsx)(e, { ...t, guildId: n.id, isPreview: !0 });
            });
          };
        return (0, r.jsxs)("div", {
          className: g.itemWrapper,
          children: [
            (0, r.jsxs)("div", {
              className: g.itemContent,
              children: [
                (0, r.jsx)(l.Heading, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: p.intl.string(p.t.NEXim5),
                }),
                (i || (s && !u)) &&
                  (0, r.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    children: p.intl.string(p.t["7W5uVl"]),
                  }),
                !i &&
                  (0, r.jsx)("div", {
                    className: C.pillRow,
                    children:
                      o &&
                      (0, r.jsxs)(l.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        className: g.valuePill,
                        children: [
                          (0, r.jsx)(l.BookCheckIcon, {
                            size: "custom",
                            color: "currentColor",
                            width: 16,
                            height: 16,
                          }),
                          p.intl.string(p.t.A2v22t),
                        ],
                      }),
                  }),
              ],
            }),
            (0, r.jsx)("div", {
              className: C.previewAndEnable,
              children:
                i || u || !s
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(l.Clickable, {
                          onMouseDown: f,
                          onMouseUp: f,
                          onClick: (e) => {
                            f(e), v();
                          },
                          children: (0, r.jsx)(l.Tooltip, {
                            tooltipContentClassName: C.__invalid_tooltip,
                            text: p.intl.string(p.t.SKNnqq),
                            children: (e) =>
                              (0, r.jsx)(l.EyeIcon, {
                                size: "md",
                                color: "currentColor",
                                className: C.previewIcon,
                                ...e,
                              }),
                          }),
                        }),
                        (0, r.jsx)(x.Z, { checked: u, onChange: () => b(!u) }),
                      ],
                    })
                  : (0, r.jsx)(l.Button, {
                      size: l.Button.Sizes.SMALL,
                      children: p.intl.string(p.t.oRs6mJ),
                    }),
            }),
          ],
        });
      }
      async function v(e, n) {
        await d.ZP.updateVerificationForm(e, n);
      }
      async function _(e, n) {
        await d.ZP.updateVerificationFormDescription(e, n);
      }
      function y(e) {
        var n, t, i;
        let {
            guild: l,
            isClanContext: x = !1,
            onFieldsSave: p,
            onDescriptionSave: y,
            verificationForm: T,
          } = e,
          [I, j] = a.useState(x),
          N = a.useRef(!1),
          S = a.useCallback(() => {
            N.current = !0;
          }, []),
          E =
            null !== (n = (0, f.A)({ guildId: l.id })) && void 0 !== n ? n : 0,
          k = (0, o.e7)([u.Z], () => (null != T ? T : u.Z.get(l.id))),
          A =
            null !== (t = null == k ? void 0 : k.formFields) && void 0 !== t
              ? t
              : [];
        a.useEffect(() => {
          d.ZP.fetchVerificationForm(l.id);
        }, [l.id]);
        let w = null != k,
          M = !x;
        return (0, r.jsx)(c.Z, {
          renderHeader: M
            ? (0, r.jsx)(b, {
                guild: l,
                isExpanded: I,
                emptyFormFields:
                  (null == A ? void 0 : A.length) == null ||
                  (null == A ? void 0 : A.length) === 0,
                hasTermsField:
                  null == A
                    ? void 0
                    : A.some((e) => e.field_type === m.QJ.TERMS),
              })
            : null,
          isExpanded: I,
          onExpand: () => j(!I),
          disableAnimation: x,
          disableBackground: !M,
          children: (0, r.jsx)("div", {
            className: s()(g.itemBodyContainer, {
              [g.noPadding]: !M,
              [C.rulesScreeningItemsNoBorder]: !M,
            }),
            children:
              w &&
              (0, r.jsx)(h.Z, {
                guild: l,
                submittedGuildJoinRequestsCount: E,
                formFields: A,
                onFormFieldUpdate: S,
                hideVerificationLevelField: !0,
                isClanContext: x,
                onFieldsSave: null != p ? p : v,
                onDescriptionSave: null != y ? y : _,
                formDescription:
                  null !== (i = null == k ? void 0 : k.description) &&
                  void 0 !== i
                    ? i
                    : "",
              }),
          }),
        });
      }
    },
    929507: function (e, n, t) {
      t(47120);
      var r = t(192379),
        a = t(399606),
        i = t(544891),
        s = t(570140),
        o = t(367907),
        l = t(430824),
        c = t(496675),
        d = t(626135),
        u = t(70956),
        m = t(997787),
        f = t(981631);
      let h = 1 * u.Z.Millis.DAY,
        x = new Map();
      n.Z = {
        useShouldShowChannelNotice(e) {
          let n = (0, a.e7)([l.Z, c.Z], () => {
            let n = l.Z.getGuild(e);
            return null != n && c.Z.can(f.Plq.ADMINISTRATOR, n);
          });
          r.useEffect(() => {
            n &&
              !(function (e) {
                var n;
                let t = Date.now(),
                  r = null !== (n = x.get(e)) && void 0 !== n ? n : 0;
                if (!(t < r + h))
                  x.set(e, t),
                    i.tn
                      .post({ url: f.ANM.GUILD_MIGRATE_COMMAND_SCOPE(e) })
                      .then(
                        (n) => {
                          var t, r;
                          s.Z.dispatch({
                            type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
                            guildId: e,
                            integrationIdsWithAppCommands:
                              null !==
                                (r =
                                  null === (t = n.body) || void 0 === t
                                    ? void 0
                                    : t.integration_ids_with_app_commands) &&
                              void 0 !== r
                                ? r
                                : [],
                          });
                        },
                        () => {
                          x.set(e, r);
                        },
                      );
              })(e);
          }, [e, n]);
          let t = (0, a.e7)([m.Z], () => m.Z.shouldShowChannelNotice(e));
          return n && t;
        },
        dismissNotice(e) {
          s.Z.dispatch({
            type: "COMMANDS_MIGRATION_NOTICE_DISMISSED",
            guildId: e,
          });
        },
        dismissOverviewTooltip(e, n) {
          var t;
          s.Z.dispatch({
            type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED",
            guildId: e,
            integrationId: n.id,
          }),
            d.default.track(f.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
              ...(0, o.hH)(e),
              application_id:
                null === (t = n.application) || void 0 === t ? void 0 : t.id,
              location: "overview",
            });
        },
        dismissToggleTooltip(e, n) {
          var t;
          if (void 0 !== n)
            s.Z.dispatch({
              type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED",
              integrationId: n.id,
            }),
              d.default.track(f.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                ...(0, o.hH)(e),
                application_id:
                  null === (t = n.application) || void 0 === t ? void 0 : t.id,
                location: "toggle",
              });
        },
      };
    },
    997787: function (e, n, t) {
      let r;
      t(47120), t(653041);
      var a,
        i = t(442837),
        s = t(570140);
      function o(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      let l = { guildNoticeDismissed: [] },
        c = new Map(),
        d = new Set();
      class u extends (a = i.ZP.PersistedStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
          r = e;
        }
        getState() {
          return r;
        }
        shouldShowChannelNotice(e) {
          var n, t;
          return (
            !r.guildNoticeDismissed.includes(e) &&
            (null !==
              (t = null === (n = c.get(e)) || void 0 === n ? void 0 : n.size) &&
            void 0 !== t
              ? t
              : 0) > 0
          );
        }
        canShowOverviewTooltip(e, n) {
          var t;
          return (
            (null === (t = c.get(e)) || void 0 === t ? void 0 : t.has(n)) === !0
          );
        }
        canShowToggleTooltip(e) {
          return d.has(e);
        }
      }
      o(u, "displayName", "CommandsMigrationStore"),
        o(u, "persistKey", "CommandsMigrationStore"),
        (n.Z = new u(s.Z, {
          COMMANDS_MIGRATION_UPDATE_SUCCESS: function (e) {
            let { guildId: n, integrationIdsWithAppCommands: t } = e;
            return c.set(n, new Set(t)), !0;
          },
          COMMANDS_MIGRATION_NOTICE_DISMISSED: function (e) {
            let { guildId: n } = e;
            r.guildNoticeDismissed.push(n);
          },
          COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function (e) {
            var n;
            let { guildId: t, integrationId: r } = e;
            null === (n = c.get(t)) || void 0 === n || n.clear(), d.add(r);
          },
          COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function (e) {
            let { integrationId: n } = e;
            d.delete(n);
          },
        }));
    },
    855674: function (e, n, t) {
      let r;
      t(47120);
      var a,
        i,
        s,
        o,
        l = t(392711),
        c = t.n(l),
        d = t(442837),
        u = t(570140),
        m = t(308063);
      let f = {},
        h = {};
      function x(e, n) {
        return null == n && (n = "guild"), "".concat(e, ":").concat(n);
      }
      function p(e) {
        return null != f[e] ? f[e] : ((f[e] = {}), f[e]);
      }
      function g(e) {
        let { guildId: n, webhook: t } = e;
        p(n)[t.id] = t;
      }
      class C extends (a = d.ZP.Store) {
        isFetching(e, n) {
          return null != h[x(e, n)];
        }
        getWebhooksForGuild(e) {
          return c().values(p(e));
        }
        getWebhooksForChannel(e, n) {
          return c()(p(e))
            .values()
            .filter((e) => e.channel_id === n)
            .value();
        }
        get error() {
          return r;
        }
      }
      (o = "WebhooksStore"),
        (s = "displayName") in (i = C)
          ? Object.defineProperty(i, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[s] = o),
        (n.Z = new C(u.Z, {
          WEBHOOKS_UPDATE: function (e) {
            let { guildId: n, channelId: t, webhooks: a, error: i } = e;
            if (null == a) {
              null != i
                ? ((r = i), delete h[x(n, t)])
                : null != t &&
                  null != f[n] &&
                  ((r = null), m.Z.fetchForChannel(n, t));
              return;
            }
            r = null;
            let s = [];
            null != t &&
              (s = c()(p(n))
                .values()
                .filter((e) => e.channel_id !== t)
                .value());
            let o = (f[n] = {});
            s.concat(a).forEach((e) => (o[e.id] = e)), delete h[x(n, t)];
          },
          WEBHOOKS_FETCHING: function (e) {
            let { guildId: n, channelId: t } = e;
            h[x(n, t)] = !0;
          },
          WEBHOOK_CREATE: g,
          WEBHOOK_UPDATE: g,
          WEBHOOK_DELETE: function (e) {
            let { guildId: n, webhookId: t } = e;
            delete p(n)[t];
          },
        }));
    },
    838221: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var r = t(200651);
      t(192379);
      var a = t(325767);
      function i(e) {
        let {
          width: n = 17,
          height: t = 16,
          color: i = "currentColor",
          foreground: s,
          ...o
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, a.Z)(o),
          width: n,
          height: t,
          viewBox: "0 0 17 16",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, r.jsx)("rect", {
              className: s,
              y: "5",
              width: "16",
              height: "2",
              rx: "1",
              fill: i,
            }),
            (0, r.jsx)("rect", {
              className: s,
              y: "9",
              width: "8",
              height: "2",
              rx: "1",
              fill: i,
            }),
          ],
        });
      }
    },
    594045: function (e, n, t) {
      e.exports = {
        list: "list_a06168",
        container: "container_a06168",
        header: "header_a06168",
        permission: "permission_a06168",
        check: "check_a06168",
        cross: "cross_a06168",
      };
    },
    243014: function (e, n, t) {
      e.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    123060: function (e, n, t) {
      e.exports = {
        gameImage: "gameImage_d6ed83",
        gameUnknownImage: "gameUnknownImage_d6ed83",
        selectedGame: "selectedGame_d6ed83",
        checkBackground: "checkBackground_d6ed83",
        selectedGameCheck: "selectedGameCheck_d6ed83",
        selectedGameCheckLocked: "selectedGameCheckLocked_d6ed83",
        gameImageLoading: "gameImageLoading_d6ed83",
        gameImageBackground: "gameImageBackground_d6ed83",
        gameName: "gameName_d6ed83",
        remainingGame: "remainingGame_d6ed83",
      };
    },
    242047: function (e, n, t) {
      e.exports = {
        popoutContainer: "popoutContainer_c64593",
        customColorsHeader: "customColorsHeader_c64593",
        colorSwatch: "colorSwatch_c64593",
        colorPickersContainer: "colorPickersContainer_c64593",
        colorColumn: "colorColumn_c64593",
        colorPicker: "colorPicker_c64593",
      };
    },
    842196: function (e, n, t) {
      e.exports = {
        randomizeButton: "randomizeButton_eb434f",
        randomizeButtonInner: "randomizeButtonInner_eb434f",
      };
    },
    861246: function (e, n, t) {
      e.exports = {
        content: "content_cd2a44",
        leftColumn: "leftColumn_cd2a44",
        colorsContainer: "colorsContainer_cd2a44",
        colorPickerContainer: "colorPickerContainer_cd2a44",
        colorPickerGrid: "colorPickerGrid_cd2a44",
        brandItemContainer: "brandItemContainer_cd2a44",
        brandItemContainerSelected: "brandItemContainerSelected_cd2a44",
        brandItemCircle: "brandItemCircle_cd2a44",
        bannerPickerContainer: "bannerPickerContainer_cd2a44",
        bannerPickerGrid: "bannerPickerGrid_cd2a44",
        bannerItemContainer: "bannerItemContainer_cd2a44",
        bannerItemContainerSelected: "bannerItemContainerSelected_cd2a44",
        noWrap: "noWrap_cd2a44",
        clanCardWrapper: "clanCardWrapper_cd2a44",
        clanBannerPreview: "clanBannerPreview_cd2a44",
      };
    },
    123714: function (e, n, t) {
      e.exports = {
        description: "description_b15aa7",
        descriptionText: "descriptionText_b15aa7",
        tagsContainer: "tagsContainer_b15aa7",
        tagsCount: "tagsCount_b15aa7",
        tags: "tags_b15aa7",
        traits: "traits_b15aa7",
        trait: "trait_b15aa7",
        strikethrough: "strikethrough_b15aa7",
        clanInfoRow: "clanInfoRow_b15aa7",
        clanInfoItem: "clanInfoItem_b15aa7",
        descriptionMask: "descriptionMask_b15aa7",
        descriptionBorderMask: "descriptionBorderMask_b15aa7",
        traitsMask: "traitsMask_b15aa7",
        traitsBorderMask: "traitsBorderMask_b15aa7",
      };
    },
    494750: function (e, n, t) {
      e.exports = {
        container: "container_d16341",
        inputContainer: "inputContainer_d16341",
        input: "input_d16341",
        clickableGame: "clickableGame_d16341",
        pills: "pills_d16341",
        tooltip: "tooltip_d16341",
        gamesContainer: "gamesContainer_d16341",
        gamesList: "gamesList_d16341",
        separator: "separator_d16341",
        loadingSpinner: "loadingSpinner_d16341",
      };
    },
    258738: function (e, n, t) {
      e.exports = {
        rerollButton: "rerollButton_b9c7e6",
        innerRerollButton: "innerRerollButton_b9c7e6",
      };
    },
    880867: function (e, n, t) {
      e.exports = {
        container: "container_ecdcb9",
        badgesContainer: "badgesContainer_ecdcb9",
        pickerContainer: "pickerContainer_ecdcb9",
        pickerGrid: "pickerGrid_ecdcb9",
        badgeAssetContainer: "badgeAssetContainer_ecdcb9",
        badgeAssetContainerSelected: "badgeAssetContainerSelected_ecdcb9",
        tagContainer: "tagContainer_ecdcb9",
        tagInputWrapper: "tagInputWrapper_ecdcb9",
        tagInput: "tagInput_ecdcb9",
        tagValidationText: "tagValidationText_ecdcb9",
      };
    },
    602075: function (e, n, t) {
      e.exports = {
        slideContent: "slideContent_b22bc0",
        maxWidthContainer: "maxWidthContainer_b22bc0",
        content: "content_b22bc0",
        mainPanelContainer: "mainPanelContainer_b22bc0",
        fixedWidthSidebar: "fixedWidthSidebar_b22bc0",
        title: "title_b22bc0",
        subtitle: "subtitle_b22bc0",
        divider: "divider_b22bc0",
        inputContainer: "inputContainer_b22bc0",
        contentLabel: "contentLabel_b22bc0",
        interestsCategoryTitle: "interestsCategoryTitle_b22bc0",
        interestsCategory: "interestsCategory_b22bc0",
        utilityTraits: "utilityTraits_b22bc0",
        languageSelect: "languageSelect_b22bc0",
        playstyleSelect: "playstyleSelect_b22bc0",
        playstyleOption: "playstyleOption_b22bc0",
        checkmark: "checkmark_b22bc0",
        playstyleTitle: "playstyleTitle_b22bc0",
        icon: "icon_b22bc0",
        clickable: "clickable_b22bc0",
        plusIcon: "plusIcon_b22bc0",
        enterToSearchText: "enterToSearchText_b22bc0",
        errorText: "errorText_b22bc0",
        optionalTag: "optionalTag_b22bc0",
        wildcardRow: "wildcardRow_b22bc0",
        input: "input_b22bc0",
        wildcardInput: "wildcardInput_b22bc0",
        selectableOption: "selectableOption_b22bc0",
        selectedOption: "selectedOption_b22bc0",
      };
    },
    729071: function (e, n, t) {
      e.exports = {
        row: "row_a6e298",
        clickable: "clickable_a6e298",
        headerCell: "headerCell_a6e298",
        headerCellContent: "headerCellContent_a6e298",
        stickyHeader: "stickyHeader_a6e298",
        sortIcon: "sortIcon_a6e298",
      };
    },
    379e3: function (e, n, t) {
      e.exports = {
        editCard: "editCard_cd99d3",
        toggled: "toggled_cd99d3",
        noBackground: "noBackground_cd99d3",
        innerHeader: "innerHeader_cd99d3",
        contentExpandContainer: "contentExpandContainer_cd99d3",
        showOverflow: "showOverflow_cd99d3",
      };
    },
    626166: function (e, n, t) {
      e.exports = {
        questionContainer: "questionContainer_b007eb",
        questionTitle: "questionTitle_b007eb",
        requirementContainer: "requirementContainer_b007eb",
        requirementIcon: "requirementIcon_b007eb",
        requirementText: "requirementText_b007eb",
        requirementSuccess: "requirementSuccess_b007eb",
        requirementFailure: "requirementFailure_b007eb",
        footnote: "footnote_b007eb",
      };
    },
    738912: function (e, n, t) {
      e.exports = {
        termsRow: "termsRow_bd5b94",
        termsRowContent: "termsRowContent_bd5b94",
        checkbox: "checkbox_bd5b94",
        verifyConfirmText: "verifyConfirmText_bd5b94",
        fieldBackground: "fieldBackground_bd5b94",
        termsFieldBody: "termsFieldBody_bd5b94",
        textInputFieldBodyInput: "textInputFieldBodyInput_bd5b94",
        paragraphFieldBody: "paragraphFieldBody_bd5b94",
        multipleChoiceIcon: "multipleChoiceIcon_bd5b94",
      };
    },
    631403: function (e, n, t) {
      e.exports = {
        spacingContainer: "spacingContainer_ceff93",
        formFieldContainer: "formFieldContainer_ceff93",
        actionButtonsContainer: "actionButtonsContainer_ceff93",
        actionButton: "actionButton_ceff93",
        backgroundContainer: "backgroundContainer_ceff93",
        containerPadding: "containerPadding_ceff93",
        dragContainer: "dragContainer_ceff93",
        dragIcon: "dragIcon_ceff93",
        dragIconContainer: "dragIconContainer_ceff93",
        dropHovered: "dropHovered_ceff93",
        iconContainer: "iconContainer_ceff93",
        icon: "icon_ceff93",
        iconInteractiveContainer: "iconInteractiveContainer_ceff93",
        iconInteractive: "iconInteractive_ceff93",
        containerTitle: "containerTitle_ceff93 title_ceff93",
        leftRailIconContainer: "leftRailIconContainer_ceff93",
        leftRailIconContainerTitle:
          "leftRailIconContainerTitle_ceff93 title_ceff93",
        leftRailIconContainerDescription:
          "leftRailIconContainerDescription_ceff93",
        containerTopHat: "containerTopHat_ceff93",
        containerTopHatText: "containerTopHatText_ceff93",
        containerFooter: "containerFooter_ceff93",
        verificationLevelTitle: "verificationLevelTitle_ceff93",
        verificationLevelHook:
          "verificationLevelHook_ceff93 containerTitle_ceff93 title_ceff93",
        fieldBackground: "fieldBackground_ceff93",
        withFooter: "withFooter_ceff93",
        clickable: "clickable_ceff93",
        fieldFooterContainer: "fieldFooterContainer_ceff93",
        guildVerificationText: "guildVerificationText_ceff93",
        verificationContainer:
          "verificationContainer_ceff93 fieldBackground_ceff93 fieldPadding_ceff93",
        button: "button_ceff93",
        removeButton: "removeButton_ceff93",
        termsFieldCaretIcon: "termsFieldCaretIcon_ceff93",
        addFormFieldContainer: "addFormFieldContainer_ceff93",
        addFormField: "addFormField_ceff93",
        addFormFieldText: "addFormFieldText_ceff93",
        multipleChoiceFixedTextColor: "multipleChoiceFixedTextColor_ceff93",
        errorText: "errorText_ceff93",
      };
    },
    207029: function (e, n, t) {
      e.exports = {
        container: "container_da027b",
        icon: "icon_da027b",
        menu: "menu_da027b",
      };
    },
    176981: function (e, n, t) {
      e.exports = {
        header: "header_e1b877",
        back: "back_e1b877",
        backButton: "backButton_e1b877",
        itemWrapper: "itemWrapper_e1b877",
        simpleItemWrapper: "simpleItemWrapper_e1b877 itemWrapper_e1b877",
        disabled: "disabled_e1b877",
        clickable: "clickable_e1b877",
        itemContent: "itemContent_e1b877",
        switch: "switch_e1b877",
        valuePill: "valuePill_e1b877",
        itemBodyContainer: "itemBodyContainer_e1b877",
        noPadding: "noPadding_e1b877",
        itemBodyInner: "itemBodyInner_e1b877",
        bringToFront: "bringToFront_e1b877",
        tooltip: "tooltip_e1b877",
        warning: "warning_e1b877",
        check: "check_e1b877",
        caret: "caret_e1b877",
      };
    },
    13441: function (e, n, t) {
      e.exports = {
        previewAndEnable: "previewAndEnable_ac6678",
        previewIcon: "previewIcon_ac6678",
        rulesScreeningItemsNoBorder: "rulesScreeningItemsNoBorder_ac6678",
        pillRow: "pillRow_ac6678",
      };
    },
    860553: function (e, n, t) {
      e.exports = {
        countDown: "countDown_d0e7ba",
        sparkleStar1: "sparkleStar1_d0e7ba",
        sparkleStar2: "sparkleStar2_d0e7ba",
      };
    },
    526207: function (e, n, t) {
      t.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    742774: function (e, n, t) {
      e.exports = {
        premiumTrialBadge: "premiumTrialBadge_b089d3",
        premiumTrialBadgeIcon: "premiumTrialBadgeIcon_b089d3",
        premiumTrialTier0UnacknowledgedBadge:
          "premiumTrialTier0UnacknowledgedBadge_b089d3",
        premiumTrialTier2UnacknowledgedBadge:
          "premiumTrialTier2UnacknowledgedBadge_b089d3",
        premiumDiscountUnacknowledgedBadge:
          "premiumDiscountUnacknowledgedBadge_b089d3",
        premiumTrialAcknowledgedBadge: "premiumTrialAcknowledgedBadge_b089d3",
        premiumTrialBadgeSelected: "premiumTrialBadgeSelected_b089d3",
        premiumOfferBadgeCopy: "premiumOfferBadgeCopy_b089d3",
      };
    },
    704448: function (e, n, t) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    869042: function (e, n, t) {
      t.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
  },
]);
//# sourceMappingURL=7cab09f88e6bdd84526e.js.map
