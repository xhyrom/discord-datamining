"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62104"],
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
      var s = n(392711),
        a = n.n(s);
      let o = (e, t) => {
        let n = a().shuffle(e),
          s = n.findIndex((e) => e.value === t);
        if (s > -1) {
          let e = n[s];
          n.splice(s, 1), n.push(e);
        }
        return n;
      };
    },
    332664: function (e, t, n) {
      n.d(t, {
        L: function () {
          return E;
        },
        Z: function () {
          return C;
        },
      }),
        n(47120);
      var s = n(735250),
        a = n(470079),
        o = n(120356),
        l = n.n(o),
        i = n(392711),
        r = n.n(i),
        c = n(481060),
        d = n(110924),
        u = n(600164),
        b = n(313201),
        m = n(237617),
        f = n(572539),
        h = n(63063),
        x = n(957115),
        p = n(871364),
        j = n(531578),
        g = n(689938),
        _ = n(940256);
      let S = [
        {
          className: _.emojiSad,
          rating: j.aZ.BAD,
          classNameSelected: _.selected,
        },
        {
          className: _.emojiNeutral,
          rating: j.aZ.NEUTRAL,
          classNameSelected: _.selected,
        },
        {
          className: _.emojiHappy,
          rating: j.aZ.GOOD,
          classNameSelected: _.selected,
        },
      ];
      function E(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: a,
          onChangeRating: o,
        } = e;
        return (0, s.jsx)(u.Z, {
          justify: u.Z.Justify.BETWEEN,
          align: u.Z.Align.CENTER,
          className: l()(_.ratingsSelector, t),
          children: (null != a ? a : S).map((e) => {
            let { rating: t, className: a, classNameSelected: i } = e;
            return (0, s.jsx)(
              c.Clickable,
              {
                onClick: () => o(t),
                "aria-label": t,
                children: (0, s.jsx)("div", {
                  className: l()(a, n === t ? i : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function N() {
        return (0, s.jsx)(c.Text, {
          className: _.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: g.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: h.Z.getSubmitRequestURL(),
          }),
        });
      }
      function C(e) {
        let {
            header: t,
            body: n,
            problemTitle: o,
            problems: i,
            transitionState: h,
            ratingConfigs: S,
            feedbackProblems: C = [],
            otherKey: k,
            ratingsSelectorClassName: Z,
            hideDontShowCheckbox: B,
            startRating: M = null,
            onSubmit: R,
            onClose: D,
          } = e,
          T = (0, d.Z)(i),
          [v, A] = a.useState(!1),
          [I, L] = a.useState(M),
          [O, y] = a.useState(null),
          [F, H] = a.useState(r().shuffle(i)),
          [U, w] = a.useState(""),
          K = (0, b.Dt)(),
          z = (0, m.Z)(I),
          G = (0, m.Z)(v),
          P = (0, m.Z)(O),
          q = (0, m.Z)(R),
          W = (0, m.Z)(U),
          Y = null != O && C.includes(O),
          { renderSkipButton: J } = p.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          a.useEffect(() => {
            !r().isEqual(T, i) && H((0, x.B)(i, k));
          }, [i, T, k]),
          a.useEffect(
            () => () => {
              q.current({
                rating: z.current,
                problem: P.current,
                dontShowAgain: G.current,
                feedback: W.current,
              });
            },
            [],
          ),
          (0, s.jsxs)(c.ModalRoot, {
            transitionState: h,
            className: _.__invalid_modalRoot,
            "aria-labelledby": K,
            children: [
              (0, s.jsxs)(c.ModalHeader, {
                separator: !1,
                className: _.headerContainer,
                children: [
                  (0, s.jsx)(c.Heading, {
                    id: K,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, s.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: _.ratingBody,
                    children: n,
                  }),
                  Y
                    ? null
                    : (0, s.jsx)(E, {
                        className: l()(_.emojis, Z),
                        selectedRating: I,
                        onChangeRating: function (e) {
                          L(e), e === j.aZ.GOOD && D();
                        },
                        ratingConfigs: S,
                      }),
                ],
              }),
              (0, s.jsxs)(c.ModalContent, {
                className: _.__invalid_content,
                children: [
                  null == I || I === j.aZ.GOOD || Y
                    ? null
                    : (0, s.jsx)(c.FormItem, {
                        title: o,
                        className: _.problemInfo,
                        children: (0, s.jsx)(f.Z, {
                          options: F,
                          onClick: function (e) {
                            let { value: t } = e;
                            y(t), !C.includes(t) && D();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !C.includes(t);
                          },
                        }),
                      }),
                  Y
                    ? (0, s.jsxs)(c.FormItem, {
                        title: g.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: _.problemInfo,
                        children: [
                          (0, s.jsx)(c.TextArea, {
                            value: U,
                            maxLength: j.iF,
                            onChange: w,
                          }),
                          (0, s.jsx)(N, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (Y || !B) &&
                (0, s.jsx)(c.ModalFooter, {
                  className: _.footer,
                  direction: u.Z.Direction.HORIZONTAL,
                  children: Y
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              y(null), w("");
                            },
                            children: g.Z.Messages.BACK,
                          }),
                          (0, s.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: D,
                            children: g.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: v,
                            onChange: () => A(!v),
                            children: (0, s.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: g.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          J &&
                            null != I &&
                            I !== j.aZ.GOOD &&
                            (0, s.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: D,
                              children: g.Z.Messages.SKIP,
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
          return s;
        },
      });
      let s = (0, n(818083).B)({
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
      var s = n(735250);
      n(470079);
      var a = n(120356),
        o = n.n(a),
        l = n(481060),
        i = n(259580),
        r = n(373521);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: a,
          optionClassName: c,
          hideCaret: d,
        } = e;
        return (0, s.jsx)("div", {
          className: o()(r.root, a),
          children: t.map((e, t) =>
            (0, s.jsxs)(
              l.Clickable,
              {
                onClick: () => n(e),
                className: o()(r.option, c),
                children: [
                  (0, s.jsx)(l.Text, {
                    className: r.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == d ? void 0 : d(e)) &&
                    (0, s.jsx)(i.Z, {
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
    580584: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var s = n(735250);
      n(470079);
      var a = n(332664),
        o = n(814249),
        l = n(531578),
        i = n(689938),
        r = n(995335);
      let c = [
        {
          className: r.emojiThumbsUp,
          rating: l.aZ.GOOD,
          classNameSelected: r.selected,
        },
        {
          className: r.emojiThumbsDown,
          rating: l.aZ.BAD,
          classNameSelected: r.selected,
        },
      ];
      function d(e) {
        let { transitionState: t, startRating: n, onClose: l, onSubmit: d } = e;
        return (0, s.jsx)(a.Z, {
          header: i.Z.Messages.SUMMARIES_FEEDBACK_HEADER,
          body: i.Z.Messages.SUMMARIES_FEEDBACK_BODY,
          problemTitle: i.Z.Messages.SUMMARIES_FEEDBACK_PROBLEM_TITLE,
          onSubmit: d,
          onClose: l,
          ratingConfigs: c,
          transitionState: t,
          problems: (0, o.iq)(),
          ratingsSelectorClassName: r.ratingsSelector,
          feedbackProblems: [o.R7.OTHER],
          otherKey: o.R7.OTHER,
          startRating: n,
          hideDontShowCheckbox: !0,
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
    995335: function (e, t, n) {
      e.exports = {
        ratingsSelector: "ratingsSelector_c18bf0",
        selected: "selected_c18bf0",
        emojiThumbsDown: "emojiThumbsDown_c18bf0 emoji_c18bf0",
        emojiThumbsUp: "emojiThumbsUp_c18bf0 emoji_c18bf0",
      };
    },
  },
]);
//# sourceMappingURL=79d1aee37ae7ea35731f.js.map
