"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56630"],
  {
    736408: function (e, t, n) {
      n.d(t, {
        $: function () {
          return a;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var r = n(134432),
        o = n(768581),
        i = n(981631);
      let { API_ENDPOINT: l, CDN_HOST: c } = window.GLOBAL_ENV;
      function a(e) {
        let { itemId: t, hash: n, containerWidth: a = 1024 } = e,
          u = new URLSearchParams({
            size: (0, r.oO)(a * (0, r.x_)()).toString(),
          }).toString(),
          s = o.$k ? "webp" : "png";
        return null != c
          ? ""
              .concat(location.protocol, "//")
              .concat(c, "/app-assets/application-directory/collection-items/")
              .concat(t, "/")
              .concat(n, ".")
              .concat(s, "?")
              .concat(u)
          : ""
              .concat(location.protocol)
              .concat(l)
              .concat(
                i.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, s),
                "?",
              )
              .concat(u);
      }
    },
    34674: function (e, t, n) {
      n.d(t, {
        $_: function () {
          return A;
        },
        KQ: function () {
          return I;
        },
        MU: function () {
          return p;
        },
        RF: function () {
          return _;
        },
        m0: function () {
          return S;
        },
        rf: function () {
          return O;
        },
        tu: function () {
          return d;
        },
      }),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var r = n(860911),
        o = n(477690),
        i = n(481060),
        l = n(911969),
        c = n(703656),
        a = n(736408),
        u = n(981631),
        s = n(388032);
      let p = 0;
      function S(e) {
        return e.id === p;
      }
      function I() {
        return { id: p, name: s.intl.string(s.t.E407b2) };
      }
      function d(e) {
        switch (e.id) {
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
      function A(e) {
        let {
          itemId: t,
          hash: n,
          containerWidth: r = parseFloat(
            o.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH,
          ),
        } = e;
        return (0, a.$)({ itemId: t, hash: n, containerWidth: r });
      }
      function O() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = new URL(location.href);
        for (let n in e) {
          let r = e[n];
          t.searchParams.set(n, r);
        }
        let n = t.pathname + t.search,
          o = (0, r.Ui)(n, !1);
        (0, c.uL)(o);
      }
      let E = (e) => {
        if (null == e) return null;
        let t = e.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != t ? t[1] : null;
      };
      function _(e) {
        switch (e.type) {
          case l.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return { type: u.s9s.IMG, width: 0, height: 0, src: n };
          case l.ee.YOUTUBE:
            let r = E(e.url);
            if (null != r)
              return { type: u.s9s.YOUTUBE_VIDEO, youtubeVideoId: r };
        }
        return console.warn("Unsupported carousel item", e), null;
      }
    },
    147890: function (e, t, n) {
      n.r(t),
        n.d(t, {
          goHome: function () {
            return d;
          },
          goSearch: function () {
            return _;
          },
          goToAppDirectory: function () {
            return I;
          },
          goToApplication: function () {
            return A;
          },
          goToApplicationSection: function () {
            return O;
          },
          goToApplicationStoreSku: function () {
            return E;
          },
          goToCategory: function () {
            return P;
          },
          replaceAppDirectoryURLWith: function () {
            return y;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var r = n(749681),
        o = n(926061),
        i = n(703656),
        l = n(626135),
        c = n(34674),
        a = n(132871),
        u = n(272242),
        s = n(981631),
        p = n(49898),
        S = n(979007);
      let I = (e) => {
          let {
            view: t = a.ApplicationDirectoryViews.HOME,
            guildId: n,
            applicationId: i,
            applicationSection: c,
            entrypoint: I,
            skuId: P,
            restorePreviousView: y,
          } = e;
          if ((0, o.l5)({ location: I.name })) {
            let e =
              null == i
                ? void 0
                : c === u.ApplicationDirectoryProfileSections.STORE
                  ? S.GlobalDiscoveryAppsSections.STORE
                  : S.GlobalDiscoveryAppsSections.ABOUT;
            return (0, r.transitionToGlobalDiscovery)({
              tab: p.GlobalDiscoveryTab.APPS,
              applicationId: i,
              section: e,
              skuId: e === S.GlobalDiscoveryAppsSections.STORE ? P : void 0,
              newSessionState: {
                guildId: null != n ? n : null,
                entrypoint: I,
                restorePreviousView: y,
              },
            });
          }
          let L = { ...I, pathname: window.location.pathname };
          switch (
            (l.default.track(s.rMx.APP_DIRECTORY_OPENED, {
              source: null == L ? void 0 : L.name,
            }),
            (0, a.resetApplicationDirectoryHistory)(),
            (0, a.setEntrypoint)(L),
            null != n && (0, a.setGuildId)(n),
            t === a.ApplicationDirectoryViews.APPLICATION &&
              null == i &&
              (t = a.ApplicationDirectoryViews.HOME),
            t)
          ) {
            case a.ApplicationDirectoryViews.HOME:
              d();
              break;
            case a.ApplicationDirectoryViews.SEARCH:
              _();
              break;
            case a.ApplicationDirectoryViews.APPLICATION:
              if (null != i) {
                if (null != c) {
                  if (
                    c === u.ApplicationDirectoryProfileSections.STORE &&
                    null != P
                  ) {
                    E({ applicationId: i, skuId: P });
                    break;
                  }
                  O({ applicationId: i, section: c });
                  break;
                }
                A({ applicationId: i });
              }
          }
        },
        d = () => {
          let e = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY, { state: e });
        },
        A = (e) => {
          let { applicationId: t } = e,
            n = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE(t), { state: n });
        },
        O = (e) => {
          let { applicationId: t, section: n } = e,
            r = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, n), {
            state: r,
          });
        },
        E = (e) => {
          let { applicationId: t, skuId: n } = e,
            r = { previousView: (0, a.getCurrentView)() };
          (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(t, n), {
            state: r,
          });
        },
        _ = function () {
          let {
              query: e,
              categoryId: t,
              page: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            r = new URLSearchParams(),
            o = { previousView: (0, a.getCurrentView)() };
          null != e && r.set("q", e),
            null != t && r.set("category_id", t.toString()),
            null != n && r.set("page", n.toString()),
            (0, i.uL)(s.Z5c.APPLICATION_DIRECTORY_SEARCH, {
              search: r.toString(),
              state: o,
            });
        },
        P = (e) => {
          let { categoryId: t } = e;
          _({ categoryId: null != t ? t : c.MU });
        },
        y = (e) => {
          let {
            location: { state: t },
          } = (0, i.s1)();
          (0, i.dL)(e, t);
        };
    },
    749681: function (e, t, n) {
      n.r(t),
        n.d(t, {
          transitionToGlobalDiscovery: function () {
            return function e(t) {
              var n, A, O;
              let E = t.tab;
              switch ((s.Z.setState({ selectedTab: E }), E)) {
                case p.GlobalDiscoveryTab.SERVERS:
                  let _ = t.selectedServersTab;
                  return (
                    null != _
                      ? i.Z.setState({
                          selectedTab: _,
                          entrypoint:
                            null !== (n = t.entrypoint) && void 0 !== n
                              ? n
                              : d.Qq.UNKNOWN,
                        })
                      : i.Z.setState({
                          entrypoint:
                            null !== (A = t.entrypoint) && void 0 !== A
                              ? A
                              : d.Qq.UNKNOWN,
                        }),
                    (0, c.uL)(S.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
                  );
                case p.GlobalDiscoveryTab.APPS:
                  if (null != t.newSessionState) {
                    let n = (0, o.PM)(),
                      { guildId: i, entrypoint: l } = t.newSessionState;
                    if (
                      (r.z8.setState({
                        sessionId: n,
                        guildId: null != i ? i : null,
                        entrypoint: l,
                        trackedOpenedFromExternalEntrypoint: !1,
                      }),
                      u.default.track(S.rMx.APP_DIRECTORY_OPENED, {
                        source: null == l ? void 0 : l.name,
                        session_id: n,
                        guild_id: i,
                        user_id:
                          null === (O = a.default.getCurrentUser()) ||
                          void 0 === O
                            ? void 0
                            : O.id,
                      }),
                      t.newSessionState.restorePreviousView)
                    )
                      return e(
                        (function () {
                          let { lastItem: e } = r.aQ.getState();
                          if (null != e)
                            switch (e.type) {
                              case r.m_.APPLICATION:
                                return {
                                  tab: p.GlobalDiscoveryTab.APPS,
                                  applicationId: e.applicationId,
                                  section: e.section,
                                };
                              case r.m_.CATEGORY:
                                return {
                                  tab: p.GlobalDiscoveryTab.APPS,
                                  categoryId: Number(e.categoryId),
                                };
                              case r.m_.SEARCH:
                                var t;
                                return {
                                  tab: p.GlobalDiscoveryTab.APPS,
                                  query:
                                    null !== (t = e.query) && void 0 !== t
                                      ? t
                                      : "",
                                  page: e.page,
                                  categoryId:
                                    null != e.categoryId
                                      ? Number(e.categoryId)
                                      : void 0,
                                };
                            }
                          return { tab: p.GlobalDiscoveryTab.APPS };
                        })(),
                      );
                  }
                  if (null != t.applicationId) {
                    if (t.section === I.GlobalDiscoveryAppsSections.STORE) {
                      if (null != t.skuId)
                        return (0, c.uL)(
                          S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                            t.applicationId,
                            t.skuId,
                          ),
                        );
                      return (0, c.uL)(
                        S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                          t.applicationId,
                          I.GlobalDiscoveryAppsSections.STORE,
                        ),
                      );
                    }
                    return (0, c.uL)(
                      S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId),
                    );
                  }
                  if (null != t.query) {
                    let e = new URLSearchParams();
                    return (
                      "" !== t.query && e.set("q", t.query),
                      null != t.categoryId &&
                        e.set("category_id", t.categoryId.toString()),
                      null != t.page && e.set("page", t.page.toString()),
                      (0, c.uL)(S.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                        search: e.toString(),
                      })
                    );
                  } else if (null != t.categoryId)
                    return (0, c.uL)(
                      S.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(
                        t.categoryId.toString(),
                      ),
                    );
                  else return (0, c.uL)(S.Z5c.GLOBAL_DISCOVERY_APPS);
                case p.GlobalDiscoveryTab.QUESTS:
                  return (0, l.navigateToQuestHome)(
                    t.location,
                    t.questContent,
                    t.questId,
                  );
                default:
                  throw Error(
                    "[transitionToGlobalDiscovery] Unhandled tab type: ".concat(
                      E,
                    ),
                  );
              }
            };
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(411104);
      var r = n(258971),
        o = n(726115),
        i = n(859921),
        l = n(341907),
        c = n(703656),
        a = n(594174),
        u = n(626135),
        s = n(836768),
        p = n(49898),
        S = n(981631),
        I = n(979007),
        d = n(128449);
    },
    258971: function (e, t, n) {
      if (
        (n.d(t, {
          Uc: function () {
            return d;
          },
          Xh: function () {
            return A;
          },
          aQ: function () {
            return S;
          },
          m_: function () {
            return r;
          },
          z8: function () {
            return I;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        12633 == n.j)
      )
        var r,
          o,
          i = n(512969);
      var l = n(972959),
        c = n(264043),
        a = n(34674),
        u = n(703656),
        s = n(979007),
        p = n(981631);
      ((o = r || (r = {})).HOME = "home"),
        (o.SEARCH = "search"),
        (o.APPLICATION = "application"),
        (o.CATEGORY = "category");
      let S = (0, l.H)(() => ({})),
        I = (0, l.H)(() => ({
          sessionId: null,
          guildId: null,
          entrypoint: null,
          trackedOpenedFromExternalEntrypoint: !1,
        }));
      function d() {
        let {
          location: { state: e },
        } = (0, u.s1)();
        return null == e ? void 0 : e.previousView;
      }
      function A() {
        var e, t, n;
        let {
          location: { pathname: r, search: o },
        } = (0, u.s1)();
        if (
          null != (0, i.LX)(r, { path: p.Z5c.GLOBAL_DISCOVERY_APPS, exact: !0 })
        )
          return { type: "home" };
        if (
          null !=
          (0, i.LX)(r, { path: p.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, exact: !0 })
        ) {
          let e = new URLSearchParams(o),
            t = { type: "search" },
            n = e.get("q");
          null != n && "" !== n && (t.query = n);
          let r = Number(e.get("category_id"));
          Number.isInteger(r) && r !== a.MU && (t.categoryId = r.toString());
          let i = Number(e.get("page"));
          return null != i && i > 1 && (t.page = i), t;
        }
        let l = (0, i.LX)(r, {
            path: [p.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")],
            exact: !0,
          }),
          { categoryId: S } =
            null !== (e = null == l ? void 0 : l.params) && void 0 !== e
              ? e
              : {};
        if (null != l && null != S) return { type: "category", categoryId: S };
        let I = (0, i.LX)(r, {
            path: [
              p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
              p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                ":applicationId",
                ":section",
              ),
              p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                ":applicationId",
                ":skuId",
              ),
            ],
            exact: !0,
          }),
          {
            applicationId: d,
            section: A,
            skuId: O,
          } = null !== (t = null == I ? void 0 : I.params) && void 0 !== t
            ? t
            : {};
        if (null != I && null != d) {
          let e =
            null === (n = c.Z.getApplication(d)) || void 0 === n
              ? void 0
              : n.name;
          return {
            type: "application",
            applicationId: d,
            applicationName: e,
            section:
              null != A
                ? A
                : null != O
                  ? s.GlobalDiscoveryAppsSections.STORE
                  : s.GlobalDiscoveryAppsSections.ABOUT,
          };
        }
      }
    },
    859921: function (e, t, n) {
      var r = n(972959);
      let o = Object.freeze({
          selectedTab: null,
          isSearchVisible: !1,
          entrypoint: null,
          searchBarState: n(49898).GlobalDiscoverySearchBarState.DEFAULT,
        }),
        i = (0, r.H)(() => o);
      t.Z = i;
    },
  },
]);
//# sourceMappingURL=f520636394d440e57e92.js.map
