"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69473"],
  {
    436022: function (e, s, _) {
      _.r(s),
        _.d(s, {
          default: function () {
            return o;
          },
        }),
        _(47120);
      var r = _(735250),
        E = _(470079),
        t = _(481060),
        R = _(355467),
        N = _(362786),
        a = _(689938),
        n = _(380481);
      let l = {
        [N.HZ.GIFTING_REFUND]: () =>
          a.Z.Messages.BILLING_REFUND_USER_REASON_GIFTING_REFUND,
        [N.HZ.BUYERS_REMORSE]: () =>
          a.Z.Messages.BILLING_REFUND_USER_REASON_BUYERS_REMORSE,
        [N.HZ.WRONG_PURCHASE]: () =>
          a.Z.Messages.BILLING_REFUND_USER_REASON_WRONG_PURCHASE,
        [N.HZ.FORGOT_TO_CANCEL]: () =>
          a.Z.Messages.BILLING_REFUND_USER_REASON_FORGOT_TO_CANCEL,
        [N.HZ.SERVER_BOOSTING_COOLDOWN]: () =>
          a.Z.Messages.BILLING_REFUND_USER_REASON_SERVER_BOOSTING_COOLDOWN,
        [N.HZ.USER_CONFUSION]: () =>
          a.Z.Messages.BILLING_REFUND_USER_REASON_USER_CONFUSION,
        [N.HZ.WANT_TO_SWITCH_TIERS]: () =>
          a.Z.Messages.BILLING_REFUND_USER_REASON_WANT_TO_SWITCH_TIERS,
        [N.HZ.DONT_NEED]: () =>
          a.Z.Messages.BILLING_REFUND_USER_REASON_DONT_NEED,
        [N.HZ.OTHER]: () => a.Z.Messages.BILLING_REFUND_USER_REASON_OTHER,
      };
      function o(e) {
        let s,
          { payment: _, reportProblemUrl: o, onClose: i, ...O } = e,
          [u, I] = E.useState(null),
          [S, c] = E.useState(!1),
          [d, L] = E.useState(null);
        s = S
          ? (0, r.jsx)(t.Spinner, {})
          : null != d
            ? (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)(t.Text, {
                    variant: "text-md/normal",
                    className: n.refundErrorTitle,
                    children: a.Z.Messages.BILLING_REFUND_ERROR.format({
                      error: d,
                    }),
                  }),
                  (0, r.jsx)(t.Text, {
                    className: n.refundErrorSupport,
                    variant: "text-sm/normal",
                    children:
                      a.Z.Messages.BILLING_REFUND_ERROR_CONTACT_SUPPORT.format({
                        supportUrl: o,
                      }),
                  }),
                ],
              })
            : (0, r.jsxs)("div", {
                className: n.body,
                children: [
                  (0, r.jsx)(t.SingleSelect, {
                    options: Object.entries(l)
                      .sort((e, s) => {
                        let [_] = e,
                          [r] = s;
                        return Number(_) === N.HZ.OTHER
                          ? 1
                          : Number(r) === N.HZ.OTHER
                            ? -1
                            : 0;
                      })
                      .map((e) => {
                        let [s, _] = e;
                        return { value: parseInt(s), label: _() };
                      }),
                    onChange: (e) => I(e),
                    value: u,
                    placeholder: a.Z.Messages.BILLING_REFUND_SELECT_REASON,
                  }),
                  (0, r.jsxs)(t.Text, {
                    className: n.notice,
                    variant: "text-sm/normal",
                    children: [
                      a.Z.Messages.BILLING_REFUND_REVOCATION_NOTICE,
                      " ",
                      _.isPremiumSubscription ||
                      _.isPremiumGuildSubscription ||
                      _.isPremiumGift
                        ? a.Z.Messages.BILLING_REFUND_ONE_TIME_REFUND_NOTICE
                        : null,
                    ],
                  }),
                ],
              });
        let U = null == u || S || null != d;
        return (0, r.jsxs)(t.ModalRoot, {
          ...O,
          children: [
            (0, r.jsx)(t.ModalHeader, {
              separator: !1,
              children: (0, r.jsx)(t.Heading, {
                variant: "heading-lg/semibold",
                children:
                  null != d
                    ? a.Z.Messages.BILLING_REFUND_MODAL_HEADER_ERROR
                    : a.Z.Messages.BILLING_REFUND_MODAL_HEADER,
              }),
            }),
            (0, r.jsx)(t.ModalContent, { children: s }),
            (0, r.jsxs)(t.ModalFooter, {
              children: [
                (0, r.jsx)(t.Button, {
                  type: "submit",
                  color: t.Button.Colors.RED,
                  onClick: async () => {
                    if (!U && null != u) {
                      c(!0), L(null);
                      try {
                        await (0, R.Os)(_.id, u), i();
                      } catch (e) {
                        L(e.body.message);
                      } finally {
                        c(!1);
                      }
                    }
                  },
                  disabled: U,
                  autoFocus: !0,
                  children: a.Z.Messages.SUBMIT,
                }),
                (0, r.jsx)(t.Button, {
                  type: "button",
                  look: t.Button.Looks.LINK,
                  color: t.Button.Colors.PRIMARY,
                  onClick: () => {
                    i();
                  },
                  children: a.Z.Messages.NEVERMIND,
                }),
              ],
            }),
          ],
        });
      }
    },
    380481: function (e, s, _) {
      e.exports = {
        notice: "notice_b8c1a5",
        body: "body_b8c1a5",
        refundErrorTitle: "refundErrorTitle_b8c1a5",
        refundErrorSupport: "refundErrorSupport_b8c1a5",
      };
    },
  },
]);
//# sourceMappingURL=fe4c6437c30d4b8ee2dc.js.map
