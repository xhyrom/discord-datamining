"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54918"],
  {
    838134: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var a = n(735250),
        c = n(470079),
        i = n(266067),
        r = n(608787),
        s = n(765717),
        o = n(981631);
      let p = c.lazy(() =>
          (0, r.wE)({
            createPromise: () =>
              Promise.all([
                n.e("29549"),
                n.e("6380"),
                n.e("31605"),
                n.e("72181"),
                n.e("65840"),
                n.e("81272"),
                n.e("18101"),
                n.e("29637"),
                n.e("26124"),
                n.e("89131"),
                n.e("11256"),
                n.e("93045"),
              ]).then(n.bind(n, 753450)),
            webpackId: 753450,
          }),
        ),
        I = c.lazy(() =>
          (0, r.wE)({
            createPromise: () =>
              Promise.all([
                n.e("6380"),
                n.e("65840"),
                n.e("18101"),
                n.e("26124"),
                n.e("58971"),
              ]).then(n.bind(n, 74438)),
            webpackId: 74438,
          }),
        ),
        d = c.lazy(() =>
          (0, r.wE)({
            createPromise: () =>
              Promise.all([
                n.e("6380"),
                n.e("65840"),
                n.e("18101"),
                n.e("26124"),
                n.e("93787"),
              ]).then(n.bind(n, 675869)),
            webpackId: 675869,
          }),
        );
      function l() {
        return (0, a.jsxs)(i.rs, {
          children: [
            (0, a.jsx)(s.Z, {
              path: o.Z5c.APPLICATION_DIRECTORY,
              exact: !0,
              component: I,
            }),
            (0, a.jsx)(s.Z, {
              path: o.Z5c.APPLICATION_DIRECTORY_SEARCH,
              component: d,
            }),
            (0, a.jsx)(s.Z, {
              path: o.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                ":applicationId",
                ":section?",
              ),
              component: p,
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=f9126b6ea461faf1b92f.js.map
