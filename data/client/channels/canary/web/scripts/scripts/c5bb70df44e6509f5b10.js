"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14486"],
  {
    786746: function (n, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return c;
          },
        }),
        i(653041);
      var l = i(200651);
      i(192379);
      var e = i(481060),
        s = i(239091),
        r = i(299206),
        u = i(867108),
        a = i(981631),
        o = i(388032);
      function c(n) {
        let { role: t, guild: i, onSelect: c } = n,
          d = [],
          p = (0, u.Z)(i, t, a.pNK.INTEGRATIONS);
        null != p && d.push(p);
        let h = (0, r.Z)({ id: t.id, label: o.intl.string(o.t.sMsaLi) });
        return (null != h && d.push(h), 0 === d.length)
          ? null
          : (0, l.jsx)(e.Menu, {
              navId: "guild-integrations-permission-role-context",
              "aria-label": o.intl.string(o.t["337Ja2"]),
              onClose: s.Zy,
              onSelect: c,
              children: d,
            });
      }
    },
  },
]);
//# sourceMappingURL=c5bb70df44e6509f5b10.js.map
