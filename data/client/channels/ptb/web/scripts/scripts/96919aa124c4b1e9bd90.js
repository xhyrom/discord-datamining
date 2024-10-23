"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87995"],
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
    332664: function (e, t, n) {
      n.d(t, {
        L: function () {
          return p;
        },
        Z: function () {
          return M;
        },
      }),
        n(47120);
      var a = n(200651),
        s = n(192379),
        o = n(120356),
        l = n.n(o),
        r = n(392711),
        i = n.n(r),
        c = n(481060),
        u = n(110924),
        d = n(600164),
        _ = n(313201),
        E = n(237617),
        b = n(572539),
        m = n(626135),
        f = n(63063),
        N = n(957115),
        C = n(871364),
        S = n(531578),
        O = n(981631),
        h = n(689938),
        A = n(214859);
      let x = [
        {
          className: A.emojiSad,
          rating: S.aZ.BAD,
          classNameSelected: A.selected,
        },
        {
          className: A.emojiNeutral,
          rating: S.aZ.NEUTRAL,
          classNameSelected: A.selected,
        },
        {
          className: A.emojiHappy,
          rating: S.aZ.GOOD,
          classNameSelected: A.selected,
        },
      ];
      function p(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: s,
          onChangeRating: o,
        } = e;
        return (0, a.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: l()(A.ratingsSelector, t),
          children: (null != s ? s : x).map((e) => {
            let { rating: t, className: s, classNameSelected: r } = e;
            return (0, a.jsx)(
              c.Clickable,
              {
                onClick: () => o(t),
                "aria-label": t,
                children: (0, a.jsx)("div", {
                  className: l()(s, n === t ? r : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function g() {
        return (0, a.jsx)(c.Text, {
          className: A.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: h.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: f.Z.getSubmitRequestURL(),
          }),
        });
      }
      function M(e) {
        let {
            modalType: t,
            header: n,
            body: o,
            problemTitle: r,
            problems: f,
            transitionState: x,
            ratingConfigs: M,
            feedbackProblems: T = [],
            otherKey: B,
            ratingsSelectorClassName: j,
            hideDontShowCheckbox: k,
            startRating: Z = null,
            hideHelpDeskLink: I = !1,
            onSubmit: D,
            onClose: L,
          } = e,
          F = (0, u.Z)(f),
          [R, v] = s.useState(!1),
          [K, y] = s.useState(Z),
          [U, H] = s.useState(null),
          [P, G] = s.useState(i().shuffle(f)),
          [w, Y] = s.useState(""),
          z = (0, _.Dt)(),
          W = (0, E.Z)(K),
          V = (0, E.Z)(R),
          q = (0, E.Z)(U),
          J = (0, E.Z)(D),
          Q = (0, E.Z)(w),
          X = null != U && T.includes(U),
          { renderSkipButton: $ } = C.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          s.useEffect(() => {
            !i().isEqual(F, f) && G((0, N.B)(f, B));
          }, [f, F, B]),
          s.useEffect(
            () => (
              m.default.track(O.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                J.current({
                  rating: W.current,
                  problem: q.current,
                  dontShowAgain: V.current,
                  feedback: Q.current,
                });
              }
            ),
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: x,
            className: A.__invalid_modalRoot,
            "aria-labelledby": z,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: A.headerContainer,
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: z,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: A.ratingBody,
                    children: o,
                  }),
                  X
                    ? null
                    : (0, a.jsx)(p, {
                        className: l()(A.emojis, j),
                        selectedRating: K,
                        onChangeRating: function (e) {
                          y(e), e === S.aZ.GOOD && L();
                        },
                        ratingConfigs: M,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: A.__invalid_content,
                children: [
                  null == K || K === S.aZ.GOOD || X
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: r,
                        className: A.problemInfo,
                        children: (0, a.jsx)(b.Z, {
                          options: P,
                          onClick: function (e) {
                            let { value: t } = e;
                            H(t), !T.includes(t) && L();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !T.includes(t);
                          },
                        }),
                      }),
                  X
                    ? (0, a.jsxs)(c.FormItem, {
                        title: h.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: A.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: w,
                            maxLength: S.iF,
                            onChange: Y,
                          }),
                          !I && (0, a.jsx)(g, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (X || !k) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: A.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: X
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              H(null), Y("");
                            },
                            children: h.Z.Messages.BACK,
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: L,
                            children: h.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: R,
                            onChange: () => v(!R),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: h.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          $ &&
                            null != K &&
                            K !== S.aZ.GOOD &&
                            (0, a.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: L,
                              children: h.Z.Messages.SKIP,
                            }),
                        ],
                      }),
                }),
            ],
          })
        );
      }
    },
    871364: function (e, t, n) {
      n.d(t, {
        w: function () {
          return a;
        },
      });
      let a = (0, n(818083).B)({
        kind: "user",
        id: "2024-09_feedbackskipbutton",
        label: "Add a skip button to the feedback modal",
        defaultConfig: { renderSkipButton: !1 },
        treatments: [
          {
            id: 1,
            label: "Show skip button",
            config: { renderSkipButton: !0 },
          },
        ],
      });
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
        l = n(481060),
        r = n(259580),
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
              l.Clickable,
              {
                onClick: () => n(e),
                className: o()(i.option, c),
                children: [
                  (0, a.jsx)(l.Text, {
                    className: i.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
                    (0, a.jsx)(r.Z, {
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
    987562: function (e, t, n) {
      n.d(t, {
        CE: function () {
          return c;
        },
        F5: function () {
          return l;
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
        l,
        r = n(689938);
      function i() {
        return [
          {
            value: "too_many_notifications",
            label: r.Z.Messages.MUTE_FEEDBACK_TOO_MANY_NOTIFICATIONS,
          },
          {
            value: "temporary_break",
            label: r.Z.Messages.MUTE_FEEDBACK_TEMPORARY_BREAK,
          },
          { value: "annoying", label: r.Z.Messages.MUTE_FEEDBACK_ANNOYING },
          { value: "unsafe", label: r.Z.Messages.MUTE_FEEDBACK_UNSAFE },
          { value: "spam", label: r.Z.Messages.MUTE_FEEDBACK_SPAM },
          { value: "other", label: r.Z.Messages.MUTE_FEEDBACK_OTHER },
        ];
      }
      function c() {
        return [
          {
            value: "confusion",
            label: r.Z.Messages.BLOCK_USER_FEEDBACK_OPTION_CONFUSION,
          },
          {
            value: "does_not_achieve_wants",
            label:
              r.Z.Messages.BLOCK_USER_FEEDBACK_OPTION_DOES_NOT_ACHIEVE_WANTS,
          },
          {
            value: "hard_to_access",
            label: r.Z.Messages.BLOCK_USER_FEEDBACK_OPTION_HARD_TO_ACCESS,
          },
          {
            value: "something_else",
            label: r.Z.Messages.BLOCK_USER_FEEDBACK_OPTION_SOMETHING_ELSE,
          },
        ];
      }
      ((a = o || (o = {})).TOO_MANY_NOTIFICATIONS = "too_many_notifications"),
        (a.TEMPORARY_BREAK = "temporary_break"),
        (a.ANNOYING = "annoying"),
        (a.UNSAFE = "unsafe"),
        (a.SPAM = "spam"),
        (a.OTHER = "other"),
        ((s = l || (l = {})).CONFUSION = "confusion"),
        (s.DOES_NOT_ACHIEVE_WANTS = "does_not_achieve_wants"),
        (s.HARD_TO_ACCESS = "hard_to_access"),
        (s.SOMETHING_ELSE = "something_else");
    },
    180970: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return _;
          },
        });
      var a = n(200651),
        s = n(192379),
        o = n(75124),
        l = n(481060),
        r = n(332664),
        i = n(626135),
        c = n(987562),
        u = n(981631),
        d = n(689938);
      function _(e) {
        let { onClose: t, transitionState: _ } = e,
          E = (0, o.Z)(c.CE);
        s.useEffect(() => {
          i.default.track(u.rMx.OPEN_MODAL, { type: "Block User Feedback" });
        }, []);
        let b = s.useCallback((e) => {
          let { rating: t } = e;
          if (null != t)
            (0, l.openModalLazy)(async () => {
              let { default: e } = await n.e("14466").then(n.bind(n, 729328));
              return (t) =>
                (0, a.jsx)(e, {
                  body: d.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
                  ...t,
                });
            });
        }, []);
        return (0, a.jsx)(r.Z, {
          modalType: "block_user",
          header: d.Z.Messages.BLOCK_USER_FEEDBACK_TITLE,
          body: d.Z.Messages.BLOCK_USER_FEEDBACK_BODY,
          problemTitle: d.Z.Messages.BLOCK_USER_FEEDBACK_OPTIONS_HEADER,
          problems: E,
          feedbackProblems: [c.F5.SOMETHING_ELSE],
          onSubmit: b,
          onClose: t,
          transitionState: _,
          otherKey: c.F5.SOMETHING_ELSE,
          hideHelpDeskLink: !0,
        });
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
//# sourceMappingURL=96919aa124c4b1e9bd90.js.map
