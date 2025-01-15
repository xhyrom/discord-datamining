"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7649"],
  {
    797464: function (t, o, n) {
      n.r(o),
        n.d(o, {
          default: function () {
            return u;
          },
        }),
        n(47120);
      var e = n(200651),
        l = n(192379),
        a = n(120356),
        s = n.n(a),
        i = n(481060),
        r = n(313201),
        c = n(388032),
        d = n(513067);
      function u(t) {
        let { transitionState: o, onConfirm: n, onClose: a, onDismiss: u } = t,
          [h, m] = l.useState(!1),
          [g, x] = l.useState(!0),
          [B, C] = l.useState(!0),
          f = (0, r.Dt)(),
          p = () => {
            u(), a();
          };
        return (0, e.jsxs)(i.ModalRoot, {
          transitionState: o,
          "aria-labelledby": f,
          size: i.ModalSize.SMALL,
          children: [
            (0, e.jsxs)(i.ModalContent, {
              className: d.modalContent,
              children: [
                (0, e.jsx)(i.ModalCloseButton, {
                  onClick: p,
                  className: d.closeButton,
                }),
                (0, e.jsx)(i.Heading, {
                  id: f,
                  variant: "heading-lg/extrabold",
                  color: "header-primary",
                  className: d.__invalid_modalTitle,
                  children: c.intl.string(c.t["6rP+BQ"]),
                }),
                (0, e.jsx)(i.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: d.modalBody,
                  children: c.intl.string(c.t["1LuCnZ"]),
                }),
                (0, e.jsx)(i.FormSwitch, {
                  hideBorder: !0,
                  onChange: (t) => {
                    x(t);
                  },
                  className: s()(d.modalBody, d.toggle),
                  value: g,
                  children: c.intl.string(c.t["zLb+u7"]),
                }),
              ],
            }),
            (0, e.jsxs)(i.ModalFooter, {
              children: [
                (0, e.jsx)(i.Button, {
                  type: "submit",
                  color: i.Button.Colors.BRAND,
                  onClick: () => {
                    if (!h) m(!0), n(g, B), m(!1), a();
                  },
                  submitting: h,
                  children: c.intl.string(c.t["cY+Ooa"]),
                }),
                (0, e.jsx)(i.Button, {
                  type: "submit",
                  color: i.Button.Colors.TRANSPARENT,
                  grow: !0,
                  look: i.ButtonLooks.LINK,
                  onClick: p,
                  submitting: h,
                  className: d.cancelButton,
                  children: c.intl.string(c.t["ETE/oK"]),
                }),
                (0, e.jsx)(i.Checkbox, {
                  value: B,
                  type: i.Checkbox.Types.INVERTED,
                  onChange: (t, o) => {
                    C(o);
                  },
                  children: (0, e.jsx)(i.Text, {
                    tag: "span",
                    variant: "text-sm/normal",
                    children: c.intl.string(c.t.KX8WJi),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    513067: function (t, o, n) {
      t.exports = {
        modalBody: "modalBody_f202f5",
        modalContent: "modalContent_f202f5",
        toggle: "toggle_f202f5",
        cancelButton: "cancelButton_f202f5",
        closeButton: "closeButton_f202f5",
      };
    },
  },
]);
//# sourceMappingURL=485e73cd6ca89581bec8.js.map
