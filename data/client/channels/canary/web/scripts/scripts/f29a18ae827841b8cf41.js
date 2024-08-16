"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["153"],
  {
    330150: function (e, n, t) {
      t.r(n);
      var a = t(735250);
      t(470079);
      var o = t(481060),
        s = t(239091),
        c = t(231338);
      n.default = (e) =>
        (0, a.jsx)(o.Menu, {
          onClose: s.Zy,
          navId: "staff-only-entry-debug",
          "aria-label": "staff only content inventory debug",
          onSelect: c.dG,
          children: (0, a.jsx)(o.MenuItem, {
            id: "test",
            label: "Debug (Staff-Only)",
            action: () => {
              (0, o.openModalLazy)(async () => {
                let { default: n } = await t.e("43057").then(t.bind(t, 968650));
                return (t) => (0, a.jsx)(n, { ...t, ...e });
              });
            },
            icon: o.WrenchIcon,
          }),
        });
    },
  },
]);
//# sourceMappingURL=f29a18ae827841b8cf41.js.map
