"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95171"],
  {
    20722: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return c;
          },
        });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(239091),
        u = t(299206),
        a = t(388032);
      function c(n) {
        let {
            guildId: e,
            shiftId: t,
            onSelect: c,
            closePopout: s,
            "aria-label": o,
          } = n,
          d = (0, u.Z)({
            id: e,
            label: a.intl.string(a.t["94lLDw"]),
            shiftId: t,
            onSuccess: s,
          });
        return (0, i.jsx)(l.Menu, {
          onSelect: c,
          navId: "guild-discovery-context-menu",
          "aria-label": null != o ? o : a.intl.string(a.t.ogxXGh),
          onClose: r.Zy,
          children: (0, i.jsx)(l.MenuGroup, { children: d }),
        });
      }
    },
  },
]);
//# sourceMappingURL=ea2c75739951dfc0d438.js.map
