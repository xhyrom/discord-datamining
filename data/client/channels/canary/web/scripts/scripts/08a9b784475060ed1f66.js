"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["39143"],
  {
    273039: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        o = t(225433),
        a = t(564051);
      function s(e) {
        let { hasSetEmoji: n, onClick: t, children: s } = e,
          [r, d] = i.useState(!1);
        return (0, l.jsxs)("div", {
          className: a.container,
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
            s,
            n &&
              r &&
              (0, l.jsx)(o.Z, { onClick: t, className: a.removeButton }),
          ],
        });
      }
    },
    845606: function (e, n, t) {
      t.d(n, {
        S: function () {
          return i;
        },
        _: function () {
          return l;
        },
      });
      let l = "Guild Welcome Screen",
        i = "hasClickedWelcomeEmojiPicker";
    },
    737868: function (e, n, t) {
      t.r(n), t(47120), t(653041);
      var l = t(200651),
        i = t(192379),
        o = t(442837),
        a = t(433517),
        s = t(481060),
        r = t(596454),
        d = t(410575),
        u = t(933557),
        c = t(471445),
        m = t(600164),
        h = t(313201),
        j = t(318766),
        x = t(907040),
        C = t(273039),
        v = t(339085),
        p = t(592125),
        _ = t(984933),
        f = t(699516),
        N = t(594174),
        g = t(700785),
        S = t(995532),
        T = t(514698),
        B = t(845606),
        E = t(981631),
        k = t(185923),
        Z = t(388032),
        I = t(503332);
      n.default = (e) => {
        var n, t;
        let {
            guildId: b,
            welcomeChannel: P,
            transitionState: H,
            onSave: L,
            onClose: M,
          } = e,
          D = (0, h.Dt)(),
          [A, R] = i.useState(null != P ? P.channel_id : null),
          [O, w] = i.useState(null != P ? P.description : ""),
          [F, y] = i.useState(
            null != P ? { id: P.emoji_id, name: P.emoji_name } : null,
          ),
          [z, K] = i.useState(!1),
          W = (0, o.e7)([v.ZP], () =>
            (null == F ? void 0 : F.id) != null
              ? v.ZP.getUsableCustomEmojiById(F.id)
              : null,
          ),
          G = (0, o.e7)([_.ZP], () => _.ZP.getChannels(b)[_.sH], [b]),
          Y = (0, o.e7)([S.Z], () => S.Z.get(b)),
          U =
            null !==
              (t =
                null == Y
                  ? void 0
                  : null === (n = Y.welcome_channels) || void 0 === n
                    ? void 0
                    : n.map((e) => e.channel_id)) && void 0 !== t
              ? t
              : [],
          [V, q] = i.useState(!1);
        i.useEffect(() => {
          !a.K.get(B.S) && setTimeout(() => q(!0), 300);
        }, []);
        let J = [];
        G.forEach((e) => {
          let { channel: n } = e;
          g.Uu(E.Plq.VIEW_CHANNEL, n) &&
            ((null == P ? void 0 : P.channel_id) === n.id ||
              !U.includes(n.id)) &&
            J.push({ value: n.id, label: (0, u.F6)(n, N.default, f.Z) });
        });
        let X = () => {
            q(!1), M();
          },
          Q = i.useCallback((e) => w(e), []),
          $ = (e) => {
            var n, t, l;
            if (null == e) {
              y(null);
              return;
            }
            y(
              null != e.id
                ? {
                    id: null !== (n = e.id) && void 0 !== n ? n : null,
                    name: null !== (t = e.name) && void 0 !== t ? t : null,
                  }
                : {
                    id: null,
                    name:
                      null !== (l = e.optionallyDiverseSequence) && void 0 !== l
                        ? l
                        : null,
                  },
            );
          },
          ee = i.useCallback(() => {
            a.K.set(B.S, !0), q(!1);
          }, []);
        return (0, l.jsx)(d.Z, {
          page: E.ZY5.CHANNEL_WELCOME_CREATE_MODAL,
          children: (0, l.jsxs)(s.ModalRoot, {
            transitionState: H,
            "aria-labelledby": D,
            children: [
              (0, l.jsxs)("div", {
                className: I.modalContents,
                children: [
                  (0, l.jsx)(s.ModalCloseButton, {
                    onClick: X,
                    className: I.closeButton,
                  }),
                  (0, l.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    className: I.headerText,
                    id: D,
                    children: Z.intl.string(Z.t.cTghws),
                  }),
                  (0, l.jsxs)(s.FormSection, {
                    className: I.__invalid_formGroup,
                    children: [
                      (0, l.jsx)(s.SearchableSelect, {
                        options: J,
                        onChange: (e) => R(e),
                        value: A,
                        renderOptionPrefix: (e) => {
                          var n;
                          if (null === e) return null;
                          let t = e.value,
                            i = p.Z.getChannel(t),
                            o =
                              null !== (n = (0, c.KS)(i)) && void 0 !== n
                                ? n
                                : s.TextIcon;
                          return (0, l.jsx)(o, {
                            className: I.channelTitleIcon,
                            size: "xs",
                            color: "currentColor",
                          });
                        },
                      }),
                      (0, l.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        className: I.formDescription,
                        children: Z.intl.string(Z.t.VV2929),
                      }),
                    ],
                  }),
                  (0, l.jsx)(s.FormDivider, {}),
                  (0, l.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    className: I.headerText,
                    children: Z.intl.string(Z.t.bBw6HR),
                  }),
                  (0, l.jsx)(s.FormSection, {
                    className: I.__invalid_formGroup,
                    children: (0, l.jsx)(s.TextInput, {
                      maxLength: 42,
                      value: O,
                      inputClassName: I.input,
                      placeholder: Z.intl.string(Z.t.h5EOur),
                      onChange: Q,
                    }),
                  }),
                  (0, l.jsx)(s.FormDivider, {}),
                  (0, l.jsx)(s.FormSection, {
                    className: I.__invalid_formGroup,
                    children: (0, l.jsxs)("div", {
                      className: I.emojiSectionContainer,
                      children: [
                        (0, l.jsxs)("div", {
                          className: I.emojiTitleContainer,
                          children: [
                            (0, l.jsx)(s.Heading, {
                              variant: "heading-md/semibold",
                              children: Z.intl.string(Z.t.HHniMT),
                            }),
                            (0, l.jsx)(s.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: Z.intl.string(Z.t.c4mfl5),
                            }),
                          ],
                        }),
                        (0, l.jsx)(C.Z, {
                          hasSetEmoji: null != F,
                          onClick: $,
                          children: (0, l.jsx)(s.Popout, {
                            renderPopout: (e) => {
                              let { closePopout: n } = e,
                                t = _.ZP.getDefaultChannel(b);
                              return (0, l.jsx)(x.Z, {
                                guildId: b,
                                closePopout: n,
                                onSelectEmoji: (e, t) => {
                                  $(e), t && (n(), null == e && X());
                                },
                                pickerIntention: k.Hz.COMMUNITY_CONTENT,
                                onNavigateAway: X,
                                channel: t,
                              });
                            },
                            position: "left",
                            animation: s.Popout.Animation.NONE,
                            align: "bottom",
                            children: (e, n) => {
                              let { isShown: t } = n;
                              return (0, l.jsx)(s.TooltipContainer, {
                                color: s.TooltipColors.BRAND,
                                tooltipClassName: I.tooltip,
                                position: "left",
                                text: V ? Z.intl.string(Z.t.YL3nfH) : null,
                                forceOpen: V,
                                children: (0, l.jsx)(j.Z, {
                                  ...e,
                                  onClick: (n) => {
                                    var t;
                                    ee(),
                                      null === (t = e.onClick) ||
                                        void 0 === t ||
                                        t.call(e, n);
                                  },
                                  active: t,
                                  className: I.emojiButton,
                                  tabIndex: 0,
                                  renderButtonContents:
                                    null != F &&
                                    (null != F.id || null != F.name)
                                      ? () =>
                                          (0, l.jsx)(r.Z, {
                                            className: I.emoji,
                                            emojiId: F.id,
                                            emojiName: F.name,
                                            animated: !!(null == W
                                              ? void 0
                                              : W.animated),
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
              (0, l.jsxs)(s.ModalFooter, {
                className: I.footer,
                justify: m.Z.Justify.BETWEEN,
                children: [
                  (0, l.jsxs)(m.Z, {
                    grow: 0,
                    align: m.Z.Align.CENTER,
                    children: [
                      (0, l.jsx)(s.Button, {
                        onClick: X,
                        size: s.Button.Sizes.SMALL,
                        look: s.Button.Looks.LINK,
                        color: s.Button.Colors.PRIMARY,
                        children: Z.intl.string(Z.t["ETE/oK"]),
                      }),
                      (0, l.jsx)(s.Button, {
                        onClick: () => {
                          null != A &&
                            O.length > 0 &&
                            L({
                              channel_id: A,
                              description: O,
                              emoji_id: null == F ? void 0 : F.id,
                              emoji_name: null == F ? void 0 : F.name,
                            }),
                            X();
                        },
                        disabled: null == A || 0 === O.length,
                        children: Z.intl.string(Z.t.R3BPHx),
                      }),
                    ],
                  }),
                  null != P &&
                    (0, l.jsx)(s.Button, {
                      onClick: () => {
                        K(!0);
                      },
                      size: s.Button.Sizes.MIN,
                      look: s.Button.Looks.LINK,
                      color: s.Button.Colors.RED,
                      children: Z.intl.string(Z.t.N86XcH),
                    }),
                ],
              }),
              z &&
                (0, l.jsx)(T.Z, {
                  onConfirm: () => {
                    L(), X();
                  },
                  onCancel: () => K(!1),
                  channelId: A,
                }),
            ],
          }),
        });
      };
    },
    564051: function (e, n, t) {
      e.exports = {
        container: "container_dcd0fd",
        removeButton: "removeButton_dcd0fd",
      };
    },
    503332: function (e, n, t) {
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
//# sourceMappingURL=08a9b784475060ed1f66.js.map
