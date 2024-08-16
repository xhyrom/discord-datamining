"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3289"],
  {
    990158: function (e) {
      e.exports = "/assets/a74c27fbecee5c05c71f.png";
    },
    682609: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return L;
          },
        });
      var o = t(735250);
      t(470079);
      var s = t(98278),
        E = t(790527),
        a = t(474936),
        i = t(981631),
        c = t(689938);
      function L(e) {
        var n;
        let { channel: L, onClose: u, ..._ } = e,
          r = c.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_BODY.format({
            onLearnMore: function () {
              u(), (0, s.z)(!0);
            },
          });
        return (0, o.jsx)(E.Z, {
          artURL: t(990158),
          type: a.cd.MESSAGE_LENGTH_UPSELL,
          title: c.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_HEADER,
          body: r,
          glowUp: r,
          analyticsSource: {
            page:
              (null == (n = L) ? void 0 : n.getGuildId()) != null
                ? i.ZY5.GUILD_CHANNEL
                : (null == n ? void 0 : n.isGroupDM()) ||
                    (null == n ? void 0 : n.isPrivate())
                  ? i.ZY5.DM_CHANNEL
                  : null,
          },
          analyticsLocation: {
            section: i.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
            object: i.qAy.BUTTON_CTA,
          },
          onClose: u,
          ..._,
        });
      }
    },
  },
]);
//# sourceMappingURL=10357cae8e6b16877b6b.js.map
