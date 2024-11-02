"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98466"],
  {
    151578: function (n, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return u;
          },
        });
      var e = a(200651);
      a(192379);
      var i = a(852229),
        l = a(481060),
        c = a(239091),
        r = a(198620),
        s = a(388032);
      function u(n) {
        let { attachmentUrl: t, attachmentName: a, onSelect: u } = n;
        return (0, e.jsx)(l.Menu, {
          navId: "attachment-link-context",
          onClose: c.Zy,
          onSelect: u,
          "aria-label": s.intl.string(s.t["5oIOLS"]),
          children: (0, e.jsxs)(
            l.MenuGroup,
            {
              children: [
                (0, e.jsx)(l.MenuItem, {
                  id: "attachment-link-copy-link",
                  label: s.intl.string(s.t.WqhZsr),
                  action: async () => {
                    let n = await (0, r.B_)(t);
                    (0, i.J)(null != n ? n : "");
                  },
                }),
                (0, e.jsx)(l.MenuItem, {
                  id: "attachment-link-copy-name",
                  label: s.intl.string(s.t.JrGD7O),
                  action: () => {
                    (0, i.J)(null != a ? a : "");
                  },
                }),
              ],
            },
            "attachment-link-actions",
          ),
        });
      }
    },
  },
]);
//# sourceMappingURL=a788dccfecf4c5a4a1a4.js.map
