"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37880"],
  {
    117938: function (t, e, n) {
      n.d(e, {
        C: function () {
          return l;
        },
        L: function () {
          return i;
        },
      });
      var o = n(873546),
        r = n(464179),
        a = n(981631);
      let i = (t) =>
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
        l = o.tq ? r.ZP.Layouts.SETTINGS_US_MOBILE : r.ZP.Layouts.SETTINGS_US;
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
        i = n(481060),
        l = n(464179),
        s = n(479531),
        c = n(117938),
        d = n(981631),
        u = n(388032),
        y = n(987957);
      function S(t, e) {
        let n = atob(e.replace(/\s/g, "")),
          o = new Uint8Array(new ArrayBuffer(n.length));
        for (let t = 0; t < n.length; t++) o[t] = n.charCodeAt(t);
        let r = new Blob([o], { type: "application/pdf" }),
          a = URL.createObjectURL(r),
          i = document.createElement("a");
        (i.href = a),
          (i.download = "receipt_".concat(t, ".pdf")),
          document.body.appendChild(i),
          i.click(),
          document.body.removeChild(i),
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
          i = await a.tn.post({
            url: o,
            body: { payment_id: t, billing_address_override: e ? r : null },
            oldFormErrors: !0,
            rejectWithError: !1,
          });
        return S(t, i.text), !0;
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
          [h, N] = r.useState(!1),
          [E, L] = r.useState(!1),
          [f, m] = r.useState(!1),
          [T, g] = r.useState("");
        async function I() {
          m(!0);
          try {
            await _(C, h, S);
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
            m(!1);
          }
        }
        let b = c.C,
          C = e.id,
          x = (0, o.jsx)("div", {
            children: (0, o.jsx)(i.FormSwitch, {
              value: h,
              note: u.intl.string(u.t["2p1XJS"]),
              onChange: N,
              children: u.intl.string(u.t["aJg+oa"]),
            }),
          }),
          M = h
            ? (0, o.jsx)(l.ZP, {
                ...S,
                mode: l.ZP.Modes.CREATE,
                layout: b,
                onBillingAddressChange: function (t, e) {
                  p(t), L(e);
                },
                error: null,
              })
            : null;
        return (0, o.jsxs)(i.ModalRoot, {
          className: y.modal,
          size: i.ModalSize.DYNAMIC,
          ...a,
          children: [
            (0, o.jsx)(i.ModalHeader, {
              separator: !1,
              children: (0, o.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                children: u.intl.string(u.t.onRIxc),
              }),
            }),
            (0, o.jsxs)(i.ModalContent, {
              className: y.body,
              children: [x, M],
            }),
            (0, o.jsxs)(i.ModalFooter, {
              children: [
                (0, o.jsx)(i.Button, {
                  type: "submit",
                  color: i.Button.Colors.GREEN,
                  disabled: h && !E,
                  onClick: I,
                  submitting: f,
                  autoFocus: !0,
                  children: u.intl.string(u.t.uqZjLi),
                }),
                (0, o.jsx)(i.Text, {
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
    987957: function (t, e, n) {
      t.exports = {
        modal: "modal_c1e5f4",
        body: "body_c1e5f4",
        error: "error_c1e5f4",
      };
    },
  },
]);
//# sourceMappingURL=6a32324fa8bd94647617.js.map
