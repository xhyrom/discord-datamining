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
          return E;
        },
        MU: function () {
          return I;
        },
        RF: function () {
          return R;
        },
        m0: function () {
          return O;
        },
        rf: function () {
          return L;
        },
        tu: function () {
          return T;
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
        l = n(134432),
        a = n(703656),
        u = n(768581),
        s = n(981631),
        p = n(388032);
      let I = 0,
        { API_ENDPOINT: S, CDN_HOST: A } = window.GLOBAL_ENV;
      function O(t) {
        return t.id === I;
      }
      function E() {
        return { id: I, name: p.intl.string(p.t.E407b2) };
      }
      function T(t) {
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
            size: (0, l.oO)(
              parseFloat(o.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, l.x_)(),
            ).toString(),
          }).toString(),
          i = u.$k ? "webp" : "png";
        return null != A
          ? ""
              .concat(location.protocol, "//")
              .concat(A, "/app-assets/application-directory/collection-items/")
              .concat(e, "/")
              .concat(n, ".")
              .concat(i, "?")
              .concat(r)
          : ""
              .concat(location.protocol)
              .concat(S)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(e, n, i),
                "?",
              )
              .concat(r);
      }
      function L() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = new URL(location.href);
        for (let n in t) {
          let r = t[n];
          e.searchParams.set(n, r);
        }
        let n = e.pathname + e.search,
          o = (0, r.Ui)(n, !1);
        (0, a.uL)(o);
      }
      let d = (t) => {
        if (null == t) return null;
        let e = t.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != e ? e[1] : null;
      };
      function R(t) {
        switch (t.type) {
          case c.ee.MEDIA_PROXY:
            var e;
            let n = null !== (e = t.proxy_url) && void 0 !== e ? e : t.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: n };
          case c.ee.YOUTUBE:
            let r = d(t.url);
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
            return A;
          },
          goSearch: function () {
            return _;
          },
          goToAppDirectory: function () {
            return S;
          },
          goToApplication: function () {
            return O;
          },
          goToApplicationSection: function () {
            return E;
          },
          goToApplicationStoreSku: function () {
            return T;
          },
          goToCategory: function () {
            return L;
          },
          replaceAppDirectoryURLWith: function () {
            return d;
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
        l = n(34674),
        a = n(132871),
        u = n(272242),
        s = n(981631),
        p = n(49898),
        I = n(979007);
      let S = (t) => {
          let {
            view: e = a.ApplicationDirectoryViews.HOME,
            guildId: n,
            applicationId: i,
            applicationSection: l,
            entrypoint: S,
            skuId: L,
          } = t;
          if ((0, o.K0)({ location: S.name })) {
            let t =
              null == i
                ? void 0
                : l === u.ApplicationDirectoryProfileSections.STORE
                  ? I.GlobalDiscoveryAppsSections.STORE
                  : I.GlobalDiscoveryAppsSections.ABOUT;
            (0, r.transitionToGlobalDiscovery)({
              tab: p.GlobalDiscoveryTab.APPS,
              applicationId: i,
              section: t,
              skuId: t === I.GlobalDiscoveryAppsSections.STORE ? L : void 0,
            });
            return;
          }
          let d = { ...S, pathname: window.location.pathname };
          switch (
            (c.default.track(s.rMx.APP_DIRECTORY_OPENED, {
              source: null == d ? void 0 : d.name,
            }),
            (0, a.resetApplicationDirectoryHistory)(),
            (0, a.setEntrypoint)(d),
            null != n && (0, a.setGuildId)(n),
            e === a.ApplicationDirectoryViews.APPLICATION &&
              null == i &&
              (e = a.ApplicationDirectoryViews.HOME),
            e)
          ) {
            case a.ApplicationDirectoryViews.HOME:
              A();
              break;
            case a.ApplicationDirectoryViews.SEARCH:
              _();
              break;
            case a.ApplicationDirectoryViews.APPLICATION:
              if (null != i) {
                if (null != l) {
                  if (
                    l === u.ApplicationDirectoryProfileSections.STORE &&
                    null != L
                  ) {
                    T({ applicationId: i, skuId: L });
                    break;
                  }
                  E({ applicationId: i, section: l });
                  break;
                }
                O({ applicationId: i });
              }
          }
        },
        A = () => {
          let t = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY, { state: t });
        },
        O = (t) => {
          let { applicationId: e } = t,
            n = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE(e), { state: n });
        },
        E = (t) => {
          let { applicationId: e, section: n } = t,
            r = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(e, n), {
            state: r,
          });
        },
        T = (t) => {
          let { applicationId: e, skuId: n } = t,
            r = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, n), {
            state: r,
          });
        },
        _ = function () {
          let {
              query: t,
              categoryId: e,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            r = new URLSearchParams(),
            o = { previousView: (0, a.getCurrentView)() };
          null != t && r.set("q", t),
            null != e && r.set("category_id", e.toString()),
            null != n && r.set("page", n.toString()),
            (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: r.toString(),
              state: o,
            });
        },
        L = (t) => {
          let { categoryId: e } = t;
          _({ categoryId: null != e ? e : l.MU });
        },
        d = (t) => {
          let {
            location: { state: e },
          } = (0, i.s1)();
          (0, i.dL)(t, e);
        };
    },
    749681: function (t, e, n) {
      n.r(e),
        n.d(e, {
          transitionToGlobalDiscovery: function () {
            return p;
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
        l = n(49898),
        a = n(981631),
        u = n(979007),
        s = n(128449);
      function p(t) {
        let e = t.tab;
        switch ((c.Z.setState({ selectedTab: e }), e)) {
          case l.GlobalDiscoveryTab.SERVERS:
            var n, p;
            let I = t.selectedServersTab;
            return (
              null != I
                ? r.Z.setState({
                    selectedTab: I,
                    entrypoint:
                      null !== (n = t.entrypoint) && void 0 !== n
                        ? n
                        : s.Qq.UNKNOWN,
                  })
                : r.Z.setState({
                    entrypoint:
                      null !== (p = t.entrypoint) && void 0 !== p
                        ? p
                        : s.Qq.UNKNOWN,
                  }),
              (0, i.uL)(a.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
            );
          case l.GlobalDiscoveryTab.APPS:
            if (null != t.applicationId) {
              if (t.section === u.GlobalDiscoveryAppsSections.STORE) {
                if (null != t.skuId)
                  return (0, i.uL)(
                    a.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                      t.applicationId,
                      t.skuId,
                    ),
                  );
                return (0, i.uL)(
                  a.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                    t.applicationId,
                    u.GlobalDiscoveryAppsSections.STORE,
                  ),
                );
              }
              return (0, i.uL)(
                a.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId),
              );
            }
            if (null != t.query) {
              let e = new URLSearchParams();
              return (
                "" !== t.query && e.set("q", t.query),
                null != t.categoryId &&
                  e.set("category_id", t.categoryId.toString()),
                null != t.page && e.set("page", t.page.toString()),
                (0, i.uL)(a.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                  search: e.toString(),
                })
              );
            } else if (null != t.categoryId)
              return (0, i.uL)(
                a.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()),
              );
            else return (0, i.uL)(a.Z5c.GLOBAL_DISCOVERY_APPS);
          case l.GlobalDiscoveryTab.QUESTS:
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
          searchBarState: n(49898).GlobalDiscoverySearchBarState.DEFAULT,
        }),
        i = (0, r.H)(() => o);
      function c() {
        i.setState(o);
      }
      e.Z = i;
    },
  },
]);
//# sourceMappingURL=4b3c45fdc2fe1adf3b2b.js.map
