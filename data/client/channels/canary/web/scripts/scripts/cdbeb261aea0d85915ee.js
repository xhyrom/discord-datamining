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
          return s;
        },
      }),
        n(653041);
      var a = n(392711),
        o = n.n(a);
      let s = (e, t) => {
        let n = o().shuffle(e),
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
          return p;
        },
      }),
        n(47120);
      var a = n(735250),
        o = n(470079),
        s = n(120356),
        r = n.n(s),
        l = n(392711),
        i = n.n(l),
        c = n(481060),
        u = n(110924),
        d = n(600164),
        E = n(313201),
        _ = n(237617),
        b = n(572539),
        m = n(111810),
        f = n(63063),
        h = n(957115),
        M = n(531578),
        x = n(689938),
        A = n(214859),
        C = n(112003);
      function T() {
        return (0, a.jsx)(c.Text, {
          className: A.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: x.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: f.Z.getSubmitRequestURL(),
          }),
        });
      }
      function p(e) {
        var t, n;
        let {
            header: s,
            body: l,
            problems: f,
            transitionState: p,
            feedbackProblems: B = {},
            otherKey: N,
            hasCloseButton: g,
            onSubmit: Z,
            onClose: j,
            canDismissForever: k = !0,
            showHelpdeskLink: v = !0,
          } = e,
          O = (0, u.Z)(f),
          [F, D] = o.useState(!1),
          [S, I] = o.useState(null),
          [R, y] = o.useState(i().shuffle(f)),
          [K, L] = o.useState(""),
          [U, H] = o.useState(!1),
          Y = (0, E.Dt)(),
          P = (0, _.Z)(F),
          z = (0, _.Z)(S),
          G = (0, _.Z)(Z),
          w = (0, _.Z)(K),
          V = (0, _.Z)(U),
          W = null != S ? B[S] : null,
          q = null != W;
        return (
          o.useEffect(() => {
            !i().isEqual(O, f) && y((0, h.B)(f, N));
          }, [f, O, N]),
          o.useEffect(
            () => () => {
              G.current({
                problem: z.current,
                dontShowAgain: P.current,
                feedback: w.current,
                closeClicked: V.current,
              });
            },
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: p,
            "aria-labelledby": Y,
            children: [
              (0, a.jsx)(m.Z, {}),
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: r()(A.headerContainer, C.headerContainer),
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: Y,
                    variant: "heading-xl/bold",
                    color: "header-primary",
                    className: A.header,
                    children: s,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    className: r()(A.ratingBody, C.headerBody),
                    children:
                      null !== (t = null == W ? void 0 : W.subheader) &&
                      void 0 !== t
                        ? t
                        : l,
                  }),
                  g
                    ? (0, a.jsx)(c.ModalCloseButton, {
                        className: A.modalCloseButton,
                        onClick: function () {
                          H(!0), j();
                        },
                      })
                    : null,
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: C.modalContent,
                children: [
                  q
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        className: A.problemInfo,
                        children: (0, a.jsx)(b.Z, {
                          options: R,
                          onClick: function (e) {
                            let { value: t } = e;
                            I(t), !Object.keys(B).includes(t) && j();
                          },
                        }),
                      }),
                  q
                    ? (0, a.jsxs)(c.FormItem, {
                        className: A.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: K,
                            maxLength: M.iF,
                            onChange: L,
                            className: C.textArea,
                            placeholder:
                              null !== (n = W.hint) && void 0 !== n
                                ? n
                                : x.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                          }),
                          v ? (0, a.jsx)(T, {}) : null,
                        ],
                      })
                    : null,
                ],
              }),
              k || q
                ? (0, a.jsx)(c.ModalFooter, {
                    className: r()(
                      A.footer,
                      q ? C.submitFooter : C.modalFooter,
                    ),
                    direction: d.Z.Direction.HORIZONTAL,
                    children: q
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(c.Button, {
                              className: C.backButton,
                              size: c.Button.Sizes.NONE,
                              look: c.Button.Looks.LINK,
                              color: c.Button.Colors.PRIMARY,
                              onClick: () => {
                                I(null), L("");
                              },
                              children: x.Z.Messages.BACK,
                            }),
                            (0, a.jsx)(c.Button, {
                              size: c.Button.Sizes.SMALL,
                              onClick: j,
                              children: x.Z.Messages.SUBMIT,
                            }),
                          ],
                        })
                      : k
                        ? (0, a.jsx)(c.Checkbox, {
                            size: 24,
                            type: c.Checkbox.Types.INVERTED,
                            value: F,
                            onChange: () => D(!F),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-md/normal",
                              children: x.Z.Messages.FEEDBACK_DONT_SHOW_AGAIN,
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
      var a = n(735250);
      n(470079);
      var o = n(120356),
        s = n.n(o),
        r = n(481060),
        l = n(259580),
        i = n(20535);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: o,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, a.jsx)("div", {
          className: s()(i.root, o),
          children: t.map((e, t) =>
            (0, a.jsxs)(
              r.Clickable,
              {
                onClick: () => n(e),
                className: s()(i.option, c),
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
      var a = n(470079),
        o = n(252618),
        s = n(358085),
        r = n(689938);
      function l() {
        return (
          a.useEffect(() => {
            !s.isPlatformEmbedded &&
              (0, o.EM)({
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
          return s;
        },
      });
      var a,
        o,
        s,
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
          { value: "placeholder", label: "Placeholder" },
          { value: "other", label: l.Z.Messages.MUTE_FEEDBACK_OTHER },
        ];
      }
      ((a = s || (s = {})).TOO_MANY_NOTIFICATIONS = "too_many_notifications"),
        (a.TEMPORARY_BREAK = "temporary_break"),
        (a.ANNOYING = "annoying"),
        (a.UNSAFE = "unsafe"),
        (a.SPAM = "spam"),
        (a.OTHER = "other"),
        ((o = r || (r = {})).PLACEHOLDER = "placeholder"),
        (o.OTHER = "other");
    },
    924400: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(626135),
        o = n(981631);
      function s(e, t, n, s) {
        a.default.track(o.rMx.DM_MUTE_FEEDBACK_SUBMITTED, {
          reason: e,
          feedback: t,
          skipped: n,
          dont_show_again: s,
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
      var a = n(735250),
        o = n(470079),
        s = n(77866),
        r = n(442837),
        l = n(704215),
        i = n(481060),
        c = n(605236),
        u = n(624659),
        d = n(594174),
        E = n(626135),
        _ = n(924400),
        b = n(987562),
        m = n(981631),
        f = n(689938);
      function h(e) {
        let { transitionState: t, onClose: h, channel: M } = e,
          x = (0, s.Z)(b.TL),
          A = (0, r.e7)([d.default], () =>
            d.default.getUser(M.getRecipientId()),
          );
        return (
          o.useEffect(() => {
            E.default.track(m.rMx.OPEN_MODAL, {
              type: "DM Mute Feedback Modal",
            });
          }, []),
          (0, a.jsx)(u.Z, {
            hasCloseButton: !0,
            header: f.Z.Messages.MUTE_FEEDBACK_HEADER,
            body: f.Z.Messages.MUTE_FEEDBACK_BODY.format({
              username: null == A ? void 0 : A.username,
            }),
            problems: x,
            feedbackProblems: {
              [b.YA.OTHER]: {
                subheader: f.Z.Messages.MUTE_FEEDBACK_TEXTAREA_BODY,
                hint: f.Z.Messages.MUTE_FEEDBACK_TEXTAREA_HINT,
              },
            },
            onSubmit: function (e) {
              let {
                problem: t,
                dontShowAgain: o,
                feedback: s,
                closeClicked: r,
              } = e;
              o && (0, c.EW)(l.z.USER_DM_MUTE_FEEDBACK);
              let u = null == t || r;
              (0, _.Z)(t, s, u, o),
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
//# sourceMappingURL=cdbeb261aea0d85915ee.js.map
