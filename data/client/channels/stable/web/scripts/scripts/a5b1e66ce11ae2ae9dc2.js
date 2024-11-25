"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69473"],
  {
    436022: function (t, n, r) {
      r.r(n),
        r.d(n, {
          default: function () {
            return d;
          },
        }),
        r(47120);
      var i = r(200651),
        l = r(192379),
        e = r(481060),
        s = r(355467),
        o = r(362786),
        a = r(388032),
        u = r(932522);
      let c = {
        [o.HZ.GIFTING_REFUND]: () => a.intl.string(a.t.o9vzKy),
        [o.HZ.BUYERS_REMORSE]: () => a.intl.string(a.t["OaU+ER"]),
        [o.HZ.WRONG_PURCHASE]: () => a.intl.string(a.t.eAeOKC),
        [o.HZ.FORGOT_TO_CANCEL]: () => a.intl.string(a.t.IoDJdX),
        [o.HZ.SERVER_BOOSTING_COOLDOWN]: () => a.intl.string(a.t.MGTxUl),
        [o.HZ.USER_CONFUSION]: () => a.intl.string(a.t.PY5tHx),
        [o.HZ.WANT_TO_SWITCH_TIERS]: () => a.intl.string(a.t["o+aUCg"]),
        [o.HZ.DONT_NEED]: () => a.intl.string(a.t["R++9BA"]),
        [o.HZ.OTHER]: () => a.intl.string(a.t["sVo/9/"]),
      };
      function d(t) {
        let n,
          { payment: r, reportProblemUrl: d, onClose: p, ...g } = t,
          [m, E] = l.useState(null),
          [h, x] = l.useState(!1),
          [S, O] = l.useState(null);
        n = h
          ? (0, i.jsx)(e.Spinner, {})
          : null != S
            ? (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(e.Text, {
                    variant: "text-md/normal",
                    className: u.refundErrorTitle,
                    children: a.intl.format(a.t["1LaEh4"], { error: S }),
                  }),
                  (0, i.jsx)(e.Text, {
                    className: u.refundErrorSupport,
                    variant: "text-sm/normal",
                    children: a.intl.format(a.t.cugISU, { supportUrl: d }),
                  }),
                ],
              })
            : (0, i.jsxs)("div", {
                className: u.body,
                children: [
                  (0, i.jsx)(e.SingleSelect, {
                    options: Object.entries(c)
                      .sort((t, n) => {
                        let [r] = t,
                          [i] = n;
                        return Number(r) === o.HZ.OTHER
                          ? 1
                          : Number(i) === o.HZ.OTHER
                            ? -1
                            : 0;
                      })
                      .map((t) => {
                        let [n, r] = t;
                        return { value: parseInt(n), label: r() };
                      }),
                    onChange: (t) => E(t),
                    value: m,
                    placeholder: a.intl.string(a.t["SQsI/P"]),
                  }),
                  (0, i.jsxs)(e.Text, {
                    className: u.notice,
                    variant: "text-sm/normal",
                    children: [
                      a.intl.string(a.t.hZ2ql5),
                      " ",
                      r.isPremiumSubscription ||
                      r.isPremiumGuildSubscription ||
                      r.isPremiumGift
                        ? a.intl.string(a.t.IOkTho)
                        : null,
                    ],
                  }),
                ],
              });
        let R = null == m || h || null != S;
        return (0, i.jsxs)(e.ModalRoot, {
          ...g,
          children: [
            (0, i.jsx)(e.ModalHeader, {
              separator: !1,
              children: (0, i.jsx)(e.Heading, {
                variant: "heading-lg/semibold",
                children:
                  null != S
                    ? a.intl.string(a.t["UleS9/"])
                    : a.intl.string(a.t.RK9GKC),
              }),
            }),
            (0, i.jsx)(e.ModalContent, { children: n }),
            (0, i.jsxs)(e.ModalFooter, {
              children: [
                (0, i.jsx)(e.Button, {
                  type: "submit",
                  color: e.Button.Colors.RED,
                  onClick: async () => {
                    if (!R && null != m) {
                      x(!0), O(null);
                      try {
                        await (0, s.Os)(r.id, m), p();
                      } catch (t) {
                        O(t.body.message);
                      } finally {
                        x(!1);
                      }
                    }
                  },
                  disabled: R,
                  autoFocus: !0,
                  children: a.intl.string(a.t.geKm7u),
                }),
                (0, i.jsx)(e.Button, {
                  type: "button",
                  look: e.Button.Looks.LINK,
                  color: e.Button.Colors.PRIMARY,
                  onClick: () => {
                    p();
                  },
                  children: a.intl.string(a.t.oEAioK),
                }),
              ],
            }),
          ],
        });
      }
    },
    932522: function (t, n, r) {
      t.exports = {
        notice: "notice_b8c1a5",
        body: "body_b8c1a5",
        refundErrorTitle: "refundErrorTitle_b8c1a5",
        refundErrorSupport: "refundErrorSupport_b8c1a5",
      };
    },
  },
]);
//# sourceMappingURL=a5b1e66ce11ae2ae9dc2.js.map
