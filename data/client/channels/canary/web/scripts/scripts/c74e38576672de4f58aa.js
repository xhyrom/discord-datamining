"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["1631"],
  {
    505905: function (t, n, e) {
      e.d(n, {
        s: function () {
          return o;
        },
      });
      let o = 60;
    },
    333541: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return S;
          },
        }),
        e(47120);
      var o = e(200651),
        l = e(192379),
        i = e(442837),
        s = e(481060),
        a = e(596454),
        d = e(318766),
        u = e(907040),
        r = e(339085),
        c = e(592125),
        m = e(944486),
        j = e(594174),
        x = e(74538),
        p = e(906605),
        v = e(106301),
        h = e(505905),
        g = e(185923),
        C = e(388032),
        I = e(989576);
      function N(t) {
        let { customStatusEmoji: n, setCustomStatusEmoji: e, onClose: l } = t,
          r = (0, i.e7)([m.Z, c.Z], () =>
            c.Z.getChannel(m.Z.getVoiceChannelId()),
          ),
          j = (t) => {
            var n;
            if (null == t) {
              e(null);
              return;
            }
            e(
              null != t.id
                ? { id: t.id, name: t.name, animated: t.animated }
                : {
                    id: null,
                    name:
                      null !== (n = t.optionallyDiverseSequence) && void 0 !== n
                        ? n
                        : "",
                    animated: !1,
                  },
            );
          };
        return (0, o.jsx)(s.Popout, {
          renderPopout: (t) => {
            var n;
            let { closePopout: e } = t;
            return (0, o.jsx)(u.Z, {
              channel: r,
              guildId:
                null !== (n = null == r ? void 0 : r.guild_id) && void 0 !== n
                  ? n
                  : void 0,
              closePopout: e,
              onSelectEmoji: (t, n) => {
                j(t), n && e();
              },
              pickerIntention: g.Hz.STATUS,
              onNavigateAway: l,
            });
          },
          position: "left",
          animation: s.Popout.Animation.NONE,
          align: "top",
          children: (t, e) => {
            let { isShown: l } = e;
            return (0, o.jsx)(d.Z, {
              ...t,
              active: l,
              className: I.emojiButton,
              tabIndex: 0,
              renderButtonContents:
                null == n
                  ? null
                  : () =>
                      (0, o.jsx)(a.Z, {
                        className: I.emoji,
                        emojiId: n.id,
                        emojiName: n.name,
                        animated: !!n.animated,
                      }),
            });
          },
        });
      }
      function S(t) {
        var n, e;
        let {
            transitionState: i,
            onClose: a,
            startingText: d,
            startingEmoji: u,
          } = t,
          c = v.Z.getCustomHangStatus(),
          m =
            null != d
              ? d
              : null !== (n = null == c ? void 0 : c.status) && void 0 !== n
                ? n
                : "",
          g =
            null !== (e = null == c ? void 0 : c.emoji) && void 0 !== e
              ? e
              : null;
        (null == u ? void 0 : u.id) != null
          ? (g =
              x.ZP.canUseEmojisEverywhere(j.default.getCurrentUser()) &&
              null != r.ZP.getUsableCustomEmojiById(u.id)
                ? u
                : null)
          : (null == u ? void 0 : u.name) != null && (g = u);
        let [S, _] = l.useState(m),
          [B, f] = l.useState(g);
        return (0, o.jsxs)(s.ModalRoot, {
          className: I.modal,
          transitionState: i,
          size: s.ModalSize.DYNAMIC,
          children: [
            (0, o.jsxs)(s.ModalContent, {
              className: I.modalContent,
              children: [
                (0, o.jsx)(s.Button, {
                  "aria-label": C.intl.string(C.t.cpT0Cg),
                  look: s.Button.Looks.BLANK,
                  size: s.Button.Sizes.NONE,
                  onClick: a,
                  className: I.closeButton,
                  children: (0, o.jsx)(s.XSmallIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: I.closeIcon,
                  }),
                }),
                (0, o.jsx)(N, {
                  customStatusEmoji: B,
                  setCustomStatusEmoji: f,
                  onClose: a,
                }),
                (0, o.jsxs)("div", {
                  className: I.customInputGroup,
                  children: [
                    (0, o.jsx)(s.Text, {
                      className: I.leadInText,
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      children: C.intl.string(C.t["74vS//"]),
                    }),
                    (0, o.jsx)(s.TextInput, {
                      className: I.customInput,
                      value: S,
                      onChange: (t) => _(t.substring(0, h.s)),
                      placeholder: C.intl.string(C.t.k6lfDg),
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)(s.ModalFooter, {
              className: I.modalFooter,
              children: [
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)(s.Heading, {
                      variant: "heading-md/semibold",
                      children: C.intl.string(C.t.DD4vJC),
                    }),
                    (0, o.jsx)(s.Text, {
                      color: "text-muted",
                      variant: "text-sm/normal",
                      children: C.intl.string(C.t.YVM22t),
                    }),
                  ],
                }),
                (0, o.jsx)(s.Button, {
                  onClick: () => {
                    let t = S.trim();
                    "" !== t && null != B && ((0, p._s)(t, B, !0), a());
                  },
                  disabled: "" === S.trim() || null == B,
                  children: C.intl.string(C.t.S0ajKC),
                }),
              ],
            }),
          ],
        });
      }
    },
    989576: function (t, n, e) {
      t.exports = {
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
//# sourceMappingURL=c74e38576672de4f58aa.js.map
