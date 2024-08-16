"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["16554"],
  {
    279360: function (_) {
      _.exports = "/assets/62e25972669895369efe.png";
    },
    917314: function (_, e, E) {
      E.r(e),
        E.d(e, {
          default: function () {
            return I;
          },
        });
      var s = E(735250);
      E(470079);
      var D = E(913527),
        o = E.n(D),
        M = E(848246),
        a = E(442837),
        t = E(230711),
        n = E(174609),
        L = E(114064),
        O = E(790527),
        A = E(1163),
        r = E(474936),
        i = E(981631),
        c = E(689938);
      function I(_) {
        let { onClose: e, ...D } = _,
          I = A.Z.useExperiment(
            { location: "PerksDemoPostUpsellModal" },
            { autoTrackExposure: !1 },
          ).extendedDemoDuration,
          d = (0, a.e7)([L.Z], () => {
            let _ = o()(L.Z.activatedEndTime(M.q.STREAM_HIGH_QUALITY));
            return o().duration(_.diff(o()())).days();
          }),
          R = I
            ? d < 1
              ? c.Z.Messages
                  .GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_MODAL_BODY_1_DAY
              : c.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_MODAL_BODY_MANY_DAYS.format(
                  { days: Math.floor(d) },
                )
            : c.Z.Messages
                .GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_ENDED_UPSELL_BODY;
        return (0, s.jsx)(O.Z, {
          type: r.cd.STREAM_QUALITY_UPSELL,
          artURL: E(279360),
          title:
            c.Z.Messages
              .GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_ENDED_UPSELL_TITLE,
          glowUp:
            c.Z.Messages
              .GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_ENDED_UPSELL_TITLE,
          showEnhancedUpsell: !0,
          body: R,
          analyticsLocation: { section: i.jXE.PREMIUM_PERKS_DEMO_UPSELL_MODAL },
          onSubscribeClick: n.Z,
          secondaryCTA: c.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
          onSecondaryClick: () => {
            e(), t.Z.open(i.oAB.PREMIUM);
          },
          enableArtBoxShadow: !1,
          onClose: e,
          ...D,
        });
      }
    },
  },
]);
//# sourceMappingURL=dbbe806046058c52e3b0.js.map
