"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["84725"],
  {
    580357: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return i;
        },
      });
      var a = l(200651);
      l(192379);
      var t = l(481060),
        o = l(388032),
        r = l(505229);
      function i() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(t.Text, {
              className: r.marker,
              tag: "span",
              variant: "text-md/semibold",
              color: "text-danger",
              children: "*",
            }),
            (0, a.jsx)(t.HiddenVisually, {
              children: o.intl.string(o.t.EkokLy),
            }),
          ],
        });
      }
    },
    462499: function (e, n, l) {
      l.r(n),
        l.d(n, {
          default: function () {
            return k;
          },
        }),
        l(47120);
      var a = l(200651),
        t = l(192379),
        o = l(658722),
        r = l.n(o),
        i = l(399606),
        s = l(481060),
        d = l(471445),
        u = l(313201),
        c = l(734893),
        h = l(208567),
        m = l(592125),
        x = l(984933),
        p = l(430824),
        g = l(768581),
        v = l(969632),
        f = l(580357),
        b = l(388032),
        j = l(419265);
      function C(e, n, l, a) {
        return {
          channelId: e.value,
          title: n,
          description: l,
          emoji: null,
          icon: null != a ? a : null,
        };
      }
      function k(e) {
        var n, l;
        let {
            transitionState: o,
            onClose: k,
            resourceChannel: I,
            guildId: B,
            onSave: N,
            onDelete: _,
            onIconUpload: S,
          } = e,
          L = (0, u.Dt)(),
          [Z, y] = t.useState(
            null !== (n = null == I ? void 0 : I.title) && void 0 !== n
              ? n
              : "",
          ),
          [H, G] = t.useState(
            null !== (l = null == I ? void 0 : I.description) && void 0 !== l
              ? l
              : "",
          ),
          [M, R] = t.useState(
            (function (e) {
              if (null == e) return null;
              let n = m.Z.getChannel(e.channelId);
              return null == n ? null : { value: n.id, label: n.name };
            })(I),
          ),
          T = (0, i.e7)([v.Z], () => {
            var e;
            return null ===
              (e = v.Z.getResourceChannel(null == I ? void 0 : I.channelId)) ||
              void 0 === e
              ? void 0
              : e.icon;
          }),
          U = (0, i.Wu)([v.Z], () => {
            var e, n;
            return (
              null !==
                (n =
                  null === (e = v.Z.getSettings()) || void 0 === e
                    ? void 0
                    : e.resourceChannels) && void 0 !== n
                ? n
                : []
            ).map((e) => e.channelId);
          }),
          z = Z.length < c.n || null == M,
          P = t.useCallback(() => {
            null != M && !(Z.length <= 0) && (N(C(M, Z, H, T)), k());
          }, [N, k, Z, M, T, H]),
          K = t.useCallback(() => {
            null == _ || _(), k();
          }, [_, k]),
          w = t.useCallback(
            (e) => {
              R(e);
            },
            [R],
          ),
          E = t.useCallback(
            (e) =>
              Promise.resolve(
                x.ZP.getSelectableChannels(B)
                  .filter(
                    (n) =>
                      (0, c.k3)(n.channel) &&
                      !U.includes(n.channel.id) &&
                      r()(e, n.channel.name),
                  )
                  .map((e) => ({ value: e.channel.id, label: e.channel.name })),
              ),
            [B, U],
          ),
          O = t.useCallback(
            (e) => {
              if (null == e || null == B) return null;
              let n = m.Z.getChannel(e.value),
                l = p.Z.getGuild(B);
              if (null == n || null == l) return null;
              let t = (0, d.KS)(n, l);
              return null == t
                ? null
                : (0, a.jsx)(t, {
                    size: "xs",
                    color: "currentColor",
                    className: j.channelIcon,
                  });
            },
            [B],
          ),
          W = t.useCallback(
            (e) => {
              null != S && null != M && S(C(M, Z, H), e);
            },
            [M, Z, S, H],
          ),
          A = t.useCallback(
            () =>
              null == T || null == M
                ? null
                : g.ZP.getResourceChannelIconURL({
                    channelId: M.value,
                    icon: T,
                  }),
            [M, T],
          );
        return (0, a.jsxs)(s.ModalRoot, {
          transitionState: o,
          "aria-labelledby": L,
          children: [
            (0, a.jsxs)("div", {
              className: j.containerWithHeader,
              children: [
                (0, a.jsxs)("div", {
                  className: j.splitGroup,
                  children: [
                    (0, a.jsx)("div", {
                      className: j.header,
                      children: (0, a.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        color: "header-primary",
                        children: b.intl.string(b.t.iREYFB),
                      }),
                    }),
                    (0, a.jsx)(s.ModalCloseButton, {
                      className: j.closeButton,
                      onClick: k,
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: j.formGroup,
                  children: [
                    (0, a.jsxs)(s.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: [
                        b.intl.string(b.t.nPa4Ji),
                        (0, a.jsx)(f.Z, {}),
                      ],
                    }),
                    (0, a.jsx)(s.SearchableSelect, {
                      value: M,
                      renderOptionPrefix: O,
                      options: E,
                      onChange: w,
                    }),
                    (0, a.jsx)(s.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: b.intl.string(b.t.eNDtJC),
                    }),
                  ],
                }),
                (0, a.jsx)("div", { className: j.separator }),
                (0, a.jsxs)("div", {
                  className: j.formGroup,
                  children: [
                    (0, a.jsxs)(s.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: [
                        b.intl.string(b.t["lFy+aW"]),
                        (0, a.jsx)(f.Z, {}),
                      ],
                    }),
                    (0, a.jsx)(s.TextInput, {
                      value: Z,
                      onChange: y,
                      placeholder: b.intl.string(b.t.XKUimJ),
                      maxLength: c.am,
                    }),
                  ],
                }),
                (0, a.jsx)("div", { className: j.separator }),
                (0, a.jsxs)("div", {
                  className: j.formGroup,
                  children: [
                    (0, a.jsx)(s.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: b.intl.string(b.t.CnkilJ),
                    }),
                    (0, a.jsx)(s.TextArea, {
                      value: H,
                      onChange: G,
                      placeholder: b.intl.string(b.t.na0V4O),
                      maxLength: c.Vu,
                    }),
                  ],
                }),
                (0, a.jsx)("div", { className: j.separator }),
                (0, a.jsxs)("div", {
                  className: j.splitGroup,
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)(s.Heading, {
                          variant: "heading-md/semibold",
                          color: "header-primary",
                          children: b.intl.string(b.t.CB6dys),
                        }),
                        (0, a.jsx)(s.Text, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: b.intl.string(b.t.Kcdk7O),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      children: (0, a.jsx)(h.Z, {
                        className: j.uploader,
                        imageClassName: j.uploadImage,
                        image: T,
                        makeURL: A,
                        icon: (0, a.jsx)(s.UploadIcon, {
                          size: "md",
                          color: "currentColor",
                        }),
                        hideSize: !0,
                        onChange: W,
                        iconClassName: j.uploadImageIcon,
                        showIcon: null == T,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(s.ModalFooter, {
              children: (0, a.jsxs)("div", {
                className: j.footerButtons,
                children: [
                  null != I
                    ? (0, a.jsx)("div", {
                        className: j.removeButton,
                        children: (0, a.jsx)(s.Button, {
                          size: s.Button.Sizes.SMALL,
                          look: s.Button.Looks.LINK,
                          color: s.Button.Colors.RED,
                          onClick: K,
                          children: b.intl.string(b.t.N86XcH),
                        }),
                      })
                    : (0, a.jsx)("div", {}),
                  (0, a.jsxs)("div", {
                    className: j.rightButtons,
                    children: [
                      (0, a.jsx)(s.Button, {
                        onClick: k,
                        size: s.Button.Sizes.SMALL,
                        look: s.Button.Looks.LINK,
                        color: s.Button.Colors.PRIMARY,
                        children: b.intl.string(b.t["ETE/oK"]),
                      }),
                      (0, a.jsx)(s.Button, {
                        disabled: z,
                        onClick: P,
                        children: b.intl.string(b.t.R3BPHx),
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
    419265: function (e, n, l) {
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
    505229: function (e, n, l) {
      e.exports = { marker: "marker_c6c777" };
    },
  },
]);
//# sourceMappingURL=2fcef45d362143d887eb.js.map
