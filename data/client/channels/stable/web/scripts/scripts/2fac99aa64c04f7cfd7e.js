"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56630"],
  {
    34674: function (e, t, n) {
      n.d(t, {
        $_: function () {
          return f;
        },
        KQ: function () {
          return I;
        },
        MU: function () {
          return p;
        },
        RF: function () {
          return T;
        },
        m0: function () {
          return E;
        },
        rf: function () {
          return _;
        },
        tu: function () {
          return S;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(315314);
      var r = n(860911),
        i = n(477690),
        l = n(481060),
        o = n(911969),
        u = n(134432),
        c = n(703656),
        a = n(768581),
        s = n(981631),
        d = n(388032);
      let p = 0,
        { API_ENDPOINT: A, CDN_HOST: m } = window.GLOBAL_ENV;
      function E(e) {
        return e.id === p;
      }
      function I() {
        return { id: p, name: d.intl.string(d.t.E407b2) };
      }
      function S(e) {
        switch (e.id) {
          case 0:
            return l.GlobeEarthIcon;
          case 4:
            return l.TvIcon;
          case 5:
            return l.AnalyticsIcon;
          case 6:
            return l.GameControllerIcon;
          case 8:
            break;
          case 9:
            return l.FriendsIcon;
          case 10:
            return l.WrenchIcon;
        }
        return l.AsteriskIcon;
      }
      function f(e) {
        let { itemId: t, hash: n } = e,
          r = new URLSearchParams({
            size: (0, u.oO)(
              parseFloat(i.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, u.x_)(),
            ).toString(),
          }).toString(),
          l = a.$k ? "webp" : "png";
        return null != m
          ? ""
              .concat(location.protocol, "//")
              .concat(m, "/app-assets/application-directory/collection-items/")
              .concat(t, "/")
              .concat(n, ".")
              .concat(l, "?")
              .concat(r)
          : ""
              .concat(location.protocol)
              .concat(A)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, l),
                "?",
              )
              .concat(r);
      }
      function _() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = new URL(location.href);
        for (let n in e) {
          let r = e[n];
          t.searchParams.set(n, r);
        }
        let n = t.pathname + t.search,
          i = (0, r.Ui)(n, !1);
        (0, c.uL)(i);
      }
      let g = (e) => {
        if (null == e) return null;
        let t = e.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != t ? t[1] : null;
      };
      function T(e) {
        switch (e.type) {
          case o.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: n };
          case o.ee.YOUTUBE:
            let r = g(e.url);
            if (null != r)
              return { type: s.s9s.YOUTUBE_VIDEO, youtubeVideoId: r };
        }
        return console.warn("Unsupported carousel item", e), null;
      }
    },
    147890: function (e, t, n) {
      n.r(t),
        n.d(t, {
          goHome: function () {
            return A;
          },
          goSearch: function () {
            return S;
          },
          goToAppDirectory: function () {
            return p;
          },
          goToApplication: function () {
            return m;
          },
          goToApplicationSection: function () {
            return E;
          },
          goToApplicationStoreSku: function () {
            return I;
          },
          goToCategory: function () {
            return f;
          },
          replaceAppDirectoryURLWith: function () {
            return _;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var r = n(749681),
        i = n(352057),
        l = n(703656),
        o = n(626135),
        u = n(34674),
        c = n(132871),
        a = n(272242),
        s = n(981631),
        d = n(49898);
      let p = (e) => {
          let {
            view: t = c.ApplicationDirectoryViews.HOME,
            guildId: n,
            applicationId: l,
            applicationSection: u,
            entrypoint: p,
            skuId: f,
          } = e;
          if ((0, i.r)({ location: p.name })) {
            (0, r.u)({ tab: d.F$.APPS, applicationId: l });
            return;
          }
          let _ = { ...p, pathname: window.location.pathname };
          switch (
            (o.default.track(s.rMx.APP_DIRECTORY_OPENED, {
              source: null == _ ? void 0 : _.name,
            }),
            (0, c.resetApplicationDirectoryHistory)(),
            (0, c.setEntrypoint)(_),
            null != n && (0, c.setGuildId)(n),
            t === c.ApplicationDirectoryViews.APPLICATION &&
              null == l &&
              (t = c.ApplicationDirectoryViews.HOME),
            t)
          ) {
            case c.ApplicationDirectoryViews.HOME:
              A();
              break;
            case c.ApplicationDirectoryViews.SEARCH:
              S();
              break;
            case c.ApplicationDirectoryViews.APPLICATION:
              if (null != l) {
                if (null != u) {
                  if (
                    u === a.ApplicationDirectoryProfileSections.STORE &&
                    null != f
                  ) {
                    I({ applicationId: l, skuId: f });
                    break;
                  }
                  E({ applicationId: l, section: u });
                  break;
                }
                m({ applicationId: l });
              }
          }
        },
        A = () => {
          let e = { previousView: (0, c.getCurrentView)() };
          (0, l.uL)(s.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        m = (e) => {
          let { applicationId: t } = e,
            n = { previousView: (0, c.getCurrentView)() };
          (0, l.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
        },
        E = (e) => {
          let { applicationId: t, section: n } = e,
            r = { previousView: (0, c.getCurrentView)() };
          (0, l.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
            state: r,
          });
        },
        I = (e) => {
          let { applicationId: t, skuId: n } = e,
            r = { previousView: (0, c.getCurrentView)() };
          (0, l.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
            state: r,
          });
        },
        S = function () {
          let {
              query: e,
              categoryId: t,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            r = new URLSearchParams(),
            i = { previousView: (0, c.getCurrentView)() };
          null != e && r.set("q", e),
            null != t && r.set("category_id", t.toString()),
            null != n && r.set("page", n.toString()),
            (0, l.uL)(s.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: r.toString(),
              state: i,
            });
        },
        f = (e) => {
          let { categoryId: t } = e;
          S({ categoryId: null != t ? t : u.MU });
        },
        _ = (e) => {
          let {
            location: { state: t },
          } = (0, l.s1)();
          (0, l.dL)(e, t);
        };
    },
    207796: function (e, t, n) {
      n.d(t, {
        GN: function () {
          return A;
        },
        PJ: function () {
          return m;
        },
      });
      var r,
        i,
        l,
        o,
        u,
        c,
        a = n(280836),
        s = n(454e3),
        d = n(731965),
        p = n(433517);
      n(963202),
        ((r = o || (o = {})).ADMIN_UPSELL = "admin_upsell"),
        (r.GET_STARTED = "get_started"),
        (r.DISCOVERY = "discovery"),
        (r.PLAYSTYLE = "playstyle"),
        (r.TRAITS = "traits"),
        (r.GAMES = "games"),
        (r.SAVED_GUILDS = "saved_guilds"),
        (r.PREFERENCES = "preferences"),
        ((i = u || (u = {})).NONE = "none"),
        (i.VALORANT = "valorant"),
        (i.GENSHIN = "genshin"),
        ((l = c || (c = {})).USER_UPSELL = "user_upsell"),
        (l.USER_ONBOARDING = "user_onboarding");
      let A = (0, s.F)()(
        (0, a.tJ)(
          (e) => ({
            mode: "admin_upsell",
            previousMode: "admin_upsell",
            game: "none",
            completedNux: !1,
            userUpsellScreen: "user_upsell",
            loadingGameApplication: !1,
            selectedGames: [],
            selectedPlaystyle: null,
            selectedTraits: [],
            dismissedPilotAdminNux: !1,
            dismissedSignupAdmin: !1,
            entrypointGameId: null,
            setGame: (t) => (0, d.j)(() => e({ game: t })),
            setSelectedGames: (t) => {
              (0, d.j)(() => e({ selectedGames: t, completedNux: !0 }));
            },
            setSelectedPlaystyle: (t) =>
              (0, d.j)(() => e({ selectedPlaystyle: t, completedNux: !0 })),
            setSelectedTraits: (t) =>
              (0, d.j)(() => e({ selectedTraits: t, completedNux: !0 })),
            setUserUpsellScreen: (t) =>
              (0, d.j)(() => e({ userUpsellScreen: t })),
          }),
          {
            name: "clan-discovery",
            storage: (0, a.FL)(() => ({
              getItem: (e) => {
                var t;
                return null !== (t = p.K.get(e)) && void 0 !== t ? t : null;
              },
              setItem: (e, t) => p.K.set(e, t),
              removeItem: (e) => p.K.remove(e),
            })),
            partialize: (e) => ({
              mode: e.mode,
              game: e.game,
              completedNux: e.completedNux,
              selectedGames: e.selectedGames,
              selectedPlaystyle: e.selectedPlaystyle,
              selectedTraits: e.selectedTraits,
              dismissedPilotAdminNux: e.dismissedPilotAdminNux,
              dismissedSignupAdmin: e.dismissedSignupAdmin,
            }),
          },
        ),
      );
      function m() {
        (0, d.j)(() => {
          A.setState({
            completedNux: !1,
            dismissedPilotAdminNux: !1,
            dismissedSignupAdmin: !1,
            mode: "admin_upsell",
            previousMode: "admin_upsell",
            game: "none",
            userUpsellScreen: "user_upsell",
            selectedGames: [],
            selectedPlaystyle: null,
            selectedTraits: [],
            entrypointGameId: null,
          });
        });
      }
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
      var r = n(207796),
        i = n(859921),
        l = n(341907),
        o = n(703656),
        u = n(836768),
        c = n(49898),
        a = n(981631),
        s = n(128449);
      function d(e) {
        let t = e.tab;
        switch ((u.Z.setState({ selectedTab: t }), t)) {
          case c.F$.SERVERS:
            var n, d;
            let p = e.selectedServersTab;
            null != p
              ? i.Z.setState({
                  selectedTab: p,
                  entrypoint:
                    null !== (n = e.entrypoint) && void 0 !== n
                      ? n
                      : s.Qq.UNKNOWN,
                })
              : i.Z.setState({
                  entrypoint:
                    null !== (d = e.entrypoint) && void 0 !== d
                      ? d
                      : s.Qq.UNKNOWN,
                });
            let A = (function (e) {
              let { extra: t } = e,
                n = {},
                i = r.GN.getState().entrypointGameId;
              return (
                null != i && (n.search = "?game=".concat(i)),
                null != t && (n = { ...t, ...n }),
                n
              );
            })({ extra: e.extra });
            return (0, o.uL)(a.Z5c.GLOBAL_DISCOVERY_SERVERS, A);
          case c.F$.APPS:
            if (null != e.applicationId)
              return (0, o.uL)(
                a.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId),
              );
            if (null != e.query) {
              let t = new URLSearchParams();
              return (
                t.set("q", e.query),
                null != e.categoryId &&
                  t.set("category_id", e.categoryId.toString()),
                null != e.page && t.set("page", e.page.toString()),
                (0, o.uL)(a.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                  search: t.toString(),
                })
              );
            } else if (null != e.categoryId)
              return (0, o.uL)(
                a.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(e.categoryId.toString()),
              );
            else return (0, o.uL)(a.Z5c.GLOBAL_DISCOVERY_APPS);
          case c.F$.QUESTS:
            return (0, l.navigateToQuestHome)(
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
          return i;
        },
        r: function () {
          return l;
        },
      });
      let r = (0, n(818083).B)({
        kind: "user",
        id: "2024-09_global_discovery_apps",
        label: "Global Discovery Apps",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function i(e) {
        let { location: t, autoTrackExposure: n = !0 } = e,
          { enabled: i } = r.useExperiment(
            { location: t },
            { autoTrackExposure: n },
          );
        return i;
      }
      function l(e) {
        let { location: t } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    128449: function (e, t, n) {
      n.d(t, {
        AF: function () {
          return A;
        },
        BP: function () {
          return s;
        },
        KL: function () {
          return p;
        },
        MU: function () {
          return c;
        },
        Qq: function () {
          return i;
        },
        q5: function () {
          return a;
        },
        t0: function () {
          return d;
        },
        vf: function () {
          return r;
        },
      }),
        n(47120);
      var r,
        i,
        l,
        o,
        u = n(70956);
      n(731455),
        ((l = r || (r = {})).FEATURED = "featured"),
        (l.GAMING = "gaming"),
        (l.MUSIC = "music"),
        (l.ENTERTAINMENT = "entertainment"),
        (l.TECH = "tech"),
        (l.EDUCATION = "education"),
        (l.HUBS = "hubs"),
        ((o = i || (i = {})).UNKNOWN = "unknown"),
        (o.GUILDS_BAR = "guilds_bar"),
        (o.RTC_PANEL = "rtc_panel"),
        (o.PROFILE = "profile"),
        (o.GAME_LINK = "game_link"),
        (o.EMBED = "embed");
      let c = new Set(["hubs"]),
        a = 12633 == n.j ? [] : null,
        s = "q",
        d = "c",
        p = "l",
        A = 10 * u.Z.Millis.MINUTE;
    },
    859921: function (e, t, n) {
      n.d(t, {
        O: function () {
          return o;
        },
      });
      var r = n(972959);
      let i = Object.freeze({
          selectedTab: null,
          isSearchVisible: !1,
          entrypoint: null,
        }),
        l = (0, r.H)(() => i);
      function o() {
        l.setState(i);
      }
      t.Z = l;
    },
  },
]);
//# sourceMappingURL=2fac99aa64c04f7cfd7e.js.map
