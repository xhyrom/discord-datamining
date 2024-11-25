"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4117"],
  {
    217723: function (t, o, a) {
      a.r(o),
        a.d(o, {
          default: function () {
            return c;
          },
        }),
        a(47120);
      var e = a(200651),
        n = a(192379),
        l = a(481060),
        i = a(313201),
        s = a(388032),
        r = a(852796);
      function c(t) {
        let { transitionState: o, onConfirm: a, onClose: c, onDismiss: d } = t,
          [u, h] = n.useState(!1),
          m = (0, i.Dt)(),
          p = async () => {
            if (!u) {
              h(!0);
              try {
                await a();
              } catch (t) {
              } finally {
                h(!1);
              }
              c();
            }
          };
        return (0, e.jsxs)(l.ModalRoot, {
          transitionState: o,
          "aria-labelledby": m,
          size: l.ModalSize.SMALL,
          children: [
            (0, e.jsxs)(l.ModalContent, {
              children: [
                (0, e.jsx)(l.ModalCloseButton, {
                  onClick: () => {
                    d(), c();
                  },
                  className: r.closeButton,
                }),
                (0, e.jsx)(l.Heading, {
                  id: m,
                  variant: "heading-lg/extrabold",
                  color: "header-primary",
                  className: r.modalTitle,
                  children: s.intl.string(s.t["66tnnp"]),
                }),
                (0, e.jsx)(l.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  className: r.modalBody,
                  children: s.intl.string(s.t["c/k4SU"]),
                }),
              ],
            }),
            (0, e.jsx)(l.ModalFooter, {
              children: (0, e.jsx)(l.Button, {
                type: "submit",
                color: l.Button.Colors.BRAND,
                onClick: p,
                submitting: u,
                children: s.intl.string(s.t["cY+Ooa"]),
              }),
            }),
          ],
        });
      }
    },
    852796: function (t, o, a) {
      t.exports = {
        modalTitle: "modalTitle_c042e9",
        modalBody: "modalBody_c042e9",
        closeButton: "closeButton_c042e9",
      };
    },
  },
]);
//# sourceMappingURL=64c5f0b19c636187c030.js.map
