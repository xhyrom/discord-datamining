"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14466"],
  {
    729328: function (t, n, r) {
      r.r(n),
        r.d(n, {
          default: function () {
            return s;
          },
        });
      var e = r(200651);
      r(192379);
      var i = r(481060),
        o = r(388032),
        l = r(505740);
      function s(t) {
        let { onClose: n, transitionState: r, body: s } = t;
        return (0, e.jsxs)(i.ModalRoot, {
          transitionState: r,
          children: [
            (0, e.jsx)(i.ModalHeader, {
              separator: !1,
              children: (0, e.jsx)(i.FormTitle, {
                tag: "h2",
                className: l.title,
                children: o.intl.string(o.t.KTjjrK),
              }),
            }),
            (0, e.jsx)(i.ModalContent, {
              children:
                "string" == typeof s
                  ? (0, e.jsx)(i.Text, {
                      variant: "text-md/normal",
                      children: s,
                    })
                  : s,
            }),
            (0, e.jsx)(i.ModalFooter, {
              children: (0, e.jsx)(i.Button, {
                color: i.Button.Colors.BRAND,
                onClick: n,
                children: o.intl.string(o.t.i4jeWV),
              }),
            }),
          ],
        });
      }
    },
    505740: function (t, n, r) {
      t.exports = { title: "title_be9df7" };
    },
  },
]);
//# sourceMappingURL=1aa9814ace167dd88a10.js.map
