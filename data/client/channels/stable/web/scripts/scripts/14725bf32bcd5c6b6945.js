"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37880"],
  {
    117938: function (e, t, o) {
      o.d(t, {
        C: function () {
          return l;
        },
        L: function () {
          return r;
        },
      });
      var n = o(873546),
        a = o(464179),
        s = o(981631);
      let r = (e) =>
          [s.HeQ.CARD, s.HeQ.VENMO].includes(e.type) && "US" === e.country
            ? n.tq
              ? a.ZP.Layouts.SETTINGS_US_MOBILE
              : a.ZP.Layouts.SETTINGS_US
            : e.type === s.HeQ.CARD && "US" !== e.country
              ? n.tq
                ? a.ZP.Layouts.SETTINGS_INTL_MOBILE
                : a.ZP.Layouts.SETTINGS_INTL
              : n.tq
                ? a.ZP.Layouts.SETTINGS_INTL_NO_NAME_MOBILE
                : a.ZP.Layouts.SETTINGS_INTL_NO_NAME,
        l = n.tq ? a.ZP.Layouts.SETTINGS_US_MOBILE : a.ZP.Layouts.SETTINGS_US;
    },
    897511: function (e, t, o) {
      o.r(t),
        o.d(t, {
          default: function () {
            return L;
          },
          triggerBrowserDownload: function () {
            return I;
          },
        }),
        o(315314),
        o(610138),
        o(216116),
        o(78328),
        o(815648),
        o(47120);
      var n = o(735250),
        a = o(470079),
        s = o(544891),
        r = o(481060),
        l = o(464179),
        i = o(479531),
        d = o(117938),
        c = o(981631),
        u = o(689938),
        _ = o(765819);
      function I(e, t) {
        let o = URL.createObjectURL(t),
          n = document.createElement("a");
        (n.href = o),
          (n.download = "receipt_".concat(e, ".pdf")),
          document.body.appendChild(n),
          n.click(),
          document.body.removeChild(n),
          URL.revokeObjectURL(o);
      }
      async function N(e, t, o) {
        let n = c.ANM.BILLING_INVOICE_PDF,
          a = t
            ? {
                name: o.name,
                line_1: o.line1,
                line_2: o.line2,
                city: o.city,
                state: o.state,
                postal_code: o.postalCode,
                country: o.country,
              }
            : null,
          r = await s.tn.post({
            url: n,
            body: { payment_id: e, billing_address_override: t ? a : null },
            oldFormErrors: !0,
            binary: !0,
          });
        return I(e, r.body), !0;
      }
      function L(e) {
        let { payment: t, paymentSource: o, ...s } = e,
          c = {
            name: "",
            line1: "",
            line2: "",
            city: "",
            postalCode: "",
            state: "",
            country: o.country,
          },
          [I, L] = a.useState(c),
          [E, y] = a.useState(!1),
          [S, O] = a.useState(!1),
          [T, C] = a.useState(!1),
          [D, m] = a.useState("");
        async function h() {
          C(!0);
          try {
            await N(M, E, I);
          } catch (o) {
            var e;
            let t = JSON.parse(await o.body.text());
            m(
              null !== (e = new i.Z({ ...o, body: t }).getAnyErrorMessage()) &&
                void 0 !== e
                ? e
                : u.Z.Messages.BILLING_DOWNLOAD_INVOICE_PDF_BUTTON_ERROR,
            );
          } finally {
            C(!1);
          }
        }
        let p = d.C,
          M = t.id,
          b = (0, n.jsx)("div", {
            children: (0, n.jsx)(r.FormSwitch, {
              value: E,
              note: u.Z.Messages
                .BILLING_DOWNLOAD_INVOICE_ADDRESS_OVERRIDE_DESCRIPTION,
              onChange: y,
              children:
                u.Z.Messages.BILLING_DOWNLOAD_INVOICE_ADDRESS_OVERRIDE_TOGGLE,
            }),
          }),
          f = E
            ? (0, n.jsx)(l.ZP, {
                ...I,
                mode: l.ZP.Modes.CREATE,
                layout: p,
                onBillingAddressChange: function (e, t) {
                  L(e), O(t);
                },
                error: null,
              })
            : null;
        return (0, n.jsxs)(r.ModalRoot, {
          className: _.modal,
          size: r.ModalSize.DYNAMIC,
          ...s,
          children: [
            (0, n.jsx)(r.ModalHeader, {
              separator: !1,
              children: (0, n.jsx)(r.Heading, {
                variant: "heading-lg/semibold",
                children: u.Z.Messages.BILLING_DOWNLOAD_INVOICE,
              }),
            }),
            (0, n.jsxs)(r.ModalContent, {
              className: _.body,
              children: [b, f],
            }),
            (0, n.jsxs)(r.ModalFooter, {
              children: [
                (0, n.jsx)(r.Button, {
                  type: "submit",
                  color: r.Button.Colors.GREEN,
                  disabled: E && !S,
                  onClick: h,
                  submitting: T,
                  autoFocus: !0,
                  children: u.Z.Messages.BILLING_DOWNLOAD_INVOICE_PDF_BUTTON,
                }),
                (0, n.jsx)(r.Text, {
                  color: "text-danger",
                  className: _.error,
                  variant: "text-sm/semibold",
                  children: D,
                }),
              ],
            }),
          ],
        });
      }
    },
    765819: function (e, t, o) {
      e.exports = {
        modal: "modal_c1e5f4",
        body: "body_c1e5f4",
        error: "error_c1e5f4",
      };
    },
  },
]);
//# sourceMappingURL=14725bf32bcd5c6b6945.js.map
