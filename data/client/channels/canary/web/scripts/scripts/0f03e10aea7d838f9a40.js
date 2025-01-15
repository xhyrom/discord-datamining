"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5336"],
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
      let l = { timeToLiveMs: 5e3, reappearTimeMs: 1e4 },
        r = (0, i.H)(() => l),
        o = 1e4,
        a = 2e4,
        s = 500,
        c = 1e3;
      function u(e) {
        r.setState({ timeToLiveMs: e });
      }
      function d(e) {
        r.setState({ reappearTimeMs: e });
      }
      t.ZP = r;
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
        r = n(120356),
        o = n.n(r),
        a = n(348327),
        s = n.n(a),
        c = n(476183),
        u = n(481060),
        d = n(667142),
        h = n(333031),
        f = n(275252);
      let p = { mass: 1, tension: 600, friction: 60, clamp: !0 };
      function m(e) {
        let { locked: t, pinned: n } = e,
          [r, a] = l.useState(0),
          [m, v] = l.useState(0),
          [g, x] = l.useState(0),
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
                  x((t) => {
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
          k = r > 0 && m - r < 1e3,
          N = (0, u.useTransition)(g > 0 && g < m && m - g < I, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: p,
          });
        return t && !n
          ? null
          : (0, i.jsx)(i.Fragment, {
              children: N(
                (e, t) =>
                  t &&
                  (0, i.jsx)(c.animated.div, {
                    style: e,
                    className: f.clickZoneDebugContainer,
                    children: (0, i.jsx)(h.Z, {
                      className: o()(f.clickZone, k && f.clickBackground),
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
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(476183),
        s = n(481060),
        c = n(110924),
        u = n(752802),
        d = n(340101),
        h = n(113812);
      let f = 8,
        p = (e) => {
          let {
            participant: t,
            width: n,
            locked: l,
            widgetId: r,
            pinned: o,
          } = e;
          return (0, i.jsx)("div", {
            className: h.tileContainer,
            children: (0, i.jsx)(
              u.Z,
              { participant: t, width: n, locked: l, widgetId: r, pinned: o },
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
            locked: r,
            streamParticipants: u,
            participantsVersion: v,
            pinned: g,
          } = e,
          x = (9 / 16) * n,
          C = u.map((e) => ({
            participant: e,
            key: e.user.id,
            width: n,
            locked: r,
            widgetId: t,
            height: x,
            pinned: g,
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
          className: o()({
            [h.gridContainer]: !0,
            [h.vertical]: _,
            [h.horizontal]: !_,
          }),
          style: _ ? { height: I } : { width: j },
          children: E((e, t, l, r) =>
            (0, i.jsx)(a.animated.div, {
              className: h.gridItem,
              style: Object.assign({}, e, {
                width: n,
                height: x,
                zIndex: C.length - r,
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
        r = n(972959),
        o = n(569545);
      let a = (0, r.H)(() => ({ streams: {} }));
      function s(e) {
        var t, n;
        let i = (0, o.V9)(e);
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
        r = n(120356),
        o = n.n(r),
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
        g = n(979264),
        x = n(871118),
        C = n(352978),
        Z = n(833519),
        _ = n(839662),
        I = n(199902),
        j = n(314897),
        E = n(131951),
        b = n(594174),
        w = n(5192),
        k = n(1226),
        N = n(981631),
        y = n(388032),
        L = n(301133);
      function S(e) {
        let { participant: t } = e,
          n = t.user.id,
          r = (0, a.e7)(
            [E.Z],
            () => {
              let e = (0, m.Z)(t.type);
              return E.Z.isLocalMute(t.user.id, e);
            },
            [t],
          ),
          o = (0, a.e7)([j.default], () => j.default.getId()),
          { hasVideo: d } = (0, _.Z)(t, o),
          h = r && d,
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
        let { hasActiveStream: t, participant: l, onEnablePin: r } = e,
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
              className: o()(L.controlBackground, {
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
                          r();
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
                      (0, i.jsx)(g.ZP, {
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
                            let { onClick: t, ...r } = e;
                            return (0, i.jsx)(c.Clickable, {
                              ...r,
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
      let A = new Set([N.jm8.ENDED, N.jm8.FAILED, N.jm8.PAUSED]),
        O = l.memo(function (e) {
          let {
              participant: t,
              width: n,
              locked: l,
              widgetId: r,
              pinned: s,
            } = e,
            c = (0, a.e7)(
              [I.Z],
              () => I.Z.getActiveStreamForUser(t.user.id, t.stream.guildId),
              [t.user.id, t.stream.guildId],
            ),
            u = null != c && A.has(c.state),
            d = null != c,
            f = (0, k.yA)(t.stream),
            p = (0, k.xN)(t.stream);
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
                        children: (0, i.jsx)(x.Z, {
                          noText: !0,
                          className: o()(L.absoluteFill),
                          stream: t.stream,
                        }),
                      }),
                  l
                    ? null
                    : (0, i.jsx)(T, {
                        participant: t,
                        hasActiveStream: d,
                        onEnablePin: () => {
                          !s && (0, h.xh)(r);
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
        l = n(192379),
        r = n(442837),
        o = n(765250),
        a = n(393238),
        s = n(358221),
        c = n(569545),
        u = n(199902),
        d = n(314897),
        h = n(592125),
        f = n(355863),
        p = n(944486),
        m = n(350663),
        v = n(340101),
        g = n(804609);
      let x = [];
      function C(e, t, n, i) {
        let l = (i - 1) * m.z;
        return e === v.C5.HORIZONTAL
          ? Math.min(Math.max((t - l) / i, 256), Math.max((16 * n) / 9, 256))
          : Math.min(Math.max(t, 256), Math.max((((n - l) / i) * 16) / 9, 256));
      }
      function Z(e) {
        var t;
        let {
            id: n,
            size: Z,
            locked: _,
            padding: I,
            borderWidth: j,
            opacity: E,
            horizontal: b,
            pinned: w,
          } = e,
          k = 2 * I + 2 * j;
        let { width: N, height: y } = {
            width: "number" == typeof (t = Z).width ? t.width : 256,
            height: "number" == typeof t.height ? t.height : 144,
          },
          L = (0, r.e7)([p.Z], () => p.Z.getVoiceChannelId()),
          { width: S, height: T, ref: A } = (0, a.Z)(),
          O = (0, r.e7)(
            [f.Z],
            () => {
              var e;
              let t = f.Z.getWidget(n);
              return (
                !!(0, v.ZL)(t) &&
                (null === (e = t.meta.showAllStreams) || void 0 === e || e)
              );
            },
            [n],
          ),
          P = (0, r.e7)([h.Z], () => h.Z.getChannel(L)),
          V = (0, r.e7)([d.default], () => d.default.getId()),
          { participantsVersion: M, streamParticipants: R } = (0, r.cj)(
            [u.Z, s.Z],
            () => {
              if (null == L)
                return { streamParticipants: x, participantsVersion: -1 };
              let e = new Set(
                  u.Z.getAllActiveStreamsForChannel(L).map((e) => (0, c.V9)(e)),
                ),
                t = (t) => e.has((0, c.V9)(t.stream)),
                n = s.Z.getStreamParticipants(L).filter(
                  (t) => t.user.id !== V && (!!O || e.has((0, c.V9)(t.stream))),
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
                  participantsVersion: s.Z.getParticipantsVersion(L),
                }
              );
            },
            [L, V, O],
          ),
          D = R.length,
          z = null == P || 0 === D,
          { tileWidth: W, layout: F } = (function (e, t, n, i, r) {
            let o = (function (e, t, n, i) {
                let l = C(v.C5.HORIZONTAL, e, t, n),
                  r = C(v.C5.VERTICAL, e, t, n);
                switch (i) {
                  case v.C5.VERTICAL:
                    return r;
                  case v.C5.HORIZONTAL:
                    return l;
                }
                let o = ((9 * r) / 16 + m.z) * n - m.z;
                return e > (16 * t) / 9
                  ? l
                  : o <= t
                    ? r
                    : (9 * l) / 16 <= t
                      ? l
                      : r;
              })(n, i, t, r),
              a = C(v.C5.VERTICAL, n, i, t),
              s = null != r ? r : o === a ? v.C5.VERTICAL : v.C5.HORIZONTAL,
              [c, u] = l.useState(o);
            return (
              l.useEffect(() => {
                !e && u(o);
              }, [e, o]),
              { layout: s, tileWidth: c }
            );
          })(
            !1,
            D,
            null != S ? S : N - k,
            null != T ? T : y - k,
            b ? v.C5.HORIZONTAL : v.C5.VERTICAL,
          ),
          G = {
            id: n,
            width: N,
            height: y,
            sizeOffset: k,
            layout: F,
            padding: I,
            participants: R.length,
          };
        return (!(function (e) {
          let {
              id: t,
              streamParticipants: n,
              layout: i,
              widgetLayoutSpecs: r,
            } = e,
            a = l.useRef(r);
          l.useEffect(() => void (a.current = r)),
            l.useEffect(() => {
              let {
                id: e,
                width: t,
                height: i,
                sizeOffset: l,
                layout: r,
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
              if (r === v.C5.HORIZONTAL) {
                let t = (16 / 9) * (i - l);
                (0, o.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    height: i,
                    width: t * n.length + s * (n.length - 1) + l,
                  },
                });
              } else {
                let i = (9 / 16) * (t - l);
                (0, o.nv)({
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
              if (a.current.participants <= 1) return;
              let {
                id: e,
                width: t,
                height: n,
                sizeOffset: l,
                padding: r,
                participants: s,
              } = a.current;
              if (i === v.C5.HORIZONTAL) {
                let n = t - l;
                (0, o.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    width: n * s + r * (s - 1) + l,
                    height: (9 / 16) * n + l,
                  },
                });
              } else {
                let t = n - l;
                (0, o.nv)({
                  widgetId: e,
                  size: {
                    fixed: !0,
                    width: (16 / 9) * t + l,
                    height: t * s + r * (s - 1) + l,
                  },
                });
              }
            }, [i]),
            l.useEffect(
              () => () => {
                (0, o.nv)({
                  widgetId: t,
                  size: { fixed: !0, width: 256, height: 144 },
                });
              },
              [t],
            );
        })({ id: n, streamParticipants: R, layout: F, widgetLayoutSpecs: G }),
        z && _)
          ? null
          : (0, i.jsx)("div", {
              className: g.goLiveGridContainer,
              style: { opacity: E },
              ref: A,
              children: (0, i.jsx)(m.Z, {
                widgetId: n,
                tileWidth: W,
                locked: _,
                layout: F,
                streamParticipants: R,
                participantsVersion: M,
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
        l = n(192379),
        r = n(120356),
        o = n.n(r),
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
        g = n(567409),
        x = n(74299),
        C = n(199902),
        Z = n(592125),
        _ = n(430824),
        I = n(131951),
        j = n(944486),
        E = n(574254),
        b = n(556296),
        w = n(808506),
        k = n(237997),
        N = n(451478),
        y = n(585483),
        L = n(358085),
        S = n(13140),
        T = n(145597),
        A = n(830917),
        O = n(86071),
        P = n(681603),
        V = n(915614),
        M = n(690336),
        R = n(333031),
        D = n(371651),
        z = n(388627),
        W = n(319414),
        F = n(561064),
        G = n(987650),
        U = n(501787),
        B = n(981631),
        Y = n(206583),
        H = n(388032),
        K = n(220456);
      let X = !L.isPlatformEmbedded && !1,
        Q = X
          ? (0, i.jsx)(v.Z, {
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
              layoutId: U.OVERLAY_V3_LAYOUT_ID,
              version: 1,
            });
        });
      }
      let ee = l.memo(function (e) {
          let { keybind: t, onClick: n, locked: l } = e;
          return (0, i.jsx)(c.Clickable, {
            className: o()(K.overlayBackground, {
              [K.overlayActive]: !l,
              [K.overlayLocked]: l,
            }),
            onMouseDown: (e) => {
              let { currentTarget: t, target: i, button: l } = e;
              l === B.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: $,
            children: l
              ? null
              : (0, i.jsx)(R.Z, {
                  className: K.closeContainer,
                  children: (0, i.jsx)(V.Z, {
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
                className: K.closeContainer,
                children: (0, i.jsx)(V.Z, {
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
      function er(e) {
        let t = k.Z.isLocked((0, T.QF)());
        "alt" === e.key.toLowerCase() &&
          !t &&
          ("keyup" === e.type.toLowerCase()
            ? y.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 })
            : "keydown" === e.type.toLowerCase() &&
              y.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
      }
      function eo(e) {
        var t, n;
        let { isEmbeddedActivity: r } = e,
          u = (0, F.Z)(),
          {
            locked: v,
            focused: E,
            incompatibleApp: y,
            hasValidResolution: L,
            hasZeroSizeDimension: V,
            keybind: R,
          } = (0, a.cj)([k.Z, N.Z, b.Z], () => {
            let e = N.Z.windowSize((0, A.ZY)(u)),
              t = b.Z.getOverlayKeybind();
            return {
              locked: k.Z.isLocked((0, T.QF)()),
              focused: k.Z.isFocused((0, T.QF)()),
              incompatibleApp: k.Z.incompatibleApp,
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
                u.addEventListener("keydown", er),
                u.addEventListener("keyup", er),
                X &&
                  (u.document.hasFocus() && d.Z.setFocusedPID(T.Js),
                  u.addEventListener("focus", ei),
                  u.addEventListener("blur", el));
            },
            () => {
              u.removeEventListener("keydown", er),
                u.removeEventListener("keyup", er),
                X &&
                  (u.removeEventListener("focus", ei),
                  u.removeEventListener("blur", el));
            },
          ),
          !(function () {
            let e = l.useRef(!1),
              t = (0, z.pL)(),
              n = j.Z.getVoiceChannelId(),
              i = Z.Z.getChannel(n),
              r = null != i ? _.Z.getGuild(i.guild_id) : null,
              o = null != C.Z.getCurrentUserActiveStream(),
              s = null != n,
              c = (0, x.Z)(I.Z) && !o && null != t,
              u = s && null != r && null != n,
              f = (0, g.Ns)(null == t ? void 0 : t.id),
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
              let o = [{ type: G.nc.WELCOME }];
              if (
                (c && u
                  ? o.push({
                      type: G.nc.GO_LIVE_VOICE,
                      game: t,
                      voiceChannelId: n,
                      voiceGuild: r,
                    })
                  : c && o.push({ type: G.nc.GO_LIVE_NON_VOICE, game: t }),
                f.length > 0)
              ) {
                let { enabled: e } = O.Z.getCurrentConfig(
                  { location: "Overlay" },
                  { autoTrackExposure: !0 },
                );
                e && o.push({ type: G.nc.CONTENT_INVENTORY, entries: f });
              }
              d.Z.overlayMounted(...o);
            }, [p, f, s, c, u, t, n, r]);
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
                V || y
                  ? null
                  : (0, i.jsx)(c.ThemeProvider, {
                      theme: B.BRd.DARK,
                      children: (e) =>
                        (0, i.jsxs)("div", {
                          className: o()(K.overlay, e),
                          children: [
                            !r && Q,
                            (0, i.jsx)(ee, {
                              locked: v,
                              keybind: R,
                              onClick: en,
                            }),
                            L
                              ? (0, i.jsx)(M.Z, {
                                  className: o()({
                                    [K.layoutLocked]: v,
                                    [K.layoutUnlocked]: !v,
                                  }),
                                })
                              : v
                                ? null
                                : (0, i.jsx)("div", {
                                    className: K.invalidContainer,
                                    children: (0, i.jsx)("div", {
                                      className: K.inactiveContainer,
                                      children: H.intl.format(H.t.ketnW1, T.FW),
                                    }),
                                  }),
                            (0, i.jsx)(W.Z, {}),
                            !r &&
                              X &&
                              (0, i.jsx)(et, { locked: v, focused: E }),
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
        l = n(192379),
        r = n(442837),
        o = n(481060),
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
        return n === o.TransitionStates.YEETED
          ? null
          : (0, i.jsx)(d.Z, { ...t, transitionState: n, cleanUp: l }, e);
      }
      let g = [];
      t.Z = l.memo(function (e) {
        let { className: t } = e,
          n = (0, f.Z)(),
          d = (0, r.e7)([s.Z], () => s.Z.windowSize((0, c.ZY)(n))),
          x = (0, r.e7)(
            [a.Z],
            () => {
              let e = a.Z.getLayout(p.OVERLAY_V3_LAYOUT_ID);
              if (null == e) return g;
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
        return (0, i.jsx)(o.TransitionGroup, {
          items: x,
          renderItem: v,
          getItemKey: m,
          wrapChildren: C,
        });
      });
    },
    340101: function (e, t, n) {
      n.d(t, {
        C5: function () {
          return l;
        },
        ZL: function () {
          return o;
        },
        js: function () {
          return a;
        },
      });
      var i,
        l,
        r = n(981631);
      function o(e) {
        return (null == e ? void 0 : e.type) === r.Odu.GO_LIVE;
      }
      function a(e) {
        return e.type === r.Odu.VIDEO;
      }
      ((i = l || (l = {})).HORIZONTAL = "horizontal"),
        (i.VERTICAL = "vertical");
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
          return eo;
        },
        c_: function () {
          return ea;
        },
        sm: function () {
          return er;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(691324),
        o = n(442837),
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
        g = n(40851),
        x = n(571250),
        C = n(628581),
        Z = n(659580),
        _ = n(793865),
        I = n(55311),
        j = n(575175),
        E = n(933557),
        b = n(471445),
        w = n(44315),
        k = n(74299),
        N = n(803647),
        y = n(565138),
        L = n(917405),
        S = n(763296),
        T = n(603074),
        A = n(879815),
        O = n(189771),
        P = n(294629),
        V = n(67844),
        M = n(544384),
        R = n(892807),
        D = n(560688),
        z = n(871499),
        W = n(199902),
        F = n(314897),
        G = n(430824),
        U = n(131951),
        B = n(19780),
        Y = n(944486),
        H = n(594174),
        K = n(979651),
        X = n(388627),
        Q = n(810632),
        q = n(981631),
        J = n(388032),
        $ = n(769893);
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
          iconColor: r,
          tooltip: o,
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
          text: o,
          "aria-label": !1,
          children: (e) => {
            let { onMouseEnter: o, onMouseLeave: f, ...v } = e;
            return (0, i.jsx)(z.d, {
              ...v,
              onClick: null != u ? u : () => {},
              color: t ? s : a,
              className: $.button,
              disabled: n,
              popoutOpen: c,
              onMouseEnter: (e) => {
                null == o || o(), null == h || h(e);
              },
              onMouseLeave: (e) => {
                null == f || f(), null == p || p(e);
              },
              ignoreColorForCaret: !c,
              iconComponent: l,
              iconColor: r,
              isActive: t,
              onContextMenu: m,
              onPopoutClick: d,
            });
          },
        });
      }
      function en(e) {
        let { voiceChannel: t, locked: n } = e,
          { suppress: o, selfMute: a, mute: s } = (0, P.Z)(t),
          u = a || s || o,
          d = (0, C.Z)(a, s, o, !1),
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
              onClick: () => (0, j.Z)(s, o, q.jXE.OVERLAY),
              onPopoutClick: n,
              popoutOpen: l,
              onContextMenu: n,
              iconColor: u ? (0, w.Lq)(r.I.RED_400) : void 0,
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
          { selfDeaf: r, deaf: o } = (0, A.Z)(t),
          a = r || o,
          {
            Component: c,
            play: u,
            events: { onMouseEnter: d, onMouseLeave: h },
          } = (0, s.l)(a ? "undeafen" : "deafen"),
          p = o ? f.HeadphonesDenyIcon : c;
        l.useEffect(() => () => u(), [a, u]);
        let m = () => {
            (0, I.Z)(o, q.jXE.OVERLAY);
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
              tooltip: (0, x.Z)(r, o, !1),
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
        let { voiceChannel: n, locked: r } = e,
          a = (0, o.e7)([U.Z], () => U.Z.isVideoEnabled()),
          s = (0, o.e7)([U.Z], () => Object.values(U.Z.getVideoDevices())[0]),
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
          g = c ? () => v() : () => m(!a),
          {
            Component: x,
            play: C,
            events: { onMouseEnter: Z, onMouseLeave: I },
          } = (0, h.o)(a ? "disable" : "enable"),
          j =
            null != n
              ? (0, V.X)({
                  enabled: a,
                  cameraUnavailable: c,
                  hasPermission: d,
                  channel: n,
                })
              : void 0;
        l.useEffect(() => () => C(), [a, C]);
        let E = ee(r),
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
              iconComponent: x,
              tooltip: j,
              onClick: g,
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
      function er(e) {
        let t,
          { voiceChannel: n, locked: r } = e,
          a = (0, o.e7)([H.default], () => H.default.getCurrentUser()),
          s = (0, O.Z)(n),
          c = (0, o.cj)([U.Z], () => (0, k.Z)(U.Z)),
          d = (0, o.e7)([W.Z], () => W.Z.getCurrentUserActiveStream()),
          h = (0, g.bp)(),
          p = (0, Q.B)(),
          m = null != d;
        if (m) t = J.intl.string(J.t.S5anIS);
        else if (null != n) {
          let e = (0, X.pL)();
          t = s
            ? null != e
              ? J.intl.format(J.t.AB5gT0, { game: e.name })
              : J.intl.string(J.t.FeUKeH)
            : J.intl.string(J.t.uQn9Bw);
        }
        let v = () => {
            if (m) return (0, N.Z)(d, !1);
            p();
          },
          {
            Component: x,
            events: { onMouseEnter: C, onMouseLeave: Z },
            play: _,
          } = (0, u.P)(m ? "disable" : "enable");
        l.useEffect(() => () => _(), [m, _]);
        let I = ee(r);
        return (0, i.jsx)(f.Popout, {
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return null != n
              ? (0, i.jsx)(M.Z, {
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
              { isShown: r } = n;
            return (0, i.jsx)(et, {
              iconComponent: x,
              tooltip: t,
              isToggled: m,
              onClick: v,
              onPopoutClick: null != d ? l : void 0,
              popoutOpen: r,
              onContextMenu: l,
              onMouseEnter: C,
              onMouseLeave: Z,
              disabled: !c || !s,
            });
          },
        });
      }
      function eo(e) {
        var t;
        let { voiceChannel: l, locked: r } = e,
          a =
            null !== (t = null == l ? void 0 : l.getGuildId()) && void 0 !== t
              ? t
              : null,
          { mute: s, suppress: c } = (0, P.Z)(l),
          u = (0, o.e7)([U.Z], () => U.Z.isDeaf()),
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
            events: { onClick: g, onMouseEnter: x, onMouseLeave: C },
          } = (0, d.j)(),
          Z = ee(r),
          _ = (0, o.e7)(
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
                g(), n(e);
              },
              highlightedColor: _ ? "green" : "white",
              defaultColor: _ ? "green" : "primaryDark",
              onContextMenu: p,
              onMouseEnter: x,
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
          l = (0, o.e7)(
            [Y.Z],
            () => Y.Z.getVoiceChannelId() === (null == t ? void 0 : t.id),
          ),
          r = () => {
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
            let { onClick: o } = e,
              { isShown: a } = n;
            return (0, i.jsx)(et, {
              iconComponent: p,
              tooltip:
                null != t
                  ? J.intl.string(J.t["6vrfgo"])
                  : J.intl.string(J.t.S0W8Z2),
              onClick: l ? r : o,
              defaultColor: l ? "red" : "primaryDark",
              onMouseEnter: u,
              onMouseLeave: d,
              onContextMenu: o,
              isToggled: a,
              onPopoutClick: l ? o : void 0,
              popoutOpen: a,
            });
          },
        });
      }
      function es(e) {
        let { voiceChannel: t } = e,
          n = (0, o.e7)([G.Z], () => G.Z.getGuild(t.getGuildId()), [t]);
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
          l = (0, o.cj)([B.Z], () => ({
            channelId: B.Z.getChannelId(),
            quality: B.Z.getQuality(),
            state: B.Z.getState(),
            lastPing: B.Z.getLastPing(),
          })),
          r = null != n,
          a = (0, o.e7)([K.Z], () => null != n && K.Z.hasVideo(n), [n]);
        return (
          r &&
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
        r = n(512722),
        o = n.n(r),
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
        g = n(751571),
        x = n(361291),
        C = n(592125),
        Z = n(430824),
        _ = n(131951),
        I = n(944486),
        j = n(594174),
        E = n(449224),
        b = n(358085),
        w = n(981631),
        k = n(37113),
        N = n(761274);
      function y() {
        let e = (0, a.e7)([I.Z], () => I.Z.getVoiceChannelId()),
          t = (0, a.e7)([C.Z], () => C.Z.getChannel(e), [e]),
          r = (0, a.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return (
              o()(
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
            o = (0, b.isWindows)() ? (0, p.Z)(u.ZP, E.Z) : null;
          if (null == o && null == l) return !1;
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
            } = x.Z.getState(),
            [I, j] =
              null !== (i = (0, f.Z)(s, r, a)) && void 0 !== i
                ? i
                : [k.LY.RESOLUTION_720, k.ws.FPS_30],
            w = s,
            L = d,
            T = m;
          w !== k.tI.PRESET_CUSTOM && ((L = I), (T = j)),
            !(0, h.Z)(w, L, T, r, a) && ((L = I), (T = j)),
            !(0, h.Z)(w, L, T, r, a, t) &&
              ((w = k.tI.PRESET_VIDEO),
              (L = k.LY.RESOLUTION_720),
              (T = k.ws.FPS_30)),
            (0, c.Rc)({
              preset: w,
              resolution: L,
              frameRate: T,
              soundshareEnabled: C,
            });
          let A = (0, v.Z)(o, l, u.ZP.getRunningGames()),
            O =
              !(0, b.isWindows)() ||
              null == A ||
              (null == l ? void 0 : l.id.startsWith("camera:")) ||
              null == A
                ? null
                : A.pid,
            P = null,
            V = null;
          return (
            null == O && null != l && ((P = l.id), (V = l.name)),
            !!(
              _.Z.getUseSystemScreensharePicker() ||
              (await g.Z.hasPermission(N.Eu.SCREEN_RECORDING, {
                showAuthorizationError: !1,
              }))
            ) &&
              ((0, c.WH)(y, e, {
                pid: O,
                sourceId: P,
                sourceName: V,
                audioSourceId: null,
                sound: C,
                previewDisabled: !0,
              }),
              !0)
          );
        }, [t, y, r, e]);
        return l.useCallback(async () => {
          if (!(!L || null == e || (await T())))
            (0, s.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                n.e("79477"),
                n.e("79360"),
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
        r = n.n(l),
        o = n(442837),
        a = n(592125),
        s = n(944486),
        c = n(293224),
        u = n(500479);
      function d(e) {
        let { locked: t } = e,
          n = (0, o.e7)([s.Z], () => s.Z.getVoiceChannelId()),
          l = (0, o.e7)([a.Z], () => a.Z.getChannel(n)),
          d = null != l;
        return (0, i.jsxs)("div", {
          className: r()({ [u.panelContainer]: !0, [u.locked]: t }),
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
          return b;
        },
      });
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
        a = n(442837),
        s = n(239091),
        c = n(765250),
        u = n(393238),
        d = n(358221),
        h = n(933557),
        f = n(352978),
        p = n(27457),
        m = n(796638),
        v = n(592125),
        g = n(131951),
        x = n(944486),
        C = n(906037),
        Z = n(501787),
        _ = n(65154),
        I = n(334551);
      function j(e) {
        var t;
        let { participant: n, channel: l, context: r } = e,
          o = null === (t = n.user) || void 0 === t ? void 0 : t.id;
        return (0, a.e7)(
          [g.Z],
          () =>
            null != n.user &&
            null != r &&
            null != l &&
            g.Z.isLocalVideoDisabled(o, r),
          [o, n.user, r, l],
        )
          ? null
          : (0, i.jsx)(p.ZP, { ...e });
      }
      function E(e) {
        let {
            context: t = _.Yn.DEFAULT,
            participants: r,
            locked: a,
            widget: c,
            channel: u,
            width: d,
            height: h,
            containerRef: p,
          } = e,
          m = (e, l) => {
            (0, s.jW)(l, async () => {
              let { default: l } = await Promise.all([
                n.e("79695"),
                n.e("69220"),
                n.e("76747"),
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
          v = r.length > 0 && null != t && null != u && (!a || c.pinned);
        l.useEffect(() => {
          (0, C.m3)(
            {
              locked: a,
              pinned: c.pinned,
              widget: c.type,
              isPreviewingInGame: !1,
            },
            v,
          );
        }, [a, c, v]);
        let g = "boolean" != typeof c.meta.horizontal || c.meta.horizontal;
        return null == u
          ? null
          : (0, i.jsx)("div", {
              ref: p,
              className: o()({
                [I.videoList]: !0,
                [I.vertical]: !g,
                [I.hidden]: !v && a,
              }),
              style: { opacity: c.opacity },
              children: r.map((e) =>
                (0, i.jsx)(
                  j,
                  {
                    participant: e,
                    width: d,
                    className: I.tile,
                    containerStyle: { width: d, height: h },
                    fit: f.L.COVER,
                    channel: u,
                    inPopout: !0,
                    inCall: !0,
                    noBorder: !0,
                    onContextMenu: a ? void 0 : m,
                    forceIdle: a,
                    paused: !v,
                    inOverlayPopout: !0,
                    context: t,
                  },
                  e.id,
                ),
              ),
            });
      }
      function b(e) {
        let t = (0, a.e7)([x.Z, v.Z], () =>
            v.Z.getChannel(x.Z.getVoiceChannelId()),
          ),
          n = (0, h.ZP)(t),
          r = (0, a.Wu)([d.Z], () =>
            null != t ? d.Z.getVideoParticipants(t.id) : [],
          ),
          o = (0, a.e7)([d.Z], () =>
            null != t ? d.Z.getParticipantsVersion(t.id) : 0,
          ),
          s =
            "boolean" != typeof e.widget.meta.horizontal ||
            e.widget.meta.horizontal,
          { width: f, height: p, ref: g } = (0, u.Z)(e.locked, e.widget.pinned),
          { participantTileWidth: C, visibleParticipants: _ } = (0, m.ZB)(
            s ? (null != f ? f : e.width) : null != p ? p : e.height,
            r,
            {
              tileWidth: Z.OVERLAY_TILE_WIDTH,
              tileMinWidth: Z.OVERLAY_TILE_MIN_WIDTH,
              tileMargin: Z.OVERLAY_TILE_MARGIN,
              limit: 8,
              cropSelfVideo: !0,
              version: o,
            },
          ),
          I = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height,
          },
          j = l.useRef(I);
        return (
          l.useLayoutEffect(() => void (j.current = I)),
          l.useLayoutEffect(() => {
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
            participants: _,
            participantsVersion: o,
            width: s ? C : null != f ? f : e.width,
            height: s ? (null != p ? p : e.height) : C,
            containerRef: g,
          })
        );
      }
    },
    243487: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return W;
        },
      }),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
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
        g = n(979264),
        x = n(701362),
        C = n(552282),
        Z = n(565799),
        _ = n(501655),
        I = n(597998),
        j = n(199902),
        E = n(314897),
        b = n(592125),
        w = n(355863),
        k = n(131951),
        N = n(944486),
        y = n(938475),
        L = n(237997),
        S = n(136015),
        T = n(51144),
        A = n(145597),
        O = n(388627),
        P = n(981631),
        V = n(65154),
        M = n(540422);
      function R(e) {
        let { avatarSize: t, userId: n, channelId: l, guildId: r } = e,
          o = 2 * t,
          a = -(t / 2);
        return (0, i.jsx)("div", {
          className: M.effect,
          style: { top: a, left: a, width: o, height: o },
          children: (0, i.jsx)(m.Z, {
            userId: n,
            channelId: l,
            guildId: r,
            containerDimensions: { width: o, height: o },
          }),
        });
      }
      function D(e) {
        let {
            channel: t,
            flipped: n = !1,
            locked: r = !1,
            user: c,
            nick: u,
            displayNameMode: d,
            displayUserMode: p,
            size: m = P.ipw.LARGE,
            onClick: v,
            onContextMenu: C,
            context: Z,
            guildId: _,
            voiceState: b,
            showStreamPreview: w,
            onShowStreamPreview: N,
            onWatchStream: y,
          } = e,
          L = (0, a.e7)([E.default], () => E.default.getId() === c.id, [c.id]),
          [S, T, A] = (0, a.Wu)(
            [k.Z],
            () =>
              L
                ? [
                    !k.Z.isSupported() ||
                      k.Z.isSelfMute() ||
                      k.Z.isSelfMutedTemporarily(),
                    k.Z.isSelfDeaf(),
                    !1,
                  ]
                : [
                    !k.Z.isSupported() || k.Z.isLocalMute(c.id),
                    !1,
                    k.Z.isLocalVideoDisabled(c.id),
                  ],
            [L, c.id],
          ),
          O = (0, a.e7)([j.Z], () => j.Z.getCurrentUserActiveStream()),
          V = (0, a.Wu)([j.Z], () => (null != O ? j.Z.getViewerIds(O) : [])),
          D = (0, f.Z)({ userId: c.id, context: Z }),
          z = (0, a.e7)([j.Z], () => j.Z.getStreamForUser(c.id, _)),
          W = null != z,
          F = l.useMemo(
            () => null != O && O.ownerId !== c.id && V.includes(c.id),
            [O, c.id, V],
          ),
          G = l.useCallback(() => N(null), [N]),
          U = l.useCallback(
            () =>
              (0, i.jsx)(x.Z, {
                user: c,
                channel: t,
                onWatch: () => {
                  (0, h.rn)(z, { forceMultiple: !0, noFocus: !0 }), G(), y();
                },
                onAction: y,
                previewIsOpen: w,
                location: P.Sbl.UNLOCKED_OVERLAY,
                hideTip: !0,
              }),
            [c, t, z, w, G, y],
          );
        if (p === P.OYC.ONLY_WHILE_SPEAKING && r && !D) return null;
        let { mute: B, suppress: Y, deaf: H } = b,
          K = m === P.ipw.LARGE ? 32 : 24;
        return (0, i.jsxs)(s.Clickable, {
          className: o()(M.voiceUser, {
            [M.speaking]: D,
            [M.interactive]: !r,
            [M.flipped]: n,
          }),
          onClick: r ? void 0 : (e) => (null == v ? void 0 : v(e, c)),
          onContextMenu: r ? void 0 : (e) => (null == C ? void 0 : C(e, c)),
          onMouseEnter: () => N(c.id),
          onMouseLeave: G,
          children: [
            (0, i.jsx)(s.Avatar, {
              className: M.avatar,
              size:
                m === P.ipw.LARGE
                  ? s.AvatarSizes.SIZE_32
                  : s.AvatarSizes.SIZE_24,
              src: c.getAvatarURL(_, K),
              "aria-hidden": !0,
            }),
            (0, i.jsx)(R, {
              avatarSize: K,
              userId: c.id,
              channelId: t.id,
              guildId: t.getGuildId(),
            }),
            r && (d === P.wC$.NEVER || (!D && d === P.wC$.ONLY_WHILE_SPEAKING))
              ? null
              : (0, i.jsx)(s.Popout, {
                  position: "right",
                  renderPopout: U,
                  shouldShow: w,
                  onRequestClose: G,
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
                        (0, i.jsx)(g.ZP, {
                          primaryGuild: c.primaryGuild,
                          userId: c.id,
                          contextGuildId: _,
                          className: M.clanTag,
                        }),
                        (0, i.jsx)(I.nm, {
                          guildId: _,
                          user: c,
                          video: b.selfVideo,
                          isStreaming: W,
                          className: M.voiceIcons,
                          iconClassName: M.voiceIcon,
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
      function z(e) {
        let {
            id: t,
            context: r = V.Yn.DEFAULT,
            channel: o,
            sortedVoiceStates: a,
            displayNameMode: s,
            displayUserMode: h,
            locked: f,
            pinned: p,
            isPreviewingInGame: m,
            anchorLeft: v,
            avatarSizeMode: g,
          } = e,
          [x, C] = l.useState(null),
          Z = (e, t) => {
            (0, c.jW)(e, async () => {
              let { default: e } = await Promise.all([
                n.e("79695"),
                n.e("69220"),
                n.e("76747"),
              ]).then(n.bind(n, 881351));
              return (n) =>
                (0, i.jsx)(e, {
                  ...n,
                  user: t,
                  showMediaItems: !0,
                  mediaEngineContext: r,
                });
            });
          },
          _ = a.length > 0 && null != r && null != o && (!f || p),
          I = l.useCallback(() => {
            var e, n;
            let i =
                null === (e = w.Z.getWidget(t)) || void 0 === e
                  ? void 0
                  : e.layoutId,
              l =
                null != i
                  ? null === (n = w.Z.getWidgetsForLayout(i)) || void 0 === n
                    ? void 0
                    : n.find((e) => e.type === P.Odu.GO_LIVE)
                  : null;
            null != l &&
              !l.pinned &&
              ((0, u.xh)(l.id),
              d.Z.track(P.rMx.OVERLAY_PIN_TOGGLED, {
                pinned: !0,
                guild_id: null == o ? void 0 : o.guild_id,
                channel_id: null == o ? void 0 : o.id,
                channel_type: null == o ? void 0 : o.type,
                widget_type: P.Odu.GO_LIVE,
              }));
          }, [o, t]);
        return _
          ? (0, i.jsx)(i.Fragment, {
              children: a.map((e) => {
                var t;
                let { user: n, voiceState: l, member: a } = e;
                return null == n
                  ? null
                  : (0, i.jsx)(
                      D,
                      {
                        guildId: null == o ? void 0 : o.guild_id,
                        user: n,
                        nick:
                          null !== (t = null == a ? void 0 : a.nick) &&
                          void 0 !== t
                            ? t
                            : T.ZP.getName(n),
                        flipped: !v,
                        voiceState: l,
                        displayNameMode: s,
                        displayUserMode: h,
                        size: g,
                        locked: f || m,
                        onContextMenu: Z,
                        onClick: Z,
                        context: r,
                        channel: o,
                        showStreamPreview: n.id === x,
                        onShowStreamPreview: C,
                        onWatchStream: I,
                      },
                      n.id,
                    );
              }),
            })
          : null;
      }
      function W(e) {
        var t;
        let n = (0, a.e7)([N.Z, b.Z], () =>
            b.Z.getChannel(N.Z.getVoiceChannelId()),
          ),
          l = (0, v.ZP)(n),
          r = (function () {
            let [e] = (0, a.e7)(
              [y.ZP, Z.Z, N.Z, b.Z],
              () => {
                let e = b.Z.getChannel(N.Z.getVoiceChannelId());
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
          o = (0, a.e7)([j.Z], () => j.Z.getStreamerActiveStreamMetadata()),
          s = (0, O.II)(),
          c = (0, p.q)(null == s ? void 0 : s.id),
          u = (0, a.cj)([j.Z, L.Z], () => {
            let e = j.Z.getCurrentUserActiveStream();
            return {
              displayUserMode: L.Z.getDisplayUserMode(),
              displayNameMode: L.Z.getDisplayNameMode(),
              avatarSizeMode: L.Z.getAvatarSizeMode(),
              streamApplication:
                (null == o ? void 0 : o.pid) === (0, A.QF)()
                  ? (0, C.Z)(s)
                  : null,
              stream: e,
            };
          });
        return (0, i.jsx)(z, {
          ...u,
          application: c,
          ...e,
          sortedVoiceStates: r,
          channel: n,
          title: null != l ? l : "",
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
        l = n(239091),
        r = n(603618),
        o = n(926086),
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
        g = n(388032);
      let x = {
        [v.Odu.VIDEO]: {
          renderWidget(e) {
            let {
              widget: t,
              locked: n,
              size: l,
              padding: r,
              borderWidth: o,
            } = e;
            return (0, i.jsx)(d.Z, {
              id: t.id,
              locked: n,
              widget: t,
              height: "auto" === l.height ? 0 : l.height - 2 * r - 2 * o,
              width: "auto" === l.width ? 0 : l.width - 2 * r - 2 * o,
            });
          },
          renderTitle: () =>
            (0, i.jsx)(f.PI, { children: g.intl.string(g.t.UPvOiY) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(f.ls, {
                  onClick: (r) =>
                    (function (e, t, r) {
                      if (!!(0, c.js)(t))
                        (0, l.jW)(e, async () => {
                          let { default: e } = await n
                            .e("26775")
                            .then(n.bind(n, 740579));
                          return (
                            r(!0),
                            (n) =>
                              (0, i.jsx)(e, {
                                ...n,
                                widget: t,
                                onClose: () => r(!1),
                              })
                          );
                        });
                    })(r, e, t),
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
            (0, i.jsx)(f.PI, { children: g.intl.string(g.t.nFv3GR) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(f.ls, {
                  onClick: (e) => {
                    var r, o;
                    return (
                      (r = e),
                      (o = t),
                      void (0, l.jW)(r, async () => {
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
        [v.Odu.CLICK_ZONE_DEBUG]: {
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
                    var r, o;
                    return (
                      (r = e),
                      (o = t),
                      void (0, l.jW)(r, async () => {
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
        [v.Odu.GO_LIVE]: {
          renderWidget(e) {
            var t;
            let { widget: n, locked: l, size: r, dragStart: o } = e;
            return (0, c.ZL)(n)
              ? (0, i.jsx)(s.Z, {
                  id: n.id,
                  locked: l,
                  pinned: n.pinned,
                  opacity: n.opacity,
                  size: r,
                  widget: v.Odu.GO_LIVE,
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
            (0, i.jsx)(f.PI, { children: g.intl.string(g.t["386XRk"]) }),
          renderButtons(e, t) {
            var r;
            return (0, c.ZL)(e)
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(f.ls, {
                      onClick: (r) =>
                        (function (e, t, r) {
                          if (!!(0, c.ZL)(t))
                            (0, l.jW)(e, async () => {
                              let { default: e } = await n
                                .e("34684")
                                .then(n.bind(n, 68738));
                              return (
                                r(!0),
                                (n) =>
                                  (0, i.jsx)(e, {
                                    ...n,
                                    widget: t,
                                    onClose: () => r(!1),
                                  })
                              );
                            });
                        })(r, e, t),
                    }),
                    (0, i.jsx)(f.GY, {
                      widgetId: e.id,
                      showAllStreams:
                        null === (r = e.meta.showAllStreams) ||
                        void 0 === r ||
                        r,
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
                padding: r,
                containerSpecs: o,
              } = e,
              s = 2 * l + 2 * r,
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
            (0, i.jsx)(f.PI, { children: g.intl.string(g.t.gnKWdX) }),
          renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(f.ls, {
                  onClick: (e) => {
                    var r, o;
                    return (
                      (r = e),
                      (o = t),
                      void (0, l.jW)(r, async () => {
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
        [v.Odu.ACTIVITY]: {
          renderWidget: () => (0, i.jsx)(r.Z, {}),
          renderTitle: () =>
            (0, i.jsx)(f.PI, { children: g.intl.string(g.t["6gwSFR"]) }),
          renderButtons: () => null,
        },
      };
      t.Z = x;
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
        r = n.n(l),
        o = n(692547),
        a = n(481060),
        s = n(765250),
        c = n(388032),
        u = n(931959);
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
              className: r()(u.button, n && u.active),
              onClick: d,
              children: (0, i.jsx)(a.ScreenIcon, {
                size: "xxs",
                color: n ? o.Z.colors.BG_BRAND : o.Z.colors.INTERACTIVE_ACTIVE,
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
              className: r()(u.button, n && u.active),
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
        l = n(192379),
        r = n(442837),
        o = n(481060),
        a = n(237997),
        s = n(388627),
        c = n(561064),
        u = n(380736),
        d = n(693091),
        h = n(371467),
        f = n(981631),
        p = n(839588);
      let m = [];
      function v(e) {
        return e.notification.id;
      }
      function g(e, t, n, l) {
        let { index: r, notification: o, locked: a } = t;
        return (0, i.jsx)(
          u.Z,
          {
            index: r,
            notification: o,
            locked: a,
            transitionState: n,
            cleanUp: l,
          },
          e,
        );
      }
      function x(e) {
        return (0, i.jsx)("div", { className: p.container, children: e });
      }
      let C = (e) => l.useState(() => new d.AS(e))[0];
      t.Z = l.memo(function (e) {
        let { locked: t } = e,
          n = (0, r.e7)(
            [a.Z, h.Z],
            () => {
              if (a.Z.getNotificationPositionMode() === f._vf.DISABLED)
                return m;
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
          l.useLayoutEffect(() => u.updateState(n, t)),
          l.useLayoutEffect(
            () => (u.initialize((0, c.i)()), () => u.cleanUp()),
            [u],
          ),
          (0, i.jsx)(d.S4.Provider, {
            value: u,
            children: (0, i.jsx)(o.TransitionGroup, {
              items: n,
              renderItem: g,
              getItemKey: v,
              wrapChildren: x,
            }),
          })
        );
      });
    },
    892807: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(724458),
        n(653041),
        n(47120);
      var i = n(200651),
        l = n(192379),
        r = n(120356),
        o = n.n(r),
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
        g = n(496675),
        x = n(699516),
        C = n(594174),
        Z = n(979651),
        _ = n(823379),
        I = n(981631),
        j = n(388032),
        E = n(843307);
      function b(e) {
        let { channel: t, currentVoiceChannel: n } = e,
          l = (0, d.KS)(t),
          r = t.id === (null == n ? void 0 : n.id),
          a = r
            ? s.tokens.colors.TEXT_POSITIVE
            : s.tokens.colors.INTERACTIVE_NORMAL;
        return (0, i.jsxs)("div", {
          className: E.channelNameContainer,
          children: [
            null != l ? (0, i.jsx)(l, { color: a, size: "xs" }) : void 0,
            (0, i.jsx)(s.Text, {
              variant: "text-sm/semibold",
              className: o()(E.label, E.channelName),
              color: r ? "text-positive" : "text-normal",
              children: (0, u.F6)(t, C.default, x.Z),
            }),
          ],
        });
      }
      function w(e) {
        let { channel: t, currentVoiceChannel: n } = e,
          l = t.getGuildId(),
          r = (0, a.e7)([v.Z], () => v.Z.getGuild(l), [l]),
          o = t.id === (null == n ? void 0 : n.id);
        return null == r
          ? null
          : (0, i.jsx)("div", {
              className: E.channelMenuSubContainer,
              children: (0, i.jsx)(s.Text, {
                variant: "text-xs/normal",
                color: o ? "text-positive" : void 0,
                children: r.name,
              }),
            });
      }
      function k(e) {
        let { channel: t } = e,
          n = (0, a.Wu)(
            [Z.Z, C.default, p.Z],
            () =>
              Object.values(Z.Z.getVoiceStatesForChannel(t.id))
                .map((e) => C.default.getUser(e.userId))
                .filter(_.lm)
                .sort((e, t) => {
                  var n, i, l, r;
                  return (
                    (null !==
                      (l =
                        null === (n = p.Z.getUserAffinity(t.id)) || void 0 === n
                          ? void 0
                          : n.affinity) && void 0 !== l
                      ? l
                      : 0) -
                    (null !==
                      (r =
                        null === (i = p.Z.getUserAffinity(e.id)) || void 0 === i
                          ? void 0
                          : i.affinity) && void 0 !== r
                      ? r
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
      function N(e) {
        let { currentVoiceChannel: t, onClose: n, onSelect: r } = e,
          o = (0, a.Wu)([x.Z, p.Z], () =>
            x.Z.getFriendIDs().sort((e, t) => {
              var n, i, l, r;
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
                        (r =
                          null === (i = p.Z.getUserAffinity(e)) || void 0 === i
                            ? void 0
                            : i.affinity) && void 0 !== r
                        ? r
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
            [f.Z, Z.Z, m.Z, g.Z],
            () => {
              let e = new Set(
                  f.Z.getChannelHistory().reduce((e, t) => {
                    let n = m.Z.getChannel(t);
                    return (
                      null != n &&
                        g.Z.can(I.Plq.CONNECT, n) &&
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
                        g.Z.can(I.Plq.CONNECT, l) &&
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
              r(e), n();
            },
            [r, n],
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
                      children: (0, i.jsx)(k, {
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
    56377: function (e, t, n) {
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
    275252: function (e, t, n) {
      e.exports = {
        clickZoneDebugContainer: "clickZoneDebugContainer_afd0a0",
        clickZone: "clickZone_afd0a0",
        clickBackground: "clickBackground_afd0a0",
        clickable: "clickable_afd0a0",
      };
    },
    774518: function (e, t, n) {
      e.exports = {
        dismissButton: "dismissButton_a9614f",
        dismissIcon: "dismissIcon_a9614f",
      };
    },
    971769: function (e, t, n) {
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
    113812: function (e, t, n) {
      e.exports = {
        gridContainer: "gridContainer_dcc220",
        gridItem: "gridItem_dcc220",
        horizontal: "horizontal_dcc220",
        vertical: "vertical_dcc220",
        tileContainer: "tileContainer_dcc220",
      };
    },
    301133: function (e, t, n) {
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
    804609: function (e, t, n) {
      e.exports = { goLiveGridContainer: "goLiveGridContainer_c324b1" };
    },
    404099: function (e, t, n) {
      e.exports = {
        buttonContainer: "buttonContainer_b1ba99",
        keybind: "keybind_b1ba99",
        button: "button_b1ba99",
      };
    },
    827650: function (e, t, n) {
      e.exports = { key: "key_da7116" };
    },
    220456: function (e, t, n) {
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
    946921: function (e, t, n) {
      e.exports = {
        debugMode: "debugMode_f4091c",
        clickable: "clickable_f4091c",
      };
    },
    769893: function (e, t, n) {
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
    500479: function (e, t, n) {
      e.exports = {
        panelContainer: "panelContainer_d476d7",
        locked: "locked_d476d7",
        panelRow: "panelRow_d476d7",
        buttonSection: "buttonSection_d476d7",
      };
    },
    871119: function (e, t, n) {
      e.exports = { container: "container_c7fa60" };
    },
    334551: function (e, t, n) {
      e.exports = {
        videoList: "videoList_a6fa57",
        vertical: "vertical_a6fa57",
        tile: "tile_a6fa57",
        hidden: "hidden_a6fa57",
      };
    },
    540422: function (e, t, n) {
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
    467577: function (e, t, n) {
      e.exports = {
        extrasContainer: "extrasContainer_b932b3",
        debug: "debug_b932b3",
        debugUnpinned: "debugUnpinned_b932b3",
        debugPinned: "debugPinned_b932b3",
      };
    },
    931959: function (e, t, n) {
      e.exports = {
        titleWrapper: "titleWrapper_e8dbc8 bgShade_e8dbc8",
        button: "button_e8dbc8 bgShade_e8dbc8",
        active: "active_e8dbc8",
      };
    },
    721880: function (e, t, n) {
      e.exports = { textArea: "textArea_daa88b" };
    },
    945276: function (e, t, n) {
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
    839588: function (e, t, n) {
      e.exports = { container: "container_a2d09c" };
    },
    585610: function (e, t, n) {
      e.exports = { container: "container_f19072" };
    },
    843307: function (e, t, n) {
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
//# sourceMappingURL=0f03e10aea7d838f9a40.js.map
