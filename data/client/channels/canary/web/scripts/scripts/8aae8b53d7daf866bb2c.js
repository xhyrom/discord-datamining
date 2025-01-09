"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54918"],
  {
    838134: function (t, e, c) {
      c.r(e),
        c.d(e, {
          default: function () {
            return S;
          },
        });
      var o = c(200651),
        a = c(192379),
        i = c(512969),
        I = c(608787),
        n = c(442837),
        _ = c(765717),
        O = c(353926),
        l = c(926061),
        p = c(215256),
        P = c(8991),
        E = c(314897),
        R = c(272242),
        A = c(981631);
      let r = a.lazy(() =>
          (0, I.wE)({
            createPromise: () =>
              Promise.all([
                c.e("73503"),
                c.e("6380"),
                c.e("72181"),
                c.e("56630"),
                c.e("66711"),
                c.e("86282"),
                c.e("65840"),
                c.e("21628"),
                c.e("18101"),
                c.e("24207"),
                c.e("77803"),
                c.e("9005"),
                c.e("64676"),
                c.e("28958"),
                c.e("6618"),
              ]).then(c.bind(c, 753450)),
            webpackId: 753450,
          }),
        ),
        s = a.lazy(() =>
          (0, I.wE)({
            createPromise: () =>
              Promise.all([
                c.e("6380"),
                c.e("56630"),
                c.e("65840"),
                c.e("18101"),
                c.e("24207"),
                c.e("9005"),
                c.e("28958"),
                c.e("43704"),
              ]).then(c.bind(c, 74438)),
            webpackId: 74438,
          }),
        ),
        C = a.lazy(() =>
          (0, I.wE)({
            createPromise: () =>
              Promise.all([
                c.e("6380"),
                c.e("56630"),
                c.e("65840"),
                c.e("18101"),
                c.e("24207"),
                c.e("28958"),
                c.e("64121"),
              ]).then(c.bind(c, 675869)),
            webpackId: 675869,
          }),
        );
      function S() {
        let t = (0, n.e7)([O.Z], () => O.Z.hasLoadedExperiments),
          e = (0, n.e7)([E.default], () => E.default.isAuthenticated()),
          c = (0, l.YP)({ location: "ApplicationDirectoryRoutes" }) && t,
          I = (0, p.M)({ location: "ApplicationDirectoryRoutes" }) && t;
        a.useEffect(() => {
          t &&
            !e &&
            p.f.trackExposure({ location: "ApplicationDirectoryRoutes" });
        }, [e, t]);
        let S = (e && c) || (!e && I);
        return t
          ? S
            ? (0, o.jsx)(i.AW, {
                path: A.Z5c.APPLICATION_DIRECTORY,
                component: P.E,
              })
            : (0, o.jsxs)(i.rs, {
                children: [
                  (0, o.jsx)(_.Z, {
                    path: A.Z5c.APPLICATION_DIRECTORY,
                    exact: !0,
                    component: s,
                  }),
                  (0, o.jsx)(_.Z, {
                    path: A.Z5c.APPLICATION_DIRECTORY_SEARCH,
                    component: C,
                  }),
                  (0, o.jsx)(i.l_, {
                    path: A.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                      ":applicationId",
                      R.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED,
                    ),
                    to: A.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                      ":applicationId",
                      R.ApplicationDirectoryProfileSections.STORE,
                    ),
                  }),
                  (0, o.jsx)(_.Z, {
                    path: A.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                      ":applicationId",
                      ":section?",
                    ),
                    component: r,
                  }),
                ],
              })
          : null;
      }
    },
    215256: function (t, e, c) {
      c.d(e, {
        M: function () {
          return a;
        },
        f: function () {
          return o;
        },
      });
      let o = (0, c(818083).B)({
        kind: "user",
        id: "2024-12_global_discovery_apps_logged_out",
        label: "Global Discovery Apps - Logged Out",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function a(t) {
        let { location: e } = t;
        return o.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    8991: function (t, e, c) {
      c.d(e, {
        E: function () {
          return _;
        },
        p: function () {
          return O;
        },
      }),
        c(610138),
        c(216116),
        c(78328),
        c(815648),
        c(47120);
      var o = c(200651);
      c(192379);
      var a = c(512969),
        i = c(979007),
        I = c(981631),
        n = c(272242);
      function _() {
        let t = new URLSearchParams(location.search),
          e = t.get("q"),
          c = t.get("category_id");
        return (
          t.delete("page"),
          (0, o.jsxs)(a.rs, {
            children: [
              null != c && null == e
                ? (0, o.jsx)(a.l_, {
                    path: I.Z5c.APPLICATION_DIRECTORY_SEARCH,
                    to: "".concat(
                      I.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY("".concat(c)),
                    ),
                  })
                : (0, o.jsx)(a.l_, {
                    path: I.Z5c.APPLICATION_DIRECTORY_SEARCH,
                    to: ""
                      .concat(I.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, "?")
                      .concat(t.toString()),
                  }),
              (0, o.jsx)(a.l_, {
                path: I.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
                to: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
              }),
              (0, o.jsx)(a.l_, {
                path: I.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  n.ApplicationDirectoryProfileSections.STORE,
                ),
                to: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  i.GlobalDiscoveryAppsSections.STORE,
                ),
              }),
              (0, o.jsx)(a.l_, {
                path: I.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  n.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED,
                ),
                to: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  i.GlobalDiscoveryAppsSections.STORE,
                ),
              }),
              (0, o.jsx)(a.l_, {
                path: I.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
                to: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
              }),
              (0, o.jsx)(a.l_, {
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
          (0, o.jsxs)(a.rs, {
            children: [
              (0, o.jsx)(a.l_, {
                path: I.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId"),
                to: "".concat(
                  I.Z5c.APPLICATION_DIRECTORY_SEARCH,
                  "?category_id=:categoryId",
                ),
              }),
              (0, o.jsx)(a.l_, {
                path: I.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
                to: ""
                  .concat(I.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                  .concat(t.toString()),
              }),
              (0, o.jsx)(a.l_, {
                path: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
                to: I.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
              }),
              (0, o.jsx)(a.l_, {
                path: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  i.GlobalDiscoveryAppsSections.STORE,
                ),
                to: I.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  n.ApplicationDirectoryProfileSections.STORE,
                ),
              }),
              (0, o.jsx)(a.l_, {
                path: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                to: I.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
              }),
              (0, o.jsx)(a.l_, {
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
//# sourceMappingURL=8aae8b53d7daf866bb2c.js.map
