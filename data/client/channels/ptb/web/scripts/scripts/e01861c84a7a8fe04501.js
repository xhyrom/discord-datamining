"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33184"],
  {
    990158: function (e) {
      e.exports = "/assets/a74c27fbecee5c05c71f.png";
    },
    465836: function (e, n, s) {
      s.r(n),
        s.d(n, {
          default: function () {
            return c;
          },
        });
      var t = s(735250);
      s(470079);
      var a = s(703558),
        o = s(403182),
        _ = s(127654),
        E = s(98278),
        L = s(790527),
        M = s(474936),
        r = s(981631),
        i = s(689938);
      function c(e) {
        var n;
        let { channel: c, onClose: l, content: A, ...u } = e;
        function O() {
          l(), (0, E.z)(!0);
        }
        return (0, t.jsx)(L.Z, {
          artURL: s(990158),
          type: M.cd.MESSAGE_LENGTH_UPSELL,
          title: i.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_HEADER,
          body: i.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_BODY.format(
            { maxLength: r.J6R, onLearnMore: O },
          ),
          context:
            i.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT.format({
              maxLength: r.J6R,
            }),
          glowUp:
            i.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_GLOW_UP.format({
              onLearnMore: O,
            }),
          analyticsSource: {
            page:
              (null == (n = c) ? void 0 : n.getGuildId()) != null
                ? r.ZY5.GUILD_CHANNEL
                : (null == n ? void 0 : n.isGroupDM()) ||
                    (null == n ? void 0 : n.isPrivate())
                  ? r.ZY5.DM_CHANNEL
                  : null,
          },
          analyticsLocation: {
            section: r.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
            object: r.qAy.BUTTON_CTA,
          },
          onClose: l,
          secondaryCTA: i.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,
          onSecondaryClick: function () {
            l();
            let e = new Blob([A], { type: "text/plain" });
            (0, _.d)([(0, o.dp)(e, "message.txt")], c, a.d.ChannelMessage, {
              requireConfirm: !0,
              showLargeMessageDialog: !0,
            });
          },
          ...u,
        });
      }
    },
  },
]);
//# sourceMappingURL=e01861c84a7a8fe04501.js.map
