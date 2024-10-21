"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43360"],
  {
    792254: function (c, e, a) {
      a.d(e, {
        Z: function () {
          return M;
        },
      });
      var n = a(442837),
        d = a(410030),
        t = a(607070),
        s = a(474936),
        A = a(231338),
        f = a(955092),
        o = a(250225),
        _ = a(778441),
        E = a(238988),
        L = a(298233),
        p = a(304354),
        b = a(265704),
        R = a(85010),
        O = a(954620),
        i = a(28747),
        r = a(962658),
        Z = a(29971),
        D = a(730837),
        P = a(95897),
        T = a(171362),
        u = a(945720);
      function M(c) {
        let e = (0, n.e7)([t.Z], () => t.Z.useReducedMotion),
          a = (0, d.ZP)();
        return e
          ? (function (c, e) {
              switch (c) {
                case s.cd.ANIMATED_AVATAR_MODAL_UPSELL:
                  return e === A.BR.DARK ? O.Z : D.Z;
                case s.cd.ANIMATED_BANNER_MODAL_UPSELL:
                  return e === A.BR.DARK ? i.Z : P.Z;
                case s.cd.PROFILE_EFFECT_MODAL_UPSELL:
                  return e === A.BR.DARK ? Z.Z : u.Z;
                case s.cd.AVATAR_DECORATION_MODAL_UPSELL:
                  return e === A.BR.DARK ? r.Z : T.Z;
              }
            })(c, a)
          : (function (c, e) {
              switch (c) {
                case s.cd.ANIMATED_AVATAR_MODAL_UPSELL:
                  return e === A.BR.DARK ? f.Z : L.Z;
                case s.cd.ANIMATED_BANNER_MODAL_UPSELL:
                  return e === A.BR.DARK ? o.Z : p.Z;
                case s.cd.PROFILE_EFFECT_MODAL_UPSELL:
                  return e === A.BR.DARK ? E.Z : R.Z;
                case s.cd.AVATAR_DECORATION_MODAL_UPSELL:
                  return e === A.BR.DARK ? _.Z : b.Z;
              }
            })(c, a);
      }
    },
    73415: function (c, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return _;
          },
        });
      var n = a(200651);
      a(192379);
      var d = a(979554),
        t = a(98278),
        s = a(792254),
        A = a(790527),
        f = a(474936),
        o = a(689938);
      function _(c) {
        let {
            collectableType: e,
            onClose: a,
            analyticsSource: _,
            analyticsLocation: E,
            onSecondaryClick: L,
            ...p
          } = c,
          b = e === d.Z.AVATAR_DECORATION || e === d.Z.PROFILE_EFFECT,
          R = (0, s.Z)(
            e === d.Z.AVATAR_DECORATION
              ? f.cd.AVATAR_DECORATION_MODAL_UPSELL
              : f.cd.PROFILE_EFFECT_MODAL_UPSELL,
          );
        return b
          ? (0, n.jsx)(A.Z, {
              artURL: R,
              type:
                e === d.Z.AVATAR_DECORATION
                  ? f.cd.AVATAR_DECORATION_MODAL_UPSELL
                  : f.cd.PROFILE_EFFECT_MODAL_UPSELL,
              title:
                e === d.Z.AVATAR_DECORATION
                  ? o.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_AVATAR_DECO_MODAL_UPSELL_TITLE
                  : o.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_EFFECT_MODAL_UPSELL_TITLE,
              body:
                e === d.Z.AVATAR_DECORATION
                  ? o.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_AVATAR_DECO_MODAL_UPSELL_DESCRIPTION
                  : o.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_EFFECT_MODAL_UPSELL_DESCRIPTION,
              glowUp:
                e === d.Z.AVATAR_DECORATION
                  ? o.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_AVATAR_DECO_MODAL_UPSELL_DESCRIPTION
                  : o.Z.Messages
                      .PREMIUM_UPSELL_PROFILE_EFFECT_MODAL_UPSELL_DESCRIPTION,
              onSecondaryClick: () => {
                L(), (0, t.$)(a);
              },
              secondaryCTA: o.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
              onClose: a,
              enableArtBoxShadow: !1,
              analyticsSource: _,
              analyticsLocation: E,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              ...p,
            })
          : null;
      }
    },
    955092: function (c, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/5b4dc771eb1d2e239bcba774f3589b977845bf70d179315dc2f9a531b253c6d8.png";
    },
    250225: function (c, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/577d28b05d22c43a8b3dfe5ebfc6fa278c58f03907e888db884c331d13c3ad23.png";
    },
    778441: function (c, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/7fa341ec7211b62a71a0bd433d2bafe570ada865b0fd72d695b90de4a581022a.png";
    },
    238988: function (c, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/f3e3de08090be16d5041988655da92f175ba9967e7854f170caa18550159ae10.png";
    },
    298233: function (c, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/f56fdb607f14f6ebe5a37eac65f5b8c975ea446224c06dd8aef4dd0187c81874.png";
    },
    304354: function (c, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/d1dcb0c115a836edc8cbf021a15888bdf416fd352187518f227b8e905a20227f.png";
    },
    265704: function (c, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/b344b1fe2b3d2cc66466f09c46b4e2dcce56a16f1ff047aed69155fa4cff39a8.png";
    },
    85010: function (c, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/f3e3de08090be16d5041988655da92f175ba9967e7854f170caa18550159ae10.png";
    },
    954620: function (c, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/87534097f7ff0b0a3c6164bbcaad8968b2e7f8dbbdc59776c782cf14dba4c53c.png";
    },
    28747: function (c, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/5e27b7f8865a87dd6eec34188b96bb51924a55252b16f9ebfb8aa72973304bbd.png";
    },
    962658: function (c, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/15940a9acc0fab74b37e730350d6cef34289948e14b6d73e90432c19b4a51beb.png";
    },
    29971: function (c, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/6c6eeb5576f47ad8c19a40e67a6404ffaae3b939f07183afc984d669f17137de.png";
    },
    730837: function (c, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/fab9a25304af3a77b100b6beabd1d46013120289193faa37e9fa82977f133322.png";
    },
    95897: function (c, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/ef7a0b437305ab3a5ccda00a5ecd4eddd69544a90eac121e5c984ca63dd93b9e.png";
    },
    171362: function (c, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/71744284320fdf451ac09af729ea60d3fde7ef492f7c7e8c5657387c20c2b9c6.png";
    },
    945720: function (c, e) {
      e.Z =
        "https://cdn.discordapp.com/assets/content/6c6eeb5576f47ad8c19a40e67a6404ffaae3b939f07183afc984d669f17137de.png";
    },
  },
]);
//# sourceMappingURL=8c0b51018b3fd87c2234.js.map
