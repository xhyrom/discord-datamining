"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["20115"],
  {
    570928: function (e, t, n) {
      var l,
        r,
        s,
        i,
        o = n(200651),
        a = n(192379),
        c = n(120356),
        u = n.n(c),
        d = n(764660);
      class h extends (i = a.PureComponent) {
        render() {
          let {
            tag: e,
            children: t,
            hoverText: n,
            className: l,
            forceHover: r,
            ...s
          } = this.props;
          return (0, o.jsxs)("div", {
            ...s,
            className: u()(l, d.hoverRoll, {
              [d.disabled]: null == n,
              [d.forceHover]: r,
            }),
            children: [
              (0, o.jsx)(e, { className: d.hovered, children: n }),
              (0, o.jsx)(e, { className: d.default, children: t }),
            ],
          });
        }
      }
      (s = { tag: "div", forceHover: !1 }),
        (r = "defaultProps") in (l = h)
          ? Object.defineProperty(l, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = s),
        (t.Z = h);
    },
    989941: function (e, t, n) {
      let l;
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(145597);
      function s(e, t) {
        if (__OVERLAY__) {
          let e = t.getGame(),
            n = (0, r.QF)();
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
    809357: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
        o: function () {
          return a;
        },
      });
      var l = n(442837),
        r = n(522474),
        s = n(658785),
        i = n(981631);
      function o(e) {
        let { location: t, options: n } = e,
          l = a(),
          { showKeybindIndicators: r } = s.Z.useExperiment({ location: t }, n);
        return r && l;
      }
      function a() {
        return !(0, l.e7)([r.Z], () =>
          r.Z.getWindowVisible(i.KJ3.ACTIVITY_POPOUT),
        );
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
        r = n(250683),
        s = n(253135);
      function i(e) {
        let { fingerprintBase64: t, chunkSize: n, desiredLength: i } = e,
          o = l.useMemo(() => {
            if (null == t || "" === t) return null;
            let e = r.toByteArray(t),
              l = (0, s.Dq)(e, i, n);
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
        r = n(192379),
        s = n(120356),
        i = n.n(s),
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
        E = n(188115);
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
        (0, r.useEffect)(() => {
          x.default.track(f.rMx.OPEN_POPOUT, { type: "RTC Connection" });
        }, []);
        let t = (0, r.useCallback)(() => {
            let { closePopout: t } = e;
            null != t && t(), c.bA();
          }, [e]),
          n = (0, r.useCallback)(() => {
            let {
                hostname: t,
                averagePing: n,
                lastPing: s,
                outboundLossRate: o,
              } = e,
              a = d.Sb.getSetting();
            return (0, l.jsxs)(r.Fragment, {
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
                null != s
                  ? (0, l.jsx)("div", {
                      className: E.popoutText,
                      children: m.intl.format(m.t["6iv2TE"], {
                        lastPing: s.toFixed(0),
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
          { connectionState: s, connectionTypeText: o } = e,
          g = d.Sb.getSetting(),
          v = {
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
          }[s];
        return (0, l.jsxs)(l.Fragment, {
          children: [
            "function" == typeof v
              ? v()
              : (0, l.jsx)("p", {
                  className: i()(E.popoutText, E.popoutTextDetails),
                  children: v,
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
          return I;
        },
      }),
        n(47120);
      var l = n(200651),
        r = n(192379),
        s = n(442837),
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
        p = n(447909);
      function m(e) {
        let { lobbyId: t, connectionTypeText: n, closePopout: r } = e,
          i = (0, s.cj)([u.Z], () => ({
            connectionState: u.Z.getConnectionState(t),
            hostname: u.Z.getHostname(t),
            averagePing: u.Z.getAveragePing(t),
            lastPing: u.Z.getLastPing(t),
            pings: u.Z.getPings(),
            outboundLossRate: u.Z.getOutboundLossRate(t),
          }));
        return (0, l.jsx)(g.Z, { ...i, closePopout: r, connectionTypeText: n });
      }
      function E(e) {
        let { closePopout: t, connectionTypeText: n } = e,
          r = (0, s.cj)([a.Z], () => ({
            connectionState: a.Z.getState(),
            hostname: a.Z.getHostname(),
            averagePing: a.Z.getAveragePing(),
            lastPing: a.Z.getLastPing(),
            outboundLossRate: a.Z.getOutboundLossRate(),
            pings: a.Z.getPings(),
          }));
        return (0, l.jsx)(g.Z, { ...r, closePopout: t, connectionTypeText: n });
      }
      function T(e) {
        let { channelId: t, isOverlay: n, lobbyId: r, closePopout: s } = e,
          i = (0, x.J)({
            channelId: t,
            location: "RTCConnectionDebugPanelContainer",
          })
            ? f.intl.string(f.t["3BogKS"])
            : f.intl.string(f.t.ETIVvr);
        return n
          ? (0, l.jsx)(m, { lobbyId: r, closePopout: s, connectionTypeText: i })
          : (0, l.jsx)(E, { closePopout: s, connectionTypeText: i });
      }
      function v(e) {
        let t = (0, s.e7)([c.Z], () => c.Z.hasVideo(e.channelId)),
          [n, a] = r.useState(C.tu.RTC_DEBUG_PANEL),
          u = (0, o.Dt)(),
          x = r.useMemo(() => {
            switch (n) {
              case C.tu.RTC_DEBUG_PANEL:
                return (0, l.jsx)(T, { ...e });
              case C.tu.RTC_SECURE_FRAMES:
                return (0, l.jsx)(N.Z, { channelId: e.channelId });
            }
          }, [e, n]);
        r.useEffect(() => {
          (0, d.sN)({ channelId: e.channelId, selectedTab: n });
        }, [e.channelId, n]);
        let g = (0, h.r)();
        return (
          r.useEffect(() => {
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
      function I(e) {
        return (0, x.J)({
          channelId: e.channelId,
          location: "RTCConnectionPopout",
        })
          ? (0, l.jsx)(v, { ...e })
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
        r = n(192379),
        s = n(120356),
        i = n.n(s),
        o = n(481060),
        a = n(72416),
        c = n(476221),
        u = n(873596),
        d = n(423516),
        h = n(981631),
        x = n(443423);
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
      class f extends r.PureComponent {
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
            { connectionStatus: r, connectionStatusText: s } = c.Z.getStatus(
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
                text: s,
                textVariant: this.props.connectionStatusTextVariant,
                hasVideo: this.props.hasVideo,
                className: N[r],
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
            lastPing: r,
            state: s,
            className: a,
            children: c,
          } = this.props;
          return (
            s === h.hes.RTC_CONNECTED &&
              (e = (0, l.jsx)(o.Tooltip, {
                text:
                  t !== h.IE4.UNKNOWN && null != r
                    ? "".concat(r.toFixed(0), " ms")
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
          var t, n, r;
          super(...e),
            (t = this),
            (n = "renderPopout"),
            (r = (e) => (t) => (0, l.jsx)(u.Z, { ...t, channelId: e })),
            n in t
              ? Object.defineProperty(t, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = r);
        }
      }
      function p(e) {
        let { quality: t, smallPing: n, ...r } = e;
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
            ...r,
          });
        }
      }
      t.Z = f;
    },
    423516: function (e, t, n) {
      var l = n(200651);
      n(192379);
      var r = n(120356),
        s = n.n(r),
        i = n(481060),
        o = n(570928),
        a = n(540059),
        c = n(977059),
        u = n(388032),
        d = n(172192);
      t.Z = function (e) {
        let {
            className: t,
            hasVideo: n,
            text: r,
            hasConnectedChannel: h,
            textVariant: x = "text-md/medium",
          } = e,
          g = (0, a.Q3)("RTCConnectionStatusText"),
          { enabled: N } = (0, c.S)({ location: "RTCConnectionStatusText" }),
          C = n ? u.intl.string(u.t.IlHdW1) : u.intl.string(u.t.WsOisr);
        return (0, l.jsx)(o.Z, {
          className: s()(t, N ? d.hoverableStatus : d.status),
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
                children: r,
              })
            : r,
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
        r = n(192379),
        s = n(442837),
        i = n(481060),
        o = n(19780),
        a = n(571826),
        c = n(630759),
        u = n(301107),
        d = n(785792),
        h = n(190054),
        x = n(760373),
        g = n(388032),
        N = n(187795);
      function C(e) {
        let { channelId: t } = e,
          n = (0, s.e7)([o.Z], () => {
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
          f = r.useCallback(() => {
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
        r = n(192379),
        s = n(120356),
        i = n.n(s),
        o = n(481060),
        a = n(801676);
      function c(e) {
        let { chunks: t, columns: n, className: s } = e,
          c = r.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
        return null == t
          ? (0, l.jsx)("div", {
              className: a.loading,
              children: (0, l.jsx)(o.Spinner, {}),
            })
          : (0, l.jsx)("div", {
              style: c,
              className: i()(a.code, s),
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
        r = n(192379),
        s = n(120356),
        i = n.n(s),
        o = n(481060),
        a = n(572004),
        c = n(388032),
        u = n(96014);
      function d(e) {
        let { chunks: t, className: n, onCopy: s, ...d } = e,
          h = r.useMemo(() => (null == t ? void 0 : t.join(" ")), [t]),
          [x, g] = r.useState(!1),
          N = r.useCallback(() => {
            g(!0), (0, a.JG)(h), null == s || s();
          }, [s, h]),
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
        r = n(192379),
        s = n(311308),
        i = n(692547),
        o = n(481060);
      function a(e) {
        let t = (0, r.useRef)(null),
          [n, a] = (0, r.useState)(null),
          [c] = (0, r.useState)(() => new s.TimelineDataSeries()),
          u = (0, o.useToken)(i.Z.colors.BACKGROUND_PRIMARY).hsl(),
          d = (0, o.useToken)(i.Z.colors.TEXT_NORMAL).hsl(),
          h = (0, o.useToken)(i.Z.colors.BACKGROUND_ACCENT).hsl(),
          x = (0, o.useToken)(i.Z.unsafe_rawColors.BRAND_500).hsl();
        (0, r.useEffect)(() => {
          var e;
          let n = t.current;
          if (null == n) return;
          let l = new s.TimelineGraphView(
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
        r = n(192379),
        s = n(392711),
        i = n.n(s),
        o = n(481060),
        a = n(65205),
        c = n(388032),
        u = n(981963);
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
          r = e / 2 - 28.8;
        return {
          x: Math.max(r * Math.cos((2 * Math.PI * l) / 360), 0),
          y: Math.max(r * Math.sin((2 * Math.PI * l) / 360), 0),
        };
      };
      t.Z = r.memo(function (e) {
        let {
            wheelWidth: t,
            wheelHeight: n,
            itemWidth: C,
            itemHeight: f,
            showDeadZoneIndicator: p,
            activeItem: m,
            onItemSelect: E,
            onItemAction: T,
            interactive: v = !0,
            children: I,
          } = e,
          O = r.useRef(null),
          j = r.useRef([]),
          y = r.useRef(!1),
          b = r.useRef(null),
          [S, R] = r.useState(0),
          [_, Z] = r.useState({ x: 0, y: 0 }),
          A = Math.abs(_.x) + Math.abs(_.y) > 0,
          P = r.useMemo(() => i().chunk(I, x), [I]),
          k = r.useCallback(
            (e, t) => {
              null == j.current[S]
                ? (j.current[S] = [])
                : (j.current[S][t] = e);
            },
            [S],
          ),
          B = r.useCallback(
            (e, t) => {
              (b.current = t), E(x * e + t);
            },
            [E],
          ),
          w = r.useCallback(() => {
            (b.current = null), E(null);
          }, [E]),
          D = r.useCallback(
            (e) => {
              w(), (y.current = e);
            },
            [w],
          ),
          M = r.useCallback((e, t, n) => {
            if (y.current) {
              Z({ x: 0, y: 0 });
              return;
            }
            let l = { x: e.x - t.x, y: e.y - t.y },
              r = l.x < 0,
              s = l.y < 0,
              i = N(n, l),
              o = r ? Math.max(l.x, -i.x) : Math.min(l.x, i.x);
            Z({
              x: o / 2,
              y: (s ? Math.max(l.y, -i.y) : Math.min(l.y, i.y)) / 2,
            });
          }, []),
          L = r.useCallback(
            (e) => {
              if (null != b.current)
                e.preventDefault(),
                  e.stopPropagation(),
                  null == T || T(x * S + b.current);
            },
            [T, S],
          ),
          G = r.useMemo(
            () =>
              (0, s.throttle)((e) => {
                if (null == O.current) return;
                let l = O.current.getBoundingClientRect(),
                  r = l.left + l.width / 2,
                  s = { x: r, y: l.top + l.height / 2 },
                  i = { x: e.clientX, y: e.clientY };
                if ((M(i, s, Math.max(t, n)), y.current)) {
                  null != m && w();
                  return;
                }
                let o = (0, a.ld)(s, i, Math.max(t, n));
                for (let e = 0; e < j.current[S].length; e++) {
                  let t = j.current[S][e];
                  if (null == t) continue;
                  let n = t.getBoundingClientRect();
                  if ((0, a.Vr)(s, o, n)) {
                    B(S, e);
                    return;
                  }
                }
                w();
              }, 16),
            [m, M, w, B, S, n, t],
          ),
          V = r.useCallback(
            (e) => {
              if (!v) return;
              let t = S + (e.deltaY > 0 ? 1 : -1);
              t >= 0 &&
                t < P.length &&
                (null != b.current &&
                  (P[t].length > b.current ? B(t, b.current) : w()),
                R(t));
            },
            [v, S, P, B, w],
          ),
          U = r.useMemo(
            () =>
              P[S].map((e, r) => {
                let s = h[r];
                if (null == s)
                  throw Error(
                    "Too many items supplied "
                      .concat(I.length, " expected max of ")
                      .concat(h.length),
                  );
                let i = g(s.x, t, C),
                  o = g(s.y, n, f);
                return (0, l.jsx)(
                  "div",
                  {
                    ref: (e) => k(e, r),
                    className: u.chatWheelItem,
                    style: { left: i, top: o, width: C, height: f },
                    children: e,
                  },
                  r,
                );
              }),
            [P, S, t, C, n, f, I.length, k],
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
                      A &&
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
                  v && P.length > 1
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
      var r = n(237997);
      n(998502), n(487029);
      var s = n(710111);
      n(981631), n(388032);
      let i = {
        width: s.FW.width,
        height: s.FW.height,
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
          !r.Z.isLocked(e) &&
            l.Z.dispatch({
              type: "OVERLAY_SET_INPUT_LOCKED",
              locked: !0,
              pid: e,
            });
      }
      s.FW.padding, i.width, i.height;
    },
    487029: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      }),
        n(47120),
        n(653041);
      var l = n(200651),
        r = n(192379),
        s = n(990547),
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
        T = n(456367);
      function v(e) {
        let {
            guildId: t,
            channel: n,
            width: v,
            height: I,
            keepOpen: O,
            interactive: j = !0,
            analyticsSource: y,
            onClose: b,
          } = e,
          S = (function (e) {
            let [t, n] = (0, i.Wu)([g.Z], () => [
              g.Z.getSounds(),
              g.Z.getFavorites(),
            ]);
            return r.useMemo(() => {
              let l = [],
                r = [...e, E.X8],
                s = (e, r) => {
                  var s, i;
                  for (let o of null !==
                    (i =
                      null === (s = t.get(e)) || void 0 === s
                        ? void 0
                        : s.sort((e, t) =>
                            h.default.compare(e.soundId, t.soundId),
                          )) && void 0 !== i
                    ? i
                    : []) {
                    let e = n.has(o.soundId);
                    ((e && r) || (!e && !r)) && o.available && l.push(o);
                  }
                };
              return r.forEach((e) => s(e, !0)), r.forEach((e) => s(e, !1)), l;
            }, [t, n, e]);
          })((0, f.h)(n, !0)),
          R = (0, C.j)(),
          _ = r.useRef(null),
          [Z, A] = r.useState(void 0),
          P = (0, i.e7)([d.Z], () => d.Z.getMediaSessionId()),
          { analyticsLocations: k } = (0, a.ZP)(o.Z.SOUNDBOARD_WHEEL),
          B = r.useCallback(
            (e) => {
              (0, N.GN)(e, n.id, k), b();
            },
            [k, n.id, b],
          );
        r.useEffect(() => {
          x.w(), u.DZ.loadIfNecessary();
        }, []),
          r.useEffect(() => {
            0 === S.length && 0 === R.length && b();
          }, [S.length, R, b]),
          r.useEffect(
            () => () => {
              let e = _.current;
              !O && null != e && B(e);
            },
            [O, B],
          ),
          (0, c.Z)(
            {
              type: s.ImpressionTypes.POPOUT,
              name: s.ImpressionNames.SOUNDBOARD_POPOUT,
              properties: { source: y, guild_id: t, media_session_id: P },
            },
            { disableTrack: !j },
          );
        let w = r.useCallback((e) => {
            (_.current = e), A(null == e ? void 0 : e.soundId);
          }, []),
          D = r.useCallback(
            (e) => {
              if (null == e) {
                w(null);
                return;
              }
              let t = S[e];
              if (null != t) w(t);
            },
            [w, S],
          ),
          M = r.useCallback(
            (e) => {
              if (null == e) return;
              let t = S[e];
              if (null != t) B(t);
            },
            [S, B],
          ),
          L = r.useMemo(
            () =>
              S.map((e) =>
                (0, l.jsx)(
                  m.ZP,
                  {
                    interactive: j,
                    className: T.soundButton,
                    sound: e,
                    focused: Z === e.soundId,
                    channel: n,
                  },
                  e.soundId,
                ),
              ),
            [Z, n, j, S],
          );
        return 0 === S.length
          ? null
          : (0, l.jsx)(a.Gt, {
              value: k,
              children: (0, l.jsx)(p.Z, {
                wheelWidth: v,
                wheelHeight: I,
                itemWidth: 96,
                itemHeight: 52,
                showDeadZoneIndicator: !O,
                activeItem: Z,
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
        r,
        s,
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
        (s = "displayName") in (r = x)
          ? Object.defineProperty(r, s, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[s] = i),
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
          return s;
        },
      });
      var l = n(200651);
      n(192379);
      var r = n(331595);
      function s(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: s = "currentColor",
          foreground: i,
          ...o
        } = e;
        return (0, l.jsxs)("svg", {
          ...(0, r.Z)(o),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          children: [
            (0, l.jsx)("path", {
              d: "M7.19999 18C7.19999 17.3364 6.77 16.8 6.24019 16.8H3.3598C2.82999 16.8 2.39999 17.3364 2.39999 18V20.4C2.39999 21.0636 2.82999 21.6 3.3598 21.6H6.23923C6.76904 21.6 7.19903 21.0636 7.19903 20.4V18H7.19999Z",
              fill: s,
              className: i,
            }),
            (0, l.jsx)("path", {
              d: "M14.4 10.6909C14.4 10.0876 13.9699 9.6 13.44 9.6H10.56C10.0301 9.6 9.60001 10.0876 9.60001 10.6909V20.5091C9.60001 21.1124 10.0301 21.6 10.56 21.6H13.44C13.9699 21.6 14.4 21.1124 14.4 20.5091V10.6909Z",
              fill: s,
              className: i,
            }),
            (0, l.jsx)("path", {
              d: "M21.6 3.46667C21.6 2.8768 21.1699 2.4 20.64 2.4H17.76C17.2301 2.4 16.8 2.8768 16.8 3.46667V20.5333C16.8 21.1232 17.2301 21.6 17.76 21.6H20.64C21.1699 21.6 21.6 21.1232 21.6 20.5333V3.46667Z",
              fill: s,
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
      function r(e, t, n, r) {
        return l(e, n, r) !== l(t, n, r) && l(e, t, n) !== l(e, t, r);
      }
      function s(e, t, n) {
        let l = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        return {
          x: t.x + ((t.x - e.x) / l) * n,
          y: t.y + ((t.y - e.y) / l) * n,
        };
      }
      function i(e, t, n) {
        let l = { x: n.x, y: n.y },
          s = { x: n.x + n.width, y: n.y },
          i = { x: n.x, y: n.y + n.height },
          o = { x: n.x + n.width, y: n.y + n.height };
        return r(e, t, l, s) || r(e, t, s, o) || r(e, t, o, i) || r(e, t, i, l);
      }
      n.d(t, {
        Vr: function () {
          return i;
        },
        ld: function () {
          return s;
        },
      });
    },
    476221: function (e, t, n) {
      var l = n(981631),
        r = n(388032);
      t.Z = {
        getStatus: function (e) {
          let t,
            n,
            s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          switch (e) {
            case l.hes.CONNECTING:
              (t = l.QKv.CONNECTING), (n = r.intl.string(r.t.MzW9sL));
              break;
            case l.hes.AUTHENTICATING:
              (t = l.QKv.CONNECTING), (n = r.intl.string(r.t.GxXwEx));
              break;
            case l.hes.AWAITING_ENDPOINT:
              (t = l.QKv.CONNECTING), (n = r.intl.string(r.t.xEbu0d));
              break;
            case l.hes.RTC_CONNECTED:
              (t = l.QKv.CONNECTED),
                (n = s
                  ? r.intl.string(r.t.HtVOdX)
                  : r.intl.string(r.t["daXg4+"]));
              break;
            case l.hes.RTC_CONNECTING:
              (t = l.QKv.CONNECTING), (n = r.intl.string(r.t.Gp51dn));
              break;
            case l.hes.ICE_CHECKING:
              (t = l.QKv.CONNECTING), (n = r.intl.string(r.t.rdCyAw));
              break;
            case l.hes.DTLS_CONNECTING:
              (t = l.QKv.CONNECTING), (n = r.intl.string(r.t.UvB3gY));
              break;
            case l.hes.NO_ROUTE:
              (t = l.QKv.ERROR), (n = r.intl.string(r.t.mGhOIi));
              break;
            case l.hes.RTC_DISCONNECTED:
              (t = l.QKv.ERROR), (n = r.intl.string(r.t.M7LDmJ));
              break;
            case l.hes.DISCONNECTED:
            default:
              (t = l.QKv.ERROR), (n = r.intl.string(r.t.NLKQb2));
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
//# sourceMappingURL=a6649cc30ccc6cc361cc.js.map
