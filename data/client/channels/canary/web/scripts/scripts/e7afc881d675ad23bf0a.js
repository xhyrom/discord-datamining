"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36371"],
  {
    580357: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var l = n(200651);
      n(192379);
      var r = n(481060),
        a = n(388032),
        o = n(26998);
      function s() {
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(r.Text, {
              className: o.marker,
              tag: "span",
              variant: "text-md/semibold",
              color: "text-danger",
              children: "*",
            }),
            (0, l.jsx)(r.HiddenVisually, {
              children: a.intl.string(a.t.EkokLy),
            }),
          ],
        });
      }
    },
    893626: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n(47120);
      var l = n(200651),
        r = n(192379),
        a = n(658722),
        o = n.n(a),
        s = n(399606),
        i = n(481060),
        u = n(313201),
        d = n(734893),
        c = n(271383),
        m = n(430824),
        g = n(594174),
        h = n(903518),
        f = n(580357),
        v = n(388032),
        x = n(147177);
      function p(e) {
        var t, n, a;
        let {
            transitionState: p,
            onClose: b,
            guildId: I,
            welcomeMessage: j,
            onSave: k,
          } = e,
          _ = (0, u.Dt)(),
          [B, C] = r.useState({ ...j }),
          L = (0, s.e7)([m.Z], () => m.Z.getGuild(I)),
          M = r.useCallback(
            (e) => {
              let t = {};
              return Promise.resolve(
                c.ZP.getMembers(I)
                  .filter((n) => {
                    var l;
                    let r = g.default.getUser(n.userId);
                    if (
                      (null != r && (t[n.userId] = r),
                      null == L || null == r || !(0, h.Y)(L, r))
                    )
                      return !1;
                    let a = ""
                      .concat(
                        null !== (l = n.nick) && void 0 !== l ? l : "",
                        " ",
                      )
                      .concat(null == r ? void 0 : r.username);
                    return o()(e.toLowerCase(), a.toLowerCase());
                  })
                  .map((e) => {
                    var n, l, r;
                    return {
                      value: e.userId,
                      label:
                        null !==
                          (r =
                            null !== (l = e.nick) && void 0 !== l
                              ? l
                              : null === (n = t[e.userId]) || void 0 === n
                                ? void 0
                                : n.username) && void 0 !== r
                          ? r
                          : "",
                    };
                  }),
              );
            },
            [I, L],
          ),
          N = r.useCallback(
            (e) => {
              if (null == I || null == e) return null;
              let t = c.ZP.getMember(I, e.value);
              if (null == t) return null;
              let n = g.default.getUser(t.userId);
              if (null == n) return null;
              let r = n.getAvatarURL(I, 20);
              return (0, l.jsx)(i.AnimatedAvatar, {
                size: i.AvatarSizes.SIZE_20,
                src: r,
                "aria-hidden": !0,
              });
            },
            [I],
          ),
          S = r.useCallback(
            (e) => {
              let { value: t } = e;
              C((e) => ({ ...e, authorIds: null != t ? [t] : [] }));
            },
            [C],
          ),
          Z = r.useCallback(
            (e) => {
              C((t) => ({ ...t, message: null != e ? e : "" }));
            },
            [C],
          ),
          T = r.useCallback(() => {
            k(null), b();
          }, [k, b]),
          H = null !== (t = B.authorIds[0]) && void 0 !== t ? t : "",
          P = (0, s.e7)([c.ZP], () =>
            null != I ? c.ZP.getMember(I, H) : null,
          ),
          R = (0, s.e7)([g.default], () =>
            null != P ? g.default.getUser(P.userId) : null,
          ),
          y =
            null !==
              (a =
                null !== (n = null == P ? void 0 : P.nick) && void 0 !== n
                  ? n
                  : null == R
                    ? void 0
                    : R.username) && void 0 !== a
              ? a
              : "",
          w = (function (e) {
            if (null == e.message || 0 === e.message.length) return null;
            if (null == e.authorIds || 0 === e.authorIds.length)
              return e.message.length < d.ZR
                ? v.intl.formatToPlainString(v.t.Lj831N, { minLength: d.ZR })
                : v.intl.string(v.t["4m7gtr"]);
            return e.message.length < d.ZR
              ? v.intl.formatToPlainString(v.t.TJGHXl, { minLength: d.ZR })
              : null;
          })(B);
        return (0, l.jsxs)(i.ModalRoot, {
          transitionState: p,
          "aria-labelledby": _,
          children: [
            (0, l.jsxs)("div", {
              className: x.container,
              children: [
                (0, l.jsx)(i.ModalCloseButton, {
                  className: x.closeButton,
                  onClick: b,
                }),
                (0, l.jsxs)("div", {
                  className: x.formGroup,
                  children: [
                    (0, l.jsxs)(i.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: [
                        v.intl.string(v.t.zNQfQ0),
                        (0, l.jsx)(f.Z, {}),
                      ],
                    }),
                    (0, l.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: v.intl.string(v.t.mQHK2d),
                    }),
                    (0, l.jsx)(i.SearchableSelect, {
                      value: { value: H, label: y },
                      renderOptionPrefix: N,
                      options: M,
                      onChange: S,
                      filter: !1,
                    }),
                  ],
                }),
                (0, l.jsx)("div", { className: x.separator }),
                (0, l.jsxs)("div", {
                  className: x.formGroup,
                  children: [
                    (0, l.jsx)(i.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: v.intl.string(v.t.SHQcv7),
                    }),
                    (0, l.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: v.intl.format(v.t["6biC4e"], {}),
                    }),
                    (0, l.jsx)(i.TextArea, {
                      className: x.welcomeMessageTextInput,
                      placeholder: v.intl.string(v.t["kX/Sb2"]),
                      value: B.message,
                      onChange: Z,
                      maxLength: d.W4,
                    }),
                    null != w
                      ? (0, l.jsx)(i.Text, {
                          variant: "text-xs/normal",
                          color: "text-danger",
                          children: w,
                        })
                      : null,
                  ],
                }),
              ],
            }),
            (0, l.jsx)(i.ModalFooter, {
              children: (0, l.jsxs)("div", {
                className: x.footerButtons,
                children: [
                  (0, l.jsx)("div", {
                    className: x.__invalid_leftButtons,
                    children: (0, l.jsx)(i.Button, {
                      size: i.Button.Sizes.SMALL,
                      look: i.Button.Looks.LINK,
                      color: i.Button.Colors.RED,
                      onClick: T,
                      children: v.intl.string(v.t.N86XcH),
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: x.rightButtons,
                    children: [
                      (0, l.jsx)(i.Button, {
                        onClick: b,
                        size: i.Button.Sizes.SMALL,
                        look: i.Button.Looks.LINK,
                        color: i.Button.Colors.PRIMARY,
                        children: v.intl.string(v.t["ETE/oK"]),
                      }),
                      (0, l.jsx)(i.Button, {
                        disabled: 0 === B.message.length || null != w,
                        onClick: () => {
                          k(B), b();
                        },
                        children: v.intl.string(v.t.R3BPHx),
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
    147177: function (e, t, n) {
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
    26998: function (e, t, n) {
      e.exports = { marker: "marker_c6c777" };
    },
  },
]);
//# sourceMappingURL=e7afc881d675ad23bf0a.js.map
