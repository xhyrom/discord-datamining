"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68192"],
  {
    677531: function (E) {
      E.exports = "/assets/44f3c655557fa8453183.png";
    },
    742234: function (E, s, e) {
      e.r(s),
        e.d(s, {
          default: function () {
            return c;
          },
        });
      var a = e(735250);
      e(470079);
      var n = e(98278),
        t = e(790527),
        _ = e(474936),
        o = e(689938);
      function c(E) {
        let { onClose: s, analyticsSource: c, analyticsLocation: L, ...T } = E;
        return (0, a.jsx)(t.Z, {
          artURL: e(677531),
          type: _.cd.CLIENT_THEMES_UPSELL,
          title: o.Z.Messages.PREMIUM_UPSELL_FEATURE_CLIENT_THEMES_TITLE,
          body: o.Z.Messages.PREMIUM_UPSELL_FEATURE_CLIENT_THEMES_DESCRIPTION,
          glowUp: o.Z.Messages.PREMIUM_UPSELL_FEATURE_CLIENT_THEMES_DESCRIPTION,
          onSecondaryClick: () => {
            (0, n.$)(s);
          },
          secondaryCTA: o.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
          analyticsSource: c,
          analyticsLocation: L,
          onClose: s,
          enableArtBoxShadow: !1,
          hideBackButton: !0,
          showEnhancedUpsell: !0,
          ...T,
        });
      }
    },
  },
]);
//# sourceMappingURL=8fb9ab4781cfd0aaaca5.js.map
