"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["80566"],
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
        u,
        a = n(200651),
        s = n(192379),
        o = n(120356),
        h = n.n(o),
        d = n(971139);
      class c extends (u = s.PureComponent) {
        render() {
          let {
            tag: e,
            children: t,
            hoverText: n,
            className: i,
            forceHover: r,
            ...l
          } = this.props;
          return (0, a.jsxs)("div", {
            ...l,
            className: h()(i, d.hoverRoll, {
              [d.disabled]: null == n,
              [d.forceHover]: r,
            }),
            children: [
              (0, a.jsx)(e, { className: d.hovered, children: n }),
              (0, a.jsx)(e, { className: d.default, children: t }),
            ],
          });
        }
      }
      (l = { tag: "div", forceHover: !1 }),
        (r = "defaultProps") in (i = c)
          ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = l),
        (t.Z = c);
    },
    214852: function (e, t, n) {
      n.d(t, {
        z: function () {
          return u;
        },
      }),
        n(47120);
      var i = n(192379),
        r = n(442837),
        l = n(353926);
      function u(e) {
        let [t, n] = (0, r.Wu)([l.Z], () => [
          l.Z.getAllUserExperimentDescriptors(),
          l.Z.getGuildExperiments(),
        ]);
        i.useEffect(() => {
          e.trigger();
        }, [e, t, n]);
      }
    },
    905423: function (e, t, n) {
      var i = n(512969),
        r = n(65400),
        l = n(731965),
        u = n(893607),
        a = n(981631);
      function s(e) {
        let t = (0, i.LX)(null != e ? e : "", {
          path: a.Z5c.CHANNEL(
            u.Hw.guildId(),
            u.Hw.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === a.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, i.LX)(null != e ? e : "", {
          path: a.Z5c.GUILD_BOOSTING_MARKETING(u.Hw.guildId()),
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
          let { guildId: n, channelId: i } = s(t);
          (0, l.j)(() => e({ path: t, guildId: n, channelId: i }));
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = s(t);
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
        u = n(622143),
        a = n(703656),
        s = n(981631);
      function o(e, t, n) {
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
            (this.unlistenHistory = (0, a.s1)().listen(this.handleRouteChange));
          let { pathname: e } = (0, a.s1)().location;
          l.Z.getState().resetPath(e),
            (this.unlistenKeyboardChange = l.Z.subscribe(
              this.handleKeybindRouteChange,
            )),
            r.Z.addChangeListener(this.handleConnectionChange);
        }
        executeRouteRewrites(e, t) {
          if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
              let r = (0, a.s1)().location.pathname,
                l = n(e, t);
              if (null != l)
                return (
                  (0, i.n)({
                    message:
                      "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                    data: { replacePath: l.path, previousPath: r },
                  }),
                  (0, a.dL)(l.path, l.state),
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
            null != this.unlistenHistory && e((0, a.s1)().location, "REPLACE"),
            this.listeners.add(e),
            () => this.removeRouteChangeListener(e)
          );
        }
        addRouteRewriter(e) {
          if (null != this.unlistenHistory) {
            let t = e((0, a.s1)().location, (0, a.s1)().action);
            null != t && (0, a.dL)(t.path, t.state);
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
          return (0, a.s1)();
        }
        constructor() {
          o(this, "unlistenHistory", void 0),
            o(this, "unlistenKeyboardChange", void 0),
            o(this, "rewrites", new Set()),
            o(this, "listeners", new Set()),
            o(this, "routeChangeCount", 0),
            o(this, "timer", -1),
            o(this, "connected", !1),
            o(this, "handleConnectionChange", () => {
              let e = r.Z.isConnected(),
                t = e && !this.connected;
              (this.connected = e),
                t &&
                  ((this.routeChangeCount = 0),
                  this.executeRouteRewrites((0, a.s1)().location, "REPLACE"));
            }),
            o(this, "handleRouteChange", (e, t) => {
              if (this.executeRouteRewrites(e, t)) return;
              if (!(0, u.r)(e)) {
                (0, a.dL)(s.Z5c.ME);
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
            o(this, "handleKeybindRouteChange", (e) => {
              let { path: t } = e;
              null != t
                ? (clearTimeout(this.timer),
                  (this.timer = setTimeout(this.flushRoute, 200)))
                : null == t && clearTimeout(this.timer);
            }),
            o(this, "flushRoute", () => {
              clearTimeout(this.timer);
              let e = l.Z.getState();
              null != e.path && (0, a.uL)(e.path);
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
          ...u
        } = e;
        return (0, i.jsxs)("svg", {
          ...(0, r.Z)(u),
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
          return C;
        },
        YK: function () {
          return d;
        },
        _o: function () {
          return f;
        },
        ac: function () {
          return p;
        },
        bL: function () {
          return v;
        },
        g0: function () {
          return i;
        },
        gl: function () {
          return c;
        },
        rr: function () {
          return g;
        },
        xH: function () {
          return m;
        },
      }),
        n(47120);
      var i,
        r,
        l = n(695346),
        u = n(486472),
        a = n(430824);
      n(626135);
      var s = n(981631),
        o = n(388032);
      let h = 864e5 * s.eBq;
      function d() {
        let e = l.h2.getSetting();
        return (
          0 === u.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != a.Z.getGuild(e))),
          new Set(e)
        );
      }
      function c() {
        let e = l.zA.getSetting();
        return (
          0 === u.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != a.Z.getGuild(e))),
          new Set(e)
        );
      }
      function f() {
        let e = l.SE.getSetting();
        return (
          0 === u.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != a.Z.getGuild(e))),
          new Set(e)
        );
      }
      function g() {
        let e = l.iH.getSetting();
        return (
          0 === u.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != a.Z.getGuild(e))),
          new Set(e)
        );
      }
      function v(e) {
        return (e & s.HGf) === s.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & s.SOq.MUTUAL_FRIENDS) === s.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & s.SOq.MUTUAL_GUILDS) === s.SOq.MUTUAL_GUILDS,
            };
      }
      function C(e, t) {
        return (
          !!(!t.verified || t.isStaff()) ||
          (null != e && h > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((r = i || (i = {}))[(r.UNDECIDED = 0)] = "UNDECIDED"),
        (r[(r.OPTIN = 1)] = "OPTIN"),
        (r[(r.OPTOUT = 2)] = "OPTOUT");
      let p = { 0: void 0, 1: !0, 2: !1 };
      function m() {
        return [
          {
            name: o.intl.string(o.t["/yLMRU"]),
            desc: o.intl.string(o.t["3fzkPj"]),
            value: 1,
          },
          {
            name: o.intl.string(o.t["21fP2d"]),
            desc: o.intl.string(o.t.ggJ9jY),
            value: 2,
          },
          {
            name: o.intl.string(o.t["OWIo8/"]),
            desc: o.intl.string(o.t.HqYXp6),
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
  },
]);
//# sourceMappingURL=b3623e615ca4c2e973e1.js.map
