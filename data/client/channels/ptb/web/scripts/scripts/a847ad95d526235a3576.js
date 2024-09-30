"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87200"],
  {
    592163: function (t, a, c) {
      c.r(a),
        c.d(a, {
          default: function () {
            return _;
          },
        });
      var n = c(735250);
      c(470079);
      var e = c(98278),
        o = c(790527),
        s = c(474936),
        r = c(981631),
        i = c(689938),
        d = c(350770),
        u = c(954696);
      function _(t) {
        let { onClose: a, analyticsSource: c, onLearnMore: _, ...p } = t,
          L = s.Si.TIER_2,
          O = i.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
            onLearnMore: function () {
              null == _ || _(), a(), (0, e.z)();
            },
          });
        return (0, n.jsx)(o.Z, {
          artURL: u.Z,
          artContainerClassName: d.videoBackgroundArt,
          type: s.cd.VIDEO_BACKGROUNDS_MODAL,
          title: i.Z.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
          body: O,
          glowUp: O,
          analyticsSource: c,
          analyticsLocation: {
            page: r.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
            object: r.qAy.BUTTON_CTA,
          },
          onClose: a,
          subscriptionTier: L,
          ...p,
        });
      }
    },
    350770: function (t, a, c) {
      t.exports = { videoBackgroundArt: "videoBackgroundArt_c386c5" };
    },
    954696: function (t, a) {
      a.Z =
        "https://cdn.discordapp.com/assets/content/2d563ce5f261ca4793e70ca87ccd10fd2b224ba302a5cd36414a5e4b4a374725.svg";
    },
  },
]);
//# sourceMappingURL=a847ad95d526235a3576.js.map
