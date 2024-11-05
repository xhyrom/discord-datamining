"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["97516"],
  {
    358927: function (t, n, r) {
      r.r(n);
      var e = r(200651);
      r(192379);
      var i = r(481060),
        o = r(63063),
        c = r(937615),
        l = r(981631),
        a = r(388032);
      n.default = (t) => {
        let { modalProps: n, onConfirm: r, onCancel: s, newInvoice: d } = t,
          u = {
            newCurrencyAndPrice: (0, c.T4)(d.total, d.currency),
            helpCenterLink: o.Z.getArticleURL(l.BhN.LOCALIZED_PRICING),
          };
        return (0, e.jsx)(i.ConfirmModal, {
          header: a.intl.string(a.t.eZFTbm),
          confirmText: a.intl.string(a.t.p89ACg),
          cancelText: a.intl.string(a.t.gm1Ven),
          onConfirm: r,
          onCancel: s,
          confirmButtonColor: i.Button.Colors.BRAND,
          ...n,
          children: (0, e.jsx)(i.Text, {
            variant: "text-md/normal",
            children: a.intl.format(a.t.oZBduL, u),
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=1586369490c2498ed36a.js.map
