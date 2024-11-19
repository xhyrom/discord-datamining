"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21971"],
  {
    915774: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return b;
          },
        }),
        t(47120);
      var o = t(200651),
        l = t(192379),
        i = t(442837),
        a = t(481060),
        u = t(596454),
        r = t(313201),
        d = t(318766),
        s = t(907040),
        c = t(339085),
        m = t(984933),
        j = t(883429),
        h = t(981631),
        v = t(185923),
        x = t(388032),
        C = t(797057);
      function b(e) {
        var n;
        let {
            transitionState: t,
            onClose: b,
            channelId: p,
            guildId: g,
            tag: N,
          } = e,
          k = (0, r.Dt)(),
          B = null != N,
          [f, I] = l.useState(
            null !== (n = null == N ? void 0 : N.name) && void 0 !== n ? n : "",
          ),
          [_, E] = l.useState(
            null != N ? { id: N.emojiId, name: N.emojiName } : null,
          ),
          [T, R] = l.useState(null == N ? void 0 : N.moderated),
          Z = (0, i.e7)([c.ZP], () =>
            (null == _ ? void 0 : _.id) != null
              ? c.ZP.getUsableCustomEmojiById(_.id)
              : null,
          ),
          y =
            (null == N ? void 0 : N.name) !== f ||
            (null == N ? void 0 : N.emojiId) !== (null == _ ? void 0 : _.id) ||
            (null == N ? void 0 : N.emojiName) !==
              (null == _ ? void 0 : _.name) ||
            T !== (null == N ? void 0 : N.moderated),
          P = () => {
            if (null != f && y) {
              if (B) {
                j.Z.updateForumTag(
                  {
                    id: N.id,
                    name: f,
                    emojiId: null == _ ? void 0 : _.id,
                    emojiName: null == _ ? void 0 : _.name,
                    moderated: T,
                  },
                  p,
                ),
                  b();
                return;
              }
              j.Z.createForumTag(
                {
                  name: f,
                  emojiId: null == _ ? void 0 : _.id,
                  emojiName: null == _ ? void 0 : _.name,
                  moderated: T,
                },
                p,
              ),
                b();
            }
          },
          M = (e) => {
            null != e &&
              E(
                null != e.id
                  ? { id: e.id, name: e.name }
                  : { id: void 0, name: e.optionallyDiverseSequence },
              );
          },
          S = l.useCallback((e) => I(e), []),
          D = l.createRef();
        return (
          l.useEffect(() => {
            null != D.current && D.current.focus();
          }, []),
          (0, o.jsxs)(a.ModalRoot, {
            transitionState: t,
            "aria-labelledby": k,
            children: [
              (0, o.jsx)(a.ModalHeader, {
                separator: !1,
                children: (0, o.jsx)(a.Heading, {
                  variant: "heading-md/semibold",
                  children: B
                    ? x.intl.string(x.t.zeVg5e)
                    : x.intl.string(x.t["/jubeH"]),
                }),
              }),
              (0, o.jsxs)("div", {
                className: C.content,
                children: [
                  (0, o.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: x.intl.string(x.t["3v8kZG"]),
                  }),
                  (0, o.jsxs)("div", {
                    className: C.inputContainer,
                    children: [
                      (0, o.jsx)("div", {
                        className: C.emojiButtonContainer,
                        children: (0, o.jsx)(a.Popout, {
                          renderPopout: (e) => {
                            let { closePopout: n } = e,
                              t = m.ZP.getDefaultChannel(g);
                            return (0, o.jsx)(s.Z, {
                              guildId: g,
                              closePopout: n,
                              onSelectEmoji: (e, t) => {
                                M(e), t && n();
                              },
                              pickerIntention: v.Hz.COMMUNITY_CONTENT,
                              onNavigateAway: b,
                              channel: t,
                            });
                          },
                          position: "left",
                          animation: a.Popout.Animation.NONE,
                          align: "bottom",
                          children: (e, n) => {
                            let { isShown: t } = n;
                            return (0, o.jsx)(d.Z, {
                              ...e,
                              onClick: (n) => {
                                var t;
                                null === (t = e.onClick) ||
                                  void 0 === t ||
                                  t.call(e, n);
                              },
                              active: t,
                              className: C.emojiButton,
                              tabIndex: 0,
                              renderButtonContents:
                                null != _ && (null != _.id || null != _.name)
                                  ? () =>
                                      (0, o.jsx)(u.Z, {
                                        className: C.emoji,
                                        emojiId: _.id,
                                        emojiName: _.name,
                                        animated: !!(null == Z
                                          ? void 0
                                          : Z.animated),
                                      })
                                  : null,
                            });
                          },
                        }),
                      }),
                      (0, o.jsx)(a.TextInput, {
                        inputRef: D,
                        maxLength: 20,
                        value: f,
                        inputClassName: C.input,
                        placeholder: x.intl.string(x.t["5vpeb2"]),
                        onChange: S,
                        autoFocus: !0,
                        onKeyDown: (e) => {
                          e.keyCode === h.yXg.ENTER &&
                            f.length > 0 &&
                            (f.length > 0 && P(), e.preventDefault());
                        },
                      }),
                      f.length > 0 || null != _
                        ? (0, o.jsx)(a.Button, {
                            "aria-label": x.intl.string(x.t.o8lsHR),
                            className: C.clearButton,
                            onClick: () => {
                              I(""), E(null);
                            },
                            look: a.Button.Looks.BLANK,
                            size: a.Button.Sizes.NONE,
                            children: (0, o.jsx)(a.CircleXIcon, {
                              size: "md",
                              color: "currentColor",
                              className: C.clearIcon,
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
                value: null != T && T,
                onChange: (e, n) =>
                  R(
                    n || ((null == N ? void 0 : N.moderated) == null && void 0),
                  ),
                className: C.moderatedCheckbox,
                children: (0, o.jsx)(a.Text, {
                  variant: "text-sm/normal",
                  children: x.intl.string(x.t["rMH+rq"]),
                }),
              }),
              (0, o.jsxs)(a.ModalFooter, {
                className: C.footer,
                children: [
                  (0, o.jsxs)("div", {
                    className: C.buttons,
                    children: [
                      (0, o.jsx)(a.Button, {
                        color: a.Button.Colors.PRIMARY,
                        onClick: () => {
                          b();
                        },
                        children: x.intl.string(x.t["ETE/oK"]),
                      }),
                      (0, o.jsx)(a.Button, {
                        onClick: P,
                        disabled: 0 === f.length || !y,
                        autoFocus: !0,
                        children: x.intl.string(x.t.R3BPHx),
                      }),
                    ],
                  }),
                  B &&
                    (0, o.jsx)(a.Button, {
                      color: a.Button.Colors.RED,
                      look: a.Button.Looks.LINK,
                      onClick: () => {
                        B && (j.Z.deleteForumTag(p, N.id), b());
                      },
                      children: x.intl.string(x.t.huYSMj),
                    }),
                ],
              }),
            ],
          })
        );
      }
    },
    797057: function (e, n, t) {
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
//# sourceMappingURL=f98730c639467f514fc4.js.map
