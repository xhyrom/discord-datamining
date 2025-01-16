"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35476"],
  {
    215256: function (t, c, a) {
      a.d(c, {
        M: function () {
          return o;
        },
        f: function () {
          return e;
        },
      });
      let e = (0, a(818083).B)({
        kind: "user",
        id: "2024-12_global_discovery_apps_logged_out",
        label: "Global Discovery Apps - Logged Out",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function o(t) {
        let { location: c } = t;
        return e.useExperiment({ location: c }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    332116: function (t, c, a) {
      a.r(c),
        a.d(c, {
          default: function () {
            return E;
          },
        });
      var e = a(200651),
        o = a(192379),
        _ = a(512969),
        n = a(608787),
        I = a(442837),
        i = a(765717),
        O = a(353926),
        l = a(215256),
        p = a(8991),
        P = a(981631);
      let R = o.lazy(() =>
        (0, n.wE)({
          createPromise: () =>
            Promise.all([
              a.e("73503"),
              a.e("72181"),
              a.e("66711"),
              a.e("21628"),
              a.e("77803"),
              a.e("9005"),
              a.e("64676"),
              a.e("31931"),
              a.e("67477"),
            ]).then(a.bind(a, 319443)),
          webpackId: 319443,
        }),
      );
      function E() {
        let t = (0, I.e7)([O.Z], () => O.Z.hasLoadedExperiments);
        o.useEffect(() => {
          t && l.f.trackExposure({ location: "GlobalDiscoveryAppsRoutes" });
        }, [t]);
        let c = (0, l.M)({ location: "GlobalDiscoveryAppsRoutes" });
        return t
          ? c
            ? (0, e.jsx)(i.Z, {
                path: P.Z5c.GLOBAL_DISCOVERY_APPS,
                component: R,
              })
            : (0, e.jsx)(_.AW, {
                path: P.Z5c.GLOBAL_DISCOVERY_APPS,
                component: p.p,
              })
          : null;
      }
    },
    8991: function (t, c, a) {
      a.d(c, {
        E: function () {
          return i;
        },
        p: function () {
          return O;
        },
      }),
        a(610138),
        a(216116),
        a(78328),
        a(815648),
        a(47120);
      var e = a(200651);
      a(192379);
      var o = a(512969),
        _ = a(979007),
        n = a(981631),
        I = a(272242);
      function i() {
        let t = new URLSearchParams(location.search),
          c = t.get("q"),
          a = t.get("category_id");
        return (
          t.delete("page"),
          (0, e.jsxs)(o.rs, {
            children: [
              null != a && null == c
                ? (0, e.jsx)(o.l_, {
                    path: n.Z5c.APPLICATION_DIRECTORY_SEARCH,
                    to: "".concat(
                      n.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY("".concat(a)),
                    ),
                  })
                : (0, e.jsx)(o.l_, {
                    path: n.Z5c.APPLICATION_DIRECTORY_SEARCH,
                    to: ""
                      .concat(n.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, "?")
                      .concat(t.toString()),
                  }),
              (0, e.jsx)(o.l_, {
                path: n.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
                to: n.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
              }),
              (0, e.jsx)(o.l_, {
                path: n.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  I.ApplicationDirectoryProfileSections.STORE,
                ),
                to: n.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  _.GlobalDiscoveryAppsSections.STORE,
                ),
              }),
              (0, e.jsx)(o.l_, {
                path: n.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  I.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED,
                ),
                to: n.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  _.GlobalDiscoveryAppsSections.STORE,
                ),
              }),
              (0, e.jsx)(o.l_, {
                path: n.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
                to: {
                  pathname:
                    n.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                  search: location.search,
                },
              }),
              (0, e.jsx)(o.l_, {
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
          (0, e.jsxs)(o.rs, {
            children: [
              (0, e.jsx)(o.l_, {
                path: n.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId"),
                to: "".concat(
                  n.Z5c.APPLICATION_DIRECTORY_SEARCH,
                  "?category_id=:categoryId",
                ),
              }),
              (0, e.jsx)(o.l_, {
                path: n.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
                to: ""
                  .concat(n.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                  .concat(t.toString()),
              }),
              (0, e.jsx)(o.l_, {
                path: n.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
                to: n.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
              }),
              (0, e.jsx)(o.l_, {
                path: n.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  _.GlobalDiscoveryAppsSections.STORE,
                ),
                to: n.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  I.ApplicationDirectoryProfileSections.STORE,
                ),
              }),
              (0, e.jsx)(o.l_, {
                path: n.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                to: {
                  pathname:
                    n.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
                  search: location.search,
                },
              }),
              (0, e.jsx)(o.l_, {
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
//# sourceMappingURL=05db70ba22f73d0bfb13.js.map
