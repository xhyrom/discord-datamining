"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["79149"],
  {
    688796(t, n, A) {
      A.d(n, { G: () => d, default: () => u });
      var e = A(627968);
      A(64700);
      var i = A(192308),
        l = A(87719),
        r = A(81456),
        s = A(831318),
        a = A(788868),
        o = A(339984),
        c = A(985018);
      function d(t) {
        let { uploadType: n } = t;
        return (
          (0, i.openModalLazy)(async () => {
            let { default: t } = await Promise.resolve().then(
              A.bind(A, 688796),
            );
            return (A) =>
              (0, e.jsx)(t, {
                uploadType: n,
                onSecondaryClick: i.closeAllModals,
                ...A,
              });
          }),
          !0
        );
      }
      function u(t) {
        let { uploadType: n, onClose: A, onSecondaryClick: i, ...d } = t,
          u = n === o.HL.AVATAR || n === o.HL.BANNER,
          L = (0, r.A)(
            n === o.HL.AVATAR
              ? a.e.ANIMATED_AVATAR_MODAL_UPSELL
              : a.e.ANIMATED_BANNER_MODAL_UPSELL,
          );
        return u
          ? (0, e.jsx)(s.A, {
              title:
                n === o.HL.AVATAR
                  ? c.intl.string(c.t.X7tO60)
                  : c.intl.string(c.t.zXPa2C),
              subtitle:
                n === o.HL.AVATAR
                  ? c.intl.string(c.t.ifCRdB)
                  : c.intl.string(c.t.yQAnf4),
              graphic: L,
              onSecondaryClick: () => {
                i?.(), (0, l.x)(A);
              },
              secondaryCTA: c.intl.string(c.t.PcTCB7),
              onClose: A,
              ...d,
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=79149.f608018aad89f9f1.js.map
