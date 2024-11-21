"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3289"],
  {
    682609: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return r;
          },
        });
      var i = e(200651);
      e(192379);
      var o = e(98278),
        a = e(790527),
        c = e(474936),
        d = e(981631),
        s = e(388032),
        l = e(330226);
      function r(t) {
        var n;
        let { channel: e, onClose: r, ...u } = t,
          p = s.intl.format(s.t.AVVUsb, {
            onLearnMore: function () {
              r(), (0, o.z)(!0);
            },
          });
        return (0, i.jsx)(a.Z, {
          artURL: l.Z,
          type: c.cd.MESSAGE_LENGTH_UPSELL,
          title: s.intl.string(s.t.SeL3eX),
          body: p,
          glowUp: p,
          analyticsSource: {
            page:
              (null == (n = e) ? void 0 : n.getGuildId()) != null
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
          onClose: r,
          ...u,
        });
      }
    },
    330226: function (t, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/c1ddea1c19966c991aeca4a835553b82b2f36adbff234d67eb260defdf729f63.png";
    },
  },
]);
//# sourceMappingURL=3f0e7008ce4e876efef3.js.map
