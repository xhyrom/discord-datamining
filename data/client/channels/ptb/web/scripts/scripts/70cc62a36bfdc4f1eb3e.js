"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37969"],
  {
    496281: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return u;
          },
        });
      var i = a(735250);
      a(470079);
      var s = a(481060),
        r = a(239091),
        t = a(299206),
        l = a(943209),
        o = a(689938);
      function u(e) {
        let { channel: n, integration: a, onSelect: u } = e,
          d = (0, t.Z)({ id: n.id, label: o.Z.Messages.COPY_ID_APPLICATION });
        return (0, i.jsxs)(s.Menu, {
          "aria-label": o.Z.Messages.MANAGE_INTEGRATION,
          navId: "manage-integration",
          onClose: r.Zy,
          onSelect: u,
          children: [
            (0, i.jsx)(s.MenuGroup, {
              children: (0, i.jsx)(s.MenuItem, {
                id: "remove-integration",
                label:
                  o.Z.Messages.BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION,
                action: () => {
                  (0, l.GB)(n.id, a.application.id), null != u && u();
                },
                color: "danger",
              }),
            }),
            (0, i.jsx)(s.MenuGroup, { children: d }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=70cc62a36bfdc4f1eb3e.js.map
