"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81878"],
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
          return _;
        },
        RF: function () {
          return T;
        },
        m0: function () {
          return g;
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
        a = n(481060),
        r = n(911969),
        c = n(134432),
        l = n(703656),
        u = n(768581),
        s = n(981631),
        d = n(388032);
      let _ = 0,
        { API_ENDPOINT: f, CDN_HOST: b } = window.GLOBAL_ENV;
      function g(e) {
        return e.id === _;
      }
      function p() {
        return { id: _, name: d.intl.string(d.t.E407b2) };
      }
      function m(e) {
        switch (e.id) {
          case 0:
            return a.GlobeEarthIcon;
          case 4:
            return a.TvIcon;
          case 5:
            return a.AnalyticsIcon;
          case 6:
            return a.GameControllerIcon;
          case 8:
            break;
          case 9:
            return a.FriendsIcon;
          case 10:
            return a.WrenchIcon;
        }
        return a.AsteriskIcon;
      }
      function h(e) {
        let { itemId: t, hash: n } = e,
          i = new URLSearchParams({
            size: (0, c.oO)(
              parseFloat(o.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, c.x_)(),
            ).toString(),
          }).toString(),
          a = u.$k ? "webp" : "png";
        return null != b
          ? ""
              .concat(location.protocol, "//")
              .concat(b, "/app-assets/application-directory/collection-items/")
              .concat(t, "/")
              .concat(n, ".")
              .concat(a, "?")
              .concat(i)
          : ""
              .concat(location.protocol)
              .concat(f)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, a),
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
          case r.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: n };
          case r.ee.YOUTUBE:
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
            return b;
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
            return g;
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
        a = n(34674),
        r = n(132871),
        c = n(272242),
        l = n(981631);
      let u = (e) => {
          let {
              view: t = r.ApplicationDirectoryViews.HOME,
              guildId: n,
              applicationId: i,
              applicationSection: a,
              entrypoint: u,
              skuId: g,
            } = e,
            p = { ...u, pathname: window.location.pathname };
          switch (
            (o.default.track(l.rMx.APP_DIRECTORY_OPENED, {
              source: null == p ? void 0 : p.name,
            }),
            (0, r.resetApplicationDirectoryHistory)(),
            (0, r.setEntrypoint)(p),
            null != n && (0, r.setGuildId)(n),
            t === r.ApplicationDirectoryViews.APPLICATION &&
              null == i &&
              (t = r.ApplicationDirectoryViews.HOME),
            t)
          ) {
            case r.ApplicationDirectoryViews.HOME:
              s();
              break;
            case r.ApplicationDirectoryViews.SEARCH:
              b();
              break;
            case r.ApplicationDirectoryViews.APPLICATION:
              if (null != i) {
                if (null != a) {
                  if (
                    a === c.ApplicationDirectoryProfileSections.STORE &&
                    null != g
                  ) {
                    f({ applicationId: i, skuId: g });
                    break;
                  }
                  _({ applicationId: i, section: a });
                  break;
                }
                d({ applicationId: i });
              }
          }
        },
        s = () => {
          let e = { previousView: (0, r.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        d = (e) => {
          let { applicationId: t } = e,
            n = { previousView: (0, r.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
        },
        _ = (e) => {
          let { applicationId: t, section: n } = e,
            o = { previousView: (0, r.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
            state: o,
          });
        },
        f = (e) => {
          let { applicationId: t, skuId: n } = e,
            o = { previousView: (0, r.getCurrentView)() };
          (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
            state: o,
          });
        },
        b = function () {
          let {
              query: e,
              categoryId: t,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            o = new URLSearchParams(),
            a = { previousView: (0, r.getCurrentView)() };
          null != e && o.set("q", e),
            null != t && o.set("category_id", t.toString()),
            null != n && o.set("page", n.toString()),
            (0, i.uL)(l.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: o.toString(),
              state: a,
            });
        },
        g = (e) => {
          let { categoryId: t } = e;
          b({ categoryId: null != t ? t : a.MU });
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
        a = n.n(o),
        r = n(442837),
        c = n(481060),
        l = n(211739),
        u = n(87051),
        s = n(496729),
        d = n(777861),
        _ = n(9156),
        f = n(621600),
        b = n(933557),
        g = n(981631),
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
          let t = e > 0 ? a()().add(e, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: e, end_time: t },
          };
        };
      function I(e, t) {
        let [n, o] = (0, r.Wu)([_.ZP], () => [
            _.ZP.isChannelMuted(e.guild_id, e.id),
            _.ZP.getChannelMuteConfig(e.guild_id, e.id),
          ]),
          a = (0, d.U)(o),
          p = (0, b.ZP)(e, !0);
        function I(t) {
          t && e.type === g.d4z.GUILD_CATEGORY && (0, l.c4)(e.id),
            u.Z.updateChannelOverrideSettings(
              e.guild_id,
              e.id,
              { muted: t },
              f.UE.muted(t),
            );
        }
        let T = m.intl.string(m.t.tbeRRE),
          A = m.intl.string(m.t.OYefmZ);
        switch (e.type) {
          case g.d4z.GUILD_CATEGORY:
            (T = m.intl.string(m.t.pNMCg4)), (A = m.intl.string(m.t.olaBeH));
            break;
          case g.d4z.GROUP_DM:
            (T = m.intl.string(m.t.LO3kaG)), (A = m.intl.string(m.t["s5/5fn"]));
            break;
          case g.d4z.DM:
            (T = m.intl.format(m.t.byjuJi, { name: p })),
              (A = m.intl.format(m.t["eC+9rq"], { name: p }));
            break;
          default:
            (T = m.intl.string(m.t.tbeRRE)), (A = m.intl.string(m.t.OYefmZ));
        }
        return n
          ? (0, i.jsx)(c.MenuItem, {
              id: "unmute-channel",
              label: A,
              subtext: a,
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
                let { value: o, label: a } = n;
                return (0, i.jsx)(
                  c.MenuItem,
                  {
                    id: "".concat(o),
                    label: a,
                    action: () =>
                      (function (n) {
                        e.type === g.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                        let i = C(n);
                        u.Z.updateChannelOverrideSettings(
                          e.guild_id,
                          e.id,
                          i,
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
    192918: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(47120);
      var i = n(192379),
        o = n(442837),
        a = n(594174),
        r = n(823379);
      let c = [];
      function l(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
          n = (0, o.Wu)(
            [a.default],
            () => {
              let t = e.participants
                  .map((e) => a.default.getUser(e))
                  .filter(r.lm),
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
          return b;
        },
      });
      var i = n(200651);
      n(192379);
      var o = n(913527),
        a = n.n(o),
        r = n(442837),
        c = n(481060),
        l = n(87051),
        u = n(776568),
        s = n(777861),
        d = n(9156),
        _ = n(621600),
        f = n(388032);
      function b(e, t) {
        let n = null == e ? void 0 : e.id,
          { muted: o, muteConfig: b } = (0, r.cj)(
            [d.ZP],
            () => ({
              muted: null != n ? d.ZP.isMuted(n) : void 0,
              muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0,
            }),
            [n],
          ),
          g = (0, s.U)(b);
        return null == n
          ? null
          : o
            ? (0, i.jsx)(c.MenuItem, {
                id: "unmute-guild",
                label: f.intl.string(f.t.De0BTE),
                subtext: g,
                action: () =>
                  l.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !1 },
                    _.ZB.Unmuted,
                  ),
              })
            : (0, i.jsx)(c.MenuItem, {
                id: "mute-guild",
                label: f.intl.string(f.t.vRzp7O),
                action: () =>
                  l.Z.updateGuildNotificationSettings(
                    n,
                    { muted: !0 },
                    _.ZB.Muted,
                  ),
                children: (0, u.k)().map((e) => {
                  let { value: o, label: r } = e;
                  return (0, i.jsx)(
                    c.MenuItem,
                    {
                      id: "".concat(o),
                      label: r,
                      action: () =>
                        (function (e) {
                          if (null == n) return;
                          let i =
                            e > 0 ? a()().add(e, "second").toISOString() : null;
                          l.Z.updateGuildNotificationSettings(
                            n,
                            {
                              muted: !0,
                              mute_config: {
                                selected_time_window: e,
                                end_time: i,
                              },
                            },
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
    423589: function (e, t, n) {
      n.d(t, {
        Mn: function () {
          return p;
        },
        OD: function () {
          return g;
        },
        W9: function () {
          return f;
        },
      }),
        n(47120),
        n(789020);
      var i = n(442837),
        o = n(798140),
        a = n(9156),
        r = n(630388),
        c = n(709054),
        l = n(312400),
        u = n(981631),
        s = n(969943),
        d = n(526761),
        _ = n(388032);
      function f() {
        return [
          { label: _.intl.string(_.t["8ot6go"]), value: s.Oe.MINUTES_15 },
          { label: _.intl.string(_.t.UMWBZm), value: s.Oe.HOURS_1 },
          { label: _.intl.string(_.t.QmYWtr), value: s.Oe.HOURS_3 },
          { label: _.intl.string(_.t.EpAXPD), value: s.Oe.HOURS_8 },
          { label: _.intl.string(_.t["755t4u"]), value: s.Oe.HOURS_24 },
          { label: _.intl.string(_.t.r3LawM), value: s.Oe.ALWAYS },
        ];
      }
      let b = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function g(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
        return c.default.keys(e).filter((n) => {
          var i, a;
          let c = e[n].message_notifications !== u.bL.NULL,
            l =
              r.yE(
                null !== (i = e[n].flags) && void 0 !== i ? i : 0,
                d.ic.UNREADS_ALL_MESSAGES,
              ) ||
              r.yE(
                null !== (a = e[n].flags) && void 0 !== a ? a : 0,
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
        let t = (0, i.e7)([a.ZP], () => a.ZP.useNewNotifications);
        return (
          l.xT.useExperiment({ location: e }, { autoTrackExposure: !1 })
            .enabled && t
        );
      }
    },
    113449: function (e, t, n) {
      n.d(t, {
        Q4: function () {
          return a;
        },
        YF: function () {
          return r;
        },
        pq: function () {
          return c;
        },
      });
      var i = n(630388),
        o = n(526761);
      function a(e, t) {
        var n;
        return i.pj(
          ((n = e),
          i.M1(n, o.vc.UNREADS_ALL_MESSAGES, o.vc.UNREADS_ONLY_MENTIONS)),
          t,
        );
      }
      let r = (e) =>
        i.M1(e, o.ic.UNREADS_ALL_MESSAGES, o.ic.UNREADS_ONLY_MENTIONS);
      function c(e, t) {
        return i.pj(r(e), t);
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
        a = n(731965),
        r = n(893607),
        c = n(981631);
      function l(e) {
        let t = (0, i.LX)(null != e ? e : "", {
          path: c.Z5c.CHANNEL(
            r.Hw.guildId(),
            r.Hw.channelId({ optional: !0 }),
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
          path: c.Z5c.GUILD_BOOSTING_MARKETING(r.Hw.guildId()),
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
          (0, a.j)(() => e({ path: t, guildId: n, channelId: i }));
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = l(t);
          (0, a.j)(() =>
            e({ path: null, guildId: n, channelId: i, basePath: t }),
          );
        },
      }));
    },
    304445: function (e, t, n) {
      n(47120), n(411104);
      var i = n(572299),
        o = n(38618),
        a = n(905423),
        r = n(622143),
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
          a.Z.getState().resetPath(e),
            (this.unlistenKeyboardChange = a.Z.subscribe(
              this.handleKeybindRouteChange,
            )),
            o.Z.addChangeListener(this.handleConnectionChange);
        }
        executeRouteRewrites(e, t) {
          if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
              let o = (0, c.s1)().location.pathname,
                a = n(e, t);
              if (null != a)
                return (
                  (0, i.n)({
                    message:
                      "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                    data: { replacePath: a.path, previousPath: o },
                  }),
                  (0, c.dL)(a.path, a.state),
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
              if (!(0, r.r)(e)) {
                (0, c.dL)(l.Z5c.ME);
                return;
              }
              let n = a.Z.getState();
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
              let e = a.Z.getState();
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
          return a;
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
      function a(e) {
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
        a = n(481060),
        r = n(570140),
        c = n(605236),
        l = n(592125),
        u = n(305587);
      function s(e) {
        let { channelId: t, location: n } = e,
          i = l.Z.getChannel(t),
          a = (0, c.un)(o.z.USER_DM_MUTE_FEEDBACK);
        if (null != i && !!i.isDM() && !a)
          (0, u.Xs)(n) &&
            r.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: i });
      }
      function d() {
        (0, a.openModalLazy)(async () => {
          let { default: e } = await n.e("87995").then(n.bind(n, 180970));
          return (t) => (0, i.jsx)(e, { ...t });
        });
      }
    },
    671533: function (e, t, n) {
      n(411104);
      var i,
        o,
        a = n(200651);
      n(192379);
      var r = n(120356),
        c = n.n(r),
        l = n(325767),
        u = n(785798);
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
          foreground: r,
          className: s,
          title: d,
          ..._
        } = e;
        return (0, a.jsxs)("svg", {
          ...(0, l.Z)(_),
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
            null != d ? (0, a.jsx)("title", { children: d }) : null,
            (0, a.jsx)("polygon", {
              className: r,
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
        a = n.n(o),
        r = n(525654),
        c = n.n(r),
        l = n(579806),
        u = n(292959),
        s = n(246946),
        d = n(626135),
        _ = n(358085),
        f = n(557177),
        b = n(998502),
        g = n(981631);
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
      let m = _.isPlatformEmbedded && (0, _.isWindows)(),
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
        T = a().throttle(f.GN, 1e3, { leading: !0 });
      function A() {
        b.ZP.flashFrame(!1);
      }
      m &&
        (window.addEventListener("focus", A), b.ZP.on("MAIN_WINDOW_FOCUS", A));
      let v = window.Notification;
      h &&
        (b.ZP.on("NOTIFICATION_CLICK", (e, t) => {
          let n = null[t];
          null != n && (n.onclick(), n.close());
        }),
        b.ZP.send("NOTIFICATIONS_CLEAR"),
        (i = class {
          static requestPermission(e) {
            e();
          }
          close() {
            null != null[this.id] &&
              (delete null[this.id],
              b.ZP.send("NOTIFICATION_CLOSE", this.id),
              this.onclose());
          }
          constructor(e, { body: t, icon: n }) {
            p(this, "id", v._id++),
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
              b.ZP.send("NOTIFICATION_SHOW", {
                id: this.id,
                title: this.title,
                body: this.body,
                icon: this.icon,
              });
          }
        }),
        p(i, "permission", "granted"),
        p(i, "_id", 0),
        (v = i));
      function R() {
        return null != v && "granted" === v.permission;
      }
      function S(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = arguments.length > 2 ? arguments[2] : void 0;
        e.includes("message") ? T(e, t, void 0, n) : (0, f.GN)(e, t);
      }
      function w(e) {
        return (
          (s.Z.disableNotifications && null == e.overrideStreamerMode) ||
          !R() ||
          (_.isPlatformEmbedded && !b.ZP.shouldDisplayNotifications())
        );
      }
      t.Z = {
        hasPermission: R,
        requestPermission: function (e) {
          null != v &&
            v.requestPermission(() => {
              null != e && e(R());
            });
        },
        showNotification: function (e, t, n, i, o) {
          var r, c, l, s;
          let f;
          if (w(o)) {
            null != o.sound &&
              !1 !== o.playSoundIfDisabled &&
              S(
                o.sound,
                null !== (c = o.volume) && void 0 !== c ? c : 1,
                o.soundpack,
              );
            return;
          }
          null != o.sound &&
            S(
              o.sound,
              null !== (l = o.volume) && void 0 !== l ? l : 1,
              o.soundpack,
            );
          let p =
            null !== (s = null == o ? void 0 : o.tag) && void 0 !== s
              ? s
              : null;
          (0, _.isLinux)() && (n = a().escape(n));
          let h = { icon: e, body: n, tag: p, silent: !0 };
          m && u.Z.taskbarFlash && b.ZP.flashFrame(!0);
          try {
            f = new v(t, h);
          } catch (e) {
            return null;
          }
          return (null === (r = o.onShown) || void 0 === r || r.call(o),
          !o.omitViewTracking && d.default.track(g.rMx.NOTIFICATION_VIEWED, i),
          (f.onclick = () => {
            var e;
            _.isPlatformEmbedded ? b.ZP.focus() : (window.focus(), f.close()),
              !o.omitClickTracking &&
                d.default.track(g.rMx.NOTIFICATION_CLICKED, i),
              null === (e = o.onClick) || void 0 === e || e.call(o);
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
        disabled: w,
      };
    },
    343968: function (e, t, n) {
      e.exports = {
        button: "button_a467ac",
        default: "default_a467ac",
        filled: "filled_a467ac",
      };
    },
    213914: function (e, t, n) {
      e.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    137900: function (e, t, n) {
      e.exports = { button: "button_f23d00" };
    },
    718922: function (e, t, n) {
      e.exports = {
        button: "button_a79c58",
        open: "open_a79c58",
        withHighlight: "withHighlight_a79c58",
      };
    },
    544751: function (e, t, n) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    333265: function (e, t, n) {
      e.exports = {
        tabBarItemContainer: "tabBarItemContainer_e7c031",
        searchFilterCount: "searchFilterCount_e7c031",
        searchBar: "searchBar_e7c031",
      };
    },
    765063: function (e, t, n) {
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
    714909: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    154328: function (e, t, n) {
      e.exports = {
        container: "container_dc71f0",
        imageContainer: "imageContainer_dc71f0",
        image: "image_dc71f0",
        backgroundImage: "backgroundImage_dc71f0",
        backgroundImageFilter: "backgroundImageFilter_dc71f0",
        loader: "loader_dc71f0",
      };
    },
    928219: function (e, t, n) {
      e.exports = {
        content: "content_aa99af",
        contentNoArt: "contentNoArt_aa99af",
        contentPremium: "contentPremium_aa99af",
        artAbsolute: "artAbsolute_aa99af art_aa99af",
        artInline: "artInline_aa99af art_aa99af",
        body: "body_aa99af",
        header: "header_aa99af",
        headerWithPremiumIcon: "headerWithPremiumIcon_aa99af header_aa99af",
        premiumIcon: "premiumIcon_aa99af",
        button: "button_aa99af",
        buttonContainerHorizontal: "buttonContainerHorizontal_aa99af",
        buttonContainerVertical: "buttonContainerVertical_aa99af",
        pointer: "pointer_aa99af",
        bottomPointer: "bottomPointer_aa99af",
        centerLeftPointer: "centerLeftPointer_aa99af",
        topLeftPointer: "topLeftPointer_aa99af",
        gifTag: "gifTag_aa99af",
        earlyAccessText: "earlyAccessText_aa99af",
        earlyAccessIcon: "earlyAccessIcon_aa99af",
        earlyAccessBadgeContainer: "earlyAccessBadgeContainer_aa99af",
      };
    },
    7804: function (e, t, n) {
      e.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
    889160: function (e, t, n) {
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
    407015: function (e, t, n) {
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
    783210: function (e, t, n) {
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
    503880: function (e, t, n) {
      e.exports = { badge: "badge_a24a11", badgeIcon: "badgeIcon_a24a11" };
    },
    322683: function (e, t, n) {
      e.exports = { container: "container_e39b68", body: "body_e39b68" };
    },
    31322: function (e, t, n) {
      e.exports = { emojiIcon: "emojiIcon_e6e8e8" };
    },
    695087: function (e, t, n) {
      e.exports = { icon: "icon_acc5ff" };
    },
    58700: function (e, t, n) {
      e.exports = {
        yellowMessageBlock: "yellowMessageBlock_b74455 messageBlock_b74455",
        messageBlockIcon: "messageBlockIcon_b74455",
        redMessageBlock: "redMessageBlock_b74455 messageBlock_b74455",
        brownMessageBlock: "brownMessageBlock_b74455 messageBlock_b74455",
      };
    },
    25674: function (e, t, n) {
      e.exports = { container: "container_f8690a" };
    },
    430457: function (e, t, n) {
      e.exports = {
        container: "container_e08e86",
        innerContainer: "innerContainer_e08e86",
        iconWrapper: "iconWrapper_e08e86",
        star: "star_e08e86",
        sparkle: "sparkle_e08e86",
      };
    },
    53080: function (e, t, n) {
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
    725741: function (e, t, n) {
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
    34754: function (e, t, n) {
      e.exports = { container: "container_cbadbc" };
    },
    499595: function (e, t, n) {
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
    278724: function (e, t, n) {
      e.exports = {
        countDown: "countDown_d0e7ba",
        sparkleStar1: "sparkleStar1_d0e7ba",
        sparkleStar2: "sparkleStar2_d0e7ba",
      };
    },
    882673: function (e, t, n) {
      n.r(
        (e.exports = {
          badgeIconPrivateMessages: "badgeIconPrivateMessages_d98ec4",
          badgeIconSettingsMenu: "badgeIconSettingsMenu_d98ec4",
        }),
      );
    },
    700706: function (e, t, n) {
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
    783072: function (e, t, n) {
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
        t4ACoachtipArt: "t4ACoachtipArt_b5369a",
        t4aCoachtipContent: "t4aCoachtipContent_b5369a",
      };
    },
    595837: function (e, t, n) {
      e.exports = {
        nitroGemAnimation: "nitroGemAnimation_ba5739",
        gemBackgroundFill: "gemBackgroundFill_ba5739",
        progressCircle: "progressCircle_ba5739",
        progressCricleBottomMargin: "progressCricleBottomMargin_ba5739",
        activeProgressCircle: "activeProgressCircle_ba5739",
        activeProgressCircleAnimation: "activeProgressCircleAnimation_ba5739",
      };
    },
    77368: function (e, t, n) {
      e.exports = {
        circleContainer: "circleContainer_d37103",
        childrenContainer: "childrenContainer_d37103",
        baseProgressCircle: "baseProgressCircle_d37103",
        circleSVG: "circleSVG_d37103",
      };
    },
    9642: function (e, t, n) {
      e.exports = {
        badgeContainer: "badgeContainer_b7316a",
        newBadge: "newBadge_b7316a",
        star: "star_b7316a",
        starLeft: "starLeft_b7316a",
        starRight: "starRight_b7316a",
      };
    },
    756582: function (e, t, n) {
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
    840468: function (e, t, n) {
      e.exports = {
        premiumLabel: "premiumLabel_ae3c77",
        selected: "selected_ae3c77",
        background: "background_ae3c77",
        selectedBackground: "selectedBackground_ae3c77",
        auPromo: "auPromo_ae3c77",
        auPromoSelected: "auPromoSelected_ae3c77",
      };
    },
    918708: function (e, t, n) {
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
    455029: function (e, t, n) {
      n.r((e.exports = { card: "card_ffe375", active: "active_ffe375" }));
    },
    845370: function (e, t, n) {
      e.exports = { cursorPointer: "cursorPointer_aaab09" };
    },
    785798: function (e, t, n) {
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
//# sourceMappingURL=b003fec57f2782f519da.js.map
