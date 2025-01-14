"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72884"],
  {
    667142: function (e, t, n) {
      n.d(t, {
        Df: function () {
          return d;
        },
        S_: function () {
          return u;
        },
        V5: function () {
          return a;
        },
        VX: function () {
          return o;
        },
        ih: function () {
          return s;
        },
        xc: function () {
          return c;
        },
      });
      var i = n(972959);
      let r = { timeToLiveMs: 5e3, reappearTimeMs: 1e4 },
        l = (0, i.H)(() => r),
        o = 1e4,
        a = 2e4,
        s = 500,
        c = 1e3;
      function u(e) {
        l.setState({ timeToLiveMs: e });
      }
      function d(e) {
        l.setState({ reappearTimeMs: e });
      }
      t.ZP = l;
    },
    926086: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        a = n(348327),
        s = n.n(a),
        c = n(476183),
        u = n(481060),
        d = n(667142),
        h = n(333031),
        f = n(70491);
      let m = { mass: 1, tension: 600, friction: 60, clamp: !0 };
      function v(e) {
        let { locked: t, pinned: n } = e,
          [l, a] = r.useState(0),
          [v, p] = r.useState(0),
          [x, g] = r.useState(0),
          C = r.useRef(0),
          [Z, I] = r.useState(0),
          { timeToLiveMs: _, reappearTimeMs: j } = d.ZP.useState(
            (e) => ({
              timeToLiveMs: e.timeToLiveMs,
              reappearTimeMs: e.reappearTimeMs,
            }),
            s(),
          ),
          E = { timeToLiveMs: _, reappearTimeMs: j },
          b = r.useRef(E);
        r.useEffect(() => void (b.current = E)),
          r.useEffect(
            () => (
              (C.current = setInterval(() => {
                let e = Date.now();
                p(e),
                  g((t) => {
                    if (0 === t) return e;
                    let n = e - t,
                      i = b.current.timeToLiveMs,
                      r = i + b.current.reappearTimeMs;
                    return n > i ? t + r : t;
                  });
              }, 100)),
              () => {
                clearInterval(C.current);
              }
            ),
            [],
          );
        let w = () => {
            a(Date.now()), I((e) => e + 1);
          },
          N = l > 0 && v - l < 1e3,
          k = (0, u.useTransition)(x > 0 && x < v && v - x < _, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: m,
          });
        return t && !n
          ? null
          : (0, i.jsx)(i.Fragment, {
              children: k(
                (e, t) =>
                  t &&
                  (0, i.jsx)(c.animated.div, {
                    style: e,
                    className: f.clickZoneDebugContainer,
                    children: (0, i.jsx)(h.Z, {
                      className: o()(f.clickZone, N && f.clickBackground),
                      children: (0, i.jsx)(u.Clickable, {
                        onClick: w,
                        className: f.clickable,
                        children: (0, i.jsxs)(u.Text, {
                          variant: "text-md/semibold",
                          color: "always-white",
                          children: ["Click Me (", Z, ")"],
                        }),
                      }),
                    }),
                  }),
              ),
            });
      }
    },
    350663: function (e, t, n) {
      n.d(t, {
        z: function () {
          return f;
        },
      });
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        a = n(476183),
        s = n(481060),
        c = n(110924),
        u = n(752802),
        d = n(340101),
        h = n(228680);
      let f = 8,
        m = (e) => {
          let {
            participant: t,
            width: n,
            locked: r,
            widgetId: l,
            pinned: o,
          } = e;
          return (0, i.jsx)(
            u.Z,
            { participant: t, width: n, locked: r, widgetId: l, pinned: o },
            t.user.id,
          );
        },
        v = { mass: 1, tension: 250, friction: 18, clamp: !0 };
      t.Z = r.memo(function (e) {
        let {
            widgetId: t,
            tileWidth: n,
            layout: r,
            locked: l,
            streamParticipants: u,
            participantsVersion: p,
            pinned: x,
          } = e,
          g = (9 / 16) * n,
          C = u.map((e) => ({
            participant: e,
            key: e.user.id,
            width: n,
            locked: l,
            widgetId: t,
            height: g,
            pinned: x,
          })),
          Z = (0, c.Z)(n),
          I = r === d.C5.VERTICAL,
          _ = 0,
          j = 0,
          E = (0, s.useTransition)(
            I
              ? C.map((e, t) => ({
                  ...e,
                  y: (_ += e.height + (t > 0 ? f : 0)) - e.height,
                  x: 0,
                }))
              : C.map((e, t) => ({
                  ...e,
                  x: (j += e.width + (t > 0 ? f : 0)) - e.width,
                  y: 0,
                })),
            {
              key: (e) => e.key,
              from: { height: 0, opacity: 0 },
              leave: { height: 0, opacity: 0 },
              enter: (e) => {
                let { x: t, y: n, width: i, height: r } = e;
                return { x: t, y: n, width: i, height: r, opacity: 1 };
              },
              update: (e) => {
                let { x: t, y: n, width: i, height: r } = e;
                return { x: t, y: n, width: i, height: r };
              },
              config: v,
              trail: n !== Z ? 0 : 100,
            },
            n !== Z ? "animate-never" : "respect-motion-settings",
          );
        return (0, i.jsx)("div", {
          className: o()({
            [h.gridContainer]: !0,
            [h.vertical]: I,
            [h.horizontal]: !I,
          }),
          style: I ? { height: _ } : { width: j },
          children: E((e, t, r, l) =>
            (0, i.jsx)(a.animated.div, {
              className: h.gridItem,
              style: Object.assign({}, e, {
                width: n,
                height: g,
                zIndex: C.length - l,
              }),
              children: m(t),
            }),
          ),
        });
      });
    },
    1226: function (e, t, n) {
      n.d(t, {
        BO: function () {
          return s;
        },
        cq: function () {
          return u;
        },
        gI: function () {
          return d;
        },
        xN: function () {
          return h;
        },
        yA: function () {
          return c;
        },
      });
      var i = n(348327),
        r = n.n(i),
        l = n(972959),
        o = n(569545);
      let a = (0, l.H)(() => ({ streams: {} }));
      function s(e) {
        var t, n;
        let i = (0, o.V9)(e);
        return null !==
          (n =
            null === (t = a.useState((e) => e.streams, r())[i]) || void 0 === t
              ? void 0
              : t.zoom) && void 0 !== n
          ? n
          : 100;
      }
      function c(e) {
        return s(e) / 100;
      }
      function u(e, t) {
        let n = (0, o.V9)(e);
        a.setState((e) => {
          var i;
          return {
            ...e,
            streams: {
              ...e.streams,
              [n]: {
                zoom: t,
                fitOverride:
                  null === (i = e.streams[n]) || void 0 === i
                    ? void 0
                    : i.fitOverride,
              },
            },
          };
        }, !0);
      }
      function d(e, t) {
        let n = (0, o.V9)(e);
        a.setState((e) => {
          var i;
          return {
            ...e,
            streams: {
              ...e.streams,
              [n]: {
                zoom:
                  null === (i = e.streams[n]) || void 0 === i ? void 0 : i.zoom,
                fitOverride: t,
              },
            },
          };
        });
      }
      function h(e) {
        var t;
        let n = (0, o.V9)(e);
        return null === (t = a.useState((e) => e.streams, r())[n]) ||
          void 0 === t
          ? void 0
          : t.fitOverride;
      }
    },
    752802: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return O;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        a = n(399606),
        s = n(46973),
        c = n(481060),
        u = n(846027),
        d = n(239091),
        h = n(765250),
        f = n(872810),
        m = n(40851),
        v = n(414910),
        p = n(194082),
        x = n(979264),
        g = n(871118),
        C = n(352978),
        Z = n(833519),
        I = n(839662),
        _ = n(199902),
        j = n(314897),
        E = n(131951),
        b = n(594174),
        w = n(5192),
        N = n(1226),
        k = n(981631),
        L = n(388032),
        S = n(2847);
      function y(e) {
        let { participant: t } = e,
          n = t.user.id,
          l = (0, a.e7)(
            [E.Z],
            () => {
              let e = (0, v.Z)(t.type);
              return E.Z.isLocalMute(t.user.id, e);
            },
            [t],
          ),
          o = (0, a.e7)([j.default], () => j.default.getId()),
          { hasVideo: d } = (0, I.Z)(t, o),
          h = l && d,
          f = r.useCallback(() => {
            u.Z.toggleLocalMute(n, s.Yn.STREAM);
          }, [n]);
        return (0, i.jsx)(c.Tooltip, {
          text: h ? L.intl.string(L.t.YqAjX1) : L.intl.string(L.t["w4m94+"]),
          children: (e) => {
            let { onClick: t, ...n } = e;
            return (0, i.jsx)(c.Clickable, {
              ...n,
              className: S.controlAction,
              onClick: (e) => {
                e.stopPropagation(), null == t || t(), f();
              },
              children: h
                ? (0, i.jsx)(c.VoiceXIcon, {
                    size: "sm",
                    color: "currentColor",
                  })
                : (0, i.jsx)(c.VoiceNormalIcon, {
                    size: "sm",
                    color: "currentColor",
                  }),
            });
          },
        });
      }
      function T(e) {
        let { hasActiveStream: t, participant: r, onEnablePin: l } = e,
          s = (0, m.bp)(),
          u = r.user,
          h = (0, a.e7)(
            [b.default],
            () => {
              var e;
              return null !== (e = b.default.getUser(u.id)) && void 0 !== e
                ? e
                : u;
            },
            [u],
          ),
          v = t ? L.intl.string(L.t.tLxK4u) : L.intl.string(L.t.E5RDnJ);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: o()(S.controlBackground, {
                [S.controlsWithActiveStream]: t,
              }),
            }),
            !t &&
              (0, i.jsx)("div", {
                className: S.watchActionContainer,
                children: (0, i.jsx)(c.Tooltip, {
                  text: v,
                  children: (e) =>
                    (0, i.jsxs)(c.Clickable, {
                      ...e,
                      className: S.watchButton,
                      onClick: () => {
                        var t;
                        null === (t = e.onClick) || void 0 === t || t.call(e),
                          (0, f.rn)(r.stream, {
                            forceMultiple: !0,
                            noFocus: !0,
                          }),
                          l();
                      },
                      children: [
                        (0, i.jsx)(c.Text, {
                          variant: "text-sm/semibold",
                          color: "always-white",
                          children: L.intl.string(L.t["I6JG4+"]),
                        }),
                        (0, i.jsx)(c.EyePlusIcon, {
                          size: "sm",
                          color: "currentColor",
                        }),
                      ],
                    }),
                }),
              }),
            (0, i.jsxs)("div", {
              className: S.controls,
              children: [
                (0, i.jsx)("div", {
                  className: S.controlUser,
                  children: (0, i.jsxs)("div", {
                    className: S.controlUserContainer,
                    children: [
                      (0, i.jsx)(c.ScreenIcon, {
                        size: "xs",
                        color: c.tokens.colors.INTERACTIVE_ACTIVE,
                      }),
                      (0, i.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: w.ZP.getName(
                          r.stream.guildId,
                          r.stream.channelId,
                          u,
                        ),
                      }),
                      (0, i.jsx)(x.ZP, {
                        primaryGuild: h.primaryGuild,
                        userId: u.id,
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: S.controlActions,
                  children:
                    t &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(y, { participant: r }),
                        (0, i.jsx)(c.Tooltip, {
                          text: L.intl.string(L.t["3D5yo6"]),
                          children: (e) => {
                            let { onClick: t, ...l } = e;
                            return (0, i.jsx)(c.Clickable, {
                              ...l,
                              className: S.controlAction,
                              onClick: (e) => {
                                e.stopPropagation(),
                                  null == t || t(),
                                  (0, d.jW)(e, async () => {
                                    let { default: e } = await n
                                      .e("5704")
                                      .then(n.bind(n, 360429));
                                    return (t) =>
                                      (0, i.jsx)(e, {
                                        ...t,
                                        stream: r.stream,
                                        exitFullscreen: () => {},
                                        appContext: s,
                                      });
                                  });
                              },
                              children: (0, i.jsx)(c.MoreHorizontalIcon, {
                                size: "sm",
                                color: "currentColor",
                              }),
                            });
                          },
                        }),
                      ],
                    }),
                }),
              ],
            }),
          ],
        });
      }
      let A = new Set([k.jm8.ENDED, k.jm8.FAILED, k.jm8.PAUSED]),
        O = r.memo(function (e) {
          let {
              participant: t,
              width: n,
              locked: r,
              widgetId: l,
              pinned: s,
            } = e,
            c = (0, a.e7)(
              [_.Z],
              () => _.Z.getActiveStreamForUser(t.user.id, t.stream.guildId),
              [t.user.id, t.stream.guildId],
            ),
            u = null != c && A.has(c.state),
            d = null != c,
            f = (0, N.yA)(t.stream),
            m = (0, N.xN)(t.stream);
          return (!d && r) || u
            ? null
            : (0, i.jsxs)("div", {
                className: S.tile,
                children: [
                  d &&
                    !r &&
                    (0, i.jsx)(p.ZP, {
                      size: p.ZP.Sizes.SMALL,
                      className: S.liveIndicator,
                    }),
                  d
                    ? (0, i.jsx)("div", {
                        className: S.streamTile,
                        children: (0, i.jsx)("div", {
                          className: S.streamTile,
                          style: { transform: "scale(".concat(f, ")") },
                          children: (0, i.jsx)(Z.Z, {
                            participant: t,
                            width: n,
                            fit: null != m ? m : C.L.CONTAIN,
                            inPopout: !0,
                            focused: !r,
                            paused: !1,
                            selected: !1,
                            wrapperClassName: r ? S.streamTileWrapper : void 0,
                          }),
                        }),
                      })
                    : (0, i.jsx)("div", {
                        className: S.streamPreview,
                        children: (0, i.jsx)(g.Z, {
                          noText: !0,
                          className: o()(S.absoluteFill),
                          stream: t.stream,
                        }),
                      }),
                  r
                    ? null
                    : (0, i.jsx)(T, {
                        participant: t,
                        hasActiveStream: d,
                        onEnablePin: () => {
                          !s && (0, h.xh)(l);
                        },
                      }),
                ],
              });
        });
    },
    761374: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Z;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        l = n(442837),
        o = n(765250),
        a = n(393238),
        s = n(358221),
        c = n(569545),
        u = n(199902),
        d = n(314897),
        h = n(592125),
        f = n(355863),
        m = n(944486),
        v = n(350663),
        p = n(340101),
        x = n(666540);
      let g = [];
      function C(e, t, n, i) {
        let r = (i - 1) * v.z;
        return e === p.C5.HORIZONTAL
          ? Math.min(Math.max((t - r) / i, 256), Math.max((16 * n) / 9, 256))
          : Math.min(Math.max(t, 256), Math.max((((n - r) / i) * 16) / 9, 256));
      }
      function Z(e) {
        var t;
        let {
            id: n,
            size: Z,
            locked: I,
            padding: _,
            borderWidth: j,
            opacity: E,
            horizontal: b,
            pinned: w,
          } = e,
          N = 2 * _ + 2 * j;
        let { width: k, height: L } = {
            width: "number" == typeof (t = Z).width ? t.width : 256,
            height: "number" == typeof t.height ? t.height : 144,
          },
          S = (0, l.e7)([m.Z], () => m.Z.getVoiceChannelId()),
          { width: y, height: T, ref: A } = (0, a.Z)(),
          O = (0, l.e7)(
            [f.Z],
            () => {
              var e;
              let t = f.Z.getWidget(n);
              return (
                !!(0, p.ZL)(t) &&
                (null === (e = t.meta.showAllStreams) || void 0 === e || e)
              );
            },
            [n],
          ),
          V = (0, l.e7)([h.Z], () => h.Z.getChannel(S)),
          M = (0, l.e7)([d.default], () => d.default.getId()),
          { participantsVersion: P, streamParticipants: z } = (0, l.cj)(
            [u.Z, s.Z],
            () => {
              if (null == S)
                return { streamParticipants: g, participantsVersion: -1 };
              let e = new Set(
                  u.Z.getAllActiveStreamsForChannel(S).map((e) => (0, c.V9)(e)),
                ),
                t = (t) => e.has((0, c.V9)(t.stream)),
                n = s.Z.getStreamParticipants(S).filter(
                  (t) => t.user.id !== M && (!!O || e.has((0, c.V9)(t.stream))),
                );
              return (
                n.sort((e, n) =>
                  t(e) && !t(n)
                    ? -1
                    : !t(e) && t(n)
                      ? 1
                      : e.user.username.localeCompare(n.user.username),
                ),
                {
                  streamParticipants: n,
                  activeStreams: e,
                  participantsVersion: s.Z.getParticipantsVersion(S),
                }
              );
            },
            [S, M, O],
          ),
          R = z.length,
          D = null == V || 0 === R,
          { tileWidth: W, layout: U } = (function (e, t, n, i, l) {
            let o = (function (e, t, n, i) {
                let r = C(p.C5.HORIZONTAL, e, t, n),
                  l = C(p.C5.VERTICAL, e, t, n);
                switch (i) {
                  case p.C5.VERTICAL:
                    return l;
                  case p.C5.HORIZONTAL:
                    return r;
                }
                let o = ((9 * l) / 16 + v.z) * n - v.z;
                return e > (16 * t) / 9
                  ? r
                  : o <= t
                    ? l
                    : (9 * r) / 16 <= t
                      ? r
                      : l;
              })(n, i, t, l),
              a = C(p.C5.VERTICAL, n, i, t),
              s = null != l ? l : o === a ? p.C5.VERTICAL : p.C5.HORIZONTAL,
              [c, u] = r.useState(o);
            return (
              r.useEffect(() => {
                !e && u(o);
              }, [e, o]),
              { layout: s, tileWidth: c }
            );
          })(
            !1,
            R,
            null != y ? y : k - N,
            null != T ? T : L - N,
            b ? p.C5.HORIZONTAL : p.C5.VERTICAL,
          ),
          F = {
            id: n,
            width: k,
            height: L,
            sizeOffset: N,
            layout: U,
            padding: _,
            participants: z.length,
          };
        return (!(function (e) {
          let {
              id: t,
              streamParticipants: n,
              layout: i,
              widgetLayoutSpecs: l,
            } = e,
            a = r.useRef(l);
          r.useEffect(() => void (a.current = l)),
            r.useEffect(() => {
              let {
                id: e,
                width: t,
                height: i,
                sizeOffset: r,
                layout: l,
                padding: s,
              } = a.current;
              if (0 === n.length) {
                (256 !== t || 144 !== i) &&
                  (0, o.nv)({
                    widgetId: e,
                    size: { fixed: !0, width: 256, height: 144 },
                  });
                return;
              }
              if (l === p.C5.HORIZONTAL) {
                let t = (16 / 9) * (i - r);
                (0, o.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    height: i,
                    width: t * n.length + s * (n.length - 1) + r,
                  },
                });
              } else {
                let i = (9 / 16) * (t - r);
                (0, o.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    width: t,
                    height: i * n.length + s * (n.length - 1) + r,
                  },
                });
              }
            }, [n.length]),
            r.useEffect(() => {
              if (a.current.participants <= 1) return;
              let {
                id: e,
                width: t,
                height: n,
                sizeOffset: r,
                padding: l,
                participants: s,
              } = a.current;
              if (i === p.C5.HORIZONTAL) {
                let n = t - r;
                (0, o.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    width: n * s + l * (s - 1) + r,
                    height: (9 / 16) * n + r,
                  },
                });
              } else {
                let t = n - r;
                (0, o.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    width: (16 / 9) * t + r,
                    height: t * s + l * (s - 1) + r,
                  },
                });
              }
            }, [i]),
            r.useEffect(
              () => () => {
                (0, o.nv)({
                  widgetId: t,
                  size: { fixed: !0, width: 256, height: 144 },
                });
              },
              [t],
            );
        })({ id: n, streamParticipants: z, layout: U, widgetLayoutSpecs: F }),
        D && I)
          ? null
          : (0, i.jsx)("div", {
              className: x.goLiveGridContainer,
              style: { opacity: E },
              ref: A,
              children: (0, i.jsx)(v.Z, {
                widgetId: n,
                tileWidth: W,
                locked: I,
                layout: U,
                streamParticipants: z,
                participantsVersion: P,
                pinned: w,
              }),
            });
      }
    },
    554370: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return eo;
        },
      }),
        n(653041),
        n(47120);
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        a = n(442837),
        s = n(952265),
        c = n(481060),
        u = n(239091),
        d = n(13245),
        h = n(615287),
        f = n(100527),
        m = n(906732),
        v = n(146282),
        p = n(70097),
        x = n(567409),
        g = n(74299),
        C = n(199902),
        Z = n(592125),
        I = n(430824),
        _ = n(131951),
        j = n(944486),
        E = n(574254),
        b = n(556296),
        w = n(808506),
        N = n(237997),
        k = n(451478),
        L = n(585483),
        S = n(358085),
        y = n(13140),
        T = n(145597),
        A = n(830917),
        O = n(86071),
        V = n(681603),
        M = n(915614),
        P = n(690336),
        z = n(333031),
        R = n(371651),
        D = n(388627),
        W = n(319414),
        U = n(561064),
        F = n(987650),
        G = n(501787),
        B = n(981631),
        Y = n(206583),
        H = n(388032),
        K = n(167566);
      let X = !S.isPlatformEmbedded && !1,
        Q = X
          ? (0, i.jsx)(p.Z, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: K.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0,
            })
          : null,
        q = null;
      function J(e) {
        e.preventDefault();
      }
      function $(e) {
        (0, u.jW)(e, async () => {
          let { default: e } = await n.e("17610").then(n.bind(n, 385620));
          return (t) =>
            (0, i.jsx)(e, {
              ...t,
              layoutId: G.OVERLAY_V3_LAYOUT_ID,
              version: 1,
            });
        });
      }
      let ee = r.memo(function (e) {
          let { keybind: t, onClick: n, locked: r } = e;
          return (0, i.jsx)(c.Clickable, {
            className: o()(K.overlayBackground, {
              [K.overlayActive]: !r,
              [K.overlayLocked]: r,
            }),
            onMouseDown: (e) => {
              let { currentTarget: t, target: i, button: r } = e;
              r === B.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: $,
            children: r
              ? null
              : (0, i.jsx)(z.Z, {
                  className: K.closeContainer,
                  children: (0, i.jsx)(M.Z, {
                    keybind: t,
                    onClick: n,
                    IconComponent: c.XLargeIcon,
                  }),
                }),
          });
        }),
        et = r.memo(function (e) {
          let { locked: t, focused: n } = e;
          return t && n
            ? (0, i.jsx)(z.Z, {
                className: K.closeContainer,
                children: (0, i.jsx)(M.Z, {
                  onClick: () => d.Z.setInputLocked(!1, (0, T.QF)()),
                  IconComponent: c.LockUnlockedIcon,
                }),
              })
            : null;
        });
      function en() {
        if (null != E.Z.getContextMenu()) {
          (0, u.Zy)();
          return;
        }
        d.Z.setInputLocked(!0, (0, T.QF)());
      }
      function ei() {
        d.Z.setFocusedPID(T.Js);
      }
      function er() {
        d.Z.setFocusedPID(null);
      }
      function el(e) {
        let t = N.Z.isLocked((0, T.QF)());
        "alt" === e.key.toLowerCase() &&
          !t &&
          ("keyup" === e.type.toLowerCase()
            ? L.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })
            : "keydown" === e.type.toLowerCase() &&
              L.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
      }
      function eo(e) {
        var t, n;
        let { isEmbeddedActivity: l } = e,
          u = (0, U.Z)(),
          {
            locked: p,
            focused: E,
            incompatibleApp: L,
            hasValidResolution: S,
            hasZeroSizeDimension: M,
            keybind: z,
          } = (0, a.cj)([N.Z, k.Z, b.Z], () => {
            let e = k.Z.windowSize((0, A.ZY)(u)),
              t = b.Z.getOverlayKeybind();
            return {
              locked: N.Z.isLocked((0, T.QF)()),
              focused: N.Z.isFocused((0, T.QF)()),
              incompatibleApp: N.Z.incompatibleApp,
              hasValidResolution: (0, T.Te)(e),
              hasZeroSizeDimension: 0 === e.height || 0 === e.width,
              keybind: null != t ? (0, y.BB)(t.shortcut, !0) : "???",
            };
          }),
          { analyticsLocations: G } = (0, m.ZP)(f.Z.OVERLAY);
        return (
          !(function (e, t) {
            let n = r.useRef({ mount: e, unmount: t });
            r.useEffect(() => void (n.current = { mount: e, unmount: t })),
              r.useEffect(
                () => (
                  n.current.mount(),
                  () => {
                    n.current.unmount();
                  }
                ),
                [],
              );
          })(
            () => {
              d.Z.overlayReady((0, T.QF)()),
                u.addEventListener("keydown", el),
                u.addEventListener("keyup", el),
                X &&
                  (u.document.hasFocus() && d.Z.setFocusedPID(T.Js),
                  u.addEventListener("focus", ei),
                  u.addEventListener("blur", er));
            },
            () => {
              u.removeEventListener("keydown", el),
                u.removeEventListener("keyup", el),
                X &&
                  (u.removeEventListener("focus", ei),
                  u.removeEventListener("blur", er));
            },
          ),
          !(function () {
            let e = r.useRef(!1),
              t = (0, D.pL)(),
              n = j.Z.getVoiceChannelId(),
              i = Z.Z.getChannel(n),
              l = null != i ? I.Z.getGuild(i.guild_id) : null,
              o = null != C.Z.getCurrentUserActiveStream(),
              s = null != n,
              c = (0, g.Z)(_.Z) && !o && null != t,
              u = s && null != l && null != n,
              f = (0, x.Ns)(null == t ? void 0 : t.id),
              m = (0, a.e7)(
                [v.Z],
                () => null != v.Z.getLastFeedFetchDate(Y.YN.GAME_PROFILE_FEED),
              );
            r.useEffect(() => {
              var i;
              if (!m || e.current) return;
              (e.current = !0),
                d.Z.track(B.rMx.OVERLAY_INITIALIZED, {
                  voice_widget_connected: s,
                  text_widget_connected: !1,
                  overlay_render_method: h.gl[h.gl.OutOfProcess],
                });
              let r =
                null !== (i = w.Z.getFocusedPID()) && void 0 !== i
                  ? i
                  : (0, T.QF)();
              if (R.Z.hasChangedRenderMode(r)) return;
              let o = [{ type: F.nc.WELCOME }];
              if (
                (c && u
                  ? o.push({
                      type: F.nc.GO_LIVE_VOICE,
                      game: t,
                      voiceChannelId: n,
                      voiceGuild: l,
                    })
                  : c && o.push({ type: F.nc.GO_LIVE_NON_VOICE, game: t }),
                f.length > 0)
              ) {
                let { enabled: e } = O.Z.getCurrentConfig(
                  { location: "Overlay" },
                  { autoTrackExposure: !0 },
                );
                e && o.push({ type: F.nc.CONTENT_INVENTORY, entries: f });
              }
              d.Z.overlayMounted(...o);
            }, [m, f, s, c, u, t, n, l]);
          })(),
          (t = p),
          (n = u),
          r.useEffect(() => {
            if (t) {
              if (
                ((0, s.Ay)(c.POPOUT_MODAL_CONTEXT),
                n.addEventListener("contextmenu", J, !1),
                null != q)
              ) {
                let e = Date.now() - q;
                d.Z.track(B.rMx.OVERLAY_LOCKED, { unlocked_duration: e }),
                  (q = null);
              }
              return () => {
                n.removeEventListener("contextmenu", J, !1);
              };
            }
            n.removeEventListener("contextmenu", J, !1),
              null == q &&
                ((q = Date.now()), d.Z.track(B.rMx.OVERLAY_UNLOCKED));
          }, [t, n]),
          (0, i.jsx)(m.Gt, {
            value: G,
            children: (0, i.jsx)(c.RedesignIconContextProvider, {
              children:
                M || L
                  ? null
                  : (0, i.jsx)(c.ThemeProvider, {
                      theme: B.BRd.DARK,
                      children: (e) =>
                        (0, i.jsxs)("div", {
                          className: o()(K.overlay, e),
                          children: [
                            !l && Q,
                            (0, i.jsx)(ee, {
                              locked: p,
                              keybind: z,
                              onClick: en,
                            }),
                            S
                              ? (0, i.jsx)(P.Z, {
                                  className: o()({
                                    [K.layoutLocked]: p,
                                    [K.layoutUnlocked]: !p,
                                  }),
                                })
                              : p
                                ? null
                                : (0, i.jsx)("div", {
                                    className: K.invalidContainer,
                                    children: (0, i.jsx)("div", {
                                      className: K.inactiveContainer,
                                      children: H.intl.format(H.t.ketnW1, T.FW),
                                    }),
                                  }),
                            (0, i.jsx)(W.Z, {}),
                            !l &&
                              X &&
                              (0, i.jsx)(et, { locked: p, focused: E }),
                            (0, i.jsx)(V.Z, {}),
                          ],
                        }),
                    }),
            }),
          })
        );
      }
    },
    690336: function (e, t, n) {
      n(653041), n(47120);
      var i = n(200651),
        r = n(192379),
        l = n(442837),
        o = n(481060),
        a = n(355863),
        s = n(451478),
        c = n(830917),
        u = n(388627),
        d = n(892127),
        h = n(84346),
        f = n(561064),
        m = n(501787);
      function v(e) {
        return e.widget.id;
      }
      function p(e, t, n, r) {
        return n === o.TransitionStates.YEETED
          ? null
          : (0, i.jsx)(d.Z, { ...t, transitionState: n, cleanUp: r }, e);
      }
      let x = [];
      t.Z = r.memo(function (e) {
        let { className: t } = e,
          n = (0, f.Z)(),
          d = (0, l.e7)([s.Z], () => s.Z.windowSize((0, c.ZY)(n))),
          g = (0, l.e7)(
            [a.Z],
            () => {
              let e = a.Z.getLayout(m.OVERLAY_V3_LAYOUT_ID);
              if (null == e) return x;
              let t = [];
              for (let n of e.widgets) {
                let e = a.Z.getWidget(n);
                if (null == e) continue;
                let i = h.Z[e.type];
                null != i && t.push({ widget: e, ...i });
              }
              return t;
            },
            [],
            u.HP,
          ),
          C = r.useCallback(
            (e) => (0, i.jsx)("div", { className: t, style: d, children: e }),
            [t, d],
          );
        return (0, i.jsx)(o.TransitionGroup, {
          items: g,
          renderItem: p,
          getItemKey: v,
          wrapChildren: C,
        });
      });
    },
    340101: function (e, t, n) {
      n.d(t, {
        C5: function () {
          return r;
        },
        ZL: function () {
          return o;
        },
        js: function () {
          return a;
        },
      });
      var i,
        r,
        l = n(981631);
      function o(e) {
        return (null == e ? void 0 : e.type) === l.Odu.GO_LIVE;
      }
      function a(e) {
        return e.type === l.Odu.VIDEO;
      }
      ((i = r || (r = {})).HORIZONTAL = "horizontal"),
        (i.VERTICAL = "vertical");
    },
    293224: function (e, t, n) {
      n.d(t, {
        L: function () {
          return ec;
        },
        N3: function () {
          return ei;
        },
        Ox: function () {
          return et;
        },
        SE: function () {
          return en;
        },
        aG: function () {
          return el;
        },
        c_: function () {
          return eo;
        },
        sm: function () {
          return er;
        },
      });
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        a = n(442837),
        s = n(685072),
        c = n(400354),
        u = n(652844),
        d = n(864094),
        h = n(582019),
        f = n(75735),
        m = n(481060),
        v = n(846027),
        p = n(239091),
        x = n(287734),
        g = n(40851),
        C = n(100527),
        Z = n(906732),
        I = n(571250),
        _ = n(628581),
        j = n(659580),
        E = n(793865),
        b = n(55311),
        w = n(575175),
        N = n(933557),
        k = n(471445),
        L = n(74299),
        S = n(803647),
        y = n(565138),
        T = n(917405),
        A = n(603074),
        O = n(879815),
        V = n(189771),
        M = n(294629),
        P = n(67844),
        z = n(544384),
        R = n(892807),
        D = n(560688),
        W = n(199902),
        U = n(430824),
        F = n(131951),
        G = n(19780),
        B = n(944486),
        Y = n(594174),
        H = n(979651),
        K = n(388627),
        X = n(810632),
        Q = n(981631),
        q = n(388032),
        J = n(725775);
      function $(e) {
        let t = r.useRef(null);
        return (
          r.useEffect(() => {
            if (e) {
              var n;
              null === (n = t.current) || void 0 === n || n.call(t),
                (t.current = null);
            }
          }, [e]),
          (e) => ((t.current = e), e)
        );
      }
      function ee(e) {
        let {
          isToggled: t,
          disabled: n,
          cutoutIcon: r,
          icon: l,
          tooltip: a,
          defaultColor: s = m.Button.Colors.TRANSPARENT,
          highlightedColor: c = m.Button.Colors.WHITE,
          onClick: u,
          onCutoutClick: d,
          onMouseEnter: h,
          onMouseLeave: f,
          onContextMenu: v,
        } = e;
        return (0, i.jsx)(m.Tooltip, {
          text: a,
          "aria-label": !1,
          children: (e) => {
            let { onMouseEnter: a, onMouseLeave: p, ...x } = e;
            return (0, i.jsxs)(m.Button, {
              ...x,
              onClick: u,
              size: m.Button.Sizes.SMALL,
              color: t ? c : s,
              className: J.button,
              disabled: n,
              onMouseEnter: (e) => {
                null == a || a(), null == h || h(e);
              },
              onMouseLeave: (e) => {
                null == p || p(), null == f || f(e);
              },
              onContextMenu: v,
              children: [
                l,
                null != r &&
                  (0, i.jsx)(m.Clickable, {
                    onClick: (e) => {
                      e.stopPropagation(),
                        e.preventDefault(),
                        null == d || d(e);
                    },
                    className: o()(
                      J.cutoutContainer,
                      t && J.toggledCutoutContainer,
                    ),
                    children: r,
                  }),
              ],
            });
          },
        });
      }
      function et(e) {
        let { voiceChannel: t, locked: n } = e,
          { suppress: l, selfMute: o, mute: a } = (0, M.Z)(t),
          s = o || a || l,
          c = (0, _.Z)(o, a, l, !1),
          {
            Component: d,
            play: h,
            events: f,
          } = (0, u.O)(s ? "unmute" : "mute");
        r.useEffect(() => () => h(), [h, s]);
        let v = $(n);
        return (0, i.jsx)(m.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(j.default, {
              onClose: v(t),
              renderInputDevices: !0,
              renderOutputDevices: !0,
              renderInputModes: !0,
            });
          },
          align: "center",
          position: "top",
          animation: m.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: r } = t;
            return (0, i.jsx)(ee, {
              icon: (0, i.jsx)(d, { color: "currentColor", size: "sm" }),
              tooltip: c,
              isToggled: !s,
              onClick: () => (0, w.Z)(a, l, Q.jXE.OVERLAY),
              onCutoutClick: n,
              onContextMenu: n,
              onMouseEnter: () => {
                f.onMouseEnter();
              },
              onMouseLeave: () => {
                f.onMouseLeave();
              },
              cutoutIcon: r
                ? (0, i.jsx)(m.ChevronSmallUpIcon, {
                    color: "currentColor",
                    size: "sm",
                  })
                : (0, i.jsx)(m.ChevronSmallDownIcon, {
                    color: "currentColor",
                    size: "sm",
                  }),
            });
          },
        });
      }
      function en(e) {
        let { voiceChannel: t } = e,
          { selfDeaf: l, deaf: o } = (0, O.Z)(t),
          a = l || o,
          {
            Component: s,
            play: u,
            events: { onMouseEnter: d, onMouseLeave: h },
          } = (0, c.l)(a ? "undeafen" : "deafen"),
          f = o ? m.HeadphonesDenyIcon : s,
          { analyticsLocations: v } = (0, Z.ZP)(C.Z.OVERLAY);
        return (
          r.useEffect(() => () => u(), [a, u]),
          (0, i.jsx)(ee, {
            icon: (0, i.jsx)(f, { color: "currentColor", size: "sm" }),
            tooltip: (0, I.Z)(l, o, !1),
            isToggled: a,
            onClick: () => {
              (0, b.Z)(o, Q.jXE.OVERLAY);
            },
            onCutoutClick: (e) => {
              (0, p.jW)(e, async () => {
                let { default: e } = await Promise.resolve().then(
                  n.bind(n, 659580),
                );
                return () =>
                  (0, i.jsx)(Z.Gt, {
                    value: v,
                    children: (0, i.jsx)(e, {
                      onClose: p.Zy,
                      renderOutputDevices: !0,
                      renderOutputVolume: !0,
                    }),
                  });
              });
            },
            onMouseEnter: d,
            onMouseLeave: h,
          })
        );
      }
      function ei(e) {
        var t;
        let { voiceChannel: n, locked: l } = e,
          o = (0, a.e7)([F.Z], () => F.Z.isVideoEnabled()),
          s = (0, a.e7)([F.Z], () => Object.values(F.Z.getVideoDevices())[0]),
          c =
            null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t,
          u = !1 === c,
          d = (0, V.Z)(n),
          h = (e) => {
            v.Z.setVideoEnabled(e);
          },
          p = () => {
            u ? h(!0) : (0, D.Z)();
          },
          x = c ? () => p() : () => h(!o),
          {
            Component: g,
            play: C,
            events: { onMouseEnter: Z, onMouseLeave: I },
          } = (0, f.o)(o ? "disable" : "enable"),
          _ =
            null != n
              ? (0, P.X)({
                  enabled: o,
                  cameraUnavailable: c,
                  hasPermission: d,
                  channel: n,
                })
              : void 0;
        r.useEffect(() => () => C(), [o, C]);
        let j = $(l),
          b = null == n || !d;
        return (0, i.jsx)(m.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(E.Z, { onClose: j(t) });
          },
          align: "center",
          position: "top",
          animation: m.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: r } = t;
            return (0, i.jsx)(ee, {
              icon: (0, i.jsx)(g, { color: "currentColor", size: "sm" }),
              tooltip: _,
              onClick: x,
              isToggled: o,
              onCutoutClick: n,
              onContextMenu: n,
              onMouseEnter: Z,
              onMouseLeave: I,
              cutoutIcon: b
                ? null
                : r
                  ? (0, i.jsx)(m.ChevronSmallUpIcon, {
                      color: "currentColor",
                      size: "sm",
                    })
                  : (0, i.jsx)(m.ChevronSmallDownIcon, {
                      color: "currentColor",
                      size: "sm",
                    }),
              disabled: b,
            });
          },
        });
      }
      function er(e) {
        let t,
          { voiceChannel: n, locked: l } = e,
          o = (0, a.e7)([Y.default], () => Y.default.getCurrentUser()),
          s = (0, V.Z)(n),
          c = (0, a.cj)([F.Z], () => (0, L.Z)(F.Z)),
          u = (0, a.e7)([W.Z], () => W.Z.getCurrentUserActiveStream()),
          h = (0, g.bp)(),
          f = (0, X.B)(),
          v = null != u;
        if (v) t = q.intl.string(q.t.S5anIS);
        else if (null != n) {
          let e = (0, K.pL)();
          t = s
            ? null != e
              ? q.intl.format(q.t.AB5gT0, { game: e.name })
              : q.intl.string(q.t.FeUKeH)
            : q.intl.string(q.t.uQn9Bw);
        }
        let p = () => {
            if (v) return (0, S.Z)(u, !1);
            f();
          },
          {
            Component: x,
            events: { onMouseEnter: C, onMouseLeave: Z },
            play: I,
          } = (0, d.P)(v ? "disable" : "enable");
        r.useEffect(() => () => I(), [v, I]);
        let _ = $(l);
        return (0, i.jsx)(m.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != n
              ? (0, i.jsx)(z.Z, {
                  channel: n,
                  currentUser: o,
                  activeStreams: null != u ? [u] : [],
                  handleGoLive: f,
                  onClose: _(t),
                  appContext: h,
                  disableChangeWindows: !0,
                })
              : (0, i.jsx)(i.Fragment, {});
          },
          align: "center",
          position: "top",
          animation: m.Popout.Animation.FADE,
          children: (e, n) => {
            let { onClick: r } = e,
              { isShown: l } = n;
            return (0, i.jsx)(ee, {
              icon: (0, i.jsx)(x, { color: "currentColor", size: "sm" }),
              tooltip: t,
              isToggled: v,
              cutoutIcon:
                null != u
                  ? l
                    ? (0, i.jsx)(m.ChevronSmallUpIcon, {
                        color: "currentColor",
                        size: "sm",
                      })
                    : (0, i.jsx)(m.ChevronSmallDownIcon, {
                        color: "currentColor",
                        size: "sm",
                      })
                  : null,
              onClick: p,
              onCutoutClick: r,
              onContextMenu: r,
              onMouseEnter: C,
              onMouseLeave: Z,
              disabled: !c || !s,
            });
          },
        });
      }
      function el(e) {
        var t;
        let { voiceChannel: r, locked: l } = e,
          o =
            null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t
              ? t
              : null,
          { mute: s, suppress: c } = (0, M.Z)(r),
          u = (0, a.e7)([F.Z], () => F.Z.isDeaf()),
          d = null == r || s || c || u;
        function f(e) {
          null != o &&
            (0, p.jW)(e, async () => {
              let { default: e } = await n.e("56049").then(n.bind(n, 338991));
              return (t) => (0, i.jsx)(e, { guildId: o, ...t });
            });
        }
        let {
            Component: v,
            events: { onClick: x, onMouseEnter: g, onMouseLeave: C },
          } = (0, h.j)(),
          Z = $(l);
        return (0, i.jsx)(m.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return d || null == r
              ? (0, i.jsx)(i.Fragment, {})
              : (0, i.jsx)(A.Z, {
                  guildId: o,
                  channel: r,
                  onClose: Z(t),
                  analyticsSource: "action bar button",
                });
          },
          align: "center",
          position: "top",
          animation: m.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: r } = t;
            return (0, i.jsx)(ee, {
              icon: (0, i.jsx)(v, { color: "currentColor", size: "sm" }),
              tooltip: (function () {
                if (s) return q.intl.string(q.t["Ox4/zc"]);
                if (c) return q.intl.string(q.t["+YBKYG"]);
                if (u) return q.intl.string(q.t.X1lQlp);
              })(),
              onClick: (e) => {
                x(), n(e);
              },
              onContextMenu: f,
              onMouseEnter: g,
              onMouseLeave: C,
              isToggled: r,
              disabled: d,
            });
          },
        });
      }
      function eo(e) {
        let { voiceChannel: t, locked: n } = e,
          r = (0, a.e7)(
            [B.Z],
            () => B.Z.getVoiceChannelId() === (null == t ? void 0 : t.id),
          ),
          l = () => {
            r && x.default.disconnect();
          },
          o = (e) => {
            x.default.selectVoiceChannel(e.id);
          },
          {
            Component: c,
            events: { onMouseEnter: u, onMouseLeave: d },
          } = (0, s.K)(),
          h = $(n),
          f = r
            ? (0, i.jsx)(c, { color: "currentColor", size: "sm" })
            : (0, i.jsx)(m.PhoneCallIcon, {
                color: "currentColor",
                size: "sm",
              }),
          v = (e) =>
            e
              ? (0, i.jsx)(m.ChevronSmallUpIcon, {
                  color: "currentColor",
                  size: "sm",
                })
              : (0, i.jsx)(m.ChevronSmallDownIcon, {
                  color: "currentColor",
                  size: "sm",
                });
        return (0, i.jsx)(m.Popout, {
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(R.Z, {
              currentVoiceChannel: t,
              onClose: h(n),
              onSelect: o,
            });
          },
          align: "center",
          position: "top",
          animation: m.Popout.Animation.FADE,
          children: (e, n) => {
            let { onClick: o } = e,
              { isShown: a } = n;
            return (0, i.jsx)(ee, {
              icon: f,
              tooltip:
                null != t
                  ? q.intl.string(q.t["6vrfgo"])
                  : q.intl.string(q.t.S0W8Z2),
              onClick: r ? l : o,
              defaultColor: r
                ? m.Button.Colors.RED
                : m.Button.Colors.TRANSPARENT,
              onMouseEnter: u,
              onMouseLeave: d,
              onContextMenu: o,
              isToggled: a,
              cutoutIcon: r ? v(a) : null,
              onCutoutClick: r ? o : void 0,
            });
          },
        });
      }
      function ea(e) {
        let { voiceChannel: t } = e,
          n = (0, a.e7)([U.Z], () => U.Z.getGuild(t.getGuildId()), [t]);
        switch (!0) {
          case t.isGroupDM() || t.isDM():
          case t.isDM():
            return null;
          case null != n:
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", { className: J.separatorDot }),
                (0, i.jsxs)("div", {
                  className: J.guildIconContainer,
                  children: [
                    (0, i.jsx)(y.Z, {
                      guild: n,
                      size: y.Z.Sizes.SMOL,
                      className: J.guildIcon,
                    }),
                    (0, i.jsx)(m.Text, {
                      tag: "div",
                      variant: "text-xs/semibold",
                      color: "text-primary",
                      className: J.guildName,
                      children: n.name,
                    }),
                  ],
                }),
              ],
            });
          default:
            return null;
        }
      }
      function es(e) {
        let { voiceChannel: t } = e,
          n = (0, k.KS)(t),
          r = (0, N.ZP)(t);
        return (0, i.jsxs)("div", {
          className: J.voiceChannelNameContainer,
          children: [
            null != n &&
              (0, i.jsx)(m.Text, {
                tag: "div",
                color: "text-muted",
                variant: "text-xs/normal",
                className: J.channelIcon,
                children: (0, i.jsx)(n, { size: "xs", color: "currentColor" }),
              }),
            null != r &&
              (0, i.jsx)(m.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                className: J.channelName,
                children: r,
              }),
          ],
        });
      }
      function ec(e) {
        let { voiceChannel: t } = e,
          n = null == t ? void 0 : t.id,
          r = (0, a.cj)([G.Z], () => ({
            channelId: G.Z.getChannelId(),
            quality: G.Z.getQuality(),
            state: G.Z.getState(),
            lastPing: G.Z.getLastPing(),
          })),
          l = null != n,
          o = (0, a.e7)([H.Z], () => null != n && H.Z.hasVideo(n), [n]);
        return (
          l &&
          null != t &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(T.Z, { ...r, hasVideo: o }),
              (0, i.jsx)(ea, { voiceChannel: t }),
              (0, i.jsx)("div", { className: J.separatorDot }),
              (0, i.jsx)(es, { voiceChannel: t }),
            ],
          })
        );
      }
    },
    810632: function (e, t, n) {
      n.d(t, {
        B: function () {
          return L;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        l = n(512722),
        o = n.n(l),
        a = n(442837),
        s = n(481060),
        c = n(872810),
        u = n(594190),
        d = n(74299),
        h = n(451467),
        f = n(537413),
        m = n(989941),
        v = n(567126),
        p = n(143135),
        x = n(751571),
        g = n(361291),
        C = n(592125),
        Z = n(430824),
        I = n(131951),
        _ = n(944486),
        j = n(594174),
        E = n(449224),
        b = n(358085),
        w = n(981631),
        N = n(37113),
        k = n(761274);
      function L() {
        let e = (0, a.e7)([_.Z], () => _.Z.getVoiceChannelId()),
          t = (0, a.e7)([C.Z], () => C.Z.getChannel(e), [e]),
          l = (0, a.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return (
              o()(
                null != e,
                "useGoLiveImmidateAction: user cannot be undefined",
              ),
              e
            );
          }),
          L = null == t ? void 0 : t.getGuildId(),
          S = (0, a.e7)([I.Z], () => (0, d.Z)(I.Z));
        async function y() {
          var e;
          return null !==
            (e = (await (0, v._Q)()).sort(
              (e, t) => (0, v.ov)(t) - (0, v.ov)(e),
            )[0]) && void 0 !== e
            ? e
            : null;
        }
        let T = r.useCallback(async () => {
          var n, i;
          if (null == t || null == e) return !1;
          let r = await y(),
            o = (0, b.isWindows)() ? (0, m.Z)(u.ZP, E.Z) : null;
          if (null == o && null == r) return !1;
          let a =
              null != L
                ? null === (n = Z.Z.getGuild(L)) || void 0 === n
                  ? void 0
                  : n.premiumTier
                : null,
            {
              preset: s,
              resolution: d,
              fps: v,
              soundshareEnabled: C,
            } = g.Z.getState(),
            [_, j] =
              null !== (i = (0, f.Z)(s, l, a)) && void 0 !== i
                ? i
                : [N.LY.RESOLUTION_720, N.ws.FPS_30],
            w = s,
            S = d,
            T = v;
          w !== N.tI.PRESET_CUSTOM && ((S = _), (T = j)),
            !(0, h.Z)(w, S, T, l, a) && ((S = _), (T = j)),
            !(0, h.Z)(w, S, T, l, a, t) &&
              ((w = N.tI.PRESET_VIDEO),
              (S = N.LY.RESOLUTION_720),
              (T = N.ws.FPS_30)),
            (0, c.Rc)({
              preset: w,
              resolution: S,
              frameRate: T,
              soundshareEnabled: C,
            });
          let A = (0, p.Z)(o, r, u.ZP.getRunningGames()),
            O =
              !(0, b.isWindows)() ||
              null == A ||
              (null == r ? void 0 : r.id.startsWith("camera:")) ||
              null == A
                ? null
                : A.pid,
            V = null,
            M = null;
          return (
            null == O && null != r && ((V = r.id), (M = r.name)),
            !!(
              I.Z.getUseSystemScreensharePicker() ||
              (await x.Z.hasPermission(k.Eu.SCREEN_RECORDING, {
                showAuthorizationError: !1,
              }))
            ) &&
              ((0, c.WH)(L, e, {
                pid: O,
                sourceId: V,
                sourceName: M,
                audioSourceId: null,
                sound: C,
                previewDisabled: !0,
              }),
              !0)
          );
        }, [t, L, l, e]);
        return r.useCallback(async () => {
          if (!(!S || null == e || (await T())))
            (0, s.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("79477"),
                n.e("73554"),
              ]).then(n.bind(n, 60594));
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  selectSource: !1,
                  guildId: L,
                  analyticsLocation: w.Sbl.UNLOCKED_OVERLAY,
                });
            });
        }, [S, T, L, e]);
      }
    },
    2923: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        o = n(442837),
        a = n(592125),
        s = n(944486),
        c = n(293224),
        u = n(201636);
      function d(e) {
        let { locked: t } = e,
          n = (0, o.e7)([s.Z], () => s.Z.getVoiceChannelId()),
          r = (0, o.e7)([a.Z], () => a.Z.getChannel(n)),
          d = null != r;
        return (0, i.jsxs)("div", {
          className: l()({ [u.panelContainer]: !0, [u.locked]: t }),
          children: [
            (0, i.jsxs)("div", {
              className: u.panelRow,
              children: [
                (0, i.jsx)(c.Ox, { voiceChannel: r, locked: t }),
                (0, i.jsx)(c.SE, { voiceChannel: r, locked: t }),
                (0, i.jsx)(c.N3, { voiceChannel: r, locked: t }),
                (0, i.jsx)("div", { className: u.separator }),
                (0, i.jsx)(c.sm, { voiceChannel: r, locked: t }),
                (0, i.jsx)(c.aG, { voiceChannel: r, locked: t }),
                (0, i.jsx)("div", { className: u.separator }),
                (0, i.jsx)(c.c_, { voiceChannel: r, locked: t }),
              ],
            }),
            d &&
              (0, i.jsx)("div", {
                className: u.panelRow,
                children: (0, i.jsx)(c.L, { voiceChannel: r, locked: t }),
              }),
          ],
        });
      }
    },
    586742: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        a = n(442837),
        s = n(239091),
        c = n(765250),
        u = n(393238),
        d = n(358221),
        h = n(933557),
        f = n(352978),
        m = n(27457),
        v = n(796638),
        p = n(592125),
        x = n(131951),
        g = n(944486),
        C = n(906037),
        Z = n(501787),
        I = n(65154),
        _ = n(827202);
      function j(e) {
        var t;
        let { participant: n, channel: r, context: l } = e,
          o = null === (t = n.user) || void 0 === t ? void 0 : t.id;
        return (0, a.e7)(
          [x.Z],
          () =>
            null != n.user &&
            null != l &&
            null != r &&
            x.Z.isLocalVideoDisabled(o, l),
          [o, n.user, l, r],
        )
          ? null
          : (0, i.jsx)(m.ZP, { ...e });
      }
      function E(e) {
        let {
            context: t = I.Yn.DEFAULT,
            participants: l,
            locked: a,
            widget: c,
            channel: u,
            width: d,
            height: h,
            containerRef: m,
          } = e,
          v = (e, r) => {
            (0, s.jW)(r, async () => {
              let { default: r } = await Promise.all([
                n.e("79695"),
                n.e("69220"),
                n.e("351"),
              ]).then(n.bind(n, 881351));
              return (n) =>
                (0, i.jsx)(r, {
                  ...n,
                  user: e.user,
                  showMediaItems: !0,
                  mediaEngineContext: t,
                });
            });
          },
          p = l.length > 0 && null != t && null != u && (!a || c.pinned);
        r.useEffect(() => {
          (0, C.m3)(
            {
              locked: a,
              pinned: c.pinned,
              widget: c.type,
              isPreviewingInGame: !1,
            },
            p,
          );
        }, [a, c, p]);
        let x = "boolean" != typeof c.meta.horizontal || c.meta.horizontal;
        return p
          ? (0, i.jsx)("div", {
              ref: m,
              className: o()({ [_.videoList]: !0, [_.vertical]: !x }),
              style: { opacity: c.opacity },
              children: l.map((e) =>
                (0, i.jsx)(
                  j,
                  {
                    participant: e,
                    width: d,
                    className: _.tile,
                    containerStyle: { width: d, height: h },
                    fit: f.L.COVER,
                    channel: u,
                    inPopout: !0,
                    inCall: !0,
                    noBorder: !0,
                    onContextMenu: a ? void 0 : v,
                    forceIdle: a,
                    context: t,
                  },
                  e.id,
                ),
              ),
            })
          : null;
      }
      function b(e) {
        let t = (0, a.e7)([g.Z, p.Z], () =>
            p.Z.getChannel(g.Z.getVoiceChannelId()),
          ),
          n = (0, h.ZP)(t),
          l = (0, a.Wu)([d.Z], () =>
            null != t ? d.Z.getVideoParticipants(t.id) : [],
          ),
          o = (0, a.e7)([d.Z], () =>
            null != t ? d.Z.getParticipantsVersion(t.id) : 0,
          ),
          s =
            "boolean" != typeof e.widget.meta.horizontal ||
            e.widget.meta.horizontal,
          { width: f, height: m, ref: x } = (0, u.Z)(),
          { visibleParticipants: C, participantTileWidth: I } = (0, v.ZB)(
            s ? (null != f ? f : e.width) : null != m ? m : e.height,
            l,
            {
              tileWidth: Z.OVERLAY_TILE_WIDTH,
              tileMinWidth: Z.OVERLAY_TILE_MIN_WIDTH,
              tileMargin: Z.OVERLAY_TILE_MARGIN,
              limit: 8,
              cropSelfVideo: !0,
              version: o,
            },
          ),
          _ = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height,
          },
          j = r.useRef(_);
        return (
          r.useLayoutEffect(() => void (j.current = _)),
          r.useLayoutEffect(() => {
            let {
              size: e,
              id: t,
              containerWidth: n,
              containerHeight: i,
            } = j.current;
            ((s && e.height > e.width) || (!s && e.width > e.height)) &&
              (0, c.nv)({
                widgetId: t,
                size: { fixed: !0, width: i, height: n },
              });
          }, [s]),
          (0, i.jsx)(E, {
            ...e,
            channel: t,
            title: null != n ? n : "",
            participants: C,
            participantsVersion: o,
            width: s ? I : null != f ? f : e.width,
            height: s ? (null != m ? m : e.height) : I,
            containerRef: x,
          })
        );
      }
    },
    243487: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return D;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        a = n(442837),
        s = n(481060),
        c = n(239091),
        u = n(765250),
        d = n(13245),
        h = n(872810),
        f = n(586902),
        m = n(835473),
        v = n(415635),
        p = n(933557),
        x = n(701362),
        g = n(552282),
        C = n(565799),
        Z = n(501655),
        I = n(597998),
        _ = n(199902),
        j = n(314897),
        E = n(592125),
        b = n(355863),
        w = n(131951),
        N = n(944486),
        k = n(938475),
        L = n(237997),
        S = n(136015),
        y = n(51144),
        T = n(145597),
        A = n(388627),
        O = n(981631),
        V = n(65154),
        M = n(882110);
      function P(e) {
        let { avatarSize: t, userId: n, channelId: r, guildId: l } = e,
          o = 2 * t,
          a = -(t / 2);
        return (0, i.jsx)("div", {
          className: M.effect,
          style: { top: a, left: a, width: o, height: o },
          children: (0, i.jsx)(v.Z, {
            userId: n,
            channelId: r,
            guildId: l,
            containerDimensions: { width: o, height: o },
          }),
        });
      }
      function z(e) {
        let {
            channel: t,
            flipped: n = !1,
            locked: l = !1,
            user: c,
            nick: u,
            displayNameMode: d,
            displayUserMode: m,
            size: v = O.ipw.LARGE,
            onClick: p,
            onContextMenu: g,
            context: C,
            guildId: Z,
            voiceState: E,
            showStreamPreview: b,
            onShowStreamPreview: N,
            onWatchStream: k,
          } = e,
          L = (0, a.e7)([j.default], () => j.default.getId() === c.id, [c.id]),
          [S, y, T] = (0, a.Wu)(
            [w.Z],
            () =>
              L
                ? [
                    !w.Z.isSupported() ||
                      w.Z.isSelfMute() ||
                      w.Z.isSelfMutedTemporarily(),
                    w.Z.isSelfDeaf(),
                    !1,
                  ]
                : [
                    !w.Z.isSupported() || w.Z.isLocalMute(c.id),
                    !1,
                    w.Z.isLocalVideoDisabled(c.id),
                  ],
            [L, c.id],
          ),
          A = (0, a.e7)([_.Z], () => _.Z.getCurrentUserActiveStream()),
          V = (0, a.Wu)([_.Z], () => (null != A ? _.Z.getViewerIds(A) : [])),
          z = (0, f.Z)({ userId: c.id, context: C }),
          R = (0, a.e7)([_.Z], () => _.Z.getStreamForUser(c.id, Z)),
          D = null != R,
          W = r.useMemo(
            () => null != A && A.ownerId !== c.id && V.includes(c.id),
            [A, c.id, V],
          ),
          U = r.useCallback(() => N(null), [N]),
          F = r.useCallback(
            () =>
              (0, i.jsx)(x.Z, {
                user: c,
                channel: t,
                onWatch: () => {
                  (0, h.rn)(R, { forceMultiple: !0, noFocus: !0 }), U(), k();
                },
                onAction: k,
                previewIsOpen: b,
                location: O.Sbl.UNLOCKED_OVERLAY,
                hideTip: !0,
              }),
            [c, t, R, b, U, k],
          );
        if (m === O.OYC.ONLY_WHILE_SPEAKING && l && !z) return null;
        let { mute: G, suppress: B, deaf: Y } = E,
          H = v === O.ipw.LARGE ? 32 : 24;
        return (0, i.jsxs)(s.Clickable, {
          className: o()(M.voiceUser, {
            [M.speaking]: z,
            [M.interactive]: !l,
            [M.flipped]: n,
          }),
          onClick: l ? void 0 : (e) => (null == p ? void 0 : p(e, c)),
          onContextMenu: l ? void 0 : (e) => (null == g ? void 0 : g(e, c)),
          onMouseEnter: () => N(c.id),
          onMouseLeave: U,
          children: [
            (0, i.jsx)(s.Avatar, {
              className: M.avatar,
              size:
                v === O.ipw.LARGE
                  ? s.AvatarSizes.SIZE_32
                  : s.AvatarSizes.SIZE_24,
              src: c.getAvatarURL(Z, H),
              "aria-hidden": !0,
            }),
            (0, i.jsx)(P, {
              avatarSize: H,
              userId: c.id,
              channelId: t.id,
              guildId: t.getGuildId(),
            }),
            l && (d === O.wC$.NEVER || (!z && d === O.wC$.ONLY_WHILE_SPEAKING))
              ? null
              : (0, i.jsx)(s.Popout, {
                  position: "right",
                  renderPopout: F,
                  shouldShow: b,
                  onRequestClose: U,
                  spacing: 0,
                  children: () =>
                    (0, i.jsxs)(s.Clickable, {
                      className: M.username,
                      children: [
                        (0, i.jsx)(s.Text, {
                          variant: "text-xs/medium",
                          color: "text-normal",
                          children: u,
                        }),
                        (0, i.jsx)(I.nm, {
                          guildId: Z,
                          user: c,
                          video: E.selfVideo,
                          isStreaming: D,
                          className: M.voiceIcons,
                          iconClassName: M.voiceIcon,
                          isWatching: W,
                          localMute: S && !L,
                          localVideoDisabled: T,
                          mute: G || S,
                          deaf: Y || y,
                          serverMute: G || B,
                          serverDeaf: Y,
                          disabled: !1,
                        }),
                      ],
                    }),
                }),
          ],
        });
      }
      function R(e) {
        let {
            id: t,
            context: l = V.Yn.DEFAULT,
            channel: o,
            sortedVoiceStates: a,
            displayNameMode: s,
            displayUserMode: h,
            locked: f,
            pinned: m,
            isPreviewingInGame: v,
            anchorLeft: p,
            avatarSizeMode: x,
          } = e,
          [g, C] = r.useState(null),
          Z = (e, t) => {
            (0, c.jW)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("79695"),
                n.e("69220"),
                n.e("351"),
              ]).then(n.bind(n, 881351));
              return (n) =>
                (0, i.jsx)(e, {
                  ...n,
                  user: t,
                  showMediaItems: !0,
                  mediaEngineContext: l,
                });
            });
          },
          I = a.length > 0 && null != l && null != o && (!f || m),
          _ = r.useCallback(() => {
            var e, n;
            let i =
                null === (e = b.Z.getWidget(t)) || void 0 === e
                  ? void 0
                  : e.layoutId,
              r =
                null != i
                  ? null === (n = b.Z.getWidgetsForLayout(i)) || void 0 === n
                    ? void 0
                    : n.find((e) => e.type === O.Odu.GO_LIVE)
                  : null;
            null != r &&
              !r.pinned &&
              ((0, u.xh)(r.id),
              d.Z.track(O.rMx.OVERLAY_PIN_TOGGLED, {
                pinned: !0,
                guild_id: null == o ? void 0 : o.guild_id,
                channel_id: null == o ? void 0 : o.id,
                channel_type: null == o ? void 0 : o.type,
                widget_type: O.Odu.GO_LIVE,
              }));
          }, [o, t]);
        return I
          ? (0, i.jsx)(i.Fragment, {
              children: a.map((e) => {
                var t;
                let { user: n, voiceState: r, member: a } = e;
                return null == n
                  ? null
                  : (0, i.jsx)(
                      z,
                      {
                        guildId: null == o ? void 0 : o.guild_id,
                        user: n,
                        nick:
                          null !== (t = null == a ? void 0 : a.nick) &&
                          void 0 !== t
                            ? t
                            : y.ZP.getName(n),
                        flipped: !p,
                        voiceState: r,
                        displayNameMode: s,
                        displayUserMode: h,
                        size: x,
                        locked: f || v,
                        onContextMenu: Z,
                        onClick: Z,
                        context: l,
                        channel: o,
                        showStreamPreview: n.id === g,
                        onShowStreamPreview: C,
                        onWatchStream: _,
                      },
                      n.id,
                    );
              }),
            })
          : null;
      }
      function D(e) {
        var t;
        let n = (0, a.e7)([N.Z, E.Z], () =>
            E.Z.getChannel(N.Z.getVoiceChannelId()),
          ),
          r = (0, p.ZP)(n),
          l = (function () {
            let [e] = (0, a.e7)(
              [k.ZP, C.Z, N.Z, E.Z],
              () => {
                let e = E.Z.getChannel(N.Z.getVoiceChannelId());
                return null == e
                  ? [[], -1]
                  : e.isGuildStageVoice()
                    ? [
                        C.Z.getMutableParticipants(e.id, Z.pV.SPEAKER),
                        C.Z.getParticipantsVersion(e.id),
                      ]
                    : [
                        k.ZP.getVoiceStatesForChannel(e),
                        k.ZP.getVoiceStateVersion(e.getGuildId()),
                      ];
              },
              [],
              S.Q,
            );
            return e;
          })(),
          o = (0, a.e7)([_.Z], () => _.Z.getStreamerActiveStreamMetadata()),
          s = (0, A.II)(),
          c = (0, m.q)(null == s ? void 0 : s.id),
          u = (0, a.cj)([_.Z, L.Z], () => {
            let e = _.Z.getCurrentUserActiveStream();
            return {
              displayUserMode: L.Z.getDisplayUserMode(),
              displayNameMode: L.Z.getDisplayNameMode(),
              avatarSizeMode: L.Z.getAvatarSizeMode(),
              streamApplication:
                (null == o ? void 0 : o.pid) === (0, T.QF)()
                  ? (0, g.Z)(s)
                  : null,
              stream: e,
            };
          });
        return (0, i.jsx)(R, {
          ...u,
          application: c,
          ...e,
          sortedVoiceStates: l,
          channel: n,
          title: null != r ? r : "",
          streamMetadata: o,
          streamApplication:
            null !== (t = u.streamApplication) && void 0 !== t
              ? t
              : { id: null, name: null == o ? void 0 : o.sourceName },
        });
      }
    },
    84346: function (e, t, n) {
      var i = n(200651),
        r = n(239091),
        l = n(603618),
        o = n(926086),
        a = n(353038),
        s = n(761374),
        c = n(340101),
        u = n(2923),
        d = n(586742),
        h = n(243487),
        f = n(430561),
        m = n(134849),
        v = n(501787),
        p = n(981631),
        x = n(388032);
      let g = {
        [p.Odu.VIDEO]: {
          renderWidget(e) {
            let {
              widget: t,
              locked: n,
              size: r,
              padding: l,
              borderWidth: o,
            } = e;
            return (0, i.jsx)(d.Z, {
              id: t.id,
              locked: n,
              widget: t,
              height: "auto" === r.height ? 0 : r.height - 2 * l - 2 * o,
              width: "auto" === r.width ? 0 : r.width - 2 * l - 2 * o,
            });
          },
          renderTitle: () =>
            (0, i.jsx)(f.PI, { children: x.intl.string(x.t.UPvOiY) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(f.ls, {
                  onClick: (l) =>
                    (function (e, t, l) {
                      if (!!(0, c.js)(t))
                        (0, r.jW)(e, async () => {
                          let { default: e } = await n
                            .e("26775")
                            .then(n.bind(n, 740579));
                          return (
                            l(!0),
                            (n) =>
                              (0, i.jsx)(e, {
                                ...n,
                                widget: t,
                                onClose: () => l(!1),
                              })
                          );
                        });
                    })(l, e, t),
                }),
                (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
          resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: r } = e;
            return (0, c.js)(t)
              ? "boolean" != typeof t.meta.horizontal || t.meta.horizontal
                ? {
                    width: Math.max(n.width, v.OVERLAY_TILE_WIDTH),
                    height: Math.min(
                      n.height,
                      2 * v.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * r,
                    ),
                  }
                : {
                    height: Math.max(n.height, v.OVERLAY_TILE_WIDTH),
                    width: Math.min(
                      n.width,
                      2 * v.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * r,
                    ),
                  }
              : n;
          },
        },
        [p.Odu.VOICE_V3]: {
          renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: r } = e;
            return (0, i.jsx)(h.Z, {
              anchorLeft: n,
              id: t.id,
              locked: r,
              pinned: t.pinned,
              widget: p.Odu.VOICE,
              isPreviewingInGame: !1,
            });
          },
          renderTitle: () =>
            (0, i.jsx)(f.PI, { children: x.intl.string(x.t.nFv3GR) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(f.ls, {
                  onClick: (e) => {
                    var l, o;
                    return (
                      (l = e),
                      (o = t),
                      void (0, r.jW)(l, async () => {
                        let { default: e } = await n
                          .e("32382")
                          .then(n.bind(n, 955280));
                        return (
                          o(!0),
                          (t) => (0, i.jsx)(e, { ...t, onClose: () => o(!1) })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [p.Odu.CLICK_ZONE_DEBUG]: {
          renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(o.Z, { id: t.id, locked: n, pinned: t.pinned });
          },
          renderTitle: () => (0, i.jsx)(f.PI, { children: "Click Zone Debug" }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(f.ls, {
                  onClick: (e) => {
                    var l, o;
                    return (
                      (l = e),
                      (o = t),
                      void (0, r.jW)(l, async () => {
                        let { default: e } = await n
                          .e("38813")
                          .then(n.bind(n, 541501));
                        return (
                          o(!0),
                          (t) => (0, i.jsx)(e, { ...t, onClose: () => o(!1) })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [p.Odu.GO_LIVE]: {
          renderWidget(e) {
            var t;
            let { widget: n, locked: r, size: l, dragStart: o } = e;
            return (0, c.ZL)(n)
              ? (0, i.jsx)(s.Z, {
                  id: n.id,
                  locked: r,
                  pinned: n.pinned,
                  opacity: n.opacity,
                  size: l,
                  widget: p.Odu.GO_LIVE,
                  isPreviewingInGame: !1,
                  dragStart: o,
                  horizontal:
                    null !== (t = n.meta.horizontal) && void 0 !== t && t,
                  padding: 8,
                  borderWidth: 2,
                })
              : null;
          },
          renderTitle: () =>
            (0, i.jsx)(f.PI, { children: x.intl.string(x.t["386XRk"]) }),
          renderButtons(e, t) {
            var l;
            return (0, c.ZL)(e)
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(f.ls, {
                      onClick: (l) =>
                        (function (e, t, l) {
                          if (!!(0, c.ZL)(t))
                            (0, r.jW)(e, async () => {
                              let { default: e } = await n
                                .e("34684")
                                .then(n.bind(n, 68738));
                              return (
                                l(!0),
                                (n) =>
                                  (0, i.jsx)(e, {
                                    ...n,
                                    widget: t,
                                    onClose: () => l(!1),
                                  })
                              );
                            });
                        })(l, e, t),
                    }),
                    (0, i.jsx)(f.GY, {
                      widgetId: e.id,
                      showAllStreams:
                        null === (l = e.meta.showAllStreams) ||
                        void 0 === l ||
                        l,
                    }),
                    (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
                  ],
                })
              : null;
          },
          resizeValidation(e) {
            let {
                operation: t,
                computedSize: n,
                originSize: i,
                borderWidth: r,
                padding: l,
                containerSpecs: o,
              } = e,
              s = 2 * r + 2 * l,
              c = i.width - s,
              u = i.height - s,
              d = c / u,
              h = u / c,
              f = (() => {
                switch (t) {
                  case a.B.RESIZE_NORTH:
                  case a.B.RESIZE_SOUTH:
                    return {
                      height: n.height,
                      width: Math.round((n.height - s) * d + s),
                    };
                  default:
                    return {
                      width: n.width,
                      height: Math.round((n.width - s) * h + s),
                    };
                }
              })();
            return (
              f.width > o.maxX &&
                ((f.width = o.maxX), (f.height = (o.maxX - s) * h + s)),
              f.height > o.maxY &&
                ((f.height = o.maxY), (f.width = (o.maxY - s) * d + s)),
              f
            );
          },
        },
        [p.Odu.QUICK_ACTIONS]: {
          renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(u.Z, { locked: t });
          },
        },
        [p.Odu.NOTIFICATIONS]: {
          renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(m.Z, { locked: t });
          },
          renderTitle: () =>
            (0, i.jsx)(f.PI, { children: x.intl.string(x.t.gnKWdX) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(f.ls, {
                  onClick: (e) => {
                    var l, o;
                    return (
                      (l = e),
                      (o = t),
                      void (0, r.jW)(l, async () => {
                        let { default: e } = await n
                          .e("94706")
                          .then(n.bind(n, 168133));
                        return (
                          o(!0),
                          (t) => (0, i.jsx)(e, { ...t, onClose: () => o(!1) })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [p.Odu.ACTIVITY]: {
          renderWidget: () => (0, i.jsx)(l.Z, {}),
          renderTitle: () =>
            (0, i.jsx)(f.PI, { children: x.intl.string(x.t["6gwSFR"]) }),
          renderButtons: () => null,
        },
      };
      t.Z = g;
    },
    430561: function (e, t, n) {
      n.d(t, {
        GY: function () {
          return f;
        },
        PI: function () {
          return d;
        },
        RT: function () {
          return m;
        },
        ls: function () {
          return h;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        o = n(692547),
        a = n(481060),
        s = n(765250),
        c = n(388032),
        u = n(122087);
      function d(e) {
        let { children: t } = e;
        return (0, i.jsx)("div", {
          className: u.titleWrapper,
          children: (0, i.jsx)(a.Text, {
            variant: "text-xs/semibold",
            color: "header-primary",
            children: t,
          }),
        });
      }
      function h(e) {
        let { onClick: t } = e,
          n = c.intl.string(c.t["3D5yo6"]);
        return (0, i.jsx)(a.Tooltip, {
          text: n,
          "aria-label": n,
          children: (e) =>
            (0, i.jsx)(a.Clickable, {
              ...e,
              className: u.button,
              onClick: t,
              children: (0, i.jsx)(a.SettingsIcon, {
                size: "xxs",
                color: o.Z.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
      function f(e) {
        let { widgetId: t, showAllStreams: n } = e,
          r = n ? c.intl.string(c.t.q2B3rq) : c.intl.string(c.t.JKGi6u),
          d = () => {
            (0, s.zG)(t, { showAllStreams: !n });
          };
        return (0, i.jsx)(a.Tooltip, {
          text: r,
          "aria-label": r,
          children: (e) =>
            (0, i.jsx)(a.Clickable, {
              ...e,
              className: l()(u.button, n && u.active),
              onClick: d,
              children: (0, i.jsx)(a.ScreenIcon, {
                size: "xxs",
                color: n ? o.Z.colors.BG_BRAND : o.Z.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
      function m(e) {
        let { id: t, pinned: n } = e,
          r = n ? c.intl.string(c.t.cSu80t) : c.intl.string(c.t.cM8Vnp);
        return (0, i.jsx)(a.Tooltip, {
          text: r,
          "aria-label": r,
          children: (e) =>
            (0, i.jsx)(a.Clickable, {
              ...e,
              className: l()(u.button, n && u.active),
              onClick: () => (0, s.xh)(t),
              children: (0, i.jsx)(a.PinUprightIcon, {
                size: "xxs",
                color: n ? o.Z.colors.BG_BRAND : o.Z.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
    },
    134849: function (e, t, n) {
      n(653041), n(47120);
      var i = n(200651),
        r = n(192379),
        l = n(442837),
        o = n(481060),
        a = n(237997),
        s = n(388627),
        c = n(561064),
        u = n(380736),
        d = n(693091),
        h = n(371467),
        f = n(981631),
        m = n(109020);
      let v = [];
      function p(e) {
        return e.notification.id;
      }
      function x(e, t, n, r) {
        let { index: l, notification: o, locked: a } = t;
        return (0, i.jsx)(
          u.Z,
          {
            index: l,
            notification: o,
            locked: a,
            transitionState: n,
            cleanUp: r,
          },
          e,
        );
      }
      function g(e) {
        return (0, i.jsx)("div", { className: m.container, children: e });
      }
      let C = (e) => r.useState(() => new d.AS(e))[0];
      t.Z = r.memo(function (e) {
        let { locked: t } = e,
          n = (0, l.e7)(
            [a.Z, h.Z],
            () => {
              if (a.Z.getNotificationPositionMode() === f._vf.DISABLED)
                return v;
              let e = [],
                n = 0;
              for (let i of h.Z.getNotifications()) {
                if (n > 4) break;
                (!t || i.status !== f._1z.TIMED_OUT) &&
                  (e.push({ index: n, locked: t, notification: i }), n++);
              }
              return e;
            },
            [t],
            s.E6,
          ),
          u = C(t);
        return (
          r.useLayoutEffect(() => u.updateState(n, t)),
          r.useLayoutEffect(
            () => (u.initialize((0, c.i)()), () => u.cleanUp()),
            [u],
          ),
          (0, i.jsx)(d.S4.Provider, {
            value: u,
            children: (0, i.jsx)(o.TransitionGroup, {
              items: n,
              renderItem: x,
              getItemKey: p,
              wrapChildren: g,
            }),
          })
        );
      });
    },
    892807: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return k;
        },
      }),
        n(724458),
        n(653041),
        n(47120);
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        o = n.n(l),
        a = n(442837),
        s = n(481060),
        c = n(410575),
        u = n(933557),
        d = n(471445),
        h = n(318374),
        f = n(46145),
        m = n(814443),
        v = n(592125),
        p = n(430824),
        x = n(496675),
        g = n(699516),
        C = n(594174),
        Z = n(979651),
        I = n(823379),
        _ = n(981631),
        j = n(388032),
        E = n(693215);
      function b(e) {
        let { channel: t, currentVoiceChannel: n } = e,
          r = (0, d.KS)(t),
          l = t.id === (null == n ? void 0 : n.id),
          a = l
            ? s.tokens.colors.TEXT_POSITIVE
            : s.tokens.colors.INTERACTIVE_NORMAL;
        return (0, i.jsxs)("div", {
          className: E.channelNameContainer,
          children: [
            null != r ? (0, i.jsx)(r, { color: a, size: "xs" }) : void 0,
            (0, i.jsx)(s.Text, {
              variant: "text-sm/semibold",
              className: o()(E.label, E.channelName),
              color: l ? "text-positive" : "text-normal",
              children: (0, u.F6)(t, C.default, g.Z),
            }),
          ],
        });
      }
      function w(e) {
        let { channel: t, currentVoiceChannel: n } = e,
          r = t.getGuildId(),
          l = (0, a.e7)([p.Z], () => p.Z.getGuild(r), [r]),
          o = t.id === (null == n ? void 0 : n.id);
        return null == l
          ? null
          : (0, i.jsx)("div", {
              className: E.channelMenuSubContainer,
              children: (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: o ? "text-positive" : void 0,
                children: l.name,
              }),
            });
      }
      function N(e) {
        let { channel: t } = e,
          n = (0, a.Wu)(
            [Z.Z, C.default, m.Z],
            () =>
              Object.values(Z.Z.getVoiceStatesForChannel(t.id))
                .map((e) => C.default.getUser(e.userId))
                .filter(I.lm)
                .sort((e, t) => {
                  var n, i, r, l;
                  return (
                    (null !==
                      (r =
                        null === (n = m.Z.getUserAffinity(t.id)) || void 0 === n
                          ? void 0
                          : n.affinity) && void 0 !== r
                      ? r
                      : 0) -
                    (null !==
                      (l =
                        null === (i = m.Z.getUserAffinity(e.id)) || void 0 === i
                          ? void 0
                          : i.affinity) && void 0 !== l
                      ? l
                      : 0)
                  );
                }),
            [t.id],
          ),
          r = t.getGuildId();
        return null == r
          ? null
          : (0, i.jsx)(h.Z, {
              users: n,
              guildId: r,
              maxUsers: 3,
              size: s.AvatarSizes.SIZE_20,
              overflowCountClassName: E.overflowCount,
              overflowCountVariant: "text-xxs/semibold",
              disableUserPopout: !0,
            });
      }
      function k(e) {
        let { currentVoiceChannel: t, onClose: n, onSelect: l } = e,
          o = (0, a.Wu)([g.Z, m.Z], () =>
            g.Z.getFriendIDs().sort((e, t) => {
              var n, i, r, l;
              return null == e && null == t
                ? 0
                : null == e
                  ? 1
                  : null == t
                    ? -1
                    : (null !==
                        (r =
                          null === (n = m.Z.getUserAffinity(t)) || void 0 === n
                            ? void 0
                            : n.affinity) && void 0 !== r
                        ? r
                        : 0) -
                      (null !==
                        (l =
                          null === (i = m.Z.getUserAffinity(e)) || void 0 === i
                            ? void 0
                            : i.affinity) && void 0 !== l
                        ? l
                        : 0);
            }),
          ),
          u = (0, a.Wu)(
            [C.default],
            () =>
              o.reduce((e, t) => {
                let n = C.default.getUser(t);
                return null != n && e.push(n), e;
              }, []),
            [o],
          ),
          d = (0, a.Wu)(
            [f.Z, Z.Z, v.Z, x.Z],
            () => {
              let e = new Set(
                  f.Z.getChannelHistory().reduce((e, t) => {
                    let n = v.Z.getChannel(t);
                    return (
                      null != n &&
                        x.Z.can(_.Plq.CONNECT, n) &&
                        e.length < 5 &&
                        e.push(t),
                      e
                    );
                  }, []),
                ),
                t = u
                  .map((e) => Z.Z.getDiscoverableVoiceStateForUser(e.id))
                  .reduce((t, n) => {
                    let i = null == n ? void 0 : n.channelId;
                    if (null == i) return t;
                    let r = v.Z.getChannel(i);
                    return (
                      null != r &&
                        x.Z.can(_.Plq.CONNECT, r) &&
                        !e.has(i) &&
                        t.size < 3 &&
                        t.add(i),
                      t
                    );
                  }, new Set());
              return [...Array.from(e), ...t]
                .map((e) => v.Z.getChannel(e))
                .filter(I.lm);
            },
            [u],
          ),
          h = r.useCallback(
            (e) => {
              l(e), n();
            },
            [l, n],
          );
        return (0, i.jsx)(c.Z, {
          section: _.jXE.CONTEXT_MENU,
          children: (0, i.jsx)(s.Menu, {
            onSelect: n,
            navId: "manage-streams",
            onClose: n,
            "aria-label": j.intl.string(j.t["+9QSnp"]),
            children: (0, i.jsx)(s.MenuGroup, {
              children: d.map((e) =>
                (0, i.jsx)(
                  s.MenuItem,
                  {
                    id: e.id,
                    label: (0, i.jsx)(b, {
                      channel: e,
                      currentVoiceChannel: t,
                    }),
                    subtext: (0, i.jsx)(w, {
                      channel: e,
                      currentVoiceChannel: t,
                    }),
                    icon: (0, i.jsx)("div", {
                      className: E.icon,
                      children: (0, i.jsx)(N, {
                        channel: e,
                        currentVoiceChannel: t,
                      }),
                    }),
                    subtextLineClamp: 1,
                    action: () => h(e),
                  },
                  e.id,
                ),
              ),
            }),
          }),
        });
      }
    },
    13663: function (e, t, n) {
      e.exports = {
        container: "container_e2d331",
        activityCard: "activityCard_e2d331",
        row: "row_e2d331",
        inviteFriendsButton: "inviteFriendsButton_e2d331",
        avatar: "avatar_e2d331",
        details: "details_e2d331",
        usernameWrapper: "usernameWrapper_e2d331",
        username: "username_e2d331",
        inviteButton: "inviteButton_e2d331",
        inviteButtonWrapper: "inviteButtonWrapper_e2d331",
        inviteButtonInner: "inviteButtonInner_e2d331",
        liveIndicator: "liveIndicator_e2d331",
        badgesContainer: "badgesContainer_e2d331",
      };
    },
    70491: function (e, t, n) {
      e.exports = {
        clickZoneDebugContainer: "clickZoneDebugContainer_afd0a0",
        clickZone: "clickZone_afd0a0",
        clickBackground: "clickBackground_afd0a0",
        clickable: "clickable_afd0a0",
      };
    },
    932209: function (e, t, n) {
      e.exports = {
        dismissButton: "dismissButton_a9614f",
        dismissIcon: "dismissIcon_a9614f",
      };
    },
    706446: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_c58c1c",
        unlocked: "unlocked_c58c1c",
        lockExtras: "lockExtras_c58c1c",
        operation: "operation_c58c1c",
        resizeNorth: "resizeNorth_c58c1c handle_c58c1c",
        resizeSouth: "resizeSouth_c58c1c handle_c58c1c",
        resizeNSCursor: "resizeNSCursor_c58c1c",
        resizeWest: "resizeWest_c58c1c handle_c58c1c",
        resizeEast: "resizeEast_c58c1c handle_c58c1c",
        resizeEWCursor: "resizeEWCursor_c58c1c",
        resizeNorthWest: "resizeNorthWest_c58c1c handle_c58c1c",
        resizeNorthEast: "resizeNorthEast_c58c1c handle_c58c1c",
        resizeSouthWest: "resizeSouthWest_c58c1c handle_c58c1c",
        resizeSouthEast: "resizeSouthEast_c58c1c handle_c58c1c",
        resizeNWSECursor: "resizeNWSECursor_c58c1c",
        resizeNESWCursor: "resizeNESWCursor_c58c1c",
        extras: "extras_c58c1c",
        extrasBottomOriented: "extrasBottomOriented_c58c1c",
        extrasRightOriented: "extrasRightOriented_c58c1c",
      };
    },
    228680: function (e, t, n) {
      e.exports = {
        gridContainer: "gridContainer_dcc220",
        gridItem: "gridItem_dcc220",
        horizontal: "horizontal_dcc220",
        vertical: "vertical_dcc220",
      };
    },
    2847: function (e, t, n) {
      e.exports = {
        tile: "tile_d22ae3",
        streamTile: "streamTile_d22ae3",
        streamTileWrapper: "streamTileWrapper_d22ae3",
        controls: "controls_d22ae3",
        controlBackground: "controlBackground_d22ae3",
        controlsWithActiveStream: "controlsWithActiveStream_d22ae3",
        controlUser: "controlUser_d22ae3",
        controlUserContainer: "controlUserContainer_d22ae3",
        controlAction: "controlAction_d22ae3",
        controlActions: "controlActions_d22ae3",
        absoluteFill: "absoluteFill_d22ae3",
        streamPreview: "streamPreview_d22ae3",
        liveIndicator: "liveIndicator_d22ae3",
        watchActionContainer: "watchActionContainer_d22ae3",
        watchButton: "watchButton_d22ae3",
      };
    },
    666540: function (e, t, n) {
      e.exports = { goLiveGridContainer: "goLiveGridContainer_c324b1" };
    },
    163752: function (e, t, n) {
      e.exports = {
        buttonContainer: "buttonContainer_b1ba99",
        keybind: "keybind_b1ba99",
        button: "button_b1ba99",
      };
    },
    256403: function (e, t, n) {
      e.exports = { key: "key_da7116" };
    },
    167566: function (e, t, n) {
      e.exports = {
        videoDev: "videoDev_b99764",
        overlay: "overlay_b99764",
        overlayBackground: "overlayBackground_b99764",
        overlayActive: "overlayActive_b99764",
        overlayLocked: "overlayLocked_b99764",
        closeContainer: "closeContainer_b99764",
        invalidContainer: "invalidContainer_b99764",
        inactiveContainer: "inactiveContainer_b99764",
        layoutLocked: "layoutLocked_b99764",
        layoutUnlocked: "layoutUnlocked_b99764 layoutLocked_b99764",
      };
    },
    608631: function (e, t, n) {
      e.exports = {
        debugMode: "debugMode_f4091c",
        clickable: "clickable_f4091c",
      };
    },
    725775: function (e, t, n) {
      e.exports = {
        button: "button_a467e9",
        cutoutContainer: "cutoutContainer_a467e9",
        toggledCutoutContainer: "toggledCutoutContainer_a467e9",
        separatorDot: "separatorDot_a467e9",
        guildIconContainer: "guildIconContainer_a467e9",
        guildName: "guildName_a467e9",
        guildIcon: "guildIcon_a467e9",
        voiceChannelNameContainer: "voiceChannelNameContainer_a467e9",
        channelIcon: "channelIcon_a467e9",
        channelName: "channelName_a467e9",
      };
    },
    201636: function (e, t, n) {
      e.exports = {
        panelContainer: "panelContainer_d476d7",
        locked: "locked_d476d7",
        panelRow: "panelRow_d476d7",
        separator: "separator_d476d7",
      };
    },
    714902: function (e, t, n) {
      e.exports = { container: "container_c7fa60" };
    },
    827202: function (e, t, n) {
      e.exports = {
        videoList: "videoList_a6fa57",
        vertical: "vertical_a6fa57",
        tile: "tile_a6fa57",
      };
    },
    882110: function (e, t, n) {
      e.exports = {
        voiceUser: "voiceUser_cebb84",
        flipped: "flipped_cebb84",
        avatar: "avatar_cebb84",
        username: "username_cebb84",
        effect: "effect_cebb84",
        voiceIcons: "voiceIcons_cebb84",
        voiceIcon: "voiceIcon_cebb84",
        interactive: "interactive_cebb84",
        speaking: "speaking_cebb84",
      };
    },
    152397: function (e, t, n) {
      e.exports = {
        extrasContainer: "extrasContainer_b932b3",
        debug: "debug_b932b3",
        debugUnpinned: "debugUnpinned_b932b3",
        debugPinned: "debugPinned_b932b3",
      };
    },
    122087: function (e, t, n) {
      e.exports = {
        titleWrapper: "titleWrapper_e8dbc8 bgShade_e8dbc8",
        button: "button_e8dbc8 bgShade_e8dbc8",
        active: "active_e8dbc8",
      };
    },
    640784: function (e, t, n) {
      e.exports = { textArea: "textArea_daa88b" };
    },
    176463: function (e, t, n) {
      e.exports = {
        animationWrapper: "animationWrapper_eff2f7",
        clickZone: "clickZone_eff2f7",
        clickable: "clickable_eff2f7",
        overflowWrapper: "overflowWrapper_eff2f7",
        container: "container_eff2f7",
        iconAndDetails: "iconAndDetails_eff2f7",
        footer: "footer_eff2f7",
        details: "details_eff2f7",
        hint: "hint_eff2f7",
        dismissButton: "dismissButton_eff2f7",
        buttonContainer: "buttonContainer_eff2f7",
        button: "button_eff2f7",
        avatar: "avatar_eff2f7",
        icon: "icon_eff2f7",
      };
    },
    109020: function (e, t, n) {
      e.exports = { container: "container_a2d09c" };
    },
    802334: function (e, t, n) {
      e.exports = { container: "container_f19072" };
    },
    693215: function (e, t, n) {
      e.exports = {
        label: "label_eaa344",
        channelNameContainer: "channelNameContainer_eaa344",
        channelName: "channelName_eaa344",
        channelMenuSubContainer: "channelMenuSubContainer_eaa344",
        icon: "icon_eaa344",
        overflowCount: "overflowCount_eaa344",
      };
    },
  },
]);
//# sourceMappingURL=2d2d93bb51bb62648cd1.js.map
