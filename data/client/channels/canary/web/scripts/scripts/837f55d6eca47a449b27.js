"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72135"],
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
          return j;
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
        u = n(110924),
        d = n(600164),
        _ = n(313201),
        b = n(237617),
        f = n(572539),
        m = n(63063),
        E = n(957115),
        h = n(871364),
        x = n(531578),
        p = n(689938),
        g = n(940256);
      let C = [
        {
          className: g.emojiSad,
          rating: x.aZ.BAD,
          classNameSelected: g.selected,
        },
        {
          className: g.emojiNeutral,
          rating: x.aZ.NEUTRAL,
          classNameSelected: g.selected,
        },
        {
          className: g.emojiHappy,
          rating: x.aZ.GOOD,
          classNameSelected: g.selected,
        },
      ];
      function N(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: s,
          onChangeRating: o,
        } = e;
        return (0, a.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: l()(g.ratingsSelector, t),
          children: (null != s ? s : C).map((e) => {
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
      function A() {
        return (0, a.jsx)(c.Text, {
          className: g.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: p.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: m.Z.getSubmitRequestURL(),
          }),
        });
      }
      function j(e) {
        let {
            header: t,
            body: n,
            problemTitle: o,
            problems: r,
            transitionState: m,
            ratingConfigs: C,
            feedbackProblems: j = [],
            otherKey: I,
            ratingsSelectorClassName: Z,
            hideDontShowCheckbox: B,
            startRating: S = null,
            onSubmit: O,
            onClose: k,
          } = e,
          L = (0, u.Z)(r),
          [D, M] = s.useState(!1),
          [R, T] = s.useState(S),
          [v, F] = s.useState(null),
          [y, K] = s.useState(i().shuffle(r)),
          [H, P] = s.useState(""),
          w = (0, _.Dt)(),
          U = (0, b.Z)(R),
          G = (0, b.Z)(D),
          z = (0, b.Z)(v),
          W = (0, b.Z)(O),
          q = (0, b.Z)(H),
          V = null != v && j.includes(v),
          { renderSkipButton: J } = h.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          s.useEffect(() => {
            !i().isEqual(L, r) && K((0, E.B)(r, I));
          }, [r, L, I]),
          s.useEffect(
            () => () => {
              W.current({
                rating: U.current,
                problem: z.current,
                dontShowAgain: G.current,
                feedback: q.current,
              });
            },
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: m,
            className: g.__invalid_modalRoot,
            "aria-labelledby": w,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: g.headerContainer,
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: w,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: g.ratingBody,
                    children: n,
                  }),
                  V
                    ? null
                    : (0, a.jsx)(N, {
                        className: l()(g.emojis, Z),
                        selectedRating: R,
                        onChangeRating: function (e) {
                          T(e), e === x.aZ.GOOD && k();
                        },
                        ratingConfigs: C,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: g.__invalid_content,
                children: [
                  null == R || R === x.aZ.GOOD || V
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: o,
                        className: g.problemInfo,
                        children: (0, a.jsx)(f.Z, {
                          options: y,
                          onClick: function (e) {
                            let { value: t } = e;
                            F(t), !j.includes(t) && k();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !j.includes(t);
                          },
                        }),
                      }),
                  V
                    ? (0, a.jsxs)(c.FormItem, {
                        title: p.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: g.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: H,
                            maxLength: x.iF,
                            onChange: P,
                          }),
                          (0, a.jsx)(A, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (V || !B) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: g.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: V
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              F(null), P("");
                            },
                            children: p.Z.Messages.BACK,
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: k,
                            children: p.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: D,
                            onChange: () => M(!D),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: p.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          J &&
                            null != R &&
                            R !== x.aZ.GOOD &&
                            (0, a.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: k,
                              children: p.Z.Messages.SKIP,
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
        r = n(259580),
        i = n(373521);
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
    798733: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a,
        s,
        o = n(689938);
      function l() {
        return [
          {
            label: o.Z.Messages.IAR_FEEDBACK_PROBLEM_COULD_NOT_FIND,
            code: 2,
            value: "I couldn't find what I was looking for",
          },
          {
            label: o.Z.Messages.IAR_FEEDBACK_PROBLEM_CONFUSING_LANGUAGE,
            code: 3,
            value: "I found the language confusing",
          },
          {
            label: o.Z.Messages.CALL_FEEDBACK_OPTION_OTHER,
            code: 1,
            value: "Other",
          },
        ];
      }
      ((a = s || (s = {})).COULD_NOT_FIND =
        "I couldn't find what I was looking for"),
        (a.CONFUSING_LANGUAGE = "I found the language confusing"),
        (a.OTHER = "Other");
    },
    559187: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(626135),
        s = n(981631);
      function o(e) {
        let {
          problem: t,
          feedback: n,
          reportType: o,
          reportId: l = null,
          rating: r = null,
          dontShowAgain: i,
        } = e;
        a.default.track(s.rMx.IAR_FEEDBACK_SUBMITTED, {
          reason: t,
          report_type: o,
          report_id: l,
          rating: r,
          feedback: n,
          dont_show_again: i,
        });
      }
    },
    442173: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var a = n(735250),
        s = n(470079),
        o = n(481060),
        l = n(375964),
        r = n.n(l),
        i = n(332664),
        c = n(142497),
        u = n(626135),
        d = n(798733),
        _ = n(559187),
        b = n(981631),
        f = n(190378),
        m = n(689938);
      let E = [r().CALL_FEEDBACK_OPTION_OTHER];
      function h(e) {
        let { reportId: t, reportType: l, ...h } = e;
        return (
          s.useEffect(() => {
            u.default.track(b.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
              report_id: t,
              report_type: l,
            });
          }, [t, l]),
          (0, a.jsx)(i.Z, {
            header: m.Z.Messages.IAR_FEEDBACK_TITLE,
            body: m.Z.Messages.IAR_FEEDBACK_PROMPT,
            problemTitle: m.Z.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
            problems: (0, d.Z)(),
            feedbackProblems: E,
            onSubmit: function (e) {
              let { rating: s, problem: r, dontShowAgain: i, feedback: u } = e;
              if (
                (i && (0, c.Kw)(f.v.IN_APP_REPORTS_FEEDBACK),
                (0, _.Z)({
                  rating: s,
                  problem: r,
                  feedback: u,
                  reportId: t,
                  reportType: l,
                  dontShowAgain: i,
                }),
                null != s && null != r)
              )
                (0, o.openModalLazy)(async () => {
                  let { default: e } = await n
                    .e("14466")
                    .then(n.bind(n, 729328));
                  return (t) =>
                    (0, a.jsx)(e, {
                      body: m.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
                      ...t,
                    });
                });
            },
            otherKey: r().CALL_FEEDBACK_OPTION_OTHER,
            ...h,
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
//# sourceMappingURL=837f55d6eca47a449b27.js.map
