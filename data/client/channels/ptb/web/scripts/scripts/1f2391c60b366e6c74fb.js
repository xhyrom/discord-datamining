"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46398"],
  {
    259442: function (t) {
      t.exports = "/assets/dec0af8bfca67b6b45b2.svg";
    },
    523794: function (t, e, s) {
      s.r(e),
        s.d(e, {
          default: function () {
            return M;
          },
        });
      var o = s(735250);
      s(470079);
      var i = s(481060),
        a = s(600164),
        n = s(623624),
        l = s(430824),
        d = s(496675),
        r = s(626135),
        u = s(565799),
        c = s(501655),
        _ = s(146085),
        T = s(981631),
        S = s(474936),
        E = s(689938),
        L = s(942942);
      function M(t) {
        var e;
        let s,
          { channel: M, transitionState: I, onClose: B } = t,
          g = l.Z.getGuild(M.guild_id),
          h =
            null !== (e = null == g ? void 0 : g.maxStageVideoChannelUsers) &&
            void 0 !== e
              ? e
              : 0,
          O = !!(null == g ? void 0 : g.isCommunity()),
          C = E.Z.Messages.STAGE_FULL_TITLE,
          f = O
            ? h < T.TU7
            : (null == g ? void 0 : g.premiumTier) !== T.Eu4.TIER_3 &&
              h <= T.eez,
          m = d.Z.can(_.yP, M);
        s =
          O && (null == g ? void 0 : g.premiumTier) === T.Eu4.TIER_3
            ? h <= T.TU7
              ? E.Z.Messages.STAGE_FULL_BOOST_MORE_BODY
              : E.Z.Messages.STAGE_FULL_MAX_BODY
            : f
              ? E.Z.Messages.STAGE_FULL_BODY
              : E.Z.Messages.STAGE_FULL_MAX_BODY;
        let x = () => {
            B(),
              r.default.track(T.rMx.BOOSTING_UPSELL_CLICKED, {
                guild_id: M.guild_id,
                type: S.cd.VIDEO_STAGE_LIMIT,
                is_moderator: m,
                action: S.T7.DISMISS,
              });
          },
          A = u.Z.getMutableParticipants(M.id, c.pV.SPEAKER).filter(
            (t) => t.type === c.Ui.VOICE,
          ).length,
          p = u.Z.getParticipantCount(M.id, c.pV.AUDIENCE);
        return (
          r.default.track(T.rMx.BOOSTING_UPSELL_VIEWED, {
            guild_id: M.guild_id,
            type: S.cd.VIDEO_STAGE_LIMIT,
            is_moderator: m,
            listener_count: A + p,
          }),
          (0, o.jsxs)(i.ModalRoot, {
            size: i.ModalSize.SMALL,
            transitionState: I,
            "aria-label": C,
            children: [
              (0, o.jsxs)(i.ModalHeader, {
                justify: a.Z.Justify.END,
                separator: !1,
                className: L.header,
                children: [
                  (0, o.jsx)("div", { className: L.fullArt }),
                  (0, o.jsx)(i.ModalCloseButton, { onClick: B }),
                ],
              }),
              (0, o.jsxs)(i.ModalContent, {
                className: L.content,
                children: [
                  (0, o.jsx)(i.Heading, {
                    variant: "heading-xl/bold",
                    children: C,
                  }),
                  (0, o.jsx)(i.Text, {
                    variant: "text-md/medium",
                    children: s,
                  }),
                ],
              }),
              (0, o.jsx)(i.ModalFooter, {
                className: L.footer,
                children: f
                  ? (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(i.Button, {
                          look: i.ButtonLooks.LINK,
                          className: L.noThanksButton,
                          color: i.ButtonColors.CUSTOM,
                          size: i.ButtonSizes.SMALL,
                          onClick: x,
                          children: E.Z.Messages.NO_THANKS,
                        }),
                        (0, o.jsx)(i.ShinyButton, {
                          onClick: () => {
                            B(),
                              (0, n.f)({
                                guildId: M.guild_id,
                                location: { section: T.jXE.STAGE_VIDEO_LIMIT },
                              }),
                              r.default.track(T.rMx.BOOSTING_UPSELL_CLICKED, {
                                guild_id: M.guild_id,
                                type: S.cd.VIDEO_STAGE_LIMIT,
                                is_moderator: m,
                                action: S.T7.BOOST,
                              });
                          },
                          size: i.ButtonSizes.SMALL,
                          className: L.boostButton,
                          children: E.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION,
                        }),
                      ],
                    })
                  : (0, o.jsx)(i.Button, {
                      onClick: x,
                      size: i.ButtonSizes.SMALL,
                      color: i.ButtonColors.CUSTOM,
                      className: L.boostButton,
                      children: E.Z.Messages.GOT_IT,
                    }),
              }),
            ],
          })
        );
      }
    },
    942942: function (t, e, s) {
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
//# sourceMappingURL=1f2391c60b366e6c74fb.js.map
