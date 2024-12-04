"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11866"],
  {
    749681: function (e, t, r) {
      r.r(t),
        r.d(t, {
          transitionToGlobalDiscovery: function () {
            return S;
          },
        }),
        r(610138),
        r(216116),
        r(78328),
        r(815648),
        r(47120),
        r(411104);
      var n = r(859921),
        a = r(341907),
        o = r(703656),
        i = r(836768),
        l = r(49898),
        c = r(981631),
        s = r(979007),
        u = r(128449);
      function S(e) {
        let t = e.tab;
        switch ((i.Z.setState({ selectedTab: t }), t)) {
          case l.GlobalDiscoveryTab.SERVERS:
            var r, S;
            let p = e.selectedServersTab;
            return (
              null != p
                ? n.Z.setState({
                    selectedTab: p,
                    entrypoint:
                      null !== (r = e.entrypoint) && void 0 !== r
                        ? r
                        : u.Qq.UNKNOWN,
                  })
                : n.Z.setState({
                    entrypoint:
                      null !== (S = e.entrypoint) && void 0 !== S
                        ? S
                        : u.Qq.UNKNOWN,
                  }),
              (0, o.uL)(c.Z5c.GLOBAL_DISCOVERY_SERVERS, e.extra)
            );
          case l.GlobalDiscoveryTab.APPS:
            if (null != e.applicationId) {
              if (e.section === s.GlobalDiscoveryAppsSections.STORE) {
                if (null != e.skuId)
                  return (0, o.uL)(
                    c.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                      e.applicationId,
                      e.skuId,
                    ),
                  );
                return (0, o.uL)(
                  c.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                    e.applicationId,
                    s.GlobalDiscoveryAppsSections.STORE,
                  ),
                );
              }
              return (0, o.uL)(
                c.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e.applicationId),
              );
            }
            if (null != e.query) {
              let t = new URLSearchParams();
              return (
                "" !== e.query && t.set("q", e.query),
                null != e.categoryId &&
                  t.set("category_id", e.categoryId.toString()),
                null != e.page && t.set("page", e.page.toString()),
                (0, o.uL)(c.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
                  search: t.toString(),
                })
              );
            } else if (null != e.categoryId)
              return (0, o.uL)(
                c.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(e.categoryId.toString()),
              );
            else return (0, o.uL)(c.Z5c.GLOBAL_DISCOVERY_APPS);
          case l.GlobalDiscoveryTab.QUESTS:
            return (0, a.navigateToQuestHome)(
              e.location,
              e.questContent,
              e.questId,
            );
          default:
            throw Error(
              "[transitionToGlobalDiscovery] Unhandled tab type: ".concat(t),
            );
        }
      }
    },
    859921: function (e, t, r) {
      r.d(t, {
        O: function () {
          return i;
        },
      });
      var n = r(972959);
      let a = Object.freeze({
          selectedTab: null,
          isSearchVisible: !1,
          entrypoint: null,
          searchBarState: r(49898).GlobalDiscoverySearchBarState.DEFAULT,
        }),
        o = (0, n.H)(() => a);
      function i() {
        o.setState(a);
      }
      t.Z = o;
    },
  },
]);
//# sourceMappingURL=c4e5d727160e015f3f71.js.map
