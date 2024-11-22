"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56630"],
  {
    34674: function (t, e, n) {
      n.d(e, {
        $_: function () {
          return f;
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
          return A;
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
        o = n(481060),
        c = n(911969),
        u = n(134432),
        l = n(703656),
        a = n(768581),
        s = n(981631),
        p = n(388032);
      let I = 0,
        { API_ENDPOINT: O, CDN_HOST: d } = window.GLOBAL_ENV;
      function A(t) {
        return t.id === I;
      }
      function E() {
        return { id: I, name: p.intl.string(p.t.E407b2) };
      }
      function S(t) {
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
      function f(t) {
        let { itemId: e, hash: n } = t,
          r = new URLSearchParams({
            size: (0, u.oO)(
              parseFloat(i.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, u.x_)(),
            ).toString(),
          }).toString(),
          o = a.$k ? "webp" : "png";
        return null != d
          ? ""
              .concat(location.protocol, "//")
              .concat(d, "/app-assets/application-directory/collection-items/")
              .concat(e, "/")
              .concat(n, ".")
              .concat(o, "?")
              .concat(r)
          : ""
              .concat(location.protocol)
              .concat(O)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(e, n, o),
                "?",
              )
              .concat(r);
      }
      function _() {
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
      let L = (t) => {
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
            let r = L(t.url);
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
            return f;
          },
          goToAppDirectory: function () {
            return O;
          },
          goToApplication: function () {
            return A;
          },
          goToApplicationSection: function () {
            return E;
          },
          goToApplicationStoreSku: function () {
            return S;
          },
          goToCategory: function () {
            return _;
          },
          replaceAppDirectoryURLWith: function () {
            return L;
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
        p = n(49898),
        I = n(979007);
      let O = (t) => {
          let {
            view: e = l.ApplicationDirectoryViews.HOME,
            guildId: n,
            applicationId: o,
            applicationSection: u,
            entrypoint: O,
            skuId: _,
          } = t;
          if ((0, i.r)({ location: O.name })) {
            let t =
              u === a.ApplicationDirectoryProfileSections.STORE
                ? I.Wc.STORE
                : I.Wc.ABOUT;
            (0, r.u)({
              tab: p.F$.APPS,
              applicationId: o,
              section: t,
              skuId: t === I.Wc.STORE ? _ : void 0,
            });
            return;
          }
          let L = { ...O, pathname: window.location.pathname };
          switch (
            (c.default.track(s.rMx.APP_DIRECTORY_OPENED, {
              source: null == L ? void 0 : L.name,
            }),
            (0, l.resetApplicationDirectoryHistory)(),
            (0, l.setEntrypoint)(L),
            null != n && (0, l.setGuildId)(n),
            e === l.ApplicationDirectoryViews.APPLICATION &&
              null == o &&
              (e = l.ApplicationDirectoryViews.HOME),
            e)
          ) {
            case l.ApplicationDirectoryViews.HOME:
              d();
              break;
            case l.ApplicationDirectoryViews.SEARCH:
              f();
              break;
            case l.ApplicationDirectoryViews.APPLICATION:
              if (null != o) {
                if (null != u) {
                  if (
                    u === a.ApplicationDirectoryProfileSections.STORE &&
                    null != _
                  ) {
                    S({ applicationId: o, skuId: _ });
                    break;
                  }
                  E({ applicationId: o, section: u });
                  break;
                }
                A({ applicationId: o });
              }
          }
        },
        d = () => {
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
        S = (t) => {
          let { applicationId: e, skuId: n } = t,
            r = { previousView: (0, l.getCurrentView)() };
          (0, o.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(e, n), {
            state: r,
          });
        },
        f = function () {
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
          f({ categoryId: null != e ? e : u.MU });
        },
        L = (t) => {
          let {
            location: { state: e },
          } = (0, o.s1)();
          (0, o.dL)(t, e);
        };
    },
    749681: function (t, e, n) {
      n.d(e, {
        u: function () {
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
        i = n(341907),
        o = n(703656),
        c = n(836768),
        u = n(49898),
        l = n(981631),
        a = n(979007),
        s = n(128449);
      function p(t) {
        let e = t.tab;
        switch ((c.Z.setState({ selectedTab: e }), e)) {
          case u.F$.SERVERS:
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
              (0, o.uL)(l.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
            );
          case u.F$.APPS:
            if (null != t.applicationId) {
              if (t.section === a.Wc.STORE) {
                if (null != t.skuId)
                  return (0, o.uL)(
                    l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                      t.applicationId,
                      t.skuId,
                    ),
                  );
                return (0, o.uL)(
                  l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                    t.applicationId,
                    a.Wc.STORE,
                  ),
                );
              }
              return (0, o.uL)(
                l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId),
              );
            }
            if (null != t.query) {
              let e = new URLSearchParams();
              return (
                "" !== t.query && e.set("q", t.query),
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
//# sourceMappingURL=9739c7eba1dd8e3e73bc.js.map
