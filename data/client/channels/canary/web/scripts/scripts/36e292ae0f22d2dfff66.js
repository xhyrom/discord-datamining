"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["51816"],
  {
    415788: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return p;
          },
        }),
        e(47120);
      var r = e(200651);
      e(192379);
      var s = e(120356),
        i = e.n(s),
        a = e(704215),
        o = e(100527),
        c = e(906732),
        u = e(243778),
        b = e(790527),
        d = e(474936),
        E = e(981631),
        _ = e(921944),
        l = e(388032),
        L = e(213329),
        S = e(746458);
      function p(t) {
        let n,
          e,
          s,
          { upsellType: p, onClose: C, transitionState: g } = t,
          A = p === d.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL,
          [R, T] = (0, u.US)([a.z.REVERSE_TRIAL_ENDED_UPSELL]);
        return (
          (0, c.ZP)(o.Z.REVERSE_TRIAL_UPSELL_MODAL),
          A
            ? ((n = l.intl.string(l.t.CCMEZW)),
              (e = l.intl.string(l.t.gFGZZG)),
              (s = l.intl.string(l.t.J61px8)))
            : ((n = l.intl.string(l.t.N1JBY2)),
              (e = l.intl.string(l.t["h5/w39"])),
              (s = l.intl.string(l.t["8x0jKS"]))),
          (0, r.jsx)(b.Z, {
            artURL: S.Z,
            artContainerClassName: i()(L.artContainer, { [L.grayArt]: !A }),
            enableArtBoxShadow: !1,
            type: p,
            title: n,
            body: e,
            bodyClassName: L.subHeader,
            glowUp: e,
            onSubscribeClick: () => {
              T(_.L.TAKE_ACTION);
            },
            backButtonText: l.intl.string(l.t.cpT0Cg),
            subscribeButtonText: s,
            subscribeButtonClassname: L.subscribeButton,
            useSubscribeButtonGradient: !0,
            hidePremiumOfferUpsell: !0,
            analyticsLocation: {
              section: E.jXE.REVERSE_TRIAL_UPSELL_MODAL,
              object: E.qAy.BUTTON_CTA,
            },
            transitionState: g,
            onClose: () => (T(_.L.USER_DISMISS), C()),
          })
        );
      }
    },
    213329: function (t, n, e) {
      t.exports = {
        artContainer: "artContainer_e90205",
        grayArt: "grayArt_e90205",
        subscribeButton: "subscribeButton_e90205",
        subHeader: "subHeader_e90205",
      };
    },
    746458: function (t, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/222d9832fa08040ed244d7ce9845e3a78b980a3e1b4128925634cb18b17883dd.png";
    },
  },
]);
//# sourceMappingURL=36e292ae0f22d2dfff66.js.map
