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
          return p;
        },
      }),
        n(47120);
      var a = n(735250),
        s = n(470079),
        o = n(120356),
        l = n.n(o),
        r = n(392711),
        i = n.n(r),
        c = n(481060),
        d = n(110924),
        u = n(600164),
        m = n(313201),
        b = n(237617),
        x = n(572539),
        _ = n(63063),
        h = n(957115),
        f = n(531578),
        j = n(689938),
        E = n(940256);
      let g = [
        {
          className: E.emojiSad,
          rating: f.aZ.BAD,
          classNameSelected: E.selected,
        },
        {
          className: E.emojiNeutral,
          rating: f.aZ.NEUTRAL,
          classNameSelected: E.selected,
        },
        {
          className: E.emojiHappy,
          rating: f.aZ.GOOD,
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
          children: (null != s ? s : g).map((e) => {
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
      function S() {
        return (0, a.jsx)(c.Text, {
          className: E.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: j.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: _.Z.getSubmitRequestURL(),
          }),
        });
      }
      function p(e) {
        let {
            header: t,
            body: n,
            problemTitle: o,
            problems: r,
            transitionState: _,
            ratingConfigs: g,
            feedbackProblems: p = [],
            otherKey: T,
            ratingsSelectorClassName: C,
            hideDontShowCheckbox: Z,
            startRating: B = null,
            onSubmit: M,
            onClose: R,
          } = e,
          A = (0, d.Z)(r),
          [v, D] = s.useState(!1),
          [k, I] = s.useState(B),
          [F, y] = s.useState(null),
          [L, O] = s.useState(i().shuffle(r)),
          [U, H] = s.useState(""),
          K = (0, m.Dt)(),
          Y = (0, b.Z)(k),
          w = (0, b.Z)(v),
          z = (0, b.Z)(F),
          G = (0, b.Z)(M),
          P = (0, b.Z)(U),
          q = null != F && p.includes(F);
        return (
          s.useEffect(() => {
            !i().isEqual(A, r) && O((0, h.B)(r, T));
          }, [r, A, T]),
          s.useEffect(
            () => () => {
              G.current({
                rating: Y.current,
                problem: z.current,
                dontShowAgain: w.current,
                feedback: P.current,
              });
            },
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: _,
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
                  q
                    ? null
                    : (0, a.jsx)(N, {
                        className: l()(E.emojis, C),
                        selectedRating: k,
                        onChangeRating: function (e) {
                          I(e), e === f.aZ.GOOD && R();
                        },
                        ratingConfigs: g,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: E.__invalid_content,
                children: [
                  null == k || k === f.aZ.GOOD || q
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: o,
                        className: E.problemInfo,
                        children: (0, a.jsx)(x.Z, {
                          options: L,
                          onClick: function (e) {
                            let { value: t } = e;
                            y(t), !p.includes(t) && R();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !p.includes(t);
                          },
                        }),
                      }),
                  q
                    ? (0, a.jsxs)(c.FormItem, {
                        title: j.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: E.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: U,
                            maxLength: f.iF,
                            onChange: H,
                          }),
                          (0, a.jsx)(S, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (q || !Z) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: E.footer,
                  direction: u.Z.Direction.HORIZONTAL,
                  children: q
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              y(null), H("");
                            },
                            children: j.Z.Messages.BACK,
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: R,
                            children: j.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, a.jsx)(c.Checkbox, {
                        type: c.Checkbox.Types.INVERTED,
                        size: 18,
                        value: v,
                        onChange: () => D(!v),
                        children: (0, a.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          children: j.Z.Messages.DONT_SHOW_AGAIN,
                        }),
                      }),
                }),
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
      var s = n(120356),
        o = n.n(s),
        l = n(481060),
        r = n(259580),
        i = n(373521);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: s,
          optionClassName: c,
          hideCaret: d,
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
                  !(null == d ? void 0 : d(e)) &&
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
        r = n(332664),
        i = n(429506),
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
              children: (0, a.jsx)(r.L, {
                ratingConfigs: b,
                className: m.ratingsSelector,
                selectedRating: t,
                onChangeRating: function (t) {
                  d(t),
                    !(function (t) {
                      if (null != t)
                        (0, i.Z)({ rating: t }),
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
//# sourceMappingURL=6dd0359c8c39385308f1.js.map
