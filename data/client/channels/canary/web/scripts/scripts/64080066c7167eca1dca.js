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
          return r;
        },
        ih: function () {
          return s;
        },
        xc: function () {
          return c;
        },
      });
      var i = n(972959);
      let l = { timeToLiveMs: 5e3, reappearTimeMs: 1e4 },
        o = (0, i.H)(() => l),
        r = 1e4,
        a = 2e4,
        s = 500,
        c = 1e3;
      function u(e) {
        o.setState({ timeToLiveMs: e });
      }
      function d(e) {
        o.setState({ reappearTimeMs: e });
      }
      t.ZP = o;
    },
    926086: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        a = n(348327),
        s = n.n(a),
        c = n(642128),
        u = n(481060),
        d = n(667142),
        h = n(333031),
        f = n(70491);
      let p = { mass: 1, tension: 600, friction: 60, clamp: !0 };
      function m(e) {
        let { locked: t, pinned: n } = e,
          [o, a] = l.useState(0),
          [m, v] = l.useState(0),
          [x, g] = l.useState(0),
          C = l.useRef(0),
          [Z, _] = l.useState(0),
          { timeToLiveMs: I, reappearTimeMs: j } = d.ZP.useState(
            (e) => ({
              timeToLiveMs: e.timeToLiveMs,
              reappearTimeMs: e.reappearTimeMs,
            }),
            s(),
          ),
          E = { timeToLiveMs: I, reappearTimeMs: j },
          b = l.useRef(E);
        l.useEffect(() => void (b.current = E)),
          l.useEffect(
            () => (
              (C.current = setInterval(() => {
                let e = Date.now();
                v(e),
                  g((t) => {
                    if (0 === t) return e;
                    let n = e - t,
                      i = b.current.timeToLiveMs,
                      l = i + b.current.reappearTimeMs;
                    return n > i ? t + l : t;
                  });
              }, 100)),
              () => {
                clearInterval(C.current);
              }
            ),
            [],
          );
        let w = () => {
            a(Date.now()), _((e) => e + 1);
          },
          N = o > 0 && m - o < 1e3,
          k = (0, u.useTransition)(x > 0 && x < m && m - x < I, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: p,
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
                      className: r()(f.clickZone, N && f.clickBackground),
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
    804570: function (e, t, n) {
      n.d(t, {
        E: function () {
          return c;
        },
      });
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        a = n(481060),
        s = n(892196);
      let c = l.memo(function (e) {
        let { emptyText: t, icon: n, absolute: l = !1 } = e;
        return (0, i.jsx)("div", {
          className: r()(s.emptyWidgetContainer, l && s.absolute),
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
          return f;
        },
      });
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        a = n(642128),
        s = n(481060),
        c = n(110924),
        u = n(752802),
        d = n(340101),
        h = n(228680);
      let f = 8,
        p = (e) => {
          let {
            participant: t,
            width: n,
            locked: l,
            widgetId: o,
            pinned: r,
          } = e;
          return (0, i.jsx)("div", {
            className: h.tileContainer,
            children: (0, i.jsx)(
              u.Z,
              { participant: t, width: n, locked: l, widgetId: o, pinned: r },
              t.user.id,
            ),
          });
        },
        m = { mass: 1, tension: 250, friction: 18, clamp: !0 };
      t.Z = l.memo(function (e) {
        let {
            widgetId: t,
            tileWidth: n,
            layout: l,
            locked: o,
            streamParticipants: u,
            participantsVersion: v,
            pinned: x,
          } = e,
          g = (9 / 16) * n,
          C = u.map((e) => ({
            participant: e,
            key: e.user.id,
            width: n,
            locked: o,
            widgetId: t,
            height: g,
            pinned: x,
          })),
          Z = (0, c.Z)(n),
          _ = l === d.C5.VERTICAL,
          I = 0,
          j = 0,
          E = (0, s.useTransition)(
            _
              ? C.map((e, t) => ({
                  ...e,
                  y: (I += e.height + (t > 0 ? f : 0)) - e.height,
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
                let { x: t, y: n, width: i, height: l } = e;
                return { x: t, y: n, width: i, height: l, opacity: 1 };
              },
              update: (e) => {
                let { x: t, y: n, width: i, height: l } = e;
                return { x: t, y: n, width: i, height: l };
              },
              config: m,
              trail: n !== Z ? 0 : 100,
            },
            n !== Z ? "animate-never" : "respect-motion-settings",
          );
        return (0, i.jsx)("div", {
          className: r()({
            [h.gridContainer]: !0,
            [h.vertical]: _,
            [h.horizontal]: !_,
          }),
          style: _ ? { height: I } : { width: j },
          children: E((e, t, l, o) =>
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
        l = n.n(i),
        o = n(972959),
        r = n(569545);
      let a = (0, o.H)(() => ({ streams: {} }));
      function s(e) {
        var t, n;
        let i = (0, r.V9)(e);
        return null !==
          (n =
            null === (t = a.useState((e) => e.streams, l())[i]) || void 0 === t
              ? void 0
              : t.zoom) && void 0 !== n
          ? n
          : 100;
      }
      function c(e) {
        return s(e) / 100;
      }
      function u(e, t) {
        let n = (0, r.V9)(e);
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
        let n = (0, r.V9)(e);
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
        let n = (0, r.V9)(e);
        return null === (t = a.useState((e) => e.streams, l())[n]) ||
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
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        a = n(399606),
        s = n(46973),
        c = n(481060),
        u = n(846027),
        d = n(239091),
        h = n(765250),
        f = n(872810),
        p = n(40851),
        m = n(414910),
        v = n(194082),
        x = n(979264),
        g = n(871118),
        C = n(352978),
        Z = n(833519),
        _ = n(839662),
        I = n(199902),
        j = n(314897),
        E = n(131951),
        b = n(594174),
        w = n(5192),
        N = n(1226),
        k = n(981631),
        y = n(388032),
        L = n(2847);
      function S(e) {
        let { participant: t } = e,
          n = t.user.id,
          o = (0, a.e7)(
            [E.Z],
            () => {
              let e = (0, m.Z)(t.type);
              return E.Z.isLocalMute(t.user.id, e);
            },
            [t],
          ),
          r = (0, a.e7)([j.default], () => j.default.getId()),
          { hasVideo: d } = (0, _.Z)(t, r),
          h = o && d,
          f = l.useCallback(() => {
            u.Z.toggleLocalMute(n, s.Yn.STREAM);
          }, [n]);
        return (0, i.jsx)(c.Tooltip, {
          text: h ? y.intl.string(y.t.YqAjX1) : y.intl.string(y.t["w4m94+"]),
          children: (e) => {
            let { onClick: t, ...n } = e;
            return (0, i.jsx)(c.Clickable, {
              ...n,
              className: L.controlAction,
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
        let { hasActiveStream: t, participant: l, onEnablePin: o } = e,
          s = (0, p.bp)(),
          u = l.user,
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
          m = t ? y.intl.string(y.t.tLxK4u) : y.intl.string(y.t.E5RDnJ);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: r()(L.controlBackground, {
                [L.controlsWithActiveStream]: t,
              }),
            }),
            !t &&
              (0, i.jsx)("div", {
                className: L.watchActionContainer,
                children: (0, i.jsx)(c.Tooltip, {
                  text: m,
                  children: (e) =>
                    (0, i.jsxs)(c.Clickable, {
                      ...e,
                      className: L.watchButton,
                      onClick: () => {
                        var t;
                        null === (t = e.onClick) || void 0 === t || t.call(e),
                          (0, f.rn)(l.stream, {
                            forceMultiple: !0,
                            noFocus: !0,
                          }),
                          o();
                      },
                      children: [
                        (0, i.jsx)(c.Text, {
                          variant: "text-sm/semibold",
                          color: "always-white",
                          children: y.intl.string(y.t["I6JG4+"]),
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
              className: L.controls,
              children: [
                (0, i.jsx)("div", {
                  className: L.controlUser,
                  children: (0, i.jsxs)("div", {
                    className: L.controlUserContainer,
                    children: [
                      (0, i.jsx)(c.ScreenIcon, {
                        size: "xs",
                        color: c.tokens.colors.INTERACTIVE_ACTIVE,
                      }),
                      (0, i.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: w.ZP.getName(
                          l.stream.guildId,
                          l.stream.channelId,
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
                  className: L.controlActions,
                  children:
                    t &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(S, { participant: l }),
                        (0, i.jsx)(c.Tooltip, {
                          text: y.intl.string(y.t["3D5yo6"]),
                          children: (e) => {
                            let { onClick: t, ...o } = e;
                            return (0, i.jsx)(c.Clickable, {
                              ...o,
                              className: L.controlAction,
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
                                        stream: l.stream,
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
        O = l.memo(function (e) {
          let {
              participant: t,
              width: n,
              locked: l,
              widgetId: o,
              pinned: s,
            } = e,
            c = (0, a.e7)(
              [I.Z],
              () => I.Z.getActiveStreamForUser(t.user.id, t.stream.guildId),
              [t.user.id, t.stream.guildId],
            ),
            u = null != c && A.has(c.state),
            d = null != c,
            f = (0, N.yA)(t.stream),
            p = (0, N.xN)(t.stream);
          return (!d && l) || u
            ? null
            : (0, i.jsxs)("div", {
                className: L.tile,
                children: [
                  d &&
                    !l &&
                    (0, i.jsx)(v.ZP, {
                      size: v.ZP.Sizes.SMALL,
                      className: L.liveIndicator,
                    }),
                  d
                    ? (0, i.jsx)("div", {
                        className: L.streamTile,
                        children: (0, i.jsx)("div", {
                          className: L.streamTile,
                          style: { transform: "scale(".concat(f, ")") },
                          children: (0, i.jsx)(Z.Z, {
                            participant: t,
                            width: n,
                            fit: null != p ? p : C.L.CONTAIN,
                            inPopout: !0,
                            focused: !l,
                            paused: !1,
                            selected: !1,
                            wrapperClassName: l ? L.streamTileWrapper : void 0,
                            inOverlayPopout: !0,
                          }),
                        }),
                      })
                    : (0, i.jsx)("div", {
                        className: L.streamPreview,
                        children: (0, i.jsx)(g.Z, {
                          noText: !0,
                          className: r()(L.absoluteFill),
                          stream: t.stream,
                        }),
                      }),
                  l
                    ? null
                    : (0, i.jsx)(T, {
                        participant: t,
                        hasActiveStream: d,
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
          return w;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(442837),
        r = n(481060),
        a = n(765250),
        s = n(13245),
        c = n(393238),
        u = n(493773),
        d = n(358221),
        h = n(569545),
        f = n(199902),
        p = n(314897),
        m = n(592125),
        v = n(355863),
        x = n(944486),
        g = n(804570),
        C = n(350663),
        Z = n(610394),
        _ = n(340101),
        I = n(388032),
        j = n(666540);
      let E = [];
      function b(e, t, n, i) {
        let l = (i - 1) * C.z;
        return e === _.C5.HORIZONTAL
          ? Math.min(Math.max((t - l) / i, 256), Math.max((16 * n) / 9, 256))
          : Math.min(Math.max(t, 256), Math.max((((n - l) / i) * 16) / 9, 256));
      }
      function w(e) {
        var t;
        let {
            id: n,
            size: w,
            locked: N,
            padding: k,
            borderWidth: y,
            opacity: L,
            horizontal: S,
            pinned: T,
          } = e,
          A = 2 * k + 2 * y;
        let { width: O, height: V } = {
            width: "number" == typeof (t = w).width ? t.width : 256,
            height: "number" == typeof t.height ? t.height : 144,
          },
          M = (0, o.e7)([x.Z], () => x.Z.getVoiceChannelId()),
          { width: P, height: R, ref: D } = (0, c.Z)(),
          W = (0, o.e7)(
            [v.Z],
            () => {
              var e;
              let t = v.Z.getWidget(n);
              return (
                !!(0, _.ZL)(t) &&
                (null === (e = t.meta.showAllStreams) || void 0 === e || e)
              );
            },
            [n],
          ),
          z = (0, o.e7)([m.Z], () => m.Z.getChannel(M)),
          F = (0, o.e7)([p.default], () => p.default.getId()),
          { participantsVersion: G, streamParticipants: U } = (0, o.cj)(
            [f.Z, d.Z],
            () => {
              if (null == M)
                return { streamParticipants: E, participantsVersion: -1 };
              let e = new Set(
                  f.Z.getAllActiveStreamsForChannel(M).map((e) => (0, h.V9)(e)),
                ),
                t = (t) => e.has((0, h.V9)(t.stream)),
                n = d.Z.getStreamParticipants(M).filter(
                  (t) => t.user.id !== F && (!!W || e.has((0, h.V9)(t.stream))),
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
                  participantsVersion: d.Z.getParticipantsVersion(M),
                }
              );
            },
            [M, F, W],
          ),
          B = U.length,
          Y = null == z || 0 === B,
          { tileWidth: H, layout: X } = (function (e, t, n, i, o) {
            let r = (function (e, t, n, i) {
                let l = b(_.C5.HORIZONTAL, e, t, n),
                  o = b(_.C5.VERTICAL, e, t, n);
                switch (i) {
                  case _.C5.VERTICAL:
                    return o;
                  case _.C5.HORIZONTAL:
                    return l;
                }
                let r = ((9 * o) / 16 + C.z) * n - C.z;
                return e > (16 * t) / 9
                  ? l
                  : r <= t
                    ? o
                    : (9 * l) / 16 <= t
                      ? l
                      : o;
              })(n, i, t, o),
              a = b(_.C5.VERTICAL, n, i, t),
              s = null != o ? o : r === a ? _.C5.VERTICAL : _.C5.HORIZONTAL,
              [c, u] = l.useState(r);
            return (
              l.useEffect(() => {
                !e && u(r);
              }, [e, r]),
              { layout: s, tileWidth: c }
            );
          })(
            !1,
            B,
            null != P ? P : O - A,
            null != R ? R : V - A,
            S ? _.C5.HORIZONTAL : _.C5.VERTICAL,
          ),
          K = {
            id: n,
            width: O,
            height: V,
            sizeOffset: A,
            layout: X,
            padding: k,
            participants: U.length,
          };
        return (!(function (e) {
          let {
              id: t,
              streamParticipants: n,
              layout: i,
              widgetLayoutSpecs: o,
            } = e,
            r = l.useRef(o);
          l.useEffect(() => void (r.current = o)),
            l.useEffect(() => {
              let {
                id: e,
                width: t,
                height: i,
                sizeOffset: l,
                layout: o,
                padding: s,
              } = r.current;
              if (0 === n.length) {
                (256 !== t || 144 !== i) &&
                  (0, a.nv)({
                    widgetId: e,
                    size: { fixed: !0, width: 256, height: 144 },
                  });
                return;
              }
              if (o === _.C5.HORIZONTAL) {
                let t = (16 / 9) * (i - l);
                (0, a.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    height: i,
                    width: t * n.length + s * (n.length - 1) + l,
                  },
                });
              } else {
                let i = (9 / 16) * (t - l);
                (0, a.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    width: t,
                    height: i * n.length + s * (n.length - 1) + l,
                  },
                });
              }
            }, [n.length]),
            l.useEffect(() => {
              if (r.current.participants <= 1) return;
              let {
                id: e,
                width: t,
                height: n,
                sizeOffset: l,
                padding: o,
                participants: s,
              } = r.current;
              if (i === _.C5.HORIZONTAL) {
                let n = t - l;
                (0, a.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    width: n * s + o * (s - 1) + l,
                    height: (9 / 16) * n + l,
                  },
                });
              } else {
                let t = n - l;
                (0, a.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    width: (16 / 9) * t + l,
                    height: t * s + o * (s - 1) + l,
                  },
                });
              }
            }, [i]),
            l.useEffect(
              () => () => {
                (0, a.nv)({
                  widgetId: t,
                  size: { fixed: !0, width: 256, height: 144 },
                });
              },
              [t],
            );
        })({ id: n, streamParticipants: U, layout: X, widgetLayoutSpecs: K }),
        l.useEffect(() => {
          s.Z.setGpuBoostRequested(Z.zS.OVERLAY_VIDEO_STREAM_RENDERING, !Y);
        }, [Y]),
        (0, u.Z)(() => () => {
          s.Z.setGpuBoostRequested(Z.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
        }),
        Y && N)
          ? null
          : Y && !N
            ? N
              ? null
              : (0, i.jsx)(g.E, {
                  emptyText: I.intl.string(I.t["T6+rX1"]),
                  icon: r.ScreenArrowIcon,
                  absolute: !0,
                })
            : (0, i.jsx)("div", {
                className: j.goLiveGridContainer,
                style: { opacity: L },
                ref: D,
                children: (0, i.jsx)(C.Z, {
                  widgetId: n,
                  tileWidth: H,
                  locked: N,
                  layout: X,
                  streamParticipants: U,
                  participantsVersion: G,
                  pinned: T,
                }),
              });
      }
    },
    554370: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return er;
        },
      }),
        n(653041),
        n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        a = n(442837),
        s = n(952265),
        c = n(481060),
        u = n(239091),
        d = n(13245),
        h = n(615287),
        f = n(100527),
        p = n(906732),
        m = n(146282),
        v = n(70097),
        x = n(567409),
        g = n(74299),
        C = n(199902),
        Z = n(592125),
        _ = n(430824),
        I = n(131951),
        j = n(944486),
        E = n(574254),
        b = n(556296),
        w = n(808506),
        N = n(237997),
        k = n(451478),
        y = n(585483),
        L = n(358085),
        S = n(13140),
        T = n(145597),
        A = n(830917),
        O = n(86071),
        V = n(681603),
        M = n(915614),
        P = n(690336),
        R = n(333031),
        D = n(371651),
        W = n(388627),
        z = n(319414),
        F = n(561064),
        G = n(987650),
        U = n(501787),
        B = n(981631),
        Y = n(206583),
        H = n(388032),
        X = n(167566);
      let K = !L.isPlatformEmbedded && !1,
        Q = K
          ? (0, i.jsx)(v.Z, {
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
        (0, u.jW)(e, async () => {
          let { default: e } = await n.e("17610").then(n.bind(n, 385620));
          return (t) =>
            (0, i.jsx)(e, {
              ...t,
              layoutId: U.OVERLAY_V3_LAYOUT_ID,
              version: 1,
            });
        });
      }
      let ee = l.memo(function (e) {
          let { keybind: t, onClick: n, locked: l } = e;
          return (0, i.jsx)(c.Clickable, {
            className: r()(X.overlayBackground, {
              [X.overlayActive]: !l,
              [X.overlayLocked]: l,
            }),
            onMouseDown: (e) => {
              let { currentTarget: t, target: i, button: l } = e;
              l === B.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: $,
            children: l
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
        et = l.memo(function (e) {
          let { locked: t, focused: n } = e;
          return t && n
            ? (0, i.jsx)(R.Z, {
                className: X.closeContainer,
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
      function el() {
        d.Z.setFocusedPID(null);
      }
      function eo(e) {
        let t = N.Z.isLocked((0, T.QF)());
        "alt" === e.key.toLowerCase() &&
          !t &&
          ("keyup" === e.type.toLowerCase()
            ? y.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() &&
              y.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
      }
      function er(e) {
        var t, n;
        let { isEmbeddedActivity: o } = e,
          u = (0, F.Z)(),
          {
            locked: v,
            focused: E,
            incompatibleApp: y,
            hasValidResolution: L,
            hasZeroSizeDimension: M,
            keybind: R,
          } = (0, a.cj)([N.Z, k.Z, b.Z], () => {
            let e = k.Z.windowSize((0, A.ZY)(u)),
              t = b.Z.getOverlayKeybind();
            return {
              locked: N.Z.isLocked((0, T.QF)()),
              focused: N.Z.isFocused((0, T.QF)()),
              incompatibleApp: N.Z.incompatibleApp,
              hasValidResolution: (0, T.Te)(e),
              hasZeroSizeDimension: 0 === e.height || 0 === e.width,
              keybind: null != t ? (0, S.BB)(t.shortcut, !0) : "???",
            };
          }),
          { analyticsLocations: U } = (0, p.ZP)(f.Z.OVERLAY);
        return (
          !(function (e, t) {
            let n = l.useRef({ mount: e, unmount: t });
            l.useEffect(() => void (n.current = { mount: e, unmount: t })),
              l.useEffect(
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
                u.addEventListener("keydown", eo),
                u.addEventListener("keyup", eo),
                K &&
                  (u.document.hasFocus() && d.Z.setFocusedPID(T.Js),
                  u.addEventListener("focus", ei),
                  u.addEventListener("blur", el));
            },
            () => {
              u.removeEventListener("keydown", eo),
                u.removeEventListener("keyup", eo),
                K &&
                  (u.removeEventListener("focus", ei),
                  u.removeEventListener("blur", el));
            },
          ),
          !(function () {
            let e = l.useRef(!1),
              t = (0, W.pL)(),
              n = j.Z.getVoiceChannelId(),
              i = Z.Z.getChannel(n),
              o = null != i ? _.Z.getGuild(i.guild_id) : null,
              r = null != C.Z.getCurrentUserActiveStream(),
              s = null != n,
              c = (0, g.Z)(I.Z) && !r && null != t,
              u = s && null != o && null != n,
              f = (0, x.Ns)(null == t ? void 0 : t.id),
              p = (0, a.e7)(
                [m.Z],
                () => null != m.Z.getLastFeedFetchDate(Y.YN.GAME_PROFILE_FEED),
              );
            l.useEffect(() => {
              var i;
              if (!p || e.current) return;
              (e.current = !0),
                d.Z.track(B.rMx.OVERLAY_INITIALIZED, {
                  voice_widget_connected: s,
                  text_widget_connected: !1,
                  overlay_render_method: h.gl[h.gl.OutOfProcess],
                });
              let l =
                null !== (i = w.Z.getFocusedPID()) && void 0 !== i
                  ? i
                  : (0, T.QF)();
              if (D.Z.hasChangedRenderMode(l)) return;
              let r = [{ type: G.nc.WELCOME }];
              if (
                (c && u
                  ? r.push({
                      type: G.nc.GO_LIVE_VOICE,
                      game: t,
                      voiceChannelId: n,
                      voiceGuild: o,
                    })
                  : c && r.push({ type: G.nc.GO_LIVE_NON_VOICE, game: t }),
                f.length > 0)
              ) {
                let { enabled: e } = O.Z.getCurrentConfig(
                  { location: "Overlay" },
                  { autoTrackExposure: !0 },
                );
                e && r.push({ type: G.nc.CONTENT_INVENTORY, entries: f });
              }
              d.Z.overlayMounted(...r);
            }, [p, f, s, c, u, t, n, o]);
          })(),
          (t = v),
          (n = u),
          l.useEffect(() => {
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
          (0, i.jsx)(p.Gt, {
            value: U,
            children: (0, i.jsx)(c.RedesignIconContextProvider, {
              children:
                M || y
                  ? null
                  : (0, i.jsx)(c.ThemeProvider, {
                      theme: B.BRd.DARK,
                      children: (e) =>
                        (0, i.jsxs)("div", {
                          className: r()(X.overlay, e),
                          children: [
                            !o && Q,
                            (0, i.jsx)(ee, {
                              locked: v,
                              keybind: R,
                              onClick: en,
                            }),
                            L
                              ? (0, i.jsx)(P.Z, {
                                  className: r()({
                                    [X.layoutLocked]: v,
                                    [X.layoutUnlocked]: !v,
                                  }),
                                })
                              : v
                                ? null
                                : (0, i.jsx)("div", {
                                    className: X.invalidContainer,
                                    children: (0, i.jsx)("div", {
                                      className: X.inactiveContainer,
                                      children: H.intl.format(H.t.ketnW1, T.FW),
                                    }),
                                  }),
                            (0, i.jsx)(z.Z, {}),
                            !o &&
                              K &&
                              (0, i.jsx)(et, { locked: v, focused: E }),
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
        l = n(192379),
        o = n(442837),
        r = n(481060),
        a = n(355863),
        s = n(451478),
        c = n(830917),
        u = n(388627),
        d = n(892127),
        h = n(84346),
        f = n(561064),
        p = n(501787);
      function m(e) {
        return e.widget.id;
      }
      function v(e, t, n, l) {
        return n === r.TransitionStates.YEETED
          ? null
          : (0, i.jsx)(d.Z, { ...t, transitionState: n, cleanUp: l }, e);
      }
      let x = [];
      t.Z = l.memo(function (e) {
        let { className: t } = e,
          n = (0, f.Z)(),
          d = (0, o.e7)([s.Z], () => s.Z.windowSize((0, c.ZY)(n))),
          g = (0, o.e7)(
            [a.Z],
            () => {
              let e = a.Z.getLayout(p.OVERLAY_V3_LAYOUT_ID);
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
          C = l.useCallback(
            (e) => (0, i.jsx)("div", { className: t, style: d, children: e }),
            [t, d],
          );
        return (0, i.jsx)(r.TransitionGroup, {
          items: g,
          renderItem: v,
          getItemKey: m,
          wrapChildren: C,
        });
      });
    },
    293224: function (e, t, n) {
      n.d(t, {
        L: function () {
          return eu;
        },
        N3: function () {
          return el;
        },
        Ox: function () {
          return en;
        },
        SE: function () {
          return ei;
        },
        aG: function () {
          return er;
        },
        c_: function () {
          return ea;
        },
        sm: function () {
          return eo;
        },
      });
      var i = n(200651),
        l = n(192379),
        o = n(691324),
        r = n(442837),
        a = n(685072),
        s = n(400354),
        c = n(652844),
        u = n(864094),
        d = n(582019),
        h = n(75735),
        f = n(481060),
        p = n(846027),
        m = n(239091),
        v = n(287734),
        x = n(40851),
        g = n(571250),
        C = n(628581),
        Z = n(659580),
        _ = n(793865),
        I = n(55311),
        j = n(575175),
        E = n(933557),
        b = n(471445),
        w = n(44315),
        N = n(74299),
        k = n(803647),
        y = n(565138),
        L = n(917405),
        S = n(763296),
        T = n(603074),
        A = n(879815),
        O = n(189771),
        V = n(294629),
        M = n(67844),
        P = n(544384),
        R = n(892807),
        D = n(560688),
        W = n(871499),
        z = n(199902),
        F = n(314897),
        G = n(430824),
        U = n(131951),
        B = n(19780),
        Y = n(944486),
        H = n(594174),
        X = n(979651),
        K = n(388627),
        Q = n(810632),
        q = n(981631),
        J = n(388032),
        $ = n(725775);
      function ee(e) {
        let t = l.useRef(null);
        return (
          l.useEffect(() => {
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
          iconComponent: l,
          iconColor: o,
          tooltip: r,
          defaultColor: a = "primaryDark",
          highlightedColor: s = "white",
          popoutOpen: c,
          onClick: u,
          onPopoutClick: d,
          onMouseEnter: h,
          onMouseLeave: p,
          onContextMenu: m,
        } = e;
        return (0, i.jsx)(f.Tooltip, {
          text: r,
          "aria-label": !1,
          children: (e) => {
            let { onMouseEnter: r, onMouseLeave: f, ...v } = e;
            return (0, i.jsx)(W.d, {
              ...v,
              onClick: null != u ? u : () => {},
              color: t ? s : a,
              className: $.button,
              disabled: n,
              popoutOpen: c,
              onMouseEnter: (e) => {
                null == r || r(), null == h || h(e);
              },
              onMouseLeave: (e) => {
                null == f || f(), null == p || p(e);
              },
              ignoreColorForCaret: !c,
              iconComponent: l,
              iconColor: o,
              isActive: t,
              onContextMenu: m,
              onPopoutClick: d,
            });
          },
        });
      }
      function en(e) {
        let { voiceChannel: t, locked: n } = e,
          { suppress: r, selfMute: a, mute: s } = (0, V.Z)(t),
          u = a || s || r,
          d = (0, C.Z)(a, s, r, !1),
          {
            Component: h,
            play: p,
            events: m,
          } = (0, c.O)(u ? "unmute" : "mute");
        l.useEffect(() => () => p(), [p, u]);
        let v = ee(n);
        return (0, i.jsx)(f.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(Z.default, {
              onClose: v(t),
              renderInputDevices: !0,
              renderInputModes: !0,
            });
          },
          align: "center",
          position: "top",
          animation: f.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: l } = t;
            return (0, i.jsx)(et, {
              iconComponent: h,
              tooltip: d,
              onClick: () => (0, j.Z)(s, r, q.jXE.OVERLAY),
              onPopoutClick: n,
              popoutOpen: l,
              onContextMenu: n,
              iconColor: u ? (0, w.Lq)(o.I.RED_400) : void 0,
              onMouseEnter: () => {
                m.onMouseEnter();
              },
              onMouseLeave: () => {
                m.onMouseLeave();
              },
            });
          },
        });
      }
      function ei(e) {
        let { voiceChannel: t, locked: n } = e,
          { selfDeaf: o, deaf: r } = (0, A.Z)(t),
          a = o || r,
          {
            Component: c,
            play: u,
            events: { onMouseEnter: d, onMouseLeave: h },
          } = (0, s.l)(a ? "undeafen" : "deafen"),
          p = r ? f.HeadphonesDenyIcon : c;
        l.useEffect(() => () => u(), [a, u]);
        let m = () => {
            (0, I.Z)(r, q.jXE.OVERLAY);
          },
          v = ee(n);
        return (0, i.jsx)(f.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(Z.default, {
              onClose: v(t),
              renderOutputDevices: !0,
              renderOutputVolume: !0,
            });
          },
          align: "center",
          position: "top",
          animation: f.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: l } = t;
            return (0, i.jsx)(et, {
              iconComponent: p,
              tooltip: (0, g.Z)(o, r, !1),
              isToggled: a,
              onClick: m,
              onContextMenu: n,
              onMouseEnter: d,
              onMouseLeave: h,
              onPopoutClick: n,
              popoutOpen: l,
            });
          },
        });
      }
      function el(e) {
        var t;
        let { voiceChannel: n, locked: o } = e,
          a = (0, r.e7)([U.Z], () => U.Z.isVideoEnabled()),
          s = (0, r.e7)([U.Z], () => Object.values(U.Z.getVideoDevices())[0]),
          c =
            null === (t = null == s ? void 0 : s.disabled) || void 0 === t || t,
          u = !1 === c,
          d = (0, O.Z)(n),
          m = (e) => {
            p.Z.setVideoEnabled(e);
          },
          v = () => {
            u ? m(!0) : (0, D.Z)();
          },
          x = c ? () => v() : () => m(!a),
          {
            Component: g,
            play: C,
            events: { onMouseEnter: Z, onMouseLeave: I },
          } = (0, h.o)(a ? "disable" : "enable"),
          j =
            null != n
              ? (0, M.X)({
                  enabled: a,
                  cameraUnavailable: c,
                  hasPermission: d,
                  channel: n,
                })
              : void 0;
        l.useEffect(() => () => C(), [a, C]);
        let E = ee(o),
          b = null == n || !d;
        return (0, i.jsx)(f.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(_.Z, { onClose: E(t) });
          },
          align: "center",
          position: "top",
          animation: f.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: l } = t;
            return (0, i.jsx)(et, {
              iconComponent: g,
              tooltip: j,
              onClick: x,
              isToggled: a,
              onPopoutClick: n,
              popoutOpen: l,
              onContextMenu: n,
              onMouseEnter: Z,
              onMouseLeave: I,
              disabled: b,
            });
          },
        });
      }
      function eo(e) {
        let t,
          { voiceChannel: n, locked: o } = e,
          a = (0, r.e7)([H.default], () => H.default.getCurrentUser()),
          s = (0, O.Z)(n),
          c = (0, r.cj)([U.Z], () => (0, N.Z)(U.Z)),
          d = (0, r.e7)([z.Z], () => z.Z.getCurrentUserActiveStream()),
          h = (0, x.bp)(),
          p = (0, Q.B)(),
          m = null != d;
        if (m) t = J.intl.string(J.t.S5anIS);
        else if (null != n) {
          let e = (0, K.pL)();
          t = s
            ? null != e
              ? J.intl.format(J.t.AB5gT0, { game: e.name })
              : J.intl.string(J.t.FeUKeH)
            : J.intl.string(J.t.uQn9Bw);
        }
        let v = () => {
            if (m) return (0, k.Z)(d, !1);
            p();
          },
          {
            Component: g,
            events: { onMouseEnter: C, onMouseLeave: Z },
            play: _,
          } = (0, u.P)(m ? "disable" : "enable");
        l.useEffect(() => () => _(), [m, _]);
        let I = ee(o);
        return (0, i.jsx)(f.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != n
              ? (0, i.jsx)(P.Z, {
                  channel: n,
                  currentUser: a,
                  activeStreams: null != d ? [d] : [],
                  handleGoLive: p,
                  onClose: I(t),
                  appContext: h,
                  disableChangeWindows: !0,
                })
              : (0, i.jsx)(i.Fragment, {});
          },
          align: "center",
          position: "top",
          animation: f.Popout.Animation.FADE,
          children: (e, n) => {
            let { onClick: l } = e,
              { isShown: o } = n;
            return (0, i.jsx)(et, {
              iconComponent: g,
              tooltip: t,
              isToggled: m,
              onClick: v,
              onPopoutClick: null != d ? l : void 0,
              popoutOpen: o,
              onContextMenu: l,
              onMouseEnter: C,
              onMouseLeave: Z,
              disabled: !c || !s,
            });
          },
        });
      }
      function er(e) {
        var t;
        let { voiceChannel: l, locked: o } = e,
          a =
            null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t
              ? t
              : null,
          { mute: s, suppress: c } = (0, V.Z)(l),
          u = (0, r.e7)([U.Z], () => U.Z.isDeaf()),
          h = null == l || s || c || u;
        function p(e) {
          null != a &&
            (0, m.jW)(e, async () => {
              let { default: e } = await n.e("56049").then(n.bind(n, 338991));
              return (t) => (0, i.jsx)(e, { guildId: a, ...t });
            });
        }
        let {
            Component: v,
            events: { onClick: x, onMouseEnter: g, onMouseLeave: C },
          } = (0, d.j)(),
          Z = ee(o),
          _ = (0, r.e7)(
            [S.Z, F.default],
            () => S.Z.isUserPlayingSounds(F.default.getId()),
            [],
          );
        return (0, i.jsx)(f.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return h || null == l
              ? (0, i.jsx)(i.Fragment, {})
              : (0, i.jsx)(T.Z, {
                  guildId: a,
                  channel: l,
                  onClose: Z(t),
                  analyticsSource: "action bar button",
                });
          },
          align: "center",
          position: "top",
          animation: f.Popout.Animation.FADE,
          children: (e, t) => {
            let { onClick: n } = e,
              { isShown: l } = t;
            return (0, i.jsx)(et, {
              iconComponent: v,
              tooltip: (function () {
                if (s) return J.intl.string(J.t["Ox4/zc"]);
                if (c) return J.intl.string(J.t["+YBKYG"]);
                if (u) return J.intl.string(J.t.X1lQlp);
              })(),
              onClick: (e) => {
                x(), n(e);
              },
              highlightedColor: _ ? "green" : "white",
              defaultColor: _ ? "green" : "primaryDark",
              onContextMenu: p,
              onMouseEnter: g,
              onMouseLeave: C,
              isToggled: l,
              popoutOpen: l,
              disabled: h,
            });
          },
        });
      }
      function ea(e) {
        let { voiceChannel: t, locked: n } = e,
          l = (0, r.e7)(
            [Y.Z],
            () => Y.Z.getVoiceChannelId() === (null == t ? void 0 : t.id),
          ),
          o = () => {
            l && v.default.disconnect();
          },
          s = (e) => {
            v.default.selectVoiceChannel(e.id);
          },
          {
            Component: c,
            events: { onMouseEnter: u, onMouseLeave: d },
          } = (0, a.K)(),
          h = ee(n),
          p = l ? c : f.PhoneCallIcon;
        return (0, i.jsx)(f.Popout, {
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
          animation: f.Popout.Animation.FADE,
          children: (e, n) => {
            let { onClick: r } = e,
              { isShown: a } = n;
            return (0, i.jsx)(et, {
              iconComponent: p,
              tooltip:
                null != t
                  ? J.intl.string(J.t["6vrfgo"])
                  : J.intl.string(J.t.S0W8Z2),
              onClick: l ? o : r,
              defaultColor: l ? "red" : "primaryDark",
              onMouseEnter: u,
              onMouseLeave: d,
              onContextMenu: r,
              isToggled: a,
              onPopoutClick: l ? r : void 0,
              popoutOpen: a,
            });
          },
        });
      }
      function es(e) {
        let { voiceChannel: t } = e,
          n = (0, r.e7)([G.Z], () => G.Z.getGuild(t.getGuildId()), [t]);
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
                    (0, i.jsx)(y.Z, {
                      guild: n,
                      size: y.Z.Sizes.SMOL,
                      className: $.guildIcon,
                    }),
                    (0, i.jsx)(f.Text, {
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
          n = (0, b.KS)(t),
          l = (0, E.ZP)(t);
        return (0, i.jsxs)("div", {
          className: $.voiceChannelNameContainer,
          children: [
            null != n &&
              (0, i.jsx)(f.Text, {
                tag: "div",
                color: "text-muted",
                variant: "text-xs/normal",
                className: $.channelIcon,
                children: (0, i.jsx)(n, { size: "sm", color: "currentColor" }),
              }),
            null != l &&
              (0, i.jsx)(f.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                className: $.channelName,
                children: l,
              }),
          ],
        });
      }
      function eu(e) {
        let { voiceChannel: t } = e,
          n = null == t ? void 0 : t.id,
          l = (0, r.cj)([B.Z], () => ({
            channelId: B.Z.getChannelId(),
            quality: B.Z.getQuality(),
            state: B.Z.getState(),
            lastPing: B.Z.getLastPing(),
          })),
          o = null != n,
          a = (0, r.e7)([X.Z], () => null != n && X.Z.hasVideo(n), [n]);
        return (
          o &&
          null != t &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(L.Z, {
                ...l,
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
          return y;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(512722),
        r = n.n(o),
        a = n(442837),
        s = n(481060),
        c = n(872810),
        u = n(594190),
        d = n(74299),
        h = n(451467),
        f = n(537413),
        p = n(989941),
        m = n(567126),
        v = n(143135),
        x = n(751571),
        g = n(361291),
        C = n(592125),
        Z = n(430824),
        _ = n(131951),
        I = n(944486),
        j = n(594174),
        E = n(449224),
        b = n(358085),
        w = n(981631),
        N = n(37113),
        k = n(761274);
      function y() {
        let e = (0, a.e7)([I.Z], () => I.Z.getVoiceChannelId()),
          t = (0, a.e7)([C.Z], () => C.Z.getChannel(e), [e]),
          o = (0, a.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return (
              r()(
                null != e,
                "useGoLiveImmidateAction: user cannot be undefined",
              ),
              e
            );
          }),
          y = null == t ? void 0 : t.getGuildId(),
          L = (0, a.e7)([_.Z], () => (0, d.Z)(_.Z));
        async function S() {
          var e;
          return null !==
            (e = (await (0, m._Q)()).sort(
              (e, t) => (0, m.ov)(t) - (0, m.ov)(e),
            )[0]) && void 0 !== e
            ? e
            : null;
        }
        let T = l.useCallback(async () => {
          var n, i;
          if (null == t || null == e) return !1;
          let l = await S(),
            r = (0, b.isWindows)() ? (0, p.Z)(u.ZP, E.Z) : null;
          if (null == r && null == l) return !1;
          let a =
              null != y
                ? null === (n = Z.Z.getGuild(y)) || void 0 === n
                  ? void 0
                  : n.premiumTier
                : null,
            {
              preset: s,
              resolution: d,
              fps: m,
              soundshareEnabled: C,
            } = g.Z.getState(),
            [I, j] =
              null !== (i = (0, f.Z)(s, o, a)) && void 0 !== i
                ? i
                : [N.LY.RESOLUTION_720, N.ws.FPS_30],
            w = s,
            L = d,
            T = m;
          w !== N.tI.PRESET_CUSTOM && ((L = I), (T = j)),
            !(0, h.Z)(w, L, T, o, a) && ((L = I), (T = j)),
            !(0, h.Z)(w, L, T, o, a, t) &&
              ((w = N.tI.PRESET_VIDEO),
              (L = N.LY.RESOLUTION_720),
              (T = N.ws.FPS_30)),
            (0, c.Rc)({
              preset: w,
              resolution: L,
              frameRate: T,
              soundshareEnabled: C,
            });
          let A = (0, v.Z)(r, l, u.ZP.getRunningGames()),
            O =
              !(0, b.isWindows)() ||
              null == A ||
              (null == l ? void 0 : l.id.startsWith("camera:")) ||
              null == A
                ? null
                : A.pid,
            V = null,
            M = null;
          return (
            null == O && null != l && ((V = l.id), (M = l.name)),
            !!(
              _.Z.getUseSystemScreensharePicker() ||
              (await x.Z.hasPermission(k.Eu.SCREEN_RECORDING, {
                showAuthorizationError: !1,
              }))
            ) &&
              ((0, c.WH)(y, e, {
                pid: O,
                sourceId: V,
                sourceName: M,
                audioSourceId: null,
                sound: C,
                previewDisabled: !0,
              }),
              !0)
          );
        }, [t, y, o, e]);
        return l.useCallback(async () => {
          if (!(!L || null == e || (await T())))
            (0, s.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("79477"),
                n.e("73554"),
              ]).then(n.bind(n, 60594));
              return (t) =>
                (0, i.jsx)(e, {
                  ...t,
                  selectSource: !1,
                  guildId: y,
                  analyticsLocation: w.Sbl.UNLOCKED_OVERLAY,
                });
            });
        }, [L, T, y, e]);
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
      var l = n(120356),
        o = n.n(l),
        r = n(442837),
        a = n(592125),
        s = n(944486),
        c = n(293224),
        u = n(201636);
      function d(e) {
        let { locked: t } = e,
          n = (0, r.e7)([s.Z], () => s.Z.getVoiceChannelId()),
          l = (0, r.e7)([a.Z], () => a.Z.getChannel(n)),
          d = null != l;
        return (0, i.jsxs)("div", {
          className: o()({ [u.panelContainer]: !0, [u.locked]: t }),
          children: [
            (0, i.jsxs)("div", {
              className: u.panelRow,
              children: [
                (0, i.jsxs)("div", {
                  className: u.buttonSection,
                  children: [
                    (0, i.jsx)(c.Ox, { voiceChannel: l, locked: t }),
                    (0, i.jsx)(c.SE, { voiceChannel: l, locked: t }),
                    (0, i.jsx)(c.N3, { voiceChannel: l, locked: t }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: u.buttonSection,
                  children: [
                    (0, i.jsx)(c.sm, { voiceChannel: l, locked: t }),
                    (0, i.jsx)(c.aG, { voiceChannel: l, locked: t }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: u.buttonSection,
                  children: (0, i.jsx)(c.c_, { voiceChannel: l, locked: t }),
                }),
              ],
            }),
            d &&
              (0, i.jsx)("div", {
                className: u.panelRow,
                children: (0, i.jsx)(c.L, { voiceChannel: l, locked: t }),
              }),
          ],
        });
      }
    },
    586742: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return k;
        },
      });
      var i = n(200651),
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        a = n(442837),
        s = n(481060),
        c = n(239091),
        u = n(765250),
        d = n(393238),
        h = n(358221),
        f = n(933557),
        p = n(352978),
        m = n(27457),
        v = n(796638),
        x = n(592125),
        g = n(131951),
        C = n(944486),
        Z = n(906037),
        _ = n(804570),
        I = n(501787),
        j = n(65154),
        E = n(388032),
        b = n(827202);
      function w(e) {
        var t;
        let { participant: n, channel: l, context: o } = e,
          r = null === (t = n.user) || void 0 === t ? void 0 : t.id;
        return (0, a.e7)(
          [g.Z],
          () =>
            null != n.user &&
            null != o &&
            null != l &&
            g.Z.isLocalVideoDisabled(r, o),
          [r, n.user, o, l],
        )
          ? null
          : (0, i.jsx)(m.ZP, { ...e });
      }
      function N(e) {
        let {
            context: t = j.Yn.DEFAULT,
            participants: o,
            locked: a,
            widget: u,
            channel: d,
            width: h,
            height: f,
            containerRef: m,
          } = e,
          v = (e, l) => {
            (0, c.jW)(l, async () => {
              let { default: l } = await Promise.all([
                n.e("79695"),
                n.e("69220"),
                n.e("351"),
              ]).then(n.bind(n, 881351));
              return (n) =>
                (0, i.jsx)(l, {
                  ...n,
                  user: e.user,
                  showMediaItems: !0,
                  mediaEngineContext: t,
                });
            });
          },
          x = o.length > 0 && null != t && null != d && (!a || u.pinned);
        l.useEffect(() => {
          (0, Z.m3)(
            {
              locked: a,
              pinned: u.pinned,
              widget: u.type,
              isPreviewingInGame: !1,
            },
            x,
          );
        }, [a, u, x]);
        let g = "boolean" != typeof u.meta.horizontal || u.meta.horizontal;
        return 0 !== o.length || a
          ? null == d
            ? null
            : (0, i.jsx)("div", {
                ref: m,
                className: r()({
                  [b.videoList]: !0,
                  [b.vertical]: !g,
                  [b.hidden]: !x && a,
                }),
                style: { opacity: u.opacity },
                children: o.map((e) =>
                  (0, i.jsx)(
                    w,
                    {
                      participant: e,
                      width: h,
                      className: b.tile,
                      containerStyle: { width: h, height: f },
                      fit: p.L.COVER,
                      channel: d,
                      inPopout: !0,
                      inCall: !0,
                      noBorder: !0,
                      onContextMenu: a ? void 0 : v,
                      forceIdle: a,
                      paused: !x,
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
                emptyText: E.intl.string(E.t["aTiM4+"]),
                icon: s.VideoIcon,
                absolute: !0,
              });
      }
      function k(e) {
        let t = (0, a.e7)([C.Z, x.Z], () =>
            x.Z.getChannel(C.Z.getVoiceChannelId()),
          ),
          n = (0, f.ZP)(t),
          o = (0, a.Wu)([h.Z], () =>
            null != t ? h.Z.getVideoParticipants(t.id) : [],
          ),
          r = (0, a.e7)([h.Z], () =>
            null != t ? h.Z.getParticipantsVersion(t.id) : 0,
          ),
          s =
            "boolean" != typeof e.widget.meta.horizontal ||
            e.widget.meta.horizontal,
          { width: c, height: p, ref: m } = (0, d.Z)(e.locked, e.widget.pinned),
          { participantTileWidth: g, visibleParticipants: Z } = (0, v.ZB)(
            s ? (null != c ? c : e.width) : null != p ? p : e.height,
            o,
            {
              tileWidth: I.OVERLAY_TILE_WIDTH,
              tileMinWidth: I.OVERLAY_TILE_MIN_WIDTH,
              tileMargin: I.OVERLAY_TILE_MARGIN,
              limit: 8,
              cropSelfVideo: !0,
              version: r,
            },
          ),
          _ = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height,
          },
          j = l.useRef(_);
        return (
          l.useLayoutEffect(() => void (j.current = _)),
          l.useLayoutEffect(() => {
            let {
              size: e,
              id: t,
              containerWidth: n,
              containerHeight: i,
            } = j.current;
            ((s && e.height > e.width) || (!s && e.width > e.height)) &&
              (0, u.nv)({
                widgetId: t,
                size: { fixed: !0, width: i, height: n },
              });
          }, [s]),
          (0, i.jsx)(N, {
            ...e,
            channel: t,
            title: null != n ? n : "",
            participants: Z,
            participantsVersion: r,
            width: s ? g : null != c ? c : e.width,
            height: s ? (null != p ? p : e.height) : g,
            containerRef: m,
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
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        a = n(442837),
        s = n(481060),
        c = n(239091),
        u = n(765250),
        d = n(13245),
        h = n(872810),
        f = n(586902),
        p = n(835473),
        m = n(415635),
        v = n(933557),
        x = n(979264),
        g = n(701362),
        C = n(552282),
        Z = n(565799),
        _ = n(501655),
        I = n(597998),
        j = n(199902),
        E = n(314897),
        b = n(592125),
        w = n(355863),
        N = n(131951),
        k = n(944486),
        y = n(938475),
        L = n(237997),
        S = n(136015),
        T = n(51144),
        A = n(145597),
        O = n(804570),
        V = n(388627),
        M = n(981631),
        P = n(65154),
        R = n(388032),
        D = n(882110);
      function W(e) {
        let { avatarSize: t, userId: n, channelId: l, guildId: o } = e,
          r = 2 * t,
          a = -(t / 2);
        return (0, i.jsx)("div", {
          className: D.effect,
          style: { top: a, left: a, width: r, height: r },
          children: (0, i.jsx)(m.Z, {
            userId: n,
            channelId: l,
            guildId: o,
            containerDimensions: { width: r, height: r },
          }),
        });
      }
      function z(e) {
        let {
            channel: t,
            flipped: n = !1,
            locked: o = !1,
            user: c,
            nick: u,
            displayNameMode: d,
            displayUserMode: p,
            size: m = M.ipw.LARGE,
            onClick: v,
            onContextMenu: C,
            context: Z,
            guildId: _,
            voiceState: b,
            showStreamPreview: w,
            onShowStreamPreview: k,
            onWatchStream: y,
          } = e,
          L = (0, a.e7)([E.default], () => E.default.getId() === c.id, [c.id]),
          [S, T, A] = (0, a.Wu)(
            [N.Z],
            () =>
              L
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
            [L, c.id],
          ),
          O = (0, a.e7)([j.Z], () => j.Z.getCurrentUserActiveStream()),
          V = (0, a.Wu)([j.Z], () => (null != O ? j.Z.getViewerIds(O) : [])),
          P = (0, f.Z)({ userId: c.id, context: Z }),
          R = (0, a.e7)([j.Z], () => j.Z.getStreamForUser(c.id, _)),
          z = null != R,
          F = l.useMemo(
            () => null != O && O.ownerId !== c.id && V.includes(c.id),
            [O, c.id, V],
          ),
          G = l.useCallback(() => k(null), [k]),
          U = l.useCallback(
            () =>
              (0, i.jsx)(g.Z, {
                user: c,
                channel: t,
                onWatch: () => {
                  (0, h.rn)(R, { forceMultiple: !0, noFocus: !0 }), G(), y();
                },
                onAction: y,
                previewIsOpen: w,
                location: M.Sbl.UNLOCKED_OVERLAY,
                hideTip: !0,
              }),
            [c, t, R, w, G, y],
          );
        if (p === M.OYC.ONLY_WHILE_SPEAKING && o && !P) return null;
        let { mute: B, suppress: Y, deaf: H } = b,
          X = m === M.ipw.LARGE ? 32 : 24;
        return (0, i.jsxs)(s.Clickable, {
          className: r()(D.voiceUser, {
            [D.speaking]: P,
            [D.interactive]: !o,
            [D.flipped]: n,
          }),
          onClick: o ? void 0 : (e) => (null == v ? void 0 : v(e, c)),
          onContextMenu: o ? void 0 : (e) => (null == C ? void 0 : C(e, c)),
          onMouseEnter: () => k(c.id),
          onMouseLeave: G,
          children: [
            (0, i.jsx)(s.Avatar, {
              className: D.avatar,
              size:
                m === M.ipw.LARGE
                  ? s.AvatarSizes.SIZE_32
                  : s.AvatarSizes.SIZE_24,
              src: c.getAvatarURL(_, X),
              "aria-hidden": !0,
            }),
            (0, i.jsx)(W, {
              avatarSize: X,
              userId: c.id,
              channelId: t.id,
              guildId: t.getGuildId(),
            }),
            o && (d === M.wC$.NEVER || (!P && d === M.wC$.ONLY_WHILE_SPEAKING))
              ? null
              : (0, i.jsx)(s.Popout, {
                  position: "right",
                  renderPopout: U,
                  shouldShow: w,
                  onRequestClose: G,
                  spacing: 0,
                  children: () =>
                    (0, i.jsxs)(s.Clickable, {
                      className: D.username,
                      children: [
                        (0, i.jsx)(s.Text, {
                          variant: "text-xs/medium",
                          color: "text-normal",
                          children: u,
                        }),
                        (0, i.jsx)(x.ZP, {
                          primaryGuild: c.primaryGuild,
                          userId: c.id,
                          contextGuildId: _,
                          className: D.clanTag,
                        }),
                        (0, i.jsx)(I.nm, {
                          guildId: _,
                          user: c,
                          video: b.selfVideo,
                          isStreaming: z,
                          className: D.voiceIcons,
                          iconClassName: D.voiceIcon,
                          isWatching: F,
                          localMute: S && !L,
                          localVideoDisabled: A,
                          mute: B || S,
                          deaf: H || T,
                          serverMute: B || Y,
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
            context: o = P.Yn.DEFAULT,
            channel: r,
            sortedVoiceStates: a,
            displayNameMode: h,
            displayUserMode: f,
            locked: p,
            pinned: m,
            isPreviewingInGame: v,
            anchorLeft: x,
            avatarSizeMode: g,
          } = e,
          [C, Z] = l.useState(null),
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
          I = a.length > 0 && null != o && null != r && (!p || m),
          j = l.useCallback(() => {
            var e, n;
            let i =
                null === (e = w.Z.getWidget(t)) || void 0 === e
                  ? void 0
                  : e.layoutId,
              l =
                null != i
                  ? null === (n = w.Z.getWidgetsForLayout(i)) || void 0 === n
                    ? void 0
                    : n.find((e) => e.type === M.Odu.GO_LIVE)
                  : null;
            null != l &&
              !l.pinned &&
              ((0, u.xh)(l.id),
              d.Z.track(M.rMx.OVERLAY_PIN_TOGGLED, {
                pinned: !0,
                guild_id: null == r ? void 0 : r.guild_id,
                channel_id: null == r ? void 0 : r.id,
                channel_type: null == r ? void 0 : r.type,
                widget_type: M.Odu.GO_LIVE,
              }));
          }, [r, t]);
        return I
          ? (0, i.jsx)(i.Fragment, {
              children: a.map((e) => {
                var t;
                let { user: n, voiceState: l, member: a } = e;
                return null == n
                  ? null
                  : (0, i.jsx)(
                      z,
                      {
                        guildId: null == r ? void 0 : r.guild_id,
                        user: n,
                        nick:
                          null !== (t = null == a ? void 0 : a.nick) &&
                          void 0 !== t
                            ? t
                            : T.ZP.getName(n),
                        flipped: !x,
                        voiceState: l,
                        displayNameMode: h,
                        displayUserMode: f,
                        size: g,
                        locked: p || v,
                        onContextMenu: _,
                        onClick: _,
                        context: o,
                        channel: r,
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
        let n = (0, a.e7)([k.Z, b.Z], () =>
            b.Z.getChannel(k.Z.getVoiceChannelId()),
          ),
          l = (0, v.ZP)(n),
          o = (function () {
            let [e] = (0, a.e7)(
              [y.ZP, Z.Z, k.Z, b.Z],
              () => {
                let e = b.Z.getChannel(k.Z.getVoiceChannelId());
                return null == e
                  ? [[], -1]
                  : e.isGuildStageVoice()
                    ? [
                        Z.Z.getMutableParticipants(e.id, _.pV.SPEAKER),
                        Z.Z.getParticipantsVersion(e.id),
                      ]
                    : [
                        y.ZP.getVoiceStatesForChannel(e),
                        y.ZP.getVoiceStateVersion(e.getGuildId()),
                      ];
              },
              [],
              S.Q,
            );
            return e;
          })(),
          r = (0, a.e7)([j.Z], () => j.Z.getStreamerActiveStreamMetadata()),
          s = (0, V.II)(),
          c = (0, p.q)(null == s ? void 0 : s.id),
          u = (0, a.cj)([j.Z, L.Z], () => {
            let e = j.Z.getCurrentUserActiveStream();
            return {
              displayUserMode: L.Z.getDisplayUserMode(),
              displayNameMode: L.Z.getDisplayNameMode(),
              avatarSizeMode: L.Z.getAvatarSizeMode(),
              streamApplication:
                (null == r ? void 0 : r.pid) === (0, A.QF)()
                  ? (0, C.Z)(s)
                  : null,
              stream: e,
            };
          });
        return (0, i.jsx)(F, {
          ...u,
          application: c,
          ...e,
          sortedVoiceStates: o,
          channel: n,
          title: null != l ? l : "",
          streamMetadata: r,
          streamApplication:
            null !== (t = u.streamApplication) && void 0 !== t
              ? t
              : { id: null, name: null == r ? void 0 : r.sourceName },
        });
      }
    },
    84346: function (e, t, n) {
      var i = n(200651),
        l = n(239091),
        o = n(603618),
        r = n(926086),
        a = n(353038),
        s = n(761374),
        c = n(340101),
        u = n(2923),
        d = n(586742),
        h = n(243487),
        f = n(430561),
        p = n(134849),
        m = n(501787),
        v = n(981631),
        x = n(388032);
      let g = {
        [v.Odu.VIDEO]: {
          renderWidget(e) {
            let {
              widget: t,
              locked: n,
              size: l,
              padding: o,
              borderWidth: r,
            } = e;
            return (0, i.jsx)(d.Z, {
              id: t.id,
              locked: n,
              widget: t,
              height: "auto" === l.height ? 0 : l.height - 2 * o - 2 * r,
              width: "auto" === l.width ? 0 : l.width - 2 * o - 2 * r,
            });
          },
          renderTitle: () =>
            (0, i.jsx)(f.PI, { children: x.intl.string(x.t.UPvOiY) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(f.ls, {
                  onClick: (o) =>
                    (function (e, t, o) {
                      if (!!(0, c.js)(t))
                        (0, l.jW)(e, async () => {
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
                (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
          resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: l } = e;
            return (0, c.js)(t)
              ? "boolean" != typeof t.meta.horizontal || t.meta.horizontal
                ? {
                    width: Math.max(n.width, m.OVERLAY_TILE_WIDTH),
                    height: Math.min(
                      n.height,
                      2 * m.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * l,
                    ),
                  }
                : {
                    height: Math.max(n.height, m.OVERLAY_TILE_WIDTH),
                    width: Math.min(
                      n.width,
                      2 * m.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * l,
                    ),
                  }
              : n;
          },
        },
        [v.Odu.VOICE_V3]: {
          renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: l } = e;
            return (0, i.jsx)(h.Z, {
              anchorLeft: n,
              id: t.id,
              locked: l,
              pinned: t.pinned,
              widget: v.Odu.VOICE,
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
                    var o, r;
                    return (
                      (o = e),
                      (r = t),
                      void (0, l.jW)(o, async () => {
                        let { default: e } = await n
                          .e("32382")
                          .then(n.bind(n, 955280));
                        return (
                          r(!0),
                          (t) => (0, i.jsx)(e, { ...t, onClose: () => r(!1) })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [v.Odu.CLICK_ZONE_DEBUG]: {
          renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(r.Z, { id: t.id, locked: n, pinned: t.pinned });
          },
          renderTitle: () => (0, i.jsx)(f.PI, { children: "Click Zone Debug" }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(f.ls, {
                  onClick: (e) => {
                    var o, r;
                    return (
                      (o = e),
                      (r = t),
                      void (0, l.jW)(o, async () => {
                        let { default: e } = await n
                          .e("38813")
                          .then(n.bind(n, 541501));
                        return (
                          r(!0),
                          (t) => (0, i.jsx)(e, { ...t, onClose: () => r(!1) })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [v.Odu.GO_LIVE]: {
          renderWidget(e) {
            var t;
            let { widget: n, locked: l, size: o, dragStart: r } = e;
            return (0, c.ZL)(n)
              ? (0, i.jsx)(s.Z, {
                  id: n.id,
                  locked: l,
                  pinned: n.pinned,
                  opacity: n.opacity,
                  size: o,
                  widget: v.Odu.GO_LIVE,
                  isPreviewingInGame: !1,
                  dragStart: r,
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
            var o;
            return (0, c.ZL)(e)
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(f.ls, {
                      onClick: (o) =>
                        (function (e, t, o) {
                          if (!!(0, c.ZL)(t))
                            (0, l.jW)(e, async () => {
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
                    (0, i.jsx)(f.GY, {
                      widgetId: e.id,
                      showAllStreams:
                        null === (o = e.meta.showAllStreams) ||
                        void 0 === o ||
                        o,
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
                borderWidth: l,
                padding: o,
                containerSpecs: r,
              } = e,
              s = 2 * l + 2 * o,
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
              f.width > r.maxX &&
                ((f.width = r.maxX), (f.height = (r.maxX - s) * h + s)),
              f.height > r.maxY &&
                ((f.height = r.maxY), (f.width = (r.maxY - s) * d + s)),
              f
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
            return (0, i.jsx)(p.Z, { locked: t });
          },
          renderTitle: () =>
            (0, i.jsx)(f.PI, { children: x.intl.string(x.t.gnKWdX) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(f.ls, {
                  onClick: (e) => {
                    var o, r;
                    return (
                      (o = e),
                      (r = t),
                      void (0, l.jW)(o, async () => {
                        let { default: e } = await n
                          .e("94706")
                          .then(n.bind(n, 168133));
                        return (
                          r(!0),
                          (t) => (0, i.jsx)(e, { ...t, onClose: () => r(!1) })
                        );
                      })
                    );
                  },
                }),
                (0, i.jsx)(f.RT, { id: e.id, pinned: e.pinned }),
              ],
            }),
        },
        [v.Odu.ACTIVITY]: {
          renderWidget: () => (0, i.jsx)(o.Z, {}),
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
          return p;
        },
        ls: function () {
          return h;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        o = n.n(l),
        r = n(692547),
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
                color: r.Z.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
      function f(e) {
        let { widgetId: t, showAllStreams: n } = e,
          l = n ? c.intl.string(c.t.q2B3rq) : c.intl.string(c.t.JKGi6u),
          d = () => {
            (0, s.zG)(t, { showAllStreams: !n });
          };
        return (0, i.jsx)(a.Tooltip, {
          text: l,
          "aria-label": l,
          children: (e) =>
            (0, i.jsx)(a.Clickable, {
              ...e,
              className: o()(u.button, n && u.active),
              onClick: d,
              children: (0, i.jsx)(a.ScreenIcon, {
                size: "xxs",
                color: n ? r.Z.colors.BG_BRAND : r.Z.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
      function p(e) {
        let { id: t, pinned: n } = e,
          l = n ? c.intl.string(c.t.cSu80t) : c.intl.string(c.t.cM8Vnp);
        return (0, i.jsx)(a.Tooltip, {
          text: l,
          "aria-label": l,
          children: (e) =>
            (0, i.jsx)(a.Clickable, {
              ...e,
              className: o()(u.button, n && u.active),
              onClick: () => (0, s.xh)(t),
              children: (0, i.jsx)(a.PinUprightIcon, {
                size: "xxs",
                color: n ? r.Z.colors.BG_BRAND : r.Z.colors.INTERACTIVE_ACTIVE,
              }),
            }),
        });
      }
    },
    134849: function (e, t, n) {
      n(653041), n(47120);
      var i = n(200651),
        l = n(192379),
        o = n(442837),
        r = n(481060),
        a = n(237997),
        s = n(804570),
        c = n(388627),
        u = n(561064),
        d = n(380736),
        h = n(693091),
        f = n(371467),
        p = n(981631),
        m = n(388032),
        v = n(109020);
      let x = [];
      function g(e) {
        return e.notification.id;
      }
      function C(e, t, n, l) {
        let { index: o, notification: r, locked: a } = t;
        return (0, i.jsx)(
          d.Z,
          {
            index: o,
            notification: r,
            locked: a,
            transitionState: n,
            cleanUp: l,
          },
          e,
        );
      }
      function Z(e) {
        return (0, i.jsx)("div", { className: v.container, children: e });
      }
      let _ = (e) => l.useState(() => new h.AS(e))[0];
      t.Z = l.memo(function (e) {
        let { locked: t } = e,
          n = (0, o.e7)(
            [a.Z, f.Z],
            () => {
              if (a.Z.getNotificationPositionMode() === p._vf.DISABLED)
                return x;
              let e = [],
                n = 0;
              for (let i of f.Z.getNotifications()) {
                if (n > 4) break;
                (!t || i.status !== p._1z.TIMED_OUT) &&
                  (e.push({ index: n, locked: t, notification: i }), n++);
              }
              return e;
            },
            [t],
            c.E6,
          ),
          d = _(t);
        return (l.useLayoutEffect(() => d.updateState(n, t)),
        l.useLayoutEffect(
          () => (d.initialize((0, u.i)()), () => d.cleanUp()),
          [d],
        ),
        0 !== n.length || t)
          ? (0, i.jsx)(h.S4.Provider, {
              value: d,
              children: (0, i.jsx)(r.TransitionGroup, {
                items: n,
                renderItem: C,
                getItemKey: g,
                wrapChildren: Z,
              }),
            })
          : t
            ? null
            : (0, i.jsx)(s.E, {
                emptyText: m.intl.string(m.t.O1Nbjo),
                icon: r.BellIcon,
                absolute: !0,
              });
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
        l = n(192379),
        o = n(120356),
        r = n.n(o),
        a = n(442837),
        s = n(481060),
        c = n(410575),
        u = n(933557),
        d = n(471445),
        h = n(318374),
        f = n(46145),
        p = n(814443),
        m = n(592125),
        v = n(430824),
        x = n(496675),
        g = n(699516),
        C = n(594174),
        Z = n(979651),
        _ = n(823379),
        I = n(981631),
        j = n(388032),
        E = n(693215);
      function b(e) {
        let { channel: t, currentVoiceChannel: n } = e,
          l = (0, d.KS)(t),
          o = t.id === (null == n ? void 0 : n.id),
          a = o
            ? s.tokens.colors.TEXT_POSITIVE
            : s.tokens.colors.INTERACTIVE_NORMAL;
        return (0, i.jsxs)("div", {
          className: E.channelNameContainer,
          children: [
            null != l ? (0, i.jsx)(l, { color: a, size: "xs" }) : void 0,
            (0, i.jsx)(s.Text, {
              variant: "text-sm/semibold",
              className: r()(E.label, E.channelName),
              color: o ? "text-positive" : "text-normal",
              children: (0, u.F6)(t, C.default, g.Z),
            }),
          ],
        });
      }
      function w(e) {
        let { channel: t, currentVoiceChannel: n } = e,
          l = t.getGuildId(),
          o = (0, a.e7)([v.Z], () => v.Z.getGuild(l), [l]),
          r = t.id === (null == n ? void 0 : n.id);
        return null == o
          ? null
          : (0, i.jsx)("div", {
              className: E.channelMenuSubContainer,
              children: (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: r ? "text-positive" : void 0,
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
                  var n, i, l, o;
                  return (
                    (null !==
                      (l =
                        null === (n = p.Z.getUserAffinity(t.id)) || void 0 === n
                          ? void 0
                          : n.affinity) && void 0 !== l
                      ? l
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
          l = t.getGuildId();
        return null == l
          ? null
          : (0, i.jsx)(h.Z, {
              users: n,
              guildId: l,
              maxUsers: 3,
              size: s.AvatarSizes.SIZE_20,
              overflowCountClassName: E.overflowCount,
              overflowCountVariant: "text-xxs/semibold",
              disableUserPopout: !0,
            });
      }
      function k(e) {
        let { currentVoiceChannel: t, onClose: n, onSelect: o } = e,
          r = (0, a.Wu)([g.Z, p.Z], () =>
            g.Z.getFriendIDs().sort((e, t) => {
              var n, i, l, o;
              return null == e && null == t
                ? 0
                : null == e
                  ? 1
                  : null == t
                    ? -1
                    : (null !==
                        (l =
                          null === (n = p.Z.getUserAffinity(t)) || void 0 === n
                            ? void 0
                            : n.affinity) && void 0 !== l
                        ? l
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
          u = (0, a.Wu)(
            [C.default],
            () =>
              r.reduce((e, t) => {
                let n = C.default.getUser(t);
                return null != n && e.push(n), e;
              }, []),
            [r],
          ),
          d = (0, a.Wu)(
            [f.Z, Z.Z, m.Z, x.Z],
            () => {
              let e = new Set(
                  f.Z.getChannelHistory().reduce((e, t) => {
                    let n = m.Z.getChannel(t);
                    return (
                      null != n &&
                        x.Z.can(I.Plq.CONNECT, n) &&
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
                    let l = m.Z.getChannel(i);
                    return (
                      null != l &&
                        x.Z.can(I.Plq.CONNECT, l) &&
                        !e.has(i) &&
                        t.size < 3 &&
                        t.add(i),
                      t
                    );
                  }, new Set());
              return [...Array.from(e), ...t]
                .map((e) => m.Z.getChannel(e))
                .filter(_.lm);
            },
            [u],
          ),
          h = l.useCallback(
            (e) => {
              o(e), n();
            },
            [o, n],
          );
        return (0, i.jsx)(c.Z, {
          section: I.jXE.CONTEXT_MENU,
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
//# sourceMappingURL=64080066c7167eca1dca.js.map
