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
    957115: function (e, t, s) {
      s.d(t, {
        B: function () {
          return o;
        },
      }),
        s(653041);
      var n = s(392711),
        a = s.n(n);
      let o = (e, t) => {
        let s = a().shuffle(e),
          n = s.findIndex((e) => e.value === t);
        if (n > -1) {
          let e = s[n];
          s.splice(n, 1), s.push(e);
        }
        return s;
      };
    },
    332664: function (e, t, s) {
      s.d(t, {
        L: function () {
          return S;
        },
        Z: function () {
          return E;
        },
      }),
        s(47120);
      var n = s(735250),
        a = s(470079),
        o = s(120356),
        l = s.n(o),
        i = s(392711),
        r = s.n(i),
        c = s(481060),
        d = s(110924),
        u = s(600164),
        m = s(313201),
        b = s(237617),
        f = s(572539),
        h = s(63063),
        x = s(957115),
        j = s(531578),
        _ = s(689938),
        g = s(940256);
      let p = [
        {
          className: g.emojiSad,
          rating: j.aZ.BAD,
          classNameSelected: g.selected,
        },
        {
          className: g.emojiNeutral,
          rating: j.aZ.NEUTRAL,
          classNameSelected: g.selected,
        },
        {
          className: g.emojiHappy,
          rating: j.aZ.GOOD,
          classNameSelected: g.selected,
        },
      ];
      function S(e) {
        let {
          className: t,
          selectedRating: s,
          ratingConfigs: a,
          onChangeRating: o,
        } = e;
        return (0, n.jsx)(u.Z, {
          justify: u.Z.Justify.BETWEEN,
          align: u.Z.Align.CENTER,
          className: l()(g.ratingsSelector, t),
          children: (null != a ? a : p).map((e) => {
            let { rating: t, className: a, classNameSelected: i } = e;
            return (0, n.jsx)(
              c.Clickable,
              {
                onClick: () => o(t),
                "aria-label": t,
                children: (0, n.jsx)("div", {
                  className: l()(a, s === t ? i : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function N() {
        return (0, n.jsx)(c.Text, {
          className: g.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: _.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: h.Z.getSubmitRequestURL(),
          }),
        });
      }
      function E(e) {
        let {
            header: t,
            body: s,
            problemTitle: o,
            problems: i,
            transitionState: h,
            ratingConfigs: p,
            feedbackProblems: E = [],
            otherKey: C,
            ratingsSelectorClassName: Z,
            hideDontShowCheckbox: B,
            startRating: R = null,
            onSubmit: k,
            onClose: T,
          } = e,
          v = (0, d.Z)(i),
          [D, M] = a.useState(!1),
          [A, I] = a.useState(R),
          [L, O] = a.useState(null),
          [y, H] = a.useState(r().shuffle(i)),
          [U, F] = a.useState(""),
          K = (0, m.Dt)(),
          w = (0, b.Z)(A),
          G = (0, b.Z)(D),
          z = (0, b.Z)(L),
          P = (0, b.Z)(k),
          q = (0, b.Z)(U),
          W = null != L && E.includes(L);
        return (
          a.useEffect(() => {
            !r().isEqual(v, i) && H((0, x.B)(i, C));
          }, [i, v, C]),
          a.useEffect(
            () => () => {
              P.current({
                rating: w.current,
                problem: z.current,
                dontShowAgain: G.current,
                feedback: q.current,
              });
            },
            [],
          ),
          (0, n.jsxs)(c.ModalRoot, {
            transitionState: h,
            className: g.__invalid_modalRoot,
            "aria-labelledby": K,
            children: [
              (0, n.jsxs)(c.ModalHeader, {
                separator: !1,
                className: g.headerContainer,
                children: [
                  (0, n.jsx)(c.Heading, {
                    id: K,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, n.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: g.ratingBody,
                    children: s,
                  }),
                  W
                    ? null
                    : (0, n.jsx)(S, {
                        className: l()(g.emojis, Z),
                        selectedRating: A,
                        onChangeRating: function (e) {
                          I(e), e === j.aZ.GOOD && T();
                        },
                        ratingConfigs: p,
                      }),
                ],
              }),
              (0, n.jsxs)(c.ModalContent, {
                className: g.__invalid_content,
                children: [
                  null == A || A === j.aZ.GOOD || W
                    ? null
                    : (0, n.jsx)(c.FormItem, {
                        title: o,
                        className: g.problemInfo,
                        children: (0, n.jsx)(f.Z, {
                          options: y,
                          onClick: function (e) {
                            let { value: t } = e;
                            O(t), !E.includes(t) && T();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !E.includes(t);
                          },
                        }),
                      }),
                  W
                    ? (0, n.jsxs)(c.FormItem, {
                        title: _.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: g.problemInfo,
                        children: [
                          (0, n.jsx)(c.TextArea, {
                            value: U,
                            maxLength: j.iF,
                            onChange: F,
                          }),
                          (0, n.jsx)(N, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (W || !B) &&
                (0, n.jsx)(c.ModalFooter, {
                  className: g.footer,
                  direction: u.Z.Direction.HORIZONTAL,
                  children: W
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              O(null), F("");
                            },
                            children: _.Z.Messages.BACK,
                          }),
                          (0, n.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: T,
                            children: _.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, n.jsx)(c.Checkbox, {
                        type: c.Checkbox.Types.INVERTED,
                        size: 18,
                        value: D,
                        onChange: () => M(!D),
                        children: (0, n.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          children: _.Z.Messages.DONT_SHOW_AGAIN,
                        }),
                      }),
                }),
            ],
          })
        );
      }
    },
    572539: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = s(735250);
      s(470079);
      var a = s(120356),
        o = s.n(a),
        l = s(481060),
        i = s(259580),
        r = s(373521);
      function c(e) {
        let {
          options: t,
          onClick: s,
          className: a,
          optionClassName: c,
          hideCaret: d,
        } = e;
        return (0, n.jsx)("div", {
          className: o()(r.root, a),
          children: t.map((e, t) =>
            (0, n.jsxs)(
              l.Clickable,
              {
                onClick: () => s(e),
                className: o()(r.option, c),
                children: [
                  (0, n.jsx)(l.Text, {
                    className: r.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == d ? void 0 : d(e)) &&
                    (0, n.jsx)(i.Z, {
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
    580584: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return d;
          },
        });
      var n = s(735250);
      s(470079);
      var a = s(332664),
        o = s(814249),
        l = s(531578),
        i = s(689938),
        r = s(995335);
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
        let { transitionState: t, startRating: s, onClose: l, onSubmit: d } = e;
        return (0, n.jsx)(a.Z, {
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
          startRating: s,
          hideDontShowCheckbox: !0,
        });
      }
    },
    940256: function (e, t, s) {
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
    373521: function (e, t, s) {
      e.exports = {
        root: "root_c3b890",
        option: "option_c3b890",
        text: "text_c3b890",
        caret: "caret_c3b890",
      };
    },
    995335: function (e, t, s) {
      e.exports = {
        ratingsSelector: "ratingsSelector_c18bf0",
        selected: "selected_c18bf0",
        emojiThumbsDown: "emojiThumbsDown_c18bf0 emoji_c18bf0",
        emojiThumbsUp: "emojiThumbsUp_c18bf0 emoji_c18bf0",
      };
    },
  },
]);
//# sourceMappingURL=486f1da8eec4bbbdfe0d.js.map
