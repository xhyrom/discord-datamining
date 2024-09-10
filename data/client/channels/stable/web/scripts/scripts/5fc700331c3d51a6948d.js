"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4117"],
  {
    217723: function (e, t, o) {
      o.r(t),
        o.d(t, {
          default: function () {
            return c;
          },
        }),
        o(47120);
      var a = o(735250),
        s = o(470079),
        l = o(481060),
        n = o(313201),
        i = o(689938),
        d = o(323187);
      function c(e) {
        let { transitionState: t, onConfirm: o, onClose: c, onDismiss: r } = e,
          [u, h] = s.useState(!1),
          m = (0, n.Dt)(),
          C = async () => {
            if (!u) {
              h(!0);
              try {
                await o();
              } catch (e) {
              } finally {
                h(!1);
              }
              c();
            }
          };
        return (0, a.jsxs)(l.ModalRoot, {
          transitionState: t,
          "aria-labelledby": m,
          size: l.ModalSize.SMALL,
          children: [
            (0, a.jsxs)(l.ModalContent, {
              children: [
                (0, a.jsx)(l.ModalCloseButton, {
                  onClick: () => {
                    r(), c();
                  },
                  className: d.closeButton,
                }),
                (0, a.jsx)(l.Heading, {
                  id: m,
                  variant: "heading-lg/extrabold",
                  color: "header-primary",
                  className: d.modalTitle,
                  children:
                    i.Z.Messages.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_TITLE,
                }),
                (0, a.jsx)(l.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: d.modalBody,
                  children:
                    i.Z.Messages.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_BODY,
                }),
              ],
            }),
            (0, a.jsx)(l.ModalFooter, {
              children: (0, a.jsx)(l.Button, {
                type: "submit",
                color: l.Button.Colors.BRAND,
                onClick: C,
                submitting: u,
                children: i.Z.Messages.CONFIRM,
              }),
            }),
          ],
        });
      }
    },
    323187: function (e, t, o) {
      e.exports = {
        modalTitle: "modalTitle_c042e9",
        modalBody: "modalBody_c042e9",
        closeButton: "closeButton_c042e9",
      };
    },
  },
]);
//# sourceMappingURL=5fc700331c3d51a6948d.js.map
