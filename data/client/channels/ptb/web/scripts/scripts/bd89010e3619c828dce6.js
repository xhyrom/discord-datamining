"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92982"],
  {
    989941: function (e, t, n) {
      let l;
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = n(145597);
      function r(e, t) {
        if (__OVERLAY__) {
          let e = t.getGame(),
            n = (0, s.QF)();
          return null == e || null == n
            ? null
            : (null == l ? void 0 : l.id) === e.id &&
                (null == l ? void 0 : l.pid) === n
              ? l
              : (l = {
                  id: e.id,
                  pid: n,
                  pidPath: [],
                  nativeProcessObserverId: 0,
                  hidden: !1,
                  elevated: !1,
                  name: e.name,
                  lastFocused: 0,
                  exePath: "",
                  exeName: "",
                  cmdLine: "",
                  processName: "",
                  distributor: null,
                  windowHandle: null,
                  fullscreenType: 0,
                });
        }
        return e.getVisibleGame();
      }
    },
    301107: function (e, t, n) {
      n.d(t, {
        W: function () {
          return i;
        },
      }),
        n(411104);
      var l = n(192379),
        s = n(250683),
        r = n(253135);
      function i(e) {
        let { fingerprintBase64: t, chunkSize: n, desiredLength: i } = e,
          o = l.useMemo(() => {
            if (null == t || "" === t) return null;
            let e = s.toByteArray(t),
              l = (0, r.Dq)(e, i, n);
            if (null == l) return null;
            let o = RegExp(".{1,".concat(n, "}"), "g"),
              a = l.match(o);
            return null == a ? null : Array.from(a);
          }, [n, t, i]);
        if (null != t && "" !== t && null == o)
          throw Error(
            "[useReadableSecureFramesCode] Failed to parse base 64 code.",
          );
        return o;
      }
    },
    160038: function (e, t, n) {
      n(47120);
      var l = n(200651),
        s = n(192379),
        r = n(120356),
        i = n.n(r),
        o = n(46973),
        a = n(481060),
        c = n(304680),
        u = n(706619),
        d = n(695346),
        h = n(131951),
        x = n(626135),
        g = n(572004),
        N = n(63063),
        C = n(476221),
        f = n(981631),
        p = n(65154),
        m = n(388032),
        E = n(51100);
      let T = () => {
        h.Z.getMediaEngine().once(o.aB.ConnectionStats, (e) => {
          let t = Object.values(p.Yn)
            .map((t) => {
              let n = e
                .filter((e) => {
                  let { connection: n } = e;
                  return n.context === t;
                })
                .map((e, n) => {
                  let l = e.stats;
                  return (l.context = t), (l.index = n), l;
                });
              for (let e of n) {
                var l;
                (null == e
                  ? void 0
                  : null === (l = e.transport) || void 0 === l
                    ? void 0
                    : l.localAddress) != null &&
                  (e.transport.localAddress = "(redacted)");
              }
              return n;
            })
            .filter((e) => e.length > 0);
          (0, g.JG)(JSON.stringify(t, null, 2)),
            (0, a.showToast)(
              (0, a.createToast)(
                m.intl.string(m.t["t5VZ8/"]),
                a.ToastType.SUCCESS,
              ),
            );
        });
      };
      t.Z = function (e) {
        (0, s.useEffect)(() => {
          x.default.track(f.rMx.OPEN_POPOUT, { type: "RTC Connection" });
        }, []);
        let t = (0, s.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), c.bA();
          }, [e]),
          n = (0, s.useCallback)(() => {
            let {
                hostname: t,
                averagePing: n,
                lastPing: r,
                outboundLossRate: o,
              } = e,
              a = d.Sb.getSetting();
            return (0, l.jsxs)(s.Fragment, {
              children: [
                a &&
                  (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)("div", {
                        className: E.graphContainer,
                        children: (0, l.jsx)(u.Z, {
                          dataPoints: e.pings,
                          width: 258,
                          height: 80,
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: E.popoutText,
                        children: (0, l.jsx)("strong", {
                          children: C.Z.getShortHostname(t),
                        }),
                      }),
                    ],
                  }),
                (0, l.jsx)("div", {
                  className: E.popoutText,
                  children: m.intl.format(m.t["X58/lJ"], {
                    averagePing: n.toFixed(0),
                  }),
                }),
                null != r
                  ? (0, l.jsx)("div", {
                      className: E.popoutText,
                      children: m.intl.format(m.t["6iv2TE"], {
                        lastPing: r.toFixed(0),
                      }),
                    })
                  : null,
                null != o
                  ? (0, l.jsx)("div", {
                      className: E.popoutText,
                      children: m.intl.format(m.t.VIBJMz, {
                        outboundLossRate: o.toFixed(1),
                      }),
                    })
                  : null,
                (0, l.jsxs)("div", {
                  className: i()(E.popoutText, E.popoutTextDetails),
                  children: [
                    null == o
                      ? m.intl.formatToPlainString(m.t.vggaMj, { badPing: 250 })
                      : null,
                    null != o
                      ? m.intl.formatToPlainString(m.t["3pFz1N"], {
                          badPing: 250,
                          badLossRate: 10,
                        })
                      : null,
                  ],
                }),
              ],
            });
          }, [e]),
          { connectionState: r, connectionTypeText: o } = e,
          g = d.Sb.getSetting(),
          I = {
            [f.hes.AWAITING_ENDPOINT]: m.intl.format(m.t.Eu2vUV, {
              url: f.yXt.STATUS,
            }),
            [f.hes.CONNECTING]: m.intl.string(m.t["y+E8aG"]),
            [f.hes.AUTHENTICATING]: m.intl.string(m.t["5lGIZG"]),
            [f.hes.DISCONNECTED]: m.intl.string(m.t.fOX25O),
            [f.hes.RTC_CONNECTING]: m.intl.string(m.t.b5Ubd3),
            [f.hes.ICE_CHECKING]: m.intl.format(m.t.SyoYUV, {
              url: N.Z.getArticleURL(f.BhN.VOICE_CONNECTION_ERRORS),
            }),
            [f.hes.DTLS_CONNECTING]: m.intl.format(m.t.SyoYUV, {
              url: N.Z.getArticleURL(f.BhN.VOICE_CONNECTION_ERRORS),
            }),
            [f.hes.RTC_CONNECTED]: n,
            [f.hes.NO_ROUTE]: m.intl.format(m.t["2tgQnp"], {
              url: N.Z.getArticleURL(f.BhN.VOICE_CONNECTION_ERRORS),
            }),
            [f.hes.RTC_DISCONNECTED]: m.intl.string(m.t.fOX25O),
          }[r];
        return (0, l.jsxs)(l.Fragment, {
          children: [
            "function" == typeof I
              ? I()
              : (0, l.jsx)("p", {
                  className: i()(E.popoutText, E.popoutTextDetails),
                  children: I,
                }),
            (0, l.jsx)("hr", { className: E.separator }),
            (0, l.jsxs)("div", {
              className: E.popoutBottom,
              children: [
                (0, l.jsxs)("span", {
                  className: i()(E.secured, E.textWithIcon),
                  children: [
                    (0, l.jsx)(a.LockIcon, {
                      size: "xxs",
                      color: a.tokens.colors.TEXT_POSITIVE.css,
                      className: E.__invalid_icon,
                    }),
                    o,
                  ],
                }),
                g &&
                  h.Z.supports(p.AN.DIAGNOSTICS) &&
                  !__OVERLAY__ &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)(a.Anchor, {
                        className: i()(E.debugButton, E.textWithIcon),
                        onClick: t,
                        children: [
                          m.intl.string(m.t.KBoWg4),
                          (0, l.jsx)(a.WindowLaunchIcon, {
                            size: "xxs",
                            color: "currentColor",
                            className: E.__invalid_icon,
                          }),
                        ],
                      }),
                      (0, l.jsxs)(a.Anchor, {
                        className: i()(E.copyStatsButton, E.textWithIcon),
                        onClick: T,
                        title: "Copy to clipboard",
                        children: [
                          m.intl.string(m.t["XEb+Sk"]),
                          (0, l.jsx)(a.CopyIcon, {
                            size: "xxs",
                            color: "currentColor",
                            className: E.__invalid_icon,
                          }),
                        ],
                      }),
                    ],
                  }),
                !g &&
                  !__OVERLAY__ &&
                  (0, l.jsx)(a.Anchor, {
                    className: E.debugButton,
                    href: N.Z.getArticleURL(f.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                    children: m.intl.string(m.t.hvVgAQ),
                  }),
              ],
            }),
          ],
        });
      };
    },
    873596: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      }),
        n(47120);
      var l = n(200651),
        s = n(192379),
        r = n(442837),
        i = n(481060),
        o = n(313201),
        a = n(19780),
        c = n(979651),
        u = n(362446),
        d = n(571826),
        h = n(277642),
        x = n(441894),
        g = n(160038),
        N = n(586646),
        C = n(760373),
        f = n(388032),
        p = n(628437);
      function m(e) {
        let { lobbyId: t, connectionTypeText: n, closePopout: s } = e,
          i = (0, r.cj)([u.Z], () => ({
            connectionState: u.Z.getConnectionState(t),
            hostname: u.Z.getHostname(t),
            averagePing: u.Z.getAveragePing(t),
            lastPing: u.Z.getLastPing(t),
            pings: u.Z.getPings(),
            outboundLossRate: u.Z.getOutboundLossRate(t),
          }));
        return (0, l.jsx)(g.Z, { ...i, closePopout: s, connectionTypeText: n });
      }
      function E(e) {
        let { closePopout: t, connectionTypeText: n } = e,
          s = (0, r.cj)([a.Z], () => ({
            connectionState: a.Z.getState(),
            hostname: a.Z.getHostname(),
            averagePing: a.Z.getAveragePing(),
            lastPing: a.Z.getLastPing(),
            outboundLossRate: a.Z.getOutboundLossRate(),
            pings: a.Z.getPings(),
          }));
        return (0, l.jsx)(g.Z, { ...s, closePopout: t, connectionTypeText: n });
      }
      function T(e) {
        let { channelId: t, isOverlay: n, lobbyId: s, closePopout: r } = e,
          i = (0, x.J)({
            channelId: t,
            location: "RTCConnectionDebugPanelContainer",
          })
            ? f.intl.string(f.t["3BogKS"])
            : f.intl.string(f.t.ETIVvr);
        return n
          ? (0, l.jsx)(m, { lobbyId: s, closePopout: r, connectionTypeText: i })
          : (0, l.jsx)(E, { closePopout: r, connectionTypeText: i });
      }
      function I(e) {
        let t = (0, r.e7)([c.Z], () => c.Z.hasVideo(e.channelId)),
          [n, a] = s.useState(C.tu.RTC_DEBUG_PANEL),
          u = (0, o.Dt)(),
          x = s.useMemo(() => {
            switch (n) {
              case C.tu.RTC_DEBUG_PANEL:
                return (0, l.jsx)(T, { ...e });
              case C.tu.RTC_SECURE_FRAMES:
                return (0, l.jsx)(N.Z, { channelId: e.channelId });
            }
          }, [e, n]);
        s.useEffect(() => {
          (0, d.sN)({ channelId: e.channelId, selectedTab: n });
        }, [e.channelId, n]);
        let g = (0, h.r)();
        return (
          s.useEffect(() => {
            g && a(C.tu.RTC_DEBUG_PANEL);
          }, [g]),
          (0, l.jsxs)("div", {
            className: p.container,
            children: [
              (0, l.jsx)(i.Heading, {
                className: p.title,
                variant: "heading-lg/bold",
                color: "header-primary",
                children: t
                  ? f.intl.string(f.t.IlHdW1)
                  : f.intl.string(f.t.WsOisr),
              }),
              (0, l.jsxs)(i.TabBar, {
                className: p.tabs,
                selectedItem: n,
                type: "top",
                look: "brand",
                onItemSelect: a,
                children: [
                  (0, l.jsx)(i.TabBar.Item, {
                    id: C.tu.RTC_DEBUG_PANEL,
                    className: p.tabBarItem,
                    children: f.intl.string(f.t.MBY1Pj),
                  }),
                  g
                    ? null
                    : (0, l.jsx)(i.TabBar.Item, {
                        id: C.tu.RTC_SECURE_FRAMES,
                        className: p.tabBarItem,
                        children: f.intl.string(f.t.zC6o3t),
                      }),
                ],
              }),
              (0, l.jsx)(i.TabBar.Panel, {
                id: n,
                "aria-labelledby": u,
                children: x,
              }),
            ],
          })
        );
      }
      function v(e) {
        return (0, x.J)({
          channelId: e.channelId,
          location: "RTCConnectionPopout",
        })
          ? (0, l.jsx)(I, { ...e })
          : (0, l.jsx)("div", {
              className: p.debugPanelStandalone,
              children: (0, l.jsx)("section", {
                className: p.debugPanelSection,
                children: (0, l.jsx)(T, { ...e }),
              }),
            });
      }
    },
    917405: function (e, t, n) {
      n(47120);
      var l = n(200651),
        s = n(192379),
        r = n(120356),
        i = n.n(r),
        o = n(481060),
        a = n(72416),
        c = n(476221),
        u = n(873596),
        d = n(423516),
        h = n(981631),
        x = n(239793);
      let g = {
          [h.IE4.UNKNOWN]: o.Tooltip.Colors.BLACK,
          [h.IE4.BAD]: o.Tooltip.Colors.RED,
          [h.IE4.AVERAGE]: o.Tooltip.Colors.YELLOW,
          [h.IE4.FINE]: o.Tooltip.Colors.GREEN,
        },
        N = {
          [h.QKv.CONNECTED]: x.rtcConnectionStatusConnected,
          [h.QKv.CONNECTING]: x.rtcConnectionStatusConnecting,
          [h.QKv.ERROR]: x.rtcConnectionStatusError,
        },
        C = {
          [h.IE4.FINE]: x.rtcConnectionQualityFine,
          [h.IE4.AVERAGE]: x.rtcConnectionQualityAverage,
          [h.IE4.BAD]: x.rtcConnectionQualityBad,
          [h.IE4.UNKNOWN]: null,
        };
      class f extends s.PureComponent {
        renderPopoutTarget(e) {
          let t = this.props.channelId;
          return null == t
            ? e({})
            : (0, l.jsx)(o.Popout, {
                renderPopout: this.renderPopout(t),
                position: "top",
                children: e,
              });
        }
        renderStatus() {
          let { hasVideo: e, state: t, channelId: n } = this.props,
            { connectionStatus: s, connectionStatusText: r } = c.Z.getStatus(
              t,
              e,
            );
          return this.renderPopoutTarget((e) => {
            let { onClick: t } = e;
            return (0, l.jsx)(o.Button, {
              look: o.Button.Looks.BLANK,
              size: o.Button.Sizes.NONE,
              onClick: t,
              children: (0, l.jsx)(d.Z, {
                text: r,
                textVariant: this.props.connectionStatusTextVariant,
                hasVideo: this.props.hasVideo,
                className: N[s],
                hasConnectedChannel: null != n,
              }),
            });
          });
        }
        render() {
          let e;
          let {
            quality: t,
            smallPing: n,
            lastPing: s,
            state: r,
            className: a,
            children: c,
          } = this.props;
          return (
            r === h.hes.RTC_CONNECTED &&
              (e = (0, l.jsx)(o.Tooltip, {
                text:
                  t !== h.IE4.UNKNOWN && null != s
                    ? "".concat(s.toFixed(0), " ms")
                    : null,
                color: g[t],
                children: (e) =>
                  (0, l.jsx)(p, { quality: t, smallPing: n, ...e }),
              })),
            (0, l.jsxs)("div", {
              className: x.rtcConnectionStatusWrapper,
              children: [
                (0, l.jsxs)("div", {
                  className: i()(x.rtcConnectionStatus, C[t], a),
                  children: [
                    e,
                    (0, l.jsx)("div", {
                      className: x.labelWrapper,
                      children: this.renderStatus(),
                    }),
                  ],
                }),
                c,
              ],
            })
          );
        }
        constructor(...e) {
          var t, n, s;
          super(...e),
            (t = this),
            (n = "renderPopout"),
            (s = (e) => (t) => (0, l.jsx)(u.Z, { ...t, channelId: e })),
            n in t
              ? Object.defineProperty(t, n, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = s);
        }
      }
      function p(e) {
        let { quality: t, smallPing: n, ...s } = e;
        if (!(0, o.useRedesignIconContext)().enabled)
          return (0, l.jsx)(a.Z, {
            className: i()(x.ping, { [x.smallPing]: n }),
            foreground: x.pingForeground,
          });
        {
          let e = {
            [h.IE4.FINE]: o.ConnectionFineIcon,
            [h.IE4.AVERAGE]: o.ConnectionAverageIcon,
            [h.IE4.BAD]: o.ConnectionBadIcon,
            [h.IE4.UNKNOWN]: o.ConnectionUnknownIcon,
          }[t];
          return (0, l.jsx)(e, {
            className: i()(x.ping, { [x.smallPing]: n }),
            ...s,
          });
        }
      }
      t.Z = f;
    },
    423516: function (e, t, n) {
      var l = n(200651);
      n(192379);
      var s = n(120356),
        r = n.n(s),
        i = n(481060),
        o = n(570928),
        a = n(540059),
        c = n(977059),
        u = n(388032),
        d = n(586802);
      t.Z = function (e) {
        let {
            className: t,
            hasVideo: n,
            text: s,
            hasConnectedChannel: h,
            textVariant: x = "text-md/medium",
          } = e,
          g = (0, a.Q3)("RTCConnectionStatusText"),
          { enabled: N } = (0, c.S)({ location: "RTCConnectionStatusText" }),
          C = n ? u.intl.string(u.t.IlHdW1) : u.intl.string(u.t.WsOisr);
        return (0, l.jsx)(o.Z, {
          className: r()(t, N ? d.hoverableStatus : d.status),
          hoverText:
            N && h
              ? g
                ? (0, l.jsx)(i.Text, {
                    variant: x,
                    color: "currentColor",
                    children: C,
                  })
                : C
              : null,
          children: g
            ? (0, l.jsx)(i.Text, {
                variant: x,
                color: "currentColor",
                children: s,
              })
            : s,
        });
      };
    },
    586646: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      });
      var l = n(200651),
        s = n(192379),
        r = n(442837),
        i = n(481060),
        o = n(19780),
        a = n(571826),
        c = n(630759),
        u = n(301107),
        d = n(785792),
        h = n(190054),
        x = n(760373),
        g = n(388032),
        N = n(539992);
      function C(e) {
        let { channelId: t } = e,
          n = (0, r.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getSecureFramesState()) || void 0 === e
              ? void 0
              : e.epochAuthenticator;
          }),
          C = (0, u.W)({
            fingerprintBase64: n,
            chunkSize: x.y6,
            desiredLength: x.YP,
          }),
          f = s.useCallback(() => {
            (0, a.PM)({ channelId: t });
          }, [t]);
        return (0, l.jsxs)("div", {
          className: N.container,
          children: [
            (0, l.jsxs)("div", {
              className: N.tag,
              children: [
                (0, l.jsx)(i.LockIcon, {
                  size: "xxs",
                  color: i.tokens.colors.TEXT_POSITIVE,
                }),
                (0, l.jsx)(i.Text, {
                  variant: "text-xs/medium",
                  color: "text-positive",
                  children: g.intl.string(g.t["3BogKS"]),
                }),
              ],
            }),
            (0, l.jsx)(i.Text, {
              variant: "text-xs/normal",
              color: "text-secondary",
              children: g.intl.string(g.t.B9JNsr),
            }),
            (0, l.jsxs)("div", {
              className: N.header,
              children: [
                (0, l.jsx)(i.Heading, {
                  variant: "text-sm/bold",
                  color: "header-primary",
                  children: g.intl.string(g.t.cTQI5u),
                }),
                null != C &&
                  (0, l.jsx)(h.H, {
                    chunks: C,
                    color: i.tokens.colors.INTERACTIVE_NORMAL.css,
                    onCopy: f,
                  }),
              ],
            }),
            (0, l.jsx)(d.b, { className: N.code, chunks: C, columns: x.WK }),
            (0, l.jsx)(i.Text, {
              variant: "text-xs/normal",
              color: "text-secondary",
              children: g.intl.format(g.t.wKxADQ, { helpArticle: (0, c.uV)() }),
            }),
          ],
        });
      }
    },
    785792: function (e, t, n) {
      n.d(t, {
        b: function () {
          return c;
        },
      });
      var l = n(200651),
        s = n(192379),
        r = n(120356),
        i = n.n(r),
        o = n(481060),
        a = n(797448);
      function c(e) {
        let { chunks: t, columns: n, className: r } = e,
          c = s.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
        return null == t
          ? (0, l.jsx)("div", {
              className: a.loading,
              children: (0, l.jsx)(o.Spinner, {}),
            })
          : (0, l.jsx)("div", {
              style: c,
              className: i()(a.code, r),
              children: t.map((e, t) =>
                (0, l.jsx)(
                  "div",
                  {
                    className: i()(a.chunk, { [a.divider]: t > n - 1 }),
                    children: (0, l.jsx)(o.Text, {
                      className: a.codeText,
                      variant: "code",
                      color: "text-normal",
                      children: e,
                    }),
                  },
                  "".concat(e, "-").concat(t),
                ),
              ),
            });
      }
    },
    190054: function (e, t, n) {
      n.d(t, {
        H: function () {
          return d;
        },
      }),
        n(47120);
      var l = n(200651),
        s = n(192379),
        r = n(120356),
        i = n.n(r),
        o = n(481060),
        a = n(572004),
        c = n(388032),
        u = n(66050);
      function d(e) {
        let { chunks: t, className: n, onCopy: r, ...d } = e,
          h = s.useMemo(() => (null == t ? void 0 : t.join(" ")), [t]),
          [x, g] = s.useState(!1),
          N = s.useCallback(() => {
            g(!0), (0, a.JG)(h), null == r || r();
          }, [r, h]),
          C = x ? o.CircleCheckIcon : o.CopyIcon;
        return (0, l.jsx)(o.Clickable, {
          className: i()(u.container, n),
          onClick: N,
          children: (0, l.jsx)(o.Tooltip, {
            text: x ? c.intl.string(c.t["t5VZ8/"]) : c.intl.string(c.t.OpuAlJ),
            children: (e) =>
              (0, l.jsx)(C, {
                ...d,
                ...e,
                size: "xxs",
                color: x
                  ? o.tokens.colors.TEXT_POSITIVE
                  : o.tokens.colors.INTERACTIVE_NORMAL,
              }),
          }),
        });
      }
    },
    706619: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      }),
        n(47120);
      var l = n(200651),
        s = n(192379),
        r = n(311308),
        i = n(692547),
        o = n(481060);
      function a(e) {
        let t = (0, s.useRef)(null),
          [n, a] = (0, s.useState)(null),
          [c] = (0, s.useState)(() => new r.TimelineDataSeries()),
          u = (0, o.useToken)(i.Z.colors.BACKGROUND_PRIMARY).hsl(),
          d = (0, o.useToken)(i.Z.colors.TEXT_NORMAL).hsl(),
          h = (0, o.useToken)(i.Z.colors.BACKGROUND_ACCENT).hsl(),
          x = (0, o.useToken)(i.Z.unsafe_rawColors.BRAND_500).hsl();
        (0, s.useEffect)(() => {
          var e;
          let n = t.current;
          if (null == n) return;
          let l = new r.TimelineGraphView(
            n,
            null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1,
          );
          (l.backgroundColor = u),
            (l.textColor = d),
            (l.gridColor = h),
            (l.timeOptions = { timeStyle: "short" }),
            (l.fontFamily = "gg sans"),
            (l.fontSize = 11),
            c.setColor(x),
            l.addDataSeries(c),
            l.updateEndDate(),
            a(l);
        }, [t, u, x, h, d, c]),
          c.setPoints(e.dataPoints),
          null == n || n.updateEndDate();
        let g = { width: e.width, height: e.height };
        return (0, l.jsx)(
          "canvas",
          { style: g, width: e.width, height: e.height, ref: t },
          "canvas",
        );
      }
    },
    964398: function (e, t, n) {
      n(47120), n(411104);
      var l = n(200651),
        s = n(192379),
        r = n(392711),
        i = n.n(r),
        o = n(481060),
        a = n(65205),
        c = n(388032),
        u = n(390317);
      function d(e) {
        let { className: t } = e;
        return (0, l.jsxs)("svg", {
          className: t,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 48 48",
          children: [
            (0, l.jsx)("g", {
              filter: "url(#a)",
              children: (0, l.jsx)("path", {
                d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
                fill: "currentColor",
              }),
            }),
            (0, l.jsx)("defs", {
              children: (0, l.jsxs)("filter", {
                id: "a",
                x: "0",
                y: "0",
                width: "48",
                height: "48",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [
                  (0, l.jsx)("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix",
                  }),
                  (0, l.jsx)("feColorMatrix", {
                    in: "SourceAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha",
                  }),
                  (0, l.jsx)("feOffset", { dy: "8" }),
                  (0, l.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                  (0, l.jsx)("feColorMatrix", {
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0",
                  }),
                  (0, l.jsx)("feBlend", {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_605_72103",
                  }),
                  (0, l.jsx)("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_605_72103",
                    result: "shape",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      let h = [
          { x: 0.5, y: 0.05 },
          { x: 0.95, y: 0.2 },
          { x: 1, y: 0.5 },
          { x: 0.95, y: 0.8 },
          { x: 0.5, y: 0.95 },
          { x: 0.05, y: 0.8 },
          { x: 0, y: 0.5 },
          { x: 0.05, y: 0.2 },
        ],
        x = h.length;
      function g(e, t, n) {
        let l = e * t;
        return e > 0.5 ? l - n : e < 0.5 ? l : l - n / 2;
      }
      let N = (e, t) => {
        let n = Math.abs(t.x),
          l = (180 / Math.PI) * Math.atan2(Math.abs(t.y), n),
          s = e / 2 - 28.8;
        return {
          x: Math.max(s * Math.cos((2 * Math.PI * l) / 360), 0),
          y: Math.max(s * Math.sin((2 * Math.PI * l) / 360), 0),
        };
      };
      t.Z = s.memo(function (e) {
        let {
            wheelWidth: t,
            wheelHeight: n,
            itemWidth: C,
            itemHeight: f,
            showDeadZoneIndicator: p,
            activeItem: m,
            onItemSelect: E,
            onItemAction: T,
            interactive: I = !0,
            children: v,
          } = e,
          O = s.useRef(null),
          j = s.useRef([]),
          y = s.useRef(!1),
          S = s.useRef(null),
          [b, R] = s.useState(0),
          [_, A] = s.useState({ x: 0, y: 0 }),
          Z = Math.abs(_.x) + Math.abs(_.y) > 0,
          P = s.useMemo(() => i().chunk(v, x), [v]),
          k = s.useCallback(
            (e, t) => {
              null == j.current[b]
                ? (j.current[b] = [])
                : (j.current[b][t] = e);
            },
            [b],
          ),
          B = s.useCallback(
            (e, t) => {
              (S.current = t), E(x * e + t);
            },
            [E],
          ),
          w = s.useCallback(() => {
            (S.current = null), E(null);
          }, [E]),
          D = s.useCallback(
            (e) => {
              w(), (y.current = e);
            },
            [w],
          ),
          M = s.useCallback((e, t, n) => {
            if (y.current) {
              A({ x: 0, y: 0 });
              return;
            }
            let l = { x: e.x - t.x, y: e.y - t.y },
              s = l.x < 0,
              r = l.y < 0,
              i = N(n, l),
              o = s ? Math.max(l.x, -i.x) : Math.min(l.x, i.x);
            A({
              x: o / 2,
              y: (r ? Math.max(l.y, -i.y) : Math.min(l.y, i.y)) / 2,
            });
          }, []),
          L = s.useCallback(
            (e) => {
              if (null != S.current)
                e.preventDefault(),
                  e.stopPropagation(),
                  null == T || T(x * b + S.current);
            },
            [T, b],
          ),
          G = s.useMemo(
            () =>
              (0, r.throttle)((e) => {
                if (null == O.current) return;
                let l = O.current.getBoundingClientRect(),
                  s = l.left + l.width / 2,
                  r = { x: s, y: l.top + l.height / 2 },
                  i = { x: e.clientX, y: e.clientY };
                if ((M(i, r, Math.max(t, n)), y.current)) {
                  null != m && w();
                  return;
                }
                let o = (0, a.ld)(r, i, Math.max(t, n));
                for (let e = 0; e < j.current[b].length; e++) {
                  let t = j.current[b][e];
                  if (null == t) continue;
                  let n = t.getBoundingClientRect();
                  if ((0, a.Vr)(r, o, n)) {
                    B(b, e);
                    return;
                  }
                }
                w();
              }, 16),
            [m, M, w, B, b, n, t],
          ),
          V = s.useCallback(
            (e) => {
              if (!I) return;
              let t = b + (e.deltaY > 0 ? 1 : -1);
              t >= 0 &&
                t < P.length &&
                (null != S.current &&
                  (P[t].length > S.current ? B(t, S.current) : w()),
                R(t));
            },
            [I, b, P, B, w],
          ),
          U = s.useMemo(
            () =>
              P[b].map((e, s) => {
                let r = h[s];
                if (null == r)
                  throw Error(
                    "Too many items supplied "
                      .concat(v.length, " expected max of ")
                      .concat(h.length),
                  );
                let i = g(r.x, t, C),
                  o = g(r.y, n, f);
                return (0, l.jsx)(
                  "div",
                  {
                    ref: (e) => k(e, s),
                    className: u.chatWheelItem,
                    style: { left: i, top: o, width: C, height: f },
                    children: e,
                  },
                  s,
                );
              }),
            [P, b, t, C, n, f, v.length, k],
          );
        return (0, l.jsx)(o.Clickable, {
          className: u.chatWheelMouseInput,
          onMouseMove: G,
          onWheel: V,
          onClick: L,
          children: (0, l.jsxs)("div", {
            ref: O,
            className: u.chatWheel,
            style: { width: t, height: n },
            children: [
              (0, l.jsxs)("svg", {
                className: u.chatWheelBackground,
                viewBox: "0 0 288 288",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, l.jsxs)("filter", {
                    id: "soundboard-wheel-background-shadow",
                    x: "0",
                    y: "0",
                    width: "288",
                    height: "288",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                      (0, l.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix",
                      }),
                      (0, l.jsx)("feColorMatrix", {
                        in: "SourceAlpha",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha",
                      }),
                      (0, l.jsx)("feOffset", { dy: "8" }),
                      (0, l.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                      (0, l.jsx)("feColorMatrix", {
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0",
                      }),
                      (0, l.jsx)("feBlend", {
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow_489_60382",
                      }),
                      (0, l.jsx)("feBlend", {
                        in: "SourceGraphic",
                        in2: "effect1_dropShadow_489_60382",
                        result: "shape",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("g", {
                    filter: "url(#soundboard-wheel-background-shadow)",
                    children: [
                      (0, l.jsx)("circle", {
                        className: u.chatWheelBackground,
                        cx: "144",
                        cy: "144",
                        r: "103.68",
                        strokeWidth: "40.32",
                      }),
                      p &&
                        (0, l.jsx)("circle", {
                          className: u.chatWheelDeadZone,
                          onMouseEnter: () => D(!0),
                          onMouseLeave: () => D(!1),
                          cx: 144,
                          cy: 144,
                          r: 28.8,
                        }),
                      Z &&
                        (0, l.jsx)("circle", {
                          className: u.chatWheelCenter,
                          cx: 144 + _.x,
                          cy: 144 + _.y,
                          r: 28.8,
                        }),
                    ],
                  }),
                  p &&
                    (0, l.jsx)("circle", {
                      className: u.chatWheelDeadZone,
                      onMouseEnter: () => D(!0),
                      onMouseLeave: () => D(!1),
                      cx: 144,
                      cy: 144,
                      r: 28.8,
                      stroke: "none",
                    }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: u.innerContent,
                children: [
                  p && (0, l.jsx)(d, { className: u.chatWheelDeadZoneIcon }),
                  I && P.length > 1
                    ? (0, l.jsx)("div", {
                        className: u.paginationHint,
                        children: c.intl.string(c.t["Xy+S09"]),
                      })
                    : null,
                ],
              }),
              U,
            ],
          }),
        });
      });
    },
    183584: function (e, t, n) {
      n.d(t, {
        IN: function () {
          return o;
        },
        oZ: function () {
          return a;
        },
      }),
        n(200651),
        n(192379);
      var l = n(570140);
      n(238246), n(788983), n(592125), n(19780);
      var s = n(237997);
      n(998502), n(487029);
      var r = n(710111);
      n(981631), n(388032);
      let i = {
        width: r.FW.width,
        height: r.FW.height,
        resizable: !1,
        movable: !1,
        alwaysOnTop: !0,
        frame: !1,
        transparent: !0,
        hasShadow: !1,
        skipTaskbar: !0,
        menubar: !0,
        backgroundColor: "#00000000",
        titleBarStyle: null,
      };
      function o(e, t) {
        l.Z.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !1, pid: t }),
          l.Z.dispatch({
            type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
            pid: t,
            enabled: !0,
            keepOpen: e,
          });
      }
      function a(e) {
        l.Z.dispatch({
          type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
          pid: e,
          enabled: !1,
        }),
          !s.Z.isLocked(e) &&
            l.Z.dispatch({
              type: "OVERLAY_SET_INPUT_LOCKED",
              locked: !0,
              pid: e,
            });
      }
      r.FW.padding, i.width, i.height;
    },
    487029: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      }),
        n(47120),
        n(653041);
      var l = n(200651),
        s = n(192379),
        r = n(990547),
        i = n(442837),
        o = n(100527),
        a = n(906732),
        c = n(213609),
        u = n(675478),
        d = n(19780),
        h = n(709054),
        x = n(208049),
        g = n(763296),
        N = n(242291),
        C = n(174470),
        f = n(549771),
        p = n(964398),
        m = n(409673),
        E = n(710111),
        T = n(6609);
      function I(e) {
        let {
            guildId: t,
            channel: n,
            width: I,
            height: v,
            keepOpen: O,
            interactive: j = !0,
            analyticsSource: y,
            onClose: S,
          } = e,
          b = (function (e) {
            let [t, n] = (0, i.Wu)([g.Z], () => [
              g.Z.getSounds(),
              g.Z.getFavorites(),
            ]);
            return s.useMemo(() => {
              let l = [],
                s = [...e, E.X8],
                r = (e, s) => {
                  var r, i;
                  for (let o of null !==
                    (i =
                      null === (r = t.get(e)) || void 0 === r
                        ? void 0
                        : r.sort((e, t) =>
                            h.default.compare(e.soundId, t.soundId),
                          )) && void 0 !== i
                    ? i
                    : []) {
                    let e = n.has(o.soundId);
                    ((e && s) || (!e && !s)) && o.available && l.push(o);
                  }
                };
              return s.forEach((e) => r(e, !0)), s.forEach((e) => r(e, !1)), l;
            }, [t, n, e]);
          })((0, f.h)(n, !0)),
          R = (0, C.j)(),
          _ = s.useRef(null),
          [A, Z] = s.useState(void 0),
          P = (0, i.e7)([d.Z], () => d.Z.getMediaSessionId()),
          { analyticsLocations: k } = (0, a.ZP)(o.Z.SOUNDBOARD_WHEEL),
          B = s.useCallback(
            (e) => {
              (0, N.GN)(e, n.id, k), S();
            },
            [k, n.id, S],
          );
        s.useEffect(() => {
          x.w(), u.DZ.loadIfNecessary();
        }, []),
          s.useEffect(() => {
            0 === b.length && 0 === R.length && S();
          }, [b.length, R, S]),
          s.useEffect(
            () => () => {
              let e = _.current;
              !O && null != e && B(e);
            },
            [O, B],
          ),
          (0, c.Z)(
            {
              type: r.ImpressionTypes.POPOUT,
              name: r.ImpressionNames.SOUNDBOARD_POPOUT,
              properties: { source: y, guild_id: t, media_session_id: P },
            },
            { disableTrack: !j },
          );
        let w = s.useCallback((e) => {
            (_.current = e), Z(null == e ? void 0 : e.soundId);
          }, []),
          D = s.useCallback(
            (e) => {
              if (null == e) {
                w(null);
                return;
              }
              let t = b[e];
              if (null != t) w(t);
            },
            [w, b],
          ),
          M = s.useCallback(
            (e) => {
              if (null == e) return;
              let t = b[e];
              if (null != t) B(t);
            },
            [b, B],
          ),
          L = s.useMemo(
            () =>
              b.map((e) =>
                (0, l.jsx)(
                  m.ZP,
                  {
                    interactive: j,
                    className: T.soundButton,
                    sound: e,
                    focused: A === e.soundId,
                    channel: n,
                  },
                  e.soundId,
                ),
              ),
            [A, n, j, b],
          );
        return 0 === b.length
          ? null
          : (0, l.jsx)(a.Gt, {
              value: k,
              children: (0, l.jsx)(p.Z, {
                wheelWidth: I,
                wheelHeight: v,
                itemWidth: 96,
                itemHeight: 52,
                showDeadZoneIndicator: !O,
                activeItem: A,
                onItemSelect: D,
                onItemAction: M,
                interactive: j,
                children: L,
              }),
            });
      }
    },
    362446: function (e, t, n) {
      n(724458);
      var l,
        s,
        r,
        i,
        o = n(442837),
        a = n(570140),
        c = n(981631);
      let u = {};
      function d(e) {
        let t = u[(e = null != e ? e : "null")];
        return (
          null == t &&
            (t = u[e] =
              {
                state: c.hes.DISCONNECTED,
                quality: c.IE4.UNKNOWN,
                pings: [],
                hostname: null,
                lossRate: null,
              }),
          t
        );
      }
      function h(e, t, n) {
        let l = u[(e = null != e ? e : "null")];
        return null != l ? t(l) : n;
      }
      class x extends (l = o.ZP.Store) {
        getConnectionState(e) {
          return h(
            e,
            (e) => {
              let { state: t } = e;
              return t;
            },
            c.hes.DISCONNECTED,
          );
        }
        getQuality(e) {
          return h(
            e,
            (e) => {
              let { quality: t } = e;
              return t;
            },
            c.IE4.UNKNOWN,
          );
        }
        getHostname(e) {
          return h(
            e,
            (e) => {
              let { hostname: t } = e;
              return t;
            },
            null,
          );
        }
        getPings(e) {
          return h(
            e,
            (e) => {
              let { pings: t } = e;
              return t;
            },
            [],
          );
        }
        getAveragePing(e) {
          let t = this.getPings(e);
          return 0 === t.length
            ? 0
            : t.reduce((e, t) => e + t.value, 0) / t.length;
        }
        getLastPing(e) {
          var t;
          let n = this.getPings(e);
          if (0 === n.length) return 0;
          return null === (t = n[n.length - 1]) || void 0 === t
            ? void 0
            : t.value;
        }
        getOutboundLossRate(e) {
          return h(
            e,
            (e) => {
              let { lossRate: t } = e;
              return t;
            },
            null,
          );
        }
      }
      (i = "OverlayRTCConnectionStore"),
        (r = "displayName") in (s = x)
          ? Object.defineProperty(s, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[r] = i),
        (t.Z = new x(a.Z, {
          OVERLAY_INITIALIZE: function (e) {
            u = e.rtcConnectionStates;
          },
          RTC_CONNECTION_STATE: function (e) {
            if (null != e.streamKey) return !1;
            let t = d(e.lobbyId);
            (t.state = e.state), (t.hostname = e.hostname);
          },
          RTC_CONNECTION_PING: function (e) {
            let t = d(e.lobbyId);
            (t.pings = e.pings), (t.quality = e.quality);
          },
          RTC_CONNECTION_LOSS_RATE: function (e) {
            d(e.lobbyId).lossRate = e.lossRate;
          },
        }));
    },
    72416: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var l = n(200651);
      n(192379);
      var s = n(331595);
      function r(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: r = "currentColor",
          foreground: i,
          ...o
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, s.Z)(o),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              d: "M7.19999 18C7.19999 17.3364 6.77 16.8 6.24019 16.8H3.3598C2.82999 16.8 2.39999 17.3364 2.39999 18V20.4C2.39999 21.0636 2.82999 21.6 3.3598 21.6H6.23923C6.76904 21.6 7.19903 21.0636 7.19903 20.4V18H7.19999Z",
              fill: r,
              className: i,
            }),
            (0, l.jsx)("path", {
              d: "M14.4 10.6909C14.4 10.0876 13.9699 9.6 13.44 9.6H10.56C10.0301 9.6 9.60001 10.0876 9.60001 10.6909V20.5091C9.60001 21.1124 10.0301 21.6 10.56 21.6H13.44C13.9699 21.6 14.4 21.1124 14.4 20.5091V10.6909Z",
              fill: r,
              className: i,
            }),
            (0, l.jsx)("path", {
              d: "M21.6 3.46667C21.6 2.8768 21.1699 2.4 20.64 2.4H17.76C17.2301 2.4 16.8 2.8768 16.8 3.46667V20.5333C16.8 21.1232 17.2301 21.6 17.76 21.6H20.64C21.1699 21.6 21.6 21.1232 21.6 20.5333V3.46667Z",
              fill: r,
              className: i,
            }),
          ],
        });
      }
    },
    65205: function (e, t, n) {
      function l(e, t, n) {
        return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x);
      }
      function s(e, t, n, s) {
        return l(e, n, s) !== l(t, n, s) && l(e, t, n) !== l(e, t, s);
      }
      function r(e, t, n) {
        let l = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        return {
          x: t.x + ((t.x - e.x) / l) * n,
          y: t.y + ((t.y - e.y) / l) * n,
        };
      }
      function i(e, t, n) {
        let l = { x: n.x, y: n.y },
          r = { x: n.x + n.width, y: n.y },
          i = { x: n.x, y: n.y + n.height },
          o = { x: n.x + n.width, y: n.y + n.height };
        return s(e, t, l, r) || s(e, t, r, o) || s(e, t, o, i) || s(e, t, i, l);
      }
      n.d(t, {
        Vr: function () {
          return i;
        },
        ld: function () {
          return r;
        },
      });
    },
    476221: function (e, t, n) {
      var l = n(981631),
        s = n(388032);
      t.Z = {
        getStatus: function (e) {
          let t,
            n,
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          switch (e) {
            case l.hes.CONNECTING:
              (t = l.QKv.CONNECTING), (n = s.intl.string(s.t.MzW9sL));
              break;
            case l.hes.AUTHENTICATING:
              (t = l.QKv.CONNECTING), (n = s.intl.string(s.t.GxXwEx));
              break;
            case l.hes.AWAITING_ENDPOINT:
              (t = l.QKv.CONNECTING), (n = s.intl.string(s.t.xEbu0d));
              break;
            case l.hes.RTC_CONNECTED:
              (t = l.QKv.CONNECTED),
                (n = r
                  ? s.intl.string(s.t.HtVOdX)
                  : s.intl.string(s.t["daXg4+"]));
              break;
            case l.hes.RTC_CONNECTING:
              (t = l.QKv.CONNECTING), (n = s.intl.string(s.t.Gp51dn));
              break;
            case l.hes.ICE_CHECKING:
              (t = l.QKv.CONNECTING), (n = s.intl.string(s.t.rdCyAw));
              break;
            case l.hes.DTLS_CONNECTING:
              (t = l.QKv.CONNECTING), (n = s.intl.string(s.t.UvB3gY));
              break;
            case l.hes.NO_ROUTE:
              (t = l.QKv.ERROR), (n = s.intl.string(s.t.mGhOIi));
              break;
            case l.hes.RTC_DISCONNECTED:
              (t = l.QKv.ERROR), (n = s.intl.string(s.t.M7LDmJ));
              break;
            case l.hes.DISCONNECTED:
            default:
              (t = l.QKv.ERROR), (n = s.intl.string(s.t.NLKQb2));
          }
          return { connectionStatus: t, connectionStatusText: n };
        },
        getShortHostname: function (e) {
          return null == e ? "" : e.split(".")[0];
        },
      };
    },
  },
]);
//# sourceMappingURL=bd89010e3619c828dce6.js.map
