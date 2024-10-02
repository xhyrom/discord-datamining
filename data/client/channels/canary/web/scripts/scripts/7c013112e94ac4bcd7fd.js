"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69052"],
  {
    184250: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return d;
          },
        });
      var t = n(735250);
      n(470079);
      var a = n(98278),
        _ = n(790527),
        c = n(474936),
        o = n(689938),
        E = n(116909);
      function d(e) {
        let { onClose: s, analyticsSource: n, analyticsLocation: d, ...P } = e;
        return (0, t.jsx)(_.Z, {
          artURL: E.Z,
          type: c.cd.APP_ICON_UPSELL,
          title: o.Z.Messages.PREMIUM_UPSEL_FEATURE_IN_APP_ICONS_TITLE,
          body: o.Z.Messages.PREMIUM_UPSELL_FEATURE_IN_APP_ICONS_DESCRIPTION,
          glowUp: o.Z.Messages.PREMIUM_UPSELL_FEATURE_IN_APP_ICONS_DESCRIPTION,
          onSecondaryClick: () => {
            (0, a.$)(s);
          },
          secondaryCTA: o.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
          analyticsSource: n,
          analyticsLocation: d,
          onClose: s,
          enableArtBoxShadow: !1,
          hideBackButton: !0,
          showEnhancedUpsell: !0,
          ...P,
        });
      }
    },
    116909: function (e, s) {
      s.Z =
        "https://cdn.discordapp.com/assets/content/f8c0f5280ed8ba15300306929fd73c16d50fe7495590192f78643beb3230992b.png";
    },
  },
]);
//# sourceMappingURL=7c013112e94ac4bcd7fd.js.map
