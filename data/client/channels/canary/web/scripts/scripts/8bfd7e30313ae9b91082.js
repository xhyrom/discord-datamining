"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90296"],
  {
    667142: function (e, t, n) {
      n.d(t, {
        Df: function () {
          return u;
        },
        S_: function () {
          return d;
        },
        V5: function () {
          return a;
        },
        VX: function () {
          return l;
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
        o = (0, i.H)(() => r),
        l = 1e4,
        a = 2e4,
        s = 500,
        c = 1e3;
      function d(e) {
        o.setState({ timeToLiveMs: e });
      }
      function u(e) {
        o.setState({ reappearTimeMs: e });
      }
      t.ZP = o;
    },
    926086: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(120356),
        l = n.n(o),
        a = n(348327),
        s = n.n(a),
        c = n(642128),
        d = n(481060),
        u = n(667142),
        h = n(333031),
        m = n(70491);
      let p = { mass: 1, tension: 600, friction: 60, clamp: !0 };
      function x(e) {
        let { locked: t, pinned: n } = e,
          [o, a] = r.useState(0),
          [x, f] = r.useState(0),
          [v, g] = r.useState(0),
          C = r.useRef(0),
          [Z, _] = r.useState(0),
          { timeToLiveMs: b, reappearTimeMs: j } = u.ZP.useState(
            (e) => ({
              timeToLiveMs: e.timeToLiveMs,
              reappearTimeMs: e.reappearTimeMs,
            }),
            s(),
          ),
          I = { timeToLiveMs: b, reappearTimeMs: j },
          E = r.useRef(I);
        r.useEffect(() => void (E.current = I)),
          r.useEffect(
            () => (
              (C.current = setInterval(() => {
                let e = Date.now();
                f(e),
                  g((t) => {
                    if (0 === t) return e;
                    let n = e - t,
                      i = E.current.timeToLiveMs,
                      r = i + E.current.reappearTimeMs;
                    return n > i ? t + r : t;
                  });
              }, 100)),
              () => {
                clearInterval(C.current);
              }
            ),
            [],
          );
        let k = () => {
            a(Date.now()), _((e) => e + 1);
          },
          N = o > 0 && x - o < 1e3,
          w = (0, d.useTransition)(v > 0 && v < x && x - v < b, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: p,
          });
        return t && !n
          ? null
          : (0, i.jsx)(i.Fragment, {
              children: w(
                (e, t) =>
                  t &&
                  (0, i.jsx)(c.animated.div, {
                    style: e,
                    className: m.clickZoneDebugContainer,
                    children: (0, i.jsx)(h.Z, {
                      className: l()(m.clickZone, N && m.clickBackground),
                      children: (0, i.jsx)(d.Clickable, {
                        onClick: k,
                        className: m.clickable,
                        children: (0, i.jsxs)(d.Text, {
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
    804570: function (e, t, n) {
      n.d(t, {
        E: function () {
          return c;
        },
      });
      var i = n(200651),
        r = n(192379),
        o = n(120356),
        l = n.n(o),
        a = n(481060),
        s = n(892196);
      let c = r.memo(function (e) {
        let { emptyText: t, icon: n, absolute: r = !1 } = e;
        return (0, i.jsx)("div", {
          className: l()(s.emptyWidgetContainer, r && s.absolute),
          children: (0, i.jsx)(a.Tooltip, {
            text: t,
            children: (e) =>
              (0, i.jsx)("div", {
                ...e,
                children: (0, i.jsx)(n, {
                  size: "md",
                  color: a.tokens.colors.WHITE,
                  className: s.emptyWidgetIcon,
                }),
              }),
          }),
        });
      });
    },
    350663: function (e, t, n) {
      n.d(t, {
        z: function () {
          return m;
        },
      });
      var i = n(200651),
        r = n(192379),
        o = n(120356),
        l = n.n(o),
        a = n(642128),
        s = n(481060),
        c = n(110924),
        d = n(752802),
        u = n(340101),
        h = n(228680);
      let m = 8,
        p = (e) => {
          let {
            participant: t,
            width: n,
            locked: r,
            widgetId: o,
            pinned: l,
          } = e;
          return (0, i.jsx)("div", {
            className: h.tileContainer,
            children: (0, i.jsx)(
              d.Z,
              { participant: t, width: n, locked: r, widgetId: o, pinned: l },
              t.user.id,
            ),
          });
        },
        x = { mass: 1, tension: 250, friction: 18, clamp: !0 };
      t.Z = r.memo(function (e) {
        let {
            widgetId: t,
            tileWidth: n,
            layout: r,
            locked: o,
            streamParticipants: d,
            participantsVersion: f,
            pinned: v,
          } = e,
          g = (9 / 16) * n,
          C = d.map((e) => ({
            participant: e,
            key: e.user.id,
            width: n,
            locked: o,
            widgetId: t,
            height: g,
            pinned: v,
          })),
          Z = (0, c.Z)(n),
          _ = r === u.C5.VERTICAL,
          b = 0,
          j = 0,
          I = (0, s.useTransition)(
            _
              ? C.map((e, t) => ({
                  ...e,
                  y: (b += e.height + (t > 0 ? m : 0)) - e.height,
                  x: 0,
                }))
              : C.map((e, t) => ({
                  ...e,
                  x: (j += e.width + (t > 0 ? m : 0)) - e.width,
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
              config: x,
              trail: n !== Z ? 0 : 100,
            },
            n !== Z ? "animate-never" : "respect-motion-settings",
          );
        return (0, i.jsx)("div", {
          className: l()({
            [h.gridContainer]: !0,
            [h.vertical]: _,
            [h.horizontal]: !_,
          }),
          style: _ ? { height: b } : { width: j },
          children: I((e, t, r, o) =>
            (0, i.jsx)(a.animated.div, {
              className: h.gridItem,
              style: Object.assign({}, e, {
                width: n,
                height: g,
                zIndex: C.length - o,
              }),
              children: p(t),
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
          return d;
        },
        gI: function () {
          return u;
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
        o = n(972959),
        l = n(569545);
      let a = (0, o.H)(() => ({ streams: {} }));
      function s(e) {
        var t, n;
        let i = (0, l.V9)(e);
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
      function d(e, t) {
        let n = (0, l.V9)(e);
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
      function u(e, t) {
        let n = (0, l.V9)(e);
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
        let n = (0, l.V9)(e);
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
        o = n(120356),
        l = n.n(o),
        a = n(399606),
        s = n(46973),
        c = n(481060),
        d = n(846027),
        u = n(239091),
        h = n(765250),
        m = n(872810),
        p = n(40851),
        x = n(414910),
        f = n(194082),
        v = n(979264),
        g = n(871118),
        C = n(352978),
        Z = n(833519),
        _ = n(839662),
        b = n(199902),
        j = n(314897),
        I = n(131951),
        E = n(594174),
        k = n(5192),
        N = n(1226),
        w = n(981631),
        T = n(388032),
        y = n(2847);
      function S(e) {
        let { participant: t } = e,
          n = t.user.id,
          o = (0, a.e7)(
            [I.Z],
            () => {
              let e = (0, x.Z)(t.type);
              return I.Z.isLocalMute(t.user.id, e);
            },
            [t],
          ),
          l = (0, a.e7)([j.default], () => j.default.getId()),
          { hasVideo: u } = (0, _.Z)(t, l),
          h = o && u,
          m = r.useCallback(() => {
            d.Z.toggleLocalMute(n, s.Yn.STREAM);
          }, [n]);
        return (0, i.jsx)(c.Tooltip, {
          text: h ? T.intl.string(T.t.YqAjX1) : T.intl.string(T.t["w4m94+"]),
          children: (e) => {
            let { onClick: t, ...n } = e;
            return (0, i.jsx)(c.Clickable, {
              ...n,
              className: y.controlAction,
              onClick: (e) => {
                e.stopPropagation(), null == t || t(), m();
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
      function L(e) {
        let { hasActiveStream: t, participant: r, onEnablePin: o } = e,
          s = (0, p.bp)(),
          d = r.user,
          h = (0, a.e7)(
            [E.default],
            () => {
              var e;
              return null !== (e = E.default.getUser(d.id)) && void 0 !== e
                ? e
                : d;
            },
            [d],
          ),
          x = t ? T.intl.string(T.t.tLxK4u) : T.intl.string(T.t.E5RDnJ);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: l()(y.controlBackground, {
                [y.controlsWithActiveStream]: t,
              }),
            }),
            !t &&
              (0, i.jsx)("div", {
                className: y.watchActionContainer,
                children: (0, i.jsx)(c.Tooltip, {
                  text: x,
                  children: (e) =>
                    (0, i.jsxs)(c.Clickable, {
                      ...e,
                      className: y.watchButton,
                      onClick: () => {
                        var t;
                        null === (t = e.onClick) || void 0 === t || t.call(e),
                          (0, m.rn)(r.stream, {
                            forceMultiple: !0,
                            noFocus: !0,
                          }),
                          o();
                      },
                      children: [
                        (0, i.jsx)(c.Text, {
                          variant: "text-sm/semibold",
                          color: "always-white",
                          children: T.intl.string(T.t["I6JG4+"]),
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
              className: y.controls,
              children: [
                (0, i.jsx)("div", {
                  className: y.controlUser,
                  children: (0, i.jsxs)("div", {
                    className: y.controlUserContainer,
                    children: [
                      (0, i.jsx)(c.ScreenIcon, {
                        size: "xs",
                        color: c.tokens.colors.INTERACTIVE_ACTIVE,
                      }),
                      (0, i.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: k.ZP.getName(
                          r.stream.guildId,
                          r.stream.channelId,
                          d,
                        ),
                      }),
                      (0, i.jsx)(v.ZP, {
                        primaryGuild: h.primaryGuild,
                        userId: d.id,
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: y.controlActions,
                  children:
                    t &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(S, { participant: r }),
                        (0, i.jsx)(c.Tooltip, {
                          text: T.intl.string(T.t["3D5yo6"]),
                          children: (e) => {
                            let { onClick: t, ...o } = e;
                            return (0, i.jsx)(c.Clickable, {
                              ...o,
                              className: y.controlAction,
                              onClick: (e) => {
                                e.stopPropagation(),
                                  null == t || t(),
                                  (0, u.jW)(e, async () => {
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
      let A = new Set([w.jm8.ENDED, w.jm8.FAILED, w.jm8.PAUSED]),
        O = r.memo(function (e) {
          let {
              participant: t,
              width: n,
              locked: r,
              widgetId: o,
              pinned: s,
            } = e,
            c = (0, a.e7)(
              [b.Z],
              () => b.Z.getActiveStreamForUser(t.user.id, t.stream.guildId),
              [t.user.id, t.stream.guildId],
            ),
            d = null != c && A.has(c.state),
            u = null != c,
            m = (0, N.yA)(t.stream),
            p = (0, N.xN)(t.stream);
          return (!u && r) || d
            ? null
            : (0, i.jsxs)("div", {
                className: y.tile,
                children: [
                  u &&
                    !r &&
                    (0, i.jsx)(f.ZP, {
                      size: f.ZP.Sizes.SMALL,
                      className: y.liveIndicator,
                    }),
                  u
                    ? (0, i.jsx)("div", {
                        className: y.streamTile,
                        children: (0, i.jsx)("div", {
                          className: y.streamTile,
                          style: { transform: "scale(".concat(m, ")") },
                          children: (0, i.jsx)(Z.Z, {
                            participant: t,
                            width: n,
                            fit: null != p ? p : C.L.CONTAIN,
                            inPopout: !0,
                            focused: !r,
                            paused: !1,
                            selected: !1,
                            wrapperClassName: r ? y.streamTileWrapper : void 0,
                            inOverlayPopout: !0,
                          }),
                        }),
                      })
                    : (0, i.jsx)("div", {
                        className: y.streamPreview,
                        children: (0, i.jsx)(g.Z, {
                          noText: !0,
                          className: l()(y.absoluteFill),
                          stream: t.stream,
                        }),
                      }),
                  r
                    ? null
                    : (0, i.jsx)(L, {
                        participant: t,
                        hasActiveStream: u,
                        onEnablePin: () => {
                          !s && (0, h.xh)(o);
                        },
                      }),
                ],
              });
        });
    },
    761374: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return k;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(442837),
        l = n(481060),
        a = n(765250),
        s = n(13245),
        c = n(393238),
        d = n(493773),
        u = n(358221),
        h = n(569545),
        m = n(199902),
        p = n(314897),
        x = n(592125),
        f = n(355863),
        v = n(944486),
        g = n(804570),
        C = n(350663),
        Z = n(610394),
        _ = n(340101),
        b = n(388032),
        j = n(666540);
      let I = [];
      function E(e, t, n, i) {
        let r = (i - 1) * C.z;
        return e === _.C5.HORIZONTAL
          ? Math.min(Math.max((t - r) / i, 256), Math.max((16 * n) / 9, 256))
          : Math.min(Math.max(t, 256), Math.max((((n - r) / i) * 16) / 9, 256));
      }
      function k(e) {
        var t;
        let {
            id: n,
            size: k,
            locked: N,
            padding: w,
            borderWidth: T,
            opacity: y,
            horizontal: S,
            pinned: L,
          } = e,
          A = 2 * w + 2 * T;
        let { width: O, height: P } = {
            width: "number" == typeof (t = k).width ? t.width : 256,
            height: "number" == typeof t.height ? t.height : 144,
          },
          M = (0, o.e7)([v.Z], () => v.Z.getVoiceChannelId()),
          { width: V, height: R, ref: W } = (0, c.Z)(),
          D = (0, o.e7)(
            [f.Z],
            () => {
              var e;
              let t = f.Z.getWidget(n);
              return (
                !!(0, _.ZL)(t) &&
                (null === (e = t.meta.showAllStreams) || void 0 === e || e)
              );
            },
            [n],
          ),
          z = (0, o.e7)([x.Z], () => x.Z.getChannel(M)),
          F = (0, o.e7)([p.default], () => p.default.getId()),
          { participantsVersion: G, streamParticipants: B } = (0, o.cj)(
            [m.Z, u.Z],
            () => {
              if (null == M)
                return { streamParticipants: I, participantsVersion: -1 };
              let e = new Set(
                  m.Z.getAllActiveStreamsForChannel(M).map((e) => (0, h.V9)(e)),
                ),
                t = (t) => e.has((0, h.V9)(t.stream)),
                n = u.Z.getStreamParticipants(M).filter(
                  (t) => t.user.id !== F && (!!D || e.has((0, h.V9)(t.stream))),
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
                  participantsVersion: u.Z.getParticipantsVersion(M),
                }
              );
            },
            [M, F, D],
          ),
          U = B.length,
          Y = null == z || 0 === U,
          { tileWidth: H, layout: X } = (function (e, t, n, i, o) {
            let l = (function (e, t, n, i) {
                let r = E(_.C5.HORIZONTAL, e, t, n),
                  o = E(_.C5.VERTICAL, e, t, n);
                switch (i) {
                  case _.C5.VERTICAL:
                    return o;
                  case _.C5.HORIZONTAL:
                    return r;
                }
                let l = ((9 * o) / 16 + C.z) * n - C.z;
                return e > (16 * t) / 9
                  ? r
                  : l <= t
                    ? o
                    : (9 * r) / 16 <= t
                      ? r
                      : o;
              })(n, i, t, o),
              a = E(_.C5.VERTICAL, n, i, t),
              s = null != o ? o : l === a ? _.C5.VERTICAL : _.C5.HORIZONTAL,
              [c, d] = r.useState(l);
            return (
              r.useEffect(() => {
                !e && d(l);
              }, [e, l]),
              { layout: s, tileWidth: c }
            );
          })(
            !1,
            U,
            null != V ? V : O - A,
            null != R ? R : P - A,
            S ? _.C5.HORIZONTAL : _.C5.VERTICAL,
          ),
          K = {
            id: n,
            width: O,
            height: P,
            sizeOffset: A,
            layout: X,
            padding: w,
            participants: B.length,
          };
        return (!(function (e) {
          let {
              id: t,
              streamParticipants: n,
              layout: i,
              widgetLayoutSpecs: o,
            } = e,
            l = r.useRef(o);
          r.useEffect(() => void (l.current = o)),
            r.useEffect(() => {
              let {
                id: e,
                width: t,
                height: i,
                sizeOffset: r,
                layout: o,
                padding: s,
              } = l.current;
              if (0 === n.length) {
                (256 !== t || 144 !== i) &&
                  (0, a.nv)({
                    widgetId: e,
                    size: { fixed: !0, width: 256, height: 144 },
                  });
                return;
              }
              if (o === _.C5.HORIZONTAL) {
                let t = (16 / 9) * (i - r);
                (0, a.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    height: i,
                    width: t * n.length + s * (n.length - 1) + r,
                  },
                });
              } else {
                let i = (9 / 16) * (t - r);
                (0, a.nv)({
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
              if (l.current.participants <= 1) return;
              let {
                id: e,
                width: t,
                height: n,
                sizeOffset: r,
                padding: o,
                participants: s,
              } = l.current;
              if (i === _.C5.HORIZONTAL) {
                let n = t - r;
                (0, a.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    width: n * s + o * (s - 1) + r,
                    height: (9 / 16) * n + r,
                  },
                });
              } else {
                let t = n - r;
                (0, a.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    width: (16 / 9) * t + r,
                    height: t * s + o * (s - 1) + r,
                  },
                });
              }
            }, [i]),
            r.useEffect(
              () => () => {
                (0, a.nv)({
                  widgetId: t,
                  size: { fixed: !0, width: 256, height: 144 },
                });
              },
              [t],
            );
        })({ id: n, streamParticipants: B, layout: X, widgetLayoutSpecs: K }),
        r.useEffect(() => {
          s.Z.setGpuBoostRequested(Z.zS.OVERLAY_VIDEO_STREAM_RENDERING, !Y);
        }, [Y]),
        (0, d.Z)(() => () => {
          s.Z.setGpuBoostRequested(Z.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
        }),
        Y && N)
          ? null
          : Y && !N
            ? N
              ? null
              : (0, i.jsx)(g.E, {
                  emptyText: b.intl.string(b.t["T6+rX1"]),
                  icon: l.ScreenArrowIcon,
                  absolute: !0,
                })
            : (0, i.jsx)("div", {
                className: j.goLiveGridContainer,
                style: { opacity: y },
                ref: W,
                children: (0, i.jsx)(C.Z, {
                  widgetId: n,
                  tileWidth: H,
                  locked: N,
                  layout: X,
                  streamParticipants: B,
                  participantsVersion: G,
                  pinned: L,
                }),
              });
      }
    },
    554370: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return el;
        },
      }),
        n(653041),
        n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(120356),
        l = n.n(o),
        a = n(442837),
        s = n(952265),
        c = n(481060),
        d = n(239091),
        u = n(13245),
        h = n(615287),
        m = n(100527),
        p = n(906732),
        x = n(146282),
        f = n(70097),
        v = n(567409),
        g = n(74299),
        C = n(199902),
        Z = n(592125),
        _ = n(430824),
        b = n(131951),
        j = n(944486),
        I = n(574254),
        E = n(556296),
        k = n(808506),
        N = n(237997),
        w = n(451478),
        T = n(585483),
        y = n(358085),
        S = n(13140),
        L = n(145597),
        A = n(830917),
        O = n(86071),
        P = n(681603),
        M = n(915614),
        V = n(690336),
        R = n(333031),
        W = n(371651),
        D = n(388627),
        z = n(319414),
        F = n(561064),
        G = n(987650),
        B = n(501787),
        U = n(981631),
        Y = n(206583),
        H = n(388032),
        X = n(167566);
      let K = !y.isPlatformEmbedded && !1,
        Q = K
          ? (0, i.jsx)(f.Z, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: X.videoDev,
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
        (0, d.jW)(e, async () => {
          let { default: e } = await n.e("17610").then(n.bind(n, 385620));
          return (t) =>
            (0, i.jsx)(e, {
              ...t,
              layoutId: B.OVERLAY_V3_LAYOUT_ID,
              version: 1,
            });
        });
      }
      let ee = r.memo(function (e) {
          let { keybind: t, onClick: n, locked: r } = e;
          return (0, i.jsx)(c.Clickable, {
            className: l()(X.overlayBackground, {
              [X.overlayActive]: !r,
              [X.overlayLocked]: r,
            }),
            onMouseDown: (e) => {
              let { currentTarget: t, target: i, button: r } = e;
              r === U.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: $,
            children: r
              ? null
              : (0, i.jsx)(R.Z, {
                  className: X.closeContainer,
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
            ? (0, i.jsx)(R.Z, {
                className: X.closeContainer,
                children: (0, i.jsx)(M.Z, {
                  onClick: () => u.Z.setInputLocked(!1, (0, L.QF)()),
                  IconComponent: c.LockUnlockedIcon,
                }),
              })
            : null;
        });
      function en() {
        if (null != I.Z.getContextMenu()) {
          (0, d.Zy)();
          return;
        }
        u.Z.setInputLocked(!0, (0, L.QF)());
      }
      function ei() {
        u.Z.setFocusedPID(L.Js);
      }
      function er() {
        u.Z.setFocusedPID(null);
      }
      function eo(e) {
        let t = N.Z.isLocked((0, L.QF)());
        "alt" === e.key.toLowerCase() &&
          !t &&
          ("keyup" === e.type.toLowerCase()
            ? T.S.dispatch(U.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() &&
              T.S.dispatch(U.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
      }
      function el(e) {
        var t, n;
        let { isEmbeddedActivity: o } = e,
          d = (0, F.Z)(),
          {
            locked: f,
            focused: I,
            incompatibleApp: T,
            hasValidResolution: y,
            hasZeroSizeDimension: M,
            keybind: R,
          } = (0, a.cj)([N.Z, w.Z, E.Z], () => {
            let e = w.Z.windowSize((0, A.ZY)(d)),
              t = E.Z.getOverlayKeybind();
            return {
              locked: N.Z.isLocked((0, L.QF)()),
              focused: N.Z.isFocused((0, L.QF)()),
              incompatibleApp: N.Z.incompatibleApp,
              hasValidResolution: (0, L.Te)(e),
              hasZeroSizeDimension: 0 === e.height || 0 === e.width,
              keybind: null != t ? (0, S.BB)(t.shortcut, !0) : "???",
            };
          }),
          { analyticsLocations: B } = (0, p.ZP)(m.Z.OVERLAY);
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
              u.Z.overlayReady((0, L.QF)()),
                d.addEventListener("keydown", eo),
                d.addEventListener("keyup", eo),
                K &&
                  (d.document.hasFocus() && u.Z.setFocusedPID(L.Js),
                  d.addEventListener("focus", ei),
                  d.addEventListener("blur", er));
            },
            () => {
              d.removeEventListener("keydown", eo),
                d.removeEventListener("keyup", eo),
                K &&
                  (d.removeEventListener("focus", ei),
                  d.removeEventListener("blur", er));
            },
          ),
          !(function () {
            let e = r.useRef(!1),
              t = (0, D.pL)(),
              n = j.Z.getVoiceChannelId(),
              i = Z.Z.getChannel(n),
              o = null != i ? _.Z.getGuild(i.guild_id) : null,
              l = null != C.Z.getCurrentUserActiveStream(),
              s = null != n,
              c = (0, g.Z)(b.Z) && !l && null != t,
              d = s && null != o && null != n,
              m = (0, v.Ns)(null == t ? void 0 : t.id),
              p = (0, a.e7)(
                [x.Z],
                () => null != x.Z.getLastFeedFetchDate(Y.YN.GAME_PROFILE_FEED),
              );
            r.useEffect(() => {
              var i;
              if (!p || e.current) return;
              (e.current = !0),
                u.Z.track(U.rMx.OVERLAY_INITIALIZED, {
                  voice_widget_connected: s,
                  text_widget_connected: !1,
                  overlay_render_method: h.gl[h.gl.OutOfProcess],
                });
              let r =
                null !== (i = k.Z.getFocusedPID()) && void 0 !== i
                  ? i
                  : (0, L.QF)();
              if (W.Z.hasChangedRenderMode(r)) return;
              let l = [{ type: G.nc.WELCOME }];
              if (
                (c && d
                  ? l.push({
                      type: G.nc.GO_LIVE_VOICE,
                      game: t,
                      voiceChannelId: n,
                      voiceGuild: o,
                    })
                  : c && l.push({ type: G.nc.GO_LIVE_NON_VOICE, game: t }),
                m.length > 0)
              ) {
                let { enabled: e } = O.Z.getCurrentConfig(
                  { location: "Overlay" },
                  { autoTrackExposure: !0 },
                );
                e && l.push({ type: G.nc.CONTENT_INVENTORY, entries: m });
              }
              u.Z.overlayMounted(...l);
            }, [p, m, s, c, d, t, n, o]);
          })(),
          (t = f),
          (n = d),
          r.useEffect(() => {
            if (t) {
              if (
                ((0, s.Ay)(c.POPOUT_MODAL_CONTEXT),
                n.addEventListener("contextmenu", J, !1),
                null != q)
              ) {
                let e = Date.now() - q;
                u.Z.track(U.rMx.OVERLAY_LOCKED, { unlocked_duration: e }),
                  (q = null);
              }
              return () => {
                n.removeEventListener("contextmenu", J, !1);
              };
            }
            n.removeEventListener("contextmenu", J, !1),
              null == q &&
                ((q = Date.now()), u.Z.track(U.rMx.OVERLAY_UNLOCKED));
          }, [t, n]),
          (0, i.jsx)(p.Gt, {
            value: B,
            children: (0, i.jsx)(c.RedesignIconContextProvider, {
              children:
                M || T
                  ? null
                  : (0, i.jsx)(c.ThemeProvider, {
                      theme: U.BRd.DARK,
                      children: (e) =>
                        (0, i.jsxs)("div", {
                          className: l()(X.overlay, e),
                          children: [
                            !o && Q,
                            (0, i.jsx)(ee, {
                              locked: f,
                              keybind: R,
                              onClick: en,
                            }),
                            y
                              ? (0, i.jsx)(V.Z, {
                                  className: l()({
                                    [X.layoutLocked]: f,
                                    [X.layoutUnlocked]: !f,
                                  }),
                                })
                              : f
                                ? null
                                : (0, i.jsx)("div", {
                                    className: X.invalidContainer,
                                    children: (0, i.jsx)("div", {
                                      className: X.inactiveContainer,
                                      children: H.intl.format(H.t.ketnW1, L.FW),
                                    }),
                                  }),
                            (0, i.jsx)(z.Z, {}),
                            !o &&
                              K &&
                              (0, i.jsx)(et, { locked: f, focused: I }),
                            (0, i.jsx)(P.Z, {}),
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
        o = n(442837),
        l = n(481060),
        a = n(355863),
        s = n(451478),
        c = n(830917),
        d = n(388627),
        u = n(892127),
        h = n(84346),
        m = n(561064),
        p = n(501787);
      function x(e) {
        return e.widget.id;
      }
      function f(e, t, n, r) {
        return n === l.TransitionStates.YEETED
          ? null
          : (0, i.jsx)(u.Z, { ...t, transitionState: n, cleanUp: r }, e);
      }
      let v = [];
      t.Z = r.memo(function (e) {
        let { className: t } = e,
          n = (0, m.Z)(),
          u = (0, o.e7)([s.Z], () => s.Z.windowSize((0, c.ZY)(n))),
          g = (0, o.e7)(
            [a.Z],
            () => {
              let e = a.Z.getLayout(p.OVERLAY_V3_LAYOUT_ID);
              if (null == e) return v;
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
            d.HP,
          ),
          C = r.useCallback(
            (e) => (0, i.jsx)("div", { className: t, style: u, children: e }),
            [t, u],
          );
        return (0, i.jsx)(l.TransitionGroup, {
          items: g,
          renderItem: f,
          getItemKey: x,
          wrapChildren: C,
        });
      });
    },
    273816: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(120356),
        l = n.n(o),
        a = n(442837),
        s = n(481060),
        c = n(493773),
        d = n(178821),
        u = n(38618),
        h = n(333031),
        m = n(992813);
      function p(e) {
        let { locked: t, pinned: n, anchorLeft: o } = e,
          p = (0, a.e7)([u.Z], () => u.Z.getSocket());
        (0, d.nU)();
        let [x, f] = (0, d.m8)(p),
          {
            currentFPS: v,
            averageFrameTime: g,
            timeSinceLastDrop: C,
            onResetFrameData: Z,
            droppedFramesRef: _,
            renderedFrameCount: b,
            bufferFramecountRef: j,
            frameCheckerEffect: I,
          } = (0, d.d6)(!0, x, !0),
          [E, k, N] = (0, d.ZF)(p),
          [w, T] = (0, d.Y5)(E, I),
          y = performance.now() - f.current < d.MC,
          S = k(g, j.current);
        (0, c.Z)(
          () => (
            w(),
            () => {
              T();
            }
          ),
        );
        let L = r.useCallback(() => {
            Z(), N(), w();
          }, [Z, N, w]),
          [A, O] = r.useState(!0),
          [P, M] = r.useState(!0),
          [V, R] = r.useState(!0),
          [W, D] = r.useState(!0),
          [z, F] = r.useState(!0);
        return t && !n
          ? null
          : (0, i.jsxs)("div", {
              className: l()(m.panelGroup, !o && m.rightAligned),
              children: [
                (A || !t) &&
                  (0, i.jsxs)("div", {
                    className: m.measurement,
                    children: [
                      !t &&
                        (0, i.jsx)("div", {
                          className: m.measurementCheckbox,
                          children: (0, i.jsx)(s.Checkbox, {
                            size: 16,
                            value: A,
                            onChange: (e, t) => O(t),
                          }),
                        }),
                      (0, i.jsxs)(s.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        className: m.measurementText,
                        children: [
                          "FPS:",
                          " ",
                          (0, i.jsx)(s.Text, {
                            tag: "span",
                            variant: "code",
                            color:
                              v < 30
                                ? "text-danger"
                                : v < 45
                                  ? "text-warning"
                                  : "text-primary",
                            children: v.toFixed(2),
                          }),
                        ],
                      }),
                    ],
                  }),
                (P || !t) &&
                  (0, i.jsxs)("div", {
                    className: m.measurement,
                    children: [
                      !t &&
                        (0, i.jsx)("div", {
                          className: m.measurementCheckbox,
                          children: (0, i.jsx)(s.Checkbox, {
                            size: 16,
                            value: P,
                            onChange: (e, t) => M(t),
                          }),
                        }),
                      (0, i.jsxs)(s.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        className: m.measurementText,
                        children: [
                          "Frame Times:",
                          " ",
                          (0, i.jsxs)(s.Text, {
                            tag: "span",
                            variant: "code",
                            color:
                              g > 1.1 * d.tO ? "text-warning" : "text-primary",
                            children: [g.toFixed(2), "ms"],
                          }),
                        ],
                      }),
                    ],
                  }),
                (V || !t) &&
                  (0, i.jsxs)("div", {
                    className: m.measurement,
                    children: [
                      !t &&
                        (0, i.jsx)("div", {
                          className: m.measurementCheckbox,
                          children: (0, i.jsx)(s.Checkbox, {
                            size: 16,
                            value: V,
                            onChange: (e, t) => R(t),
                          }),
                        }),
                      (0, i.jsxs)(s.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        className: m.measurementText,
                        children: [
                          "Dropped Frames:",
                          " ",
                          (0, i.jsx)(s.Text, {
                            tag: "span",
                            variant: "code",
                            color:
                              C < 2
                                ? "text-danger"
                                : C < 5
                                  ? "text-warning"
                                  : "text-primary",
                            children: _.current,
                          }),
                          (0, i.jsxs)(s.Text, {
                            tag: "span",
                            variant: "code",
                            color: "text-secondary",
                            className: m.secondaryInfoText,
                            children: [
                              "(",
                              ((_.current / b.current) * 100).toFixed(3),
                              "%)",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                (W || !t) &&
                  (0, i.jsxs)("div", {
                    className: m.measurement,
                    children: [
                      !t &&
                        (0, i.jsx)("div", {
                          className: m.measurementCheckbox,
                          children: (0, i.jsx)(s.Checkbox, {
                            size: 16,
                            value: W,
                            onChange: (e, t) => D(t),
                          }),
                        }),
                      (0, i.jsxs)(s.Text, {
                        variant: "text-md/normal",
                        color: "text-secondary",
                        className: m.measurementText,
                        children: [
                          "Rendered Frames:",
                          " ",
                          (0, i.jsx)(s.Text, {
                            tag: "span",
                            variant: "code",
                            color: "text-primary",
                            children: b.current.toFixed(0),
                          }),
                        ],
                      }),
                    ],
                  }),
                (z || !t) &&
                  (0, i.jsxs)("div", {
                    className: m.measurement,
                    children: [
                      !t &&
                        (0, i.jsx)("div", {
                          className: m.measurementCheckbox,
                          children: (0, i.jsx)(s.Checkbox, {
                            size: 16,
                            value: z,
                            onChange: (e, t) => F(t),
                          }),
                        }),
                      (0, i.jsx)(s.Tooltip, {
                        position: "left",
                        text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                        children: (e) =>
                          (0, i.jsx)("div", {
                            ...e,
                            children: (0, i.jsxs)(s.Text, {
                              variant: "text-md/normal",
                              color: "text-secondary",
                              className: m.measurementText,
                              children: [
                                "Idle Frame Delta:",
                                " ",
                                (0, i.jsxs)(s.Text, {
                                  tag: "span",
                                  variant: "code",
                                  color: S > 1 ? "text-danger" : "text-primary",
                                  children: [S.toFixed(2), "ms"],
                                }),
                              ],
                            }),
                          }),
                      }),
                    ],
                  }),
                y &&
                  (0, i.jsx)(s.Tooltip, {
                    position: "left",
                    text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                    children: (e) =>
                      (0, i.jsx)("span", {
                        ...e,
                        children: (0, i.jsx)(s.Text, {
                          tag: "span",
                          variant: "code",
                          color: "text-danger",
                          children: "(Main App Backgrounded)",
                        }),
                      }),
                  }),
                !t &&
                  (0, i.jsx)("div", {
                    className: m.bottomPanelButton,
                    children: (0, i.jsx)(h.Z, {
                      children: (0, i.jsx)(s.Button, {
                        onClick: L,
                        children: "Reset Frame Data",
                      }),
                    }),
                  }),
              ],
            });
      }
    },
    293224: function (e, t, n) {
      n.d(t, {
        L: function () {
          return ed;
        },
        N3: function () {
          return er;
        },
        Ox: function () {
          return en;
        },
        SE: function () {
          return ei;
        },
        aG: function () {
          return el;
        },
        c_: function () {
          return ea;
        },
        sm: function () {
          return eo;
        },
      });
      var i = n(200651),
        r = n(192379),
        o = n(691324),
        l = n(442837),
        a = n(685072),
        s = n(400354),
        c = n(652844),
        d = n(864094),
        u = n(582019),
        h = n(75735),
        m = n(481060),
        p = n(846027),
        x = n(239091),
        f = n(287734),
        v = n(40851),
        g = n(571250),
        C = n(628581),
        Z = n(659580),
        _ = n(793865),
        b = n(55311),
        j = n(575175),
        I = n(933557),
        E = n(471445),
        k = n(44315),
        N = n(74299),
        w = n(803647),
        T = n(565138),
        y = n(917405),
        S = n(763296),
        L = n(603074),
        A = n(879815),
        O = n(189771),
        P = n(294629),
        M = n(67844),
        V = n(544384),
        R = n(892807),
        W = n(560688),
        D = n(871499),
        z = n(199902),
        F = n(314897),
        G = n(430824),
        B = n(131951),
        U = n(19780),
        Y = n(944486),
        H = n(594174),
        X = n(979651),
        K = n(388627),
        Q = n(810632),
        q = n(981631),
        J = n(388032),
        $ = n(725775);
      function ee(e) {
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
      function et(e) {
        let {
          isToggled: t,
          disabled: n,
          iconComponent: r,
          iconColor: o,
          tooltip: l,
          defaultColor: a = "primaryDark",
          highlightedColor: s = "white",
          popoutOpen: c,
          onClick: d,
          onPopoutClick: u,
          onMouseEnter: h,
          onMouseLeave: p,
          onContextMenu: x,
        } = e;
        return (0, i.jsx)(m.Tooltip, {
          text: l,
          "aria-label": !1,
          children: (e) => {
            let { onMouseEnter: l, onMouseLeave: m, ...f } = e;
            return (0, i.jsx)(D.d, {
              ...f,
              onClick: null != d ? d : () => {},
              color: t ? s : a,
              className: $.button,
              disabled: n,
              popoutOpen: c,
              onMouseEnter: (e) => {
                null == l || l(), null == h || h(e);
              },
              onMouseLeave: (e) => {
                null == m || m(), null == p || p(e);
              },
              ignoreColorForCaret: !c,
              iconComponent: r,
              iconColor: o,
              isActive: t,
              onContextMenu: x,
              onPopoutClick: u,
            });
          },
        });
      }
      function en(e) {
        let { voiceChannel: t, locked: n } = e,
          { suppress: l, selfMute: a, mute: s } = (0, P.Z)(t),
          d = a || s || l,
          u = (0, C.Z)(a, s, l, !1),
          {
            Component: h,
            play: p,
            events: x,
          } = (0, c.O)(d ? "unmute" : "mute");
        r.useEffect(() => () => p(), [p, d]);
        let f = ee(n);
        return (0, i.jsx)(m.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(Z.default, {
              onClose: f(t),
              renderInputDevices: !0,
              renderInputModes: !0,
            });
          },
          align: "center",
          position: "top",
          animation: m.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: r } = t;
            return (0, i.jsx)(et, {
              iconComponent: h,
              tooltip: u,
              onClick: () => (0, j.Z)(s, l, q.jXE.OVERLAY),
              onPopoutClick: n,
              popoutOpen: r,
              onContextMenu: n,
              iconColor: d ? (0, k.Lq)(o.I.RED_400) : void 0,
              onMouseEnter: () => {
                x.onMouseEnter();
              },
              onMouseLeave: () => {
                x.onMouseLeave();
              },
            });
          },
        });
      }
      function ei(e) {
        let { voiceChannel: t, locked: n } = e,
          { selfDeaf: o, deaf: l } = (0, A.Z)(t),
          a = o || l,
          {
            Component: c,
            play: d,
            events: { onMouseEnter: u, onMouseLeave: h },
          } = (0, s.l)(a ? "undeafen" : "deafen"),
          p = l ? m.HeadphonesDenyIcon : c;
        r.useEffect(() => () => d(), [a, d]);
        let x = () => {
            (0, b.Z)(l, q.jXE.OVERLAY);
          },
          f = ee(n);
        return (0, i.jsx)(m.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(Z.default, {
              onClose: f(t),
              renderOutputDevices: !0,
              renderOutputVolume: !0,
            });
          },
          align: "center",
          position: "top",
          animation: m.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: r } = t;
            return (0, i.jsx)(et, {
              iconComponent: p,
              tooltip: (0, g.Z)(o, l, !1),
              isToggled: a,
              onClick: x,
              onContextMenu: n,
              onMouseEnter: u,
              onMouseLeave: h,
              onPopoutClick: n,
              popoutOpen: r,
            });
          },
        });
      }
      function er(e) {
        var t;
        let { voiceChannel: n, locked: o } = e,
          a = (0, l.e7)([B.Z], () => B.Z.isVideoEnabled()),
          s = (0, l.e7)([B.Z], () => Object.values(B.Z.getVideoDevices())[0]),
          c =
            null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t,
          d = !1 === c,
          u = (0, O.Z)(n),
          x = (e) => {
            p.Z.setVideoEnabled(e);
          },
          f = () => {
            d ? x(!0) : (0, W.Z)();
          },
          v = c ? () => f() : () => x(!a),
          {
            Component: g,
            play: C,
            events: { onMouseEnter: Z, onMouseLeave: b },
          } = (0, h.o)(a ? "disable" : "enable"),
          j =
            null != n
              ? (0, M.X)({
                  enabled: a,
                  cameraUnavailable: c,
                  hasPermission: u,
                  channel: n,
                })
              : void 0;
        r.useEffect(() => () => C(), [a, C]);
        let I = ee(o),
          E = null == n || !u;
        return (0, i.jsx)(m.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(_.Z, { onClose: I(t) });
          },
          align: "center",
          position: "top",
          animation: m.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: r } = t;
            return (0, i.jsx)(et, {
              iconComponent: g,
              tooltip: j,
              onClick: v,
              isToggled: a,
              onPopoutClick: n,
              popoutOpen: r,
              onContextMenu: n,
              onMouseEnter: Z,
              onMouseLeave: b,
              disabled: E,
            });
          },
        });
      }
      function eo(e) {
        let t,
          { voiceChannel: n, locked: o } = e,
          a = (0, l.e7)([H.default], () => H.default.getCurrentUser()),
          s = (0, O.Z)(n),
          c = (0, l.cj)([B.Z], () => (0, N.Z)(B.Z)),
          u = (0, l.e7)([z.Z], () => z.Z.getCurrentUserActiveStream()),
          h = (0, v.bp)(),
          p = (0, Q.B)(),
          x = null != u;
        if (x) t = J.intl.string(J.t.S5anIS);
        else if (null != n) {
          let e = (0, K.pL)();
          t = s
            ? null != e
              ? J.intl.format(J.t.AB5gT0, { game: e.name })
              : J.intl.string(J.t.FeUKeH)
            : J.intl.string(J.t.uQn9Bw);
        }
        let f = () => {
            if (x) return (0, w.Z)(u, !1);
            p();
          },
          {
            Component: g,
            events: { onMouseEnter: C, onMouseLeave: Z },
            play: _,
          } = (0, d.P)(x ? "disable" : "enable");
        r.useEffect(() => () => _(), [x, _]);
        let b = ee(o);
        return (0, i.jsx)(m.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != n
              ? (0, i.jsx)(V.Z, {
                  channel: n,
                  currentUser: a,
                  activeStreams: null != u ? [u] : [],
                  handleGoLive: p,
                  onClose: b(t),
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
              { isShown: o } = n;
            return (0, i.jsx)(et, {
              iconComponent: g,
              tooltip: t,
              isToggled: x,
              onClick: f,
              onPopoutClick: null != u ? r : void 0,
              popoutOpen: o,
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
        let { voiceChannel: r, locked: o } = e,
          a =
            null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t
              ? t
              : null,
          { mute: s, suppress: c } = (0, P.Z)(r),
          d = (0, l.e7)([B.Z], () => B.Z.isDeaf()),
          h = null == r || s || c || d;
        function p(e) {
          null != a &&
            (0, x.jW)(e, async () => {
              let { default: e } = await n.e("56049").then(n.bind(n, 338991));
              return (t) => (0, i.jsx)(e, { guildId: a, ...t });
            });
        }
        let {
            Component: f,
            events: { onClick: v, onMouseEnter: g, onMouseLeave: C },
          } = (0, u.j)(),
          Z = ee(o),
          _ = (0, l.e7)(
            [S.Z, F.default],
            () => S.Z.isUserPlayingSounds(F.default.getId()),
            [],
          );
        return (0, i.jsx)(m.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return h || null == r
              ? (0, i.jsx)(i.Fragment, {})
              : (0, i.jsx)(L.Z, {
                  guildId: a,
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
            return (0, i.jsx)(et, {
              iconComponent: f,
              tooltip: (function () {
                if (s) return J.intl.string(J.t["Ox4/zc"]);
                if (c) return J.intl.string(J.t["+YBKYG"]);
                if (d) return J.intl.string(J.t.X1lQlp);
              })(),
              onClick: (e) => {
                v(), n(e);
              },
              highlightedColor: _ ? "green" : "white",
              defaultColor: _ ? "green" : "primaryDark",
              onContextMenu: p,
              onMouseEnter: g,
              onMouseLeave: C,
              isToggled: r,
              popoutOpen: r,
              disabled: h,
            });
          },
        });
      }
      function ea(e) {
        let { voiceChannel: t, locked: n } = e,
          r = (0, l.e7)(
            [Y.Z],
            () => Y.Z.getVoiceChannelId() === (null == t ? void 0 : t.id),
          ),
          o = () => {
            r && f.default.disconnect();
          },
          s = (e) => {
            f.default.selectVoiceChannel(e.id);
          },
          {
            Component: c,
            events: { onMouseEnter: d, onMouseLeave: u },
          } = (0, a.K)(),
          h = ee(n),
          p = r ? c : m.PhoneCallIcon;
        return (0, i.jsx)(m.Popout, {
          renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(R.Z, {
              currentVoiceChannel: t,
              onClose: h(n),
              onSelect: s,
            });
          },
          align: "center",
          position: "top",
          animation: m.Popout.Animation.FADE,
          children: (e, n) => {
            let { onClick: l } = e,
              { isShown: a } = n;
            return (0, i.jsx)(et, {
              iconComponent: p,
              tooltip:
                null != t
                  ? J.intl.string(J.t["6vrfgo"])
                  : J.intl.string(J.t.S0W8Z2),
              onClick: r ? o : l,
              defaultColor: r ? "red" : "primaryDark",
              onMouseEnter: d,
              onMouseLeave: u,
              onContextMenu: l,
              isToggled: a,
              onPopoutClick: r ? l : void 0,
              popoutOpen: a,
            });
          },
        });
      }
      function es(e) {
        let { voiceChannel: t } = e,
          n = (0, l.e7)([G.Z], () => G.Z.getGuild(t.getGuildId()), [t]);
        switch (!0) {
          case t.isGroupDM() || t.isDM():
          case t.isDM():
            return null;
          case null != n:
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", { className: $.separatorDot }),
                (0, i.jsxs)("div", {
                  className: $.guildIconContainer,
                  children: [
                    (0, i.jsx)(T.Z, {
                      guild: n,
                      size: T.Z.Sizes.SMOL,
                      className: $.guildIcon,
                    }),
                    (0, i.jsx)(m.Text, {
                      tag: "div",
                      variant: "text-xs/semibold",
                      color: "text-primary",
                      className: $.guildName,
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
      function ec(e) {
        let { voiceChannel: t } = e,
          n = (0, E.KS)(t),
          r = (0, I.ZP)(t);
        return (0, i.jsxs)("div", {
          className: $.voiceChannelNameContainer,
          children: [
            null != n &&
              (0, i.jsx)(m.Text, {
                tag: "div",
                color: "text-muted",
                variant: "text-xs/normal",
                className: $.channelIcon,
                children: (0, i.jsx)(n, { size: "sm", color: "currentColor" }),
              }),
            null != r &&
              (0, i.jsx)(m.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                className: $.channelName,
                children: r,
              }),
          ],
        });
      }
      function ed(e) {
        let { voiceChannel: t } = e,
          n = null == t ? void 0 : t.id,
          r = (0, l.cj)([U.Z], () => ({
            channelId: U.Z.getChannelId(),
            quality: U.Z.getQuality(),
            state: U.Z.getState(),
            lastPing: U.Z.getLastPing(),
          })),
          o = null != n,
          a = (0, l.e7)([X.Z], () => null != n && X.Z.hasVideo(n), [n]);
        return (
          o &&
          null != t &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(y.Z, {
                ...r,
                hasVideo: a,
                connectionStatusTextVariant: "text-xs/semibold",
              }),
              (0, i.jsx)(es, { voiceChannel: t }),
              (0, i.jsx)("div", { className: $.separatorDot }),
              (0, i.jsx)(ec, { voiceChannel: t }),
            ],
          })
        );
      }
    },
    810632: function (e, t, n) {
      n.d(t, {
        B: function () {
          return T;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(512722),
        l = n.n(o),
        a = n(442837),
        s = n(481060),
        c = n(872810),
        d = n(594190),
        u = n(74299),
        h = n(451467),
        m = n(537413),
        p = n(989941),
        x = n(567126),
        f = n(143135),
        v = n(751571),
        g = n(361291),
        C = n(592125),
        Z = n(430824),
        _ = n(131951),
        b = n(944486),
        j = n(594174),
        I = n(449224),
        E = n(358085),
        k = n(981631),
        N = n(37113),
        w = n(761274);
      function T() {
        let e = (0, a.e7)([b.Z], () => b.Z.getVoiceChannelId()),
          t = (0, a.e7)([C.Z], () => C.Z.getChannel(e), [e]),
          o = (0, a.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return (
              l()(
                null != e,
                "useGoLiveImmidateAction: user cannot be undefined",
              ),
              e
            );
          }),
          T = null == t ? void 0 : t.getGuildId(),
          y = (0, a.e7)([_.Z], () => (0, u.Z)(_.Z));
        async function S() {
          var e;
          return null !==
            (e = (await (0, x._Q)()).sort(
              (e, t) => (0, x.ov)(t) - (0, x.ov)(e),
            )[0]) && void 0 !== e
            ? e
            : null;
        }
        let L = r.useCallback(async () => {
          var n, i;
          if (null == t || null == e) return !1;
          let r = await S(),
            l = (0, E.isWindows)() ? (0, p.Z)(d.ZP, I.Z) : null;
          if (null == l && null == r) return !1;
          let a =
              null != T
                ? null === (n = Z.Z.getGuild(T)) || void 0 === n
                  ? void 0
                  : n.premiumTier
                : null,
            {
              preset: s,
              resolution: u,
              fps: x,
              soundshareEnabled: C,
            } = g.Z.getState(),
            [b, j] =
              null !== (i = (0, m.Z)(s, o, a)) && void 0 !== i
                ? i
                : [N.LY.RESOLUTION_720, N.ws.FPS_30],
            k = s,
            y = u,
            L = x;
          k !== N.tI.PRESET_CUSTOM && ((y = b), (L = j)),
            !(0, h.Z)(k, y, L, o, a) && ((y = b), (L = j)),
            !(0, h.Z)(k, y, L, o, a, t) &&
              ((k = N.tI.PRESET_VIDEO),
              (y = N.LY.RESOLUTION_720),
              (L = N.ws.FPS_30)),
            (0, c.Rc)({
              preset: k,
              resolution: y,
              frameRate: L,
              soundshareEnabled: C,
            });
          let A = (0, f.Z)(l, r, d.ZP.getRunningGames()),
            O =
              !(0, E.isWindows)() ||
              null == A ||
              (null == r ? void 0 : r.id.startsWith("camera:")) ||
              null == A
                ? null
                : A.pid,
            P = null,
            M = null;
          return (
            null == O && null != r && ((P = r.id), (M = r.name)),
            !!(
              _.Z.getUseSystemScreensharePicker() ||
              (await v.Z.hasPermission(w.Eu.SCREEN_RECORDING, {
                showAuthorizationError: !1,
              }))
            ) &&
              ((0, c.WH)(T, e, {
                pid: O,
                sourceId: P,
                sourceName: M,
                audioSourceId: null,
                sound: C,
                previewDisabled: !0,
              }),
              !0)
          );
        }, [t, T, o, e]);
        return r.useCallback(async () => {
          if (!(!y || null == e || (await L())))
            (0, s.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("79477"),
                n.e("73554"),
              ]).then(n.bind(n, 60594));
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  selectSource: !1,
                  guildId: T,
                  analyticsLocation: k.Sbl.UNLOCKED_OVERLAY,
                });
            });
        }, [y, L, T, e]);
      }
    },
    2923: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        o = n.n(r),
        l = n(442837),
        a = n(592125),
        s = n(944486),
        c = n(293224),
        d = n(201636);
      function u(e) {
        let { locked: t } = e,
          n = (0, l.e7)([s.Z], () => s.Z.getVoiceChannelId()),
          r = (0, l.e7)([a.Z], () => a.Z.getChannel(n)),
          u = null != r;
        return (0, i.jsxs)("div", {
          className: o()({ [d.panelContainer]: !0, [d.locked]: t }),
          children: [
            (0, i.jsxs)("div", {
              className: d.panelRow,
              children: [
                (0, i.jsxs)("div", {
                  className: d.buttonSection,
                  children: [
                    (0, i.jsx)(c.Ox, { voiceChannel: r, locked: t }),
                    (0, i.jsx)(c.SE, { voiceChannel: r, locked: t }),
                    (0, i.jsx)(c.N3, { voiceChannel: r, locked: t }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: d.buttonSection,
                  children: [
                    (0, i.jsx)(c.sm, { voiceChannel: r, locked: t }),
                    (0, i.jsx)(c.aG, { voiceChannel: r, locked: t }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: d.buttonSection,
                  children: (0, i.jsx)(c.c_, { voiceChannel: r, locked: t }),
                }),
              ],
            }),
            u &&
              (0, i.jsx)("div", {
                className: d.panelRow,
                children: (0, i.jsx)(c.L, { voiceChannel: r, locked: t }),
              }),
          ],
        });
      }
    },
    586742: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return w;
        },
      });
      var i = n(200651),
        r = n(192379),
        o = n(120356),
        l = n.n(o),
        a = n(442837),
        s = n(481060),
        c = n(239091),
        d = n(765250),
        u = n(393238),
        h = n(358221),
        m = n(933557),
        p = n(352978),
        x = n(27457),
        f = n(796638),
        v = n(592125),
        g = n(131951),
        C = n(944486),
        Z = n(906037),
        _ = n(804570),
        b = n(501787),
        j = n(65154),
        I = n(388032),
        E = n(827202);
      function k(e) {
        var t;
        let { participant: n, channel: r, context: o } = e,
          l = null === (t = n.user) || void 0 === t ? void 0 : t.id;
        return (0, a.e7)(
          [g.Z],
          () =>
            null != n.user &&
            null != o &&
            null != r &&
            g.Z.isLocalVideoDisabled(l, o),
          [l, n.user, o, r],
        )
          ? null
          : (0, i.jsx)(x.ZP, { ...e });
      }
      function N(e) {
        let {
            context: t = j.Yn.DEFAULT,
            participants: o,
            locked: a,
            widget: d,
            channel: u,
            width: h,
            height: m,
            containerRef: x,
          } = e,
          f = (e, r) => {
            (0, c.jW)(r, async () => {
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
          v = o.length > 0 && null != t && null != u && (!a || d.pinned);
        r.useEffect(() => {
          (0, Z.m3)(
            {
              locked: a,
              pinned: d.pinned,
              widget: d.type,
              isPreviewingInGame: !1,
            },
            v,
          );
        }, [a, d, v]);
        let g = "boolean" != typeof d.meta.horizontal || d.meta.horizontal;
        return 0 !== o.length || a
          ? null == u
            ? null
            : (0, i.jsx)("div", {
                ref: x,
                className: l()({
                  [E.videoList]: !0,
                  [E.vertical]: !g,
                  [E.hidden]: !v && a,
                }),
                style: { opacity: d.opacity },
                children: o.map((e) =>
                  (0, i.jsx)(
                    k,
                    {
                      participant: e,
                      width: h,
                      className: E.tile,
                      containerStyle: { width: h, height: m },
                      fit: p.L.COVER,
                      channel: u,
                      inPopout: !0,
                      inCall: !0,
                      noBorder: !0,
                      onContextMenu: a ? void 0 : f,
                      forceIdle: a,
                      paused: !v,
                      inOverlayPopout: !0,
                      context: t,
                    },
                    e.id,
                  ),
                ),
              })
          : a
            ? null
            : (0, i.jsx)(_.E, {
                emptyText: I.intl.string(I.t["aTiM4+"]),
                icon: s.VideoIcon,
                absolute: !0,
              });
      }
      function w(e) {
        let t = (0, a.e7)([C.Z, v.Z], () =>
            v.Z.getChannel(C.Z.getVoiceChannelId()),
          ),
          n = (0, m.ZP)(t),
          o = (0, a.Wu)([h.Z], () =>
            null != t ? h.Z.getVideoParticipants(t.id) : [],
          ),
          l = (0, a.e7)([h.Z], () =>
            null != t ? h.Z.getParticipantsVersion(t.id) : 0,
          ),
          s =
            "boolean" != typeof e.widget.meta.horizontal ||
            e.widget.meta.horizontal,
          { width: c, height: p, ref: x } = (0, u.Z)(e.locked, e.widget.pinned),
          { participantTileWidth: g, visibleParticipants: Z } = (0, f.ZB)(
            s ? (null != c ? c : e.width) : null != p ? p : e.height,
            o,
            {
              tileWidth: b.OVERLAY_TILE_WIDTH,
              tileMinWidth: b.OVERLAY_TILE_MIN_WIDTH,
              tileMargin: b.OVERLAY_TILE_MARGIN,
              limit: 8,
              cropSelfVideo: !0,
              version: l,
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
              (0, d.nv)({
                widgetId: t,
                size: { fixed: !0, width: i, height: n },
              });
          }, [s]),
          (0, i.jsx)(N, {
            ...e,
            channel: t,
            title: null != n ? n : "",
            participants: Z,
            participantsVersion: l,
            width: s ? g : null != c ? c : e.width,
            height: s ? (null != p ? p : e.height) : g,
            containerRef: x,
          })
        );
      }
    },
    243487: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return G;
        },
      }),
        n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(120356),
        l = n.n(o),
        a = n(442837),
        s = n(481060),
        c = n(239091),
        d = n(765250),
        u = n(13245),
        h = n(872810),
        m = n(586902),
        p = n(835473),
        x = n(415635),
        f = n(933557),
        v = n(979264),
        g = n(701362),
        C = n(552282),
        Z = n(565799),
        _ = n(501655),
        b = n(597998),
        j = n(199902),
        I = n(314897),
        E = n(592125),
        k = n(355863),
        N = n(131951),
        w = n(944486),
        T = n(938475),
        y = n(237997),
        S = n(136015),
        L = n(51144),
        A = n(145597),
        O = n(804570),
        P = n(388627),
        M = n(981631),
        V = n(65154),
        R = n(388032),
        W = n(882110);
      function D(e) {
        let { avatarSize: t, userId: n, channelId: r, guildId: o } = e,
          l = 2 * t,
          a = -(t / 2);
        return (0, i.jsx)("div", {
          className: W.effect,
          style: { top: a, left: a, width: l, height: l },
          children: (0, i.jsx)(x.Z, {
            userId: n,
            channelId: r,
            guildId: o,
            containerDimensions: { width: l, height: l },
          }),
        });
      }
      function z(e) {
        let {
            channel: t,
            flipped: n = !1,
            locked: o = !1,
            user: c,
            nick: d,
            displayNameMode: u,
            displayUserMode: p,
            size: x = M.ipw.LARGE,
            onClick: f,
            onContextMenu: C,
            context: Z,
            guildId: _,
            voiceState: E,
            showStreamPreview: k,
            onShowStreamPreview: w,
            onWatchStream: T,
          } = e,
          y = (0, a.e7)([I.default], () => I.default.getId() === c.id, [c.id]),
          [S, L, A] = (0, a.Wu)(
            [N.Z],
            () =>
              y
                ? [
                    !N.Z.isSupported() ||
                      N.Z.isSelfMute() ||
                      N.Z.isSelfMutedTemporarily(),
                    N.Z.isSelfDeaf(),
                    !1,
                  ]
                : [
                    !N.Z.isSupported() || N.Z.isLocalMute(c.id),
                    !1,
                    N.Z.isLocalVideoDisabled(c.id),
                  ],
            [y, c.id],
          ),
          O = (0, a.e7)([j.Z], () => j.Z.getCurrentUserActiveStream()),
          P = (0, a.Wu)([j.Z], () => (null != O ? j.Z.getViewerIds(O) : [])),
          V = (0, m.Z)({ userId: c.id, context: Z }),
          R = (0, a.e7)([j.Z], () => j.Z.getStreamForUser(c.id, _)),
          z = null != R,
          F = r.useMemo(
            () => null != O && O.ownerId !== c.id && P.includes(c.id),
            [O, c.id, P],
          ),
          G = r.useCallback(() => w(null), [w]),
          B = r.useCallback(
            () =>
              (0, i.jsx)(g.Z, {
                user: c,
                channel: t,
                onWatch: () => {
                  (0, h.rn)(R, { forceMultiple: !0, noFocus: !0 }), G(), T();
                },
                onAction: T,
                previewIsOpen: k,
                location: M.Sbl.UNLOCKED_OVERLAY,
                hideTip: !0,
              }),
            [c, t, R, k, G, T],
          );
        if (p === M.OYC.ONLY_WHILE_SPEAKING && o && !V) return null;
        let { mute: U, suppress: Y, deaf: H } = E,
          X = x === M.ipw.LARGE ? 32 : 24;
        return (0, i.jsxs)(s.Clickable, {
          className: l()(W.voiceUser, {
            [W.speaking]: V,
            [W.interactive]: !o,
            [W.flipped]: n,
          }),
          onClick: o ? void 0 : (e) => (null == f ? void 0 : f(e, c)),
          onContextMenu: o ? void 0 : (e) => (null == C ? void 0 : C(e, c)),
          onMouseEnter: () => w(c.id),
          onMouseLeave: G,
          children: [
            (0, i.jsx)(s.Avatar, {
              className: W.avatar,
              size:
                x === M.ipw.LARGE
                  ? s.AvatarSizes.SIZE_32
                  : s.AvatarSizes.SIZE_24,
              src: c.getAvatarURL(_, X),
              "aria-hidden": !0,
            }),
            (0, i.jsx)(D, {
              avatarSize: X,
              userId: c.id,
              channelId: t.id,
              guildId: t.getGuildId(),
            }),
            o && (u === M.wC$.NEVER || (!V && u === M.wC$.ONLY_WHILE_SPEAKING))
              ? null
              : (0, i.jsx)(s.Popout, {
                  position: "right",
                  renderPopout: B,
                  shouldShow: k,
                  onRequestClose: G,
                  spacing: 0,
                  children: () =>
                    (0, i.jsxs)(s.Clickable, {
                      className: W.username,
                      children: [
                        (0, i.jsx)(s.Text, {
                          variant: "text-xs/medium",
                          color: "text-normal",
                          children: d,
                        }),
                        (0, i.jsx)(v.ZP, {
                          primaryGuild: c.primaryGuild,
                          userId: c.id,
                          contextGuildId: _,
                          className: W.clanTag,
                        }),
                        (0, i.jsx)(b.nm, {
                          guildId: _,
                          user: c,
                          video: E.selfVideo,
                          isStreaming: z,
                          className: W.voiceIcons,
                          iconClassName: W.voiceIcon,
                          isWatching: F,
                          localMute: S && !y,
                          localVideoDisabled: A,
                          mute: U || S,
                          deaf: H || L,
                          serverMute: U || Y,
                          serverDeaf: H,
                          disabled: !1,
                        }),
                      ],
                    }),
                }),
          ],
        });
      }
      function F(e) {
        let {
            id: t,
            context: o = V.Yn.DEFAULT,
            channel: l,
            sortedVoiceStates: a,
            displayNameMode: h,
            displayUserMode: m,
            locked: p,
            pinned: x,
            isPreviewingInGame: f,
            anchorLeft: v,
            avatarSizeMode: g,
          } = e,
          [C, Z] = r.useState(null),
          _ = (e, t) => {
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
                  mediaEngineContext: o,
                });
            });
          },
          b = a.length > 0 && null != o && null != l && (!p || x),
          j = r.useCallback(() => {
            var e, n;
            let i =
                null === (e = k.Z.getWidget(t)) || void 0 === e
                  ? void 0
                  : e.layoutId,
              r =
                null != i
                  ? null === (n = k.Z.getWidgetsForLayout(i)) || void 0 === n
                    ? void 0
                    : n.find((e) => e.type === M.Odu.GO_LIVE)
                  : null;
            null != r &&
              !r.pinned &&
              ((0, d.xh)(r.id),
              u.Z.track(M.rMx.OVERLAY_PIN_TOGGLED, {
                pinned: !0,
                guild_id: null == l ? void 0 : l.guild_id,
                channel_id: null == l ? void 0 : l.id,
                channel_type: null == l ? void 0 : l.type,
                widget_type: M.Odu.GO_LIVE,
              }));
          }, [l, t]);
        return b
          ? (0, i.jsx)(i.Fragment, {
              children: a.map((e) => {
                var t;
                let { user: n, voiceState: r, member: a } = e;
                return null == n
                  ? null
                  : (0, i.jsx)(
                      z,
                      {
                        guildId: null == l ? void 0 : l.guild_id,
                        user: n,
                        nick:
                          null !== (t = null == a ? void 0 : a.nick) &&
                          void 0 !== t
                            ? t
                            : L.ZP.getName(n),
                        flipped: !v,
                        voiceState: r,
                        displayNameMode: h,
                        displayUserMode: m,
                        size: g,
                        locked: p || f,
                        onContextMenu: _,
                        onClick: _,
                        context: o,
                        channel: l,
                        showStreamPreview: n.id === C,
                        onShowStreamPreview: Z,
                        onWatchStream: j,
                      },
                      n.id,
                    );
              }),
            })
          : p
            ? null
            : (0, i.jsx)(O.E, {
                emptyText: R.intl.string(R.t.hEh0l5),
                icon: s.VoiceNormalIcon,
              });
      }
      function G(e) {
        var t;
        let n = (0, a.e7)([w.Z, E.Z], () =>
            E.Z.getChannel(w.Z.getVoiceChannelId()),
          ),
          r = (0, f.ZP)(n),
          o = (function () {
            let [e] = (0, a.e7)(
              [T.ZP, Z.Z, w.Z, E.Z],
              () => {
                let e = E.Z.getChannel(w.Z.getVoiceChannelId());
                return null == e
                  ? [[], -1]
                  : e.isGuildStageVoice()
                    ? [
                        Z.Z.getMutableParticipants(e.id, _.pV.SPEAKER),
                        Z.Z.getParticipantsVersion(e.id),
                      ]
                    : [
                        T.ZP.getVoiceStatesForChannel(e),
                        T.ZP.getVoiceStateVersion(e.getGuildId()),
                      ];
              },
              [],
              S.Q,
            );
            return e;
          })(),
          l = (0, a.e7)([j.Z], () => j.Z.getStreamerActiveStreamMetadata()),
          s = (0, P.II)(),
          c = (0, p.q)(null == s ? void 0 : s.id),
          d = (0, a.cj)([j.Z, y.Z], () => {
            let e = j.Z.getCurrentUserActiveStream();
            return {
              displayUserMode: y.Z.getDisplayUserMode(),
              displayNameMode: y.Z.getDisplayNameMode(),
              avatarSizeMode: y.Z.getAvatarSizeMode(),
              streamApplication:
                (null == l ? void 0 : l.pid) === (0, A.QF)()
                  ? (0, C.Z)(s)
                  : null,
              stream: e,
            };
          });
        return (0, i.jsx)(F, {
          ...d,
          application: c,
          ...e,
          sortedVoiceStates: o,
          channel: n,
          title: null != r ? r : "",
          streamMetadata: l,
          streamApplication:
            null !== (t = d.streamApplication) && void 0 !== t
              ? t
              : { id: null, name: null == l ? void 0 : l.sourceName },
        });
      }
    },
    84346: function (e, t, n) {
      var i = n(200651),
        r = n(239091),
        o = n(603618),
        l = n(926086),
        a = n(353038),
        s = n(761374),
        c = n(340101),
        d = n(273816),
        u = n(2923),
        h = n(586742),
        m = n(243487),
        p = n(430561),
        x = n(134849),
        f = n(501787),
        v = n(981631),
        g = n(388032);
      let C = {
        [v.Odu.VIDEO]: {
          renderWidget(e) {
            let {
              widget: t,
              locked: n,
              size: r,
              padding: o,
              borderWidth: l,
            } = e;
            return (0, i.jsx)(h.Z, {
              id: t.id,
              locked: n,
              widget: t,
              height: "auto" === r.height ? 0 : r.height - 2 * o - 2 * l,
              width: "auto" === r.width ? 0 : r.width - 2 * o - 2 * l,
            });
          },
          renderTitle: () =>
            (0, i.jsx)(p.PI, { children: g.intl.string(g.t.UPvOiY) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(p.ls, {
                  onClick: (o) =>
                    (function (e, t, o) {
                      if (!!(0, c.js)(t))
                        (0, r.jW)(e, async () => {
                          let { default: e } = await n
                            .e("26775")
                            .then(n.bind(n, 740579));
                          return (
                            o(!0),
                            (n) =>
                              (0, i.jsx)(e, {
                                ...n,
                                widget: t,
                                onClose: () => o(!1),
                              })
                          );
                        });
                    })(o, e, t),
                }),
                (0, i.jsx)(p.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
          resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: r } = e;
            return (0, c.js)(t)
              ? "boolean" != typeof t.meta.horizontal || t.meta.horizontal
                ? {
                    width: Math.max(n.width, f.OVERLAY_TILE_WIDTH),
                    height: Math.min(
                      n.height,
                      2 * f.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * r,
                    ),
                  }
                : {
                    height: Math.max(n.height, f.OVERLAY_TILE_WIDTH),
                    width: Math.min(
                      n.width,
                      2 * f.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * r,
                    ),
                  }
              : n;
          },
        },
        [v.Odu.VOICE_V3]: {
          renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: r } = e;
            return (0, i.jsx)(m.Z, {
              anchorLeft: n,
              id: t.id,
              locked: r,
              pinned: t.pinned,
              widget: v.Odu.VOICE,
              isPreviewingInGame: !1,
            });
          },
          renderTitle: () =>
            (0, i.jsx)(p.PI, { children: g.intl.string(g.t.nFv3GR) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(p.ls, {
                  onClick: (e) => {
                    var o, l;
                    return (
                      (o = e),
                      (l = t),
                      void (0, r.jW)(o, async () => {
                        let { default: e } = await n
                          .e("32382")
                          .then(n.bind(n, 955280));
                        return (
                          l(!0),
                          (t) => (0, i.jsx)(e, { ...t, onClose: () => l(!1) })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(p.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [v.Odu.CLICK_ZONE_DEBUG]: {
          renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(l.Z, { id: t.id, locked: n, pinned: t.pinned });
          },
          renderTitle: () =>
            (0, i.jsx)(p.PI, { children: "Click Zone Tester" }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(p.ls, {
                  onClick: (e) => {
                    var o, l;
                    return (
                      (o = e),
                      (l = t),
                      void (0, r.jW)(o, async () => {
                        let { default: e } = await n
                          .e("38813")
                          .then(n.bind(n, 541501));
                        return (
                          l(!0),
                          (t) => (0, i.jsx)(e, { ...t, onClose: () => l(!1) })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(p.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [v.Odu.PERFORMANCE_DEBUG]: {
          renderWidget(e) {
            let { widget: t, locked: n, anchorLeft: r } = e;
            return (0, i.jsx)(d.Z, {
              id: t.id,
              anchorLeft: r,
              locked: n,
              pinned: t.pinned,
            });
          },
          renderTitle: () =>
            (0, i.jsx)(p.PI, { children: "Overlay Performance" }),
          renderButtons: (e) =>
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(p.RT, { id: e.id, pinned: e.pinned }),
            }),
        },
        [v.Odu.GO_LIVE]: {
          renderWidget(e) {
            var t;
            let { widget: n, locked: r, size: o, dragStart: l } = e;
            return (0, c.ZL)(n)
              ? (0, i.jsx)(s.Z, {
                  id: n.id,
                  locked: r,
                  pinned: n.pinned,
                  opacity: n.opacity,
                  size: o,
                  widget: v.Odu.GO_LIVE,
                  isPreviewingInGame: !1,
                  dragStart: l,
                  horizontal:
                    null !== (t = n.meta.horizontal) && void 0 !== t && t,
                  padding: 8,
                  borderWidth: 2,
                })
              : null;
          },
          renderTitle: () =>
            (0, i.jsx)(p.PI, { children: g.intl.string(g.t["386XRk"]) }),
          renderButtons(e, t) {
            var o;
            return (0, c.ZL)(e)
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(p.ls, {
                      onClick: (o) =>
                        (function (e, t, o) {
                          if (!!(0, c.ZL)(t))
                            (0, r.jW)(e, async () => {
                              let { default: e } = await n
                                .e("34684")
                                .then(n.bind(n, 68738));
                              return (
                                o(!0),
                                (n) =>
                                  (0, i.jsx)(e, {
                                    ...n,
                                    widget: t,
                                    onClose: () => o(!1),
                                  })
                              );
                            });
                        })(o, e, t),
                    }),
                    (0, i.jsx)(p.GY, {
                      widgetId: e.id,
                      showAllStreams:
                        null === (o = e.meta.showAllStreams) ||
                        void 0 === o ||
                        o,
                    }),
                    (0, i.jsx)(p.RT, { id: e.id, pinned: e.pinned }),
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
                padding: o,
                containerSpecs: l,
              } = e,
              s = 2 * r + 2 * o,
              c = i.width - s,
              d = i.height - s,
              u = c / d,
              h = d / c,
              m = (() => {
                switch (t) {
                  case a.B.RESIZE_NORTH:
                  case a.B.RESIZE_SOUTH:
                    return {
                      height: n.height,
                      width: Math.round((n.height - s) * u + s),
                    };
                  default:
                    return {
                      width: n.width,
                      height: Math.round((n.width - s) * h + s),
                    };
                }
              })();
            return (
              m.width > l.maxX &&
                ((m.width = l.maxX), (m.height = (l.maxX - s) * h + s)),
              m.height > l.maxY &&
                ((m.height = l.maxY), (m.width = (l.maxY - s) * u + s)),
              m
            );
          },
        },
        [v.Odu.QUICK_ACTIONS]: {
          renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(u.Z, { locked: t });
          },
        },
        [v.Odu.NOTIFICATIONS]: {
          renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(x.Z, { locked: t });
          },
          renderTitle: () =>
            (0, i.jsx)(p.PI, { children: g.intl.string(g.t.gnKWdX) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(p.ls, {
                  onClick: (e) => {
                    var o, l;
                    return (
                      (o = e),
                      (l = t),
                      void (0, r.jW)(o, async () => {
                        let { default: e } = await n
                          .e("94706")
                          .then(n.bind(n, 168133));
                        return (
                          l(!0),
                          (t) => (0, i.jsx)(e, { ...t, onClose: () => l(!1) })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(p.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [v.Odu.ACTIVITY]: {
          renderWidget: () => (0, i.jsx)(o.Z, {}),
          renderTitle: () =>
            (0, i.jsx)(p.PI, { children: g.intl.string(g.t["6gwSFR"]) }),
          renderButtons: () => null,
        },
      };
      t.Z = C;
    },
    430561: function (e, t, n) {
      n.d(t, {
        GY: function () {
          return m;
        },
        PI: function () {
          return u;
        },
        RT: function () {
          return p;
        },
        ls: function () {
          return h;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(120356),
        o = n.n(r),
        l = n(692547),
        a = n(481060),
        s = n(765250),
        c = n(388032),
        d = n(122087);
      function u(e) {
        let { children: t } = e;
        return (0, i.jsx)("div", {
          className: d.titleWrapper,
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
              className: d.button,
              onClick: t,
              children: (0, i.jsx)(a.SettingsIcon, {
                size: "xxs",
                color: l.Z.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
      function m(e) {
        let { widgetId: t, showAllStreams: n } = e,
          r = n ? c.intl.string(c.t.q2B3rq) : c.intl.string(c.t.JKGi6u),
          u = () => {
            (0, s.zG)(t, { showAllStreams: !n });
          };
        return (0, i.jsx)(a.Tooltip, {
          text: r,
          "aria-label": r,
          children: (e) =>
            (0, i.jsx)(a.Clickable, {
              ...e,
              className: o()(d.button, n && d.active),
              onClick: u,
              children: (0, i.jsx)(a.ScreenIcon, {
                size: "xxs",
                color: n ? l.Z.colors.BG_BRAND : l.Z.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
      function p(e) {
        let { id: t, pinned: n } = e,
          r = n ? c.intl.string(c.t.cSu80t) : c.intl.string(c.t.cM8Vnp);
        return (0, i.jsx)(a.Tooltip, {
          text: r,
          "aria-label": r,
          children: (e) =>
            (0, i.jsx)(a.Clickable, {
              ...e,
              className: o()(d.button, n && d.active),
              onClick: () => (0, s.xh)(t),
              children: (0, i.jsx)(a.PinUprightIcon, {
                size: "xxs",
                color: n ? l.Z.colors.BG_BRAND : l.Z.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
    },
    134849: function (e, t, n) {
      n(653041), n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(442837),
        l = n(481060),
        a = n(237997),
        s = n(804570),
        c = n(388627),
        d = n(561064),
        u = n(380736),
        h = n(693091),
        m = n(371467),
        p = n(981631),
        x = n(388032),
        f = n(109020);
      let v = [];
      function g(e) {
        return e.notification.id;
      }
      function C(e, t, n, r) {
        let { index: o, notification: l, locked: a } = t;
        return (0, i.jsx)(
          u.Z,
          {
            index: o,
            notification: l,
            locked: a,
            transitionState: n,
            cleanUp: r,
          },
          e,
        );
      }
      function Z(e) {
        return (0, i.jsx)("div", { className: f.container, children: e });
      }
      let _ = (e) => r.useState(() => new h.AS(e))[0];
      t.Z = r.memo(function (e) {
        let { locked: t } = e,
          n = (0, o.e7)(
            [a.Z, m.Z],
            () => {
              if (a.Z.getNotificationPositionMode() === p._vf.DISABLED)
                return v;
              let e = [],
                n = 0;
              for (let i of m.Z.getNotifications()) {
                if (n > 4) break;
                (!t || i.status !== p._1z.TIMED_OUT) &&
                  (e.push({ index: n, locked: t, notification: i }), n++);
              }
              return e;
            },
            [t],
            c.E6,
          ),
          u = _(t);
        return (r.useLayoutEffect(() => u.updateState(n, t)),
        r.useLayoutEffect(
          () => (u.initialize((0, d.i)()), () => u.cleanUp()),
          [u],
        ),
        0 !== n.length || t)
          ? (0, i.jsx)(h.S4.Provider, {
              value: u,
              children: (0, i.jsx)(l.TransitionGroup, {
                items: n,
                renderItem: C,
                getItemKey: g,
                wrapChildren: Z,
              }),
            })
          : t
            ? null
            : (0, i.jsx)(s.E, {
                emptyText: x.intl.string(x.t.O1Nbjo),
                icon: l.BellIcon,
                absolute: !0,
              });
      });
    },
    892807: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return w;
        },
      }),
        n(724458),
        n(653041),
        n(47120);
      var i = n(200651),
        r = n(192379),
        o = n(120356),
        l = n.n(o),
        a = n(442837),
        s = n(481060),
        c = n(410575),
        d = n(933557),
        u = n(471445),
        h = n(318374),
        m = n(46145),
        p = n(814443),
        x = n(592125),
        f = n(430824),
        v = n(496675),
        g = n(699516),
        C = n(594174),
        Z = n(979651),
        _ = n(823379),
        b = n(981631),
        j = n(388032),
        I = n(693215);
      function E(e) {
        let { channel: t, currentVoiceChannel: n } = e,
          r = (0, u.KS)(t),
          o = t.id === (null == n ? void 0 : n.id),
          a = o
            ? s.tokens.colors.TEXT_POSITIVE
            : s.tokens.colors.INTERACTIVE_NORMAL;
        return (0, i.jsxs)("div", {
          className: I.channelNameContainer,
          children: [
            null != r ? (0, i.jsx)(r, { color: a, size: "xs" }) : void 0,
            (0, i.jsx)(s.Text, {
              variant: "text-sm/semibold",
              className: l()(I.label, I.channelName),
              color: o ? "text-positive" : "text-normal",
              children: (0, d.F6)(t, C.default, g.Z),
            }),
          ],
        });
      }
      function k(e) {
        let { channel: t, currentVoiceChannel: n } = e,
          r = t.getGuildId(),
          o = (0, a.e7)([f.Z], () => f.Z.getGuild(r), [r]),
          l = t.id === (null == n ? void 0 : n.id);
        return null == o
          ? null
          : (0, i.jsx)("div", {
              className: I.channelMenuSubContainer,
              children: (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: l ? "text-positive" : void 0,
                children: o.name,
              }),
            });
      }
      function N(e) {
        let { channel: t } = e,
          n = (0, a.Wu)(
            [Z.Z, C.default, p.Z],
            () =>
              Object.values(Z.Z.getVoiceStatesForChannel(t.id))
                .map((e) => C.default.getUser(e.userId))
                .filter(_.lm)
                .sort((e, t) => {
                  var n, i, r, o;
                  return (
                    (null !==
                      (r =
                        null === (n = p.Z.getUserAffinity(t.id)) || void 0 === n
                          ? void 0
                          : n.affinity) && void 0 !== r
                      ? r
                      : 0) -
                    (null !==
                      (o =
                        null === (i = p.Z.getUserAffinity(e.id)) || void 0 === i
                          ? void 0
                          : i.affinity) && void 0 !== o
                      ? o
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
              overflowCountClassName: I.overflowCount,
              overflowCountVariant: "text-xxs/semibold",
              disableUserPopout: !0,
            });
      }
      function w(e) {
        let { currentVoiceChannel: t, onClose: n, onSelect: o } = e,
          l = (0, a.Wu)([g.Z, p.Z], () =>
            g.Z.getFriendIDs().sort((e, t) => {
              var n, i, r, o;
              return null == e && null == t
                ? 0
                : null == e
                  ? 1
                  : null == t
                    ? -1
                    : (null !==
                        (r =
                          null === (n = p.Z.getUserAffinity(t)) || void 0 === n
                            ? void 0
                            : n.affinity) && void 0 !== r
                        ? r
                        : 0) -
                      (null !==
                        (o =
                          null === (i = p.Z.getUserAffinity(e)) || void 0 === i
                            ? void 0
                            : i.affinity) && void 0 !== o
                        ? o
                        : 0);
            }),
          ),
          d = (0, a.Wu)(
            [C.default],
            () =>
              l.reduce((e, t) => {
                let n = C.default.getUser(t);
                return null != n && e.push(n), e;
              }, []),
            [l],
          ),
          u = (0, a.Wu)(
            [m.Z, Z.Z, x.Z, v.Z],
            () => {
              let e = new Set(
                  m.Z.getChannelHistory().reduce((e, t) => {
                    let n = x.Z.getChannel(t);
                    return (
                      null != n &&
                        v.Z.can(b.Plq.CONNECT, n) &&
                        e.length < 5 &&
                        e.push(t),
                      e
                    );
                  }, []),
                ),
                t = d
                  .map((e) => Z.Z.getDiscoverableVoiceStateForUser(e.id))
                  .reduce((t, n) => {
                    let i = null == n ? void 0 : n.channelId;
                    if (null == i) return t;
                    let r = x.Z.getChannel(i);
                    return (
                      null != r &&
                        v.Z.can(b.Plq.CONNECT, r) &&
                        !e.has(i) &&
                        t.size < 3 &&
                        t.add(i),
                      t
                    );
                  }, new Set());
              return [...Array.from(e), ...t]
                .map((e) => x.Z.getChannel(e))
                .filter(_.lm);
            },
            [d],
          ),
          h = r.useCallback(
            (e) => {
              o(e), n();
            },
            [o, n],
          );
        return (0, i.jsx)(c.Z, {
          section: b.jXE.CONTEXT_MENU,
          children: (0, i.jsx)(s.Menu, {
            onSelect: n,
            navId: "manage-streams",
            onClose: n,
            "aria-label": j.intl.string(j.t["+9QSnp"]),
            children: (0, i.jsx)(s.MenuGroup, {
              children: u.map((e) =>
                (0, i.jsx)(
                  s.MenuItem,
                  {
                    id: e.id,
                    label: (0, i.jsx)(E, {
                      channel: e,
                      currentVoiceChannel: t,
                    }),
                    subtext: (0, i.jsx)(k, {
                      channel: e,
                      currentVoiceChannel: t,
                    }),
                    icon: (0, i.jsx)("div", {
                      className: I.icon,
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
    719967: function (e, t, n) {
      e.exports = {
        panel: "panel_a8c982",
        panelGroup: "panelGroup_a8c982",
        bottomPanelButton: "bottomPanelButton_a8c982",
        topPanelToggle: "topPanelToggle_a8c982",
        secondaryInfoText: "secondaryInfoText_a8c982",
      };
    },
    941469: function (e, t, n) {
      e.exports = {
        panel: "panel_a6b188",
        headerBar: "headerBar_a6b188",
        headerTitle: "headerTitle_a6b188",
        inspectorWrapper: "inspectorWrapper_a6b188",
        tabBar: "tabBar_a6b188",
        tabItem: "tabItem_a6b188",
        selected: "selected_a6b188",
        overflowChevron: "overflowChevron_a6b188",
        tableContainer: "tableContainer_a6b188",
        table: "table_a6b188",
        tableHeader: "tableHeader_a6b188",
        tableRow: "tableRow_a6b188",
        selectedTableRow: "selectedTableRow_a6b188",
        properties: "properties_a6b188",
        propertyName: "propertyName_a6b188",
        toolbar: "toolbar_a6b188",
        toolbarGroup: "toolbarGroup_a6b188",
        toolbarButton: "toolbarButton_a6b188",
      };
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
    892196: function (e, t, n) {
      e.exports = {
        emptyWidgetContainer: "emptyWidgetContainer_f44cfe",
        absolute: "absolute_f44cfe",
        emptyWidgetIcon: "emptyWidgetIcon_f44cfe",
      };
    },
    228680: function (e, t, n) {
      e.exports = {
        gridContainer: "gridContainer_dcc220",
        gridItem: "gridItem_dcc220",
        horizontal: "horizontal_dcc220",
        vertical: "vertical_dcc220",
        tileContainer: "tileContainer_dcc220",
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
    992813: function (e, t, n) {
      e.exports = {
        panelGroup: "panelGroup_e14d53",
        rightAligned: "rightAligned_e14d53",
        measurement: "measurement_e14d53",
        measurementText: "measurementText_e14d53",
        measurementCheckbox: "measurementCheckbox_e14d53",
        bottomPanelButton: "bottomPanelButton_e14d53",
        secondaryInfoText: "secondaryInfoText_e14d53",
      };
    },
    725775: function (e, t, n) {
      e.exports = {
        button: "button_a467e9",
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
        buttonSection: "buttonSection_d476d7",
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
        hidden: "hidden_a6fa57",
      };
    },
    882110: function (e, t, n) {
      e.exports = {
        voiceUser: "voiceUser_cebb84",
        flipped: "flipped_cebb84",
        avatar: "avatar_cebb84",
        username: "username_cebb84",
        effect: "effect_cebb84",
        clanTag: "clanTag_cebb84",
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
//# sourceMappingURL=8bfd7e30313ae9b91082.js.map
