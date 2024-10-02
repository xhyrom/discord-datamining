"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33184"],
  {
    465836: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return d;
          },
        });
      var n = t(735250);
      t(470079);
      var s = t(703558),
        o = t(585483),
        L = t(403182),
        E = t(127654),
        _ = t(98278),
        M = t(790527),
        c = t(474936),
        i = t(981631),
        r = t(689938);
      function d(e) {
        var a;
        let { channel: d, onClose: l, content: A, ...u } = e;
        function S() {
          l(), (0, _.z)(!0);
        }
        return (0, n.jsx)(M.Z, {
          artURL: t(330226),
          type: c.cd.MESSAGE_LENGTH_UPSELL,
          title: r.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_HEADER,
          body: r.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_BODY.format(
            { maxLength: i.J6R, onLearnMore: S },
          ),
          context:
            r.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT.format({
              maxLength: i.J6R,
            }),
          glowUp:
            r.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_GLOW_UP.format({
              onLearnMore: S,
            }),
          analyticsSource: {
            page:
              (null == (a = d) ? void 0 : a.getGuildId()) != null
                ? i.ZY5.GUILD_CHANNEL
                : (null == a ? void 0 : a.isGroupDM()) ||
                    (null == a ? void 0 : a.isPrivate())
                  ? i.ZY5.DM_CHANNEL
                  : null,
          },
          analyticsLocation: {
            section: i.jXE.MESSAGE_LENGTH_UPSELL_MODAL,
            object: i.qAy.BUTTON_CTA,
          },
          onClose: l,
          secondaryCTA: r.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,
          onSecondaryClick: function () {
            l();
            let e = new Blob([A], { type: "text/plain" });
            (0, E.d)([(0, L.dp)(e, "message.txt")], d, s.d.ChannelMessage, {
              requireConfirm: !0,
              showLargeMessageDialog: !0,
            }),
              o.S.dispatchToLastSubscribed(i.CkL.CLEAR_TEXT);
          },
          ...u,
        });
      }
    },
    330226: function (e, a, t) {
      t.r(a);
      a.default =
        "https://cdn.discordapp.com/assets/content/c1ddea1c19966c991aeca4a835553b82b2f36adbff234d67eb260defdf729f63.png";
    },
  },
]);
//# sourceMappingURL=30bbb188fb590d95365d.js.map
