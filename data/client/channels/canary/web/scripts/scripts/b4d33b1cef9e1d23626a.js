"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["25120"],
  {
    926281: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        }),
        s(47120);
      var n,
        l,
        i = s(200651),
        c = s(192379),
        r = s(481060),
        a = s(388032);
      function d(e) {
        let {
            modalProps: t,
            settings: { onConfirm: s, ...n },
          } = e,
          [l, d] = c.useState({
            Account: {
              value: "Account",
              label: a.intl.string(a.t["rfe/x8"]),
              checked: !1,
            },
            Analytics: {
              value: "Analytics",
              label: a.intl.string(a.t["j+d6RE"]),
              checked: !1,
            },
            Activities: {
              value: "Activities",
              label: a.intl.string(a.t.KO88BQ),
              checked: !1,
            },
            Messages: {
              value: "Messages",
              label: a.intl.string(a.t["0dO1t7"]),
              checked: !1,
            },
            Programs: {
              value: "Programs",
              label: a.intl.string(a.t.M4ddeX),
              checked: !1,
            },
            Servers: {
              value: "Servers",
              label: a.intl.string(a.t.JN9c39),
              checked: !1,
            },
          }),
          o = (e) => (t, s) => {
            d((t) => ({ ...t, [e]: { ...t[e], checked: s } }));
          };
        return (0, i.jsxs)(r.ConfirmModal, {
          ...t,
          ...n,
          onConfirm: () => {
            let e = Object.keys(l)
              .filter((e) => l[e].checked)
              .map((e) => l[e].value);
            null == s || s(e);
          },
          children: [
            (0, i.jsx)(r.Text, {
              variant: "text-md/normal",
              style: { marginBottom: "5px" },
              children: n.body,
            }),
            Object.keys(l).map((e) => {
              let { label: t, checked: s } = l[e];
              return (0, i.jsx)(
                r.Checkbox,
                {
                  type: r.Checkbox.Types.INVERTED,
                  value: s,
                  style: { marginBottom: "2px" },
                  onChange: o(e),
                  children: (0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    children: t,
                  }),
                },
                e,
              );
            }),
          ],
        });
      }
      ((l = n || (n = {})).USERS = "Account"),
        (l.MESSAGES = "Messages"),
        (l.GUILDS = "Servers"),
        (l.ANALYTICS = "Analytics"),
        (l.ACTIVITIES = "Activities"),
        (l.HUBSPOT = "Programs");
    },
  },
]);
//# sourceMappingURL=b4d33b1cef9e1d23626a.js.map
