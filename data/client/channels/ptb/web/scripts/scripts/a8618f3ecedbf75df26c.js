"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46398"],
  {
    259442: function (t) {
      t.exports = "/assets/dec0af8bfca67b6b45b2.svg";
    },
    523794: function (t, i, n) {
      n.r(i),
        n.d(i, {
          default: function () {
            return T;
          },
        });
      var o = n(200651);
      n(192379);
      var e = n(481060),
        l = n(600164),
        s = n(623624),
        a = n(430824),
        r = n(496675),
        d = n(626135),
        u = n(565799),
        c = n(501655),
        _ = n(146085),
        S = n(981631),
        E = n(474936),
        g = n(388032),
        I = n(921921);
      function T(t) {
        var i;
        let n,
          { channel: T, transitionState: h, onClose: m } = t,
          L = a.Z.getGuild(T.guild_id),
          f =
            null !== (i = null == L ? void 0 : L.maxStageVideoChannelUsers) &&
            void 0 !== i
              ? i
              : 0,
          C = !!(null == L ? void 0 : L.isCommunity()),
          p = g.intl.string(g.t.pqPQLy),
          x = C
            ? f < S.TU7
            : (null == L ? void 0 : L.premiumTier) !== S.Eu4.TIER_3 &&
              f <= S.eez,
          B = r.Z.can(_.yP, T);
        n =
          C && (null == L ? void 0 : L.premiumTier) === S.Eu4.TIER_3
            ? f <= S.TU7
              ? g.intl.string(g.t.tJmOu7)
              : g.intl.string(g.t["7FHbPD"])
            : x
              ? g.intl.string(g.t["8/uDSE"])
              : g.intl.string(g.t["7FHbPD"]);
        let M = () => {
            m(),
              d.default.track(S.rMx.BOOSTING_UPSELL_CLICKED, {
                guild_id: T.guild_id,
                type: E.cd.VIDEO_STAGE_LIMIT,
                is_moderator: B,
                action: E.T7.DISMISS,
              });
          },
          k = u.Z.getMutableParticipants(T.id, c.pV.SPEAKER).filter(
            (t) => t.type === c.Ui.VOICE,
          ).length,
          O = u.Z.getParticipantCount(T.id, c.pV.AUDIENCE);
        return (
          d.default.track(S.rMx.BOOSTING_UPSELL_VIEWED, {
            guild_id: T.guild_id,
            type: E.cd.VIDEO_STAGE_LIMIT,
            is_moderator: B,
            listener_count: k + O,
          }),
          (0, o.jsxs)(e.ModalRoot, {
            size: e.ModalSize.SMALL,
            transitionState: h,
            "aria-label": p,
            children: [
              (0, o.jsxs)(e.ModalHeader, {
                justify: l.Z.Justify.END,
                separator: !1,
                className: I.header,
                children: [
                  (0, o.jsx)("div", { className: I.fullArt }),
                  (0, o.jsx)(e.ModalCloseButton, { onClick: m }),
                ],
              }),
              (0, o.jsxs)(e.ModalContent, {
                className: I.content,
                children: [
                  (0, o.jsx)(e.Heading, {
                    variant: "heading-xl/bold",
                    children: p,
                  }),
                  (0, o.jsx)(e.Text, {
                    variant: "text-md/medium",
                    children: n,
                  }),
                ],
              }),
              (0, o.jsx)(e.ModalFooter, {
                className: I.footer,
                children: x
                  ? (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(e.Button, {
                          look: e.ButtonLooks.LINK,
                          className: I.noThanksButton,
                          color: e.ButtonColors.CUSTOM,
                          size: e.ButtonSizes.SMALL,
                          onClick: M,
                          children: g.intl.string(g.t.f3Pet7),
                        }),
                        (0, o.jsx)(e.ShinyButton, {
                          onClick: () => {
                            m(),
                              (0, s.f)({
                                guildId: T.guild_id,
                                location: { section: S.jXE.STAGE_VIDEO_LIMIT },
                              }),
                              d.default.track(S.rMx.BOOSTING_UPSELL_CLICKED, {
                                guild_id: T.guild_id,
                                type: E.cd.VIDEO_STAGE_LIMIT,
                                is_moderator: B,
                                action: E.T7.BOOST,
                              });
                          },
                          size: e.ButtonSizes.SMALL,
                          className: I.boostButton,
                          children: g.intl.string(g.t.Uj0md3),
                        }),
                      ],
                    })
                  : (0, o.jsx)(e.Button, {
                      onClick: M,
                      size: e.ButtonSizes.SMALL,
                      color: e.ButtonColors.CUSTOM,
                      className: I.boostButton,
                      children: g.intl.string(g.t["NX+WJC"]),
                    }),
              }),
            ],
          })
        );
      }
    },
    921921: function (t, i, n) {
      t.exports = {
        fullArt: "fullArt_a3571c",
        header: "header_a3571c",
        content: "content_a3571c",
        footer: "footer_a3571c",
        noThanksButton: "noThanksButton_a3571c",
        boostButton: "boostButton_a3571c",
      };
    },
  },
]);
//# sourceMappingURL=a8618f3ecedbf75df26c.js.map
