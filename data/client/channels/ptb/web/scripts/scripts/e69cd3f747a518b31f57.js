"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55923"],
  {
    509451: function (c, t, _) {
      _.r(t),
        _.d(t, {
          default: function () {
            return P;
          },
        }),
        _(610138),
        _(216116),
        _(78328),
        _(815648),
        _(47120);
      var I = _(200651);
      _(192379);
      var a = _(512969),
        O = _(272242),
        o = _(981631),
        R = _(979007);
      function P() {
        let c = new URLSearchParams(location.search);
        return (
          c.delete("page"),
          (0, I.jsxs)(a.rs, {
            children: [
              (0, I.jsx)(a.l_, {
                path: o.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId"),
                to: "".concat(
                  o.Z5c.APPLICATION_DIRECTORY_SEARCH,
                  "?category_id=:categoryId",
                ),
              }),
              (0, I.jsx)(a.l_, {
                path: o.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
                to: ""
                  .concat(o.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                  .concat(c.toString()),
              }),
              (0, I.jsx)(a.l_, {
                path: o.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
                to: o.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(
                  ":applicationId",
                  ":skuId",
                ),
              }),
              (0, I.jsx)(a.l_, {
                path: o.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                  ":applicationId",
                  R.GlobalDiscoveryAppsSections.STORE,
                ),
                to: o.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                  ":applicationId",
                  O.ApplicationDirectoryProfileSections.STORE,
                ),
              }),
              (0, I.jsx)(a.l_, {
                path: o.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                to: o.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
              }),
              (0, I.jsx)(a.l_, {
                path: o.Z5c.GLOBAL_DISCOVERY_APPS,
                to: o.Z5c.APPLICATION_DIRECTORY,
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=e69cd3f747a518b31f57.js.map
