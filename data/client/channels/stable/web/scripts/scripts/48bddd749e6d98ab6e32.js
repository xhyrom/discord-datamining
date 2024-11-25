"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34906"],
  {
    639565: function (t, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return A;
          },
        });
      var e = a(200651);
      a(192379);
      var s = a(703656),
        i = a(626135),
        r = a(790527),
        c = a(474936),
        o = a(981631),
        l = a(388032),
        _ = a(184217),
        u = a(235810);
      function E() {
        return (0, e.jsx)("div", {
          className: _.artContainer,
          children: (0, e.jsx)("img", {
            src: u,
            className: _.artAsset,
            alt: "",
          }),
        });
      }
      function A(t) {
        let { onClose: n, source: a, ..._ } = t;
        return (0, e.jsx)(r.Z, {
          artElement: (0, e.jsx)(E, {}),
          type: c.cd.FOR_LATER_MODAL_UPSELL,
          title: l.intl.string(l.t.w4DRbW),
          body: l.intl.string(l.t.F6u3Ex),
          glowUp: l.intl.string(l.t.F6u3Ex),
          secondaryCTA: l.intl.string(l.t.PcTCBw),
          onSecondaryClick: function () {
            i.default.track(o.rMx.PREMIUM_PROMOTION_OPENED, {
              location_section: o.jXE.PREMIUM_FOR_LATER_UPSELL_MODAL,
              location_object: o.qAy.NAVIGATION_LINK,
            }),
              n(),
              (0, s.uL)(o.Z5c.APPLICATION_STORE);
          },
          showEnhancedUpsell: !0,
          analyticsSource: a,
          analyticsLocation: {
            section: o.jXE.PREMIUM_FOR_LATER_UPSELL_MODAL,
            object: o.qAy.BUTTON_CTA,
          },
          onClose: n,
          ..._,
        });
      }
    },
    184217: function (t, n, a) {
      t.exports = {
        artContainer: "artContainer_b1a95e",
        artAsset: "artAsset_b1a95e",
      };
    },
  },
]);
//# sourceMappingURL=48bddd749e6d98ab6e32.js.map
