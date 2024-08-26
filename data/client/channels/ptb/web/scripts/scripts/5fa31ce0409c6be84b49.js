"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34906"],
  {
    483569: function (_) {
      _.exports = "/assets/c04d891bf4f62238f7f4.png";
    },
    639565: function (_, L, s) {
      s.r(L),
        s.d(L, {
          default: function () {
            return A;
          },
        });
      var e = s(735250);
      s(470079);
      var t = s(703656),
        c = s(626135),
        n = s(790527),
        o = s(474936),
        a = s(981631),
        E = s(689938),
        O = s(483569);
      function A(_) {
        let { onClose: L, source: s, ...A } = _;
        return (0, e.jsx)(n.Z, {
          artURL: O,
          type: o.cd.FOR_LATER_MODAL_UPSELL,
          title: E.Z.Messages.FOR_LATER_UPSELL_MODAL_TITLE,
          body: E.Z.Messages.FOR_LATER_UPSELL_MODAL_BODY,
          glowUp: E.Z.Messages.FOR_LATER_UPSELL_MODAL_BODY,
          secondaryCTA: E.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
          onSecondaryClick: function () {
            c.default.track(a.rMx.PREMIUM_PROMOTION_OPENED, {
              location_section: a.jXE.PREMIUM_FOR_LATER_UPSELL_MODAL,
              location_object: a.qAy.NAVIGATION_LINK,
            }),
              L(),
              (0, t.uL)(a.Z5c.APPLICATION_STORE);
          },
          showEnhancedUpsell: !0,
          analyticsSource: s,
          analyticsLocation: {
            section: a.jXE.PREMIUM_FOR_LATER_UPSELL_MODAL,
            object: a.qAy.BUTTON_CTA,
          },
          onClose: L,
          ...A,
        });
      }
    },
  },
]);
//# sourceMappingURL=5fa31ce0409c6be84b49.js.map
