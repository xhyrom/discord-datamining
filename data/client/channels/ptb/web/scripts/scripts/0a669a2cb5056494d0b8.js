"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54918"],
  {
    838134: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return E;
          },
        });
      var c = i(735250),
        a = i(470079),
        n = i(266067),
        o = i(608787),
        I = i(765717),
        p = i(272242),
        r = i(981631);
      let s = a.lazy(() =>
          (0, o.wE)({
            createPromise: () =>
              Promise.all([
                i.e("29549"),
                i.e("6380"),
                i.e("31605"),
                i.e("72181"),
                i.e("81272"),
                i.e("65840"),
                i.e("56602"),
                i.e("18101"),
                i.e("26124"),
                i.e("77803"),
                i.e("11256"),
                i.e("49726"),
              ]).then(i.bind(i, 753450)),
            webpackId: 753450,
          }),
        ),
        P = a.lazy(() =>
          (0, o.wE)({
            createPromise: () =>
              Promise.all([
                i.e("6380"),
                i.e("65840"),
                i.e("18101"),
                i.e("26124"),
                i.e("12110"),
              ]).then(i.bind(i, 74438)),
            webpackId: 74438,
          }),
        ),
        l = a.lazy(() =>
          (0, o.wE)({
            createPromise: () =>
              Promise.all([
                i.e("6380"),
                i.e("65840"),
                i.e("18101"),
                i.e("26124"),
                i.e("64965"),
              ]).then(i.bind(i, 675869)),
            webpackId: 675869,
          }),
        );
      function E() {
        return (0, c.jsxs)(n.rs, {
          children: [
            (0, c.jsx)(I.Z, {
              path: r.Z5c.APPLICATION_DIRECTORY,
              exact: !0,
              component: P,
            }),
            (0, c.jsx)(I.Z, {
              path: r.Z5c.APPLICATION_DIRECTORY_SEARCH,
              component: l,
            }),
            (0, c.jsx)(n.l_, {
              path: r.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                ":applicationId",
                p.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED,
              ),
              to: r.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                ":applicationId",
                p.ApplicationDirectoryProfileSections.STORE,
              ),
            }),
            (0, c.jsx)(I.Z, {
              path: r.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                ":applicationId",
                ":section?",
              ),
              component: s,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=0a669a2cb5056494d0b8.js.map
