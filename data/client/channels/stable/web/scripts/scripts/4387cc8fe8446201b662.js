"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["43360"],
  {
    792254: function (c, t, n) {
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var d = n(442837),
        a = n(410030),
        e = n(607070),
        s = n(474936),
        f = n(231338),
        o = n(955092),
        A = n(250225),
        p = n(778441),
        b = n(238988),
        i = n(298233),
        r = n(304354),
        u = n(265704),
        R = n(85010),
        Z = n(954620),
        _ = n(28747),
        E = n(962658),
        L = n(29971),
        O = n(730837),
        D = n(95897),
        T = n(171362),
        h = n(945720);
      function g(c) {
        let t = (0, d.e7)([e.Z], () => e.Z.useReducedMotion),
          n = (0, a.ZP)();
        return t
          ? (function (c, t) {
              switch (c) {
                case s.cd.ANIMATED_AVATAR_MODAL_UPSELL:
                  return t === f.BR.DARK ? Z.Z : O.Z;
                case s.cd.ANIMATED_BANNER_MODAL_UPSELL:
                  return t === f.BR.DARK ? _.Z : D.Z;
                case s.cd.PROFILE_EFFECT_MODAL_UPSELL:
                  return t === f.BR.DARK ? L.Z : h.Z;
                case s.cd.AVATAR_DECORATION_MODAL_UPSELL:
                  return t === f.BR.DARK ? E.Z : T.Z;
              }
            })(c, n)
          : (function (c, t) {
              switch (c) {
                case s.cd.ANIMATED_AVATAR_MODAL_UPSELL:
                  return t === f.BR.DARK ? o.Z : i.Z;
                case s.cd.ANIMATED_BANNER_MODAL_UPSELL:
                  return t === f.BR.DARK ? A.Z : r.Z;
                case s.cd.PROFILE_EFFECT_MODAL_UPSELL:
                  return t === f.BR.DARK ? b.Z : R.Z;
                case s.cd.AVATAR_DECORATION_MODAL_UPSELL:
                  return t === f.BR.DARK ? p.Z : u.Z;
              }
            })(c, n);
      }
    },
    73415: function (c, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var d = n(200651);
      n(192379);
      var a = n(979554),
        e = n(98278),
        s = n(792254),
        f = n(790527),
        o = n(474936),
        A = n(388032);
      function p(c) {
        let {
            collectableType: t,
            onClose: n,
            analyticsSource: p,
            analyticsLocation: b,
            onSecondaryClick: i,
            ...r
          } = c,
          u = t === a.Z.AVATAR_DECORATION || t === a.Z.PROFILE_EFFECT,
          R = (0, s.Z)(
            t === a.Z.AVATAR_DECORATION
              ? o.cd.AVATAR_DECORATION_MODAL_UPSELL
              : o.cd.PROFILE_EFFECT_MODAL_UPSELL,
          );
        return u
          ? (0, d.jsx)(f.Z, {
              artURL: R,
              type:
                t === a.Z.AVATAR_DECORATION
                  ? o.cd.AVATAR_DECORATION_MODAL_UPSELL
                  : o.cd.PROFILE_EFFECT_MODAL_UPSELL,
              title:
                t === a.Z.AVATAR_DECORATION
                  ? A.intl.string(A.t.JI7uhY)
                  : A.intl.string(A.t.sYm15e),
              body:
                t === a.Z.AVATAR_DECORATION
                  ? A.intl.string(A.t["5XvsdX"])
                  : A.intl.string(A.t["Hza+Bg"]),
              glowUp:
                t === a.Z.AVATAR_DECORATION
                  ? A.intl.string(A.t["5XvsdX"])
                  : A.intl.string(A.t["Hza+Bg"]),
              onSecondaryClick: () => {
                i(), (0, e.$)(n);
              },
              secondaryCTA: A.intl.string(A.t.PcTCBw),
              onClose: n,
              enableArtBoxShadow: !1,
              analyticsSource: p,
              analyticsLocation: b,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              ...r,
            })
          : null;
      }
    },
    955092: function (c, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/5b4dc771eb1d2e239bcba774f3589b977845bf70d179315dc2f9a531b253c6d8.png";
    },
    250225: function (c, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/577d28b05d22c43a8b3dfe5ebfc6fa278c58f03907e888db884c331d13c3ad23.png";
    },
    778441: function (c, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/7fa341ec7211b62a71a0bd433d2bafe570ada865b0fd72d695b90de4a581022a.png";
    },
    238988: function (c, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/f3e3de08090be16d5041988655da92f175ba9967e7854f170caa18550159ae10.png";
    },
    298233: function (c, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/f56fdb607f14f6ebe5a37eac65f5b8c975ea446224c06dd8aef4dd0187c81874.png";
    },
    304354: function (c, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/d1dcb0c115a836edc8cbf021a15888bdf416fd352187518f227b8e905a20227f.png";
    },
    265704: function (c, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/b344b1fe2b3d2cc66466f09c46b4e2dcce56a16f1ff047aed69155fa4cff39a8.png";
    },
    85010: function (c, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/f3e3de08090be16d5041988655da92f175ba9967e7854f170caa18550159ae10.png";
    },
    954620: function (c, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/87534097f7ff0b0a3c6164bbcaad8968b2e7f8dbbdc59776c782cf14dba4c53c.png";
    },
    28747: function (c, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/5e27b7f8865a87dd6eec34188b96bb51924a55252b16f9ebfb8aa72973304bbd.png";
    },
    962658: function (c, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/15940a9acc0fab74b37e730350d6cef34289948e14b6d73e90432c19b4a51beb.png";
    },
    29971: function (c, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/6c6eeb5576f47ad8c19a40e67a6404ffaae3b939f07183afc984d669f17137de.png";
    },
    730837: function (c, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/fab9a25304af3a77b100b6beabd1d46013120289193faa37e9fa82977f133322.png";
    },
    95897: function (c, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/ef7a0b437305ab3a5ccda00a5ecd4eddd69544a90eac121e5c984ca63dd93b9e.png";
    },
    171362: function (c, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/71744284320fdf451ac09af729ea60d3fde7ef492f7c7e8c5657387c20c2b9c6.png";
    },
    945720: function (c, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/6c6eeb5576f47ad8c19a40e67a6404ffaae3b939f07183afc984d669f17137de.png";
    },
  },
]);
//# sourceMappingURL=4387cc8fe8446201b662.js.map
