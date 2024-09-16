"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72135"],
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
          return s;
        },
      }),
        n(653041);
      var a = n(392711),
        o = n.n(a);
      let s = (e, t) => {
        let n = o().shuffle(e),
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
          return j;
        },
        Z: function () {
          return O;
        },
      }),
        n(47120);
      var a = n(735250),
        o = n(470079),
        s = n(120356),
        l = n.n(s),
        r = n(392711),
        i = n.n(r),
        c = n(481060),
        u = n(110924),
        d = n(600164),
        _ = n(313201),
        b = n(237617),
        f = n(572539),
        m = n(626135),
        E = n(63063),
        h = n(957115),
        p = n(871364),
        x = n(531578),
        g = n(981631),
        C = n(689938),
        N = n(214859);
      let A = [
        {
          className: N.emojiSad,
          rating: x.aZ.BAD,
          classNameSelected: N.selected,
        },
        {
          className: N.emojiNeutral,
          rating: x.aZ.NEUTRAL,
          classNameSelected: N.selected,
        },
        {
          className: N.emojiHappy,
          rating: x.aZ.GOOD,
          classNameSelected: N.selected,
        },
      ];
      function j(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: o,
          onChangeRating: s,
        } = e;
        return (0, a.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: l()(N.ratingsSelector, t),
          children: (null != o ? o : A).map((e) => {
            let { rating: t, className: o, classNameSelected: r } = e;
            return (0, a.jsx)(
              c.Clickable,
              {
                onClick: () => s(t),
                "aria-label": t,
                children: (0, a.jsx)("div", {
                  className: l()(o, n === t ? r : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function I() {
        return (0, a.jsx)(c.Text, {
          className: N.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: C.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: E.Z.getSubmitRequestURL(),
          }),
        });
      }
      function O(e) {
        let {
            modalType: t,
            header: n,
            body: s,
            problemTitle: r,
            problems: E,
            transitionState: A,
            ratingConfigs: O,
            feedbackProblems: Z = [],
            otherKey: k,
            ratingsSelectorClassName: B,
            hideDontShowCheckbox: S,
            startRating: L = null,
            onSubmit: M,
            onClose: D,
          } = e,
          R = (0, u.Z)(E),
          [T, v] = o.useState(!1),
          [F, y] = o.useState(L),
          [K, P] = o.useState(null),
          [H, w] = o.useState(i().shuffle(E)),
          [U, G] = o.useState(""),
          z = (0, _.Dt)(),
          W = (0, b.Z)(F),
          q = (0, b.Z)(T),
          V = (0, b.Z)(K),
          J = (0, b.Z)(M),
          Y = (0, b.Z)(U),
          Q = null != K && Z.includes(K),
          { renderSkipButton: X } = p.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          o.useEffect(() => {
            !i().isEqual(R, E) && w((0, h.B)(E, k));
          }, [E, R, k]),
          o.useEffect(
            () => (
              m.default.track(g.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                J.current({
                  rating: W.current,
                  problem: V.current,
                  dontShowAgain: q.current,
                  feedback: Y.current,
                });
              }
            ),
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: A,
            className: N.__invalid_modalRoot,
            "aria-labelledby": z,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: N.headerContainer,
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
                    className: N.ratingBody,
                    children: s,
                  }),
                  Q
                    ? null
                    : (0, a.jsx)(j, {
                        className: l()(N.emojis, B),
                        selectedRating: F,
                        onChangeRating: function (e) {
                          y(e), e === x.aZ.GOOD && D();
                        },
                        ratingConfigs: O,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: N.__invalid_content,
                children: [
                  null == F || F === x.aZ.GOOD || Q
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: r,
                        className: N.problemInfo,
                        children: (0, a.jsx)(f.Z, {
                          options: H,
                          onClick: function (e) {
                            let { value: t } = e;
                            P(t), !Z.includes(t) && D();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !Z.includes(t);
                          },
                        }),
                      }),
                  Q
                    ? (0, a.jsxs)(c.FormItem, {
                        title: C.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: N.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: U,
                            maxLength: x.iF,
                            onChange: G,
                          }),
                          (0, a.jsx)(I, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (Q || !S) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: N.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: Q
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              P(null), G("");
                            },
                            children: C.Z.Messages.BACK,
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: D,
                            children: C.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: T,
                            onChange: () => v(!T),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: C.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          X &&
                            null != F &&
                            F !== x.aZ.GOOD &&
                            (0, a.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: D,
                              children: C.Z.Messages.SKIP,
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
      var o = n(120356),
        s = n.n(o),
        l = n(481060),
        r = n(259580),
        i = n(20535);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: o,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, a.jsx)("div", {
          className: s()(i.root, o),
          children: t.map((e, t) =>
            (0, a.jsxs)(
              l.Clickable,
              {
                onClick: () => n(e),
                className: s()(i.option, c),
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
        o,
        s = n(689938);
      function l() {
        return [
          {
            label: s.Z.Messages.IAR_FEEDBACK_PROBLEM_COULD_NOT_FIND,
            code: 2,
            value: "I couldn't find what I was looking for",
          },
          {
            label: s.Z.Messages.IAR_FEEDBACK_PROBLEM_CONFUSING_LANGUAGE,
            code: 3,
            value: "I found the language confusing",
          },
          {
            label: s.Z.Messages.CALL_FEEDBACK_OPTION_OTHER,
            code: 1,
            value: "Other",
          },
        ];
      }
      ((a = o || (o = {})).COULD_NOT_FIND =
        "I couldn't find what I was looking for"),
        (a.CONFUSING_LANGUAGE = "I found the language confusing"),
        (a.OTHER = "Other");
    },
    559187: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(626135),
        o = n(981631);
      function s(e) {
        let {
          problem: t,
          feedback: n,
          reportType: s,
          reportId: l = null,
          rating: r = null,
          dontShowAgain: i,
        } = e;
        a.default.track(o.rMx.IAR_FEEDBACK_SUBMITTED, {
          reason: t,
          report_type: s,
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
        o = n(470079),
        s = n(481060),
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
          o.useEffect(() => {
            u.default.track(b.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
              report_id: t,
              report_type: l,
            });
          }, [t, l]),
          (0, a.jsx)(i.Z, {
            modalType: "in_app_report",
            header: m.Z.Messages.IAR_FEEDBACK_TITLE,
            body: m.Z.Messages.IAR_FEEDBACK_PROMPT,
            problemTitle: m.Z.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
            problems: (0, d.Z)(),
            feedbackProblems: E,
            onSubmit: function (e) {
              let { rating: o, problem: r, dontShowAgain: i, feedback: u } = e;
              if (
                (i && (0, c.Kw)(f.v.IN_APP_REPORTS_FEEDBACK),
                (0, _.Z)({
                  rating: o,
                  problem: r,
                  feedback: u,
                  reportId: t,
                  reportType: l,
                  dontShowAgain: i,
                }),
                null != o && null != r)
              )
                (0, s.openModalLazy)(async () => {
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
//# sourceMappingURL=e403af6ad22d65645cc5.js.map
