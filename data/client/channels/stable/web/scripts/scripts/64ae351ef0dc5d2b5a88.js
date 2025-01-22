"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["701"],
  {
    775322: function (e) {
      e.exports = "/assets/e5e07cf5a6e7f19be45b.svg";
    },
    853453: function (e) {
      e.exports = "/assets/3cfc93ceb08d74acbcf8.svg";
    },
    570928: function (e, t, n) {
      var i,
        o,
        a,
        r,
        l = n(200651),
        c = n(192379),
        s = n(120356),
        d = n.n(s),
        u = n(971139);
      class f extends (r = c.PureComponent) {
        render() {
          let {
            tag: e,
            children: t,
            hoverText: n,
            className: i,
            forceHover: o,
            ...a
          } = this.props;
          return (0, l.jsxs)("div", {
            ...a,
            className: d()(i, u.hoverRoll, {
              [u.disabled]: null == n,
              [u.forceHover]: o,
            }),
            children: [
              (0, l.jsx)(e, { className: u.hovered, children: n }),
              (0, l.jsx)(e, { className: u.default, children: t }),
            ],
          });
        }
      }
      (a = { tag: "div", forceHover: !1 }),
        (o = "defaultProps") in (i = f)
          ? Object.defineProperty(i, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[o] = a),
        (t.Z = f);
    },
    214852: function (e, t, n) {
      n.d(t, {
        z: function () {
          return r;
        },
      }),
        n(47120);
      var i = n(192379),
        o = n(442837),
        a = n(353926);
      function r(e) {
        let [t, n] = (0, o.Wu)([a.Z], () => [
          a.Z.getAllUserExperimentDescriptors(),
          a.Z.getGuildExperiments(),
        ]);
        i.useEffect(() => {
          e.trigger();
        }, [e, t, n]);
      }
    },
    212632: function (e, t, n) {
      n(47120);
      var i = n(200651),
        o = n(192379),
        a = n(120356),
        r = n.n(a),
        l = n(481060),
        c = n(981631),
        s = n(388032),
        d = n(373780),
        u = n(232186);
      let f = 0,
        b = () => "notification-position-selector-".concat(f++),
        _ = (e) => {
          switch (e) {
            case c._vf.TOP_LEFT:
              return s.intl.string(s.t.xlchpa);
            case c._vf.TOP_RIGHT:
              return s.intl.string(s.t["4uHRHB"]);
            case c._vf.BOTTOM_LEFT:
              return s.intl.string(s.t.ovWFnJ);
            case c._vf.BOTTOM_RIGHT:
              return s.intl.string(s.t["M/9V7+"]);
            default:
              return s.intl.string(s.t.AlY4ZW);
          }
        },
        g = [
          c._vf.DISABLED,
          c._vf.TOP_LEFT,
          c._vf.TOP_RIGHT,
          c._vf.BOTTOM_LEFT,
          c._vf.BOTTOM_RIGHT,
        ];
      function h(e) {
        let { position: t, onChange: n } = e,
          [a] = o.useState(() => b()),
          f =
            t === c._vf.DISABLED
              ? s.intl.string(s.t.R6LxVV)
              : s.intl.formatToPlainString(s.t.XXHDMz, { position: _(t) });
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(l.FocusRing, {
              within: !0,
              offset: -2,
              children: (0, i.jsx)("div", {
                className: r()(d.wrapper, {
                  [d.disabledSelected]: t === c._vf.DISABLED,
                }),
                children: g.map((e) =>
                  (0, i.jsxs)(
                    "label",
                    {
                      className: r()({
                        [d.selected]: e === t,
                        [d.disabled]: e === c._vf.DISABLED,
                        [d.topRight]: e === c._vf.TOP_RIGHT,
                        [d.topLeft]: e === c._vf.TOP_LEFT,
                        [d.bottomRight]: e === c._vf.BOTTOM_RIGHT,
                        [d.bottomLeft]: e === c._vf.BOTTOM_LEFT,
                      }),
                      children: [
                        _(e),
                        e === c._vf.DISABLED
                          ? (0, i.jsx)(l.DenyIcon, {
                              size: "md",
                              color: "currentColor",
                              className: d.disabledIcon,
                            })
                          : null,
                        (0, i.jsx)("input", {
                          type: "radio",
                          name: a,
                          value: e,
                          onChange: (t) => n(t, e),
                          className: d.hiddenInput,
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            }),
            (0, i.jsx)(l.FormText, {
              type: l.FormTextTypes.DESCRIPTION,
              className: u.marginTop8,
              children: f,
            }),
          ],
        });
      }
      (h.Positions = c._vf), (t.Z = h);
    },
    809357: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
        o: function () {
          return c;
        },
      });
      var i = n(442837),
        o = n(522474),
        a = n(658785),
        r = n(981631);
      function l(e) {
        let { location: t, options: n } = e,
          i = c(),
          { showKeybindIndicators: o } = a.Z.useExperiment({ location: t }, n);
        return o && i;
      }
      function c() {
        return !(0, i.e7)([o.Z], () =>
          o.Z.getWindowVisible(r.KJ3.ACTIVITY_POPOUT),
        );
      }
    },
    106371: function (e, t, n) {
      var i = n(818083);
      let o = (0, i.B)({
        kind: "user",
        id: "2024-08_reaction_push_notifications_user",
        label: "In App Notifications for Reactions",
        defaultConfig: {
          enableInAppNotifications: !1,
          enableNotificationsForAllReactions: !1,
        },
        treatments: [
          {
            id: 1,
            label: "Enable In App Notifications for Reactions (First Reaction)",
            config: {
              enableInAppNotifications: !0,
              enableNotificationsForAllReactions: !1,
            },
          },
          {
            id: 2,
            label: "Enable In App Notifications for Reactions (All Reactions)",
            config: {
              enableInAppNotifications: !0,
              enableNotificationsForAllReactions: !0,
            },
          },
          {
            id: 3,
            label: "Enable In App Notifications for Reactions (All Reactions)",
            config: {
              enableInAppNotifications: !0,
              enableNotificationsForAllReactions: !0,
            },
          },
        ],
      });
      (0, i.B)({
        kind: "guild",
        id: "2024-08_reaction_push_notifications_guild",
        label: "In App Notifications for Reactions (Guild)",
        defaultConfig: { enableInAppNotifications: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable In App Notifications for Reactions",
            config: { enableInAppNotifications: !0 },
          },
        ],
      }),
        (t.Z = o);
    },
    304445: function (e, t, n) {
      n(47120), n(411104);
      var i = n(572299),
        o = n(38618),
        a = n(905423),
        r = n(622143),
        l = n(703656),
        c = n(981631);
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      t.Z = new (class e {
        initialize() {
          this.cleanup(),
            (this.unlistenHistory = (0, l.s1)().listen(this.handleRouteChange));
          let { pathname: e } = (0, l.s1)().location;
          a.Z.getState().resetPath(e),
            (this.unlistenKeyboardChange = a.Z.subscribe(
              this.handleKeybindRouteChange,
            )),
            o.Z.addChangeListener(this.handleConnectionChange);
        }
        executeRouteRewrites(e, t) {
          if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
              let o = (0, l.s1)().location.pathname,
                a = n(e, t);
              if (null != a)
                return (
                  (0, i.n)({
                    message:
                      "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                    data: { replacePath: a.path, previousPath: o },
                  }),
                  (0, l.dL)(a.path, a.state),
                  !0
                );
            }
          else
            throw Error(
              "RouteManager: Something has gone horribly wrong with rewrites",
            );
          return !1;
        }
        cleanup() {
          var e, t;
          null === (e = this.unlistenHistory) || void 0 === e || e.call(this),
            (this.unlistenHistory = void 0),
            null === (t = this.unlistenKeyboardChange) ||
              void 0 === t ||
              t.call(this),
            (this.unlistenKeyboardChange = void 0),
            o.Z.removeChangeListener(this.handleConnectionChange);
        }
        addRouteChangeListener(e) {
          return (
            null != this.unlistenHistory && e((0, l.s1)().location, "REPLACE"),
            this.listeners.add(e),
            () => this.removeRouteChangeListener(e)
          );
        }
        addRouteRewriter(e) {
          if (null != this.unlistenHistory) {
            let t = e((0, l.s1)().location, (0, l.s1)().action);
            null != t && (0, l.dL)(t.path, t.state);
          }
          return this.rewrites.add(e), () => this.removeRouteRewriter(e);
        }
        removeRouteChangeListener(e) {
          this.listeners.delete(e);
        }
        removeRouteRewriter(e) {
          this.rewrites.delete(e);
        }
        getHistory() {
          return (0, l.s1)();
        }
        constructor() {
          s(this, "unlistenHistory", void 0),
            s(this, "unlistenKeyboardChange", void 0),
            s(this, "rewrites", new Set()),
            s(this, "listeners", new Set()),
            s(this, "routeChangeCount", 0),
            s(this, "timer", -1),
            s(this, "connected", !1),
            s(this, "handleConnectionChange", () => {
              let e = o.Z.isConnected(),
                t = e && !this.connected;
              (this.connected = e),
                t &&
                  ((this.routeChangeCount = 0),
                  this.executeRouteRewrites((0, l.s1)().location, "REPLACE"));
            }),
            s(this, "handleRouteChange", (e, t) => {
              if (this.executeRouteRewrites(e, t)) return;
              if (!(0, r.r)(e)) {
                (0, l.dL)(c.Z5c.ME);
                return;
              }
              let n = a.Z.getState();
              for (let i of (n.basePath !== e.pathname &&
                n.resetPath(e.pathname),
              this.listeners))
                try {
                  i(e, t);
                } catch (e) {
                  console.warn(
                    "RouteManager.listen: A route listener has caused an error",
                    e.message,
                  );
                }
              this.routeChangeCount = 0;
            }),
            s(this, "handleKeybindRouteChange", (e) => {
              let { path: t } = e;
              null != t
                ? (clearTimeout(this.timer),
                  (this.timer = setTimeout(this.flushRoute, 200)))
                : null == t && clearTimeout(this.timer);
            }),
            s(this, "flushRoute", () => {
              clearTimeout(this.timer);
              let e = a.Z.getState();
              null != e.path && (0, l.uL)(e.path);
            });
        }
      })();
    },
    622143: function (e, t, n) {
      n.d(t, {
        r: function () {
          return i;
        },
      });
      function i(e) {
        return !0;
      }
    },
    601572: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return B;
          },
        }),
        n(47120);
      var i = n(200651),
        o = n(192379),
        a = n(481060),
        r = n(846027),
        l = n(410575),
        c = n(2052),
        s = n(100527),
        d = n(906732),
        u = n(600164),
        f = n(313201),
        b = n(695346),
        _ = n(932724),
        g = n(716161),
        h = n(672339),
        m = n(898531),
        p = n(131951),
        T = n(594174),
        v = n(626135),
        I = n(747545),
        C = n(981631),
        w = n(388032),
        N = n(845569);
      let S = 368,
        R = 207;
      function B(e) {
        let {
            transitionState: t,
            videoEnabled: n,
            onEnable: B,
            onClose: k,
          } = e,
          O = p.Z.getCameraComponent(),
          x = (0, f.Dt)(),
          E = (0, m.Z)(),
          Z = b.qF.useSetting(),
          [A, P] = o.useState((0, _.P)(T.default.getCurrentUser())),
          L = (0, c.O)(),
          { analyticsLocations: y } = (0, d.ZP)(s.Z.CAMERA_PREVIEW),
          M = o.useRef(null);
        o.useEffect(() => {
          v.default.track(C.rMx.OPEN_MODAL, { type: "Camera Preview Modal" });
        }, []),
          o.useEffect(() => {
            var e;
            null === (e = M.current) || void 0 === e || e.scrollToTop();
          }, []);
        let F = async () => {
            await D(), r.Z.setVideoEnabled(!0), null == B || B();
          },
          D = async () => {
            try {
              await (0, h.wG)(A, {
                location: { page: C.ZY5.PREVIEW_CAMERA_MODAL, ...L.location },
              });
            } catch (e) {}
            await k(), (0, g.Up)(A);
          };
        return (0, i.jsx)(d.Gt, {
          value: y,
          children: (0, i.jsx)(l.Z, {
            page: C.ZY5.PREVIEW_CAMERA_MODAL,
            children: (0, i.jsxs)(a.ModalRoot, {
              className: N.modalRoot,
              size: a.ModalSize.DYNAMIC,
              "aria-labelledby": x,
              transitionState: t,
              children: [
                (0, i.jsxs)(a.ModalContent, {
                  className: E ? N.contentWithVideoBackgrounds : N.content,
                  scrollerRef: M,
                  children: [
                    (0, i.jsx)(a.Heading, {
                      id: x,
                      className: N.header,
                      variant: "heading-xl/semibold",
                      children: n
                        ? w.intl.string(w.t.LAwwbW)
                        : w.intl.string(w.t["/HITVF"]),
                    }),
                    (0, i.jsx)(I.Z, {
                      hidePreviewToggle: !0,
                      showSmallBackgroundOptions: !0,
                      hideDeviceHeader: !0,
                      hideCameraSettingsLink: !0,
                      selectedBackgroundOption: A,
                      onSelectBackgroundOption: P,
                      hideDeviceSelector: n,
                      renderCamera: (e) =>
                        (0, i.jsxs)("div", {
                          className: N.cameraPreview,
                          children: [
                            (0, i.jsx)("div", {
                              className: N.camera,
                              children: (0, i.jsx)(O, {
                                disabled: !1,
                                deviceId: e,
                                width: S,
                                height: R,
                              }),
                            }),
                            (0, i.jsx)(I.S, {}),
                          ],
                        }),
                      onLearnMore: k,
                    }),
                  ],
                }),
                (0, i.jsxs)(a.ModalFooter, {
                  justify: u.Z.Justify.BETWEEN,
                  children: [
                    (() => {
                      let e = n
                        ? w.intl.string(w.t.KQENho)
                        : w.intl.string(w.t.kgIe9f);
                      return (0, i.jsx)(a.Button, {
                        onClick: n ? D : F,
                        size: a.Button.Sizes.SMALL,
                        autoFocus: !n,
                        children: e,
                      });
                    })(),
                    (0, i.jsx)(a.Checkbox, {
                      size: 18,
                      type: a.Checkbox.Types.INVERTED,
                      value: Z,
                      onChange: () => {
                        b.qF.updateSetting(!Z),
                          v.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                            always_preview_video: !Z,
                          });
                      },
                      children: (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children: w.intl.string(w.t["3Ppr1t"]),
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)(a.ModalCloseButton, {
                  onClick: k,
                  className: N.modalClose,
                }),
              ],
            }),
          }),
        });
      }
    },
    460562: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(331595);
      function a(e) {
        let {
          width: t = 32,
          height: n = 32,
          color: a = "currentColor",
          ...r
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, o.Z)(r),
          width: t,
          height: n,
          viewBox: "0 0 12 12",
          fill: "none",
          children: [
            (0, i.jsx)("path", { d: "M7.25 1H4.75V7.25H7.25V1Z", fill: a }),
            (0, i.jsx)("path", {
              d: "M4.75 9.75C4.75 10.4167 5.33333 11 6 11C6.66667 11 7.25 10.4167 7.25 9.75C7.25 9.08333 6.66667 8.5 6 8.5C5.33333 8.5 4.75 9.08333 4.75 9.75Z",
              fill: a,
            }),
          ],
        });
      }
    },
    671533: function (e, t, n) {
      n(411104);
      var i,
        o,
        a = n(200651);
      n(192379);
      var r = n(120356),
        l = n.n(r),
        c = n(331595),
        s = n(485270);
      ((o = i || (i = {})).LEFT = "LEFT"),
        (o.RIGHT = "RIGHT"),
        (o.UP = "UP"),
        (o.DOWN = "DOWN"),
        (o.UP_LEFT = "UP_LEFT"),
        (o.DOWN_RIGHT = "DOWN_RIGHT");
      let d = (e) => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = "currentColor",
          direction: o,
          foreground: r,
          className: d,
          title: u,
          ...f
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, c.Z)(f),
          width: t,
          height: n,
          className: l()(
            d,
            (function (e) {
              switch (e) {
                case "LEFT":
                  return s.left;
                case "RIGHT":
                  return s.right;
                case "UP":
                  return null;
                case "DOWN":
                  return s.down;
                case "UP_LEFT":
                  return s.upLeft;
                case "DOWN_RIGHT":
                  return s.downRight;
                default:
                  throw Error("Invalid Direction ".concat(e));
              }
            })(o),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != u ? (0, a.jsx)("title", { children: u }) : null,
            (0, a.jsx)("polygon", {
              className: r,
              fill: i,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (d.Directions = i), (t.Z = d);
    },
    912101: function (e, t, n) {
      let i;
      n(654769);
      (i = n(654769).Z), (t.Z = i);
    },
    88658: function (e, t, n) {
      n.d(t, {
        $6: function () {
          return g;
        },
        YK: function () {
          return d;
        },
        _o: function () {
          return f;
        },
        bL: function () {
          return _;
        },
        gl: function () {
          return u;
        },
        rr: function () {
          return b;
        },
      }),
        n(47120);
      var i,
        o,
        a = n(695346),
        r = n(486472),
        l = n(430824);
      n(626135);
      var c = n(981631);
      n(388032);
      let s = 864e5 * c.eBq;
      function d() {
        let e = a.h2.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != l.Z.getGuild(e))),
          new Set(e)
        );
      }
      function u() {
        let e = a.zA.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != l.Z.getGuild(e))),
          new Set(e)
        );
      }
      function f() {
        let e = a.SE.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != l.Z.getGuild(e))),
          new Set(e)
        );
      }
      function b() {
        let e = a.iH.getSetting();
        return (
          0 === r.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != l.Z.getGuild(e))),
          new Set(e)
        );
      }
      function _(e) {
        return (e & c.HGf) === c.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & c.SOq.MUTUAL_FRIENDS) === c.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & c.SOq.MUTUAL_GUILDS) === c.SOq.MUTUAL_GUILDS,
            };
      }
      function g(e, t) {
        return (
          !!(!t.verified || t.isStaff()) ||
          (null != e && s > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((o = i || (i = {}))[(o.UNDECIDED = 0)] = "UNDECIDED"),
        (o[(o.OPTIN = 1)] = "OPTIN"),
        (o[(o.OPTOUT = 2)] = "OPTOUT");
    },
    654769: function (e, t, n) {
      let i;
      n(47120), n(177593), n(773603);
      var o,
        a = n(392711),
        r = n.n(a),
        l = n(525654),
        c = n.n(l),
        s = n(579806),
        d = n(933557),
        u = n(710845),
        f = n(474873),
        b = n(135906),
        _ = n(592125),
        g = n(292959),
        h = n(699516),
        m = n(246946),
        p = n(594174),
        T = n(626135),
        v = n(5192),
        I = n(358085),
        C = n(557177),
        w = n(998502),
        N = n(981631);
      function S(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      let R = I.isPlatformEmbedded && (0, I.isWindows)(),
        B = R && 10 > parseFloat(s.Z.os.release),
        k = !0;
      if (R && !B) {
        let [e, , t] = s.Z.os.release.split(".");
        k = parseInt(e) > 10 || parseInt(t) >= 15063;
      }
      let O = new u.Z("NotificationUtils"),
        x =
          (R && k) ||
          ("Chrome" === c().name && 47 > parseFloat(c().version)) ||
          ("Firefox" === c().name && 52 > parseFloat(c().version));
      async function E() {
        if (void 0 === i) {
          if (
            null === s.Z || void 0 === s.Z
              ? void 0
              : s.Z.features.supports("notifications")
          )
            try {
              i = await w.ZP.invoke("NOTIFICATIONS_GET_SETTINGS");
            } catch (e) {
              O.warn(
                "Fetching native notification settings failed with error: ",
                e,
              ),
                (i = null);
            }
          else i = null;
        }
        return i;
      }
      async function Z() {
        let e = await E();
        return (
          (null == e ? void 0 : e.authorizationStatus) === "authorized" &&
          (null == e ? void 0 : e.sound) === !0
        );
      }
      function A(e, t) {
        var n;
        return null !== (n = (0, b.Z)(null != t ? t : f.Z.getSoundpack())[e]) &&
          void 0 !== n
          ? n
          : e;
      }
      async function P(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = arguments.length > 2 ? arguments[2] : void 0;
        if (await Z())
          try {
            await w.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", {
              sound: A(e, n),
            });
            return;
          } catch (e) {
            O.warn("Native notification sound failed with error: ", e);
          }
        (0, C.GN)(e, t, void 0, n);
      }
      let L = r().throttle(P, 1e3, { leading: !0 });
      function y() {
        w.ZP.flashFrame(!1);
      }
      R &&
        (window.addEventListener("focus", y), w.ZP.on("MAIN_WINDOW_FOCUS", y));
      let M = window.Notification;
      B &&
        (w.ZP.on("NOTIFICATION_CLICK", (e, t) => {
          let n = null[t];
          null != n && (n.onclick(), n.close());
        }),
        w.ZP.send("NOTIFICATIONS_CLEAR"),
        (o = class {
          static requestPermission(e) {
            e();
          }
          close() {
            null != null[this.id] &&
              (delete null[this.id],
              w.ZP.send("NOTIFICATION_CLOSE", this.id),
              this.onclose());
          }
          constructor(e, { body: t, icon: n }) {
            S(this, "id", M._id++),
              S(this, "title", void 0),
              S(this, "body", void 0),
              S(this, "icon", void 0),
              S(this, "onshow", function () {}),
              S(this, "onclick", function () {}),
              S(this, "onclose", function () {}),
              (this.title = e),
              (this.body = t),
              (this.icon = n),
              setImmediate(() => this.onshow()),
              (null[this.id] = this),
              w.ZP.send("NOTIFICATION_SHOW", {
                id: this.id,
                title: this.title,
                body: this.body,
                icon: this.icon,
              });
          }
        }),
        S(o, "permission", "granted"),
        S(o, "_id", 0),
        (M = o));
      let F = {};
      if (
        null === s.Z || void 0 === s.Z
          ? void 0
          : s.Z.features.supports("notifications")
      )
        try {
          w.ZP.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n) => {
            if ("dismiss" === t) delete F[n];
            else {
              var i, o, a;
              let e = F[n];
              !(null == e
                ? void 0
                : null === (i = e.options) || void 0 === i
                  ? void 0
                  : i.omitClickTracking) &&
                T.default.track(
                  N.rMx.NOTIFICATION_CLICKED,
                  null == e ? void 0 : e.trackingProps,
                ),
                null == e ||
                  null === (a = e.options) ||
                  void 0 === a ||
                  null === (o = a.onClick) ||
                  void 0 === o ||
                  o.call(a);
            }
          }),
            w.ZP.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS");
        } catch (e) {
          O.warn("Native notification setup failed with error: ", e);
        }
      async function D() {
        if (
          null === s.Z || void 0 === s.Z
            ? void 0
            : s.Z.features.supports("notifications")
        ) {
          var e;
          return (
            (null === (e = await E()) || void 0 === e
              ? void 0
              : e.authorizationStatus) === "authorized"
          );
        }
        return null != M && "granted" === M.permission;
      }
      function H(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = arguments.length > 2 ? arguments[2] : void 0;
        e.includes("message") ? L(e, t, n) : P(e, t, n);
      }
      async function U(e) {
        return (
          (m.Z.disableNotifications && null == e.overrideStreamerMode) ||
          !(await D()) ||
          (I.isPlatformEmbedded && !w.ZP.shouldDisplayNotifications())
        );
      }
      async function W(e, t, n, i, o) {
        var a, l, c, s;
        let u;
        if (await U(o)) {
          null != o.sound &&
            !1 !== o.playSoundIfDisabled &&
            H(
              o.sound,
              null !== (a = o.volume) && void 0 !== a ? a : 1,
              o.soundpack,
            );
          return;
        }
        let f =
          null !== (l = null == o ? void 0 : o.tag) && void 0 !== l ? l : null;
        (0, I.isLinux)() && (n = r().escape(n));
        let b = await E(),
          m = (null == b ? void 0 : b.authorizationStatus) === "authorized",
          C = m && (null == b ? void 0 : b.sound) === !0,
          S = (e) => {
            var t;
            null === (t = o.onShown) || void 0 === t || t.call(o),
              !o.omitViewTracking &&
                T.default.track(N.rMx.NOTIFICATION_VIEWED, i),
              x && setTimeout(() => e.close(), 5e3);
          };
        if (
          (null != o.sound &&
            !C &&
            H(
              o.sound,
              null !== (c = o.volume) && void 0 !== c ? c : 1,
              o.soundpack,
            ),
          m)
        ) {
          let a = { title: t, body: n };
          null != e && (a.icon = e),
            (null == o ? void 0 : o.sound) != null &&
              (a.sound = A(o.sound, o.soundpack)),
            (null == o ? void 0 : o.tag) != null && (a.identifier = o.tag);
          let r =
              "string" == typeof (null == i ? void 0 : i.guild_id)
                ? i.guild_id
                : null,
            l =
              "string" == typeof (null == i ? void 0 : i.channel_id)
                ? i.channel_id
                : null,
            c =
              "string" == typeof (null == i ? void 0 : i.notif_user_id)
                ? i.notif_user_id
                : null;
          if (null != l) {
            a.threadIdentifier = l;
            let e = _.Z.getChannel(l);
            null != e && (a.groupName = (0, d.F6)(e, p.default, h.Z));
          }
          null != c &&
            ((a.senderIdentifier = c),
            null != r &&
              (a.senderDisplayName = v.ZP.getName(r, l, p.default.getUser(c))));
          try {
            let e = await w.ZP.invoke("NOTIFICATIONS_SEND_NOTIFICATION", a);
            F[e] = { options: o, trackingProps: i };
            let t = {
              close() {
                try {
                  w.ZP.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e]);
                } catch (e) {
                  O.warn("Native notification removal failed with error: ", e);
                }
              },
            };
            return S(t), t;
          } catch (e) {
            O.warn("Native notification failed with error: ", e);
          }
        }
        null != o.sound &&
          m &&
          H(
            o.sound,
            null !== (s = o.volume) && void 0 !== s ? s : 1,
            o.soundpack,
          );
        let B = { icon: e, body: n, tag: f, silent: !0 };
        R && g.Z.taskbarFlash && w.ZP.flashFrame(!0);
        try {
          u = new M(t, B);
        } catch (e) {
          return null;
        }
        return (S(u),
        (u.onclick = () => {
          var e;
          I.isPlatformEmbedded ? w.ZP.focus() : (window.focus(), u.close()),
            !o.omitClickTracking &&
              T.default.track(N.rMx.NOTIFICATION_CLICKED, i),
            null === (e = o.onClick) || void 0 === e || e.call(o);
        }),
        k)
          ? u
          : {
              close() {
                var e;
                null == u ||
                  null === (e = u.onclose) ||
                  void 0 === e ||
                  e.call(u);
              },
            };
      }
      t.Z = {
        hasPermission: D,
        requestPermission: function (e) {
          if (
            null === s.Z || void 0 === s.Z
              ? void 0
              : s.Z.features.supports("notifications")
          )
            try {
              w.ZP.invoke("NOTIFICATIONS_GET_AUTHORIZATION")
                .then((t) => {
                  e(t);
                })
                .catch(() => {
                  e(!1);
                })
                .finally(() => {
                  i = void 0;
                });
              return;
            } catch (e) {
              O.warn(
                "Native notification authorization failed with error: ",
                e,
              );
            }
          null != M &&
            M.requestPermission(async () => {
              null != e && e(await D());
            });
        },
        showNotification: W,
        disabled: U,
        playNotificationSound: P,
      };
    },
    744149: function (e, t, n) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    261121: function (e, t, n) {
      e.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    272786: function (e, t, n) {
      e.exports = {
        container: "container_effbe2",
        inner: "inner_effbe2",
        disabled: "disabled_effbe2",
        input: "input_effbe2",
        tag: "tag_effbe2",
        small: "small_effbe2",
        medium: "medium_effbe2",
        large: "large_effbe2",
        richTag: "richTag_effbe2",
        richTagInput: "richTagInput_effbe2",
        tagLabel: "tagLabel_effbe2",
        tagRoleColor: "tagRoleColor_effbe2",
        close: "close_effbe2",
        iconLayout: "iconLayout_effbe2",
        iconContainer: "iconContainer_effbe2",
        icon: "icon_effbe2",
        visible: "visible_effbe2",
        clear: "clear_effbe2",
      };
    },
    840814: function (e, t, n) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    583535: function (e, t, n) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    670189: function (e, t, n) {
      n.r(
        (e.exports = {
          standardSidebarView: "standardSidebarView_c25c6d",
          withUpsell: "withUpsell_c25c6d",
          sidebarRegion: "sidebarRegion_c25c6d",
          sidebarRegionScroller: "sidebarRegionScroller_c25c6d",
          sidebar: "sidebar_c25c6d",
          mobileSidebar: "mobileSidebar_c25c6d",
          contentTransitionWrap: "contentTransitionWrap_c25c6d",
          contentRegionScroller: "contentRegionScroller_c25c6d",
          toolsContainer: "toolsContainer_c25c6d",
          tools: "tools_c25c6d",
          contentRegionHiddenSidebar: "contentRegionHiddenSidebar_c25c6d",
          contentRegionShownSidebar: "contentRegionShownSidebar_c25c6d",
          contentRegion: "contentRegion_c25c6d",
          customColumn: "customColumn_c25c6d",
          contentColumn: "contentColumn_c25c6d",
          contentColumnWide: "contentColumnWide_c25c6d",
          contentColumnDefault: "contentColumnDefault_c25c6d",
          contentColumnMinimal: "contentColumnMinimal_c25c6d",
          customHeader: "customHeader_c25c6d",
          customContainer: "customContainer_c25c6d",
          customScroller: "customScroller_c25c6d",
          noticeRegion: "noticeRegion_c25c6d",
          noticeRegionHiddenSidebar: "noticeRegionHiddenSidebar_c25c6d",
          mobileSidebarTools: "mobileSidebarTools_c25c6d",
          flexFullWidth: "flexFullWidth_c25c6d",
          hidden: "hidden_c25c6d",
          mobileContent: "mobileContent_c25c6d",
          mobileContentHeader: "mobileContentHeader_c25c6d",
          hideHamburger: "hideHamburger_c25c6d",
          mobileToolsContainer: "mobileToolsContainer_c25c6d",
          closeIconOnly: "closeIconOnly_c25c6d",
          isMobileAndroid: "isMobileAndroid_c25c6d",
          mobileToolsCloseIcon: "mobileToolsCloseIcon_c25c6d",
          mobileSidebarHeader: "mobileSidebarHeader_c25c6d",
        }),
      );
    },
    971139: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    542508: function (e, t, n) {
      e.exports = {
        container: "container_dc71f0",
        imageContainer: "imageContainer_dc71f0",
        image: "image_dc71f0",
        backgroundImage: "backgroundImage_dc71f0",
        backgroundImageFilter: "backgroundImageFilter_dc71f0",
        loader: "loader_dc71f0",
      };
    },
    680475: function (e, t, n) {
      e.exports = {
        pill: "pill_c993da",
        clickable: "clickable_c993da",
        disabled: "disabled_c993da",
        small: "small_c993da",
        selected: "selected_c993da",
        emoji: "emoji_c993da",
        closeCircle: "closeCircle_c993da emoji_c993da",
        close: "close_c993da",
        tooltipPill: "tooltipPill_c993da",
      };
    },
    201950: function (e, t, n) {
      e.exports = {
        boostedGuildIconGem: "boostedGuildIconGem_d4a69b",
        iconBackgroundTierNone: "iconBackgroundTierNone_d4a69b",
        iconBackgroundTierOne: "iconBackgroundTierOne_d4a69b",
        iconBackgroundTierTwo: "iconBackgroundTierTwo_d4a69b",
        iconBackgroundTierThree: "iconBackgroundTierThree_d4a69b",
        iconTierNone: "iconTierNone_d4a69b",
        iconTierOne: "iconTierOne_d4a69b",
        iconTierTwo: "iconTierTwo_d4a69b",
        iconTierThree: "iconTierThree_d4a69b",
      };
    },
    24753: function (e, t, n) {
      e.exports = {
        productCard: "productCard_f26f9b",
        productCardClickable: "productCardClickable_f26f9b",
        productThumbnail: "productThumbnail_f26f9b",
        productInfo: "productInfo_f26f9b",
        productInfoContent: "productInfoContent_f26f9b",
        productName: "productName_f26f9b",
        productDetails: "productDetails_f26f9b",
        dotSeparator: "dotSeparator_f26f9b",
        productActionMenuButton: "productActionMenuButton_f26f9b",
        productActionMenuIcon: "productActionMenuIcon_f26f9b",
        menuContainer: "menuContainer_f26f9b",
        disabled: "disabled_f26f9b",
      };
    },
    383011: function (e, t, n) {
      e.exports = { badge: "badge_a24a11", badgeIcon: "badgeIcon_a24a11" };
    },
    139266: function (e, t, n) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    989384: function (e, t, n) {
      e.exports = { emojiIcon: "emojiIcon_e6e8e8" };
    },
    507641: function (e, t, n) {
      e.exports = { icon: "icon_acc5ff" };
    },
    759821: function (e, t, n) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
    },
    674055: function (e, t, n) {
      e.exports = { container: "container_f8690a" };
    },
    776394: function (e, t, n) {
      e.exports = {
        container: "container_e08e86",
        innerContainer: "innerContainer_e08e86",
        iconWrapper: "iconWrapper_e08e86",
        star: "star_e08e86",
        sparkle: "sparkle_e08e86",
      };
    },
    529819: function (e, t, n) {
      e.exports = {
        statusWarningBlock: "statusWarningBlock_e45fae",
        statusWarningBlockWithCta: "statusWarningBlockWithCta_e45fae",
        horizontalStatusWarningBlock: "horizontalStatusWarningBlock_e45fae",
        verticalStatusWarningBlock: "verticalStatusWarningBlock_e45fae",
        ctaButtonContainer: "ctaButtonContainer_e45fae",
        ctaButton: "ctaButton_e45fae",
        ctaBlackButton: "ctaBlackButton_e45fae",
        ctaButtonText: "ctaButtonText_e45fae",
      };
    },
    70172: function (e, t, n) {
      e.exports = {
        guildIconContainer: "guildIconContainer_ed9816",
        guildIconV2Container: "guildIconV2Container_ed9816",
        guildBadge: "guildBadge_ed9816",
        disableColor: "disableColor_ed9816",
        tierTooltipTitle: "tierTooltipTitle_ed9816",
        boostedGuildTierMutedIconWithVisibleBanner:
          "boostedGuildTierMutedIconWithVisibleBanner_ed9816",
        boostedGuildTierIconBackgroundWithVisibleBanner:
          "boostedGuildTierIconBackgroundWithVisibleBanner_ed9816",
        guildBadgeIcon: "guildBadgeIcon_ed9816",
      };
    },
    373780: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_b877fa",
        disabledSelected: "disabledSelected_b877fa",
        hiddenInput: "hiddenInput_b877fa",
        bottomLeft: "bottomLeft_b877fa option_b877fa",
        bottomRight: "bottomRight_b877fa option_b877fa",
        topLeft: "topLeft_b877fa option_b877fa",
        topRight: "topRight_b877fa option_b877fa",
        disabled: "disabled_b877fa",
        disabledIcon: "disabledIcon_b877fa",
        selected: "selected_b877fa",
      };
    },
    767493: function (e, t, n) {
      n.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    229830: function (e, t, n) {
      e.exports = {
        premiumTrialBadge: "premiumTrialBadge_b089d3",
        premiumTrialBadgeV2: "premiumTrialBadgeV2_b089d3",
        premiumTrialBadgeIcon: "premiumTrialBadgeIcon_b089d3",
        premiumTrialTier0UnacknowledgedBadge:
          "premiumTrialTier0UnacknowledgedBadge_b089d3",
        premiumTrialTier2UnacknowledgedBadge:
          "premiumTrialTier2UnacknowledgedBadge_b089d3",
        premiumDiscountUnacknowledgedBadge:
          "premiumDiscountUnacknowledgedBadge_b089d3",
        premiumTrialAcknowledgedBadge: "premiumTrialAcknowledgedBadge_b089d3",
        premiumTrialBadgeSelected: "premiumTrialBadgeSelected_b089d3",
        premiumOfferBadgeCopy: "premiumOfferBadgeCopy_b089d3",
      };
    },
    844812: function (e, t, n) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    913074: function (e, t, n) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
    845569: function (e, t, n) {
      e.exports = {
        modalClose: "modalClose_e5da2b",
        modalRoot: "modalRoot_e5da2b",
        header: "header_e5da2b",
        camera: "camera_e5da2b",
        cameraPreview: "cameraPreview_e5da2b",
        content: "content_e5da2b",
        contentWithVideoBackgrounds:
          "contentWithVideoBackgrounds_e5da2b content_e5da2b",
      };
    },
    231220: function (e, t, n) {
      e.exports = {
        container: "container_a1db3b",
        iconContainer: "iconContainer_a1db3b",
        icon: "icon_a1db3b",
        foreground: "foreground_a1db3b",
        avatarSize: "avatarSize_a1db3b",
        emptyUser: "emptyUser_a1db3b",
        avatarMasked: "avatarMasked_a1db3b avatar_a1db3b",
        moreUsers: "moreUsers_a1db3b",
      };
    },
    684309: function (e, t, n) {
      n.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
    107720: function (e, t, n) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
    485270: function (e, t, n) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
  },
]);
//# sourceMappingURL=64ae351ef0dc5d2b5a88.js.map
