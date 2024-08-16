"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68535"],
  {
    602320: function (e, s, n) {
      n.r(s);
      var a = n(735250);
      n(470079);
      var l = n(442837),
        t = n(481060),
        d = n(239091),
        _ = n(995532),
        i = n(689938);
      s.default = (e) => {
        var s;
        let {
            guildId: o,
            welcomeChannel: E,
            onEdit: u,
            onChannelReorder: c,
            setShowConfirmModal: I,
            index: L,
            onSelect: M,
          } = e,
          r = (0, l.e7)([_.Z], () => _.Z.get(o)),
          C =
            (null !== (s = null == r ? void 0 : r.welcome_channels) &&
            void 0 !== s
              ? s
              : []
            ).length - 1,
          N = (e) => {
            c(E, e, !0);
          };
        return (0, a.jsxs)(t.Menu, {
          navId: "welcome-settings-context",
          "aria-label": i.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose: d.Zy,
          onSelect: M,
          children: [
            (0, a.jsxs)(t.MenuGroup, {
              children: [
                (0, a.jsx)(t.MenuItem, {
                  id: "move-up",
                  label:
                    i.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_MOVE_UP,
                  disabled: L <= 0,
                  action: () => N(L - 1),
                }),
                (0, a.jsx)(t.MenuItem, {
                  id: "move-down",
                  label:
                    i.Z.Messages
                      .GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_MOVE_DOWN,
                  disabled: L > C,
                  action: () => N(L + 1),
                }),
              ],
            }),
            (0, a.jsxs)(t.MenuGroup, {
              children: [
                (0, a.jsx)(t.MenuItem, {
                  id: "edit",
                  label:
                    i.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_EDIT,
                  action: () =>
                    (0, t.openModalLazy)(async () => {
                      let { default: e } = await n
                        .e("39143")
                        .then(n.bind(n, 737868));
                      return (s) =>
                        (0, a.jsx)(e, {
                          ...s,
                          welcomeChannel: E,
                          guildId: o,
                          onSave: u,
                        });
                    }),
                }),
                (0, a.jsx)(t.MenuItem, {
                  id: "delete",
                  label:
                    i.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DELETE,
                  action: () => I(!0),
                  color: "danger",
                }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=92454aab787886b0b191.js.map
