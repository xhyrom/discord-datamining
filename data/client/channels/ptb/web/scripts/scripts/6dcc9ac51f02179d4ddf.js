"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11866"],
  {
    736408: function (t, e, n) {
      n.d(e, {
        $: function () {
          return c;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var r = n(134432),
        l = n(768581),
        a = n(981631);
      let { API_ENDPOINT: o, CDN_HOST: i } = window.GLOBAL_ENV;
      function c(t) {
        let { itemId: e, hash: n, containerWidth: c = 1024 } = t,
          u = new URLSearchParams({
            size: (0, r.oO)(c * (0, r.x_)()).toString(),
          }).toString(),
          s = l.$k ? "webp" : "png";
        return null != i
          ? ""
              .concat(location.protocol, "//")
              .concat(i, "/app-assets/application-directory/collection-items/")
              .concat(e, "/")
              .concat(n, ".")
              .concat(s, "?")
              .concat(u)
          : ""
              .concat(location.protocol)
              .concat(o)
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
          return s;
        },
        KQ: function () {
          return u;
        },
        MU: function () {
          return c;
        },
        RF: function () {
          return S;
        },
      }),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120),
        n(860911);
      var r = n(477690);
      n(481060);
      var l = n(911969);
      n(703656);
      var a = n(736408),
        o = n(981631),
        i = n(388032);
      let c = 0;
      function u() {
        return { id: c, name: i.intl.string(i.t.E407b2) };
      }
      function s(t) {
        let {
          itemId: e,
          hash: n,
          containerWidth: l = parseFloat(
            r.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH,
          ),
        } = t;
        return (0, a.$)({ itemId: e, hash: n, containerWidth: l });
      }
      let p = (t) => {
        if (null == t) return null;
        let e = t.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != e ? e[1] : null;
      };
      function S(t) {
        switch (t.type) {
          case l.ee.MEDIA_PROXY:
            var e;
            let n = null !== (e = t.proxy_url) && void 0 !== e ? e : t.url;
            return { type: o.s9s.IMG, width: 0, height: 0, src: n };
          case l.ee.YOUTUBE:
            let r = p(t.url);
            if (null != r)
              return { type: o.s9s.YOUTUBE_VIDEO, youtubeVideoId: r };
        }
        return console.warn("Unsupported carousel item", t), null;
      }
    },
    749681: function (t, e, n) {
      n.r(e),
        n.d(e, {
          transitionToGlobalDiscovery: function () {
            return function t(e) {
              var n, I, O;
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
                              : _.Qq.UNKNOWN,
                        })
                      : a.Z.setState({
                          entrypoint:
                            null !== (I = e.entrypoint) && void 0 !== I
                              ? I
                              : _.Qq.UNKNOWN,
                        }),
                    (0, i.uL)(S.Z5c.GLOBAL_DISCOVERY_SERVERS, e.extra)
                  );
                case p.GlobalDiscoveryTab.APPS:
                  if (null != e.newSessionState) {
                    let n = (0, l.PM)(),
                      { guildId: a, entrypoint: o } = e.newSessionState;
                    if (
                      (r.z8.setState({
                        sessionId: n,
                        guildId: null != a ? a : null,
                        entrypoint: o,
                        trackedOpenedFromExternalEntrypoint: !1,
                      }),
                      u.default.track(S.rMx.APP_DIRECTORY_OPENED, {
                        source: null == o ? void 0 : o.name,
                        session_id: n,
                        guild_id: a,
                        user_id:
                          null === (O = c.default.getCurrentUser()) ||
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
                    if (e.section === d.GlobalDiscoveryAppsSections.STORE) {
                      if (null != e.skuId)
                        return (0, i.uL)(
                          S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                            e.applicationId,
                            e.skuId,
                          ),
                        );
                      return (0, i.uL)(
                        S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                          e.applicationId,
                          d.GlobalDiscoveryAppsSections.STORE,
                        ),
                      );
                    }
                    return (0, i.uL)(
                      S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId),
                    );
                  }
                  if (null != e.query) {
                    let t = new URLSearchParams();
                    return (
                      "" !== e.query && t.set("q", e.query),
                      null != e.categoryId &&
                        t.set("category_id", e.categoryId.toString()),
                      null != e.page && t.set("page", e.page.toString()),
                      (0, i.uL)(S.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                        search: t.toString(),
                      })
                    );
                  } else if (null != e.categoryId)
                    return (0, i.uL)(
                      S.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(
                        e.categoryId.toString(),
                      ),
                    );
                  else return (0, i.uL)(S.Z5c.GLOBAL_DISCOVERY_APPS);
                case p.GlobalDiscoveryTab.QUESTS:
                  return (0, o.navigateToQuestHome)(
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
        l = n(726115),
        a = n(859921),
        o = n(341907),
        i = n(703656),
        c = n(594174),
        u = n(626135),
        s = n(836768),
        p = n(49898),
        S = n(981631),
        d = n(979007),
        _ = n(128449);
    },
    258971: function (t, e, n) {
      if (
        (n.d(e, {
          Uc: function () {
            return _;
          },
          Xh: function () {
            return I;
          },
          aQ: function () {
            return S;
          },
          m_: function () {
            return r;
          },
          z8: function () {
            return d;
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
          l,
          a = n(512969);
      var o = n(972959),
        i = n(264043),
        c = n(34674),
        u = n(703656),
        s = n(979007),
        p = n(981631);
      ((l = r || (r = {})).HOME = "home"),
        (l.SEARCH = "search"),
        (l.APPLICATION = "application"),
        (l.CATEGORY = "category");
      let S = (0, o.H)(() => ({})),
        d = (0, o.H)(() => ({
          sessionId: null,
          guildId: null,
          entrypoint: null,
          trackedOpenedFromExternalEntrypoint: !1,
        }));
      function _() {
        let {
          location: { state: t },
        } = (0, u.s1)();
        return null == t ? void 0 : t.previousView;
      }
      function I() {
        var t, e, n;
        let {
          location: { pathname: r, search: l },
        } = (0, u.s1)();
        if (
          null != (0, a.LX)(r, { path: p.Z5c.GLOBAL_DISCOVERY_APPS, exact: !0 })
        )
          return { type: "home" };
        if (
          null !=
          (0, a.LX)(r, { path: p.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, exact: !0 })
        ) {
          let t = new URLSearchParams(l),
            e = { type: "search" },
            n = t.get("q");
          null != n && "" !== n && (e.query = n);
          let r = Number(t.get("category_id"));
          Number.isInteger(r) && r !== c.MU && (e.categoryId = r.toString());
          let a = Number(t.get("page"));
          return null != a && a > 1 && (e.page = a), e;
        }
        let o = (0, a.LX)(r, {
            path: [p.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")],
            exact: !0,
          }),
          { categoryId: S } =
            null !== (t = null == o ? void 0 : o.params) && void 0 !== t
              ? t
              : {};
        if (null != o && null != S) return { type: "category", categoryId: S };
        let d = (0, a.LX)(r, {
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
            applicationId: _,
            section: I,
            skuId: O,
          } = null !== (e = null == d ? void 0 : d.params) && void 0 !== e
            ? e
            : {};
        if (null != d && null != _) {
          let t =
            null === (n = i.Z.getApplication(_)) || void 0 === n
              ? void 0
              : n.name;
          return {
            type: "application",
            applicationId: _,
            applicationName: t,
            section:
              null != I
                ? I
                : null != O
                  ? s.GlobalDiscoveryAppsSections.STORE
                  : s.GlobalDiscoveryAppsSections.ABOUT,
          };
        }
      }
    },
    859921: function (t, e, n) {
      var r = n(972959);
      let l = Object.freeze({
          selectedTab: null,
          isSearchVisible: !1,
          entrypoint: null,
          searchBarState: n(49898).GlobalDiscoverySearchBarState.DEFAULT,
        }),
        a = (0, r.H)(() => l);
      e.Z = a;
    },
  },
]);
//# sourceMappingURL=6dcc9ac51f02179d4ddf.js.map
