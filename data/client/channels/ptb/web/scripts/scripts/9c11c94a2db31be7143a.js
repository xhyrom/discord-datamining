"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33184"],
  {
    990158: function (e) {
      e.exports = "/assets/a74c27fbecee5c05c71f.png";
    },
    465836: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return A;
          },
        });
      var t = n(735250);
      n(470079);
      var a = n(703558),
        o = n(585483),
        L = n(403182),
        E = n(127654),
        _ = n(98278),
        M = n(790527),
        i = n(474936),
        r = n(981631),
        c = n(689938);
      function A(e) {
        var s;
        let { channel: A, onClose: l, content: u, ...S } = e;
        function d() {
          l(), (0, _.z)(!0);
        }
        return (0, t.jsx)(M.Z, {
          artURL: n(990158),
          type: i.cd.MESSAGE_LENGTH_UPSELL,
          title: c.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_HEADER,
          body: c.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_BODY.format(
            { maxLength: r.J6R, onLearnMore: d },
          ),
          context:
            c.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT.format({
              maxLength: r.J6R,
            }),
          glowUp:
            c.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_GLOW_UP.format({
              onLearnMore: d,
            }),
          analyticsSource: {
            page:
              (null == (s = A) ? void 0 : s.getGuildId()) != null
                ? r.ZY5.GUILD_CHANNEL
                : (null == s ? void 0 : s.isGroupDM()) ||
                    (null == s ? void 0 : s.isPrivate())
                  ? r.ZY5.DM_CHANNEL
                  : null,
          },
          analyticsLocation: {
            section: r.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
            object: r.qAy.BUTTON_CTA,
          },
          onClose: l,
          secondaryCTA: c.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,
          onSecondaryClick: function () {
            l();
            let e = new Blob([u], { type: "text/plain" });
            (0, E.d)([(0, L.dp)(e, "message.txt")], A, a.d.ChannelMessage, {
              requireConfirm: !0,
              showLargeMessageDialog: !0,
            }),
              o.S.dispatchToLastSubscribed(r.CkL.CLEAR_TEXT);
          },
          ...S,
        });
      }
    },
  },
]);
//# sourceMappingURL=9c11c94a2db31be7143a.js.map
