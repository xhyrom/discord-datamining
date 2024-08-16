"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["97516"],
  {
    358927: function (e, r, n) {
      n.r(r);
      var t = n(735250);
      n(470079);
      var s = n(481060),
        a = n(63063),
        o = n(937615),
        c = n(981631),
        C = n(689938);
      r.default = (e) => {
        let { modalProps: r, onConfirm: n, onCancel: i, newInvoice: _ } = e,
          l = {
            newCurrencyAndPrice: (0, o.T4)(_.total, _.currency),
            helpCenterLink: a.Z.getArticleURL(c.BhN.LOCALIZED_PRICING),
          };
        return (0, t.jsx)(s.ConfirmModal, {
          header: C.Z.Messages.BILLING_CONFIRM_PRICE_CHANGE_TITLE,
          confirmText: C.Z.Messages.YES_TEXT,
          cancelText: C.Z.Messages.NO_TEXT,
          onConfirm: n,
          onCancel: i,
          confirmButtonColor: s.Button.Colors.BRAND,
          ...r,
          children: (0, t.jsx)(s.Text, {
            variant: "text-md/normal",
            children:
              C.Z.Messages.LOCALIZED_PRICING_ON_CHANGE_PAYMENT_METHOD.format(l),
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=d9e1c9afc526fae02108.js.map
