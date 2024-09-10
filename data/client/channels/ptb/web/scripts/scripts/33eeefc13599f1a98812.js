"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84259"],
  {
    597409: function (e, n, a) {
      a.r(n);
      var s = a(735250);
      a(470079);
      var l = a(442837),
        o = a(481060),
        c = a(239091),
        i = a(496675),
        d = a(572004),
        r = a(981631),
        t = a(689938),
        u = a(984221);
      n.default = function (e) {
        var n;
        let { guild: I, user: p, onSelect: M } = e,
          _ =
            null !== (n = null == I ? void 0 : I.id) && void 0 !== n
              ? n
              : r.lds,
          E = (0, l.e7)(
            [i.Z],
            () => null != I && i.Z.canManageUser(r.Plq.BAN_MEMBERS, p, I),
            [I, p],
          );
        return (0, s.jsx)(o.Menu, {
          navId: "member-application-context-menu",
          className: u.contextMenu,
          onClose: c.Zy,
          "aria-label": t.Z.Messages.USER_ACTIONS_MENU_LABEL,
          onSelect: M,
          children: (0, s.jsxs)(o.MenuGroup, {
            children: [
              E &&
                (0, s.jsx)(
                  o.MenuItem,
                  {
                    id: "ban",
                    label:
                      t.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_BAN_USER,
                    icon: o.HammerIcon,
                    color: "danger",
                    action: () =>
                      (0, o.openModalLazy)(async () => {
                        let { default: e } = await a
                          .e("43350")
                          .then(a.bind(a, 98746));
                        return (n) =>
                          (0, s.jsx)(e, { ...n, guildId: _, user: p });
                      }),
                  },
                  "ban",
                ),
              (0, s.jsx)(
                o.MenuItem,
                {
                  id: "copyUserId",
                  label: "Copy User ID",
                  icon: o.IdIcon,
                  action: () => (0, d.JG)(p.id),
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
//# sourceMappingURL=33eeefc13599f1a98812.js.map
