"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3960"],
  {
    421438(e) {
      e.exports = "/assets/3b0cd1fe84ffaa66.svg";
    },
    380786(e, t, n) {
      n.d(t, { A: () => C, D: () => S });
      var i = n(627968);
      n(64700);
      var l = n(503698),
        r = n.n(l),
        s = n(284009),
        a = n.n(s),
        E = n(554146);
      if (21552 == n.j) var _ = n(417098);
      var o = n(736653),
        A = n(573648),
        c = n(619006),
        T = n(145643),
        I = n(826673),
        N = n(997509),
        u = n(967198),
        R = n(652215),
        d = n(452832),
        O = n(985018),
        P = n(448759);
      function C(e) {
        let { markAsDismissed: t } = e,
          n = u.A.getGuildId(),
          l = (0, o.DP)();
        a()(n, "Guild Id must be defined");
        let s = A.A.get(R.fg2.RIOT_GAMES);
        return (0, i.jsxs)(_.$T, {
          color: _.Hv.WARNING,
          children: [
            (0, i.jsx)(_.PM, {
              onClick: () =>
                (0, I.Dr)(E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE),
              noticeType: R.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            }),
            (0, i.jsx)("img", {
              src: "light" === l ? s.icon.blackSVG : s.icon.whiteSVG,
              alt: O.intl.string(d.default["1S6oAo"]),
              className: r()(P.tV, P._R),
            }),
            O.intl.format(d.default["/Xhh40"], {
              settingsLink: () =>
                `https://discord.com/guilds/${n}/settings/roles`,
            }),
            (0, i.jsx)(_.Z_, {
              onClick: () => {
                t(), N.A.open(n, R.BEX.ROLES);
              },
              noticeType: R.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
              className: P.HE,
              children: O.intl.string(d.default.spsZYI),
            }),
            (0, i.jsx)(_.zr, {
              onClick: () => t(),
              className: P.wX,
              children: O.intl.string(d.default["MVB/Ab"]),
            }),
          ],
        });
      }
      function S(e) {
        e.forEach((e) => {
          null == T.A.getGuildRoleConnectionsConfiguration(e.id) &&
            (0, c.os)(e.guildId, e.id);
        });
        let t = e.map((e) => T.A.getGuildRoleConnectionsConfiguration(e.id));
        return (
          null != t &&
          t.some((e) =>
            e?.some((e) =>
              e.some(
                (e) =>
                  e.connectionType === R.fg2.RIOT_GAMES ||
                  e.connectionType === R.fg2.LEAGUE_OF_LEGENDS,
              ),
            ),
          )
        );
      }
    },
    587054(e, t, n) {
      n.d(t, { $: () => F, D: () => V });
      var i = n(627968),
        l = n(64700),
        r = n(989349),
        s = n.n(r),
        a = n(554146),
        E = n(503698),
        _ = n.n(E),
        o = n(17928);
      if (21552 == n.j) var A = n(417098);
      var c = n(736653),
        T = n(573648),
        I = n(793574),
        N = n(688810),
        u = n(429913),
        R = n(826673),
        d = n(780964),
        O = n(858897),
        P = n(30370),
        C = n(46225),
        S = n(652215),
        M = n(49999),
        D = n(452832),
        m = n(985018),
        p = n(448759);
      let U =
        21552 == n.j
          ? (e) => {
              let { markAsDismissed: t, applicationName: n } = e,
                r = [S.fg2.LEAGUE_OF_LEGENDS, S.fg2.RIOT_GAMES],
                s = (0, o.bG)(
                  [P.A],
                  () => P.A.getAccounts().find((e) => r.includes(e.type))?.type,
                ),
                E = (0, c.Ay)(),
                U = null != s ? T.A.get(s) : null,
                k = U?.replacedBy,
                g = (0, u.h)(k);
              n = n ?? g?.name;
              let {
                  startAuthorization: f,
                  canStartAuthorization: y,
                  hasAlreadyLinked: x,
                  fetched: h,
                } = (0, C.RD)(g),
                { analyticsLocations: L } = (0, N.Ay)(I.A.NOTICE);
              if (
                (l.useEffect(() => {
                  x &&
                    h &&
                    ((0, R.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE),
                    t(M.i.INDIRECT_ACTION));
                }, [x, h, t]),
                null == g || !y || !h || x)
              )
                return null;
              let G = T.A.get(S.fg2.RIOT_GAMES);
              return (0, i.jsxs)(A.$T, {
                color: A.Hv.WARNING,
                children: [
                  (0, i.jsx)(A.PM, {
                    noticeType: S.kqX.RIOT_MIGRATION,
                    onClick: () => {
                      (0, R.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE),
                        t(M.i.USER_DISMISS);
                    },
                  }),
                  (0, i.jsx)("img", {
                    src: "light" === E ? G?.icon.blackSVG : G?.icon.whiteSVG,
                    alt: m.intl.string(D.default["1S6oAo"]),
                    className: _()(p.tV, p._R),
                  }),
                  m.intl.format(D.default.YnnXb6, {
                    connectionName: U?.name,
                    applicationName: n,
                  }),
                  (0, i.jsx)(A.Z_, {
                    onClick: () => {
                      (0, R.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE),
                        t(M.i.TAKE_ACTION),
                        (0, O.openUserSettings)(d.X.CONNECTIONS_PANEL),
                        setTimeout(() => f({ analyticsLocations: L }), 0);
                    },
                    className: p.HE,
                    noticeType: S.kqX.RIOT_MIGRATION,
                    children: m.intl.string(D.default.ZeOhh9),
                  }),
                  (0, i.jsx)(A.zr, {
                    onClick: () => {
                      t(M.i.USER_DISMISS);
                    },
                    className: p.wX,
                    children: m.intl.string(D.default["MVB/Ab"]),
                  }),
                ],
              });
            }
          : null;
      var k = n(380786),
        g = n(601623),
        f = n(496431),
        y = n(532794),
        x = n(954571),
        h = n(422936),
        L = n(635995),
        G = n(915516),
        j = n(788868);
      let X =
        21552 == n.j
          ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                { analyticsLocations: l } = (0, N.Ay)(
                  I.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE,
                ),
                r = (0, h.O)(),
                s = (0, f.A)(
                  null != r && null != r.expires_at
                    ? Date.parse(r.expires_at)
                    : 0,
                );
              return null == r ||
                r.discount?.plan_ids.some((e) => j.hd[e].skuId !== n) ||
                null == r.expires_at ||
                Object.values(s).every((e) => 0 === e)
                ? null
                : (0, i.jsxs)(L.T0, {
                    onClick: () => {
                      t(),
                        x.default.track(S.HAw.APP_NOTICE_CLOSED, {
                          notice_type: S.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                        });
                    },
                    children: [
                      (0, i.jsx)(L.In, {
                        children: (0, G.rn)(s, Number(r.discount.amount)),
                      }),
                      (0, i.jsx)(L.fY, {
                        onClick: () => {
                          (0, y.A)({
                            subscriptionTier: n,
                            analyticsLocations: l,
                            analyticsObject: {
                              page: S.liQ.IN_APP,
                              section: S.JJy.NOTIFICATION_BAR,
                              object: S.ZSU.BUTTON_CTA,
                            },
                          });
                        },
                        text: m.intl.string(m.t.zLXssK),
                      }),
                    ],
                  });
            }
          : null;
      var q = n(745299),
        v = n(354670),
        B = n(927578),
        b = n(160761);
      function V(e) {
        switch (e) {
          case S.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = v.A.getAlmostExpiringTrialOffersForReminder([j.pe.TIER_2]);
            return { cooldownDurationMs: (0, B.e1)(t[0]) };
          case S.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = v.A.getAlmostExpiringDiscountOffersForReminder([
              j.pe.TIER_2,
            ]);
            return { cooldownDurationMs: (0, B.e1)(n[0]) };
          case S.kqX.RIOT_MIGRATION:
          case S.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return { cooldownDurationMs: 6048e5 };
          default:
            return { cooldownDurationMs: 1 / 0 };
        }
      }
      let F = (e) => {
        let { dismissibleContent: t, noticeType: n } = e,
          r = l.useMemo(() => V(n), [n]),
          E = s()().add(5, "days").toDate(),
          [_, o] = (0, b.Bo)(t, r, M.m.NOTICE_BAR);
        if (null == _) return null;
        switch (_) {
          case a.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === S.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
              return (0, i.jsx)(q.A, {
                dismissCurrentNotice: () => {
                  o(M.i.USER_DISMISS), (0, g.w)(E);
                },
                subscriptionTier: j.pe.TIER_2,
              });
            if (n === S.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
              return (0, i.jsx)(X, {
                dismissCurrentNotice: () => {
                  o(M.i.USER_DISMISS), (0, g.w)(E);
                },
                subscriptionTier: j.pe.TIER_2,
              });
            break;
          case a.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(U, {
              markAsDismissed: o,
              applicationName: m.intl.string(D.default["1S6oAo"]),
            });
          case a.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(k.A, {
              markAsDismissed: () => o(M.i.USER_DISMISS),
            });
        }
      };
    },
    475723(e, t, n) {
      n.d(t, { A: () => G, w: () => j });
      var i = n(627968),
        l = n(64700),
        r = n(503698),
        s = n.n(r),
        a = n(17928),
        E = n(661531),
        _ = n(990078),
        o = n(862482),
        A = n(417098),
        c = n(922016),
        T = n(695366),
        I = n(669953),
        N = n(713125),
        u = n(608401),
        R = n(739455),
        d = n(997509),
        O = n(976860),
        P = n(309010),
        C = n(967198),
        S = n(792831),
        M = n(147925),
        D = n(723702),
        m = n(529942),
        p = n(164956),
        U = n(311127),
        k = n(652215),
        g = n(746080);
      n(500208);
      var f = n(2242),
        y = n(985018),
        x = n(595156);
      function h(e) {
        let { className: t, onClick: n, children: l, buttonRef: r } = e;
        return (0, i.jsx)(o.$n, {
          buttonRef: r,
          className: s()(x.x6, t),
          innerClassName: x.hZ,
          look: o.$n.Looks.OUTLINED,
          color: o.$n.Colors.WHITE,
          size: o.$n.Sizes.NONE,
          onClick: n,
          children: l,
        });
      }
      function L(e) {
        let { onClick: t, className: n } = e;
        return (0, i.jsx)(h, {
          onClick: t,
          className: n,
          children: y.intl.string(y.t.R9GHya),
        });
      }
      function G() {
        let e = l.useRef(null),
          t = (0, a.bG)([C.A], () => C.A.getGuildId()),
          n = (0, a.bG)([P.A], () => P.A.getChannelId(t)),
          {
            viewingRoles: r,
            backNavigationSection: s,
            isFullServerPreview: o,
            isServerShopPreview: D,
          } = (0, a.cf)([p.A], () => ({
            viewingRoles: null != t ? p.A.getViewingRoles(t) : null,
            backNavigationSection: p.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && p.A.isFullServerPreview(t),
            isServerShopPreview: null != t && p.A.isViewingServerShop(t),
          }));
        if (null == r || null == t) return null;
        let G = (function (e) {
            switch (e) {
              case k.BEX.INTEGRATIONS:
                return y.intl.string(y.t.k7LGdh);
              case k.BEX.ROLE_SUBSCRIPTIONS:
                return y.intl.string(y.t.bRqiqa);
              case k.BEX.ONBOARDING:
                return y.intl.string(y.t.qZpU3S);
              default:
                return y.intl.string(y.t.MTIXhi);
            }
          })(s),
          j =
            s === k.BEX.ROLE_SUBSCRIPTIONS
              ? y.intl.string(y.t.hZUCzd)
              : y.intl.string(y.t["/djIh7"]),
          X = n === g.VV.GUILD_ONBOARDING,
          q = (e) => {
            let { backToSettings: n } = e;
            null != t &&
              (p.A.isFullServerPreview(t) && (0, O.pX)(k.BVt.CHANNEL(t)),
              N.Ay.shouldShowOnboarding(t) &&
                (I.A.finishOnboarding(t), (0, u.Jg)(t)),
              (0, m.rf)(t),
              n && d.A.open(t, s),
              s === k.BEX.ROLE_SUBSCRIPTIONS && (0, R.Fx)(t));
          };
        return (0, i.jsxs)(A.$T, {
          color: A.Hv.BRAND,
          className: x.lm,
          children: [
            (0, i.jsxs)(h, {
              onClick: () => q({ backToSettings: !0 }),
              className: x.R4,
              children: [
                (0, i.jsx)(S.A, {
                  width: 16,
                  height: 16,
                  direction: S.A.Directions.LEFT,
                  className: x.lJ,
                }),
                G,
              ],
            }),
            X && o
              ? (0, i.jsx)("div", {
                  className: x.XI,
                  children: (0, i.jsx)("div", {
                    className: x.ut,
                    children: y.intl.string(y.t.PxbiAf),
                  }),
                })
              : (0, i.jsxs)("div", {
                  className: x.XI,
                  children: [
                    (0, i.jsx)("div", {
                      className: x.ut,
                      children: o
                        ? y.intl.formatToPlainString(y.t["0PHahI"], {
                            numRoles: Object.keys(r).length,
                          })
                        : y.intl.formatToPlainString(y.t.vMlK8t, {
                            numRoles: Object.keys(r).length,
                          }),
                    }),
                    (0, i.jsx)(c.Y, {
                      targetElementRef: e,
                      position: "bottom",
                      renderPopout: () => (0, i.jsx)(U.A, { guildId: t }),
                      children: (t) => {
                        let { onClick: n } = t;
                        return (0, i.jsxs)(h, {
                          onClick: n,
                          buttonRef: e,
                          children: [
                            j,
                            (0, i.jsx)(M.A, {
                              width: 16,
                              height: 16,
                              direction: M.A.Directions.DOWN,
                              className: x.k5,
                            }),
                          ],
                        });
                      },
                    }),
                    o &&
                      (0, i.jsx)(_.m, {
                        asContainer: !0,
                        text: y.intl.string(y.t.mW4DUE),
                        children: (0, i.jsx)(T.E, {
                          size: "xs",
                          color: E.A.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                    D &&
                      (0, i.jsx)(_.m, {
                        asContainer: !0,
                        text: y.intl.formatToPlainString(y.t.eummvd, {
                          maxTiers: f.f7,
                          maxProducts: 50,
                        }),
                        children: (0, i.jsx)(T.E, {
                          size: "xs",
                          color: E.A.unsafe_rawColors.YELLOW_300.css,
                        }),
                      }),
                  ],
                }),
            o || s === k.BEX.ROLE_SUBSCRIPTIONS
              ? null
              : (0, i.jsx)(L, {
                  onClick: () => q({ backToSettings: !1 }),
                  className: x.ZY,
                }),
          ],
        });
      }
      function j(e) {
        let { guildId: t } = e;
        return (0, a.bG)([p.A], () => p.A.isViewingRoles(t))
          ? (0, i.jsx)("div", {
              className: s()(x.xd, {
                [x.KF]: (0, D.isWindows)(),
                [x.Xz]: (0, D.isMac)(),
                [x.pS]: (0, D.isLinux)(),
              }),
              children: (0, i.jsx)(G, {}),
            })
          : null;
      }
    },
    601623(e, t, n) {
      n.d(t, { w: () => t6, A: () => t3 });
      var i = n(627968),
        l = n(64700),
        r = n(989349),
        s = n.n(r);
      if (21552 == n.j) var a = n(936504);
      var E = n(299855),
        _ = n.n(E),
        o = n(17928);
      if (21552 == n.j) var A = n(462887);
      if (21552 == n.j) var c = n(834730);
      if (21552 == n.j) var T = n(939249);
      if (21552 == n.j) var I = n(417098);
      if (21552 == n.j) var N = n(349288);
      if (21552 == n.j) var u = n(403581);
      if (21552 == n.j) var R = n(192308);
      if (21552 == n.j) var d = n(289873);
      var O = n(157559),
        P = n(827343),
        C = n(830215),
        S = n(228366);
      function M(e) {
        S.h.dispatch({
          type: "DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS",
          skuId: e,
        });
      }
      var D = n(912851);
      let m =
        21552 == n.j
          ? {
              clearRemoteDisconnectVoiceChannelId() {
                S.h.dispatch({
                  type: "CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID",
                });
              },
              clearLastSessionVoiceChannelId() {
                S.h.dispatch({ type: "CLEAR_LAST_SESSION_VOICE_CHANNEL_ID" });
              },
            }
          : null;
      var p = n(956793),
        U = n(785796),
        k = n(55619),
        g = n(246605),
        f = n(271866),
        y = n(736653),
        x = n(77729),
        h = n(573648),
        L = n(793574),
        G = n(688810),
        j = n(587895),
        X = n(315982),
        q = n(235986),
        v = n(626584),
        B = n(554146);
      if (21552 == n.j) var b = n(691540);
      if (21552 == n.j) var V = n(857250);
      if (21552 == n.j) var F = n(97483);
      var H = n(803306),
        Y = n(975807),
        w = n(773952),
        W = n(532794),
        K = n(745299),
        $ = n(976860),
        z = n(780964),
        Z = n(718446),
        Q = n(858897),
        J = n(879945),
        ee = n(954571),
        et = n(379848),
        en = n(49999),
        ei = n(652215),
        el = n(788868),
        er = n(355097),
        es = n(985018),
        ea = n(448759);
      let eE = (e) => {
        let { dismissibleContent: t, noticeType: l } = e;
        return (0, i.jsx)(et.Ay, {
          contentTypes: [t],
          groupName: en.m.NOTICE_BAR,
          bypassAutoDismiss: !0,
          children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            switch (t) {
              case B.M.NAGBAR_NOTICE_DOWNLOAD:
                return (0, i.jsxs)(I.$T, {
                  color: I.Hv.DEFAULT,
                  children: [
                    (0, i.jsx)(I.PM, {
                      onClick: () => r(en.i.UNKNOWN),
                      noticeType: l,
                    }),
                    es.intl.string(es.t["+xn1o5"]),
                    (0, i.jsx)("i", { className: ea.c9 }),
                    (0, i.jsx)("i", { className: ea.Vz }),
                    (0, i.jsx)("i", { className: ea.p0 }),
                    (0, i.jsx)(I.Z_, {
                      noticeType: l,
                      onClick: () => {
                        (0, R.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([
                            n.e("81013"),
                            n.e("44602"),
                            n.e("25280"),
                          ]).then(n.bind(n, 987482));
                          return (t) =>
                            (0, i.jsx)(e, { source: "Top Bar Nag", ...t });
                        });
                      },
                      children: es.intl.string(es.t["1WjMbC"]),
                    }),
                  ],
                });
              case B.M.NAGBAR_QUEST_APP_UPSELL:
                return (0, i.jsxs)(I.$T, {
                  color: I.Hv.DEFAULT,
                  children: [
                    (0, i.jsx)(I.PM, {
                      onClick: () => r(en.i.UNKNOWN),
                      noticeType: l,
                    }),
                    (0, i.jsx)("i", { className: ea.TN }),
                    es.intl.string(es.t.lgwX26),
                    (0, i.jsx)(I.Z_, {
                      noticeType: l,
                      onClick: () => {
                        (0, Y.A)(ei.AMi.META_QUEST), r(en.i.TAKE_ACTION);
                      },
                      children: es.intl.string(es.t["1WjMbC"]),
                    }),
                  ],
                });
              case B.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                return (0, i.jsxs)(I.$T, {
                  color: I.Hv.SPOTIFY,
                  children: [
                    (0, i.jsx)(I.PM, {
                      onClick: () => r(en.i.UNKNOWN),
                      noticeType: l,
                    }),
                    (0, i.jsx)(J.A, { className: ea.tV }),
                    es.intl.string(es.t["5NUVHH"]),
                    (0, i.jsx)(I.Z_, {
                      onClick: () =>
                        (0, w.A)({
                          platformType: ei.fg2.SPOTIFY,
                          location: "Notice Bar",
                        }),
                      noticeType: l,
                      children: es.intl.string(es.t.S0W8Z5),
                    }),
                  ],
                });
              case B.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                return (0, i.jsxs)(I.$T, {
                  color: I.Hv.PLAYSTATION,
                  children: [
                    (0, i.jsx)(I.PM, {
                      noticeType: l,
                      onClick: () => r(en.i.UNKNOWN),
                    }),
                    (0, i.jsx)("img", {
                      alt: "",
                      className: ea.tV,
                      src: h.A.get(ei.fg2.PLAYSTATION).icon.whiteSVG,
                    }),
                    es.intl.string(es.t.WHWgoY),
                    (0, i.jsx)(I.zr, {
                      onClick: () =>
                        (0, w.A)({
                          platformType: ei.fg2.PLAYSTATION,
                          location: "Notice Bar",
                        }),
                      children: es.intl.string(es.t.S0W8Z5),
                    }),
                  ],
                });
              case B.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                return (0, i.jsxs)(I.$T, {
                  color: I.Hv.DEFAULT,
                  children: [
                    (0, i.jsx)(I.PM, {
                      onClick: () => r(en.i.USER_DISMISS),
                      noticeType: l,
                    }),
                    es.intl.string(es.t["3qKN/h"]),
                    (0, i.jsx)(I.Z_, {
                      onClick: async () => {
                        r(en.i.TAKE_ACTION);
                        try {
                          let { startRegisterWebAuthnCredential: e } =
                              await Promise.resolve().then(n.bind(n, 917136)),
                            { ticket: t, challenge: l } = await e();
                          (0, R.openModalLazy)(async () => {
                            let { RegisterWebAuthnCredentialModal: e } =
                              await Promise.all([
                                n.e("90217"),
                                n.e("4736"),
                                n.e("40114"),
                                n.e("8508"),
                              ]).then(n.bind(n, 328009));
                            return (n) =>
                              (0, i.jsx)(e, {
                                ...n,
                                ticket: t,
                                challenge: l,
                                showAccountSettingsButton: !0,
                              });
                          });
                        } catch (e) {
                          (0, b.P0)(
                            (0, V.o)(es.intl.string(es.t.xSCvBf), F.Ck.FAILURE),
                          );
                        }
                      },
                      noticeType: l,
                      children: es.intl.string(es.t["ff/XXy"]),
                    }),
                  ],
                });
              case B.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                return (0, i.jsxs)(I.$T, {
                  color: I.Hv.PREMIUM_TIER_2,
                  children: [
                    (0, i.jsx)("span", { className: ea.lK }),
                    (0, i.jsx)("span", {
                      className: ea.$t,
                      children: es.intl.string(es.t["+urf75"]),
                    }),
                    (0, i.jsx)(I.Z_, {
                      className: ea.CO,
                      noticeType: l,
                      onClick: () => {
                        ee.default.track(ei.HAw.PREMIUM_PROMOTION_OPENED, {
                          location_section: ei.JJy.NOTIFICATION_BAR,
                          location_object: ei.ZSU.BUTTON_CTA,
                        }),
                          (0, Q.openUserSettings)(z.X.NITRO_PANEL);
                      },
                      children: es.intl.string(es.t["8JC5e/"]),
                    }),
                    (0, i.jsx)(I.PM, {
                      onClick: () => {
                        r(en.i.UNKNOWN),
                          (0, H.lA)(ei.nhx.PREMIUM_PROMO_DISMISSED, !0);
                      },
                      noticeType: l,
                    }),
                  ],
                });
              case B.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                return (0, i.jsx)(K.A, {
                  dismissCurrentNotice: () => r(en.i.UNKNOWN),
                  subscriptionTier: el.pe.TIER_2,
                });
              case B.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                return (0, i.jsx)(K.A, {
                  dismissCurrentNotice: () => r(en.i.UNKNOWN),
                  subscriptionTier: el.pe.TIER_0,
                });
              case B.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                return (0, i.jsxs)(I.$T, {
                  color: I.Hv.PREMIUM_TIER_2,
                  children: [
                    (0, i.jsx)(I.PM, {
                      noticeType: l,
                      onClick: () => r(en.i.UNKNOWN),
                    }),
                    es.intl.string(es.t["0KFB2B"]),
                    (0, i.jsx)(I.Z_, {
                      noticeType: l,
                      onClick: () => {
                        r(en.i.UNKNOWN),
                          (0, Q.openUserSettings)(z.X.NITRO_PANEL);
                      },
                      children: es.intl.string(es.t.pyYSiO),
                    }),
                  ],
                });
              case B.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                return (0, i.jsxs)(I.$T, {
                  color: I.Hv.DANGER,
                  children: [
                    (0, i.jsx)(I.PM, {
                      onClick: () => r(en.i.UNKNOWN),
                      noticeType: l,
                    }),
                    es.intl.string(es.t["7490vQ"]),
                    (0, i.jsx)(I.Z_, {
                      noticeType: l,
                      onClick: () => {
                        (0, $.pX)((0, Z.settingsPathToRoute)(er.od.ACCOUNT));
                      },
                      children: es.intl.string(es.t.Vm8akB),
                    }),
                  ],
                });
              case B.M.CHECKOUT_RECOVERY_NAGBAR:
                return (0, i.jsxs)(I.$T, {
                  color: I.Hv.PREMIUM_TIER_2,
                  children: [
                    (0, i.jsx)(I.PM, {
                      onClick: () => r(en.i.UNKNOWN),
                      noticeType: l,
                    }),
                    es.intl.string(es.t["O9GI+k"]),
                    (0, i.jsx)(I.Z_, {
                      onClick: () => {
                        (0, W.A)({
                          subscriptionTier: el.pe.TIER_2,
                          analyticsLocations: [L.A.CHECKOUT_RECOVERY_NAGBAR],
                          analyticsLocation: ei.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                          onClose: () => r(en.i.UNKNOWN),
                        });
                      },
                      noticeType: l,
                      children: es.intl.string(es.t.Zi69D4),
                    }),
                  ],
                });
            }
          },
        });
      };
      var e_ = n(877624),
        eo = n(374200),
        eA = n(932001);
      if (21552 == n.j) var ec = n(597770);
      let eT = (e) => {
          let { markAsDismissed: t } = e,
            { analyticsLocations: n } = (0, G.Ay)(),
            l = (0, o.bG)([eo.A], () => {
              let e = eo.A.getMarketingComponentByType(
                e_.C.GIFT_REMINDER_NAGBAR,
              );
              return null == e ||
                "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
            });
          return null == l
            ? null
            : (0, i.jsxs)(I.$T, {
                color: I.Hv.PREMIUM_TIER_2,
                children: [
                  (0, i.jsx)(I.PM, {
                    onClick: () => t(en.i.USER_DISMISS),
                    noticeType: ei.kqX.GIFTING_PROMOTION_REMINDER,
                  }),
                  (0, i.jsx)(ec.o, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: ea.ez,
                  }),
                  l.body,
                  (0, i.jsx)(I.Z_, {
                    onClick: () => {
                      (0, W.A)({
                        isGift: !0,
                        initialPlanId: null,
                        analyticsLocations: n,
                        analyticsLocation:
                          ei.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                        analyticsObject: {
                          page: ei.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION,
                        },
                      });
                    },
                    noticeType: ei.kqX.GIFTING_PROMOTION_REMINDER,
                    children: es.intl.string(es.t.RzWDqY),
                  }),
                ],
              });
        },
        eI = (e) => {
          let t,
            n,
            { dismissibleContent: l } = e,
            { snowflakeId: r, couldShow: s } =
              ((t = (0, o.bG)([eo.A], () => eo.A.getGiftPromotion()?.id)),
              (n = (0, o.bG)(
                [eo.A],
                () =>
                  null !=
                  eo.A.getMarketingComponentByType(e_.C.GIFT_REMINDER_NAGBAR),
              )),
              l === B.M.GIFTING_PROMOTION_REMINDER
                ? { snowflakeId: t, couldShow: n && null != t }
                : { snowflakeId: void 0, couldShow: !1 }),
            [a, E] = (0, eA.Cc)(s ? l : null, r ?? "", en.m.NOTICE_BAR, !0);
          return null == a
            ? null
            : a === B.M.GIFTING_PROMOTION_REMINDER
              ? (0, i.jsx)(eT, { markAsDismissed: (e) => E(e) })
              : void 0;
        };
      var eN = n(264779),
        eu = n(597758),
        eR = n(287809),
        ed = n(927578),
        eO = n(946319);
      let eP = (e) => {
        let { dismissibleContent: t } = e,
          n = (0, eN.Cp)(),
          r = (0, o.bG)(
            [eR.default],
            () => !ed.Ay.isPremium(eR.default.getCurrentUser()),
          ),
          s = l.useCallback(() => {
            ee.default.track(ei.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED),
              (0, Q.openUserSettings)(z.X.GIFT_PANEL),
              eu.Ay.dismissOutboundPromotionNotice();
          }, []);
        return null == n
          ? null
          : (0, i.jsx)(et.YS, {
              contentType: t,
              newSnowflakeId: n,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: en.m.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                let { visibleContent: t, markAsDismissed: n } = e;
                if (t === B.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR)
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.PREMIUM_TIER_2,
                    children: [
                      (0, i.jsx)(I.PM, {
                        noticeType: ei.kqX.OUTBOUND_PROMOTION,
                        onClick: () => {
                          eu.Ay.dismissOutboundPromotionNotice(),
                            null !== n && n(en.i.USER_DISMISS);
                        },
                      }),
                      (0, i.jsx)(u.t, {
                        size: "md",
                        color: "currentColor",
                        className: eO.P,
                      }),
                      r
                        ? es.intl.string(es.t["5JMiOo"])
                        : es.intl.string(es.t["Pzh+G2"]),
                      (0, i.jsx)(I.Z_, {
                        noticeType: ei.kqX.OUTBOUND_PROMOTION,
                        onClick: () => {
                          s(), null !== n && n(en.i.TAKE_ACTION);
                        },
                        children: es.intl.string(es.t.jVcuVY),
                      }),
                    ],
                  });
              },
            });
      };
      var eC = n(587054),
        eS = n(487329),
        eM = n(102609),
        eD = n(736056);
      if (21552 == n.j) var em = n(194261);
      var ep = n(548118),
        eU = n(134413),
        ek = n(221950),
        eg = n(71393),
        ef = n(309010),
        ey = n(967198),
        ex = n(585510),
        eh = n(834409),
        eL = n(903093),
        eG = n(746080),
        ej = n(500928);
      function eX(e) {
        let { onDismiss: t } = e,
          r = (0, o.bG)([ey.A], () => ey.A.getGuildId()),
          s = (0, o.bG)(
            [ef.A],
            () => (null != r ? ef.A.getChannelId(r) : null),
            [r],
          ),
          a = r ?? null,
          E = (0, o.bG)([eg.A], () => (null != a ? eg.A.getGuild(a) : null), [
            a,
          ]),
          {
            shouldShowIncidentActions: _,
            incidentData: A,
            isUnderLockdown: c,
          } = (0, ex.Li)(a),
          T = (0, eU.fw)(E?.id ?? ei.dJq),
          N = l.useCallback(() => null != E && (0, ek.aZ)(E.id), [E]);
        if (null == E || null == A || !_) return null;
        let u = (e) => {
            e && T && s !== eG.VV.MEMBER_SAFETY && N()
              ? ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                  notice_type: ei.kqX.GUILD_RAID_NOTIFICATION,
                  guild_id: E.id,
                })
              : (0, R.openModalLazy)(async () => {
                  let e = { source: eh.Eo.NAGBAR, alertType: (0, eL.$5)(A) },
                    { default: t } = await Promise.all([
                      n.e("5877"),
                      n.e("25310"),
                      n.e("40258"),
                      n.e("73669"),
                      n.e("46313"),
                      n.e("43233"),
                    ]).then(n.bind(n, 671576));
                  return (n) =>
                    (0, i.jsx)(t, { ...n, guildId: E.id, analyticsData: e });
                });
          },
          d = (0, i.jsx)(ep.Ay, {
            className: ej.$f,
            guild: E,
            size: ep.Ay.Sizes.MINI,
          }),
          O = (0, eL.ql)(A, E.name);
        if (null != (A.dmsDisabledUntil ?? A.invitesDisabledUntil) && c)
          return (0, i.jsxs)(I.$T, {
            className: ej.lm,
            color: I.Hv.NEUTRAL,
            children: [
              (0, i.jsx)(I.PM, {
                onClick: t,
                noticeType: ei.kqX.GUILD_RAID_NOTIFICATION,
              }),
              d,
              O,
              (0, i.jsx)(I.zr, {
                className: ej.hP,
                onClick: () => u(!1),
                children: (0, i.jsxs)("div", {
                  className: ej.rx,
                  children: [
                    (0, i.jsx)(em.X, { size: "xs", color: "currentColor" }),
                    (0, i.jsx)("span", {
                      children: es.intl.string(es.t["c+7oa7"]),
                    }),
                  ],
                }),
              }),
            ],
          });
        let P = (0, eL.P$)(A)
            ? es.intl.formatToPlainString(es.t.tZTx2E, { guildName: E.name })
            : (0, eL.Qm)(A)
              ? es.intl.formatToPlainString(es.t["1bSmxr"], {
                  guildName: E.name,
                })
              : es.intl.formatToPlainString(es.t.W87xDE, { guildName: E.name }),
          C = T && s === eG.VV.MEMBER_SAFETY;
        return (0, i.jsxs)(I.$T, {
          className: ej.lm,
          color: I.Hv.WARNING,
          children: [
            (0, i.jsx)(I.PM, {
              onClick: t,
              noticeType: ei.kqX.GUILD_RAID_NOTIFICATION,
            }),
            d,
            P,
            !C &&
              (0, i.jsx)(I.zr, {
                className: ej.hP,
                onClick: () => u(!0),
                children: (0, i.jsx)("div", {
                  className: ej.rx,
                  children: (0, i.jsx)("span", {
                    children: es.intl.string(es.t.zDJDhr),
                  }),
                }),
              }),
          ],
        });
      }
      var eq = n(137207),
        ev = n(206835),
        eB = n(495544),
        eb = n(696451),
        eV = n(229527),
        eF = n(81400),
        eH = n(340837);
      function eY(e) {
        let { guildId: t, analyticsLocations: n } = e,
          [l, r] = (0, eF.j8)({ guildId: t, analyticsLocations: n }),
          s = r
            ? es.intl.string(es.t["6ndMcq"])
            : es.intl.string(es.t["0eiu6J"]),
          a = r ? es.intl.string(es.t.S09nw4) : es.intl.string(es.t.tEttXd);
        return (0, i.jsxs)(I.$T, {
          color: I.Hv.DANGER,
          children: [s, (0, i.jsx)(I.zr, { onClick: l, children: a })],
        });
      }
      function ew() {
        let e = (0, ev.A)({ scrollPosition: er._F.GUILD_TAG });
        return (0, i.jsxs)(I.$T, {
          color: I.Hv.DANGER,
          children: [
            es.intl.string(es.t.Zqlecb),
            (0, i.jsx)(I.zr, {
              onClick: e,
              children: es.intl.string(es.t.SJehVW),
            }),
          ],
        });
      }
      function eW(e) {
        let { analyticsLocations: t, ...n } = e,
          { analyticsLocations: l } = (0, G.Ay)(t, L.A.AUTOMOD_NAGBAR_NOTICE),
          r = (0, o.bG)(
            [eB.default, eb.Ay],
            () => {
              if (null == n.guildId) return new Set();
              let e = eB.default.getId();
              return (0, eV.wj)(eb.Ay.getMember(n.guildId, e));
            },
            [n.guildId],
          );
        return r.has(eH.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ||
          r.has(eH.D.AUTOMOD_QUARANTINED_BIO)
          ? (0, i.jsx)(eY, { ...n, analyticsLocations: l })
          : r.has(eH.D.AUTOMOD_QUARANTINED_SERVER_TAG)
            ? (0, i.jsx)(ew, {})
            : (0, i.jsx)(eY, { ...n, analyticsLocations: l });
      }
      var eK = n(202384),
        e$ = n(51758);
      n(321073);
      var ez = n(503698),
        eZ = n.n(ez);
      if (21552 == n.j) var eQ = n(873263);
      if (21552 == n.j) var eJ = n(314116);
      if (21552 == n.j) var e0 = n(821609);
      var e2 = n(334465),
        e5 = n(624458),
        e1 = n(513461),
        e8 = n(709977),
        e7 = n(212455),
        e9 = n(182430),
        e6 = n(580537);
      let e4 =
        21552 == n.j
          ? () => {
              let e = (0, o.bG)([ey.A], () => ey.A.getGuildId(), []),
                t = (0, o.bG)([eg.A], () => eg.A.getGuild(e), [e]),
                l = (0, o.bG)(
                  [e7.A],
                  () => (null != e ? e7.A.getRequest(e) : null),
                  [e],
                ),
                r = (0, eQ.zy)(),
                s =
                  (0, e2.B)(
                    r.pathname,
                    ei.BVt.CHANNEL(t?.id, eG.VV.GUILD_ONBOARDING),
                  )?.isExact === !0;
              if (null == t || !(0, e8.Qd)(t) || s) return null;
              let a = l?.applicationStatus ?? e1.B5.STARTED,
                E = null,
                _ = null,
                A = null,
                T = [e9.lm, e6.lm];
              switch (a) {
                case e1.B5.SUBMITTED:
                  (E = es.intl.string(es.t["5iLvSx"])),
                    (_ = es.intl.string(es.t.mqtdmQ)),
                    (A = () => {
                      (0, eJ.A)({
                        title: es.intl.string(es.t.aIz1oV),
                        subtitle: es.intl.string(es.t["13tjTU"]),
                        variant: "primary",
                        confirmText: es.intl.string(es.t["cY+Oob"]),
                        onConfirm: () => e5.A.removeGuildJoinRequest(t.id),
                      });
                    });
                  break;
                case e1.B5.REJECTED:
                  (E = es.intl.string(es.t.lk30cY)),
                    (_ = es.intl.string(es.t["8RrsHr"])),
                    (A = () => {
                      (0, R.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                          n.e("25099"),
                          n.e("14382"),
                        ]).then(n.bind(n, 463325));
                        return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                      });
                    }),
                    T.push(e9.z3);
                  break;
                default:
                  (E = es.intl.string(es.t.G5YKXP)),
                    (_ = es.intl.string(es.t["r8/DT+"])),
                    (A = () => {
                      (0, eK.Ze)(t.id);
                    });
              }
              return (0, i.jsxs)("div", {
                className: eZ()(...T),
                children: [
                  (0, i.jsx)(c.E, {
                    className: e9.wx,
                    variant: "text-sm/normal",
                    children: E,
                  }),
                  (0, i.jsx)(e0.$, {
                    variant: "overlay-primary",
                    size: "sm",
                    onClick: A,
                    text: _,
                  }),
                ],
              });
            }
          : null;
      if (21552 == n.j) var e3 = n(477155);
      var te = n(22877);
      function tt(e) {
        let {
          buttonText: t,
          onGoBack: n,
          onDismiss: l,
          showCloseButton: r,
        } = e;
        return (0, i.jsxs)(I.$T, {
          className: te.eR,
          children: [
            r &&
              (0, i.jsx)(I.PM, {
                onClick: l,
                className: te.b,
                noticeType: ei.kqX.BACK_TO_PREVIOUS_SCREEN,
              }),
            (0, i.jsx)(e0.$, {
              text: t,
              variant: "overlay-secondary",
              size: "sm",
              icon: e3.r,
              onClick: n,
            }),
          ],
        });
      }
      var tn = n(997509),
        ti = n(475723);
      if (21552 == n.j) var tl = n(862482);
      var tr = n(686956),
        ts = n(449054),
        ta = n(484154);
      let tE =
        21552 == n.j
          ? () => {
              let e = (0, o.bG)([ey.A], () => ey.A.getGuildId(), []),
                t = (0, o.bG)([eg.A], () => eg.A.getGuild(e), [e]),
                [n, r] = l.useState(!1);
              if (null == t) return null;
              let s = async () => {
                r(!0);
                try {
                  ts.cf(t.id),
                    await tr.A.joinGuild(t.id, { source: ei.Q4z.NOTICE_BAR });
                } catch {
                  r(!1);
                }
              };
              return (0, i.jsxs)("div", {
                className: eZ()(ta.lm, e6.lm),
                children: [
                  (0, i.jsxs)(tl.$n, {
                    look: tl.$n.Looks.OUTLINED,
                    color: tl.$n.Colors.WHITE,
                    size: tl.$n.Sizes.NONE,
                    className: eZ()(ta.x6, ta.aX),
                    innerClassName: ta.gb,
                    onClick: () => {
                      (0, $.JK)().goBack();
                    },
                    children: [
                      (0, i.jsx)(e3.r, {
                        size: "xs",
                        color: "currentColor",
                        className: ta.UE,
                      }),
                      es.intl.string(es.t["13/7kX"]),
                    ],
                  }),
                  (0, i.jsx)(c.E, {
                    className: ta.wx,
                    variant: "text-sm/normal",
                    children: es.intl.string(es.t["N/y2WE"]),
                  }),
                  (0, i.jsx)(tl.$n, {
                    className: ta.x6,
                    look: tl.$n.Looks.OUTLINED,
                    color: tl.$n.Colors.WHITE,
                    size: tl.$n.Sizes.NONE,
                    submitting: n,
                    onClick: s,
                    children: es.intl.format(es.t.uHN7ny, { guild: t.name }),
                  }),
                ],
              });
            }
          : null;
      var t_ = n(801644),
        to = n(74848),
        tA = n(234419);
      if (21552 == n.j) var tc = n(661531);
      var tT = n(367727),
        tI = n(635995),
        tN = n(88001),
        tu = n(466919),
        tR = n(375043);
      function td(e) {
        let { premiumSubscription: t } = e,
          r = t?.id,
          s = l.useCallback(() => {
            null != r &&
              (0, tT.qr)(B.M.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR, r, {
                dismissAction: en.i.USER_DISMISS,
              });
          }, [r]),
          a = l.useCallback(() => {
            s(),
              ee.default.track(ei.HAw.APP_NOTICE_CLOSED, {
                notice_type: ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
              });
          }, [s]),
          E = l.useCallback(() => {
            null != t &&
              (ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                notice_type: ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
              }),
              s(),
              (0, R.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                  n.e("44616"),
                  n.e("85579"),
                ]).then(n.bind(n, 785606));
                return (n) => (0, i.jsx)(e, { ...n, subscription: t });
              }));
          }, [t, s]);
        return (0, i.jsxs)(tI.T0, {
          onClick: a,
          className: tR.A,
          children: [
            (0, i.jsx)(u.t, { color: tc.A.colors.ICON_STRONG }),
            (0, i.jsx)(tI.In, {
              children: es.intl.format(tu.default.fFt9bd, {
                premiumGroupProductName: (0, tN.DP)(),
              }),
            }),
            (0, i.jsx)(e0.$, {
              onClick: E,
              text: es.intl.string(tu.default["5fZHp3"]),
              size: "sm",
              variant: "overlay-primary",
            }),
          ],
        });
      }
      var tO = n(549996),
        tP = n(498470);
      function tC() {
        let e = (0, tO.c)(e_.C.NAGBAR),
          t =
            e?.properties.properties.oneofKind === "nagbar"
              ? e.properties.properties.nagbar
              : null,
          n = e?.promotionId,
          r = l.useCallback(() => {
            null != n &&
              (0, tT.qr)(B.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL, n, {
                dismissAction: en.i.USER_DISMISS,
              });
          }, [n]),
          s = l.useCallback(() => {
            ee.default.track(ei.HAw.APP_NOTICE_CLOSED, {
              notice_type: ei.kqX.PREMIUM_MARKETING_NAGBAR,
            }),
              r();
          }, [r]);
        if (null == t) return null;
        let a = (0, tP.h)({
          buttonAction: t.ctaAction,
          deeplinkSection: t.deeplinkSection,
          onClose: r,
        });
        return (0, i.jsxs)(tI.T0, {
          onClick: s,
          children: [
            (0, i.jsx)(tI.In, { children: t.body }),
            "" !== t.ctaLabel &&
              (0, i.jsx)(tI.fY, {
                text: t.ctaLabel,
                onClick: () => {
                  ee.default.track(ei.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: ei.kqX.PREMIUM_MARKETING_NAGBAR,
                  }),
                    a();
                },
              }),
          ],
        });
      }
      var tS = n(814249),
        tM = n(829219),
        tD = n(14594);
      function tm() {
        let [e, t] = (0, eA.Wl)(B.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK, {
          cooldownDurationMs: tD.aH,
        });
        return e !== B.M.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK
          ? null
          : (0, i.jsxs)(I.$T, {
              color: I.Hv.BRAND,
              children: [
                (0, i.jsx)(I.PM, {
                  onClick: () => t(en.i.DISMISS),
                  noticeType: ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
                }),
                es.intl.string(es.t.XkeW9N),
                (0, i.jsx)(I.Z_, {
                  onClick: () => {
                    (0, R.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([
                        n.e("56030"),
                        n.e("18413"),
                        n.e("22255"),
                        n.e("55925"),
                        n.e("85033"),
                        n.e("26484"),
                        n.e("74192"),
                      ]).then(n.bind(n, 976627));
                      return (t) => (0, i.jsx)(e, { ...t });
                    }),
                      t(en.i.TAKE_ACTION);
                  },
                  noticeType: ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
                  children: es.intl.string(es.t.vcdNKv),
                }),
              ],
            });
      }
      if (21552 == n.j) var tp = n(825484);
      var tU = n(139716),
        tk = n(847599),
        tg = n(734057),
        tf = n(849736),
        ty = n(354583),
        tx = n(366098),
        th = n(418208),
        tL = n(992262);
      function tG(e) {
        if (!e && (0, th.Cf)())
          return void tU.A.showAgeVerificationGetStartedModal({
            entryPoint: tk.q1.STAGE_CHANNEL_RAISE_HAND,
          });
        let t = ef.A.getVoiceChannelId();
        if (null == t) return;
        let n = tg.A.getChannel(t);
        null != n && (0, tf.e7)(n, e);
      }
      function tj(e) {
        let { channelId: t } = e,
          n = (0, tx.D3)(t) ?? 0,
          l = (0, tx.Xk)(t) ?? 0;
        return n > 0 && l > 0
          ? (0, i.jsx)("div", {
              className: tL.Z5,
              children: (0, i.jsx)("div", {
                className: eZ()(tL.qQ, tL.lN),
                children: es.intl.string(es.t.xlJRfv),
              }),
            })
          : n > 0
            ? (0, i.jsx)("div", {
                className: tL.Z5,
                children: (0, i.jsx)("div", {
                  className: eZ()(tL.qQ, tL.lN),
                  children: es.intl.string(es.t.WYad9Z),
                }),
              })
            : l > 0
              ? (0, i.jsx)("div", {
                  className: tL.Z5,
                  children: (0, i.jsx)("div", {
                    className: eZ()(tL.qQ, tL.lN),
                    children: es.intl.string(es.t.eHq2OF),
                  }),
                })
              : null;
      }
      function tX() {
        let e = (0, ty.A)();
        return null == e
          ? null
          : (0, i.jsxs)(I.$T, {
              className: tL.kL,
              color: I.Hv.DEFAULT,
              children: [
                es.intl.string(es.t.Ul1RJQ),
                (0, i.jsx)(tj, { channelId: e.id }),
                (0, i.jsxs)(tp.e, {
                  size: "sm",
                  className: tL.GC,
                  children: [
                    (0, i.jsx)(e0.$, {
                      variant: "overlay-primary",
                      text: es.intl.string(es.t.MpO0px),
                      onClick: () => tG(!1),
                    }),
                    (0, i.jsx)(e0.$, {
                      variant: "secondary",
                      onClick: () => tG(!0),
                      text: es.intl.string(es.t["1YDv7a"]),
                    }),
                  ],
                }),
              ],
            });
      }
      var tq = n(328153),
        tv = n(935671);
      function tB() {
        (0, tv.sL)("nagbar");
      }
      function tb() {
        return null == (0, o.bG)([tq.Ay], () => tq.Ay.getVisibleGame())
          ? null
          : (0, i.jsxs)(I.$T, {
              color: I.Hv.DANGER,
              children: [
                (0, i.jsx)(I.PM, {
                  noticeType: ei.kqX.SYSTEM_SERVICE_WARNING,
                  onClick: () => t6(),
                }),
                es.intl.string(es.t["5rPt+j"]),
                (0, i.jsx)(I.Z_, {
                  onClick: tB,
                  noticeType: ei.kqX.SYSTEM_SERVICE_WARNING,
                  children: es.intl.string(es.t["1iI46O"]),
                }),
              ],
            });
      }
      function tV() {
        return (0, i.jsxs)(I.$T, {
          color: I.Hv.DANGER,
          children: [
            es.intl.string(es.t.lQiCJ6),
            (0, i.jsx)(I.Z_, {
              noticeType: ei.kqX.PTT_NO_KEYBIND_WARNING,
              onClick: function () {
                (0, Q.openUserSettings)(z.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING);
              },
              children: es.intl.string(es.t["UgQN+9"]),
            }),
          ],
        });
      }
      if (21552 == n.j) var tF = n(189213);
      if (21552 == n.j) var tH = n(150934);
      function tY(e) {
        let [t, n] = l.useState(!1);
        return (0, i.jsx)(tF.Modal, {
          size: "md",
          title: es.intl.string(es.t["zQ1+Jw"]),
          subtitle: es.intl.string(es.t.K1gWXn),
          actions: [
            {
              text: es.intl.string(es.t.BddRzS),
              onClick: () => {
                t && P.A.setSilenceWarning(!1), e.onClose();
              },
              variant: "primary",
            },
          ],
          actionBarInput: (0, i.jsx)(tH.S, {
            checked: t,
            onChange: (e) => n(e),
            label: es.intl.string(es.t.XAiAgD),
            labelType: "secondary",
          }),
          ...e,
        });
      }
      var tw = n(51760),
        tW = n(763827),
        tK = n(67480),
        t$ = n(147964),
        tz = n(519057),
        tZ = n(975571),
        tQ = n(723702),
        tJ = n(325278),
        t0 = n(831502),
        t2 = n(731854);
      let t5 = new v.A("Notice"),
        t1 = (e) => {
          let { error: t, allowClick: n = !1 } = e,
            l = (0, eS.B1)(t)?.errorCode,
            r = es.intl.formatToPlainString(es.t.ejOT95, { errorCode: l }),
            s = (0, i.jsx)(c.E, {
              variant: "text-sm/bold",
              color: "currentColor",
              tag: "span",
              className: ea.fU,
              selectable: !0,
              children: r,
            });
          return n
            ? (0, i.jsx)(T.D, {
                tag: "span",
                className: ea.wz,
                onClick: () => open(tZ.A.getArticleURL(ei.MVz.AV_ERROR_CODES)),
                children: s,
              })
            : s;
        },
        t8 = (e) => {
          let { noticeType: t } = e;
          return (0, i.jsxs)(I.$T, {
            color: I.Hv.DANGER,
            children: [
              (0, i.jsx)(I.PM, {
                noticeType: t,
                onClick: () => {
                  t6();
                },
              }),
              es.intl.string(es.t.o3zuYz),
              (0, i.jsx)(t1, { error: eS.iy.NO_INPUT_DEVICES }),
              (0, i.jsx)(I.eC, {
                href: tZ.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                noticeType: t,
                children: es.intl.string(es.t.RYKKox),
              }),
            ],
          });
        };
      function t7(e) {
        return (0, tQ.isWindows)() && _().satisfies(x.A?.os.release, tJ.PH)
          ? `ms-settings:sound-properties?endpointId=${e}`
          : "ms-settings:sound";
      }
      function t9(e) {
        let t,
          n,
          { noticeType: l } = e,
          r = (0, to.x5)(t2.oh.AUDIO_INPUT),
          s = r?.guid ?? "",
          { inputDeviceOSMuted: a, inputDeviceOSVolume: E } = (0, o.cf)(
            [tw.Ay],
            () => ({
              inputDeviceOSMuted: tw.Ay.getInputDeviceOSMuted(),
              inputDeviceOSVolume: tw.Ay.getInputDeviceOSVolume(),
            }),
          ),
          _ = !1;
        return (
          !0 === a
            ? ((t = es.intl.string(es.t.ppW3ri)),
              (n = (0, i.jsx)(I.eC, {
                href: t7(s),
                noticeType: l,
                children: es.intl.string(es.t.QghSIq),
              })))
            : 0 === E
              ? ((t = es.intl.string(es.t.j4gGA4)),
                (n = (0, i.jsx)(I.eC, {
                  href: t7(s),
                  noticeType: l,
                  children: es.intl.string(es.t.QghSIq),
                })))
              : tw.Ay.supports(t2.O5.LOOPBACK)
                ? ((t = es.intl.string(es.t.dNAJ18)),
                  (_ = !0),
                  (n = (0, i.jsx)(I.zr, {
                    onClick: () => {
                      (0, Q.openUserSettings)(z.X.VOICE_AND_VIDEO_PANEL);
                    },
                    children: es.intl.string(es.t.I6YlB4),
                  })))
                : ((t = es.intl.string(es.t.nCO9bI)),
                  (n = (0, i.jsx)(I.eC, {
                    href: tZ.A.getArticleURL(ei.MVz.NO_INPUT_DETECTED),
                    noticeType: l,
                    children: es.intl.string(es.t.RYKKox),
                  }))),
          (0, i.jsxs)(I.$T, {
            color: I.Hv.DANGER,
            children: [
              (0, i.jsx)(I.PM, {
                noticeType: l,
                onClick: () => {
                  t6(), (0, R.openModal)((e) => (0, i.jsx)(tY, { ...e }));
                },
              }),
              t,
              (0, i.jsx)(t1, {
                allowClick: _,
                error: eS.iy.NO_AUDIO_INPUT_DETECTED,
              }),
              n,
            ],
          })
        );
      }
      function t6(e) {
        D.A.dismiss(null != e ? { untilAtLeast: s()(e) } : void 0);
      }
      let t4 =
        21552 == n.j
          ? l.memo(function () {
              let e = (0, o.bG)([eR.default], () =>
                  eR.default.getCurrentUser(),
                ),
                t = (0, o.bG)([ey.A], () => ey.A.getGuildId()),
                r = (0, o.bG)([tz.Ay], () => tz.Ay.getNotice()),
                { analyticsLocations: s } = (0, G.Ay)(),
                E = (0, y.Ay)(),
                _ = (0, e$.H)(t),
                c = (0, tA.V)();
              if (
                (l.useEffect(() => {
                  if (r?.type != null) {
                    let e;
                    if (
                      null == c &&
                      (r.type === ei.kqX.PREMIUM_TIER_2_TRIAL_ENDING ||
                        r.type === ei.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
                    )
                      return;
                    let n = {};
                    null != t && (n.guild_id = t),
                      c?.trial_id != null && (n.trial_id = c.trial_id),
                      (e = { notice_type: r.type, ...n }),
                      ee.default.track(ei.HAw.APP_NOTICE_VIEWED, e);
                  }
                }, [r?.type, t, c]),
                l.useEffect(() => {
                  if (
                    null != r &&
                    r.type === ei.kqX.SURVEY &&
                    null != r.metadata
                  ) {
                    let { metadata: e } = r,
                      t = eD.A.getUserExperimentDescriptor(e.id);
                    null != t && (0, eM.LQ)(e.id, t),
                      (async () => {
                        r.metadata?.id != null &&
                          (await (0, g.oX)(r.metadata?.id));
                      })();
                  }
                }, [r]),
                null == r)
              )
                return null;
              let T = null != r.type ? tz.Re[r.type] : null,
                S = null != r.type ? tz.rV[r.type] : null,
                D = null != r.type ? tz.f7[r.type] : null,
                x = tz.pe[r.type];
              if (null != T)
                return (0, i.jsx)(eC.$, {
                  dismissibleContent: T,
                  noticeType: r.type,
                });
              if (null != S) return (0, i.jsx)(eI, { dismissibleContent: S });
              if (null != D) return (0, i.jsx)(eP, { dismissibleContent: D });
              if (null != x)
                return (0, i.jsx)(eE, {
                  dismissibleContent: x,
                  noticeType: r.type,
                });
              let L = r.metadata?.premiumType;
              switch (r.type) {
                case ei.kqX.PTT_NO_KEYBIND_WARNING:
                  return (0, i.jsx)(tV, {});
                case ei.kqX.LURKING_GUILD:
                  return (0, i.jsx)(tE, {});
                case ei.kqX.PENDING_MEMBER:
                  return (0, i.jsx)(e4, {});
                case ei.kqX.INVITED_TO_SPEAK:
                  return (0, i.jsx)(tX, {});
                case ei.kqX.GUILD_RAID_NOTIFICATION:
                  let { dismissUntil: v } = r.metadata;
                  return (0, i.jsx)(eX, { onDismiss: () => t6(v) });
                case ei.kqX.WIN32_DEPRECATED_MESSAGE:
                  let { dismissUntil: B } = r.metadata;
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.WARNING,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => t6(B),
                        noticeType: r.type,
                      }),
                      es.intl.format(es.t["08KQ1P"], {
                        helpCenterLink: tZ.A.getArticleURL(
                          ei.MVz.WIN32_DEPRECATE,
                        ),
                      }),
                    ],
                  });
                case ei.kqX.WIN7_8_DEPRECATED_MESSAGE:
                  let { dismissUntil: b } = r.metadata;
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.WARNING,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => t6(b),
                        noticeType: r.type,
                      }),
                      es.intl.format(es.t["8Je+dX"], {
                        helpCenterLink: tZ.A.getArticleURL(
                          ei.MVz.WIN7_8_DEPRECATE,
                        ),
                      }),
                    ],
                  });
                case ei.kqX.WIN_COMPAT_MODE_MESSAGE:
                  let { dismissUntil: V } = r.metadata;
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.WARNING,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => t6(V),
                        noticeType: r.type,
                      }),
                      es.intl.string(es.t["9DJgOg"]),
                    ],
                  });
                case ei.kqX.MACOS_19_DEPRECATED_MESSAGE:
                  let { dismissUntil: F } = r.metadata;
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.WARNING,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => t6(F),
                        noticeType: r.type,
                      }),
                      es.intl.format(es.t.q8VPLo, {
                        helpCenterLink: tZ.A.getArticleURL(
                          ei.MVz.MACOS_19_DEPRECATE,
                        ),
                      }),
                    ],
                  });
                case ei.kqX.E2EE_UPDATE_REQUIRED:
                  let { dismissUntil: H } = r.metadata;
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.WARNING,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => t6(H),
                        noticeType: r.type,
                      }),
                      es.intl.format(
                        tQ.isPlatformEmbedded ? es.t.J232TI : es.t.vceuiL,
                        {
                          helpCenterLink: tZ.A.getArticleURL(
                            ei.MVz.END_TO_END_ENCRYPTION,
                          ),
                        },
                      ),
                    ],
                  });
                case ei.kqX.WINDOWS_MEDIA_PACK_REQUIRED:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.WARNING,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => t6(),
                        noticeType: r.type,
                      }),
                      es.intl.string(es.t.iW0fcQ),
                      (0, i.jsx)(I.eC, {
                        href: tZ.A.getArticleURL(ei.MVz.WINDOWS_MEDIA_PACK),
                        target: "_blank",
                        noticeType: r.type,
                        children: es.intl.string(es.t.LQG5j6),
                      }),
                    ],
                  });
                case ei.kqX.GENERIC:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.DEFAULT,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => t6(),
                        noticeType: r.type,
                      }),
                      r.message,
                      null != r.buttonText
                        ? (0, i.jsx)(I.Z_, {
                            onClick: r.callback,
                            noticeType: r.type,
                            children: r.buttonText,
                          })
                        : null,
                    ],
                  });
                case ei.kqX.LAUNCH_GAME_FAILURE:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.DANGER,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => t6(),
                        noticeType: r.type,
                      }),
                      r.message,
                      null != r.buttonText
                        ? (0, i.jsx)(I.Z_, {
                            onClick: r.callback,
                            noticeType: r.type,
                            children: r.buttonText,
                          })
                        : null,
                    ],
                  });
                case ei.kqX.VOICE_DISABLED:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.WARNING,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => {
                          m.clearRemoteDisconnectVoiceChannelId(), t6();
                        },
                        noticeType: r.type,
                      }),
                      es.intl.string(es.t.bOQ3jV),
                      (0, i.jsx)(I.Z_, {
                        onClick: () => {
                          let e = tW.A.getRemoteDisconnectVoiceChannelId();
                          null != e &&
                            null != tg.A.getChannel(e) &&
                            p.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: es.intl.string(es.t.vD60Pv),
                      }),
                    ],
                  });
                case ei.kqX.VOICE_CONNECTED_LAST_SESSION:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.DEFAULT,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => {
                          m.clearLastSessionVoiceChannelId(), t6();
                        },
                        noticeType: r.type,
                      }),
                      es.intl.string(es.t.jY2lUA),
                      (0, i.jsx)(I.Z_, {
                        onClick: () => {
                          let e = tW.A.getLastSessionVoiceChannelId();
                          null != e &&
                            null != tg.A.getChannel(e) &&
                            p.default.selectVoiceChannel(e);
                        },
                        noticeType: r.type,
                        children: es.intl.string(es.t.vD60Pv),
                      }),
                    ],
                  });
                case ei.kqX.SPOTIFY_AUTO_PAUSED:
                  let Y = h.A.get(ei.fg2.SPOTIFY);
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.DANGER,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => t6(),
                        noticeType: r.type,
                      }),
                      (0, i.jsx)("img", {
                        alt: "",
                        className: ea.tV,
                        src: (0, A.q)(E) ? Y.icon.darkSVG : Y.icon.whiteSVG,
                      }),
                      es.intl.string(es.t.D8Cp76),
                      (0, i.jsx)(I.Z_, {
                        onClick: () =>
                          (0, Q.openUserSettings)(z.X.VOICE_AND_VIDEO_PANEL),
                        noticeType: r.type,
                        children: es.intl.string(es.t.NiTd0e),
                      }),
                      (0, i.jsx)(N.Anchor, {
                        className: ea.uD,
                        href: tZ.A.getArticleURL(ei.MVz.SPOTIFY_AUTO_PAUSED),
                        target: "_blank",
                        children: es.intl.string(es.t.CiqAIU),
                      }),
                    ],
                  });
                case ei.kqX.UNCLAIMED_ACCOUNT:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.DEFAULT,
                    children: [
                      es.intl.string(es.t["f+Zaol"]),
                      (0, i.jsx)(I.Z_, {
                        noticeType: r.type,
                        onClick: () => (_ && null != t ? (0, eK.Ze)(t) : X.R()),
                        children: es.intl.string(es.t.fiNVin),
                      }),
                    ],
                  });
                case ei.kqX.UNVERIFIED_ACCOUNT:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.DEFAULT,
                    children: [
                      es.intl.string(es.t["3sWbf3"]),
                      (0, i.jsx)(I.Z_, {
                        noticeType: r.type,
                        onClick: () => {
                          C.A.verifyResend(),
                            O.A.show({
                              title: es.intl.string(es.t.LykQYk),
                              body: es.intl.format(es.t.azKEPy, {
                                email: e?.email,
                              }),
                              cancelText: es.intl.string(es.t.Vm8akB),
                              onCancel: X.R,
                            });
                        },
                        children: es.intl.string(es.t.WnX4J2),
                      }),
                    ],
                  });
                case ei.kqX.SCHEDULED_MAINTENANCE:
                  if (null == r.metadata) return null;
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.DEFAULT,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => U.A.ackScheduledMaintenance(),
                        noticeType: r.type,
                      }),
                      es.intl.format(es.t["yb96S+"], r.metadata),
                      (0, i.jsx)(I.eC, {
                        href: `${ei.qF7.STATUS}/incidents/${r.metadata.id}`,
                        noticeType: r.type,
                        children: es.intl.string(es.t.hvVgAZ),
                      }),
                    ],
                  });
                case ei.kqX.NO_INPUT_DETECTED:
                  return (0, i.jsx)(t9, { noticeType: r.type });
                case ei.kqX.NO_INPUT_DEVICES_DETECTED:
                  return (0, i.jsx)(t8, { noticeType: r.type });
                case ei.kqX.HARDWARE_MUTE:
                  if (null != r.metadata) {
                    let { vendor: e, model: t } = r.metadata;
                    return (0, i.jsxs)(I.$T, {
                      color: I.Hv.DANGER,
                      children: [
                        es.intl.format(es.t.qoDex7, {
                          vendorName: e.name,
                          modelName: t.name,
                        }),
                        (0, i.jsx)(I.PM, {
                          noticeType: r.type,
                          onClick: () => {
                            P.A.setEnableHardwareMuteNotice(!1), t6();
                          },
                        }),
                        (0, i.jsx)(I.eC, {
                          href: t.url,
                          target: "_blank",
                          rel: "noreferrer noopener",
                          noticeType: r.type,
                          children: es.intl.string(es.t["Yl/Riu"]),
                        }),
                      ],
                    });
                  }
                  if (
                    t_.A.getConfig({
                      location: "Notice.AudioIssueNoticeHardwareMute",
                    }).enableHardwareSilenceWarning
                  )
                    return (0, i.jsxs)(I.$T, {
                      color: I.Hv.INFO,
                      children: [
                        es.intl.format(es.t.QMw8Fd, {}),
                        (0, i.jsx)(I.PM, {
                          noticeType: r.type,
                          onClick: () => {
                            P.A.setEnableHardwareMuteNotice(!1), t6();
                          },
                        }),
                      ],
                    });
                  return null;
                case ei.kqX.STREAMER_MODE:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.STREAMER_MODE,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => t6(),
                        noticeType: ei.kqX.STREAMER_MODE,
                      }),
                      es.intl.string(es.t.iEgBXp),
                      (0, i.jsx)(I.Z_, {
                        onClick: () => k.A.setEnabled(!1),
                        noticeType: ei.kqX.STREAMER_MODE,
                        children: es.intl.string(es.t.R9GHya),
                      }),
                    ],
                  });
                case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
                  if (null == r.metadata) return null;
                  let { skuId: w, applicationId: K } = r.metadata,
                    $ = tK.A.get(w),
                    Z = j.A.getApplication(K);
                  if (null == $ || null == Z) return null;
                  let J = { page: ei.liQ.IN_APP };
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.PREMIUM_TIER_1,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => M($.id),
                        noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                      }),
                      (0, i.jsx)(u.t, {
                        size: "md",
                        color: "currentColor",
                        className: ea.PC,
                      }),
                      es.intl.format(es.t["g3MU/+"], {
                        applicationName: Z.name,
                        skuName: $.name,
                      }),
                      (0, i.jsx)(I.Z_, {
                        noticeType: ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                        onClick: async () => {
                          try {
                            let { openIAPPurchaseModal: e } = await Promise.all(
                              [
                                n.e("6305"),
                                n.e("69273"),
                                n.e("97893"),
                                n.e("77083"),
                                n.e("63009"),
                                n.e("16933"),
                                n.e("88205"),
                                n.e("80848"),
                                n.e("45650"),
                                n.e("22894"),
                                n.e("25310"),
                                n.e("93880"),
                                n.e("29946"),
                                n.e("1195"),
                                n.e("22995"),
                                n.e("79705"),
                                n.e("23924"),
                                n.e("71470"),
                                n.e("20287"),
                                n.e("28367"),
                                n.e("35429"),
                                n.e("10471"),
                                n.e("63232"),
                                n.e("60235"),
                                n.e("64827"),
                                n.e("23808"),
                                n.e("11301"),
                                n.e("61737"),
                                n.e("79428"),
                                n.e("29963"),
                                n.e("47834"),
                                n.e("30938"),
                                n.e("20317"),
                                n.e("84569"),
                                n.e("2368"),
                                n.e("24313"),
                                n.e("74016"),
                                n.e("48405"),
                                n.e("12544"),
                                n.e("19551"),
                                n.e("7743"),
                                n.e("45959"),
                                n.e("60658"),
                                n.e("18573"),
                                n.e("55936"),
                                n.e("31988"),
                                n.e("71751"),
                                n.e("39667"),
                                n.e("26073"),
                                n.e("34303"),
                                n.e("28866"),
                                n.e("1368"),
                                n.e("8304"),
                                n.e("58038"),
                                n.e("93159"),
                                n.e("11566"),
                                n.e("10556"),
                                n.e("94723"),
                                n.e("62931"),
                                n.e("81987"),
                                n.e("50417"),
                                n.e("58007"),
                                n.e("5812"),
                                n.e("27602"),
                                n.e("83157"),
                                n.e("91146"),
                                n.e("6174"),
                                n.e("39851"),
                                n.e("29871"),
                                n.e("10567"),
                                n.e("63645"),
                                n.e("5636"),
                                n.e("38472"),
                                n.e("834"),
                                n.e("84317"),
                                n.e("58984"),
                                n.e("166"),
                                n.e("26574"),
                                n.e("62075"),
                              ],
                            ).then(n.bind(n, 4630));
                            await e({
                              applicationId: Z.id,
                              skuId: $.id,
                              openPremiumPaymentModal: () => {
                                (0, W.A)({
                                  initialPlanId: null,
                                  subscriptionTier: el.pe.TIER_2,
                                  analyticsLocations: s,
                                  analyticsObject: J,
                                });
                              },
                              analyticsLocations: s,
                              analyticsLocationObject: J,
                              context: __OVERLAY__
                                ? ei.BRT.OVERLAY
                                : ei.BRT.APP,
                            }),
                              M($.id);
                          } catch (e) {
                            null != e &&
                              t5.error(
                                "Failed to open off-platform premium perk modal",
                                e,
                              );
                          }
                        },
                        children: es.intl.string(es.t.KEwPYx),
                      }),
                    ],
                  });
                case ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
                  if (null == r.metadata) return null;
                  let { skuId: e, applicationId: t } = r.metadata,
                    n = tK.A.get(e),
                    l = j.A.getApplication(t);
                  if (null == n || null == l) return null;
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.PREMIUM_TIER_1,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => t6(),
                        noticeType:
                          ei.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
                      }),
                      (0, i.jsx)(u.t, {
                        size: "md",
                        color: "currentColor",
                        className: ea.PC,
                      }),
                      es.intl.format(es.t.LquIKC, {
                        applicationName: l.name,
                        skuName: n.name,
                      }),
                      (0, i.jsx)(I.zr, {
                        children: (0, i.jsx)(a.N_, {
                          onClick: () => t6(),
                          to: {
                            pathname: ei.BVt.APPLICATION_STORE_LISTING_SKU(
                              n.id,
                            ),
                            state: { scrollRestoration: !1 },
                          },
                          children: es.intl.string(es.t.hvVgAZ),
                        }),
                      }),
                    ],
                  });
                }
                case ei.kqX.SURVEY: {
                  let e = r.metadata;
                  if (null == e) return null;
                  let {
                    key: t,
                    prompt: n,
                    cta: l,
                    url: s,
                    embedded: a,
                    id: E,
                  } = e;
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.CUSTOM,
                    children: [
                      (0, i.jsx)(I.PM, {
                        noticeType: ei.kqX.SURVEY,
                        onClick: () => {
                          (0, g.pX)(t, !0);
                        },
                      }),
                      n,
                      (0, i.jsx)(I.Z_, {
                        noticeType: ei.kqX.SURVEY,
                        onClick: () => {
                          a ? (0, tS.K)(E) : window.open(s, "_blank"),
                            (0, g.pX)(t, !1);
                        },
                        children: l,
                      }),
                    ],
                  });
                }
                case ei.kqX.CORRUPT_INSTALLATION:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.DANGER,
                    children: [
                      es.intl.string(es.t["ugxmk/"]),
                      (0, i.jsx)(I.eC, {
                        href: tZ.A.getArticleURL(ei.MVz.CORRUPT_INSTALLATION),
                        target: "_blank",
                        noticeType: r.type,
                        children: es.intl.string(es.t["6ik4Xk"]),
                      }),
                    ],
                  });
                case ei.kqX.VIDEO_UNSUPPORTED_BROWSER:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.WARNING,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => t6(),
                        noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER,
                      }),
                      es.intl.string(es.t.wVjKGi),
                      (0, i.jsx)(I.Z_, {
                        noticeType: ei.kqX.VIDEO_UNSUPPORTED_BROWSER,
                        onClick: () => {
                          (0, R.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                              n.e("81013"),
                              n.e("44602"),
                              n.e("25280"),
                            ]).then(n.bind(n, 987482));
                            return (t) =>
                              (0, i.jsx)(e, {
                                source: "Video unsupported browser",
                                ...t,
                              });
                          });
                        },
                        children: es.intl.string(es.t["1WjMbC"]),
                      }),
                    ],
                  });
                case ei.kqX.DISPATCH_ERROR:
                  if (null == r.metadata) return null;
                  let { error: et } = r.metadata;
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.DANGER,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => t6(),
                        noticeType: ei.kqX.DISPATCH_ERROR,
                      }),
                      et?.displayMessage,
                      (0, i.jsx)(I.Z_, {
                        noticeType: ei.kqX.DISPATCH_ERROR,
                        onClick: () =>
                          (0, R.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                              n.e("13520"),
                              n.e("88014"),
                            ]).then(n.bind(n, 627261));
                            return (t) => (0, i.jsx)(e, { ...t });
                          }),
                        children: es.intl.string(es.t.hvVgAZ),
                      }),
                    ],
                  });
                case ei.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
                  if (null == r.metadata) return null;
                  let { progress: en, total: er, name: e_ } = r.metadata;
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.DEFAULT,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => t6(),
                        noticeType: ei.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
                      }),
                      (0, i.jsxs)(q.A, {
                        justify: q.A.Justify.CENTER,
                        children: [
                          null != e_
                            ? es.intl.formatToPlainString(es.t["pHj+z4"], {
                                name: `${e_}`,
                                progress: en,
                                total: er,
                              })
                            : es.intl.formatToPlainString(es.t["lHZn+A"], {
                                progress: en,
                                total: er,
                              }),
                          (0, i.jsx)(d.y, {
                            type: d.y.Type.PULSING_ELLIPSIS,
                            className: ea.gO,
                          }),
                        ],
                      }),
                    ],
                  });
                case ei.kqX.APPLICATION_TEST_MODE:
                  if (null == r.metadata) return null;
                  if (null != t$.A.testModeEmbeddedApplicationId)
                    return (0, i.jsx)(I.$T, {
                      color: I.Hv.WARNING,
                      children: (0, i.jsxs)(q.A, {
                        justify: q.A.Justify.CENTER,
                        align: q.A.Align.CENTER,
                        children: [
                          (0, i.jsx)("div", {
                            children: es.intl.format(es.t["1qxVe4"], {
                              applicationName: r.metadata.applicationName,
                            }),
                          }),
                          (0, i.jsx)(I.PM, {
                            onClick: f.cL,
                            noticeType: ei.kqX.APPLICATION_TEST_MODE,
                          }),
                        ],
                      }),
                    });
                  return (0, i.jsx)(I.$T, {
                    color: I.Hv.WARNING,
                    children: (0, i.jsxs)(q.A, {
                      justify: q.A.Justify.CENTER,
                      align: q.A.Align.CENTER,
                      children: [
                        (0, i.jsx)("div", {
                          children: es.intl.format(es.t.Fv5HrE, {
                            applicationName: r.metadata.applicationName,
                          }),
                        }),
                        (0, i.jsx)(I.PM, {
                          onClick: f.cL,
                          noticeType: ei.kqX.APPLICATION_TEST_MODE,
                        }),
                      ],
                    }),
                  });
                case ei.kqX.VIEWING_ROLES:
                  return (0, i.jsx)(ti.A, {});
                case ei.kqX.PREMIUM_UNCANCEL:
                  return (0, i.jsxs)(I.$T, {
                    color:
                      L === el.PremiumTypes.TIER_1
                        ? I.Hv.PREMIUM_TIER_1
                        : L === el.PremiumTypes.TIER_0
                          ? I.Hv.PREMIUM_TIER_0
                          : I.Hv.PREMIUM_TIER_2,
                    children: [
                      (0, i.jsx)(I.PM, {
                        noticeType: ei.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                          t6(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                      }),
                      (0, i.jsx)(u.t, {
                        size: "md",
                        color: "currentColor",
                        className: ea.PC,
                      }),
                      L === el.PremiumTypes.TIER_1
                        ? es.intl.formatToPlainString(es.t.fXv4wm, {
                            daysLeft: r.metadata.daysLeft,
                          })
                        : L === el.PremiumTypes.TIER_0
                          ? es.intl.formatToPlainString(es.t.ZOHZMr, {
                              daysLeft: r.metadata.daysLeft,
                            })
                          : es.intl.formatToPlainString(es.t.outyHh, {
                              daysLeft: r.metadata.daysLeft,
                            }),
                      (0, i.jsx)(I.Z_, {
                        noticeType: ei.kqX.PREMIUM_UNCANCEL,
                        onClick: () => {
                          t6(r.metadata?.premiumSubscription?.currentPeriodEnd),
                            (0, R.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                n.e("4469"),
                                n.e("77083"),
                                n.e("63009"),
                                n.e("93880"),
                                n.e("80848"),
                                n.e("23309"),
                                n.e("35429"),
                                n.e("10471"),
                                n.e("23808"),
                                n.e("11301"),
                                n.e("61737"),
                                n.e("79428"),
                                n.e("47834"),
                                n.e("20317"),
                                n.e("2368"),
                                n.e("24313"),
                                n.e("19551"),
                                n.e("5812"),
                                n.e("25279"),
                                n.e("6159"),
                                n.e("87075"),
                                n.e("62175"),
                                n.e("8739"),
                                n.e("14794"),
                              ]).then(n.bind(n, 174705));
                              return (t) =>
                                (0, i.jsx)(e, {
                                  ...t,
                                  daysLeft: r.metadata.daysLeft,
                                  premiumType: L,
                                  analyticsSource: "Nag Bar",
                                  premiumSubscription:
                                    r.metadata.premiumSubscription,
                                });
                            });
                        },
                        children:
                          L === el.PremiumTypes.TIER_1
                            ? es.intl.string(es.t.BkbUPM)
                            : L === el.PremiumTypes.TIER_0
                              ? es.intl.string(es.t.Px978X)
                              : es.intl.string(es.t.LW5tCE),
                      }),
                    ],
                  });
                case ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
                  let { daysPastDue: eo, dismissUntil: eA } = r.metadata;
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.WARNING,
                    children: [
                      (0, i.jsx)(I.PM, {
                        noticeType: r.type,
                        onClick: () => {
                          t6(eA);
                        },
                      }),
                      es.intl.format(es.t.zxU0Kp, { daysPastDue: eo }),
                      (0, i.jsx)(I.Z_, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                        onClick: () => {
                          t6(eA),
                            (0, Q.openUserSettings)(z.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: es.intl.string(es.t.q8rxeS),
                      }),
                    ],
                  });
                case ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.DANGER,
                    children: [
                      (0, i.jsx)(I.PM, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                          t6(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                      }),
                      es.intl.string(es.t.LlZaoX),
                      (0, i.jsx)(I.Z_, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                        onClick: () => {
                          t6(r.metadata?.premiumSubscription?.currentPeriodEnd),
                            (0, Q.openUserSettings)(z.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: es.intl.string(es.t["Zpd+Yq"]),
                      }),
                    ],
                  });
                case ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.WARNING,
                    children: [
                      (0, i.jsx)(I.PM, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                          t6(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                      }),
                      es.intl.string(es.t["30YfCr"]),
                      (0, i.jsx)(I.Z_, {
                        noticeType: ei.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                        onClick: () => {
                          t6(r.metadata?.premiumSubscription?.currentPeriodEnd),
                            (0, Q.openUserSettings)(z.X.SUBSCRIPTIONS_PANEL);
                        },
                        children: es.intl.string(es.t.U5pKWA),
                      }),
                    ],
                  });
                case ei.kqX.PREMIUM_MISSING_PAYMENT:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.WARNING,
                    children: [
                      (0, i.jsx)(I.PM, {
                        noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                          t6(r.metadata?.premiumSubscription?.currentPeriodEnd);
                        },
                      }),
                      L === el.PremiumTypes.TIER_1
                        ? es.intl.formatToPlainString(es.t.b6QUvf, {
                            daysLeft: r.metadata.daysLeft,
                          })
                        : L === el.PremiumTypes.TIER_0
                          ? es.intl.formatToPlainString(es.t["tURZ/M"], {
                              daysLeft: r.metadata.daysLeft,
                            })
                          : es.intl.formatToPlainString(es.t.AyC74I, {
                              daysLeft: r.metadata.daysLeft,
                            }),
                      (0, i.jsx)(I.Z_, {
                        noticeType: ei.kqX.PREMIUM_MISSING_PAYMENT,
                        onClick: () => {
                          t6(r.metadata?.premiumSubscription?.currentPeriodEnd),
                            (0, Q.openUserSettings)(z.X.SUBSCRIPTIONS_PANEL);
                        },
                        children:
                          L === el.PremiumTypes.TIER_1
                            ? es.intl.string(es.t.lboF5O)
                            : L === el.PremiumTypes.TIER_0
                              ? es.intl.string(es.t["4UPwOq"])
                              : es.intl.string(es.t["P/VvGb"]),
                      }),
                    ],
                  });
                case ei.kqX.BACK_TO_PREVIOUS_SCREEN:
                  return (0, i.jsx)(tt, {
                    buttonText: r.buttonText ?? es.intl.string(es.t["/g10LC"]),
                    onGoBack: r.callback,
                    onDismiss: () => t6(),
                    showCloseButton: !0,
                  });
                case ei.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
                  return (0, i.jsx)(eW, { guildId: t, analyticsLocations: s });
                case ei.kqX.QUARANTINED:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.DANGER,
                    children: [
                      es.intl.string(es.t.DVFJYf),
                      (0, i.jsx)(I.eC, {
                        href: t0.q,
                        target: "_blank",
                        noticeType: r.type,
                        children: es.intl.string(es.t.kvHdFN),
                      }),
                      (0, i.jsx)(N.Anchor, {
                        href: tZ.A.getArticleURL(ei.MVz.QUARANTINE),
                        target: "_blank",
                        className: ea.yw,
                        children: es.intl.string(es.t.hvVgAZ),
                      }),
                    ],
                  });
                case ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
                  let { dismissUntil: ec, decisionId: eT } = r.metadata;
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.WARNING,
                    children: [
                      (0, i.jsx)(I.PM, {
                        noticeType:
                          ei.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
                        onClick: () => {
                          null != t && (0, eq.wu)(t), t6(ec);
                        },
                      }),
                      es.intl.string(es.t.B8ruyY),
                      (0, i.jsx)(I.zr, {
                        onClick: () => {
                          null != t &&
                            (0, eq.W5)(t, eT, () => {
                              t6(ec), (0, eq.wu)(t);
                            });
                        },
                        children: es.intl.string(es.t.oX14El),
                      }),
                      null != t
                        ? (0, i.jsx)(I.zr, {
                            onClick: () =>
                              tn.A.open(
                                t,
                                ei.BEX.GUILD_AUTOMOD,
                                void 0,
                                ei.nd0.AUTOMOD_MENTION_SPAM,
                              ),
                            children: es.intl.string(es.t["1R7QIx"]),
                          })
                        : null,
                    ],
                  });
                case ei.kqX.QUESTS_PROGRESS_INTERRUPTION:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.DANGER,
                    children: [
                      (0, i.jsx)(I.PM, {
                        noticeType: ei.kqX.QUESTS_PROGRESS_INTERRUPTION,
                        onClick: () => {
                          r.metadata?.streamKey != null &&
                            (0, tM.lk)(r.metadata.streamKey);
                        },
                      }),
                      es.intl.string(es.t.rOx44m),
                    ],
                  });
                case ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.BRAND,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => {
                          t6(r.metadata?.dismissUntil);
                        },
                        noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                      }),
                      es.intl.string(es.t["0klLS7"]),
                      (0, i.jsx)(I.Z_, {
                        onClick: () => {
                          (0, R.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                              n.e("56030"),
                              n.e("18413"),
                              n.e("22255"),
                              n.e("55925"),
                              n.e("85033"),
                              n.e("26484"),
                              n.e("9163"),
                            ]).then(n.bind(n, 307750));
                            return (t) => (0, i.jsx)(e, { ...t });
                          }),
                            t6(r.metadata?.dismissUntil);
                        },
                        noticeType: ei.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
                        children: es.intl.string(es.t.e4y2VM),
                      }),
                    ],
                  });
                case ei.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
                  return (0, i.jsx)(tm, {});
                case ei.kqX.PREMIUM_MARKETING_NAGBAR:
                  return (0, i.jsx)(tC, {});
                case ei.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR:
                  return (0, i.jsx)(td, {
                    premiumSubscription: r.metadata.premiumSubscription,
                  });
                case ei.kqX.SYSTEM_SERVICE_WARNING:
                  return (0, i.jsx)(tb, {});
                case ei.kqX.RESTRICTED_HOURS_WARNING:
                  return (0, i.jsxs)(I.$T, {
                    color: I.Hv.WARNING,
                    children: [
                      (0, i.jsx)(I.PM, {
                        onClick: () => t6(),
                        noticeType: r.type,
                      }),
                      r.message,
                      r.metadata?.subtitle != null
                        ? ` \xb7 ${r.metadata.subtitle}`
                        : null,
                    ],
                  });
                default:
                  return null;
              }
            })
          : null;
      function t3() {
        let { analyticsLocations: e } = (0, G.Ay)(L.A.NOTICE);
        return (0, i.jsx)(G.f5, { value: e, children: (0, i.jsx)(t4, {}) });
      }
    },
    727949(e, t, n) {
      n.d(t, {
        GQ: () => I,
        NF: () => R,
        QG: () => u,
        Tp: () => O,
        ZR: () => N,
        ne: () => d,
      });
      var i = n(17928),
        l = n(554146),
        r = n(826673),
        s = n(367727),
        a = n(927813),
        E = n(935208),
        _ = n(851746),
        o = n(894374),
        A = n(103411),
        c = n(49999),
        T = n(985018);
      function I(e) {
        let t = (e - Date.now()) / a.A.Millis.HOUR;
        return t > 24
          ? T.intl.formatToPlainString(T.t["g9s+dA"], {
              numDays: Math.floor(t / 24),
            })
          : t >= 1
            ? T.intl.formatToPlainString(T.t.k9v33y, {
                numHours: Math.floor(t),
              })
            : T.intl.formatToPlainString(T.t["/d0GmT"], {
                numMinutes: Math.floor(60 * t),
              });
      }
      let N = () => (0, r.k8)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
        u = () => {
          (0, r.Dr)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
        },
        R = (e) => {
          let { trialOffer: t } = e;
          if (null == t) return !1;
          let n = void 0 !== t.referrer_id,
            i = void 0 === t.redeemed_at,
            l = new Date(E.default.extractTimestamp(t.id)),
            r = new Date();
          return n && i && r >= l;
        },
        d = (e) => {
          null != e
            ? (0, s.qr)(l.M.REFERRAL_PROGRAM_POPOVER_V2, e, {
                dismissAction: c.i.INDIRECT_ACTION,
              })
            : (0, r.Dr)(l.M.REFERRAL_PROGRAM_POPOVER);
        },
        O = () => {
          let e,
            t = (0, A.m)(!1),
            n = (0, i.bG)([_.A], () => _.A.getReferralsRemaining()),
            s = (0, i.bG)([_.A], () => _.A.getReminderStateId());
          return (
            (e = (0, o.A)({ location: "ReferralProgramUtils" })
              ? null != s &&
                !(0, r.u$)(l.M.REFERRAL_PROGRAM_POPOVER_V2, s).isDismissed
              : !(0, r.k8)(l.M.REFERRAL_PROGRAM_POPOVER)),
            t && e && null != n && n > 0
          );
        };
    },
    635995(e, t, n) {
      n.d(t, { In: () => N, T0: () => R, fY: () => u });
      var i = n(627968);
      n(64700);
      var l = n(503698),
        r = n.n(l);
      if (21552 == n.j) var s = n(821609);
      if (21552 == n.j) var a = n(534514);
      if (21552 == n.j) var E = n(403581);
      if (21552 == n.j) var _ = n(43990);
      if (21552 == n.j) var o = n(939249);
      if (21552 == n.j) var A = n(789645);
      var c = n(818348),
        T = n(985018),
        I = n(192842);
      let N = (e) => {
          let { children: t } = e;
          return (0, i.jsx)(a.D, {
            variant: "heading-sm/medium",
            color: "text-strong",
            className: I.ut,
            children: t,
          });
        },
        u = (e) => {
          let { text: t, onClick: n } = e;
          return (0, i.jsx)(s.$, {
            onClick: n,
            text: t,
            size: "sm",
            icon: E.t,
            variant: "secondary",
          });
        };
      function R(e) {
        let { className: t, ref: n, children: l, onClick: s } = e;
        return (0, i.jsx)(_.N, {
          theme: c.NJ.DARKER,
          children: (e) =>
            (0, i.jsxs)("div", {
              ref: n,
              className: r()(I.lm, e, t),
              children: [
                (0, i.jsx)("div", { className: I.qZ, children: l }),
                (0, i.jsx)(o.D, {
                  focusProps: { offset: 6 },
                  className: I.b,
                  onClick: s,
                  "aria-label": T.intl.string(T.t.WAI6xu),
                  children: (0, i.jsx)(A.P, { size: "sm" }),
                }),
              ],
            }),
        });
      }
    },
    745299(e, t, n) {
      n.d(t, { A: () => O });
      var i = n(627968);
      n(64700);
      var l = n(110259),
        r = n(496431),
        s = n(793574),
        a = n(688810),
        E = n(139286),
        _ = n(532794),
        o = n(954571),
        A = n(975571),
        c = n(927578),
        T = n(234419),
        I = n(635995),
        N = n(915516),
        u = n(788868),
        R = n(652215),
        d = n(985018);
      let O =
        21552 == n.j
          ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                { analyticsLocations: O } = (0, a.Ay)(
                  (function (e) {
                    switch (e) {
                      case u.pe.TIER_0:
                        return s.A.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
                      case u.pe.TIER_2:
                        return s.A.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
                      default:
                        throw Error(`Unsupported subscription tier: ${e}`);
                    }
                  })(n),
                ),
                P = (0, T.V)(),
                C = (0, r.A)(
                  null != P && null != P.expires_at
                    ? Date.parse(P.expires_at)
                    : 0,
                ),
                S =
                  null == P ||
                  P.subscription_trial?.sku_id !== n ||
                  null == P.expires_at ||
                  Object.values(C).every((e) => 0 === e);
              if (
                ((0, E.A)(
                  {
                    type: l.ImpressionTypes.VIEW,
                    name: l.ImpressionNames.TRIAL_NOTICE,
                    properties: { trial_id: P?.trial_id },
                  },
                  { disableTrack: S },
                ),
                S)
              )
                return null;
              let M =
                  n === u.pe.TIER_2
                    ? R.kqX.PREMIUM_TIER_2_TRIAL_ENDING
                    : R.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
                D = (0, c.re)({
                  intervalType: P.subscription_trial?.interval,
                  intervalCount: P.subscription_trial?.interval_count,
                }),
                m = A.A.getArticleURL(
                  P.trial_id === u.yo
                    ? R.MVz.NITRO_TRIAL_FOR_ALL
                    : R.MVz.PREMIUM_TRIAL,
                );
              return (0, i.jsxs)(I.T0, {
                onClick: () => {
                  t(),
                    o.default.track(R.HAw.APP_NOTICE_CLOSED, {
                      notice_type: M,
                      trial_id: P.trial_id,
                    });
                },
                children: [
                  (0, i.jsx)(I.In, { children: (0, N.GZ)(n, C, D, m) }),
                  (0, i.jsx)(I.fY, {
                    onClick: () => {
                      (0, _.A)({
                        trialId: P.trial_id,
                        subscriptionTier: n,
                        analyticsLocations: O,
                        analyticsObject: {
                          page: R.liQ.IN_APP,
                          section: R.JJy.NOTIFICATION_BAR,
                          object: R.ZSU.BUTTON_CTA,
                        },
                      }),
                        o.default.track(R.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                          notice_type: M,
                          trial_id: P.trial_id,
                        });
                    },
                    text: (function (e) {
                      switch (e) {
                        case u.pe.TIER_0:
                          return d.intl.string(d.t.mCG023);
                        case u.pe.TIER_2:
                          return d.intl.string(d.t.J61px0);
                        default:
                          throw Error(`Unsupported subscription tier: ${e}`);
                      }
                    })(n),
                  }),
                ],
              });
            }
          : null;
    },
    915516(e, t, n) {
      n.d(t, { Fu: () => A, GZ: () => o, __: () => T, rn: () => c });
      var i = n(496431),
        l = n(773669),
        r = n(975571),
        s = n(927578),
        a = n(788868),
        E = n(652215),
        _ = n(985018);
      function o(e, t, n, i) {
        switch (e) {
          case a.pe.TIER_0:
            return t.days > 0
              ? _.intl.formatToPlainString(_.t.sP5OqC, { days: t.days })
              : t.hours > 0
                ? _.intl.formatToPlainString(_.t["7Lhfu7"], { hours: t.hours })
                : _.intl.formatToPlainString(_.t.coDiS0, {
                    minutes: Math.max(t.minutes, 1),
                  });
          case a.pe.TIER_2:
            return t.days > 0
              ? _.intl.formatToPlainString(_.t.GPqVWT, {
                  days: t.days,
                  trialPeriod: n,
                  termsUrl: i,
                })
              : t.hours > 0
                ? _.intl.formatToPlainString(_.t.WFMtg1, {
                    hours: t.hours,
                    trialPeriod: n,
                    termsUrl: i,
                  })
                : _.intl.formatToPlainString(_.t.SxXB42, {
                    minutes: Math.max(t.minutes, 1),
                    trialPeriod: n,
                    termsUrl: i,
                  });
          default:
            throw Error(`Unsupported subscription tier: ${e}`);
        }
      }
      let A = (e) => {
        let t = e.expires_at,
          n = (0, i.A)(null != t ? Date.parse(t) : 0, 1e3),
          l = e?.subscription_trial?.sku_id;
        return null == t || null == l
          ? null
          : o(
              l,
              n,
              (0, s.re)({
                intervalType: e.subscription_trial?.interval,
                intervalCount: e.subscription_trial?.interval_count,
              }),
              r.A.getArticleURL(
                e.trial_id === a.yo
                  ? E.MVz.NITRO_TRIAL_FOR_ALL
                  : E.MVz.PREMIUM_TRIAL,
              ),
            );
      };
      function c(e, t) {
        let n = new Intl.NumberFormat(l.default.locale, {
          style: "percent",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(t / 100);
        return e.days > 0
          ? _.intl.formatToPlainString(_.t["7mw8CZ"], {
              days: e.days,
              discountPercentage: n,
            })
          : e.hours > 0
            ? _.intl.formatToPlainString(_.t["0hYT6o"], {
                hours: e.hours,
                discountPercentage: n,
              })
            : _.intl.formatToPlainString(_.t["2rh7rw"], {
                minutes: Math.max(e.minutes, 1),
                discountPercentage: n,
              });
      }
      let T = (e) => {
        let t = e.expires_at,
          n = (0, i.A)(null != t ? Date.parse(t) : 0, 1e3);
        return null == t ? null : c(n, Number(e.discount.amount));
      };
    },
    814249(e, t, n) {
      n.d(t, { K: () => R, default: () => d });
      var i = n(627968),
        l = n(64700),
        r = n(189213),
        s = n(17928),
        a = n(192308),
        E = n(834730),
        _ = n(27620),
        o = n(668131),
        A = n(797632),
        c = n(468035),
        T = n(198778),
        I = n(985018),
        N = n(772954);
      function u(e) {
        let { surveyId: t, survey: n, onClose: s, transitionState: A } = e,
          {
            getSurveyResponses: u,
            setResponse: R,
            trackDisplayedQuestions: d,
          } = (0, o.i)(),
          O = u(t),
          P = (0, c.i)(n),
          [C, S] = l.useState(P.blockId),
          [M, D] = l.useState(P.pageIndex),
          [m, p] = l.useState(!1),
          U = (e, n) => {
            R(t, e, n);
          },
          k = l.useCallback(
            () => (
              m
                ? s()
                : (0, a.openModal)((e) =>
                    (0, i.jsx)(r.Modal, {
                      title: I.intl.string(I.t.T9Sx3z),
                      actions: [
                        {
                          variant: "secondary",
                          text: I.intl.string(I.t.oEAioF),
                          onClick: e.onClose,
                        },
                        {
                          variant: "critical-primary",
                          text: I.intl.string(I.t.p89ACt),
                          onClick: () => {
                            e.onClose(), s();
                          },
                        },
                      ],
                      ...e,
                      children: (0, i.jsx)(E.E, {
                        variant: "text-md/normal",
                        children: I.intl.string(I.t.iCK6G0),
                      }),
                    }),
                  ),
              Promise.resolve()
            ),
            [s, m],
          ),
          g = l.useMemo(
            () =>
              null == C
                ? []
                : (0, c.uy)(n, { blockId: C, pageIndex: M, responses: O }),
            [n, C, M, O],
          ),
          f = l.useCallback(() => {
            if (null == n || null == C) return;
            let e = (0, c.vt)(n, { blockId: C, pageIndex: M, responses: O });
            d(t, g),
              e.isComplete && _.Ay.submitSurveyResponse(t, O),
              S(e.blockId),
              D(e.pageIndex),
              p(e.isComplete);
          }, [n, C, M, O, t, g, d]);
        l.useEffect(() => {
          0 === g.length && f();
        }, [g, f]);
        let y = l.useMemo(() => {
          if (m) return !1;
          for (let e of g) {
            let t = n.Questions[e];
            if (t?.Validation?.Settings?.ForceResponse === "ON") {
              let t = O[e];
              if (null == t || "" === t.trim()) return !1;
            }
          }
          return !0;
        }, [m, g, n, O]);
        return m
          ? (0, i.jsxs)(r.Modal, {
              transitionState: A,
              onClose: s,
              size: "md",
              title: I.intl.string(I.t.OSqLUF),
              actions: [
                {
                  variant: "primary",
                  text: I.intl.string(I.t.i4jeWR),
                  onClick: s,
                },
              ],
              children: [
                (0, i.jsx)(E.E, {
                  variant: "text-md/normal",
                  children: I.intl.string(I.t["2scvdw"]),
                }),
                (0, i.jsx)(E.E, {
                  variant: "text-md/normal",
                  children: I.intl.string(I.t.chZxOD),
                }),
              ],
            })
          : (0, i.jsx)(r.Modal, {
              transitionState: A,
              onClose: k,
              title: I.intl.string(I.t.OSqLUF),
              size: "md",
              actions: [
                {
                  variant: "primary",
                  text: I.intl.string(I.t.PDTjLN),
                  onClick: f,
                  disabled: !y,
                },
              ],
              children: (0, i.jsx)("div", {
                style: { width: "100%" },
                children:
                  0 === g.length
                    ? null
                    : (0, i.jsx)("div", {
                        className: N.Qs,
                        children: g.map((e) => {
                          let t = n.Questions[e];
                          return null == t
                            ? null
                            : (0, i.jsx)(
                                T.A,
                                {
                                  question: t,
                                  questionId: e,
                                  responses: O,
                                  onResponseChange: U,
                                },
                                e,
                              );
                        }),
                      }),
              }),
            });
      }
      async function R(e) {
        null != (await _.Ay.fetchSurveyDetails(e)) &&
          (o.i.getState().clearSurveyResponses(e),
          (0, a.openModalLazy)(
            async () => {
              let { default: t } = await Promise.resolve().then(
                n.bind(n, 814249),
              );
              return (n) => (0, i.jsx)(t, { ...n, surveyId: e });
            },
            { onCloseRequest: () => {} },
          ));
      }
      function d(e) {
        let { surveyId: t, onClose: n, transitionState: l } = e,
          r = (0, s.bG)([A.A], () => A.A.getSurvey(t));
        return null == r
          ? (0, i.jsx)(E.E, {
              variant: "text-md/medium",
              className: N.Lq,
              children: I.intl.string(I.t.MKDeyL),
            })
          : (0, i.jsx)(u, {
              surveyId: t,
              survey: r,
              onClose: n,
              transitionState: l,
            });
      }
    },
    519057(e, t, n) {
      n.d(t, {
        Ay: () => e8,
        Re: () => ev,
        f7: () => eB,
        pe: () => eX,
        rV: () => eq,
      });
      var i = n(989349),
        l = n.n(i),
        r = n(877624),
        s = n(17928),
        a = n(206959),
        E = n(554146),
        _ = n(506774),
        o = n(228366),
        A = n(77729),
        c = n(573648),
        T = n(941314),
        I = n(380786),
        N = n(587895),
        u = n(145643),
        R = n(826673),
        d = n(367727),
        O = n(587054),
        P = n(487329),
        C = n(161518),
        S = n(736056),
        M = n(328153),
        D = n(446458),
        m = n(652896),
        p = n(585510),
        U = n(610136),
        k = n(229527),
        g = n(93474),
        f = n(164956),
        y = n(857071),
        x = n(869968),
        h = n(923349),
        L = n(810498),
        G = n(233317),
        j = n(612669),
        X = n(264779),
        q = n(374200),
        v = n(852218),
        B = n(160394),
        b = n(859703),
        V = n(39634),
        F = n(655116),
        H = n(105530),
        Y = n(935671),
        w = n(964404),
        W = n(617617),
        K = n(499156),
        $ = n(976910),
        z = n(616356),
        Z = n(495544),
        Q = n(546183),
        J = n(347481),
        ee = n(734057),
        et = n(30370),
        en = n(584584),
        ei = n(696451),
        el = n(317525),
        er = n(71393),
        es = n(51760),
        ea = n(803224),
        eE = n(576705),
        e_ = n(362790),
        eo = n(763827),
        eA = n(309010),
        ec = n(967198),
        eT = n(437959),
        eI = n(351906),
        eN = n(274184),
        eu = n(870570),
        eR = n(287809),
        ed = n(977997),
        eO = n(295405),
        eP = n(166403),
        eC = n(354670),
        eS = n(469778),
        eM = n(147964),
        eD = n(488926),
        em = n(723702),
        ep = n(927578),
        eU = n(19575),
        ek = n(755439),
        eg = n(422033),
        ef = n(966846),
        ey = n(652215);
      n(436317);
      var ex = n(788868),
        eh = n(88001),
        eL = n(654487),
        eG = n(818348),
        ej = n(731854);
      let eX = {
          [ey.kqX.DOWNLOAD_NAG]: E.M.NAGBAR_NOTICE_DOWNLOAD,
          [ey.kqX.CONNECT_SPOTIFY]: E.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
          [ey.kqX.CONNECT_PLAYSTATION]: E.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
          [ey.kqX.PASSKEY_BACKUP]: E.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
          [ey.kqX.PREMIUM_TIER_2_TRIAL_ENDING]:
            E.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
          [ey.kqX.PREMIUM_REACTIVATE]: E.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
          [ey.kqX.BOUNCED_EMAIL_DETECTED]: E.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
          [ey.kqX.PREMIUM_TIER_0_TRIAL_ENDING]:
            E.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
          [ey.kqX.CHECKOUT_RECOVERY_NAGBAR]: E.M.CHECKOUT_RECOVERY_NAGBAR,
          [ey.kqX.QUEST_APP_UPSELL]: E.M.NAGBAR_QUEST_APP_UPSELL,
          [ey.kqX.RIOT_MIGRATION]: E.M.RIOT_CONNECTION_DEPRECATION_DISABLE,
          [ey.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]:
            E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE,
        },
        eq = {
          [ey.kqX.GIFTING_PROMOTION_REMINDER]: E.M.GIFTING_PROMOTION_REMINDER,
        },
        ev = {
          [ey.kqX.PREMIUM_TIER_2_TRIAL_ENDING]:
            E.M.NAGBAR_NOTICE_OFFER_EXPIRING,
          [ey.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]:
            E.M.NAGBAR_NOTICE_OFFER_EXPIRING,
          [ey.kqX.RIOT_MIGRATION]: E.M.RIOT_CONNECTION_DEPRECATION,
          [ey.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]:
            E.M.RIOT_CONNECTION_DEPRECATION_ADMIN,
        },
        eB = {
          [ey.kqX.OUTBOUND_PROMOTION]: E.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
        },
        eb = {
          [ey.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]:
            "hideDetectedOffPlatformPremiumPerkUpsell",
          [ey.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
          [ey.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
          [ey.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]:
            "hidePastDueMissingPaymentReminder",
          [ey.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]:
            "hidePastDueInvalidPaymentReminder",
          [ey.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]:
            "hidePastDueOneTimePaymentReminder",
          [ey.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]:
            "hideAutoModerationMentionRaidDetectionNotice",
          [ey.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
          [ey.kqX.WIN32_DEPRECATED_MESSAGE]:
            "hideWin32DeprecationMessageNotice",
          [ey.kqX.WIN7_8_DEPRECATED_MESSAGE]:
            "hideWin78DeprecationMessageNotice",
          [ey.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
          [ey.kqX.PREMIUM_TIER_2_TRIAL_ENDING]:
            "hidePremiumTier2TrialOfferEndingNotice",
          [ey.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]:
            "hidePremiumTier2DiscountOfferEndingNotice",
          [ey.kqX.BLOCK_USER_FEEDBACK_NAGBAR]:
            "hideNagbarBlockUserFeedbackNotice",
          [ey.kqX.MACOS_19_DEPRECATED_MESSAGE]:
            "hideMacOS19DeprecationMessageNotice",
          [ey.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
          [ey.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice",
        },
        eV = new Set([
          ey.kqX.NO_INPUT_DETECTED,
          ey.kqX.NO_INPUT_DEVICES_DETECTED,
          ey.kqX.STREAMER_MODE,
          ey.kqX.VIDEO_UNSUPPORTED_BROWSER,
          ey.kqX.SPOTIFY_AUTO_PAUSED,
          ey.kqX.DISPATCH_ERROR,
          ey.kqX.DISPATCH_ERROR,
          ey.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
          ey.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
        ]),
        eF = {},
        eH = {},
        eY = null,
        ew = Object.freeze({
          id: null,
          message: null,
          buttonText: null,
          callback: void 0,
          metadata: null,
        }),
        eW = null;
      function eK(e) {
        return eb[e] + "-untilAtLeast";
      }
      function e$(e, t, n) {
        if (null == e) return;
        let i = eb[e];
        (null == i || t || _.w.set(i, !0),
        eV.has(e) && (eF[e] = !0),
        null != n && null != i)
          ? _.w.set(eK(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
          : _.w.remove(eK(e));
      }
      let ez = null;
      function eZ() {
        if (null != ez) return ez;
        try {
          let e = document.createElement("canvas").getContext("2d"),
            t = "";
          e.font = "16px monospace";
          let n = e.measureText(t).width;
          (e.font = '16px "Segoe MDL2 Assets", monospace'),
            (ez = e.measureText(t).width !== n);
        } catch (e) {
          ez = !1;
        }
        return ez;
      }
      function eQ(e) {
        if (null == e) return !1;
        let t = ev[e];
        if (null != t) {
          let n = (0, O.D)(e);
          return (0, d.FZ)(t, n).isDismissed;
        }
        let n = eX[e];
        if (null != n) return (0, R.k8)(n);
        let i = eb[e];
        if (null != i) {
          let t,
            n = null != (t = _.w.get(eK(e))) ? l()(t) : null;
          if (null != n) return n?.isAfter(l()());
        }
        let r = eF[e];
        return !!r || (null != i && "" !== i ? _.w.get(i) : !!eV.has(e) && r);
      }
      let eJ = [
        ey.kqX.QUARANTINED,
        ey.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
        ey.kqX.RESTRICTED_HOURS_WARNING,
        ey.kqX.VIEWING_ROLES,
        ey.kqX.INVITED_TO_SPEAK,
        ey.kqX.LURKING_GUILD,
        ey.kqX.VOICE_DISABLED,
        ey.kqX.NO_INPUT_DEVICES_DETECTED,
        ey.kqX.NO_INPUT_DETECTED,
        ey.kqX.PTT_NO_KEYBIND_WARNING,
        ey.kqX.HARDWARE_MUTE,
        ey.kqX.DISPATCH_ERROR,
        ey.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        ey.kqX.SPOTIFY_AUTO_PAUSED,
        ey.kqX.WIN32_DEPRECATED_MESSAGE,
        ey.kqX.WIN7_8_DEPRECATED_MESSAGE,
        ey.kqX.WIN_COMPAT_MODE_MESSAGE,
        ey.kqX.MACOS_19_DEPRECATED_MESSAGE,
        ey.kqX.E2EE_UPDATE_REQUIRED,
        ey.kqX.WINDOWS_MEDIA_PACK_REQUIRED,
        ey.kqX.VOICE_CONNECTED_LAST_SESSION,
        ey.kqX.SYSTEM_SERVICE_WARNING,
        ey.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
        ey.kqX.GUILD_RAID_NOTIFICATION,
        ey.kqX.GIFTING_PROMOTION_REMINDER,
        ey.kqX.RIOT_MIGRATION,
        ey.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
        ey.kqX.QUESTS_PROGRESS_INTERRUPTION,
        ey.kqX.UNCLAIMED_ACCOUNT,
        ey.kqX.PENDING_MEMBER,
        ey.kqX.CHECKOUT_RECOVERY_NAGBAR,
        ey.kqX.PREMIUM_MARKETING_NAGBAR,
        ey.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR,
        ey.kqX.OUTBOUND_PROMOTION,
        ey.kqX.CORRUPT_INSTALLATION,
        ey.kqX.VIDEO_UNSUPPORTED_BROWSER,
        ey.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
        ey.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
        ey.kqX.STREAMER_MODE,
        ey.kqX.SCHEDULED_MAINTENANCE,
        ey.kqX.BOUNCED_EMAIL_DETECTED,
        ey.kqX.UNVERIFIED_ACCOUNT,
        ey.kqX.PREMIUM_TIER_2_TRIAL_ENDING,
        ey.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
        ey.kqX.PREMIUM_TIER_0_TRIAL_ENDING,
        ey.kqX.PREMIUM_UNCANCEL,
        ey.kqX.PREMIUM_MISSING_PAYMENT,
        ey.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
        ey.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
        ey.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
        ey.kqX.PREMIUM_REACTIVATE,
        ey.kqX.PASSKEY_BACKUP,
        ey.kqX.APPLICATION_TEST_MODE,
        ey.kqX.QUEST_APP_UPSELL,
        ey.kqX.DOWNLOAD_NAG,
        ey.kqX.CONNECT_SPOTIFY,
        ey.kqX.CONNECT_PLAYSTATION,
        ey.kqX.SURVEY,
        ey.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
        ey.kqX.IGNORE_USER_FEEDBACK_NAGBAR,
      ];
      ey.kqX.QUARANTINED,
        ey.kqX.AUTOMOD_QUARANTINED_USER_PROFILE,
        ey.kqX.VIEWING_ROLES,
        ey.kqX.INVITED_TO_SPEAK,
        ey.kqX.LURKING_GUILD,
        ey.kqX.VOICE_DISABLED,
        ey.kqX.NO_INPUT_DETECTED,
        ey.kqX.HARDWARE_MUTE,
        ey.kqX.DISPATCH_ERROR,
        ey.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        ey.kqX.SPOTIFY_AUTO_PAUSED,
        ey.kqX.VOICE_CONNECTED_LAST_SESSION,
        ey.kqX.PENDING_MEMBER,
        ey.kqX.STREAMER_MODE,
        ey.kqX.SCHEDULED_MAINTENANCE;
      let e0 = {
        [ey.kqX.GIFTING_PROMOTION_REMINDER]: { predicate: () => (0, L.MD)() },
        [ey.kqX.GUILD_RAID_NOTIFICATION]: {
          predicate: () =>
            (0, p.dj)().show && !eQ(ey.kqX.GUILD_RAID_NOTIFICATION),
          metadata: () => ({ dismissUntil: l()().add(3, "hours").toDate() }),
        },
        [ey.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
          predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (null == n) return !1;
            let i = ei.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, k.TR)(i);
          },
        },
        [ey.kqX.QUARANTINED]: {
          predicate: (e) => {
            let { currentUser: t } = e;
            return t.hasFlag(ey.nhx.QUARANTINED);
          },
        },
        [ey.kqX.RESTRICTED_HOURS_WARNING]: {
          predicate: () => null != eY,
          metadata: () =>
            null != eY ? { title: eY.title, subtitle: eY.subtitle } : null,
        },
        [ey.kqX.VIEWING_ROLES]: {
          predicate: (e) => {
            let { selectedGuildId: t } = e;
            return f.A.isViewingRoles(t);
          },
        },
        [ey.kqX.INVITED_TO_SPEAK]: {
          predicate: (e) => {
            let { voiceState: t } = e;
            return (
              (0, H.eY)(t) === H.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            );
          },
        },
        [ey.kqX.LURKING_GUILD]: {
          predicate: (e) => {
            let { selectedGuildId: t } = e;
            return null != t && y.A.isLurking(t);
          },
        },
        [ey.kqX.VOICE_DISABLED]: {
          predicate: () => null != eo.A.getRemoteDisconnectVoiceChannelId(),
        },
        [ey.kqX.VOICE_CONNECTED_LAST_SESSION]: {
          predicate: () => null != eo.A.getLastSessionVoiceChannelId(),
        },
        [ey.kqX.NO_INPUT_DETECTED]: {
          predicate: () =>
            C.A.hasActiveErrorOfType(P.iy.NO_AUDIO_INPUT_DETECTED),
        },
        [ey.kqX.NO_INPUT_DEVICES_DETECTED]: {
          predicate: () => C.A.hasActiveErrorOfType(P.iy.NO_INPUT_DEVICES),
        },
        [ey.kqX.HARDWARE_MUTE]: {
          predicate: () =>
            eo.A.isConnected() &&
            es.Ay.isHardwareMute() &&
            es.Ay.isHardwareMuteNoticeEnabled() &&
            !w.Ay.disableHardwareMuteSilenceAlert,
          metadata: () => {
            let e = es.Ay.getInputDeviceId(),
              t = J.A.getVendor(e),
              n = J.A.getModel(e);
            if (null != t && null != n) return { vendor: t, model: n };
          },
        },
        [ey.kqX.PTT_NO_KEYBIND_WARNING]: {
          predicate: () =>
            !!eo.A.isConnected() &&
            es.Ay.getMode() === ey.TBI.PUSH_TO_TALK &&
            !(es.Ay.getSettings().modeOptions.shortcut.length > 0) &&
            !!K.A.getConfig({ location: "NoticeStore" })
              .showPTTNoKeybindWarning,
        },
        [ey.kqX.DISPATCH_ERROR]: {
          predicate: () => null != ek.A.getLastError(),
          metadata: () => ({ error: ek.A.getLastError() }),
        },
        [ey.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
          predicate: () => null != eg.A.getLastProgress(),
          metadata: () => eg.A.getLastProgress(),
        },
        [ey.kqX.SPOTIFY_AUTO_PAUSED]: { predicate: () => F.A.wasAutoPaused() },
        [ey.kqX.UNCLAIMED_ACCOUNT]: {
          predicate: (e) => {
            let { currentUser: t } = e;
            return null != t && !t.isClaimed();
          },
        },
        [ey.kqX.PENDING_MEMBER]: {
          predicate: (e) => {
            let { selectedGuildId: t, currentUser: n } = e;
            return (
              (null != t &&
                null != n &&
                !er.A.getGuild(t)?.features.has(
                  ey.GuildFeatures.GUILD_ONBOARDING,
                ) &&
                ei.Ay.getMember(t, n.id)?.isPending) ??
              !1
            );
          },
        },
        [ey.kqX.OUTBOUND_PROMOTION]: { predicate: () => (0, X.So)() },
        [ey.kqX.CORRUPT_INSTALLATION]: {
          predicate: () =>
            em.isPlatformEmbedded &&
            (!a.A.supported() || ef.A.isCorruptInstallation()),
        },
        [ey.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
          predicate: (e) => {
            let { voiceChannelId: t } = e;
            return (
              null != t &&
              ed.A.hasVideo(t) &&
              !es.Ay.supports(ej.O5.VIDEO) &&
              !eQ(ey.kqX.VIDEO_UNSUPPORTED_BROWSER)
            );
          },
        },
        [ey.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
          predicate: (e) => {
            let { currentUser: t } = e;
            return (
              ep.Ay.canRedeemPremiumPerks(t) &&
              en.A.getDetectedOffPlatformPremiumPerks().length > 0
            );
          },
          metadata: () => en.A.getDetectedOffPlatformPremiumPerks()[0],
        },
        [ey.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
          predicate: () =>
            !eQ(ey.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) &&
            en.A.getDetectedOffPlatformPremiumPerks().length > 0,
          metadata: () => en.A.getDetectedOffPlatformPremiumPerks()[0],
        },
        [ey.kqX.STREAMER_MODE]: { predicate: () => eI.A.enabled },
        [ey.kqX.DOWNLOAD_NAG]: {
          predicate: () => !em.isPlatformEmbedded && !eQ(ey.kqX.DOWNLOAD_NAG),
        },
        [ey.kqX.QUEST_APP_UPSELL]: {
          predicate: () =>
            (0, em.isOculusWeb)() &&
            !eQ(ey.kqX.QUEST_APP_UPSELL) &&
            B.A.getConfig({ location: "NoticeStore" }).enabled,
        },
        [ey.kqX.SCHEDULED_MAINTENANCE]: {
          predicate: () => null != eT.A.getScheduledMaintenance(),
          metadata: () => {
            let e = eT.A.getScheduledMaintenance();
            if (null != e)
              return {
                id: e.id,
                start: new Date(e.scheduled_for),
                end: new Date(e.scheduled_until),
              };
          },
        },
        [ey.kqX.SURVEY]: {
          predicate: () => null != eN.Ay.getCurrentSurvey(),
          metadata: () => eN.Ay.getCurrentSurvey(),
        },
        [ey.kqX.UNVERIFIED_ACCOUNT]: {
          predicate: (e) => {
            let { currentUser: t } = e;
            return t?.email != null && !t.verified;
          },
        },
        [ey.kqX.BOUNCED_EMAIL_DETECTED]: {
          predicate: (e) => {
            let { currentUser: t } = e;
            return t?.hasBouncedEmail;
          },
        },
        [ey.kqX.CONNECT_SPOTIFY]: {
          predicate: () =>
            !F.A.hasConnectedAccount() &&
            M.Ay.isObservedAppRunning(c.A.get(ey.fg2.SPOTIFY).name) &&
            !eQ(ey.kqX.CONNECT_SPOTIFY),
        },
        [ey.kqX.WIN32_DEPRECATED_MESSAGE]: {
          predicate: () =>
            A.A?.os.arch === "ia32" && A.A?.process.platform === "win32",
          metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
        },
        [ey.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
          predicate: () => {
            if (A.A?.process.platform === "win32")
              try {
                if (parseInt(A.A?.os.release.split(".")[0]) >= 10) return !1;
                return !eZ();
              } catch (e) {}
            return !1;
          },
          metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
        },
        [ey.kqX.WIN_COMPAT_MODE_MESSAGE]: {
          predicate: () => {
            if (A.A?.process.platform === "win32")
              try {
                if (parseInt(A.A?.os.release.split(".")[0]) >= 10) return !1;
                return eZ();
              } catch (e) {}
            return !1;
          },
          metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
        },
        [ey.kqX.MACOS_19_DEPRECATED_MESSAGE]: {
          predicate: () => {
            if (A.A?.process.platform === "darwin")
              try {
                return 20 > parseInt(A.A?.os.release.split(".")[0]);
              } catch (e) {}
            return !1;
          },
          metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
        },
        [ey.kqX.CONNECT_PLAYSTATION]: {
          predicate: () =>
            et.A.isSuggestedAccountType(ey.fg2.PLAYSTATION) &&
            null == et.A.getAccount(null, ey.fg2.PLAYSTATION) &&
            !eQ(ey.kqX.CONNECT_PLAYSTATION),
        },
        [ey.kqX.PASSKEY_BACKUP]: {
          predicate: (e) => {
            let { currentUser: t } = e;
            return (
              t?.mfaEnabled &&
              $.A.hasFetchedCredentials() &&
              !$.A.hasCredentials &&
              !eQ(ey.kqX.PASSKEY_BACKUP)
            );
          },
        },
        [ey.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
          predicate: () =>
            eC.A.getAlmostExpiringTrialOffersForReminder([ex.pe.TIER_2])
              .length > 0 && !eQ(ey.kqX.PREMIUM_TIER_2_TRIAL_ENDING),
        },
        [ey.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
          predicate: () =>
            eC.A.getAlmostExpiringTrialOffersForReminder([ex.pe.TIER_0])
              .length > 0 && !eQ(ey.kqX.PREMIUM_TIER_0_TRIAL_ENDING),
        },
        [ey.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
          predicate: () =>
            eC.A.getAlmostExpiringDiscountOffersForReminder([ex.pe.TIER_2])
              .length > 0 && !eQ(ey.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING),
        },
        [ey.kqX.PREMIUM_UNCANCEL]: {
          predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
              i =
                null != t
                  ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days")
                  : 0,
              r =
                t?.canceledAt != null &&
                t?.status === ey.Dmq.CANCELED &&
                1 >= l()().diff(l()(t.canceledAt), "days"),
              s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
              a =
                null != t &&
                t.status === ey.Dmq.CANCELED &&
                !s &&
                i <= 7 &&
                i >= 0 &&
                (0, ep.YE)(n, ex.PremiumTypes.TIER_2) &&
                !r &&
                !n.hasFreePremium() &&
                !t.isPurchasedExternally;
            return !eQ(ey.kqX.PREMIUM_UNCANCEL) && a;
          },
          metadata: (e) => {
            let { premiumSubscription: t } = e,
              n =
                null != t
                  ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days")
                  : 0,
              i = null != t ? (0, ep.EL)(t)?.planId : null;
            return {
              daysLeft: n,
              premiumType: null != i ? ep.Ay.getPremiumType(i) : null,
              premiumSubscription: t,
            };
          },
        },
        [ey.kqX.PREMIUM_MISSING_PAYMENT]: {
          predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
              i =
                null != t
                  ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days")
                  : 0,
              r =
                null != t
                  ? l()(t.currentPeriodEnd).diff(
                      l()(t.currentPeriodStart).startOf("day"),
                      "days",
                    )
                  : 0,
              s = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
              a = eS.A.applicationIdsFetched.has(ex.tv),
              E = eS.A.getForApplication(ex.tv),
              _ = null != t ? (0, ep.EL)(t) : null,
              o = null != _ ? ep.Ay.getSkuIdForPlan(_.planId) : null,
              A =
                null != E &&
                null != _ &&
                Array.from(E).filter((e) => {
                  let { skuId: t, consumed: n } = e;
                  return !n && t === o;
                }).length > 0,
              c =
                null != t &&
                i <= (r > 14 ? 7 : 2) &&
                i >= 0 &&
                t.status !== ey.Dmq.PAST_DUE &&
                !s &&
                a &&
                !A &&
                null === t.paymentSourceId &&
                !n.hasFreePremium() &&
                !t.isPurchasedExternally;
            return !eQ(ey.kqX.PREMIUM_MISSING_PAYMENT) && c;
          },
          metadata: (e) => {
            let { premiumSubscription: t } = e,
              n =
                null != t
                  ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days")
                  : 0,
              i = null != t ? (0, ep.EL)(t)?.planId : null;
            return {
              daysLeft: n,
              premiumType: null != i ? ep.Ay.getPremiumType(i) : null,
              premiumSubscription: t,
            };
          },
        },
        [ey.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
          predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
              i =
                null != t && null != t.paymentSourceId
                  ? eO.A.getPaymentSource(t.paymentSourceId)
                  : null,
              r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
              s =
                null != t &&
                t.status === ey.Dmq.PAST_DUE &&
                !r &&
                null != i &&
                i.invalid &&
                !n.hasFreePremium() &&
                !t.isPurchasedExternally;
            return !eQ(ey.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
          },
          metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
          },
        },
        [ey.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
          predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
              i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
              r =
                null != t &&
                t.status === ey.Dmq.PAST_DUE &&
                !i &&
                null === t.paymentSourceId &&
                !n.hasFreePremium() &&
                !t.isPurchasedExternally;
            return !eQ(ey.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
          },
          metadata: (e) => {
            let { premiumSubscription: t } = e;
            return { premiumSubscription: t };
          },
        },
        [ey.kqX.APPLICATION_TEST_MODE]: {
          predicate: () => null != eM.A.testModeApplicationId,
          metadata: () => {
            if (null == eM.A.testModeApplicationId) return {};
            let e = eM.A.testModeApplicationId,
              t = N.A.getApplication(e);
            return {
              applicationName: null != t ? t.name : e,
              applicationId: e,
            };
          },
        },
        [ey.kqX.PREMIUM_REACTIVATE]: {
          predicate: () =>
            !eQ(ey.kqX.PREMIUM_REACTIVATE) && h.A.shouldShowReactivateNotice(),
        },
        [ey.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
          predicate: (e) => {
            let { premiumSubscription: t, currentUser: n } = e,
              i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
              r =
                null != t && null != t.paymentSourceId
                  ? eO.A.getPaymentSource(t.paymentSourceId)
                  : null,
              s = null != r && eG.AD.has(r.type),
              a =
                null != t &&
                t.status === ey.Dmq.PAST_DUE &&
                !i &&
                s &&
                !n.hasFreePremium() &&
                !t.isPurchasedExternally;
            return !eQ(ey.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
          },
          metadata: (e) => {
            let { premiumSubscription: t } = e;
            return null == t
              ? { daysPastDue: 0, dismissUntil: l()().toDate() }
              : {
                  daysPastDue:
                    t.status === ey.Dmq.PAST_DUE
                      ? l()().diff(t.currentPeriodStart, "days")
                      : 0,
                  dismissUntil: (0, ep.ji)(t).expiresDate.toDate(),
                };
          },
        },
        [ey.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
          predicate: (e) => {
            let { selectedGuildId: t } = e,
              n = null != t ? er.A.getGuild(t) : null;
            return (
              (null != t &&
                null != g.A.getMentionRaidDetected(t) &&
                n?.features.has(ey.GuildFeatures.COMMUNITY) &&
                !eQ(ey.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION)) ||
              !1
            );
          },
          metadata: (e) => {
            let { selectedGuildId: t } = e,
              n = { dismissUntil: l()().add(2, "hours").toDate() };
            if (null != t) {
              let e = g.A.getMentionRaidDetected(t);
              null != e && (n.decisionId = e.decisionId);
            }
            return n;
          },
        },
        [ey.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
          predicate: () => {
            let e = z.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, m._z)(e),
              n = b.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eL.tZ;
          },
          metadata: () => {
            let e = z.A.getCurrentUserActiveStream();
            return { streamKey: null != e ? (0, m._z)(e) : null };
          },
        },
        [ey.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
          predicate: (e) => {
            let { currentUser: t } = e,
              n = eO.A.paymentSources ?? {};
            return (
              x.A.getIsTargeted() &&
              !(0, ep.TW)(t) &&
              0 !== Object.keys(n).length
            );
          },
        },
        [ey.kqX.PREMIUM_MARKETING_NAGBAR]: {
          predicate: () => {
            let e = q.A.getMarketingComponentByType(r.C.NAGBAR);
            if (null == e) return !1;
            if (null == e.promotionId) return !0;
            let t = q.A.getPromotionByTypeAndId(
              v.pt.MARKETING_MOMENT,
              e.promotionId,
            );
            return (
              !(null != t && t.endDate < new Date()) &&
              !(0, R.u$)(
                E.M.PREMIUM_MARKETING_MOMENT_NAGBAR_UPSELL,
                e.promotionId,
              ).isDismissed
            );
          },
        },
        [ey.kqX.PREMIUM_GROUP_PRIMARY_REMINDER_NAGBAR]: {
          predicate: (e) => {
            let { currentUser: t } = e,
              n = eP.A.getPremiumGroupSubscription();
            if (null == n) return !1;
            let i = G.A.hasFetchedMembers(),
              l = G.A.getNumAvailableInvites();
            return (0, j.ux)(t, n) && i && l >= eh.Vu;
          },
          metadata: () => ({
            premiumSubscription: eP.A.getPremiumGroupSubscription(),
          }),
        },
        [ey.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
          predicate: () => !eQ(ey.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && V.Cm(),
          metadata: () => ({
            dismissUntil: l()().add(180, "days").toDate(),
            sampleRate: 0.1,
          }),
        },
        [ey.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: {
          predicate: () => V.h6(),
          metadata: () => ({ sampleRate: 0.1 }),
        },
        [ey.kqX.SYSTEM_SERVICE_WARNING]: {
          predicate: (e) => {
            let { voiceChannelId: t } = e;
            if (
              eQ(ey.kqX.SYSTEM_SERVICE_WARNING) ||
              !(0, Y.yA)(M.Ay) ||
              null == t ||
              es.Ay.getMode() !== ey.TBI.PUSH_TO_TALK
            )
              return !1;
            let n = M.Ay.getVisibleGame();
            return null != n && !!n.elevated;
          },
        },
        [ey.kqX.E2EE_UPDATE_REQUIRED]: {
          predicate: () => {
            if (eQ(ey.kqX.E2EE_UPDATE_REQUIRED) || !eo.A.isConnected())
              return !1;
            let e = es.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0);
          },
          metadata: () => ({ dismissUntil: l()().add(5, "days").toDate() }),
        },
        [ey.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
          predicate: () =>
            !(
              !em.isPlatformEmbedded ||
              A.A?.process.platform !== "win32" ||
              eQ(ey.kqX.WINDOWS_MEDIA_PACK_REQUIRED) ||
              eU.Ay.getEnableHardwareAcceleration()
            ) && !1 === es.Ay.isH264MfDecodeAvailable(),
        },
        [ey.kqX.RIOT_MIGRATION]: {
          predicate: () => {
            if (!T.A.getConfig({ location: "NoticeStore" }).enabled) return !1;
            let e = null != et.A.getAccount(null, ey.fg2.RIOT_GAMES),
              t = null != et.A.getAccount(null, ey.fg2.LEAGUE_OF_LEGENDS);
            if (
              eQ(ey.kqX.RIOT_MIGRATION) ||
              (0, R.k8)(E.M.RIOT_CONNECTION_DEPRECATION_DISABLE) ||
              (!e && !t)
            )
              return !1;
            let n = c.A.get(ey.fg2.LEAGUE_OF_LEGENDS),
              i = c.A.get(ey.fg2.RIOT_GAMES);
            return null != n.replacedBy && null != i.replacedBy;
          },
        },
        [ey.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN]: {
          predicate: (e) => {
            let { currentUser: t, selectedGuildId: n } = e;
            if (
              !T.A.getConfig({ location: "NoticeStore" }).enabled ||
              eQ(ey.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN) ||
              (0, R.k8)(E.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE)
            )
              return !1;
            let i = null != n ? er.A.getGuild(n) : null,
              l = (0, eD.$3)({
                permission: ey.xBc.ADMINISTRATOR,
                user: t,
                context: i,
              }),
              r =
                null != i
                  ? el.A.getSortedRoles(i.id).filter(
                      (e) => null === e.tags.guild_connections,
                    )
                  : null;
            return null != i && !!l && null != r && !!(0, I.D)(r);
          },
        },
      };
      function e2() {
        if (!D.A.isConnected()) return !1;
        eW = null;
        let e = eR.default.getCurrentUser();
        if (null == e) return !1;
        let t = eP.A.getPremiumSubscription(),
          n = ec.A.getGuildId(),
          i = eA.A.getVoiceChannelId(),
          l = null != i ? ed.A.getVoiceStateForChannel(i) : null;
        for (let r of eJ)
          if (
            null != e0[r] &&
            e0[r].predicate({
              selectedGuildId: n,
              voiceChannelId: i,
              voiceState: l,
              currentUser: e,
              premiumSubscription: t,
            })
          ) {
            let i = e0[r].metadata?.({
              currentUser: e,
              premiumSubscription: t,
              selectedGuildId: n,
            });
            eW = { ...ew, type: r, metadata: i };
            break;
          }
        if (null != eW) {
          eW.metadata?.sampleRate != null &&
            null == eH[eW.type] &&
            (eH[eW.type] = Math.random() <= eW.metadata.sampleRate);
          let e = !1 === eH[eW.type];
          (eQ(eW.type) || e) && (eW = null);
        }
      }
      function e5() {
        return eI.A.enabled || delete eF[ey.kqX.STREAMER_MODE], e2();
      }
      class e1 extends s.Ay.Store {
        static displayName = "NoticeStore";
        initialize() {
          this.syncWith(
            [
              C.A,
              eN.Ay,
              e_.A,
              en.A,
              ec.A,
              q.A,
              eC.A,
              Q.default,
              et.A,
              W.A,
              U.A,
              b.A,
              z.A,
              M.Ay,
              $.A,
              C.A,
              u.A,
            ],
            e2,
          ),
            this.waitFor(
              C.A,
              N.A,
              z.A,
              Z.default,
              Q.default,
              J.A,
              ee.A,
              x.A,
              et.A,
              en.A,
              ek.A,
              eg.A,
              ef.A,
              eS.A,
              S.A,
              D.A,
              g.A,
              U.A,
              ei.Ay,
              u.A,
              el.A,
              er.A,
              f.A,
              y.A,
              es.Ay,
              ea.A,
              eO.A,
              eE.A,
              G.A,
              e_.A,
              q.A,
              b.A,
              eo.A,
              M.Ay,
              eA.A,
              ec.A,
              F.A,
              eT.A,
              eI.A,
              h.A,
              eP.A,
              eN.Ay,
              eM.A,
              w.Ay,
              eC.A,
              eu.A,
              W.A,
              eR.default,
              ed.A,
              $.A,
            );
        }
        hasNotice() {
          return null != eW && null != eW.type;
        }
        getNotice() {
          return null == eu.A.getAction() ? eW : null;
        }
        isNoticeDismissed(e) {
          return eQ(e);
        }
      }
      let e8 = new e1(o.h, {
        CURRENT_USER_UPDATE: e2,
        MEDIA_ENGINE_SET_AUDIO_ENABLED: e2,
        CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: e2,
        CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: e2,
        STATUS_PAGE_SCHEDULED_MAINTENANCE: e2,
        STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: e2,
        GUILD_CREATE: e2,
        GUILD_DELETE: e2,
        AUDIO_INPUT_DETECTED: e2,
        AUDIO_SET_DISPLAY_SILENCE_WARNING: e2,
        CERTIFIED_DEVICES_SET: e2,
        AUDIO_SET_INPUT_DEVICE: e2,
        AUDIO_SET_OUTPUT_DEVICE: e2,
        MEDIA_ENGINE_DEVICES: e2,
        RTC_CONNECTION_STATE: e2,
        RPC_APP_AUTHENTICATED: e2,
        RPC_APP_DISCONNECTED: e2,
        USER_CONNECTIONS_UPDATE: e2,
        WINDOW_FOCUS: e2,
        INSTANT_INVITE_CREATE: e2,
        INSTANT_INVITE_REVOKE_SUCCESS: e2,
        SPOTIFY_PLAYER_PAUSE: e2,
        RUNNING_GAMES_CHANGE: e2,
        EXPERIMENTS_FETCH_SUCCESS: e2,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: e2,
        DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: e2,
        DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: e2,
        DEVELOPER_TEST_MODE_RESET: e2,
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: e2,
        DISPATCH_APPLICATION_INSTALL: e2,
        IMPERSONATE_STOP: e2,
        IMPERSONATE_UPDATE: e2,
        GUILD_MEMBER_ADD: function (e) {
          return e.user.id === Z.default.getId() && e2();
        },
        GUILD_MEMBER_UPDATE: e2,
        SURVEY_FETCHED: e2,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: e2,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: e2,
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: e2,
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: e2,
        UNSYNCED_USER_SETTINGS_UPDATE: e2,
        VOICE_STATE_UPDATES: function (e) {
          let { voiceStates: t } = e;
          return (
            (eW?.type === ey.kqX.INVITED_TO_SPEAK ||
              t.some((e) => {
                let { userId: t } = e;
                return t !== Z.default.getId();
              })) &&
            e2()
          );
        },
        STREAMER_MODE_UPDATE: e5,
        RUNNING_STREAMER_TOOLS_CHANGE: e5,
        DISPATCH_APPLICATION_ERROR: function () {
          return delete eF[ey.kqX.DISPATCH_ERROR], e2();
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
          return delete eF[ey.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], e2();
        },
        DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
          return e2();
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
          return e2();
        },
        RESTRICTED_HOURS_WARNING: function (e) {
          let { title: t, subtitle: n } = e;
          (eY = { title: t, subtitle: n }), e2();
        },
        NOTICE_SHOW: function (e) {
          eW = e.notice;
        },
        NOTICE_DISMISS: function (e) {
          return (
            null != eW &&
            (null == e.id || e.id === eW.id) &&
            (e$(eW.type, e.isTemporary, e.untilAtLeast), e2())
          );
        },
        NOTICE_DISABLE: function (e) {
          let { noticeType: t } = e;
          return e$(t), e2();
        },
        LOGOUT: function () {
          (eF = {}), (eH = {}), (eY = null), (eW = null);
        },
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: e2,
        AUTO_MODERATION_MENTION_RAID_DETECTION: e2,
        REPORT_AV_ERROR: e2,
        ACTIVE_AV_ERRORS_CHANGED: e2,
        MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: e2,
        AUDIO_SET_MODE: e2,
        PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: e2,
      });
    },
    954457(e, t, n) {
      n.d(t, { A: () => i });
      let i =
        "https://cdn.discordapp.com/assets/content/60fb932c6ca2a353188680784e8689fa8384d04e7b7abbb8660c25dbb70afb9c.svg";
    },
  },
]);
//# sourceMappingURL=3960.511af84b50985289.js.map
