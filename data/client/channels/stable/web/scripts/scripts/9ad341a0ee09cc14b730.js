"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14486"],
  {
    786746: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return c;
          },
        }),
        s(653041);
      var l = s(200651);
      s(192379);
      var t = s(481060),
        i = s(239091),
        u = s(299206),
        a = s(867108),
        r = s(981631),
        o = s(689938);
      function c(e) {
        let { role: n, guild: s, onSelect: c } = e,
          d = [],
          p = (0, a.Z)(s, n, r.pNK.INTEGRATIONS);
        null != p && d.push(p);
        let h = (0, u.Z)({ id: n.id, label: o.Z.Messages.COPY_ID_ROLE });
        return (null != h && d.push(h), 0 === d.length)
          ? null
          : (0, l.jsx)(t.Menu, {
              navId: "guild-integrations-permission-role-context",
              "aria-label": o.Z.Messages.GUILD_ROLE_ACTIONS_MENU_LABEL,
              onClose: i.Zy,
              onSelect: c,
              children: d,
            });
      }
    },
  },
]);
//# sourceMappingURL=9ad341a0ee09cc14b730.js.map
