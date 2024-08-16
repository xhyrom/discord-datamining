"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95480"],
  {
    275869: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return d;
          },
        });
      var s = t(735250);
      t(470079);
      var i = t(481060),
        a = t(923298),
        r = t(63063),
        u = t(981631),
        l = t(689938);
      function d(e) {
        let { listing: n, transitionState: t, onClose: d, ...o } = e;
        return (0, s.jsx)(a.Z, {
          sku_id: n.id,
          sku_name: n.name,
          guild_id: n.guild_id,
          header: l.Z.Messages.GUILD_SHOP_REPORT_MODAL_HEADER.format({
            listingName: n.name,
          }),
          transitionState: t,
          onClose: d,
          ...o,
          children: (0, s.jsx)(i.Text, {
            variant: "text-md/normal",
            children: l.Z.Messages.GUILD_SHOP_REPORT_MODAL_BODY.format({
              listingName: n.name,
              monetizationTermsUrl: r.Z.getArticleURL(u.BhN.CREATOR_TERMS),
              communityGuidelinesUrl: u.EYA.GUIDELINES,
            }),
          }),
        });
      }
    },
    923298: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return _;
        },
      });
      var s = t(735250);
      t(470079);
      var i = t(399606),
        a = t(481060),
        r = t(668781),
        u = t(594174),
        l = t(626135),
        d = t(981631),
        o = t(689938);
      function _(e) {
        let {
            header: n,
            children: t,
            sku_id: _,
            sku_name: R,
            guild_id: c,
            cancelLabel: m,
            confirmLabel: E,
            transitionState: O,
            onClose: T,
            ...f
          } = e,
          M = (0, i.e7)([u.default], () => u.default.getCurrentUser());
        return (0, s.jsx)(a.ConfirmModal, {
          header: null != n ? n : o.Z.Messages.REPORT,
          cancelText: null != m ? m : o.Z.Messages.CANCEL,
          confirmText: null != E ? E : o.Z.Messages.REPORT,
          onConfirm: () => {
            l.default.track(d.rMx.TNS_SKU_REPORT_SUBMITTED, {
              sku_id: _,
              guild_id: c,
              user_id: null == M ? void 0 : M.id,
            }),
              r.Z.show({
                title: o.Z.Messages.SKU_REPORT_CONFIRMATION_HEADER,
                body: o.Z.Messages.SKU_REPORT_CONFIRMATION_BODY.format({
                  skuName: R,
                }),
              });
          },
          transitionState: O,
          onClose: T,
          ...f,
          children: t,
        });
      }
    },
  },
]);
//# sourceMappingURL=ff163941c66959ca798d.js.map
