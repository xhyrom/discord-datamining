"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["28479"],
  {
    78865: function (t, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return u;
          },
        });
      var e = a(200651);
      a(192379);
      var r = a(174609),
        o = a(790527),
        c = a(703656),
        i = a(626135),
        s = a(981631),
        l = a(474936),
        d = a(388032),
        _ = a(441626);
      function u(t) {
        let { onClose: n, onCloseParent: a, analyticsSource: u, ...p } = t,
          A = (0, e.jsx)("img", {
            className: _.art,
            alt: "HD Streaming Nitro Perk",
            src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
          }),
          C = d.intl.string(d.t.ewxv3N),
          h = d.intl.string(d.t.qlsCDA);
        return (0, e.jsx)(o.Z, {
          title: C,
          glowUp: h,
          body: h,
          artElement: A,
          artContainerClassName: _.artContainer,
          type: l.cd.STREAM_QUALITY_UPSELL,
          analyticsLocation: {
            section: s.jXE.STREAM_UPSELL_MODAL,
            object: s.qAy.BUTTON_CTA,
          },
          analyticsSource: u,
          onClose: n,
          onSubscribeClick: r.Z,
          secondaryCTA: d.intl.string(d.t.ZnqyZ2),
          onSecondaryClick: function () {
            (0, r.Z)(),
              n(),
              null == a || a(),
              i.default.track(s.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: s.jXE.STREAM_UPSELL_MODAL,
                location_object: s.qAy.NAVIGATION_LINK,
              }),
              (0, c.uL)(s.Z5c.APPLICATION_STORE);
          },
          showEnhancedUpsell: !0,
          enableArtBoxShadow: !1,
          headerClassName: _.header,
          ...p,
        });
      }
    },
    441626: function (t, n, a) {
      t.exports = {
        header: "header_c39d39",
        artContainer: "artContainer_c39d39",
        art: "art_c39d39",
      };
    },
  },
]);
//# sourceMappingURL=4b3721f2d14f906d9a2a.js.map
