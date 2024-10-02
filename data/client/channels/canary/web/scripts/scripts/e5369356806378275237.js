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
      var e = L(735250);
      L(470079);
      var s = L(979554),
        A = L(98278),
        a = L(790527),
        O = L(474936),
        R = L(689938),
        n = L(227782),
        c = L(358044);
      function t(E) {
        let {
          collectableType: _,
          onClose: L,
          analyticsSource: t,
          analyticsLocation: P,
          onSecondaryClick: I,
          ...M
        } = E;
        return _ === s.Z.AVATAR_DECORATION || _ === s.Z.PROFILE_EFFECT
          ? (0, e.jsx)(a.Z, {
              artURL: _ === s.Z.AVATAR_DECORATION ? n.Z : c.Z,
              type: O.cd.CUSTOM_PROFILE_UPSELL,
              title:
                _ === s.Z.AVATAR_DECORATION
                  ? R.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_AVATAR_DECO_MODAL_UPSELL_TITLE
                  : R.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_EFFECT_MODAL_UPSELL_TITLE,
              body:
                _ === s.Z.AVATAR_DECORATION
                  ? R.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_AVATAR_DECO_MODAL_UPSELL_DESCRIPTION
                  : R.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_EFFECT_MODAL_UPSELL_DESCRIPTION,
              glowUp:
                _ === s.Z.AVATAR_DECORATION
                  ? R.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_AVATAR_DECO_MODAL_UPSELL_DESCRIPTION
                  : R.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_EFFECT_MODAL_UPSELL_DESCRIPTION,
              onSecondaryClick: () => {
                I(), (0, A.$)(L);
              },
              secondaryCTA: R.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
              onClose: L,
              enableArtBoxShadow: !1,
              analyticsSource: t,
              analyticsLocation: P,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              ...M,
            })
          : null;
      }
    },
    227782: function (E, _) {
      _.Z =
        "https://cdn.discordapp.com/assets/content/a847941c36ec79eddc59fe064410b02fff6b9403064553d6f8e33f7d55af148a.png";
    },
    358044: function (E, _) {
      _.Z =
        "https://cdn.discordapp.com/assets/content/ae3fcffd1fe6bb22f0662241f1390659ec60a8f01eebf35d56509709f967445f.png";
    },
  },
]);
//# sourceMappingURL=e5369356806378275237.js.map
