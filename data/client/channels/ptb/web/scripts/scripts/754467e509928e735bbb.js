"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36371"],
  {
    580357: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var l = t(200651);
      t(192379);
      var r = t(481060),
        a = t(388032),
        o = t(382926);
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
    893626: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return b;
          },
        }),
        t(47120);
      var l = t(200651),
        r = t(192379),
        a = t(658722),
        o = t.n(a),
        s = t(399606),
        i = t(481060),
        u = t(313201),
        d = t(734893),
        c = t(271383),
        m = t(430824),
        g = t(594174),
        h = t(700785),
        f = t(580357),
        x = t(981631),
        p = t(388032),
        v = t(224474);
      function b(e) {
        var n, t, a;
        let {
            transitionState: b,
            onClose: I,
            guildId: _,
            welcomeMessage: j,
            onSave: k,
          } = e,
          B = (0, u.Dt)(),
          [C, L] = r.useState({ ...j }),
          M = (0, s.e7)([m.Z], () => m.Z.getGuild(_)),
          N = r.useCallback(
            (e) => {
              let n = {};
              return Promise.resolve(
                c.ZP.getMembers(_)
                  .filter((t) => {
                    var l, r, a;
                    let s = g.default.getUser(t.userId);
                    if (
                      (null != s && (n[t.userId] = s),
                      null == M ||
                        null == s ||
                        ((r = M),
                        (a = s),
                        !(
                          r.isOwner(a) ||
                          h.BT({
                            permission: x.Plq.ADMINISTRATOR,
                            context: r,
                            user: a,
                          }) ||
                          (h.BT({
                            permission: x.Plq.MANAGE_GUILD,
                            context: r,
                            user: a,
                          }) &&
                            h.BT({
                              permission: x.Plq.MANAGE_ROLES,
                              context: r,
                              user: a,
                            }))
                        )))
                    )
                      return !1;
                    let i = ""
                      .concat(
                        null !== (l = t.nick) && void 0 !== l ? l : "",
                        " ",
                      )
                      .concat(null == s ? void 0 : s.username);
                    return o()(e.toLowerCase(), i.toLowerCase());
                  })
                  .map((e) => {
                    var t, l, r;
                    return {
                      value: e.userId,
                      label:
                        null !==
                          (r =
                            null !== (l = e.nick) && void 0 !== l
                              ? l
                              : null === (t = n[e.userId]) || void 0 === t
                                ? void 0
                                : t.username) && void 0 !== r
                          ? r
                          : "",
                    };
                  }),
              );
            },
            [_, M],
          ),
          T = r.useCallback(
            (e) => {
              if (null == _ || null == e) return null;
              let n = c.ZP.getMember(_, e.value);
              if (null == n) return null;
              let t = g.default.getUser(n.userId);
              if (null == t) return null;
              let r = t.getAvatarURL(_, 20);
              return (0, l.jsx)(i.AnimatedAvatar, {
                size: i.AvatarSizes.SIZE_20,
                src: r,
                "aria-hidden": !0,
              });
            },
            [_],
          ),
          S = r.useCallback(
            (e) => {
              let { value: n } = e;
              L((e) => ({ ...e, authorIds: null != n ? [n] : [] }));
            },
            [L],
          ),
          A = r.useCallback(
            (e) => {
              L((n) => ({ ...n, message: null != e ? e : "" }));
            },
            [L],
          ),
          P = r.useCallback(() => {
            k(null), I();
          }, [k, I]),
          R = null !== (n = C.authorIds[0]) && void 0 !== n ? n : "",
          Z = (0, s.e7)([c.ZP], () =>
            null != _ ? c.ZP.getMember(_, R) : null,
          ),
          G = (0, s.e7)([g.default], () =>
            null != Z ? g.default.getUser(Z.userId) : null,
          ),
          H =
            null !==
              (a =
                null !== (t = null == Z ? void 0 : Z.nick) && void 0 !== t
                  ? t
                  : null == G
                    ? void 0
                    : G.username) && void 0 !== a
              ? a
              : "",
          w = (function (e) {
            if (null == e.message || 0 === e.message.length) return null;
            if (null == e.authorIds || 0 === e.authorIds.length)
              return e.message.length < d.ZR
                ? p.intl.formatToPlainString(p.t.Lj831N, { minLength: d.ZR })
                : p.intl.string(p.t["4m7gtr"]);
            return e.message.length < d.ZR
              ? p.intl.formatToPlainString(p.t.TJGHXl, { minLength: d.ZR })
              : null;
          })(C);
        return (0, l.jsxs)(i.ModalRoot, {
          transitionState: b,
          "aria-labelledby": B,
          children: [
            (0, l.jsxs)("div", {
              className: v.container,
              children: [
                (0, l.jsx)(i.ModalCloseButton, {
                  className: v.closeButton,
                  onClick: I,
                }),
                (0, l.jsxs)("div", {
                  className: v.formGroup,
                  children: [
                    (0, l.jsxs)(i.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: [
                        p.intl.string(p.t.zNQfQ0),
                        (0, l.jsx)(f.Z, {}),
                      ],
                    }),
                    (0, l.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: p.intl.string(p.t.mQHK2d),
                    }),
                    (0, l.jsx)(i.SearchableSelect, {
                      value: { value: R, label: H },
                      renderOptionPrefix: T,
                      options: N,
                      onChange: S,
                      filter: !1,
                    }),
                  ],
                }),
                (0, l.jsx)("div", { className: v.separator }),
                (0, l.jsxs)("div", {
                  className: v.formGroup,
                  children: [
                    (0, l.jsx)(i.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: p.intl.string(p.t.SHQcv7),
                    }),
                    (0, l.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: p.intl.format(p.t["6biC4e"], {}),
                    }),
                    (0, l.jsx)(i.TextArea, {
                      className: v.welcomeMessageTextInput,
                      placeholder: p.intl.string(p.t["kX/Sb2"]),
                      value: C.message,
                      onChange: A,
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
                className: v.footerButtons,
                children: [
                  (0, l.jsx)("div", {
                    className: v.__invalid_leftButtons,
                    children: (0, l.jsx)(i.Button, {
                      size: i.Button.Sizes.SMALL,
                      look: i.Button.Looks.LINK,
                      color: i.Button.Colors.RED,
                      onClick: P,
                      children: p.intl.string(p.t.N86XcH),
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: v.rightButtons,
                    children: [
                      (0, l.jsx)(i.Button, {
                        onClick: I,
                        size: i.Button.Sizes.SMALL,
                        look: i.Button.Looks.LINK,
                        color: i.Button.Colors.PRIMARY,
                        children: p.intl.string(p.t["ETE/oK"]),
                      }),
                      (0, l.jsx)(i.Button, {
                        disabled: 0 === C.message.length || null != w,
                        onClick: () => {
                          k(C), I();
                        },
                        children: p.intl.string(p.t.R3BPHx),
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
    224474: function (e, n, t) {
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
    382926: function (e, n, t) {
      e.exports = { marker: "marker_c6c777" };
    },
  },
]);
//# sourceMappingURL=754467e509928e735bbb.js.map
