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
          return g;
        },
        Z: function () {
          return A;
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
        h = n(531578),
        x = n(689938),
        C = n(940256);
      let N = [
        {
          className: C.emojiSad,
          rating: h.aZ.BAD,
          classNameSelected: C.selected,
        },
        {
          className: C.emojiNeutral,
          rating: h.aZ.NEUTRAL,
          classNameSelected: C.selected,
        },
        {
          className: C.emojiHappy,
          rating: h.aZ.GOOD,
          classNameSelected: C.selected,
        },
      ];
      function g(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: s,
          onChangeRating: o,
        } = e;
        return (0, a.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: l()(C.ratingsSelector, t),
          children: (null != s ? s : N).map((e) => {
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
      function p() {
        return (0, a.jsx)(c.Text, {
          className: C.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: x.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: m.Z.getSubmitRequestURL(),
          }),
        });
      }
      function A(e) {
        let {
            header: t,
            body: n,
            problemTitle: o,
            problems: r,
            transitionState: m,
            ratingConfigs: N,
            feedbackProblems: A = [],
            otherKey: j,
            ratingsSelectorClassName: I,
            hideDontShowCheckbox: Z,
            startRating: O = null,
            onSubmit: B,
            onClose: L,
          } = e,
          S = (0, u.Z)(r),
          [D, R] = s.useState(!1),
          [T, M] = s.useState(O),
          [k, v] = s.useState(null),
          [F, y] = s.useState(i().shuffle(r)),
          [K, H] = s.useState(""),
          P = (0, _.Dt)(),
          U = (0, b.Z)(T),
          G = (0, b.Z)(D),
          w = (0, b.Z)(k),
          z = (0, b.Z)(B),
          W = (0, b.Z)(K),
          q = null != k && A.includes(k);
        return (
          s.useEffect(() => {
            !i().isEqual(S, r) && y((0, E.B)(r, j));
          }, [r, S, j]),
          s.useEffect(
            () => () => {
              z.current({
                rating: U.current,
                problem: w.current,
                dontShowAgain: G.current,
                feedback: W.current,
              });
            },
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: m,
            className: C.__invalid_modalRoot,
            "aria-labelledby": P,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: C.headerContainer,
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: P,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: C.ratingBody,
                    children: n,
                  }),
                  q
                    ? null
                    : (0, a.jsx)(g, {
                        className: l()(C.emojis, I),
                        selectedRating: T,
                        onChangeRating: function (e) {
                          M(e), e === h.aZ.GOOD && L();
                        },
                        ratingConfigs: N,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: C.__invalid_content,
                children: [
                  null == T || T === h.aZ.GOOD || q
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: o,
                        className: C.problemInfo,
                        children: (0, a.jsx)(f.Z, {
                          options: F,
                          onClick: function (e) {
                            let { value: t } = e;
                            v(t), !A.includes(t) && L();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !A.includes(t);
                          },
                        }),
                      }),
                  q
                    ? (0, a.jsxs)(c.FormItem, {
                        title: x.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: C.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: K,
                            maxLength: h.iF,
                            onChange: H,
                          }),
                          (0, a.jsx)(p, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (q || !Z) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: C.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: q
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              v(null), H("");
                            },
                            children: x.Z.Messages.BACK,
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: L,
                            children: x.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, a.jsx)(c.Checkbox, {
                        type: c.Checkbox.Types.INVERTED,
                        size: 18,
                        value: D,
                        onChange: () => R(!D),
                        children: (0, a.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          children: x.Z.Messages.DONT_SHOW_AGAIN,
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
//# sourceMappingURL=97a4e6908afb1ac2f14b.js.map
