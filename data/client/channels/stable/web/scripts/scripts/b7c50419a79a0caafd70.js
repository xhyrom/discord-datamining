"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84509"],
  {
    933696: function (t, n, c) {
      c.r(n),
        c.d(n, {
          default: function () {
            return d;
          },
        });
      var e = c(200651);
      c(192379);
      var a = c(98278),
        o = c(790527),
        i = c(474936),
        s = c(981631),
        r = c(388032);
      function d(t) {
        let { onClose: n, source: d, ...f } = t,
          p = r.intl.format(r.t.WMO9pq, {
            onAndMore: function () {
              n(), (0, a.z)(!0);
            },
          });
        return (0, e.jsx)(o.Z, {
          artURL: c(102525),
          type: i.cd.PREMIUM_GUILD_IDENTITY_MODAL,
          title: r.intl.string(r.t.kOEBKC),
          body: p,
          glowUp: p,
          analyticsSource: d,
          analyticsLocation: {
            section: s.jXE.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_MODAL,
            object: s.qAy.BUTTON_CTA,
          },
          onClose: n,
          ...f,
        });
      }
    },
    102525: function (t, n, c) {
      c.r(n);
      n.default =
        "https://cdn.discordapp.com/assets/content/cebaa07ffa781bd4cb680a3dcfeb8fe4a6efc48bfb7fc4c80068e875049e2961.png";
    },
  },
]);
//# sourceMappingURL=b7c50419a79a0caafd70.js.map
