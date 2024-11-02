"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68535"],
  {
    602320: function (e, n, t) {
      t.r(n);
      var l = t(200651);
      t(192379);
      var i = t(442837),
        a = t(481060),
        s = t(239091),
        d = t(995532),
        o = t(388032);
      n.default = (e) => {
        var n;
        let {
            guildId: r,
            welcomeChannel: c,
            onEdit: u,
            onChannelReorder: h,
            setShowConfirmModal: b,
            index: g,
            onSelect: p,
          } = e,
          x = (0, i.e7)([d.Z], () => d.Z.get(r)),
          m =
            (null !== (n = null == x ? void 0 : x.welcome_channels) &&
            void 0 !== n
              ? n
              : []
            ).length - 1,
          v = (e) => {
            h(c, e, !0);
          };
        return (0, l.jsxs)(a.Menu, {
          navId: "welcome-settings-context",
          "aria-label": o.intl.string(o.t.ogxXGh),
          onClose: s.Zy,
          onSelect: p,
          children: [
            (0, l.jsxs)(a.MenuGroup, {
              children: [
                (0, l.jsx)(a.MenuItem, {
                  id: "move-up",
                  label: o.intl.string(o.t["4UBqwM"]),
                  disabled: g <= 0,
                  action: () => v(g - 1),
                }),
                (0, l.jsx)(a.MenuItem, {
                  id: "move-down",
                  label: o.intl.string(o.t.b73Gwc),
                  disabled: g > m,
                  action: () => v(g + 1),
                }),
              ],
            }),
            (0, l.jsxs)(a.MenuGroup, {
              children: [
                (0, l.jsx)(a.MenuItem, {
                  id: "edit",
                  label: o.intl.string(o.t.u5DUrK),
                  action: () =>
                    (0, a.openModalLazy)(async () => {
                      let { default: e } = await t
                        .e("39143")
                        .then(t.bind(t, 737868));
                      return (n) =>
                        (0, l.jsx)(e, {
                          ...n,
                          welcomeChannel: c,
                          guildId: r,
                          onSave: u,
                        });
                    }),
                }),
                (0, l.jsx)(a.MenuItem, {
                  id: "delete",
                  label: o.intl.string(o.t.JYBc3N),
                  action: () => b(!0),
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
//# sourceMappingURL=6a326f536b294ad91a6b.js.map
