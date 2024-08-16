"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84509"],
  {
    399604: function (t) {
      t.exports = "/assets/d6df34720058357c218e.png";
    },
    933696: function (t, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return i;
          },
        });
      var e = s(735250);
      s(470079);
      var o = s(98278),
        _ = s(790527),
        c = s(474936),
        L = s(981631),
        a = s(689938);
      function i(t) {
        let { onClose: n, source: i, ...r } = t,
          I = a.Z.Messages.GUILD_IDENTITY_UPSELL_MODAL_BODY.format({
            onAndMore: function () {
              n(), (0, o.z)(!0);
            },
          });
        return (0, e.jsx)(_.Z, {
          artURL: s(399604),
          type: c.cd.PREMIUM_GUILD_IDENTITY_MODAL,
          title: a.Z.Messages.GUILD_IDENTITY_UPSELL_MODAL_TITLE,
          body: I,
          glowUp: I,
          analyticsSource: i,
          analyticsLocation: {
            section: L.jXE.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_MODAL,
            object: L.qAy.BUTTON_CTA,
          },
          onClose: n,
          ...r,
        });
      }
    },
  },
]);
//# sourceMappingURL=237fc435e7c8dbaeb4ff.js.map
