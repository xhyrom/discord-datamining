"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13966"],
  {
    34674: function (e, t, n) {
      n.d(t, {
        $_: function () {
          return h;
        },
        KQ: function () {
          return p;
        },
        MU: function () {
          return f;
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
        u = n(768581),
        s = n(981631),
        d = n(388032);
      let f = 0,
        { API_ENDPOINT: _, CDN_HOST: g } = window.GLOBAL_ENV;
      function b(e) {
        return e.id === f;
      }
      function p() {
        return { id: f, name: d.intl.string(d.t.E407b2) };
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
      function h(e) {
        let { itemId: t, hash: n } = e,
          i = new URLSearchParams({
            size: (0, c.oO)(
              parseFloat(o.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, c.x_)(),
            ).toString(),
          }).toString(),
          r = u.$k ? "webp" : "png";
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
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, r),
                "?",
              )
              .concat(i);
      }
      function C() {
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
      function T(e) {
        switch (e.type) {
          case a.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: n };
          case a.ee.YOUTUBE:
            let i = I(e.url);
            if (null != i)
              return { type: s.s9s.YOUTUBE_VIDEO, youtubeVideoId: i };
        }
        return console.warn("Unsupported carousel item", e), null;
      }
    },
    147890: function (e, t, n) {
      n.r(t),
        n.d(t, {
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
            return f;
          },
          goToApplicationStoreSku: function () {
            return _;
          },
          goToCategory: function () {
            return b;
          },
          replaceAppDirectoryURLWith: function () {
            return p;
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
      let u = (e) => {
          let {
              view: t = a.ApplicationDirectoryViews.HOME,
              guildId: n,
              applicationId: i,
              applicationSection: r,
              entrypoint: u,
              skuId: b,
            } = e,
            p = { ...u, pathname: window.location.pathname };
          switch (
            (o.default.track(l.rMx.APP_DIRECTORY_OPENED, {
              source: null == p ? void 0 : p.name,
            }),
            (0, a.resetApplicationDirectoryHistory)(),
            (0, a.setEntrypoint)(p),
            null != n && (0, a.setGuildId)(n),
            t === a.ApplicationDirectoryViews.APPLICATION &&
              null == i &&
              (t = a.ApplicationDirectoryViews.HOME),
            t)
          ) {
            case a.ApplicationDirectoryViews.HOME:
              s();
              break;
            case a.ApplicationDirectoryViews.SEARCH:
              g();
              break;
            case a.ApplicationDirectoryViews.APPLICATION:
              if (null != i) {
                if (null != r) {
                  if (
                    r === c.ApplicationDirectoryProfileSections.STORE &&
                    null != b
                  ) {
                    _({ applicationId: i, skuId: b });
                    break;
                  }
                  f({ applicationId: i, section: r });
                  break;
                }
                d({ applicationId: i });
              }
          }
        },
        s = () => {
          let e = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        d = (e) => {
          let { applicationId: t } = e,
            n = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
        },
        f = (e) => {
          let { applicationId: t, section: n } = e,
            o = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
            state: o,
          });
        },
        _ = (e) => {
          let { applicationId: t, skuId: n } = e,
            o = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
            state: o,
          });
        },
        g = function () {
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
        b = (e) => {
          let { categoryId: t } = e;
          g({ categoryId: null != t ? t : r.MU });
        },
        p = (e) => {
          let {
            location: { state: t },
          } = (0, i.s1)();
          (0, i.dL)(e, t);
        };
    },
    776568: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return I;
        },
        k: function () {
          return h;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var o = n(913527),
        r = n.n(o),
        a = n(442837),
        c = n(481060),
        l = n(211739),
        u = n(87051),
        s = n(496729),
        d = n(777861),
        f = n(9156),
        _ = n(621600),
        g = n(933557),
        b = n(981631),
        p = n(969943),
        m = n(388032);
      let h = () => [
          { value: p.Oe.MINUTES_15, label: m.intl.string(m.t["8ot6go"]) },
          { value: p.Oe.HOURS_1, label: m.intl.string(m.t.UMWBZm) },
          { value: p.Oe.HOURS_3, label: m.intl.string(m.t.QmYWtr) },
          { value: p.Oe.HOURS_8, label: m.intl.string(m.t.EpAXPD) },
          { value: p.Oe.HOURS_24, label: m.intl.string(m.t["755t4u"]) },
          { value: p.Oe.ALWAYS, label: m.intl.string(m.t.r3LawM) },
        ],
        C = (e) => {
          let t = e > 0 ? r()().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: t },
          };
        };
      function I(e, t) {
        let [n, o] = (0, a.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(e.guild_id, e.id),
            f.ZP.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          r = (0, d.U)(o),
          p = (0, g.ZP)(e, !0);
        function I(t) {
          t && e.type === b.d4z.GUILD_CATEGORY && (0, l.c4)(e.id),
            u.Z.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: t },
              _.UE.muted(t),
            );
        }
        let T = m.intl.string(m.t.tbeRRE),
          R = m.intl.string(m.t.OYefmZ);
        switch (e.type) {
          case b.d4z.GUILD_CATEGORY:
            (T = m.intl.string(m.t.pNMCg4)), (R = m.intl.string(m.t.olaBeH));
            break;
          case b.d4z.GROUP_DM:
            (T = m.intl.string(m.t.LO3kaG)), (R = m.intl.string(m.t["s5/5fn"]));
            break;
          case b.d4z.DM:
            (T = m.intl.format(m.t.byjuJi, { name: p })),
              (R = m.intl.format(m.t["eC+9rq"], { name: p }));
            break;
          default:
            (T = m.intl.string(m.t.tbeRRE)), (R = m.intl.string(m.t.OYefmZ));
        }
        return n
          ? (0, i.jsx)(c.MenuItem, {
              id: "unmute-channel",
              label: R,
              subtext: r,
              action: () => I(!1),
            })
          : (0, i.jsx)(c.MenuItem, {
              id: "mute-channel",
              label: T,
              action: () => {
                I(!0),
                  (0, s.s)({
                    channelId: e.id,
                    location: "channel_context_menu",
                  });
              },
              children: h().map((n) => {
                let { value: o, label: r } = n;
                return (0, i.jsx)(
                  c.MenuItem,
                  {
                    id: "".concat(o),
                    label: r,
                    action: () =>
                      (function (n) {
                        e.type === b.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        let i = C(n);
                        u.Z.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          i,
                          _.ZB.Muted,
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
    192918: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(47120);
      var i = n(192379),
        o = n(442837),
        r = n(594174),
        a = n(823379);
      let c = [];
      function l(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
          n = (0, o.Wu)(
            [r.default],
            () => {
              let t = e.participants
                  .map((e) => r.default.getUser(e))
                  .filter(a.lm),
                n = t.find((t) => t.id === e.author_id),
                i = t.filter((t) => t.id !== e.author_id);
              return null == n ? c : [...i, n];
            },
            [e],
          ),
          l = i.useMemo(() => n.slice(-t), [t, n]),
          u = l[l.length - 1],
          s = l[l.length - 2],
          d = Math.max(n.length - 1, 0);
        return {
          orderedParticipants: n,
          displayParticipants: l,
          participant1: u,
          participant2: s,
          numOtherParticipants: d,
        };
      }
    },
    858822: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(913527),
        r = n.n(o),
        a = n(442837),
        c = n(481060),
        l = n(87051),
        u = n(776568),
        s = n(777861),
        d = n(9156),
        f = n(621600),
        _ = n(388032);
      function g(e, t) {
        let n = null == e ? void 0 : e.id,
          { muted: o, muteConfig: g } = (0, a.cj)(
            [d.ZP],
            () => ({
              muted: null != n ? d.ZP.isMuted(n) : void 0,
              muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0,
            }),
            [n],
          ),
          b = (0, s.U)(g);
        return null == n
          ? null
          : o
            ? (0, i.jsx)(c.MenuItem, {
                id: "unmute-guild",
                label: _.intl.string(_.t.De0BTE),
                subtext: b,
                action: () =>
                  l.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !1 },
                    f.ZB.Unmuted,
                  ),
              })
            : (0, i.jsx)(c.MenuItem, {
                id: "mute-guild",
                label: _.intl.string(_.t.vRzp7O),
                action: () =>
                  l.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !0 },
                    f.ZB.Muted,
                  ),
                children: (0, u.k)().map((e) => {
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
                            f.ZB.Muted,
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
          return p;
        },
        OD: function () {
          return b;
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
        a = n(630388),
        c = n(709054),
        l = n(312400),
        u = n(981631),
        s = n(969943),
        d = n(526761),
        f = n(388032);
      function _() {
        return [
          { label: f.intl.string(f.t["8ot6go"]), value: s.Oe.MINUTES_15 },
          { label: f.intl.string(f.t.UMWBZm), value: s.Oe.HOURS_1 },
          { label: f.intl.string(f.t.QmYWtr), value: s.Oe.HOURS_3 },
          { label: f.intl.string(f.t.EpAXPD), value: s.Oe.HOURS_8 },
          { label: f.intl.string(f.t["755t4u"]), value: s.Oe.HOURS_24 },
          { label: f.intl.string(f.t.r3LawM), value: s.Oe.ALWAYS },
        ];
      }
      let g = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function b(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
        return c.default.keys(e).filter((n) => {
          var i, r;
          let c = e[n].message_notifications !== u.bL.NULL,
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
      function p(e) {
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
        o = n(903797),
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
      t.Z = (0, o.Z)((e) => ({
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
          u(this, "unlistenHistory", void 0),
            u(this, "unlistenKeyboardChange", void 0),
            u(this, "rewrites", new Set()),
            u(this, "listeners", new Set()),
            u(this, "routeChangeCount", 0),
            u(this, "timer", -1),
            u(this, "connected", !1),
            u(this, "handleConnectionChange", () => {
              let e = o.Z.isConnected(),
                t = e && !this.connected;
              (this.connected = e),
                t &&
                  ((this.routeChangeCount = 0),
                  this.executeRouteRewrites((0, c.s1)().location, "REPLACE"));
            }),
            u(this, "handleRouteChange", (e, t) => {
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
            u(this, "handleKeybindRouteChange", (e) => {
              let { path: t } = e;
              null != t
                ? (clearTimeout(this.timer),
                  (this.timer = setTimeout(this.flushRoute, 200)))
                : null == t && clearTimeout(this.timer);
            }),
            u(this, "flushRoute", () => {
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
    305587: function (e, t, n) {
      n.d(t, {
        Xs: function () {
          return o;
        },
      });
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2024-09_dm_mute_feedback",
        label: "DM Mute Feedback Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable DM Mute Feedback Survey",
            config: { enabled: !0 },
          },
        ],
      });
      function o(e) {
        let { enabled: t } = i.getCurrentConfig(
          { location: e },
          { autoTrackExposure: !0 },
        );
        return t;
      }
    },
    496729: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
        s: function () {
          return s;
        },
      });
      var i = n(200651),
        o = n(704215),
        r = n(481060),
        a = n(570140),
        c = n(605236),
        l = n(592125),
        u = n(305587);
      function s(e) {
        let { channelId: t, location: n } = e,
          i = l.Z.getChannel(t),
          r = (0, c.un)(o.z.USER_DM_MUTE_FEEDBACK);
        if (null != i && !!i.isDM() && !r)
          (0, u.Xs)(n) &&
            a.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: i });
      }
      function d() {
        (0, r.openModalLazy)(async () => {
          let { default: e } = await n.e("87995").then(n.bind(n, 180970));
          return (t) => (0, i.jsx)(e, { ...t });
        });
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
        u = n(865244);
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
          foreground: a,
          className: s,
          title: d,
          ...f
        } = e;
        return (0, r.jsxs)("svg", {
          ...(0, l.Z)(f),
          width: t,
          height: n,
          className: c()(
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
              className: a,
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
        u = n(292959),
        s = n(246946),
        d = n(626135),
        f = n(358085),
        _ = n(557177),
        g = n(998502),
        b = n(981631);
      function p(e, t, n) {
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
      let m = f.isPlatformEmbedded && (0, f.isWindows)(),
        h = m && 10 > parseFloat(l.Z.os.release),
        C = !0;
      if (m && !h) {
        let [e, , t] = l.Z.os.release.split(".");
        C = parseInt(e) > 10 || parseInt(t) >= 15063;
      }
      let I =
          (m && C) ||
          ("Chrome" === c().name && 47 > parseFloat(c().version)) ||
          ("Firefox" === c().name && 52 > parseFloat(c().version)),
        T = r().throttle(_.GN, 1e3, { leading: !0 });
      function R() {
        g.ZP.flashFrame(!1);
      }
      m &&
        (window.addEventListener("focus", R), g.ZP.on("MAIN_WINDOW_FOCUS", R));
      let w = window.Notification;
      h &&
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
            p(this, "id", w._id++),
              p(this, "title", void 0),
              p(this, "body", void 0),
              p(this, "icon", void 0),
              p(this, "onshow", function () {}),
              p(this, "onclick", function () {}),
              p(this, "onclose", function () {}),
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
        p(i, "permission", "granted"),
        p(i, "_id", 0),
        (w = i));
      function S() {
        return null != w && "granted" === w.permission;
      }
      function v(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = arguments.length > 2 ? arguments[2] : void 0;
        e.includes("message") ? T(e, t, void 0, n) : (0, _.GN)(e, t);
      }
      function E(e) {
        return (
          (s.Z.disableNotifications && null == e.overrideStreamerMode) ||
          !S() ||
          (f.isPlatformEmbedded && !g.ZP.shouldDisplayNotifications())
        );
      }
      t.Z = {
        hasPermission: S,
        requestPermission: function (e) {
          null != w &&
            w.requestPermission(() => {
              null != e && e(S());
            });
        },
        showNotification: function (e, t, n, i, o) {
          var a, c, l, s;
          let _;
          if (E(o)) {
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
          let p =
            null !== (s = null == o ? void 0 : o.tag) && void 0 !== s
              ? s
              : null;
          (0, f.isLinux)() && (n = r().escape(n));
          let h = { icon: e, body: n, tag: p, silent: !0 };
          m && u.Z.taskbarFlash && g.ZP.flashFrame(!0);
          try {
            _ = new w(t, h);
          } catch (e) {
            return null;
          }
          return (null === (a = o.onShown) || void 0 === a || a.call(o),
          !o.omitViewTracking && d.default.track(b.rMx.NOTIFICATION_VIEWED, i),
          (_.onclick = () => {
            var e;
            f.isPlatformEmbedded ? g.ZP.focus() : (window.focus(), _.close()),
              !o.omitClickTracking &&
                d.default.track(b.rMx.NOTIFICATION_CLICKED, i),
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
    456692: function (e, t, n) {
      e.exports = {
        container: "container_dc71f0",
        imageContainer: "imageContainer_dc71f0",
        image: "image_dc71f0",
        backgroundImage: "backgroundImage_dc71f0",
        backgroundImageFilter: "backgroundImageFilter_dc71f0",
        loader: "loader_dc71f0",
      };
    },
    404934: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    813778: function (e, t, n) {
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
    188662: function (e, t, n) {
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
    772103: function (e, t, n) {
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
    405013: function (e, t, n) {
      e.exports = { badge: "badge_a24a11", badgeIcon: "badgeIcon_a24a11" };
    },
    169528: function (e, t, n) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    873198: function (e, t, n) {
      e.exports = { emojiIcon: "emojiIcon_e6e8e8" };
    },
    681027: function (e, t, n) {
      e.exports = { icon: "icon_acc5ff" };
    },
    915938: function (e, t, n) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
    },
    391317: function (e, t, n) {
      e.exports = { container: "container_f8690a" };
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
    427542: function (e, t, n) {
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
    679537: function (e, t, n) {
      e.exports = { container: "container_cbadbc" };
    },
    489666: function (e, t, n) {
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
    860553: function (e, t, n) {
      e.exports = {
        countDown: "countDown_d0e7ba",
        sparkleStar1: "sparkleStar1_d0e7ba",
        sparkleStar2: "sparkleStar2_d0e7ba",
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
    908860: function (e, t, n) {
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
    869042: function (e, t, n) {
      n.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
    579861: function (e, t, n) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
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
  },
]);
//# sourceMappingURL=77d9620e50ac8eaf185d.js.map
