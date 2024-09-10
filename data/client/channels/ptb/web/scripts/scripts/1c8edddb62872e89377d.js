"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21971"],
  {
    201049: function (e, n, o) {
      o.r(n),
        o.d(n, {
          default: function () {
            return _;
          },
        }),
        o(47120);
      var l = o(735250),
        t = o(470079),
        a = o(442837),
        i = o(481060),
        s = o(596454),
        u = o(313201),
        d = o(318766),
        r = o(907040),
        c = o(339085),
        m = o(984933),
        j = o(883429),
        C = o(981631),
        h = o(185923),
        v = o(689938),
        x = o(797057);
      function _(e) {
        var n;
        let {
            transitionState: o,
            onClose: _,
            channelId: E,
            guildId: b,
            tag: p,
          } = e,
          N = (0, u.Dt)(),
          g = null != p,
          [T, M] = t.useState(
            null !== (n = null == p ? void 0 : p.name) && void 0 !== n ? n : "",
          ),
          [B, R] = t.useState(
            null != p ? { id: p.emojiId, name: p.emojiName } : null,
          ),
          [k, I] = t.useState(null == p ? void 0 : p.moderated),
          A = (0, a.e7)([c.ZP], () =>
            (null == B ? void 0 : B.id) != null
              ? c.ZP.getUsableCustomEmojiById(B.id)
              : null,
          ),
          f =
            (null == p ? void 0 : p.name) !== T ||
            (null == p ? void 0 : p.emojiId) !== (null == B ? void 0 : B.id) ||
            (null == p ? void 0 : p.emojiName) !==
              (null == B ? void 0 : B.name) ||
            k !== (null == p ? void 0 : p.moderated),
          Z = () => {
            if (null != T && f) {
              if (g) {
                j.Z.updateForumTag(
                  {
                    id: p.id,
                    name: T,
                    emojiId: null == B ? void 0 : B.id,
                    emojiName: null == B ? void 0 : B.name,
                    moderated: k,
                  },
                  E,
                ),
                  _();
                return;
              }
              j.Z.createForumTag(
                {
                  name: T,
                  emojiId: null == B ? void 0 : B.id,
                  emojiName: null == B ? void 0 : B.name,
                  moderated: k,
                },
                E,
              ),
                _();
            }
          },
          O = (e) => {
            null != e &&
              R(
                null != e.id
                  ? { id: e.id, name: e.name }
                  : { id: void 0, name: e.optionallyDiverseSequence },
              );
          },
          D = t.useCallback((e) => M(e), []),
          F = t.createRef();
        return (
          t.useEffect(() => {
            null != F.current && F.current.focus();
          }, []),
          (0, l.jsxs)(i.ModalRoot, {
            transitionState: o,
            "aria-labelledby": N,
            children: [
              (0, l.jsx)(i.ModalHeader, {
                separator: !1,
                children: (0, l.jsx)(i.Heading, {
                  variant: "heading-md/semibold",
                  children: g
                    ? v.Z.Messages.FORUM_TAG_EDIT
                    : v.Z.Messages.FORUM_TAG_CREATE,
                }),
              }),
              (0, l.jsxs)("div", {
                className: x.content,
                children: [
                  (0, l.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    children: v.Z.Messages.FORUM_TAG_CREATE_DESCRIPTION,
                  }),
                  (0, l.jsxs)("div", {
                    className: x.inputContainer,
                    children: [
                      (0, l.jsx)("div", {
                        className: x.emojiButtonContainer,
                        children: (0, l.jsx)(i.Popout, {
                          renderPopout: (e) => {
                            let { closePopout: n } = e,
                              o = m.ZP.getDefaultChannel(b);
                            return (0, l.jsx)(r.Z, {
                              guildId: b,
                              closePopout: n,
                              onSelectEmoji: (e, o) => {
                                O(e), o && n();
                              },
                              pickerIntention: h.Hz.COMMUNITY_CONTENT,
                              onNavigateAway: _,
                              channel: o,
                            });
                          },
                          position: "left",
                          animation: i.Popout.Animation.NONE,
                          align: "bottom",
                          children: (e, n) => {
                            let { isShown: o } = n;
                            return (0, l.jsx)(d.Z, {
                              ...e,
                              onClick: (n) => {
                                var o;
                                null === (o = e.onClick) ||
                                  void 0 === o ||
                                  o.call(e, n);
                              },
                              active: o,
                              className: x.emojiButton,
                              tabIndex: 0,
                              renderButtonContents:
                                null != B && (null != B.id || null != B.name)
                                  ? () =>
                                      (0, l.jsx)(s.Z, {
                                        className: x.emoji,
                                        emojiId: B.id,
                                        emojiName: B.name,
                                        animated: !!(null == A
                                          ? void 0
                                          : A.animated),
                                      })
                                  : null,
                            });
                          },
                        }),
                      }),
                      (0, l.jsx)(i.TextInput, {
                        inputRef: F,
                        maxLength: 20,
                        value: T,
                        inputClassName: x.input,
                        placeholder: v.Z.Messages.FORUM_TAG_CREATE_PLACEHOLDER,
                        onChange: D,
                        autoFocus: !0,
                        onKeyDown: (e) => {
                          e.keyCode === C.yXg.ENTER &&
                            T.length > 0 &&
                            (T.length > 0 && Z(), e.preventDefault());
                        },
                      }),
                      T.length > 0 || null != B
                        ? (0, l.jsx)(i.Button, {
                            "aria-label":
                              v.Z.Messages.FORUM_TAG_EDIT_RESET_LABEL,
                            className: x.clearButton,
                            onClick: () => {
                              M(""), R(null);
                            },
                            look: i.Button.Looks.BLANK,
                            size: i.Button.Sizes.NONE,
                            children: (0, l.jsx)(i.CircleXIcon, {
                              size: "md",
                              color: "currentColor",
                              className: x.clearIcon,
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(i.Checkbox, {
                type: i.Checkbox.Types.INVERTED,
                size: 18,
                value: null != k && k,
                onChange: (e, n) =>
                  I(
                    n || ((null == p ? void 0 : p.moderated) == null && void 0),
                  ),
                className: x.moderatedCheckbox,
                children: (0, l.jsx)(i.Text, {
                  variant: "text-sm/normal",
                  children: v.Z.Messages.FORUM_MODERATED_TAG_CHECKBOX,
                }),
              }),
              (0, l.jsxs)(i.ModalFooter, {
                className: x.footer,
                children: [
                  (0, l.jsxs)("div", {
                    className: x.buttons,
                    children: [
                      (0, l.jsx)(i.Button, {
                        color: i.Button.Colors.PRIMARY,
                        onClick: () => {
                          _();
                        },
                        children: v.Z.Messages.CANCEL,
                      }),
                      (0, l.jsx)(i.Button, {
                        onClick: Z,
                        disabled: 0 === T.length || !f,
                        autoFocus: !0,
                        children: v.Z.Messages.SAVE,
                      }),
                    ],
                  }),
                  g &&
                    (0, l.jsx)(i.Button, {
                      color: i.Button.Colors.RED,
                      look: i.Button.Looks.LINK,
                      onClick: () => {
                        g && (j.Z.deleteForumTag(E, p.id), _());
                      },
                      children: v.Z.Messages.FORUM_TAG_REMOVE,
                    }),
                ],
              }),
            ],
          })
        );
      }
    },
    797057: function (e, n, o) {
      e.exports = {
        footer: "footer_b22487",
        content: "content_b22487",
        buttons: "buttons_b22487",
        inputContainer: "inputContainer_b22487",
        emojiButtonContainer: "emojiButtonContainer_b22487",
        emojiButton: "emojiButton_b22487",
        emoji: "emoji_b22487",
        input: "input_b22487",
        clearButton: "clearButton_b22487",
        clearIcon: "clearIcon_b22487",
        moderatedCheckbox: "moderatedCheckbox_b22487",
      };
    },
  },
]);
//# sourceMappingURL=1c8edddb62872e89377d.js.map
