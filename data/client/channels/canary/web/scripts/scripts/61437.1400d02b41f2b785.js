"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61437"],
  {
    293260(e, n, i) {
      i.d(n, { Ay: () => h, CB: () => p, c0: () => g });
      var o = i(627968);
      i(64700);
      var t = i(17928),
        l = i(231723),
        s = i(192308);
      if (21552 == i.j) var a = i(477782);
      if (21552 == i.j) var c = i(173936);
      var d = i(317525),
        r = i(370480),
        u = i(985018);
      let p = "guild-connection-roles";
      function g(e) {
        (0, s.openModalLazy)(
          async () => {
            let { default: n } = await Promise.all([
              i.e("48751"),
              i.e("92837"),
            ]).then(i.bind(i, 480900));
            return (i) => (0, o.jsx)(n, { ...i, guildId: e });
          },
          {
            modalKey: p,
            contextKey: l.SY,
            onCloseRequest: () => {
              (0, s.closeModal)(p, l.SY);
            },
          },
        );
      }
      function h(e) {
        return (0, t.bG)([d.A], () => (0, r.N8)(d.A.getSortedRoles(e.id)), [e])
          ? (0, o.jsx)(a.Dr, {
              id: "guild-connection-roles",
              label: u.intl.string(u.t.ghtnss),
              icon: c.q,
              leadingAccessory: { type: "icon", icon: c.q },
              action: () => g(e.id),
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=61437.1400d02b41f2b785.js.map
