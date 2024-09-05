"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52432"],
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
    391647: function (e) {
      e.exports = "/assets/c7b2eb49c331a66803a5.svg";
    },
    631108: function (e) {
      e.exports = "/assets/fd2df6a4c15057c0d090.svg";
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
          return N;
        },
        Z: function () {
          return C;
        },
      }),
        n(47120);
      var a = n(735250),
        s = n(470079),
        o = n(120356),
        l = n.n(o),
        i = n(392711),
        r = n.n(i),
        c = n(481060),
        d = n(110924),
        u = n(600164),
        m = n(313201),
        b = n(237617),
        x = n(572539),
        f = n(63063),
        h = n(957115),
        _ = n(871364),
        g = n(531578),
        j = n(689938),
        E = n(940256);
      let S = [
        {
          className: E.emojiSad,
          rating: g.aZ.BAD,
          classNameSelected: E.selected,
        },
        {
          className: E.emojiNeutral,
          rating: g.aZ.NEUTRAL,
          classNameSelected: E.selected,
        },
        {
          className: E.emojiHappy,
          rating: g.aZ.GOOD,
          classNameSelected: E.selected,
        },
      ];
      function N(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: s,
          onChangeRating: o,
        } = e;
        return (0, a.jsx)(u.Z, {
          justify: u.Z.Justify.BETWEEN,
          align: u.Z.Align.CENTER,
          className: l()(E.ratingsSelector, t),
          children: (null != s ? s : S).map((e) => {
            let { rating: t, className: s, classNameSelected: i } = e;
            return (0, a.jsx)(
              c.Clickable,
              {
                onClick: () => o(t),
                "aria-label": t,
                children: (0, a.jsx)("div", {
                  className: l()(s, n === t ? i : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function p() {
        return (0, a.jsx)(c.Text, {
          className: E.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: j.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: f.Z.getSubmitRequestURL(),
          }),
        });
      }
      function C(e) {
        let {
            header: t,
            body: n,
            problemTitle: o,
            problems: i,
            transitionState: f,
            ratingConfigs: S,
            feedbackProblems: C = [],
            otherKey: T,
            ratingsSelectorClassName: B,
            hideDontShowCheckbox: Z,
            startRating: M = null,
            onSubmit: k,
            onClose: A,
          } = e,
          R = (0, d.Z)(i),
          [v, D] = s.useState(!1),
          [F, I] = s.useState(M),
          [y, L] = s.useState(null),
          [O, U] = s.useState(r().shuffle(i)),
          [H, w] = s.useState(""),
          K = (0, m.Dt)(),
          z = (0, b.Z)(F),
          Y = (0, b.Z)(v),
          G = (0, b.Z)(y),
          P = (0, b.Z)(k),
          q = (0, b.Z)(H),
          W = null != y && C.includes(y),
          { renderSkipButton: J } = _.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          s.useEffect(() => {
            !r().isEqual(R, i) && U((0, h.B)(i, T));
          }, [i, R, T]),
          s.useEffect(
            () => () => {
              P.current({
                rating: z.current,
                problem: G.current,
                dontShowAgain: Y.current,
                feedback: q.current,
              });
            },
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: f,
            className: E.__invalid_modalRoot,
            "aria-labelledby": K,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: E.headerContainer,
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: K,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: E.ratingBody,
                    children: n,
                  }),
                  W
                    ? null
                    : (0, a.jsx)(N, {
                        className: l()(E.emojis, B),
                        selectedRating: F,
                        onChangeRating: function (e) {
                          I(e), e === g.aZ.GOOD && A();
                        },
                        ratingConfigs: S,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: E.__invalid_content,
                children: [
                  null == F || F === g.aZ.GOOD || W
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: o,
                        className: E.problemInfo,
                        children: (0, a.jsx)(x.Z, {
                          options: O,
                          onClick: function (e) {
                            let { value: t } = e;
                            L(t), !C.includes(t) && A();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !C.includes(t);
                          },
                        }),
                      }),
                  W
                    ? (0, a.jsxs)(c.FormItem, {
                        title: j.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: E.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: H,
                            maxLength: g.iF,
                            onChange: w,
                          }),
                          (0, a.jsx)(p, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (W || !Z) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: E.footer,
                  direction: u.Z.Direction.HORIZONTAL,
                  children: W
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              L(null), w("");
                            },
                            children: j.Z.Messages.BACK,
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: A,
                            children: j.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: v,
                            onChange: () => D(!v),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: j.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          J &&
                            null != F &&
                            F !== g.aZ.GOOD &&
                            (0, a.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: A,
                              children: j.Z.Messages.SKIP,
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
      var a = n(735250);
      n(470079);
      var s = n(120356),
        o = n.n(s),
        l = n(481060),
        i = n(259580),
        r = n(373521);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: s,
          optionClassName: c,
          hideCaret: d,
        } = e;
        return (0, a.jsx)("div", {
          className: o()(r.root, s),
          children: t.map((e, t) =>
            (0, a.jsxs)(
              l.Clickable,
              {
                onClick: () => n(e),
                className: o()(r.option, c),
                children: [
                  (0, a.jsx)(l.Text, {
                    className: r.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == d ? void 0 : d(e)) &&
                    (0, a.jsx)(i.Z, {
                      className: r.caret,
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
    429506: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(626135),
        s = n(981631);
      function o(e) {
        let { rating: t = null } = e;
        a.default.track(s.rMx.SAFETY_USER_SENTIMENT_FEEDBACK_SUBMITTED, {
          rating: t,
        });
      }
    },
    349994: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        }),
        n(47120);
      var a = n(735250),
        s = n(470079),
        o = n(481060),
        l = n(313201),
        i = n(332664),
        r = n(429506),
        c = n(981631),
        d = n(531578),
        u = n(689938),
        m = n(551315);
      let b = [
        {
          className: m.emojiThumbsUp,
          rating: d.aZ.GOOD,
          classNameSelected: m.selected,
        },
        {
          className: m.emojiThumbsDown,
          rating: d.aZ.BAD,
          classNameSelected: m.selected,
        },
      ];
      function x(e) {
        let [t, d] = s.useState(null),
          x = (0, l.Dt)();
        return (0, a.jsxs)(o.ModalRoot, {
          transitionState: e.transitionState,
          "aria-labelledby": x,
          children: [
            (0, a.jsxs)(o.ModalHeader, {
              separator: !1,
              className: m.headerContainer,
              children: [
                (0, a.jsx)(o.Heading, {
                  id: x,
                  variant: "heading-xl/extrabold",
                  color: "none",
                  children: u.Z.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_PROMPT,
                }),
                (0, a.jsx)(o.Text, {
                  variant: "text-md/normal",
                  className: m.ratingBody,
                  children:
                    u.Z.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_SUBHEADER,
                }),
              ],
            }),
            (0, a.jsx)(o.ModalContent, {
              className: m.modalBody,
              children: (0, a.jsx)(i.L, {
                ratingConfigs: b,
                className: m.ratingsSelector,
                selectedRating: t,
                onChangeRating: function (t) {
                  d(t),
                    !(function (t) {
                      if (null != t)
                        (0, r.Z)({ rating: t }),
                          e.onClose(),
                          (0, o.openModalLazy)(async () => {
                            let { default: e } = await n
                              .e("14466")
                              .then(n.bind(n, 729328));
                            return (t) =>
                              (0, a.jsx)(e, {
                                body: u.Z.Messages
                                  .SAFETY_USER_SENTIMENT_FEEDBACK_CONFIRMATION,
                                ...t,
                              });
                          });
                    })(t);
                },
              }),
            }),
            (0, a.jsx)(o.ModalFooter, {
              className: m.ratingsFooter,
              children: (0, a.jsx)(o.Text, {
                variant: "text-md/normal",
                children: u.Z.Messages.SAFETY_USER_SENTIMENT_FOOTER.format({
                  safetyCenterUrl: c.EYA.SAFETY_CENTER,
                }),
              }),
            }),
          ],
        });
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
    551315: function (e, t, n) {
      e.exports = {
        headerContainer: "headerContainer_dc57e2",
        ratingBody: "ratingBody_dc57e2",
        ratingsFooter: "ratingsFooter_dc57e2",
        modalBody: "modalBody_dc57e2",
        ratingsSelector: "ratingsSelector_dc57e2",
        selected: "selected_dc57e2",
        emojiThumbsDown: "emojiThumbsDown_dc57e2 emoji_dc57e2",
        emojiThumbsUp: "emojiThumbsUp_dc57e2 emoji_dc57e2",
      };
    },
  },
]);
//# sourceMappingURL=2370c3ba19684d2392c2.js.map
