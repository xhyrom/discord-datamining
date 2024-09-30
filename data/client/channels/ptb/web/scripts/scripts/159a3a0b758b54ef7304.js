"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43360"],
  {
    73415: function (E, _, L) {
      L.r(_),
        L.d(_, {
          default: function () {
            return t;
          },
        });
      var s = L(735250);
      L(470079);
      var e = L(979554),
        A = L(98278),
        O = L(790527),
        P = L(474936),
        R = L(689938),
        a = L(116909);
      function t(E) {
        let {
          collectableType: _,
          onClose: L,
          analyticsSource: t,
          analyticsLocation: I,
          onSecondaryClick: n,
          ...M
        } = E;
        return _ === e.Z.AVATAR_DECORATION || _ === e.Z.PROFILE_EFFECT
          ? (0, s.jsx)(O.Z, {
              artURL: a.default,
              type: P.cd.CUSTOM_PROFILE_UPSELL,
              title:
                _ === e.Z.AVATAR_DECORATION
                  ? R.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_AVATAR_DECO_MODAL_UPSELL_TITLE
                  : R.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_EFFECT_MODAL_UPSELL_TITLE,
              body:
                _ === e.Z.AVATAR_DECORATION
                  ? R.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_AVATAR_DECO_MODAL_UPSELL_DESCRIPTION
                  : R.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_EFFECT_MODAL_UPSELL_DESCRIPTION,
              glowUp:
                _ === e.Z.AVATAR_DECORATION
                  ? R.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_AVATAR_DECO_MODAL_UPSELL_DESCRIPTION
                  : R.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_EFFECT_MODAL_UPSELL_DESCRIPTION,
              onSecondaryClick: () => {
                n(), (0, A.$)(L);
              },
              secondaryCTA: R.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
              onClose: L,
              enableArtBoxShadow: !1,
              analyticsSource: t,
              analyticsLocation: I,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              ...M,
            })
          : null;
      }
    },
    116909: function (E, _, L) {
      L.r(_);
      _.default =
        "https://cdn.discordapp.com/assets/content/f8c0f5280ed8ba15300306929fd73c16d50fe7495590192f78643beb3230992b.png";
    },
  },
]);
//# sourceMappingURL=159a3a0b758b54ef7304.js.map
