"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["35476"],
  {
    215256: function (t, c, o) {
      o.d(c, {
        M: function () {
          return a;
        },
        f: function () {
          return e;
        },
      });
      let e = (0, o(818083).B)({
        kind: "user",
        id: "2024-12_global_discovery_apps_logged_out",
        label: "Global Discovery Apps - Logged Out",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function a(t) {
        let { location: c } = t;
        return e.useExperiment({ location: c }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    332116: function (t, c, o) {
      o.r(c),
        o.d(c, {
          default: function () {
            return E;
          },
        });
      var e = o(200651),
        a = o(192379),
        _ = o(512969),
        I = o(608787),
        n = o(442837),
        i = o(765717),
        O = o(353926),
        l = o(215256),
        p = o(8991),
        P = o(981631);
      let R = a.lazy(() =>
        (0, I.wE)({
          createPromise: () =>
            Promise.all([
              o.e("73503"),
              o.e("72181"),
              o.e("66711"),
              o.e("21628"),
              o.e("77803"),
              o.e("9005"),
              o.e("64676"),
              o.e("31931"),
              o.e("76810"),
            ]).then(o.bind(o, 319443)),
          webpackId: 319443,
        }),
      );
      function E() {
        let t = (0, n.e7)([O.Z], () => O.Z.hasLoadedExperiments);
        a.useEffect(() => {
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
    8991: function (t, c, o) {
      o.d(c, {
        E: function () {
          return i;
        },
        p: function () {
          return O;
        },
      }),
        o(610138),
        o(216116),
        o(78328),
        o(815648),
        o(47120);
      var e = o(200651);
      o(192379);
      var a = o(512969),
        _ = o(979007),
        I = o(981631),
        n = o(272242);
      function i() {
        let t = new URLSearchParams(location.search),
          c = t.get("q"),
          o = t.get("category_id");
        return (
          t.delete("page"),
          (0, e.jsxs)(a.rs, {
            children: [
              null != o && null == c
                ? (0, e.jsx)(a.l_, {
                    path: I.Z5c.APPLICATION_DIRECTORY_SEARCH,
                    to: "".concat(
                      I.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY("".concat(o)),
                    ),
                  })
                : (0, e.jsx)(a.l_, {
                    path: I.Z5c.APPLICATION_DIRECTORY_SEARCH,
                    to: ""
                      .concat(I.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, "?")
                      .concat(t.toString()),
                  }),
              (0, e.jsx)(a.l_, {
                path: I.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
                to: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
              }),
              (0, e.jsx)(a.l_, {
                path: I.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  n.ApplicationDirectoryProfileSections.STORE,
                ),
                to: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  _.GlobalDiscoveryAppsSections.STORE,
                ),
              }),
              (0, e.jsx)(a.l_, {
                path: I.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  n.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED,
                ),
                to: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  _.GlobalDiscoveryAppsSections.STORE,
                ),
              }),
              (0, e.jsx)(a.l_, {
                path: I.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
                to: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
              }),
              (0, e.jsx)(a.l_, {
                path: I.Z5c.APPLICATION_DIRECTORY,
                to: I.Z5c.GLOBAL_DISCOVERY_APPS,
              }),
            ],
          })
        );
      }
      function O() {
        let t = new URLSearchParams(location.search);
        return (
          t.delete("page"),
          (0, e.jsxs)(a.rs, {
            children: [
              (0, e.jsx)(a.l_, {
                path: I.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId"),
                to: "".concat(
                  I.Z5c.APPLICATION_DIRECTORY_SEARCH,
                  "?category_id=:categoryId",
                ),
              }),
              (0, e.jsx)(a.l_, {
                path: I.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
                to: ""
                  .concat(I.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                  .concat(t.toString()),
              }),
              (0, e.jsx)(a.l_, {
                path: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
                to: I.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
              }),
              (0, e.jsx)(a.l_, {
                path: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  _.GlobalDiscoveryAppsSections.STORE,
                ),
                to: I.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  n.ApplicationDirectoryProfileSections.STORE,
                ),
              }),
              (0, e.jsx)(a.l_, {
                path: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                to: I.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
              }),
              (0, e.jsx)(a.l_, {
                path: I.Z5c.GLOBAL_DISCOVERY_APPS,
                to: I.Z5c.APPLICATION_DIRECTORY,
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=73382266f59c04c66c19.js.map
