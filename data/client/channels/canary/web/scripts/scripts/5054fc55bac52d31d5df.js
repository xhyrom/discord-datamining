"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54814"],
  {
    988298: function (t, n, e) {
      e.d(n, {
        GG: function () {
          return o;
        },
        R2: function () {
          return l;
        },
        h7: function () {
          return s;
        },
        rh: function () {
          return r;
        },
      });
      var i = e(570140);
      function s(t, n, e) {
        return new Promise((s) => {
          setTimeout(() => {
            i.Z.dispatch({
              type: "ACTIVITY_INVITE_MODAL_OPEN",
              activity: t,
              isPrivate: n,
              context: e,
              resolve: s,
            });
          }, 0);
        });
      }
      function r(t) {
        i.Z.dispatch({ type: "ACTIVITY_INVITE_MODAL_QUERY", query: t });
      }
      function o(t) {
        i.Z.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", channelId: t });
      }
      function l(t) {
        i.Z.dispatch({ type: "ACTIVITY_INVITE_MODAL_SEND", userId: t });
      }
    },
    167042: function (t, n, e) {
      e.d(n, {
        $: function () {
          return s;
        },
      });
      var i = e(51596);
      let s = {
        binds: ["mod+k", "mod+t"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.$Z)("KEYBIND", ""), !1),
      };
    },
    951483: function (t, n, e) {
      e.d(n, {
        Sr: function () {
          return x;
        },
        Xq: function () {
          return A;
        },
        Zg: function () {
          return m;
        },
      }),
        e(411104);
      var i = e(186070),
        s = e(185514),
        r = e(360038),
        o = e(175724),
        l = e(705371),
        a = e(138976),
        c = e(167042),
        u = e(239748),
        E = e(337482),
        d = e(679080),
        N = e(510761),
        C = e(189509),
        T = e(673553),
        g = e(280492),
        h = e(746887),
        I = e(721383),
        _ = e(743810),
        R = e(981631),
        p = e(388032);
      function O() {
        for (var t = arguments.length, n = Array(t), e = 0; e < t; e++)
          n[e] = arguments[e];
        return n.map((t) => {
          let n = x[t];
          if (null == n)
            throw Error("getBindsFor(...): No bind for ".concat(n));
          return n.binds[0];
        });
      }
      let x = {
          [R.EkH.SERVER_NEXT]: N.nq,
          [R.EkH.SERVER_PREV]: N.X3,
          [R.EkH.CHANNEL_NEXT]: s.tQ,
          [R.EkH.CHANNEL_PREV]: s.x5,
          [R.EkH.NAVIGATE_BACK]: s.Nx,
          [R.EkH.NAVIGATE_FORWARD]: s.On,
          [R.EkH.UNREAD_NEXT]: _.pd,
          [R.EkH.UNREAD_PREV]: _.wk,
          [R.EkH.MENTION_CHANNEL_NEXT]: _.Nv,
          [R.EkH.MENTION_CHANNEL_PREV]: _.uX,
          [R.EkH.TOGGLE_PREVIOUS_GUILD]: s.$c,
          [R.EkH.JUMP_TO_GUILD]: r.u,
          [R.EkH.SUBMIT]: C.z,
          [R.EkH.TEXTAREA_FOCUS]: T.U,
          [R.EkH.MARK_CHANNEL_READ]: o.f,
          [R.EkH.MARK_SERVER_READ]: l.l,
          [R.EkH.TOGGLE_MUTE]: g.iN,
          [R.EkH.TOGGLE_DEAFEN]: g.oV,
          [R.EkH.TOGGLE_CATEGORY_COLLAPSED]: h.u,
          [R.EkH.SCROLL_UP]: E.B2,
          [R.EkH.SCROLL_DOWN]: E.gN,
          [R.EkH.SEARCH_EMOJIS]: d.S,
          [R.EkH.TOGGLE_HOTKEYS]: I._,
          [R.EkH.JUMP_TO_FIRST_UNREAD]: a.O,
          [R.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
          [R.EkH.CALL_ACCEPT]: i.IL,
          [R.EkH.CALL_START]: i.FI,
          [R.EkH.QUICKSWITCHER_SHOW]: c.$,
        },
        A = { [R.EkH.QUICKSWITCHER_SHOW]: c.$ };
      function m() {
        return [
          {
            description: p.intl.string(p.t.bx4Uy8),
            binds: O(R.EkH.SERVER_PREV, R.EkH.SERVER_NEXT),
          },
          {
            description: p.intl.string(p.t["+Wem6u"]),
            binds: O(R.EkH.CHANNEL_PREV, R.EkH.CHANNEL_NEXT),
          },
          {
            description: p.intl.string(p.t["+2fcd3"]),
            binds: O(R.EkH.NAVIGATE_BACK, R.EkH.NAVIGATE_FORWARD),
          },
          {
            description: p.intl.string(p.t.eVmj1N),
            binds: O(R.EkH.UNREAD_PREV, R.EkH.UNREAD_NEXT),
          },
          {
            description: p.intl.string(p.t.EcqS7e),
            binds: O(R.EkH.MENTION_CHANNEL_PREV, R.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
          },
          {
            description: p.intl.string(p.t["Bqss7+"]),
            binds: O(R.EkH.TOGGLE_PREVIOUS_GUILD),
          },
          {
            description: p.intl.string(p.t.UaXAPz),
            binds: O(R.EkH.MARK_SERVER_READ),
          },
          {
            description: p.intl.string(p.t["5X9vFh"]),
            binds: O(R.EkH.MARK_CHANNEL_READ),
          },
          {
            description: p.intl.string(p.t.JoxNnp),
            binds: O(R.EkH.SEARCH_EMOJIS),
            groupEnd: !0,
          },
          {
            description: p.intl.string(p.t.tL6eVV),
            binds: O(R.EkH.TOGGLE_MUTE),
          },
          {
            description: p.intl.string(p.t["QXe/7e"]),
            binds: O(R.EkH.TOGGLE_DEAFEN),
          },
          {
            description: p.intl.string(p.t.d6UIio),
            binds: O(R.EkH.CALL_ACCEPT),
          },
          {
            description: p.intl.string(p.t.IcEW09),
            binds: O(R.EkH.MARK_CHANNEL_READ),
          },
          {
            description: p.intl.string(p.t.WN2dsb),
            binds: O(R.EkH.CALL_START),
            groupEnd: !0,
          },
          {
            description: p.intl.string(p.t.L3RYYG),
            binds: O(R.EkH.SCROLL_UP, R.EkH.SCROLL_DOWN),
          },
          {
            description: p.intl.string(p.t["3HAurK"]),
            binds: O(R.EkH.JUMP_TO_FIRST_UNREAD),
          },
          {
            description: p.intl.string(p.t.rrYBEh),
            binds: O(R.EkH.TEXTAREA_FOCUS),
          },
          {
            description: p.intl.string(p.t.yYsRlJ),
            binds: O(R.EkH.QUICKSWITCHER_SHOW),
          },
        ];
      }
    },
    301107: function (t, n, e) {
      e.d(n, {
        W: function () {
          return o;
        },
      }),
        e(411104);
      var i = e(192379),
        s = e(250683),
        r = e(253135);
      function o(t) {
        let { fingerprintBase64: n, chunkSize: e, desiredLength: o } = t,
          l = i.useMemo(() => {
            if (null == n || "" === n) return null;
            let t = s.toByteArray(n),
              i = (0, r.Dq)(t, o, e);
            if (null == i) return null;
            let l = RegExp(".{1,".concat(e, "}"), "g"),
              a = i.match(l);
            return null == a ? null : Array.from(a);
          }, [e, n, o]);
        if (null != n && "" !== n && null == l)
          throw Error(
            "[useReadableSecureFramesCode] Failed to parse base 64 code.",
          );
        return l;
      }
    },
    160038: function (t, n, e) {
      e(47120);
      var i = e(200651),
        s = e(192379),
        r = e(120356),
        o = e.n(r),
        l = e(46973),
        a = e(481060),
        c = e(304680),
        u = e(706619),
        E = e(695346),
        d = e(131951),
        N = e(626135),
        C = e(572004),
        T = e(63063),
        g = e(476221),
        h = e(981631),
        I = e(65154),
        _ = e(388032),
        R = e(279778);
      let p = () => {
        d.Z.getMediaEngine().once(l.aB.ConnectionStats, (t) => {
          let n = Object.values(I.Yn)
            .map((n) => {
              let e = t
                .filter((t) => {
                  let { connection: e } = t;
                  return e.context === n;
                })
                .map((t, e) => {
                  let i = t.stats;
                  return (i.context = n), (i.index = e), i;
                });
              for (let t of e) {
                var i;
                (null == t
                  ? void 0
                  : null === (i = t.transport) || void 0 === i
                    ? void 0
                    : i.localAddress) != null &&
                  (t.transport.localAddress = "(redacted)");
              }
              return e;
            })
            .filter((t) => t.length > 0);
          (0, C.JG)(JSON.stringify(n, null, 2)),
            (0, a.showToast)(
              (0, a.createToast)(
                _.intl.string(_.t["t5VZ8/"]),
                a.ToastType.SUCCESS,
              ),
            );
        });
      };
      n.Z = function (t) {
        (0, s.useEffect)(() => {
          N.default.track(h.rMx.OPEN_POPOUT, { type: "RTC Connection" });
        }, []);
        let n = (0, s.useCallback)(() => {
            let { closePopout: n } = t;
            null != n && n(), c.bA();
          }, [t]),
          e = (0, s.useCallback)(() => {
            let {
                hostname: n,
                averagePing: e,
                lastPing: r,
                outboundLossRate: l,
              } = t,
              a = E.Sb.getSetting();
            return (0, i.jsxs)(s.Fragment, {
              children: [
                a &&
                  (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)("div", {
                        className: R.graphContainer,
                        children: (0, i.jsx)(u.Z, {
                          dataPoints: t.pings,
                          width: 258,
                          height: 80,
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: R.popoutText,
                        children: (0, i.jsx)("strong", {
                          children: g.Z.getShortHostname(n),
                        }),
                      }),
                    ],
                  }),
                (0, i.jsx)("div", {
                  className: R.popoutText,
                  children: _.intl.format(_.t["X58/lJ"], {
                    averagePing: e.toFixed(0),
                  }),
                }),
                null != r
                  ? (0, i.jsx)("div", {
                      className: R.popoutText,
                      children: _.intl.format(_.t["6iv2TE"], {
                        lastPing: r.toFixed(0),
                      }),
                    })
                  : null,
                null != l
                  ? (0, i.jsx)("div", {
                      className: R.popoutText,
                      children: _.intl.format(_.t.VIBJMz, {
                        outboundLossRate: l.toFixed(1),
                      }),
                    })
                  : null,
                (0, i.jsxs)("div", {
                  className: o()(R.popoutText, R.popoutTextDetails),
                  children: [
                    null == l
                      ? _.intl.formatToPlainString(_.t.vggaMj, { badPing: 250 })
                      : null,
                    null != l
                      ? _.intl.formatToPlainString(_.t["3pFz1N"], {
                          badPing: 250,
                          badLossRate: 10,
                        })
                      : null,
                  ],
                }),
              ],
            });
          }, [t]),
          { connectionState: r, connectionTypeText: l } = t,
          C = E.Sb.getSetting(),
          O = {
            [h.hes.AWAITING_ENDPOINT]: _.intl.format(_.t.Eu2vUV, {
              url: h.yXt.STATUS,
            }),
            [h.hes.CONNECTING]: _.intl.string(_.t["y+E8aG"]),
            [h.hes.AUTHENTICATING]: _.intl.string(_.t["5lGIZG"]),
            [h.hes.DISCONNECTED]: _.intl.string(_.t.fOX25O),
            [h.hes.RTC_CONNECTING]: _.intl.string(_.t.b5Ubd3),
            [h.hes.ICE_CHECKING]: _.intl.format(_.t.SyoYUV, {
              url: T.Z.getArticleURL(h.BhN.VOICE_CONNECTION_ERRORS),
            }),
            [h.hes.DTLS_CONNECTING]: _.intl.format(_.t.SyoYUV, {
              url: T.Z.getArticleURL(h.BhN.VOICE_CONNECTION_ERRORS),
            }),
            [h.hes.RTC_CONNECTED]: e,
            [h.hes.NO_ROUTE]: _.intl.format(_.t["2tgQnp"], {
              url: T.Z.getArticleURL(h.BhN.VOICE_CONNECTION_ERRORS),
            }),
            [h.hes.RTC_DISCONNECTED]: _.intl.string(_.t.fOX25O),
          }[r];
        return (0, i.jsxs)(i.Fragment, {
          children: [
            "function" == typeof O
              ? O()
              : (0, i.jsx)("p", {
                  className: o()(R.popoutText, R.popoutTextDetails),
                  children: O,
                }),
            (0, i.jsx)("hr", { className: R.separator }),
            (0, i.jsxs)("div", {
              className: R.popoutBottom,
              children: [
                (0, i.jsxs)("span", {
                  className: o()(R.secured, R.textWithIcon),
                  children: [
                    (0, i.jsx)(a.LockIcon, {
                      size: "xxs",
                      color: a.tokens.colors.TEXT_POSITIVE.css,
                      className: R.__invalid_icon,
                    }),
                    l,
                  ],
                }),
                C &&
                  d.Z.supports(I.AN.DIAGNOSTICS) &&
                  !__OVERLAY__ &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(a.Anchor, {
                        className: o()(R.debugButton, R.textWithIcon),
                        onClick: n,
                        children: [
                          _.intl.string(_.t.KBoWg4),
                          (0, i.jsx)(a.WindowLaunchIcon, {
                            size: "xxs",
                            color: "currentColor",
                            className: R.__invalid_icon,
                          }),
                        ],
                      }),
                      (0, i.jsxs)(a.Anchor, {
                        className: o()(R.copyStatsButton, R.textWithIcon),
                        onClick: p,
                        title: "Copy to clipboard",
                        children: [
                          _.intl.string(_.t["XEb+Sk"]),
                          (0, i.jsx)(a.CopyIcon, {
                            size: "xxs",
                            color: "currentColor",
                            className: R.__invalid_icon,
                          }),
                        ],
                      }),
                    ],
                  }),
                !C &&
                  !__OVERLAY__ &&
                  (0, i.jsx)(a.Anchor, {
                    className: R.debugButton,
                    href: T.Z.getArticleURL(h.BhN.VOICE_VIDEO_TROUBLESHOOTING),
                    children: _.intl.string(_.t.hvVgAQ),
                  }),
              ],
            }),
          ],
        });
      };
    },
    873596: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return x;
        },
      }),
        e(47120);
      var i = e(200651),
        s = e(192379),
        r = e(442837),
        o = e(481060),
        l = e(313201),
        a = e(19780),
        c = e(979651),
        u = e(362446),
        E = e(571826),
        d = e(277642),
        N = e(441894),
        C = e(160038),
        T = e(586646),
        g = e(760373),
        h = e(388032),
        I = e(283997);
      function _(t) {
        let { lobbyId: n, connectionTypeText: e, closePopout: s } = t,
          o = (0, r.cj)([u.Z], () => ({
            connectionState: u.Z.getConnectionState(n),
            hostname: u.Z.getHostname(n),
            averagePing: u.Z.getAveragePing(n),
            lastPing: u.Z.getLastPing(n),
            pings: u.Z.getPings(),
            outboundLossRate: u.Z.getOutboundLossRate(n),
          }));
        return (0, i.jsx)(C.Z, { ...o, closePopout: s, connectionTypeText: e });
      }
      function R(t) {
        let { closePopout: n, connectionTypeText: e } = t,
          s = (0, r.cj)([a.Z], () => ({
            connectionState: a.Z.getState(),
            hostname: a.Z.getHostname(),
            averagePing: a.Z.getAveragePing(),
            lastPing: a.Z.getLastPing(),
            outboundLossRate: a.Z.getOutboundLossRate(),
            pings: a.Z.getPings(),
          }));
        return (0, i.jsx)(C.Z, { ...s, closePopout: n, connectionTypeText: e });
      }
      function p(t) {
        let { channelId: n, isOverlay: e, lobbyId: s, closePopout: r } = t,
          o = (0, N.J)({
            channelId: n,
            location: "RTCConnectionDebugPanelContainer",
          })
            ? h.intl.string(h.t["3BogKS"])
            : h.intl.string(h.t.ETIVvr);
        return e
          ? (0, i.jsx)(_, { lobbyId: s, closePopout: r, connectionTypeText: o })
          : (0, i.jsx)(R, { closePopout: r, connectionTypeText: o });
      }
      function O(t) {
        let n = (0, r.e7)([c.Z], () => c.Z.hasVideo(t.channelId)),
          [e, a] = s.useState(g.tu.RTC_DEBUG_PANEL),
          u = (0, l.Dt)(),
          N = s.useMemo(() => {
            switch (e) {
              case g.tu.RTC_DEBUG_PANEL:
                return (0, i.jsx)(p, { ...t });
              case g.tu.RTC_SECURE_FRAMES:
                return (0, i.jsx)(T.Z, { channelId: t.channelId });
            }
          }, [t, e]);
        s.useEffect(() => {
          (0, E.sN)({ channelId: t.channelId, selectedTab: e });
        }, [t.channelId, e]);
        let C = (0, d.r)();
        return (
          s.useEffect(() => {
            C && a(g.tu.RTC_DEBUG_PANEL);
          }, [C]),
          (0, i.jsxs)("div", {
            className: I.container,
            children: [
              (0, i.jsx)(o.Heading, {
                className: I.title,
                variant: "heading-lg/bold",
                color: "header-primary",
                children: n
                  ? h.intl.string(h.t.IlHdW1)
                  : h.intl.string(h.t.WsOisr),
              }),
              (0, i.jsxs)(o.TabBar, {
                className: I.tabs,
                selectedItem: e,
                type: "top",
                look: "brand",
                onItemSelect: a,
                children: [
                  (0, i.jsx)(o.TabBar.Item, {
                    id: g.tu.RTC_DEBUG_PANEL,
                    className: I.tabBarItem,
                    children: h.intl.string(h.t.MBY1Pj),
                  }),
                  C
                    ? null
                    : (0, i.jsx)(o.TabBar.Item, {
                        id: g.tu.RTC_SECURE_FRAMES,
                        className: I.tabBarItem,
                        children: h.intl.string(h.t.zC6o3t),
                      }),
                ],
              }),
              (0, i.jsx)(o.TabBar.Panel, {
                id: e,
                "aria-labelledby": u,
                children: N,
              }),
            ],
          })
        );
      }
      function x(t) {
        return (0, N.J)({
          channelId: t.channelId,
          location: "RTCConnectionPopout",
        })
          ? (0, i.jsx)(O, { ...t })
          : (0, i.jsx)("div", {
              className: I.debugPanelStandalone,
              children: (0, i.jsx)("section", {
                className: I.debugPanelSection,
                children: (0, i.jsx)(p, { ...t }),
              }),
            });
      }
    },
    917405: function (t, n, e) {
      e(47120);
      var i = e(200651),
        s = e(192379),
        r = e(120356),
        o = e.n(r),
        l = e(481060),
        a = e(72416),
        c = e(476221),
        u = e(873596),
        E = e(423516),
        d = e(981631),
        N = e(462346);
      let C = {
          [d.IE4.UNKNOWN]: l.Tooltip.Colors.BLACK,
          [d.IE4.BAD]: l.Tooltip.Colors.RED,
          [d.IE4.AVERAGE]: l.Tooltip.Colors.YELLOW,
          [d.IE4.FINE]: l.Tooltip.Colors.GREEN,
        },
        T = {
          [d.QKv.CONNECTED]: N.rtcConnectionStatusConnected,
          [d.QKv.CONNECTING]: N.rtcConnectionStatusConnecting,
          [d.QKv.ERROR]: N.rtcConnectionStatusError,
        },
        g = {
          [d.IE4.FINE]: N.rtcConnectionQualityFine,
          [d.IE4.AVERAGE]: N.rtcConnectionQualityAverage,
          [d.IE4.BAD]: N.rtcConnectionQualityBad,
          [d.IE4.UNKNOWN]: null,
        };
      class h extends s.PureComponent {
        renderPopoutTarget(t) {
          let n = this.props.channelId;
          return null == n
            ? t({})
            : (0, i.jsx)(l.Popout, {
                renderPopout: this.renderPopout(n),
                position: "top",
                children: t,
              });
        }
        renderStatus() {
          let { hasVideo: t, state: n, channelId: e } = this.props,
            { connectionStatus: s, connectionStatusText: r } = c.Z.getStatus(
              n,
              t,
            );
          return this.renderPopoutTarget((t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(l.Button, {
              look: l.Button.Looks.BLANK,
              size: l.Button.Sizes.NONE,
              onClick: n,
              children: (0, i.jsx)(E.Z, {
                text: r,
                hasVideo: this.props.hasVideo,
                className: T[s],
                hasConnectedChannel: null != e,
              }),
            });
          });
        }
        render() {
          let t;
          let {
            quality: n,
            smallPing: e,
            lastPing: s,
            state: r,
            className: a,
            children: c,
          } = this.props;
          return (
            r === d.hes.RTC_CONNECTED &&
              (t = (0, i.jsx)(l.Tooltip, {
                text:
                  n !== d.IE4.UNKNOWN && null != s
                    ? "".concat(s.toFixed(0), " ms")
                    : null,
                color: C[n],
                children: (t) =>
                  (0, i.jsx)(I, { quality: n, smallPing: e, ...t }),
              })),
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsxs)("div", {
                  className: o()(N.rtcConnectionStatus, g[n], a),
                  children: [
                    t,
                    (0, i.jsx)("div", {
                      className: N.labelWrapper,
                      children: this.renderStatus(),
                    }),
                  ],
                }),
                c,
              ],
            })
          );
        }
        constructor(...t) {
          var n, e, s;
          super(...t),
            (n = this),
            (e = "renderPopout"),
            (s = (t) => (n) => (0, i.jsx)(u.Z, { ...n, channelId: t })),
            e in n
              ? Object.defineProperty(n, e, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[e] = s);
        }
      }
      function I(t) {
        let { quality: n, smallPing: e, ...s } = t;
        if (!(0, l.useRedesignIconContext)().enabled)
          return (0, i.jsx)(a.Z, {
            className: o()(N.ping, { [N.smallPing]: e }),
            foreground: N.pingForeground,
          });
        {
          let t = {
            [d.IE4.FINE]: l.ConnectionFineIcon,
            [d.IE4.AVERAGE]: l.ConnectionAverageIcon,
            [d.IE4.BAD]: l.ConnectionBadIcon,
            [d.IE4.UNKNOWN]: l.ConnectionUnknownIcon,
          }[n];
          return (0, i.jsx)(t, {
            className: o()(N.ping, { [N.smallPing]: e }),
            ...s,
          });
        }
      }
      n.Z = h;
    },
    423516: function (t, n, e) {
      var i = e(200651);
      e(192379);
      var s = e(120356),
        r = e.n(s),
        o = e(570928),
        l = e(977059),
        a = e(388032),
        c = e(591286);
      n.Z = function (t) {
        let { className: n, hasVideo: e, text: s, hasConnectedChannel: u } = t,
          { enabled: E } = (0, l.S)({ location: "RTCConnectionStatusText" }),
          d = e ? a.intl.string(a.t.IlHdW1) : a.intl.string(a.t.WsOisr);
        return (0, i.jsx)(o.Z, {
          className: r()(n, E ? c.hoverableStatus : c.status),
          hoverText: E && u ? d : null,
          children: s,
        });
      };
    },
    586646: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return g;
        },
      });
      var i = e(200651),
        s = e(192379),
        r = e(442837),
        o = e(481060),
        l = e(19780),
        a = e(571826),
        c = e(630759),
        u = e(301107),
        E = e(785792),
        d = e(190054),
        N = e(760373),
        C = e(388032),
        T = e(302690);
      function g(t) {
        let { channelId: n } = t,
          e = (0, r.e7)([l.Z], () => {
            var t;
            return null === (t = l.Z.getSecureFramesState()) || void 0 === t
              ? void 0
              : t.epochAuthenticator;
          }),
          g = (0, u.W)({
            fingerprintBase64: e,
            chunkSize: N.y6,
            desiredLength: N.YP,
          }),
          h = s.useCallback(() => {
            (0, a.PM)({ channelId: n });
          }, [n]);
        return (0, i.jsxs)("div", {
          className: T.container,
          children: [
            (0, i.jsxs)("div", {
              className: T.tag,
              children: [
                (0, i.jsx)(o.LockIcon, {
                  size: "xxs",
                  color: o.tokens.colors.TEXT_POSITIVE,
                }),
                (0, i.jsx)(o.Text, {
                  variant: "text-xs/medium",
                  color: "text-positive",
                  children: C.intl.string(C.t["3BogKS"]),
                }),
              ],
            }),
            (0, i.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-secondary",
              children: C.intl.string(C.t.B9JNsr),
            }),
            (0, i.jsxs)("div", {
              className: T.header,
              children: [
                (0, i.jsx)(o.Heading, {
                  variant: "text-sm/bold",
                  color: "header-primary",
                  children: C.intl.string(C.t.cTQI5u),
                }),
                null != g &&
                  (0, i.jsx)(d.H, {
                    chunks: g,
                    color: o.tokens.colors.INTERACTIVE_NORMAL.css,
                    onCopy: h,
                  }),
              ],
            }),
            (0, i.jsx)(E.b, { className: T.code, chunks: g, columns: N.WK }),
            (0, i.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-secondary",
              children: C.intl.format(C.t.wKxADQ, { helpArticle: (0, c.uV)() }),
            }),
          ],
        });
      }
    },
    785792: function (t, n, e) {
      e.d(n, {
        b: function () {
          return c;
        },
      });
      var i = e(200651),
        s = e(192379),
        r = e(120356),
        o = e.n(r),
        l = e(481060),
        a = e(277766);
      function c(t) {
        let { chunks: n, columns: e, className: r } = t,
          c = s.useMemo(() => ({ "--secure-frames-columns": e }), [e]);
        return null == n
          ? (0, i.jsx)("div", {
              className: a.loading,
              children: (0, i.jsx)(l.Spinner, {}),
            })
          : (0, i.jsx)("div", {
              style: c,
              className: o()(a.code, r),
              children: n.map((t, n) =>
                (0, i.jsx)(
                  "div",
                  {
                    className: o()(a.chunk, { [a.divider]: n > e - 1 }),
                    children: (0, i.jsx)(l.Text, {
                      className: a.codeText,
                      variant: "code",
                      color: "text-normal",
                      children: t,
                    }),
                  },
                  "".concat(t, "-").concat(n),
                ),
              ),
            });
      }
    },
    190054: function (t, n, e) {
      e.d(n, {
        H: function () {
          return E;
        },
      }),
        e(47120);
      var i = e(200651),
        s = e(192379),
        r = e(120356),
        o = e.n(r),
        l = e(481060),
        a = e(572004),
        c = e(388032),
        u = e(429200);
      function E(t) {
        let { chunks: n, className: e, onCopy: r, ...E } = t,
          d = s.useMemo(() => (null == n ? void 0 : n.join(" ")), [n]),
          [N, C] = s.useState(!1),
          T = s.useCallback(() => {
            C(!0), (0, a.JG)(d), null == r || r();
          }, [r, d]),
          g = N ? l.CircleCheckIcon : l.CopyIcon;
        return (0, i.jsx)(l.Clickable, {
          className: o()(u.container, e),
          onClick: T,
          children: (0, i.jsx)(l.Tooltip, {
            text: N ? c.intl.string(c.t["t5VZ8/"]) : c.intl.string(c.t.OpuAlJ),
            children: (t) =>
              (0, i.jsx)(g, {
                ...E,
                ...t,
                size: "xxs",
                color: N
                  ? l.tokens.colors.TEXT_POSITIVE
                  : l.tokens.colors.INTERACTIVE_NORMAL,
              }),
          }),
        });
      }
    },
    706619: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      }),
        e(47120);
      var i = e(200651),
        s = e(192379),
        r = e(311308),
        o = e(692547),
        l = e(481060);
      function a(t) {
        let n = (0, s.useRef)(null),
          [e, a] = (0, s.useState)(null),
          [c] = (0, s.useState)(() => new r.TimelineDataSeries()),
          u = (0, l.useToken)(o.Z.colors.BACKGROUND_PRIMARY).hsl(),
          E = (0, l.useToken)(o.Z.colors.TEXT_NORMAL).hsl(),
          d = (0, l.useToken)(o.Z.colors.BACKGROUND_ACCENT).hsl(),
          N = (0, l.useToken)(o.Z.unsafe_rawColors.BRAND_500).hsl();
        (0, s.useEffect)(() => {
          var t;
          let e = n.current;
          if (null == e) return;
          let i = new r.TimelineGraphView(
            e,
            null !== (t = window.devicePixelRatio) && void 0 !== t ? t : 1,
          );
          (i.backgroundColor = u),
            (i.textColor = E),
            (i.gridColor = d),
            (i.timeOptions = { timeStyle: "short" }),
            (i.fontFamily = "gg sans"),
            (i.fontSize = 11),
            c.setColor(N),
            i.addDataSeries(c),
            i.updateEndDate(),
            a(i);
        }, [n, u, N, d, E, c]),
          c.setPoints(t.dataPoints),
          null == e || e.updateEndDate();
        let C = { width: t.width, height: t.height };
        return (0, i.jsx)(
          "canvas",
          { style: C, width: t.width, height: t.height, ref: n },
          "canvas",
        );
      }
    },
    362446: function (t, n, e) {
      e(724458);
      var i,
        s,
        r,
        o,
        l = e(442837),
        a = e(570140),
        c = e(981631);
      let u = {};
      function E(t) {
        let n = u[(t = null != t ? t : "null")];
        return (
          null == n &&
            (n = u[t] =
              {
                state: c.hes.DISCONNECTED,
                quality: c.IE4.UNKNOWN,
                pings: [],
                hostname: null,
                lossRate: null,
              }),
          n
        );
      }
      function d(t, n, e) {
        let i = u[(t = null != t ? t : "null")];
        return null != i ? n(i) : e;
      }
      class N extends (i = l.ZP.Store) {
        getConnectionState(t) {
          return d(
            t,
            (t) => {
              let { state: n } = t;
              return n;
            },
            c.hes.DISCONNECTED,
          );
        }
        getQuality(t) {
          return d(
            t,
            (t) => {
              let { quality: n } = t;
              return n;
            },
            c.IE4.UNKNOWN,
          );
        }
        getHostname(t) {
          return d(
            t,
            (t) => {
              let { hostname: n } = t;
              return n;
            },
            null,
          );
        }
        getPings(t) {
          return d(
            t,
            (t) => {
              let { pings: n } = t;
              return n;
            },
            [],
          );
        }
        getAveragePing(t) {
          let n = this.getPings(t);
          return 0 === n.length
            ? 0
            : n.reduce((t, n) => t + n.value, 0) / n.length;
        }
        getLastPing(t) {
          var n;
          let e = this.getPings(t);
          if (0 === e.length) return 0;
          return null === (n = e[e.length - 1]) || void 0 === n
            ? void 0
            : n.value;
        }
        getOutboundLossRate(t) {
          return d(
            t,
            (t) => {
              let { lossRate: n } = t;
              return n;
            },
            null,
          );
        }
      }
      (o = "OverlayRTCConnectionStore"),
        (r = "displayName") in (s = N)
          ? Object.defineProperty(s, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[r] = o),
        (n.Z = new N(a.Z, {
          OVERLAY_INITIALIZE: function (t) {
            u = t.rtcConnectionStates;
          },
          RTC_CONNECTION_STATE: function (t) {
            if (null != t.streamKey) return !1;
            let n = E(t.lobbyId);
            (n.state = t.state), (n.hostname = t.hostname);
          },
          RTC_CONNECTION_PING: function (t) {
            let n = E(t.lobbyId);
            (n.pings = t.pings), (n.quality = t.quality);
          },
          RTC_CONNECTION_LOSS_RATE: function (t) {
            E(t.lobbyId).lossRate = t.lossRate;
          },
        }));
    },
    72416: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = e(200651);
      e(192379);
      var s = e(325767);
      function r(t) {
        let {
          width: n = 24,
          height: e = 24,
          color: r = "currentColor",
          foreground: o,
          ...l
        } = t;
        return (0, i.jsxs)("svg", {
          ...(0, s.Z)(l),
          width: n,
          height: e,
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              d: "M7.19999 18C7.19999 17.3364 6.77 16.8 6.24019 16.8H3.3598C2.82999 16.8 2.39999 17.3364 2.39999 18V20.4C2.39999 21.0636 2.82999 21.6 3.3598 21.6H6.23923C6.76904 21.6 7.19903 21.0636 7.19903 20.4V18H7.19999Z",
              fill: r,
              className: o,
            }),
            (0, i.jsx)("path", {
              d: "M14.4 10.6909C14.4 10.0876 13.9699 9.6 13.44 9.6H10.56C10.0301 9.6 9.60001 10.0876 9.60001 10.6909V20.5091C9.60001 21.1124 10.0301 21.6 10.56 21.6H13.44C13.9699 21.6 14.4 21.1124 14.4 20.5091V10.6909Z",
              fill: r,
              className: o,
            }),
            (0, i.jsx)("path", {
              d: "M21.6 3.46667C21.6 2.8768 21.1699 2.4 20.64 2.4H17.76C17.2301 2.4 16.8 2.8768 16.8 3.46667V20.5333C16.8 21.1232 17.2301 21.6 17.76 21.6H20.64C21.1699 21.6 21.6 21.1232 21.6 20.5333V3.46667Z",
              fill: r,
              className: o,
            }),
          ],
        });
      }
    },
    476221: function (t, n, e) {
      var i = e(981631),
        s = e(388032);
      n.Z = {
        getStatus: function (t) {
          let n,
            e,
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          switch (t) {
            case i.hes.CONNECTING:
              (n = i.QKv.CONNECTING), (e = s.intl.string(s.t.MzW9sL));
              break;
            case i.hes.AUTHENTICATING:
              (n = i.QKv.CONNECTING), (e = s.intl.string(s.t.GxXwEx));
              break;
            case i.hes.AWAITING_ENDPOINT:
              (n = i.QKv.CONNECTING), (e = s.intl.string(s.t.xEbu0d));
              break;
            case i.hes.RTC_CONNECTED:
              (n = i.QKv.CONNECTED),
                (e = r
                  ? s.intl.string(s.t.HtVOdX)
                  : s.intl.string(s.t["daXg4+"]));
              break;
            case i.hes.RTC_CONNECTING:
              (n = i.QKv.CONNECTING), (e = s.intl.string(s.t.Gp51dn));
              break;
            case i.hes.ICE_CHECKING:
              (n = i.QKv.CONNECTING), (e = s.intl.string(s.t.rdCyAw));
              break;
            case i.hes.DTLS_CONNECTING:
              (n = i.QKv.CONNECTING), (e = s.intl.string(s.t.UvB3gY));
              break;
            case i.hes.NO_ROUTE:
              (n = i.QKv.ERROR), (e = s.intl.string(s.t.mGhOIi));
              break;
            case i.hes.RTC_DISCONNECTED:
              (n = i.QKv.ERROR), (e = s.intl.string(s.t.M7LDmJ));
              break;
            case i.hes.DISCONNECTED:
            default:
              (n = i.QKv.ERROR), (e = s.intl.string(s.t.NLKQb2));
          }
          return { connectionStatus: n, connectionStatusText: e };
        },
        getShortHostname: function (t) {
          return null == t ? "" : t.split(".")[0];
        },
      };
    },
  },
]);
//# sourceMappingURL=5054fc55bac52d31d5df.js.map
