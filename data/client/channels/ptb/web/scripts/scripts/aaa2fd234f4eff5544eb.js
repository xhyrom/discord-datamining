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
          return o;
        },
      }),
        n(653041);
      var a = n(392711),
        s = n.n(a);
      let o = (e, t) => {
        let n = s().shuffle(e),
          a = n.findIndex((e) => e.value === t);
        if (a > -1) {
          let e = n[a];
          n.splice(a, 1), n.push(e);
        }
        return n;
      };
    },
    624659: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return O;
        },
      }),
        n(47120);
      var a = n(200651),
        s = n(192379),
        o = n(120356),
        r = n.n(o),
        l = n(392711),
        i = n.n(l),
        c = n(481060),
        u = n(110924),
        d = n(600164),
        _ = n(313201),
        E = n(237617),
        b = n(572539),
        m = n(111810),
        f = n(63063),
        h = n(957115),
        C = n(531578),
        M = n(689938),
        A = n(214859),
        T = n(112003);
      function N() {
        return (0, a.jsx)(c.Text, {
          className: A.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: M.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: f.Z.getSubmitRequestURL(),
          }),
        });
      }
      function O(e) {
        var t, n;
        let {
            header: o,
            body: l,
            problems: f,
            transitionState: O,
            feedbackProblems: x = {},
            otherKey: B,
            hasCloseButton: S,
            onSubmit: g,
            onClose: p,
            canDismissForever: Z = !0,
            showHelpdeskLink: I = !0,
          } = e,
          v = (0, u.Z)(f),
          [D, F] = s.useState(!1),
          [j, k] = s.useState(null),
          [R, K] = s.useState(i().shuffle(f)),
          [L, U] = s.useState(""),
          [y, H] = s.useState(!1),
          P = (0, _.Dt)(),
          Y = (0, E.Z)(D),
          G = (0, E.Z)(j),
          w = (0, E.Z)(g),
          z = (0, E.Z)(L),
          V = (0, E.Z)(y),
          W = null != j ? x[j] : null,
          q = null != W;
        return (
          s.useEffect(() => {
            !i().isEqual(v, f) && K((0, h.B)(f, B));
          }, [f, v, B]),
          s.useEffect(
            () => () => {
              w.current({
                problem: G.current,
                dontShowAgain: Y.current,
                feedback: z.current,
                closeClicked: V.current,
              });
            },
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: O,
            "aria-labelledby": P,
            children: [
              (0, a.jsx)(m.Z, {}),
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: r()(A.headerContainer, T.headerContainer),
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: P,
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    className: A.header,
                    children: o,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    className: r()(A.ratingBody, T.headerBody),
                    children:
                      null !== (t = null == W ? void 0 : W.subheader) &&
                      void 0 !== t
                        ? t
                        : l,
                  }),
                  S
                    ? (0, a.jsx)(c.ModalCloseButton, {
                        className: A.modalCloseButton,
                        onClick: function () {
                          H(!0), p();
                        },
                      })
                    : null,
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: T.modalContent,
                children: [
                  q
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        className: A.problemInfo,
                        children: (0, a.jsx)(b.Z, {
                          options: R,
                          onClick: function (e) {
                            let { value: t } = e;
                            k(t), !Object.keys(x).includes(t) && p();
                          },
                        }),
                      }),
                  q
                    ? (0, a.jsxs)(c.FormItem, {
                        className: A.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: L,
                            maxLength: C.iF,
                            onChange: U,
                            className: T.textArea,
                            placeholder:
                              null !== (n = W.hint) && void 0 !== n
                                ? n
                                : M.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                          }),
                          I ? (0, a.jsx)(N, {}) : null,
                        ],
                      })
                    : null,
                ],
              }),
              Z || q
                ? (0, a.jsx)(c.ModalFooter, {
                    className: r()(
                      A.footer,
                      q ? T.submitFooter : T.modalFooter,
                    ),
                    direction: d.Z.Direction.HORIZONTAL,
                    children: q
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(c.Button, {
                              className: T.backButton,
                              size: c.Button.Sizes.NONE,
                              look: c.Button.Looks.LINK,
                              color: c.Button.Colors.PRIMARY,
                              onClick: () => {
                                k(null), U("");
                              },
                              children: M.Z.Messages.BACK,
                            }),
                            (0, a.jsx)(c.Button, {
                              size: c.Button.Sizes.SMALL,
                              onClick: p,
                              children: M.Z.Messages.SUBMIT,
                            }),
                          ],
                        })
                      : Z
                        ? (0, a.jsx)(c.Checkbox, {
                            size: 24,
                            type: c.Checkbox.Types.INVERTED,
                            value: D,
                            onChange: () => F(!D),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-md/normal",
                              children: M.Z.Messages.FEEDBACK_DONT_SHOW_AGAIN,
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
      var a = n(200651);
      n(192379);
      var s = n(120356),
        o = n.n(s),
        r = n(481060),
        l = n(259580),
        i = n(20535);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: s,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, a.jsx)("div", {
          className: o()(i.root, s),
          children: t.map((e, t) =>
            (0, a.jsxs)(
              r.Clickable,
              {
                onClick: () => n(e),
                className: o()(i.option, c),
                children: [
                  (0, a.jsx)(r.Text, {
                    className: i.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, a.jsx)(l.Z, {
                      className: i.caret,
                      direction: l.Z.Directions.RIGHT,
                    }),
                ],
              },
              t,
            ),
          ),
        });
      }
    },
    111810: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(192379),
        s = n(252618),
        o = n(358085),
        r = n(689938);
      function l() {
        return (
          a.useEffect(() => {
            !o.isPlatformEmbedded &&
              (0, s.EM)({
                messages: [
                  r.Z.Messages.GO_LIVE_HEY,
                  r.Z.Messages.GO_LIVE_LOOK,
                  r.Z.Messages.GO_LIVE_LISTEN,
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
          return i;
        },
        YA: function () {
          return o;
        },
      });
      var a,
        s,
        o,
        r,
        l = n(689938);
      function i() {
        return [
          {
            value: "too_many_notifications",
            label: l.Z.Messages.MUTE_FEEDBACK_TOO_MANY_NOTIFICATIONS,
          },
          {
            value: "temporary_break",
            label: l.Z.Messages.MUTE_FEEDBACK_TEMPORARY_BREAK,
          },
          { value: "annoying", label: l.Z.Messages.MUTE_FEEDBACK_ANNOYING },
          { value: "unsafe", label: l.Z.Messages.MUTE_FEEDBACK_UNSAFE },
          { value: "spam", label: l.Z.Messages.MUTE_FEEDBACK_SPAM },
          { value: "other", label: l.Z.Messages.MUTE_FEEDBACK_OTHER },
        ];
      }
      function c() {
        return [
          {
            value: "confusion",
            label: l.Z.Messages.BLOCK_USER_FEEDBACK_OPTION_CONFUSION,
          },
          {
            value: "does_not_achieve_wants",
            label:
              l.Z.Messages.BLOCK_USER_FEEDBACK_OPTION_DOES_NOT_ACHIEVE_WANTS,
          },
          {
            value: "hard_to_access",
            label: l.Z.Messages.BLOCK_USER_FEEDBACK_OPTION_HARD_TO_ACCESS,
          },
          {
            value: "something_else",
            label: l.Z.Messages.BLOCK_USER_FEEDBACK_OPTION_SOMETHING_ELSE,
          },
        ];
      }
      ((a = o || (o = {})).TOO_MANY_NOTIFICATIONS = "too_many_notifications"),
        (a.TEMPORARY_BREAK = "temporary_break"),
        (a.ANNOYING = "annoying"),
        (a.UNSAFE = "unsafe"),
        (a.SPAM = "spam"),
        (a.OTHER = "other"),
        ((s = r || (r = {})).CONFUSION = "confusion"),
        (s.DOES_NOT_ACHIEVE_WANTS = "does_not_achieve_wants"),
        (s.HARD_TO_ACCESS = "hard_to_access"),
        (s.SOMETHING_ELSE = "something_else");
    },
    924400: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(626135),
        s = n(981631);
      function o(e, t, n, o) {
        a.default.track(s.rMx.DM_MUTE_FEEDBACK_SUBMITTED, {
          reason: e,
          feedback: t,
          skipped: n,
          dont_show_again: o,
        });
      }
    },
    408561: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var a = n(200651),
        s = n(192379),
        o = n(75124),
        r = n(442837),
        l = n(704215),
        i = n(481060),
        c = n(605236),
        u = n(624659),
        d = n(594174),
        _ = n(626135),
        E = n(924400),
        b = n(987562),
        m = n(981631),
        f = n(689938);
      function h(e) {
        let { transitionState: t, onClose: h, channel: C } = e,
          M = (0, o.Z)(b.TL),
          A = (0, r.e7)([d.default], () =>
            d.default.getUser(C.getRecipientId()),
          );
        return (
          s.useEffect(() => {
            _.default.track(m.rMx.OPEN_MODAL, {
              type: "DM Mute Feedback Modal",
            });
          }, []),
          (0, a.jsx)(u.Z, {
            hasCloseButton: !0,
            header: f.Z.Messages.MUTE_FEEDBACK_HEADER,
            body: f.Z.Messages.MUTE_FEEDBACK_BODY.format({
              username: null == A ? void 0 : A.username,
            }),
            problems: M,
            feedbackProblems: {
              [b.YA.OTHER]: {
                subheader: f.Z.Messages.MUTE_FEEDBACK_TEXTAREA_BODY,
                hint: f.Z.Messages.MUTE_FEEDBACK_TEXTAREA_HINT,
              },
            },
            onSubmit: function (e) {
              let {
                problem: t,
                dontShowAgain: s,
                feedback: o,
                closeClicked: r,
              } = e;
              s && (0, c.EW)(l.z.USER_DM_MUTE_FEEDBACK);
              let u = null == t || r;
              (0, E.Z)(t, o, u, s),
                !u &&
                  (0, i.openModalLazy)(async () => {
                    let { default: e } = await n
                      .e("14466")
                      .then(n.bind(n, 729328));
                    return (t) =>
                      (0, a.jsx)(e, {
                        body: f.Z.Messages.MUTE_FEEDBACK_THANKS,
                        ...t,
                      });
                  });
            },
            onClose: h,
            transitionState: t,
            otherKey: b.YA.OTHER,
            showHelpdeskLink: !1,
          })
        );
      }
    },
    214859: function (e, t, n) {
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
    112003: function (e, t, n) {
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
    20535: function (e, t, n) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
  },
]);
//# sourceMappingURL=aaa2fd234f4eff5544eb.js.map
