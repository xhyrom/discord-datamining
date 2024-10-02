"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38047"],
  {
    975863: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return O;
          },
        });
      var a = t(735250);
      t(470079);
      var n = t(442837),
        c = t(654904),
        o = t(594174),
        r = t(74538),
        _ = t(98278),
        i = t(790527),
        E = t(474936),
        d = t(981631),
        U = t(486324),
        u = t(689938),
        I = t(89671);
      function O(e) {
        let { onClose: s, source: t, ...O } = e,
          T = (0, n.e7)([o.default], () => o.default.getCurrentUser()),
          f = r.ZP.isPremium(T)
            ? u.Z.Messages.PREMIUM_PROFILE_CUSTOMIZATION_UPGRADE_BODY
            : u.Z.Messages.PREMIUM_PROFILE_CUSTOMIZATION_UPSELL_BODY,
          M = f.format({
            onLearnMore: function () {
              s(), (0, _.z)(!0);
            },
          });
        return (0, a.jsx)(i.Z, {
          artURL: I.Z,
          type: E.cd.CUSTOM_PROFILE_UPSELL,
          title: u.Z.Messages.PREMIUM_PROFILE_CUSTOMIZATION_UPSELL_HEADER,
          body: M,
          glowUp: M,
          onSecondaryClick: () => {
            s(), (0, c.$r)(U.pC.BANNER);
          },
          secondaryCTA: u.Z.Messages.USER_SETTINGS_TRY_IT_OUT,
          analyticsSource: t,
          analyticsLocation: {
            section: d.jXE.USER_PROFILE,
            object: d.qAy.BUTTON_CTA,
          },
          onClose: s,
          ...O,
        });
      }
    },
    89671: function (e, s) {
      s.Z =
        "https://cdn.discordapp.com/assets/content/910920da94849fc94f7ef295805ae6daacc664c3b5e62f5000239ff2053d73a7.png";
    },
  },
]);
//# sourceMappingURL=d9a5b7d573045d13483f.js.map
