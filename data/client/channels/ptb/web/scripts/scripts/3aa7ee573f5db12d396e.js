"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11495"],
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
          return I;
        },
        Z: function () {
          return R;
        },
      }),
        n(47120);
      var a = n(200651),
        s = n(192379),
        l = n(120356),
        o = n.n(l),
        r = n(392711),
        i = n.n(r),
        c = n(481060),
        u = n(110924),
        d = n(600164),
        _ = n(313201),
        E = n(237617),
        b = n(572539),
        C = n(626135),
        O = n(63063),
        N = n(957115),
        m = n(871364),
        D = n(531578),
        f = n(981631),
        A = n(689938),
        B = n(214859);
      let x = [
        {
          className: B.emojiSad,
          rating: D.aZ.BAD,
          classNameSelected: B.selected,
        },
        {
          className: B.emojiNeutral,
          rating: D.aZ.NEUTRAL,
          classNameSelected: B.selected,
        },
        {
          className: B.emojiHappy,
          rating: D.aZ.GOOD,
          classNameSelected: B.selected,
        },
      ];
      function I(e) {
        let {
          className: t,
          selectedRating: n,
          ratingConfigs: s,
          onChangeRating: l,
        } = e;
        return (0, a.jsx)(d.Z, {
          justify: d.Z.Justify.BETWEEN,
          align: d.Z.Align.CENTER,
          className: o()(B.ratingsSelector, t),
          children: (null != s ? s : x).map((e) => {
            let { rating: t, className: s, classNameSelected: r } = e;
            return (0, a.jsx)(
              c.Clickable,
              {
                onClick: () => l(t),
                "aria-label": t,
                children: (0, a.jsx)("div", {
                  className: o()(s, n === t ? r : null),
                }),
              },
              t,
            );
          }),
        });
      }
      function h() {
        return (0, a.jsx)(c.Text, {
          className: B.helpdeskLink,
          variant: "text-xs/normal",
          color: "text-muted",
          children: A.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({
            helpdeskURL: O.Z.getSubmitRequestURL(),
          }),
        });
      }
      function R(e) {
        let {
            modalType: t,
            header: n,
            body: l,
            problemTitle: r,
            problems: O,
            transitionState: x,
            ratingConfigs: R,
            feedbackProblems: p = [],
            otherKey: T,
            ratingsSelectorClassName: g,
            hideDontShowCheckbox: j,
            startRating: k = null,
            hideHelpDeskLink: K = !1,
            onSubmit: Z,
            onClose: L,
          } = e,
          S = (0, u.Z)(O),
          [M, G] = s.useState(!1),
          [U, v] = s.useState(k),
          [F, y] = s.useState(null),
          [H, P] = s.useState(i().shuffle(O)),
          [V, w] = s.useState(""),
          z = (0, _.Dt)(),
          Y = (0, E.Z)(U),
          q = (0, E.Z)(M),
          W = (0, E.Z)(F),
          J = (0, E.Z)(Z),
          Q = (0, E.Z)(V),
          X = null != F && p.includes(F),
          { renderSkipButton: $ } = m.w.useExperiment({
            location: "FeedbackModal",
          });
        return (
          s.useEffect(() => {
            !i().isEqual(S, O) && P((0, N.B)(O, T));
          }, [O, S, T]),
          s.useEffect(
            () => (
              C.default.track(f.rMx.OPEN_MODAL, {
                type: t,
                source: "Feedback Modal",
              }),
              () => {
                J.current({
                  rating: Y.current,
                  problem: W.current,
                  dontShowAgain: q.current,
                  feedback: Q.current,
                });
              }
            ),
            [],
          ),
          (0, a.jsxs)(c.ModalRoot, {
            transitionState: x,
            className: B.__invalid_modalRoot,
            "aria-labelledby": z,
            children: [
              (0, a.jsxs)(c.ModalHeader, {
                separator: !1,
                className: B.headerContainer,
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
                    className: B.ratingBody,
                    children: l,
                  }),
                  X
                    ? null
                    : (0, a.jsx)(I, {
                        className: o()(B.emojis, g),
                        selectedRating: U,
                        onChangeRating: function (e) {
                          v(e), e === D.aZ.GOOD && L();
                        },
                        ratingConfigs: R,
                      }),
                ],
              }),
              (0, a.jsxs)(c.ModalContent, {
                className: B.__invalid_content,
                children: [
                  null == U || U === D.aZ.GOOD || X
                    ? null
                    : (0, a.jsx)(c.FormItem, {
                        title: r,
                        className: B.problemInfo,
                        children: (0, a.jsx)(b.Z, {
                          options: H,
                          onClick: function (e) {
                            let { value: t } = e;
                            y(t), !p.includes(t) && L();
                          },
                          hideCaret: (e) => {
                            let { value: t } = e;
                            return !p.includes(t);
                          },
                        }),
                      }),
                  X
                    ? (0, a.jsxs)(c.FormItem, {
                        title: A.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
                        className: B.problemInfo,
                        children: [
                          (0, a.jsx)(c.TextArea, {
                            value: V,
                            maxLength: D.iF,
                            onChange: w,
                          }),
                          !K && (0, a.jsx)(h, {}),
                        ],
                      })
                    : null,
                ],
              }),
              (X || !j) &&
                (0, a.jsx)(c.ModalFooter, {
                  className: B.footer,
                  direction: d.Z.Direction.HORIZONTAL,
                  children: X
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            onClick: () => {
                              y(null), w("");
                            },
                            children: A.Z.Messages.BACK,
                          }),
                          (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: L,
                            children: A.Z.Messages.SUBMIT,
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(c.Checkbox, {
                            type: c.Checkbox.Types.INVERTED,
                            size: 18,
                            value: M,
                            onChange: () => G(!M),
                            children: (0, a.jsx)(c.Text, {
                              variant: "text-sm/normal",
                              children: A.Z.Messages.DONT_SHOW_AGAIN,
                            }),
                          }),
                          $ &&
                            null != U &&
                            U !== D.aZ.GOOD &&
                            (0, a.jsx)(c.Button, {
                              type: "submit",
                              size: c.Button.Sizes.SMALL,
                              onClick: L,
                              children: A.Z.Messages.SKIP,
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
        l = n.n(s),
        o = n(481060),
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
          className: l()(i.root, s),
          children: t.map((e, t) =>
            (0, a.jsxs)(
              o.Clickable,
              {
                onClick: () => n(e),
                className: l()(i.option, c),
                children: [
                  (0, a.jsx)(o.Text, {
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
    801320: function (e, t, n) {
      n.r(t),
        n.d(t, {
          VideoBackgroundIssue: function () {
            return s;
          },
          default: function () {
            return C;
          },
        });
      var a,
        s,
        l = n(200651),
        o = n(192379),
        r = n(481060),
        i = n(332664),
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
      let b = ["OTHER"];
      function C(e) {
        let { analyticsData: t, transitionState: a, onClose: s } = e;
        return (
          o.useEffect(() => {
            u.default.track(d.rMx.OPEN_MODAL, {
              type: "Video Background Feedback",
            });
          }, []),
          (0, l.jsx)(i.Z, {
            modalType: "video_background",
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
            feedbackProblems: b,
            onSubmit: function (e) {
              var a, s, o, i;
              let { rating: b, problem: C, dontShowAgain: O, feedback: N } = e;
              if ((O && (0, c.Kw)(_.v.VIDEO_BACKGROUND_FEEDBACK), null != b))
                (a = b),
                  (s = C),
                  (o = N),
                  (i = t),
                  u.default.track(d.rMx.VIDEO_BACKGROUND_FEEDBACK, {
                    ...i,
                    reason: s,
                    rating: a,
                    feedback: o,
                  }),
                  null != C &&
                    (0, r.openModalLazy)(async () => {
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
//# sourceMappingURL=3aa7ee573f5db12d396e.js.map
