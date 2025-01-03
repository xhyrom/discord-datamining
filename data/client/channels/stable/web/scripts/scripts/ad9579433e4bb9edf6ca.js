"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35476"],
  {
    215256: function (t, c, e) {
      e.d(c, {
        M: function () {
          return a;
        },
        f: function () {
          return o;
        },
      });
      let o = (0, e(818083).B)({
        kind: "user",
        id: "2024-12_global_discovery_apps_logged_out",
        label: "Global Discovery Apps - Logged Out",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function a(t) {
        let { location: c } = t;
        return o.useExperiment({ location: c }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    332116: function (t, c, e) {
      e.r(c),
        e.d(c, {
          default: function () {
            return A;
          },
        });
      var o = e(200651),
        a = e(192379),
        _ = e(512969),
        n = e(608787),
        I = e(442837),
        i = e(765717),
        O = e(353926),
        l = e(215256),
        p = e(8991),
        P = e(981631);
      let R = a.lazy(() =>
        (0, n.wE)({
          createPromise: () =>
            Promise.all([
              e.e("73503"),
              e.e("72181"),
              e.e("66711"),
              e.e("21628"),
              e.e("77803"),
              e.e("9005"),
              e.e("64676"),
              e.e("31931"),
              e.e("76810"),
            ]).then(e.bind(e, 319443)),
          webpackId: 319443,
        }),
      );
      function A() {
        let t = (0, I.e7)([O.Z], () => O.Z.hasLoadedExperiments);
        a.useEffect(() => {
          t && l.f.trackExposure({ location: "GlobalDiscoveryAppsRoutes" });
        }, [t]);
        let c = (0, l.M)({ location: "GlobalDiscoveryAppsRoutes" });
        return t
          ? c
            ? (0, o.jsx)(i.Z, {
                path: P.Z5c.GLOBAL_DISCOVERY_APPS,
                component: R,
              })
            : (0, o.jsx)(_.AW, {
                path: P.Z5c.GLOBAL_DISCOVERY_APPS,
                component: p.p,
              })
          : null;
      }
    },
    8991: function (t, c, e) {
      e.d(c, {
        E: function () {
          return i;
        },
        p: function () {
          return O;
        },
      }),
        e(610138),
        e(216116),
        e(78328),
        e(815648),
        e(47120);
      var o = e(200651);
      e(192379);
      var a = e(512969),
        _ = e(979007),
        n = e(981631),
        I = e(272242);
      function i() {
        let t = new URLSearchParams(location.search),
          c = t.get("q"),
          e = t.get("category_id");
        return (
          t.delete("page"),
          (0, o.jsxs)(a.rs, {
            children: [
              null != e && null == c
                ? (0, o.jsx)(a.l_, {
                    path: n.Z5c.APPLICATION_DIRECTORY_SEARCH,
                    to: "".concat(
                      n.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY("".concat(e)),
                    ),
                  })
                : (0, o.jsx)(a.l_, {
                    path: n.Z5c.APPLICATION_DIRECTORY_SEARCH,
                    to: ""
                      .concat(n.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, "?")
                      .concat(t.toString()),
                  }),
              (0, o.jsx)(a.l_, {
                path: n.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
                to: n.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
              }),
              (0, o.jsx)(a.l_, {
                path: n.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  I.ApplicationDirectoryProfileSections.STORE,
                ),
                to: n.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  _.GlobalDiscoveryAppsSections.STORE,
                ),
              }),
              (0, o.jsx)(a.l_, {
                path: n.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
                to: n.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
              }),
              (0, o.jsx)(a.l_, {
                path: n.Z5c.APPLICATION_DIRECTORY,
                to: n.Z5c.GLOBAL_DISCOVERY_APPS,
              }),
            ],
          })
        );
      }
      function O() {
        let t = new URLSearchParams(location.search);
        return (
          t.delete("page"),
          (0, o.jsxs)(a.rs, {
            children: [
              (0, o.jsx)(a.l_, {
                path: n.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId"),
                to: "".concat(
                  n.Z5c.APPLICATION_DIRECTORY_SEARCH,
                  "?category_id=:categoryId",
                ),
              }),
              (0, o.jsx)(a.l_, {
                path: n.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
                to: ""
                  .concat(n.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                  .concat(t.toString()),
              }),
              (0, o.jsx)(a.l_, {
                path: n.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
                to: n.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
              }),
              (0, o.jsx)(a.l_, {
                path: n.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  _.GlobalDiscoveryAppsSections.STORE,
                ),
                to: n.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  I.ApplicationDirectoryProfileSections.STORE,
                ),
              }),
              (0, o.jsx)(a.l_, {
                path: n.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                to: n.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
              }),
              (0, o.jsx)(a.l_, {
                path: n.Z5c.GLOBAL_DISCOVERY_APPS,
                to: n.Z5c.APPLICATION_DIRECTORY,
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=ad9579433e4bb9edf6ca.js.map
