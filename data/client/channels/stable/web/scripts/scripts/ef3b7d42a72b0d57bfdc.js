"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3806"],
  {
    34674: function (e, n, t) {
      t.d(n, {
        $_: function () {
          return p;
        },
        KQ: function () {
          return h;
        },
        MU: function () {
          return _;
        },
        RF: function () {
          return T;
        },
        m0: function () {
          return b;
        },
        rf: function () {
          return C;
        },
        tu: function () {
          return m;
        },
      }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120),
        t(315314);
      var o = t(860911),
        i = t(477690),
        r = t(481060),
        c = t(911969),
        a = t(134432),
        l = t(703656),
        u = t(768581),
        s = t(981631),
        d = t(689938);
      let _ = 0,
        { API_ENDPOINT: f, CDN_HOST: g } = window.GLOBAL_ENV;
      function b(e) {
        return e.id === _;
      }
      function h() {
        return { id: _, name: d.Z.Messages.APP_DIRECTORY_ALL_CATEGORY };
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
        let { itemId: n, hash: t } = e,
          o = new URLSearchParams({
            size: (0, a.oO)(
              parseFloat(i.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, a.x_)(),
            ).toString(),
          }).toString(),
          r = u.$k ? "webp" : "png";
        return null != g
          ? ""
              .concat(location.protocol, "//")
              .concat(g, "/app-assets/application-directory/collection-items/")
              .concat(n, "/")
              .concat(t, ".")
              .concat(r, "?")
              .concat(o)
          : ""
              .concat(location.protocol)
              .concat(f)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(n, t, r),
                "?",
              )
              .concat(o);
      }
      function C() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = new URL(location.href);
        for (let t in e) {
          let o = e[t];
          n.searchParams.set(t, o);
        }
        let t = n.pathname + n.search,
          i = (0, o.Ui)(t, !1);
        (0, l.uL)(i);
      }
      let I = (e) => {
        if (null == e) return null;
        let n = e.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != n ? n[1] : null;
      };
      function T(e) {
        switch (e.type) {
          case c.ee.MEDIA_PROXY:
            var n;
            let t = null !== (n = e.proxy_url) && void 0 !== n ? n : e.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: t };
          case c.ee.YOUTUBE:
            let o = I(e.url);
            if (null != o)
              return { type: s.s9s.YOUTUBE_VIDEO, youtubeVideoId: o };
        }
        return console.warn("Unsupported carousel item", e), null;
      }
    },
    147890: function (e, n, t) {
      t.r(n),
        t.d(n, {
          goHome: function () {
            return s;
          },
          goSearch: function () {
            return g;
          },
          goToAppDirectory: function () {
            return u;
          },
          goToApplication: function () {
            return d;
          },
          goToApplicationSection: function () {
            return _;
          },
          goToApplicationStoreSku: function () {
            return f;
          },
          goToCategory: function () {
            return b;
          },
          replaceAppDirectoryURLWith: function () {
            return h;
          },
        }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var o = t(703656),
        i = t(626135),
        r = t(34674),
        c = t(132871),
        a = t(272242),
        l = t(981631);
      let u = (e) => {
          let {
              view: n = c.ApplicationDirectoryViews.HOME,
              guildId: t,
              applicationId: o,
              applicationSection: r,
              entrypoint: u,
              skuId: b,
            } = e,
            h = { ...u, pathname: window.location.pathname };
          switch (
            (i.default.track(l.rMx.APP_DIRECTORY_OPENED, {
              source: null == h ? void 0 : h.name,
            }),
            (0, c.resetApplicationDirectoryHistory)(),
            (0, c.setEntrypoint)(h),
            null != t && (0, c.setGuildId)(t),
            n === c.ApplicationDirectoryViews.APPLICATION &&
              null == o &&
              (n = c.ApplicationDirectoryViews.HOME),
            n)
          ) {
            case c.ApplicationDirectoryViews.HOME:
              s();
              break;
            case c.ApplicationDirectoryViews.SEARCH:
              g();
              break;
            case c.ApplicationDirectoryViews.APPLICATION:
              if (null != o) {
                if (null != r) {
                  if (
                    r === a.ApplicationDirectoryProfileSections.STORE &&
                    null != b
                  ) {
                    f({ applicationId: o, skuId: b });
                    break;
                  }
                  _({ applicationId: o, section: r });
                  break;
                }
                d({ applicationId: o });
              }
          }
        },
        s = () => {
          let e = { previousView: (0, c.getCurrentView)() };
          (0, o.uL)(l.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        d = (e) => {
          let { applicationId: n } = e,
            t = { previousView: (0, c.getCurrentView)() };
          (0, o.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE(n), { state: t });
        },
        _ = (e) => {
          let { applicationId: n, section: t } = e,
            i = { previousView: (0, c.getCurrentView)() };
          (0, o.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(n, t), {
            state: i,
          });
        },
        f = (e) => {
          let { applicationId: n, skuId: t } = e,
            i = { previousView: (0, c.getCurrentView)() };
          (0, o.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t), {
            state: i,
          });
        },
        g = function () {
          let {
              query: e,
              categoryId: n,
              page: t,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            i = new URLSearchParams(),
            r = { previousView: (0, c.getCurrentView)() };
          null != e && i.set("q", e),
            null != n && i.set("category_id", n.toString()),
            null != t && i.set("page", t.toString()),
            (0, o.uL)(l.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: i.toString(),
              state: r,
            });
        },
        b = (e) => {
          let { categoryId: n } = e;
          g({ categoryId: null != n ? n : r.MU });
        },
        h = (e) => {
          let {
            location: { state: n },
          } = (0, o.s1)();
          (0, o.dL)(e, n);
        };
    },
    192918: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      }),
        t(47120);
      var o = t(470079),
        i = t(442837),
        r = t(594174),
        c = t(823379);
      let a = [];
      function l(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
          t = (0, i.Wu)(
            [r.default],
            () => {
              let n = e.participants
                  .map((e) => r.default.getUser(e))
                  .filter(c.lm),
                t = n.find((n) => n.id === e.author_id),
                o = n.filter((n) => n.id !== e.author_id);
              return null == t ? a : [...o, t];
            },
            [e],
          ),
          l = o.useMemo(() => t.slice(-n), [n, t]),
          u = l[l.length - 1],
          s = l[l.length - 2],
          d = Math.max(t.length - 1, 0);
        return {
          orderedParticipants: t,
          displayParticipants: l,
          participant1: u,
          participant2: s,
          numOtherParticipants: d,
        };
      }
    },
    858822: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(913527),
        r = t.n(i),
        c = t(442837),
        a = t(481060),
        l = t(87051),
        u = t(776568),
        s = t(777861),
        d = t(9156),
        _ = t(621600),
        f = t(689938);
      function g(e, n) {
        let t = null == e ? void 0 : e.id,
          { muted: i, muteConfig: g } = (0, c.cj)(
            [d.ZP],
            () => ({
              muted: null != t ? d.ZP.isMuted(t) : void 0,
              muteConfig: null != t ? d.ZP.getMuteConfig(t) : void 0,
            }),
            [t],
          ),
          b = (0, s.U)(g);
        return null == t
          ? null
          : i
            ? (0, o.jsx)(a.MenuItem, {
                id: "unmute-guild",
                label: f.Z.Messages.UNMUTE_SERVER,
                subtext: b,
                action: () =>
                  l.Z.updateGuildNotificationSettings(
                    t,
                    { muted: !1 },
                    _.ZB.Unmuted,
                  ),
              })
            : (0, o.jsx)(a.MenuItem, {
                id: "mute-guild",
                label: f.Z.Messages.MUTE_SERVER,
                action: () =>
                  l.Z.updateGuildNotificationSettings(
                    t,
                    { muted: !0 },
                    _.ZB.Muted,
                  ),
                children: (0, u.k)().map((e) => {
                  let { value: i, label: c } = e;
                  return (0, o.jsx)(
                    a.MenuItem,
                    {
                      id: "".concat(i),
                      label: c,
                      action: () =>
                        (function (e) {
                          if (null == t) return;
                          let o =
                            e > 0 ? r()().add(e, "second").toISOString() : null;
                          l.Z.updateGuildNotificationSettings(
                            t,
                            {
                              muted: !0,
                              mute_config: {
                                selected_time_window: e,
                                end_time: o,
                              },
                            },
                            _.ZB.Muted,
                            n,
                          );
                        })(i),
                    },
                    i,
                  );
                }),
              });
      }
    },
    423589: function (e, n, t) {
      t.d(n, {
        Mn: function () {
          return h;
        },
        OD: function () {
          return b;
        },
        W9: function () {
          return f;
        },
      }),
        t(47120),
        t(789020);
      var o = t(442837),
        i = t(798140),
        r = t(9156),
        c = t(630388),
        a = t(709054),
        l = t(312400),
        u = t(981631),
        s = t(969943),
        d = t(526761),
        _ = t(689938);
      function f() {
        return [
          {
            label: _.Z.Messages.MUTE_DURATION_15_MINUTES,
            value: s.Oe.MINUTES_15,
          },
          { label: _.Z.Messages.MUTE_DURATION_1_HOUR, value: s.Oe.HOURS_1 },
          { label: _.Z.Messages.MUTE_DURATION_3_HOURS, value: s.Oe.HOURS_3 },
          { label: _.Z.Messages.MUTE_DURATION_8_HOURS, value: s.Oe.HOURS_8 },
          { label: _.Z.Messages.MUTE_DURATION_24_HOURS, value: s.Oe.HOURS_24 },
          { label: _.Z.Messages.MUTE_DURATION_ALWAYS, value: s.Oe.ALWAYS },
        ];
      }
      let g = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function b(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
        return a.default.keys(e).filter((t) => {
          var o, r;
          let a = e[t].message_notifications !== u.bL.NULL,
            l =
              c.yE(
                null !== (o = e[t].flags) && void 0 !== o ? o : 0,
                d.ic.UNREADS_ALL_MESSAGES,
              ) ||
              c.yE(
                null !== (r = e[t].flags) && void 0 !== r ? r : 0,
                d.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!n.ignoreUnreadSetting && l) ||
            (!n.ignoreNotificationSetting && a) ||
            (!n.ignoreMute && (0, i.m$)(e[t]))
          );
        });
      }
      function h(e) {
        let n = (0, o.e7)([r.ZP], () => r.ZP.useNewNotifications);
        return (
          l.xT.useExperiment({ location: e }, { autoTrackExposure: !1 })
            .enabled && n
        );
      }
    },
    113449: function (e, n, t) {
      t.d(n, {
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
      var o = t(630388),
        i = t(526761);
      function r(e, n) {
        var t;
        return o.pj(
          ((t = e),
          o.M1(t, i.vc.UNREADS_ALL_MESSAGES, i.vc.UNREADS_ONLY_MENTIONS)),
          n,
        );
      }
      let c = (e) =>
        o.M1(e, i.ic.UNREADS_ALL_MESSAGES, i.ic.UNREADS_ONLY_MENTIONS);
      function a(e, n) {
        return o.pj(c(e), n);
      }
    },
    905423: function (e, n, t) {
      var o = t(266067),
        i = t(652874),
        r = t(731965),
        c = t(893607),
        a = t(981631);
      function l(e) {
        let n = (0, o.LX)(null != e ? e : "", {
          path: a.Z5c.CHANNEL(
            c.Hw.guildId(),
            c.Hw.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != n) {
          let { guildId: e, channelId: t } = n.params;
          return {
            guildId: e === a.ME ? null : e,
            channelId: null != t ? t : null,
          };
        }
        let t = (0, o.LX)(null != e ? e : "", {
          path: a.Z5c.GUILD_BOOSTING_MARKETING(c.Hw.guildId()),
        });
        return null != t
          ? { guildId: t.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      n.Z = (0, i.Z)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(n) {
          let { guildId: t, channelId: o } = l(n);
          (0, r.j)(() => e({ path: n, guildId: t, channelId: o }));
        },
        resetPath(n) {
          let { guildId: t, channelId: o } = l(n);
          (0, r.j)(() =>
            e({ path: null, guildId: t, channelId: o, basePath: n }),
          );
        },
      }));
    },
    304445: function (e, n, t) {
      t(47120), t(411104);
      var o = t(572299),
        i = t(38618),
        r = t(905423),
        c = t(622143),
        a = t(703656),
        l = t(981631);
      function u(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      n.Z = new (class e {
        initialize() {
          this.cleanup(),
            (this.unlistenHistory = (0, a.s1)().listen(this.handleRouteChange));
          let { pathname: e } = (0, a.s1)().location;
          r.Z.getState().resetPath(e),
            (this.unlistenKeyboardChange = r.Z.subscribe(
              this.handleKeybindRouteChange,
            )),
            i.Z.addChangeListener(this.handleConnectionChange);
        }
        executeRouteRewrites(e, n) {
          if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let t of this.rewrites) {
              let i = (0, a.s1)().location.pathname,
                r = t(e, n);
              if (null != r)
                return (
                  (0, o.n)({
                    message:
                      "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                    data: { replacePath: r.path, previousPath: i },
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
          var e, n;
          null === (e = this.unlistenHistory) || void 0 === e || e.call(this),
            (this.unlistenHistory = void 0),
            null === (n = this.unlistenKeyboardChange) ||
              void 0 === n ||
              n.call(this),
            (this.unlistenKeyboardChange = void 0),
            i.Z.removeChangeListener(this.handleConnectionChange);
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
            let n = e((0, a.s1)().location, (0, a.s1)().action);
            null != n && (0, a.dL)(n.path, n.state);
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
          u(this, "unlistenHistory", void 0),
            u(this, "unlistenKeyboardChange", void 0),
            u(this, "rewrites", new Set()),
            u(this, "listeners", new Set()),
            u(this, "routeChangeCount", 0),
            u(this, "timer", -1),
            u(this, "connected", !1),
            u(this, "handleConnectionChange", () => {
              let e = i.Z.isConnected(),
                n = e && !this.connected;
              (this.connected = e),
                n &&
                  ((this.routeChangeCount = 0),
                  this.executeRouteRewrites((0, a.s1)().location, "REPLACE"));
            }),
            u(this, "handleRouteChange", (e, n) => {
              if (this.executeRouteRewrites(e, n)) return;
              if (!(0, c.r)(e)) {
                (0, a.dL)(l.Z5c.ME);
                return;
              }
              let t = r.Z.getState();
              for (let o of (t.basePath !== e.pathname &&
                t.resetPath(e.pathname),
              this.listeners))
                try {
                  o(e, n);
                } catch (e) {
                  console.warn(
                    "RouteManager.listen: A route listener has caused an error",
                    e.message,
                  );
                }
              this.routeChangeCount = 0;
            }),
            u(this, "handleKeybindRouteChange", (e) => {
              let { path: n } = e;
              null != n
                ? (clearTimeout(this.timer),
                  (this.timer = setTimeout(this.flushRoute, 200)))
                : null == n && clearTimeout(this.timer);
            }),
            u(this, "flushRoute", () => {
              clearTimeout(this.timer);
              let e = r.Z.getState();
              null != e.path && (0, a.uL)(e.path);
            });
        }
      })();
    },
    622143: function (e, n, t) {
      t.d(n, {
        r: function () {
          return o;
        },
      });
      function o(e) {
        return !0;
      }
    },
    977059: function (e, n, t) {
      t.d(n, {
        R: function () {
          return r;
        },
        S: function () {
          return i;
        },
      });
      let o = (0, t(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function i(e) {
        let { location: n } = e;
        return o.useExperiment({ location: n }, { autoTrackExposure: !0 });
      }
      function r(e) {
        let { location: n } = e;
        return o.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
      }
    },
    671533: function (e, n, t) {
      t(411104);
      var o,
        i,
        r = t(735250);
      t(470079);
      var c = t(120356),
        a = t.n(c),
        l = t(325767),
        u = t(865244);
      ((i = o || (o = {})).LEFT = "LEFT"),
        (i.RIGHT = "RIGHT"),
        (i.UP = "UP"),
        (i.DOWN = "DOWN"),
        (i.UP_LEFT = "UP_LEFT"),
        (i.DOWN_RIGHT = "DOWN_RIGHT");
      let s = (e) => {
        let {
          width: n = 24,
          height: t = 24,
          color: o = "currentColor",
          direction: i,
          foreground: c,
          className: s,
          title: d,
          ..._
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, l.Z)(_),
          width: n,
          height: t,
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
            })(i),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != d ? (0, r.jsx)("title", { children: d }) : null,
            (0, r.jsx)("polygon", {
              className: c,
              fill: o,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (s.Directions = o), (n.Z = s);
    },
    361207: function (e, n, t) {
      t.d(n, {
        DW: function () {
          return d;
        },
        Gn: function () {
          return f;
        },
        t3: function () {
          return _;
        },
        w4: function () {
          return u;
        },
      });
      var o = t(525654),
        i = t.n(o),
        r = t(271579),
        c = t(314897),
        a = t(981631);
      let l = "linux";
      function u(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(a.fzT.DESKTOP)
          .concat(n ? "/ptb" : "", "?platform=")
          .concat(e)
          .concat(null != t ? "&format=".concat(t) : "");
      }
      function s() {
        var e;
        let n =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : null === (e = i().os) || void 0 === e
              ? void 0
              : e.family;
        return null == n
          ? "win"
          : -1 !== n.indexOf("Ubuntu") ||
              -1 !== n.indexOf("Debian") ||
              -1 !== n.indexOf("Fedora") ||
              -1 !== n.indexOf("Red Hat") ||
              -1 !== n.indexOf("SuSE") ||
              -1 !== n.indexOf("Linux")
            ? l
            : -1 !== n.indexOf("OS X")
              ? "osx"
              : "win";
      }
      function d(e) {
        return { win: "Windows", osx: "Mac", [l]: "Linux" }[s(e)];
      }
      function _() {
        let e = s();
        return u(e, !1, e === l ? "tar.gz" : null);
      }
      function f(e, n, t) {
        let o = null != t ? t.toString() : null;
        switch (n) {
          case "iOS":
            return (0, r.ZP)(
              null != o
                ? o
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: c.default.getFingerprint(),
                attemptId: (0, r.WS)(),
              },
            );
          case "Android":
            return (0, r.ZP)(
              null != o ? o : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: c.default.getFingerprint(),
                attemptId: (0, r.WS)(),
              },
            );
          default:
            return null != o ? o : "https://www.discord.com";
        }
      }
    },
    912101: function (e, n, t) {
      let o;
      t(654769);
      (o = t(654769).Z), (n.Z = o);
    },
    654769: function (e, n, t) {
      t(47120), t(177593);
      var o,
        i = t(392711),
        r = t.n(i),
        c = t(525654),
        a = t.n(c),
        l = t(579806),
        u = t(292959),
        s = t(246946),
        d = t(626135),
        _ = t(358085),
        f = t(557177),
        g = t(998502),
        b = t(981631);
      function h(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      let m = _.isPlatformEmbedded && (0, _.isWindows)(),
        p = m && 10 > parseFloat(l.Z.os.release),
        C = !0;
      if (m && !p) {
        let [e, , n] = l.Z.os.release.split(".");
        C = parseInt(e) > 10 || parseInt(n) >= 15063;
      }
      let I =
          (m && C) ||
          ("Chrome" === a().name && 47 > parseFloat(a().version)) ||
          ("Firefox" === a().name && 52 > parseFloat(a().version)),
        T = r().throttle(f.GN, 1e3, { leading: !0 });
      function w() {
        g.ZP.flashFrame(!1);
      }
      m &&
        (window.addEventListener("focus", w), g.ZP.on("MAIN_WINDOW_FOCUS", w));
      let S = window.Notification;
      p &&
        (g.ZP.on("NOTIFICATION_CLICK", (e, n) => {
          let t = null[n];
          null != t && (t.onclick(), t.close());
        }),
        g.ZP.send("NOTIFICATIONS_CLEAR"),
        (o = class {
          static requestPermission(e) {
            e();
          }
          close() {
            null != null[this.id] &&
              (delete null[this.id],
              g.ZP.send("NOTIFICATION_CLOSE", this.id),
              this.onclose());
          }
          constructor(e, { body: n, icon: t }) {
            h(this, "id", S._id++),
              h(this, "title", void 0),
              h(this, "body", void 0),
              h(this, "icon", void 0),
              h(this, "onshow", function () {}),
              h(this, "onclick", function () {}),
              h(this, "onclose", function () {}),
              (this.title = e),
              (this.body = n),
              (this.icon = t),
              setImmediate(() => this.onshow()),
              (null[this.id] = this),
              g.ZP.send("NOTIFICATION_SHOW", {
                id: this.id,
                title: this.title,
                body: this.body,
                icon: this.icon,
              });
          }
        }),
        h(o, "permission", "granted"),
        h(o, "_id", 0),
        (S = o));
      function R() {
        return null != S && "granted" === S.permission;
      }
      function v(e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          t = arguments.length > 2 ? arguments[2] : void 0;
        e.includes("message") ? T(e, n, void 0, t) : (0, f.GN)(e, n);
      }
      function O(e) {
        return (
          (s.Z.disableNotifications && null == e.overrideStreamerMode) ||
          !R() ||
          (_.isPlatformEmbedded && !g.ZP.shouldDisplayNotifications())
        );
      }
      n.Z = {
        hasPermission: R,
        requestPermission: function (e) {
          null != S &&
            S.requestPermission(() => {
              null != e && e(R());
            });
        },
        showNotification: function (e, n, t, o, i) {
          var c, a, l, s;
          let f;
          if (O(i)) {
            null != i.sound &&
              !1 !== i.playSoundIfDisabled &&
              v(
                i.sound,
                null !== (a = i.volume) && void 0 !== a ? a : 1,
                i.soundpack,
              );
            return;
          }
          null != i.sound &&
            v(
              i.sound,
              null !== (l = i.volume) && void 0 !== l ? l : 1,
              i.soundpack,
            );
          let h =
            null !== (s = null == i ? void 0 : i.tag) && void 0 !== s
              ? s
              : null;
          (0, _.isLinux)() && (t = r().escape(t));
          let p = { icon: e, body: t, tag: h, silent: !0 };
          m && u.Z.taskbarFlash && g.ZP.flashFrame(!0);
          try {
            f = new S(n, p);
          } catch (e) {
            return null;
          }
          return (null === (c = i.onShown) || void 0 === c || c.call(i),
          !i.omitViewTracking && d.default.track(b.rMx.NOTIFICATION_VIEWED, o),
          (f.onclick = () => {
            var e;
            _.isPlatformEmbedded ? g.ZP.focus() : (window.focus(), f.close()),
              !i.omitClickTracking &&
                d.default.track(b.rMx.NOTIFICATION_CLICKED, o),
              null === (e = i.onClick) || void 0 === e || e.call(i);
          }),
          I && setTimeout(() => f.close(), 5e3),
          C)
            ? f
            : {
                close() {
                  var e;
                  null == f ||
                    null === (e = f.onclose) ||
                    void 0 === e ||
                    e.call(f);
                },
              };
        },
        disabled: O,
      };
    },
    60179: function (e, n, t) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    243014: function (e, n, t) {
      e.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    681130: function (e, n, t) {
      e.exports = { button: "button_f23d00" };
    },
    841261: function (e, n, t) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    147768: function (e, n, t) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    11377: function (e, n, t) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    156725: function (e, n, t) {
      t.r(
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
    207341: function (e, n, t) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    456692: function (e, n, t) {
      e.exports = {
        container: "container_dc71f0",
        imageContainer: "imageContainer_dc71f0",
        image: "image_dc71f0",
        backgroundImage: "backgroundImage_dc71f0",
        backgroundImageFilter: "backgroundImageFilter_dc71f0",
        loader: "loader_dc71f0",
      };
    },
    404934: function (e, n, t) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    813778: function (e, n, t) {
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
    188662: function (e, n, t) {
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
    772103: function (e, n, t) {
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
    405013: function (e, n, t) {
      e.exports = { badge: "badge_a24a11", badgeIcon: "badgeIcon_a24a11" };
    },
    169528: function (e, n, t) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    873198: function (e, n, t) {
      e.exports = { emojiIcon: "emojiIcon_e6e8e8" };
    },
    681027: function (e, n, t) {
      e.exports = { icon: "icon_acc5ff" };
    },
    915938: function (e, n, t) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
    },
    391317: function (e, n, t) {
      e.exports = { container: "container_f8690a" };
    },
    848435: function (e, n, t) {
      e.exports = {
        container: "container_e08e86",
        innerContainer: "innerContainer_e08e86",
        iconWrapper: "iconWrapper_e08e86",
        star: "star_e08e86",
        sparkle: "sparkle_e08e86",
      };
    },
    861277: function (e, n, t) {
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
    427542: function (e, n, t) {
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
      };
    },
    679537: function (e, n, t) {
      e.exports = { container: "container_cbadbc" };
    },
    489666: function (e, n, t) {
      e.exports = {
        settingsWrapper: "settingsWrapper_e2ecbf",
        osx: "osx_e2ecbf",
        backButton: "backButton_e2ecbf",
        windows: "windows_e2ecbf",
        notice: "notice_e2ecbf",
        noticeContents: "noticeContents_e2ecbf",
        noticeText: "noticeText_e2ecbf",
        previewWarning: "previewWarning_e2ecbf",
        button: "button_e2ecbf",
        buttonInner: "buttonInner_e2ecbf",
        backArrow: "backArrow_e2ecbf",
        selectCaret: "selectCaret_e2ecbf",
      };
    },
    860553: function (e, n, t) {
      e.exports = {
        countDown: "countDown_d0e7ba",
        sparkleStar1: "sparkleStar1_d0e7ba",
        sparkleStar2: "sparkleStar2_d0e7ba",
      };
    },
    526207: function (e, n, t) {
      t.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    742774: function (e, n, t) {
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
    704448: function (e, n, t) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    30352: function (e, n, t) {
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
    655580: function (e, n, t) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
    908860: function (e, n, t) {
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
    869042: function (e, n, t) {
      t.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
    579861: function (e, n, t) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
    865244: function (e, n, t) {
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
//# sourceMappingURL=ef3b7d42a72b0d57bfdc.js.map
