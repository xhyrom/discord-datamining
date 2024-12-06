"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54918"],
  {
    838134: function (e, t, c) {
      c.r(t),
        c.d(t, {
          default: function () {
            return l;
          },
        });
      var I = c(200651),
        a = c(192379),
        o = c(512969),
        i = c(608787),
        n = c(765717),
        _ = c(352057),
        P = c(156482),
        O = c(272242),
        p = c(981631);
      let R = a.lazy(() =>
          (0, i.wE)({
            createPromise: () =>
              Promise.all([
                c.e("73503"),
                c.e("6380"),
                c.e("72181"),
                c.e("65840"),
                c.e("74891"),
                c.e("18101"),
                c.e("21628"),
                c.e("11794"),
                c.e("77803"),
                c.e("28958"),
                c.e("39650"),
                c.e("19536"),
              ]).then(c.bind(c, 753450)),
            webpackId: 753450,
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
                c.e("14835"),
              ]).then(c.bind(c, 74438)),
            webpackId: 74438,
          }),
        ),
        A = a.lazy(() =>
          (0, i.wE)({
            createPromise: () =>
              Promise.all([
                c.e("6380"),
                c.e("65840"),
                c.e("18101"),
                c.e("11794"),
                c.e("28958"),
                c.e("37235"),
              ]).then(c.bind(c, 675869)),
            webpackId: 675869,
          }),
        );
      function l() {
        return (0, _.h$)({ location: "ApplicationDirectoryRoutes" })
          ? (0, I.jsx)(o.AW, {
              path: p.Z5c.APPLICATION_DIRECTORY,
              component: P.Z,
            })
          : (0, I.jsxs)(o.rs, {
              children: [
                (0, I.jsx)(n.Z, {
                  path: p.Z5c.APPLICATION_DIRECTORY,
                  exact: !0,
                  component: E,
                }),
                (0, I.jsx)(n.Z, {
                  path: p.Z5c.APPLICATION_DIRECTORY_SEARCH,
                  component: A,
                }),
                (0, I.jsx)(o.l_, {
                  path: p.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                    ":applicationId",
                    O.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED,
                  ),
                  to: p.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                    ":applicationId",
                    O.ApplicationDirectoryProfileSections.STORE,
                  ),
                }),
                (0, I.jsx)(n.Z, {
                  path: p.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                    ":applicationId",
                    ":section?",
                  ),
                  component: R,
                }),
              ],
            });
      }
    },
    156482: function (e, t, c) {
      c.d(t, {
        Z: function () {
          return _;
        },
      }),
        c(610138),
        c(216116),
        c(78328),
        c(815648),
        c(47120);
      var I = c(200651);
      c(192379);
      var a = c(512969),
        o = c(272242),
        i = c(981631),
        n = c(979007);
      function _() {
        let e = new URLSearchParams(location.search),
          t = e.get("q"),
          c = e.get("category_id");
        return (
          e.delete("page"),
          (0, I.jsxs)(a.rs, {
            children: [
              null != c && null == t
                ? (0, I.jsx)(a.l_, {
                    path: i.Z5c.APPLICATION_DIRECTORY_SEARCH,
                    to: "".concat(
                      i.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY("".concat(c)),
                    ),
                  })
                : (0, I.jsx)(a.l_, {
                    path: i.Z5c.APPLICATION_DIRECTORY_SEARCH,
                    to: ""
                      .concat(i.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, "?")
                      .concat(e.toString()),
                  }),
              (0, I.jsx)(a.l_, {
                path: i.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
                to: i.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
              }),
              (0, I.jsx)(a.l_, {
                path: i.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  o.ApplicationDirectoryProfileSections.STORE,
                ),
                to: i.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  n.GlobalDiscoveryAppsSections.STORE,
                ),
              }),
              (0, I.jsx)(a.l_, {
                path: i.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
                to: i.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
              }),
              (0, I.jsx)(a.l_, {
                path: i.Z5c.APPLICATION_DIRECTORY,
                to: i.Z5c.GLOBAL_DISCOVERY_APPS,
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=18c6e2ef4b3ef80b4211.js.map
