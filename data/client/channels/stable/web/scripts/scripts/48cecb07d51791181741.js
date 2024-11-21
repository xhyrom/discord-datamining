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
      var a = e(200651);
      e(192379);
      var i = e(98278),
        o = e(790527),
        c = e(474936),
        d = e(981631),
        l = e(388032);
      function r(t) {
        var n;
        let { channel: r, onClose: s, ...u } = t,
          p = l.intl.format(l.t.AVVUsb, {
            onLearnMore: function () {
              s(), (0, i.z)(!0);
            },
          });
        return (0, a.jsx)(o.Z, {
          artURL: e(330226),
          type: c.cd.MESSAGE_LENGTH_UPSELL,
          title: l.intl.string(l.t.SeL3eX),
          body: p,
          glowUp: p,
          analyticsSource: {
            page:
              (null == (n = r) ? void 0 : n.getGuildId()) != null
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
          onClose: s,
          ...u,
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
//# sourceMappingURL=48cecb07d51791181741.js.map
