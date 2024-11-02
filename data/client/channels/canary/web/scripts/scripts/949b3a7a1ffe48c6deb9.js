"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60079"],
  {
    850902: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return c;
          },
        });
      var i = t(200651);
      t(192379);
      var r = t(481060),
        o = t(239091),
        l = t(388032);
      function c(n) {
        let { roleId: e, onLeaveRole: t, onSelect: c } = n;
        return (0, i.jsx)(
          r.Menu,
          {
            navId: "guild-role-connections-context",
            "aria-label": l.intl.string(l.t.vytvJC),
            onClose: o.Zy,
            onSelect: c,
            children: (0, i.jsx)(r.MenuGroup, {
              children: (0, i.jsx)(
                r.MenuItem,
                {
                  id: "guild-role-connections-leave-role",
                  label: l.intl.string(l.t.vytvJC),
                  action: t,
                  color: "danger",
                },
                e,
              ),
            }),
          },
          e,
        );
      }
    },
  },
]);
//# sourceMappingURL=949b3a7a1ffe48c6deb9.js.map
