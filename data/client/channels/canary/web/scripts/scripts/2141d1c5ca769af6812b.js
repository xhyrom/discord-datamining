"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7649"],
  {
    797464: function (e, t, o) {
      o.r(t),
        o.d(t, {
          default: function () {
            return u;
          },
        }),
        o(47120);
      var s = o(735250),
        a = o(470079),
        n = o(120356),
        l = o.n(n),
        i = o(481060),
        c = o(313201),
        d = o(689938),
        r = o(856778);
      function u(e) {
        let { transitionState: t, onConfirm: o, onClose: n, onDismiss: u } = e,
          [S, _] = a.useState(!1),
          [M, E] = a.useState(!0),
          [h, m] = a.useState(!0),
          g = (0, c.Dt)(),
          A = () => {
            u(), n();
          };
        return (0, s.jsxs)(i.ModalRoot, {
          transitionState: t,
          "aria-labelledby": g,
          size: i.ModalSize.SMALL,
          children: [
            (0, s.jsxs)(i.ModalContent, {
              className: r.modalContent,
              children: [
                (0, s.jsx)(i.ModalCloseButton, {
                  onClick: A,
                  className: r.closeButton,
                }),
                (0, s.jsx)(i.Heading, {
                  id: g,
                  variant: "heading-lg/extrabold",
                  color: "header-primary",
                  className: r.__invalid_modalTitle,
                  children: d.Z.Messages.MESSAGE_REQUESTS_SPAM_HAM_MODAL_HEADER,
                }),
                (0, s.jsx)(i.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: r.modalBody,
                  children:
                    d.Z.Messages.MESSAGE_REQUESTS_SPAM_HAM_MODAL_SUBHEADER,
                }),
                (0, s.jsx)(i.FormSwitch, {
                  hideBorder: !0,
                  onChange: (e) => {
                    E(e);
                  },
                  className: l()(r.modalBody, r.toggle),
                  value: M,
                  children: d.Z.Messages.MESSAGE_REQUESTS_SPAM_HAM_TOGGLE,
                }),
              ],
            }),
            (0, s.jsxs)(i.ModalFooter, {
              children: [
                (0, s.jsx)(i.Button, {
                  type: "submit",
                  color: i.Button.Colors.BRAND,
                  onClick: () => {
                    if (!S) _(!0), o(M, h), _(!1), n();
                  },
                  submitting: S,
                  children: d.Z.Messages.CONFIRM,
                }),
                (0, s.jsx)(i.Button, {
                  type: "submit",
                  color: i.Button.Colors.TRANSPARENT,
                  grow: !0,
                  look: i.ButtonLooks.LINK,
                  onClick: A,
                  submitting: S,
                  className: r.cancelButton,
                  children: d.Z.Messages.CANCEL,
                }),
                (0, s.jsx)(i.Checkbox, {
                  value: h,
                  type: i.Checkbox.Types.INVERTED,
                  onChange: (e, t) => {
                    m(t);
                  },
                  children: (0, s.jsx)(i.Text, {
                    tag: "span",
                    variant: "text-sm/normal",
                    children: d.Z.Messages.MESSAGE_REQUESTS_SPAM_HAM_OPT_OUT,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    856778: function (e, t, o) {
      e.exports = {
        modalBody: "modalBody_f202f5",
        modalContent: "modalContent_f202f5",
        toggle: "toggle_f202f5",
        cancelButton: "cancelButton_f202f5",
        closeButton: "closeButton_f202f5",
      };
    },
  },
]);
//# sourceMappingURL=2141d1c5ca769af6812b.js.map
