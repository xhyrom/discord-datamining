"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38042"],
  {
    837057(e, t, r) {
      r.d(t, {
        transitionToGlobalDiscovery: () =>
          function e(t) {
            let r = t.tab;
            switch ((u.A.setState({ selectedTab: r }), r)) {
              case S.GlobalDiscoveryTab.SERVERS:
                let b = t.selectedServersTab;
                return (
                  null != b
                    ? n.A.setState({
                        selectedTab: b,
                        entrypoint: t.entrypoint ?? y.J8.UNKNOWN,
                      })
                    : n.A.setState({
                        entrypoint: t.entrypoint ?? y.J8.UNKNOWN,
                      }),
                  (0, s.pX)(d.BVt.GLOBAL_DISCOVERY_SERVERS, t.extra)
                );
              case S.GlobalDiscoveryTab.APPS:
                if (null != t.newSessionState) {
                  let r = (0, o.YP)(),
                    { guildId: n, entrypoint: i } = t.newSessionState;
                  if (
                    (a.h.setState({
                      sessionId: r,
                      guildId: n ?? null,
                      entrypoint: i,
                      trackedOpenedFromExternalEntrypoint: !1,
                    }),
                    c.default.track(d.HAw.APP_DIRECTORY_OPENED, {
                      source: i?.name,
                      session_id: r,
                      guild_id: n,
                      user_id: l.default.getCurrentUser()?.id,
                    }),
                    t.newSessionState.restorePreviousView)
                  )
                    return e(
                      (function () {
                        let { lastItem: e } = a.tS.getState();
                        if (null != e)
                          switch (e.type) {
                            case a.ev.APPLICATION:
                              return {
                                tab: S.GlobalDiscoveryTab.APPS,
                                applicationId: e.applicationId,
                                section: e.section,
                              };
                            case a.ev.CATEGORY:
                              return {
                                tab: S.GlobalDiscoveryTab.APPS,
                                categoryId: Number(e.categoryId),
                              };
                            case a.ev.SEARCH:
                              return {
                                tab: S.GlobalDiscoveryTab.APPS,
                                query: e.query ?? "",
                                page: e.page,
                                categoryId:
                                  null != e.categoryId
                                    ? Number(e.categoryId)
                                    : void 0,
                              };
                          }
                        return { tab: S.GlobalDiscoveryTab.APPS };
                      })(),
                    );
                }
                if (null != t.applicationId) {
                  if (t.section === p.GlobalDiscoveryAppsSections.STORE)
                    if (null != t.skuId)
                      return (0, s.pX)(
                        d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                          t.applicationId,
                          t.skuId,
                        ),
                      );
                    else
                      return (0, s.pX)(
                        d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                          t.applicationId,
                          p.GlobalDiscoveryAppsSections.STORE,
                        ),
                      );
                  return (0, s.pX)(
                    d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId),
                  );
                }
                if (null != t.query) {
                  let e = new URLSearchParams();
                  return (
                    "" !== t.query && e.set("q", t.query),
                    null != t.categoryId &&
                      e.set("category_id", t.categoryId.toString()),
                    null != t.page && e.set("page", t.page.toString()),
                    (0, s.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, {
                      search: e.toString(),
                    })
                  );
                }
                if (null != t.categoryId)
                  return (0, s.pX)(
                    d.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(
                      t.categoryId.toString(),
                    ),
                  );
                else return (0, s.pX)(d.BVt.GLOBAL_DISCOVERY_APPS);
              case S.GlobalDiscoveryTab.QUESTS:
                return (0, i.navigateToQuestHome)({
                  fromContent: t.questContent,
                  questId: t.questId,
                  forceDiscoveryQuestHomeRoute: !0,
                });
              default:
                throw Error(
                  `[transitionToGlobalDiscovery] Unhandled tab type: ${r}`,
                );
            }
          },
      }),
        r(323874),
        r(14289),
        r(35956);
      var a = r(310419),
        o = r(965660),
        n = r(601193),
        i = r(545986),
        s = r(976860),
        l = r(287809),
        c = r(954571),
        u = r(726845),
        S = r(488995),
        d = r(652215),
        p = r(435220),
        y = r(324580);
    },
    601193(e, t, r) {
      r.d(t, { A: () => n });
      var a = r(839214);
      let o = Object.freeze({
          selectedTab: null,
          isSearchVisible: !1,
          entrypoint: null,
          searchBarState: r(488995).GlobalDiscoverySearchBarState.DEFAULT,
        }),
        n = (0, a.D)(() => o);
    },
  },
]);
//# sourceMappingURL=38042.ef6f4c0f59295999.js.map
