"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1719"],
  {
    271683(e, i, l) {
      l.d(i, { A: () => a });
      var t = l(627968),
        n = l(192308),
        s = l(136523);
      function a(e) {
        let { channel: i, sourceAnalyticsLocations: a } = e;
        (0, n.openModalLazy)(
          async () => {
            let { default: e } = await Promise.resolve().then(
              l.bind(l, 136523),
            );
            return (l) =>
              (0, t.jsx)(e, { channel: i, sourceAnalyticsLocations: a, ...l });
          },
          { modalKey: s.m },
        );
      }
    },
    489379(e, i, l) {
      l.d(i, { A: () => o });
      var t = l(17928),
        n = l(765379),
        s = l(714114),
        a = l(290863),
        d = l(977997);
      function o(e) {
        let { userId: i, guildId: l } = e,
          { voiceState: o, voiceChannel: r } = (0, s.A)({
            userId: i,
            guildId: l,
          }),
          c = r?.id;
        return {
          voiceState: o,
          voiceChannel: r,
          voiceActivity: (0, t.bG)([a.A, d.A], () => {
            if (null != i && null != c)
              return (
                a.A.findActivity(i, (e) => {
                  if (!(0, n.A)(e)) return !1;
                  let l = d.A.getVoiceStateForSession(i, e.session_id);
                  return l?.channelId === c;
                }) ?? void 0
              );
          }),
        };
      }
    },
    316770(e, i, l) {
      l.d(i, { A: () => v });
      var t = l(627968),
        n = l(503698),
        s = l.n(n),
        a = l(17928),
        d = l(939249),
        o = l(834730),
        r = l(661531),
        c = l(956793),
        A = l(963027),
        h = l(47167),
        u = l(378570),
        x = l(345942),
        g = l(790535),
        m = l(576705),
        j = l(531648),
        p = l(10862),
        C = l(818348),
        _ = l(985018),
        N = l(514566);
      function v(e) {
        let { channel: i, guild: l, onAction: n, onClose: v } = e,
          f = (0, h.Ay)(i),
          O = (0, a.bG)([m.A], () => i.isPrivate() || m.A.can(C.xB.CONNECT, i));
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsxs)(o.E, {
              tag: "div",
              variant: "heading-sm/semibold",
              color: "text-default",
              className: N.CT,
              children: [
                (0, t.jsx)(p.A, {
                  channel: i,
                  size: "xxs",
                  color: r.A.colors.TEXT_DEFAULT,
                  className: N.Ow,
                }),
                O
                  ? (0, t.jsx)(d.D, {
                      className: s()(N.sd, N.mG),
                      onClick: (e) => {
                        e.stopPropagation(),
                          i.isGuildStageVoice()
                            ? (0, g.av)(i)
                            : (c.default.selectVoiceChannel(i.id),
                              (0, u.iN)(i.id)),
                          n?.({ action: "OPEN_VOICE_CHANNEL" }),
                          v?.();
                      },
                      "aria-label": (0, A.Ay)({ channel: i }),
                      children: f,
                    })
                  : f,
              ],
            }),
            null == l
              ? null
              : (0, t.jsx)(j.A, {
                  variant: "text-xs/normal",
                  text: _.intl.formatToPlainString(_.t["hq/Qze"], {
                    guildName: l.name,
                  }),
                  onClick: (e) => {
                    e.stopPropagation(),
                      (0, x.u)(l.id),
                      n?.({ action: "OPEN_VOICE_GUILD" }),
                      v?.();
                  },
                }),
          ],
        });
      }
    },
    402857(e, i, l) {
      l.d(i, { A: () => Y });
      var t = l(627968),
        n = l(64700),
        s = l(17928),
        a = l(765379),
        d = l(90644),
        o = l(587895),
        r = l(429913),
        c = l(734057),
        A = l(71393),
        h = l(977997),
        u = l(580763),
        x = l(503698),
        g = l.n(x),
        m = l(939249),
        j = l(793574),
        p = l(688810),
        C = l(939341),
        _ = l(623671),
        N = l(365185),
        v = l(915089),
        f = l(172710),
        O = l(92240),
        I = l(257367),
        E = l(248302),
        y = l(939496),
        L = l(282197),
        S = l(584904),
        b = l(351638),
        T = l(531648),
        V = l(753713),
        D = l(990078),
        w = l(835723),
        M = l(833349),
        P = l(353411),
        G = l(879945),
        U = l(993401),
        k = l(652215),
        F = l(996988),
        R = l(985018),
        z = l(514566);
      function H(e) {
        let { user: i, activity: l, onAction: n } = e,
          { themeType: s } = (0, y.E)(),
          a = (0, P._B)(l, i),
          o = (0, P.J$)(l, i);
        if (
          !(0, d.A)(l) ||
          (!(0, M.A)(l, k.jUm.PLAY) && !(0, M.A)(l, k.jUm.SYNC))
        )
          return null;
        let r = (e) => {
            e?.stopPropagation(),
              n?.({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" }),
              a.onClick();
          },
          c = (e) => {
            e.stopPropagation(),
              n?.({ action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON" }),
              o.onClick();
          };
        return s === F.d.MODAL_V2
          ? (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(D.m, {
                  text: o.tooltip,
                  children: (0, t.jsx)(U.FD, {
                    text: o.label ?? R.intl.string(R.t.eU3inB),
                    onClick: c,
                    disabled: o.disabled,
                    loading: o.loading,
                  }),
                }),
                (0, t.jsx)(D.m, {
                  text: a.tooltip,
                  children: (0, t.jsx)(U.FD, {
                    text: a.label ?? R.intl.string(R.t.rRffNz),
                    onClick: r,
                    disabled: a.disabled,
                    loading: a.loading,
                  }),
                }),
              ],
            })
          : (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("div", {
                  className: z.FS,
                  children: (0, t.jsx)(D.m, {
                    text: a.tooltip,
                    children: (0, t.jsx)(U.FD, {
                      icon: () => (0, t.jsx)(G.A, {}),
                      text: a.label ?? R.intl.string(R.t.rRffNz),
                      onClick: r,
                      disabled: a.disabled,
                      loading: a.loading,
                      fullWidth: !0,
                    }),
                  }),
                }),
                (0, t.jsx)(U.q3, {
                  icon: w.J,
                  tooltipText: o.tooltip ?? R.intl.string(R.t.eU3inB),
                  "aria-label": o.label ?? R.intl.string(R.t.eU3inB),
                  disabled: o.disabled,
                  loading: o.loading,
                  onClick: c,
                }),
              ],
            });
      }
      var Q = l(269587);
      function B(e) {
        let i,
          {
            user: l,
            currentUser: s,
            activity: a,
            className: o,
            onClose: r,
          } = e,
          c = (0, v.GV)(),
          A = (0, v.GV)(),
          { themeType: h } = (0, y.E)(),
          u = (0, N.A)({ activity: a, user: l }),
          x = (0, E.A)(a),
          D = null != x.text && "" !== x.text,
          { largeImage: w } = (0, C.XN)(a),
          { analyticsLocations: M } = (0, p.Ay)(
            j.A.USER_PROFILE_LIVE_ACTIVITY_CARD,
          ),
          P = (0, O.A)({
            display: "live",
            user: l,
            activity: a,
            entry: u,
            analyticsLocations: M,
          }),
          G = (0, I.A)({ userId: l.id, onAction: P });
        if (!(0, d.A)(a)) return null;
        let U = () =>
          l.id === s.id
            ? null
            : (0, t.jsx)("div", {
                className: z.o1,
                children: (0, t.jsx)(H, { user: l, activity: a, onAction: P }),
              });
        return (0, t.jsx)(p.f5, {
          value: M,
          children: (0, t.jsxs)(S.A, {
            ref: G,
            className: g()(z.Nr, o),
            onAction: P,
            onClose: r,
            "aria-labelledby": D ? `${A} ${c}` : c,
            children: [
              (0, t.jsx)(b.A, {
                textId: A,
                ...x,
                contextMenu: (0, t.jsx)(Q.A, {
                  display: "live",
                  user: l,
                  activity: a,
                  entry: u,
                  onClose: r,
                }),
              }),
              (0, t.jsx)("div", {
                className: z.rf,
                children: (0, t.jsxs)("div", {
                  className: z.Qs,
                  children: [
                    (0, t.jsx)(_.d, {
                      image: w,
                      size: h === F.d.MODAL_V2 ? _.w.SIZE_100 : _.w.SIZE_60,
                      className: z.mM,
                      onClick: (e) => {
                        e.stopPropagation(),
                          P({ action: "OPEN_SPOTIFY_ALBUM" }),
                          (0, f.QX)(a, l.id);
                      },
                    }),
                    (0, t.jsxs)("div", {
                      className: z.zH,
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)(T.Q, {
                              variant: "heading-sm/semibold",
                              text: a.details,
                              onClick: () => {
                                P({ action: "OPEN_SPOTIFY_TRACK" }),
                                  (0, f.Mp)(a);
                              },
                              id: c,
                            }),
                            0 === (i = a.state?.split("; ") ?? []).length
                              ? null
                              : null == a.sync_id
                                ? (0, t.jsx)(T.A, {
                                    variant: "text-xs/normal",
                                    text: i.join(", "),
                                  })
                                : (0, t.jsx)(T.A, {
                                    variant: "text-xs/normal",
                                    text: i.map((e, s) =>
                                      (0, t.jsxs)(
                                        n.Fragment,
                                        {
                                          children: [
                                            (0, t.jsx)(m.D, {
                                              className: g()(z.sd, z.mG),
                                              onClick: (e) => {
                                                e.stopPropagation(),
                                                  P({
                                                    action:
                                                      "OPEN_SPOTIFY_ARTIST",
                                                  }),
                                                  (0, f.mN)(a, l.id, s);
                                              },
                                              children: e,
                                            }),
                                            s < i.length - 1 ? ", " : "",
                                          ],
                                        },
                                        s,
                                      ),
                                    ),
                                  }),
                          ],
                        }),
                        (0, t.jsx)(L.A, {
                          user: l,
                          activity: a,
                          className: z.jp,
                        }),
                        (() => {
                          let { timestamps: e } = a;
                          if (null == e) return null;
                          let { start: i, end: l } = e;
                          return null == i || null == l
                            ? null
                            : (0, t.jsx)(V.A, { start: i, end: l });
                        })(),
                        h === F.d.MODAL_V2 && U(),
                      ],
                    }),
                    h === F.d.MODAL && U(),
                  ],
                }),
              }),
              h !== F.d.MODAL && h !== F.d.MODAL_V2 && U(),
            ],
          }),
        });
      }
      function Y(e) {
        let {
            user: i,
            currentUser: l,
            activity: n,
            className: x,
            onClose: g,
          } = e,
          { voiceGuild: m, voiceChannel: j } = (0, s.cf)(
            [A.A, h.A, c.A],
            () => {
              let e = (0, a.A)(n);
              if (!e && n.type !== k.$pd.HANG_STATUS) return {};
              let l = e
                  ? h.A.getVoiceStateForSession(i.id, n?.session_id)?.channelId
                  : h.A.getVoiceStateForUser(i.id)?.channelId,
                t = c.A.getChannel(l);
              return {
                voiceGuild: A.A.getGuild(t?.getGuildId()),
                voiceChannel: t,
              };
            },
          );
        (0, r.h)(n?.application_id);
        let p = (0, s.bG)([o.A], () =>
          n?.application_id != null
            ? o.A.getApplication(n.application_id)
            : n?.name != null
              ? o.A.getApplicationByName(n.name)
              : null,
        );
        return n?.type === k.$pd.CUSTOM_STATUS || n?.type === k.$pd.HANG_STATUS
          ? null
          : (0, d.A)(n)
            ? (0, t.jsx)(B, {
                user: i,
                currentUser: l,
                activity: n,
                className: x,
                onClose: g,
              })
            : (0, t.jsx)(u.A, {
                user: i,
                currentUser: l,
                activity: n,
                application: p,
                voiceGuild: m,
                voiceChannel: j,
                className: x,
                onClose: g,
              });
      }
    },
    842241(e, i, l) {
      l.d(i, { A: () => Z });
      var t = l(627968),
        n = l(64700),
        s = l(503698),
        a = l.n(s),
        d = l(17928),
        o = l(342952),
        r = l(289873),
        c = l(939249),
        A = l(834730),
        h = l(111159),
        u = l(778712),
        x = l(140735),
        g = l(707554),
        m = l(956793),
        j = l(401843),
        p = l(475743),
        C = l(672979),
        _ = l(717306),
        N = l(323073),
        v = l(793574),
        f = l(688810),
        O = l(47167),
        I = l(402216),
        E = l(450149),
        y = l(279250),
        L = l(734057),
        S = l(71393),
        b = l(576705),
        T = l(290863),
        V = l(607567),
        D = l(92240),
        w = l(257367),
        M = l(939496),
        P = l(584904),
        G = l(351638),
        U = l(316770),
        k = l(910607),
        F = l(70963),
        R = l(269587),
        z = l(652215),
        H = l(996988),
        Q = l(985018),
        B = l(514566),
        Y = l(478846),
        $ = l(399162),
        q = l(181147);
      function Z(e) {
        let i,
          { user: l, currentUser: s, stream: Z, className: J, onClose: K } = e,
          { themeType: X, theme: W } = (0, M.E)(),
          ee = (0, d.bG)([S.A], () => S.A.getGuild(Z?.guildId)),
          ei = (0, d.bG)([L.A], () => L.A.getChannel(Z?.channelId)),
          el = (0, O.Ay)(ei),
          et = (0, d.yK)([V.Ay], () =>
            null != ei
              ? V.Ay.getVoiceStatesForChannel(ei).map((e) => {
                  let { user: i } = e;
                  return i;
                })
              : [],
          ),
          en = (0, d.bG)([T.A], () =>
            T.A.findActivity(l.id, (e) => (0, C.A)(e) && !(0, _.A)(e)),
          ),
          { analyticsLocations: es } = (0, f.Ay)(
            v.A.USER_PROFILE_LIVE_ACTIVITY_CARD,
          ),
          ea = (0, D.A)({
            display: "live",
            voiceChannelId: ei?.id,
            user: l,
            stream: Z,
            analyticsLocations: es,
          }),
          ed = (0, w.A)({ userId: l.id, onAction: ea }),
          { previewUrl: eo, isLoading: er } = (0, E.A)(
            Z?.guildId,
            Z?.channelId,
            Z?.ownerId,
          ),
          [ec, eA] = (0, y.zP)(ei),
          eh = (0, N.a9)() && (0, N.UK)(ei?.id),
          eu = (0, d.bG)(
            [b.A],
            () => null != ei && !eh && b.A.canBasicChannel(z.hVb.CONNECT, ei),
          ),
          ex = (0, p.A)(er ? null : eo),
          eg = er || null == eo ? ex : eo,
          em = n.useId();
        if (null == ee || null == ei || !1 === Z.discoverable) return null;
        let ej = () =>
            l.id === s.id
              ? null
              : (0, t.jsx)("div", {
                  className: B.o1,
                  children: (0, t.jsx)(F.Ay, {
                    channel: ei,
                    onAction: ea,
                    onClose: K,
                  }),
                }),
          ep =
            null != en
              ? Q.intl.formatToPlainString(Q.t["4CQq9Q"], { name: en.name })
              : Q.intl.string(Q.t["Jpkr/q"]);
        return (0, t.jsx)(f.f5, {
          value: es,
          children: (0, t.jsxs)(P.A, {
            ref: ed,
            className: J,
            onAction: ea,
            onClose: K,
            "aria-labelledby": em,
            children: [
              (0, t.jsx)(G.A, {
                text: ep,
                tags: (0, t.jsx)(I.Ay, { size: I.ed.SMALL }),
                contextMenu: (0, t.jsx)(R.A, {
                  display: "live",
                  user: l,
                  onClose: K,
                }),
              }),
              (0, t.jsx)(x.A, {
                children: (0, t.jsx)(g.H, { id: em, children: `${ep}, ${el}` }),
              }),
              (0, t.jsxs)("div", {
                className: B.rf,
                children: [
                  (0, t.jsxs)("div", {
                    className: B.Qs,
                    children: [
                      ((i = (e) => {
                        e.stopPropagation(),
                          ec &&
                            (ea({ action: "PRESS_IMAGE" }),
                            m.default.selectVoiceChannel(Z.channelId),
                            (0, j.Nl)(Z),
                            K?.());
                      }),
                      null == eg && er
                        ? (0, t.jsx)("div", {
                            className: Y.VH,
                            children: (0, t.jsx)(r.y, {}),
                          })
                        : null == eg || eh
                          ? (0, t.jsxs)(c.D, {
                              className: a()(Y.VH, Y.Lw, ec ? Y.vk : Y.r9),
                              onClick: i,
                              "aria-label": (0, y.CQ)(eA),
                              "aria-disabled": !ec,
                              children: [
                                (0, t.jsx)("img", {
                                  alt: "",
                                  src: W === z.NJ8.LIGHT ? q : $,
                                }),
                                X !== H.d.MODAL &&
                                  X !== H.d.MODAL_V2 &&
                                  (0, t.jsxs)(t.Fragment, {
                                    children: [
                                      (0, t.jsx)(A.E, {
                                        className: Y.um,
                                        variant: "text-sm/medium",
                                        color: "always-white",
                                        children: (0, y.CT)(eA),
                                      }),
                                      (0, t.jsx)(A.E, {
                                        variant: "text-sm/medium",
                                        children: eu
                                          ? Q.intl.string(Q.t.uQZTBV)
                                          : Q.intl.string(Q.t.pgUTZC),
                                      }),
                                    ],
                                  }),
                              ],
                            })
                          : (0, t.jsxs)(c.D, {
                              className: a()(Y.VH, Y.Lw, ec ? Y.vk : Y.r9),
                              onClick: i,
                              "aria-label": (0, y.CQ)(eA),
                              "aria-disabled": !ec,
                              children: [
                                (0, t.jsx)("img", {
                                  alt: "",
                                  src: eg,
                                  className: Y.Sl,
                                }),
                                X !== H.d.MODAL &&
                                  X !== H.d.MODAL_V2 &&
                                  (0, t.jsxs)(t.Fragment, {
                                    children: [
                                      (0, t.jsx)(A.E, {
                                        className: Y.um,
                                        variant: "text-sm/medium",
                                        color: "always-white",
                                        children: (0, y.CT)(eA),
                                      }),
                                      (0, t.jsx)(h.p, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: Y.wI,
                                      }),
                                    ],
                                  }),
                              ],
                            })),
                      X !== H.d.MODAL && X !== H.d.MODAL_V2
                        ? null
                        : (0, t.jsxs)("div", {
                            className: B.zH,
                            children: [
                              (0, t.jsx)(U.A, {
                                channel: ei,
                                guild: ee,
                                onAction: ea,
                                onClose: K,
                              }),
                              (0, t.jsx)(o.A, {
                                users: et,
                                guildId: ee.id,
                                channelId: ei.id,
                                maxUsers: k.k,
                                size: u._3.SIZE_16,
                                onClickOverflow: (e) => {
                                  e?.stopPropagation(),
                                    ea?.({
                                      action: "PRESS_VOICE_CHANNEL_AVATARS",
                                    });
                                },
                                onUserClick: (e) => e.stopPropagation(),
                                disableUserPopout: (e) => e === l.id,
                                overflowCountColor: "text-muted",
                                "aria-label": Q.intl.string(Q.t["jNqDh/"]),
                              }),
                              X === H.d.MODAL_V2 && ej(),
                            ],
                          }),
                      X === H.d.MODAL && ej(),
                    ],
                  }),
                  X === H.d.MODAL || X === H.d.MODAL_V2
                    ? null
                    : (0, t.jsx)(k.A, {
                        user: l,
                        guild: ee,
                        channel: ei,
                        onAction: ea,
                        onClose: K,
                      }),
                ],
              }),
              X !== H.d.MODAL && X !== H.d.MODAL_V2 && ej(),
            ],
          }),
        });
      }
    },
    986712(e, i, l) {
      l.d(i, { A: () => Z });
      var t = l(627968),
        n = l(64700),
        s = l(503698),
        a = l.n(s),
        d = l(17928),
        o = l(990078),
        r = l(885574),
        c = l(140735),
        A = l(707554),
        h = l(793574),
        u = l(688810),
        x = l(47167),
        g = l(71393),
        m = l(575731),
        j = l(92240),
        p = l(257367),
        C = l(939496),
        _ = l(584904),
        N = l(351638),
        v = l(316770),
        f = l(735438),
        O = l(780645),
        I = l(834730),
        E = l(778712),
        y = l(562153),
        L = l(996988),
        S = l(242697);
      let b = [
          [{ top: 15, left: 15, width: 28, height: 28 }],
          [
            { top: 7, left: 7, width: 20, height: 20 },
            { top: 25, left: 25, width: 26, height: 26 },
          ],
          [
            { top: 5, left: 10, width: 18, height: 18 },
            { top: 15, left: 31, width: 22, height: 22 },
            { top: 29, left: 5, width: 24, height: 24 },
          ],
          [
            { top: 5, left: 5, width: 22, height: 22 },
            { top: 7, left: 33, width: 18, height: 18 },
            { top: 33, left: 7, width: 18, height: 18 },
            { top: 31, left: 31, width: 22, height: 22 },
          ],
        ],
        T = [
          [{ top: 23, left: 23, width: 52, height: 52 }],
          [
            { top: 13, left: 13, width: 32, height: 32 },
            { top: 41, left: 41, width: 44, height: 44 },
          ],
          [
            { top: 9, left: 14, width: 31, height: 31 },
            { top: 27, left: 53, width: 34, height: 34 },
            { top: 52, left: 11, width: 36, height: 36 },
          ],
          [
            { top: 10, left: 10, width: 36, height: 36 },
            { top: 10, left: 57, width: 31, height: 31 },
            { top: 57, left: 10, width: 31, height: 31 },
            { top: 52, left: 52, width: 36, height: 36 },
          ],
        ];
      function V(e) {
        let { users: i, channel: l } = e,
          { themeType: n } = (0, C.E)(),
          s = n === L.d.MODAL_V2 ? T : b,
          a = i.length > 4,
          d = i.length - 4 + 1,
          r = d >= 10 ? 3 : 1;
        return (0, t.jsx)("div", {
          className: S.kL,
          children: s[(0, f.clamp)(i.length - 1, 0, s.length - 1)].map(
            (e, n) => {
              let s = i[n];
              return null == s
                ? null
                : (0, t.jsx)(
                    "div",
                    {
                      className: S.n1,
                      style: e,
                      children:
                        a && n === r
                          ? (0, t.jsx)("div", {
                              className: S.mB,
                              children: (0, t.jsx)(I.E, {
                                variant: "text-xxs/semibold",
                                lineClamp: 1,
                                children: (0, t.jsx)(O.A, {
                                  children: d > 99 ? ">99" : `+${d}`,
                                }),
                              }),
                            })
                          : (0, t.jsx)(o.m, {
                              text: y.Ay.getName(l.guild_id, l.id, s),
                              children: (0, t.jsx)("img", {
                                className: S.my,
                                src: s.getAvatarURL(
                                  l.guild_id,
                                  (0, E.FT)(E._3.SIZE_80),
                                ),
                                alt: "",
                              }),
                            }),
                    },
                    s.id,
                  );
            },
          ),
        });
      }
      var D = l(939249),
        w = l(22231),
        M = l(532622),
        P = l(271683),
        G = l(882840),
        U = l(46054),
        k = l(345640),
        F = l(954571),
        R = l(531648),
        z = l(652215),
        H = l(985018),
        Q = l(237770);
      function B(e) {
        let { voiceChannel: i, onAction: l, onClose: s } = e,
          { themeType: d } = (0, C.E)(),
          { analyticsLocations: o } = (0, u.Ay)(),
          r = (0, k.b)(i),
          c = (0, M.Ay)(i, !0),
          A = (0, G.l)(i),
          h = n.useMemo(
            () =>
              null == A || "" === A
                ? null
                : U.A.parseVoiceChannelStatus(A, !0, { channelId: i.id }),
            [A, i.id],
          );
        return (n.useEffect(() => {
          null != h &&
            F.default.track(z.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
              channel_id: i.id,
              guild_id: i.guild_id,
              location_stack: o,
            });
        }, [h, i.id, i.guild_id, o]),
        c && r)
          ? (0, t.jsxs)(D.D, {
              className: Q.vk,
              onClick: (e) => {
                e.stopPropagation(),
                  l({ action: "PRESS_VOICE_CHANNEL_STATUS" }),
                  d === L.d.POPOUT && s?.(),
                  (0, P.A)({ channel: i, sourceAnalyticsLocations: o });
              },
              children: [
                (0, t.jsx)(R.A, {
                  text: h ?? H.intl.string(H.t.Mgpxiw),
                  variant: "text-xs/normal",
                  color: "text-subtle",
                  className: Q.Qq,
                }),
                (0, t.jsx)(w.R, {
                  color: "currentColor",
                  size: "xxs",
                  className: a()(Q.rD, null != h ? Q.R : void 0),
                  "aria-label": H.intl.string(H.t.bt75uw),
                }),
              ],
            })
          : null != h
            ? (0, t.jsx)(R.A, {
                text: h,
                variant: "text-xs/normal",
                color: "text-subtle",
                className: Q.Qq,
              })
            : null;
      }
      var Y = l(70963),
        $ = l(269587),
        q = l(514566);
      function Z(e) {
        let {
            user: i,
            currentUser: l,
            voiceChannel: s,
            className: f,
            onClose: O,
          } = e,
          { themeType: I } = (0, C.E)(),
          { analyticsLocations: E } = (0, u.Ay)(
            h.A.USER_PROFILE_VOICE_ACTIVITY_CARD,
          ),
          y = (0, j.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: s.id,
            user: i,
            analyticsLocations: E,
          }),
          S = (0, p.A)({ userId: i.id, onAction: y }),
          b = (0, d.bG)([g.A], () => g.A.getGuild(s.guild_id)),
          T = (0, m.A)(s),
          D = (0, x.Ay)(s),
          w = n.useId(),
          M = () =>
            (0, t.jsx)("div", {
              className: q.o1,
              children: (0, t.jsx)(Y.Ay, {
                channel: s,
                onAction: y,
                onClose: O,
              }),
            }),
          P =
            s.isDM() || s.isGroupDM()
              ? H.intl.string(H.t["9FaEzi"])
              : s.isGuildStageVoice()
                ? H.intl.string(H.t.QygGCN)
                : H.intl.string(H.t.msxteM);
        return (0, t.jsx)(u.f5, {
          value: E,
          children: (0, t.jsxs)(_.A, {
            ref: S,
            className: a()(q.Nr, f),
            onAction: y,
            onClose: O,
            "aria-labelledby": w,
            children: [
              (0, t.jsx)(N.A, {
                text: P,
                tags: (() => {
                  if (i.id !== l.id) return null;
                  let e =
                    s.isDM() || s.isGroupDM()
                      ? H.intl.string(H.t["+DsWbX"])
                      : H.intl.string(H.t.xOVEjc);
                  return (0, t.jsx)(o.m, {
                    text: e,
                    children: (0, t.jsx)(r.m, { size: "xxs" }),
                  });
                })(),
                contextMenu: (0, t.jsx)($.A, {
                  display: "voice",
                  user: i,
                  onClose: O,
                }),
              }),
              (0, t.jsx)(c.A, {
                children: (0, t.jsx)(A.H, { id: w, children: `${P}, ${D}` }),
              }),
              (0, t.jsx)("div", {
                className: q.rf,
                children: (0, t.jsxs)("div", {
                  className: q.Qs,
                  children: [
                    (0, t.jsx)(V, { users: T, channel: s }),
                    (0, t.jsxs)("div", {
                      className: q.zH,
                      children: [
                        (0, t.jsx)(v.A, {
                          channel: s,
                          guild: b,
                          onAction: y,
                          onClose: O,
                        }),
                        s.isGuildVoice() &&
                          (0, t.jsx)(B, {
                            voiceChannel: s,
                            onAction: y,
                            onClose: O,
                          }),
                        I === L.d.MODAL_V2 && M(),
                      ],
                    }),
                    I === L.d.MODAL && M(),
                  ],
                }),
              }),
              I !== L.d.MODAL && I !== L.d.MODAL_V2 && M(),
            ],
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=1719.7bccb87cc1838a2e.js.map
