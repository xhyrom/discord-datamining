"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84509"],
  {
    933696: function (t, c, e) {
      e.r(c),
        e.d(c, {
          default: function () {
            return i;
          },
        });
      var n = e(735250);
      e(470079);
      var a = e(98278),
        s = e(790527),
        o = e(474936),
        _ = e(981631),
        L = e(689938);
      function i(t) {
        let { onClose: c, source: i, ...r } = t,
          d = L.Z.Messages.GUILD_IDENTITY_UPSELL_MODAL_BODY.format({
            onAndMore: function () {
              c(), (0, a.z)(!0);
            },
          });
        return (0, n.jsx)(s.Z, {
          artURL: e(102525),
          type: o.cd.PREMIUM_GUILD_IDENTITY_MODAL,
          title: L.Z.Messages.GUILD_IDENTITY_UPSELL_MODAL_TITLE,
          body: d,
          glowUp: d,
          analyticsSource: i,
          analyticsLocation: {
            section: _.jXE.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_MODAL,
            object: _.qAy.BUTTON_CTA,
          },
          onClose: c,
          ...r,
        });
      }
    },
    102525: function (t, c, e) {
      e.r(c);
      c.default =
        "https://cdn.discordapp.com/assets/content/cebaa07ffa781bd4cb680a3dcfeb8fe4a6efc48bfb7fc4c80068e875049e2961.png";
    },
  },
]);
//# sourceMappingURL=5c566de90a47d0f0dbcd.js.map
