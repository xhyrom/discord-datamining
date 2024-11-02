"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16554"],
  {
    279360: function (t) {
      t.exports = "/assets/62e25972669895369efe.png";
    },
    917314: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return g;
          },
        });
      var o = e(200651);
      e(192379);
      var i = e(913527),
        r = e.n(i),
        s = e(848246),
        a = e(442837),
        l = e(230711),
        c = e(174609),
        d = e(114064),
        u = e(790527),
        p = e(1163),
        E = e(474936),
        M = e(981631),
        f = e(388032);
      function g(t) {
        let { onClose: n, ...i } = t,
          g = p.Z.useExperiment(
            { location: "PerksDemoPostUpsellModal" },
            { autoTrackExposure: !1 },
          ).extendedDemoDuration,
          L = (0, a.e7)([d.Z], () => {
            let t = r()(d.Z.activatedEndTime(s.q.STREAM_HIGH_QUALITY));
            return r().duration(t.diff(r()())).days();
          }),
          T = g
            ? L < 1
              ? f.intl.string(f.t.cRox19)
              : f.intl.formatToPlainString(f.t["5JlTZW"], {
                  days: Math.floor(L),
                })
            : f.intl.string(f.t.qLByR0);
        return (0, o.jsx)(u.Z, {
          type: E.cd.STREAM_QUALITY_UPSELL,
          artURL: e(279360),
          title: f.intl.string(f.t.uMbnCg),
          glowUp: f.intl.string(f.t.uMbnCg),
          showEnhancedUpsell: !0,
          body: T,
          analyticsLocation: { section: M.jXE.PREMIUM_PERKS_DEMO_UPSELL_MODAL },
          onSubscribeClick: c.Z,
          secondaryCTA: f.intl.string(f.t.PcTCBw),
          onSecondaryClick: () => {
            n(), l.Z.open(M.oAB.PREMIUM);
          },
          enableArtBoxShadow: !1,
          onClose: n,
          ...i,
        });
      }
    },
  },
]);
//# sourceMappingURL=faee4e3adbed2484d1df.js.map
