"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92780"],
  {
    930381: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return u;
          },
        });
      var a = n(200651);
      n(192379);
      var r = n(481060),
        i = n(239091),
        s = n(13245),
        l = n(145597),
        o = n(388032);
      function u(t) {
        let { onSelect: e } = t;
        return (0, a.jsx)(r.Menu, {
          navId: "overlay",
          onClose: i.Zy,
          "aria-label": o.intl.string(o.t.tPfVWl),
          onSelect: e,
          children: (0, a.jsx)(r.MenuItem, {
            id: "reset",
            label: o.intl.string(o.t["hW+EMj"]),
            action: (t) => {
              t.stopPropagation(), s.Z.resetDefaultLayout(l.qU);
            },
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=9130c4fbae85ad788e30.js.map
