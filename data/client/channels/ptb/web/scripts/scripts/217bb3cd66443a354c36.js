"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81463"],
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
        o = n(981631);
      let { API_ENDPOINT: a, CDN_HOST: i } = window.GLOBAL_ENV;
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
              .concat(a)
              .concat(
                o.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(e, n, s),
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
          return d;
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
      var o = n(736408),
        a = n(981631),
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
        return (0, o.$)({ itemId: e, hash: n, containerWidth: l });
      }
      let p = (t) => {
        if (null == t) return null;
        let e = t.match(
          /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/,
        );
        return null != e ? e[1] : null;
      };
      function d(t) {
        switch (t.type) {
          case l.ee.MEDIA_PROXY:
            var e;
            let n = null !== (e = t.proxy_url) && void 0 !== e ? e : t.url;
            return { type: a.s9s.IMG, width: 0, height: 0, src: n };
          case l.ee.YOUTUBE:
            let r = p(t.url);
            if (null != r)
              return { type: a.s9s.YOUTUBE_VIDEO, youtubeVideoId: r };
        }
        return console.warn("Unsupported carousel item", t), null;
      }
    },
    147890: function (t, e, n) {
      n.d(e, {
        dx: function () {
          return i;
        },
      }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var r = n(749681);
      n(703656), n(34674), n(132871);
      var l = n(272242);
      n(981631);
      var o = n(49898),
        a = n(979007);
      let i = (t) => {
        let {
            guildId: e,
            applicationId: n,
            applicationSection: i,
            entrypoint: c,
            skuId: u,
            restorePreviousView: s,
          } = t,
          p =
            null == n
              ? void 0
              : i === l.c.STORE
                ? a.GlobalDiscoveryAppsSections.STORE
                : a.GlobalDiscoveryAppsSections.ABOUT;
        return (0, r.transitionToGlobalDiscovery)({
          tab: o.GlobalDiscoveryTab.APPS,
          applicationId: n,
          section: p,
          skuId: p === a.GlobalDiscoveryAppsSections.STORE ? u : void 0,
          newSessionState: {
            guildId: null != e ? e : null,
            entrypoint: c,
            restorePreviousView: s,
          },
        });
      };
    },
    749681: function (t, e, n) {
      n.r(e),
        n.d(e, {
          transitionToGlobalDiscovery: function () {
            return function t(e) {
              var n, I, _;
              let E = e.tab;
              switch ((s.Z.setState({ selectedTab: E }), E)) {
                case p.GlobalDiscoveryTab.SERVERS:
                  let P = e.selectedServersTab;
                  return (
                    null != P
                      ? o.Z.setState({
                          selectedTab: P,
                          entrypoint:
                            null !== (n = e.entrypoint) && void 0 !== n
                              ? n
                              : O.Qq.UNKNOWN,
                        })
                      : o.Z.setState({
                          entrypoint:
                            null !== (I = e.entrypoint) && void 0 !== I
                              ? I
                              : O.Qq.UNKNOWN,
                        }),
                    (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_SERVERS, e.extra)
                  );
                case p.GlobalDiscoveryTab.APPS:
                  if (null != e.newSessionState) {
                    let n = (0, l.PM)(),
                      { guildId: o, entrypoint: a } = e.newSessionState;
                    if (
                      (r.z8.setState({
                        sessionId: n,
                        guildId: null != o ? o : null,
                        entrypoint: a,
                        trackedOpenedFromExternalEntrypoint: !1,
                      }),
                      u.default.track(d.rMx.APP_DIRECTORY_OPENED, {
                        source: null == a ? void 0 : a.name,
                        session_id: n,
                        guild_id: o,
                        user_id:
                          null === (_ = c.default.getCurrentUser()) ||
                          void 0 === _
                            ? void 0
                            : _.id,
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
                        return (0, i.uL)(
                          d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                            e.applicationId,
                            e.skuId,
                          ),
                        );
                      return (0, i.uL)(
                        d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                          e.applicationId,
                          S.GlobalDiscoveryAppsSections.STORE,
                        ),
                      );
                    }
                    return (0, i.uL)(
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
                      (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                        search: t.toString(),
                      })
                    );
                  } else if (null != e.categoryId)
                    return (0, i.uL)(
                      d.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(
                        e.categoryId.toString(),
                      ),
                    );
                  else return (0, i.uL)(d.Z5c.GLOBAL_DISCOVERY_APPS);
                case p.GlobalDiscoveryTab.QUESTS:
                  return (0, a.navigateToQuestHome)(
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
        o = n(859921),
        a = n(341907),
        i = n(703656),
        c = n(594174),
        u = n(626135),
        s = n(836768),
        p = n(49898),
        d = n(981631),
        S = n(979007),
        O = n(128449);
    },
    258971: function (t, e, n) {
      if (
        (n.d(e, {
          Uc: function () {
            return O;
          },
          Xh: function () {
            return I;
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
          l,
          o = n(512969);
      var a = n(972959),
        i = n(264043),
        c = n(34674),
        u = n(703656),
        s = n(979007),
        p = n(981631);
      ((l = r || (r = {})).HOME = "home"),
        (l.SEARCH = "search"),
        (l.APPLICATION = "application"),
        (l.CATEGORY = "category");
      let d = (0, a.H)(() => ({})),
        S = (0, a.H)(() => ({
          sessionId: null,
          guildId: null,
          entrypoint: null,
          trackedOpenedFromExternalEntrypoint: !1,
        }));
      function O() {
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
          null != (0, o.LX)(r, { path: p.Z5c.GLOBAL_DISCOVERY_APPS, exact: !0 })
        )
          return { type: "home" };
        if (
          null !=
          (0, o.LX)(r, { path: p.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, exact: !0 })
        ) {
          let t = new URLSearchParams(l),
            e = { type: "search" },
            n = t.get("q");
          null != n && "" !== n && (e.query = n);
          let r = Number(t.get("category_id"));
          Number.isInteger(r) && r !== c.MU && (e.categoryId = r.toString());
          let o = Number(t.get("page"));
          return null != o && o > 1 && (e.page = o), e;
        }
        let a = (0, o.LX)(r, {
            path: [p.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")],
            exact: !0,
          }),
          { categoryId: d } =
            null !== (t = null == a ? void 0 : a.params) && void 0 !== t
              ? t
              : {};
        if (null != a && null != d) return { type: "category", categoryId: d };
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
            applicationId: O,
            section: I,
            skuId: _,
          } = null !== (e = null == S ? void 0 : S.params) && void 0 !== e
            ? e
            : {};
        if (null != S && null != O) {
          let t =
            null === (n = i.Z.getApplication(O)) || void 0 === n
              ? void 0
              : n.name;
          return {
            type: "application",
            applicationId: O,
            applicationName: t,
            section:
              null != I
                ? I
                : null != _
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
        o = (0, r.H)(() => l);
      e.Z = o;
    },
    671533: function (t, e, n) {
      n(411104);
      var r,
        l,
        o = n(200651);
      n(192379);
      var a = n(120356),
        i = n.n(a),
        c = n(331595),
        u = n(485270);
      ((l = r || (r = {})).LEFT = "LEFT"),
        (l.RIGHT = "RIGHT"),
        (l.UP = "UP"),
        (l.DOWN = "DOWN"),
        (l.UP_LEFT = "UP_LEFT"),
        (l.DOWN_RIGHT = "DOWN_RIGHT");
      let s = (t) => {
        let {
          width: e = 24,
          height: n = 24,
          color: r = "currentColor",
          direction: l,
          foreground: a,
          className: s,
          title: p,
          ...d
        } = t;
        return (0, o.jsxs)("svg", {
          ...(0, c.Z)(d),
          width: e,
          height: n,
          className: i()(
            s,
            (function (t) {
              switch (t) {
                case "LEFT":
                  return u.left;
                case "RIGHT":
                  return u.right;
                case "UP":
                  return null;
                case "DOWN":
                  return u.down;
                case "UP_LEFT":
                  return u.upLeft;
                case "DOWN_RIGHT":
                  return u.downRight;
                default:
                  throw Error("Invalid Direction ".concat(t));
              }
            })(l),
          ),
          viewBox: "0 0 24 24",
          children: [
            null != p ? (0, o.jsx)("title", { children: p }) : null,
            (0, o.jsx)("polygon", {
              className: a,
              fill: r,
              fillRule: "nonzero",
              points:
                "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8",
            }),
          ],
        });
      };
      (s.Directions = r), (e.Z = s);
    },
  },
]);
//# sourceMappingURL=217bb3cd66443a354c36.js.map
