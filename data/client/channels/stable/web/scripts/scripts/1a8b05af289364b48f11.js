"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84509"],
  {
    933696: function (t, n, c) {
      c.r(n),
        c.d(n, {
          default: function () {
            return f;
          },
        });
      var e = c(200651);
      c(192379);
      var o = c(98278),
        a = c(790527),
        i = c(474936),
        s = c(981631),
        r = c(388032),
        d = c(102525);
      function f(t) {
        let { onClose: n, source: c, ...f } = t,
          p = r.intl.format(r.t.WMO9pq, {
            onAndMore: function () {
              n(), (0, o.z)(!0);
            },
          });
        return (0, e.jsx)(a.Z, {
          artURL: d.Z,
          type: i.cd.PREMIUM_GUILD_IDENTITY_MODAL,
          title: r.intl.string(r.t.kOEBKC),
          body: p,
          glowUp: p,
          analyticsSource: c,
          analyticsLocation: {
            section: s.jXE.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_MODAL,
            object: s.qAy.BUTTON_CTA,
          },
          onClose: n,
          ...f,
        });
      }
    },
    102525: function (t, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/cebaa07ffa781bd4cb680a3dcfeb8fe4a6efc48bfb7fc4c80068e875049e2961.png";
    },
  },
]);
//# sourceMappingURL=1a8b05af289364b48f11.js.map
