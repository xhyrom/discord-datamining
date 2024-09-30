"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3289"],
  {
    682609: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return E;
          },
        });
      var a = e(735250);
      e(470079);
      var o = e(98278),
        c = e(790527),
        s = e(474936),
        d = e(981631),
        i = e(689938);
      function E(t) {
        var n;
        let { channel: E, onClose: u, ...L } = t,
          r = i.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_BODY.format({
            onLearnMore: function () {
              u(), (0, o.z)(!0);
            },
          });
        return (0, a.jsx)(c.Z, {
          artURL: e(330226),
          type: s.cd.MESSAGE_LENGTH_UPSELL,
          title: i.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_HEADER,
          body: r,
          glowUp: r,
          analyticsSource: {
            page:
              (null == (n = E) ? void 0 : n.getGuildId()) != null
                ? d.ZY5.GUILD_CHANNEL
                : (null == n ? void 0 : n.isGroupDM()) ||
                    (null == n ? void 0 : n.isPrivate())
                  ? d.ZY5.DM_CHANNEL
                  : null,
          },
          analyticsLocation: {
            section: d.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
            object: d.qAy.BUTTON_CTA,
          },
          onClose: u,
          ...L,
        });
      }
    },
    330226: function (t, n, e) {
      e.r(n);
      n.default =
        "https://cdn.discordapp.com/assets/content/c1ddea1c19966c991aeca4a835553b82b2f36adbff234d67eb260defdf729f63.png";
    },
  },
]);
//# sourceMappingURL=7dd4ae755aca33025d50.js.map
