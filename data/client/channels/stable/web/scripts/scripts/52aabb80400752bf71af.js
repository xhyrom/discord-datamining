"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92780"],
  {
    930381: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return c;
          },
        });
      var s = t(200651);
      t(192379);
      var n = t(481060),
        r = t(239091),
        o = t(13245),
        u = t(145597),
        i = t(689938);
      function c(e) {
        let { onSelect: a } = e;
        return (0, s.jsx)(n.Menu, {
          navId: "overlay",
          onClose: r.Zy,
          "aria-label": i.Z.Messages.OVERLAY_ACTIONS_MENU_LABEL,
          onSelect: a,
          children: (0, s.jsx)(n.MenuItem, {
            id: "reset",
            label: i.Z.Messages.OVERLAY_RESET_DEFAULT_LAYOUT,
            action: (e) => {
              e.stopPropagation(), o.Z.resetDefaultLayout(u.qU);
            },
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=52aabb80400752bf71af.js.map
