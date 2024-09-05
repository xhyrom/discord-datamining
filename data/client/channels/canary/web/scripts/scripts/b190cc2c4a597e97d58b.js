"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["34906"],
  {
    235810: function (t) {
      t.exports = "/assets/942e9347bbd6099ce7c2.png";
    },
    639565: function (t, e, s) {
      s.r(e),
        s.d(e, {
          default: function () {
            return O;
          },
        });
      var a = s(735250);
      s(470079);
      var n = s(703656),
        _ = s(626135),
        c = s(790527),
        o = s(474936),
        L = s(981631),
        r = s(689938),
        i = s(696265),
        A = s(235810);
      function E() {
        return (0, a.jsx)("div", {
          className: i.artContainer,
          children: (0, a.jsx)("img", {
            src: A,
            className: i.artAsset,
            alt: "",
          }),
        });
      }
      function O(t) {
        let { onClose: e, source: s, ...i } = t;
        return (0, a.jsx)(c.Z, {
          artElement: (0, a.jsx)(E, {}),
          type: o.cd.FOR_LATER_MODAL_UPSELL,
          title: r.Z.Messages.FOR_LATER_UPSELL_MODAL_TITLE,
          body: r.Z.Messages.FOR_LATER_UPSELL_MODAL_BODY,
          glowUp: r.Z.Messages.FOR_LATER_UPSELL_MODAL_BODY,
          secondaryCTA: r.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
          onSecondaryClick: function () {
            _.default.track(L.rMx.PREMIUM_PROMOTION_OPENED, {
              location_section: L.jXE.PREMIUM_FOR_LATER_UPSELL_MODAL,
              location_object: L.qAy.NAVIGATION_LINK,
            }),
              e(),
              (0, n.uL)(L.Z5c.APPLICATION_STORE);
          },
          showEnhancedUpsell: !0,
          analyticsSource: s,
          analyticsLocation: {
            section: L.jXE.PREMIUM_FOR_LATER_UPSELL_MODAL,
            object: L.qAy.BUTTON_CTA,
          },
          onClose: e,
          ...i,
        });
      }
    },
    696265: function (t, e, s) {
      t.exports = {
        artContainer: "artContainer_b1a95e",
        artAsset: "artAsset_b1a95e",
      };
    },
  },
]);
//# sourceMappingURL=b190cc2c4a597e97d58b.js.map
