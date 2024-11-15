"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56630"],
  {
    34674: function (t, e, n) {
      n.d(e, {
        $_: function () {
          return _;
        },
        KQ: function () {
          return d;
        },
        MU: function () {
          return f;
        },
        RF: function () {
          return L;
        },
        m0: function () {
          return E;
        },
        rf: function () {
          return S;
        },
        tu: function () {
          return O;
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
        o = n(481060),
        c = n(911969),
        u = n(134432),
        l = n(703656),
        a = n(768581),
        s = n(981631),
        p = n(388032);
      let f = 0,
        { API_ENDPOINT: I, CDN_HOST: A } = window.GLOBAL_ENV;
      function E(t) {
        return t.id === f;
      }
      function d() {
        return { id: f, name: p.intl.string(p.t.E407b2) };
      }
      function O(t) {
        switch (t.id) {
          case 0:
            return o.GlobeEarthIcon;
          case 4:
            return o.TvIcon;
          case 5:
            return o.AnalyticsIcon;
          case 6:
            return o.GameControllerIcon;
          case 8:
            break;
          case 9:
            return o.FriendsIcon;
          case 10:
            return o.WrenchIcon;
        }
        return o.AsteriskIcon;
      }
      function _(t) {
        let { itemId: e, hash: n } = t,
          r = new URLSearchParams({
            size: (0, u.oO)(
              parseFloat(i.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, u.x_)(),
            ).toString(),
          }).toString(),
          o = a.$k ? "webp" : "png";
        return null != A
          ? ""
              .concat(location.protocol, "//")
              .concat(A, "/app-assets/application-directory/collection-items/")
              .concat(e, "/")
              .concat(n, ".")
              .concat(o, "?")
              .concat(r)
          : ""
              .concat(location.protocol)
              .concat(I)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(e, n, o),
                "?",
              )
              .concat(r);
      }
      function S() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = new URL(location.href);
        for (let n in t) {
          let r = t[n];
          e.searchParams.set(n, r);
        }
        let n = e.pathname + e.search,
          i = (0, r.Ui)(n, !1);
        (0, l.uL)(i);
      }
      let T = (t) => {
        if (null == t) return null;
        let e = t.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != e ? e[1] : null;
      };
      function L(t) {
        switch (t.type) {
          case c.ee.MEDIA_PROXY:
            var e;
            let n = null !== (e = t.proxy_url) && void 0 !== e ? e : t.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: n };
          case c.ee.YOUTUBE:
            let r = T(t.url);
            if (null != r)
              return { type: s.s9s.YOUTUBE_VIDEO, youtubeVideoId: r };
        }
        return console.warn("Unsupported carousel item", t), null;
      }
    },
    147890: function (t, e, n) {
      n.r(e),
        n.d(e, {
          goHome: function () {
            return I;
          },
          goSearch: function () {
            return O;
          },
          goToAppDirectory: function () {
            return f;
          },
          goToApplication: function () {
            return A;
          },
          goToApplicationSection: function () {
            return E;
          },
          goToApplicationStoreSku: function () {
            return d;
          },
          goToCategory: function () {
            return _;
          },
          replaceAppDirectoryURLWith: function () {
            return S;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var r = n(749681),
        i = n(352057),
        o = n(703656),
        c = n(626135),
        u = n(34674),
        l = n(132871),
        a = n(272242),
        s = n(981631),
        p = n(49898);
      let f = (t) => {
          let {
            view: e = l.ApplicationDirectoryViews.HOME,
            guildId: n,
            applicationId: o,
            applicationSection: u,
            entrypoint: f,
            skuId: _,
          } = t;
          if ((0, i.r)({ location: f.name })) {
            (0, r.u)({ tab: p.F$.APPS, applicationId: o });
            return;
          }
          let S = { ...f, pathname: window.location.pathname };
          switch (
            (c.default.track(s.rMx.APP_DIRECTORY_OPENED, {
              source: null == S ? void 0 : S.name,
            }),
            (0, l.resetApplicationDirectoryHistory)(),
            (0, l.setEntrypoint)(S),
            null != n && (0, l.setGuildId)(n),
            e === l.ApplicationDirectoryViews.APPLICATION &&
              null == o &&
              (e = l.ApplicationDirectoryViews.HOME),
            e)
          ) {
            case l.ApplicationDirectoryViews.HOME:
              I();
              break;
            case l.ApplicationDirectoryViews.SEARCH:
              O();
              break;
            case l.ApplicationDirectoryViews.APPLICATION:
              if (null != o) {
                if (null != u) {
                  if (
                    u === a.ApplicationDirectoryProfileSections.STORE &&
                    null != _
                  ) {
                    d({ applicationId: o, skuId: _ });
                    break;
                  }
                  E({ applicationId: o, section: u });
                  break;
                }
                A({ applicationId: o });
              }
          }
        },
        I = () => {
          let t = { previousView: (0, l.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY, { state: t });
        },
        A = (t) => {
          let { applicationId: e } = t,
            n = { previousView: (0, l.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE(e), { state: n });
        },
        E = (t) => {
          let { applicationId: e, section: n } = t,
            r = { previousView: (0, l.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(e, n), {
            state: r,
          });
        },
        d = (t) => {
          let { applicationId: e, skuId: n } = t,
            r = { previousView: (0, l.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, n), {
            state: r,
          });
        },
        O = function () {
          let {
              query: t,
              categoryId: e,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            r = new URLSearchParams(),
            i = { previousView: (0, l.getCurrentView)() };
          null != t && r.set("q", t),
            null != e && r.set("category_id", e.toString()),
            null != n && r.set("page", n.toString()),
            (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: r.toString(),
              state: i,
            });
        },
        _ = (t) => {
          let { categoryId: e } = t;
          O({ categoryId: null != e ? e : u.MU });
        },
        S = (t) => {
          let {
            location: { state: e },
          } = (0, o.s1)();
          (0, o.dL)(t, e);
        };
    },
    749681: function (t, e, n) {
      n.d(e, {
        u: function () {
          return s;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(411104);
      var r = n(859921),
        i = n(341907),
        o = n(703656),
        c = n(836768),
        u = n(49898),
        l = n(981631),
        a = n(128449);
      function s(t) {
        let e = t.tab;
        switch ((c.Z.setState({ selectedTab: e }), e)) {
          case u.F$.SERVERS:
            var n, s;
            let p = t.selectedServersTab;
            return (
              null != p
                ? r.Z.setState({
                    selectedTab: p,
                    entrypoint:
                      null !== (n = t.entrypoint) && void 0 !== n
                        ? n
                        : a.Qq.UNKNOWN,
                  })
                : r.Z.setState({
                    entrypoint:
                      null !== (s = t.entrypoint) && void 0 !== s
                        ? s
                        : a.Qq.UNKNOWN,
                  }),
              (0, o.uL)(l.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
            );
          case u.F$.APPS:
            if (null != t.applicationId)
              return (0, o.uL)(
                l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId),
              );
            if (null != t.query) {
              let e = new URLSearchParams();
              return (
                e.set("q", t.query),
                null != t.categoryId &&
                  e.set("category_id", t.categoryId.toString()),
                null != t.page && e.set("page", t.page.toString()),
                (0, o.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                  search: e.toString(),
                })
              );
            } else if (null != t.categoryId)
              return (0, o.uL)(
                l.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()),
              );
            else return (0, o.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS);
          case u.F$.QUESTS:
            return (0, i.navigateToQuestHome)(
              t.location,
              t.questContent,
              t.questId,
            );
          default:
            throw Error(
              "[transitionToGlobalDiscovery] Unhandled tab type: ".concat(e),
            );
        }
      }
    },
    352057: function (t, e, n) {
      n.d(e, {
        h: function () {
          return i;
        },
        r: function () {
          return o;
        },
      });
      let r = (0, n(818083).B)({
        kind: "user",
        id: "2024-09_global_discovery_apps",
        label: "Global Discovery Apps",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function i(t) {
        let { location: e, autoTrackExposure: n = !0 } = t,
          { enabled: i } = r.useExperiment(
            { location: e },
            { autoTrackExposure: n },
          );
        return i;
      }
      function o(t) {
        let { location: e } = t;
        return r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    128449: function (t, e, n) {
      n.d(e, {
        AF: function () {
          return I;
        },
        BP: function () {
          return s;
        },
        KL: function () {
          return f;
        },
        MU: function () {
          return l;
        },
        Qq: function () {
          return i;
        },
        q5: function () {
          return a;
        },
        t0: function () {
          return p;
        },
        vf: function () {
          return r;
        },
      }),
        n(47120);
      var r,
        i,
        o,
        c,
        u = n(70956);
      n(731455),
        ((o = r || (r = {})).FEATURED = "featured"),
        (o.GAMING = "gaming"),
        (o.MUSIC = "music"),
        (o.ENTERTAINMENT = "entertainment"),
        (o.TECH = "tech"),
        (o.EDUCATION = "education"),
        (o.HUBS = "hubs"),
        ((c = i || (i = {})).UNKNOWN = "unknown"),
        (c.GUILDS_BAR = "guilds_bar"),
        (c.RTC_PANEL = "rtc_panel"),
        (c.PROFILE = "profile"),
        (c.GAME_LINK = "game_link"),
        (c.EMBED = "embed");
      let l = new Set(["hubs"]),
        a = 12633 == n.j ? [] : null,
        s = "q",
        p = "c",
        f = "l",
        I = 10 * u.Z.Millis.MINUTE;
    },
    859921: function (t, e, n) {
      n.d(e, {
        O: function () {
          return c;
        },
      });
      var r = n(972959);
      let i = Object.freeze({
          selectedTab: null,
          isSearchVisible: !1,
          entrypoint: null,
        }),
        o = (0, r.H)(() => i);
      function c() {
        o.setState(i);
      }
      e.Z = o;
    },
  },
]);
//# sourceMappingURL=fb9c3a19fa8d5317e110.js.map
