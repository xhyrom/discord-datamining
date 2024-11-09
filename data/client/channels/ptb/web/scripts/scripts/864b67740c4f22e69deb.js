"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37880"],
  {
    117938: function (t, e, n) {
      n.d(e, {
        C: function () {
          return i;
        },
        L: function () {
          return l;
        },
      });
      var o = n(873546),
        r = n(464179),
        a = n(981631);
      let l = (t) =>
          [a.HeQ.CARD, a.HeQ.VENMO].includes(t.type) && "US" === t.country
            ? o.tq
              ? r.ZP.Layouts.SETTINGS_US_MOBILE
              : r.ZP.Layouts.SETTINGS_US
            : t.type === a.HeQ.CARD && "US" !== t.country
              ? o.tq
                ? r.ZP.Layouts.SETTINGS_INTL_MOBILE
                : r.ZP.Layouts.SETTINGS_INTL
              : o.tq
                ? r.ZP.Layouts.SETTINGS_INTL_NO_NAME_MOBILE
                : r.ZP.Layouts.SETTINGS_INTL_NO_NAME,
        i = o.tq ? r.ZP.Layouts.SETTINGS_US_MOBILE : r.ZP.Layouts.SETTINGS_US;
    },
    897511: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return p;
          },
          triggerBrowserDownload: function () {
            return S;
          },
        }),
        n(642549),
        n(757143),
        n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817),
        n(315314),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var o = n(200651),
        r = n(192379),
        a = n(544891),
        l = n(481060),
        i = n(464179),
        s = n(479531),
        c = n(117938),
        d = n(981631),
        u = n(388032),
        y = n(765819);
      function S(t, e) {
        let n = atob(e.replace(/\s/g, "")),
          o = new Uint8Array(new ArrayBuffer(n.length));
        for (let t = 0; t < n.length; t++) o[t] = n.charCodeAt(t);
        let r = new Blob([o], { type: "application/pdf" }),
          a = URL.createObjectURL(r),
          l = document.createElement("a");
        (l.href = a),
          (l.download = "receipt_".concat(t, ".pdf")),
          document.body.appendChild(l),
          l.click(),
          document.body.removeChild(l),
          URL.revokeObjectURL(a);
      }
      async function _(t, e, n) {
        let o = d.ANM.BILLING_INVOICE_PDF,
          r = e
            ? {
                name: n.name,
                line_1: n.line1,
                line_2: n.line2,
                city: n.city,
                state: n.state,
                postal_code: n.postalCode,
                country: n.country,
              }
            : null,
          l = await a.tn.post({
            url: o,
            body: { payment_id: t, billing_address_override: e ? r : null },
            oldFormErrors: !0,
          });
        return S(t, l.text), !0;
      }
      function p(t) {
        let { payment: e, paymentSource: n, ...a } = t,
          d = {
            name: "",
            line1: "",
            line2: "",
            city: "",
            postalCode: "",
            state: "",
            country: n.country,
          },
          [S, p] = r.useState(d),
          [N, h] = r.useState(!1),
          [L, f] = r.useState(!1),
          [m, E] = r.useState(!1),
          [T, g] = r.useState("");
        async function I() {
          E(!0);
          try {
            await _(C, N, S);
          } catch (n) {
            var t;
            let e = JSON.parse(await n.body.text());
            g(
              null !== (t = new s.Z({ ...n, body: e }).getAnyErrorMessage()) &&
                void 0 !== t
                ? t
                : u.intl.string(u.t["4eT6rq"]),
            );
          } finally {
            E(!1);
          }
        }
        let b = c.C,
          C = e.id,
          x = (0, o.jsx)("div", {
            children: (0, o.jsx)(l.FormSwitch, {
              value: N,
              note: u.intl.string(u.t["2p1XJS"]),
              onChange: h,
              children: u.intl.string(u.t["aJg+oa"]),
            }),
          }),
          M = N
            ? (0, o.jsx)(i.ZP, {
                ...S,
                mode: i.ZP.Modes.CREATE,
                layout: b,
                onBillingAddressChange: function (t, e) {
                  p(t), f(e);
                },
                error: null,
              })
            : null;
        return (0, o.jsxs)(l.ModalRoot, {
          className: y.modal,
          size: l.ModalSize.DYNAMIC,
          ...a,
          children: [
            (0, o.jsx)(l.ModalHeader, {
              separator: !1,
              children: (0, o.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                children: u.intl.string(u.t.onRIxc),
              }),
            }),
            (0, o.jsxs)(l.ModalContent, {
              className: y.body,
              children: [x, M],
            }),
            (0, o.jsxs)(l.ModalFooter, {
              children: [
                (0, o.jsx)(l.Button, {
                  type: "submit",
                  color: l.Button.Colors.GREEN,
                  disabled: N && !L,
                  onClick: I,
                  submitting: m,
                  autoFocus: !0,
                  children: u.intl.string(u.t.uqZjLi),
                }),
                (0, o.jsx)(l.Text, {
                  color: "text-danger",
                  className: y.error,
                  variant: "text-sm/semibold",
                  children: T,
                }),
              ],
            }),
          ],
        });
      }
    },
    765819: function (t, e, n) {
      t.exports = {
        modal: "modal_c1e5f4",
        body: "body_c1e5f4",
        error: "error_c1e5f4",
      };
    },
  },
]);
//# sourceMappingURL=864b67740c4f22e69deb.js.map
