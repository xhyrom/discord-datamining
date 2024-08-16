"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9606"],
  {
    987578: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return d;
          },
        });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        s = t(239091),
        l = t(560067),
        o = t(675999),
        u = t(689938);
      function d(e) {
        let { onSelect: n } = e;
        return (0, i.jsxs)(a.Menu, {
          navId: "guild-context",
          "aria-label": u.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
          onClose: s.Zy,
          onSelect: n,
          children: [
            (0, i.jsx)(a.MenuItem, {
              id: "join",
              label: u.Z.Messages.JOIN_SERVER_BUTTON_CTA,
              action: () =>
                l.Z.openCreateGuildModal({
                  initialSlide: o._m.JOIN_GUILD,
                  location: "Guild List - ContextMenu",
                }),
            }),
            (0, i.jsx)(a.MenuItem, {
              id: "create",
              label: u.Z.Messages.CREATE_SERVER_BUTTON_CTA,
              action: () =>
                l.Z.openCreateGuildModal({
                  location: "Guild List - ContextMenu",
                }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=fdb4ded9726b37f83899.js.map
