"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38047"],
  {
    440142: function (e) {
      e.exports = "/assets/6f7155e64843a5488f4b.png";
    },
    975863: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return O;
          },
        });
      var n = t(735250);
      t(470079);
      var a = t(442837),
        o = t(654904),
        r = t(594174),
        _ = t(74538),
        c = t(98278),
        E = t(790527),
        i = t(474936),
        U = t(981631),
        u = t(486324),
        I = t(689938);
      function O(e) {
        let { onClose: s, source: O, ...T } = e,
          M = (0, a.e7)([r.default], () => r.default.getCurrentUser()),
          R = _.ZP.isPremium(M)
            ? I.Z.Messages.PREMIUM_PROFILE_CUSTOMIZATION_UPGRADE_BODY
            : I.Z.Messages.PREMIUM_PROFILE_CUSTOMIZATION_UPSELL_BODY,
          L = R.format({
            onLearnMore: function () {
              s(), (0, c.z)(!0);
            },
          });
        return (0, n.jsx)(E.Z, {
          artURL: t(440142),
          type: i.cd.CUSTOM_PROFILE_UPSELL,
          title: I.Z.Messages.PREMIUM_PROFILE_CUSTOMIZATION_UPSELL_HEADER,
          body: L,
          glowUp: L,
          onSecondaryClick: () => {
            s(), (0, o.$r)(u.pC.BANNER);
          },
          secondaryCTA: I.Z.Messages.USER_SETTINGS_TRY_IT_OUT,
          analyticsSource: O,
          analyticsLocation: {
            section: U.jXE.USER_PROFILE,
            object: U.qAy.BUTTON_CTA,
          },
          onClose: s,
          ...T,
        });
      }
    },
  },
]);
//# sourceMappingURL=0ac3f6d0e46369acfbf2.js.map
