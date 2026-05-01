"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22067"],
  {
    67518(e, n, a) {
      a.d(n, { n: () => r });
      var i = a(627968),
        t = a(64700),
        l = a(192308),
        c = a(477782),
        s = a(695366),
        d = a(409626),
        o = a(985018);
      function r(e, n) {
        let r = t.useCallback(() => {
          null != e &&
            (n?.(d.Ws.Feedback),
            (0, l.openModalLazy)(async () => {
              let { default: n } = await Promise.all([
                a.e("42105"),
                a.e("80848"),
                a.e("90261"),
                a.e("56600"),
                a.e("34530"),
                a.e("8891"),
                a.e("55266"),
                a.e("33771"),
                a.e("46039"),
                a.e("27495"),
              ]).then(a.bind(a, 651930));
              return (a) =>
                (0, i.jsx)(n, {
                  ...a,
                  detectedActivity: { application_id: e, name: "" },
                });
            }));
        }, [e, n]);
        return null == e
          ? null
          : (0, i.jsx)(c.Dr, {
              id: "game-profile-something-wrong",
              label: o.intl.string(o.t.qP2cXd),
              action: r,
              color: "danger",
              leadingAccessory: { type: "icon", icon: s.E },
            });
      }
    },
  },
]);
//# sourceMappingURL=22067.b08e530561f4d639.js.map
