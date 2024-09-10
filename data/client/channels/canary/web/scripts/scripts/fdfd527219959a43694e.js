"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["94515"],
  {
    349445: function (e, t, n) {
      n.d(t, {
        SV: function () {
          return a;
        },
      });
      var i = n(470079);
      let o = (0, i.createContext)(null),
        r = { didCatch: !1, error: null };
      class a extends i.Component {
        constructor(e) {
          super(e),
            (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
            (this.state = r);
        }
        static getDerivedStateFromError(e) {
          return { didCatch: !0, error: e };
        }
        resetErrorBoundary() {
          let { error: e } = this.state;
          if (null !== e) {
            for (
              var t, n, i = arguments.length, o = Array(i), a = 0;
              a < i;
              a++
            )
              o[a] = arguments[a];
            null === (t = (n = this.props).onReset) ||
              void 0 === t ||
              t.call(n, { args: o, reason: "imperative-api" }),
              this.setState(r);
          }
        }
        componentDidCatch(e, t) {
          var n, i;
          null === (n = (i = this.props).onError) ||
            void 0 === n ||
            n.call(i, e, t);
        }
        componentDidUpdate(e, t) {
          let { didCatch: n } = this.state,
            { resetKeys: i } = this.props;
          if (
            n &&
            null !== t.error &&
            (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
              return (
                e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
              );
            })(e.resetKeys, i)
          ) {
            var o, a;
            null === (o = (a = this.props).onReset) ||
              void 0 === o ||
              o.call(a, { next: i, prev: e.resetKeys, reason: "keys" }),
              this.setState(r);
          }
        }
        render() {
          let {
              children: e,
              fallbackRender: t,
              FallbackComponent: n,
              fallback: r,
            } = this.props,
            { didCatch: a, error: c } = this.state,
            l = e;
          if (a) {
            let e = { error: c, resetErrorBoundary: this.resetErrorBoundary };
            if ((0, i.isValidElement)(r)) l = r;
            else if ("function" == typeof t) l = t(e);
            else if (n) l = (0, i.createElement)(n, e);
            else throw c;
          }
          return (0, i.createElement)(
            o.Provider,
            {
              value: {
                didCatch: a,
                error: c,
                resetErrorBoundary: this.resetErrorBoundary,
              },
            },
            l,
          );
        }
      }
    },
    781402: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(470079);
      function o() {
        let e = (0, i.createContext)(void 0);
        return {
          Provider: ({ initialStore: t, createStore: n, children: o }) => {
            let r = (0, i.useRef)();
            return (
              !r.current &&
                (t &&
                  (console.warn(
                    "Provider initialStore is deprecated and will be removed in the next version.",
                  ),
                  !n && (n = () => t)),
                (r.current = n())),
              (0, i.createElement)(e.Provider, { value: r.current }, o)
            );
          },
          useStore: (t, n = Object.is) => {
            let o = (0, i.useContext)(e);
            if (!o)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return o(t, n);
          },
          useStoreApi: () => {
            let t = (0, i.useContext)(e);
            if (!t)
              throw Error(
                "Seems like you have not used zustand provider as an ancestor.",
              );
            return (0, i.useMemo)(
              () => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy,
              }),
              [t],
            );
          },
        };
      }
    },
    34674: function (e, t, n) {
      n.d(t, {
        $_: function () {
          return p;
        },
        KQ: function () {
          return _;
        },
        MU: function () {
          return d;
        },
        m0: function () {
          return f;
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
        a = n(134432),
        c = n(703656),
        l = n(768581),
        s = n(981631),
        u = n(689938);
      let d = 0,
        { API_ENDPOINT: g, CDN_HOST: h } = window.GLOBAL_ENV;
      function f(e) {
        return e.id === d;
      }
      function _() {
        return { id: d, name: u.Z.Messages.APP_DIRECTORY_ALL_CATEGORY };
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
            size: (0, a.oO)(
              parseFloat(o.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, a.x_)(),
            ).toString(),
          }).toString(),
          r = l.$k ? "webp" : "png";
        return null != h
          ? ""
              .concat(location.protocol, "//")
              .concat(h, "/app-assets/application-directory/collection-items/")
              .concat(t, "/")
              .concat(n, ".")
              .concat(r, "?")
              .concat(i)
          : ""
              .concat(location.protocol)
              .concat(g)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, r),
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
        (0, c.uL)(o);
      }
    },
    147890: function (e, t, n) {
      n.r(t),
        n.d(t, {
          goHome: function () {
            return u;
          },
          goSearch: function () {
            return f;
          },
          goToAppDirectory: function () {
            return s;
          },
          goToApplication: function () {
            return d;
          },
          goToApplicationSection: function () {
            return g;
          },
          goToApplicationStoreSku: function () {
            return h;
          },
          goToCategory: function () {
            return _;
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
        a = n(132871),
        c = n(272242),
        l = n(981631);
      let s = (e) => {
          let {
              view: t = a.ApplicationDirectoryViews.HOME,
              guildId: n,
              applicationId: i,
              applicationSection: r,
              entrypoint: s,
              skuId: _,
            } = e,
            m = { ...s, pathname: window.location.pathname };
          switch (
            (o.default.track(l.rMx.APP_DIRECTORY_OPENED, {
              source: null == m ? void 0 : m.name,
            }),
            (0, a.resetApplicationDirectoryHistory)(),
            (0, a.setEntrypoint)(m),
            null != n && (0, a.setGuildId)(n),
            t === a.ApplicationDirectoryViews.APPLICATION &&
              null == i &&
              (t = a.ApplicationDirectoryViews.HOME),
            t)
          ) {
            case a.ApplicationDirectoryViews.HOME:
              u();
              break;
            case a.ApplicationDirectoryViews.SEARCH:
              f();
              break;
            case a.ApplicationDirectoryViews.APPLICATION:
              if (null != i) {
                if (null != r) {
                  if (
                    r === c.ApplicationDirectoryProfileSections.STORE &&
                    null != _
                  ) {
                    h({ applicationId: i, skuId: _ });
                    break;
                  }
                  g({ applicationId: i, section: r });
                  break;
                }
                d({ applicationId: i });
              }
          }
        },
        u = () => {
          let e = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        d = (e) => {
          let { applicationId: t } = e,
            n = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
        },
        g = (e) => {
          let { applicationId: t, section: n } = e,
            o = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
            state: o,
          });
        },
        h = (e) => {
          let { applicationId: t, skuId: n } = e,
            o = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
            state: o,
          });
        },
        f = function () {
          let {
              query: e,
              categoryId: t,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            o = new URLSearchParams(),
            r = { previousView: (0, a.getCurrentView)() };
          null != e && o.set("q", e),
            null != t && o.set("category_id", t.toString()),
            null != n && o.set("page", n.toString()),
            (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: o.toString(),
              state: r,
            });
        },
        _ = (e) => {
          let { categoryId: t } = e;
          f({ categoryId: null != t ? t : r.MU });
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
          return f;
        },
      });
      var i = n(735250);
      n(470079);
      var o = n(913527),
        r = n.n(o),
        a = n(442837),
        c = n(481060),
        l = n(92114),
        s = n(776568),
        u = n(777861),
        d = n(9156),
        g = n(621600),
        h = n(689938);
      function f(e, t) {
        let n = null == e ? void 0 : e.id,
          { muted: o, muteConfig: f } = (0, a.cj)(
            [d.ZP],
            () => ({
              muted: null != n ? d.ZP.isMuted(n) : void 0,
              muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0,
            }),
            [n],
          ),
          _ = (0, u.U)(f);
        return null == n
          ? null
          : o
            ? (0, i.jsx)(c.MenuItem, {
                id: "unmute-guild",
                label: h.Z.Messages.UNMUTE_SERVER,
                subtext: _,
                action: () =>
                  l.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !1 },
                    g.ZB.Unmuted,
                  ),
              })
            : (0, i.jsx)(c.MenuItem, {
                id: "mute-guild",
                label: h.Z.Messages.MUTE_SERVER,
                action: () =>
                  l.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !0 },
                    g.ZB.Muted,
                  ),
                children: (0, s.k)().map((e) => {
                  let { value: o, label: a } = e;
                  return (0, i.jsx)(
                    c.MenuItem,
                    {
                      id: "".concat(o),
                      label: a,
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
          return _;
        },
        W9: function () {
          return h;
        },
      }),
        n(47120),
        n(789020);
      var i = n(442837),
        o = n(798140),
        r = n(9156),
        a = n(630388),
        c = n(709054),
        l = n(312400),
        s = n(981631),
        u = n(969943),
        d = n(526761),
        g = n(689938);
      function h() {
        return [
          {
            label: g.Z.Messages.MUTE_DURATION_15_MINUTES,
            value: u.Oe.MINUTES_15,
          },
          { label: g.Z.Messages.MUTE_DURATION_1_HOUR, value: u.Oe.HOURS_1 },
          { label: g.Z.Messages.MUTE_DURATION_3_HOURS, value: u.Oe.HOURS_3 },
          { label: g.Z.Messages.MUTE_DURATION_8_HOURS, value: u.Oe.HOURS_8 },
          { label: g.Z.Messages.MUTE_DURATION_24_HOURS, value: u.Oe.HOURS_24 },
          { label: g.Z.Messages.MUTE_DURATION_ALWAYS, value: u.Oe.ALWAYS },
        ];
      }
      let f = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function _(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f;
        return c.default.keys(e).filter((n) => {
          var i, r;
          let c = e[n].message_notifications !== s.bL.NULL,
            l =
              a.yE(
                null !== (i = e[n].flags) && void 0 !== i ? i : 0,
                d.ic.UNREADS_ALL_MESSAGES,
              ) ||
              a.yE(
                null !== (r = e[n].flags) && void 0 !== r ? r : 0,
                d.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!t.ignoreUnreadSetting && l) ||
            (!t.ignoreNotificationSetting && c) ||
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
          return a;
        },
        pq: function () {
          return c;
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
      let a = (e) =>
        i.M1(e, o.ic.UNREADS_ALL_MESSAGES, o.ic.UNREADS_ONLY_MENTIONS);
      function c(e, t) {
        return i.pj(a(e), t);
      }
    },
    905423: function (e, t, n) {
      var i = n(266067),
        o = n(652874),
        r = n(731965),
        a = n(981631);
      function c(e) {
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
      t.Z = (0, o.Z)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: i } = c(t);
          (0, r.j)(() => e({ path: t, guildId: n, channelId: i }));
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = c(t);
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
        c = n(703656);
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
                  this.executeRouteRewrites((0, c.s1)().location, "REPLACE"));
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
              (0, a.r)(e), (this.routeChangeCount = 0);
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
      var a = n(120356),
        c = n.n(a),
        l = n(325767),
        s = n(865244);
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
          ...g
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, l.Z)(g),
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
    361207: function (e, t, n) {
      n.d(t, {
        DW: function () {
          return d;
        },
        Gn: function () {
          return h;
        },
        t3: function () {
          return g;
        },
        w4: function () {
          return s;
        },
      });
      var i = n(525654),
        o = n.n(i),
        r = n(271579),
        a = n(314897),
        c = n(981631);
      let l = "linux";
      function s(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0;
        return ""
          .concat(c.fzT.DESKTOP)
          .concat(t ? "/ptb" : "", "?platform=")
          .concat(e)
          .concat(null != n ? "&format=".concat(n) : "");
      }
      function u() {
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
        return { win: "Windows", osx: "Mac", [l]: "Linux" }[u(e)];
      }
      function g() {
        let e = u();
        return s(e, !1, e === l ? "tar.gz" : null);
      }
      function h(e, t, n) {
        let i = null != n ? n.toString() : null;
        switch (t) {
          case "iOS":
            return (0, r.ZP)(
              null != i
                ? i
                : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746",
              {
                utmSource: e,
                fingerprint: a.default.getFingerprint(),
                attemptId: (0, r.WS)(),
              },
            );
          case "Android":
            return (0, r.ZP)(
              null != i ? i : "https://play.google.com/store/apps/details",
              {
                utmSource: e,
                id: "com.discord",
                fingerprint: a.default.getFingerprint(),
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
        a = n(525654),
        c = n.n(a),
        l = n(579806),
        s = n(292959),
        u = n(246946),
        d = n(626135),
        g = n(358085),
        h = n(557177),
        f = n(998502),
        _ = n(981631);
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
          ("Chrome" === c().name && 47 > parseFloat(c().version)) ||
          ("Firefox" === c().name && 52 > parseFloat(c().version)),
        S = r().throttle(h.GN, 1e3, { leading: !0 });
      function v() {
        f.ZP.flashFrame(!1);
      }
      p &&
        (window.addEventListener("focus", v), f.ZP.on("MAIN_WINDOW_FOCUS", v));
      let R = window.Notification;
      b &&
        (f.ZP.on("NOTIFICATION_CLICK", (e, t) => {
          let n = null[t];
          null != n && (n.onclick(), n.close());
        }),
        f.ZP.send("NOTIFICATIONS_CLEAR"),
        (i = class {
          static requestPermission(e) {
            e();
          }
          close() {
            null != null[this.id] &&
              (delete null[this.id],
              f.ZP.send("NOTIFICATION_CLOSE", this.id),
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
              f.ZP.send("NOTIFICATION_SHOW", {
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
      function E() {
        return null != R && "granted" === R.permission;
      }
      function T(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = arguments.length > 2 ? arguments[2] : void 0;
        e.includes("message") ? S(e, t, void 0, n) : (0, h.GN)(e, t);
      }
      function w(e) {
        return (
          (u.Z.disableNotifications && null == e.overrideStreamerMode) ||
          !E() ||
          (g.isPlatformEmbedded && !f.ZP.shouldDisplayNotifications())
        );
      }
      t.Z = {
        hasPermission: E,
        requestPermission: function (e) {
          null != R &&
            R.requestPermission(() => {
              null != e && e(E());
            });
        },
        showNotification: function (e, t, n, i, o) {
          var a, c, l, u;
          let h;
          if (w(o)) {
            null != o.sound &&
              !1 !== o.playSoundIfDisabled &&
              T(
                o.sound,
                null !== (c = o.volume) && void 0 !== c ? c : 1,
                o.soundpack,
              );
            return;
          }
          null != o.sound &&
            T(
              o.sound,
              null !== (l = o.volume) && void 0 !== l ? l : 1,
              o.soundpack,
            );
          let m =
            null !== (u = null == o ? void 0 : o.tag) && void 0 !== u
              ? u
              : null;
          (0, g.isLinux)() && (n = r().escape(n));
          let b = { icon: e, body: n, tag: m, silent: !0 };
          p && s.Z.taskbarFlash && f.ZP.flashFrame(!0);
          try {
            h = new R(t, b);
          } catch (e) {
            return null;
          }
          return (null === (a = o.onShown) || void 0 === a || a.call(o),
          !o.omitViewTracking && d.default.track(_.rMx.NOTIFICATION_VIEWED, i),
          (h.onclick = () => {
            var e;
            g.isPlatformEmbedded ? f.ZP.focus() : (window.focus(), h.close()),
              !o.omitClickTracking &&
                d.default.track(_.rMx.NOTIFICATION_CLICKED, i),
              null === (e = o.onClick) || void 0 === e || e.call(o);
          }),
          I && setTimeout(() => h.close(), 5e3),
          C)
            ? h
            : {
                close() {
                  var e;
                  null == h ||
                    null === (e = h.onclose) ||
                    void 0 === e ||
                    e.call(h);
                },
              };
        },
        disabled: w,
      };
    },
    60179: function (e, t, n) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    243014: function (e, t, n) {
      e.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    681130: function (e, t, n) {
      e.exports = { button: "button_f23d00" };
    },
    841261: function (e, t, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    147768: function (e, t, n) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    11377: function (e, t, n) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    156725: function (e, t, n) {
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
    207341: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    404934: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    169528: function (e, t, n) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    915938: function (e, t, n) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
    },
    848435: function (e, t, n) {
      e.exports = {
        container: "container_e08e86",
        innerContainer: "innerContainer_e08e86",
        iconWrapper: "iconWrapper_e08e86",
        star: "star_e08e86",
        sparkle: "sparkle_e08e86",
      };
    },
    861277: function (e, t, n) {
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
    526207: function (e, t, n) {
      n.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    742774: function (e, t, n) {
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
    704448: function (e, t, n) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
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
    655580: function (e, t, n) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
    869042: function (e, t, n) {
      n.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
    865244: function (e, t, n) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
    697741: function (e, t, n) {
      n.d(t, {
        $: function () {
          return w;
        },
      });
      let i = {
          ational: "ate",
          tional: "tion",
          enci: "ence",
          anci: "ance",
          izer: "ize",
          bli: "ble",
          alli: "al",
          entli: "ent",
          eli: "e",
          ousli: "ous",
          ization: "ize",
          ation: "ate",
          ator: "ate",
          alism: "al",
          iveness: "ive",
          fulness: "ful",
          ousness: "ous",
          aliti: "al",
          iviti: "ive",
          biliti: "ble",
          logi: "log",
        },
        o = {
          icate: "ic",
          ative: "",
          alize: "al",
          iciti: "ic",
          ical: "ic",
          ful: "",
          ness: "",
        },
        r = "[aeiouy]",
        a = "([^aeiou][^aeiouy]*)",
        c = "(" + r + "[aeiou]*)",
        l = RegExp("^" + a + "?" + c + a),
        s = RegExp("^" + a + "?" + c + a + c + "?$"),
        u = RegExp("^" + a + "?(" + c + a + "){2,}"),
        d = RegExp("^" + a + "?" + r),
        g = RegExp("^" + a + r + "[^aeiouwxy]$"),
        h = /ll$/,
        f = /^(.+?)e$/,
        _ = /^(.+?)y$/,
        m = /^(.+?(s|t))(ion)$/,
        p = /^(.+?)(ed|ing)$/,
        b = /(at|bl|iz)$/,
        C = /^(.+?)eed$/,
        I = /^.+?[^s]s$/,
        S = /^.+?(ss|i)es$/,
        v = /([^aeiouylsz])\1$/,
        R =
          /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
        E = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
        T =
          /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
      function w(e) {
        let t,
          n = String(e).toLowerCase();
        if (n.length < 3) return n;
        let r = !1;
        return (
          121 === n.codePointAt(0) && ((r = !0), (n = "Y" + n.slice(1))),
          S.test(n) ? (n = n.slice(0, -2)) : I.test(n) && (n = n.slice(0, -1)),
          (t = C.exec(n))
            ? l.test(t[1]) && (n = n.slice(0, -1))
            : (t = p.exec(n)) &&
              d.test(t[1]) &&
              ((n = t[1]),
              b.test(n)
                ? (n += "e")
                : v.test(n)
                  ? (n = n.slice(0, -1))
                  : g.test(n) && (n += "e")),
          (t = _.exec(n)) && d.test(t[1]) && (n = t[1] + "i"),
          (t = R.exec(n)) && l.test(t[1]) && (n = t[1] + i[t[2]]),
          (t = E.exec(n)) && l.test(t[1]) && (n = t[1] + o[t[2]]),
          (t = T.exec(n))
            ? u.test(t[1]) && (n = t[1])
            : (t = m.exec(n)) && u.test(t[1]) && (n = t[1]),
          (t = f.exec(n)) &&
            (u.test(t[1]) || (s.test(t[1]) && !g.test(t[1]))) &&
            (n = t[1]),
          h.test(n) && u.test(n) && (n = n.slice(0, -1)),
          r && (n = "y" + n.slice(1)),
          n
        );
      }
    },
  },
]);
//# sourceMappingURL=fdfd527219959a43694e.js.map
