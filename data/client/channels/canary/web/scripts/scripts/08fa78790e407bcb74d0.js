"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11451"],
  {
    597409: function (e, a, n) {
      n.r(a);
      var t = n(200651);
      n(192379);
      var o = n(442837),
        l = n(481060),
        r = n(239091),
        c = n(496675),
        i = n(572004),
        d = n(981631),
        s = n(388032),
        b = n(372819);
      a.default = function (e) {
        var a;
        let { guild: u, user: p, onSelect: _ } = e,
          h =
            null !== (a = null == u ? void 0 : u.id) && void 0 !== a
              ? a
              : d.lds,
          m = (0, o.e7)(
            [c.Z],
            () => null != u && c.Z.canManageUser(d.Plq.BAN_MEMBERS, p, u),
            [u, p],
          );
        return (0, t.jsx)(l.Menu, {
          navId: "member-application-context-menu",
          className: b.contextMenu,
          onClose: r.Zy,
          "aria-label": s.intl.string(s.t.liqwPD),
          onSelect: _,
          children: (0, t.jsxs)(l.MenuGroup, {
            children: [
              m &&
                (0, t.jsx)(
                  l.MenuItem,
                  {
                    id: "ban",
                    label: s.intl.string(s.t["I+Cbur"]),
                    icon: l.HammerIcon,
                    color: "danger",
                    action: () =>
                      (0, l.openModalLazy)(async () => {
                        let { default: e } = await n
                          .e("43350")
                          .then(n.bind(n, 98746));
                        return (a) =>
                          (0, t.jsx)(e, { ...a, guildId: h, user: p });
                      }),
                  },
                  "ban",
                ),
              (0, t.jsx)(
                l.MenuItem,
                {
                  id: "copyUserId",
                  label: "Copy User ID",
                  icon: l.IdIcon,
                  action: () => (0, i.JG)(p.id),
                },
                "copyUserId",
              ),
            ],
          }),
        });
      };
    },
    372819: function (e, a, n) {
      e.exports = {
        title: "title_a43b87",
        container: "container_a43b87",
        siblingSelected: "siblingSelected_a43b87",
        selected: "selected_a43b87",
        contextMenu: "contextMenu_a43b87",
        userDetails: "userDetails_a43b87",
        createdAt: "createdAt_a43b87",
        actionIconContainer: "actionIconContainer_a43b87 iconContainer_a43b87",
        overflowMenuContainer:
          "overflowMenuContainer_a43b87 iconContainer_a43b87",
        icon: "icon_a43b87",
        disabled: "disabled_a43b87",
        placeholder: "placeholder_a43b87",
        placeholderUsername: "placeholderUsername_a43b87",
        placeholderCreatedAt: "placeholderCreatedAt_a43b87",
        placeholderAvatar: "placeholderAvatar_a43b87",
        emptyContainer: "emptyContainer_a43b87",
        emptyIcon: "emptyIcon_a43b87",
        checkmark: "checkmark_a43b87",
        star: "star_a43b87",
        plus: "plus_a43b87",
        emptyBody: "emptyBody_a43b87",
      };
    },
  },
]);
//# sourceMappingURL=08fa78790e407bcb74d0.js.map
