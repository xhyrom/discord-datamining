"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11866"],
  {
    34674: function (t, e, n) {
      n.d(e, {
        $_: function () {
          return A;
        },
        KQ: function () {
          return O;
        },
        MU: function () {
          return S;
        },
        RF: function () {
          return y;
        },
        m0: function () {
          return _;
        },
        rf: function () {
          return P;
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
        a = n(477690),
        o = n(481060),
        l = n(911969),
        c = n(134432),
        i = n(703656),
        u = n(768581),
        s = n(981631),
        p = n(388032);
      let S = 0,
        { API_ENDPOINT: d, CDN_HOST: I } = window.GLOBAL_ENV;
      function _(t) {
        return t.id === S;
      }
      function O() {
        return { id: S, name: p.intl.string(p.t.E407b2) };
      }
      function E(t) {
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
      function A(t) {
        let { itemId: e, hash: n } = t,
          r = new URLSearchParams({
            size: (0, c.oO)(
              parseFloat(a.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) *
                (0, c.x_)(),
            ).toString(),
          }).toString(),
          o = u.$k ? "webp" : "png";
        return null != I
          ? ""
              .concat(location.protocol, "//")
              .concat(I, "/app-assets/application-directory/collection-items/")
              .concat(e, "/")
              .concat(n, ".")
              .concat(o, "?")
              .concat(r)
          : ""
              .concat(location.protocol)
              .concat(d)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(e, n, o),
                "?",
              )
              .concat(r);
      }
      function P() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = new URL(location.href);
        for (let n in t) {
          let r = t[n];
          e.searchParams.set(n, r);
        }
        let n = e.pathname + e.search,
          a = (0, r.Ui)(n, !1);
        (0, i.uL)(a);
      }
      let L = (t) => {
        if (null == t) return null;
        let e = t.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != e ? e[1] : null;
      };
      function y(t) {
        switch (t.type) {
          case l.ee.MEDIA_PROXY:
            var e;
            let n = null !== (e = t.proxy_url) && void 0 !== e ? e : t.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: n };
          case l.ee.YOUTUBE:
            let r = L(t.url);
            if (null != r)
              return { type: s.s9s.YOUTUBE_VIDEO, youtubeVideoId: r };
        }
        return console.warn("Unsupported carousel item", t), null;
      }
    },
    749681: function (t, e, n) {
      n.r(e),
        n.d(e, {
          transitionToGlobalDiscovery: function () {
            return function t(e) {
              let n = e.tab;
              switch ((u.Z.setState({ selectedTab: n }), n)) {
                case s.GlobalDiscoveryTab.SERVERS:
                  var I, _;
                  let O = e.selectedServersTab;
                  return (
                    null != O
                      ? o.Z.setState({
                          selectedTab: O,
                          entrypoint:
                            null !== (I = e.entrypoint) && void 0 !== I
                              ? I
                              : d.Qq.UNKNOWN,
                        })
                      : o.Z.setState({
                          entrypoint:
                            null !== (_ = e.entrypoint) && void 0 !== _
                              ? _
                              : d.Qq.UNKNOWN,
                        }),
                    (0, c.uL)(p.Z5c.GLOBAL_DISCOVERY_SERVERS, e.extra)
                  );
                case s.GlobalDiscoveryTab.APPS:
                  if (null != e.newSessionState) {
                    let n = (0, a.PM)(),
                      { guildId: o, entrypoint: l } = e.newSessionState;
                    if (
                      (r.z8.setState({
                        sessionId: n,
                        guildId: null != o ? o : null,
                        entrypoint: l,
                        trackedOpenedFromExternalEntrypoint: !1,
                      }),
                      i.default.track(p.rMx.APP_DIRECTORY_OPENED, {
                        source: null == l ? void 0 : l.name,
                        session_id: n,
                        guild_id: o,
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
                                  tab: s.GlobalDiscoveryTab.APPS,
                                  applicationId: t.applicationId,
                                  section: t.section,
                                };
                              case r.m_.CATEGORY:
                                return {
                                  tab: s.GlobalDiscoveryTab.APPS,
                                  categoryId: Number(t.categoryId),
                                };
                              case r.m_.SEARCH:
                                var e;
                                return {
                                  tab: s.GlobalDiscoveryTab.APPS,
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
                          return { tab: s.GlobalDiscoveryTab.APPS };
                        })(),
                      );
                  }
                  if (null != e.applicationId) {
                    if (e.section === S.GlobalDiscoveryAppsSections.STORE) {
                      if (null != e.skuId)
                        return (0, c.uL)(
                          p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                            e.applicationId,
                            e.skuId,
                          ),
                        );
                      return (0, c.uL)(
                        p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                          e.applicationId,
                          S.GlobalDiscoveryAppsSections.STORE,
                        ),
                      );
                    }
                    return (0, c.uL)(
                      p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId),
                    );
                  }
                  if (null != e.query) {
                    let t = new URLSearchParams();
                    return (
                      "" !== e.query && t.set("q", e.query),
                      null != e.categoryId &&
                        t.set("category_id", e.categoryId.toString()),
                      null != e.page && t.set("page", e.page.toString()),
                      (0, c.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                        search: t.toString(),
                      })
                    );
                  } else if (null != e.categoryId)
                    return (0, c.uL)(
                      p.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(
                        e.categoryId.toString(),
                      ),
                    );
                  else return (0, c.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS);
                case s.GlobalDiscoveryTab.QUESTS:
                  return (0, l.navigateToQuestHome)(
                    e.location,
                    e.questContent,
                    e.questId,
                  );
                default:
                  throw Error(
                    "[transitionToGlobalDiscovery] Unhandled tab type: ".concat(
                      n,
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
        a = n(726115),
        o = n(859921),
        l = n(341907),
        c = n(703656),
        i = n(626135),
        u = n(836768),
        s = n(49898),
        p = n(981631),
        S = n(979007),
        d = n(128449);
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
          a,
          o = n(512969);
      var l = n(972959),
        c = n(264043),
        i = n(34674),
        u = n(703656),
        s = n(979007),
        p = n(981631);
      ((a = r || (r = {})).HOME = "home"),
        (a.SEARCH = "search"),
        (a.APPLICATION = "application"),
        (a.CATEGORY = "category");
      let S = (0, l.H)(() => ({})),
        d = (0, l.H)(() => ({
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
          location: { pathname: r, search: a },
        } = (0, u.s1)();
        if (
          null != (0, o.LX)(r, { path: p.Z5c.GLOBAL_DISCOVERY_APPS, exact: !0 })
        )
          return { type: "home" };
        if (
          null !=
          (0, o.LX)(r, { path: p.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, exact: !0 })
        ) {
          let t = new URLSearchParams(a),
            e = { type: "search" },
            n = t.get("q");
          null != n && "" !== n && (e.query = n);
          let r = Number(t.get("category_id"));
          Number.isInteger(r) && r !== i.MU && (e.categoryId = r.toString());
          let o = Number(t.get("page"));
          return null != o && o > 1 && (e.page = o), e;
        }
        let l = (0, o.LX)(r, {
            path: [p.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")],
            exact: !0,
          }),
          { categoryId: S } =
            null !== (t = null == l ? void 0 : l.params) && void 0 !== t
              ? t
              : {};
        if (null != l && null != S) return { type: "category", categoryId: S };
        let d = (0, o.LX)(r, {
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
          } = null !== (e = null == d ? void 0 : d.params) && void 0 !== e
            ? e
            : {};
        if (null != d && null != I) {
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
      let a = Object.freeze({
          selectedTab: null,
          isSearchVisible: !1,
          entrypoint: null,
          searchBarState: n(49898).GlobalDiscoverySearchBarState.DEFAULT,
        }),
        o = (0, r.H)(() => a);
      e.Z = o;
    },
  },
]);
//# sourceMappingURL=7bd7ca804e2d399ddb46.js.map
