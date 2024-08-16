"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54807"],
  {
    311163: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(272423),
        r = n(378788);
      function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = (0, i.kf)(e);
        if (null != n) return [n.params.guildId, n.params.channelId];
        if ((0, r.z)() && !t) return [void 0, void 0];
        let l = (0, i.B3)(e);
        if (null != l) {
          var a, u;
          return [
            null === (a = l.params) || void 0 === a ? void 0 : a.guildId,
            null === (u = l.params) || void 0 === u ? void 0 : u.channelId,
          ];
        }
        return [void 0, void 0];
      }
    },
    378788: function (e, t, n) {
      n.d(t, {
        z: function () {
          return r;
        },
      });
      var i = n(863750);
      function r() {
        return i.Z.get("only_channel_screen");
      }
      n(238428);
    },
    905423: function (e, t, n) {
      var i = n(266067),
        r = n(652874),
        l = n(731965),
        a = n(981631);
      function u(e) {
        let t = (0, i.LX)(null != e ? e : "", {
          path: a.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?"),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === a.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, i.LX)(null != e ? e : "", {
          path: a.Z5c.GUILD_BOOSTING_MARKETING(":guildId"),
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
          let { guildId: n, channelId: i } = u(t);
          (0, l.j)(() => e({ path: t, guildId: n, channelId: i }));
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = u(t);
          (0, l.j)(() =>
            e({ path: null, guildId: n, channelId: i, basePath: t }),
          );
        },
      }));
    },
    304445: function (e, t, n) {
      n(47120), n(411104);
      var i = n(572299),
        r = n(266067),
        l = n(38618),
        a = n(777639),
        u = n(311163),
        o = n(272423),
        s = n(378788),
        h = n(700615),
        d = n(905423),
        c = n(703656),
        g = n(981631);
      function f(e, t, n) {
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
            (this.unlistenHistory = (0, c.s1)().listen(this.handleRouteChange));
          let { pathname: e } = (0, c.s1)().location;
          d.Z.getState().resetPath(e),
            (this.unlistenKeyboardChange = d.Z.subscribe(
              this.handleKeybindRouteChange,
            )),
            l.Z.addChangeListener(this.handleConnectionChange);
        }
        convertRouteToNavigation(e, t) {
          var n;
          let { pathname: i } = e,
            l = (0, a.D)();
          if (null == l || !l.isReady()) return;
          let d = e.navigationReplace,
            c = null !== (n = e.useScreen) && void 0 !== n && n;
          if (i === g.Z5c.NOTIFICATIONS) {
            (0, o.vp)({ screen: "notifications", resetRoot: d });
            return;
          }
          if (i.startsWith("/channels/")) {
            let t = (0, r.LX)(i, {
              path: ""
                .concat(g.Z5c.CHANNEL(":guildId", ":channelId?"))
                .concat(
                  g.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(
                    ":voiceGuildId",
                    ":voiceChannelId",
                    ":voiceMessageId?",
                  ),
                ),
            });
            if (null != t) {
              let {
                voiceGuildId: e,
                voiceChannelId: n,
                voiceMessageId: i,
              } = t.params;
              !(0, h.ur)() &&
                (0, o.k4)({
                  channelId: n,
                  guildId: e,
                  messageId: i,
                  replaceChannelAndFixRoot: d,
                  useScreen: c,
                });
              return;
            }
            let n = (0, r.LX)(i, {
              path: g.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?"),
            });
            if (null != n) {
              let { channelId: t, guildId: i, messageId: r } = n.params,
                [a, h] = (0, u.Z)(l.getCurrentRoute());
              if (a === i && h === t) return;
              if ((0, s.z)()) {
                if (!0 === d && e.openChannel && null != t) {
                  (0, o.k4)({
                    channelId: t,
                    guildId: i,
                    messageId: r,
                    replaceChannelAndFixRoot: d,
                    useScreen: c,
                    openChannel: !0,
                  });
                  return;
                }
                !1 !== d &&
                  (0, o.vp)({
                    screen: "guilds",
                    guildId: i,
                    channelId: t,
                    resetRoot: d,
                  }),
                  null != t &&
                    !0 !== d &&
                    (0, o.k4)({
                      channelId: t,
                      guildId: i,
                      messageId: r,
                      replaceChannelAndFixRoot: void 0,
                      useScreen: c,
                    });
              } else
                null == t || !1 !== d
                  ? (0, o.vp)({
                      screen: "guilds",
                      guildId: i,
                      channelId: t,
                      resetRoot: d,
                    })
                  : null != i &&
                    (0, o.k4)({
                      channelId: t,
                      guildId: i,
                      messageId: r,
                      replaceChannelAndFixRoot: d,
                      useScreen: c,
                    });
            }
            return;
          }
          if (i.startsWith("/member-verification/")) {
            let e = (0, r.LX)(i, {
              path: g.Z5c.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"),
            });
            null != e && (0, o.fA)(e.params.guildId, e.params.inviteCode);
            return;
          }
          if (i.startsWith("/login") || i.startsWith("/register")) {
            (0, o.Bj)();
            return;
          }
          if (i.startsWith("/account-standing")) {
            l.navigate({ name: "account-standing", params: void 0 });
            return;
          }
          (0, o.vp)({ screen: "messages", resetRoot: d });
        }
        executeRouteRewrites(e, t) {
          if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
              let r = (0, c.s1)().location.pathname,
                l = n(e, t);
              if (null != l)
                return (
                  (0, i.n)({
                    message:
                      "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                    data: { replacePath: l.path, previousPath: r },
                  }),
                  (0, c.dL)(l.path, l.state),
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
            l.Z.removeChangeListener(this.handleConnectionChange);
        }
        addRouteChangeListener(e) {
          return (
            null != this.unlistenHistory && e((0, c.s1)().location, "REPLACE"),
            this.listeners.add(e),
            () => this.removeRouteChangeListener(e)
          );
        }
        addRouteRewriter(e) {
          if (null != this.unlistenHistory) {
            let t = e((0, c.s1)().location, (0, c.s1)().action);
            null != t && (0, c.dL)(t.path, t.state);
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
          return (0, c.s1)();
        }
        constructor() {
          f(this, "unlistenHistory", void 0),
            f(this, "unlistenKeyboardChange", void 0),
            f(this, "rewrites", new Set()),
            f(this, "listeners", new Set()),
            f(this, "routeChangeCount", 0),
            f(this, "timer", -1),
            f(this, "connected", !1),
            f(this, "handleConnectionChange", () => {
              let e = l.Z.isConnected(),
                t = e && !this.connected;
              (this.connected = e),
                t &&
                  ((this.routeChangeCount = 0),
                  this.executeRouteRewrites((0, c.s1)().location, "REPLACE"));
            }),
            f(this, "handleRouteChange", (e, t) => {
              if (this.executeRouteRewrites(e, t)) return;
              let n = d.Z.getState();
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
              this.convertRouteToNavigation(e, t), (this.routeChangeCount = 0);
            }),
            f(this, "handleKeybindRouteChange", (e) => {
              let { path: t } = e;
              null != t
                ? (clearTimeout(this.timer),
                  (this.timer = setTimeout(this.flushRoute, 200)))
                : null == t && clearTimeout(this.timer);
            }),
            f(this, "flushRoute", () => {
              clearTimeout(this.timer);
              let e = d.Z.getState();
              null != e.path && (0, c.uL)(e.path);
            });
        }
      })();
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
          return c;
        },
        w4: function () {
          return s;
        },
      });
      var i = n(525654),
        r = n.n(i),
        l = n(271579),
        a = n(314897),
        u = n(981631);
      let o = "linux";
      function s(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(u.fzT.DESKTOP)
          .concat(t ? "/ptb" : "", "?platform=")
          .concat(e)
          .concat(null != n ? "&format=".concat(n) : "");
      }
      function h() {
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
        return { win: "Windows", osx: "Mac", [o]: "Linux" }[h(e)];
      }
      function c() {
        let e = h();
        return s(e, !1, e === o ? "tar.gz" : null);
      }
      function g(e, t, n) {
        let i = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, l.ZP)(
              null != i
                ? i
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: a.default.getFingerprint(),
                attemptId: (0, l.WS)(),
              },
            );
          case "Android":
            return (0, l.ZP)(
              null != i ? i : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: a.default.getFingerprint(),
                attemptId: (0, l.WS)(),
              },
            );
          default:
            return null != i ? i : "https://www.discord.com";
        }
      }
    },
  },
]);
//# sourceMappingURL=8a24a2dc83e9b2db40f7.js.map
