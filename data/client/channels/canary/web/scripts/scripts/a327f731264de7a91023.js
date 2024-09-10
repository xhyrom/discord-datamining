"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["80404"],
  {
    158586: function (e, o, t) {
      t.r(o), t(47120);
      var i = t(735250),
        a = t(470079),
        n = t(481060),
        l = t(787014),
        s = t(907040),
        d = t(946458),
        r = t(185923),
        c = t(689938),
        m = t(880584);
      o.default = (e) => {
        var o, t, u;
        let { channel: j, onClose: N, transitionState: _ } = e,
          [h, x] = a.useState(
            null !== (u = j.defaultReactionEmoji) && void 0 !== u ? u : null,
          ),
          [v, E] = a.useState(!1),
          [M, b] = a.useState(!1),
          R =
            (null === (o = j.defaultReactionEmoji) || void 0 === o
              ? void 0
              : o.emojiId) !== (null == h ? void 0 : h.emojiId) ||
            (null === (t = j.defaultReactionEmoji) || void 0 === t
              ? void 0
              : t.emojiName) !== (null == h ? void 0 : h.emojiName),
          L = (e) => {
            x(
              null == e
                ? null
                : (null == e ? void 0 : e.id) != null
                  ? { emojiId: e.id, emojiName: void 0 }
                  : { emojiId: void 0, emojiName: e.optionallyDiverseSequence },
            );
          },
          p = async () => {
            if (!!R) {
              E(!0), b(!1);
              try {
                await (0, l.wk)(j.id, { defaultReactionEmoji: h }), N();
              } catch (e) {
                b(!0);
              } finally {
                E(!1);
              }
            }
          };
        return (0, i.jsxs)(n.ModalRoot, {
          transitionState: _,
          "aria-label":
            c.Z.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_TITLE,
          children: [
            (0, i.jsx)(n.ModalHeader, {
              separator: !1,
              className: m.modalHeader,
              children: (0, i.jsx)(n.Heading, {
                variant: "heading-md/semibold",
                children:
                  c.Z.Messages
                    .FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_TITLE,
              }),
            }),
            (0, i.jsxs)(n.ModalContent, {
              children: [
                (0, i.jsx)(n.Text, {
                  variant: "text-sm/medium",
                  className: m.subtitle,
                  children:
                    c.Z.Messages
                      .FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_DESCRIPTION,
                }),
                (0, i.jsx)(d.Z, { reactionEmoji: h }),
                (0, i.jsxs)("div", {
                  className: m.buttonRow,
                  children: [
                    (0, i.jsx)(n.Popout, {
                      renderPopout: (e) => {
                        let { closePopout: o } = e;
                        return (0, i.jsx)(s.Z, {
                          guildId: null == j ? void 0 : j.guild_id,
                          closePopout: o,
                          onSelectEmoji: (e, t) => {
                            L(e), t && o();
                          },
                          pickerIntention: r.Hz.COMMUNITY_CONTENT,
                          channel: j,
                        });
                      },
                      position: "right",
                      animation: n.Popout.Animation.NONE,
                      align: "center",
                      children: (e) =>
                        (0, i.jsx)(n.Button, {
                          ...e,
                          size: n.Button.Sizes.SMALL,
                          onClick: (o) => {
                            var t;
                            null === (t = e.onClick) ||
                              void 0 === t ||
                              t.call(e, o);
                          },
                          children: c.Z.Messages.SELECT_EMOJI,
                        }),
                    }),
                    null != j.defaultReactionEmoji
                      ? (0, i.jsx)(n.Button, {
                          className: m.removeButton,
                          onClick: () => L(null),
                          size: n.Button.Sizes.MIN,
                          look: n.Button.Looks.LINK,
                          color: n.Button.Colors.RED,
                          children: c.Z.Messages.REMOVE,
                        })
                      : null,
                  ],
                }),
                M
                  ? (0, i.jsx)("div", {
                      className: m.__invalid_row,
                      children: (0, i.jsx)(n.Text, {
                        variant: "text-sm/normal",
                        color: "text-danger",
                        children:
                          c.Z.Messages
                            .FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_ERROR,
                      }),
                    })
                  : null,
              ],
            }),
            (0, i.jsxs)(n.ModalFooter, {
              className: m.__invalid_footer,
              children: [
                (0, i.jsx)(n.Button, {
                  type: "submit",
                  color: n.Button.Colors.BRAND,
                  size: n.Button.Sizes.SMALL,
                  className: m.button,
                  onClick: p,
                  disabled: !R,
                  submitting: v,
                  autoFocus: !0,
                  children: c.Z.Messages.SAVE,
                }),
                (0, i.jsx)(n.Button, {
                  color: n.Button.Colors.PRIMARY,
                  size: n.Button.Sizes.SMALL,
                  className: m.button,
                  onClick: N,
                  children: c.Z.Messages.CANCEL,
                }),
              ],
            }),
          ],
        });
      };
    },
    946458: function (e, o, t) {
      t.d(o, {
        Z: function () {
          return r;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(442837),
        n = t(481060),
        l = t(596454),
        s = t(339085),
        d = t(259605);
      function r(e) {
        let { reactionEmoji: o } = e,
          t = (0, a.e7)([s.ZP], () =>
            (null == o ? void 0 : o.emojiId) != null
              ? s.ZP.getUsableCustomEmojiById(o.emojiId)
              : null,
          );
        return (0, i.jsxs)("div", {
          className: d.container,
          children: [
            (0, i.jsxs)("div", {
              className: d.body,
              children: [
                (0, i.jsxs)("div", {
                  className: d.placeholderLines,
                  children: [
                    (0, i.jsx)(c, { width: "100%", marginBottom: 8 }),
                    (0, i.jsx)(c, { width: "80%", marginBottom: 16 }),
                    (0, i.jsx)(c, { width: "50%", marginBottom: 8 }),
                    (0, i.jsx)(c, { width: "60%", marginBottom: 16 }),
                  ],
                }),
                (0, i.jsx)("div", { className: d.placeholderMedia }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: d.footer,
              children: [
                (0, i.jsxs)("div", {
                  className: d.reaction,
                  children: [
                    null != o
                      ? (0, i.jsx)(l.Z, {
                          className: d.reactionEmote,
                          emojiId: o.emojiId,
                          emojiName: o.emojiName,
                          animated: !!(null == t ? void 0 : t.animated),
                        })
                      : (0, i.jsx)(n.ReactionIcon, {
                          size: "sm",
                          color: "currentColor",
                          className: d.reactionEmote,
                        }),
                    (0, i.jsx)(n.Text, {
                      variant: "text-sm/semibold",
                      color: "interactive-normal",
                      children: 17,
                    }),
                  ],
                }),
                (0, i.jsx)(c, { width: "24px", marginBottom: 0 }),
                (0, i.jsx)("div", { className: d.dot }),
                (0, i.jsx)(c, { width: "24px", marginBottom: 0 }),
              ],
            }),
          ],
        });
      }
      function c(e) {
        let { width: o, marginBottom: t } = e;
        return (0, i.jsx)("div", {
          className: d.placeholderLine,
          style: { width: o, marginBottom: t },
        });
      }
    },
    880584: function (e, o, t) {
      e.exports = {
        modalHeader: "modalHeader_dea185",
        subtitle: "subtitle_dea185",
        buttonRow: "buttonRow_dea185",
        removeButton: "removeButton_dea185",
        button: "button_dea185",
      };
    },
    259605: function (e, o, t) {
      e.exports = {
        container: "container_b36404",
        body: "body_b36404",
        footer: "footer_b36404",
        placeholderLines: "placeholderLines_b36404",
        placeholderLine: "placeholderLine_b36404",
        placeholderMedia: "placeholderMedia_b36404",
        reaction: "reaction_b36404",
        reactionEmote: "reactionEmote_b36404",
        dot: "dot_b36404",
      };
    },
  },
]);
//# sourceMappingURL=a327f731264de7a91023.js.map
