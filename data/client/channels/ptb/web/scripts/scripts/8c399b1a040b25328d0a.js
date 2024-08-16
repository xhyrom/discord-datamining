"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69052"],
  {
    76096: function (s) {
      s.exports = "/assets/b3b5ac6e6839d1af6245.png";
    },
    184250: function (s, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return E;
          },
        });
      var _ = a(735250);
      a(470079);
      var n = a(98278),
        t = a(790527),
        o = a(474936),
        c = a(689938);
      function E(s) {
        let { onClose: e, analyticsSource: E, analyticsLocation: P, ...r } = s;
        return (0, _.jsx)(t.Z, {
          artURL: a(76096),
          type: o.cd.APP_ICONS_UPSELL,
          title: c.Z.Messages.PREMIUM_UPSEL_FEATURE_IN_APP_ICONS_TITLE,
          body: c.Z.Messages.PREMIUM_UPSELL_FEATURE_IN_APP_ICONS_DESCRIPTION,
          glowUp: c.Z.Messages.PREMIUM_UPSELL_FEATURE_IN_APP_ICONS_DESCRIPTION,
          onSecondaryClick: () => {
            (0, n.$)(e);
          },
          secondaryCTA: c.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
          analyticsSource: E,
          analyticsLocation: P,
          onClose: e,
          enableArtBoxShadow: !1,
          hideBackButton: !0,
          showEnhancedUpsell: !0,
          ...r,
        });
      }
    },
  },
]);
//# sourceMappingURL=8c399b1a040b25328d0a.js.map
