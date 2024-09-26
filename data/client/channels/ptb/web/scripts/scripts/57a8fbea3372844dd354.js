"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36362"],
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
    389134: function (e, n, t) {
      t(47120);
      var a,
        r,
        i,
        s,
        o = t(392711),
        l = t.n(o),
        c = t(906280),
        d = t.n(c),
        u = t(442837),
        m = t(570140),
        _ = t(944163),
        f = t(77498),
        C = t(116175),
        h = t(308083);
      function x(e) {
        return new Set(
          Array.from(e).filter((e) => null != f.Z.getDetectableGame(e)),
        );
      }
      let p = () => ({
          gameApplicationIds: new Set(),
          playstyle: h.zv.NONE,
          interests: new Set(),
          description: "",
          wildcardDescriptors: [h.U6, h.U6, h.U6],
          tag: "",
          verificationForm: { ..._.t },
          badgeKind: C.ZD.SWORD,
          badgePrimaryColor: C.sg["0"].primary,
          badgeSecondaryColor: C.sg["0"].secondary,
          banner: h.qC.NIGHT_SKY,
          brandPrimaryColor: h.ym["0"].primary,
          brandSecondaryColor: h.ym["0"].secondary,
        }),
        g = p(),
        T = d()(g),
        E = !1,
        I = !1,
        b = {};
      class N extends (a = u.ZP.Store) {
        getState() {
          return {
            initialSettings: g,
            settings: T,
            dirty: E,
            errors: b,
            submitting: I,
          };
        }
      }
      (s = "ClanSettingsStore"),
        (i = "displayName") in (r = N)
          ? Object.defineProperty(r, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = s),
        (n.Z = new N(m.Z, {
          CLAN_SETTINGS_FETCH_START: function () {
            (I = !1), (g = p()), (T = d()(g)), (E = !1), (b = {});
          },
          CLAN_SETTINGS_FETCH_SUCCESS: function (e) {
            let { settings: n } = e;
            (g = { ...p(), ...n }),
              ((T = d()(g)).gameApplicationIds = x(T.gameApplicationIds)),
              (E = !1);
          },
          CLAN_SETTINGS_UPDATE: function (e) {
            let { updates: n } = e,
              { gameApplicationIds: t } = n;
            for (let e in (null != t && (n.gameApplicationIds = x(t)),
            (T = { ...T, ...d()(n) }),
            n))
              delete b[e], (b = { ...b });
            E = !l().isEqual(
              l().omit(T, "verificationForm"),
              l().omit(g, "verificationForm"),
            );
          },
          CLAN_SETTINGS_SUBMIT: function () {
            (I = !0), (b = {});
          },
          CLAN_SETTINGS_SUBMIT_SUCCESS: function () {
            (I = !1), (g = d()(T)), (E = !1), (b = {});
          },
          CLAN_SETTINGS_SUBMIT_ERROR: function (e) {
            let { error: n } = e;
            (I = !1),
              (b = {
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
            if (null == T.verificationForm) return !1;
            if (
              ((T = {
                ...T,
                verificationForm: { ...T.verificationForm, ...n },
              }),
              t)
            ) {
              var a;
              E = !l().isEqual(
                T.verificationForm.formFields,
                null === (a = g.verificationForm) || void 0 === a
                  ? void 0
                  : a.formFields,
              );
            } else E = !1;
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
      var a = t(544891),
        r = t(981631);
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
          (await a.tn.get({ url: r.ANM.GUILD_TOP_GAMES(e) })).body.top_games,
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
      var a = t(652874),
        r = t(731965),
        i = t(520623);
      let s = new Map(),
        o = (0, a.Z)((e, n) => ({
          topGames: new Map(),
          tryFetchTopGames: async (t) => {
            let a = n().topGames,
              o = s.get(t);
            if (null != o && Date.now() - o < 36e5) {
              var l;
              return null !== (l = a.get(t)) && void 0 !== l ? l : {};
            }
            let c = await (0, i.M)(t),
              d = new Map(a);
            return (
              d.set(t, c),
              (0, r.j)(() => {
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
      var a = t(470079),
        r = t(392711),
        i = t.n(r),
        s = t(442837),
        o = t(77498),
        l = t(308083);
      function c(e) {
        var n;
        return null !== (n = l.gQ.get(e)) && void 0 !== n ? n : 0;
      }
      function d() {
        let e = (0, s.e7)([o.Z], () => o.Z.games),
          n = a.useMemo(
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
          t = a.useCallback((e, n) => c(n.item.value) - c(e.item.value), []);
        return {
          options: n,
          matchSorterOptions: a.useMemo(
            () => ({ baseSort: t, keys: ["label"] }),
            [t],
          ),
        };
      }
    },
    92373: function (e, n, t) {
      var a = t(735250),
        r = t(470079),
        i = t(120356),
        s = t.n(i),
        o = t(481060),
        l = t(442837),
        c = t(210753),
        d = t(77498),
        u = t(689938),
        m = t(123060);
      n.Z = function (e) {
        let {
            applicationId: n,
            imageContainerClassName: t,
            onClick: i,
            selected: _,
            locked: f = !1,
            otherGamesCount: C = 0,
          } = e,
          h = (0, o.useToken)(o.tokens.colors.WHITE),
          { isFetching: x, coverImageUrl: p } = (0, c.$)(n, {
            coverImageHeight: 336,
            coverImageWidth: 252,
          }),
          g = (0, l.e7)([d.Z], () => {
            var e, t;
            return null !==
              (t =
                null === (e = d.Z.getDetectableGame(n)) || void 0 === e
                  ? void 0
                  : e.name) && void 0 !== t
              ? t
              : "";
          }),
          T = r.useCallback(() => {
            null == i || i(n);
          }, [n, i]),
          E = r.useMemo(
            () =>
              x
                ? null
                : null == p
                  ? (0, a.jsx)("div", {
                      className: m.gameUnknownImage,
                      children: (0, a.jsx)(o.UnknownGameIcon, { size: "lg" }),
                    })
                  : (0, a.jsx)("img", {
                      className: m.gameImage,
                      alt: g,
                      src: p,
                    }),
            [p, x, g],
          );
        return (0, a.jsxs)("div", {
          className: m.selectedGame,
          children: [
            (0, a.jsxs)(o.Clickable, {
              onClick: T,
              className: s()(
                t,
                x ? m.gameImageLoading : void 0,
                m.gameImageBackground,
              ),
              children: [
                _ &&
                  (0, a.jsx)("div", {
                    className: m.checkBackground,
                    children: (0, a.jsx)(o.CircleCheckIcon, {
                      size: "md",
                      color: "currentColor",
                      secondaryColor: h.hex(),
                      className: s()(m.selectedGameCheck, {
                        [m.selectedGameCheckLocked]: f,
                      }),
                    }),
                  }),
                E,
                C > 0 &&
                  (0, a.jsx)("div", {
                    className: m.remainingGame,
                    children: (0, a.jsx)(o.Text, {
                      variant: "text-xs/normal",
                      color: "always-white",
                      children: u.Z.Messages.COUNT_REMAINING.format({
                        count: C,
                      }),
                    }),
                  }),
              ],
            }),
            (0, a.jsxs)(o.Text, {
              className: m.gameName,
              variant: "text-xs/normal",
              color: "header-primary",
              children: [g, f && (0, a.jsx)(o.LockIcon, { size: "xxs" })],
            }),
          ],
        });
      };
    },
    175557: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(108930),
        i = t(86406),
        s = t(146068),
        o = t(308545),
        l = t(397697),
        c = t(129871),
        d = t(206851),
        u = t(246933),
        m = t(995414),
        _ = t(308083);
      function f(e) {
        let { banner: n, ...t } = e;
        switch (n) {
          case _.qC.NIGHT_SKY:
            return (0, a.jsx)(l.Z, { ...t });
          case _.qC.CASTLE:
            return (0, a.jsx)(r.Z, { ...t });
          case _.qC.WORLD_MAP:
            return (0, a.jsx)(m.Z, { ...t });
          case _.qC.SEA_FOAM:
            return (0, a.jsx)(c.Z, { ...t });
          case _.qC.WARP_TUNNEL:
            return (0, a.jsx)(u.Z, { ...t });
          case _.qC.HOUSE:
            return (0, a.jsx)(s.Z, { ...t });
          case _.qC.HEIGHTMAP:
            return (0, a.jsx)(i.Z, { ...t });
          case _.qC.MESH:
            return (0, a.jsx)(o.Z, { ...t });
          case _.qC.SPATTER:
            return (0, a.jsx)(d.Z, { ...t });
        }
        return null;
      }
    },
    108930: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(249849),
        i = t(907561),
        s = t(689938),
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
        _ = [
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
        ];
      function f(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: f,
            secondaryTintColor: C,
            ...h
          } = e,
          { primaryColorsTransformed: x, secondaryColorsTransformed: p } = (0,
          r.s)({
            primaryBaseColors: l,
            primaryTintColor: f,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: C,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: _,
          }),
          { styleContent: g, containerId: T } = (0, i.bC)(x, p);
        return (0, a.jsxs)("svg", {
          ...h,
          "aria-label": s.Z.Messages.CLAN_LOOK_BANNER,
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("style", { children: g }),
            }),
            (0, a.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: T }),
          ],
        });
      }
    },
    86406: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(249849),
        i = t(907561),
        s = t(689938),
        o = t(408263);
      let l = ["#00ff00"],
        c = ["#000000", "#ed1c24"],
        d = [0.7],
        u = [{ base: 1, tint: 2 }],
        m = [0, 0.2],
        _ = [
          { base: 1, tint: 0 },
          { base: 1, tint: 4 },
        ];
      function f(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: f,
            secondaryTintColor: C,
            ...h
          } = e,
          { primaryColorsTransformed: x, secondaryColorsTransformed: p } = (0,
          r.s)({
            primaryBaseColors: l,
            primaryTintColor: f,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: C,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: _,
          }),
          { styleContent: g, containerId: T } = (0, i.bC)(x, p);
        return (0, a.jsxs)("svg", {
          ...h,
          "aria-label": s.Z.Messages.CLAN_LOOK_BANNER,
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, a.jsxs)("defs", {
              children: [
                (0, a.jsx)("defs", {
                  children: (0, a.jsxs)("linearGradient", {
                    id: "line-gradient",
                    x1: "0",
                    x2: "1",
                    y1: "0",
                    y2: "1",
                    children: [
                      (0, a.jsx)("stop", { stopColor: p[1], offset: "0%" }),
                      (0, a.jsx)("stop", { stopColor: x[0], offset: "50%" }),
                      (0, a.jsx)("stop", { stopColor: x[0], offset: "80%" }),
                      (0, a.jsx)("stop", { stopColor: p[1], offset: "100%" }),
                    ],
                  }),
                }),
                (0, a.jsx)("style", { children: g }),
              ],
            }),
            (0, a.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: T }),
            (0, a.jsx)("use", {
              href: "".concat(o, "#heightmap-lines-0"),
              style: { fill: "url(#line-gradient)" },
            }),
            (0, a.jsx)("use", {
              href: "".concat(o, "#heightmap-lines-1"),
              style: { fill: "url(#line-gradient)" },
            }),
            (0, a.jsx)("use", {
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
          return f;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(249849),
        i = t(907561),
        s = t(689938),
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
        _ = [
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
        ];
      function f(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: f,
            secondaryTintColor: C,
            ...h
          } = e,
          { primaryColorsTransformed: x, secondaryColorsTransformed: p } = (0,
          r.s)({
            primaryBaseColors: l,
            primaryTintColor: f,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: C,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: _,
          }),
          { styleContent: g, containerId: T } = (0, i.bC)(x, p);
        return (0, a.jsxs)("svg", {
          ...h,
          "aria-label": s.Z.Messages.CLAN_LOOK_BANNER,
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, a.jsxs)("defs", {
              children: [
                (0, a.jsx)("defs", {
                  children: (0, a.jsxs)("linearGradient", {
                    id: "sky-gradient",
                    x1: "0",
                    x2: "1",
                    y1: "0",
                    y2: "1",
                    children: [
                      (0, a.jsx)("stop", { stopColor: x[2], offset: "0%" }),
                      (0, a.jsx)("stop", { stopColor: x[0], offset: "100%" }),
                    ],
                  }),
                }),
                (0, a.jsx)("style", { children: g }),
              ],
            }),
            (0, a.jsx)("use", {
              href: "".concat(o, "#sky"),
              style: { fill: "url(#sky-gradient)" },
            }),
            (0, a.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: T }),
          ],
        });
      }
    },
    308545: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(249849),
        i = t(907561),
        s = t(689938),
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
        _ = [{ base: 1, tint: 5 }];
      function f(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: f,
            secondaryTintColor: C,
            ...h
          } = e,
          { primaryColorsTransformed: x, secondaryColorsTransformed: p } = (0,
          r.s)({
            primaryBaseColors: l,
            primaryTintColor: f,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: C,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: _,
          }),
          { styleContent: g, containerId: T } = (0, i.bC)(x, p);
        return (0, a.jsxs)("svg", {
          ...h,
          "aria-label": s.Z.Messages.CLAN_LOOK_BANNER,
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("style", { children: g }),
            }),
            (0, a.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: T }),
          ],
        });
      }
    },
    397697: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(249849),
        i = t(907561),
        s = t(689938),
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
        _ = [
          { base: 8, tint: 1 },
          { base: 20, tint: 1 },
        ];
      function f(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: f,
            secondaryTintColor: C,
            ...h
          } = e,
          { primaryColorsTransformed: x, secondaryColorsTransformed: p } = (0,
          r.s)({
            primaryBaseColors: l,
            primaryTintColor: f,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: C,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: _,
          }),
          { styleContent: g, containerId: T } = (0, i.bC)(x, p);
        return (0, a.jsxs)("svg", {
          ...h,
          "aria-label": s.Z.Messages.CLAN_LOOK_BANNER,
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("style", { children: g }),
            }),
            (0, a.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: T }),
          ],
        });
      }
    },
    129871: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(249849),
        i = t(907561),
        s = t(689938),
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
        _ = [
          { base: 1, tint: 2 },
          { base: 14, tint: 1 },
        ];
      function f(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: f,
            secondaryTintColor: C,
            ...h
          } = e,
          { primaryColorsTransformed: x, secondaryColorsTransformed: p } = (0,
          r.s)({
            primaryBaseColors: l,
            primaryTintColor: f,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: C,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: _,
          }),
          { styleContent: g, containerId: T } = (0, i.bC)(x, p);
        return (0, a.jsxs)("svg", {
          ...h,
          "aria-label": s.Z.Messages.CLAN_LOOK_BANNER,
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, a.jsxs)("defs", {
              children: [
                (0, a.jsx)("defs", {
                  children: (0, a.jsxs)("radialGradient", {
                    id: "foam-gradient",
                    cx: "0.5",
                    cy: "0.5",
                    r: "0.65",
                    fx: "0.5",
                    fy: "0.8",
                    children: [
                      (0, a.jsx)("stop", { stopColor: p[1], offset: "60%" }),
                      (0, a.jsx)("stop", { stopColor: p[0], offset: "100%" }),
                    ],
                  }),
                }),
                (0, a.jsx)("style", { children: g }),
              ],
            }),
            (0, a.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: T }),
            (0, a.jsx)("use", {
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
          return f;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(249849),
        i = t(907561),
        s = t(689938),
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
        _ = [{ base: 4, tint: 1 }];
      function f(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: f,
            secondaryTintColor: C,
            ...h
          } = e,
          { primaryColorsTransformed: x, secondaryColorsTransformed: p } = (0,
          r.s)({
            primaryBaseColors: l,
            primaryTintColor: f,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: C,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: _,
          }),
          { styleContent: g, containerId: T } = (0, i.bC)(x, p);
        return (0, a.jsxs)("svg", {
          ...h,
          "aria-label": s.Z.Messages.CLAN_LOOK_BANNER,
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("style", { children: g }),
            }),
            (0, a.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: T }),
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
      var a = t(470079),
        r = t(772848);
      let i = 262,
        s = 100;
      function o(e, n) {
        let t = a.useMemo(
          () => "clan-banner-container-".concat((0, r.Z)()),
          [],
        );
        return {
          styleContent: a.useMemo(() => {
            let a = e
                .map((e, n) => "--primary-".concat(n, ": ").concat(e, ";"))
                .join("\n"),
              r = n
                .map((e, n) => "--secondary-".concat(n, ": ").concat(e, ";"))
                .join("\n");
            return "#"
              .concat(t, " {\n        ")
              .concat(a, "\n        ")
              .concat(r, "\n      }");
          }, [t, e, n]),
          containerId: t,
        };
      }
    },
    246933: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(249849),
        i = t(907561),
        s = t(689938),
        o = t(409814);
      let l = ["#cc99ff", "#ffffff"],
        c = ["#2d3dee", "#ffffff"],
        d = [0.3, 1],
        u = [
          { base: 2, tint: 1 },
          { base: 5, tint: 1 },
        ],
        m = [0.3, 1],
        _ = [
          { base: 2, tint: 1 },
          { base: 5, tint: 1 },
        ];
      function f(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: f,
            secondaryTintColor: C,
            ...h
          } = e,
          { primaryColorsTransformed: x, secondaryColorsTransformed: p } = (0,
          r.s)({
            primaryBaseColors: l,
            primaryTintColor: f,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: C,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: _,
          }),
          { styleContent: g, containerId: T } = (0, i.bC)(x, p);
        return (0, a.jsxs)("svg", {
          ...h,
          "aria-label": s.Z.Messages.CLAN_LOOK_BANNER,
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, a.jsxs)("defs", {
              children: [
                (0, a.jsxs)("defs", {
                  children: [
                    (0, a.jsxs)("radialGradient", {
                      id: "fog-gradient-primary",
                      cx: ".5",
                      cy: ".5",
                      r: ".6",
                      fx: ".76",
                      fy: ".33",
                      spreadMethod: "pad",
                      children: [
                        (0, a.jsx)("stop", { stopColor: x[1], offset: "0%" }),
                        (0, a.jsx)("stop", { stopColor: x[0], offset: "70%" }),
                      ],
                    }),
                    (0, a.jsxs)("radialGradient", {
                      id: "fog-gradient-secondary",
                      cx: ".5",
                      cy: ".5",
                      r: ".6",
                      fx: ".76",
                      fy: ".33",
                      spreadMethod: "pad",
                      children: [
                        (0, a.jsx)("stop", { stopColor: p[1], offset: "0%" }),
                        (0, a.jsx)("stop", { stopColor: p[0], offset: "70%" }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("style", { children: g }),
              ],
            }),
            (0, a.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: T }),
            (0, a.jsx)("use", {
              href: "".concat(o, "#clan-banner-warp-tunnel-secondary"),
              style: { fill: "url(#fog-gradient-secondary)" },
            }),
            (0, a.jsx)("use", {
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
          return f;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(249849),
        i = t(907561),
        s = t(689938),
        o = t(114266);
      let l = ["#0089d9"],
        c = ["#ff9e32", "#b4eefc", "#ffffff", "#804f19"],
        d = [0.2],
        u = [{ base: 8, tint: 1 }],
        m = [0.45, 0.7, 1, 0.3],
        _ = [
          { base: 8, tint: 1 },
          { base: 8, tint: 1 },
          { base: 10, tint: 1 },
          { base: 8, tint: 1 },
        ];
      function f(e) {
        let {
            width: n,
            height: t,
            primaryTintColor: f,
            secondaryTintColor: C,
            ...h
          } = e,
          { primaryColorsTransformed: x, secondaryColorsTransformed: p } = (0,
          r.s)({
            primaryBaseColors: l,
            primaryTintColor: f,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: C,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: _,
          }),
          { styleContent: g, containerId: T } = (0, i.bC)(x, p);
        return (0, a.jsxs)("svg", {
          ...h,
          "aria-label": s.Z.Messages.CLAN_LOOK_BANNER,
          width: n,
          height: t,
          viewBox: "0 0 ".concat(i.Km, " ").concat(i.md),
          children: [
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("style", { children: g }),
            }),
            (0, a.jsx)("use", { href: "".concat(o, "#wrapper-layer"), id: T }),
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
      var a = t(735250),
        r = t(470079),
        i = t(481060),
        s = t(689938),
        o = t(242047);
      function l(e) {
        let {
            showSecondaryColor: n,
            palette: t,
            onPrimaryColorChange: l,
            onSecondaryColorChange: c,
          } = e,
          d = r.useRef(null);
        return (
          (0, i.useFocusLock)(d),
          (0, a.jsxs)("div", {
            className: o.popoutContainer,
            children: [
              (0, a.jsx)(i.Text, {
                variant: "text-xs/semibold",
                color: "header-secondary",
                className: o.customColorsHeader,
                children: s.Z.Messages.CLAN_PALETTE_PICKER_CUSTOM_COLORS,
              }),
              (0, a.jsxs)("div", {
                ref: d,
                className: o.colorPickersContainer,
                children: [
                  (0, a.jsxs)("div", {
                    className: o.colorColumn,
                    children: [
                      (0, a.jsx)("div", {
                        className: o.colorSwatch,
                        style: { backgroundColor: t.primary },
                      }),
                      (0, a.jsx)(i.Text, {
                        variant: "text-xs/medium",
                        color: "text-normal",
                        children:
                          s.Z.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY,
                      }),
                      (0, a.jsx)(i.CustomColorPicker, {
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
                    (0, a.jsxs)("div", {
                      className: o.colorColumn,
                      children: [
                        (0, a.jsx)("div", {
                          className: o.colorSwatch,
                          style: { backgroundColor: t.secondary },
                        }),
                        (0, a.jsx)(i.Text, {
                          variant: "text-xs/medium",
                          color: "text-normal",
                          children:
                            s.Z.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT,
                        }),
                        (0, a.jsx)(i.CustomColorPicker, {
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
          onRequestClose: r,
          children: s,
          palette: o,
          onPrimaryColorChange: c,
          onSecondaryColorChange: d,
        } = e;
        return (0, a.jsx)(i.Popout, {
          renderPopout: () =>
            (0, a.jsx)(l, {
              showSecondaryColor: t,
              palette: o,
              onPrimaryColorChange: c,
              onSecondaryColorChange: d,
            }),
          position: "left",
          shouldShow: n,
          onRequestClose: r,
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
      var a = t(735250);
      t(470079);
      var r = t(481060),
        i = t(689938),
        s = t(842196);
      function o(e) {
        let { onClick: n } = e;
        return (0, a.jsxs)(r.Button, {
          className: s.randomizeButton,
          innerClassName: s.randomizeButtonInner,
          look: r.Button.Looks.OUTLINED,
          size: r.Button.Sizes.MEDIUM,
          color: r.Button.Colors.PRIMARY,
          onClick: n,
          grow: !1,
          children: [
            (0, a.jsx)(r.RetryIcon, { size: "xs" }),
            i.Z.Messages.CLAN_SETUP_RANDOMIZE_LOOK,
          ],
        });
      }
    },
    94963: function (e, n, t) {
      t(47120), t(724458);
      var a = t(735250),
        r = t(470079),
        i = t(688619),
        s = t.n(i),
        o = t(120356),
        l = t.n(o),
        c = t(97028),
        d = t(866442),
        u = t(442837),
        m = t(481060),
        _ = t(231467),
        f = t(650774),
        C = t(430824),
        h = t(175557),
        x = t(688298),
        p = t(995119),
        g = t(116175),
        T = t(308083),
        E = t(689938),
        I = t(861246),
        b = t(602075);
      let N = [
          {
            name: "Night Sky",
            bannerKind: T.qC.NIGHT_SKY,
            icon: m.ThemeDarkIcon,
          },
          { name: "Castle", bannerKind: T.qC.CASTLE, icon: m.CrownIcon },
          {
            name: "World Map",
            bannerKind: T.qC.WORLD_MAP,
            icon: m.GlobeEarthIcon,
          },
          {
            name: "Sea Foam",
            bannerKind: T.qC.SEA_FOAM,
            icon: m.PrivacyAndSafetyIcon,
          },
          {
            name: "Warp",
            bannerKind: T.qC.WARP_TUNNEL,
            icon: m.BlurBackgroundIcon,
          },
          { name: "House", bannerKind: T.qC.HOUSE, icon: m.TreehouseIcon },
          { name: "Pulsar", bannerKind: T.qC.HEIGHTMAP, icon: m.WaveformIcon },
          { name: "Mesh", bannerKind: T.qC.MESH, icon: m.GridVerticalIcon },
          {
            name: "Spatter",
            bannerKind: T.qC.SPATTER,
            icon: m.PaintbrushThickIcon,
          },
        ],
        v = (e) => {
          let { name: n, primaryColor: t, secondaryColor: r, isCustom: i } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              i
                ? (0, a.jsx)(m.PaintPaletteIcon, { size: "md" })
                : (0, a.jsx)("div", {
                    className: I.brandItemCircle,
                    style: {
                      background: "linear-gradient(-45deg, "
                        .concat(r, " 50%, ")
                        .concat(t, " 50% )"),
                    },
                  }),
              (0, a.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: "interactive-normal",
                className: I.noWrap,
                children: n,
              }),
            ],
          });
        };
      n.Z = (e) => {
        var n;
        let { handleUpdate: t, progress: i, guildId: o } = e,
          {
            banner: y,
            brandPrimaryColor: S,
            brandSecondaryColor: A,
            badgePrimaryColor: M,
            badgeSecondaryColor: j,
          } = i,
          R = (0, u.e7)([C.Z], () => C.Z.getGuild(o)),
          L =
            null !== (n = (0, u.e7)([f.Z], () => f.Z.getMemberCount(o))) &&
            void 0 !== n
              ? n
              : 0,
          O = r.useMemo(
            () => ({
              primary: null != S ? S : T.OH,
              secondary: null != A ? A : T.K_,
            }),
            [S, A],
          ),
          Z = r.useMemo(() => {
            if (S === M && A === j) return 1;
            for (let e = 0; e < T.ym.length; e++)
              if (
                T.ym[e].primary === i.brandPrimaryColor &&
                T.ym[e].secondary === i.brandSecondaryColor
              )
                return 2 + e;
            return 0;
          }, [S, A, M, j, i.brandPrimaryColor, i.brandSecondaryColor]),
          [k, D] = r.useState(!1),
          P = 0 === Z,
          w = 1 === Z,
          F = r.useMemo(() => {
            if (P) return O;
            if (w)
              return {
                primary: null != M ? M : g.Nh,
                secondary: null != j ? j : g.vY,
              };
            {
              let e = T.ym[Z - 2];
              return { primary: e.primary, secondary: e.secondary };
            }
          }, [O, w, P, M, j, Z]),
          G = r.useCallback(() => {
            let e = N[Math.floor(Math.random() * N.length)].bannerKind,
              n = s().random().hex();
            t({
              banner: e,
              brandPrimaryColor: n,
              brandSecondaryColor: s().random().hex(),
            });
          }, [t]);
        r.useEffect(() => {
          t({
            banner: y,
            brandPrimaryColor: F.primary,
            brandSecondaryColor: F.secondary,
          });
        }, [t, y, F.primary, F.secondary]);
        let B = r.useMemo(() => {
          var e, n, t;
          return {
            ...i,
            id: o,
            name:
              null !== (e = null == R ? void 0 : R.name) && void 0 !== e
                ? e
                : "",
            icon: null == R ? void 0 : R.icon,
            memberCount: L,
            games: Array.from(i.gameApplicationIds),
            traits: Array.from(i.interests),
            banner: y,
            badge: {
              badgeKind: i.badgeKind,
              primaryColor: null != M ? M : T.OH,
              secondaryColor: null != j ? j : T.K_,
            },
            branding: {
              primaryColor: null !== (n = F.primary) && void 0 !== n ? n : T.OH,
              secondaryColor:
                null !== (t = F.secondary) && void 0 !== t ? t : T.K_,
            },
            gameActivity: Array.from(i.gameApplicationIds).reduce(
              (e, n) => ((e[n] = { level: c.m.HIGH, score: 0 }), e),
              {},
            ),
          };
        }, [i, o, R, L, y, M, j, F]);
        return (0, a.jsxs)("div", {
          className: b.slideContent,
          children: [
            (0, a.jsx)(m.Heading, {
              variant: "heading-xxl/medium",
              className: b.title,
              children: E.Z.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_TITLE,
            }),
            (0, a.jsx)(m.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: b.subtitle,
              children: E.Z.Messages.CLAN_SETUP_CUSTOMIZE_LOOK_SUBTITLE,
            }),
            (0, a.jsxs)("div", {
              className: I.content,
              children: [
                (0, a.jsx)("div", {
                  className: I.leftColumn,
                  children: (0, a.jsxs)("div", {
                    className: I.colorsContainer,
                    children: [
                      (0, a.jsx)(p.Z, { onClick: G }),
                      (0, a.jsxs)("div", {
                        className: I.colorPickerContainer,
                        children: [
                          (0, a.jsx)(m.Text, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: E.Z.Messages.CLAN_LOOK_BRAND_COLOR,
                          }),
                          (0, a.jsxs)("div", {
                            className: I.colorPickerGrid,
                            children: [
                              (0, a.jsx)(x.Z, {
                                showSecondaryColor: !0,
                                palette: O,
                                onPrimaryColorChange: (e) => {
                                  t({ brandPrimaryColor: (0, d.Rf)(e) });
                                },
                                onSecondaryColorChange: (e) => {
                                  t({ brandSecondaryColor: (0, d.Rf)(e) });
                                },
                                shouldShow: k,
                                onRequestClose: () => D(!1),
                                children: (e) =>
                                  (0, a.jsx)(m.Clickable, {
                                    ...e,
                                    onClick: () => {
                                      D((e) => !e);
                                    },
                                    className: l()(I.brandItemContainer, {
                                      [I.brandItemContainerSelected]: 0 === Z,
                                    }),
                                    children: (0, a.jsx)(v, {
                                      name: E.Z.Messages
                                        .CLAN_LOOK_PRESET_CUSTOM,
                                      isCustom: !0,
                                    }),
                                  }),
                              }),
                              (0, a.jsx)(m.Clickable, {
                                onClick: () => {
                                  t({
                                    brandPrimaryColor: null != M ? M : T.OH,
                                    brandSecondaryColor: null != j ? j : T.K_,
                                  });
                                },
                                className: l()(I.brandItemContainer, {
                                  [I.brandItemContainerSelected]: 1 === Z,
                                }),
                                children: (0, a.jsx)(v, {
                                  name: E.Z.Messages.CLAN_LOOK_PRESET_BADGE,
                                  primaryColor: M,
                                  secondaryColor: j,
                                }),
                              }),
                              T.ym.map((e, n) =>
                                (0, a.jsx)(
                                  m.Clickable,
                                  {
                                    "aria-label": e.name,
                                    onClick: () => {
                                      t({
                                        brandPrimaryColor: T.ym[n].primary,
                                        brandSecondaryColor: T.ym[n].secondary,
                                      });
                                    },
                                    className: l()(I.brandItemContainer, {
                                      [I.brandItemContainerSelected]:
                                        Z === n + 2,
                                    }),
                                    children: (0, a.jsx)(v, {
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
                      (0, a.jsxs)("div", {
                        className: I.bannerPickerContainer,
                        children: [
                          (0, a.jsx)(m.Text, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: E.Z.Messages.CLAN_LOOK_BANNER,
                          }),
                          (0, a.jsx)("div", {
                            className: I.bannerPickerGrid,
                            children: N.map((e, n) =>
                              (0, a.jsxs)(
                                m.Clickable,
                                {
                                  "aria-label": e.name,
                                  onClick: () => {
                                    t({ banner: e.bannerKind });
                                  },
                                  className: l()(I.bannerItemContainer, {
                                    [I.bannerItemContainerSelected]:
                                      e.bannerKind === y,
                                  }),
                                  children: [
                                    (0, a.jsx)(e.icon, { size: "md" }),
                                    (0, a.jsx)(m.Text, {
                                      variant: "text-sm/medium",
                                      color: "interactive-normal",
                                      className: I.noWrap,
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
                (0, a.jsx)("div", {
                  className: I.clanCardWrapper,
                  children: (0, a.jsx)(_.xV, {
                    bannerComponent: (0, a.jsx)(h.Z, {
                      banner: y,
                      primaryTintColor: F.primary,
                      secondaryTintColor: F.secondary,
                      className: I.clanBannerPreview,
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
          return h;
        },
      }),
        t(47120);
      var a = t(735250),
        r = t(470079),
        i = t(120356),
        s = t.n(i),
        o = t(442837),
        l = t(481060),
        c = t(231467),
        d = t(430824),
        u = t(214715),
        m = t(308083),
        _ = t(689938),
        f = t(123714);
      function C(e) {
        let { trait: n, selected: t, onClick: i } = e,
          [o, l] = r.useState(!1),
          c = r.useCallback(() => l(!0), []),
          d = r.useCallback(() => l(!1), []);
        return (0, a.jsx)(
          u.Z,
          {
            variant: "text-xs/semibold",
            color: o ? "text-muted" : "interactive-active",
            className: s()(f.trait, { [f.strikethrough]: o }),
            text: n,
            selected: t,
            onMouseEnter: t ? c : void 0,
            onMouseLeave: t ? d : void 0,
            onClick: t ? i : void 0,
          },
          n,
        );
      }
      function h(e) {
        var n;
        let {
            guildId: t,
            progress: i,
            traitsToHighlight: u,
            maskDescription: h,
            maskTraits: x,
            onTraitClick: p,
          } = e,
          g = (0, o.e7)([d.Z], () => d.Z.getGuild(t)),
          {
            interests: T,
            description: E,
            playstyle: I,
            wildcardDescriptors: b,
            brandPrimaryColor: N,
          } = i,
          v = (0, l.useToken)(l.tokens.colors.TEXT_BRAND),
          y = Array.from(T),
          S = r.useMemo(() => (null != u ? new Set(u) : new Set()), [u]);
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsxs)("div", {
              className: s()(
                f.description,
                h ? f.descriptionBorderMask : void 0,
              ),
              children: [
                (0, a.jsx)("div", {
                  className: h ? f.descriptionMask : void 0,
                }),
                (0, a.jsx)(l.Heading, {
                  variant: "heading-md/medium",
                  color: "header-primary",
                  lineClamp: 1,
                  children: null == g ? void 0 : g.name,
                }),
                (0, a.jsxs)("div", {
                  className: f.clanInfoRow,
                  children: [
                    (0, a.jsx)(l.Text, {
                      variant: "text-xxs/normal",
                      className: f.clanInfoItem,
                      children: (0, a.jsx)("span", {
                        role: "img",
                        "aria-label":
                          _.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
                        children: "\uD83C\uDFAE",
                      }),
                    }),
                    (0, a.jsx)(l.Text, {
                      variant: "text-xs/normal",
                      color: "text-secondary",
                      className: f.clanInfoItem,
                      children:
                        null !== (n = (0, m.mv)(I)) && void 0 !== n
                          ? n
                          : _.Z.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE,
                    }),
                    null != g &&
                      (0, a.jsx)(c.cS, {
                        wildcardDescriptors: b,
                        primaryColor: null != N ? N : v.hex(),
                      }),
                  ],
                }),
                (0, a.jsx)(l.Text, {
                  variant: "text-xs/medium",
                  color: "header-secondary",
                  className: f.descriptionText,
                  children:
                    (null == E ? void 0 : E.length) > 0
                      ? E
                      : _.Z.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER,
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: s()(f.tagsContainer, x ? f.traitsBorderMask : void 0),
              children: [
                (0, a.jsx)("div", { className: x ? f.traitsMask : void 0 }),
                (0, a.jsxs)("div", {
                  className: f.tagsCount,
                  children: [
                    (0, a.jsx)(l.TagsIcon, { size: "xxs", className: f.tags }),
                    (0, a.jsx)(l.Text, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: _.Z.Messages.CLAN_SETUP_NUM_TRAITS.format({
                        n: y.length,
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: f.traits,
                  children: y.map((e) =>
                    (0, a.jsx)(
                      C,
                      { trait: e, selected: S.has(e), onClick: p },
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
      var a = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        s = t(481060),
        o = t(18100),
        l = t(308083),
        c = t(689938),
        d = t(602075);
      n.Z = (e) => {
        var n, t, r;
        let { guildId: u, handleUpdate: m, progress: _, errors: f } = e,
          { wildcardDescriptors: C, description: h } = _,
          x = (e, n) => {
            let t = [...C];
            (t[n] = e), m({ wildcardDescriptors: t });
          };
        return (0, a.jsxs)("div", {
          className: d.slideContent,
          children: [
            (0, a.jsx)(s.Heading, {
              variant: "heading-xxl/medium",
              className: d.title,
              children: c.Z.Messages.CLAN_SETUP_DESCRIPTION_TITLE,
            }),
            (0, a.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: d.subtitle,
              children: c.Z.Messages.CLAN_SETUP_DESCRIPTION_SUBTITLE,
            }),
            (null == f ? void 0 : f.description) != null &&
              (0, a.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "status-danger",
                className: d.errorText,
                children: f.description,
              }),
            (0, a.jsxs)("div", {
              className: d.content,
              children: [
                (0, a.jsxs)("div", {
                  className: d.mainPanelContainer,
                  children: [
                    (0, a.jsx)("div", {
                      className: d.maxWidthContainer,
                      children: (0, a.jsx)(s.TextArea, {
                        className: d.input,
                        maxLength: l.Us,
                        onChange: (e) => m({ description: e }),
                        value: null != h ? h : "",
                        rows: 5,
                        autoFocus: !0,
                        autosize: !0,
                        placeholder:
                          c.Z.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER,
                      }),
                    }),
                    (0, a.jsx)(s.Text, {
                      variant: "text-sm/medium",
                      color: "header-secondary",
                      className: d.optionalTag,
                      children: c.Z.Messages.CLAN_SETUP_OPTIONAL,
                    }),
                    (0, a.jsx)(s.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      className: d.title,
                      children: c.Z.Messages.CLAN_SETUP_WILDCARDS_SUBTITLE,
                    }),
                    (null == f ? void 0 : f.wildcardDescriptors) != null &&
                      (0, a.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "status-danger",
                        className: d.errorText,
                        children: f.wildcardDescriptors,
                      }),
                    (0, a.jsxs)("div", {
                      className: d.wildcardRow,
                      children: [
                        (0, a.jsx)(s.TextInput, {
                          inputClassName: i()(d.input, d.wildcardInput),
                          value: null !== (n = C[0]) && void 0 !== n ? n : "",
                          onChange: (e) => x(e, 0),
                          maxLength: l.TY,
                          placeholder: l.LK["0"],
                        }),
                        (0, a.jsx)(s.TextInput, {
                          inputClassName: i()(d.input, d.wildcardInput),
                          value: null !== (t = C[1]) && void 0 !== t ? t : "",
                          onChange: (e) => x(e, 1),
                          maxLength: l.TY,
                          placeholder: l.LK["1"],
                        }),
                        (0, a.jsx)(s.TextInput, {
                          inputClassName: i()(d.input, d.wildcardInput),
                          value: null !== (r = C[2]) && void 0 !== r ? r : "",
                          onChange: (e) => x(e, 2),
                          maxLength: l.TY,
                          placeholder: l.LK["2"],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: d.fixedWidthSidebar,
                  children: (0, a.jsx)(o.Z, {
                    guildId: u,
                    progress: _,
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
          return C;
        },
      }),
        t(47120),
        t(773603);
      var a = t(735250),
        r = t(470079),
        i = t(120356),
        s = t.n(i),
        o = t(481060),
        l = t(368343),
        c = t(364083),
        d = t(92373),
        u = t(308083),
        m = t(689938),
        _ = t(494750),
        f = t(602075);
      function C(e) {
        let {
            gameApplicationIds: n,
            preventGameRemoval: t,
            onUpdateGames: i,
            minGames: l = 1,
            error: C,
          } = e,
          { options: h, matchSorterOptions: x } = (0, c.P)(),
          p = r.useMemo(() => Array.from(n), [n]),
          g = r.useCallback(
            (e) => {
              if (!(e.length < l)) i(new Set(e));
            },
            [l, i],
          ),
          T = r.useCallback(
            (e) => {
              if (t) return;
              let a = new Set(n);
              n.has(e) ? a.delete(e) : a.add(e), i(a);
            },
            [t, n, i],
          ),
          E = r.useCallback(() => null, []);
        return (0, a.jsx)("div", {
          className: _.inputContainer,
          children: (0, a.jsxs)(o.FormItem, {
            error: C,
            children: [
              (0, a.jsx)(o.SearchableSelect, {
                multi: !0,
                hidePills: !0,
                autoFocus: !0,
                wrapperClassName: s()(f.input, _.input),
                options: h,
                value: p,
                placeholder: m.Z.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
                onChange: g,
                isDisabled: n.size === u.cm,
                matchSorterOptions: x,
                clearQueryOnSelect: !0,
                customPillContainerClassName: _.pills,
                renderCustomPill: E,
              }),
              p.length > 0 &&
                (0, a.jsxs)("div", {
                  className: _.gamesContainer,
                  children: [
                    (0, a.jsx)(o.Text, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: m.Z.Messages.CLAN_SETUP_SELECTED_GAMES,
                    }),
                    (0, a.jsx)("div", {
                      className: _.gamesList,
                      children: p.map((e) =>
                        (0, a.jsx)(
                          o.Tooltip,
                          {
                            text: m.Z.Messages
                              .CLAN_SETUP_GAMES_ONE_GAME_REQUIRED,
                            shouldShow: t,
                            tooltipContentClassName: _.tooltip,
                            children: (r) =>
                              (0, a.jsx)("div", {
                                ...r,
                                children: (0, a.jsx)(
                                  d.Z,
                                  {
                                    applicationId: e,
                                    imageContainerClassName:
                                      n.size > l ? _.clickableGame : void 0,
                                    selected: !0,
                                    locked: t,
                                    onClick: T,
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
      function h(e) {
        let { guildId: n, selectedGameApplicationIds: t, onUpdateGames: i } = e,
          { topGames: s, tryFetchTopGames: c } = (0, l.B)(),
          u = s.get(n),
          [f, C] = r.useState(!1);
        r.useEffect(() => {
          C(!0),
            c(n).finally(() => {
              C(!1);
            });
        }, [n, c]);
        let h = r.useMemo(
            () =>
              null == u
                ? []
                : Object.keys(u).sort((e, n) => u[n].score - u[e].score),
            [u],
          ),
          x = r.useCallback(
            (e) => {
              let n = new Set(t);
              t.has(e) ? n.delete(e) : n.add(e), i(n);
            },
            [i, t],
          );
        return f && null == u
          ? (0, a.jsx)(o.Spinner, { className: _.loadingSpinner })
          : null == h || 0 === h.length
            ? null
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("hr", { className: _.separator }),
                  (0, a.jsxs)("div", {
                    className: _.gamesContainer,
                    children: [
                      (0, a.jsx)(o.Text, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: m.Z.Messages.CLAN_SETUP_GAMES_SUGGESTED,
                      }),
                      (0, a.jsx)("div", {
                        className: _.gamesList,
                        children: h.map((e) =>
                          (0, a.jsx)(
                            d.Z,
                            {
                              applicationId: e,
                              imageContainerClassName: _.clickableGame,
                              selected: t.has(e),
                              onClick: x,
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
            onUpdateGames: r,
            gameApplicationIds: i,
            minGames: l = 1,
            error: c,
            guildId: d,
            includeSuggestedGames: u,
          } = e,
          m = i.size <= l;
        return (0, a.jsxs)("div", {
          className: s()(f.slideContent, _.container),
          children: [
            (0, a.jsx)(o.Heading, {
              variant: "heading-xxl/medium",
              className: f.title,
              children: n,
            }),
            (0, a.jsx)(o.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: f.subtitle,
              children: t,
            }),
            (0, a.jsx)(C, {
              minGames: l,
              gameApplicationIds: i,
              preventGameRemoval: m,
              onUpdateGames: r,
              error: c,
            }),
            u &&
              null != d &&
              (0, a.jsx)(h, {
                guildId: d,
                selectedGameApplicationIds: i,
                onUpdateGames: r,
              }),
          ],
        });
      };
    },
    796918: function (e, n, t) {
      t(47120);
      var a = t(735250),
        r = t(470079),
        i = t(120356),
        s = t.n(i),
        o = t(392711),
        l = t(481060),
        c = t(442837),
        d = t(355932),
        u = t(314897),
        m = t(353093),
        _ = t(214715),
        f = t(18100),
        C = t(308083),
        h = t(689938),
        x = t(258738),
        p = t(602075);
      n.Z = (e) => {
        let { guildId: n, handleUpdate: t, progress: i, error: g } = e,
          { interests: T } = i,
          [E, I] = r.useState(""),
          [b, N] = r.useState(0),
          v = (0, c.e7)([u.default], () => u.default.getId()),
          y = r.useMemo(() => (0, o.chunk)((0, m.XV)(C.i6, v), 9), [v]),
          S = [...y[b], ...y[(b + 1) % y.length]],
          A = r.useMemo(() => Array.from(T), [T]),
          M = r.useMemo(
            () => A.filter((e) => !C.WZ.has(e) && !C.gh.has(e)),
            [A],
          ),
          j = (e) => {
            let n = new Set(T);
            n.delete(e), t({ interests: n });
          },
          R = r.useCallback(
            (e) => {
              if (T.size === C.c4) return;
              let n = null != e ? e : E.trim();
              if (0 === n.length) return;
              let a = new Set(T);
              a.add(n), t({ interests: a }), I("");
            },
            [t, E, T],
          ),
          L = r.useCallback(
            (e) => {
              switch (e.key) {
                case "Enter":
                case "Tab":
                  e.preventDefault(), e.stopPropagation(), R();
              }
            },
            [R],
          ),
          O = r.useCallback(() => {
            N((e) => (e + 1) % y.length);
          }, [N, y]);
        return (0, a.jsxs)("div", {
          className: p.slideContent,
          children: [
            (0, a.jsx)(l.Heading, {
              variant: "heading-xxl/medium",
              className: p.title,
              children: h.Z.Messages.CLAN_SETUP_INTERESTS_TITLE,
            }),
            (0, a.jsx)(l.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: p.subtitle,
              children: h.Z.Messages.CLAN_SETUP_INTERESTS_SUBTITLE.format(),
            }),
            null != g &&
              (0, a.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "status-danger",
                className: p.errorText,
                children: g,
              }),
            (0, a.jsxs)("div", {
              className: p.content,
              children: [
                (0, a.jsxs)("div", {
                  className: p.mainPanelContainer,
                  children: [
                    (0, a.jsxs)("div", {
                      className: p.inputContainer,
                      children: [
                        (0, a.jsx)(l.Text, {
                          variant: "text-xs/semibold",
                          color: "text-muted",
                          className: p.contentLabel,
                          children: h.Z.Messages.CLAN_SETUP_INTERESTS_LABEL,
                        }),
                        (0, a.jsx)(l.TextInput, {
                          autoFocus: !0,
                          inputClassName: p.input,
                          value: E,
                          onKeyDown: L,
                          onChange: I,
                          placeholder:
                            h.Z.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
                          maxLength: C.Sq,
                          disabled: T.size === C.c4,
                        }),
                        E.length > 0 &&
                          (0, a.jsx)(l.Clickable, {
                            onClick: () => R(E.trim()),
                            className: s()(p.plusIcon, p.clickable),
                            children: (0, a.jsx)(l.PlusSmallIcon, {
                              size: "md",
                              color: "currentColor",
                              className: p.icon,
                            }),
                          }),
                        E.length > 0 &&
                          (0, a.jsx)(l.Text, {
                            color: "text-muted",
                            variant: "text-xs/normal",
                            className: p.enterToSearchText,
                            children: h.Z.Messages.CLAN_SETUP_INTERESTS_HELP,
                          }),
                      ],
                    }),
                    (0, a.jsx)(l.Text, {
                      className: p.interestsCategoryTitle,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: h.Z.Messages.CLAN_SETUP_SUGGESTED_INTERESTS,
                    }),
                    (0, a.jsx)(d.ZP, {
                      items: S,
                      renderItem: (e) =>
                        (0, a.jsx)(
                          _.Z,
                          {
                            variant: "text-xs/semibold",
                            color: "interactive-normal",
                            text: e,
                            selected: T.has(e),
                            onClick: T.has(e) ? j : R,
                          },
                          e,
                        ),
                      maxLines: 2,
                      className: p.interestsCategory,
                      itemGapPx: 8,
                      renderOverflow: () => null,
                    }),
                    (0, a.jsx)("div", {
                      children: (0, a.jsxs)(l.Button, {
                        color: l.ButtonColors.PRIMARY,
                        onClick: O,
                        className: x.rerollButton,
                        innerClassName: x.innerRerollButton,
                        children: [
                          (0, a.jsx)(l.MagicWandIcon, {
                            size: "sm",
                            color: "currentColor",
                          }),
                          (0, a.jsx)(l.Text, {
                            variant: "text-xs/semibold",
                            color: "none",
                            children:
                              h.Z.Messages.CLAN_SETUP_INTERESTS_GENERATE_MORE,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: p.fixedWidthSidebar,
                  children:
                    A.length > 0 &&
                    (0, a.jsx)(f.Z, {
                      guildId: n,
                      progress: i,
                      traitsToHighlight: M,
                      maskDescription: !0,
                      onTraitClick: j,
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
      var a = t(735250);
      t(470079);
      var r = t(442837),
        i = t(481060),
        s = t(863249),
        o = t(616230),
        l = t(430824),
        c = t(389134),
        d = t(650461),
        u = t(689938),
        m = t(602075);
      n.Z = (e) => {
        let { guildId: n, error: t, inSettings: _ = !1 } = e,
          f = (0, r.e7)([l.Z], () => l.Z.getGuild(n)),
          C = (0, r.e7)([c.Z, d.ZP], () => {
            var e, t;
            return _
              ? c.Z.getState().settings.verificationForm
              : null === (t = d.ZP.getStateForGuild(n)) || void 0 === t
                ? void 0
                : null === (e = t.progress) || void 0 === e
                  ? void 0
                  : e.verificationForm;
          });
        return null == f
          ? null
          : (0, a.jsxs)("div", {
              className: m.slideContent,
              children: [
                (0, a.jsx)(i.Heading, {
                  variant: "heading-xxl/medium",
                  className: m.title,
                  children: _
                    ? u.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION_SETUP
                    : u.Z.Messages.CLAN_SETUP_APPLICATION_TITLE,
                }),
                (0, a.jsx)(i.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: m.subtitle,
                  children: u.Z.Messages.CLAN_SETUP_APPLICATION_SUBTITLE,
                }),
                (0, a.jsxs)("div", {
                  className: m.maxWidthContainer,
                  children: [
                    null != t &&
                      (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "status-danger",
                        className: m.errorText,
                        children: t,
                      }),
                    (0, a.jsx)(o.Z, {
                      guild: f,
                      isClanContext: !0,
                      onFieldsSave: (e, n) => (
                        s.ZP.updateVerificationFormFieldsLocal(e, [...n]),
                        Promise.resolve()
                      ),
                      verificationForm: C,
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
      var a = t(735250),
        r = t(470079),
        i = t(120356),
        s = t.n(i),
        o = t(481060),
        l = t(308083),
        c = t(602075);
      function d(e) {
        let { playstyle: n, onUpdatePlaystyle: t } = e,
          i = (0, o.useToken)(o.tokens.colors.WHITE),
          d = r.useMemo(() => Object.values((0, l.f4)()), []);
        return (0, a.jsx)("div", {
          className: c.playstyleSelect,
          children: d.map((e) =>
            (0, a.jsxs)(
              o.Clickable,
              {
                className: s()(c.playstyleOption, c.selectableOption, {
                  [c.selectedOption]: e.type === n,
                }),
                onClick: () => t(e.type),
                children: [
                  (0, a.jsx)(o.Heading, {
                    variant: "heading-xxl/medium",
                    children: e.emoji,
                  }),
                  (0, a.jsx)(o.Heading, {
                    variant: "heading-md/medium",
                    className: c.playstyleTitle,
                    children: e.title,
                  }),
                  (0, a.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: e.subtitle,
                  }),
                  e.type === n &&
                    (0, a.jsx)(o.CircleCheckIcon, {
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
          onUpdatePlaystyle: r,
          playstyle: i,
          error: s,
        } = e;
        return (0, a.jsxs)("div", {
          className: c.slideContent,
          children: [
            (0, a.jsx)(o.Heading, {
              variant: "heading-xxl/medium",
              className: c.title,
              children: n,
            }),
            (0, a.jsx)(o.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: c.subtitle,
              children: t,
            }),
            null != s &&
              (0, a.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "status-danger",
                className: c.errorText,
                children: s,
              }),
            (0, a.jsx)(d, { playstyle: i, onUpdatePlaystyle: r }),
          ],
        });
      };
    },
    974842: function (e, n, t) {
      t(47120);
      var a = t(735250),
        r = t(470079),
        i = t(688619),
        s = t.n(i),
        o = t(120356),
        l = t.n(o),
        c = t(866442),
        d = t(481060),
        u = t(550271),
        m = t(688298),
        _ = t(995119),
        f = t(116175),
        C = t(308083),
        h = t(689938),
        x = t(880867),
        p = t(602075);
      let g = [
        f.ZD.SWORD,
        f.ZD.WATER_DROP,
        f.ZD.SKULL,
        f.ZD.TOADSTOOL,
        f.ZD.MOON,
        f.ZD.LIGHTNING,
        f.ZD.LEAF,
        f.ZD.HEART,
        f.ZD.FIRE,
        f.ZD.COMPASS,
        f.ZD.CROSSHAIRS,
        f.ZD.FLOWER,
        f.ZD.FORCE,
        f.ZD.GEM,
        f.ZD.LAVA,
        f.ZD.PSYCHIC,
        f.ZD.SMOKE,
        f.ZD.SNOW,
        f.ZD.SOUND,
        f.ZD.SUN,
        f.ZD.WIND,
      ];
      n.Z = (e) => {
        let {
            handleUpdate: n,
            badge: t,
            primaryColor: i,
            secondaryColor: o,
            tag: T,
            error: E,
            furthestStep: I,
            inSettings: b,
          } = e,
          N = r.useMemo(() => {
            let e = (0, f.yf)();
            return {
              primary: null != i ? i : e.primary,
              secondary: null != o ? o : e.secondary,
            };
          }, [i, o]);
        r.useEffect(() => {
          (null == i || null == o) &&
            n({
              badgePrimaryColor: N.primary,
              badgeSecondaryColor: N.secondary,
            });
        }, [N.primary, N.secondary, n, i, o]);
        let v = r.useMemo(() => {
            for (let e = 0; e < f.sg.length; e++)
              if (
                f.sg[e].primary === N.primary &&
                f.sg[e].secondary === N.secondary
              )
                return 1 + e;
            return 0;
          }, [N.primary, N.secondary]),
          [y, S] = r.useState(!1),
          A = r.useCallback(() => {
            let e = g[Math.floor(Math.random() * g.length)],
              t = s().random().hex();
            n({
              badgeKind: e,
              badgePrimaryColor: t,
              badgeSecondaryColor: s().random().hex(),
            });
          }, [n]);
        return (
          r.useEffect(() => {
            I === C.Wy.CUSTOMIZE_TAG_BADGE &&
              !b &&
              n({
                brandPrimaryColor: N.primary,
                brandSecondaryColor: N.secondary,
              });
          }, [n, N.primary, N.secondary, I, i, o, b]),
          (0, a.jsxs)("div", {
            className: p.slideContent,
            children: [
              (0, a.jsx)(d.Heading, {
                variant: "heading-xxl/medium",
                className: p.title,
                children: h.Z.Messages.CLAN_SETUP_CUSTOMIZE_TITLE,
              }),
              (0, a.jsx)(d.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: p.subtitle,
                children: h.Z.Messages.CLAN_SETUP_CUSTOMIZE_SUBTITLE,
              }),
              (0, a.jsx)(_.Z, { onClick: A }),
              (0, a.jsxs)("div", {
                className: x.container,
                children: [
                  (0, a.jsxs)("div", {
                    className: x.badgesContainer,
                    children: [
                      (0, a.jsxs)("div", {
                        className: x.pickerContainer,
                        children: [
                          (0, a.jsx)(d.Text, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: h.Z.Messages.CLAN_BADGE,
                          }),
                          (0, a.jsx)("div", {
                            className: x.pickerGrid,
                            children: g.map((e) =>
                              (0, a.jsx)(
                                d.Clickable,
                                {
                                  onClick: () => n({ badgeKind: e }),
                                  className: l()(x.badgeAssetContainer, {
                                    [x.badgeAssetContainerSelected]: e === t,
                                  }),
                                  children: (0, a.jsx)(u.A, {
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
                      (0, a.jsxs)("div", {
                        className: x.pickerContainer,
                        children: [
                          (0, a.jsx)(d.Text, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: h.Z.Messages.CLAN_BADGE_COLORS,
                          }),
                          (0, a.jsxs)("div", {
                            className: x.pickerGrid,
                            children: [
                              (0, a.jsx)(m.Z, {
                                showSecondaryColor: f.ME[t] >= 2,
                                palette: N,
                                onPrimaryColorChange: (e) => {
                                  n({ badgePrimaryColor: (0, c.Rf)(e) });
                                },
                                onSecondaryColorChange: (e) => {
                                  n({ badgeSecondaryColor: (0, c.Rf)(e) });
                                },
                                shouldShow: y,
                                onRequestClose: () => S(!1),
                                children: (e) =>
                                  (0, a.jsx)(d.Clickable, {
                                    ...e,
                                    onClick: () => {
                                      S((e) => !e);
                                    },
                                    className: l()(x.badgeAssetContainer, {
                                      [x.badgeAssetContainerSelected]: 0 === v,
                                    }),
                                    children: (0, a.jsx)(d.PaintPaletteIcon, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                    }),
                                  }),
                              }),
                              f.sg.map((e, r) =>
                                (0, a.jsx)(
                                  d.Clickable,
                                  {
                                    onClick: () => {
                                      n({
                                        badgePrimaryColor: f.sg[r].primary,
                                        badgeSecondaryColor: f.sg[r].secondary,
                                      });
                                    },
                                    className: l()(x.badgeAssetContainer, {
                                      [x.badgeAssetContainerSelected]:
                                        r + 1 === v,
                                    }),
                                    children: (0, a.jsx)(u.A, {
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
                  (0, a.jsxs)("div", {
                    className: x.tagContainer,
                    children: [
                      (0, a.jsx)(d.Text, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: h.Z.Messages.CLAN_OVERVIEW_LABEL_CLAN_TAG,
                      }),
                      null != E &&
                        (0, a.jsx)(d.Text, {
                          variant: "text-sm/normal",
                          color: "status-danger",
                          className: p.errorText,
                          children: E,
                        }),
                      (0, a.jsx)(d.TextInput, {
                        className: x.tagInputWrapper,
                        inputClassName: x.tagInput,
                        value: null != T ? T : "",
                        onChange: (e) => n({ tag: e }),
                        maxLength: C.cG,
                        placeholder: h.Z.Messages.CLAN_SETUP_TAG_PLACEHOLDER,
                        autoFocus: !0,
                        prefixElement: (0, a.jsx)(u.A, {
                          badge: t,
                          width: 40,
                          height: 40,
                          primaryTintColor: N.primary,
                          secondaryTintColor: N.secondary,
                        }),
                      }),
                      (0, a.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: x.tagValidationText,
                        children: h.Z.Messages.CLAN_TAG_VALIDATION_RULES,
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
      var a = t(735250),
        r = t(470079),
        i = t(481060),
        s = t(214715),
        o = t(18100),
        l = t(308083),
        c = t(689938),
        d = t(602075);
      let u = (e) => {
        let {
            title: n,
            icon: t,
            availableTraits: o,
            selectedTraits: c,
            onUpdateTraits: u,
          } = e,
          m = r.useCallback(
            (e) => {
              let n = new Set(c);
              n.delete(e), u(n);
            },
            [u, c],
          ),
          _ = r.useCallback(
            (e) => {
              if (c.size === l.c4) return;
              let n = new Set(c);
              n.add(e), u(n);
            },
            [u, c],
          );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i.Text, {
              className: d.interestsCategoryTitle,
              variant: "text-xs/semibold",
              color: "text-muted",
              children: n,
            }),
            (0, a.jsx)("div", {
              className: d.utilityTraits,
              children: o.map((e) => {
                let n = c.has(e);
                return (0, a.jsx)(
                  s.Z,
                  {
                    variant: "text-xs/semibold",
                    color: "interactive-normal",
                    icon: t,
                    text: e,
                    selected: n,
                    onClick: n ? m : _,
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
            hidePreview: _ = !1,
          } = e,
          f = r.useMemo(() => {
            let e = [];
            return l.gh.forEach((n) => e.push({ value: n, label: n })), e;
          }, []),
          C = r.useMemo(() => {
            var e;
            return null !==
              (e = null != m ? m : null == s ? void 0 : s.interests) &&
              void 0 !== e
              ? e
              : new Set();
          }, [m, null == s ? void 0 : s.interests]),
          h = r.useMemo(() => Array.from(C), [C]),
          x = r.useMemo(() => h.filter((e) => l.gh.has(e)), [h]),
          p = r.useCallback(
            (e) => {
              t(new Set([...h.filter((e) => !l.gh.has(e)), ...e]));
            },
            [t, h],
          ),
          g = r.useMemo(() => h.filter((e) => l.WZ.has(e) || l.gh.has(e)), [h]),
          T = r.useCallback(
            (e) => {
              let n = new Set(C);
              n.delete(e), t(n);
            },
            [t, C],
          );
        return (0, a.jsxs)("div", {
          className: d.content,
          children: [
            (0, a.jsxs)("div", {
              className: d.mainPanelContainer,
              children: [
                (0, a.jsx)(u, {
                  title: c.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_AGE,
                  icon: i.UserIcon,
                  availableTraits: l.jK,
                  selectedTraits: C,
                  onUpdateTraits: t,
                }),
                (0, a.jsx)(u, {
                  title:
                    c.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_IDENTITY,
                  icon: i.UserIcon,
                  availableTraits: l.CT,
                  selectedTraits: C,
                  onUpdateTraits: t,
                }),
                (0, a.jsx)(i.Text, {
                  className: d.interestsCategoryTitle,
                  variant: "text-xs/semibold",
                  color: "text-muted",
                  children:
                    c.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_CATEGORY_LANGUAGE,
                }),
                (0, a.jsx)("div", {
                  className: d.languageSelect,
                  children: (0, a.jsx)(i.SearchableSelect, {
                    wrapperClassName: d.input,
                    options: f,
                    value: x,
                    onChange: p,
                    placeholder: c.Z.Messages.CLAN_SETUP_LANGUAGE_PLACEHOLDER,
                    multi: !0,
                  }),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: d.fixedWidthSidebar,
              children:
                null != s &&
                h.length > 0 &&
                !_ &&
                (0, a.jsx)(o.Z, {
                  guildId: n,
                  progress: s,
                  traitsToHighlight: g,
                  maskDescription: !0,
                  onTraitClick: T,
                }),
            }),
          ],
        });
      }
      n.Z = (e) => {
        let {
          guildId: n,
          title: t,
          description: r,
          onUpdateTraits: s,
          progress: o,
          traits: l,
          optional: u = !1,
          hidePreview: _ = !1,
        } = e;
        return (0, a.jsxs)("div", {
          className: d.slideContent,
          children: [
            u &&
              (0, a.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "header-secondary",
                className: d.optionalTag,
                children: c.Z.Messages.CLAN_SETUP_OPTIONAL,
              }),
            (0, a.jsx)(i.Heading, {
              variant: "heading-xxl/medium",
              className: d.title,
              children: t,
            }),
            (0, a.jsx)(i.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              className: d.subtitle,
              children: r,
            }),
            (0, a.jsx)(m, {
              guildId: n,
              onUpdateTraits: s,
              progress: o,
              availableTraits: l,
              hidePreview: _,
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
      var a = t(748780),
        r = t(442837),
        i = t(481060),
        s = t(607070);
      function o() {
        let e = (0, r.e7)([s.Z], () => s.Z.useReducedMotion);
        return (0, i.useSpring)(
          {
            from: {
              opacity: e ? 1 : 0,
              transform: e ? "scale(1)" : "scale(1.2)",
            },
            to: { opacity: 1, transform: "scale(1)" },
            config: {
              easing: a.Z.Easing.quad,
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
      var a,
        r = t(735250),
        i = t(470079),
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
        (0, r.jsx)("div", { className: e.className, children: e.children });
      class _ extends (a = i.PureComponent) {
        isSortable(e) {
          return null != e.sort && !1 !== e.sort;
        }
        getDefaultSort(e) {
          return (n, t) => {
            let a = n[e],
              r = t[e];
            return null != a && null != r ? (a === r ? 0 : a < r ? -1 : 1) : 0;
          };
        }
        renderHeader() {
          let {
              columns: e,
              data: n,
              sortDirection: t,
              sortKey: a,
              headerCellClassName: i,
              headerClassName: s,
              sortedHeaderCellClassName: u,
              stickyHeader: _,
            } = this.props,
            f = e.map((e) => {
              let s = null != e.renderHeader ? e.renderHeader(e, n) : e.key,
                m =
                  t === c.sHY.ASCENDING
                    ? l.ChevronSmallUpIcon
                    : l.ChevronSmallDownIcon;
              return (0, r.jsx)(
                l.Clickable,
                {
                  className: o()(
                    d.headerCell,
                    i,
                    e.headerCellClassName,
                    e.cellClassName,
                    a === e.key && u,
                    { [d.clickable]: this.isSortable(e) },
                  ),
                  onClick: this.isSortable(e)
                    ? () => this.handleSort(e.key)
                    : void 0,
                  children: (0, r.jsxs)("div", {
                    className: d.headerCellContent,
                    children: [
                      s,
                      this.isSortable(e) && a === e.key
                        ? (0, r.jsx)(m, { className: d.sortIcon })
                        : null,
                    ],
                  }),
                },
                e.key,
              );
            });
          return (0, r.jsx)(m, {
            className: o()(s, d.row, { [d.stickyHeader]: _ }),
            children: f,
          });
        }
        renderBody() {
          let {
              columns: e,
              data: n,
              sortData: t,
              sortKey: a,
              sortDirection: r,
              bodyCellClassName: s,
              rowClassName: l,
              cellProps: u,
              rowProps: m,
              rowComponent: _,
              cellComponent: f,
            } = this.props,
            C = n;
          if (t) {
            let t =
                null != a
                  ? e.find((e) => {
                      let { key: n } = e;
                      return n === a;
                    })
                  : null,
              i = [...n],
              s = null != t && t.sort,
              o =
                null != t && null != a && this.isSortable(t)
                  ? i.sort(
                      "function" == typeof s
                        ? (e, n) => s(e, n, r)
                        : this.getDefaultSort(a),
                    )
                  : i;
            C = null != t && r === c.sHY.DESCENDING ? o.reverse() : o;
          }
          return C.map((n, t) => {
            let a = e.map((e) =>
              (0, i.createElement)(
                f,
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
              _,
              { ...m, key: n.key, item: n, className: o()(d.row, l) },
              a,
            );
          });
        }
        render() {
          let { className: e, hasHeader: n } = this.props;
          return (0, r.jsxs)("div", {
            className: e,
            children: [n ? this.renderHeader() : null, this.renderBody()],
          });
        }
        constructor(...e) {
          super(...e),
            u(this, "handleSort", (e) => {
              let { sortKey: n, sortDirection: t, onSort: a } = this.props;
              if (null != a)
                a(
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
      u(_, "SortDirection", c.sHY),
        u(_, "defaultProps", {
          initialSortDirection: c.sHY.ASCENDING,
          rowHeaderComponent: m,
          rowComponent: (e) =>
            (0, r.jsx)("div", { className: e.className, children: e.children }),
          cellComponent: (e) =>
            (0, r.jsx)("div", { className: e.className, children: e.children }),
          hasHeader: !0,
          sortData: !0,
          stickyHeader: !1,
        }),
        (n.Z = _);
    },
    53365: function (e, n, t) {
      t.d(n, {
        $J: function () {
          return h;
        },
        He: function () {
          return l;
        },
        av: function () {
          return _;
        },
        df: function () {
          return f;
        },
        hY: function () {
          return C;
        },
        oL: function () {
          return p;
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
      var a = t(544891),
        r = t(570140),
        i = t(728345),
        s = t(981631),
        o = t(674563);
      async function l(e) {
        await a.tn.post({ url: s.ANM.CREATOR_MONETIZATION_ENABLE_REQUESTS(e) });
      }
      async function c(e) {
        return (
          await a.tn.get({ url: s.ANM.CREATOR_MONETIZATION_ELIGIBILITY(e) })
        ).body;
      }
      async function d(e, n) {
        await a.tn.post({ url: s.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS(e, n) });
      }
      async function u(e) {
        await a.tn.post({ url: s.ANM.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(e) });
      }
      async function m(e) {
        return (
          await a.tn.get({
            url: s.ANM.CREATOR_MONETIZATION_MARKETING_ONBOARDING(e),
          })
        ).body;
      }
      async function _(e) {
        try {
          let n = await a.tn.get({
            url: s.ANM.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: { nag_guild_ids: e },
          });
          r.Z.dispatch({
            type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
            eligibleGuilds: n.body.eligible_guilds,
          });
        } catch (e) {}
      }
      async function f(e, n) {
        let t = (
          await a.tn.post({
            url: s.ANM.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(e),
            body: { team_id: n },
          })
        ).body;
        return (
          null != t.application &&
            r.Z.dispatch({
              type: "APPLICATION_FETCH_SUCCESS",
              application: t.application,
            }),
          t
        );
      }
      function C(e) {
        return a.tn.post({
          url: s.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(e),
        });
      }
      function h(e) {
        return a.tn.post({
          url: s.ANM.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(e),
        });
      }
      async function x(e) {
        await a.tn.post({
          url: s.ANM.CREATOR_MONETIZATION_REMOVE_MONETIZATION(e),
          body: {},
        });
      }
      async function p(e) {
        return (
          await x(e),
          await i.Z.getApplicationsForGuild(e, {
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
      var a,
        r,
        i,
        s,
        o = t(442837),
        l = t(570140);
      let c = 1e3,
        d = 200,
        u = {},
        m = !1;
      class _ extends (s = o.ZP.Store) {
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
        (r = "displayName") in (a = _)
          ? Object.defineProperty(a, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (a[r] = i),
        (n.ZP = new _(l.Z, {
          DISCOVER_CHECKLIST_FETCH_START: function (e) {
            m = !0;
          },
          DISCOVER_CHECKLIST_FETCH_FAILURE: function (e) {
            m = !1;
          },
          DISCOVER_CHECKLIST_FETCH_SUCCESS: function (e) {
            var n;
            let { checklist: t, guildId: a } = e;
            (m = !1),
              (u[a] = {
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
      var a = t(470079),
        r = t(442837),
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
        let n = (0, r.e7)([o.Z], () => o.Z.getGuild(e)),
          t = (0, r.e7)([l.Z], () => l.Z.can(d.Plq.ADMINISTRATOR, n)),
          i = null == n ? void 0 : n.hasFeature(d.oNc.COMMUNITY),
          [m] = (0, r.Wu)([s.Z], () => [s.Z.getMemberCount(e)], [e]),
          _ = (null != m ? m : 0) >= c.WZ && (null != m ? m : 0) < c.TN,
          f = t && i && _;
        a.useEffect(() => {
          f && u.trackExposure({ guildId: e, location: "747eb3_1" });
        }, [e, f]);
        let { enableLowerMemberCountReq: C } = u.useExperiment(
          { guildId: e, location: "747eb3_2" },
          { autoTrackExposure: !1, disable: !f },
        );
        return C;
      }
    },
    296386: function (e, n, t) {
      t.d(n, {
        J9: function () {
          return f;
        },
        K0: function () {
          return E;
        },
        Kq: function () {
          return T;
        },
        P$: function () {
          return x;
        },
        TA: function () {
          return m;
        },
        Vv: function () {
          return g;
        },
        W1: function () {
          return C;
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
          return h;
        },
        t$: function () {
          return p;
        },
        zH: function () {
          return _;
        },
      });
      var a = t(544891),
        r = t(570140),
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
        let d = await a.tn.get({
          url: l.ANM.GUILD_DISCOVERY_CATEGORIES,
          query: { locale: t, primary_only: e },
          oldFormErrors: !0,
        });
        r.Z.dispatch({
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
              about: _,
            } = (
              await a.tn.get({
                url: l.ANM.GUILD_DISCOVERY_METADATA(e),
                oldFormErrors: !0,
              })
            ).body,
            f = {
              primaryCategoryId: n,
              secondaryCategoryIds: t,
              keywords: i,
              emojiDiscoverabilityEnabled: s,
              partnerActionedTimestamp: o,
              partnerApplicationTimestamp: c,
              isPublished: d,
              reasonsToJoin: u,
              socialLinks: m,
              about: _,
            };
          return (
            r.Z.dispatch({
              type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
              guildId: e,
              metadata: f,
            }),
            f
          );
        } catch (e) {
          r.Z.dispatch({ type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL" });
        }
      }
      async function u(e) {
        try {
          let n = (await a.tn.get({ url: l.ANM.GUILD_DISCOVERY_SLUG(e) })).body
            .slug;
          r.Z.dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS", slug: n });
        } catch {
          r.Z.dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL", guildId: e });
        }
      }
      function m(e, n) {
        r.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          primaryCategoryId: n,
        });
      }
      function _(e, n) {
        r.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          keywords: n,
        });
      }
      function f(e, n) {
        r.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          emojiDiscoverabilityEnabled: n,
        });
      }
      function C(e, n) {
        r.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          isPublished: n,
        });
      }
      function h(e, n) {
        r.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          about: n,
        });
      }
      function x(e, n) {
        r.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          reasonsToJoin: n,
        });
      }
      function p(e, n) {
        r.Z.dispatch({
          type: "GUILD_UPDATE_DISCOVERY_METADATA",
          guildId: e,
          socialLinks: n,
        });
      }
      async function g(e) {
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
          about: _,
        } = e;
        try {
          let {
            primary_category_id: e,
            category_ids: f,
            keywords: C,
            emoji_discoverability_enabled: h,
            partner_actioned_timestamp: x,
            partner_application_timestamp: p,
            is_published: g,
            reasons_to_join: T,
            social_links: E,
            about: I,
          } = (
            await a.tn.patch({
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
                about: _,
              },
              oldFormErrors: !0,
            })
          ).body;
          r.Z.dispatch({
            type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
            guildId: n,
            metadata: {
              primaryCategoryId: e,
              secondaryCategoryIds: f,
              keywords: C,
              emojiDiscoverabilityEnabled: h,
              partnerActionedTimestamp: x,
              partnerApplicationTimestamp: p,
              isPublished: g,
              reasonsToJoin: T,
              socialLinks: E,
              about: I,
            },
          });
        } catch (e) {
          throw (
            (r.Z.dispatch({
              type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
              guildId: n,
              errors: e.body,
            }),
            e)
          );
        }
      }
      function T(e, n) {
        a.tn
          .put({
            url: l.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, n),
            oldFormErrors: !0,
          })
          .then(() => {
            r.Z.dispatch({
              type: "GUILD_DISCOVERY_CATEGORY_ADD",
              guildId: e,
              categoryId: n,
            });
          })
          .catch((n) => {
            r.Z.dispatch({
              type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
              guildId: e,
              errors: n.body,
            });
          });
      }
      function E(e, n) {
        a.tn
          .del({
            url: l.ANM.GUILD_DISCOVERY_UPDATE_CATEGORY(e, n),
            oldFormErrors: !0,
          })
          .then(() => {
            r.Z.dispatch({
              type: "GUILD_DISCOVERY_CATEGORY_DELETE",
              guildId: e,
              categoryId: n,
            });
          })
          .catch((n) => {
            r.Z.dispatch({
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
          return f;
        },
      }),
        t(653041),
        t(47120);
      var a,
        r,
        i,
        s,
        o = t(392711),
        l = t.n(o),
        c = t(442837),
        d = t(570140),
        u = t(823379),
        m = t(731455),
        _ = t(689938);
      function f(e, n) {
        return l().isEqual(
          e.map((e) => [e.categoryId, e.name]),
          n.map((e) => [e.categoryId, e.name]),
        );
      }
      let C = null,
        h = [],
        x = [],
        p = {};
      class g extends (a = c.ZP.Store) {
        getPrimaryCategories() {
          return h;
        }
        getDiscoveryCategories() {
          let e = m.L3.map((e) => x.find((n) => n.categoryId === e)).filter(
            u.lm,
          );
          return [{ categoryId: m.Hk, name: _.Z.Messages.HOME }, ...e];
        }
        getClanDiscoveryCategories() {
          let e = m.L3.map((e) => x.find((n) => n.categoryId === e)).filter(
            u.lm,
          );
          return [{ categoryId: m.Hk, name: _.Z.Messages.COMMUNITIES }, ...e];
        }
        getAllCategories() {
          return x;
        }
        getFetchedLocale() {
          return C;
        }
        getCategoryName(e) {
          return e === m.Hk ? _.Z.Messages.HOME : p[e];
        }
      }
      (s = "GuildDiscoveryCategoryStore"),
        (i = "displayName") in (r = g)
          ? Object.defineProperty(r, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[i] = s),
        (n.Z = new g(d.Z, {
          GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
            let n,
              { categories: t, locale: a } = e,
              r = [],
              i = [];
            if (
              (t
                .sort((e, n) => (e.name < n.name ? -1 : 1))
                .forEach((e) => {
                  let { id: t, name: a, is_primary: s } = e;
                  if (t !== m.o3) {
                    if (t === m.dc) {
                      n = { categoryId: t, name: a };
                      return;
                    }
                    !0 === s && r.push({ categoryId: t, name: a }),
                      i.push({ categoryId: t, name: a }),
                      (p[t] = a);
                  }
                }),
              null != n)
            ) {
              let { categoryId: e, name: t } = n;
              r.push({ categoryId: e, name: t }), (p[e] = t);
            }
            (C = a), (h = r), (x = i);
          },
        }));
    },
    11265: function (e, n, t) {
      t(47120);
      var a = t(735250),
        r = t(470079),
        i = t(120356),
        s = t.n(i),
        o = t(526629),
        l = t(481060),
        c = t(393238),
        d = t(689938),
        u = t(379e3);
      n.Z = r.memo(function (e) {
        let {
            renderHeader: n,
            children: t,
            isExpanded: i,
            isStuck: m,
            onExpand: _,
            disableAnimation: f,
            disableBackground: C,
          } = e,
          [h, x] = r.useState(!0),
          [p, g] = r.useState(!1),
          { ref: T, height: E = 0 } = (0, c.Z)(),
          { ref: I, height: b = 0 } = (0, c.Z)(),
          [N, v] = r.useState(i),
          y = (0, l.useSpring)(
            {
              height: N ? b + E : E,
              config: { ...o.config.stiff, clamp: !0 },
              onStart: () => {
                g(!1);
              },
              onRest: () => {
                g(!0);
              },
            },
            h || f ? "animate-never" : "respect-motion-settings",
          );
        return (
          r.useLayoutEffect(() => {
            g(!1), v(i);
          }, [i]),
          r.useLayoutEffect(() => {
            let e = setTimeout(() => {
              x(!1);
            }, 100);
            return () => clearTimeout(e);
          }, []),
          (0, a.jsx)(l.Clickable, {
            className: s()(u.editCard, { [u.toggled]: i, [u.noBackground]: C }),
            children: (0, a.jsxs)(o.animated.div, {
              className: s()(u.contentExpandContainer, {
                [u.showOverflow]: i && p,
              }),
              style: y,
              children: [
                (0, a.jsx)(l.Clickable, {
                  innerRef: T,
                  onClick: m ? void 0 : _,
                  className: s()(u.innerHeader, { [u.toggled]: i && m }),
                  "aria-label": d.Z.Messages.EXPAND,
                  children: n,
                }),
                (0, a.jsx)("div", { ref: I, children: t }),
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
      var a = t(823379),
        r = t(246364),
        i = t(592286);
      let s = (e) => {
        let { required: n, response: t, field_type: i } = e;
        if (!n) return !0;
        if (null == t) return !1;
        switch (i) {
          case r.QJ.TERMS:
          case r.QJ.VERIFICATION:
            return !!t;
          case r.QJ.TEXT_INPUT:
          case r.QJ.PARAGRAPH:
            return "string" == typeof t && "" !== t.trim();
          case r.QJ.MULTIPLE_CHOICE:
            return "number" == typeof t;
          default:
            return (0, a.vE)(i);
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
      var a = t(442837),
        r = t(826581);
      function i(e) {
        let { guildId: n } = e;
        return (0, a.e7)(
          [r.Z],
          () => r.Z.getSubmittedGuildJoinRequestTotal(n),
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
      var a = t(735250);
      t(470079);
      var r = t(692547),
        i = t(481060),
        s = t(626166);
      function o(e) {
        let { title: n, children: t } = e;
        return (0, a.jsxs)("div", {
          className: s.questionContainer,
          children: [
            (0, a.jsx)(i.Text, {
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
        return (0, a.jsxs)("div", {
          className: s.requirementContainer,
          children: [
            (0, a.jsx)(n, {
              className: s.requirementIcon,
              height: 20,
              width: 20,
              size: "custom",
              color: "currentColor",
            }),
            (0, a.jsx)(i.Text, {
              className: s.requirementText,
              variant: "text-md/normal",
              children: t,
            }),
            o
              ? (0, a.jsx)(i.CircleCheckIcon, {
                  size: "md",
                  color: "currentColor",
                  className: s.requirementSuccess,
                  secondaryColor: r.Z.colors.WHITE.css,
                })
              : (0, a.jsx)(i.CircleXIcon, {
                  size: "md",
                  color: "currentColor",
                  className: s.requirementFailure,
                  secondaryColor: r.Z.colors.WHITE.css,
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
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: s.requirementContainer,
              children: [
                (0, a.jsx)(n, {
                  className: s.requirementIcon,
                  height: 20,
                  width: 20,
                  size: "custom",
                  color: "currentColor",
                }),
                (0, a.jsx)(i.Text, {
                  className: s.requirementText,
                  variant: "text-md/normal",
                  children: t,
                }),
                l
                  ? (0, a.jsx)(i.CircleCheckIcon, {
                      size: "md",
                      color: "currentColor",
                      className: s.requirementSuccess,
                      secondaryColor: r.Z.colors.WHITE.css,
                    })
                  : c,
              ],
            }),
            null != o &&
              (0, a.jsx)(i.Text, {
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
          return _;
        },
      });
      var a = t(735250),
        r = t(470079),
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
          _ = r.useMemo(
            () =>
              m.map((e, n) => ({
                name: e,
                value: n,
                radioItemIconClassName: s()(d.multipleChoiceIcon, c),
              })),
            [m, c],
          );
        return (0, a.jsx)(o.RadioGroup, {
          disabled: n,
          options: _,
          value: i,
          onChange: u,
          radioItemClassName: l,
          withTransparentBackground: !0,
        });
      }
      function m(e) {
        let { formField: n } = e,
          t = null != n.response ? n.choices[n.response] : "";
        return (0, a.jsx)(l.hK, {
          title: n.label,
          children: (0, a.jsx)(c.Gi, {
            className: d.fieldBackground,
            value: t,
            disabled: !0,
          }),
        });
      }
      function _(e) {
        let { formField: n, onChange: t } = e;
        return (0, a.jsx)(l.hK, {
          title: n.label,
          children: (0, a.jsx)(u, {
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
      var a = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        s = t(481060),
        o = t(489813),
        l = t(592286),
        c = t(738912);
      function d(e) {
        let {
          value: n,
          placeholder: t,
          onChange: r,
          disabled: o,
          className: d,
          autofocus: u,
        } = e;
        return (0, a.jsx)(s.TextArea, {
          className: i()(c.paragraphFieldBody, d),
          maxLength: l.RS,
          value: null != n ? n : "",
          placeholder: null != t ? t : "",
          onChange: r,
          disabled: o,
          autoFocus: u,
          autosize: !0,
        });
      }
      function u(e) {
        let { formField: n } = e;
        return (0, a.jsx)(o.hK, {
          title: n.label,
          children: (0, a.jsx)(d, {
            className: c.fieldBackground,
            value: n.response,
            disabled: !0,
          }),
        });
      }
      function m(e) {
        let { formField: n, autofocus: t, onChange: r } = e;
        return (0, a.jsx)(o.hK, {
          title: n.label,
          children: (0, a.jsx)(d, {
            className: c.fieldBackground,
            value: n.response,
            onChange: r,
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
          return _;
        },
        dd: function () {
          return f;
        },
      }),
        t(47120);
      var a = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        s = t(481060),
        o = t(454585),
        l = t(489813),
        c = t(689938),
        d = t(738912);
      function u(e) {
        let { terms: n, channelId: t, className: r } = e;
        return (0, a.jsx)("div", {
          className: i()(d.termsFieldBody, r),
          children: n.map((e, n) =>
            (0, a.jsxs)(
              "div",
              {
                className: d.termsRow,
                children: [
                  (0, a.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: "".concat(n + 1, "."),
                  }),
                  (0, a.jsx)(s.Text, {
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
        let { onChange: n, checked: t, disabled: r } = e;
        return (0, a.jsx)(s.Checkbox, {
          size: 20,
          type: s.Checkbox.Types.INVERTED,
          value: t,
          onChange: n,
          disabled: r,
          style: { borderWidth: 2 },
          className: d.checkbox,
          children: (0, a.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: c.Z.Messages.MEMBER_VERIFICATION_READ_RULES,
          }),
        });
      }
      function _(e) {
        let { formField: n } = e;
        return (0, a.jsx)(l.Ih, {
          icon: s.BookCheckIcon,
          text: c.Z.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
          meetsRequirement: !!n.response,
        });
      }
      let f = (e) => {
        let { channelId: n, formField: t, onChange: r } = e;
        return (0, a.jsxs)(l.hK, {
          title: c.Z.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
          children: [
            (0, a.jsx)(u, {
              className: d.fieldBackground,
              terms: t.values,
              channelId: n,
            }),
            (0, a.jsx)(m, { onChange: r, checked: t.response }),
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
      var a = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        s = t(481060),
        o = t(489813),
        l = t(592286),
        c = t(738912);
      function d(e) {
        let {
          value: n,
          placeholder: t,
          onChange: r,
          disabled: o,
          autofocus: d,
          className: u,
        } = e;
        return (0, a.jsx)(s.TextInput, {
          inputClassName: i()(c.textInputFieldBodyInput, u),
          maxLength: l.tL,
          value: null != n ? n : "",
          placeholder: t,
          onChange: r,
          disabled: o,
          autoFocus: d,
        });
      }
      function u(e) {
        let { formField: n } = e;
        return (0, a.jsx)(o.hK, {
          title: n.label,
          children: (0, a.jsx)(s.TextArea, {
            className: i()(c.textInputFieldBodyInput, c.fieldBackground),
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
          }),
        });
      }
      function m(e) {
        let { formField: n, autofocus: t, onChange: r } = e;
        return (0, a.jsx)(o.hK, {
          title: n.label,
          children: (0, a.jsx)(d, {
            className: c.fieldBackground,
            onChange: r,
            value: n.response,
            autofocus: t,
          }),
        });
      }
    },
    5056: function (e, n, t) {
      var a = t(735250),
        r = t(470079),
        i = t(120356),
        s = t.n(i),
        o = t(481060),
        l = t(838221),
        c = t(246364),
        d = t(700833),
        u = t(689938),
        m = t(631403);
      function _(e) {
        let { onClick: n, text: t, icon: r } = e;
        return (0, a.jsx)("div", {
          className: m.addFormFieldContainer,
          children: (0, a.jsxs)(o.Clickable, {
            className: m.addFormField,
            onClick: n,
            children: [
              (0, a.jsx)(r, {
                className: m.icon,
                size: "xs",
                color: "currentColor",
              }),
              (0, a.jsx)(o.FormText, {
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
            guild: f,
            showHeader: C,
          } = e,
          h = r.useCallback(
            (e) => {
              (0, d.Md)(e, n, f);
            },
            [n, f],
          ),
          x = r.useCallback(
            (e) => {
              i
                ? (0, o.openModalLazy)(async () => {
                    let { default: n } = await t
                      .e("54845")
                      .then(t.bind(t, 199836));
                    return (t) => (0, a.jsx)(n, { ...t, onSubmit: () => h(e) });
                  })
                : h(e);
            },
            [i, h],
          );
        return (0, a.jsxs)("div", {
          className: s()(m.spacingContainer, m.backgroundContainer),
          children: [
            C &&
              (0, a.jsx)("div", {
                className: m.containerTopHat,
                children: (0, a.jsx)(o.Text, {
                  className: m.containerTopHatText,
                  variant: "text-xs/bold",
                  color: "header-secondary",
                  children:
                    u.Z.Messages
                      .GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED,
                }),
              }),
            (0, a.jsxs)("div", {
              className: m.leftRailIconContainer,
              children: [
                (0, a.jsx)("div", {
                  className: m.iconContainer,
                  children: (0, a.jsx)(o.PlusSmallIcon, {
                    size: "custom",
                    color: "currentColor",
                    width: 18,
                    height: 20,
                    className: m.icon,
                  }),
                }),
                (0, a.jsxs)(o.FormSection, {
                  children: [
                    (0, a.jsx)(o.FormTitle, {
                      tag: "h3",
                      className: m.leftRailIconContainerTitle,
                      children: u.Z.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS,
                    }),
                    (0, a.jsx)(o.FormText, {
                      className: m.leftRailIconContainerDescription,
                      type: o.FormText.Types.DESCRIPTION,
                      children:
                        u.Z.Messages
                          .MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION,
                    }),
                    (0, a.jsx)(_, {
                      formFieldType: c.QJ.TEXT_INPUT,
                      addFormField: n,
                      icon: (0, o.makeIconCompat)(l.Z),
                      text: u.Z.Messages
                        .MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
                      onClick: () => x(c.QJ.TEXT_INPUT),
                    }),
                    (0, a.jsx)(_, {
                      formFieldType: c.QJ.PARAGRAPH,
                      addFormField: n,
                      icon: o.ChannelListIcon,
                      text: u.Z.Messages
                        .MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
                      onClick: () => x(c.QJ.PARAGRAPH),
                    }),
                    (0, a.jsx)(_, {
                      formFieldType: c.QJ.MULTIPLE_CHOICE,
                      addFormField: n,
                      icon: o.ListBulletsIcon,
                      text: u.Z.Messages
                        .MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
                      onClick: () => x(c.QJ.MULTIPLE_CHOICE),
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
      var a = t(735250),
        r = t(470079),
        i = t(481060),
        s = t(881052),
        o = t(484455),
        l = t(592286),
        c = t(689938),
        d = t(631403);
      n.Z = function (e) {
        let { guildId: n, onSave: t, formDescription: u, disable: m } = e,
          [_, f] = r.useState(null),
          [C, h] = r.useState(u),
          x = r.useRef(!1),
          p = r.useRef(!1);
        r.useEffect(
          () => () => {
            p.current = !0;
          },
          [],
        );
        let g = r.useCallback(async () => {
          if (!x.current) {
            f(null);
            try {
              await t(n, C);
            } catch (e) {
              if (p.current) return;
              f(new s.Hx(e).getAnyErrorMessage());
            } finally {
              if (p.current) return;
              x.current = !1;
            }
          }
        }, [C, n, t]);
        return (0, a.jsxs)(o.Z, {
          title:
            c.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_TITLE,
          children: [
            (0, a.jsx)(i.TextArea, {
              className: d.fieldBackground,
              maxLength: l.Us,
              value: null != C ? C : "",
              placeholder:
                c.Z.Messages
                  .GUILD_SETTINGS_MEMBER_VERIFICATION_DESCRIPTION_PLACEHOLDER,
              onChange: (e) => {
                h(e);
              },
              onBlur: g,
              autosize: !0,
              disabled: m,
            }),
            null != _ && "" !== _
              ? (0, a.jsx)(i.Text, {
                  className: d.errorText,
                  variant: "text-xs/normal",
                  color: "text-danger",
                  children: _,
                })
              : null,
          ],
        });
      };
    },
    297619: function (e, n, t) {
      var a = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        s = t(481060),
        o = t(246364),
        l = t(700833),
        c = t(689938),
        d = t(631403);
      n.Z = function (e) {
        let { addFormField: n, guild: t } = e;
        return (0, a.jsxs)("div", {
          className: i()(
            d.spacingContainer,
            d.leftRailIconContainer,
            d.backgroundContainer,
          ),
          children: [
            (0, a.jsx)("div", {
              className: d.iconContainer,
              children: (0, a.jsx)(s.BookCheckIcon, {
                size: "custom",
                color: "currentColor",
                width: 18,
                height: 20,
                className: d.icon,
              }),
            }),
            (0, a.jsxs)(s.FormSection, {
              children: [
                (0, a.jsx)(s.FormTitle, {
                  tag: "h3",
                  className: d.leftRailIconContainerTitle,
                  children: c.Z.Messages.MEMBER_VERIFICATION_GET_STARTED_TITLE,
                }),
                (0, a.jsx)(s.FormText, {
                  className: d.leftRailIconContainerDescription,
                  type: s.FormText.Types.DESCRIPTION,
                  children:
                    c.Z.Messages.MEMBER_VERIFICATION_GET_STARTED_DESCRIPTION,
                }),
                (0, a.jsx)(s.Button, {
                  onClick: () => (0, l.Md)(o.QJ.TERMS, n, t),
                  children: c.Z.Messages.MEMBER_VERIFICATION_GET_STARTED_BUTTON,
                }),
              ],
            }),
          ],
        });
      };
    },
    405545: function (e, n, t) {
      var a = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        s = t(186078),
        o = t(137158),
        l = t(631403);
      n.Z = function (e) {
        let {
            formField: n,
            index: t,
            isDragEnabled: r,
            isDropHovered: c,
            onDrop: d,
            onEdit: u,
            onRemove: m,
            canRemove: _,
            actionsLocation: f,
          } = e,
          { label: C } = n;
        return (0, a.jsx)(o.Z, {
          field: n,
          index: t,
          isDragEnabled: r,
          isDropHovered: c,
          onDrop: d,
          onEdit: u,
          onRemove: m,
          title: C,
          canRemove: _,
          actionsLocation: f,
          children: (0, a.jsx)(s.BO, {
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
          return x;
        },
      }),
        t(47120);
      var a = t(735250),
        r = t(470079),
        i = t(120356),
        s = t.n(i),
        o = t(392711),
        l = t(225857),
        c = t(290843),
        d = t(692547),
        u = t(481060),
        m = t(689938),
        _ = t(631403);
      function f(e) {
        let {
          title: n,
          children: t,
          onEdit: r,
          onRemove: i,
          canRemove: o,
          actionsLocation: l,
        } = e;
        return (0, a.jsxs)("div", {
          className: _.backgroundContainer,
          children: [
            (0, a.jsxs)("div", {
              className: _.containerPadding,
              children: [
                (0, a.jsx)(u.FormTitle, {
                  tag: "h3",
                  className: _.containerTitle,
                  children: n,
                }),
                t,
              ],
            }),
            "footer" === l &&
              (0, a.jsxs)(u.FormSection, {
                className: _.containerFooter,
                children: [
                  (0, a.jsx)(u.Tooltip, {
                    text: m.Z.Messages.CLAN_APPLICATION_CANT_REMOVE_FIELD,
                    shouldShow: !o,
                    children: (e) =>
                      (0, a.jsx)(u.Button, {
                        ...e,
                        className: s()(_.removeButton, _.button),
                        size: u.Button.Sizes.SMALL,
                        look: u.Button.Looks.BLANK,
                        onClick: i,
                        disabled: !o,
                        children: m.Z.Messages.REMOVE,
                      }),
                  }),
                  (0, a.jsx)(u.Button, {
                    className: _.button,
                    size: u.Button.Sizes.SMALL,
                    color: u.Button.Colors.PRIMARY,
                    onClick: r,
                    children: m.Z.Messages.EDIT,
                  }),
                ],
              }),
          ],
        });
      }
      let C = "FORM_FIELD";
      function h(e) {
        let { index: n, field: t, isDropHovered: i, onDrop: m } = e,
          h = (0, o.debounce)(async (e, n, t) => {
            await m(e, n, t);
          }),
          x = r.useRef(null),
          [, p] = (0, l.c)({
            type: C,
            item: { index: n, field: t },
            end: (e, n) => {
              null != e && !n.didDrop() && h(e.field, null, !0);
            },
          }),
          [, g] = (0, c.L)({
            accept: C,
            hover: (e, t) => {
              var a;
              let { index: r } = e,
                i =
                  null === (a = x.current) || void 0 === a
                    ? void 0
                    : a.getBoundingClientRect(),
                s = t.getClientOffset();
              if (null == i || null == s) return;
              let o = (i.bottom - i.top) / 2,
                l = s.y - i.top;
              (!(r < n) || !(l < o)) &&
                (!(r > n) || !(l < o)) &&
                r !== n &&
                h(e.field, n, !1);
            },
            drop: (e) => {
              h(e.field, n, !0);
            },
          });
        return (
          r.useLayoutEffect(
            () => (
              p(g(x)),
              () => {
                g(null), p(null);
              }
            ),
            [p, g],
          ),
          (0, a.jsxs)("div", {
            ref: x,
            "data-dnd-name": "field-".concat(n),
            className: s()(_.dragContainer, { [_.dropHovered]: i }),
            children: [
              (0, a.jsx)("div", {
                className: _.dragIconContainer,
                children: (0, a.jsx)(u.DragIcon, {
                  size: "xs",
                  className: _.dragIcon,
                  color: d.Z.unsafe_rawColors.PRIMARY_400.css,
                }),
              }),
              (0, a.jsx)(f, { ...e }),
            ],
          })
        );
      }
      function x(e) {
        return (0, a.jsxs)("div", {
          className: _.formFieldContainer,
          children: [
            (0, a.jsx)("div", {
              className: _.spacingContainer,
              children: e.isDragEnabled
                ? (0, a.jsx)(h, { ...e })
                : (0, a.jsx)(f, { ...e }),
            }),
            "side" === e.actionsLocation &&
              (0, a.jsxs)("div", {
                className: _.actionButtonsContainer,
                children: [
                  (0, a.jsx)(u.Clickable, {
                    className: _.actionButton,
                    onClick: e.onEdit,
                    "aria-label": m.Z.Messages.EDIT,
                    children: (0, a.jsx)(u.PencilIcon, { size: "xs" }),
                  }),
                  e.canRemove &&
                    (0, a.jsx)(u.Clickable, {
                      className: _.actionButton,
                      onClick: e.onRemove,
                      "aria-label": m.Z.Messages.REMOVE,
                      children: (0, a.jsx)(u.TrashIcon, { size: "xs" }),
                    }),
                ],
              }),
          ],
        });
      }
    },
    382574: function (e, n, t) {
      var a = t(735250);
      t(470079);
      var r = t(73880),
        i = t(137158),
        s = t(689938),
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
            canRemove: _,
            actionsLocation: f,
          } = e,
          { label: C, placeholder: h } = n;
        return (0, a.jsx)(i.Z, {
          field: n,
          index: t,
          isDragEnabled: l,
          isDropHovered: c,
          onDrop: d,
          onEdit: u,
          onRemove: m,
          title: C,
          canRemove: _,
          actionsLocation: f,
          children: (0, a.jsx)(r.Q8, {
            className: o.fieldBackground,
            placeholder:
              null != h
                ? h
                : s.Z.Messages.MEMBER_VERIFICATION_ANSWER_PLACEHOLDER,
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
      var a = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        s = t(481060),
        o = t(631403);
      function l(e) {
        let { title: n, children: t } = e;
        return (0, a.jsxs)(s.FormSection, {
          className: i()(
            o.backgroundContainer,
            o.spacingContainer,
            o.containerPadding,
          ),
          children: [
            (0, a.jsx)(s.FormTitle, {
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
      var a = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        s = t(692547),
        o = t(481060),
        l = t(259580),
        c = t(196345),
        d = t(137158),
        u = t(689938),
        m = t(631403);
      n.Z = function (e) {
        let {
            channelId: n,
            formField: t,
            index: r,
            isDragEnabled: _,
            isDropHovered: f,
            onDrop: C,
            onEdit: h,
            onRemove: x,
            canRemove: p,
            title: g,
            actionsLocation: T,
          } = e,
          E = t.values,
          I = E.slice(0, 1),
          b = E.length - I.length;
        return (0, a.jsxs)(d.Z, {
          field: t,
          index: r,
          isDragEnabled: _,
          isDropHovered: f,
          onDrop: C,
          onEdit: h,
          onRemove: x,
          title: g,
          canRemove: p,
          actionsLocation: T,
          children: [
            (0, a.jsx)(c.EK, {
              className: i()(m.fieldBackground, { [m.withFooter]: 0 !== b }),
              terms: I,
              channelId: n,
            }),
            0 !== b &&
              (0, a.jsxs)(o.Clickable, {
                className: i()(m.fieldFooterContainer, m.clickable),
                onClick: h,
                children: [
                  (0, a.jsx)(o.FormText, {
                    className: m.clickable,
                    children:
                      u.Z.Messages.MEMBER_VERIFICATION_OTHER_RULES.format({
                        count: b,
                      }),
                  }),
                  (0, a.jsx)(l.Z, {
                    className: m.termsFieldCaretIcon,
                    height: 14,
                    width: 14,
                    color: s.Z.unsafe_rawColors.WHITE_500.css,
                  }),
                ],
              }),
            (0, a.jsx)(c.G0, { disabled: !0, checked: !1 }),
          ],
        });
      };
    },
    786127: function (e, n, t) {
      var a = t(735250);
      t(470079);
      var r = t(707592),
        i = t(137158),
        s = t(689938),
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
            canRemove: _,
            actionsLocation: f,
          } = e,
          { label: C, placeholder: h } = n;
        return (0, a.jsx)(i.Z, {
          field: n,
          index: t,
          isDragEnabled: l,
          isDropHovered: c,
          onDrop: d,
          onEdit: u,
          onRemove: m,
          title: C,
          canRemove: _,
          actionsLocation: f,
          children: (0, a.jsx)(r.Gi, {
            className: o.fieldBackground,
            placeholder:
              null != h
                ? h
                : s.Z.Messages.MEMBER_VERIFICATION_ANSWER_PLACEHOLDER,
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
      var a = t(735250),
        r = t(470079),
        i = t(692547),
        s = t(481060),
        o = t(496675),
        l = t(484455),
        c = t(981631),
        d = t(689938),
        u = t(631403);
      function m(e) {
        switch (e) {
          case c.sFg.LOW:
            return d.Z.Messages.VERIFICATION_LEVEL_LOW;
          case c.sFg.MEDIUM:
            return d.Z.Messages.VERIFICATION_LEVEL_MEDIUM;
          case c.sFg.HIGH:
            return d.Z.Messages.VERIFICATION_LEVEL_HIGH;
          case c.sFg.VERY_HIGH:
            return d.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH;
          default:
            return "";
        }
      }
      let _ = {
        [c.sFg.NONE]: "",
        [c.sFg.LOW]: i.Z.unsafe_rawColors.GREEN_360.css,
        [c.sFg.MEDIUM]: i.Z.unsafe_rawColors.YELLOW_300.css,
        [c.sFg.HIGH]: i.Z.unsafe_rawColors.ORANGE_345.css,
        [c.sFg.VERY_HIGH]: i.Z.unsafe_rawColors.RED_400.css,
      };
      n.ZP = function (e) {
        let { guild: n } = e,
          i = o.Z.can(c.Plq.MANAGE_GUILD, n),
          f = n.verificationLevel,
          C = f === c.sFg.VERY_HIGH ? s.MobilePhoneIcon : s.EnvelopeIcon,
          h = r.useMemo(() => m(f), [f]),
          x = _[f],
          p = (0, a.jsx)("div", {
            className: u.verificationLevelTitle,
            children:
              d.Z.Messages.MEMBER_VERIFICATION_GUILD_VERIFICATION_LEVEL.format({
                verificationLevelHook: function () {
                  return (0, a.jsx)(
                    s.Text,
                    {
                      className: u.verificationLevelHook,
                      style: { color: x },
                      variant: "text-sm/semibold",
                      children: h,
                    },
                    "hook",
                  );
                },
              }),
          }),
          g =
            f === c.sFg.VERY_HIGH
              ? d.Z.Messages
                  .MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_SETTINGS_LABEL
              : d.Z.Messages
                  .MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_SETTINGS_LABEL;
        return (0, a.jsx)(l.Z, {
          title: p,
          children: (0, a.jsxs)("div", {
            className: u.verificationContainer,
            children: [
              (0, a.jsx)(C, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: u.icon,
              }),
              (0, a.jsx)(s.Text, {
                className: u.guildVerificationText,
                variant: "text-sm/normal",
                children: g,
              }),
              i &&
                (0, a.jsx)(s.Clickable, {
                  className: u.iconInteractiveContainer,
                  onClick: () =>
                    (0, s.openModalLazy)(async () => {
                      let { default: e } = await t
                        .e("72458")
                        .then(t.bind(t, 694278));
                      return (t) => (0, a.jsx)(e, { ...t, guild: n });
                    }),
                  children: (0, a.jsx)(s.PencilIcon, {
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
      var a = t(735250);
      t(470079);
      var r = t(481060),
        i = t(239091),
        s = t(838221),
        o = t(246364),
        l = t(700833),
        c = t(689938),
        d = t(207029);
      function u(e) {
        let { addFormField: n, onSelect: t, guild: u } = e;
        return (0, a.jsx)(r.Menu, {
          navId: "add-questions",
          className: d.menu,
          onClose: i.Zy,
          "aria-label": c.Z.Messages.USER_ACTIONS_MENU_LABEL,
          onSelect: t,
          children: (0, a.jsxs)(r.MenuGroup, {
            children: [
              (0, a.jsx)(r.MenuItem, {
                id: "text-input",
                icon: (0, r.makeIconCompat)(s.Z),
                label: c.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
                action: () => (0, l.Md)(o.QJ.TEXT_INPUT, n, u),
              }),
              (0, a.jsx)(r.MenuItem, {
                id: "paragraph",
                icon: r.ChannelListIcon,
                label: c.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
                action: () => (0, l.Md)(o.QJ.PARAGRAPH, n, u),
              }),
              (0, a.jsx)(r.MenuItem, {
                id: "multiple-choice",
                icon: r.ListBulletsIcon,
                label:
                  c.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
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
              (e) => (0, a.jsx)(u, { ...e, addFormField: n, guild: t }),
              { position: "top", align: "center" },
            );
          };
        return (0, a.jsx)(r.Tooltip, {
          text: c.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_QUESTION_LIMIT,
          children: (e) =>
            (0, a.jsxs)(r.Clickable, {
              ...e,
              className: d.container,
              onClick: s,
              children: [
                (0, a.jsx)(r.PlusSmallIcon, {
                  size: "md",
                  color: "currentColor",
                  className: d.icon,
                }),
                (0, a.jsx)(r.Text, {
                  color: "interactive-active",
                  variant: "text-md/semibold",
                  children: c.Z.Messages.MEMBER_VERIFICATION_ADD_QUESTION,
                }),
              ],
            }),
        });
      };
    },
    700833: function (e, n, t) {
      t.d(n, {
        Md: function () {
          return f;
        },
        a0: function () {
          return _;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(392711),
        i = t(481060),
        s = t(246364),
        o = t(405545),
        l = t(382574),
        c = t(279988),
        d = t(786127),
        u = t(981631),
        m = t(689938);
      function _(e) {
        let {
            dropHoveredIndex: n,
            formField: u,
            guild: _,
            index: f,
            isDragEnabled: h,
            submittedGuildJoinRequestsCount: x,
            removeFormField: p,
            updateFormField: g,
            updateFormFieldOrder: T,
            canRemove: E,
            actionsLocation: I,
          } = e,
          b = async () => {
            await p(f);
          },
          N = async (e) => {
            await g(f, e);
          },
          v = async (e, n, t) => {
            await T(e, n, t);
          },
          y = (0, r.uniqueId)(),
          S = n === f,
          A = {
            key: y,
            index: f,
            isDragEnabled: h,
            isDropHovered: S,
            onEdit: () => {
              0 === x
                ? C(u, N, _)
                : (0, i.openModalLazy)(async () => {
                    let { default: e } = await t
                      .e("74673")
                      .then(t.bind(t, 394045));
                    return (n) =>
                      (0, a.jsx)(e, {
                        ...n,
                        guildId: _.id,
                        submittedGuildJoinRequestsCount: x,
                        onConfirm: () => C(u, N, _),
                      });
                  });
            },
            onRemove: b,
            onDrop: v,
            canRemove: E,
            actionsLocation: I,
          };
        switch (u.field_type) {
          case s.QJ.TERMS:
            return (0, a.jsx)(c.Z, {
              channelId: _.rulesChannelId,
              title: m.Z.Messages.GUILD_RULES_HEADER,
              formField: u,
              ...A,
            });
          case s.QJ.PARAGRAPH:
            return (0, a.jsx)(l.Z, { formField: u, ...A });
          case s.QJ.TEXT_INPUT:
            return (0, a.jsx)(d.Z, { formField: u, ...A });
          case s.QJ.MULTIPLE_CHOICE:
            return (0, a.jsx)(o.Z, { formField: u, ...A });
          default:
            return null;
        }
      }
      function f(e, n, r) {
        let o = { onCloseRequest: u.dG4 };
        switch (e) {
          case s.QJ.TERMS:
            return (0, i.openModalLazy)(async () => {
              let { default: e } = await t.e("5945").then(t.bind(t, 92451));
              return (t) =>
                (0, a.jsx)(e, { ...t, field: void 0, onSave: n, guild: r });
            }, o);
          case s.QJ.PARAGRAPH:
            return (0, i.openModalLazy)(async () => {
              let { ParagraphFormFieldModal: e } = await t
                .e("6595")
                .then(t.bind(t, 457042));
              return (t) => (0, a.jsx)(e, { ...t, field: void 0, onSave: n });
            }, o);
          case s.QJ.TEXT_INPUT:
            return (0, i.openModalLazy)(async () => {
              let { TextInputFormFieldModal: e } = await t
                .e("6595")
                .then(t.bind(t, 457042));
              return (t) => (0, a.jsx)(e, { ...t, field: void 0, onSave: n });
            }, o);
          case s.QJ.MULTIPLE_CHOICE:
            return (0, i.openModalLazy)(async () => {
              let { default: e } = await t.e("94064").then(t.bind(t, 607569));
              return (t) => (0, a.jsx)(e, { ...t, field: void 0, onSave: n });
            }, o);
        }
      }
      function C(e, n, r) {
        let o = { onCloseRequest: u.dG4 };
        switch (e.field_type) {
          case s.QJ.TERMS:
            return (0, i.openModalLazy)(async () => {
              let { default: i } = await t.e("5945").then(t.bind(t, 92451));
              return (t) =>
                (0, a.jsx)(i, { ...t, field: e, onSave: n, guild: r });
            }, o);
          case s.QJ.PARAGRAPH:
            return (0, i.openModalLazy)(async () => {
              let { ParagraphFormFieldModal: r } = await t
                .e("6595")
                .then(t.bind(t, 457042));
              return (t) => (0, a.jsx)(r, { ...t, field: e, onSave: n });
            }, o);
          case s.QJ.TEXT_INPUT:
            return (0, i.openModalLazy)(async () => {
              let { TextInputFormFieldModal: r } = await t
                .e("6595")
                .then(t.bind(t, 457042));
              return (t) => (0, a.jsx)(r, { ...t, field: e, onSave: n });
            }, o);
          case s.QJ.MULTIPLE_CHOICE:
            return (0, i.openModalLazy)(async () => {
              let { default: r } = await t.e("94064").then(t.bind(t, 607569));
              return (t) => (0, a.jsx)(r, { ...t, field: e, onSave: n });
            }, o);
        }
      }
    },
    755340: function (e, n, t) {
      t(47120);
      var a = t(735250),
        r = t(470079),
        i = t(442837),
        s = t(481060),
        o = t(496675),
        l = t(246364),
        c = t(983736),
        d = t(5056),
        u = t(565321),
        m = t(297619),
        _ = t(456935),
        f = t(446945),
        C = t(700833),
        h = t(592286),
        x = t(981631),
        p = t(689938);
      n.Z = function (e) {
        let {
            guild: n,
            submittedGuildJoinRequestsCount: t,
            onFormFieldUpdate: g,
            hideVerificationLevelField: T,
            isClanContext: E,
            formDescription: I,
            onFieldsSave: b,
            onDescriptionSave: N,
          } = e,
          v = r.useRef(!1),
          [y, S] = r.useState(null),
          [A, M] = r.useState(e.formFields);
        r.useEffect(() => M(e.formFields), [e.formFields]);
        let j = r.useRef(e.formFields),
          R = r.useMemo(() => A.filter(c.kT), [A]),
          L = r.useMemo(() => A.filter(c._C), [A]),
          O = L.length,
          Z = r.useMemo(() => A.length === h.nx, [A]),
          k = r.useMemo(() => A.some(l.J), [A]),
          D = r.useMemo(() => A.some((e) => !(0, l.J)(e)), [A]),
          P = O > 0,
          w = n.hasFeature(x.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) || E,
          F = r.useCallback(() => {
            (0, s.showToast)(
              (0, s.createToast)(
                p.Z.Messages.ERROR_GENERIC_TITLE,
                s.ToastType.FAILURE,
              ),
            );
          }, []),
          G = (0, i.e7)([o.Z], () => o.Z.can(x.Plq.MANAGE_GUILD, n)),
          B = r.useCallback(
            async (e) => {
              if (!v.current) {
                (v.current = !0),
                  E && (e = e.filter((e) => e.field_type !== l.QJ.TERMS));
                try {
                  await b(n.id, e), g(), M(e), (j.current = e);
                } catch (e) {
                  throw (M(j.current), e);
                } finally {
                  null != y && S(null), (v.current = !1);
                }
              }
            },
            [y, n.id, g, b, E],
          ),
          U = r.useCallback(
            async (e) => {
              let n = e.field_type === l.QJ.TERMS ? [e, ...A] : [...A, e];
              await B(n);
            },
            [A, B],
          ),
          H = r.useCallback(
            async (e, n) => {
              if (A[e] === n) return;
              let t = [...A];
              (t[e] = n), await B(t);
            },
            [A, B],
          ),
          V = r.useCallback(
            async (e, n, t) => {
              let a = A.indexOf(e),
                r = [...A];
              if (
                (null != n &&
                  n !== a &&
                  (r.splice(a, 1), r.splice(n, 0, e), M(r)),
                t)
              )
                try {
                  await B(r), null !== y && S(null);
                } catch (e) {
                  F();
                }
              else y !== n && S(n);
            },
            [y, A, B, F],
          ),
          W = r.useCallback(
            async (e) => {
              try {
                await B([...A.slice(0, e), ...A.slice(e + 1)]);
              } catch (e) {
                F();
              }
            },
            [A, B, F],
          ),
          Y = G ? (E ? "side" : "footer") : "none",
          K = (0, a.jsxs)(a.Fragment, {
            children: [
              !T && (0, a.jsx)(_.ZP, { guild: n }),
              (0, a.jsx)(u.Z, {
                formDescription: I,
                guildId: n.id,
                onSave: N,
                disable: !G,
              }),
              G && !k && !Z && (0, a.jsx)(m.Z, { addFormField: U, guild: n }),
              R.map((e) =>
                (0, C.a0)({
                  dropHoveredIndex: y,
                  formField: e,
                  guild: n,
                  index: A.indexOf(e),
                  isDragEnabled: !1,
                  submittedGuildJoinRequestsCount: t,
                  removeFormField: W,
                  updateFormField: H,
                  updateFormFieldOrder: V,
                  canRemove: !0,
                  actionsLocation: Y,
                }),
              ),
            ],
          });
        return w
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                !E && K,
                !D &&
                  (0, a.jsx)(d.Z, {
                    addFormField: U,
                    showManualApprovalWarning: !E && !P,
                    guild: n,
                    showHeader: !E,
                  }),
                L.map((e) =>
                  (0, C.a0)({
                    dropHoveredIndex: y,
                    formField: e,
                    guild: n,
                    index: A.indexOf(e),
                    isDragEnabled: P && G,
                    submittedGuildJoinRequestsCount: t,
                    removeFormField: W,
                    updateFormField: H,
                    updateFormFieldOrder: V,
                    canRemove: !(E && L.length <= 1) && G,
                    actionsLocation: Y,
                  }),
                ),
                D && !Z && G && (0, a.jsx)(f.Z, { addFormField: U, guild: n }),
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
      var a = t(735250);
      t(470079);
      var r = t(120356),
        i = t.n(r),
        s = t(481060),
        o = t(176981);
      function l(e) {
        let {
            checked: n,
            onChange: t,
            disabled: r,
            className: l,
            tooltipProps: c,
          } = e,
          d = (e) => {
            e.stopPropagation(), e.preventDefault();
          };
        return (0, a.jsx)(s.Clickable, {
          onClick: d,
          onMouseDown: d,
          onMouseUp: d,
          className: i()(o.switch, l),
          ...c,
          children: (0, a.jsx)(s.Switch, {
            checked: n,
            onChange: t,
            disabled: r,
          }),
        });
      }
    },
    616230: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return I;
        },
      }),
        t(47120);
      var a = t(735250),
        r = t(470079),
        i = t(120356),
        s = t.n(i),
        o = t(442837),
        l = t(481060),
        c = t(11265),
        d = t(863249),
        u = t(944163),
        m = t(246364),
        _ = t(571728),
        f = t(755340),
        C = t(449226),
        h = t(689938),
        x = t(176981),
        p = t(13441);
      function g(e) {
        let {
            guild: n,
            isExpanded: i,
            emptyFormFields: s,
            hasTermsField: o,
          } = e,
          c = n.hasVerificationGate(),
          [u, m] = r.useState(c),
          _ = (e) => {
            e.preventDefault(), e.stopPropagation();
          },
          f = async (e) => {
            try {
              m(e), await d.ZP.enableVerificationForm(n.id, e);
            } catch {
              m(u);
            }
          },
          g = (e) => {
            e && s
              ? (0, l.openModalLazy)(async () => {
                  let { ConfirmModal: n } = await Promise.resolve().then(
                    t.bind(t, 481060),
                  );
                  return (t) =>
                    (0, a.jsx)(n, {
                      ...t,
                      header: h.Z.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
                      cancelText:
                        h.Z.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
                      confirmText:
                        h.Z.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
                      onConfirm: () => f(e),
                      children: (0, a.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children:
                          h.Z.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING,
                      }),
                    });
                })
              : f(e);
          },
          T = () => {
            (0, l.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                t.e("80026"),
                t.e("36869"),
              ]).then(t.bind(t, 645264));
              return (t) =>
                (0, a.jsx)(e, { ...t, guildId: n.id, isPreview: !0 });
            });
          };
        return (0, a.jsxs)("div", {
          className: x.itemWrapper,
          children: [
            (0, a.jsxs)("div", {
              className: x.itemContent,
              children: [
                (0, a.jsx)(l.Heading, {
                  variant: "text-md/semibold",
                  color: "header-primary",
                  children: h.Z.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING,
                }),
                (i || (s && !u)) &&
                  (0, a.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    children:
                      h.Z.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE,
                  }),
                !i &&
                  (0, a.jsx)("div", {
                    className: p.pillRow,
                    children:
                      o &&
                      (0, a.jsxs)(l.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        className: x.valuePill,
                        children: [
                          (0, a.jsx)(l.BookCheckIcon, {
                            size: "custom",
                            color: "currentColor",
                            width: 16,
                            height: 16,
                          }),
                          h.Z.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL,
                        ],
                      }),
                  }),
              ],
            }),
            (0, a.jsx)("div", {
              className: p.previewAndEnable,
              children:
                i || u || !s
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(l.Clickable, {
                          onMouseDown: _,
                          onMouseUp: _,
                          onClick: (e) => {
                            _(e), T();
                          },
                          children: (0, a.jsx)(l.Tooltip, {
                            tooltipContentClassName: p.__invalid_tooltip,
                            text: h.Z.Messages.PREVIEW,
                            children: (e) =>
                              (0, a.jsx)(l.EyeIcon, {
                                size: "md",
                                color: "currentColor",
                                className: p.previewIcon,
                                ...e,
                              }),
                          }),
                        }),
                        (0, a.jsx)(C.Z, { checked: u, onChange: () => g(!u) }),
                      ],
                    })
                  : (0, a.jsx)(l.Button, {
                      size: l.Button.Sizes.SMALL,
                      children: h.Z.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON,
                    }),
            }),
          ],
        });
      }
      async function T(e, n) {
        await d.ZP.updateVerificationForm(e, n);
      }
      async function E(e, n) {
        await d.ZP.updateVerificationFormDescription(e, n);
      }
      function I(e) {
        var n, t, i;
        let {
            guild: l,
            isClanContext: C = !1,
            onFieldsSave: h,
            onDescriptionSave: I,
            verificationForm: b,
          } = e,
          [N, v] = r.useState(C),
          y = r.useRef(!1),
          S = r.useCallback(() => {
            y.current = !0;
          }, []),
          A =
            null !== (n = (0, _.A)({ guildId: l.id })) && void 0 !== n ? n : 0,
          M = (0, o.e7)([u.Z], () => (null != b ? b : u.Z.get(l.id))),
          j =
            null !== (t = null == M ? void 0 : M.formFields) && void 0 !== t
              ? t
              : [];
        r.useEffect(() => {
          d.ZP.fetchVerificationForm(l.id);
        }, [l.id]);
        let R = null != M,
          L = !C;
        return (0, a.jsx)(c.Z, {
          renderHeader: L
            ? (0, a.jsx)(g, {
                guild: l,
                isExpanded: N,
                emptyFormFields:
                  (null == j ? void 0 : j.length) == null ||
                  (null == j ? void 0 : j.length) === 0,
                hasTermsField:
                  null == j
                    ? void 0
                    : j.some((e) => e.field_type === m.QJ.TERMS),
              })
            : null,
          isExpanded: N,
          onExpand: () => v(!N),
          disableAnimation: C,
          disableBackground: !L,
          children: (0, a.jsx)("div", {
            className: s()(x.itemBodyContainer, {
              [x.noPadding]: !L,
              [p.rulesScreeningItemsNoBorder]: !L,
            }),
            children:
              R &&
              (0, a.jsx)(f.Z, {
                guild: l,
                submittedGuildJoinRequestsCount: A,
                formFields: j,
                onFormFieldUpdate: S,
                hideVerificationLevelField: !0,
                isClanContext: C,
                onFieldsSave: null != h ? h : T,
                onDescriptionSave: null != I ? I : E,
                formDescription:
                  null !== (i = null == M ? void 0 : M.description) &&
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
      var a = t(470079),
        r = t(399606),
        i = t(544891),
        s = t(570140),
        o = t(367907),
        l = t(430824),
        c = t(496675),
        d = t(626135),
        u = t(70956),
        m = t(997787),
        _ = t(981631);
      let f = 1 * u.Z.Millis.DAY,
        C = new Map();
      n.Z = {
        useShouldShowChannelNotice(e) {
          let n = (0, r.e7)([l.Z, c.Z], () => {
            let n = l.Z.getGuild(e);
            return null != n && c.Z.can(_.Plq.ADMINISTRATOR, n);
          });
          a.useEffect(() => {
            n &&
              !(function (e) {
                var n;
                let t = Date.now(),
                  a = null !== (n = C.get(e)) && void 0 !== n ? n : 0;
                if (!(t < a + f))
                  C.set(e, t),
                    i.tn
                      .post({ url: _.ANM.GUILD_MIGRATE_COMMAND_SCOPE(e) })
                      .then(
                        (n) => {
                          var t, a;
                          s.Z.dispatch({
                            type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
                            guildId: e,
                            integrationIdsWithAppCommands:
                              null !==
                                (a =
                                  null === (t = n.body) || void 0 === t
                                    ? void 0
                                    : t.integration_ids_with_app_commands) &&
                              void 0 !== a
                                ? a
                                : [],
                          });
                        },
                        () => {
                          C.set(e, a);
                        },
                      );
              })(e);
          }, [e, n]);
          let t = (0, r.e7)([m.Z], () => m.Z.shouldShowChannelNotice(e));
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
            d.default.track(_.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
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
              d.default.track(_.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                ...(0, o.hH)(e),
                application_id:
                  null === (t = n.application) || void 0 === t ? void 0 : t.id,
                location: "toggle",
              });
        },
      };
    },
    997787: function (e, n, t) {
      let a;
      t(47120), t(653041);
      var r,
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
      class u extends (r = i.ZP.PersistedStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
          a = e;
        }
        getState() {
          return a;
        }
        shouldShowChannelNotice(e) {
          var n, t;
          return (
            !a.guildNoticeDismissed.includes(e) &&
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
            a.guildNoticeDismissed.push(n);
          },
          COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function (e) {
            var n;
            let { guildId: t, integrationId: a } = e;
            null === (n = c.get(t)) || void 0 === n || n.clear(), d.add(a);
          },
          COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function (e) {
            let { integrationId: n } = e;
            d.delete(n);
          },
        }));
    },
    855674: function (e, n, t) {
      let a;
      t(47120);
      var r,
        i,
        s,
        o,
        l = t(392711),
        c = t.n(l),
        d = t(442837),
        u = t(570140),
        m = t(308063);
      let _ = {},
        f = {};
      function C(e, n) {
        return null == n && (n = "guild"), "".concat(e, ":").concat(n);
      }
      function h(e) {
        return null != _[e] ? _[e] : ((_[e] = {}), _[e]);
      }
      function x(e) {
        let { guildId: n, webhook: t } = e;
        h(n)[t.id] = t;
      }
      class p extends (r = d.ZP.Store) {
        isFetching(e, n) {
          return null != f[C(e, n)];
        }
        getWebhooksForGuild(e) {
          return c().values(h(e));
        }
        getWebhooksForChannel(e, n) {
          return c()(h(e))
            .values()
            .filter((e) => e.channel_id === n)
            .value();
        }
        get error() {
          return a;
        }
      }
      (o = "WebhooksStore"),
        (s = "displayName") in (i = p)
          ? Object.defineProperty(i, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[s] = o),
        (n.Z = new p(u.Z, {
          WEBHOOKS_UPDATE: function (e) {
            let { guildId: n, channelId: t, webhooks: r, error: i } = e;
            if (null == r) {
              null != i
                ? ((a = i), delete f[C(n, t)])
                : null != t &&
                  null != _[n] &&
                  ((a = null), m.Z.fetchForChannel(n, t));
              return;
            }
            a = null;
            let s = [];
            null != t &&
              (s = c()(h(n))
                .values()
                .filter((e) => e.channel_id !== t)
                .value());
            let o = (_[n] = {});
            s.concat(r).forEach((e) => (o[e.id] = e)), delete f[C(n, t)];
          },
          WEBHOOKS_FETCHING: function (e) {
            let { guildId: n, channelId: t } = e;
            f[C(n, t)] = !0;
          },
          WEBHOOK_CREATE: x,
          WEBHOOK_UPDATE: x,
          WEBHOOK_DELETE: function (e) {
            let { guildId: n, webhookId: t } = e;
            delete h(n)[t];
          },
        }));
    },
    838221: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var a = t(735250);
      t(470079);
      var r = t(325767);
      function i(e) {
        let {
          width: n = 17,
          height: t = 16,
          color: i = "currentColor",
          foreground: s,
          ...o
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, r.Z)(o),
          width: n,
          height: t,
          viewBox: "0 0 17 16",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsx)("rect", {
              className: s,
              y: "5",
              width: "16",
              height: "2",
              rx: "1",
              fill: i,
            }),
            (0, a.jsx)("rect", {
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
    243014: function (e, n, t) {
      e.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    841261: function (e, n, t) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
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
//# sourceMappingURL=57a8fbea3372844dd354.js.map
