"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95480"],
  {
    275869: function (t, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return o;
          },
        });
      var e = i(200651);
      i(192379);
      var r = i(481060),
        l = i(923298),
        a = i(63063),
        u = i(981631),
        d = i(388032);
      function o(t) {
        let { listing: n, transitionState: i, onClose: o, ...s } = t;
        return (0, e.jsx)(l.Z, {
          sku_id: n.id,
          sku_name: n.name,
          guild_id: n.guild_id,
          header: d.intl.format(d.t.avKMZm, { listingName: n.name }),
          transitionState: i,
          onClose: o,
          ...s,
          children: (0, e.jsx)(r.Text, {
            variant: "text-md/normal",
            children: d.intl.format(d.t.jkvpmp, {
              listingName: n.name,
              monetizationTermsUrl: a.Z.getArticleURL(u.BhN.CREATOR_TERMS),
              communityGuidelinesUrl: u.EYA.GUIDELINES,
            }),
          }),
        });
      }
    },
    923298: function (t, n, i) {
      i.d(n, {
        Z: function () {
          return m;
        },
      });
      var e = i(200651);
      i(192379);
      var r = i(399606),
        l = i(481060),
        a = i(668781),
        u = i(594174),
        d = i(626135),
        o = i(981631),
        s = i(388032);
      function m(t) {
        let {
            header: n,
            children: i,
            sku_id: m,
            sku_name: c,
            guild_id: f,
            cancelLabel: _,
            confirmLabel: h,
            transitionState: g,
            onClose: k,
            ...T
          } = t,
          p = (0, r.e7)([u.default], () => u.default.getCurrentUser());
        return (0, e.jsx)(l.ConfirmModal, {
          header: null != n ? n : s.intl.string(s.t["+78Pfn"]),
          cancelText: null != _ ? _ : s.intl.string(s.t["ETE/oK"]),
          confirmText: null != h ? h : s.intl.string(s.t["+78Pfn"]),
          onConfirm: () => {
            d.default.track(o.rMx.TNS_SKU_REPORT_SUBMITTED, {
              sku_id: m,
              guild_id: f,
              user_id: null == p ? void 0 : p.id,
            }),
              a.Z.show({
                title: s.intl.string(s.t.sUvCKS),
                body: s.intl.format(s.t["7KJnk5"], { skuName: c }),
              });
          },
          transitionState: g,
          onClose: k,
          ...T,
          children: i,
        });
      }
    },
  },
]);
//# sourceMappingURL=ecb018b7a0dc8948d777.js.map
