"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["5577"],
  {
    955120: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return l;
          },
        });
      var a = s(735250);
      s(470079);
      var u = s(481060),
        r = s(239091),
        c = s(299206),
        i = s(689938);
      function l(e) {
        let {
            guildId: n,
            shiftId: s,
            onSelect: l,
            closePopout: t,
            "aria-label": d,
          } = e,
          o = (0, c.Z)({
            id: n,
            label: i.Z.Messages.COPY_ID_GUILD,
            shiftId: s,
            onSuccess: t,
          });
        return (0, a.jsx)(u.Menu, {
          onSelect: l,
          navId: "guild-discovery-context-menu",
          "aria-label": null != d ? d : i.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose: r.Zy,
          children: (0, a.jsx)(u.MenuGroup, { children: o }),
        });
      }
    },
  },
]);
//# sourceMappingURL=47074c0b7c77e74cdd8b.js.map
