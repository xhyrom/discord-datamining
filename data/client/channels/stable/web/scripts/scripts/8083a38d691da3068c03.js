"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84725"],
  {
    580357: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return t;
        },
      });
      var a = l(735250);
      l(470079);
      var s = l(481060),
        o = l(689938),
        r = l(382926);
      function t() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(s.Text, {
              className: r.marker,
              tag: "span",
              variant: "text-md/semibold",
              color: "text-danger",
              children: "*",
            }),
            (0, a.jsx)(s.HiddenVisually, { children: o.Z.Messages.REQUIRED }),
          ],
        });
      }
    },
    462499: function (e, n, l) {
      l.r(n),
        l.d(n, {
          default: function () {
            return C;
          },
        }),
        l(47120);
      var a = l(735250),
        s = l(470079),
        o = l(658722),
        r = l.n(o),
        t = l(399606),
        i = l(481060),
        d = l(471445),
        u = l(313201),
        c = l(734893),
        h = l(208567),
        m = l(592125),
        I = l(984933),
        _ = l(430824),
        x = l(768581),
        p = l(969632),
        N = l(580357),
        g = l(689938),
        v = l(224474);
      function E(e, n, l, a) {
        return {
          channelId: e.value,
          title: n,
          description: l,
          emoji: null,
          icon: null != a ? a : null,
        };
      }
      function C(e) {
        var n, l;
        let {
            transitionState: o,
            onClose: C,
            resourceChannel: R,
            guildId: S,
            onSave: f,
            onDelete: b,
            onIconUpload: j,
          } = e,
          G = (0, u.Dt)(),
          [O, L] = s.useState(
            null !== (n = null == R ? void 0 : R.title) && void 0 !== n
              ? n
              : "",
          ),
          [T, B] = s.useState(
            null !== (l = null == R ? void 0 : R.description) && void 0 !== l
              ? l
              : "",
          ),
          [D, U] = s.useState(
            (function (e) {
              if (null == e) return null;
              let n = m.Z.getChannel(e.channelId);
              return null == n ? null : { value: n.id, label: n.name };
            })(R),
          ),
          Z = (0, t.e7)([p.Z], () => {
            var e;
            return null ===
              (e = p.Z.getResourceChannel(null == R ? void 0 : R.channelId)) ||
              void 0 === e
              ? void 0
              : e.icon;
          }),
          k = (0, t.Wu)([p.Z], () => {
            var e, n;
            return (
              null !==
                (n =
                  null === (e = p.Z.getSettings()) || void 0 === e
                    ? void 0
                    : e.resourceChannels) && void 0 !== n
                ? n
                : []
            ).map((e) => e.channelId);
          }),
          A = O.length < c.n || null == D,
          M = s.useCallback(() => {
            null != D && !(O.length <= 0) && (f(E(D, O, T, Z)), C());
          }, [f, C, O, D, Z, T]),
          H = s.useCallback(() => {
            null == b || b(), C();
          }, [b, C]),
          P = s.useCallback(
            (e) => {
              U(e);
            },
            [U],
          ),
          y = s.useCallback(
            (e) =>
              Promise.resolve(
                I.ZP.getSelectableChannels(S)
                  .filter(
                    (n) =>
                      (0, c.k3)(n.channel) &&
                      !k.includes(n.channel.id) &&
                      r()(e, n.channel.name),
                  )
                  .map((e) => ({ value: e.channel.id, label: e.channel.name })),
              ),
            [S, k],
          ),
          z = s.useCallback(
            (e) => {
              if (null == e || null == S) return null;
              let n = m.Z.getChannel(e.value),
                l = _.Z.getGuild(S);
              if (null == n || null == l) return null;
              let s = (0, d.KS)(n, l);
              return null == s
                ? null
                : (0, a.jsx)(s, {
                    size: "xs",
                    color: "currentColor",
                    className: v.channelIcon,
                  });
            },
            [S],
          ),
          w = s.useCallback(
            (e) => {
              null != j && null != D && j(E(D, O, T), e);
            },
            [D, O, j, T],
          ),
          V = s.useCallback(
            () =>
              null == Z || null == D
                ? null
                : x.ZP.getResourceChannelIconURL({
                    channelId: D.value,
                    icon: Z,
                  }),
            [D, Z],
          );
        return (0, a.jsxs)(i.ModalRoot, {
          transitionState: o,
          "aria-labelledby": G,
          children: [
            (0, a.jsxs)("div", {
              className: v.containerWithHeader,
              children: [
                (0, a.jsxs)("div", {
                  className: v.splitGroup,
                  children: [
                    (0, a.jsx)("div", {
                      className: v.header,
                      children: (0, a.jsx)(i.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children:
                          g.Z.Messages
                            .GUILD_SETTINGS_ONBOARDING_RESOURCE_CHANNEL_EDIT_TITLE,
                      }),
                    }),
                    (0, a.jsx)(i.ModalCloseButton, {
                      className: v.closeButton,
                      onClick: C,
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: v.formGroup,
                  children: [
                    (0, a.jsxs)(i.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: [
                        g.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_CHANNEL,
                        (0, a.jsx)(N.Z, {}),
                      ],
                    }),
                    (0, a.jsx)(i.SearchableSelect, {
                      value: D,
                      renderOptionPrefix: z,
                      options: y,
                      onChange: P,
                    }),
                    (0, a.jsx)(i.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children:
                        g.Z.Messages
                          .GUILD_SETTINGS_ONBOARDING_RESOURCE_CHANNEL_EXPLAINER,
                    }),
                  ],
                }),
                (0, a.jsx)("div", { className: v.separator }),
                (0, a.jsxs)("div", {
                  className: v.formGroup,
                  children: [
                    (0, a.jsxs)(i.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: [
                        g.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_TITLE,
                        (0, a.jsx)(N.Z, {}),
                      ],
                    }),
                    (0, a.jsx)(i.TextInput, {
                      value: O,
                      onChange: L,
                      placeholder:
                        g.Z.Messages
                          .GUILD_SETTINGS_ONBOARDING_RESOURCE_TITLE_PLACEHOLDER,
                      maxLength: c.am,
                    }),
                  ],
                }),
                (0, a.jsx)("div", { className: v.separator }),
                (0, a.jsxs)("div", {
                  className: v.formGroup,
                  children: [
                    (0, a.jsx)(i.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children:
                        g.Z.Messages
                          .GUILD_SETTINGS_ONBOARDING_RESOURCE_DESCRIPTION,
                    }),
                    (0, a.jsx)(i.TextArea, {
                      value: T,
                      onChange: B,
                      placeholder:
                        g.Z.Messages
                          .GUILD_SETTINGS_ONBOARDING_RESOURCE_DESCRIPTION_PLACEHOLDER,
                      maxLength: c.Vu,
                    }),
                  ],
                }),
                (0, a.jsx)("div", { className: v.separator }),
                (0, a.jsxs)("div", {
                  className: v.splitGroup,
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)(i.Heading, {
                          variant: "heading-md/semibold",
                          color: "header-primary",
                          children:
                            g.Z.Messages
                              .GUILD_SETTINGS_ONBOARDING_RESOURCE_UPLOAD,
                        }),
                        (0, a.jsx)(i.Text, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children:
                            g.Z.Messages
                              .GUILD_SETTINGS_ONBOARDING_RESOURCE_UPLOAD_EXPLAINER,
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      children: (0, a.jsx)(h.Z, {
                        className: v.uploader,
                        imageClassName: v.uploadImage,
                        image: Z,
                        makeURL: V,
                        icon: (0, a.jsx)(i.UploadIcon, {
                          size: "md",
                          color: "currentColor",
                        }),
                        hideSize: !0,
                        onChange: w,
                        iconClassName: v.uploadImageIcon,
                        showIcon: null == Z,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(i.ModalFooter, {
              children: (0, a.jsxs)("div", {
                className: v.footerButtons,
                children: [
                  null != R
                    ? (0, a.jsx)("div", {
                        className: v.removeButton,
                        children: (0, a.jsx)(i.Button, {
                          size: i.Button.Sizes.SMALL,
                          look: i.Button.Looks.LINK,
                          color: i.Button.Colors.RED,
                          onClick: H,
                          children: g.Z.Messages.REMOVE,
                        }),
                      })
                    : (0, a.jsx)("div", {}),
                  (0, a.jsxs)("div", {
                    className: v.rightButtons,
                    children: [
                      (0, a.jsx)(i.Button, {
                        onClick: C,
                        size: i.Button.Sizes.SMALL,
                        look: i.Button.Looks.LINK,
                        color: i.Button.Colors.PRIMARY,
                        children: g.Z.Messages.CANCEL,
                      }),
                      (0, a.jsx)(i.Button, {
                        disabled: A,
                        onClick: M,
                        children: g.Z.Messages.SAVE,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    224474: function (e, n, l) {
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
    382926: function (e, n, l) {
      e.exports = { marker: "marker_c6c777" };
    },
  },
]);
//# sourceMappingURL=8083a38d691da3068c03.js.map
