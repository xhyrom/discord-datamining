"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59128"],
  {
    28564: function (t, n, o) {
      o.r(n),
        o.d(n, {
          default: function () {
            return e;
          },
        });
      var r = o(200651);
      o(192379);
      var i = o(481060),
        l = o(388032);
      function e(t) {
        let { onClose: n, onConfirmDelete: o, transitionState: e } = t;
        return (0, r.jsxs)(i.ModalRoot, {
          transitionState: e,
          "aria-label": l.intl.string(l.t["u/2TkZ"]),
          children: [
            (0, r.jsx)(i.ModalHeader, {
              separator: !1,
              children: (0, r.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                children: l.intl.string(l.t["u/2TkZ"]),
              }),
            }),
            (0, r.jsx)(i.ModalContent, {
              children: (0, r.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "header-primary",
                children: l.intl.string(l.t["9sgGbG"]),
              }),
            }),
            (0, r.jsxs)(i.ModalFooter, {
              children: [
                (0, r.jsx)(i.Button, {
                  onClick: o,
                  color: i.Button.Colors.RED,
                  children: l.intl.string(l.t.dO8DLC),
                }),
                (0, r.jsx)(i.Button, {
                  onClick: n,
                  look: i.Button.Looks.LINK,
                  color: i.Button.Colors.PRIMARY,
                  children: l.intl.string(l.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=5ea2354acce72087f0fe.js.map
