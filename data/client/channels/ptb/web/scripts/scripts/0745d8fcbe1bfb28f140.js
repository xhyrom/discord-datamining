"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54918"],
  {
    838134: function (c, t, I) {
      I.r(t),
        I.d(t, {
          default: function () {
            return n;
          },
        });
      var _ = I(200651);
      I(192379);
      var a = I(512969),
        O = I(8991),
        R = I(981631);
      function n() {
        return (0, _.jsx)(a.AW, {
          path: R.Z5c.APPLICATION_DIRECTORY,
          component: O.E,
        });
      }
    },
    8991: function (c, t, I) {
      I.d(t, {
        E: function () {
          return E;
        },
      }),
        I(610138),
        I(216116),
        I(78328),
        I(815648),
        I(47120);
      var _ = I(200651);
      I(192379);
      var a = I(512969),
        O = I(979007),
        R = I(981631),
        n = I(272242);
      function E() {
        let c = new URLSearchParams(location.search),
          t = c.get("q"),
          I = c.get("category_id");
        return (
          c.delete("page"),
          (0, _.jsxs)(a.rs, {
            children: [
              null != I && null == t
                ? (0, _.jsx)(a.l_, {
                    path: R.Z5c.APPLICATION_DIRECTORY_SEARCH,
                    to: "".concat(
                      R.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY("".concat(I)),
                    ),
                  })
                : (0, _.jsx)(a.l_, {
                    path: R.Z5c.APPLICATION_DIRECTORY_SEARCH,
                    to: ""
                      .concat(R.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, "?")
                      .concat(c.toString()),
                  }),
              (0, _.jsx)(a.l_, {
                path: R.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
                to: R.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
              }),
              (0, _.jsx)(a.l_, {
                path: R.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  n.c.STORE,
                ),
                to: R.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  O.GlobalDiscoveryAppsSections.STORE,
                ),
              }),
              (0, _.jsx)(a.l_, {
                path: R.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  n.c.PREMIUM_DEPRECATED,
                ),
                to: R.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  O.GlobalDiscoveryAppsSections.STORE,
                ),
              }),
              (0, _.jsx)(a.l_, {
                path: R.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
                to: {
                  pathname:
                    R.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                  search: location.search,
                },
              }),
              (0, _.jsx)(a.l_, {
                path: R.Z5c.APPLICATION_DIRECTORY,
                to: R.Z5c.GLOBAL_DISCOVERY_APPS,
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=0745d8fcbe1bfb28f140.js.map
