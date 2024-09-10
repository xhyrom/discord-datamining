"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14653"],
  {
    380716: function (e, l, n) {
      n.r(l),
        n.d(l, {
          default: function () {
            return G;
          },
        }),
        n(653041),
        n(47120),
        n(536091);
      var a = n(735250),
        o = n(470079),
        t = n(658722),
        i = n.n(t),
        s = n(399606),
        r = n(481060),
        u = n(596454),
        d = n(471445),
        c = n(313201),
        I = n(907040),
        m = n(734893),
        _ = n(813197),
        N = n(592125),
        h = n(984933),
        v = n(430824),
        p = n(768581),
        T = n(823379),
        x = n(700785),
        g = n(969632),
        E = n(580357),
        O = n(981631),
        C = n(185923),
        A = n(689938),
        j = n(224474);
      function S(e, l) {
        switch (e) {
          case m.oi.VIEW:
            return x.Uu(O.Plq.VIEW_CHANNEL, l);
          case m.oi.CHAT:
            if (O.TPd.GUILD_THREADS_ONLY.has(l.type))
              return (
                x.Uu(O.Plq.SEND_MESSAGES_IN_THREADS, l) ||
                x.Uu(O.Plq.SEND_MESSAGES, l)
              );
            return x.Uu(O.Plq.SEND_MESSAGES, l);
          default:
            return !1;
        }
      }
      function f() {
        return {
          channelId: [],
          title: [],
          description: [],
          actionType: [],
          emoji: [],
          icon: [],
        };
      }
      function M(e) {
        let l = f(),
          n = N.Z.getChannel(e.channelId);
        return (
          (null == e.title || e.title.length < m.Wz) &&
            l.title.push(
              A.Z.Messages.NEW_MEMBER_ACTION_VALIDATION_ERROR_TITLE_REQUIRED.format(
                { minLength: m.Wz },
              ),
            ),
          null != e.actionType &&
            null != n &&
            !S(e.actionType, n) &&
            l.actionType.push(
              (function (e) {
                switch (e) {
                  case m.oi.VIEW:
                    return A.Z.Messages
                      .NEW_MEMBER_ACTION_VALIDATION_ERROR_TYPE_VIEW_INVALID_FOR_CHANNEL;
                  case m.oi.CHAT:
                    return A.Z.Messages
                      .NEW_MEMBER_ACTION_VALIDATION_ERROR_TYPE_CHAT_INVALID_FOR_CHANNEL;
                  default:
                    (0, T.vE)(e);
                }
              })(e.actionType),
            ),
          l
        );
      }
      function G(e) {
        var l, n, t, T, x, G, b, L, R;
        let {
            transitionState: D,
            onClose: Z,
            guildId: B,
            action: U,
            onSave: k,
            onDelete: P,
          } = e,
          y = (0, c.Dt)(),
          [H] = o.useState(
            (function (e) {
              if (null == e) return null;
              let l = N.Z.getChannel(e.channelId);
              return null == l ? null : { value: e.channelId, label: l.name };
            })(U),
          ),
          [V, w] = o.useState(H),
          z = (0, s.e7)([N.Z], () =>
            N.Z.getChannel(null == V ? void 0 : V.value),
          ),
          W = (null == z ? void 0 : z.isMediaChannel()) === !0,
          F = o.useMemo(
            () => [
              {
                value: m.oi.VIEW,
                name: A.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_VIEW,
              },
              {
                value: m.oi.CHAT,
                name:
                  (null == z ? void 0 : z.type) === O.d4z.GUILD_FORUM
                    ? W
                      ? A.Z.Messages
                          .GUILD_SETTINGS_ONBOARDING_ACTION_TALK_IN_MEDIA_CHANNEL
                      : A.Z.Messages
                          .GUILD_SETTINGS_ONBOARDING_ACTION_TALK_IN_FORUM
                    : A.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TALK,
              },
            ],
            [null == z ? void 0 : z.type, W],
          ),
          [K, Y] = o.useState(f()),
          [q, Q] = o.useState(
            null !== (l = null == U ? void 0 : U.title) && void 0 !== l
              ? l
              : "",
          ),
          X = (0, s.e7)([g.Z], () => {
            let e = g.Z.getSettings();
            if (null == e.newMemberActions) return new Set();
            let l = new Set(e.newMemberActions.map((e) => e.channelId));
            return null != H && l.delete(H.value), l;
          });
        let [J, $] = o.useState(
            ((x = F),
            null == (G = U)
              ? null
              : null !== (b = x.find((e) => e.value === G.actionType)) &&
                  void 0 !== b
                ? b
                : null),
          ),
          [ee, el] = o.useState(
            null !== (n = null == U ? void 0 : U.emoji) && void 0 !== n
              ? n
              : null,
          ),
          en = (0, s.e7)([g.Z], () => {
            var e;
            return null ===
              (e = g.Z.getNewMemberAction(null == U ? void 0 : U.channelId)) ||
              void 0 === e
              ? void 0
              : e.icon;
          }),
          [ea, eo] = o.useState(null),
          et = null == q || 0 === q.length || null == J || null == V,
          ei = Object.values(K).flat().length > 0,
          es = o.useCallback(() => {
            if (null == V || null == J || q.length <= 0) return;
            let e = {
                channelId: V.value,
                title: q,
                description: "",
                actionType: J.value,
                emoji: null != ee ? ee : null,
                icon: null != en ? en : null,
              },
              l = null != ea || null != ee;
            k(e, ea, l), Z();
          }, [k, Z, q, J, V, ee, en, ea]),
          er = o.useCallback(() => {
            null == P || P(), Z();
          }, [P, Z]),
          eu = o.useCallback(
            (e) => {
              Q(e),
                Y(
                  M({
                    channelId: null == V ? void 0 : V.value,
                    title: e,
                    description: "",
                    actionType: null == J ? void 0 : J.value,
                    emoji: null != ee ? ee : void 0,
                  }),
                );
            },
            [Q, Y, V, J, ee],
          ),
          ed = o.useCallback(
            (e) => {
              w(e),
                Y(
                  M({
                    channelId: null == e ? void 0 : e.value,
                    title: q,
                    description: "",
                    actionType: null == J ? void 0 : J.value,
                    emoji: null != ee ? ee : void 0,
                  }),
                );
            },
            [w, Y, q, J, ee],
          ),
          ec = o.useCallback(
            (e) => {
              $(e),
                Y(
                  M({
                    channelId: null == V ? void 0 : V.value,
                    title: q,
                    description: "",
                    actionType: null == e ? void 0 : e.value,
                    emoji: null != ee ? ee : void 0,
                  }),
                );
            },
            [$, Y, V, q, ee],
          ),
          eI = o.useCallback(
            (e) =>
              Promise.resolve(
                h.ZP.getSelectableChannels(B)
                  .filter(
                    (l) =>
                      !X.has(l.channel.id) &&
                      (0, m.kb)(l.channel) &&
                      i()(e, l.channel.name),
                  )
                  .map((e) => ({ value: e.channel.id, label: e.channel.name })),
              ),
            [B, X],
          ),
          em = o.useCallback(
            (e) => {
              if (null == e || null == B) return null;
              let l = N.Z.getChannel(e.value),
                n = v.Z.getGuild(B);
              if (null == l || null == n) return null;
              let o = (0, d.KS)(l, n);
              return null == o
                ? null
                : (0, a.jsx)(o, {
                    size: "xs",
                    color: "customColor",
                    className: j.channelIcon,
                  });
            },
            [B],
          ),
          e_ = o.useCallback(function (e) {
            let l =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            el(l), eo(e);
          }, []),
          eN = o.useCallback(() => {
            if (null != ea) return ea;
            if (null != ee) return null;
            if (null != en && null != V)
              return p.ZP.getNewMemberActionIconURL({
                channelId: V.value,
                icon: en,
              });
            else return null;
          }, [V, en, ea, ee])(),
          eh = o.useCallback(
            (e) => {
              null != e && e_(e, null);
            },
            [e_],
          ),
          ev = (e) => (l, n) => {
            var a, o;
            if (null == l) return;
            let t = null;
            e_(
              null,
              (t =
                null == l.id
                  ? {
                      id: null,
                      name:
                        null !== (a = l.optionallyDiverseSequence) &&
                        void 0 !== a
                          ? a
                          : "",
                      animated: !1,
                    }
                  : {
                      id: l.id,
                      name:
                        null !== (o = l.originalName) && void 0 !== o
                          ? o
                          : l.name,
                      animated: l.animated,
                    }),
            ),
              n && e();
          },
          ep = null;
        return (
          (ep =
            null != eN
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("img", {
                      src: eN,
                      alt: "",
                      "aria-hidden": !0,
                      className: j.__invalid_image,
                      width: 24,
                      height: 24,
                    }),
                    (0, a.jsx)("div", {
                      className: j.imageOverlay,
                      children: (0, a.jsx)(r.PencilIcon, {
                        size: "md",
                        color: "currentColor",
                      }),
                    }),
                  ],
                })
              : null != ee
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(u.Z, {
                        animated:
                          null !== (t = ee.animated) && void 0 !== t && t,
                        emojiId: ee.id,
                        emojiName: ee.name,
                      }),
                      (0, a.jsx)("div", {
                        className: j.imageOverlay,
                        children: (0, a.jsx)(r.PencilIcon, {
                          size: "md",
                          color: "currentColor",
                        }),
                      }),
                    ],
                  })
                : (0, a.jsx)(r.ImagePlusIcon, {
                    size: "md",
                    color: "currentColor",
                  })),
          (0, a.jsxs)(r.ModalRoot, {
            transitionState: D,
            "aria-labelledby": y,
            children: [
              (0, a.jsxs)("div", {
                className: j.container,
                children: [
                  (0, a.jsx)(r.ModalCloseButton, {
                    className: j.closeButton,
                    onClick: Z,
                  }),
                  (0, a.jsxs)("div", {
                    className: j.formGroup,
                    children: [
                      (0, a.jsxs)(r.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: [
                          A.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TITLE,
                          (0, a.jsx)(E.Z, {}),
                        ],
                      }),
                      (0, a.jsx)(r.TextInput, {
                        value: q,
                        error:
                          (null !== (T = null == q ? void 0 : q.length) &&
                          void 0 !== T
                            ? T
                            : 0) > 0
                            ? K.title.join(", ")
                            : null,
                        onChange: eu,
                        placeholder:
                          A.Z.Messages
                            .GUILD_SETTINGS_ONBOARDING_ACTION_TITLE_PLACEHOLDER,
                        maxLength: m.Z3,
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", { className: j.separator }),
                  (0, a.jsxs)("div", {
                    className: j.formGroup,
                    children: [
                      (0, a.jsxs)(r.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: [
                          A.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_CHANNEL,
                          (0, a.jsx)(E.Z, {}),
                        ],
                      }),
                      (0, a.jsx)(r.SearchableSelect, {
                        value: V,
                        renderOptionPrefix: em,
                        options: eI,
                        onChange: ed,
                      }),
                      (0, a.jsx)(r.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children:
                          A.Z.Messages
                            .GUILD_SETTINGS_ONBOARDING_ACTION_CHANNEL_EXPLAINER,
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", { className: j.separator }),
                  (0, a.jsxs)("div", {
                    className: j.splitGroup,
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            children:
                              A.Z.Messages
                                .GUILD_SETTINGS_ONBOARDING_ACTION_ICON,
                          }),
                          (0, a.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children:
                              A.Z.Messages
                                .GUILD_SETTINGS_ONBOARDING_ACTION_ICON_EXPLAINER,
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: j.iconUploadContainer,
                        children: (0, a.jsx)(r.Popout, {
                          position: "bottom",
                          renderPopout: (e) => {
                            let l = e.closePopout,
                              n = (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(_.ZP, {
                                    onChange: (e) => {
                                      eh(e), l();
                                    },
                                    tabIndex: 0,
                                  }),
                                  (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "none",
                                    children:
                                      A.Z.Messages
                                        .GUILD_SETTINGS_ONBOARDING_ACTION_ICON_UPLOAD,
                                  }),
                                ],
                              }),
                              o = (0, a.jsx)(r.Popout, {
                                position: "top",
                                renderPopout: (e) => {
                                  let { closePopout: n } = e;
                                  return (0, a.jsx)(I.Z, {
                                    closePopout: () => {
                                      n(), l();
                                    },
                                    onSelectEmoji: ev(() => {
                                      n(), l();
                                    }),
                                    pickerIntention: C.Hz.COMMUNITY_CONTENT,
                                    channel: z,
                                  });
                                },
                                children: (e) =>
                                  (0, a.jsx)(r.Text, {
                                    ...e,
                                    variant: "text-sm/medium",
                                    color: "none",
                                    children:
                                      A.Z.Messages
                                        .GUILD_SETTINGS_ONBOARDING_ACTION_ICON_EMOJI,
                                  }),
                              });
                            return (0, a.jsxs)(r.Menu, {
                              navId: "set-image-for-action",
                              "aria-label": "upload",
                              onClose: () => !1,
                              onSelect: () => !1,
                              children: [
                                (0, a.jsx)(r.MenuItem, {
                                  id: "emoji",
                                  label: o,
                                  icon: r.ReactionIcon,
                                }),
                                (0, a.jsx)(r.MenuItem, {
                                  className: j.uploadMenuItem,
                                  id: "upload",
                                  label: n,
                                  icon: r.UploadIcon,
                                }),
                                (0, a.jsx)(r.MenuItem, {
                                  id: "clear",
                                  color: "danger",
                                  label:
                                    A.Z.Messages
                                      .GUILD_SETTINGS_ONBOARDING_ACTION_ICON_REMOVE,
                                  icon: r.TrashIcon,
                                  action: () => {
                                    e_(null);
                                  },
                                }),
                              ],
                            });
                          },
                          children: (e) =>
                            (0, a.jsx)("div", {
                              ...e,
                              className: j.iconUpload,
                              children: ep,
                            }),
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", { className: j.separator }),
                  (0, a.jsxs)("div", {
                    className: j.formGroup,
                    children: [
                      (0, a.jsxs)(r.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: [
                          A.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TYPE,
                          (0, a.jsx)(E.Z, {}),
                        ],
                      }),
                      (0, a.jsx)(r.RadioGroup, {
                        withTransparentBackground: !0,
                        size: r.RadioGroup.Sizes.NONE,
                        value: null == J ? void 0 : J.value,
                        onChange: ec,
                        options:
                          ((L = F),
                          null == (R = z)
                            ? L
                            : L.map((e) => ({
                                ...e,
                                disabled: !S(e.value, R),
                              }))),
                      }),
                      null != J && K.actionType.length > 0
                        ? K.actionType.map((e) =>
                            (0, a.jsx)(
                              r.Text,
                              {
                                variant: "text-xs/normal",
                                color: "text-danger",
                                children: e,
                              },
                              e,
                            ),
                          )
                        : null,
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(r.ModalFooter, {
                children: (0, a.jsxs)("div", {
                  className: j.footerButtons,
                  children: [
                    null != U
                      ? (0, a.jsx)("div", {
                          className: j.removeButton,
                          children: (0, a.jsx)(r.Button, {
                            size: r.Button.Sizes.SMALL,
                            look: r.Button.Looks.LINK,
                            color: r.Button.Colors.RED,
                            onClick: er,
                            children: A.Z.Messages.REMOVE,
                          }),
                        })
                      : (0, a.jsx)("div", {}),
                    (0, a.jsxs)("div", {
                      className: j.rightButtons,
                      children: [
                        (0, a.jsx)(r.Button, {
                          onClick: Z,
                          size: r.Button.Sizes.SMALL,
                          look: r.Button.Looks.LINK,
                          color: r.Button.Colors.PRIMARY,
                          children: A.Z.Messages.CANCEL,
                        }),
                        (0, a.jsx)(r.Button, {
                          disabled: et || ei,
                          onClick: es,
                          children: A.Z.Messages.SAVE,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
    580357: function (e, l, n) {
      n.d(l, {
        Z: function () {
          return s;
        },
      });
      var a = n(735250);
      n(470079);
      var o = n(481060),
        t = n(689938),
        i = n(382926);
      function s() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(o.Text, {
              className: i.marker,
              tag: "span",
              variant: "text-md/semibold",
              color: "text-danger",
              children: "*",
            }),
            (0, a.jsx)(o.HiddenVisually, { children: t.Z.Messages.REQUIRED }),
          ],
        });
      }
    },
    224474: function (e, l, n) {
      e.exports = {
        container: "container_bf092d",
        containerWithHeader: "containerWithHeader_bf092d",
        header: "header_bf092d",
        closeButton: "closeButton_bf092d",
        footerButtons: "footerButtons_bf092d",
        removeButton: "removeButton_bf092d",
        rightButtons: "rightButtons_bf092d",
        separator: "separator_bf092d",
        formGroup: "formGroup_bf092d",
        splitGroup: "splitGroup_bf092d",
        channelIcon: "channelIcon_bf092d",
        welcomeMessageTextInput: "welcomeMessageTextInput_bf092d",
        uploadImage: "uploadImage_bf092d",
        uploader: "uploader_bf092d",
        uploadImageIcon: "uploadImageIcon_bf092d",
        iconUploadContainer: "iconUploadContainer_bf092d",
        imageOverlay: "imageOverlay_bf092d",
        iconUpload: "iconUpload_bf092d",
        uploadMenuItem: "uploadMenuItem_bf092d",
      };
    },
    382926: function (e, l, n) {
      e.exports = { marker: "marker_c6c777" };
    },
  },
]);
//# sourceMappingURL=6e197f9547bf72177eea.js.map
