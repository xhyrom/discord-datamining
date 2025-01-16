"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84259"],
  {
    597409: function (n, e, a) {
      a.r(e);
      var i = a(200651);
      a(192379);
      var l = a(442837),
        t = a(481060),
        r = a(239091),
        o = a(496675),
        c = a(572004),
        s = a(981631),
        d = a(388032),
        u = a(372819);
      e.default = function (n) {
        var e;
        let { guild: p, user: I, onSelect: b } = n,
          M =
            null !== (e = null == p ? void 0 : p.id) && void 0 !== e
              ? e
              : s.lds,
          h = (0, l.e7)(
            [o.Z],
            () => null != p && o.Z.canManageUser(s.Plq.BAN_MEMBERS, I, p),
            [p, I],
          );
        return (0, i.jsx)(t.Menu, {
          navId: "member-application-context-menu",
          className: u.contextMenu,
          onClose: r.Zy,
          "aria-label": d.intl.string(d.t.liqwPD),
          onSelect: b,
          children: (0, i.jsxs)(t.MenuGroup, {
            children: [
              h &&
                (0, i.jsx)(
                  t.MenuItem,
                  {
                    id: "ban",
                    label: d.intl.string(d.t["I+Cbur"]),
                    icon: t.HammerIcon,
                    color: "danger",
                    action: () =>
                      (0, t.openModalLazy)(async () => {
                        let { default: n } = await a
                          .e("43350")
                          .then(a.bind(a, 98746));
                        return (e) =>
                          (0, i.jsx)(n, { ...e, guildId: M, user: I });
                      }),
                  },
                  "ban",
                ),
              (0, i.jsx)(
                t.MenuItem,
                {
                  id: "copyUserId",
                  label: "Copy User ID",
                  icon: t.IdIcon,
                  action: () => (0, c.JG)(I.id),
                },
                "copyUserId",
              ),
            ],
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=a47bf0b0cec05bf8d074.js.map
