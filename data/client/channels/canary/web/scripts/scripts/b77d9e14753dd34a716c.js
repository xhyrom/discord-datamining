"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10620"],
  {
    936445: function (e) {
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
          return a;
        },
      }),
        n(653041);
      var s = n(392711),
        o = n.n(s);
      let a = (e, t) => {
        let n = o().shuffle(e),
          s = n.findIndex((e) => e.value === t);
        if (s > -1) {
          let e = n[s];
          n.splice(s, 1), n.push(e);
        }
        return n;
      };
    },
    624659: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      }),
        n(47120);
      var s = n(735250),
        o = n(470079),
        a = n(392711),
        l = n.n(a),
        r = n(481060),
        i = n(110924),
        c = n(600164),
        u = n(112831),
        d = n(313201),
        _ = n(237617),
        b = n(572539),
        E = n(111810),
        m = n(63063),
        f = n(957115),
        M = n(531578),
        x = n(689938),
        h = n(940256);
      function p() {
        return (0, s.jsx)(r.Text, {
          className: h.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: x.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: m.Z.getSubmitRequestURL(),
          }),
        });
      }
      function C(e) {
        let {
            header: t,
            body: n,
            problems: a,
            transitionState: m,
            feedbackProblems: C = [],
            otherKey: N,
            hasCloseButton: A,
            onSubmit: T,
            onClose: Z,
            canDismissForever: g = !0,
            showHelpdeskLink: j = !0,
          } = e,
          B = (0, i.Z)(a),
          [S, I] = o.useState(!1),
          [O, v] = o.useState(null),
          [k, R] = o.useState(l().shuffle(a)),
          [D, F] = o.useState(""),
          y = (0, d.Dt)(),
          L = (0, _.Z)(S),
          K = (0, _.Z)(O),
          U = (0, _.Z)(T),
          H = (0, _.Z)(D),
          Y = null != O && C.includes(O);
        return (
          o.useEffect(() => {
            !l().isEqual(B, a) && R((0, f.B)(a, N));
          }, [a, B, N]),
          o.useEffect(
            () => () => {
              U.current({
                problem: K.current,
                dontShowAgain: L.current,
                feedback: H.current,
              });
            },
            [],
          ),
          (0, s.jsxs)(r.ModalRoot, {
            transitionState: m,
            className: h.__invalid_modalRoot,
            "aria-labelledby": y,
            children: [
              (0, s.jsx)(E.Z, {}),
              (0, s.jsxs)(r.ModalHeader, {
                separator: !1,
                className: h.headerContainer,
                children: [
                  (0, s.jsx)(u.Z, {
                    id: y,
                    className: h.header,
                    color: u.Z.Colors.CUSTOM,
                    size: u.Z.Sizes.SIZE_24,
                    children: t,
                  }),
                  (0, s.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: h.ratingBody,
                    children: n,
                  }),
                  A
                    ? (0, s.jsx)(r.ModalCloseButton, {
                        className: h.modalCloseButton,
                        onClick: Z,
                      })
                    : null,
                ],
              }),
              (0, s.jsxs)(r.ModalContent, {
                className: h.__invalid_content,
                children: [
                  Y
                    ? null
                    : (0, s.jsx)(r.FormItem, {
                        className: h.problemInfo,
                        children: (0, s.jsx)(b.Z, {
                          options: k,
                          onClick: function (e) {
                            let { value: t } = e;
                            v(t), !C.includes(t) && Z();
                          },
                        }),
                      }),
                  Y
                    ? (0, s.jsxs)(r.FormItem, {
                        title: x.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: h.problemInfo,
                        children: [
                          (0, s.jsx)(r.TextArea, {
                            value: D,
                            maxLength: M.iF,
                            onChange: F,
                          }),
                          j ? (0, s.jsx)(p, {}) : null,
                        ],
                      })
                    : null,
                ],
              }),
              g || Y
                ? (0, s.jsx)(r.ModalFooter, {
                    className: h.footer,
                    direction: c.Z.Direction.HORIZONTAL,
                    children: Y
                      ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(r.Button, {
                              size: r.Button.Sizes.SMALL,
                              look: r.Button.Looks.LINK,
                              color: r.Button.Colors.PRIMARY,
                              onClick: () => {
                                v(null), F("");
                              },
                              children: x.Z.Messages.BACK,
                            }),
                            (0, s.jsx)(r.Button, {
                              size: r.Button.Sizes.SMALL,
                              onClick: Z,
                              children: x.Z.Messages.SUBMIT,
                            }),
                          ],
                        })
                      : g
                        ? (0, s.jsx)(r.Checkbox, {
                            size: 18,
                            type: r.Checkbox.Types.INVERTED,
                            value: S,
                            onChange: () => I(!S),
                            children: (0, s.jsx)(r.Text, {
                              variant: "text-sm/normal",
                              children: x.Z.Messages.DONT_SHOW_AGAIN,
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
      var s = n(735250);
      n(470079);
      var o = n(120356),
        a = n.n(o),
        l = n(481060),
        r = n(259580),
        i = n(373521);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: o,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, s.jsx)("div", {
          className: a()(i.root, o),
          children: t.map((e, t) =>
            (0, s.jsxs)(
              l.Clickable,
              {
                onClick: () => n(e),
                className: a()(i.option, c),
                children: [
                  (0, s.jsx)(l.Text, {
                    className: i.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, s.jsx)(r.Z, {
                      className: i.caret,
                      direction: r.Z.Directions.RIGHT,
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
          return r;
        },
      });
      var s = n(470079),
        o = n(252618),
        a = n(358085),
        l = n(689938);
      function r() {
        return (
          s.useEffect(() => {
            !a.isPlatformEmbedded &&
              (0, o.EM)({
                messages: [
                  l.Z.Messages.GO_LIVE_HEY,
                  l.Z.Messages.GO_LIVE_LOOK,
                  l.Z.Messages.GO_LIVE_LISTEN,
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
        T: function () {
          return l;
        },
        Y: function () {
          return o;
        },
      });
      var s,
        o,
        a = n(689938);
      function l() {
        return [
          {
            value: "too_many_notifications",
            label: a.Z.Messages.MUTE_FEEDBACK_TOO_MANY_NOTIFICATIONS,
          },
          {
            value: "temporary_break",
            label: a.Z.Messages.MUTE_FEEDBACK_TEMPORARY_BREAK,
          },
          { value: "annoying", label: a.Z.Messages.MUTE_FEEDBACK_ANNOYING },
          { value: "unsafe", label: a.Z.Messages.MUTE_FEEDBACK_UNSAFE },
          { value: "spam", label: a.Z.Messages.MUTE_FEEDBACK_SPAM },
          { value: "other", label: a.Z.Messages.MUTE_FEEDBACK_OTHER },
        ];
      }
      ((s = o || (o = {})).TOO_MANY_NOTIFICATIONS = "too_many_notifications"),
        (s.TEMPORARY_BREAK = "temporary_break"),
        (s.ANNOYING = "annoying"),
        (s.UNSAFE = "unsafe"),
        (s.SPAM = "spam"),
        (s.OTHER = "other");
    },
    408561: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        });
      var s = n(735250),
        o = n(470079),
        a = n(77866),
        l = n(442837),
        r = n(704215),
        i = n(481060),
        c = n(605236),
        u = n(624659),
        d = n(594174),
        _ = n(626135),
        b = n(987562),
        E = n(981631),
        m = n(689938);
      let f = [b.Y.OTHER];
      function M(e) {
        let { transitionState: t, onClose: M, channel: x } = e,
          h = (0, a.Z)(b.T),
          p = (0, l.e7)([d.default], () =>
            d.default.getUser(x.getRecipientId()),
          );
        return (
          o.useEffect(() => {
            _.default.track(E.rMx.OPEN_MODAL, {
              type: "DM Mute Feedback Modal",
            });
          }, []),
          (0, s.jsx)(u.Z, {
            header: m.Z.Messages.MUTE_FEEDBACK_HEADER,
            body: m.Z.Messages.MUTE_FEEDBACK_BODY.format({
              username: null == p ? void 0 : p.username,
            }),
            problems: h,
            feedbackProblems: f,
            onSubmit: function (e) {
              let { problem: t, dontShowAgain: o } = e;
              o && (0, c.EW)(r.z.USER_DM_MUTE_FEEDBACK);
              null != t &&
                (0, i.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("14466")
                    .then(n.bind(n, 729328));
                  return (t) =>
                    (0, s.jsx)(e, {
                      body: m.Z.Messages.MUTE_FEEDBACK_THANKS,
                      ...t,
                    });
                });
            },
            onClose: M,
            transitionState: t,
            otherKey: b.Y.OTHER,
          })
        );
      }
    },
    940256: function (e, t, n) {
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
    373521: function (e, t, n) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
  },
]);
//# sourceMappingURL=b77d9e14753dd34a716c.js.map
