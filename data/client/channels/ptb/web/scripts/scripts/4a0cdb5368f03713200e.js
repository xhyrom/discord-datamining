"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["70482"],
  {
    905423: function (e, t, n) {
      var i = n(266067),
        r = n(652874),
        u = n(731965),
        l = n(893607),
        a = n(981631);
      function o(e) {
        let t = (0, i.LX)(null != e ? e : "", {
          path: a.Z5c.CHANNEL(
            l.Hw.guildId(),
            l.Hw.channelId({ optional: !0 }),
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
          path: a.Z5c.GUILD_BOOSTING_MARKETING(l.Hw.guildId()),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      t.Z = (0, r.Z)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: i } = o(t);
          (0, u.j)(() => e({ path: t, guildId: n, channelId: i }));
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = o(t);
          (0, u.j)(() =>
            e({ path: null, guildId: n, channelId: i, basePath: t }),
          );
        },
      }));
    },
    304445: function (e, t, n) {
      n(47120), n(411104);
      var i = n(572299),
        r = n(38618),
        u = n(905423),
        l = n(622143),
        a = n(703656),
        o = n(981631);
      function c(e, t, n) {
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
          u.Z.getState().resetPath(e),
            (this.unlistenKeyboardChange = u.Z.subscribe(
              this.handleKeybindRouteChange,
            )),
            r.Z.addChangeListener(this.handleConnectionChange);
        }
        executeRouteRewrites(e, t) {
          if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
              let r = (0, a.s1)().location.pathname,
                u = n(e, t);
              if (null != u)
                return (
                  (0, i.n)({
                    message:
                      "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                    data: { replacePath: u.path, previousPath: r },
                  }),
                  (0, a.dL)(u.path, u.state),
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
          c(this, "unlistenHistory", void 0),
            c(this, "unlistenKeyboardChange", void 0),
            c(this, "rewrites", new Set()),
            c(this, "listeners", new Set()),
            c(this, "routeChangeCount", 0),
            c(this, "timer", -1),
            c(this, "connected", !1),
            c(this, "handleConnectionChange", () => {
              let e = r.Z.isConnected(),
                t = e && !this.connected;
              (this.connected = e),
                t &&
                  ((this.routeChangeCount = 0),
                  this.executeRouteRewrites((0, a.s1)().location, "REPLACE"));
            }),
            c(this, "handleRouteChange", (e, t) => {
              if (this.executeRouteRewrites(e, t)) return;
              if (!(0, l.r)(e)) {
                (0, a.dL)(o.Z5c.ME);
                return;
              }
              let n = u.Z.getState();
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
            c(this, "handleKeybindRouteChange", (e) => {
              let { path: t } = e;
              null != t
                ? (clearTimeout(this.timer),
                  (this.timer = setTimeout(this.flushRoute, 200)))
                : null == t && clearTimeout(this.timer);
            }),
            c(this, "flushRoute", () => {
              clearTimeout(this.timer);
              let e = u.Z.getState();
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
          return u;
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
      function u(e) {
        let { location: t } = e;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    361207: function (e, t, n) {
      n.d(t, {
        DW: function () {
          return d;
        },
        Gn: function () {
          return g;
        },
        t3: function () {
          return h;
        },
        w4: function () {
          return c;
        },
      });
      var i = n(525654),
        r = n.n(i),
        u = n(271579),
        l = n(314897),
        a = n(981631);
      let o = "linux";
      function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(a.fzT.DESKTOP)
          .concat(t ? "/ptb" : "", "?platform=")
          .concat(e)
          .concat(null != n ? "&format=".concat(n) : "");
      }
      function s() {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : null === (e = r().os) || void 0 === e
              ? void 0
              : e.family;
        return null == t
          ? "win"
          : -1 !== t.indexOf("Ubuntu") ||
              -1 !== t.indexOf("Debian") ||
              -1 !== t.indexOf("Fedora") ||
              -1 !== t.indexOf("Red Hat") ||
              -1 !== t.indexOf("SuSE") ||
              -1 !== t.indexOf("Linux")
            ? o
            : -1 !== t.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function d(e) {
        return { win: "Windows", osx: "Mac", [o]: "Linux" }[s(e)];
      }
      function h() {
        let e = s();
        return c(e, !1, e === o ? "tar.gz" : null);
      }
      function g(e, t, n) {
        let i = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, u.ZP)(
              null != i
                ? i
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: l.default.getFingerprint(),
                attemptId: (0, u.WS)(),
              },
            );
          case "Android":
            return (0, u.ZP)(
              null != i ? i : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: l.default.getFingerprint(),
                attemptId: (0, u.WS)(),
              },
            );
          default:
            return null != i ? i : "https://www.discord.com";
        }
      }
    },
    88658: function (e, t, n) {
      n.d(t, {
        $6: function () {
          return I;
        },
        YK: function () {
          return d;
        },
        _o: function () {
          return g;
        },
        ac: function () {
          return m;
        },
        bL: function () {
          return _;
        },
        g0: function () {
          return r;
        },
        gl: function () {
          return h;
        },
        rr: function () {
          return f;
        },
        xH: function () {
          return S;
        },
      });
      var i,
        r,
        u = n(695346),
        l = n(486472),
        a = n(430824);
      n(626135);
      var o = n(981631),
        c = n(689938);
      let s = 864e5 * o.eBq;
      function d() {
        let e = u.h2.getSetting();
        return (
          0 === l.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != a.Z.getGuild(e))),
          e
        );
      }
      function h() {
        let e = u.zA.getSetting();
        return (
          0 === l.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != a.Z.getGuild(e))),
          e
        );
      }
      function g() {
        let e = u.SE.getSetting();
        return (
          0 === l.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != a.Z.getGuild(e))),
          e
        );
      }
      function f() {
        let e = u.iH.getSetting();
        return (
          0 === l.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != a.Z.getGuild(e))),
          e
        );
      }
      function _(e) {
        return (e & o.HGf) === o.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & o.SOq.MUTUAL_FRIENDS) === o.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & o.SOq.MUTUAL_GUILDS) === o.SOq.MUTUAL_GUILDS,
            };
      }
      function I(e, t) {
        return (
          !t.verified ||
          (null != e && s > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((i = r || (r = {}))[(i.UNDECIDED = 0)] = "UNDECIDED"),
        (i[(i.OPTIN = 1)] = "OPTIN"),
        (i[(i.OPTOUT = 2)] = "OPTOUT");
      let m = { 0: void 0, 1: !0, 2: !1 };
      function S() {
        return [
          {
            name: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
            desc: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
            value: 1,
          },
          {
            name: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
            desc: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
            value: 2,
          },
          {
            name: c.Z.Messages
              .PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
            desc: c.Z.Messages
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
//# sourceMappingURL=4a0cdb5368f03713200e.js.map
