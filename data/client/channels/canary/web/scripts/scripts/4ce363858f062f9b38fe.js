"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10620"],
  {
    829302: function (e) {
      e.exports = "/assets/0b3b85ccbde560fed689.svg";
    },
    900564: function (e) {
      e.exports = "/assets/a8315da78d79c09bb24e.svg";
    },
    670903: function (e) {
      e.exports = "/assets/b2ae62e3f77efa49ca11.svg";
    },
    957115: function (e, t, n) {
      n.d(t, {
        B: function () {
          return l;
        },
      }),
        n(653041);
      var o = n(392711),
        a = n.n(o);
      let l = (e, t) => {
        let n = a().shuffle(e),
          o = n.findIndex((e) => e.value === t);
        if (o > -1) {
          let e = n[o];
          n.splice(o, 1), n.push(e);
        }
        return n;
      };
    },
    624659: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      }),
        n(47120);
      var o = n(200651),
        a = n(192379),
        l = n(120356),
        r = n.n(l),
        i = n(392711),
        s = n.n(i),
        c = n(481060),
        u = n(493773),
        d = n(110924),
        b = n(600164),
        m = n(313201),
        f = n(237617),
        h = n(572539),
        _ = n(648159),
        x = n(63063),
        p = n(957115),
        g = n(531578),
        k = n(388032),
        v = n(720816),
        C = n(574087);
      function j() {
        return (0, o.jsx)(c.Text, {
          className: v.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: k.intl.format(k.t.ybi2tL, {
            helpdeskURL: x.Z.getSubmitRequestURL(),
          }),
        });
      }
      function N(e) {
        var t, n;
        let {
            header: l,
            body: i,
            problems: x,
            transitionState: N,
            feedbackProblems: E = {},
            otherKey: S,
            hasCloseButton: y,
            onSubmit: B,
            onClose: T,
            canDismissForever: A = !0,
            showHelpdeskLink: M = !0,
          } = e,
          I = (0, d.Z)(x),
          [O, Z] = a.useState(!1),
          [F, L] = a.useState(null),
          [R, H] = a.useState(s().shuffle(x)),
          [D, U] = a.useState(""),
          [Y, w] = a.useState(!1),
          P = (0, m.Dt)(),
          z = (0, f.Z)(O),
          K = (0, f.Z)(F),
          G = (0, f.Z)(B),
          W = (0, f.Z)(D),
          V = (0, f.Z)(Y),
          q = null != F ? E[F] : null,
          Q = null != q;
        return (
          a.useEffect(() => {
            !s().isEqual(I, x) && H((0, p.B)(x, S));
          }, [x, I, S]),
          (0, u.Z)(() => () => {
            G.current({
              problem: K.current,
              dontShowAgain: z.current,
              feedback: W.current,
              closeClicked: V.current,
            });
          }),
          (0, o.jsxs)(c.ModalRoot, {
            transitionState: N,
            "aria-labelledby": P,
            children: [
              (0, o.jsx)(_.Z, {}),
              (0, o.jsxs)(c.ModalHeader, {
                separator: !1,
                className: r()(v.headerContainer, C.headerContainer),
                children: [
                  (0, o.jsx)(c.Heading, {
                    id: P,
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    className: v.header,
                    children: l,
                  }),
                  (0, o.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    className: r()(v.ratingBody, C.headerBody),
                    children:
                      null !== (t = null == q ? void 0 : q.subheader) &&
                      void 0 !== t
                        ? t
                        : i,
                  }),
                  y
                    ? (0, o.jsx)(c.ModalCloseButton, {
                        className: v.modalCloseButton,
                        onClick: function () {
                          w(!0), T();
                        },
                      })
                    : null,
                ],
              }),
              (0, o.jsxs)(c.ModalContent, {
                className: C.modalContent,
                children: [
                  Q
                    ? null
                    : (0, o.jsx)(c.FormItem, {
                        className: v.problemInfo,
                        children: (0, o.jsx)(h.Z, {
                          options: R,
                          onClick: function (e) {
                            let { value: t } = e;
                            L(t), !Object.keys(E).includes(t) && T();
                          },
                        }),
                      }),
                  Q
                    ? (0, o.jsxs)(c.FormItem, {
                        className: v.problemInfo,
                        children: [
                          (0, o.jsx)(c.TextArea, {
                            value: D,
                            maxLength: g.iF,
                            onChange: U,
                            className: C.textArea,
                            placeholder:
                              null !== (n = q.hint) && void 0 !== n
                                ? n
                                : k.intl.string(k.t.h95hcn),
                          }),
                          M ? (0, o.jsx)(j, {}) : null,
                        ],
                      })
                    : null,
                ],
              }),
              A || Q
                ? (0, o.jsx)(c.ModalFooter, {
                    className: r()(
                      v.footer,
                      Q ? C.submitFooter : C.modalFooter,
                    ),
                    direction: b.Z.Direction.HORIZONTAL,
                    children: Q
                      ? (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)(c.Button, {
                              className: C.backButton,
                              size: c.Button.Sizes.NONE,
                              look: c.Button.Looks.LINK,
                              color: c.Button.Colors.PRIMARY,
                              onClick: () => {
                                L(null), U("");
                              },
                              children: k.intl.string(k.t["13/7kZ"]),
                            }),
                            (0, o.jsx)(c.Button, {
                              size: c.Button.Sizes.SMALL,
                              onClick: T,
                              children: k.intl.string(k.t.geKm7u),
                            }),
                          ],
                        })
                      : A
                        ? (0, o.jsx)(c.Checkbox, {
                            size: 24,
                            type: c.Checkbox.Types.INVERTED,
                            value: O,
                            onChange: () => Z(!O),
                            children: (0, o.jsx)(c.Text, {
                              variant: "text-md/normal",
                              children: k.intl.string(k.t.lkWab2),
                            }),
                          })
                        : null,
                  })
                : null,
            ],
          })
        );
      }
    },
    572539: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var o = n(200651);
      n(192379);
      var a = n(120356),
        l = n.n(a),
        r = n(481060),
        i = n(259580),
        s = n(995181);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: a,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, o.jsx)("div", {
          className: l()(s.root, a),
          children: t.map((e, t) =>
            (0, o.jsxs)(
              r.Clickable,
              {
                onClick: () => n(e),
                className: l()(s.option, c),
                children: [
                  (0, o.jsx)(r.Text, {
                    className: s.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, o.jsx)(i.Z, {
                      className: s.caret,
                      direction: i.Z.Directions.RIGHT,
                    }),
                ],
              },
              t,
            ),
          ),
        });
      }
    },
    648159: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var o = n(192379),
        a = n(252618),
        l = n(358085),
        r = n(388032);
      function i() {
        return (
          o.useEffect(() => {
            !l.isPlatformEmbedded &&
              (0, a.EM)({
                messages: [
                  r.intl.string(r.t.KIX3cn),
                  r.intl.string(r.t["UbO+8v"]),
                  r.intl.string(r.t.MbySu7),
                ],
                interval: 600,
                count: 20,
                onlyWhenBlurred: !0,
              });
          }, []),
          null
        );
      }
    },
    987562: function (e, t, n) {
      n.d(t, {
        CE: function () {
          return c;
        },
        F5: function () {
          return r;
        },
        TL: function () {
          return s;
        },
        YA: function () {
          return l;
        },
      });
      var o,
        a,
        l,
        r,
        i = n(388032);
      function s() {
        return [
          { value: "too_many_notifications", label: i.intl.string(i.t.bQHhT0) },
          { value: "temporary_break", label: i.intl.string(i.t.OuPkvL) },
          { value: "annoying", label: i.intl.string(i.t["3kmAMD"]) },
          { value: "unsafe", label: i.intl.string(i.t.nmW7jI) },
          { value: "spam", label: i.intl.string(i.t.cCPYjo) },
          { value: "other", label: i.intl.string(i.t["7ZIIJy"]) },
        ];
      }
      function c() {
        return [
          { value: "confusion", label: i.intl.string(i.t["64Oph4"]) },
          {
            value: "does_not_achieve_wants",
            label: i.intl.string(i.t["wH5R/v"]),
          },
          { value: "hard_to_access", label: i.intl.string(i.t["4uZBRk"]) },
          { value: "something_else", label: i.intl.string(i.t.YicFbG) },
        ];
      }
      ((o = l || (l = {})).TOO_MANY_NOTIFICATIONS = "too_many_notifications"),
        (o.TEMPORARY_BREAK = "temporary_break"),
        (o.ANNOYING = "annoying"),
        (o.UNSAFE = "unsafe"),
        (o.SPAM = "spam"),
        (o.OTHER = "other"),
        ((a = r || (r = {})).CONFUSION = "confusion"),
        (a.DOES_NOT_ACHIEVE_WANTS = "does_not_achieve_wants"),
        (a.HARD_TO_ACCESS = "hard_to_access"),
        (a.SOMETHING_ELSE = "something_else");
    },
    924400: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var o = n(626135),
        a = n(981631);
      function l(e, t, n, l) {
        o.default.track(a.rMx.DM_MUTE_FEEDBACK_SUBMITTED, {
          reason: e,
          feedback: t,
          skipped: n,
          dont_show_again: l,
        });
      }
    },
    408561: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var o = n(200651),
        a = n(192379),
        l = n(442837),
        r = n(704215),
        i = n(481060),
        s = n(211266),
        c = n(605236),
        u = n(624659),
        d = n(594174),
        b = n(626135),
        m = n(924400),
        f = n(987562),
        h = n(981631),
        _ = n(388032);
      function x(e) {
        let { transitionState: t, onClose: x, channel: p } = e,
          g = (0, s.Z)(f.TL),
          k = (0, l.e7)([d.default], () =>
            d.default.getUser(p.getRecipientId()),
          );
        return (
          a.useEffect(() => {
            b.default.track(h.rMx.OPEN_MODAL, {
              type: "DM Mute Feedback Modal",
            });
          }, []),
          (0, o.jsx)(u.Z, {
            hasCloseButton: !0,
            header: _.intl.string(_.t.SxsBFB),
            body: _.intl.formatToPlainString(_.t["7kb7z8"], {
              username: null == k ? void 0 : k.username,
            }),
            problems: g,
            feedbackProblems: {
              [f.YA.OTHER]: {
                subheader: _.intl.string(_.t.VQkdtL),
                hint: _.intl.string(_.t.EG3N9f),
              },
            },
            onSubmit: function (e) {
              let {
                problem: t,
                dontShowAgain: a,
                feedback: l,
                closeClicked: s,
              } = e;
              a && (0, c.EW)(r.z.USER_DM_MUTE_FEEDBACK);
              let u = null == t || s;
              (0, m.Z)(t, l, u, a),
                !u &&
                  (0, i.openModalLazy)(async () => {
                    let { default: e } = await n
                      .e("14466")
                      .then(n.bind(n, 729328));
                    return (t) =>
                      (0, o.jsx)(e, { body: _.intl.string(_.t.sYrCub), ...t });
                  });
            },
            onClose: x,
            transitionState: t,
            otherKey: f.YA.OTHER,
            showHelpdeskLink: !1,
          })
        );
      }
    },
    720816: function (e, t, n) {
      e.exports = {
        headerContainer: "headerContainer_b58b14",
        modalCloseButton: "modalCloseButton_b58b14",
        helpdeskLink: "helpdeskLink_b58b14",
        header: "header_b58b14",
        ratingBody: "ratingBody_b58b14",
        footer: "footer_b58b14",
        ratingsSelector: "ratingsSelector_b58b14",
        emojis: "emojis_b58b14",
        problemInfo: "problemInfo_b58b14",
        selected: "selected_b58b14",
        emojiSad: "emojiSad_b58b14 emoji_b58b14",
        emojiNeutral: "emojiNeutral_b58b14 emoji_b58b14",
        emojiHappy: "emojiHappy_b58b14 emoji_b58b14",
      };
    },
    574087: function (e, t, n) {
      e.exports = {
        headerContainer: "headerContainer_ca6d9c",
        headerBody: "headerBody_ca6d9c",
        modalContent: "modalContent_ca6d9c",
        modalFooter: "modalFooter_ca6d9c",
        submitFooter: "submitFooter_ca6d9c",
        textArea: "textArea_ca6d9c",
        backButton: "backButton_ca6d9c",
      };
    },
    995181: function (e, t, n) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
  },
]);
//# sourceMappingURL=4ce363858f062f9b38fe.js.map
