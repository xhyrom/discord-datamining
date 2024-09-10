"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14466"],
  {
    729328: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return a;
          },
        });
      var r = n(735250);
      n(470079);
      var o = n(481060),
        s = n(689938),
        i = n(954315);
      function a(t) {
        let { onClose: e, transitionState: n, body: a } = t;
        return (0, r.jsxs)(o.ModalRoot, {
          transitionState: n,
          children: [
            (0, r.jsx)(o.ModalHeader, {
              separator: !1,
              children: (0, r.jsx)(o.FormTitle, {
                tag: "h2",
                className: i.title,
                children: s.Z.Messages.STREAM_REPORTED,
              }),
            }),
            (0, r.jsx)(o.ModalContent, {
              children:
                "string" == typeof a
                  ? (0, r.jsx)(o.Text, {
                      variant: "text-md/normal",
                      children: a,
                    })
                  : a,
            }),
            (0, r.jsx)(o.ModalFooter, {
              children: (0, r.jsx)(o.Button, {
                color: o.Button.Colors.BRAND,
                onClick: e,
                children: s.Z.Messages.DONE,
              }),
            }),
          ],
        });
      }
    },
    954315: function (t, e, n) {
      t.exports = { title: "title_be9df7" };
    },
  },
]);
//# sourceMappingURL=b68ddbd3642fd20473c7.js.map
