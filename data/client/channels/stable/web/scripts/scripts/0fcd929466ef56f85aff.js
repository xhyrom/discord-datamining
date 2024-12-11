"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11866"],
  {
    34674: function (e, t, n) {
      n.d(t, {
        $_: function () {
          return A;
        },
        KQ: function () {
          return O;
        },
        MU: function () {
          return d;
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
      let d = 0,
        { API_ENDPOINT: S, CDN_HOST: I } = window.GLOBAL_ENV;
      function _(e) {
        return e.id === d;
      }
      function O() {
        return { id: d, name: p.intl.string(p.t.E407b2) };
      }
      function E(e) {
        switch (e.id) {
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
      function A(e) {
        let { itemId: t, hash: n } = e,
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
              .concat(t, "/")
              .concat(n, ".")
              .concat(o, "?")
              .concat(r)
          : ""
              .concat(location.protocol)
              .concat(S)
              .concat(
                s.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, o),
                "?",
              )
              .concat(r);
      }
      function P() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = new URL(location.href);
        for (let n in e) {
          let r = e[n];
          t.searchParams.set(n, r);
        }
        let n = t.pathname + t.search,
          a = (0, r.Ui)(n, !1);
        (0, i.uL)(a);
      }
      let L = (e) => {
        if (null == e) return null;
        let t = e.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != t ? t[1] : null;
      };
      function y(e) {
        switch (e.type) {
          case l.ee.MEDIA_PROXY:
            var t;
            let n = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
            return { type: s.s9s.IMG, width: 0, height: 0, src: n };
          case l.ee.YOUTUBE:
            let r = L(e.url);
            if (null != r)
              return { type: s.s9s.YOUTUBE_VIDEO, youtubeVideoId: r };
        }
        return console.warn("Unsupported carousel item", e), null;
      }
    },
    749681: function (e, t, n) {
      n.r(t),
        n.d(t, {
          transitionToGlobalDiscovery: function () {
            return function e(t) {
              var n, _, O;
              let E = t.tab;
              switch ((s.Z.setState({ selectedTab: E }), E)) {
                case p.GlobalDiscoveryTab.SERVERS:
                  let A = t.selectedServersTab;
                  return (
                    null != A
                      ? o.Z.setState({
                          selectedTab: A,
                          entrypoint:
                            null !== (n = t.entrypoint) && void 0 !== n
                              ? n
                              : I.Qq.UNKNOWN,
                        })
                      : o.Z.setState({
                          entrypoint:
                            null !== (_ = t.entrypoint) && void 0 !== _
                              ? _
                              : I.Qq.UNKNOWN,
                        }),
                    (0, c.uL)(d.Z5c.GLOBAL_DISCOVERY_SERVERS, t.extra)
                  );
                case p.GlobalDiscoveryTab.APPS:
                  if (null != t.newSessionState) {
                    let n = (0, a.PM)(),
                      { guildId: o, entrypoint: l } = t.newSessionState;
                    if (
                      (r.z8.setState({
                        sessionId: n,
                        guildId: null != o ? o : null,
                        entrypoint: l,
                        trackedOpenedFromExternalEntrypoint: !1,
                      }),
                      u.default.track(d.rMx.APP_DIRECTORY_OPENED, {
                        source: null == l ? void 0 : l.name,
                        session_id: n,
                        guild_id: o,
                        user_id:
                          null === (O = i.default.getCurrentUser()) ||
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
                    if (t.section === S.GlobalDiscoveryAppsSections.STORE) {
                      if (null != t.skuId)
                        return (0, c.uL)(
                          d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                            t.applicationId,
                            t.skuId,
                          ),
                        );
                      return (0, c.uL)(
                        d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                          t.applicationId,
                          S.GlobalDiscoveryAppsSections.STORE,
                        ),
                      );
                    }
                    return (0, c.uL)(
                      d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId),
                    );
                  }
                  if (null != t.query) {
                    let e = new URLSearchParams();
                    return (
                      "" !== t.query && e.set("q", t.query),
                      null != t.categoryId &&
                        e.set("category_id", t.categoryId.toString()),
                      null != t.page && e.set("page", t.page.toString()),
                      (0, c.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                        search: e.toString(),
                      })
                    );
                  } else if (null != t.categoryId)
                    return (0, c.uL)(
                      d.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(
                        t.categoryId.toString(),
                      ),
                    );
                  else return (0, c.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS);
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
        a = n(726115),
        o = n(859921),
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
    258971: function (e, t, n) {
      if (
        (n.d(t, {
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
      let d = (0, l.H)(() => ({})),
        S = (0, l.H)(() => ({
          sessionId: null,
          guildId: null,
          entrypoint: null,
          trackedOpenedFromExternalEntrypoint: !1,
        }));
      function I() {
        let {
          location: { state: e },
        } = (0, u.s1)();
        return null == e ? void 0 : e.previousView;
      }
      function _() {
        var e, t, n;
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
          let e = new URLSearchParams(a),
            t = { type: "search" },
            n = e.get("q");
          null != n && "" !== n && (t.query = n);
          let r = Number(e.get("category_id"));
          Number.isInteger(r) && r !== i.MU && (t.categoryId = r.toString());
          let o = Number(e.get("page"));
          return null != o && o > 1 && (t.page = o), t;
        }
        let l = (0, o.LX)(r, {
            path: [p.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")],
            exact: !0,
          }),
          { categoryId: d } =
            null !== (e = null == l ? void 0 : l.params) && void 0 !== e
              ? e
              : {};
        if (null != l && null != d) return { type: "category", categoryId: d };
        let S = (0, o.LX)(r, {
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
          } = null !== (t = null == S ? void 0 : S.params) && void 0 !== t
            ? t
            : {};
        if (null != S && null != I) {
          let e =
            null === (n = c.Z.getApplication(I)) || void 0 === n
              ? void 0
              : n.name;
          return {
            type: "application",
            applicationId: I,
            applicationName: e,
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
    859921: function (e, t, n) {
      var r = n(972959);
      let a = Object.freeze({
          selectedTab: null,
          isSearchVisible: !1,
          entrypoint: null,
          searchBarState: n(49898).GlobalDiscoverySearchBarState.DEFAULT,
        }),
        o = (0, r.H)(() => a);
      t.Z = o;
    },
  },
]);
//# sourceMappingURL=0fcd929466ef56f85aff.js.map
