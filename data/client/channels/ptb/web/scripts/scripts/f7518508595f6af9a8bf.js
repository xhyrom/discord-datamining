"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51816"],
  {
    773585: function (e) {
      e.exports = "/assets/2eda8c92bee4f80ead24.png";
    },
    415788: function (e, s, t) {
      t.r(s),
        t.d(s, {
          default: function () {
            return A;
          },
        }),
        t(47120);
      var E = t(735250);
      t(470079);
      var a = t(120356),
        _ = t.n(a),
        r = t(704215),
        n = t(100527),
        L = t(906732),
        R = t(243778),
        o = t(790527),
        i = t(474936),
        u = t(981631),
        S = t(921944),
        b = t(689938),
        c = t(114831);
      function A(e) {
        let s,
          a,
          A,
          { upsellType: T, onClose: U, transitionState: d } = e,
          I = T === i.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL,
          [C, O] = (0, R.US)([r.z.REVERSE_TRIAL_ENDED_UPSELL]);
        return (
          (0, L.ZP)(n.Z.REVERSE_TRIAL_UPSELL_MODAL),
          I
            ? ((s = b.Z.Messages.REVERSE_TRIAL_FOLLOW_UP_TRIAL_UPSELL_HEADER),
              (a = b.Z.Messages.REVERSE_TRIAL_FOLLOW_UP_TRIAL_UPSELL_SUBHEADER),
              (A = b.Z.Messages.BOGO_CLAIM_OFFER))
            : ((s = b.Z.Messages.REVERSE_TRIAL_ENDED_UPSELL_HEADER),
              (a = b.Z.Messages.REVERSE_TRIAL_ENDED_UPSELL_SUBHEADER),
              (A = b.Z.Messages.PREMIUM_SETTINGS_GET)),
          (0, E.jsx)(o.Z, {
            artURL: t(773585),
            artContainerClassName: _()(c.artContainer, { [c.grayArt]: !I }),
            enableArtBoxShadow: !1,
            type: T,
            title: s,
            body: a,
            bodyClassName: c.subHeader,
            glowUp: a,
            onSubscribeClick: () => {
              O(S.L.TAKE_ACTION);
            },
            backButtonText: b.Z.Messages.CLOSE,
            subscribeButtonText: A,
            subscribeButtonClassname: c.subscribeButton,
            useSubscribeButtonGradient: !0,
            hidePremiumOfferUpsell: !0,
            analyticsLocation: {
              section: u.jXE.REVERSE_TRIAL_UPSELL_MODAL,
              object: u.qAy.BUTTON_CTA,
            },
            transitionState: d,
            onClose: () => (O(S.L.USER_DISMISS), U()),
          })
        );
      }
    },
    114831: function (e, s, t) {
      e.exports = {
        artContainer: "artContainer_e90205",
        grayArt: "grayArt_e90205",
        subscribeButton: "subscribeButton_e90205",
        subHeader: "subHeader_e90205",
      };
    },
  },
]);
//# sourceMappingURL=f7518508595f6af9a8bf.js.map
