"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33184"],
  {
    465836: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return p;
          },
        });
      var a = e(200651);
      e(192379);
      var i = e(703558),
        o = e(585483),
        c = e(403182),
        r = e(127654),
        s = e(98278),
        l = e(790527),
        d = e(474936),
        u = e(981631),
        L = e(388032);
      function p(t) {
        var n;
        let { channel: p, onClose: f, content: g, ...E } = t;
        function b() {
          f(), (0, s.z)(!0);
        }
        return (0, a.jsx)(l.Z, {
          artURL: e(330226),
          type: d.cd.MESSAGE_LENGTH_UPSELL,
          title: L.intl.string(L.t.TZT3sL),
          body: L.intl.format(L.t.QhcEAA, { maxLength: u.J6R, onLearnMore: b }),
          context: L.intl.formatToPlainString(L.t.Fc1uVV, { maxLength: u.J6R }),
          glowUp: L.intl.format(L.t.Mi8kt7, { onLearnMore: b }),
          analyticsSource: {
            page:
              (null == (n = p) ? void 0 : n.getGuildId()) != null
                ? u.ZY5.GUILD_CHANNEL
                : (null == n ? void 0 : n.isGroupDM()) ||
                    (null == n ? void 0 : n.isPrivate())
                  ? u.ZY5.DM_CHANNEL
                  : null,
          },
          analyticsLocation: {
            section: u.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
            object: u.qAy.BUTTON_CTA,
          },
          onClose: f,
          secondaryCTA: L.intl.string(L.t.Fnsb1t),
          onSecondaryClick: function () {
            f();
            let t = new Blob([g], { type: "text/plain" });
            (0, r.d)([(0, c.dp)(t, "message.txt")], p, i.d.ChannelMessage, {
              requireConfirm: !0,
              showLargeMessageDialog: !0,
            }),
              o.S.dispatchToLastSubscribed(u.CkL.CLEAR_TEXT);
          },
          ...E,
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
//# sourceMappingURL=e168d2df225ef56789ec.js.map
