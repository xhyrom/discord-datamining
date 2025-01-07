"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21971"],
  {
    915774: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return p;
          },
        }),
        t(47120);
      var o = t(200651),
        l = t(192379),
        i = t(442837),
        a = t(481060),
        u = t(596454),
        r = t(493773),
        d = t(313201),
        s = t(318766),
        c = t(907040),
        m = t(339085),
        j = t(984933),
        h = t(883429),
        v = t(981631),
        x = t(185923),
        C = t(388032),
        b = t(866878);
      function p(e) {
        var n;
        let {
            transitionState: t,
            onClose: p,
            channelId: g,
            guildId: N,
            tag: k,
          } = e,
          B = (0, d.Dt)(),
          I = null != k,
          [f, _] = l.useState(
            null !== (n = null == k ? void 0 : k.name) && void 0 !== n ? n : "",
          ),
          [T, E] = l.useState(
            null != k ? { id: k.emojiId, name: k.emojiName } : null,
          ),
          [Z, R] = l.useState(null == k ? void 0 : k.moderated),
          y = (0, i.e7)([m.ZP], () =>
            (null == T ? void 0 : T.id) != null
              ? m.ZP.getUsableCustomEmojiById(T.id)
              : null,
          ),
          P =
            (null == k ? void 0 : k.name) !== f ||
            (null == k ? void 0 : k.emojiId) !== (null == T ? void 0 : T.id) ||
            (null == k ? void 0 : k.emojiName) !==
              (null == T ? void 0 : T.name) ||
            Z !== (null == k ? void 0 : k.moderated),
          M = () => {
            if (null != f && P) {
              if (I) {
                h.Z.updateForumTag(
                  {
                    id: k.id,
                    name: f,
                    emojiId: null == T ? void 0 : T.id,
                    emojiName: null == T ? void 0 : T.name,
                    moderated: Z,
                  },
                  g,
                ),
                  p();
                return;
              }
              h.Z.createForumTag(
                {
                  name: f,
                  emojiId: null == T ? void 0 : T.id,
                  emojiName: null == T ? void 0 : T.name,
                  moderated: Z,
                },
                g,
              ),
                p();
            }
          },
          S = (e) => {
            null != e &&
              E(
                null != e.id
                  ? { id: e.id, name: e.name }
                  : { id: void 0, name: e.optionallyDiverseSequence },
              );
          },
          D = l.useCallback((e) => _(e), []),
          H = l.createRef();
        return (
          (0, r.Z)(() => {
            null != H.current && H.current.focus();
          }),
          (0, o.jsxs)(a.ModalRoot, {
            transitionState: t,
            "aria-labelledby": B,
            children: [
              (0, o.jsx)(a.ModalHeader, {
                separator: !1,
                children: (0, o.jsx)(a.Heading, {
                  variant: "heading-md/semibold",
                  children: I
                    ? C.intl.string(C.t.zeVg5e)
                    : C.intl.string(C.t["/jubeH"]),
                }),
              }),
              (0, o.jsxs)("div", {
                className: b.content,
                children: [
                  (0, o.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: C.intl.string(C.t["3v8kZG"]),
                  }),
                  (0, o.jsxs)("div", {
                    className: b.inputContainer,
                    children: [
                      (0, o.jsx)("div", {
                        className: b.emojiButtonContainer,
                        children: (0, o.jsx)(a.Popout, {
                          renderPopout: (e) => {
                            let { closePopout: n } = e,
                              t = j.ZP.getDefaultChannel(N);
                            return (0, o.jsx)(c.Z, {
                              guildId: N,
                              closePopout: n,
                              onSelectEmoji: (e, t) => {
                                S(e), t && n();
                              },
                              pickerIntention: x.Hz.COMMUNITY_CONTENT,
                              onNavigateAway: p,
                              channel: t,
                            });
                          },
                          position: "left",
                          animation: a.Popout.Animation.NONE,
                          align: "bottom",
                          children: (e, n) => {
                            let { isShown: t } = n;
                            return (0, o.jsx)(s.Z, {
                              ...e,
                              onClick: (n) => {
                                var t;
                                null === (t = e.onClick) ||
                                  void 0 === t ||
                                  t.call(e, n);
                              },
                              active: t,
                              className: b.emojiButton,
                              tabIndex: 0,
                              renderButtonContents:
                                null != T && (null != T.id || null != T.name)
                                  ? () =>
                                      (0, o.jsx)(u.Z, {
                                        className: b.emoji,
                                        emojiId: T.id,
                                        emojiName: T.name,
                                        animated: !!(null == y
                                          ? void 0
                                          : y.animated),
                                      })
                                  : null,
                            });
                          },
                        }),
                      }),
                      (0, o.jsx)(a.TextInput, {
                        inputRef: H,
                        maxLength: 20,
                        value: f,
                        inputClassName: b.input,
                        placeholder: C.intl.string(C.t["5vpeb2"]),
                        onChange: D,
                        autoFocus: !0,
                        onKeyDown: (e) => {
                          e.keyCode === v.yXg.ENTER &&
                            f.length > 0 &&
                            (f.length > 0 && M(), e.preventDefault());
                        },
                      }),
                      f.length > 0 || null != T
                        ? (0, o.jsx)(a.Button, {
                            "aria-label": C.intl.string(C.t.o8lsHR),
                            className: b.clearButton,
                            onClick: () => {
                              _(""), E(null);
                            },
                            look: a.Button.Looks.BLANK,
                            size: a.Button.Sizes.NONE,
                            children: (0, o.jsx)(a.CircleXIcon, {
                              size: "md",
                              color: "currentColor",
                              className: b.clearIcon,
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, o.jsx)(a.Checkbox, {
                type: a.Checkbox.Types.INVERTED,
                size: 18,
                value: null != Z && Z,
                onChange: (e, n) =>
                  R(
                    n || ((null == k ? void 0 : k.moderated) == null && void 0),
                  ),
                className: b.moderatedCheckbox,
                children: (0, o.jsx)(a.Text, {
                  variant: "text-sm/normal",
                  children: C.intl.string(C.t["rMH+rq"]),
                }),
              }),
              (0, o.jsxs)(a.ModalFooter, {
                className: b.footer,
                children: [
                  (0, o.jsxs)("div", {
                    className: b.buttons,
                    children: [
                      (0, o.jsx)(a.Button, {
                        color: a.Button.Colors.PRIMARY,
                        onClick: () => {
                          p();
                        },
                        children: C.intl.string(C.t["ETE/oK"]),
                      }),
                      (0, o.jsx)(a.Button, {
                        onClick: M,
                        disabled: 0 === f.length || !P,
                        autoFocus: !0,
                        children: C.intl.string(C.t.R3BPHx),
                      }),
                    ],
                  }),
                  I &&
                    (0, o.jsx)(a.Button, {
                      color: a.Button.Colors.RED,
                      look: a.Button.Looks.LINK,
                      onClick: () => {
                        I && (h.Z.deleteForumTag(g, k.id), p());
                      },
                      children: C.intl.string(C.t.huYSMj),
                    }),
                ],
              }),
            ],
          })
        );
      }
    },
    866878: function (e, n, t) {
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
//# sourceMappingURL=7fbb0e73f743a102f96e.js.map
