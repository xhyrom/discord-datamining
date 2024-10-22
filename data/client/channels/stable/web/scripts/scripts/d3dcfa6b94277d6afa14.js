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
          return s;
        },
      });
      var n = o(873546),
        a = o(464179),
        r = o(981631);
      let s = (e) =>
          [r.HeQ.CARD, r.HeQ.VENMO].includes(e.type) && "US" === e.country
            ? n.tq
              ? a.ZP.Layouts.SETTINGS_US_MOBILE
              : a.ZP.Layouts.SETTINGS_US
            : e.type === r.HeQ.CARD && "US" !== e.country
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
        o(642549),
        o(757143),
        o(518263),
        o(970173),
        o(520712),
        o(268111),
        o(941497),
        o(32026),
        o(480839),
        o(744285),
        o(492257),
        o(873817),
        o(315314),
        o(610138),
        o(216116),
        o(78328),
        o(815648),
        o(47120);
      var n = o(200651),
        a = o(192379),
        r = o(544891),
        s = o(481060),
        l = o(464179),
        i = o(479531),
        c = o(117938),
        d = o(981631),
        u = o(689938),
        _ = o(765819);
      function I(e, t) {
        let o = atob(t.replace(/\s/g, "")),
          n = new Uint8Array(new ArrayBuffer(o.length));
        for (let e = 0; e < o.length; e++) n[e] = o.charCodeAt(e);
        let a = new Blob([n], { type: "application/pdf" }),
          r = URL.createObjectURL(a),
          s = document.createElement("a");
        (s.href = r),
          (s.download = "receipt_".concat(e, ".pdf")),
          document.body.appendChild(s),
          s.click(),
          document.body.removeChild(s),
          URL.revokeObjectURL(r);
      }
      async function N(e, t, o) {
        let n = d.ANM.BILLING_INVOICE_PDF,
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
          s = await r.tn.post({
            url: n,
            body: { payment_id: e, billing_address_override: t ? a : null },
            oldFormErrors: !0,
          });
        return I(e, s.text), !0;
      }
      function L(e) {
        let { payment: t, paymentSource: o, ...r } = e,
          d = {
            name: "",
            line1: "",
            line2: "",
            city: "",
            postalCode: "",
            state: "",
            country: o.country,
          },
          [I, L] = a.useState(d),
          [y, E] = a.useState(!1),
          [S, O] = a.useState(!1),
          [T, p] = a.useState(!1),
          [h, C] = a.useState("");
        async function D() {
          p(!0);
          try {
            await N(m, y, I);
          } catch (o) {
            var e;
            let t = JSON.parse(await o.body.text());
            C(
              null !== (e = new i.Z({ ...o, body: t }).getAnyErrorMessage()) &&
                void 0 !== e
                ? e
                : u.Z.Messages.BILLING_DOWNLOAD_INVOICE_PDF_BUTTON_ERROR,
            );
          } finally {
            p(!1);
          }
        }
        let f = c.C,
          m = t.id,
          g = (0, n.jsx)("div", {
            children: (0, n.jsx)(s.FormSwitch, {
              value: y,
              note: u.Z.Messages
                .BILLING_DOWNLOAD_INVOICE_ADDRESS_OVERRIDE_DESCRIPTION,
              onChange: E,
              children:
                u.Z.Messages.BILLING_DOWNLOAD_INVOICE_ADDRESS_OVERRIDE_TOGGLE,
            }),
          }),
          M = y
            ? (0, n.jsx)(l.ZP, {
                ...I,
                mode: l.ZP.Modes.CREATE,
                layout: f,
                onBillingAddressChange: function (e, t) {
                  L(e), O(t);
                },
                error: null,
              })
            : null;
        return (0, n.jsxs)(s.ModalRoot, {
          className: _.modal,
          size: s.ModalSize.DYNAMIC,
          ...r,
          children: [
            (0, n.jsx)(s.ModalHeader, {
              separator: !1,
              children: (0, n.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                children: u.Z.Messages.BILLING_DOWNLOAD_INVOICE,
              }),
            }),
            (0, n.jsxs)(s.ModalContent, {
              className: _.body,
              children: [g, M],
            }),
            (0, n.jsxs)(s.ModalFooter, {
              children: [
                (0, n.jsx)(s.Button, {
                  type: "submit",
                  color: s.Button.Colors.GREEN,
                  disabled: y && !S,
                  onClick: D,
                  submitting: T,
                  autoFocus: !0,
                  children: u.Z.Messages.BILLING_DOWNLOAD_INVOICE_PDF_BUTTON,
                }),
                (0, n.jsx)(s.Text, {
                  color: "text-danger",
                  className: _.error,
                  variant: "text-sm/semibold",
                  children: h,
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
//# sourceMappingURL=d3dcfa6b94277d6afa14.js.map
