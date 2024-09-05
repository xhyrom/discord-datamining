"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25120"],
  {
    926281: function (e, s, a) {
      a.r(s),
        a.d(s, {
          default: function () {
            return A;
          },
        }),
        a(47120);
      var t,
        c,
        l = a(735250),
        r = a(470079),
        n = a(481060),
        i = a(689938);
      function A(e) {
        let {
            modalProps: s,
            settings: { onConfirm: a, ...t },
          } = e,
          [c, A] = r.useState({
            Account: {
              value: "Account",
              label: i.Z.Messages.HARVEST_BACKEND_USERS,
              checked: !1,
            },
            Analytics: {
              value: "Analytics",
              label: i.Z.Messages.HARVEST_BACKEND_ANALYTICS,
              checked: !1,
            },
            Activities: {
              value: "Activities",
              label: i.Z.Messages.HARVEST_BACKEND_ACTIVITIES,
              checked: !1,
            },
            Messages: {
              value: "Messages",
              label: i.Z.Messages.HARVEST_BACKEND_MESSAGES,
              checked: !1,
            },
            Programs: {
              value: "Programs",
              label: i.Z.Messages.HARVEST_BACKEND_HUBSPOT,
              checked: !1,
            },
            Servers: {
              value: "Servers",
              label: i.Z.Messages.HARVEST_BACKEND_GUILDS,
              checked: !1,
            },
          }),
          S = (e) => (s, a) => {
            A((s) => ({ ...s, [e]: { ...s[e], checked: a } }));
          };
        return (0, l.jsxs)(n.ConfirmModal, {
          ...s,
          ...t,
          onConfirm: () => {
            let e = Object.keys(c)
              .filter((e) => c[e].checked)
              .map((e) => c[e].value);
            null == a || a(e);
          },
          children: [
            (0, l.jsx)(n.Text, {
              variant: "text-md/normal",
              style: { marginBottom: "5px" },
              children: t.body,
            }),
            Object.keys(c).map((e) => {
              let { label: s, checked: a } = c[e];
              return (0, l.jsx)(
                n.Checkbox,
                {
                  type: n.Checkbox.Types.INVERTED,
                  value: a,
                  style: { marginBottom: "2px" },
                  onChange: S(e),
                  children: (0, l.jsx)(n.Text, {
                    variant: "text-md/normal",
                    children: s,
                  }),
                },
                e,
              );
            }),
          ],
        });
      }
      ((c = t || (t = {})).USERS = "Account"),
        (c.MESSAGES = "Messages"),
        (c.GUILDS = "Servers"),
        (c.ANALYTICS = "Analytics"),
        (c.ACTIVITIES = "Activities"),
        (c.HUBSPOT = "Programs");
    },
  },
]);
//# sourceMappingURL=3b733507b7cd810a3b36.js.map
