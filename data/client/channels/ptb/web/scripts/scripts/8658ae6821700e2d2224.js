"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85516"],
  {
    34674: function (e, t, n) {
      n.d(t, {
        $_: function () {
          return C;
        },
        KQ: function () {
          return f;
        },
        MU: function () {
          return h;
        },
        RF: function () {
          return R;
        },
        m0: function () {
          return p;
        },
        rf: function () {
          return m;
        },
        tu: function () {
          return b;
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
        a = n(911969),
        c = n(134432),
        l = n(703656),
        s = n(768581),
        u = n(981631),
        d = n(388032);
      let h = 0,
        { API_ENDPOINT: _, CDN_HOST: g } = window.GLOBAL_ENV;
      function p(e) {
        return e.id === h;
      }
      function f() {
        return { id: h, name: d.intl.string(d.t.E407b2) };
      }
      function b(e) {
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
      function C(e) {
        let { itemId: t, hash: n } = e,
          i = new URLSearchParams({
            size: (0, c.oO)(
              parseFloat(o.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, c.x_)(),
            ).toString(),
          }).toString(),
          r = s.$k ? "webp" : "png";
        return null != g
          ? ""
              .concat(location.protocol, "//")
              .concat(g, "/app-assets/application-directory/collection-items/")
              .concat(t, "/")
              .concat(n, ".")
              .concat(r, "?")
              .concat(i)
          : ""
              .concat(location.protocol)
              .concat(_)
              .concat(
                u.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, r),
                "?",
              )
              .concat(i);
      }
      function m() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = new URL(location.href);
        for (let n in e) {
          let i = e[n];
          t.searchParams.set(n, i);
        }
        let n = t.pathname + t.search,
          o = (0, i.Ui)(n, !1);
        (0, l.uL)(o);
      }
      let I = (e) => {
        if (null == e) return null;
        let t = e.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != t ? t[1] : null;
      };
      function R(e) {
        switch (e.type) {
          case a.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return { type: u.s9s.IMG, width: 0, height: 0, src: n };
          case a.ee.YOUTUBE:
            let i = I(e.url);
            if (null != i)
              return { type: u.s9s.YOUTUBE_VIDEO, youtubeVideoId: i };
        }
        return console.warn("Unsupported carousel item", e), null;
      }
    },
    147890: function (e, t, n) {
      n.r(t),
        n.d(t, {
          goHome: function () {
            return g;
          },
          goSearch: function () {
            return C;
          },
          goToAppDirectory: function () {
            return _;
          },
          goToApplication: function () {
            return p;
          },
          goToApplicationSection: function () {
            return f;
          },
          goToApplicationStoreSku: function () {
            return b;
          },
          goToCategory: function () {
            return m;
          },
          replaceAppDirectoryURLWith: function () {
            return I;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i = n(749681),
        o = n(352057),
        r = n(703656),
        a = n(626135),
        c = n(34674),
        l = n(132871),
        s = n(272242),
        u = n(981631),
        d = n(49898),
        h = n(979007);
      let _ = (e) => {
          let {
            view: t = l.ApplicationDirectoryViews.HOME,
            guildId: n,
            applicationId: r,
            applicationSection: c,
            entrypoint: _,
            skuId: m,
          } = e;
          if ((0, o.r)({ location: _.name })) {
            let e =
              c === s.ApplicationDirectoryProfileSections.STORE
                ? h.Wc.STORE
                : h.Wc.ABOUT;
            (0, i.u)({
              tab: d.F$.APPS,
              applicationId: r,
              section: e,
              skuId: e === h.Wc.STORE ? m : void 0,
            });
            return;
          }
          let I = { ..._, pathname: window.location.pathname };
          switch (
            (a.default.track(u.rMx.APP_DIRECTORY_OPENED, {
              source: null == I ? void 0 : I.name,
            }),
            (0, l.resetApplicationDirectoryHistory)(),
            (0, l.setEntrypoint)(I),
            null != n && (0, l.setGuildId)(n),
            t === l.ApplicationDirectoryViews.APPLICATION &&
              null == r &&
              (t = l.ApplicationDirectoryViews.HOME),
            t)
          ) {
            case l.ApplicationDirectoryViews.HOME:
              g();
              break;
            case l.ApplicationDirectoryViews.SEARCH:
              C();
              break;
            case l.ApplicationDirectoryViews.APPLICATION:
              if (null != r) {
                if (null != c) {
                  if (
                    c === s.ApplicationDirectoryProfileSections.STORE &&
                    null != m
                  ) {
                    b({ applicationId: r, skuId: m });
                    break;
                  }
                  f({ applicationId: r, section: c });
                  break;
                }
                p({ applicationId: r });
              }
          }
        },
        g = () => {
          let e = { previousView: (0, l.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        p = (e) => {
          let { applicationId: t } = e,
            n = { previousView: (0, l.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
        },
        f = (e) => {
          let { applicationId: t, section: n } = e,
            i = { previousView: (0, l.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
            state: i,
          });
        },
        b = (e) => {
          let { applicationId: t, skuId: n } = e,
            i = { previousView: (0, l.getCurrentView)() };
          (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
            state: i,
          });
        },
        C = function () {
          let {
              query: e,
              categoryId: t,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            i = new URLSearchParams(),
            o = { previousView: (0, l.getCurrentView)() };
          null != e && i.set("q", e),
            null != t && i.set("category_id", t.toString()),
            null != n && i.set("page", n.toString()),
            (0, r.uL)(u.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: i.toString(),
              state: o,
            });
        },
        m = (e) => {
          let { categoryId: t } = e;
          C({ categoryId: null != t ? t : c.MU });
        },
        I = (e) => {
          let {
            location: { state: t },
          } = (0, r.s1)();
          (0, r.dL)(e, t);
        };
    },
    749681: function (e, t, n) {
      n.d(t, {
        u: function () {
          return d;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(411104);
      var i = n(859921),
        o = n(341907),
        r = n(703656),
        a = n(836768),
        c = n(49898),
        l = n(981631),
        s = n(979007),
        u = n(128449);
      function d(e) {
        let t = e.tab;
        switch ((a.Z.setState({ selectedTab: t }), t)) {
          case c.F$.SERVERS:
            var n, d;
            let h = e.selectedServersTab;
            return (
              null != h
                ? i.Z.setState({
                    selectedTab: h,
                    entrypoint:
                      null !== (n = e.entrypoint) && void 0 !== n
                        ? n
                        : u.Qq.UNKNOWN,
                  })
                : i.Z.setState({
                    entrypoint:
                      null !== (d = e.entrypoint) && void 0 !== d
                        ? d
                        : u.Qq.UNKNOWN,
                  }),
              (0, r.uL)(l.Z5c.GLOBAL_DISCOVERY_SERVERS, e.extra)
            );
          case c.F$.APPS:
            if (null != e.applicationId) {
              if (e.section === s.Wc.STORE) {
                if (null != e.skuId)
                  return (0, r.uL)(
                    l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                      e.applicationId,
                      e.skuId,
                    ),
                  );
                return (0, r.uL)(
                  l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                    e.applicationId,
                    s.Wc.STORE,
                  ),
                );
              }
              return (0, r.uL)(
                l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId),
              );
            }
            if (null != e.query) {
              let t = new URLSearchParams();
              return (
                "" !== e.query && t.set("q", e.query),
                null != e.categoryId &&
                  t.set("category_id", e.categoryId.toString()),
                null != e.page && t.set("page", e.page.toString()),
                (0, r.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                  search: t.toString(),
                })
              );
            } else if (null != e.categoryId)
              return (0, r.uL)(
                l.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(e.categoryId.toString()),
              );
            else return (0, r.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS);
          case c.F$.QUESTS:
            return (0, o.navigateToQuestHome)(
              e.location,
              e.questContent,
              e.questId,
            );
          default:
            throw Error(
              "[transitionToGlobalDiscovery] Unhandled tab type: ".concat(t),
            );
        }
      }
    },
    352057: function (e, t, n) {
      n.d(t, {
        h: function () {
          return o;
        },
        r: function () {
          return r;
        },
      });
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2024-09_global_discovery_apps",
        label: "Global Discovery Apps",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function o(e) {
        let { location: t, autoTrackExposure: n = !0 } = e,
          { enabled: o } = i.useExperiment(
            { location: t },
            { autoTrackExposure: n },
          );
        return o;
      }
      function r(e) {
        let { location: t } = e;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    859921: function (e, t, n) {
      n.d(t, {
        O: function () {
          return a;
        },
      });
      var i = n(972959);
      let o = Object.freeze({
          selectedTab: null,
          isSearchVisible: !1,
          entrypoint: null,
          searchBarState: n(49898).WB.DEFAULT,
        }),
        r = (0, i.H)(() => o);
      function a() {
        r.setState(o);
      }
      t.Z = r;
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
    905423: function (e, t, n) {
      var i = n(512969),
        o = n(65400),
        r = n(731965),
        a = n(893607),
        c = n(981631);
      function l(e) {
        let t = (0, i.LX)(null != e ? e : "", {
          path: c.Z5c.CHANNEL(
            a.Hw.guildId(),
            a.Hw.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === c.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, i.LX)(null != e ? e : "", {
          path: c.Z5c.GUILD_BOOSTING_MARKETING(a.Hw.guildId()),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      t.Z = (0, o.F)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: i } = l(t);
          (0, r.j)(() => e({ path: t, guildId: n, channelId: i }));
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = l(t);
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
        a = n(622143),
        c = n(703656),
        l = n(981631);
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
            (this.unlistenHistory = (0, c.s1)().listen(this.handleRouteChange));
          let { pathname: e } = (0, c.s1)().location;
          r.Z.getState().resetPath(e),
            (this.unlistenKeyboardChange = r.Z.subscribe(
              this.handleKeybindRouteChange,
            )),
            o.Z.addChangeListener(this.handleConnectionChange);
        }
        executeRouteRewrites(e, t) {
          if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
              let o = (0, c.s1)().location.pathname,
                r = n(e, t);
              if (null != r)
                return (
                  (0, i.n)({
                    message:
                      "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                    data: { replacePath: r.path, previousPath: o },
                  }),
                  (0, c.dL)(r.path, r.state),
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
                  this.executeRouteRewrites((0, c.s1)().location, "REPLACE"));
            }),
            s(this, "handleRouteChange", (e, t) => {
              if (this.executeRouteRewrites(e, t)) return;
              if (!(0, a.r)(e)) {
                (0, c.dL)(l.Z5c.ME);
                return;
              }
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
              let e = r.Z.getState();
              null != e.path && (0, c.uL)(e.path);
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
        r = n(200651);
      n(192379);
      var a = n(120356),
        c = n.n(a),
        l = n(325767),
        s = n(485270);
      ((o = i || (i = {})).LEFT = "LEFT"),
        (o.RIGHT = "RIGHT"),
        (o.UP = "UP"),
        (o.DOWN = "DOWN"),
        (o.UP_LEFT = "UP_LEFT"),
        (o.DOWN_RIGHT = "DOWN_RIGHT");
      let u = (e) => {
        let {
          width: t = 24,
          height: n = 24,
          color: i = "currentColor",
          direction: o,
          foreground: a,
          className: u,
          title: d,
          ...h
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, l.Z)(h),
          width: t,
          height: n,
          className: c()(
            u,
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
            null != d ? (0, r.jsx)("title", { children: d }) : null,
            (0, r.jsx)("polygon", {
              className: a,
              fill: i,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (u.Directions = i), (t.Z = u);
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
        a = n(525654),
        c = n.n(a),
        l = n(579806),
        s = n(292959),
        u = n(246946),
        d = n(626135),
        h = n(358085),
        _ = n(557177),
        g = n(998502),
        p = n(981631);
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
      let b = h.isPlatformEmbedded && (0, h.isWindows)(),
        C = b && 10 > parseFloat(l.Z.os.release),
        m = !0;
      if (b && !C) {
        let [e, , t] = l.Z.os.release.split(".");
        m = parseInt(e) > 10 || parseInt(t) >= 15063;
      }
      let I =
          (b && m) ||
          ("Chrome" === c().name && 47 > parseFloat(c().version)) ||
          ("Firefox" === c().name && 52 > parseFloat(c().version)),
        R = r().throttle(_.GN, 1e3, { leading: !0 });
      function T() {
        g.ZP.flashFrame(!1);
      }
      b &&
        (window.addEventListener("focus", T), g.ZP.on("MAIN_WINDOW_FOCUS", T));
      let A = window.Notification;
      C &&
        (g.ZP.on("NOTIFICATION_CLICK", (e, t) => {
          let n = null[t];
          null != n && (n.onclick(), n.close());
        }),
        g.ZP.send("NOTIFICATIONS_CLEAR"),
        (i = class {
          static requestPermission(e) {
            e();
          }
          close() {
            null != null[this.id] &&
              (delete null[this.id],
              g.ZP.send("NOTIFICATION_CLOSE", this.id),
              this.onclose());
          }
          constructor(e, { body: t, icon: n }) {
            f(this, "id", A._id++),
              f(this, "title", void 0),
              f(this, "body", void 0),
              f(this, "icon", void 0),
              f(this, "onshow", function () {}),
              f(this, "onclick", function () {}),
              f(this, "onclose", function () {}),
              (this.title = e),
              (this.body = t),
              (this.icon = n),
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
        f(i, "permission", "granted"),
        f(i, "_id", 0),
        (A = i));
      function S() {
        return null != A && "granted" === A.permission;
      }
      function v(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = arguments.length > 2 ? arguments[2] : void 0;
        e.includes("message") ? R(e, t, void 0, n) : (0, _.GN)(e, t);
      }
      function w(e) {
        return (
          (u.Z.disableNotifications && null == e.overrideStreamerMode) ||
          !S() ||
          (h.isPlatformEmbedded && !g.ZP.shouldDisplayNotifications())
        );
      }
      t.Z = {
        hasPermission: S,
        requestPermission: function (e) {
          null != A &&
            A.requestPermission(() => {
              null != e && e(S());
            });
        },
        showNotification: function (e, t, n, i, o) {
          var a, c, l, u;
          let _;
          if (w(o)) {
            null != o.sound &&
              !1 !== o.playSoundIfDisabled &&
              v(
                o.sound,
                null !== (c = o.volume) && void 0 !== c ? c : 1,
                o.soundpack,
              );
            return;
          }
          null != o.sound &&
            v(
              o.sound,
              null !== (l = o.volume) && void 0 !== l ? l : 1,
              o.soundpack,
            );
          let f =
            null !== (u = null == o ? void 0 : o.tag) && void 0 !== u
              ? u
              : null;
          (0, h.isLinux)() && (n = r().escape(n));
          let C = { icon: e, body: n, tag: f, silent: !0 };
          b && s.Z.taskbarFlash && g.ZP.flashFrame(!0);
          try {
            _ = new A(t, C);
          } catch (e) {
            return null;
          }
          return (null === (a = o.onShown) || void 0 === a || a.call(o),
          !o.omitViewTracking && d.default.track(p.rMx.NOTIFICATION_VIEWED, i),
          (_.onclick = () => {
            var e;
            h.isPlatformEmbedded ? g.ZP.focus() : (window.focus(), _.close()),
              !o.omitClickTracking &&
                d.default.track(p.rMx.NOTIFICATION_CLICKED, i),
              null === (e = o.onClick) || void 0 === e || e.call(o);
          }),
          I && setTimeout(() => _.close(), 5e3),
          m)
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
        disabled: w,
      };
    },
    744149: function (e, t, n) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    560874: function (e, t, n) {
      e.exports = { button: "button_f23d00" };
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
    139266: function (e, t, n) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    759821: function (e, t, n) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
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
    762042: function (e, t, n) {
      e.exports = {
        customCircleAnimation: "customCircleAnimation_b5369a",
        coachTipContainer: "coachTipContainer_b5369a",
        coachmarkArt: "coachmarkArt_b5369a",
        exitIcon: "exitIcon_b5369a",
        iconContainer: "iconContainer_b5369a",
        coachtipContent: "coachtipContent_b5369a",
        incentiveCoachtipContent: "incentiveCoachtipContent_b5369a",
        marketingBadgeTooltip: "marketingBadgeTooltip_b5369a",
        tooltipContent: "tooltipContent_b5369a",
        incentiveTooltipPointer: "incentiveTooltipPointer_b5369a",
        incentiveCoachtipContainer: "incentiveCoachtipContainer_b5369a",
        icon: "icon_b5369a",
        incentiveIcon: "incentiveIcon_b5369a",
        trialBadgeBackground: "trialBadgeBackground_b5369a",
        trialAckedBadge: "trialAckedBadge_b5369a",
        t4ACoachTipContainer: "t4ACoachTipContainer_b5369a",
        t4ACoachtipArtOuterContainer: "t4ACoachtipArtOuterContainer_b5369a",
        t4AMarketingBadgeTooltip: "t4AMarketingBadgeTooltip_b5369a",
        t4ACoachtipArtInnerContainer: "t4ACoachtipArtInnerContainer_b5369a",
        t4aCoachtipContent: "t4aCoachtipContent_b5369a",
      };
    },
    830164: function (e, t, n) {
      e.exports = {
        nitroGemAnimation: "nitroGemAnimation_ba5739",
        gemBackgroundFill: "gemBackgroundFill_ba5739",
        progressCircle: "progressCircle_ba5739",
        activeProgressCircle: "activeProgressCircle_ba5739",
        activeProgressCircleAnimation: "activeProgressCircleAnimation_ba5739",
        avatarDecoContainer: "avatarDecoContainer_ba5739",
        avatarDeco: "avatarDeco_ba5739",
        avatarDecoImage: "avatarDecoImage_ba5739",
      };
    },
    697303: function (e, t, n) {
      e.exports = {
        circleContainer: "circleContainer_d37103",
        childrenContainer: "childrenContainer_d37103",
        baseProgressCircle: "baseProgressCircle_d37103",
        circleSVG: "circleSVG_d37103",
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
    431872: function (e, t, n) {
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
    684309: function (e, t, n) {
      n.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
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
//# sourceMappingURL=8658ae6821700e2d2224.js.map
