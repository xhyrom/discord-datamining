"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37880"],
  {
    897511: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
          triggerBrowserDownload: function () {
            return p;
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
        d = n(117938),
        c = n(981631),
        u = n(388032),
        h = n(620389);
      function p(e, t) {
        let n = atob(t.replace(/\s/g, "")),
          o = new Uint8Array(new ArrayBuffer(n.length));
        for (let e = 0; e < n.length; e++) o[e] = n.charCodeAt(e);
        let r = new Blob([o], { type: "application/pdf" }),
          a = URL.createObjectURL(r),
          l = document.createElement("a");
        (l.href = a),
          (l.download = "receipt_".concat(e, ".pdf")),
          document.body.appendChild(l),
          l.click(),
          document.body.removeChild(l),
          URL.revokeObjectURL(a);
      }
      async function y(e, t, n) {
        let o = c.ANM.BILLING_INVOICE_PDF,
          r = t
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
            body: { payment_id: e, billing_address_override: t ? r : null },
            oldFormErrors: !0,
            rejectWithError: !1,
          });
        return p(e, l.text), !0;
      }
      function m(e) {
        let { payment: t, paymentSource: n, ...a } = e,
          c = {
            name: "",
            line1: "",
            line2: "",
            city: "",
            postalCode: "",
            state: "",
            country: n.country,
          },
          [p, m] = r.useState(c),
          [g, f] = r.useState(!1),
          [b, x] = r.useState(!1),
          [C, j] = r.useState(!1),
          [_, w] = r.useState("");
        async function v() {
          j(!0);
          try {
            await y(M, g, p);
          } catch (n) {
            var e;
            let t = JSON.parse(await n.body.text());
            w(
              null !== (e = new s.Z({ ...n, body: t }).getAnyErrorMessage()) &&
                void 0 !== e
                ? e
                : u.intl.string(u.t["4eT6rq"]),
            );
          } finally {
            j(!1);
          }
        }
        let E = d.C,
          M = t.id,
          N = (0, o.jsx)("div", {
            children: (0, o.jsx)(l.FormSwitch, {
              value: g,
              note: u.intl.string(u.t["2p1XJS"]),
              onChange: f,
              children: u.intl.string(u.t["aJg+oa"]),
            }),
          }),
          S = g
            ? (0, o.jsx)(i.ZP, {
                ...p,
                mode: i.ZP.Modes.CREATE,
                layout: E,
                onBillingAddressChange: function (e, t) {
                  m(e), x(t);
                },
                error: null,
              })
            : null;
        return (0, o.jsxs)(l.ModalRoot, {
          className: h.modal,
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
              className: h.body,
              children: [N, S],
            }),
            (0, o.jsxs)(l.ModalFooter, {
              children: [
                (0, o.jsx)(l.Button, {
                  type: "submit",
                  color: l.Button.Colors.GREEN,
                  disabled: g && !b,
                  onClick: v,
                  submitting: C,
                  autoFocus: !0,
                  children: u.intl.string(u.t.uqZjLi),
                }),
                (0, o.jsx)(l.Text, {
                  color: "text-danger",
                  className: h.error,
                  variant: "text-sm/semibold",
                  children: _,
                }),
              ],
            }),
          ],
        });
      }
    },
    620389: function (e, t, n) {
      e.exports = {
        modal: "modal_c1e5f4",
        body: "body_c1e5f4",
        error: "error_c1e5f4",
      };
    },
  },
]);
//# sourceMappingURL=ce14a559d0902e0a3b20.js.map
