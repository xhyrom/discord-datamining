"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39143"],
  {
    273039: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return a;
        },
      }),
        l(47120);
      var o = l(735250),
        t = l(470079),
        i = l(225433),
        s = l(655303);
      function a(e) {
        let { hasSetEmoji: n, onClick: l, children: a } = e,
          [r, d] = t.useState(!1);
        return (0, o.jsxs)("div", {
          className: s.container,
          onMouseEnter: () => {
            if (n) {
              d(!0);
              return;
            }
            d(!1);
          },
          onMouseLeave: () => {
            d(!1);
          },
          children: [
            a,
            n &&
              r &&
              (0, o.jsx)(i.Z, { onClick: l, className: s.removeButton }),
          ],
        });
      }
    },
    845606: function (e, n, l) {
      l.d(n, {
        S: function () {
          return t;
        },
        _: function () {
          return o;
        },
      });
      let o = "Guild Welcome Screen",
        t = "hasClickedWelcomeEmojiPicker";
    },
    737868: function (e, n, l) {
      l.r(n), l(47120), l(653041);
      var o = l(735250),
        t = l(470079),
        i = l(442837),
        s = l(433517),
        a = l(481060),
        r = l(596454),
        d = l(410575),
        u = l(933557),
        c = l(471445),
        m = l(600164),
        _ = l(313201),
        C = l(318766),
        E = l(907040),
        h = l(273039),
        j = l(339085),
        x = l(592125),
        N = l(984933),
        I = l(699516),
        v = l(594174),
        S = l(700785),
        L = l(995532),
        p = l(514698),
        T = l(845606),
        f = l(981631),
        g = l(185923),
        M = l(689938),
        Z = l(169876);
      n.default = (e) => {
        var n, l;
        let {
            guildId: B,
            welcomeChannel: P,
            transitionState: O,
            onSave: k,
            onClose: D,
          } = e,
          A = (0, _.Dt)(),
          [G, U] = t.useState(null != P ? P.channel_id : null),
          [b, W] = t.useState(null != P ? P.description : ""),
          [H, R] = t.useState(
            null != P ? { id: P.emoji_id, name: P.emoji_name } : null,
          ),
          [K, F] = t.useState(!1),
          y = (0, i.e7)([j.ZP], () =>
            (null == H ? void 0 : H.id) != null
              ? j.ZP.getUsableCustomEmojiById(H.id)
              : null,
          ),
          z = (0, i.e7)([N.ZP], () => N.ZP.getChannels(B)[N.sH], [B]),
          w = (0, i.e7)([L.Z], () => L.Z.get(B)),
          J =
            null !==
              (l =
                null == w
                  ? void 0
                  : null === (n = w.welcome_channels) || void 0 === n
                    ? void 0
                    : n.map((e) => e.channel_id)) && void 0 !== l
              ? l
              : [],
          [V, Y] = t.useState(!1);
        t.useEffect(() => {
          !s.K.get(T.S) && setTimeout(() => Y(!0), 300);
        }, []);
        let q = [];
        z.forEach((e) => {
          let { channel: n } = e;
          S.Uu(f.Plq.VIEW_CHANNEL, n) &&
            ((null == P ? void 0 : P.channel_id) === n.id ||
              !J.includes(n.id)) &&
            q.push({ value: n.id, label: (0, u.F6)(n, v.default, I.Z) });
        });
        let Q = () => {
            Y(!1), D();
          },
          X = t.useCallback((e) => W(e), []),
          $ = (e) => {
            var n, l, o;
            if (null == e) {
              R(null);
              return;
            }
            R(
              null != e.id
                ? {
                    id: null !== (n = e.id) && void 0 !== n ? n : null,
                    name: null !== (l = e.name) && void 0 !== l ? l : null,
                  }
                : {
                    id: null,
                    name:
                      null !== (o = e.optionallyDiverseSequence) && void 0 !== o
                        ? o
                        : null,
                  },
            );
          },
          ee = t.useCallback(() => {
            s.K.set(T.S, !0), Y(!1);
          }, []);
        return (0, o.jsx)(d.Z, {
          page: f.ZY5.CHANNEL_WELCOME_CREATE_MODAL,
          children: (0, o.jsxs)(a.ModalRoot, {
            transitionState: O,
            "aria-labelledby": A,
            children: [
              (0, o.jsxs)("div", {
                className: Z.modalContents,
                children: [
                  (0, o.jsx)(a.ModalCloseButton, {
                    onClick: Q,
                    className: Z.closeButton,
                  }),
                  (0, o.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    className: Z.headerText,
                    id: A,
                    children:
                      M.Z.Messages
                        .GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL,
                  }),
                  (0, o.jsxs)(a.FormSection, {
                    className: Z.__invalid_formGroup,
                    children: [
                      (0, o.jsx)(a.SearchableSelect, {
                        options: q,
                        onChange: (e) => U(e),
                        value: G,
                        renderOptionPrefix: (e) => {
                          var n;
                          if (null === e) return null;
                          let l = e.value,
                            t = x.Z.getChannel(l),
                            i =
                              null !== (n = (0, c.KS)(t)) && void 0 !== n
                                ? n
                                : a.TextIcon;
                          return (0, o.jsx)(i, {
                            className: Z.channelTitleIcon,
                            size: "xs",
                            color: "currentColor",
                          });
                        },
                      }),
                      (0, o.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        className: Z.formDescription,
                        children:
                          M.Z.Messages
                            .GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS,
                      }),
                    ],
                  }),
                  (0, o.jsx)(a.FormDivider, {}),
                  (0, o.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    className: Z.headerText,
                    children:
                      M.Z.Messages
                        .GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION,
                  }),
                  (0, o.jsx)(a.FormSection, {
                    className: Z.__invalid_formGroup,
                    children: (0, o.jsx)(a.TextInput, {
                      maxLength: 42,
                      value: b,
                      inputClassName: Z.input,
                      placeholder:
                        M.Z.Messages
                          .GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,
                      onChange: X,
                    }),
                  }),
                  (0, o.jsx)(a.FormDivider, {}),
                  (0, o.jsx)(a.FormSection, {
                    className: Z.__invalid_formGroup,
                    children: (0, o.jsxs)("div", {
                      className: Z.emojiSectionContainer,
                      children: [
                        (0, o.jsxs)("div", {
                          className: Z.emojiTitleContainer,
                          children: [
                            (0, o.jsx)(a.Heading, {
                              variant: "heading-md/semibold",
                              children:
                                M.Z.Messages
                                  .GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI,
                            }),
                            (0, o.jsx)(a.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children:
                                M.Z.Messages
                                  .GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL,
                            }),
                          ],
                        }),
                        (0, o.jsx)(h.Z, {
                          hasSetEmoji: null != H,
                          onClick: $,
                          children: (0, o.jsx)(a.Popout, {
                            renderPopout: (e) => {
                              let { closePopout: n } = e,
                                l = N.ZP.getDefaultChannel(B);
                              return (0, o.jsx)(E.Z, {
                                guildId: B,
                                closePopout: n,
                                onSelectEmoji: (e, l) => {
                                  $(e), l && (n(), null == e && Q());
                                },
                                pickerIntention: g.Hz.COMMUNITY_CONTENT,
                                onNavigateAway: Q,
                                channel: l,
                              });
                            },
                            position: "left",
                            animation: a.Popout.Animation.NONE,
                            align: "bottom",
                            children: (e, n) => {
                              let { isShown: l } = n;
                              return (0, o.jsx)(a.TooltipContainer, {
                                color: a.TooltipColors.BRAND,
                                tooltipClassName: Z.tooltip,
                                position: "left",
                                text: V
                                  ? M.Z.Messages
                                      .WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP
                                  : null,
                                forceOpen: V,
                                children: (0, o.jsx)(C.Z, {
                                  ...e,
                                  onClick: (n) => {
                                    var l;
                                    ee(),
                                      null === (l = e.onClick) ||
                                        void 0 === l ||
                                        l.call(e, n);
                                  },
                                  active: l,
                                  className: Z.emojiButton,
                                  tabIndex: 0,
                                  renderButtonContents:
                                    null != H &&
                                    (null != H.id || null != H.name)
                                      ? () =>
                                          (0, o.jsx)(r.Z, {
                                            className: Z.emoji,
                                            emojiId: H.id,
                                            emojiName: H.name,
                                            animated: !!(null == y
                                              ? void 0
                                              : y.animated),
                                          })
                                      : null,
                                }),
                              });
                            },
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, o.jsxs)(a.ModalFooter, {
                className: Z.footer,
                justify: m.Z.Justify.BETWEEN,
                children: [
                  (0, o.jsxs)(m.Z, {
                    grow: 0,
                    align: m.Z.Align.CENTER,
                    children: [
                      (0, o.jsx)(a.Button, {
                        onClick: Q,
                        size: a.Button.Sizes.SMALL,
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.PRIMARY,
                        children: M.Z.Messages.CANCEL,
                      }),
                      (0, o.jsx)(a.Button, {
                        onClick: () => {
                          null != G &&
                            b.length > 0 &&
                            k({
                              channel_id: G,
                              description: b,
                              emoji_id: null == H ? void 0 : H.id,
                              emoji_name: null == H ? void 0 : H.name,
                            }),
                            Q();
                        },
                        disabled: null == G || 0 === b.length,
                        children: M.Z.Messages.SAVE,
                      }),
                    ],
                  }),
                  null != P &&
                    (0, o.jsx)(a.Button, {
                      onClick: () => {
                        F(!0);
                      },
                      size: a.Button.Sizes.MIN,
                      look: a.Button.Looks.LINK,
                      color: a.Button.Colors.RED,
                      children: M.Z.Messages.REMOVE,
                    }),
                ],
              }),
              K &&
                (0, o.jsx)(p.Z, {
                  onConfirm: () => {
                    k(), Q();
                  },
                  onCancel: () => F(!1),
                  channelId: G,
                }),
            ],
          }),
        });
      };
    },
    655303: function (e, n, l) {
      e.exports = {
        container: "container_dcd0fd",
        removeButton: "removeButton_dcd0fd",
      };
    },
    169876: function (e, n, l) {
      e.exports = {
        closeButton: "closeButton_d0957e",
        modalContents: "modalContents_d0957e",
        headerText: "headerText_d0957e",
        formDescription: "formDescription_d0957e",
        emojiTitleContainer: "emojiTitleContainer_d0957e",
        emojiSectionContainer: "emojiSectionContainer_d0957e",
        emojiButton: "emojiButton_d0957e",
        emoji: "emoji_d0957e",
        input: "input_d0957e",
        footer: "footer_d0957e",
        tooltip: "tooltip_d0957e",
        channelTitleIcon: "channelTitleIcon_d0957e",
      };
    },
  },
]);
//# sourceMappingURL=573607d1ff5a95c61dc5.js.map
