"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93626"],
  {
    434227: function (e) {
      e.exports = "/assets/5f93b8054e2a24e41039.svg";
    },
    600126: function (e) {
      e.exports = "/assets/d2bb0f81f115b18cccc9.svg";
    },
    903749: function (e, l, t) {
      t.d(l, {
        Z: function () {
          return r;
        },
      });
      var n = t(512722),
        i = t.n(n),
        s = t(442837),
        a = t(339085),
        o = t(633302);
      function r(e) {
        let { emojiId: l, emojiName: t } = e,
          n = (0, s.e7)([a.ZP], () =>
            null != l ? a.ZP.getCustomEmojiById(l) : null,
          );
        if (null != n || null != t) {
          if (null == l)
            return (
              i()(
                null != t,
                "emojiName must be defined if emojiId is not defined",
              ),
              o.ZP.convertSurrogateToName(t, !1)
            );
          else return null == n ? void 0 : n.name;
        }
      }
    },
    349709: function (e, l, t) {
      t.d(l, {
        Z: function () {
          return h;
        },
      });
      var n = t(200651),
        i = t(192379),
        s = t(120356),
        a = t.n(s),
        o = t(442837),
        r = t(481060),
        u = t(596454),
        d = t(225433),
        c = t(727637),
        m = t(318766),
        f = t(907040),
        g = t(984933),
        v = t(903749),
        x = t(185923),
        p = t(388032),
        j = t(83766);
      function h(e) {
        let {
            className: l,
            guildId: t,
            error: s,
            emojiId: h,
            emojiName: I,
            isRequiredField: N = !0,
            shouldUpdateBothEmojiFields: C = !1,
            setEmojiId: E,
            setEmojiName: S,
          } = e,
          T = (0, v.Z)({ emojiId: h, emojiName: I }),
          Z = (0, o.e7)([g.ZP], () =>
            null != t ? g.ZP.getDefaultChannel(t) : null,
          ),
          k = i.createRef(),
          b = (0, c.Z)(k),
          y = () => {
            S(void 0), E(void 0);
          },
          B = (e) => (l, t) => {
            let n = (null == l ? void 0 : l.id) == null;
            y(),
              n
                ? S(null == l ? void 0 : l.optionallyDiverseSequence)
                : (C && S(null == l ? void 0 : l.name),
                  E(null == l ? void 0 : l.id)),
              t && e();
          },
          R = (e) => {
            e.stopPropagation(), y();
          };
        return (0, n.jsx)(r.FormItem, {
          required: N,
          title: p.intl.string(p.t["3BQmiI"]),
          className: a()(l, j.section),
          error: s,
          children: (0, n.jsx)(r.Popout, {
            animation: r.Popout.Animation.NONE,
            position: "top",
            renderPopout: (e) => {
              let { closePopout: l } = e;
              return (0, n.jsx)(f.Z, {
                closePopout: l,
                pickerIntention: x.Hz.SOUNDBOARD,
                onNavigateAway: l,
                onSelectEmoji: B(l),
                guildId: t,
                channel: Z,
              });
            },
            children: (e, l) => {
              let { isShown: t } = l;
              return (0, n.jsxs)("div", {
                ...e,
                className: j.emojiInput,
                ref: k,
                children: [
                  (0, n.jsx)(m.Z, {
                    className: j.emojiButton,
                    active: t,
                    tabIndex: 0,
                    renderButtonContents:
                      null != h || null != I
                        ? () => (0, n.jsx)(u.Z, { emojiName: I, emojiId: h })
                        : null,
                  }),
                  (0, n.jsx)(r.TextInput, {
                    inputClassName: j.emojiText,
                    placeholder: p.intl.string(p.t.QTK0TE),
                    value: null != T ? ":".concat(T, ":") : "",
                    readOnly: !0,
                  }),
                  b &&
                    null != T &&
                    (0, n.jsx)(d.Z, {
                      ...e,
                      onClick: R,
                      className: j.removeButton,
                    }),
                ],
              });
            },
          }),
        });
      }
    },
    763610: function (e, l, t) {
      t.d(l, {
        Z: function () {
          return d;
        },
      });
      var n = t(200651),
        i = t(192379),
        s = t(120356),
        a = t.n(s),
        o = t(481060),
        r = t(53281),
        u = t(296752);
      function d(e) {
        let {
            filename: l,
            className: t,
            filters: s,
            buttonText: d,
            placeholder: c,
            onFileSelect: m,
          } = e,
          f = i.useRef(null);
        return (0, n.jsxs)("div", {
          className: a()(t, u.fileUpload),
          children: [
            (0, n.jsx)("input", {
              className: u.fileUploadInput,
              tabIndex: -1,
              readOnly: !0,
              placeholder: c,
              type: "text",
              value: l,
            }),
            (0, n.jsxs)(o.Button, {
              size: o.Button.Sizes.MIN,
              className: u.fileUploadButton,
              children: [
                d,
                (0, n.jsx)(r.Z, {
                  ref: f,
                  tabIndex: -1,
                  onChange: (e) => {
                    var l;
                    m(
                      null === (l = e.currentTarget.files) || void 0 === l
                        ? void 0
                        : l[0],
                    );
                  },
                  multiple: !1,
                  filters: s,
                }),
              ],
            }),
          ],
        });
      }
    },
    136735: function (e, l, t) {
      t.r(l),
        t.d(l, {
          default: function () {
            return F;
          },
        }),
        t(47120);
      var n = t(200651),
        i = t(192379),
        s = t(120356),
        a = t.n(s),
        o = t(772848),
        r = t(36793),
        u = t(442837),
        d = t(780384),
        c = t(481060),
        m = t(600164),
        f = t(339085),
        g = t(349709),
        v = t(763610),
        x = t(210887),
        p = t(430824),
        j = t(594174),
        h = t(626135),
        I = t(424218),
        N = t(63063),
        C = t(956664),
        E = t(268350),
        S = t(373228),
        T = t(378233),
        Z = t(419922),
        k = t(611480),
        b = t(981631),
        y = t(388032),
        B = t(24938),
        R = t(434227),
        _ = t(600126);
      let A = new Set([
          "application/json",
          "image/png",
          "image/apng",
          "image/gif",
        ]),
        D = [
          { name: "Sticker file", extensions: ["json", "png", "apng", "gif"] },
        ];
      function w(e, l) {
        h.default.track(b.rMx.STICKER_UPLOAD_COMPLETED, {
          successful: e,
          error: null != l ? l : "",
        });
      }
      let P = (e) => {
          let { stickerPreview: l } = e;
          return (0, n.jsxs)("div", {
            className: B.preview,
            children: [
              (0, n.jsx)("div", {
                className: B.previewDark,
                children:
                  null != l
                    ? l
                    : (0, n.jsx)("img", {
                        src: R,
                        alt: y.intl.string(y.t.qOsjZm),
                      }),
              }),
              (0, n.jsx)("div", {
                className: B.previewLight,
                children:
                  null != l
                    ? l
                    : (0, n.jsx)("img", {
                        src: _,
                        alt: y.intl.string(y.t.YC5NAA),
                      }),
              }),
            ],
          });
        },
        z = (e) => {
          let { sticker: l, previewData: t, onStickerError: i } = e;
          if (null != l) return (0, n.jsx)(Z.ZP, { size: 160, sticker: l });
          if (null == t) return null;
          let { id: s, formatType: a, content: o } = t;
          return (0, n.jsx)(
            Z.ZP,
            {
              assetData: o,
              fileUri: o,
              size: 160,
              sticker: {
                name: s,
                description: "",
                id: s,
                pack_id: "",
                format_type: a,
              },
              onError: i,
            },
            s,
          );
        };
      async function L(e) {
        let l = await (0, C.fD)(e),
          t = new Image();
        (t.src = l), await t.decode();
        let n = (0, r.Ae)(t, 320, 320);
        return (0, C.Bo)(n, e.name, e.type);
      }
      function F(e) {
        var l, t, s, r, Z, R, _, F;
        let { transitionState: U, onClose: M, guildId: O, sticker: K } = e,
          H = (0, u.e7)([x.Z], () => x.Z.theme),
          V = (0, u.e7)([f.ZP], () =>
            (null == K ? void 0 : K.tags) != null
              ? f.ZP.getCustomEmojiById(K.tags)
              : null,
          ),
          Y =
            null !==
              (t =
                null === (l = j.default.getCurrentUser()) || void 0 === l
                  ? void 0
                  : l.isStaff()) &&
            void 0 !== t &&
            t
              ? k.OC
              : k.Ht,
          [q, G] = i.useState(null),
          [W, X] = i.useState(
            null !== (s = null == K ? void 0 : K.name) && void 0 !== s ? s : "",
          ),
          [J, Q] = i.useState({
            file: null,
            filename: null !== (r = (0, T._V)(K)) && void 0 !== r ? r : "",
          }),
          [$, ee] = i.useState(null == V ? void 0 : V.id),
          [el, et] = i.useState(
            null !== (Z = null == V ? void 0 : V.name) && void 0 !== Z
              ? Z
              : null == K
                ? void 0
                : K.tags,
          ),
          [en, ei] = i.useState(
            null !== (R = null == K ? void 0 : K.description) && void 0 !== R
              ? R
              : "",
          ),
          [es, ea] = i.useState(!1),
          [eo, er] = i.useState(null),
          eu = (0, u.e7)([p.Z], () => p.Z.getGuild(O)),
          ed =
            (null == eu ? void 0 : eu.hasFeature(b.oNc.PARTNERED)) ||
            (null == eu ? void 0 : eu.hasFeature(b.oNc.VERIFIED)),
          ec = null != K,
          em = ec || (null == J ? void 0 : J.file) != null,
          ef = 0 === en.length || (en.length >= 2 && en.length <= 100),
          eg =
            !es &&
            (null == eo ? void 0 : eo.isBlocking) !== !0 &&
            W.length >= 2 &&
            (null != $ ||
              null != el ||
              ((null == K ? void 0 : K.tags) != null &&
                (null == K ? void 0 : K.tags) !== "")) &&
            em &&
            ef,
          ev = async (e) => {
            var l;
            if (null == e) return;
            let t =
              null === (l = e.type) || void 0 === l ? void 0 : l.split(";")[0];
            if (!A.has(t)) {
              er({ message: y.intl.string(y.t.B2hGAA), isBlocking: !0 });
              return;
            }
            let n = e;
            if ("image/png" === t && e.size > Y && !(await (0, C.c0)(e))) {
              let l = (n = await L(e)).size > Y;
              h.default.track(b.rMx.STICKER_FILE_RESIZED, {
                original_file_size_bytes: e.size,
                resized_file_size_bytes: n.size,
                resized_file_too_big: l,
              });
            }
            if (n.size > Y) {
              er({
                message: y.intl.formatToPlainString(y.t["3eK7Rk"], {
                  maxSize: (0, I.IC)(Y, { useKibibytes: !0 }),
                }),
                isBlocking: null == J.file,
              }),
                h.default.track(b.rMx.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                  size: n.size,
                  filetype: t,
                });
              return;
            }
            let i = (0, T.Zv)(n.type);
            if (i === S.u3.LOTTIE) {
              if (!ed) {
                er({
                  message: y.intl.format(y.t.RNNjy8, {
                    articleURL: N.Z.getArticleURL(b.BhN.STICKERS_UPLOAD),
                  }),
                  isBlocking: !0,
                });
                return;
              }
              let e = new FileReader();
              e.addEventListener("load", () => {
                G({ id: (0, o.Z)(), formatType: i, content: e.result }),
                  er(null);
              }),
                e.readAsText(n);
            } else {
              let e = await (0, C.fD)(n);
              G({ id: (0, o.Z)(), formatType: i, content: e }), er(null);
            }
            Q({ file: n, filename: n.name });
          },
          ex = async (e) => {
            var l, t, n, i, s, a;
            e.preventDefault();
            let o =
              null !==
                (t =
                  null !== (l = null != $ ? $ : el) && void 0 !== l
                    ? l
                    : null == K
                      ? void 0
                      : K.tags) && void 0 !== t
                ? t
                : "";
            try {
              if ((ea(!0), ec))
                await (0, E.Jf)(
                  O,
                  null !== (n = null == K ? void 0 : K.id) && void 0 !== n
                    ? n
                    : "",
                  { name: W, tags: o, description: en },
                );
              else {
                let e = new FormData();
                e.append("name", W),
                  e.append("tags", o),
                  e.append("description", en),
                  (null == J ? void 0 : J.file) != null &&
                    e.append("file", J.file),
                  (a =
                    null !==
                      (s =
                        null === (i = J.file) || void 0 === i
                          ? void 0
                          : i.type) && void 0 !== s
                      ? s
                      : ""),
                  h.default.track(b.rMx.STICKER_UPLOAD_STARTED, {
                    filetype: a,
                  }),
                  await (0, E.lY)(O, e),
                  w(!0);
              }
              M();
            } catch (e) {
              er({ message: e.body.message, isBlocking: !1 }),
                w(!1, e.body.message);
            } finally {
              ea(!1);
            }
          },
          ep = z({
            sticker: K,
            previewData: q,
            onStickerError: i.useCallback(() => {
              er({ message: y.intl.string(y.t["/WIYNT"]), isBlocking: !0 });
            }, []),
          }),
          ej = ed ? y.t.alYXBA : y.t.kpcMfn;
        return (0, n.jsxs)(c.ModalRoot, {
          transitionState: U,
          "aria-labelledby": "STICKER_UPLOAD_MODAL",
          className: B.modal,
          children: [
            (0, n.jsx)(c.ModalCloseButton, {
              onClick: M,
              className: B.modalClose,
            }),
            (0, n.jsxs)("form", {
              onSubmit: ex,
              className: B.form,
              children: [
                (0, n.jsxs)(c.ModalContent, {
                  className: B.modalContent,
                  children: [
                    (0, n.jsxs)(c.ModalHeader, {
                      direction: m.Z.Direction.VERTICAL,
                      separator: !1,
                      className: B.modalHeader,
                      children: [
                        (0, n.jsx)(c.Heading, {
                          variant: "heading-xl/semibold",
                          className: B.modalHeaderTitle,
                          children: y.intl.string(y.t.yxVsBA),
                        }),
                        (0, n.jsx)(c.Text, {
                          variant: "text-md/normal",
                          children: y.intl.format(ej, {
                            fileSize: (0, I.IC)(k.Ht, { useKibibytes: !0 }),
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)(c.FormSection, {
                      title: y.intl.string(y.t.gjdiKC),
                      className: B.formItem,
                      children: (0, n.jsx)(P, { stickerPreview: ep }),
                    }),
                    (0, n.jsxs)(c.FormSection, {
                      className: a()(B.formItem, B.formItemRow),
                      children: [
                        (0, n.jsx)(c.FormItem, {
                          title: ec
                            ? y.intl.string(y.t.wp36s7)
                            : y.intl.string(y.t.AM3mzc),
                          required: !0,
                          className: B.formItemRowChild,
                          children: ec
                            ? (0, n.jsx)(c.TextInput, {
                                disabled: !0,
                                value:
                                  null !==
                                    (_ = null == J ? void 0 : J.filename) &&
                                  void 0 !== _
                                    ? _
                                    : "",
                              })
                            : (0, n.jsx)(v.Z, {
                                buttonText: y.intl.string(y.t.xEnDUV),
                                filters: D,
                                filename:
                                  null !==
                                    (F = null == J ? void 0 : J.filename) &&
                                  void 0 !== F
                                    ? F
                                    : "",
                                placeholder: y.intl.string(y.t.rUYLJy),
                                onFileSelect: ev,
                              }),
                        }),
                        (0, n.jsx)(g.Z, {
                          className: B.formItemRowChild,
                          guildId: O,
                          emojiId: $,
                          emojiName: el,
                          setEmojiId: ee,
                          setEmojiName: et,
                          shouldUpdateBothEmojiFields: !0,
                        }),
                      ],
                    }),
                    (0, n.jsx)(c.FormItem, {
                      title: y.intl.string(y.t["0VRh6u"]),
                      required: !0,
                      className: B.formItem,
                      children: (0, n.jsx)(c.TextInput, {
                        value: W,
                        onChange: X,
                        placeholder: y.intl.string(y.t["3fGttb"]),
                        maxLength: 30,
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className: B.formItem,
                      children: [
                        (0, n.jsxs)(c.FormTitle, {
                          children: [
                            y.intl.string(y.t.uGccen),
                            (0, n.jsx)(c.Tooltip, {
                              text: y.intl.string(y.t.S6jlDg),
                              children: (e) =>
                                (0, n.jsx)(c.CircleInformationIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: B.infoIcon,
                                  ...e,
                                }),
                            }),
                          ],
                        }),
                        (0, n.jsx)(c.TextArea, {
                          value: en,
                          onChange: ei,
                          placeholder: y.intl.string(y.t.zwR0fX),
                          maxLength: 100,
                        }),
                      ],
                    }),
                    null != eo &&
                      (0, n.jsx)(c.Text, {
                        className: B.formItem,
                        variant: "text-sm/normal",
                        color: "text-danger",
                        children: eo.message,
                      }),
                  ],
                }),
                (0, n.jsxs)(c.ModalFooter, {
                  className: B.modalFooter,
                  children: [
                    (0, n.jsx)(c.Button, {
                      type: "submit",
                      disabled: !eg,
                      children: ec
                        ? y.intl.string(y.t.Arwnen)
                        : y.intl.string(y.t["3UB9aW"]),
                    }),
                    (0, n.jsx)(c.Button, {
                      look: c.Button.Looks.LINK,
                      color: (0, d.ap)(H)
                        ? c.Button.Colors.PRIMARY
                        : c.Button.Colors.WHITE,
                      onClick: M,
                      children: y.intl.string(y.t.oEAioK),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=bdc4cfd61cf40d2544af.js.map
