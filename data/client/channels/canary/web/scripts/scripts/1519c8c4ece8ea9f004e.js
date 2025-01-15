"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13111"],
  {
    93756: function (t, n, o) {
      o.r(n),
        o.d(n, {
          default: function () {
            return r;
          },
        });
      var i = o(200651);
      o(192379);
      var a = o(481060),
        e = o(174767),
        l = o(388032),
        s = o(80047);
      function r(t) {
        let { transitionState: n, onClose: o, onDelete: r } = t;
        async function d() {
          await (0, e.TG)(), r();
        }
        return (0, i.jsxs)(a.ModalRoot, {
          size: a.ModalSize.SMALL,
          transitionState: n,
          className: s.__invalid_modal,
          children: [
            (0, i.jsxs)(a.ModalContent, {
              className: s.modalContent,
              children: [
                (0, i.jsxs)("div", {
                  className: s.header,
                  children: [
                    (0, i.jsx)(a.Heading, {
                      className: s.__invalid_title,
                      variant: "heading-lg/semibold",
                      color: "header-primary",
                      children: l.intl.string(l.t.P8nDIC),
                    }),
                    (0, i.jsx)(a.ModalCloseButton, { onClick: o }),
                  ],
                }),
                (0, i.jsx)(a.Text, {
                  variant: "text-md/normal",
                  color: "text-normal",
                  className: s.__invalid_body,
                  children: l.intl.string(l.t.fwFcj4),
                }),
              ],
            }),
            (0, i.jsxs)(a.ModalFooter, {
              children: [
                (0, i.jsx)(a.Button, {
                  color: a.Button.Colors.RED,
                  onClick: d,
                  children: l.intl.string(l.t["5I4fSk"]),
                }),
                (0, i.jsx)(a.Button, {
                  look: a.Button.Looks.LINK,
                  color: a.Button.Colors.PRIMARY,
                  onClick: o,
                  children: l.intl.string(l.t["ETE/oK"]),
                }),
              ],
            }),
          ],
        });
      }
    },
    80047: function (t, n, o) {
      t.exports = {
        modalContent: "modalContent_dfde72",
        header: "header_dfde72",
      };
    },
  },
]);
//# sourceMappingURL=1519c8c4ece8ea9f004e.js.map
