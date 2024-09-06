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
        E = n(572539),
        b = n(111810),
        f = n(63063),
        m = n(957115),
        M = n(531578),
        x = n(689938),
        h = n(940256);
      function p() {
        return (0, s.jsx)(r.Text, {
          className: h.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: x.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: f.Z.getSubmitRequestURL(),
          }),
        });
      }
      function C(e) {
        let {
            header: t,
            body: n,
            problems: a,
            transitionState: f,
            feedbackProblems: C = [],
            otherKey: T,
            hasCloseButton: Z,
            onSubmit: A,
            onClose: N,
            canDismissForever: g = !0,
            showHelpdeskLink: B = !0,
          } = e,
          j = (0, i.Z)(a),
          [S, I] = o.useState(!1),
          [v, O] = o.useState(null),
          [k, D] = o.useState(l().shuffle(a)),
          [R, F] = o.useState(""),
          y = (0, d.Dt)(),
          L = (0, _.Z)(S),
          U = (0, _.Z)(v),
          K = (0, _.Z)(A),
          H = (0, _.Z)(R),
          Y = null != v && C.includes(v);
        return (
          o.useEffect(() => {
            !l().isEqual(j, a) && D((0, m.B)(a, T));
          }, [a, j, T]),
          o.useEffect(
            () => () => {
              K.current({
                problem: U.current,
                dontShowAgain: L.current,
                feedback: H.current,
              });
            },
            [],
          ),
          (0, s.jsxs)(r.ModalRoot, {
            transitionState: f,
            className: h.__invalid_modalRoot,
            "aria-labelledby": y,
            children: [
              (0, s.jsx)(b.Z, {}),
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
                  Z
                    ? (0, s.jsx)(r.ModalCloseButton, {
                        className: h.modalCloseButton,
                        onClick: N,
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
                        children: (0, s.jsx)(E.Z, {
                          options: k,
                          onClick: function (e) {
                            let { value: t } = e;
                            O(t), !C.includes(t) && N();
                          },
                        }),
                      }),
                  Y
                    ? (0, s.jsxs)(r.FormItem, {
                        title: x.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: h.problemInfo,
                        children: [
                          (0, s.jsx)(r.TextArea, {
                            value: R,
                            maxLength: M.iF,
                            onChange: F,
                          }),
                          B ? (0, s.jsx)(p, {}) : null,
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
                                O(null), F("");
                              },
                              children: x.Z.Messages.BACK,
                            }),
                            (0, s.jsx)(r.Button, {
                              size: r.Button.Sizes.SMALL,
                              onClick: N,
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
    924400: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var s = n(626135),
        o = n(981631);
      function a(e, t, n, a) {
        s.default.track(o.rMx.DM_MUTE_FEEDBACK_SUBMITTED, {
          reason: e,
          feedback: t,
          skipped: n,
          dont_show_again: a,
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
        E = n(924400),
        b = n(987562),
        f = n(981631),
        m = n(689938);
      let M = [b.Y.OTHER];
      function x(e) {
        let { transitionState: t, onClose: x, channel: h } = e,
          p = (0, a.Z)(b.T),
          C = (0, l.e7)([d.default], () =>
            d.default.getUser(h.getRecipientId()),
          );
        return (
          o.useEffect(() => {
            _.default.track(f.rMx.OPEN_MODAL, {
              type: "DM Mute Feedback Modal",
            });
          }, []),
          (0, s.jsx)(u.Z, {
            hasCloseButton: !0,
            header: m.Z.Messages.MUTE_FEEDBACK_HEADER,
            body: m.Z.Messages.MUTE_FEEDBACK_BODY.format({
              username: null == C ? void 0 : C.username,
            }),
            problems: p,
            feedbackProblems: M,
            onSubmit: function (e) {
              let { problem: t, dontShowAgain: o, feedback: a } = e;
              o && (0, c.EW)(r.z.USER_DM_MUTE_FEEDBACK);
              let l = null == t;
              (0, E.Z)(t, a, l, o),
                !l &&
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
            onClose: x,
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
//# sourceMappingURL=ad59fc1baf500e65e1da.js.map
