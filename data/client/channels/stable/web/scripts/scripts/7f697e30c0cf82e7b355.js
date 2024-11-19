"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55923"],
  {
    509451: function (c, _, t) {
      t.r(_),
        t.d(_, {
          default: function () {
            return o;
          },
        }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var I = t(200651);
      t(192379);
      var a = t(512969),
        O = t(272242),
        R = t(981631),
        P = t(979007);
      function o() {
        let c = new URLSearchParams(location.search);
        return (
          c.delete("page"),
          (0, I.jsxs)(a.rs, {
            children: [
              (0, I.jsx)(a.l_, {
                path: R.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId"),
                to: "".concat(
                  R.Z5c.APPLICATION_DIRECTORY_SEARCH,
                  "?category_id=:categoryId",
                ),
              }),
              (0, I.jsx)(a.l_, {
                path: R.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
                to: ""
                  .concat(R.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                  .concat(c.toString()),
              }),
              (0, I.jsx)(a.l_, {
                path: R.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
                to: R.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
              }),
              (0, I.jsx)(a.l_, {
                path: R.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  P.Wc.STORE,
                ),
                to: R.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  O.ApplicationDirectoryProfileSections.STORE,
                ),
              }),
              (0, I.jsx)(a.l_, {
                path: R.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                to: R.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
              }),
              (0, I.jsx)(a.l_, {
                path: R.Z5c.GLOBAL_DISCOVERY_APPS,
                to: R.Z5c.APPLICATION_DIRECTORY,
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=7f697e30c0cf82e7b355.js.map
