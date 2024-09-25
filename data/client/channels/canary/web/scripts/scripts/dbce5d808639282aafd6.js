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
                i.e("65840"),
                i.e("18101"),
                i.e("74840"),
                i.e("11256"),
                i.e("77803"),
                i.e("1979"),
              ]).then(i.bind(i, 753450)),
            webpackId: 753450,
          }),
        ),
        P = a.lazy(() =>
          (0, o.wE)({
            createPromise: () =>
              Promise.all([
                i.e("65840"),
                i.e("18101"),
                i.e("74840"),
                i.e("75077"),
              ]).then(i.bind(i, 74438)),
            webpackId: 74438,
          }),
        ),
        l = a.lazy(() =>
          (0, o.wE)({
            createPromise: () =>
              Promise.all([
                i.e("65840"),
                i.e("18101"),
                i.e("74840"),
                i.e("68820"),
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
//# sourceMappingURL=dbce5d808639282aafd6.js.map
