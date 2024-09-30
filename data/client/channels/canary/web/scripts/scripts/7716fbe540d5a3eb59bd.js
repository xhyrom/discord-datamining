"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47209"],
  {
    304445: function (e, t, n) {
      n(47120), n(411104);
      var i = n(572299),
        r = n(38618),
        o = n(905423),
        a = n(622143),
        u = n(703656),
        s = n(981631);
      function l(e, t, n) {
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
            (this.unlistenHistory = (0, u.s1)().listen(this.handleRouteChange));
          let { pathname: e } = (0, u.s1)().location;
          o.Z.getState().resetPath(e),
            (this.unlistenKeyboardChange = o.Z.subscribe(
              this.handleKeybindRouteChange,
            )),
            r.Z.addChangeListener(this.handleConnectionChange);
        }
        executeRouteRewrites(e, t) {
          if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
              let r = (0, u.s1)().location.pathname,
                o = n(e, t);
              if (null != o)
                return (
                  (0, i.n)({
                    message:
                      "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                    data: { replacePath: o.path, previousPath: r },
                  }),
                  (0, u.dL)(o.path, o.state),
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
            null != this.unlistenHistory && e((0, u.s1)().location, "REPLACE"),
            this.listeners.add(e),
            () => this.removeRouteChangeListener(e)
          );
        }
        addRouteRewriter(e) {
          if (null != this.unlistenHistory) {
            let t = e((0, u.s1)().location, (0, u.s1)().action);
            null != t && (0, u.dL)(t.path, t.state);
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
          return (0, u.s1)();
        }
        constructor() {
          l(this, "unlistenHistory", void 0),
            l(this, "unlistenKeyboardChange", void 0),
            l(this, "rewrites", new Set()),
            l(this, "listeners", new Set()),
            l(this, "routeChangeCount", 0),
            l(this, "timer", -1),
            l(this, "connected", !1),
            l(this, "handleConnectionChange", () => {
              let e = r.Z.isConnected(),
                t = e && !this.connected;
              (this.connected = e),
                t &&
                  ((this.routeChangeCount = 0),
                  this.executeRouteRewrites((0, u.s1)().location, "REPLACE"));
            }),
            l(this, "handleRouteChange", (e, t) => {
              if (this.executeRouteRewrites(e, t)) return;
              if (!(0, a.r)(e)) {
                (0, u.dL)(s.Z5c.ME);
                return;
              }
              let n = o.Z.getState();
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
            l(this, "handleKeybindRouteChange", (e) => {
              let { path: t } = e;
              null != t
                ? (clearTimeout(this.timer),
                  (this.timer = setTimeout(this.flushRoute, 200)))
                : null == t && clearTimeout(this.timer);
            }),
            l(this, "flushRoute", () => {
              clearTimeout(this.timer);
              let e = o.Z.getState();
              null != e.path && (0, u.uL)(e.path);
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
          return o;
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
      function o(e) {
        let { location: t } = e;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    88658: function (e, t, n) {
      n.d(t, {
        $6: function () {
          return C;
        },
        YK: function () {
          return h;
        },
        _o: function () {
          return _;
        },
        ac: function () {
          return T;
        },
        bL: function () {
          return f;
        },
        g0: function () {
          return r;
        },
        gl: function () {
          return d;
        },
        rr: function () {
          return g;
        },
        xH: function () {
          return R;
        },
      });
      var i,
        r,
        o = n(695346),
        a = n(486472),
        u = n(430824);
      n(626135);
      var s = n(981631),
        l = n(689938);
      let c = 864e5 * s.eBq;
      function h() {
        let e = o.h2.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != u.Z.getGuild(e))),
          e
        );
      }
      function d() {
        let e = o.zA.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != u.Z.getGuild(e))),
          e
        );
      }
      function _() {
        let e = o.SE.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != u.Z.getGuild(e))),
          e
        );
      }
      function g() {
        let e = o.iH.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != u.Z.getGuild(e))),
          e
        );
      }
      function f(e) {
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
          !t.verified ||
          (null != e && c > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((i = r || (r = {}))[(i.UNDECIDED = 0)] = "UNDECIDED"),
        (i[(i.OPTIN = 1)] = "OPTIN"),
        (i[(i.OPTOUT = 2)] = "OPTOUT");
      let T = { 0: void 0, 1: !0, 2: !1 };
      function R() {
        return [
          {
            name: l.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
            desc: l.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
            value: 1,
          },
          {
            name: l.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
            desc: l.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
            value: 2,
          },
          {
            name: l.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
            desc: l.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
            value: 0,
          },
        ];
      }
    },
    207341: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    30352: function (e, t, n) {
      e.exports = {
        result: "result_e3c1c6",
        contentUnread: "contentUnread_e3c1c6 content_e3c1c6",
        contentDefault: "contentDefault_e3c1c6 content_e3c1c6",
        voiceSummaryContainer: "voiceSummaryContainer_e3c1c6",
        iconContainer: "iconContainer_e3c1c6",
        gameIcon: "gameIcon_e3c1c6",
        gameIconSize: "gameIconSize_e3c1c6",
        icon: "icon_e3c1c6",
        name: "name_e3c1c6",
        misc: "misc_e3c1c6",
        match: "match_e3c1c6",
        badge: "badge_e3c1c6",
        note: "note_e3c1c6",
        username: "username_e3c1c6",
        header: "header_e3c1c6",
        guildIconContainer: "guildIconContainer_e3c1c6 iconContainer_e3c1c6",
        guildIcon: "guildIcon_e3c1c6",
        dmIconContainer: "dmIconContainer_e3c1c6 iconContainer_e3c1c6",
        score: "score_e3c1c6",
      };
    },
  },
]);
//# sourceMappingURL=7716fbe540d5a3eb59bd.js.map
