"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["27752"],
  {
    717306(t, n, e) {
      e.d(n, { A: () => a });
      var i = e(141639),
        l = e(61330);
      function a(t) {
        return (0, l.A)(t) || (0, i.A)(t);
      }
    },
    365185(t, n, e) {
      e.d(n, { A: () => s });
      var i = e(17928),
        l = e(517164),
        a = e(99753),
        r = e(424994);
      function s(t) {
        let { activity: n, user: e } = t,
          s = (0, i.bG)(
            [a.A],
            () =>
              a.A.getMatchingInboxEntry({
                activity: n,
                userId: e.id,
                feedId: r.X1.GLOBAL_FEED,
              }),
            [n, e.id],
          ),
          o = (0, i.bG)(
            [l.A],
            () => l.A.getMatchingOutboxEntry({ activity: n, userId: e.id }),
            [n, e.id],
          );
        return s ?? o;
      }
    },
    92240(t, n, e) {
      e.d(n, { A: () => c });
      var i = e(64700),
        l = e(17928),
        a = e(688810),
        r = e(517164),
        s = e(183555),
        o = e(47675);
      function c(t) {
        let {
            user: n,
            display: e,
            activity: c,
            entry: u,
            stream: d,
            voiceChannelId: A,
            analyticsLocations: x,
          } = t,
          { context: p, trackUserProfileAction: f } = (0, s.NJ)(),
          { analyticsLocations: _ } = (0, a.Ay)(),
          m = x ?? _,
          T = (0, l.bG)([r.A], () => r.A.getUserOutbox(n.id));
        return (0, i.useCallback)(
          (t) => {
            let { action: n } = t;
            f({ action: n, analyticsLocations: m }),
              (0, o.Tu)({
                action: n,
                display: e,
                activity: c,
                entry: u,
                stream: d,
                outbox: T,
                voiceChannelId: A,
                analyticsLocations: m,
                ...p,
              });
          },
          [f, p, e, c, d, u, T, A, m],
        );
      }
    },
    257367(t, n, e) {
      e.d(n, { A: () => s });
      var i = e(64700),
        l = e(172218),
        a = e(17928),
        r = e(517164);
      function s(t) {
        let { userId: n, onAction: e } = t,
          [s, o] = (0, i.useState)(!1),
          c = (0, a.bG)([r.A], () => r.A.isFetchingUserOutbox(n)),
          u = (0, i.useCallback)(
            (t) => {
              t && (e({ action: "VIEW_ACTIVITY_CARD" }), o(!0));
            },
            [e],
          );
        return (0, l.K)(u, void 0, !c && !s);
      }
    },
    248302(t, n, e) {
      e.d(n, { A: () => p });
      var i = e(360469),
        l = e(652215);
      function a(t) {
        return (
          t?.application_id === i.D4 &&
          (t?.platform === l.yTV.ANDROID || t?.platform === l.yTV.IOS)
        );
      }
      var r = e(82149),
        s = e(573648),
        o = e(541806),
        c = e(90644),
        u = e(141639),
        d = e(61330);
      let A = new Set([
        l.fg2.LEAGUE_OF_LEGENDS,
        l.fg2.ROBLOX,
        l.fg2.TWITCH,
        l.fg2.YOUTUBE,
      ]);
      var x = e(985018);
      function p(t) {
        let n = (function (t) {
            if ((0, c.A)(t)) return s.A.get(l.fg2.SPOTIFY);
            if ((0, o.A)(t)) return s.A.get(l.fg2.CRUNCHYROLL);
            if ((0, d.A)(t)) return s.A.get(l.fg2.XBOX);
            if ((0, u.A)(t)) return s.A.get(l.fg2.PLAYSTATION);
            if (t?.platform === l.yTV.META_QUEST || a(t))
              return s.A.get(l.fg2.META_QUEST_OR_HORIZON);
            let n = s.A.find((n) => {
              let { name: e } = n;
              return e === t.name;
            });
            return null != n && A.has(n.type) ? n : null;
          })(t),
          e = n?.icon,
          i = n?.name ?? "";
        return t.type === l.$pd.PLAYING && n?.type === l.fg2.XBOX
          ? {
              text: x.intl.formatToPlainString(x.t.A17aM8, {
                platform: x.intl.string(x.t.Nfvo72),
              }),
              platformIcon: e,
              platformLabel: i,
            }
          : t.type === l.$pd.PLAYING && n?.type === l.fg2.PLAYSTATION
            ? {
                text: x.intl.formatToPlainString(x.t.A17aM8, {
                  platform: x.intl.string(x.t.fFl4jo),
                }),
                platformIcon: e,
                platformLabel: i,
              }
            : t.type === l.$pd.PLAYING &&
                n?.type === l.fg2.META_QUEST_OR_HORIZON
              ? {
                  text: x.intl.formatToPlainString(x.t.A17aM8, {
                    platform: a(t)
                      ? x.intl.string(x.t.BrHQaq)
                      : x.intl.string(x.t.p6vL0e),
                  }),
                  platformIcon: e,
                  platformLabel: i,
                }
              : t.type === l.$pd.WATCHING &&
                  n?.type === l.fg2.META_QUEST_OR_HORIZON
                ? {
                    text: x.intl.formatToPlainString(x.t.ENbTKQ, {
                      platform: a(t)
                        ? x.intl.string(x.t.BrHQaq)
                        : x.intl.string(x.t.p6vL0e),
                    }),
                    platformIcon: e,
                    platformLabel: i,
                  }
                : t.type === l.$pd.STREAMING && n?.type === l.fg2.TWITCH
                  ? {
                      text: x.intl.formatToPlainString(x.t["4CQq9Q"], {
                        name: x.intl.string(x.t.q4pBG3),
                      }),
                      platformIcon: e,
                      platformLabel: i,
                    }
                  : t.type === l.$pd.STREAMING && n?.type === l.fg2.YOUTUBE
                    ? {
                        text: x.intl.formatToPlainString(x.t["4CQq9Q"], {
                          name: x.intl.string(x.t.aS6cK4),
                        }),
                        platformIcon: e,
                        platformLabel: i,
                      }
                    : t.type === l.$pd.PLAYING
                      ? {
                          text: x.intl.string(x.t.BMTj28),
                          platformIcon: e,
                          platformLabel: i,
                        }
                      : t.type === l.$pd.STREAMING
                        ? {
                            text: x.intl.string(x.t["Jpkr/q"]),
                            platformIcon: e,
                            platformLabel: i,
                          }
                        : (0, r.Cy)(t)
                          ? {
                              text: x.intl.formatToPlainString(x.t.pW3Ip3, {
                                name: t.name,
                              }),
                            }
                          : t.type === l.$pd.LISTENING && null != t.details
                            ? {
                                text: x.intl.formatToPlainString(
                                  x.t["b+lA5+"],
                                  { name: t.name },
                                ),
                                platformIcon: e,
                                platformLabel: i,
                              }
                            : t.type === l.$pd.LISTENING
                              ? {
                                  text: x.intl.string(x.t.dBISa6),
                                  platformIcon: e,
                                  platformLabel: i,
                                }
                              : t.type === l.$pd.WATCHING && null != t.details
                                ? {
                                    text: x.intl.formatToPlainString(
                                      x.t.mqdfDc,
                                      { name: t.name },
                                    ),
                                    platformIcon: e,
                                    platformLabel: i,
                                  }
                                : t.type === l.$pd.WATCHING
                                  ? {
                                      text: x.intl.string(x.t.GpNXjC),
                                      platformIcon: e,
                                      platformLabel: i,
                                    }
                                  : t.type === l.$pd.COMPETING &&
                                      null != t.details
                                    ? {
                                        text: x.intl.formatToPlainString(
                                          x.t.oHF7Ch,
                                          { name: t.name },
                                        ),
                                        platformIcon: e,
                                        platformLabel: i,
                                      }
                                    : t.type === l.$pd.COMPETING
                                      ? {
                                          text: x.intl.string(x.t.OzCsIA),
                                          platformIcon: e,
                                          platformLabel: i,
                                        }
                                      : {
                                          text: void 0,
                                          platformIcon: e,
                                          platformLabel: i,
                                        };
      }
    },
    580763(t, n, e) {
      e.d(n, { A: () => tq });
      var i = e(627968),
        l = e(64700),
        a = e(503698),
        r = e.n(a),
        s = e(696292),
        o = e(983851),
        c = e(661531),
        u = e(939249),
        d = e(541806),
        A = e(765379),
        x = e(672979),
        p = e(960076),
        f = e(793574),
        _ = e(688810),
        m = e(47167),
        T = e(939341),
        E = e(662010),
        g = e(623671),
        N = e(365185),
        C = e(915089),
        I = e(932413),
        y = e(345942),
        j = e(82149),
        O = e(92240),
        S = e(257367),
        h = e(248302),
        P = e(53257),
        v = e(975732),
        L = e(939496),
        R = e(964195),
        U = e(17928),
        b = e(833349),
        M = e(682261),
        D = e(874546),
        G = e(141639),
        V = e(61330),
        Y = e(709309),
        W = e(737393),
        k = e(540185),
        B = e(289173),
        H = e(735321),
        w = e(999291),
        z = e(993401),
        F = e(495544),
        X = e(760751),
        $ = e(518477),
        Q = e(985018);
      function q(t) {
        let { applicationId: n, onAction: e, onClose: a } = t,
          r = (0, U.bG)([F.default], () => F.default.getId()),
          s = (0, w.Ay)(r, null),
          o = (0, U.bG)([X.A], () => X.A.getDetectableGame(n)),
          c = l.useMemo(
            () =>
              !(
                null == o ||
                s?.widgets?.some(
                  (t) =>
                    t instanceof B.Yy &&
                    t.type === k.x.CURRENT_GAMES &&
                    t.games?.some((t) => t.applicationId === n),
                )
              ) && (0, H.XX)(o),
            [n, s?.widgets, o],
          ),
          u = l.useCallback(
            (t) => {
              t.stopPropagation(),
                e?.({ action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET" }),
                (0, H.ew)({
                  widgetType: k.x.CURRENT_GAMES,
                  game: { applicationId: n },
                  ignoreMaxGames: !0,
                }),
                (0, v.openUserProfileModal)({
                  userId: r,
                  tabSection: $.RP.WIDGETS,
                  scrollTarget: k.x.CURRENT_GAMES,
                }),
                a?.();
            },
            [n, r, e, a],
          );
        return c
          ? (0, i.jsx)(z.FD, {
              text: Q.intl.string(Q.t.BjYzmC),
              onClick: u,
              fullWidth: !0,
            })
          : null;
      }
      var J = e(913948),
        K = e(46225),
        Z = e(308335),
        tt = e(790381),
        tn = e(266080),
        te = e(729937),
        ti = e(76843),
        tl = e(998218),
        ta = e(996988),
        tr = e(514566);
      async function ts(t) {
        let { activity: n, user: e, index: i } = t;
        try {
          let t = await (0, te.yb)(n, e.id);
          if (t.button_urls.length <= i) return;
          let l = t.button_urls[i];
          if ("string" != typeof l) return;
          let a = tl.A.safeParseWithQuery(l);
          if (a?.protocol == null || a?.hostname == null) return;
          (0, ti.h)({ href: tl.A.format(a), trusted: !1 });
        } catch (t) {}
      }
      function to(t) {
        let { user: n, activity: e, onAction: l } = t,
          { themeType: a } = (0, L.E)();
        if (e?.buttons == null || e.buttons.length < 1) return null;
        let r = (0, d.A)(e);
        return a === ta.d.MODAL_V2
          ? (0, i.jsx)("div", {
              className: tr.fO,
              children: e.buttons.map((t, a) =>
                (0, i.jsx)(
                  z.FD,
                  {
                    text: r ? Q.intl.string(Q.t.I6JG46) : t,
                    onClick: (t) => {
                      t.stopPropagation(),
                        l?.({
                          action: r
                            ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON"
                            : "PRESS_CUSTOM_BUTTON",
                        }),
                        ts({ user: n, activity: e, index: a });
                    },
                  },
                  a,
                ),
              ),
            })
          : (0, i.jsx)("div", {
              className: tr.fO,
              children: e.buttons.map((t, a) =>
                (0, i.jsx)(
                  z.FD,
                  {
                    text: r ? Q.intl.string(Q.t.I6JG46) : t,
                    fullWidth: !0,
                    onClick: (t) => {
                      t.stopPropagation(),
                        l?.({
                          action: r
                            ? "PRESS_WATCH_ON_CRUNCHYROLL_BUTTON"
                            : "PRESS_CUSTOM_BUTTON",
                        }),
                        ts({ user: n, activity: e, index: a });
                    },
                  },
                  a,
                ),
              ),
            });
      }
      var tc = e(990078),
        tu = e(323384),
        td = e(808666),
        tA = e(687966),
        tx = e(780907),
        tp = e(928550),
        tf = e(594262),
        t_ = e(695311);
      function tm(t) {
        let { user: n, activity: e, onAction: l, onClose: a } = t,
          { themeType: r } = (0, L.E)(),
          s = (0, t_.A)({ applicationId: e?.application_id, onClose: a }),
          o = (0, tf.l)({
            activity: e ?? void 0,
            embeddedActivity: void 0,
            user: n,
            onClose: a,
          }),
          c = (0, tp.d)(e?.application_id);
        if (null == o && null != e && (0, A.A)(e))
          return (0, i.jsx)(z.FD, {
            icon: tu.k,
            text: Q.intl.string(Q.t.RscU7I),
            fullWidth: r !== ta.d.MODAL_V2,
            onClick: (t) => {
              t.stopPropagation(),
                null != c
                  ? tx.Ay.launch({ applicationId: c })
                  : (l?.({ action: "PRESS_PLAY_BUTTON" }), s());
            },
          });
        if (null == o) return null;
        let {
            isJoining: u,
            handleJoinRequest: d,
            buttonCTA: x,
            tooltip: p,
            isEnabled: f,
            isEmbedded: _,
          } = o,
          m = r !== ta.d.MODAL_V2;
        return (0, i.jsx)("div", {
          className: m ? tr.Ij : void 0,
          children: (0, i.jsx)(tc.m, {
            text: p,
            asContainer: !f,
            children: (0, i.jsx)(z.FD, {
              icon: _ ? td.I : tA._,
              text: x,
              disabled: !f,
              loading: u,
              fullWidth: m,
              onClick: (t) => {
                t.stopPropagation(),
                  l?.({
                    action: _
                      ? "PRESS_JOIN_BUTTON"
                      : "PRESS_ASK_TO_JOIN_BUTTON",
                  }),
                  d();
              },
            }),
          }),
        });
      }
      var tT = e(141628);
      function tE(t) {
        let { startAuthorization: n, onAction: e } = t,
          { newestAnalyticsLocation: l } = (0, _.Ay)(),
          { themeType: a } = (0, L.E)(),
          r = a === ta.d.MODAL_V2;
        return (0, i.jsx)(z.FD, {
          icon: () => (0, i.jsx)(tT.A, {}),
          text: Q.intl.string(Q.t.sbdnpw),
          fullWidth: !r,
          onClick: (t) => {
            t.stopPropagation(),
              e?.({ action: "PRESS_CONNECT_ACCOUNT_BUTTON" }),
              n({ analyticsLocations: [l] });
          },
        });
      }
      var tg = e(626584),
        tN = e(652215);
      function tC(t) {
        let { user: n, activity: e, onAction: l } = t,
          { themeType: a } = (0, L.E)(),
          r = a === ta.d.MODAL_V2;
        return (0, b.A)(e, tN.jUm.INSTANCE)
          ? (0, i.jsx)(z.FD, {
              text: Q.intl.string(Q.t.vwl1PK),
              fullWidth: !r,
              onClick: (t) => {
                t.stopPropagation(),
                  l?.({ action: "PRESS_NOTIFY_BUTTON" }),
                  new tg.A("UserActivityActions").log("notify", n.id, e);
              },
            })
          : null;
      }
      var tI = e(573648),
        ty = e(773952),
        tj = e(30370);
      function tO(t) {
        let { platformType: n, icon: e, onAction: l } = t,
          { newestAnalyticsLocation: a } = (0, _.Ay)(),
          { themeType: r } = (0, L.E)(),
          s = r === ta.d.MODAL_V2;
        return (0, U.bG)([tj.A], () => null != tj.A.getAccount(null, n))
          ? null
          : (0, i.jsx)(z.FD, {
              icon: e,
              text: Q.intl.formatToPlainString(Q.t.XWSHTb, {
                platform: tI.A.get(n).name,
              }),
              fullWidth: !s,
              onClick: (t) => {
                t.stopPropagation();
                let e = n === tN.fg2.XBOX;
                l?.({
                  action: e
                    ? "PRESS_CONNECT_XBOX_BUTTON"
                    : "PRESS_CONNECT_PLAYSTATION_BUTTON",
                }),
                  (0, ty.A)({ platformType: n, location: a });
              },
            });
      }
      var tS = e(378570),
        th = e(790535),
        tP = e(233993),
        tv = e(734057),
        tL = e(576705),
        tR = e(977997);
      function tU(t) {
        let { activity: n, onAction: e, onClose: l } = t,
          { themeType: a } = (0, L.E)(),
          r = a === ta.d.MODAL_V2,
          { channelId: s, guildId: o } = (0, j.UW)(n) ?? {},
          c = (0, U.bG)([tR.A], () => null != s && tR.A.isInChannel(s), [s]),
          u = (0, U.bG)([tv.A], () => (null != s ? tv.A.getChannel(s) : null), [
            s,
          ]),
          d = (0, U.bG)([tL.A], () => null != u && tL.A.can(tP.Gk, u), [u]);
        return (0, j.Cy)(n) && d && null != o && null != s
          ? (0, i.jsx)(z.FD, {
              text: Q.intl.string(Q.t.ZYO5OK),
              fullWidth: !r,
              disabled: c,
              onClick: (t) => {
                t.stopPropagation(),
                  e?.({ action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON" }),
                  th.CH(o, s),
                  (0, tS.iN)(s),
                  l?.();
              },
            })
          : null;
      }
      var tb = e(908289);
      function tM(t) {
        let { activity: n, onAction: e } = t,
          { themeType: l } = (0, L.E)(),
          a = l === ta.d.MODAL_V2,
          r = (0, tb.A)(n);
        return (0, p.A)(n) && null != r
          ? (0, i.jsx)(z.FD, {
              text: Q.intl.string(Q.t.I6JG46),
              fullWidth: !a,
              onClick: (t) => (
                t.stopPropagation(),
                e?.({ action: "PRESS_WATCH_BUTTON" }),
                window.open(r)
              ),
            })
          : null;
      }
      var tD = e(985629);
      function tG(t) {
        let {
            user: n,
            activity: e,
            onAction: l,
            onClose: a,
            application: r,
            containerClassName: s,
          } = t,
          { themeType: o } = (0, L.E)(),
          c = (0, U.bG)([F.default], () => F.default.getId() === n.id),
          u = (0, W.J)(r),
          d = (0, Z.o)(e?.application_id ?? r?.id),
          { analyticsLocations: x } = (0, _.Ay)(
            f.A.USER_PROFILE_ACTIVITY_BUTTONS,
          ),
          m = (0, Y.A)("user_profile_activity_buttons", e?.application_id),
          {
            fetched: T,
            canStartAuthorization: E,
            hasAlreadyLinked: g,
            startAuthorization: N,
          } = (0, K.RD)(r),
          C = o === ta.d.MODAL || o === ta.d.MODAL_V2,
          I = o === ta.d.POPOUT,
          y = (() => {
            if (c)
              return I && e?.type === tN.$pd.PLAYING && r?.id != null
                ? (0, i.jsx)(q, {
                    applicationId: r.id,
                    onAction: l,
                    onClose: a,
                  })
                : null;
            if (e?.buttons != null && e?.buttons.length >= 1)
              return (0, i.jsx)(to, { user: n, activity: e, onAction: l });
            if (!d && u && null != r && !C)
              return (0, i.jsx)(tD.A, {
                application: r,
                onAction: l,
                onClose: a,
                analyticsLocations: x,
              });
            if ((0, A.A)(e) || ((0, D.Ay)(e) && d))
              return (0, i.jsx)(tm, {
                user: n,
                activity: e,
                onAction: l,
                onClose: a,
              });
            if (T && E && !g)
              return (0, i.jsx)(tE, { startAuthorization: N, onAction: l });
            if (m.length > 0)
              return (0, i.jsx)(J.A, {
                distributorCTAConfigs: m,
                fullWidth: o !== ta.d.MODAL_V2,
                stopPropagation: !0,
                onAction: l,
                onClose: a,
              });
            if (!(0, M.A)(e)) {
              if ((0, V.A)(e))
                return (0, i.jsx)(tO, {
                  platformType: tN.fg2.XBOX,
                  icon: () => (0, i.jsx)(tn.A, {}),
                  onAction: l,
                });
              if ((0, G.A)(e))
                return (0, i.jsx)(tO, {
                  platformType: tN.fg2.PLAYSTATION,
                  icon: () => (0, i.jsx)(tt.A, {}),
                  onAction: l,
                });
            }
            return (0, p.A)(e)
              ? (0, i.jsx)(tM, { activity: e, onAction: l })
              : (0, D._C)(e)
                ? (0, i.jsx)(tm, {
                    user: n,
                    activity: e,
                    onAction: l,
                    onClose: a,
                  })
                : (0, b.A)(e, tN.jUm.INSTANCE)
                  ? (0, i.jsx)(tC, { user: n, activity: e, onAction: l })
                  : (0, j.Cy)(e)
                    ? (0, i.jsx)(tU, { activity: e, onAction: l, onClose: a })
                    : null;
          })();
        return null == y
          ? null
          : (0, i.jsx)("div", { className: s, children: y });
      }
      var tV = e(282197),
        tY = e(624951),
        tW = e(584904),
        tk = e(351638),
        tB = e(531648),
        tH = e(910607),
        tw = e(753713),
        tz = e(269587),
        tF = e(409626),
        tX = e(692969),
        t$ = e(534465),
        tQ = e(360469);
      function tq(t) {
        let {
            user: n,
            currentUser: e,
            activity: l,
            application: a,
            voiceGuild: U,
            voiceChannel: b,
            className: M,
            onClose: D,
            appContext: G,
          } = t,
          V = (0, C.GV)(),
          Y = (0, C.GV)(),
          { analyticsLocations: W } = (0, _.Ay)(
            f.A.USER_PROFILE_LIVE_ACTIVITY_CARD,
          ),
          { themeType: k } = (0, L.E)(),
          B = (0, N.A)({ activity: l, user: n }),
          H = (0, O.A)({
            display: "live",
            user: n,
            activity: l,
            entry: B,
            analyticsLocations: W,
          }),
          w = (0, S.A)({ userId: n.id, onAction: H }),
          z = (0, m.Ay)(b),
          F = (0, h.A)(l),
          X = null != F.text && "" !== F.text,
          { largeImage: q, smallImage: J } = (0, T.XN)(l, a),
          K = (function (t) {
            let {
                location: n,
                user: e,
                currentUser: i,
                activity: l,
                application: a,
                entry: r,
                onClose: s,
              } = t,
              o = (0, tX.A)({
                location: n,
                source: tF.Ob.UserProfile,
                trackEntryPointImpression: !0,
                ...(0, t$.UE)({ user: e, activity: l, entry: r }),
              }),
              c = (0, t_.A)({ applicationId: a?.id, onClose: s }),
              u = (0, A.A)(l);
            return u && null != a
              ? c
              : !u && (0, x.A)(l)
                ? o
                : (0, d.A)(l) && e.id !== i.id
                  ? () => ts({ activity: l, user: e, index: 0 })
                  : void 0;
          })({
            location: "UserProfileActivityCard",
            user: n,
            currentUser: e,
            activity: l,
            application: a,
            entry: B,
            onClose: D,
          }),
          Z = () =>
            (0, p.A)(l) && null != b
              ? (0, i.jsxs)("div", {
                  className: tr.FH,
                  children: [
                    (0, i.jsx)(o.H, {
                      size: "xxs",
                      color: c.A.colors.TEXT_DEFAULT,
                      className: tr.Ow,
                    }),
                    (0, i.jsx)(tB.Q, {
                      variant: "heading-sm/semibold",
                      text: z,
                      id: V,
                    }),
                  ],
                })
              : (0, x.A)(l) || (0, j.Cy)(l)
                ? (0, i.jsx)(tB.Q, {
                    variant: "heading-sm/semibold",
                    text: l.name,
                    id: V,
                  })
                : null != l.details
                  ? (0, i.jsx)(E.O, {
                      href: l.details_url,
                      children: (0, i.jsx)(tB.Q, {
                        variant: "heading-sm/semibold",
                        text: l.details,
                        id: V,
                      }),
                    })
                  : (0, i.jsx)(tB.Q, {
                      variant: "heading-sm/semibold",
                      text: l.name,
                      id: V,
                    }),
          tt = () =>
            l.type === tN.$pd.HANG_STATUS
              ? null
              : (0, p.A)(l) && null != U
                ? (0, i.jsx)(tB.A, {
                    variant: "text-xs/normal",
                    text: Q.intl.formatToPlainString(Q.t["hq/Qze"], {
                      guildName: U.name,
                    }),
                    onClick: () => {
                      (0, y.u)(U.id), H({ action: "OPEN_VOICE_GUILD" }), D?.();
                    },
                  })
                : (0, x.A)(l)
                  ? (0, i.jsx)(E.O, {
                      href: l.details_url,
                      children: (0, i.jsx)(tB.A, {
                        variant: "text-xs/normal",
                        text: l.details,
                      }),
                    })
                  : (0, j.Cy)(l)
                    ? (0, i.jsx)(tB.A, {
                        variant: "text-xs/normal",
                        text: l?.assets?.small_text,
                      })
                    : (0, i.jsx)(E.O, {
                        href: l.state_url,
                        children: (0, i.jsx)(tB.A, {
                          variant: "text-xs/normal",
                          text: l.state,
                        }),
                      }),
          tn = () => {
            if (l.type === tN.$pd.WATCHING) return null;
            if ((0, x.A)(l)) return te();
            if (
              (0, j.Cy)(l) &&
              l.party?.size != null &&
              l.party?.size.length >= 2
            ) {
              let t = Q.intl.formatToPlainString(Q.t["JC/3xw"], {
                numSpeakers: l.party?.size[0],
                numListeners: l.party?.size[1] - l.party?.size[0],
              });
              return (0, i.jsx)(tB.A, { variant: "text-xs/normal", text: t });
            }
            return l.assets?.large_text != null
              ? (0, i.jsx)(E.O, {
                  href: l.assets?.large_url,
                  children: (0, i.jsx)(tB.A, {
                    text: l.assets?.large_text,
                    variant: "text-xs/normal",
                  }),
                })
              : null;
          },
          te = () =>
            l.party?.size == null && l.application_id === tQ.I4
              ? (0, i.jsxs)("div", {
                  className: tr.CI,
                  children: [
                    (0, i.jsx)(E.O, {
                      href: l.state_url,
                      children: (0, i.jsx)(tB.A, {
                        variant: "text-xs/normal",
                        text: l.state,
                      }),
                    }),
                    (0, i.jsx)(tB.A, {
                      variant: "text-xs/normal",
                      text: Q.intl.formatToPlainString(Q.t["u//9By"], {
                        count: "0",
                        max: a?.getMaxParticipants() ?? 0,
                      }),
                    }),
                  ],
                })
              : (0, A.A)(l) &&
                  l.party?.size != null &&
                  l.party?.size.length >= 2
                ? (0, i.jsxs)("div", {
                    className: tr.CI,
                    children: [
                      (0, i.jsx)(E.O, {
                        href: l.state_url,
                        children: (0, i.jsx)(tB.A, {
                          variant: "text-xs/normal",
                          text: l.state,
                        }),
                      }),
                      (0, i.jsx)(tB.A, {
                        variant: "text-xs/normal",
                        text:
                          0 === l.party.size[1]
                            ? Q.intl.formatToPlainString(Q.t.IM4J4e, {
                                count: l.party.size[0],
                              })
                            : Q.intl.formatToPlainString(Q.t["u//9By"], {
                                count: l.party.size[0],
                                max: l.party.size[1],
                              }),
                      }),
                    ],
                  })
                : null == l.party
                  ? (0, i.jsx)(E.O, {
                      href: l.state_url,
                      children: (0, i.jsx)(tB.A, {
                        variant: "text-xs/normal",
                        text: l.state,
                      }),
                    })
                  : null,
          ti = () =>
            (0, i.jsx)(tG, {
              containerClassName: tr.o1,
              activity: l,
              user: n,
              onAction: H,
              onClose: D,
              application: a,
            });
        return (0, i.jsx)(_.f5, {
          value: W,
          children: (0, i.jsxs)(tW.A, {
            ref: w,
            className: r()(tr.Nr, M),
            onAction: H,
            onClose: D,
            "aria-labelledby": X ? `${Y} ${V}` : V,
            children: [
              (0, i.jsx)(tk.A, {
                textId: Y,
                ...F,
                contextMenu: (0, i.jsx)(tz.A, {
                  display: "live",
                  user: n,
                  activity: l,
                  entry: B,
                  onClose: D,
                  appContext: G,
                }),
              }),
              (0, i.jsx)(I.A, {
                applicationId: a?.id,
                questContent: s.u.USER_PROFILE_ACTIVITY,
                children: (t) => {
                  let e, a;
                  return (0, i.jsxs)("div", {
                    className: tr.rf,
                    ref: t,
                    children: [
                      (0, i.jsxs)("div", {
                        className: tr.Qs,
                        children: [
                          !n.bot &&
                            ((e = (0, d.A)(l) ? "crunchyroll" : "default"),
                            (a =
                              k === ta.d.MODAL_V2 ? g.w.SIZE_100 : g.w.SIZE_60),
                            null == K
                              ? (0, i.jsx)(g.d, {
                                  image: q,
                                  smallImage: J,
                                  size: a,
                                  aspectRatio: e,
                                  className: tr.Sl,
                                })
                              : (0, i.jsx)(g.d, {
                                  image: q,
                                  smallImage: J,
                                  size: a,
                                  className: tr.mM,
                                  aspectRatio: e,
                                  onClick: (t) => {
                                    H({ action: "PRESS_IMAGE" }), K(t);
                                  },
                                })),
                          (0, i.jsxs)("div", {
                            className: tr.zH,
                            children: [
                              null == K
                                ? (0, i.jsxs)("div", {
                                    children: [Z(), tt(), tn()],
                                  })
                                : (0, i.jsxs)(u.D, {
                                    className: tr.sd,
                                    onClick: (t) => {
                                      H({ action: "PRESS_TEXT" }), K(t);
                                    },
                                    children: [Z(), tt(), tn()],
                                  }),
                              !n.bot &&
                                (0, i.jsx)(tV.A, {
                                  user: n,
                                  activity: l,
                                  className: tr.jp,
                                }),
                              (() => {
                                if (!(0, P.A)(l)) return null;
                                let { start: t, end: n } = l.timestamps;
                                return (0, i.jsx)(tw.A, { start: t, end: n });
                              })(),
                              k === ta.d.MODAL_V2 && ti(),
                            ],
                          }),
                          k === ta.d.MODAL && ti(),
                        ],
                      }),
                      null == U || null == b
                        ? null
                        : (0, i.jsx)(tH.A, {
                            user: n,
                            guild: U,
                            channel: b,
                            onAction: H,
                            onClose: D,
                          }),
                    ],
                  });
                },
              }),
              k !== ta.d.MODAL &&
                k !== ta.d.MODAL_V2 &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    ti(),
                    (0, i.jsx)(R.A, {
                      className: tr.AB,
                      userId: n.id,
                      activityApplication: a,
                      onClickViewMore: (t) => {
                        t.stopPropagation(),
                          H({
                            action:
                              "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE",
                          }),
                          D?.(),
                          (0, v.openUserProfileModal)({
                            userId: n.id,
                            tabSection: $.RP.WIDGETS,
                          });
                      },
                    }),
                  ],
                }),
              (0, i.jsx)(tY.A, {
                applicationId: a?.id,
                onAction: H,
                onClose: D,
                activity: l,
              }),
            ],
          }),
        });
      }
    },
    282197(t, n, e) {
      e.d(n, { A: () => p });
      var i = e(627968);
      e(64700);
      var l = e(889137),
        a = e(20805),
        r = e(506326),
        s = e(365185),
        o = e(82149),
        c = e(78871),
        u = e(652215);
      function d(t) {
        let { entry: n } = t;
        return (0, i.jsx)(i.Fragment, {
          children: [r.$X, r.tR, r.K7, r.fg, r.sp, r.MK].map((t, e) =>
            (0, i.jsx)(t, { entry: n }, `entry-${e}`),
          ),
        });
      }
      function A(t) {
        let { entry: n } = t;
        return (0, i.jsx)(i.Fragment, {
          children: [r.Xr].map((t, e) =>
            (0, i.jsx)(t, { entry: n }, `entry-${e}`),
          ),
        });
      }
      function x(t) {
        let { entry: n } = t;
        return (0, i.jsx)(i.Fragment, {
          children: [r.Y8].map((t, e) =>
            (0, i.jsx)(t, { entry: n }, `entry-${e}`),
          ),
        });
      }
      function p(t) {
        let { user: n, activity: e, className: p } = t,
          f = (0, s.A)({ activity: e, user: n }),
          _ = (0, o.Cy)(e)
            ? []
            : e.type === u.$pd.PLAYING
              ? [c.QA, c.cy]
              : e.type === u.$pd.LISTENING
                ? [c.QA]
                : e.type === u.$pd.WATCHING
                  ? [c.QA, c.Rq]
                  : e.type === u.$pd.COMPETING
                    ? [c.QA]
                    : [];
        return 0 === _.length
          ? null
          : (0, i.jsxs)(r.mG, {
              location: r.N5.USER_PROFILE,
              className: p,
              children: [
                _.map((t, n) =>
                  (0, i.jsx)(t, { activity: e }, `activity-${n}`),
                ),
                (0, l.YW)(f)
                  .when(a.qQ, (t) => (0, i.jsx)(d, { entry: t }))
                  .when(a.UQ, (t) => (0, i.jsx)(A, { entry: t }))
                  .when(a.p6, (t) => (0, i.jsx)(x, { entry: t }))
                  .otherwise(() => null),
              ],
            });
      }
    },
    624951(t, n, e) {
      e.d(n, { A: () => g });
      var i = e(627968),
        l = e(554146),
        a = e(661531),
        r = e(777666),
        s = e(834730),
        o = e(737393),
        c = e(793574),
        u = e(688810),
        d = e(627363),
        A = e(932001),
        x = e(308335),
        p = e(21241),
        f = e(939496),
        _ = e(985629),
        m = e(996988),
        T = e(985018),
        E = e(104728);
      function g(t) {
        let { applicationId: n, onAction: e, onClose: g, activity: N } = t,
          { analyticsLocations: C } = (0, u.Ay)(
            c.A.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION,
          ),
          { data: I } = (0, d.YY)(n),
          y = (0, o.J)(I),
          { themeType: j } = (0, f.E)(),
          O = j === m.d.MODAL || j === m.d.MODAL_V2,
          S = (0, x.o)(N?.application_id ?? n),
          h = y && O && null != I && !S,
          P = h ? [l.M.CLOUD_PLAY_NEW_BADGE] : [],
          [v] = (0, A.kn)(P);
        return h
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(p.A, { className: E.Xl }),
                (0, i.jsxs)("div", {
                  className: E.DK,
                  children: [
                    (0, i.jsxs)("div", {
                      className: E.tJ,
                      children: [
                        v === l.M.CLOUD_PLAY_NEW_BADGE &&
                          (0, i.jsx)(r.Lp, {
                            text: T.intl.string(T.t.y2b7CA),
                            color: a.A.colors.BACKGROUND_BRAND.css,
                          }),
                        (0, i.jsx)(s.E, {
                          variant: "text-xs/medium",
                          children: T.intl.string(T.t.IQjdmV),
                        }),
                      ],
                    }),
                    (0, i.jsx)(_.A, {
                      application: I,
                      onAction: e,
                      onClose: g,
                      analyticsLocations: C,
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
    },
    584904(t, n, e) {
      e.d(n, { A: () => m });
      var i = e(627968),
        l = e(64700),
        a = e(503698),
        r = e.n(a),
        s = e(890856),
        o = e(688810),
        c = e(183555),
        u = e(975732),
        d = e(946356),
        A = e(939496),
        x = e(518477),
        p = e(996988),
        f = e(985018),
        _ = e(514566);
      let m = l.forwardRef(function (t, n) {
        let {
            children: e,
            className: l,
            profileModalScrollTarget: a,
            onAction: m,
            onClose: T,
            "aria-labelledby": E,
            ...g
          } = t,
          { themeType: N } = (0, A.E)(),
          { analyticsLocations: C } = (0, o.Ay)(),
          { context: I } = (0, c.NJ)();
        return N === p.d.MODAL || N === p.d.MODAL_V2 || I?.userId == null
          ? (0, i.jsx)("article", {
              "aria-labelledby": E,
              children: (0, i.jsx)(d.A.Overlay, {
                ref: n,
                className: r()(_.Nr, l),
                ...g,
                children: e,
              }),
            })
          : (0, i.jsx)("article", {
              "aria-labelledby": E,
              children: (0, i.jsx)(s.s, {
                className: _.OV,
                "aria-label": f.intl.string(f.t.pD1L1u),
                focusProps: { ringTarget: n },
                onClick: () => {
                  m?.({ action: "PRESS_CARD" }),
                    (0, u.openUserProfileModal)({
                      tabSection: x.RP.ACTIVITY,
                      sourceAnalyticsLocations: C,
                      scrollTarget: a,
                      ...I,
                    }),
                    T?.();
                },
                children: (0, i.jsx)(d.A.Overlay, {
                  ref: n,
                  className: r()(_.Nr, l),
                  ...g,
                  children: e,
                }),
              }),
            });
      });
    },
    351638(t, n, e) {
      e.d(n, { A: () => d });
      var i = e(627968);
      e(64700);
      var l = e(503698),
        a = e.n(l),
        r = e(780645),
        s = e(834730),
        o = e(939496),
        c = e(996988),
        u = e(514566);
      function d(t) {
        let {
            text: n,
            textId: e,
            tags: l,
            platformIcon: d,
            platformLabel: A,
            contextMenu: x,
          } = t,
          { themeType: p } = (0, o.E)();
        return (null == n || "" === n) && null == x
          ? null
          : null == n || "" === n
            ? (0, i.jsx)("div", { className: a()(u.Si, u.ys), children: x })
            : (0, i.jsxs)("div", {
                className: u.wx,
                children: [
                  (0, i.jsxs)(s.E, {
                    className: u.TK,
                    variant:
                      p === c.d.SIDEBAR ? "text-xs/semibold" : "text-xs/medium",
                    color: "text-strong",
                    id: e,
                    children: [
                      (0, i.jsx)(r.A, { children: n }),
                      null != d &&
                        (0, i.jsx)("div", {
                          role: "image",
                          "aria-label": A,
                          "aria-hidden": null == A,
                          className: u.tV,
                          style: {
                            maskImage: `url(${d.whiteSVG})`,
                            WebkitMaskImage: `url(${d.whiteSVG})`,
                          },
                        }),
                      l,
                    ],
                  }),
                  null != x &&
                    (0, i.jsx)("div", { className: u.Si, children: x }),
                ],
              });
      }
    },
    531648(t, n, e) {
      e.d(n, { A: () => x, Q: () => A });
      var i = e(627968);
      e(64700);
      var l = e(780645),
        a = e(939249),
        r = e(534514),
        s = e(834730),
        o = e(939496),
        c = e(996988),
        u = e(514566);
      function d(t) {
        let { text: n, onClick: e, component: r, ...s } = t,
          { themeType: d } = (0, o.E)(),
          A = "string" == typeof n ? n.trim() : n;
        if (null == A || "" === A) return null;
        let x = () =>
          d === c.d.MODAL || d === c.d.MODAL_V2
            ? (0, i.jsx)(r, { color: "text-default", ...s, children: A })
            : (0, i.jsx)(r, {
                color: "text-default",
                ...s,
                children: (0, i.jsx)(l.A, { children: A }),
              });
        return null != e
          ? (0, i.jsx)(a.D, {
              onClick: (t) => {
                t.stopPropagation(), e(t);
              },
              className: u.sd,
              children: x(),
            })
          : x();
      }
      function A(t) {
        return (0, i.jsx)(d, { component: r.D, ...t });
      }
      function x(t) {
        return (0, i.jsx)(d, { component: s.E, ...t });
      }
    },
    910607(t, n, e) {
      e.d(n, { A: () => P, k: () => h });
      var i = e(627968);
      e(64700);
      var l = e(17928),
        a = e(780645),
        r = e(342952),
        s = e(990078),
        o = e(834730),
        c = e(939249),
        u = e(320448),
        d = e(661531),
        A = e(778712),
        x = e(956793),
        p = e(963027),
        f = e(47167),
        _ = e(548118),
        m = e(378570),
        T = e(345942),
        E = e(576705),
        g = e(575731),
        N = e(21241),
        C = e(939496),
        I = e(10862),
        y = e(652215),
        j = e(996988),
        O = e(985018),
        S = e(514566);
      let h = 3;
      function P(t) {
        let { user: n, guild: e, channel: P, onAction: v, onClose: L } = t,
          { themeType: R } = (0, C.E)(),
          U = (0, g.A)(P),
          b = (0, f.Ay)(P),
          { canViewChannel: M, canConnect: D } = (0, l.cf)([E.A], () => ({
            canViewChannel: E.A.can(y.xBc.VIEW_CHANNEL, P),
            canConnect: P.isPrivate() || E.A.can(y.xBc.CONNECT, P),
          }));
        if (!M) return null;
        let G = R !== j.d.MODAL && R !== j.d.MODAL_V2 && R !== j.d.SIDEBAR;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(N.A, { className: S.Ph }),
            (0, i.jsxs)("div", {
              className: S.gx,
              children: [
                (0, i.jsx)(s.m, {
                  asContainer: !0,
                  text: e.name,
                  "aria-label": !1,
                  children: (0, i.jsx)(_.Ay, {
                    guild: e,
                    size: _.Ay.Sizes.SMOL,
                    className: S.$f,
                    onClick: (t) => {
                      t.stopPropagation(),
                        (0, T.u)(e.id),
                        v?.({ action: "OPEN_VOICE_GUILD" }),
                        L?.();
                    },
                  }),
                }),
                (0, i.jsx)(u._, { size: "xxs", color: d.A.colors.TEXT_SUBTLE }),
                (0, i.jsxs)("div", {
                  className: S.FH,
                  children: [
                    (0, i.jsx)(I.A, {
                      channel: P,
                      size: "xxs",
                      color: d.A.colors.TEXT_SUBTLE,
                      className: S.Ow,
                    }),
                    D
                      ? (0, i.jsx)(c.D, {
                          onClick: (t) => {
                            t.stopPropagation(),
                              x.default.selectVoiceChannel(P.id),
                              (0, m.iN)(P.id),
                              v?.({ action: "OPEN_VOICE_CHANNEL" }),
                              L?.();
                          },
                          className: S.sd,
                          "aria-label": (0, p.Ay)({ channel: P }),
                          children: (0, i.jsx)(o.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: (0, i.jsx)(a.A, { children: b }),
                          }),
                        })
                      : (0, i.jsx)(o.E, {
                          variant: "text-xs/normal",
                          color: "text-subtle",
                          lineClamp: 1,
                          children: (0, i.jsx)(a.A, { children: b }),
                        }),
                  ],
                }),
                (0, i.jsx)(r.A, {
                  users: U,
                  guildId: e.id,
                  channelId: P.id,
                  maxUsers: h,
                  size: A._3.SIZE_16,
                  overflowCountColor: "text-subtle",
                  overflowCountClassName: S.NS,
                  onClickOverflow: (t) => {
                    t.stopPropagation(),
                      v?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                  },
                  onUserClick: (t) => t.stopPropagation(),
                  disableUserPopout: !!G || ((t) => t === n.id),
                  "aria-label": O.intl.string(O.t["jNqDh/"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    753713(t, n, e) {
      e.d(n, { A: () => o });
      var i = e(627968);
      e(64700);
      var l = e(834730),
        a = e(853390),
        r = e(985018),
        s = e(860464);
      function o(t) {
        let { start: n, end: e } = t,
          {
            elapsed: o,
            duration: c,
            percentage: u,
          } = (0, a.Ay)({ start: n, end: e }),
          d = (function (t) {
            let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 10;
            return Math.floor(t / n) * n;
          })(o),
          A = c > 0 ? Math.round((d / c) * 100) : 0,
          x = (0, a.Ar)(d),
          p = (0, a.Ar)(c),
          f = r.intl.formatToPlainString(r.t.wmUSiy, { count: x, max: p });
        return (0, i.jsxs)("div", {
          className: s.kL,
          children: [
            (0, i.jsx)(l.E, {
              variant: "text-xs/normal",
              color: "text-default",
              className: s.Qq,
              "aria-hidden": !0,
              children: (0, a.fU)(o),
            }),
            (0, i.jsx)("div", {
              role: "progressbar",
              className: s.M0,
              "aria-valuenow": A,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuetext": f,
              children: (0, i.jsx)("div", {
                className: s.qB,
                style: { width: `${100 * u}%` },
              }),
            }),
            (0, i.jsx)(l.E, {
              variant: "text-xs/normal",
              color: "text-default",
              className: s.Qq,
              "aria-hidden": !0,
              children: (0, a.fU)(c),
            }),
          ],
        });
      }
    },
    985629(t, n, e) {
      e.d(n, { A: () => x });
      var i = e(627968),
        l = e(110259),
        a = e(990078),
        r = e(414499),
        s = e(737393),
        o = e(139286),
        c = e(939496),
        u = e(993401),
        d = e(996988),
        A = e(985018);
      function x(t) {
        let {
            application: n,
            analyticsLocations: e,
            onAction: x,
            onClose: p,
          } = t,
          { themeType: f } = (0, c.E)(),
          _ = (0, s.A)({ application: n, analyticsLocations: e });
        return ((0, o.A)(
          {
            name: l.ImpressionNames.CLOUD_PLAY_CTA,
            type: l.ImpressionTypes.VIEW,
            properties: { location_stack: e },
          },
          { disableTrack: null == _ },
          [_],
        ),
        null == _)
          ? null
          : (0, i.jsx)(a.m, {
              text: A.intl.string(A.t.JVwWva),
              position: "top",
              children: (0, i.jsx)(u.FD, {
                icon: r.h,
                text: A.intl.string(A.t["jaYS/h"]),
                size: "sm",
                onClick: (t) => {
                  t.stopPropagation(),
                    x?.({ action: "PRESS_CLOUD_PLAY_BUTTON" }),
                    _(),
                    p?.();
                },
                fullWidth: f !== d.d.MODAL_V2,
              }),
            });
      }
    },
    269587(t, n, e) {
      e.d(n, { A: () => k });
      var i = e(627968),
        l = e(64700),
        a = e(990078),
        r = e(939249),
        s = e(365199),
        o = e(661531),
        c = e(922016),
        u = e(550079),
        d = e(477782),
        A = e(793574),
        x = e(688810),
        p = e(315246),
        f = e(92240),
        _ = e(679492),
        m = e(243949),
        T = e(939496),
        E = e(17928),
        g = e(573648),
        N = e(541806),
        C = e(261020),
        I = e(83971),
        y = e(780964),
        j = e(858897),
        O = e(30370),
        S = e(652215),
        h = e(985018),
        P = e(754495),
        v = e(534465),
        L = e(939075),
        R = e(20805),
        U = e(655116),
        b = e(287809),
        M = e(272984),
        D = e(695311),
        G = e(518477),
        V = e(996988);
      function Y(t) {
        let {
            children: n,
            user: e,
            activity: a,
            entry: r,
            display: s,
            onSelect: o,
            onClose: Y,
            appContext: W,
            targetElementRef: k,
          } = t,
          [B, H] = l.useState(!1),
          { analyticsLocations: w } = (0, x.Ay)(
            A.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU,
          ),
          z = (0, f.A)({
            display: s,
            user: e,
            activity: a,
            entry: r,
            analyticsLocations: w,
          }),
          F = (0, _.NR)(),
          X = l.useRef(null),
          $ = F?.interactionPopoutTargetRef ?? X,
          Q = (function (t) {
            let { onAction: n } = t,
              { themeType: e } = (0, T.E)(),
              l = (0, m.A)({
                userId: t.user.id,
                tabSection: G.RP.ACTIVITY,
                label: h.intl.string(h.t.pD1L1u),
                onAction: () =>
                  n?.({ action: "PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM" }),
              });
            return [
              e === V.d.POPOUT ? l : null,
              (function (t) {
                let {
                    user: n,
                    entry: e,
                    display: l,
                    onAction: a,
                    onClose: r,
                  } = t,
                  s = (0, E.bG)(
                    [b.default],
                    () => b.default.getCurrentUser()?.id === n.id,
                  ),
                  o = (0, E.bG)([U.A], () => U.A.hasConnectedAccount());
                if ("recent" !== l || !(0, I.F3)(e)) return null;
                if (!o)
                  return (0, i.jsx)(d.Dr, {
                    id: "connect-spotify",
                    label: h.intl.formatToPlainString(h.t.XWSHTb, {
                      platform: M.HD,
                    }),
                    action: () => {
                      a?.({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                        (0, j.openUserSettings)(y.X.CONNECTIONS_PANEL),
                        r?.();
                    },
                  });
                if (s) return null;
                let c = (0, R.Tq)(e)
                  ? e.extra.entries[0]?.media
                  : e.extra.media;
                return null == c
                  ? null
                  : (0, i.jsx)(d.Dr, {
                      id: "play-on-spotify",
                      label: h.intl.string(h.t.rRffNz),
                      action: () => {
                        a?.({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }),
                          (0, C.n)(M.M0.TRACK, c.external_id);
                      },
                    });
              })(t),
              (0, v.Ay)(t),
              (0, v.gA)(t),
              (function (t) {
                let { display: n, entry: e, onAction: l, onClose: a } = t,
                  r = (0, R.yl)(e),
                  s = (0, D.A)({
                    applicationId: r ? e.extra.application_id : void 0,
                    onClose: a,
                  });
                return "recent" === n && r
                  ? (0, i.jsx)(d.Dr, {
                      id: "view-activity",
                      label: h.intl.string(h.t.GDWYR8),
                      action: () => {
                        l?.({ action: "PRESS_VIEW_ACTIVITY_MENU_ITEM" }), s();
                      },
                    })
                  : null;
              })(t),
              (0, L.A)(t),
              (function (t) {
                let {
                    activity: n,
                    entry: e,
                    display: l,
                    onAction: a,
                    onClose: r,
                  } = t,
                  s = (0, E.bG)(
                    [O.A],
                    () => null != O.A.getAccount(null, S.fg2.CRUNCHYROLL),
                  );
                if (!(0, N.A)(n) && !(0, I.CU)(e)) return null;
                if (!s)
                  return (0, i.jsx)(d.Dr, {
                    id: "connect-crunchyroll",
                    label: h.intl.formatToPlainString(h.t.XWSHTb, {
                      platform: g.A.get(S.fg2.CRUNCHYROLL).name,
                    }),
                    action: () => {
                      a?.({ action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM" }),
                        (0, j.openUserSettings)(y.X.CONNECTIONS_PANEL),
                        r?.();
                    },
                  });
                if ("recent" !== l || !(0, I.CU)(e)) return null;
                let o = e.extra.url;
                return null == o || "" === o
                  ? null
                  : (0, i.jsx)(d.Dr, {
                      id: "watch-on-crunchyroll",
                      label: h.intl.string(h.t.OpxQVH),
                      action: () => {
                        a?.({ action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM" }),
                          (0, C.C)(o);
                      },
                    });
              })(t),
              (0, P.s)(t),
            ].filter((t) => null != t);
          })({
            entry: r,
            activity: a,
            user: e,
            display: s,
            onClose: Y,
            onAction: z,
            isMenuOpen: B,
            appContext: W,
          });
        return 0 === Q.length || e.bot
          ? null
          : (0, i.jsx)(c.Y, {
              targetElementRef: k ?? $,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              onRequestOpen: () => {
                z({ action: "OPEN_MENU" }), H(!0);
              },
              renderPopout: (t) => {
                let { closePopout: n } = t;
                return (0, i.jsx)("div", {
                  onClick: (t) => t.stopPropagation(),
                  children: (0, i.jsx)(u.W, {
                    "data-menu-migrated-auto": !0,
                    navId: p.n,
                    onClose: () => {
                      n(), H(!1);
                    },
                    "aria-label": h.intl.string(h.t.PlAQz1),
                    onSelect: o,
                    children: (0, i.jsx)(d.rX, { children: Q }),
                  }),
                });
              },
              children: n,
            });
      }
      var W = e(514566);
      function k(t) {
        let n = l.useRef(null);
        return (0, i.jsx)(Y, {
          ...t,
          targetElementRef: n,
          children: (t) =>
            (0, i.jsx)(a.m, {
              targetElementRef: n,
              text: h.intl.string(h.t["UKOtz+"]),
              ariaHidden: !0,
              children: (0, i.jsx)(r.D, {
                ...t,
                innerRef: n,
                "aria-label": h.intl.string(h.t["UKOtz+"]),
                onClick: (n) => {
                  n.stopPropagation(), t.onClick(n);
                },
                onContextMenu: (n) => {
                  n.preventDefault(), t.onClick(n);
                },
                className: W.He,
                children: (0, i.jsx)(s.j, {
                  color: o.A.colors.INTERACTIVE_TEXT_DEFAULT,
                  size: "xs",
                }),
              }),
            }),
        });
      }
    },
    754495(t, n, e) {
      e.d(n, { W: () => d, s: () => A });
      var i = e(627968);
      e(64700);
      var l = e(17928),
        a = e(192308),
        r = e(477782),
        s = e(20805),
        o = e(287809),
        c = e(301736),
        u = e(985018);
      function d(t) {
        return (0, s.zD)(t)
          ? u.intl.string(u.t["4f8iut"])
          : (0, s.Lf)(t)
            ? u.intl.string(u.t.yX2hNy)
            : (0, s.fe)(t)
              ? u.intl.string(u.t.oSs8eg)
              : u.intl.string(u.t.bK9GT1);
      }
      function A(t) {
        let { user: n, entry: u, display: A, onAction: x } = t,
          p = (0, c.A)(),
          f = (0, l.bG)([o.default], () => o.default.getCurrentUser());
        return n.id === f?.id && "recent" === A && (0, s.$R)(u)
          ? (0, i.jsx)(r.Dr, {
              id: "delete-entry-history",
              label: d(u),
              action: () => {
                x?.({ action: "PRESS_DELETE_HISTORY_MENU_ITEM" }),
                  (0, a.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                      e.e("77791"),
                      e.e("28152"),
                      e.e("19119"),
                      e.e("14565"),
                    ]).then(e.bind(e, 839785));
                    return (e) =>
                      (0, i.jsx)(t, {
                        entry: u,
                        user: n,
                        onAction: x,
                        onOpenGameSettings: p,
                        ...e,
                      });
                  });
              },
              color: "danger",
            })
          : null;
      }
    },
    534465(t, n, e) {
      e.d(n, { Ay: () => f, UE: () => x, gA: () => p });
      var i = e(627968);
      e(64700);
      var l = e(192308),
        a = e(477782),
        r = e(672979),
        s = e(20805),
        o = e(409626),
        c = e(692969),
        u = e(67518),
        d = e(652215),
        A = e(985018);
      function x(t) {
        let { user: n, activity: e, entry: i } = t;
        return null != i
          ? {
              applicationId: (0, s.zD)(i) ? i.extra.application_id : void 0,
              sourceUserId: i.author_id,
            }
          : null != e
            ? {
                applicationId:
                  e.type === d.$pd.PLAYING && null != e.application_id
                    ? e.application_id
                    : void 0,
                sourceUserId: n.id,
              }
            : { applicationId: void 0, sourceUserId: void 0 };
      }
      function p(t) {
        let { user: n, activity: o, entry: c } = t,
          { applicationId: d } = x({ activity: o, entry: c, user: n }),
          p = (0, u.n)(d),
          f = null != o && (0, r.A)(o),
          _ = null != c && (0, s.zD)(c);
        return f || _
          ? (0, i.jsx)(a.Dr, {
              id: "game-detection-report-issue",
              label: A.intl.string(A.t.qP2cXd),
              action: () =>
                (0, l.openModalLazy)(async () => {
                  let { default: t } = await Promise.all([
                    e.e("25310"),
                    e.e("65086"),
                    e.e("56600"),
                    e.e("34530"),
                    e.e("8891"),
                    e.e("33771"),
                    e.e("46039"),
                    e.e("27495"),
                  ]).then(e.bind(e, 651930));
                  if (null != o)
                    return (n) =>
                      (0, i.jsx)(t, {
                        ...n,
                        detectedActivity: o,
                        onSubmitted: () => {},
                      });
                  if (null != c && (0, s.zD)(c)) {
                    let n = {
                      name: c.extra.game_name,
                      application_id: c.extra.application_id,
                    };
                    return (e) =>
                      (0, i.jsx)(t, {
                        ...e,
                        detectedActivity: n,
                        onSubmitted: () => {},
                      });
                  }
                  return (n) => (0, i.jsx)(t, { ...n, onSubmitted: () => {} });
                }),
            })
          : p;
      }
      function f(t) {
        let {
            user: n,
            activity: e,
            entry: l,
            onAction: r,
            isMenuOpen: s,
            appContext: u,
          } = t,
          { applicationId: d, sourceUserId: p } = x({
            activity: e,
            entry: l,
            user: n,
          }),
          f = (0, c.A)({
            location: "UserProfileActivityContextMenu",
            source: o.Ob.UserProfileCardContextMenu,
            trackEntryPointImpression: s,
            applicationId: d,
            sourceUserId: p,
            appContext: u,
          });
        return null == f
          ? null
          : (0, i.jsx)(a.Dr, {
              id: "game-profile",
              label: A.intl.string(A.t.ajHoOr),
              action: (t) => {
                r?.({ action: "PRESS_VIEW_GAME_PROFILE_MENU_ITEM" }), f(t);
              },
            });
      }
    },
    939075(t, n, e) {
      e.d(n, { A: () => g, y: () => E });
      var i = e(627968);
      e(64700);
      var l = e(17928),
        a = e(477782),
        r = e(541806),
        s = e(765379),
        o = e(672979),
        c = e(90644),
        u = e(717306),
        d = e(20805),
        A = e(474397),
        x = e(780964),
        p = e(858897),
        f = e(287809),
        _ = e(301736),
        m = e(985018);
      let T = () => (0, p.openUserSettings)(x.X.CONNECTIONS_PANEL);
      function E(t) {
        let { entry: n, onOpenGameSettings: e } = t;
        return (0, d.aj)(n) || (0, d.Lf)(n) || (0, d.Tq)(n)
          ? T
          : (0, d.zD)(n)
            ? e
            : null;
      }
      function g(t) {
        let {
            user: n,
            activity: e,
            entry: d,
            onAction: x,
            onClose: p,
            appContext: g,
          } = t,
          N = (0, _.A)();
        if (
          !(0, l.bG)([f.default], () => f.default.getCurrentUser()?.id === n.id)
        )
          return null;
        let C = (function (t) {
          let { activity: n, entry: e, onOpenGameSettings: i } = t;
          return null != e
            ? E({ entry: e, onOpenGameSettings: i })
            : null != n
              ? (function (t) {
                  let { activity: n, onOpenGameSettings: e } = t;
                  return (0, u.A)(n) || (0, c.A)(n) || (0, r.A)(n)
                    ? T
                    : (0, o.A)(n) && !(0, s.A)(n)
                      ? e
                      : null;
                })({ activity: n, onOpenGameSettings: i })
              : null;
        })({ activity: e, entry: d, onOpenGameSettings: N });
        return null == C
          ? null
          : (0, i.jsx)(a.Dr, {
              id: "manage-privacy",
              label: m.intl.string(m.t.anfNPV),
              action: () => {
                x?.({ action: "PRESS_MANAGE_PRIVACY_MENU_ITEM" }),
                  C(),
                  (0, A.A)(g),
                  p?.();
              },
            });
      }
    },
    301736(t, n, e) {
      e.d(n, { A: () => s });
      var i = e(688810),
        l = e(17460),
        a = e(866903),
        r = e(436620);
      function s() {
        let { analyticsLocations: t } = (0, i.Ay)();
        if ((0, l.Pi)())
          return () => {
            (0, a.A)(r.J.ACTIVITY_PRIVACY, { analyticsLocations: t });
          };
      }
    },
    695311(t, n, e) {
      e.d(n, { A: () => x });
      var i = e(17928),
        l = e(688810),
        a = e(211401),
        r = e(500049),
        s = e(975412),
        o = e(355622),
        c = e(267102),
        u = e(734057),
        d = e(309010),
        A = e(652215);
      function x(t) {
        let { applicationId: n, onClose: e } = t,
          { newestAnalyticsLocation: x } = (0, l.Ay)(),
          p = (0, i.bG)([u.A, d.A], () => u.A.getChannel(d.A.getChannelId())),
          f = (0, c.Us)() === A.BRT.POPOUT;
        return () => {
          e?.(),
            null == p || p?.isVocal()
              ? (0, s.A)({
                  context:
                    null != p
                      ? { type: "channel", channel: p }
                      : { type: "contextless" },
                  analyticsLocation: x,
                  openInPopout: f,
                  initialState: { applicationId: n },
                })
              : (0, a.R)(r.s4.TEXT, o.oU.NORMAL, { applicationId: n }, p.id);
        };
      }
    },
    17460(t, n, e) {
      e.d(n, { Pi: () => r, b_: () => s });
      var i = e(17928),
        l = e(680243),
        a = e(723702);
      function r() {
        return a.isPlatformEmbedded;
      }
      function s() {
        return (0, i.bG)([l.A], () => l.A.isSupported) || !1;
      }
    },
  },
]);
//# sourceMappingURL=27752.d4c48e86bf872482.js.map
