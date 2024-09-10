"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28479"],
  {
    78865: function (a, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return l;
          },
        });
      var n = t(735250);
      t(470079);
      var r = t(174609),
        s = t(790527),
        o = t(703656),
        c = t(626135),
        i = t(981631),
        _ = t(474936),
        E = t(689938),
        d = t(188535);
      function l(a) {
        let { onClose: e, onCloseParent: t, analyticsSource: l, ...M } = a,
          A = (0, n.jsx)("img", {
            className: d.art,
            alt: "HD Streaming Nitro Perk",
            src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
          }),
          L = E.Z.Messages.STREAM_PREMIUM_UPSELL_TITLE,
          S = E.Z.Messages.STREAM_PREMIUM_UPSELL_DESCRIPTION;
        return (0, n.jsx)(s.Z, {
          title: L,
          glowUp: S,
          body: S,
          artElement: A,
          artContainerClassName: d.artContainer,
          type: _.cd.STREAM_QUALITY_UPSELL,
          analyticsLocation: {
            section: i.jXE.STREAM_UPSELL_MODAL,
            object: i.qAy.BUTTON_CTA,
          },
          analyticsSource: l,
          onClose: e,
          onSubscribeClick: r.Z,
          secondaryCTA: E.Z.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA,
          onSecondaryClick: function () {
            (0, r.Z)(),
              e(),
              null == t || t(),
              c.default.track(i.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: i.jXE.STREAM_UPSELL_MODAL,
                location_object: i.qAy.NAVIGATION_LINK,
              }),
              (0, o.uL)(i.Z5c.APPLICATION_STORE);
          },
          showEnhancedUpsell: !0,
          enableArtBoxShadow: !1,
          headerClassName: d.header,
          ...M,
        });
      }
    },
    188535: function (a, e, t) {
      a.exports = {
        header: "header_c39d39",
        artContainer: "artContainer_c39d39",
        art: "art_c39d39",
      };
    },
  },
]);
//# sourceMappingURL=4580abdc9c5ef96a4fea.js.map
