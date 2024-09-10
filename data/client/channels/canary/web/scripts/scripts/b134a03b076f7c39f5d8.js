"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87200"],
  {
    399103: function (t) {
      t.exports = "/assets/06545e5a863bed106fd5.svg";
    },
    592163: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return d;
          },
        });
      var o = n(735250);
      n(470079);
      var a = n(98278),
        r = n(790527),
        s = n(474936),
        c = n(981631),
        i = n(689938),
        u = n(350770),
        _ = n(399103);
      function d(t) {
        let { onClose: e, analyticsSource: n, onLearnMore: d, ...p } = t,
          L = s.Si.TIER_2,
          O = i.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
            onLearnMore: function () {
              null == d || d(), e(), (0, a.z)();
            },
          });
        return (0, o.jsx)(r.Z, {
          artURL: _,
          artContainerClassName: u.videoBackgroundArt,
          type: s.cd.VIDEO_BACKGROUNDS_MODAL,
          title: i.Z.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
          body: O,
          glowUp: O,
          analyticsSource: n,
          analyticsLocation: {
            page: c.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
            object: c.qAy.BUTTON_CTA,
          },
          onClose: e,
          subscriptionTier: L,
          ...p,
        });
      }
    },
    350770: function (t, e, n) {
      t.exports = { videoBackgroundArt: "videoBackgroundArt_c386c5" };
    },
  },
]);
//# sourceMappingURL=b134a03b076f7c39f5d8.js.map
