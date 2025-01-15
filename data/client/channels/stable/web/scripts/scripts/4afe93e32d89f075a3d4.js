"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72509"],
  {
    775322: function (e) {
      e.exports = "/assets/e5e07cf5a6e7f19be45b.svg";
    },
    853453: function (e) {
      e.exports = "/assets/3cfc93ceb08d74acbcf8.svg";
    },
    570928: function (e, t, n) {
      var i,
        r,
        l,
        a,
        s = n(200651),
        o = n(192379),
        u = n(120356),
        d = n.n(u),
        c = n(971139);
      class h extends (a = o.PureComponent) {
        render() {
          let {
            tag: e,
            children: t,
            hoverText: n,
            className: i,
            forceHover: r,
            ...l
          } = this.props;
          return (0, s.jsxs)("div", {
            ...l,
            className: d()(i, c.hoverRoll, {
              [c.disabled]: null == n,
              [c.forceHover]: r,
            }),
            children: [
              (0, s.jsx)(e, { className: c.hovered, children: n }),
              (0, s.jsx)(e, { className: c.default, children: t }),
            ],
          });
        }
      }
      (l = { tag: "div", forceHover: !1 }),
        (r = "defaultProps") in (i = h)
          ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = l),
        (t.Z = h);
    },
    214852: function (e, t, n) {
      n.d(t, {
        z: function () {
          return a;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(442837),
        l = n(353926);
      function a(e) {
        let [t, n] = (0, r.Wu)([l.Z], () => [
          l.Z.getAllUserExperimentDescriptors(),
          l.Z.getGuildExperiments(),
        ]);
        i.useEffect(() => {
          e.trigger();
        }, [e, t, n]);
      }
    },
    212632: function (e, t, n) {
      n(47120);
      var i = n(200651),
        r = n(192379),
        l = n(120356),
        a = n.n(l),
        s = n(481060),
        o = n(981631),
        u = n(388032),
        d = n(373780),
        c = n(232186);
      let h = 0,
        f = () => "notification-position-selector-".concat(h++),
        g = (e) => {
          switch (e) {
            case o._vf.TOP_LEFT:
              return u.intl.string(u.t.xlchpa);
            case o._vf.TOP_RIGHT:
              return u.intl.string(u.t["4uHRHB"]);
            case o._vf.BOTTOM_LEFT:
              return u.intl.string(u.t.ovWFnJ);
            case o._vf.BOTTOM_RIGHT:
              return u.intl.string(u.t["M/9V7+"]);
            default:
              return u.intl.string(u.t.AlY4ZW);
          }
        },
        p = [
          o._vf.DISABLED,
          o._vf.TOP_LEFT,
          o._vf.TOP_RIGHT,
          o._vf.BOTTOM_LEFT,
          o._vf.BOTTOM_RIGHT,
        ];
      function b(e) {
        let { position: t, onChange: n } = e,
          [l] = r.useState(() => f()),
          h =
            t === o._vf.DISABLED
              ? u.intl.string(u.t.R6LxVV)
              : u.intl.formatToPlainString(u.t.XXHDMz, { position: g(t) });
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(s.FocusRing, {
              within: !0,
              offset: -2,
              children: (0, i.jsx)("div", {
                className: a()(d.wrapper, {
                  [d.disabledSelected]: t === o._vf.DISABLED,
                }),
                children: p.map((e) =>
                  (0, i.jsxs)(
                    "label",
                    {
                      className: a()({
                        [d.selected]: e === t,
                        [d.disabled]: e === o._vf.DISABLED,
                        [d.topRight]: e === o._vf.TOP_RIGHT,
                        [d.topLeft]: e === o._vf.TOP_LEFT,
                        [d.bottomRight]: e === o._vf.BOTTOM_RIGHT,
                        [d.bottomLeft]: e === o._vf.BOTTOM_LEFT,
                      }),
                      children: [
                        g(e),
                        e === o._vf.DISABLED
                          ? (0, i.jsx)(s.DenyIcon, {
                              size: "md",
                              color: "currentColor",
                              className: d.disabledIcon,
                            })
                          : null,
                        (0, i.jsx)("input", {
                          type: "radio",
                          name: l,
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
            (0, i.jsx)(s.FormText, {
              type: s.FormTextTypes.DESCRIPTION,
              className: c.marginTop8,
              children: h,
            }),
          ],
        });
      }
      (b.Positions = o._vf), (t.Z = b);
    },
    809357: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
        o: function () {
          return o;
        },
      });
      var i = n(442837),
        r = n(522474),
        l = n(658785),
        a = n(981631);
      function s(e) {
        let { location: t, options: n } = e,
          i = o(),
          { showKeybindIndicators: r } = l.Z.useExperiment({ location: t }, n);
        return r && i;
      }
      function o() {
        return !(0, i.e7)([r.Z], () =>
          r.Z.getWindowVisible(a.KJ3.ACTIVITY_POPOUT),
        );
      }
    },
    905423: function (e, t, n) {
      var i = n(512969),
        r = n(65400),
        l = n(731965),
        a = n(893607),
        s = n(981631);
      function o(e) {
        let t = (0, i.LX)(null != e ? e : "", {
          path: s.Z5c.CHANNEL(
            a.Hw.guildId(),
            a.Hw.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === s.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, i.LX)(null != e ? e : "", {
          path: s.Z5c.GUILD_BOOSTING_MARKETING(a.Hw.guildId()),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      t.Z = (0, r.F)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: i } = o(t);
          (0, l.j)(() => e({ path: t, guildId: n, channelId: i }));
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = o(t);
          (0, l.j)(() =>
            e({ path: null, guildId: n, channelId: i, basePath: t }),
          );
        },
      }));
    },
    304445: function (e, t, n) {
      n(47120), n(411104);
      var i = n(572299),
        r = n(38618),
        l = n(905423),
        a = n(622143),
        s = n(703656),
        o = n(981631);
      function u(e, t, n) {
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
            (this.unlistenHistory = (0, s.s1)().listen(this.handleRouteChange));
          let { pathname: e } = (0, s.s1)().location;
          l.Z.getState().resetPath(e),
            (this.unlistenKeyboardChange = l.Z.subscribe(
              this.handleKeybindRouteChange,
            )),
            r.Z.addChangeListener(this.handleConnectionChange);
        }
        executeRouteRewrites(e, t) {
          if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
              let r = (0, s.s1)().location.pathname,
                l = n(e, t);
              if (null != l)
                return (
                  (0, i.n)({
                    message:
                      "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                    data: { replacePath: l.path, previousPath: r },
                  }),
                  (0, s.dL)(l.path, l.state),
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
            r.Z.removeChangeListener(this.handleConnectionChange);
        }
        addRouteChangeListener(e) {
          return (
            null != this.unlistenHistory && e((0, s.s1)().location, "REPLACE"),
            this.listeners.add(e),
            () => this.removeRouteChangeListener(e)
          );
        }
        addRouteRewriter(e) {
          if (null != this.unlistenHistory) {
            let t = e((0, s.s1)().location, (0, s.s1)().action);
            null != t && (0, s.dL)(t.path, t.state);
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
          return (0, s.s1)();
        }
        constructor() {
          u(this, "unlistenHistory", void 0),
            u(this, "unlistenKeyboardChange", void 0),
            u(this, "rewrites", new Set()),
            u(this, "listeners", new Set()),
            u(this, "routeChangeCount", 0),
            u(this, "timer", -1),
            u(this, "connected", !1),
            u(this, "handleConnectionChange", () => {
              let e = r.Z.isConnected(),
                t = e && !this.connected;
              (this.connected = e),
                t &&
                  ((this.routeChangeCount = 0),
                  this.executeRouteRewrites((0, s.s1)().location, "REPLACE"));
            }),
            u(this, "handleRouteChange", (e, t) => {
              if (this.executeRouteRewrites(e, t)) return;
              if (!(0, a.r)(e)) {
                (0, s.dL)(o.Z5c.ME);
                return;
              }
              let n = l.Z.getState();
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
            u(this, "handleKeybindRouteChange", (e) => {
              let { path: t } = e;
              null != t
                ? (clearTimeout(this.timer),
                  (this.timer = setTimeout(this.flushRoute, 200)))
                : null == t && clearTimeout(this.timer);
            }),
            u(this, "flushRoute", () => {
              clearTimeout(this.timer);
              let e = l.Z.getState();
              null != e.path && (0, s.uL)(e.path);
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
    977059: function (e, t, n) {
      n.d(t, {
        R: function () {
          return l;
        },
        S: function () {
          return r;
        },
      });
      let i = (0, n(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function r(e) {
        let { location: t } = e;
        return i.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function l(e) {
        let { location: t } = e;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    460562: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(200651);
      n(192379);
      var r = n(331595);
      function l(e) {
        let {
          width: t = 32,
          height: n = 32,
          color: l = "currentColor",
          ...a
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.Z)(a),
          width: t,
          height: n,
          viewBox: "0 0 12 12",
          fill: "none",
          children: [
            (0, i.jsx)("path", { d: "M7.25 1H4.75V7.25H7.25V1Z", fill: l }),
            (0, i.jsx)("path", {
              d: "M4.75 9.75C4.75 10.4167 5.33333 11 6 11C6.66667 11 7.25 10.4167 7.25 9.75C7.25 9.08333 6.66667 8.5 6 8.5C5.33333 8.5 4.75 9.08333 4.75 9.75Z",
              fill: l,
            }),
          ],
        });
      }
    },
    88658: function (e, t, n) {
      n.d(t, {
        $6: function () {
          return b;
        },
        YK: function () {
          return c;
        },
        _o: function () {
          return f;
        },
        ac: function () {
          return v;
        },
        bL: function () {
          return p;
        },
        g0: function () {
          return i;
        },
        gl: function () {
          return h;
        },
        rr: function () {
          return g;
        },
        xH: function () {
          return _;
        },
      }),
        n(47120);
      var i,
        r,
        l = n(695346),
        a = n(486472),
        s = n(430824);
      n(626135);
      var o = n(981631),
        u = n(388032);
      let d = 864e5 * o.eBq;
      function c() {
        let e = l.h2.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != s.Z.getGuild(e))),
          new Set(e)
        );
      }
      function h() {
        let e = l.zA.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != s.Z.getGuild(e))),
          new Set(e)
        );
      }
      function f() {
        let e = l.SE.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != s.Z.getGuild(e))),
          new Set(e)
        );
      }
      function g() {
        let e = l.iH.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != s.Z.getGuild(e))),
          new Set(e)
        );
      }
      function p(e) {
        return (e & o.HGf) === o.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & o.SOq.MUTUAL_FRIENDS) === o.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & o.SOq.MUTUAL_GUILDS) === o.SOq.MUTUAL_GUILDS,
            };
      }
      function b(e, t) {
        return (
          !!(!t.verified || t.isStaff()) ||
          (null != e && d > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((r = i || (i = {}))[(r.UNDECIDED = 0)] = "UNDECIDED"),
        (r[(r.OPTIN = 1)] = "OPTIN"),
        (r[(r.OPTOUT = 2)] = "OPTOUT");
      let v = { 0: void 0, 1: !0, 2: !1 };
      function _() {
        return [
          {
            name: u.intl.string(u.t["/yLMRU"]),
            desc: u.intl.string(u.t["3fzkPj"]),
            value: 1,
          },
          {
            name: u.intl.string(u.t["21fP2d"]),
            desc: u.intl.string(u.t.ggJ9jY),
            value: 2,
          },
          {
            name: u.intl.string(u.t["OWIo8/"]),
            desc: u.intl.string(u.t.HqYXp6),
            value: 0,
          },
        ];
      }
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
    12981: function (e, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/8100f5eb716cf12721dbc6b58297f60ad0e89a253e0056d3ff2195ddffd1ab7b.png";
    },
  },
]);
//# sourceMappingURL=4afe93e32d89f075a3d4.js.map
