"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77947"],
  {
    34674: function (e, t, n) {
      n.d(t, {
        $_: function () {
          return p;
        },
        KQ: function () {
          return f;
        },
        MU: function () {
          return d;
        },
        m0: function () {
          return h;
        },
        rf: function () {
          return b;
        },
        tu: function () {
          return m;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(315314);
      var i = n(860911),
        o = n(477690),
        r = n(481060),
        c = n(134432),
        a = n(703656),
        l = n(768581),
        u = n(981631),
        s = n(689938);
      let d = 0,
        { API_ENDPOINT: g, CDN_HOST: _ } = window.GLOBAL_ENV;
      function h(e) {
        return e.id === d;
      }
      function f() {
        return { id: d, name: s.Z.Messages.APP_DIRECTORY_ALL_CATEGORY };
      }
      function m(e) {
        switch (e.id) {
          case 0:
            return r.GlobeEarthIcon;
          case 4:
            return r.TvIcon;
          case 5:
            return r.AnalyticsIcon;
          case 6:
            return r.GameControllerIcon;
          case 8:
            break;
          case 9:
            return r.FriendsIcon;
          case 10:
            return r.WrenchIcon;
        }
        return r.AsteriskIcon;
      }
      function p(e) {
        let { itemId: t, hash: n } = e,
          i = new URLSearchParams({
            size: (0, c.oO)(
              parseFloat(o.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, c.x_)(),
            ).toString(),
          }).toString(),
          r = l.$k ? "webp" : "png";
        return null != _
          ? ""
              .concat(location.protocol, "//")
              .concat(_, "/app-assets/application-directory/collection-items/")
              .concat(t, "/")
              .concat(n, ".")
              .concat(r, "?")
              .concat(i)
          : ""
              .concat(location.protocol)
              .concat(g)
              .concat(
                u.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, r),
                "?",
              )
              .concat(i);
      }
      function b() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = new URL(location.href);
        for (let n in e) {
          let i = e[n];
          t.searchParams.set(n, i);
        }
        let n = t.pathname + t.search,
          o = (0, i.U)(n, !1);
        (0, a.uL)(o);
      }
    },
    147890: function (e, t, n) {
      n.r(t),
        n.d(t, {
          goHome: function () {
            return s;
          },
          goSearch: function () {
            return h;
          },
          goToAppDirectory: function () {
            return u;
          },
          goToApplication: function () {
            return d;
          },
          goToApplicationSection: function () {
            return g;
          },
          goToApplicationStoreSku: function () {
            return _;
          },
          goToCategory: function () {
            return f;
          },
          replaceAppDirectoryURLWith: function () {
            return m;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i = n(703656),
        o = n(626135),
        r = n(34674),
        c = n(132871),
        a = n(272242),
        l = n(981631);
      let u = (e) => {
          let {
              view: t = c.ApplicationDirectoryViews.HOME,
              guildId: n,
              applicationId: i,
              applicationSection: r,
              entrypoint: u,
              skuId: f,
            } = e,
            m = { ...u, pathname: window.location.pathname };
          switch (
            (o.default.track(l.rMx.APP_DIRECTORY_OPENED, {
              source: null == m ? void 0 : m.name,
            }),
            (0, c.resetApplicationDirectoryHistory)(),
            (0, c.setEntrypoint)(m),
            null != n && (0, c.setGuildId)(n),
            t === c.ApplicationDirectoryViews.APPLICATION &&
              null == i &&
              (t = c.ApplicationDirectoryViews.HOME),
            t)
          ) {
            case c.ApplicationDirectoryViews.HOME:
              s();
              break;
            case c.ApplicationDirectoryViews.SEARCH:
              h();
              break;
            case c.ApplicationDirectoryViews.APPLICATION:
              if (null != i) {
                if (null != r) {
                  if (
                    r === a.ApplicationDirectoryProfileSections.STORE &&
                    null != f
                  ) {
                    _({ applicationId: i, skuId: f });
                    break;
                  }
                  g({ applicationId: i, section: r });
                  break;
                }
                d({ applicationId: i });
              }
          }
        },
        s = () => {
          let e = { previousView: (0, c.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        d = (e) => {
          let { applicationId: t } = e,
            n = { previousView: (0, c.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
        },
        g = (e) => {
          let { applicationId: t, section: n } = e,
            o = { previousView: (0, c.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
            state: o,
          });
        },
        _ = (e) => {
          let { applicationId: t, skuId: n } = e,
            o = { previousView: (0, c.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
            state: o,
          });
        },
        h = function () {
          let {
              query: e,
              categoryId: t,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            o = new URLSearchParams(),
            r = { previousView: (0, c.getCurrentView)() };
          null != e && o.set("q", e),
            null != t && o.set("category_id", t.toString()),
            null != n && o.set("page", n.toString()),
            (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: o.toString(),
              state: r,
            });
        },
        f = (e) => {
          let { categoryId: t } = e;
          h({ categoryId: null != t ? t : r.MU });
        },
        m = (e) => {
          let {
            location: { state: t },
          } = (0, i.s1)();
          (0, i.dL)(e, t);
        };
    },
    858822: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(735250);
      n(470079);
      var o = n(913527),
        r = n.n(o),
        c = n(442837),
        a = n(481060),
        l = n(92114),
        u = n(776568),
        s = n(777861),
        d = n(9156),
        g = n(621600),
        _ = n(689938);
      function h(e, t) {
        let n = null == e ? void 0 : e.id,
          { muted: o, muteConfig: h } = (0, c.cj)(
            [d.ZP],
            () => ({
              muted: null != n ? d.ZP.isMuted(n) : void 0,
              muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0,
            }),
            [n],
          ),
          f = (0, s.U)(h);
        return null == n
          ? null
          : o
            ? (0, i.jsx)(a.MenuItem, {
                id: "unmute-guild",
                label: _.Z.Messages.UNMUTE_SERVER,
                subtext: f,
                action: () =>
                  l.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !1 },
                    g.ZB.Unmuted,
                  ),
              })
            : (0, i.jsx)(a.MenuItem, {
                id: "mute-guild",
                label: _.Z.Messages.MUTE_SERVER,
                action: () =>
                  l.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !0 },
                    g.ZB.Muted,
                  ),
                children: (0, u.k)().map((e) => {
                  let { value: o, label: c } = e;
                  return (0, i.jsx)(
                    a.MenuItem,
                    {
                      id: "".concat(o),
                      label: c,
                      action: () =>
                        (function (e) {
                          if (null == n) return;
                          let i =
                            e > 0 ? r()().add(e, "second").toISOString() : null;
                          l.Z.updateGuildNotificationSettings(
                            n,
                            {
                              muted: !0,
                              mute_config: {
                                selected_time_window: e,
                                end_time: i,
                              },
                            },
                            g.ZB.Muted,
                            t,
                          );
                        })(o),
                    },
                    o,
                  );
                }),
              });
      }
    },
    423589: function (e, t, n) {
      n.d(t, {
        Mn: function () {
          return m;
        },
        OD: function () {
          return f;
        },
        W9: function () {
          return _;
        },
      }),
        n(47120),
        n(789020);
      var i = n(442837),
        o = n(798140),
        r = n(9156),
        c = n(630388),
        a = n(709054),
        l = n(312400),
        u = n(981631),
        s = n(969943),
        d = n(526761),
        g = n(689938);
      function _() {
        return [
          {
            label: g.Z.Messages.MUTE_DURATION_15_MINUTES,
            value: s.Oe.MINUTES_15,
          },
          { label: g.Z.Messages.MUTE_DURATION_1_HOUR, value: s.Oe.HOURS_1 },
          { label: g.Z.Messages.MUTE_DURATION_3_HOURS, value: s.Oe.HOURS_3 },
          { label: g.Z.Messages.MUTE_DURATION_8_HOURS, value: s.Oe.HOURS_8 },
          { label: g.Z.Messages.MUTE_DURATION_24_HOURS, value: s.Oe.HOURS_24 },
          { label: g.Z.Messages.MUTE_DURATION_ALWAYS, value: s.Oe.ALWAYS },
        ];
      }
      let h = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function f(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h;
        return a.default.keys(e).filter((n) => {
          var i, r;
          let a = e[n].message_notifications !== u.bL.NULL,
            l =
              c.yE(
                null !== (i = e[n].flags) && void 0 !== i ? i : 0,
                d.ic.UNREADS_ALL_MESSAGES,
              ) ||
              c.yE(
                null !== (r = e[n].flags) && void 0 !== r ? r : 0,
                d.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!t.ignoreUnreadSetting && l) ||
            (!t.ignoreNotificationSetting && a) ||
            (!t.ignoreMute && (0, o.m$)(e[n]))
          );
        });
      }
      function m(e) {
        let t = (0, i.e7)([r.ZP], () => r.ZP.useNewNotifications);
        return (
          l.xT.useExperiment({ location: e }, { autoTrackExposure: !1 })
            .enabled && t
        );
      }
    },
    113449: function (e, t, n) {
      n.d(t, {
        Q4: function () {
          return r;
        },
        YF: function () {
          return c;
        },
        pq: function () {
          return a;
        },
      });
      var i = n(630388),
        o = n(526761);
      function r(e, t) {
        var n;
        return i.pj(
          ((n = e),
          i.M1(n, o.vc.UNREADS_ALL_MESSAGES, o.vc.UNREADS_ONLY_MENTIONS)),
          t,
        );
      }
      let c = (e) =>
        i.M1(e, o.ic.UNREADS_ALL_MESSAGES, o.ic.UNREADS_ONLY_MENTIONS);
      function a(e, t) {
        return i.pj(c(e), t);
      }
    },
    905423: function (e, t, n) {
      var i = n(266067),
        o = n(652874),
        r = n(731965),
        c = n(981631);
      function a(e) {
        let t = (0, i.LX)(null != e ? e : "", {
          path: c.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?"),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === c.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, i.LX)(null != e ? e : "", {
          path: c.Z5c.GUILD_BOOSTING_MARKETING(":guildId"),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      t.Z = (0, o.Z)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: i } = a(t);
          (0, r.j)(() => e({ path: t, guildId: n, channelId: i }));
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = a(t);
          (0, r.j)(() =>
            e({ path: null, guildId: n, channelId: i, basePath: t }),
          );
        },
      }));
    },
    304445: function (e, t, n) {
      n(47120), n(411104);
      var i = n(572299),
        o = n(38618),
        r = n(905423),
        c = n(622143),
        a = n(703656);
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
            (this.unlistenHistory = (0, a.s1)().listen(this.handleRouteChange));
          let { pathname: e } = (0, a.s1)().location;
          r.Z.getState().resetPath(e),
            (this.unlistenKeyboardChange = r.Z.subscribe(
              this.handleKeybindRouteChange,
            )),
            o.Z.addChangeListener(this.handleConnectionChange);
        }
        executeRouteRewrites(e, t) {
          if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
              let o = (0, a.s1)().location.pathname,
                r = n(e, t);
              if (null != r)
                return (
                  (0, i.n)({
                    message:
                      "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                    data: { replacePath: r.path, previousPath: o },
                  }),
                  (0, a.dL)(r.path, r.state),
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
          l(this, "unlistenHistory", void 0),
            l(this, "unlistenKeyboardChange", void 0),
            l(this, "rewrites", new Set()),
            l(this, "listeners", new Set()),
            l(this, "routeChangeCount", 0),
            l(this, "timer", -1),
            l(this, "connected", !1),
            l(this, "handleConnectionChange", () => {
              let e = o.Z.isConnected(),
                t = e && !this.connected;
              (this.connected = e),
                t &&
                  ((this.routeChangeCount = 0),
                  this.executeRouteRewrites((0, a.s1)().location, "REPLACE"));
            }),
            l(this, "handleRouteChange", (e, t) => {
              if (this.executeRouteRewrites(e, t)) return;
              let n = r.Z.getState();
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
              (0, c.r)(e), (this.routeChangeCount = 0);
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
              let e = r.Z.getState();
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
      function i(e) {}
    },
    977059: function (e, t, n) {
      n.d(t, {
        R: function () {
          return r;
        },
        S: function () {
          return o;
        },
      });
      let i = (0, n(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function o(e) {
        let { location: t } = e;
        return i.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function r(e) {
        let { location: t } = e;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    671533: function (e, t, n) {
      n(411104);
      var i,
        o,
        r = n(735250);
      n(470079);
      var c = n(120356),
        a = n.n(c),
        l = n(325767),
        u = n(24701);
      ((o = i || (i = {})).LEFT = "LEFT"),
        (o.RIGHT = "RIGHT"),
        (o.UP = "UP"),
        (o.DOWN = "DOWN"),
        (o.UP_LEFT = "UP_LEFT"),
        (o.DOWN_RIGHT = "DOWN_RIGHT");
      let s = (e) => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = "currentColor",
          direction: o,
          foreground: c,
          className: s,
          title: d,
          ...g
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, l.Z)(g),
          width: t,
          height: n,
          className: a()(
            s,
            (function (e) {
              switch (e) {
                case "LEFT":
                  return u.left;
                case "RIGHT":
                  return u.right;
                case "UP":
                  return null;
                case "DOWN":
                  return u.down;
                case "UP_LEFT":
                  return u.upLeft;
                case "DOWN_RIGHT":
                  return u.downRight;
                default:
                  throw Error("Invalid Direction ".concat(e));
              }
            })(o),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != d ? (0, r.jsx)("title", { children: d }) : null,
            (0, r.jsx)("polygon", {
              className: c,
              fill: i,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (s.Directions = i), (t.Z = s);
    },
    361207: function (e, t, n) {
      n.d(t, {
        DW: function () {
          return d;
        },
        Gn: function () {
          return _;
        },
        t3: function () {
          return g;
        },
        w4: function () {
          return u;
        },
      });
      var i = n(525654),
        o = n.n(i),
        r = n(271579),
        c = n(314897),
        a = n(981631);
      let l = "linux";
      function u(e) {
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
            : null === (e = o().os) || void 0 === e
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
            ? l
            : -1 !== t.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function d(e) {
        return { win: "Windows", osx: "Mac", [l]: "Linux" }[s(e)];
      }
      function g() {
        let e = s();
        return u(e, !1, e === l ? "tar.gz" : null);
      }
      function _(e, t, n) {
        let i = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, r.ZP)(
              null != i
                ? i
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: c.default.getFingerprint(),
                attemptId: (0, r.WS)(),
              },
            );
          case "Android":
            return (0, r.ZP)(
              null != i ? i : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: c.default.getFingerprint(),
                attemptId: (0, r.WS)(),
              },
            );
          default:
            return null != i ? i : "https://www.discord.com";
        }
      }
    },
    912101: function (e, t, n) {
      let i;
      n(654769);
      (i = n(654769).Z), (t.Z = i);
    },
    654769: function (e, t, n) {
      n(47120), n(177593);
      var i,
        o = n(392711),
        r = n.n(o),
        c = n(525654),
        a = n.n(c),
        l = n(579806),
        u = n(292959),
        s = n(246946),
        d = n(626135),
        g = n(358085),
        _ = n(557177),
        h = n(998502),
        f = n(981631);
      function m(e, t, n) {
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
      let p = g.isPlatformEmbedded && (0, g.isWindows)(),
        b = p && 10 > parseFloat(l.Z.os.release),
        C = !0;
      if (p && !b) {
        let [e, , t] = l.Z.os.release.split(".");
        C = parseInt(e) > 10 || parseInt(t) >= 15063;
      }
      let I =
          (p && C) ||
          ("Chrome" === a().name && 47 > parseFloat(a().version)) ||
          ("Firefox" === a().name && 52 > parseFloat(a().version)),
        S = r().throttle(_.GN, 1e3, { leading: !0 });
      function T() {
        h.ZP.flashFrame(!1);
      }
      p &&
        (window.addEventListener("focus", T), h.ZP.on("MAIN_WINDOW_FOCUS", T));
      let R = window.Notification;
      b &&
        (h.ZP.on("NOTIFICATION_CLICK", (e, t) => {
          let n = null[t];
          null != n && (n.onclick(), n.close());
        }),
        h.ZP.send("NOTIFICATIONS_CLEAR"),
        (i = class {
          static requestPermission(e) {
            e();
          }
          close() {
            null != null[this.id] &&
              (delete null[this.id],
              h.ZP.send("NOTIFICATION_CLOSE", this.id),
              this.onclose());
          }
          constructor(e, { body: t, icon: n }) {
            m(this, "id", R._id++),
              m(this, "title", void 0),
              m(this, "body", void 0),
              m(this, "icon", void 0),
              m(this, "onshow", function () {}),
              m(this, "onclick", function () {}),
              m(this, "onclose", function () {}),
              (this.title = e),
              (this.body = t),
              (this.icon = n),
              setImmediate(() => this.onshow()),
              (null[this.id] = this),
              h.ZP.send("NOTIFICATION_SHOW", {
                id: this.id,
                title: this.title,
                body: this.body,
                icon: this.icon,
              });
          }
        }),
        m(i, "permission", "granted"),
        m(i, "_id", 0),
        (R = i));
      function w() {
        return null != R && "granted" === R.permission;
      }
      function O(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = arguments.length > 2 ? arguments[2] : void 0;
        e.includes("message") ? S(e, t, void 0, n) : (0, _.GN)(e, t);
      }
      function E(e) {
        return (
          (s.Z.disableNotifications && null == e.overrideStreamerMode) ||
          !w() ||
          (g.isPlatformEmbedded && !h.ZP.shouldDisplayNotifications())
        );
      }
      t.Z = {
        hasPermission: w,
        requestPermission: function (e) {
          null != R &&
            R.requestPermission(() => {
              null != e && e(w());
            });
        },
        showNotification: function (e, t, n, i, o) {
          var c, a, l, s;
          let _;
          if (E(o)) {
            null != o.sound &&
              !1 !== o.playSoundIfDisabled &&
              O(
                o.sound,
                null !== (a = o.volume) && void 0 !== a ? a : 1,
                o.soundpack,
              );
            return;
          }
          null != o.sound &&
            O(
              o.sound,
              null !== (l = o.volume) && void 0 !== l ? l : 1,
              o.soundpack,
            );
          let m =
            null !== (s = null == o ? void 0 : o.tag) && void 0 !== s
              ? s
              : null;
          (0, g.isLinux)() && (n = r().escape(n));
          let b = { icon: e, body: n, tag: m, silent: !0 };
          p && u.Z.taskbarFlash && h.ZP.flashFrame(!0);
          try {
            _ = new R(t, b);
          } catch (e) {
            return null;
          }
          return (null === (c = o.onShown) || void 0 === c || c.call(o),
          !o.omitViewTracking && d.default.track(f.rMx.NOTIFICATION_VIEWED, i),
          (_.onclick = () => {
            var e;
            g.isPlatformEmbedded ? h.ZP.focus() : (window.focus(), _.close()),
              !o.omitClickTracking &&
                d.default.track(f.rMx.NOTIFICATION_CLICKED, i),
              null === (e = o.onClick) || void 0 === e || e.call(o);
          }),
          I && setTimeout(() => _.close(), 5e3),
          C)
            ? _
            : {
                close() {
                  var e;
                  null == _ ||
                    null === (e = _.onclose) ||
                    void 0 === e ||
                    e.call(_);
                },
              };
        },
        disabled: E,
      };
    },
    642769: function (e, t, n) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    148240: function (e, t, n) {
      e.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    375294: function (e, t, n) {
      e.exports = { button: "button_f23d00" };
    },
    235532: function (e, t, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    591318: function (e, t, n) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    598627: function (e, t, n) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    326617: function (e, t, n) {
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
    122967: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    471753: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    676648: function (e, t, n) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    74633: function (e, t, n) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
    },
    560814: function (e, t, n) {
      e.exports = {
        container: "container_e08e86",
        innerContainer: "innerContainer_e08e86",
        iconWrapper: "iconWrapper_e08e86",
        star: "star_e08e86",
        sparkle: "sparkle_e08e86",
      };
    },
    72105: function (e, t, n) {
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
    47681: function (e, t, n) {
      n.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    706767: function (e, t, n) {
      e.exports = {
        premiumTrialBadge: "premiumTrialBadge_b089d3",
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
    447421: function (e, t, n) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    900601: function (e, t, n) {
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
    840309: function (e, t, n) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
    440376: function (e, t, n) {
      n.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
    24701: function (e, t, n) {
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
//# sourceMappingURL=2ff3298eb1d0c6037d7e.js.map
