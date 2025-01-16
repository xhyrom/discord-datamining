"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87200"],
  {
    592163: function (t, n, c) {
      c.r(n),
        c.d(n, {
          default: function () {
            return p;
          },
        });
      var a = c(200651);
      c(192379);
      var o = c(98278),
        i = c(790527),
        r = c(474936),
        e = c(981631),
        s = c(388032),
        d = c(577028),
        u = c(954696);
      function p(t) {
        let { onClose: n, analyticsSource: c, onLearnMore: p, ...l } = t,
          f = r.Si.TIER_2,
          _ = s.intl.format(s.t.hDMlqK, {
            onLearnMore: function () {
              null == p || p(), n(), (0, o.z)();
            },
          });
        return (0, a.jsx)(i.Z, {
          artURL: u.Z,
          artContainerClassName: d.videoBackgroundArt,
          type: r.cd.VIDEO_BACKGROUNDS_MODAL,
          title: s.intl.string(s.t.fHqiDQ),
          body: _,
          glowUp: _,
          analyticsSource: c,
          analyticsLocation: {
            page: e.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
            object: e.qAy.BUTTON_CTA,
          },
          onClose: n,
          subscriptionTier: f,
          ...l,
        });
      }
    },
    577028: function (t, n, c) {
      t.exports = { videoBackgroundArt: "videoBackgroundArt_c386c5" };
    },
    954696: function (t, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/2d563ce5f261ca4793e70ca87ccd10fd2b224ba302a5cd36414a5e4b4a374725.svg";
    },
  },
]);
//# sourceMappingURL=e18d50dc14e92f79788c.js.map
