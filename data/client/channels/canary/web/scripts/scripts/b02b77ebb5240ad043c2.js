"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54918"],
  {
    838134: function (e, t, c) {
      c.r(t),
        c.d(t, {
          default: function () {
            return R;
          },
        });
      var n = c(200651),
        a = c(192379),
        o = c(512969),
        i = c(608787),
        I = c(765717),
        r = c(352057),
        _ = c(156482),
        l = c(272242),
        p = c(981631);
      let P = a.lazy(() =>
          (0, i.wE)({
            createPromise: () =>
              Promise.all([
                c.e("29549"),
                c.e("31605"),
                c.e("6380"),
                c.e("72181"),
                c.e("65840"),
                c.e("74891"),
                c.e("18101"),
                c.e("56602"),
                c.e("11794"),
                c.e("77803"),
                c.e("28958"),
                c.e("9722"),
                c.e("80832"),
              ]).then(c.bind(c, 753450)),
            webpackId: 753450,
          }),
        ),
        O = a.lazy(() =>
          (0, i.wE)({
            createPromise: () =>
              Promise.all([
                c.e("6380"),
                c.e("65840"),
                c.e("18101"),
                c.e("11794"),
                c.e("28958"),
                c.e("12110"),
              ]).then(c.bind(c, 74438)),
            webpackId: 74438,
          }),
        ),
        E = a.lazy(() =>
          (0, i.wE)({
            createPromise: () =>
              Promise.all([
                c.e("6380"),
                c.e("65840"),
                c.e("18101"),
                c.e("11794"),
                c.e("28958"),
                c.e("64965"),
              ]).then(c.bind(c, 675869)),
            webpackId: 675869,
          }),
        );
      function R() {
        return (0, r.h)({
          location: "ApplicationDirectoryRoutes",
          autoTrackExposure: !1,
        })
          ? (0, n.jsx)(o.AW, {
              path: p.Z5c.APPLICATION_DIRECTORY,
              component: _.Z,
            })
          : (0, n.jsxs)(o.rs, {
              children: [
                (0, n.jsx)(I.Z, {
                  path: p.Z5c.APPLICATION_DIRECTORY,
                  exact: !0,
                  component: O,
                }),
                (0, n.jsx)(I.Z, {
                  path: p.Z5c.APPLICATION_DIRECTORY_SEARCH,
                  component: E,
                }),
                (0, n.jsx)(o.l_, {
                  path: p.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                    ":applicationId",
                    l.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED,
                  ),
                  to: p.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                    ":applicationId",
                    l.ApplicationDirectoryProfileSections.STORE,
                  ),
                }),
                (0, n.jsx)(I.Z, {
                  path: p.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                    ":applicationId",
                    ":section?",
                  ),
                  component: P,
                }),
              ],
            });
      }
    },
    156482: function (e, t, c) {
      c.d(t, {
        Z: function () {
          return r;
        },
      }),
        c(610138),
        c(216116),
        c(78328),
        c(815648),
        c(47120);
      var n = c(200651);
      c(192379);
      var a = c(512969),
        o = c(272242),
        i = c(981631),
        I = c(979007);
      function r() {
        let e = new URLSearchParams(location.search),
          t = e.get("q"),
          c = e.get("category_id");
        return (
          e.delete("page"),
          (0, n.jsxs)(a.rs, {
            children: [
              null != c && null == t
                ? (0, n.jsx)(a.l_, {
                    path: i.Z5c.APPLICATION_DIRECTORY_SEARCH,
                    to: "".concat(
                      i.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY("".concat(c)),
                    ),
                  })
                : (0, n.jsx)(a.l_, {
                    path: i.Z5c.APPLICATION_DIRECTORY_SEARCH,
                    to: ""
                      .concat(i.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, "?")
                      .concat(e.toString()),
                  }),
              (0, n.jsx)(a.l_, {
                path: i.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
                to: i.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
              }),
              (0, n.jsx)(a.l_, {
                path: i.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  o.ApplicationDirectoryProfileSections.STORE,
                ),
                to: i.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  I.Wc.STORE,
                ),
              }),
              (0, n.jsx)(a.l_, {
                path: i.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
                to: i.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
              }),
              (0, n.jsx)(a.l_, {
                path: i.Z5c.APPLICATION_DIRECTORY,
                to: i.Z5c.GLOBAL_DISCOVERY_APPS,
              }),
            ],
          })
        );
      }
    },
    352057: function (e, t, c) {
      c.d(t, {
        h: function () {
          return a;
        },
        r: function () {
          return o;
        },
      });
      let n = (0, c(818083).B)({
        kind: "user",
        id: "2024-09_global_discovery_apps",
        label: "Global Discovery Apps",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function a(e) {
        let { location: t, autoTrackExposure: c = !0 } = e,
          { enabled: a } = n.useExperiment(
            { location: t },
            { autoTrackExposure: c },
          );
        return a;
      }
      function o(e) {
        let { location: t } = e;
        return n.getCurrentConfig({ location: t }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
  },
]);
//# sourceMappingURL=b02b77ebb5240ad043c2.js.map
