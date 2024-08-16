"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98466"],
  {
    151578: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return o;
          },
        });
      var a = t(735250);
      t(470079);
      var s = t(852229),
        c = t(481060),
        i = t(239091),
        l = t(198620),
        u = t(689938);
      function o(n) {
        let { attachmentUrl: e, attachmentName: t, onSelect: o } = n;
        return (0, a.jsx)(c.Menu, {
          navId: "attachment-link-context",
          onClose: i.Zy,
          onSelect: o,
          "aria-label": u.Z.Messages.LINK_OPTIONS,
          children: (0, a.jsxs)(
            c.MenuGroup,
            {
              children: [
                (0, a.jsx)(c.MenuItem, {
                  id: "attachment-link-copy-link",
                  label: u.Z.Messages.COPY_LINK,
                  action: async () => {
                    let n = await (0, l.B_)(e);
                    (0, s.J)(null != n ? n : "");
                  },
                }),
                (0, a.jsx)(c.MenuItem, {
                  id: "attachment-link-copy-name",
                  label: u.Z.Messages.COPY_TEXT,
                  action: () => {
                    (0, s.J)(null != t ? t : "");
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
//# sourceMappingURL=50491f53a6e1aa3d6a45.js.map
