"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1631"],
  {
    505905: function (e, t, n) {
      n.d(t, {
        s: function () {
          return o;
        },
      });
      let o = 60;
    },
    333541: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return C;
          },
        }),
        n(47120);
      var o = n(735250),
        l = n(470079),
        s = n(442837),
        a = n(481060),
        i = n(596454),
        d = n(318766),
        u = n(907040),
        r = n(339085),
        m = n(592125),
        c = n(944486),
        j = n(594174),
        x = n(74538),
        S = n(906605),
        _ = n(106301),
        T = n(505905),
        p = n(185923),
        v = n(689938),
        I = n(472088);
      function h(e) {
        let { customStatusEmoji: t, setCustomStatusEmoji: n, onClose: l } = e,
          r = (0, s.e7)([c.Z, m.Z], () =>
            m.Z.getChannel(c.Z.getVoiceChannelId()),
          ),
          j = (e) => {
            var t;
            if (null == e) {
              n(null);
              return;
            }
            n(
              null != e.id
                ? { id: e.id, name: e.name, animated: e.animated }
                : {
                    id: null,
                    name:
                      null !== (t = e.optionallyDiverseSequence) && void 0 !== t
                        ? t
                        : "",
                    animated: !1,
                  },
            );
          };
        return (0, o.jsx)(a.Popout, {
          renderPopout: (e) => {
            var t;
            let { closePopout: n } = e;
            return (0, o.jsx)(u.Z, {
              channel: r,
              guildId:
                null !== (t = null == r ? void 0 : r.guild_id) && void 0 !== t
                  ? t
                  : void 0,
              closePopout: n,
              onSelectEmoji: (e, t) => {
                j(e), t && n();
              },
              pickerIntention: p.Hz.STATUS,
              onNavigateAway: l,
            });
          },
          position: "left",
          animation: a.Popout.Animation.NONE,
          align: "top",
          children: (e, n) => {
            let { isShown: l } = n;
            return (0, o.jsx)(d.Z, {
              ...e,
              active: l,
              className: I.emojiButton,
              tabIndex: 0,
              renderButtonContents:
                null == t
                  ? null
                  : () =>
                      (0, o.jsx)(i.Z, {
                        className: I.emoji,
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: !!t.animated,
                      }),
            });
          },
        });
      }
      function C(e) {
        var t, n;
        let {
            transitionState: s,
            onClose: i,
            startingText: d,
            startingEmoji: u,
          } = e,
          m = _.Z.getCustomHangStatus(),
          c =
            null != d
              ? d
              : null !== (t = null == m ? void 0 : m.status) && void 0 !== t
                ? t
                : "",
          p =
            null !== (n = null == m ? void 0 : m.emoji) && void 0 !== n
              ? n
              : null;
        (null == u ? void 0 : u.id) != null
          ? (p =
              x.ZP.canUseEmojisEverywhere(j.default.getCurrentUser()) &&
              null != r.ZP.getUsableCustomEmojiById(u.id)
                ? u
                : null)
          : (null == u ? void 0 : u.name) != null && (p = u);
        let [C, g] = l.useState(c),
          [N, A] = l.useState(p);
        return (0, o.jsxs)(a.ModalRoot, {
          className: I.modal,
          transitionState: s,
          size: a.ModalSize.DYNAMIC,
          children: [
            (0, o.jsxs)(a.ModalContent, {
              className: I.modalContent,
              children: [
                (0, o.jsx)(a.Button, {
                  "aria-label": v.Z.Messages.CLOSE,
                  look: a.Button.Looks.BLANK,
                  size: a.Button.Sizes.NONE,
                  onClick: i,
                  className: I.closeButton,
                  children: (0, o.jsx)(a.XSmallIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: I.closeIcon,
                  }),
                }),
                (0, o.jsx)(h, {
                  customStatusEmoji: N,
                  setCustomStatusEmoji: A,
                  onClose: i,
                }),
                (0, o.jsxs)("div", {
                  className: I.customInputGroup,
                  children: [
                    (0, o.jsx)(a.Text, {
                      className: I.leadInText,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: v.Z.Messages.STATUS_LEAD_IN_JUST,
                    }),
                    (0, o.jsx)(a.TextInput, {
                      className: I.customInput,
                      value: C,
                      onChange: (e) => g(e.substring(0, T.s)),
                      placeholder: v.Z.Messages.CUSTOM_HANG_STATUS_PLACEHOLDER,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)(a.ModalFooter, {
              className: I.modalFooter,
              children: [
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)(a.Heading, {
                      variant: "heading-md/semibold",
                      children: v.Z.Messages.SET_STATUS_MODAL_TITLE,
                    }),
                    (0, o.jsx)(a.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: v.Z.Messages.SET_STATUS_MODAL_SUBTITLE,
                    }),
                  ],
                }),
                (0, o.jsx)(a.Button, {
                  onClick: () => {
                    let e = C.trim();
                    "" !== e && null != N && ((0, S._s)(e, N, !0), i());
                  },
                  disabled: "" === C.trim() || null == N,
                  children: v.Z.Messages.SET_STATUS_MODAL_CTA,
                }),
              ],
            }),
          ],
        });
      }
    },
    472088: function (e, t, n) {
      e.exports = {
        modal: "modal_dd7505",
        closeButton: "closeButton_dd7505",
        closeIcon: "closeIcon_dd7505",
        modalContent: "modalContent_dd7505",
        emojiButton: "emojiButton_dd7505",
        customInputGroup: "customInputGroup_dd7505",
        leadInText: "leadInText_dd7505",
        customInput: "customInput_dd7505",
        emoji: "emoji_dd7505",
        modalFooter: "modalFooter_dd7505",
      };
    },
  },
]);
//# sourceMappingURL=8fa325956009f2fc83ba.js.map
