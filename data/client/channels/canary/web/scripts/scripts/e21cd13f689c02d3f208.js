"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11495"],
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
          return l;
        },
      }),
        n(653041);
      var a = n(392711),
        s = n.n(a);
      let l = (e, t) => {
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
          return B;
        },
        Z: function () {
          return I;
        },
      }),
        n(47120);
      var a = n(735250),
        s = n(470079),
        l = n(120356),
        o = n.n(l),
        i = n(392711),
        r = n.n(i),
        c = n(481060),
        u = n(110924),
        d = n(600164),
        _ = n(313201),
        E = n(237617),
        C = n(572539),
        b = n(63063),
        O = n(957115),
        N = n(871364),
        m = n(531578),
        D = n(689938),
        f = n(940256);
      let A = [
        {
          className: f.emojiSad,
          rating: m.aZ.BAD,
          classNameSelected: f.selected,
        },
        {
          className: f.emojiNeutral,
          rating: m.aZ.NEUTRAL,
          classNameSelected: f.selected,
        },
        {
          className: f.emojiHappy,
          rating: m.aZ.GOOD,
          classNameSelected: f.selected,
        },
      ];
      function B(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: s,
          onChangeRating: l,
        } = e;
        return (0, a.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: o()(f.ratingsSelector, t),
          children: (null != s ? s : A).map((e) => {
            let { rating: t, className: s, classNameSelected: i } = e;
            return (0, a.jsx)(
              c.Clickable,
              {
                onClick: () => l(t),
                "aria-label": t,
                children: (0, a.jsx)("div", {
                  className: o()(s, n === t ? i : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function x() {
        return (0, a.jsx)(c.Text, {
          className: f.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: D.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: b.Z.getSubmitRequestURL(),
          }),
        });
      }
      function I(e) {
        let {
            header: t,
            body: n,
            problemTitle: l,
            problems: i,
            transitionState: b,
            ratingConfigs: A,
            feedbackProblems: I = [],
            otherKey: h,
            ratingsSelectorClassName: R,
            hideDontShowCheckbox: p,
            startRating: T = null,
            onSubmit: g,
            onClose: j,
          } = e,
          k = (0, u.Z)(i),
          [K, Z] = s.useState(!1),
          [L, S] = s.useState(T),
          [G, U] = s.useState(null),
          [M, v] = s.useState(r().shuffle(i)),
          [F, y] = s.useState(""),
          H = (0, _.Dt)(),
          V = (0, E.Z)(L),
          P = (0, E.Z)(K),
          w = (0, E.Z)(G),
          z = (0, E.Z)(g),
          Y = (0, E.Z)(F),
          q = null != G && I.includes(G),
          { renderSkipButton: W } = N.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          s.useEffect(() => {
            !r().isEqual(k, i) && v((0, O.B)(i, h));
          }, [i, k, h]),
          s.useEffect(
            () => () => {
              z.current({
                rating: V.current,
                problem: w.current,
                dontShowAgain: P.current,
                feedback: Y.current,
              });
            },
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: b,
            className: f.__invalid_modalRoot,
            "aria-labelledby": H,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: f.headerContainer,
                children: [
                  (0, a.jsx)(c.Heading, {
                    id: H,
                    variant: "heading-xl/extrabold",
                    color: "none",
                    children: t,
                  }),
                  (0, a.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "none",
                    className: f.ratingBody,
                    children: n,
                  }),
                  q
                    ? null
                    : (0, a.jsx)(B, {
                        className: o()(f.emojis, R),
                        selectedRating: L,
                        onChangeRating: function (e) {
                          S(e), e === m.aZ.GOOD && j();
                        },
                        ratingConfigs: A,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: f.__invalid_content,
                children: [
                  null == L || L === m.aZ.GOOD || q
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: l,
                        className: f.problemInfo,
                        children: (0, a.jsx)(C.Z, {
                          options: M,
                          onClick: function (e) {
                            let { value: t } = e;
                            U(t), !I.includes(t) && j();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !I.includes(t);
                          },
                        }),
                      }),
                  q
                    ? (0, a.jsxs)(c.FormItem, {
                        title: D.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: f.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: F,
                            maxLength: m.iF,
                            onChange: y,
                          }),
                          (0, a.jsx)(x, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (q || !p) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: f.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: q
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              U(null), y("");
                            },
                            children: D.Z.Messages.BACK,
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: j,
                            children: D.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: K,
                            onChange: () => Z(!K),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: D.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          W &&
                            null != L &&
                            L !== m.aZ.GOOD &&
                            (0, a.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: j,
                              children: D.Z.Messages.SKIP,
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
        l = n.n(s),
        o = n(481060),
        i = n(259580),
        r = n(373521);
      function c(e) {
        let {
          options: t,
          onClick: n,
          className: s,
          optionClassName: c,
          hideCaret: u,
        } = e;
        return (0, a.jsx)("div", {
          className: l()(r.root, s),
          children: t.map((e, t) =>
            (0, a.jsxs)(
              o.Clickable,
              {
                onClick: () => n(e),
                className: l()(r.option, c),
                children: [
                  (0, a.jsx)(o.Text, {
                    className: r.text,
                    color: "none",
                    variant: "text-md/normal",
                    children: e.label,
                  }),
                  !(null == u ? void 0 : u(e)) &&
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
    801320: function (e, t, n) {
      n.r(t),
        n.d(t, {
          VideoBackgroundIssue: function () {
            return s;
          },
          default: function () {
            return b;
          },
        });
      var a,
        s,
        l = n(735250),
        o = n(470079),
        i = n(481060),
        r = n(332664),
        c = n(142497),
        u = n(626135),
        d = n(981631),
        _ = n(190378),
        E = n(689938);
      ((a = s || (s = {})).BAD_OUTLINE = "BAD_OUTLINE"),
        (a.BACKGROUND_DETECTION_ACCURACY = "BACKGROUND_DETECTION_ACCURACY"),
        (a.FLICKERING = "FLICKERING"),
        (a.BACKGROUND_DETECTION_LAG = "BACKGROUND_DETECTION_LAG"),
        (a.OTHER = "OTHER");
      let C = ["OTHER"];
      function b(e) {
        let { analyticsData: t, transitionState: a, onClose: s } = e;
        return (
          o.useEffect(() => {
            u.default.track(d.rMx.OPEN_MODAL, {
              type: "Video Background Feedback",
            });
          }, []),
          (0, l.jsx)(r.Z, {
            header: E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_HEADER,
            body: E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_BODY,
            problemTitle: E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_PROBLEM_TITLE,
            problems: [
              {
                value: "BAD_OUTLINE",
                label:
                  E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BAD_OUTLINE,
              },
              {
                value: "BACKGROUND_DETECTION_ACCURACY",
                label:
                  E.Z.Messages
                    .VIDEO_BACKGROUND_FEEDBACK_OPTION_BACKGROUND_DETECTION_ACCURACY,
              },
              {
                value: "FLICKERING",
                label: E.Z.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_FLICKERING,
              },
              {
                value: "BACKGROUND_DETECTION_LAG",
                label:
                  E.Z.Messages
                    .VIDEO_BACKGROUND_FEEDBACK_OPTION_BACKGROUND_DETECTION_LAG,
              },
              {
                value: "OTHER",
                label: E.Z.Messages.CALL_FEEDBACK_OPTION_OTHER,
              },
            ],
            feedbackProblems: C,
            onSubmit: function (e) {
              var a, s, o, r;
              let { rating: C, problem: b, dontShowAgain: O, feedback: N } = e;
              if ((O && (0, c.Kw)(_.v.VIDEO_BACKGROUND_FEEDBACK), null != C))
                (a = C),
                  (s = b),
                  (o = N),
                  (r = t),
                  u.default.track(d.rMx.VIDEO_BACKGROUND_FEEDBACK, {
                    ...r,
                    reason: s,
                    rating: a,
                    feedback: o,
                  }),
                  null != b &&
                    (0, i.openModalLazy)(async () => {
                      let { default: e } = await n
                        .e("14466")
                        .then(n.bind(n, 729328));
                      return (t) =>
                        (0, l.jsx)(e, {
                          body: E.Z.Messages
                            .VIDEO_BACKGROUND_ISSUE_REPORTED_BODY,
                          ...t,
                        });
                    });
            },
            onClose: s,
            transitionState: a,
            otherKey: "OTHER",
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
//# sourceMappingURL=e21cd13f689c02d3f208.js.map
