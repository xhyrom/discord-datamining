"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62104"],
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
          return k;
        },
        Z: function () {
          return Z;
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
        m = n(313201),
        b = n(237617),
        f = n(572539),
        h = n(626135),
        x = n(63063),
        p = n(957115),
        j = n(871364),
        g = n(531578),
        _ = n(981631),
        S = n(689938),
        E = n(214859);
      let N = [
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
      function k(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: a,
          onChangeRating: o,
        } = e;
        return (0, s.jsx)(u.Z, {
          justify: u.Z.Justify.BETWEEN,
          align: u.Z.Align.CENTER,
          className: l()(E.ratingsSelector, t),
          children: (null != a ? a : N).map((e) => {
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
      function C() {
        return (0, s.jsx)(c.Text, {
          className: E.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: S.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: x.Z.getSubmitRequestURL(),
          }),
        });
      }
      function Z(e) {
        let {
            modalType: t,
            header: n,
            body: o,
            problemTitle: i,
            problems: x,
            transitionState: N,
            ratingConfigs: Z,
            feedbackProblems: B = [],
            otherKey: M,
            ratingsSelectorClassName: D,
            hideDontShowCheckbox: R,
            startRating: T = null,
            onSubmit: A,
            onClose: v,
          } = e,
          I = (0, d.Z)(x),
          [L, O] = a.useState(!1),
          [y, F] = a.useState(T),
          [H, U] = a.useState(null),
          [w, K] = a.useState(r().shuffle(x)),
          [z, G] = a.useState(""),
          P = (0, m.Dt)(),
          q = (0, b.Z)(y),
          W = (0, b.Z)(L),
          Y = (0, b.Z)(H),
          J = (0, b.Z)(A),
          V = (0, b.Z)(z),
          Q = null != H && B.includes(H),
          { renderSkipButton: X } = j.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          a.useEffect(() => {
            !r().isEqual(I, x) && K((0, p.B)(x, M));
          }, [x, I, M]),
          a.useEffect(
            () => (
              h.default.track(_.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                J.current({
                  rating: q.current,
                  problem: Y.current,
                  dontShowAgain: W.current,
                  feedback: V.current,
                });
              }
            ),
            [],
          ),
          (0, s.jsxs)(c.ModalRoot, {
            transitionState: N,
            className: E.__invalid_modalRoot,
            "aria-labelledby": P,
            children: [
              (0, s.jsxs)(c.ModalHeader, {
                separator: !1,
                className: E.headerContainer,
                children: [
                  (0, s.jsx)(c.Heading, {
                    id: P,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: n,
                  }),
                  (0, s.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: E.ratingBody,
                    children: o,
                  }),
                  Q
                    ? null
                    : (0, s.jsx)(k, {
                        className: l()(E.emojis, D),
                        selectedRating: y,
                        onChangeRating: function (e) {
                          F(e), e === g.aZ.GOOD && v();
                        },
                        ratingConfigs: Z,
                      }),
                ],
              }),
              (0, s.jsxs)(c.ModalContent, {
                className: E.__invalid_content,
                children: [
                  null == y || y === g.aZ.GOOD || Q
                    ? null
                    : (0, s.jsx)(c.FormItem, {
                        title: i,
                        className: E.problemInfo,
                        children: (0, s.jsx)(f.Z, {
                          options: w,
                          onClick: function (e) {
                            let { value: t } = e;
                            U(t), !B.includes(t) && v();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !B.includes(t);
                          },
                        }),
                      }),
                  Q
                    ? (0, s.jsxs)(c.FormItem, {
                        title: S.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: E.problemInfo,
                        children: [
                          (0, s.jsx)(c.TextArea, {
                            value: z,
                            maxLength: g.iF,
                            onChange: G,
                          }),
                          (0, s.jsx)(C, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (Q || !R) &&
                (0, s.jsx)(c.ModalFooter, {
                  className: E.footer,
                  direction: u.Z.Direction.HORIZONTAL,
                  children: Q
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              U(null), G("");
                            },
                            children: S.Z.Messages.BACK,
                          }),
                          (0, s.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: v,
                            children: S.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: L,
                            onChange: () => O(!L),
                            children: (0, s.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: S.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          X &&
                            null != y &&
                            y !== g.aZ.GOOD &&
                            (0, s.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: v,
                              children: S.Z.Messages.SKIP,
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
        r = n(20535);
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
        r = n(443241);
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
          modalType: "summary",
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
    443241: function (e, t, n) {
      e.exports = {
        ratingsSelector: "ratingsSelector_c18bf0",
        selected: "selected_c18bf0",
        emojiThumbsDown: "emojiThumbsDown_c18bf0 emoji_c18bf0",
        emojiThumbsUp: "emojiThumbsUp_c18bf0 emoji_c18bf0",
      };
    },
  },
]);
//# sourceMappingURL=255726372e612d7b14a8.js.map
