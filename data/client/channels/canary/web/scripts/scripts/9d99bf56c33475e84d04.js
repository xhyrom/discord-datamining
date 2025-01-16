"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["14653"],
  {
    380716: function (e, n, l) {
      l.r(n),
        l.d(n, {
          default: function () {
            return E;
          },
        }),
        l(653041),
        l(47120),
        l(536091);
      var t = l(200651),
        i = l(192379),
        a = l(658722),
        o = l.n(a),
        r = l(399606),
        s = l(481060),
        u = l(596454),
        d = l(471445),
        c = l(313201),
        m = l(907040),
        h = l(734893),
        p = l(813197),
        v = l(592125),
        x = l(984933),
        g = l(430824),
        j = l(768581),
        f = l(823379),
        b = l(700785),
        I = l(969632),
        C = l(580357),
        N = l(981631),
        S = l(185923),
        T = l(388032),
        _ = l(147177);
      function k(e, n) {
        switch (e) {
          case h.oi.VIEW:
            return b.Uu(N.Plq.VIEW_CHANNEL, n);
          case h.oi.CHAT:
            if (N.TPd.GUILD_THREADS_ONLY.has(n.type))
              return (
                b.Uu(N.Plq.SEND_MESSAGES_IN_THREADS, n) ||
                b.Uu(N.Plq.SEND_MESSAGES, n)
              );
            return b.Uu(N.Plq.SEND_MESSAGES, n);
          default:
            return !1;
        }
      }
      function y() {
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
        let n = y(),
          l = v.Z.getChannel(e.channelId);
        return (
          (null == e.title || e.title.length < h.Wz) &&
            n.title.push(
              T.intl.formatToPlainString(T.t.iu6AGh, { minLength: h.Wz }),
            ),
          null != e.actionType &&
            null != l &&
            !k(e.actionType, l) &&
            n.actionType.push(
              (function (e) {
                switch (e) {
                  case h.oi.VIEW:
                    return T.intl.string(T.t.lD7FOT);
                  case h.oi.CHAT:
                    return T.intl.string(T.t.fIF2U1);
                  default:
                    (0, f.vE)(e);
                }
              })(e.actionType),
            ),
          n
        );
      }
      function E(e) {
        var n, l, a, f, b, E, B, P, Z;
        let {
            transitionState: L,
            onClose: A,
            guildId: G,
            action: U,
            onSave: z,
            onDelete: H,
          } = e,
          O = (0, c.Dt)(),
          [w] = i.useState(
            (function (e) {
              if (null == e) return null;
              let n = v.Z.getChannel(e.channelId);
              return null == n ? null : { value: e.channelId, label: n.name };
            })(U),
          ),
          [D, R] = i.useState(w),
          F = (0, r.e7)([v.Z], () =>
            v.Z.getChannel(null == D ? void 0 : D.value),
          ),
          W = (null == F ? void 0 : F.isMediaChannel()) === !0,
          V = i.useMemo(
            () => [
              { value: h.oi.VIEW, name: T.intl.string(T.t.jfieR0) },
              {
                value: h.oi.CHAT,
                name:
                  (null == F ? void 0 : F.type) === N.d4z.GUILD_FORUM
                    ? W
                      ? T.intl.string(T.t["1EgDpK"])
                      : T.intl.string(T.t.x5Di7O)
                    : T.intl.string(T.t["R+dC4O"]),
              },
            ],
            [null == F ? void 0 : F.type, W],
          ),
          [K, q] = i.useState(y()),
          [Y, Q] = i.useState(
            null !== (n = null == U ? void 0 : U.title) && void 0 !== n
              ? n
              : "",
          ),
          X = (0, r.e7)([I.Z], () => {
            let e = I.Z.getSettings();
            if (null == e.newMemberActions) return new Set();
            let n = new Set(e.newMemberActions.map((e) => e.channelId));
            return null != w && n.delete(w.value), n;
          });
        let [J, $] = i.useState(
            ((b = V),
            null == (E = U)
              ? null
              : null !== (B = b.find((e) => e.value === E.actionType)) &&
                  void 0 !== B
                ? B
                : null),
          ),
          [ee, en] = i.useState(
            null !== (l = null == U ? void 0 : U.emoji) && void 0 !== l
              ? l
              : null,
          ),
          el = (0, r.e7)([I.Z], () => {
            var e;
            return null ===
              (e = I.Z.getNewMemberAction(null == U ? void 0 : U.channelId)) ||
              void 0 === e
              ? void 0
              : e.icon;
          }),
          [et, ei] = i.useState(null),
          ea = null == Y || 0 === Y.length || null == J || null == D,
          eo = Object.values(K).flat().length > 0,
          er = i.useCallback(() => {
            if (null == D || null == J || Y.length <= 0) return;
            let e = {
                channelId: D.value,
                title: Y,
                description: "",
                actionType: J.value,
                emoji: null != ee ? ee : null,
                icon: null != el ? el : null,
              },
              n = null != et || null != ee;
            z(e, et, n), A();
          }, [z, A, Y, J, D, ee, el, et]),
          es = i.useCallback(() => {
            null == H || H(), A();
          }, [H, A]),
          eu = i.useCallback(
            (e) => {
              Q(e),
                q(
                  M({
                    channelId: null == D ? void 0 : D.value,
                    title: e,
                    description: "",
                    actionType: null == J ? void 0 : J.value,
                    emoji: null != ee ? ee : void 0,
                  }),
                );
            },
            [Q, q, D, J, ee],
          ),
          ed = i.useCallback(
            (e) => {
              R(e),
                q(
                  M({
                    channelId: null == e ? void 0 : e.value,
                    title: Y,
                    description: "",
                    actionType: null == J ? void 0 : J.value,
                    emoji: null != ee ? ee : void 0,
                  }),
                );
            },
            [R, q, Y, J, ee],
          ),
          ec = i.useCallback(
            (e) => {
              $(e),
                q(
                  M({
                    channelId: null == D ? void 0 : D.value,
                    title: Y,
                    description: "",
                    actionType: null == e ? void 0 : e.value,
                    emoji: null != ee ? ee : void 0,
                  }),
                );
            },
            [$, q, D, Y, ee],
          ),
          em = i.useCallback(
            (e) =>
              Promise.resolve(
                x.ZP.getSelectableChannels(G)
                  .filter(
                    (n) =>
                      !X.has(n.channel.id) &&
                      (0, h.kb)(n.channel) &&
                      o()(e, n.channel.name),
                  )
                  .map((e) => ({ value: e.channel.id, label: e.channel.name })),
              ),
            [G, X],
          ),
          eh = i.useCallback(
            (e) => {
              if (null == e || null == G) return null;
              let n = v.Z.getChannel(e.value),
                l = g.Z.getGuild(G);
              if (null == n || null == l) return null;
              let i = (0, d.KS)(n, l);
              return null == i
                ? null
                : (0, t.jsx)(i, {
                    size: "xs",
                    color: "customColor",
                    className: _.channelIcon,
                  });
            },
            [G],
          ),
          ep = i.useCallback(function (e) {
            let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            en(n), ei(e);
          }, []),
          ev = i.useCallback(() => {
            if (null != et) return et;
            if (null != ee) return null;
            if (null != el && null != D)
              return j.ZP.getNewMemberActionIconURL({
                channelId: D.value,
                icon: el,
              });
            else return null;
          }, [D, el, et, ee])(),
          ex = i.useCallback(
            (e) => {
              null != e && ep(e, null);
            },
            [ep],
          ),
          eg = (e) => (n, l) => {
            var t, i;
            if (null == n) return;
            let a = null;
            ep(
              null,
              (a =
                null == n.id
                  ? {
                      id: null,
                      name:
                        null !== (t = n.optionallyDiverseSequence) &&
                        void 0 !== t
                          ? t
                          : "",
                      animated: !1,
                    }
                  : {
                      id: n.id,
                      name:
                        null !== (i = n.originalName) && void 0 !== i
                          ? i
                          : n.name,
                      animated: n.animated,
                    }),
            ),
              l && e();
          },
          ej = null;
        return (
          (ej =
            null != ev
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("img", {
                      src: ev,
                      alt: "",
                      "aria-hidden": !0,
                      className: _.__invalid_image,
                      width: 24,
                      height: 24,
                    }),
                    (0, t.jsx)("div", {
                      className: _.imageOverlay,
                      children: (0, t.jsx)(s.PencilIcon, {
                        size: "md",
                        color: "currentColor",
                      }),
                    }),
                  ],
                })
              : null != ee
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(u.Z, {
                        animated:
                          null !== (a = ee.animated) && void 0 !== a && a,
                        emojiId: ee.id,
                        emojiName: ee.name,
                      }),
                      (0, t.jsx)("div", {
                        className: _.imageOverlay,
                        children: (0, t.jsx)(s.PencilIcon, {
                          size: "md",
                          color: "currentColor",
                        }),
                      }),
                    ],
                  })
                : (0, t.jsx)(s.ImagePlusIcon, {
                    size: "md",
                    color: "currentColor",
                  })),
          (0, t.jsxs)(s.ModalRoot, {
            transitionState: L,
            "aria-labelledby": O,
            children: [
              (0, t.jsxs)("div", {
                className: _.container,
                children: [
                  (0, t.jsx)(s.ModalCloseButton, {
                    className: _.closeButton,
                    onClick: A,
                  }),
                  (0, t.jsxs)("div", {
                    className: _.formGroup,
                    children: [
                      (0, t.jsxs)(s.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: [
                          T.intl.string(T.t["j+fhOT"]),
                          (0, t.jsx)(C.Z, {}),
                        ],
                      }),
                      (0, t.jsx)(s.TextInput, {
                        value: Y,
                        error:
                          (null !== (f = null == Y ? void 0 : Y.length) &&
                          void 0 !== f
                            ? f
                            : 0) > 0
                            ? K.title.join(", ")
                            : null,
                        onChange: eu,
                        placeholder: T.intl.string(T.t.oN1Sm5),
                        maxLength: h.Z3,
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", { className: _.separator }),
                  (0, t.jsxs)("div", {
                    className: _.formGroup,
                    children: [
                      (0, t.jsxs)(s.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: [
                          T.intl.string(T.t.jVDc5e),
                          (0, t.jsx)(C.Z, {}),
                        ],
                      }),
                      (0, t.jsx)(s.SearchableSelect, {
                        value: D,
                        renderOptionPrefix: eh,
                        options: em,
                        onChange: ed,
                      }),
                      (0, t.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: T.intl.string(T.t.cypQPz),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", { className: _.separator }),
                  (0, t.jsxs)("div", {
                    className: _.splitGroup,
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            children: T.intl.string(T.t.gs5rQk),
                          }),
                          (0, t.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: T.intl.string(T.t.LjsoiY),
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: _.iconUploadContainer,
                        children: (0, t.jsx)(s.Popout, {
                          position: "bottom",
                          renderPopout: (e) => {
                            let n = e.closePopout,
                              l = (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(p.ZP, {
                                    onChange: (e) => {
                                      ex(e), n();
                                    },
                                    tabIndex: 0,
                                  }),
                                  (0, t.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "none",
                                    children: T.intl.string(T.t["2YKkdX"]),
                                  }),
                                ],
                              }),
                              i = (0, t.jsx)(s.Popout, {
                                position: "top",
                                renderPopout: (e) => {
                                  let { closePopout: l } = e;
                                  return (0, t.jsx)(m.Z, {
                                    closePopout: () => {
                                      l(), n();
                                    },
                                    onSelectEmoji: eg(() => {
                                      l(), n();
                                    }),
                                    pickerIntention: S.Hz.COMMUNITY_CONTENT,
                                    channel: F,
                                  });
                                },
                                children: (e) =>
                                  (0, t.jsx)(s.Text, {
                                    ...e,
                                    variant: "text-sm/medium",
                                    color: "none",
                                    children: T.intl.string(T.t.amsyNz),
                                  }),
                              });
                            return (0, t.jsxs)(s.Menu, {
                              navId: "set-image-for-action",
                              "aria-label": "upload",
                              onClose: () => !1,
                              onSelect: () => !1,
                              children: [
                                (0, t.jsx)(s.MenuItem, {
                                  id: "emoji",
                                  label: i,
                                  icon: s.ReactionIcon,
                                }),
                                (0, t.jsx)(s.MenuItem, {
                                  className: _.uploadMenuItem,
                                  id: "upload",
                                  label: l,
                                  icon: s.UploadIcon,
                                }),
                                (0, t.jsx)(s.MenuItem, {
                                  id: "clear",
                                  color: "danger",
                                  label: T.intl.string(T.t.ZCLmoa),
                                  icon: s.TrashIcon,
                                  action: () => {
                                    ep(null);
                                  },
                                }),
                              ],
                            });
                          },
                          children: (e) =>
                            (0, t.jsx)("div", {
                              ...e,
                              className: _.iconUpload,
                              children: ej,
                            }),
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", { className: _.separator }),
                  (0, t.jsxs)("div", {
                    className: _.formGroup,
                    children: [
                      (0, t.jsxs)(s.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: [
                          T.intl.string(T.t.MIMVLS),
                          (0, t.jsx)(C.Z, {}),
                        ],
                      }),
                      (0, t.jsx)(s.RadioGroup, {
                        withTransparentBackground: !0,
                        size: s.RadioGroup.Sizes.NONE,
                        value: null == J ? void 0 : J.value,
                        onChange: ec,
                        options:
                          ((P = V),
                          null == (Z = F)
                            ? P
                            : P.map((e) => ({
                                ...e,
                                disabled: !k(e.value, Z),
                              }))),
                      }),
                      null != J && K.actionType.length > 0
                        ? K.actionType.map((e) =>
                            (0, t.jsx)(
                              s.Text,
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
              (0, t.jsx)(s.ModalFooter, {
                children: (0, t.jsxs)("div", {
                  className: _.footerButtons,
                  children: [
                    null != U
                      ? (0, t.jsx)("div", {
                          className: _.removeButton,
                          children: (0, t.jsx)(s.Button, {
                            size: s.Button.Sizes.SMALL,
                            look: s.Button.Looks.LINK,
                            color: s.Button.Colors.RED,
                            onClick: es,
                            children: T.intl.string(T.t.N86XcH),
                          }),
                        })
                      : (0, t.jsx)("div", {}),
                    (0, t.jsxs)("div", {
                      className: _.rightButtons,
                      children: [
                        (0, t.jsx)(s.Button, {
                          onClick: A,
                          size: s.Button.Sizes.SMALL,
                          look: s.Button.Looks.LINK,
                          color: s.Button.Colors.PRIMARY,
                          children: T.intl.string(T.t["ETE/oK"]),
                        }),
                        (0, t.jsx)(s.Button, {
                          disabled: ea || eo,
                          onClick: er,
                          children: T.intl.string(T.t.R3BPHx),
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
    580357: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return r;
        },
      });
      var t = l(200651);
      l(192379);
      var i = l(481060),
        a = l(388032),
        o = l(26998);
      function r() {
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(i.Text, {
              className: o.marker,
              tag: "span",
              variant: "text-md/semibold",
              color: "text-danger",
              children: "*",
            }),
            (0, t.jsx)(i.HiddenVisually, {
              children: a.intl.string(a.t.EkokLy),
            }),
          ],
        });
      }
    },
    147177: function (e, n, l) {
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
    26998: function (e, n, l) {
      e.exports = { marker: "marker_c6c777" };
    },
  },
]);
//# sourceMappingURL=9d99bf56c33475e84d04.js.map
