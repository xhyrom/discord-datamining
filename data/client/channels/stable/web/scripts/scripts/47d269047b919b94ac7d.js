"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11866"],
  {
    736408: function (t, e, n) {
      n.d(e, {
        $: function () {
          return i;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var r = n(134432),
        o = n(768581),
        a = n(981631);
      let { API_ENDPOINT: l, CDN_HOST: c } = window.GLOBAL_ENV;
      function i(t) {
        let { itemId: e, hash: n, containerWidth: i = 1024 } = t,
          u = new URLSearchParams({
            size: (0, r.oO)(i * (0, r.x_)()).toString(),
          }).toString(),
          s = o.$k ? "webp" : "png";
        return null != c
          ? ""
              .concat(location.protocol, "//")
              .concat(c, "/app-assets/application-directory/collection-items/")
              .concat(e, "/")
              .concat(n, ".")
              .concat(s, "?")
              .concat(u)
          : ""
              .concat(location.protocol)
              .concat(l)
              .concat(
                a.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(e, n, s),
                "?",
              )
              .concat(u);
      }
    },
    34674: function (t, e, n) {
      n.d(e, {
        $_: function () {
          return _;
        },
        KQ: function () {
          return S;
        },
        MU: function () {
          return p;
        },
        RF: function () {
          return A;
        },
        m0: function () {
          return d;
        },
        rf: function () {
          return O;
        },
        tu: function () {
          return I;
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
        a = n(481060),
        l = n(911969),
        c = n(703656),
        i = n(736408),
        u = n(981631),
        s = n(388032);
      let p = 0;
      function d(t) {
        return t.id === p;
      }
      function S() {
        return { id: p, name: s.intl.string(s.t.E407b2) };
      }
      function I(t) {
        switch (t.id) {
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
      function _(t) {
        let {
          itemId: e,
          hash: n,
          containerWidth: r = parseFloat(
            o.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH,
          ),
        } = t;
        return (0, i.$)({ itemId: e, hash: n, containerWidth: r });
      }
      function O() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = new URL(location.href);
        for (let n in t) {
          let r = t[n];
          e.searchParams.set(n, r);
        }
        let n = e.pathname + e.search,
          o = (0, r.Ui)(n, !1);
        (0, c.uL)(o);
      }
      let E = (t) => {
        if (null == t) return null;
        let e = t.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != e ? e[1] : null;
      };
      function A(t) {
        switch (t.type) {
          case l.ee.MEDIA_PROXY:
            var e;
            let n = null !== (e = t.proxy_url) && void 0 !== e ? e : t.url;
            return { type: u.s9s.IMG, width: 0, height: 0, src: n };
          case l.ee.YOUTUBE:
            let r = E(t.url);
            if (null != r)
              return { type: u.s9s.YOUTUBE_VIDEO, youtubeVideoId: r };
        }
        return console.warn("Unsupported carousel item", t), null;
      }
    },
    749681: function (t, e, n) {
      n.r(e),
        n.d(e, {
          transitionToGlobalDiscovery: function () {
            return function t(e) {
              var n, _, O;
              let E = e.tab;
              switch ((s.Z.setState({ selectedTab: E }), E)) {
                case p.GlobalDiscoveryTab.SERVERS:
                  let A = e.selectedServersTab;
                  return (
                    null != A
                      ? a.Z.setState({
                          selectedTab: A,
                          entrypoint:
                            null !== (n = e.entrypoint) && void 0 !== n
                              ? n
                              : I.Qq.UNKNOWN,
                        })
                      : a.Z.setState({
                          entrypoint:
                            null !== (_ = e.entrypoint) && void 0 !== _
                              ? _
                              : I.Qq.UNKNOWN,
                        }),
                    (0, c.uL)(d.Z5c.GLOBAL_DISCOVERY_SERVERS, e.extra)
                  );
                case p.GlobalDiscoveryTab.APPS:
                  if (null != e.newSessionState) {
                    let n = (0, o.PM)(),
                      { guildId: a, entrypoint: l } = e.newSessionState;
                    if (
                      (r.z8.setState({
                        sessionId: n,
                        guildId: null != a ? a : null,
                        entrypoint: l,
                        trackedOpenedFromExternalEntrypoint: !1,
                      }),
                      u.default.track(d.rMx.APP_DIRECTORY_OPENED, {
                        source: null == l ? void 0 : l.name,
                        session_id: n,
                        guild_id: a,
                        user_id:
                          null === (O = i.default.getCurrentUser()) ||
                          void 0 === O
                            ? void 0
                            : O.id,
                      }),
                      e.newSessionState.restorePreviousView)
                    )
                      return t(
                        (function () {
                          let { lastItem: t } = r.aQ.getState();
                          if (null != t)
                            switch (t.type) {
                              case r.m_.APPLICATION:
                                return {
                                  tab: p.GlobalDiscoveryTab.APPS,
                                  applicationId: t.applicationId,
                                  section: t.section,
                                };
                              case r.m_.CATEGORY:
                                return {
                                  tab: p.GlobalDiscoveryTab.APPS,
                                  categoryId: Number(t.categoryId),
                                };
                              case r.m_.SEARCH:
                                var e;
                                return {
                                  tab: p.GlobalDiscoveryTab.APPS,
                                  query:
                                    null !== (e = t.query) && void 0 !== e
                                      ? e
                                      : "",
                                  page: t.page,
                                  categoryId:
                                    null != t.categoryId
                                      ? Number(t.categoryId)
                                      : void 0,
                                };
                            }
                          return { tab: p.GlobalDiscoveryTab.APPS };
                        })(),
                      );
                  }
                  if (null != e.applicationId) {
                    if (e.section === S.GlobalDiscoveryAppsSections.STORE) {
                      if (null != e.skuId)
                        return (0, c.uL)(
                          d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                            e.applicationId,
                            e.skuId,
                          ),
                        );
                      return (0, c.uL)(
                        d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                          e.applicationId,
                          S.GlobalDiscoveryAppsSections.STORE,
                        ),
                      );
                    }
                    return (0, c.uL)(
                      d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId),
                    );
                  }
                  if (null != e.query) {
                    let t = new URLSearchParams();
                    return (
                      "" !== e.query && t.set("q", e.query),
                      null != e.categoryId &&
                        t.set("category_id", e.categoryId.toString()),
                      null != e.page && t.set("page", e.page.toString()),
                      (0, c.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                        search: t.toString(),
                      })
                    );
                  } else if (null != e.categoryId)
                    return (0, c.uL)(
                      d.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(
                        e.categoryId.toString(),
                      ),
                    );
                  else return (0, c.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS);
                case p.GlobalDiscoveryTab.QUESTS:
                  return (0, l.navigateToQuestHome)(
                    e.location,
                    e.questContent,
                    e.questId,
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
        a = n(859921),
        l = n(341907),
        c = n(703656),
        i = n(594174),
        u = n(626135),
        s = n(836768),
        p = n(49898),
        d = n(981631),
        S = n(979007),
        I = n(128449);
    },
    258971: function (t, e, n) {
      if (
        (n.d(e, {
          Uc: function () {
            return I;
          },
          Xh: function () {
            return _;
          },
          aQ: function () {
            return d;
          },
          m_: function () {
            return r;
          },
          z8: function () {
            return S;
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
          a = n(512969);
      var l = n(972959),
        c = n(264043),
        i = n(34674),
        u = n(703656),
        s = n(979007),
        p = n(981631);
      ((o = r || (r = {})).HOME = "home"),
        (o.SEARCH = "search"),
        (o.APPLICATION = "application"),
        (o.CATEGORY = "category");
      let d = (0, l.H)(() => ({})),
        S = (0, l.H)(() => ({
          sessionId: null,
          guildId: null,
          entrypoint: null,
          trackedOpenedFromExternalEntrypoint: !1,
        }));
      function I() {
        let {
          location: { state: t },
        } = (0, u.s1)();
        return null == t ? void 0 : t.previousView;
      }
      function _() {
        var t, e, n;
        let {
          location: { pathname: r, search: o },
        } = (0, u.s1)();
        if (
          null != (0, a.LX)(r, { path: p.Z5c.GLOBAL_DISCOVERY_APPS, exact: !0 })
        )
          return { type: "home" };
        if (
          null !=
          (0, a.LX)(r, { path: p.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, exact: !0 })
        ) {
          let t = new URLSearchParams(o),
            e = { type: "search" },
            n = t.get("q");
          null != n && "" !== n && (e.query = n);
          let r = Number(t.get("category_id"));
          Number.isInteger(r) && r !== i.MU && (e.categoryId = r.toString());
          let a = Number(t.get("page"));
          return null != a && a > 1 && (e.page = a), e;
        }
        let l = (0, a.LX)(r, {
            path: [p.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")],
            exact: !0,
          }),
          { categoryId: d } =
            null !== (t = null == l ? void 0 : l.params) && void 0 !== t
              ? t
              : {};
        if (null != l && null != d) return { type: "category", categoryId: d };
        let S = (0, a.LX)(r, {
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
            applicationId: I,
            section: _,
            skuId: O,
          } = null !== (e = null == S ? void 0 : S.params) && void 0 !== e
            ? e
            : {};
        if (null != S && null != I) {
          let t =
            null === (n = c.Z.getApplication(I)) || void 0 === n
              ? void 0
              : n.name;
          return {
            type: "application",
            applicationId: I,
            applicationName: t,
            section:
              null != _
                ? _
                : null != O
                  ? s.GlobalDiscoveryAppsSections.STORE
                  : s.GlobalDiscoveryAppsSections.ABOUT,
          };
        }
      }
    },
    859921: function (t, e, n) {
      var r = n(972959);
      let o = Object.freeze({
          selectedTab: null,
          isSearchVisible: !1,
          entrypoint: null,
          searchBarState: n(49898).GlobalDiscoverySearchBarState.DEFAULT,
        }),
        a = (0, r.H)(() => o);
      e.Z = a;
    },
  },
]);
//# sourceMappingURL=47d269047b919b94ac7d.js.map
