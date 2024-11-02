"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38047"],
  {
    975863: function (t, n, c) {
      c.r(n),
        c.d(n, {
          default: function () {
            return U;
          },
        });
      var e = c(200651);
      c(192379);
      var a = c(442837),
        r = c(654904),
        i = c(594174),
        o = c(74538),
        s = c(98278),
        d = c(790527),
        u = c(474936),
        f = c(981631),
        p = c(486324),
        l = c(388032),
        C = c(89671);
      function U(t) {
        let { onClose: n, source: c, ...U } = t,
          b = (0, a.e7)([i.default], () => i.default.getCurrentUser()),
          y = o.ZP.isPremium(b) ? l.t.E0sNsb : l.t.UBcutr,
          E = l.intl.format(y, {
            onLearnMore: function () {
              n(), (0, s.z)(!0);
            },
          });
        return (0, e.jsx)(d.Z, {
          artURL: C.Z,
          type: u.cd.CUSTOM_PROFILE_UPSELL,
          title: l.intl.string(l.t.BbsMm5),
          body: E,
          glowUp: E,
          onSecondaryClick: () => {
            n(), (0, r.$r)(p.pC.BANNER);
          },
          secondaryCTA: l.intl.string(l.t.SpAQiY),
          analyticsSource: c,
          analyticsLocation: {
            section: f.jXE.USER_PROFILE,
            object: f.qAy.BUTTON_CTA,
          },
          onClose: n,
          ...U,
        });
      }
    },
    89671: function (t, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/910920da94849fc94f7ef295805ae6daacc664c3b5e62f5000239ff2053d73a7.png";
    },
  },
]);
//# sourceMappingURL=f57c209e46d56dc5f02e.js.map
