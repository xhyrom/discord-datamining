"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13111"],
  {
    93756: function (o, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return i;
          },
        });
      var n = a(735250);
      a(470079);
      var s = a(481060),
        t = a(174767),
        l = a(689938),
        d = a(721958);
      function i(o) {
        let { transitionState: e, onClose: a, onDelete: i } = o;
        async function r() {
          await (0, t.TG)(), i();
        }
        return (0, n.jsxs)(s.ModalRoot, {
          size: s.ModalSize.SMALL,
          transitionState: e,
          className: d.__invalid_modal,
          children: [
            (0, n.jsxs)(s.ModalContent, {
              className: d.modalContent,
              children: [
                (0, n.jsxs)("div", {
                  className: d.header,
                  children: [
                    (0, n.jsx)(s.Heading, {
                      className: d.__invalid_title,
                      variant: "heading-lg/semibold",
                      color: "header-primary",
                      children: l.Z.Messages.GAME_INVITES_DELETE_MODAL_TITLE,
                    }),
                    (0, n.jsx)(s.ModalCloseButton, { onClick: a }),
                  ],
                }),
                (0, n.jsx)(s.Text, {
                  variant: "text-md/normal",
                  color: "text-normal",
                  className: d.__invalid_body,
                  children: l.Z.Messages.GAME_INVITES_DELETE_MODAL_SUBTITLE,
                }),
              ],
            }),
            (0, n.jsxs)(s.ModalFooter, {
              children: [
                (0, n.jsx)(s.Button, {
                  color: s.Button.Colors.RED,
                  onClick: r,
                  children: l.Z.Messages.GAME_INVITES_DELETE_INVITES,
                }),
                (0, n.jsx)(s.Button, {
                  look: s.Button.Looks.LINK,
                  color: s.Button.Colors.PRIMARY,
                  onClick: a,
                  children: l.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    721958: function (o, e, a) {
      o.exports = {
        modalContent: "modalContent_dfde72",
        header: "header_dfde72",
      };
    },
  },
]);
//# sourceMappingURL=b4c39f5060c771959ae1.js.map
