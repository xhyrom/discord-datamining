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
          return O;
        },
        MU: function () {
          return I;
        },
        RF: function () {
          return L;
        },
        m0: function () {
          return A;
        },
        rf: function () {
          return S;
        },
        tu: function () {
          return E;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(315314);
      var r = n(860911),
        o = n(477690),
        i = n(481060),
        c = n(911969),
        u = n(134432),
        l = n(703656),
        a = n(768581),
        s = n(981631),
        p = n(388032);
      let I = 0,
        { API_ENDPOINT: d, CDN_HOST: f } = window.GLOBAL_ENV;
      function A(t) {
        return t.id === I;
      }
      function O() {
        return { id: I, name: p.intl.string(p.t.E407b2) };
      }
      function E(t) {
        switch (t.id) {
          case 0:
            return i.GlobeEarthIcon;
          case 4:
            return i.TvIcon;
          case 5:
            return i.AnalyticsIcon;
          case 6:
            return i.GameControllerIcon;
          case 8:
            break;
          case 9:
            return i.FriendsIcon;
          case 10:
            return i.WrenchIcon;
        }
        return i.AsteriskIcon;
      }
      function _(t) {
        let { itemId: e, hash: n } = t,
          r = new URLSearchParams({
            size: (0, u.oO)(
              parseFloat(o.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, u.x_)(),
            ).toString(),
          }).toString(),
          i = a.$k ? "webp" : "png";
        return null != f
          ? ""
              .concat(location.protocol, "//")
              .concat(f, "/app-assets/application-directory/collection-items/")
              .concat(e, "/")
              .concat(n, ".")
              .concat(i, "?")
              .concat(r)
          : ""
              .concat(location.protocol)
              .concat(d)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(e, n, i),
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
          o = (0, r.Ui)(n, !1);
        (0, l.uL)(o);
      }
      let g = (t) => {
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
            let r = g(t.url);
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
            return d;
          },
          goSearch: function () {
            return E;
          },
          goToAppDirectory: function () {
            return I;
          },
          goToApplication: function () {
            return f;
          },
          goToApplicationSection: function () {
            return A;
          },
          goToApplicationStoreSku: function () {
            return O;
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
        o = n(352057),
        i = n(703656),
        c = n(626135),
        u = n(34674),
        l = n(132871),
        a = n(272242),
        s = n(981631),
        p = n(49898);
      let I = (t) => {
          let {
            view: e = l.ApplicationDirectoryViews.HOME,
            guildId: n,
            applicationId: i,
            applicationSection: u,
            entrypoint: I,
            skuId: _,
          } = t;
          if ((0, o.r)({ location: I.name })) {
            (0, r.u)({ tab: p.F$.APPS, applicationId: i });
            return;
          }
          let S = { ...I, pathname: window.location.pathname };
          switch (
            (c.default.track(s.rMx.APP_DIRECTORY_OPENED, {
              source: null == S ? void 0 : S.name,
            }),
            (0, l.resetApplicationDirectoryHistory)(),
            (0, l.setEntrypoint)(S),
            null != n && (0, l.setGuildId)(n),
            e === l.ApplicationDirectoryViews.APPLICATION &&
              null == i &&
              (e = l.ApplicationDirectoryViews.HOME),
            e)
          ) {
            case l.ApplicationDirectoryViews.HOME:
              d();
              break;
            case l.ApplicationDirectoryViews.SEARCH:
              E();
              break;
            case l.ApplicationDirectoryViews.APPLICATION:
              if (null != i) {
                if (null != u) {
                  if (
                    u === a.ApplicationDirectoryProfileSections.STORE &&
                    null != _
                  ) {
                    O({ applicationId: i, skuId: _ });
                    break;
                  }
                  A({ applicationId: i, section: u });
                  break;
                }
                f({ applicationId: i });
              }
          }
        },
        d = () => {
          let t = { previousView: (0, l.getCurrentView)() };
          (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY, { state: t });
        },
        f = (t) => {
          let { applicationId: e } = t,
            n = { previousView: (0, l.getCurrentView)() };
          (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE(e), { state: n });
        },
        A = (t) => {
          let { applicationId: e, section: n } = t,
            r = { previousView: (0, l.getCurrentView)() };
          (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(e, n), {
            state: r,
          });
        },
        O = (t) => {
          let { applicationId: e, skuId: n } = t,
            r = { previousView: (0, l.getCurrentView)() };
          (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, n), {
            state: r,
          });
        },
        E = function () {
          let {
              query: t,
              categoryId: e,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            r = new URLSearchParams(),
            o = { previousView: (0, l.getCurrentView)() };
          null != t && r.set("q", t),
            null != e && r.set("category_id", e.toString()),
            null != n && r.set("page", n.toString()),
            (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: r.toString(),
              state: o,
            });
        },
        _ = (t) => {
          let { categoryId: e } = t;
          E({ categoryId: null != e ? e : u.MU });
        },
        S = (t) => {
          let {
            location: { state: e },
          } = (0, i.s1)();
          (0, i.dL)(t, e);
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
        o = n(341907),
        i = n(703656),
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
              (0, i.uL)(l.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
            );
          case u.F$.APPS:
            if (null != t.applicationId)
              return (0, i.uL)(
                l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId),
              );
            if (null != t.query) {
              let e = new URLSearchParams();
              return (
                e.set("q", t.query),
                null != t.categoryId &&
                  e.set("category_id", t.categoryId.toString()),
                null != t.page && e.set("page", t.page.toString()),
                (0, i.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                  search: e.toString(),
                })
              );
            } else if (null != t.categoryId)
              return (0, i.uL)(
                l.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()),
              );
            else return (0, i.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS);
          case u.F$.QUESTS:
            return (0, o.navigateToQuestHome)(
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
          return o;
        },
        r: function () {
          return i;
        },
      });
      let r = (0, n(818083).B)({
        kind: "user",
        id: "2024-09_global_discovery_apps",
        label: "Global Discovery Apps",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function o(t) {
        let { location: e, autoTrackExposure: n = !0 } = t,
          { enabled: o } = r.useExperiment(
            { location: e },
            { autoTrackExposure: n },
          );
        return o;
      }
      function i(t) {
        let { location: e } = t;
        return r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    859921: function (t, e, n) {
      n.d(e, {
        O: function () {
          return c;
        },
      });
      var r = n(972959);
      let o = Object.freeze({
          selectedTab: null,
          isSearchVisible: !1,
          entrypoint: null,
        }),
        i = (0, r.H)(() => o);
      function c() {
        i.setState(o);
      }
      e.Z = i;
    },
  },
]);
//# sourceMappingURL=83939c91ae0300f49434.js.map
